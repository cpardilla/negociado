#!/usr/bin/env node
// Downloads the third-party libraries the app ships with into vendor/, at pinned versions, so the
// app never loads anything from a CDN at run time. Re-run only to change a version.
//
// Usage: node tools/vendor-fetch.js

"use strict";
const fs = require("fs");
const path = require("path");

const VENDOR = path.join(__dirname, "..", "vendor");
// The mind map of the laws: markmap (MIT) on d3 (ISC).
const FILES = [
  ["d3@7.9.0/dist/d3.min.js", "markmap/d3.min.js"],
  ["markmap-view@0.18.12/dist/browser/index.js", "markmap/markmap-view.js"],
  ["markmap-toolbar@0.18.12/dist/index.js", "markmap/markmap-toolbar.js"],
  ["markmap-toolbar@0.18.12/dist/style.css", "markmap/markmap-toolbar.css"],
  ["d3@7.9.0/LICENSE", "markmap/LICENSE-d3.txt"],
  ["markmap-view@0.18.12/LICENSE", "markmap/LICENSE-markmap.txt"],
];

(async () => {
  for (const [src, dest] of FILES) {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/${src}`);
    if (!res.ok) throw new Error(`${src}: HTTP ${res.status}`);
    const file = path.join(VENDOR, dest);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    console.log(`${dest.padEnd(30)} ${(fs.statSync(file).size / 1024).toFixed(0)} KB  ← ${src}`);
  }
})().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
