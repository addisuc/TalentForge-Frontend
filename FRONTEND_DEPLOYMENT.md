# TalentForge Frontend Deployment

**Cost: $0.50/month** (Route 53 only)

## Architecture
```
CloudFront CDN → S3 Static Website
```

## Quick Deploy

### 1. Build Production
```bash
ng build --configuration production
```

### 2. Create S3 Bucket
```bash
BUCKET_NAME="talentforge-frontend-$(date +%s)"

aws s3 mb s3://$BUCKET_NAME
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html
```

### 3. Set Bucket Policy
```bash
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
```

### 4. Upload Files
```bash
# Upload with caching
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --cache-control "public,max-age=31536000" \
    --exclude "*.html"

# Upload HTML without caching
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --cache-control "no-cache" \
    --include "*.html"
```

### 5. Create CloudFront Distribution
```bash
aws cloudfront create-distribution \
    --distribution-config '{
        "CallerReference": "'$(date +%s)'",
        "Origins": {
            "Quantity": 1,
            "Items": [{
                "Id": "S3Origin",
                "DomainName": "'$BUCKET_NAME'.s3.amazonaws.com",
                "S3OriginConfig": {"OriginAccessIdentity": ""}
            }]
        },
        "DefaultCacheBehavior": {
            "TargetOriginId": "S3Origin",
            "ViewerProtocolPolicy": "redirect-to-https",
            "MinTTL": 0,
            "ForwardedValues": {"QueryString": false, "Cookies": {"Forward": "none"}}
        },
        "CustomErrorResponses": {
            "Quantity": 2,
            "Items": [
                {"ErrorCode": 403, "ResponsePagePath": "/index.html", "ResponseCode": "200"},
                {"ErrorCode": 404, "ResponsePagePath": "/index.html", "ResponseCode": "200"}
            ]
        },
        "Enabled": true,
        "PriceClass": "PriceClass_100"
    }'
```

## Environment Configuration

Update `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'http://your-backend-ip:8080/api',
  recaptchaSiteKey: 'YOUR_RECAPTCHA_KEY'
};
```

## Automated Deployment Script

Create `deploy-frontend.sh`:
```bash
#!/bin/bash
set -e

BUCKET_NAME="your-bucket-name"
DISTRIBUTION_ID="your-cloudfront-id"

echo "🚀 Deploying frontend..."

# Build
ng build --configuration production

# Upload
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ --delete

# Invalidate cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "✅ Deployed to CloudFront!"
```

## Access
- **Website**: `https://your-cloudfront-domain.cloudfront.net`
- **S3 Direct**: `http://your-bucket.s3-website-us-east-1.amazonaws.com`

## Custom Domain (Optional)
```bash
# Create Route 53 hosted zone
aws route53 create-hosted-zone --name yourdomain.com --caller-reference $(date +%s)

# Add CNAME record pointing to CloudFront
aws route53 change-resource-record-sets --hosted-zone-id YOUR_ZONE_ID --change-batch '{
    "Changes": [{
        "Action": "CREATE",
        "ResourceRecordSet": {
            "Name": "app.yourdomain.com",
            "Type": "CNAME",
            "TTL": 300,
            "ResourceRecords": [{"Value": "your-cloudfront-domain.cloudfront.net"}]
        }
    }]
}'
```