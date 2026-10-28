// Tests of the development tools (phase 0): BOE reader, content checker,
// inventory fidelity and the headless runner.
// Run: node --test tests/

"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const { load, articleKey, range, division, ordinalNumber } = require("../tools/lib/boe");
const { citations, parseCitation, plazos, termInText, inQuotes, checkResource } = require("../tools/check-content");

// ── BOE reader ──────────────────────────────────────────────────────────────

test("articleKey normalises article numbers", () => {
  assert.equal(articleKey("140"), "140");
  assert.equal(articleKey("26 bis"), "26 bis");
  assert.equal(articleKey("26BIS"), "26 bis");
  assert.equal(articleKey("42 bis a)"), "42 bis a");
  assert.equal(articleKey("42 bis.b)"), "42 bis b");
  assert.equal(articleKey("80 quinquies"), "80 quinquies");
  assert.equal(articleKey("778 quáter"), "778 quater", "the BOE writes it with an accent");
});

test("LEC: 778 and 778 quáter are two articles (no key collision)", () => {
  const lec = load("LEC");
  assert.match(lec.articulos.get("778").rubrica, /^Eficacia civil de resoluciones/);
  assert.match(lec.articulos.get("778 quater").rubrica, /^Ámbito de aplicación/);
  assert.equal(new Set(lec.orden).size, lec.orden.length);
});

test("BOE snapshots: every law in tools/leyes.json is present and well formed", () => {
  for (const { clave } of JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "leyes.json"), "utf8"))) {
    const law = load(clave);
    assert.ok(law, `${clave} sin instantánea`);
    assert.match(law.fecha, /^\d{8}$/, `${clave}: fecha`);
    assert.ok(law.articulos.size > 5, `${clave}: artículos`);
  }
});

test("LJV and LEC: articles, headings, apartados and repealed articles", () => {
  const ljv = load("LJV");
  const lec = load("LEC");
  assert.equal(ljv.articulos.get("140").rubrica, "Competencia");
  assert.deepEqual([...ljv.articulos.get("140").apartados.keys()], ["1", "2"]);
  for (const k of ["42 bis a", "42 bis b", "42 bis c"]) assert.ok(ljv.articulos.has(k), k);
  assert.equal(ljv.orden[ljv.orden.length - 1], "148");
  assert.equal(lec.orden[lec.orden.length - 1], "827");
  assert.equal(lec.articulos.get("457").sinContenido, true);
  assert.equal(lec.articulos.get("458").sinContenido, false);
});

test("articles numbered in words ('Artículo primero') are indexed by number", () => {
  assert.equal(ordinalNumber("primero"), 1);
  assert.equal(ordinalNumber("décimo"), 10);
  assert.equal(ordinalNumber("undécimo"), 11);
  assert.equal(ordinalNumber("decimotercero"), 13);
  assert.equal(ordinalNumber("vigésimo segundo"), 22);
  assert.equal(ordinalNumber("único"), null);
  const lopdh = load("LOPDH");
  assert.ok(lopdh.articulos.has("7") && lopdh.articulos.has("9"), "LO 1/1982 arts. 7 y 9");
  assert.ok(lopdh.articulos.get("7").texto.includes("intromisiones ilegítimas"));
  assert.ok(load("LTO").articulos.has("4"), "Ley 30/1979 art. 4");
});

test("ordinals: '2.°' (degree sign) and 'Primero.' are sub-items", () => {
  assert.ok(load("CC").articulos.get("169").apartados.get("_").subs.has("2"));
  const lh42 = load("LH").articulos.get("42").apartados.get("_").subs;
  assert.ok(lh42.has("1") && lh42.has("9"));
});

test("range and division follow the law's own order and headings", () => {
  assert.deepEqual(range(load("LJV"), "26 bis", "26 quinquies"), ["26 bis", "26 ter", "26 quater", "26 quinquies"]);
  assert.equal(range(load("LJV"), "30", "20"), null);
  const conc = division(load("LJV"), ["De la conciliación"]);
  assert.equal(conc.numero, "TÍTULO IX");
  assert.equal(conc.articulos.length, 10);
  // "JV" abbreviation in folder names
  assert.equal(division(load("LJV"), ["De las normas comunes en materia de tramitación de los expedientes de JV"]).numero, "TÍTULO I");
  // A heading that exists in several places is not a match.
  assert.equal(division(load("LJV"), ["Disposición común"]), null);
});

// ── Citation and term parsing ───────────────────────────────────────────────

test("parseCitation: ranges, lists, apartados, lettered articles", () => {
  assert.deepEqual(parseCitation("256 a 263"), [{ art: "256", apdo: null, sub: null, hasta: "263" }]);
  assert.deepEqual(parseCitation("6, 7 y 9").map((r) => r.art), ["6", "7", "9"]);
  assert.deepEqual(parseCitation("517.2.9º")[0], { art: "517", apdo: "2", sub: "9" });
  // The "a" of "42 bis a)" is part of the article, not a range separator.
  assert.deepEqual(parseCitation("42 bis a)")[0], { art: "42 bis", apdo: null, sub: "a" });
  // "18.4.ª" is a rule (regla), not apartado 4.
  assert.deepEqual(parseCitation("18.4.ª")[0], { art: "18", apdo: null, regla: "4" });
});

test("citations: the law is taken from after or before the article", () => {
  const one = (t, d) => citations(t, d, false)[0];
  assert.equal(one("conforme al art. 140.3 LJV").law, "LJV");
  assert.equal(one("LEC art. 517.2.9º").law, "LEC");
  assert.equal(one("el artículo 1973 del Código Civil").law, "CC");
  assert.equal(one("art. 7.4 LO 1/1982").law, "LOPDH");
  assert.equal(one("Ley 15/2015, arts. 2, 139-148").law, "LJV");
  assert.equal(one("art.140 LJV").law, "LJV", "without a space after 'art.'");
  const bare = one("según el art. 17", "LJV");
  assert.equal(bare.law, "LJV");
  assert.equal(bare.porDefecto, true);
  // A text naming only other laws: a bare article is not the resource's own law.
  assert.equal(citations("Ley Orgánica 1/1982: véase el art. 7", "LJV", false).length, 0);
});

test("plazos and termInText", () => {
  assert.deepEqual(plazos("10 días hábiles, 6 meses y 1 mes").map((p) => [p.n, p.unit]), [[10, "dia"], [6, "mes"], [1, "mes"]]);
  assert.ok(termInText({ n: 20, unit: "dia" }, "en el plazo de veinte días"));
  assert.ok(termInText({ n: 1, unit: "mes" }, "dentro de un mes"));
  assert.ok(termInText({ n: 2, unit: "ano" }, "durante los dos últimos años"));
  assert.ok(termInText({ n: 5, unit: "dia" }, "en los cinco días siguientes"));
  assert.ok(!termInText({ n: 5, unit: "dia" }, "en los quince días siguientes"));
  assert.ok(!termInText({ n: 6, unit: "mes" }, "seis años"));
});

test("inQuotes", () => {
  const t = "dice «el Secretario judicial» y el Secretario judicial";
  assert.equal(inQuotes(t, t.indexOf("Secretario")), true);
  assert.equal(inQuotes(t, t.lastIndexOf("Secretario")), false);
});

// ── Checks on a synthetic guía ──────────────────────────────────────────────

test("checkResource: guía graph faults are found", () => {
  const rec = {
    id: "G99",
    tipo: "guia",
    ruta: "03 - Guías de tramitación/LJV/99 - Prueba.html",
    cabecera: null,
    inicio: "inicio",
    actores: { etiquetas: { laj: "LAJ" }, sinEtiqueta: [] },
    pasos: {
      inicio: { t: "Inicio", ac: "laj", opts: [{ t: "Sí", n: "a" }, { t: "No", n: "falta" }] },
      a: { t: "Paso A", ac: "juez" },
      fin: { t: "Fin", ac: "laj", end: "success" },
      suelto: { t: "Huérfano", ac: "laj", end: "neutral" },
    },
  };
  const msgs = checkResource(rec).findings.filter((f) => f.check === "grafos").map((f) => f.msg);
  assert.ok(msgs.some((m) => m.includes("«falta», que no existe")));
  assert.ok(msgs.some((m) => m.includes("no tiene salida ni es final")));
  assert.ok(msgs.some((m) => m.includes("actor «juez» sin etiqueta")));
  assert.ok(msgs.some((m) => m.includes("inalcanzables") && m.includes("fin") && m.includes("suelto")));
});

test("checkResource: a repealed article and a missing apartado are errors/warnings", () => {
  const rec = {
    id: "G98",
    tipo: "guia",
    ruta: "03 - Guías de tramitación/LJV/98 - Prueba.html",
    cabecera: null,
    inicio: "inicio",
    actores: { etiquetas: { laj: "LAJ" }, sinEtiqueta: [] },
    pasos: { inicio: { t: "Apelación (art. 457 LEC); competencia del art. 140.5 LJV", ac: "laj", end: "neutral" } },
  };
  const f = checkResource(rec).findings.filter((x) => x.check === "citas");
  assert.ok(f.some((x) => x.level === "error" && x.msg.includes("457 LEC está sin contenido")));
  assert.ok(f.some((x) => x.level === "aviso" && x.msg.includes("no tiene apartado 5")));
});

// ── Inventory fidelity ──────────────────────────────────────────────────────

const catalogo = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", "catalogo.json"), "utf8"));
const record = (id) => JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", `${id}.json`), "utf8"));
const html = (item) => fs.readFileSync(path.join(ROOT, item.ruta), "utf8");

test("inventory: 57 resources with stable ids, in folder order", () => {
  assert.equal(catalogo.length, 57);
  assert.deepEqual(
    catalogo.map((c) => c.id),
    ["I-LEC", "I-LJV", "L-LEC", "L-LJV", ...Array.from({ length: 28 }, (_, i) => `E${String(i + 1).padStart(2, "0")}`), ...Array.from({ length: 25 }, (_, i) => `G${String(i + 1).padStart(2, "0")}`)]
  );
});

test("inventory: every esquema card extracted, no text left uncaptured", () => {
  for (const item of catalogo.filter((c) => c.tipo === "esquema")) {
    const rec = record(item.id);
    const cards = rec.secciones.flatMap((s) => s.contenido || []).filter((b) => b.tarjeta).length;
    // Attributes may span several lines (some files are formatted differently).
    const inHtml = (html(item).match(/<article\s[^>]*\bclass="map-card\b/g) || []).length;
    assert.equal(cards, inHtml, `${item.id}: tarjetas`);
    assert.deepEqual(rec.sinCapturar, [], `${item.id}: texto sin capturar`);
    assert.equal(rec.erroresPagina, undefined, `${item.id}: errores de página`);
  }
});

test("inventory: every guía step extracted, with a title and a known start", () => {
  for (const item of catalogo.filter((c) => c.tipo === "guia")) {
    const rec = record(item.id);
    const ids = Object.keys(rec.pasos || {});
    assert.ok(ids.length > 10, `${item.id}: pasos`);
    assert.ok(rec.pasos[rec.inicio], `${item.id}: inicio «${rec.inicio}»`);
    for (const id of ids) assert.equal(typeof rec.pasos[id].t, "string", `${item.id}.${id}: título`);
    // Every step id appears as a key in the page source.
    const src = html(item);
    for (const id of ids) assert.ok(new RegExp(`["']?${id}["']?\\s*:\\s*\\{`).test(src), `${item.id}.${id}: en el HTML`);
    assert.deepEqual(rec.actores.sinEtiqueta, [], `${item.id}: actores sin etiqueta`);
  }
});

test("inventory: índice entries match the source", () => {
  for (const item of catalogo.filter((c) => c.tipo === "indice")) {
    const extracted = JSON.stringify(record(item.id).indice).match(/"texto"/g).length;
    const src = html(item);
    const block = src.slice(src.indexOf("const indice"), src.indexOf("const todosLosItems"));
    assert.equal(extracted, (block.match(/\btexto\s*:/g) || []).length, item.id);
  }
});

// ── Headless runner ─────────────────────────────────────────────────────────

test("runner opens the app over file:// and http", { timeout: 120000 }, async () => {
  const { run } = require("../tools/run");
  for (const http of [false, true]) {
    const r = await run({ page: "index.html", http, browser: "edge", wait: 400, arg: [] });
    assert.equal(r.result, "Negociado", `http=${http}`);
    assert.deepEqual(r.exceptions, [], `http=${http}`);
    assert.deepEqual(r.consoleErrors, [], `http=${http}`);
  }
});

test("dev server refuses paths outside the repository and hides dotfiles", { timeout: 30000 }, async () => {
  const { start } = require("../tools/serve");
  const { url, close } = await start();
  try {
    const sibling = await fetch(url + "..%2FNegociado-x%2Ffile.txt");
    assert.notEqual(sibling.status, 200);
    const hidden = await fetch(url + ".gitignore");
    assert.equal(hidden.status, 404);
    const ok = await fetch(url + "index.html");
    assert.equal(ok.status, 200);
  } finally {
    close();
  }
});
