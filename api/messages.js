// api/messages.js - Vercel Serverless Function
const https = require('https');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key, anthropic-version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { apiKey, ...body } = req.body;

    const data = JSON.stringify(body);

    const options = {
      hostname: 'api.anthropic.com',
      port: 443,
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': data.length,
      },
    };

    const proxyReq = https.request(options, (proxyRes) => {
      let responseBody = '';

      proxyRes.on('data', (chunk) => {
        responseBody += chunk;
      });

      proxyRes.on('end', () => {
        res.status(proxyRes.statusCode).json(JSON.parse(responseBody));
      });
    });

    proxyReq.on('error', (error) => {
      console.error('Proxy error:', error);
      res.status(500).json({ error: error.message });
    });

    proxyReq.write(data);
    proxyReq.end();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};
