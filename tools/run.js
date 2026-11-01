#!/usr/bin/env node
// Opens a page of the app in a headless browser (Edge or Chrome) through the
// DevTools Protocol, runs a script in it and prints a JSON report:
//   { url, result, consoleErrors, exceptions }
//
// Usage: node tools/run.js <page> [script.js] [options]
//   page        repository-relative path (e.g. index.html) or a full URL
//   script.js   evaluated in the page as the body of an async function; its return
//               value (JSON-serialisable) becomes `result`. Default: document.title.
//               Inside it: `await __run({ shot: 'name' })` saves <shots>/<name>.png,
//               `await __run({ viewport: [w, h] })` resizes the window,
//               `await __run({ media: "print" })` shows the print styles ("" goes back to screen).
//   --http          serve the repository with tools/serve.js (as GitHub Pages) instead of file://
//   --browser=edge|chrome|<path>   default edge
//   --wait=ms       pause after load before the script runs (default 300)
//   --shots=dir     folder for screenshots
//   --arg=value     made available to the script as `__arg` (repeatable → array)
//
// Exit code 1 when the page logged console errors or threw exceptions.

"use strict";
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = path.join(__dirname, "..");
const BROWSERS = {
  edge: ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Microsoft/Edge/Application/msedge.exe"],
  chrome: ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"],
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseArgs(argv) {
  const opts = { http: false, browser: "edge", wait: 300, shots: null, arg: [] };
  const rest = [];
  for (const a of argv) {
    const m = a.match(/^--([\w-]+)(?:=(.*))?$/);
    if (!m) rest.push(a);
    else if (m[1] === "arg") opts.arg.push(m[2]);
    else opts[m[1]] = m[2] === undefined ? true : m[2];
  }
  [opts.page, opts.script] = rest;
  return opts;
}

function browserPath(name) {
  if (BROWSERS[name]) return BROWSERS[name].find((p) => fs.existsSync(p));
  return fs.existsSync(name) ? name : null;
}

/** Thin DevTools Protocol client over Node's built-in WebSocket. */
class Cdp {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = [];
    this.ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      } else if (msg.method) {
        this.listeners.forEach((fn) => fn(msg));
      }
    });
  }
  open() {
    return new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
  }
  send(method, params = {}, sessionId) {
    const id = this.nextId++;
    this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  on(fn) {
    this.listeners.push(fn);
  }
}

/** Removes browser profiles left behind by earlier runs (older than 10 minutes). */
function sweepProfiles() {
  const limit = Date.now() - 10 * 60 * 1000;
  for (const d of fs.readdirSync(os.tmpdir())) {
    if (!d.startsWith("negociado-run-")) continue;
    const p = path.join(os.tmpdir(), d);
    try {
      if (fs.statSync(p).mtimeMs < limit) fs.rmSync(p, { recursive: true, force: true });
    } catch {
      /* still locked: next time */
    }
  }
}

async function run(opts) {
  sweepProfiles();
  const exe = browserPath(opts.browser);
  if (!exe) throw new Error(`Navegador no encontrado: ${opts.browser}`);

  let server = null;
  let url;
  if (/^[a-z]+:\/\//i.test(opts.page)) url = opts.page;
  else if (opts.http) {
    server = await require("./serve").start();
    url = server.url + opts.page.split(/[\\/]/).map(encodeURIComponent).join("/");
  } else url = pathToFileURL(path.resolve(ROOT, opts.page)).href;

  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "negociado-run-"));
  const proc = spawn(exe, ["--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check", "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank"], { stdio: "ignore" });

  const report = { url, result: null, consoleErrors: [], exceptions: [] };
  let cdp;
  try {
    // Port 0: the browser writes the port it picked to DevToolsActivePort.
    let port;
    for (let i = 0; i < 100 && !port; i++) {
      await sleep(100);
      const f = path.join(profile, "DevToolsActivePort");
      // The file can be read half written (a truncated number gave «bad port»): wait for both lines.
      const lines = fs.existsSync(f) ? fs.readFileSync(f, "utf8").split("\n") : [];
      if (lines.length >= 2 && lines[1].trim() && /^\d{4,5}$/.test(lines[0].trim())) port = lines[0].trim();
    }
    if (!port) throw new Error("El navegador no abrió el puerto de depuración");
    const { webSocketDebuggerUrl } = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
    cdp = new Cdp(webSocketDebuggerUrl);
    await cdp.open();

    const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
    const send = (m, p) => cdp.send(m, p, sessionId);
    cdp.on((msg) => {
      if (msg.sessionId !== sessionId) return;
      if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error")
        report.consoleErrors.push(msg.params.args.map((a) => a.value ?? a.description ?? "").join(" "));
      if (msg.method === "Runtime.exceptionThrown") {
        const d = msg.params.exceptionDetails;
        report.exceptions.push((d.exception && d.exception.description) || d.text);
      }
      if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") report.consoleErrors.push(`${msg.params.entry.text} ${msg.params.entry.url || ""}`.trim());
    });
    await send("Runtime.enable");
    await send("Log.enable");
    await send("Page.enable");
    await send("Emulation.setDeviceMetricsOverride", { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });

    const loaded = new Promise((resolve) => cdp.on((m) => m.sessionId === sessionId && m.method === "Page.loadEventFired" && resolve()));
    await send("Page.navigate", { url });
    await Promise.race([loaded, sleep(30000)]);
    await sleep(Number(opts.wait));

    // Bridge for the script: __run({...}) posts a request through a binding.
    await send("Runtime.addBinding", { name: "__runBinding" });
    cdp.on(async (msg) => {
      if (msg.sessionId !== sessionId || msg.method !== "Runtime.bindingCalled" || msg.params.name !== "__runBinding") return;
      const { id, req } = JSON.parse(msg.params.payload);
      let out = null;
      try {
        if (req.viewport) await send("Emulation.setDeviceMetricsOverride", { width: req.viewport[0], height: req.viewport[1], deviceScaleFactor: 1, mobile: false });
        if (req.media !== undefined) await send("Emulation.setEmulatedMedia", { media: req.media }); // "print" or "" (screen)
        if (req.shot) {
          if (!opts.shots) throw new Error("captura pedida sin --shots");
          fs.mkdirSync(opts.shots, { recursive: true });
          const { data } = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: !!req.full });
          fs.writeFileSync(path.join(opts.shots, `${req.shot}.png`), Buffer.from(data, "base64"));
        }
      } catch (err) {
        // Reported, never thrown: an exception here would end the whole run without a report.
        report.exceptions.push(`[__run] ${err.message}`);
        out = { error: err.message };
      }
      await send("Runtime.evaluate", { expression: `window.__runDone(${JSON.stringify(id)}, ${JSON.stringify(out)})` });
    });
    await send("Runtime.evaluate", {
      expression: `(() => { const w = new Map(); let n = 0;
        window.__runDone = (id, v) => { w.get(id)(v); w.delete(id); };
        window.__run = (req) => new Promise((r) => { const id = ++n; w.set(id, r); __runBinding(JSON.stringify({ id, req })); });
      })()`,
    });

    const body = opts.body || (opts.script ? fs.readFileSync(path.resolve(opts.script), "utf8") : "return document.title;");
    const argValue = opts.arg.length > 1 ? opts.arg : opts.arg[0] ?? null;
    const { result, exceptionDetails } = await send("Runtime.evaluate", {
      expression: `(async (__arg) => { ${body}\n })(${JSON.stringify(argValue)})`,
      awaitPromise: true,
      returnByValue: true,
    });
    if (exceptionDetails) report.exceptions.push(`[script] ${(exceptionDetails.exception && exceptionDetails.exception.description) || exceptionDetails.text}`);
    else report.result = result.value ?? null;
  } finally {
    try {
      if (cdp) await cdp.send("Browser.close");
    } catch {
      /* the browser may already be gone; the process is killed below anyway */
    }
    proc.kill();
    if (server) server.close();
    // Wait for the browser to exit before removing its profile (up to 5 s).
    await new Promise((resolve) => {
      if (proc.exitCode !== null || proc.signalCode !== null) return resolve();
      proc.once("exit", resolve);
      setTimeout(resolve, 5000);
    });
    // Windows may keep the profile locked for a few seconds after the browser exits (EPERM/EBUSY):
    // retry for up to ~6 s; a folder still left behind must not turn a passing check into a
    // failure (the next run sweeps it, see sweepProfiles).
    for (let i = 0; ; i++) {
      try {
        fs.rmSync(profile, { recursive: true, force: true });
        break;
      } catch (err) {
        if (i >= 20) {
          process.emitWarning(`No se pudo borrar el perfil temporal ${profile} (${err.code}).`);
          break;
        }
        await sleep(300);
      }
    }
  }
  return report;
}

module.exports = { run, parseArgs };

if (require.main === module) {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.page) {
    console.error("Uso: node tools/run.js <página> [script.js] [--http] [--browser=edge|chrome] [--wait=ms] [--shots=dir] [--arg=valor]");
    process.exit(2);
  }
  run(opts)
    .then((report) => {
      process.stdout.write(JSON.stringify(report, null, 1) + "\n");
      process.exitCode = report.consoleErrors.length || report.exceptions.length ? 1 : 0;
    })
    .catch((err) => {
      console.error(err.message);
      process.exitCode = 2;
    });
}
