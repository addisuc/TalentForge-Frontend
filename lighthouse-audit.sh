#!/bin/bash

# Lighthouse Audit Script
# Run this after deploying to production

echo "🔍 Running Lighthouse Audit..."

# Install lighthouse if not already installed
if ! command -v lighthouse &> /dev/null; then
    echo "Installing Lighthouse CLI..."
    npm install -g lighthouse
fi

# Set the URL to audit
URL="${1:-http://localhost:4200}"

# Create reports directory
mkdir -p lighthouse-reports

# Run Lighthouse audit
lighthouse "$URL" \
  --output html \
  --output json \
  --output-path ./lighthouse-reports/report \
  --chrome-flags="--headless" \
  --only-categories=performance,accessibility,best-practices,seo \
  --preset=desktop

echo "✅ Lighthouse audit complete!"
echo "📊 Reports saved to: ./lighthouse-reports/"
echo ""
echo "Target Scores:"
echo "  Performance: 90+"
echo "  Accessibility: 90+"
echo "  Best Practices: 90+"
echo "  SEO: 90+"
