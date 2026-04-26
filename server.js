const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Decodificamos la URL para procesar acentos, espacios y caracteres especiales correctamente
  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(req.url);
  } catch (e) {
    decodedUrl = req.url;
  }
  
  // Limpiamos los parámetros de la URL (query strings)
  decodedUrl = decodedUrl.split('?')[0];

  let filePath = path.join(BASE_DIR, decodedUrl === '/' ? 'index.html' : decodedUrl);
  
  // Evitar ataques de Directory Traversal (navegar fuera de la carpeta del proyecto)
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    return res.end('403: Prohibido');
  }

  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end(`404: Archivo no encontrado -> ${decodedUrl}`);
      } else {
        res.writeHead(500);
        res.end(`500: Error interno del servidor -> ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('\n======================================================');
  console.log('🚀 Servidor local de Recursos Interactivos iniciado');
  console.log('======================================================');
  console.log(`\nHaz ctrl+click o abre esta URL en tu navegador:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`\n(Presiona Ctrl+C en esta terminal para detener el servidor)`);
  console.log('======================================================\n');
});
