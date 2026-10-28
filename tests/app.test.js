// Tests of the app in a real browser (headless Edge), from file:// and over http (as on Pages).
// Run: node --test tests/

"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { run } = require("../tools/run");

/** Runs `body` (async page code) in the app and returns its result; fails on any page error. */
async function page(body, { http = false, hash = "" } = {}) {
  const r = await run({ page: `index.html${hash}`, http, browser: "edge", wait: 400, arg: [], body: `const wait = (ms) => new Promise((r) => setTimeout(r, ms));\nconst go = async (h, ms = 500) => { location.hash = h; await wait(ms); };\n${body}` });
  assert.deepEqual(r.exceptions, [], "excepciones en la página");
  assert.deepEqual(r.consoleErrors, [], "errores en la consola");
  return r.result;
}

for (const http of [false, true]) {
  const mode = http ? "http" : "file://";

  test(`[${mode}] home, menu and theme`, { timeout: 60000 }, async () => {
    const r = await page(
      `const before = document.documentElement.dataset.theme || null;
       document.querySelector('[data-action="theme"]').click();
       await wait(50);
       return {
         title: document.title,
         laws: [...document.querySelectorAll('#sidebar a.nav-item')].map((a) => a.getAttribute('href')),
         tiles: document.querySelectorAll('.tile').length,
         before, after: document.documentElement.dataset.theme,
         saved: localStorage.getItem('negociado.tema'),
         foreignKeys: Object.keys(localStorage).filter((k) => !k.startsWith('negociado.')),
       };`,
      { http }
    );
    assert.equal(r.title, "Negociado");
    assert.deepEqual(r.laws.slice(0, 2), ["#/ley/LEC", "#/ley/LJV"]);
    assert.equal(r.tiles, 3);
    assert.ok(["dark", "light"].includes(r.after) && r.after !== r.before, "el botón cambia el tema");
    assert.ok(r.saved, "el tema elegido se recuerda");
    assert.deepEqual(r.foreignKeys, [], "solo claves negociado.*");
  });

  test(`[${mode}] law view: index, article, search, copy`, { timeout: 90000 }, async () => {
    const r = await page(
      `await go('#/ley/LJV', 900);
       const index = { divisions: document.querySelectorAll('.tree-div').length, open: document.querySelectorAll('.tree-div[aria-expanded="true"]').length };
       await go('#/ley/LJV/140');
       const art = { h2: document.querySelector('.article h2').textContent.trim(), current: document.querySelector('.tree [aria-current]').textContent.trim(), tab: document.title };
       // Copy once after leaving and coming back twice: exactly one copy (no piled-up listeners).
       await go('#/'); await go('#/ley/LJV/140'); await go('#/'); await go('#/ley/LJV/140');
       let copies = 0; const real = Neg.copy; Neg.copy = async (t) => { copies++; art.copied = t; return true; };
       document.querySelector('[data-action="copy"]').click(); await wait(50); Neg.copy = real;
       const input = document.querySelector('.toolbar input');
       input.value = 'averiguaciones'; input.dispatchEvent(new Event('input')); await wait(400);
       const search = { count: document.querySelector('[data-count]').textContent, items: [...document.querySelectorAll('.tree-art')].map((a) => a.textContent.trim()), marks: document.querySelectorAll('.law-text mark').length };
       input.value = ''; input.dispatchEvent(new Event('input')); await wait(300);
       await go('#/ley/LEC/778 quater', 1500);
       const quater = document.querySelector('.article h2').textContent.trim();
       await go('#/ley/LJV/42 bis a');
       const lettered = document.querySelector('.article h2').textContent.trim();
       await go('#/ley/LJV/999');
       const missing = document.querySelector('.law-main').textContent;
       await go('#/ley/XYZ', 800);
       const badLaw = document.getElementById('view').textContent;
       return { index, art, copies, search, quater, lettered, missing, badLaw };`,
      { http }
    );
    assert.equal(r.index.divisions, 50, "LJV: 50 divisiones");
    assert.equal(r.index.open, 0, "el índice empieza plegado");
    assert.equal(r.art.h2, "Artículo 140. Competencia");
    assert.equal(r.art.current, "Art. 140. Competencia");
    assert.equal(r.art.tab, "Art. 140 LJV · Negociado");
    assert.equal(r.copies, 1, "un clic, una copia");
    assert.match(r.art.copied, /^LJV › TÍTULO IX\. De la conciliación › Artículo 140\. Competencia\n\n1\. Será competente/);
    assert.equal(r.search.count, "1 artículo");
    assert.deepEqual(r.search.items, ["Art. 140. Competencia en el texto"]);
    assert.ok(r.search.marks >= 1, "resaltado en el texto");
    assert.match(r.quater, /^Artículo 778 quáter\. Ámbito de aplicación/);
    assert.match(r.lettered, /^Artículo 42 bis a\)\. Ámbito de aplicación/);
    assert.match(r.missing, /no tiene artículo 999/);
    assert.match(r.badLaw, /No existe esta ley/);
  });

  test(`[${mode}] law view: mind map`, { timeout: 90000 }, async () => {
    const r = await page(
      `await go('#/ley/LJV/mapa', 2500);
       const items = [...document.querySelectorAll('.mindmap .mm-toolbar-item')].map((b) => b.title);
       return { nodes: document.querySelectorAll('.mindmap svg g.markmap-node').length, items, brand: !!document.querySelector('.mm-toolbar-brand') };`,
      { http }
    );
    assert.equal(r.nodes, 11, "la ley y sus diez títulos, plegados");
    assert.deepEqual(r.items, ["Acercar", "Alejar", "Ajustar a la ventana", "Desplegar o plegar también lo que cuelga del nodo"]);
    assert.equal(r.brand, false);
  });
}

test("search: accents and case ignored, every word must match", { timeout: 60000 }, async () => {
  const r = await page(
    `await go('#/buscar?q=CONCILIACION%20celebracion', 900);
     return [...document.querySelectorAll('.results li strong')].map((s) => s.textContent);`
  );
  assert.deepEqual(r, ["Art. 145. Celebración del acto de conciliación"]);
});
