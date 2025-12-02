#!/bin/bash

# TalentForge Frontend - AWS Deployment Script
set -e

# Configuration
BUCKET_NAME="talentforge-frontend-prod"
CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"
REGION="us-east-1"

echo "🚀 Starting TalentForge Frontend deployment to AWS..."

# Build production
echo "📦 Building production bundle..."
ng build --configuration production

# Check if build was successful
if [ ! -d "dist/talentforge-app/browser" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Sync to S3
echo "☁️ Uploading to S3 bucket: $BUCKET_NAME"
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

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*"

echo "✅ Deployment completed successfully!"
echo "🌐 Your app will be available at your CloudFront domain in a few minutes"