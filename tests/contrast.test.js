// Text contrast of the design tokens (assets/css/tokens.css), light and dark:
// every text colour on every background it is used on must reach WCAG AA (4.5:1).
// Run: node --test tests/

"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const css = fs.readFileSync(path.join(__dirname, "..", "assets", "css", "tokens.css"), "utf8");

/** Token → [light, dark] (a token defined once applies to both). Resolves var() references. */
function tokens() {
  const raw = {};
  const root = css.slice(css.indexOf(":root {"), css.indexOf(":root[data-theme"));
  for (const m of root.matchAll(/(--[\w-]+):\s*([^;]+);/g)) raw[m[1]] = m[2].trim();
  const resolve = (v, i) => {
    const ld = v.match(/^light-dark\((.+)\)$/);
    if (ld) {
      const parts = ld[1].split(/,(?![^(]*\))/).map((s) => s.trim());
      return resolve(parts[i], i);
    }
    const ref = v.match(/^var\((--[\w-]+)\)$/);
    return ref ? resolve(raw[ref[1]], i) : v;
  };
  const out = {};
  for (const k of Object.keys(raw)) out[k] = [resolve(raw[k], 0), resolve(raw[k], 1)];
  return out;
}

function rgba(c) {
  let m = c.match(/^#([0-9a-f]{6})$/i);
  if (m) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4), 16), 1];
  m = c.match(/^rgba?\(([^)]+)\)$/);
  if (m) {
    const [r, g, b, a = 1] = m[1].split(",").map(Number);
    return [r, g, b, a];
  }
  throw new Error(`Color no reconocido: ${c}`);
}
const over = (top, under) => {
  const [r, g, b, a] = rgba(top);
  const [R, G, B] = rgba(under);
  return `rgba(${r * a + R * (1 - a)},${g * a + G * (1 - a)},${b * a + B * (1 - a)},1)`;
};
function luminance(c) {
  const [r, g, b] = rgba(c).slice(0, 3).map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const T = tokens();
const THEMES = ["claro", "oscuro"];

test("body text, links and accents on the page backgrounds", () => {
  const failures = [];
  for (const [i, theme] of THEMES.entries()) {
    for (const fg of ["--text-1", "--text-2", "--text-3", "--link", "--primary", "--gold-text", "--aviso", "--ok"])
      for (const bg of ["--bg", "--surface", "--surface-2"]) {
        const r = ratio(T[fg][i], over(T[bg][i], T["--bg"][i]));
        if (r < 4.5) failures.push(`${theme}: ${fg} sobre ${bg} = ${r.toFixed(2)}`);
      }
  }
  assert.deepEqual(failures, []);
});

test("search suggestions: the highlighted row (--surface-3)", () => {
  const failures = [];
  for (const [i, theme] of THEMES.entries())
    for (const fg of ["--text-1", "--text-2", "--link"]) {
      const r = ratio(T[fg][i], over(T["--surface-3"][i], T["--bg"][i]));
      if (r < 4.5) failures.push(`${theme}: ${fg} sobre --surface-3 = ${r.toFixed(2)}`);
    }
  assert.deepEqual(failures, []);
});

test("each category / meaning colour on its own tinted background", () => {
  const failures = [];
  for (const [i, theme] of THEMES.entries())
    for (const t of ["c1", "c2", "c3", "c4", "c5", "c6", "aviso", "ok", "ley"]) {
      const fg = T[`--${t}`][i];
      for (const base of ["--surface", "--bg"]) {
        const bg = over(T[`--${t}-bg`][i], T[base][i]);
        const r = ratio(fg, bg);
        if (r < 4.5) failures.push(`${theme}: --${t} sobre --${t}-bg (${base}) = ${r.toFixed(2)}`);
      }
    }
  assert.deepEqual(failures, []);
});

test("header band: text on ink, and the primary button", () => {
  const failures = [];
  for (const [i, theme] of THEMES.entries()) {
    const checks = [
      ["--on-ink", "--ink"],
      ["--on-primary", "--primary"],
    ];
    for (const [fg, bg] of checks) {
      const r = ratio(T[fg][i], T[bg][i]);
      if (r < 4.5) failures.push(`${theme}: ${fg} sobre ${bg} = ${r.toFixed(2)}`);
    }
    const dim = ratio(over(T["--on-ink-2"][i], T["--ink"][i]), T["--ink"][i]);
    if (dim < 4.5) failures.push(`${theme}: --on-ink-2 sobre --ink = ${dim.toFixed(2)}`);
  }
  assert.deepEqual(failures, []);
});
