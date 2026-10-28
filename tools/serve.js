#!/usr/bin/env node
// Minimal static server for the repository root, to test the app over http the
// way GitHub Pages serves it (including its 404.html fallback).
//
// Usage: node tools/serve.js [port]   (default 8080; 0 = any free port)
// As a module: const { start } = require('./serve'); const { url, close } = await start();

"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".md": "text/markdown; charset=utf-8",
};

function handler(req, res) {
  let rel;
  try {
    rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  let file = path.join(ROOT, rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  // Like Pages: hidden files are not served, and a missing path gets 404.html.
  const hidden = rel.split("/").some((part) => part.startsWith("."));
  if (hidden || !fs.existsSync(file)) {
    const notFound = path.join(ROOT, "404.html");
    res.writeHead(404, { "Content-Type": TYPES[".html"] });
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : "404");
    return;
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}

function start(port = 0) {
  return new Promise((resolve) => {
    const server = http.createServer(handler).listen(port, "127.0.0.1", () => {
      resolve({ url: `http://127.0.0.1:${server.address().port}/`, close: () => server.close() });
    });
  });
}

module.exports = { start };

if (require.main === module) {
  start(Number(process.argv[2] ?? 8080)).then(({ url }) => console.log(`Sirviendo ${ROOT} en ${url}`));
}
