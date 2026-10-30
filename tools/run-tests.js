#!/usr/bin/env node
// Runs the test battery (node --test, spec reporter) and keeps a record of every run, so an
// intermittent failure can be identified afterwards:
//   tests/results/pruebas/<fecha-hora>.txt  full output of the run (the last 30 are kept)
//   tests/results/pruebas/fallos.txt        one entry per failed test, appended run after run
// The output is also shown on screen and the exit code is the one of node --test.
//
// Usage: node tools/run-tests.js [files…]   (npm test; default: tests/**/*.test.js)

"use strict";
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DIR = path.join(ROOT, "tests", "results", "pruebas");
const KEEP = 30;

const stamp = () => new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);

// Names of the failed tests in spec output: lines "✖ name (123ms)" before the summary. The
// spec reporter repeats them under "failing tests:", so they are deduplicated.
function failures(out) {
  const names = new Set();
  for (const line of out.split(/\r?\n/)) {
    const m = line.match(/^\s*✖\s+(.*?)(?:\s+\([\d.]+m?s\))?\s*$/u);
    if (m && !/^failing tests:?$/.test(m[1])) names.add(m[1]);
  }
  return [...names];
}

function main() {
  const files = process.argv.slice(2);
  const args = ["--test", "--test-reporter=spec", ...(files.length ? files : ["tests/**/*.test.js"])];
  const child = spawn(process.execPath, args, { cwd: ROOT, env: { ...process.env, FORCE_COLOR: "0" } });
  let out = "";
  for (const s of [child.stdout, child.stderr]) s.on("data", (d) => { out += d; process.stdout.write(d); });
  child.on("close", (code) => {
    fs.mkdirSync(DIR, { recursive: true });
    const when = stamp();
    const header = `# ${new Date().toISOString()} · node ${process.version} · salida ${code}\n# node ${args.join(" ")}\n\n`;
    fs.writeFileSync(path.join(DIR, `${when}.txt`), header + out);
    const failed = failures(out);
    if (code !== 0) {
      const lines = failed.length ? failed.map((n) => `  ✖ ${n}`) : ["  (no se identificó el nombre: ver el registro completo)"];
      fs.appendFileSync(path.join(DIR, "fallos.txt"), `${when} · ${when}.txt\n${lines.join("\n")}\n`);
      console.log(`\nFallos registrados en ${path.relative(ROOT, path.join(DIR, "fallos.txt"))}`);
    }
    const runs = fs.readdirSync(DIR).filter((f) => /^\d{4}-.*\.txt$/.test(f)).sort();
    for (const f of runs.slice(0, Math.max(0, runs.length - KEEP))) fs.unlinkSync(path.join(DIR, f));
    process.exitCode = code;
  });
}

if (require.main === module) main();
module.exports = { failures };
