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
  for (const k of ["42 bis a", "354 a", "236 ñ", "778 quater", "216 bis 2"]) assert.equal(articleKey(k), k, `canonical key «${k}» round-trips`);
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

test("BOE quirks: decree articles, 'Art. 25.', pairs and suffixed ranges, cardinals in words, a duplicate chosen in leyes.json", () => {
  const ccom = load("CCom");
  assert.match(ccom.articulos.get("1").texto, /Son comerciantes/, "art. 1 CCom is the Code's, not the publishing decree's");
  assert.match(ccom.articulos.get("25").texto, /libro de Inventarios y Cuentas anuales/i, "«Art. 25.» headings");
  assert.equal(load("LCD").articulos.get("4").rubrica, "Cláusula general", "the block chosen in tools/leyes.json");
  assert.ok(load("CC").articulos.has("1863 bis"));
  assert.equal(load("LOPJ").articulos.get("281").bloque, "adoscientosochentayuno", "«Artículo doscientos ochenta y uno»");
  assert.equal(load("LOPJ").orden.length, 713);
  assert.equal(load("RH").articulos.get("1").bloque !== "aprimero", true, "RH art. 1 is the Regulation's");
});

test("ordinals: '2.°' (degree sign) and 'Primero.' are sub-items", () => {
  assert.ok(load("CC").articulos.get("169").apartados.get("_").subs.has("2"));
  const lh42 = load("LH").articulos.get("42").apartados.get("_").subs;
  assert.ok(lh42.has("1") && lh42.has("9"));
});

test("apartados numbered in words ('Uno.', 'Dos.', LO 1/1982) are apartados", () => {
  assert.deepEqual([...load("LOPDH").articulos.get("3").apartados.keys()], ["1", "2"]);
  assert.deepEqual([...load("LOPDH").articulos.get("2").apartados.keys()], ["1", "2", "3"]);
});

test("apartados numbered in compound words ('Cincuenta y cuatro.', LO 1/2025) are apartados", () => {
  const { cardinalApartado } = require("../tools/lib/boe");
  assert.equal(cardinalApartado("Cincuenta y cuatro. Se modifica el artículo 641"), "54");
  assert.equal(cardinalApartado("Ocho. Se modifica"), "8");
  assert.equal(cardinalApartado("Veinte días después."), null);
  assert.equal(cardinalApartado("Primero. Texto"), null);
  const a22 = load("LO1-2025").articulos.get("22").apartados;
  assert.match(a22.get("8").texto[0], /^Ocho\./, "not the «8. …» of a quoted article");
  assert.match(a22.get("54").texto[0], /^Cincuenta y cuatro\./);
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

test("sources hold no literal combining marks (regexes stay readable: \\p{M})", () => {
  const offenders = [];
  (function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (/\.(js|css|html)$/.test(f) && /\p{M}/u.test(fs.readFileSync(p, "utf8"))) offenders.push(path.relative(ROOT, p));
    }
  })(path.join(ROOT, "assets"));
  for (const d of ["tools", "tests"]) (function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (/\.js$/.test(f) && /\p{M}/u.test(fs.readFileSync(p, "utf8"))) offenders.push(path.relative(ROOT, p));
    }
  })(path.join(ROOT, d));
  assert.deepEqual(offenders, []);
});

test("one citation parser for app and tools", () => {
  const citas = require("../assets/js/core/citas");
  assert.equal(citas.articleKey("236-ñ"), "236 ñ");
  assert.notEqual(citas.articleKey("236-ñ"), citas.articleKey("236-n"));
  assert.equal(require("../tools/lib/boe").articleKey, citas.articleKey, "the BOE reader uses the shared one");
  const found = citas.find("Véase el art. 140.1 LJV y el artículo 1973 del Código Civil.", { defaultLaw: "LEC" });
  assert.deepEqual(found.map((c) => [c.law, c.refs[0].art, c.refs[0].apdo]), [["LJV", "140", "1"], ["CC", "1973", null]]);
  assert.equal(found[0].lawLength, 4, "the link can cover « LJV»");
});

// ── Citation and term parsing ───────────────────────────────────────────────

test("parseCitation: ranges, lists, apartados, lettered articles", () => {
  assert.deepEqual(parseCitation("256 a 263"), [{ art: "256", apdo: null, sub: null, hasta: "263" }]);
  assert.deepEqual(parseCitation("6, 7 y 9").map((r) => r.art), ["6", "7", "9"]);
  assert.deepEqual(parseCitation("517.2.9º")[0], { art: "517", apdo: "2", sub: "9" });
  // The "a" of "42 bis a)" is part of the article, not a range separator.
  // and, as in the LJV, «42 bis a)» is the article itself (the LJV numbers three articles that way).
  assert.deepEqual(parseCitation("42 bis a)")[0], { art: "42 bis a", apdo: null, sub: null });
  assert.deepEqual(parseCitation("354 a)")[0], { art: "354", apdo: null, sub: "a" }, "without a suffix the letter stays a sub-item");
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
  // EU instruments: the "CE" of a directive's number is not the Constitution, nor RGPD the LEC.
  assert.equal(one("Dir. 2004/48/CE art. 6", "LEC").law, "UE");
  assert.equal(one("datos de salud (art. 9 RGPD)", "LEC").law, "UE");
  assert.equal(one("Directiva (UE) 2016/943, art. 9", "LEC").law, "UE");
  assert.equal(one("Reg. (UE) 650/2012 art. 4", "LEC").law, "UE");
  assert.equal(one("el art. 9 de la Convención", "LJV").law, "UE", "international treaties are not linked");
  assert.equal(one("Art. 12 CDN (1989)", "LJV").law, "UE");
  assert.equal(one("el artículo 47, párrafo segundo, de la Ley 4/2023", "LJV").law, "LTRANS", "«, párrafo segundo,» between the article and the law");
  assert.equal(one("art. 1057, párrafo primero, CC", "LEC").law, "CC");
  assert.equal(one("el artículo 47, párrafo segundo, de la Ley para la igualdad real y efectiva de las personas trans y…", "LJV").law, "LTRANS");
  assert.equal(one("arts. 437 y ss. LEC", "LJV").law, "LEC", "«y ss.» between the article and the law");
  assert.equal(one("los arts. 404 y siguientes de la Ley de Enjuiciamiento Civil", "LJV").law, "LEC");
  assert.equal(one("intimidad (art. 18.1 CE)", "LEC").law, "CE");
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
    id: "prueba",
    tipo: "guia",
    ley: "LJV",
    articulos: [],
    inicio: "inicio",
    actores: { laj: "LAJ" },
    pasos: {
      inicio: { fase: 0, titulo: "Inicio", actor: "laj", bloques: [], opciones: [{ texto: "Sí", destino: "a" }, { texto: "No", destino: "falta" }] },
      a: { fase: 0, titulo: "Paso A", actor: "juez", bloques: [] },
      fin: { fase: 0, titulo: "Fin", actor: "laj", bloques: [], fin: "success" },
      suelto: { fase: 0, titulo: "Huérfano", actor: "laj", bloques: [], fin: "neutral" },
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
    id: "prueba",
    tipo: "guia",
    ley: "LJV",
    articulos: [],
    inicio: "inicio",
    actores: { laj: "LAJ" },
    pasos: { inicio: { fase: 0, titulo: "Apelación (art. 457 LEC); competencia del art. 140.5 LJV", actor: "laj", bloques: [], fin: "neutral" } },
  };
  const f = checkResource(rec).findings.filter((x) => x.check === "citas");
  assert.ok(f.some((x) => x.level === "error" && x.msg.includes("457 LEC está sin contenido")));
  assert.ok(f.some((x) => x.level === "aviso" && x.msg.includes("no tiene apartado 5")));
});

// ── Inventory fidelity ──────────────────────────────────────────────────────

const catalogo = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", "catalogo.json"), "utf8"));
const record = (id) => JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", `${id}.json`), "utf8"));
const html = (item) => fs.readFileSync(path.join(ROOT, item.ruta), "utf8");
// The old HTML files were removed in phase 3 · 2 (they live on in the tag baseline-2026-10-28):
// the checks against them run only where they exist; the inventory itself is now the record.
const OLD = fs.existsSync(path.join(ROOT, catalogo[0].ruta)) ? {} : { skip: "HTML antiguos retirados (fase 3 · 2)" };

test("inventory: 57 resources with stable ids, in folder order", () => {
  assert.equal(catalogo.length, 57);
  assert.deepEqual(
    catalogo.map((c) => c.id),
    ["I-LEC", "I-LJV", "L-LEC", "L-LJV", ...Array.from({ length: 28 }, (_, i) => `E${String(i + 1).padStart(2, "0")}`), ...Array.from({ length: 25 }, (_, i) => `G${String(i + 1).padStart(2, "0")}`)]
  );
});

test("inventory: every esquema card extracted, no text left uncaptured", OLD, () => {
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

test("inventory: every guía step extracted, with a title and a known start", OLD, () => {
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

test("inventory: índice entries match the source", OLD, () => {
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

test("run-tests: failed test names are read from the spec output (no duplicates, no summary line)", () => {
  const { failures } = require("../tools/run-tests");
  const out = [
    "✔ pasa (0.5ms)",
    "✖ [http] falla aquí (1.2ms)",
    "▶ grupo",
    "  ✖ sub falla (0.4ms)",
    "✖ failing tests:",
    "",
    "✖ [http] falla aquí (1.2ms)",
  ].join("\n");
  assert.deepEqual(failures(out), ["[http] falla aquí", "sub falla"]);
});

test("boe-diff: a new version, an announced one and a removed block are found, with who cites them", () => {
  const { report, citing } = require("../tools/boe-diff");
  const old = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "boe", "LJV.json"), "utf8"));
  const now = JSON.parse(JSON.stringify(old));
  const block = (id) => now.bloques.find((b) => b.id === id);
  Object.assign(block("a140"), { vigencia: "20270101", norma: "BOE-A-2099-1" });
  block("a110").pendiente = { vigencia: "20270601", norma: "BOE-A-2099-2", parrafos: [], notas: [] };
  now.bloques = now.bloques.filter((b) => b.id !== "a148");
  // Same text with its accents decomposed (older snapshots): not a change.
  block("a139").parrafos = block("a139").parrafos.map(([c, t]) => [c, t.normalize("NFD")]);
  const r = report("LJV", old, now, citing());
  const by = Object.fromEntries(r.cambios.map((c) => [`${c.bloque} ${c.tipo}`, c]));
  assert.deepEqual(Object.keys(by).sort(), ["a110 pendiente", "a140 modificado", "a148 suprimido"]);
  assert.deepEqual(by["a140 modificado"].articulos, ["140"]);
  assert.ok(by["a140 modificado"].citan.includes("Esquema ljv-conciliacion") && by["a140 modificado"].citan.includes("Guía ljv-conciliacion"), "lo citan el esquema y la guía de conciliación");
  assert.ok(by["a110 pendiente"].citan.includes("Guía ljv-subastas"));
});

test("vigencia: the version in force, BOE lists out of order, quoted articles, announced versions", () => {
  const V = require("../assets/js/core/vigencia");
  const v = (norma, pub, vig, ...ps) => `<version id_norma="${norma}" fecha_publicacion="${pub}" fecha_vigencia="${vig}"><p class="articulo">Artículo 14. Intervención.</p>${ps.map((p) => `<p class="parrafo">${p}</p>`).join("")}<blockquote><p>Nota del BOE.</p></blockquote></version>`;
  // Decision 17: LO 7/2015 (published 22-07, in force 1-10) listed after Ley 42/2015 (published 6-10, in force 7-10).
  const xml = `<bloque id="a14">${v("BOE-A-2000-323", "20000108", "20010108", "Original.")}${v("BOE-A-2015-10727", "20151006", "20151007", "Ley 42.")}${v("BOE-A-2015-8167", "20150722", "20151001", "LO 7.")}</bloque>`;
  assert.equal(V.actual(V.versions(xml), "20261101").norma, "BOE-A-2015-10727", "vale la vigente publicada en último lugar");
  const art = { v: "20151007", m: "BOE-A-2015-10727", p: [["p", "Ley 42."]] };
  assert.equal(V.comparar(xml, art, "BOE-A-2000-323", "20261101").estado, "igual");
  assert.equal(V.comparar(xml, { ...art, p: [["p", "Otro texto."]] }, "BOE-A-2000-323", "20261101").estado, "texto");
  assert.equal(V.comparar(xml, { ...art, p: [["p", "Otro texto."]], c: "corregido" }, "BOE-A-2000-323", "20261101").estado, "igual", "en un artículo corregido solo cuenta la versión");
  assert.equal(V.comparar(xml, { v: "20010108", p: [["p", "Original."]] }, "BOE-A-2000-323", "20261101").estado, "posterior");
  const future = xml.replace("</bloque>", `${v("BOE-A-2026-1", "20261030", "20270101", "Futuro.")}</bloque>`);
  const r = V.comparar(future, art, "BOE-A-2000-323", "20261101");
  assert.equal(r.estado, "igual");
  assert.equal(r.pendiente.vigencia, "20270101");
  // A quoted article inside the text keeps its paragraph (only the heading goes).
  const quoted = `<version id_norma="X" fecha_publicacion="20230101" fecha_vigencia="20230101"><p class="articulo">Artículo 479. Interposición.</p><p class="parrafo">1. Uno.</p><p class="articulo">«Artículo 479. Anterior.</p></version>`;
  assert.deepEqual(V.versions(quoted)[0].parrafos, [["a", "1. Uno."], ["p", "«Artículo 479. Anterior."]]);
});

test("citations: an ordinal may close a list, «art. 194.2.º y 3.º CC», both rules of that article", () => {
  const citas = require("../assets/js/core/citas");
  const [c] = citas.find("Siniestro (art. 194.2.º y 3.º CC): competencia", { defaultLaw: "LJV", alias: { CC: "CC" } });
  assert.equal(c.law, "CC");
  assert.deepEqual(c.refs.map((r) => [r.art, r.regla]), [["194", "2"], ["194", "3"]]);
  assert.deepEqual(citas.find("arts. 6, 7 y 9 LJV", { alias: { LJV: "LJV" } })[0].refs.map((r) => r.art), ["6", "7", "9"]);
});

test("related-law blocks: the law a bare citation belongs to comes from the block's heading", () => {
  const citas = require("../assets/js/core/citas");
  const LEYES = JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "leyes.json"), "utf8"));
  const alias = Object.fromEntries(LEYES.flatMap((l) => [[l.clave, l.clave], ...l.alias.map((a) => [a, l.clave])]));
  const cases = [
    ["Código Civil (Real Decreto de 24 julio 1889)", "", "CC"],
    ["Ley del Notariado, arts. 72–77", "", "LN"],
    ["Ley 15/2015, de 2 de julio", "", "LJV"],
    ["LEC — Libro IV, Título I", "", "LEC"],
    ["LOPJ (LO 1/2025)", "", "LOPJ"],
    ["Ley Trans — Ley 4/2023", "", "LTRANS"],
    ["Ley estatal · Sociedades de capital", "RDL 1/2010", "LSC"],
    ["Reglamento (UE) 650/2012", "", "UE"],
    ["Otras leyes", "Marco legal complementario", null],
  ];
  for (const [ley, titulo, want] of cases) assert.equal(citas.normaLaw({ ley, titulo }, alias), want, ley);
  // Each piece with its law; explicit citations keep theirs.
  const pieces = citas.textos({ a: "art. 1", norma: { ley: "Ley Hipotecaria", texto: "<strong>Art. 14</strong> — títulos (art. 2 LEC)." } }, "LJV", alias);
  assert.deepEqual(pieces, [["art. 1", "LJV"], ["Ley Hipotecaria", "LH"], ["Art. 14", "LH"], [" — títulos (art. 2 LEC).", "LH"]]);
});

test("BOE reading: notes never enter the article's text; indented law text does; live notes are kept apart", () => {
  const { parseVersion } = require("../tools/boe-fetch");
  const body = `<p class="articulo">Artículo 1.</p><p class="parrafo">1. Vigente <strong>anulado</strong>.</p>
    <blockquote caduca="20240320" class="soloTexto"><p class="parrafo">Téngase en cuenta…</p><p class="cita_con_pleca">Redacción anterior:</p><p class="parrafo">"1. Antigua.</p><blockquote class="soloTexto"><p class="parrafo">Anidada.</p></blockquote></blockquote>
    <blockquote class="sangrado"><p class="parrafo">«Texto citado por la ley.»</p></blockquote>
    <blockquote class="noDesde20151001"><p class="parrafo">Caducada.</p></blockquote>
    <blockquote class="noDesde99999999"><p class="parrafo">Declarada nula del inciso destacado. <a class="refPost">Ref. BOE-T-1990-3964</a>.</p></blockquote>
    <blockquote><p class="nota_pie">Se modifica por…</p></blockquote>`;
  const v = parseVersion(body, "20261103");
  assert.deepEqual(v.parrafos.map((p) => p[1]), ["Artículo 1.", "1. Vigente anulado .".replace(" .", "."), "«Texto citado por la ley.»"]);
  assert.deepEqual(v.avisos, ["Declarada nula del inciso destacado. Inciso: «anulado»."]);
  assert.ok(v.notas.includes("Se modifica por…") && v.notas.includes("Caducada."));
  const V = require("../assets/js/core/vigencia");
  assert.deepEqual(V.paragraphs(body).map((p) => p[1]), ["1. Vigente anulado.", "«Texto citado por la ley.»"]);
});
