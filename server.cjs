const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const publicFiles = new Set(['index.html', 'styles.css', 'script.js', 'favicon.svg', 'robots.txt', 'sitemap.xml']);
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.xml': 'application/xml' };
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = pathname === '/' ? 'index.html' : pathname.slice(1);
  if (!publicFiles.has(file)) { res.writeHead(404); res.end('Not found'); return; }
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  fs.readFile(path.join(__dirname, file), (error, content) => {
    if (error) { res.writeHead(500); res.end('Unable to read file'); return; }
    res.writeHead(200, { 'Content-Type': `${mime[path.extname(file)]}; charset=utf-8`, 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : content);
  });
}).listen(port, '127.0.0.1', () => console.log(`Zhihexu: http://127.0.0.1:${port}`));
