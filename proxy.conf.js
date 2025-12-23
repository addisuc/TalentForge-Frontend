const PROXY_CONFIG = {
  "/api/**": {
    "target": process.env['API_URL'] || "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "info",
    "onProxyReq": function(proxyReq, req, res) {
      // Preserve Authorization header
      if (req.headers.authorization) {
        proxyReq.setHeader('Authorization', req.headers.authorization);
      }
      // Preserve X-Tenant-ID header
      if (req.headers['x-tenant-id']) {
        proxyReq.setHeader('X-Tenant-ID', req.headers['x-tenant-id']);
      }
    }
  }
};

module.exports = PROXY_CONFIG;