// server.js - Simple Node.js server to proxy Anthropic API requests
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
  // Serve HTML file
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Proxy API requests
  if (req.url === '/api/messages' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const requestData = JSON.parse(body);
      const apiKey = requestData.apiKey;
      delete requestData.apiKey; // Remove API key from body
      
      const options = {
        hostname: 'api.anthropic.com',
        port: 443,
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Length': Buffer.byteLength(JSON.stringify(requestData))
        }
      };
      
      const proxyReq = https.request(options, (proxyRes) => {
        let responseBody = '';
        
        proxyRes.on('data', chunk => {
          responseBody += chunk;
        });
        
        proxyRes.on('end', () => {
          res.writeHead(proxyRes.statusCode, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(responseBody);
        });
      });
      
      proxyReq.on('error', (error) => {
        console.error('Proxy error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      });
      
      proxyReq.write(JSON.stringify(requestData));
      proxyReq.end();
    });
    return;
  }

  // 404
  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/ in your browser`);
});
