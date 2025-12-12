// Production environment
export const environment = {
  production: true,
  apiUrl: 'http://PROD_ALB_DNS/api', // Replace with actual production ALB DNS from Terraform output
  recaptchaSiteKey: 'YOUR_PRODUCTION_RECAPTCHA_KEY',
  sentryDsn: 'YOUR_PRODUCTION_SENTRY_DSN',
  gaTrackingId: 'YOUR_PRODUCTION_GA_TRACKING_ID'
};
