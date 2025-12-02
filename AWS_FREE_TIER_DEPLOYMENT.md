# TalentForge Frontend - AWS Free Tier Deployment

**Monthly Cost: $0.50** (Route 53 only)

## Overview

Deploy TalentForge Angular frontend to AWS Free Tier using S3 and CloudFront.

## Free Tier Services Used

- **S3** (5GB storage free) - Static website hosting
- **CloudFront** (1TB data transfer free) - Global CDN
- **Route 53** ($0.50/month for hosted zone) - DNS

## Architecture

```
Internet → Route 53 → CloudFront → S3 (Angular App)
                           ↓
                    Backend API (separate deployment)
```

## Frontend Stack

- **Angular 17+** - Standalone components
- **TypeScript 5+** - Type safety
- **Angular Material** - UI components
- **NgRx** - State management
- **Production Build** - AOT compilation, tree shaking

## Prerequisites

- AWS Account with Free Tier eligibility
- AWS CLI configured
- Node.js 18+ and Angular CLI
- Backend API deployed (see ../TalentForge-Backend/AWS_FREE_TIER_BACKEND_DEPLOYMENT.md)

## Step 1: Build Production Frontend

```bash
# Install dependencies
npm install

# Build for production
ng build --configuration production

# Verify build output
ls -la dist/talentforge-app/browser/
```

## Step 2: S3 Bucket Setup

### Build and Deploy Script

Create `deploy-frontend-free.sh`:

```bash
#!/bin/bash

# Configuration - Use unique bucket name to avoid sniping
BUCKET_NAME="tf-frontend-$(date +%s)-$(openssl rand -hex 4)"
CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"

echo "🚀 Building TalentForge Frontend for Free Tier..."

# Build production
ng build --configuration production

# Create S3 bucket (if not exists)
aws s3 mb s3://$BUCKET_NAME --region us-east-1

# Configure bucket for static website hosting
aws s3 website s3://$BUCKET_NAME \
    --index-document index.html \
    --error-document index.html

# Set bucket policy for public read
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# Upload files with proper caching
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public,max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with no-cache
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --cache-control "no-cache" \
    --include "*.html" \
    --include "*.json"

echo "✅ Frontend deployed to S3!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
```

## Step 3: CloudFront Distribution

### Create CloudFront Distribution

```bash
# Create distribution configuration
cat > cloudfront-config.json << EOF
{
    "CallerReference": "talentforge-$(date +%s)",
    "Comment": "TalentForge Free Tier Distribution",
    "DefaultRootObject": "index.html",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-talentforge-frontend-free",
                "DomainName": "talentforge-frontend-free.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-talentforge-frontend-free",
        "ViewerProtocolPolicy": "redirect-to-https",
        "MinTTL": 0,
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        }
    },
    "CustomErrorResponses": {
        "Quantity": 2,
        "Items": [
            {
                "ErrorCode": 403,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            },
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100"
}
EOF

# Create distribution
aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
```

## Step 4: Environment Configuration

### Update Frontend Environment

Update `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'http://your-backend-ec2-ip/api', // Backend API URL
  recaptchaSiteKey: 'YOUR_RECAPTCHA_SITE_KEY',
  sentryDsn: '', // Optional
  gaTrackingId: '' // Optional
};
```

## Step 5: Route 53 DNS (Optional)

### Create Hosted Zone

```bash
# Create hosted zone for your domain
aws route53 create-hosted-zone \
    --name yourdomain.com \
    --caller-reference "$(date +%s)"

# Create A record pointing to CloudFront
aws route53 change-resource-record-sets \
    --hosted-zone-id Z123456789 \
    --change-batch '{
        "Changes": [{
            "Action": "CREATE",
            "ResourceRecordSet": {
                "Name": "yourdomain.com",
                "Type": "A",
                "AliasTarget": {
                    "DNSName": "your-cloudfront-domain.cloudfront.net",
                    "EvaluateTargetHealth": false,
                    "HostedZoneId": "Z2FDTNDATAQYW2"
                }
            }
        }]
    }'
```

## Step 6: Deployment Automation

Create `deploy-frontend.sh`:

```bash
#!/bin/bash
set -e

echo "🚀 Deploying TalentForge Frontend..."

# Configuration
BUCKET_NAME="tf-frontend-$(date +%s)-$(openssl rand -hex 4)"
REGION="us-east-1"

# Build production
echo "📦 Building production bundle..."
ng build --configuration production

# Create S3 bucket
echo "🪣 Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Configure static website hosting
aws s3 website s3://$BUCKET_NAME \
    --index-document index.html \
    --error-document index.html

# Set bucket policy
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [{
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# Upload files with caching
echo "📤 Uploading files..."
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public,max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML with no-cache
aws s3 sync dist/talentforge-app/browser/ s3://$BUCKET_NAME/ \
    --cache-control "no-cache" \
    --include "*.html" \
    --include "*.json"

# Create CloudFront distribution
echo "🌐 Creating CloudFront distribution..."
DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config file://cloudfront-config.json \
    --query 'Distribution.Id' \
    --output text)

echo "✅ Frontend deployment complete!"
echo "🪣 S3 Bucket: $BUCKET_NAME"
echo "🌐 CloudFront: $DISTRIBUTION_ID"
echo "📱 Website: https://$DISTRIBUTION_ID.cloudfront.net"
```

## Step 7: Performance Optimization

### Bundle Analysis

```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
ng build --configuration production --stats-json
npx webpack-bundle-analyzer dist/talentforge-app/browser/stats.json
```

### Current Bundle Sizes
- **Main**: 81KB gzipped ✅
- **Auth**: 30KB gzipped ✅
- **Initial**: 124KB gzipped ✅

## Step 8: Monitoring

### CloudWatch Metrics

```bash
# Monitor CloudFront requests
aws cloudwatch get-metric-statistics \
    --namespace AWS/CloudFront \
    --metric-name Requests \
    --dimensions Name=DistributionId,Value=your-distribution-id \
    --start-time 2024-01-01T00:00:00Z \
    --end-time 2024-01-02T00:00:00Z \
    --period 3600 \
    --statistics Sum

# Monitor S3 storage
aws cloudwatch get-metric-statistics \
    --namespace AWS/S3 \
    --metric-name BucketSizeBytes \
    --dimensions Name=BucketName,Value=your-bucket-name Name=StorageType,Value=StandardStorage \
    --start-time 2024-01-01T00:00:00Z \
    --end-time 2024-01-02T00:00:00Z \
    --period 86400 \
    --statistics Average
```

## Free Tier Limits

### S3 Storage (Free)
- **Storage**: 5GB
- **Requests**: 20,000 GET, 2,000 PUT
- **Data Transfer**: 15GB out

### CloudFront (Free)
- **Data Transfer**: 1TB out
- **Requests**: 10M HTTP/HTTPS

### Expected Usage
- **Frontend Bundle**: ~500KB
- **Monthly Transfer**: <100GB (well within limits)
- **Cost**: $0.50/month (Route 53 only)

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Ensure CloudFront custom error responses are configured
   - Check S3 error document setting

2. **CORS Issues**
   - Verify backend CORS configuration
   - Check environment.prod.ts API URL

3. **Slow Loading**
   - Enable gzip compression in CloudFront
   - Verify caching headers

### Debug Commands

```bash
# Test S3 website endpoint
curl -I http://your-bucket.s3-website-us-east-1.amazonaws.com

# Test CloudFront distribution
curl -I https://your-distribution.cloudfront.net

# Check API connectivity
curl -I http://your-backend-ip/api/health
```

---

**Status**: ✅ Ready for frontend deployment

**Expected Cost**: $0.50/month (Route 53 only)

**Performance**: 
- Bundle sizes optimized
- Global CDN distribution
- Lazy loading enabled
- AOT compilation

**Next Steps**: 
1. Deploy backend (see ../TalentForge-Backend/)
2. Update API URL in environment
3. Run deployment script
4. Test end-to-end functionalityEY',
  sentryDsn: '', // Optional for free tier
  gaTrackingId: '' // Optional for free tier
};
```

### Backend Application Properties

Create `application-prod.yml`:

```yaml
spring:
  datasource:
    url: ${DATABASE_URL}
    username: ${DATABASE_USERNAME}
    password: ${DATABASE_PASSWORD}
    hikari:
      maximum-pool-size: 5  # Reduced for free tier
      minimum-idle: 2
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
  
  redis:
    host: localhost  # Using local Redis in Docker
    port: 6379

server:
  port: 8080

cors:
  allowed-origins: ${CORS_ALLOWED_ORIGINS}

logging:
  level:
    com.talentforge: INFO
    root: WARN
```

## Step 7: Security Groups

### Backend Security Group

```bash
# Create security group for EC2
aws ec2 create-security-group \
    --group-name talentforge-backend-free \
    --description "TalentForge Backend Free Tier"

# Allow HTTP traffic
aws ec2 authorize-security-group-ingress \
    --group-name talentforge-backend-free \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

# Allow HTTPS traffic
aws ec2 authorize-security-group-ingress \
    --group-name talentforge-backend-free \
    --protocol tcp \
    --port 443 \
    --cidr 0.0.0.0/0

# Allow SSH access
aws ec2 authorize-security-group-ingress \
    --group-name talentforge-backend-free \
    --protocol tcp \
    --port 22 \
    --cidr your-ip/32
```

### Database Security Group

```bash
# Create security group for RDS
aws ec2 create-security-group \
    --group-name talentforge-db-free \
    --description "TalentForge Database Free Tier"

# Allow PostgreSQL from EC2 security group
aws ec2 authorize-security-group-ingress \
    --group-name talentforge-db-free \
    --protocol tcp \
    --port 5432 \
    --source-group talentforge-backend-free
```

## Step 8: Monitoring (Free Tier)

### CloudWatch Alarms (Free)

```bash
# CPU utilization alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "TalentForge-HighCPU" \
    --alarm-description "High CPU utilization" \
    --metric-name CPUUtilization \
    --namespace AWS/EC2 \
    --statistic Average \
    --period 300 \
    --evaluation-periods 2 \
    --threshold 80 \
    --comparison-operator GreaterThanThreshold

# Memory utilization alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "TalentForge-HighMemory" \
    --alarm-description "High memory utilization" \
    --metric-name MemoryUtilization \
    --namespace AWS/EC2 \
    --statistic Average \
    --period 300 \
    --evaluation-periods 2 \
    --threshold 85 \
    --comparison-operator GreaterThanThreshold
```

## Step 9: Nginx Configuration for Microservices

Create `nginx-free-tier.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    upstream auth_service {
        server auth-service:8081;
    }
    
    upstream user_service {
        server user-service:8082;
    }
    
    upstream job_service {
        server job-service:8083;
    }
    
    upstream application_service {
        server application-service:8084;
    }

    server {
        listen 80;
        
        # API Gateway routing
        location /api/auth/ {
            proxy_pass http://auth_service/api/auth/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        location /api/users/ {
            proxy_pass http://user_service/api/users/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        location /api/jobs/ {
            proxy_pass http://job_service/api/jobs/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        location /api/applications/ {
            proxy_pass http://application_service/api/applications/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # Health check endpoint
        location /health {
            return 200 'OK';
            add_header Content-Type text/plain;
        }
    }
}
```

## Step 10: Memory Optimization for Free Tier

### JVM Memory Settings

Add to each service's Dockerfile:

```dockerfile
# Optimize for t2.micro (1GB RAM)
ENV JAVA_OPTS="-Xmx128m -Xms64m -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Application Properties for Free Tier

```yaml
# application-free-tier.yml
spring:
  datasource:
    hikari:
      maximum-pool-size: 3  # Reduced for memory
      minimum-idle: 1
      connection-timeout: 20000
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        jdbc:
          batch_size: 10
        order_inserts: true
        order_updates: true

server:
  tomcat:
    threads:
      max: 50  # Reduced thread pool
      min-spare: 5

logging:
  level:
    com.talentforge: INFO
    org.springframework: WARN
    org.hibernate: WARN
```

## Step 11: Deployment Script

Create `deploy-free-tier.sh`:

```bash
#!/bin/bash
set -e

echo "🚀 Deploying TalentForge to AWS Free Tier..."

# Build and push Docker images
echo "📦 Building Docker images..."
docker-compose -f docker-compose.free-tier.yml build

# Deploy to EC2
echo "🚢 Deploying to EC2..."
scp docker-compose.free-tier.yml ec2-user@$EC2_IP:/home/ec2-user/
scp nginx-free-tier.conf ec2-user@$EC2_IP:/home/ec2-user/
scp .env.production ec2-user@$EC2_IP:/home/ec2-user/

# Start services on EC2
ssh ec2-user@$EC2_IP << 'EOF'
cd /home/ec2-user
docker-compose -f docker-compose.free-tier.yml down
docker-compose -f docker-compose.free-tier.yml up -d
EOF

echo "✅ Deployment complete!"
echo "🌐 Backend: http://$EC2_IP"
echo "📊 Monitor: AWS CloudWatch Console"
```

## Step 12: Cost Monitoring

### Set up Billing Alerts

```bash
# Create billing alarm for $5 threshold
aws cloudwatch put-metric-alarm \
    --alarm-name "TalentForge-BillingAlert" \
    --alarm-description "Billing alert for $5" \
    --metric-name EstimatedCharges \
    --namespace AWS/Billing \
    --statistic Maximum \
    --period 86400 \
    --evaluation-periods 1 \
    --threshold 5.00 \
    --comparison-operator GreaterThanThreshold \
    --dimensions Name=Currency,Value=USD
```

## Free Tier Limitations & Recommendations

### Memory Constraints (t2.micro = 1GB RAM)
- **8 microservices**: ~128MB each = 1GB total
- **Redis**: 128MB limit with LRU eviction
- **OS overhead**: ~200MB
- **Recommendation**: Monitor memory usage closely

### Performance Expectations
- **Concurrent users**: 10-20 max
- **Response time**: 1-3 seconds
- **Database connections**: 3 per service (24 total)
- **Use case**: Development, demos, small teams

### Scaling Beyond Free Tier

When ready to scale:
1. **Upgrade to t3.small** (2GB RAM) - $15/month
2. **Add ElastiCache Redis** - $13/month
3. **Use RDS Multi-AZ** - $25/month
4. **Add Application Load Balancer** - $16/month

## Troubleshooting

### Common Issues

1. **Out of Memory Errors**
   ```bash
   # Check memory usage
   docker stats
   # Restart services if needed
   docker-compose restart
   ```

2. **Service Discovery Issues**
   ```bash
   # Check network connectivity
   docker network ls
   docker network inspect talentforge-network
   ```

3. **Database Connection Issues**
   ```bash
   # Test RDS connectivity
   telnet your-rds-endpoint 5432
   ```

## Security Considerations

### Production Security Checklist
- [ ] Change default passwords
- [ ] Use AWS Secrets Manager for sensitive data
- [ ] Enable VPC for RDS (remove public access)
- [ ] Set up WAF for CloudFront
- [ ] Enable GuardDuty for threat detection
- [ ] Use IAM roles instead of access keys
- [ ] Enable CloudTrail for audit logging

---

**Status:** ✅ Complete deployment guide for TalentForge microservices on AWS Free Tier

**Expected Monthly Cost:** $0.50 (Route 53) + potential overages if exceeding free tier limits

**Deployment Time:** 2-3 hours for complete setup
    --threshold 80 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2 \
    --dimensions Name=InstanceId,Value=i-xxxxxxxxx

# Database connection alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "TalentForge-DBConnections" \
    --alarm-description "High database connections" \
    --metric-name DatabaseConnections \
    --namespace AWS/RDS \
    --statistic Average \
    --period 300 \
    --threshold 15 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2 \
    --dimensions Name=DBInstanceIdentifier,Value=talentforge-free
```

## Step 9: Backup Strategy (Free Tier)

### Automated Backup Script

Create `backup-free.sh`:

```bash
#!/bin/bash

# Database backup (using RDS automated backups - free)
echo "✅ RDS automated backups enabled (7 days retention)"

# Application configuration backup
tar -czf config-backup-$(date +%Y%m%d).tar.gz \
    .env.production \
    docker-compose.prod.yml \
    nginx.conf

# Upload to S3 (within free tier limits)
aws s3 cp config-backup-$(date +%Y%m%d).tar.gz \
    s3://talentforge-frontend-free/backups/

echo "✅ Configuration backup completed"
```

## Step 10: Deployment Automation

### Complete Deployment Script

Create `deploy-free-tier.sh`:

```bash
#!/bin/bash
set -e

echo "🚀 Starting TalentForge Free Tier Deployment..."

# 1. Deploy infrastructure
echo "📦 Setting up infrastructure..."
./setup-infrastructure.sh

# 2. Deploy backend
echo "🔧 Deploying backend..."
./deploy-backend.sh

# 3. Deploy frontend
echo "🎨 Deploying frontend..."
./deploy-frontend-free.sh

# 4. Setup monitoring
echo "📊 Setting up monitoring..."
./setup-monitoring.sh

echo "✅ Deployment completed!"
echo "🌐 Frontend: https://your-cloudfront-domain.cloudfront.net"
echo "🔧 Backend: http://your-ec2-ip:8080"
echo "💾 Database: your-rds-endpoint:5432"
```

## Cost Monitoring

### Stay Within Free Tier

- **EC2**: 750 hours/month (1 t2.micro instance)
- **RDS**: 750 hours/month (1 t3.micro instance)
- **S3**: 5GB storage, 20,000 GET requests
- **CloudFront**: 1TB data transfer out
- **Data Transfer**: 1GB/month free

### Cost Alerts

```bash
# Set up billing alert
aws budgets create-budget \
    --account-id 123456789012 \
    --budget '{
        "BudgetName": "TalentForge-FreeTier",
        "BudgetLimit": {
            "Amount": "5.00",
            "Unit": "USD"
        },
        "TimeUnit": "MONTHLY",
        "BudgetType": "COST"
    }'
```

## Limitations

- **Single Instance**: No high availability
- **Performance**: Limited by t2.micro specs
- **Storage**: 20GB database storage
- **Bandwidth**: 1TB/month CloudFront transfer
- **Monitoring**: Basic CloudWatch metrics only

## Scaling Beyond Free Tier

When ready to scale:

1. **Upgrade EC2**: t2.micro → t3.small/medium
2. **Add Load Balancer**: Application Load Balancer
3. **Multi-AZ RDS**: Enable for high availability
4. **Auto Scaling**: Add Auto Scaling Group
5. **CDN**: Upgrade CloudFront plan
6. **Monitoring**: Add New Relic or DataDog

---

**Total Monthly Cost: $0.50** (Route 53 hosted zone only)

This free tier deployment is perfect for:
- Development and testing
- Small team usage (< 10 users)
- MVP validation
- Client demonstrations
- Learning and experimentation