// Read access to the BOE snapshots in sources/boe/: articles by number, their
// numbered sections (apartados) and sub-items, and normalised text search.

"use strict";
const fs = require("fs");
const path = require("path");

// Article numbering (suffixes, the forms of a number, its canonical key) is shared with the app.
const { SUFFIXES, ART_NUM, articleKey } = require("../../assets/js/core/citas");

const DIR = path.join(__dirname, "..", "..", "sources", "boe");

/** Lowercase, no accents, single spaces: for comparisons that ignore typography. */
function fold(s) {
  return s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[“”«»"']/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}


// Older laws (LH, LN…) write ordinals as words: "Primero.", "Segundo."…
const ORDINAL_WORDS = ["primer[oa]", "segund[oa]", "tercer[oa]", "cuart[oa]", "quint[oa]", "sext[oa]", "s[eé]ptim[oa]", "octav[oa]", "noven[oa]", "d[eé]cim[oa]", "und[eé]cim[oa]", "duod[eé]cim[oa]"];
const ORDINAL_RE = new RegExp(`^(${ORDINAL_WORDS.join("|")})[.:]\\s`, "i");

/** Apartados ("1.", "2.") and their sub-items ("a)", "1.º", "Primero.") of an article. */
function structure(parrafos) {
  const apartados = new Map();
  let current = null;
  for (const [, t] of parrafos.slice(1)) {
    const ap = t.match(/^(\d+)\.\s/);
    if (ap && !/^\d+\.\s*[ºª°]/.test(t)) {
      current = ap[1];
      apartados.set(current, { texto: [t], subs: new Set() });
      continue;
    }
    if (!current) {
      current = "_";
      apartados.set(current, { texto: [], subs: new Set() });
    }
    const entry = apartados.get(current);
    entry.texto.push(t);
    const sub = t.match(/^([a-zñ])\)\s/) || t.match(/^(\d+)\.?\s*[ºª°]/);
    if (sub) entry.subs.add(sub[1]);
    const word = t.match(ORDINAL_RE);
    if (word) entry.subs.add(String(ORDINAL_WORDS.findIndex((w) => new RegExp(`^${w}$`, "i").test(word[1])) + 1));
  }
  return apartados;
}

// Old laws number articles in words ("Artículo primero", "Artículo vigésimo segundo").
const UNITS = { primero: 1, primer: 1, segundo: 2, tercero: 3, tercer: 3, cuarto: 4, quinto: 5, sexto: 6, septimo: 7, octavo: 8, noveno: 9 };
const TENS = { decimo: 10, vigesimo: 20, trigesimo: 30, cuadragesimo: 40, quincuagesimo: 50, sexagesimo: 60, septuagesimo: 70, octogesimo: 80, nonagesimo: 90 };
const SPECIAL = { undecimo: 11, duodecimo: 12 };
/** "vigésimo segundo" / "decimotercero" → 22 / 13; null when the words are not an ordinal. */
function ordinalNumber(words) {
  const w = fold(words).replace(/[\s-]+/g, "");
  if (SPECIAL[w]) return SPECIAL[w];
  if (UNITS[w]) return UNITS[w];
  for (const [t, n] of Object.entries(TENS)) {
    if (w === t) return n;
    if (w.startsWith(t) && UNITS[w.slice(t.length)]) return n + UNITS[w.slice(t.length)];
  }
  return null;
}
/** "Artículo primero. Rúbrica" → "Artículo 1. Rúbrica" (heading text only). */
function numericHeading(head) {
  const m = head.match(/^(Art[íi]culo\s+)((?:[A-Za-zÁÉÍÓÚáéíóú]+)(?:\s+[A-Za-zÁÉÍÓÚáéíóú]+)?)(?=[.\s]|$)/);
  if (!m) return head;
  // Try two words first ("vigésimo segundo"), then one ("primero").
  const words = m[2].split(/\s+/);
  for (const take of [2, 1]) {
    if (words.length < take) continue;
    const n = ordinalNumber(words.slice(0, take).join(" "));
    if (n) return m[1] + n + head.slice(m[1].length + words.slice(0, take).join(" ").length);
  }
  return head;
}

const cache = new Map();
function load(clave) {
  if (cache.has(clave)) return cache.get(clave);
  const file = path.join(DIR, `${clave}.json`);
  if (!fs.existsSync(file)) {
    cache.set(clave, null);
    return null;
  }
  const snap = JSON.parse(fs.readFileSync(file, "utf8"));
  // Some BOE texts carry decomposed accents (NFD): normalise once, so every comparison holds.
  for (const b of snap.bloques) for (const p of b.parrafos || []) p[1] = p[1].normalize("NFC");

  const ARTICLE = new RegExp(`^Art[íi]culo\\s+(${ART_NUM})\\.?\\s*(.*)$`, "i");
  // "Artículo 301 a 324. (Derogados)": one block standing for a run of repealed articles.
  const RANGE = /^Art[íi]culos?\s+(\d+)\s+(?:a|al)\s+(\d+)\b/i;
  // Words → numbers only in laws numbered in words throughout (LO 1/1982, Ley 30/1979). Where
  // numbered articles exist (RH), "Artículo primero…" belong to the approving decree: left out.
  const wordsOnly = !snap.bloques.some((b) => b.tipo === "precepto" && b.parrafos.length && /^Art[íi]culo\s+\d/i.test(b.parrafos[0][1]));
  const heads = (b) => (b.tipo === "precepto" && b.parrafos.length ? (wordsOnly ? numericHeading(b.parrafos[0][1]) : b.parrafos[0][1]) : "");
  const own = new Set(snap.bloques.map((b) => heads(b).match(ARTICLE)).filter((m) => m && !RANGE.test(m[0])).map((m) => articleKey(m[1])));

  const articulos = new Map();
  const orden = [];
  const keysOfBlock = new Map(); // block id → article keys it stands for
  const add = (key, b, rubrica, numero) => {
    // Two blocks with one key means a numbering form the reader does not know: stop, never overwrite.
    if (articulos.has(key)) throw new Error(`${clave}: dos artículos con la clave «${key}» (${articulos.get(key).bloque}, ${b.id})`);
    const texto = b.parrafos.map((p) => p[1]).join("\n");
    articulos.set(key, {
      key,
      numero: numero || key, // as the BOE writes it ("778 quáter", "42 bis a)")
      bloque: b.id,
      rubrica,
      parrafos: b.parrafos,
      texto,
      plano: fold(texto),
      sinContenido: /^\(?(sin contenido|derogad[oa]s?)\b/i.test(b.parrafos.slice(1).map((p) => p[1]).join(" ").trim()),
      vigencia: b.vigencia,
      norma: b.norma,
      pendiente: b.pendiente || null,
      apartados: structure(b.parrafos),
    });
    orden.push(key);
    keysOfBlock.set(b.id, [...(keysOfBlock.get(b.id) || []), key]);
  };
  for (const b of snap.bloques) {
    const head = heads(b);
    const r = head.match(RANGE);
    if (r) {
      for (let n = Number(r[1]); n <= Number(r[2]); n++) if (!own.has(String(n))) add(String(n), b, "");
      continue;
    }
    const m = head.match(ARTICLE);
    if (m) add(articleKey(m[1]), b, m[2].replace(/\.$/, "").trim(), m[1].trim()); // others: disposiciones, preámbulo…
  }
  // Structure: every heading (libro, título, capítulo, sección) with the articles under it.
  const LEVELS = { libro: 1, titulo: 2, capitulo: 3, seccion: 4 };
  const divisiones = [];
  const open = [];
  for (const b of snap.bloques) {
    if (b.tipo === "encabezado" && b.parrafos.length) {
      const cls = b.parrafos[0][0];
      const nivel = Object.keys(LEVELS).find((l) => cls.startsWith(l));
      if (!nivel) continue;
      const numero = nivel === "seccion" ? (b.parrafos[0][1].match(/^Secci[oó]n \S+/) || [""])[0] : b.parrafos[0][1];
      const titulo = nivel === "seccion" ? b.parrafos[0][1].replace(/^Secci[oó]n \S+\s*/, "") : (b.parrafos.find((p) => /_tit$/.test(p[0])) || ["", ""])[1];
      const d = { nivel, numero, titulo: titulo.replace(/\.$/, ""), bloque: b.id, articulos: [] };
      while (open.length && LEVELS[open[open.length - 1].nivel] >= LEVELS[nivel]) open.pop();
      open.push(d);
      divisiones.push(d);
    } else if (b.tipo === "precepto") {
      for (const key of keysOfBlock.get(b.id) || []) open.forEach((d) => d.articulos.push(key));
    } else if (b.tipo !== "nota_inicial" && b.tipo !== "preambulo") open.length = 0; // disposiciones close the articulado
  }
  const law = { clave, id: snap.id, titulo: snap.titulo, fecha: snap.fecha_actualizacion, articulos, orden, divisiones, plano: fold([...articulos.values()].map((a) => a.texto).join("\n")) };
  cache.set(clave, law);
  return law;
}

/** Article keys from `from` to `to` (inclusive) in the law's own order (bis/ter included). */
function range(law, from, to) {
  const a = law.orden.indexOf(articleKey(from));
  const b = law.orden.indexOf(articleKey(to));
  return a < 0 || b < 0 || b < a ? null : law.orden.slice(a, b + 1);
}

/** The deepest heading whose title matches one of `names` (e.g. a resource's folder names). */
function division(law, names) {
  const clean = (s) =>
    fold(s)
      .replace(/\bjv\b/g, "jurisdiccion voluntaria")
      .replace(/[.,;:]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  let best = null;
  for (const name of names) {
    const n = clean(name);
    if (n.length < 12) continue;
    const hit = law.divisiones.filter((d) => {
      const t = clean(d.titulo);
      return t && (t === n || t.startsWith(n) || n.startsWith(t));
    });
    // Same title in several places (e.g. "Disposición común"): only an unambiguous match counts.
    if (hit.length === 1) best = hit[0];
  }
  return best;
}

module.exports = { load, fold, articleKey, range, division, ordinalNumber, SUFFIXES, ART_NUM };
