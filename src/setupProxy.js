const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ubeer-mpkw.onrender.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1' // Redirige /api vers /v1
      },
      onProxyRes: function(proxyRes, req, res) {
        // Ajouter des logs pour faciliter le débogage
        console.log('Proxy Response:', req.method, req.path, proxyRes.statusCode);
      },
      onError: function(err, req, res) {
        console.error('Proxy Error:', err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end(`Erreur de proxy: ${err.message}`);
      }
    })
  );
};
