require('dotenv').config()
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Config from env file, so you dont need to store directly in this file
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const API_URL = process.env.API_URL; // URL of server/api to forward traffic to

// Proxy endpoint, just standard /
app.use('/', createProxyMiddleware({
    target: API_URL,
    changeOrigin: true
}));

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});