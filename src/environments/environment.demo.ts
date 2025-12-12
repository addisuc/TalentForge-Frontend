// Demo/Staging environment
export const environment = {
  production: false,
  apiUrl: 'http://DEMO_BACKEND_IP:8080/api', // Replace with actual demo backend IP from Terraform output
  recaptchaSiteKey: 'YOUR_DEMO_RECAPTCHA_KEY',
  sentryDsn: 'YOUR_DEMO_SENTRY_DSN',
  gaTrackingId: 'YOUR_DEMO_GA_TRACKING_ID'
};
