// server.js - Simple Node.js server to proxy Anthropic API requests
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
  console.log(`\n=== Incoming Request ===`);
  console.log(`${req.method} ${req.url}`);
  
  // Proxy API requests
  if (req.url === '/api/messages' && req.method === 'POST') {
    console.log('Handling API proxy request');
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const requestData = JSON.parse(body);
      const apiKey = requestData.apiKey;
      delete requestData.apiKey;
      
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

  // Serve static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  console.log(`Attempting to serve: ${filePath}`);
  console.log(`File exists: ${fs.existsSync(filePath)}`);
  
  // Get file extension to set proper content type
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jsx': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };
  
  const contentType = contentTypes[ext] || 'application/octet-stream';
  console.log(`Content-Type: ${contentType}`);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`❌ File not found: ${filePath}`);
        res.writeHead(404);
        res.end('404 - File not found');
      } else {
        console.error(`❌ Error reading file: ${err}`);
        res.writeHead(500);
        res.end('500 - Internal server error');
      }
      return;
    }
    
    console.log(`✅ Successfully served ${filePath} (${data.length} bytes)`);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🎹 Synth Matrix Server`);
  console.log(`================================`);
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/ in your browser`);
  console.log(`================================\n`);
});
