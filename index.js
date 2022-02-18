const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Config
const HOST = "localhost";
const PORT = 3005;
const API_URL = ""; // URL of server/api to forward traffic to

// Proxy endpoint, just standard /
app.use('/', createProxyMiddleware({
    target: API_URL,
    changeOrigin: true
}));

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});