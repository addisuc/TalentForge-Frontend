# TalentForge Frontend - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Configuration

Create production environment file:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.talentforge.com/api',
  recaptchaSiteKey: 'YOUR_PRODUCTION_RECAPTCHA_KEY',
  sentryDsn: 'YOUR_SENTRY_DSN',
  gaTrackingId: 'YOUR_GA_TRACKING_ID'
};
```

### 2. Install Sentry (Error Tracking)

```bash
npm install @sentry/angular
```

Add to `index.html` before `</head>`:

```html
<script
  src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"
  crossorigin="anonymous"
></script>
<script>
  Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    environment: "production",
    tracesSampleRate: 0.1
  });
</script>
```

### 3. Install Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Production Build

```bash
# Build for production
ng build --configuration production

# Verify build output
ls -lh dist/talentforge-app/browser/
```

### 5. Test Production Build Locally

```bash
# Install http-server
npm install -g http-server

# Serve production build
cd dist/talentforge-app/browser
http-server -p 8080

# Open http://localhost:8080
```

## Deployment Options

### Option 1: AWS S3 + CloudFront

```bash
# Install AWS CLI
aws configure

# Sync to S3
aws s3 sync dist/talentforge-app/browser/ s3://your-bucket-name/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/talentforge-app/browser
```

### Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 4: Docker + Nginx

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY dist/talentforge-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build and run
docker build -t talentforge-frontend .
docker run -p 80:80 talentforge-frontend
```

## Post-Deployment Tasks

### 1. Run Lighthouse Audit

```bash
./lighthouse-audit.sh https://your-production-url.com
```

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 2. Verify Core Web Vitals

Check in Google Search Console or Chrome DevTools:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### 3. Test Critical Flows

- [ ] Login/Logout
- [ ] Registration
- [ ] Password reset
- [ ] Job search and apply
- [ ] Application tracking
- [ ] Interview scheduling
- [ ] Profile management

### 4. Monitor Errors

Check Sentry dashboard for:
- JavaScript errors
- API failures
- Performance issues

### 5. Monitor Analytics

Check Google Analytics for:
- Page views
- User flows
- Conversion rates
- Bounce rates

## Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured
  - Content-Security-Policy
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security
- [ ] reCAPTCHA production keys configured
- [ ] API CORS configured correctly
- [ ] Rate limiting enabled on backend
- [ ] Session timeout configured (30 minutes)

## Performance Checklist

- [ ] Gzip/Brotli compression enabled
- [ ] CDN configured (CloudFront, Cloudflare)
- [ ] Browser caching configured
- [ ] Images optimized
- [ ] Lazy loading enabled
- [ ] Bundle sizes within targets

## Monitoring Setup

### 1. Uptime Monitoring

Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

### 2. Performance Monitoring

- Google Analytics (free)
- New Relic
- Datadog

### 3. Error Tracking

- Sentry (configured)
- Rollbar
- Bugsnag

## Rollback Plan

If issues occur:

```bash
# AWS S3
aws s3 sync s3://your-bucket-name-backup/ s3://your-bucket-name/ --delete

# Netlify
netlify rollback

# Vercel
vercel rollback
```

## Support Contacts

- **DevOps:** devops@talentforge.com
- **Backend:** backend@talentforge.com
- **Frontend:** frontend@talentforge.com
- **On-Call:** +1-XXX-XXX-XXXX

## Troubleshooting

### Issue: White screen after deployment
- Check browser console for errors
- Verify API URL in environment.prod.ts
- Check CORS configuration on backend

### Issue: 404 errors on refresh
- Configure server to redirect all routes to index.html
- For S3: Set error document to index.html
- For Nginx: Add `try_files $uri $uri/ /index.html;`

### Issue: Slow load times
- Check bundle sizes
- Verify CDN is working
- Check server response times
- Run Lighthouse audit

## Success Criteria

- [ ] Application loads in < 3 seconds
- [ ] No console errors
- [ ] All critical flows working
- [ ] Lighthouse scores > 90
- [ ] Error rate < 1%
- [ ] Uptime > 99.9%

---

**Deployment Date:** _____________  
**Deployed By:** _____________  
**Version:** _____________  
**Status:** _____________
