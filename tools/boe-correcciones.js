#!/usr/bin/env node
// Applies sources/boe/correcciones.json to the stored snapshots, without downloading the whole law.
//
// Usage: node tools/boe-correcciones.js [CLAVE ...]   (no arguments = every law with corrections)
//
// tools/boe-fetch.js already applies them after each download; this is for a new correction.

"use strict";
const fs = require("fs");
const path = require("path");
const { corregir, lista } = require("./lib/boe-correcciones");

(async () => {
  const wanted = process.argv.slice(2).map((s) => s.toUpperCase());
  const claves = [...new Set(lista().map((c) => c.ley))].filter((k) => !wanted.length || wanted.includes(k.toUpperCase()));
  for (const clave of claves) {
    const file = path.join(__dirname, "..", "sources", "boe", `${clave}.json`);
    const snapshot = JSON.parse(fs.readFileSync(file, "utf8"));
    const n = await corregir(snapshot);
    fs.writeFileSync(file, JSON.stringify(snapshot, null, 1) + "\n");
    console.log(`${clave.padEnd(8)} ${n} correcciones aplicadas`);
  }
})().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
