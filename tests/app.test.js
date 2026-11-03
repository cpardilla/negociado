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

  test(`[${mode}] accessibility: names, controls, headings, skip link, focus after a choice`, { timeout: 120000 }, async () => {
    const r = await page(
      `const name = (e) => e.getAttribute('aria-label') || (e.labels && e.labels[0] && e.labels[0].textContent.trim()) || e.textContent.trim() || e.getAttribute('title') || e.getAttribute('placeholder') || '';
       const faults = [];
       for (const h of ['#/', '#/ley/LJV/140', '#/ley/LJV/mapa', '#/esquema/ljv-conciliacion', '#/guia/ljv-conciliacion/verifica_competencia', '#/guia/ljv-conciliacion/mapa', '#/buscar?q=plazo']) {
         await go(h, 900);
         for (const e of document.querySelectorAll('a[href], button, input, select, textarea')) if (e.getClientRects().length && !name(e)) faults.push(h + ': control sin nombre ' + e.outerHTML.slice(0, 80));
         for (const e of document.querySelectorAll('[data-action],[data-go],[data-group],[data-check]')) if (!/^(A|BUTTON|INPUT|FORM)$/.test(e.tagName)) faults.push(h + ': ' + e.tagName + ' con acción y sin ser control');
         const levels = [...document.querySelectorAll('#view :is(h1,h2,h3,h4)')].filter((x) => x.getClientRects().length).map((x) => +x.tagName[1]);
         if (levels.filter((l) => l === 1).length !== 1) faults.push(h + ': no hay exactamente un h1');
         levels.forEach((l, i) => i && l > levels[i - 1] + 1 && faults.push(h + ': salto h' + levels[i - 1] + '→h' + l));
       }
       await go('#/ley/LJV', 800);
       const hash = location.hash;
       document.querySelector('.skip-link').click(); await wait(100);
       const skip = { sameHash: location.hash === hash, focus: document.activeElement.tagName };
       localStorage.removeItem('negociado.guia.ljv-conciliacion');
       await go('#/guia/ljv-conciliacion/inicio', 800);
       const opt = document.querySelector('[data-go]'); opt.focus(); opt.click(); await wait(600);
       const afterChoice = document.activeElement.tagName;
       await go('#/esquema/ljv-conciliacion', 800);
       const t = document.querySelector('.card-toggle'); const closed = t.getAttribute('aria-expanded'); t.click();
       return { faults, skip, afterChoice, toggle: [closed, t.getAttribute('aria-expanded')], announce: document.getElementById('announce').textContent, live: document.getElementById('view').getAttribute('aria-live') };`,
      { http }
    );
    assert.deepEqual(r.faults, []);
    assert.deepEqual(r.skip, { sameHash: true, focus: "H1" }, "«Saltar al contenido» lleva al título sin tocar la dirección");
    assert.equal(r.afterChoice, "H2", "tras elegir una opción, el foco pasa al título del paso nuevo");
    assert.deepEqual(r.toggle, ["false", "true"], "el botón de la ficha dice si está abierta");
    assert.match(r.announce, /conciliación/i, "se anuncia la página nueva");
    assert.equal(r.live, null, "la vista entera no es una región viva");
  });

  test(`[${mode}] home shortcuts: most used and recently visited (this browser only)`, { timeout: 60000 }, async () => {
    const r = await page(
      `localStorage.removeItem('negociado.recientes');
       await go('#/', 400);
       const fixed = document.querySelectorAll('.shortcut').length;
       for (const h of ['#/ley/LJV/140', '#/esquema/lec-division-herencia', '#/guia/ljv-conciliacion', '#/esquema/no-existe', '#/guia/ljv-conciliacion']) await go(h, 600);
       await go('#/', 400);
       const recent = [...document.querySelectorAll('.shortcut-link')].map((a) => a.getAttribute('href'));
       document.querySelector('[data-action="clear-recent"]').click();
       return { fixed, recent, cleared: localStorage.getItem('negociado.recientes'), gone: !document.querySelector('.shortcut-link') };`,
      { http }
    );
    assert.equal(r.fixed, 3, "tres accesos fijos");
    assert.deepEqual(r.recent, ["#/guia/ljv-conciliacion", "#/esquema/lec-division-herencia", "#/ley/LJV"], "lo último primero, sin repetidos ni direcciones erróneas");
    assert.equal(r.cleared, null);
    assert.ok(r.gone);
  });
}

test("live references: links, cited apartado only, no inner scroll, inside the screen, Esc and ✕", { timeout: 90000 }, async () => {
  const r = await page(
    `await go('#/ley/LJV/6', 1000);
     // (the BOE text has non-breaking spaces: compared with spaces normalised)
     const inLaw = [...document.querySelectorAll('.law-text a.ref')].map((a) => a.textContent.replace(/\\s+/g, ' ') + ' → ' + a.dataset.ley + ' ' + a.dataset.art);
     // A text like an esquema's: one citation to a law the app carries, one to a law it does not.
     const box = document.createElement('p');
     box.textContent = 'Competencia: art. 140.1 LJV; prescripción: art. 1973 CC.';
     document.querySelector('.page-head').append(box);
     Neg.referencias.link(box, 'LJV');
     const refs = [...box.querySelectorAll('a.ref')].map((a) => a.textContent);
     box.querySelector('a.ref').click(); await wait(500);
     const p = document.querySelector('.popover'); const rect = p.getBoundingClientRect();
     const first = { head: p.querySelector('.popover-head strong').textContent, paras: [...p.querySelectorAll('.popover-body p')].map((x) => x.textContent.slice(0, 12)), foot: p.querySelector('.popover-foot').textContent,
       noScroll: p.scrollHeight <= p.clientHeight + 1, inside: rect.top >= 0 && rect.bottom <= innerHeight && rect.left >= 0 && rect.right <= innerWidth };
     document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(50);
     const escClosed = !document.querySelector('.popover');
     box.querySelectorAll('a.ref')[1].click(); await wait(400);
     const other = document.querySelector('.popover').textContent.replace(/\\s+/g, ' ');
     document.querySelector('.popover [data-action="close-ref"]').click(); await wait(50);
     const xClosed = !document.querySelector('.popover');
     // Off-screen link (scrolled away): the window still opens inside the screen.
     document.querySelector('.law-text a.ref').click(); await wait(500);
     const r2 = document.querySelector('.popover').getBoundingClientRect();
     const insideAgain = r2.top >= 0 && r2.bottom <= innerHeight;
     return { inLaw, refs, first, escClosed, other, xClosed, insideAgain };`
  );
  assert.deepEqual(r.inLaw, ["artículo 43 de la Ley de Enjuiciamiento Civil → LEC 43"]);
  assert.deepEqual(r.refs, ["art. 140.1 LJV", "art. 1973 CC"]);
  assert.equal(r.first.head, "Art. 140.1 LJV");
  assert.deepEqual(r.first.paras, ["1. Será comp", "Si el requer", "Si tras la r"], "solo el apartado 1 (con sus párrafos)");
  assert.match(r.first.foot, /Ver artículo completo/);
  assert.ok(r.first.noScroll, "sin barra de desplazamiento propia");
  assert.ok(r.first.inside, "dentro de la pantalla");
  assert.ok(r.escClosed, "Esc la cierra");
  // Cited laws now carry the cited articles: text plus a direct link to the article in the BOE.
  assert.match(r.other, /Art\. 1973 CC.*Ver en el BOE/);
  assert.ok(r.xClosed, "✕ la cierra");
  assert.ok(r.insideAgain, "dentro de la pantalla aunque el enlace no esté a la vista");
});

test("live references: a law cited by its name (LO 1/2025), and an apartado numbered in words shown alone", { timeout: 60000 }, async () => {
  const r = await page(
    `await go('#/', 300);
     const box = document.createElement('p');
     box.textContent = 'Requisito: art. 5.1 LO 1/2025; umbral: art. 22.8 de la LO 1/2025; art. 22.54 de la Ley Orgánica 1/2025.';
     document.querySelector('.page-head').append(box);
     Neg.referencias.link(box, 'LJV');
     const open = async (i) => {
       box.querySelectorAll('a.ref')[i].click(); await wait(600);
       const p = document.querySelector('.popover');
       const out = { head: p.querySelector('.popover-head strong').textContent, body: p.querySelector('.popover-body').textContent, paras: p.querySelectorAll('.popover-body p').length, foot: p.querySelector('.popover-foot').textContent };
       document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(50);
       return out;
     };
     const refs = [...box.querySelectorAll('a.ref')].map((a) => a.dataset.ley + ' ' + a.dataset.art + '.' + a.dataset.apdo);
     return { refs, a: await open(0), b: await open(1), c: await open(2) };`
  );
  assert.deepEqual(r.refs, ["LO1-2025 5.1", "LO1-2025 22.8", "LO1-2025 22.54"]);
  assert.equal(r.a.head, "Art. 5.1 LO 1/2025");
  assert.match(r.a.body, /^1\. En el orden jurisdiccional civil/);
  assert.equal(r.b.head, "Art. 22.8 LO 1/2025");
  assert.match(r.b.body, /^Ocho\./);
  assert.match(r.c.body, /^Cincuenta y cuatro\./);
  assert.ok(r.c.body.length < 2000, "solo el apartado citado, no los miles de párrafos del artículo");
  assert.match(r.a.foot, /Ver en el BOE/);
});

test("esquema view: cards, filters, search, direct link to an article's card, references", { timeout: 90000 }, async () => {
  const r = await page(
    `await go('#/esquema/ljv-conciliacion', 1000);
     const base = { cards: document.querySelectorAll('[data-card]').length, open: document.querySelectorAll('[data-card][aria-expanded="true"]').length,
       refs: document.querySelectorAll('.esq-body a.ref').length, norms: document.querySelectorAll('.norm').length, groups: document.querySelectorAll('.group').length,
       revision: document.querySelector('.page-meta .t-ok').textContent, neutralTagColor: getComputedStyle(document.querySelector('.card .card-meta .tag:not([class*=" c"]):not([class*=" t-"])') || document.body).color };
     const first = document.querySelector('[data-card] [data-action="toggle"]'); first.click(); await wait(50);
     const toggled = first.closest('[data-card]').getAttribute('aria-expanded');
     document.querySelector('.chip[data-cat="c4"]').click(); await wait(100);
     const cat = document.querySelector('[data-count]').textContent;
     document.querySelector('.chip[data-cat="c4"]').click(); await wait(100);
     const input = document.querySelector('.toolbar input');
     input.value = 'PRESCRIPCION'; input.dispatchEvent(new Event('input')); await wait(300);
     const search = document.querySelector('[data-count]').textContent;
     input.value = 'zzzz'; input.dispatchEvent(new Event('input')); await wait(300);
     const empty = !!document.querySelector('.esq-empty');
     input.value = ''; input.dispatchEvent(new Event('input')); await wait(200);
     document.querySelector('[data-action="expand"]').click();
     const all = document.querySelectorAll('[data-card][aria-expanded="true"]').length;
     await go('#/esquema/ljv-conciliacion/148', 900);
     // (cards opened before stay open: the one the address points to is the highlighted one)
     const target = document.querySelector('.card.flash');
     const deep = target.querySelector('.card-art').textContent + ' ' + target.getAttribute('aria-expanded');
     await go('#/esquema/no-existe', 300);
     const missing = document.getElementById('view').textContent;
     return { base, toggled, cat, search, empty, all, deep, missing };`
  );
  assert.equal(r.base.cards, 11);
  assert.equal(r.base.open, 0, "las fichas empiezan plegadas");
  assert.ok(r.base.refs > 50, "las citas son enlaces");
  assert.equal(r.base.norms, 5);
  assert.equal(r.base.groups, 3);
  assert.match(r.base.revision, /^Revisado con el BOE a /);
  assert.equal(r.toggled, "true");
  assert.equal(r.cat, "2 de 11 fichas");
  assert.equal(r.search, "2 de 11 fichas", "sin tildes ni mayúsculas");
  assert.ok(r.empty, "aviso cuando nada coincide");
  assert.equal(r.all, 11);
  assert.equal(r.deep, "Artículo 148 true");
  assert.match(r.missing, /No existe este esquema/);
});

test("guía view: steps with addresses, choices, back button, route, ends, map, saved progress", { timeout: 120000 }, async () => {
  const r = await page(
    `localStorage.removeItem('negociado.guia.ljv-conciliacion');
     await go('#/guia/ljv-conciliacion', 1200);
     const start = { hash: location.hash, options: document.querySelectorAll('.option').length, keys: [...document.querySelectorAll('.option .key')].map((k) => k.textContent).join('') };
     document.querySelector('.option').click(); await wait(600);
     const chose = { hash: location.hash, route: document.querySelectorAll('.panel .route li').length, choice: document.querySelector('.panel .route .choice').textContent };
     document.querySelector('[data-go][data-choice=""]').click(); await wait(600);
     const next = location.hash;
     history.back(); await wait(700);
     const back = { hash: location.hash, route: document.querySelectorAll('.panel .route li').length };
     document.querySelector('.checklist input').click(); await wait(50);
     const saved = JSON.parse(localStorage.getItem('negociado.guia.ljv-conciliacion'));
     await go('#/guia/ljv-conciliacion/fin_abuso');
     const end = document.querySelector('.block.end').textContent;
     await go('#/guia/ljv-conciliacion/mapa', 900);
     const map = { phases: document.querySelectorAll('.map-phase').length, steps: document.querySelectorAll('.map-phase li').length };
     await go('#/guia/ljv-conciliacion', 800); // back to where the viewer was
     const resumed = location.hash;
     document.querySelector('[data-action="restart"]').click(); await wait(700);
     const restarted = { hash: location.hash, route: document.querySelectorAll('.panel .route li').length };
     await go('#/guia/ljv-conciliacion/no_existe', 900);
     const badStep = location.hash;
     return { start, chose, next, back, saved, end, map, resumed, restarted, badStep };`
  );
  assert.equal(r.start.hash, "#/guia/ljv-conciliacion/inicio");
  assert.equal(r.start.keys, "AB");
  assert.equal(r.chose.hash, "#/guia/ljv-conciliacion/verifica_competencia");
  assert.equal(r.chose.route, 2);
  assert.match(r.chose.choice, /^→ Sí, la finalidad es lícita/);
  assert.equal(r.next, "#/guia/ljv-conciliacion/verifica_exclusion");
  assert.deepEqual(r.back, { hash: "#/guia/ljv-conciliacion/verifica_competencia", route: 2 }, "el botón Atrás del navegador vuelve un paso");
  assert.equal(r.saved.cur, "verifica_competencia");
  assert.deepEqual(r.saved.checks.verifica_competencia, ["1:0"]);
  assert.match(r.end, /Procedimiento finalizado sin éxito/);
  assert.deepEqual(r.map, { phases: 10, steps: 51 });
  assert.equal(r.resumed, "#/guia/ljv-conciliacion/fin_abuso", "vuelve donde se dejó");
  assert.deepEqual(r.restarted, { hash: "#/guia/ljv-conciliacion/inicio", route: 1 });
  assert.equal(r.badStep, "#/guia/ljv-conciliacion/inicio", "un paso inexistente lleva al paso guardado");
});

test("every esquema, guía and law renders, with no page error", { timeout: 300000 }, async () => {
  const r = await page(
    `const out = {};
     for (const e of Neg.catalogo.esquemas) { await go('#/esquema/' + e.id, 500); out['esquema/' + e.id] = document.querySelectorAll('[data-card]').length; }
     for (const g of Neg.catalogo.guias) {
       localStorage.removeItem('negociado.guia.' + g.id);
       await go('#/guia/' + g.id, 500); out['guia/' + g.id] = document.querySelectorAll('.step h2').length;
       await go('#/guia/' + g.id + '/mapa', 300); out['mapa/' + g.id] = document.querySelectorAll('.map-phase li').length;
     }
     for (const l of Neg.catalogo.leyes) { await go('#/ley/' + l.id, 900); out['ley/' + l.id] = document.querySelectorAll('.tree-div').length; }
     return out;`
  );
  const zero = Object.entries(r).filter(([, n]) => !n);
  assert.deepEqual(zero, [], "cada recurso dibuja su contenido");
  assert.equal(Object.keys(r).length, 27 + 25 * 2 + 2);
});

test("no horizontal overflow at phone or desktop width, in any view", { timeout: 180000 }, async () => {
  const r = await page(
    `const views = ['#/', '#/ley/LJV', '#/ley/LJV/140', '#/ley/LJV/mapa', '#/esquema/ljv-conciliacion', '#/esquema/lec-division-herencia', '#/guia/ljv-conciliacion/inicio', '#/guia/ljv-conciliacion/mapa', '#/buscar?q=caucion'];
     const out = [];
     for (const w of [390, 1366]) {
       await __run({ viewport: [w, 844] });
       for (const v of views) {
         await go(v, v.includes('mapa') && v.includes('ley') ? 1800 : 700);
         const content = document.getElementById('content');
         const page = document.documentElement.scrollWidth - document.documentElement.clientWidth;
         const inner = content.scrollWidth - content.clientWidth;
         if (page > 0 || inner > 0) out.push(w + ' ' + v + ': ' + page + '/' + inner);
       }
     }
     return out;`
  );
  assert.deepEqual(r, []);
});

test("notes and tables keep their distance from what surrounds them, in every open card, at both widths", { timeout: 180000 }, async () => {
  const r = await page(
    `const faults = [];
     const vis = (e) => e.getClientRects().length > 0 && e.getBoundingClientRect().height > 0;
     for (const w of [1366, 390]) {
       await __run({ viewport: [w, 844] });
       for (const e of Neg.catalogo.esquemas) {
         await go('#/esquema/' + e.id, 350);
         document.querySelectorAll('[data-action="fold"][aria-expanded="false"]').forEach((b) => b.click());
         document.querySelector('[data-action="expand"]').click();
         await wait(60);
         for (const el of document.querySelectorAll('.esq-body :is(.card-body, .points) > :is(.block, .table-wrap)')) {
           const kids = [...el.parentElement.children].filter(vis);
           const i = kids.indexOf(el);
           if (i < 1) continue;
           // In a card with columns, what is above is the lowest of everything before it.
           const gap = el.getBoundingClientRect().top - Math.max(...kids.slice(0, i).map((k) => k.getBoundingClientRect().bottom));
           const min = el.parentElement.matches('.card-body') ? 20 : 12;
           // With one column it is exact; with two, balancing them can leave a little more.
           if (gap < min - 1 || (w === 390 && gap > min + 1)) faults.push(w + ' ' + e.id + ': ' + Math.round(gap) + ' px');
         }
       }
     }
     return faults;`
  );
  assert.deepEqual(r, []);
});

test("old addresses (as GitHub Pages serves them) redirect to their new place, or explain", { timeout: 120000 }, async () => {
  const cases = [
    ["00 - Indices/LJV - Indice interactivo.html", "#/ley/LJV"],
    ["01 - Legislación completa interactiva/Ley 1-2000, de 7 de enero, de Enjuiciamiento Civil.html", "#/ley/LEC/mapa"],
    ["02 - Esquemas interactivos/LJV/08 - TÍTULO IX - De la conciliación/TÍTULO IX - De la conciliación.html", "#/esquema/ljv-conciliacion"],
    ["03 - Guías de tramitación/LEC/01 - De las diligencias preliminares/De las diligencias preliminares.html", "#/guia/lec-diligencias-preliminares"],
    ["02 - Esquemas interactivos/LJV/03 - TÍTULO II - De los expedientes de jurisdicción voluntaria en materia de personas/04 - CAPÍTULO I BIS & TER - Aprobación judicial de la modificación de la mención registral relativa al sexo - Capítulos I Bis y I Ter de la Ley 15-2015.html", null],
    ["no-existe/nada.html", null],
  ];
  for (const [old, target] of cases) {
    const r = await run({ page: old, http: true, browser: "edge", wait: 1500, arg: [], body: "return { hash: location.hash, path: location.pathname, text: document.body.innerText.slice(0, 200) };" });
    if (target) {
      assert.equal(r.result.hash.startsWith(target), true, `${old} → ${r.result.hash}`);
      assert.equal(r.result.path, "/", old);
    } else assert.match(r.result.text, /Esta dirección ya no existe/, old);
  }
});

test("search: accents and case ignored, every word must match", { timeout: 60000 }, async () => {
  const r = await page(
    `await go('#/buscar?q=CONCILIACION%20celebracion', 900);
     return [...document.querySelectorAll('.results li strong')].map((s) => s.textContent);`
  );
  // The article in the law, its card in the esquema and the step in the guía.
  assert.deepEqual(r, ["Art. 145. Celebración del acto de conciliación", "Artículo 145 · Celebración del acto de conciliación", "Celebración del acto de conciliación"]);
});

test("guía printed: the route taken as a procedure sheet, the screen unchanged", { timeout: 60000 }, async () => {
  const r = await page(
    `localStorage.removeItem('negociado.guia.ljv-conciliacion');
     await go('#/guia/ljv-conciliacion/fin_avenencia_firme', 900);
     const sheet = document.querySelector('.print-sheet');
     const screen = getComputedStyle(sheet).display;
     window.dispatchEvent(new Event('beforeprint'));
     await __run({ media: 'print' }); await wait(100);
     const out = { screen, print: getComputedStyle(sheet).display, step: getComputedStyle(document.querySelector('.guide')).display, steps: sheet.querySelectorAll('.sheet-step').length, last: sheet.querySelector('.sheet-step:last-of-type h3').textContent, choices: sheet.querySelectorAll('.sheet-choice').length };
     await __run({ media: '' });
     return out;`
  );
  assert.equal(r.screen, "none", "en pantalla no se ve");
  assert.equal(r.print, "block");
  assert.equal(r.step, "none", "en papel, la hoja sustituye al paso");
  assert.ok(r.steps > 5, "todos los pasos del recorrido");
  assert.ok(r.choices >= 1 && r.choices < r.steps, "la decisión tomada donde hubo que elegir");
  assert.match(r.last, /Acuerdo firme/i);
});

test("law article: «Comprobar vigencia» (the BOE's answer simulated: no network in tests)", { timeout: 60000 }, async () => {
  const r = await page(
    `const run = async (xml) => {
       window.fetch = xml === null ? async () => { throw new TypeError('Failed to fetch'); } : async (url) => ({ ok: true, text: async () => (run.url = url, xml) });
       document.querySelector('[data-action="vigencia"]').click(); await wait(300);
       return [...document.querySelectorAll('[data-vigencia] .block-label')].map((x) => x.textContent);
     };
     await go('#/ley/LJV/140', 900);
     const a = (await Neg.leyes.load('LJV')).articulos['140'];
     const same = '<version id_norma="' + (a.m || 'BOE-A-2015-7391') + '" fecha_publicacion="' + a.v + '" fecha_vigencia="' + a.v + '"><p class="articulo">Artículo 140.</p>' + a.p.map((p) => '<p class="parrafo">' + p[1].replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</p>').join('') + '</version>';
     const igual = await run(same);
     const url = run.url;
     const posterior = await run(same + '<version id_norma="BOE-A-2026-1" fecha_publicacion="20261020" fecha_vigencia="20261025"><p class="parrafo">Nuevo.</p></version>');
     const futura = await run(same + '<version id_norma="BOE-A-2099-1" fecha_publicacion="20990101" fecha_vigencia="20990201"><p class="parrafo">Futuro.</p></version>');
     const sinRed = await run(null);
     return { igual, url, posterior, futura, sinRed };`
  );
  assert.deepEqual(r.igual, ["Vigente sin cambios"]);
  assert.equal(r.url, "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/BOE-A-2015-7391/texto/bloque/a140");
  assert.deepEqual(r.posterior, ["Hay una redacción posterior"]);
  assert.deepEqual(r.futura, ["Vigente sin cambios", "Modificación publicada, aún no vigente"]);
  assert.deepEqual(r.sinRed, ["No se ha podido consultar el BOE"]);
});

test("law article: «Actualizar contenido» puts the BOE's text in force in this browser, and it can be undone", { timeout: 60000 }, async () => {
  const r = await page(
    `localStorage.removeItem('negociado.leyes.actualizado');
     await go('#/ley/LEC/5', 900);
     const original = document.querySelector('.law-main .law-text p').textContent;
     window.fetch = async () => ({ ok: true, text: async () => '<version id_norma="BOE-A-2026-1" fecha_publicacion="20261020" fecha_vigencia="20261025"><p class="articulo">Artículo 5.</p><p class="parrafo">1. Texto nuevo.</p></version>' });
     document.querySelector('[data-action="vigencia"]').click(); await wait(300);
     document.querySelector('[data-action="actualizar"]').click(); await wait(200);
     const updated = { text: document.querySelector('.law-main .law-text p').textContent, notice: !!document.querySelector('.updated'), saved: !!JSON.parse(localStorage.getItem('negociado.leyes.actualizado')).LEC['5'] };
     await go('#/ley/LEC/6'); await go('#/ley/LEC/5');
     const kept = document.querySelector('.law-main .law-text p').textContent;
     document.querySelector('[data-action="restaurar"]').click(); await wait(200);
     return { original, updated, kept, restored: document.querySelector('.law-main .law-text p').textContent, cleared: localStorage.getItem('negociado.leyes.actualizado'), rows: new Set([...document.querySelectorAll('.article-actions > *')].map((b) => Math.round(b.getBoundingClientRect().top))).size };`
  );
  assert.deepEqual(r.updated, { text: "1. Texto nuevo.", notice: true, saved: true });
  assert.equal(r.kept, "1. Texto nuevo.", "sigue actualizado al volver al artículo");
  assert.equal(r.restored, r.original, "vuelve el texto de la aplicación");
  assert.equal(r.cleared, null);
  assert.equal(r.rows, 1, "los botones del artículo, en una fila");
});

test("related-law blocks link to the law they name; a law the app does not carry is not linked", { timeout: 60000 }, async () => {
  const r = await page(
    `const refs = (n) => [...n.querySelectorAll('a.ref')].map((a) => a.dataset.ley + ' ' + a.dataset.art);
     const block = (re) => [...document.querySelectorAll('.norm')].find((n) => re.test(n.querySelector('.norm-law').textContent));
     await go('#/esquema/lec-division-herencia', 1200);
     const reglamento = refs(block(/650\\/2012/));
     const hipotecaria = refs(block(/Ley Hipotecaria/));
     await go('#/esquema/ljv-filiacion', 1200);
     const cc = refs(block(/Código Civil/));
     await go('#/esquema/lec-administracion-caudal', 1200);
     const excepcion = refs(block(/Ley Hipotecaria/));
     await go('#/guia/ljv-ausencia-fallecimiento/competencia_fallecimiento', 1200);
     const g17 = [...document.querySelectorAll('[data-step] .step-body a.ref')].filter((a) => a.textContent.includes('194')).map((a) => a.textContent + ' ' + a.dataset.ley);
     return { reglamento, hipotecaria, cc, excepcion, g17 };`
  );
  assert.deepEqual(r.reglamento, [], "el Reglamento 650/2012 no se enlaza a la LEC");
  assert.ok(r.hipotecaria.includes("LH 14"), "Ley Hipotecaria");
  assert.ok(r.cc.includes("CC 124") && !r.cc.some((x) => x.startsWith("LJV")), "Código Civil, no LJV");
  assert.deepEqual(r.excepcion, ["LEC 797"], "la excepción nombrada lleva a su ley");
  assert.ok(r.g17.includes("(art. 194.2.º y 3.º CC) CC"), "G17: Código Civil, la cita entera");
});

test("search: what is typed is text, whatever its signs; a stray % in the address is no error", { timeout: 60000 }, async () => {
  const r = await page(
    `const ask = async (q) => {
       const input = document.querySelector('input[name="q"]');
       input.value = q;
       input.form.requestSubmit();
       await wait(900);
       return { h1: document.querySelector('#view h1').textContent, hits: document.querySelectorAll('.results li').length };
     };
     const plain = await ask('caución');
     const signs = await ask('¿caución?');
     const amp = await ask('Sección Civil & Mercantil');
     const plus = await ask('art+5');
     location.hash = '#/buscar?q=%'; await wait(900);
     const stray = document.querySelector('#view h1').textContent;
     await go('#/ley/LEC/778%20quater', 1500);
     const spaced = document.querySelector('.article h2').textContent;
     return { plain, signs, amp, plus, stray, spaced };`
  );
  assert.ok(r.plain.hits > 0);
  assert.deepEqual(r.signs, { h1: "Resultados de «¿caución?»", hits: r.plain.hits }, "los signos no cuentan como parte de la palabra");
  assert.equal(r.amp.h1, "Resultados de «Sección Civil & Mercantil»");
  assert.equal(r.plus.h1, "Resultados de «art+5»");
  assert.equal(r.stray, "Resultados de «%»");
  assert.match(r.spaced, /^Artículo 778 quáter/);
});
