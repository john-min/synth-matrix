#!/usr/bin/env python3
"""
Simple HTTP server with CORS support for the Synth Matrix app
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-api-key, anthropic-version')
        SimpleHTTPRequestHandler.end_headers(self)
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def run(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f'Server running at http://localhost:{port}/')
    print(f'Open: http://localhost:{port}/')
    print('Press Ctrl+C to stop')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
