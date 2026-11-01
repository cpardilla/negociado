#!/usr/bin/env node
// Automatic content checks of the app's esquemas and guías (data/esquemas, data/guias) against the
// BOE snapshots (sources/boe/*.json). Writes a Markdown report.
// (docs/revision/informe-inicial.md is the first report, made on the pre-redesign inventory: kept
// as the record of the starting point.)
//
// Usage: node tools/check-content.js [--out=docs/revision/informe.md] [id ...]
//
// Checks (each finding has a level: error · aviso · revisar):
//   citas        cited article / apartado / sub-item exists in the law in force;
//                articles now without content (repealed) flagged
//   rubricas     an esquema card for one article: its title vs the BOE heading
//   alcance      the articles a resource covers (its `articulos`): esquemas have a card per
//                article and no cards of other articles; guías cite every one of them
//   plazos       a term ("5 días") given with an article: the article says it
//   literales    quoted text (≥ 40 characters) next to a LEC/LJV citation: found verbatim
//   terminologia outdated names outside literal quotes (list below, to be kept up to date)
//   grafos       guías: missing targets, unreachable steps, steps with no way out
// Citations without an explicit law take the resource's own law and are
// reported apart ("por defecto"), since the context may refer to another text.

"use strict";
const fs = require("fs");
const path = require("path");
const { load, fold, articleKey, range, division, SUFFIXES } = require("./lib/boe");
const citas = require("../assets/js/core/citas");

const ROOT = path.join(__dirname, "..");
const vm = require("vm");
let undetermined = 0; // citations whose law cannot be told (see citations / checkResource)

// ── Laws ────────────────────────────────────────────────────────────────────

// "LO 1/1996" → "LOPJM": the names used in tools/leyes.json, so that their snapshots are found.
const ALIAS = {};
for (const l of JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"))) {
  ALIAS[l.clave] = l.clave;
  for (const a of l.alias) ALIAS[a] = l.clave;
}

// ── Text units ──────────────────────────────────────────────────────────────

const strip = (h) =>
  String(h)
    .replace(/<br>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

/** Every piece of text of a resource, with where it is. */
function units(rec) {
  const out = [];
  const add = (where, text, extra) => {
    const t = strip(text || "");
    if (t) out.push({ where, text: t, ...extra });
  };
  if (rec.tipo === "esquema") {
    add("cabecera › título", rec.titulo);
    add("cabecera › subtítulo", rec.cabecera.subtitulo);
    rec.cabecera.etiquetas.forEach((e, i) => add(`cabecera › etiqueta ${i + 1}`, e));
    const items = (arr, iw) =>
      arr.forEach((it, j) => {
        add(`${iw}.${j + 1}`, it.t);
        if (it.sub) items(it.sub, `${iw}.${j + 1}`);
      });
    const blocks = (list, where) =>
      list.forEach((b, i) => {
        const w = `${where} › ${i + 1}`;
        if (b.tarjeta) {
          const c = b.tarjeta;
          const cw = `${where} › tarjeta «${strip(c.articulo || c.titulo)}»`;
          add(`${cw} › título`, c.titulo, { card: c });
          add(`${cw} › resumen`, c.resumen);
          blocks(c.cuerpo, cw);
          c.referencias.forEach((r, j) => add(`${cw} › referencia ${j + 1}`, r));
        } else if (b.apartado) {
          add(`${w} › apartado`, b.apartado.titulo);
          blocks(b.apartado.contenido, `${where} › «${strip(b.apartado.titulo)}»`);
        } else if (b.lista) items(b.lista, `${w} › punto`);
        else if (b.nota) add(`${w} › nota «${strip(b.nota.etiqueta)}»`, `${strip(b.nota.etiqueta)}: ${b.nota.texto}`);
        else if (b.tabla) b.tabla.filas.forEach((row, j) => add(`${w} › tabla fila ${j + 1}`, row.join(" · "), { row, head: b.tabla.cabecera }));
        // Piece by piece, each with the block's own law (as the app links it).
        else if (b.norma) citas.textos({ norma: b.norma }, rec.ley, ALIAS).forEach(([t, law]) => add(`${w} › norma «${strip(b.norma.titulo || b.norma.ley)}»`, t, { law }));
        else if (b.grupo) {
          add(`${w} › grupo`, b.grupo.titulo);
          items(b.grupo.items || [], `${w} › grupo «${strip(b.grupo.titulo)}»`);
        } else if (b.paso) {
          add(`${w} › fase`, [b.paso.titulo, b.paso.texto].filter(Boolean).join(" · "));
          items(b.paso.items || [], `${w} › fase «${strip(b.paso.titulo || "")}»`);
        } else if (b.p !== undefined) add(w, b.p);
      });
    rec.secciones.forEach((s, i) => {
      if (s.capitulo) return add(`capítulo ${i + 1}`, `${s.capitulo.numero} ${s.capitulo.nombre}`);
      const sw = `sección «${s.titulo}»`;
      add(sw, s.titulo);
      blocks(s.bloques, sw);
    });
    add("pie", rec.pie);
  }
  if (rec.tipo === "guia") {
    for (const [id, s] of Object.entries(rec.pasos)) {
      const w = `paso «${id}»`;
      add(`${w} › título`, s.titulo);
      add(`${w} › pregunta`, s.pregunta);
      (s.opciones || []).forEach((o, i) => add(`${w} › opción ${i + 1}`, [o.texto, o.nota].filter(Boolean).join(" · ")));
      s.bloques.forEach((b, i) => {
        if (b.tipo === "lista") {
          add(`${w} › ${b.marcar ? "comprobación" : "lista"} ${i + 1}`, b.titulo);
          b.items.forEach((it, j) => add(`${w} › ${b.marcar ? "comprobación" : "lista"} ${i + 1}.${j + 1}`, it));
        } else add(`${w} › ${b.tipo} ${i + 1}`, b.texto, { kind: b.tipo });
      });
    }
    add("pie", rec.pie);
  }
  return out;
}

// ── Citations ───────────────────────────────────────────────────────────────
// Parsing is shared with the app (assets/js/core/citas.js); here only the checker's policy.

/** "art. 42 bis b)": in the LJV the letter is part of the article number, not a sub-item. */
function resolveLettered(law, r) {
  for (const end of ["art", "hasta"]) {
    const letter = end === "art" ? r.sub : null;
    if (r[end] && letter && !r.apdo && /^[a-z]$/.test(letter) && law.articulos.has(`${r[end]} ${letter}`)) {
      r[end] = `${r[end]} ${letter}`;
      r.sub = null;
    }
  }
  return r;
}

/** Citations whose law is known (explicit, or the resource's own by default); the others are
 *  counted as undetermined when `count` is set. */
function citations(text, defaultLaw, count = true) {
  const out = [];
  for (const c of citas.find(text, { defaultLaw, alias: ALIAS })) {
    if (!c.law) {
      if (count) undetermined++;
      continue;
    }
    out.push(c);
  }
  return out;
}

// ── Checks ─────────────────────────────────────────────────────────────────

const TERMS = [
  { clave: "Secretario judicial", re: /\bSecretari[oa]s? [Jj]udicial(?:es)?\b/g, nota: "Letrado/a de la Administración de Justicia (LO 7/2015)" },
  { clave: "Juzgado de Primera Instancia", re: /\bJuzgados? de (?:1\.ª|Primera) Instancia\b/gi, nota: "Tribunal de Instancia, Sección Civil (LO 1/2025) — verificar régimen transitorio" },
  { clave: "JPI", re: /\bJPI\b/g, nota: "Tribunal de Instancia, Sección Civil (LO 1/2025) — verificar" },
  { clave: "Juzgado de lo Mercantil", re: /\bJuzgados? de lo Mercantil\b/gi, nota: "Tribunal de Instancia, Sección de lo Mercantil (LO 1/2025) — verificar" },
  { clave: "Juzgado de Paz", re: /\bJuzgados? de Paz\b/gi, nota: "Juzgados de Paz → Oficinas de Justicia en los municipios (LO 1/2025) — verificar" },
  { clave: "incapacitación", re: /\bincapacita(?:d[oa]s?|ción|ciones|r)\b/gi, nota: "Ley 8/2021: medidas de apoyo; ya no existe la incapacitación" },
  { clave: "incapaz", re: /\bincapaz(?:es)?\b/gi, nota: "Ley 8/2021: persona con discapacidad / con medidas de apoyo" },
  { clave: "patria potestad prorrogada/rehabilitada", re: /\bpatria potestad (?:prorrogada|rehabilitada)\b/gi, nota: "suprimida por la Ley 8/2021" },
  { clave: "prodigalidad", re: /\bprodigalidad\b/gi, nota: "suprimida como institución por la Ley 8/2021" },
  { clave: "minusválido", re: /\b(?:minusválid[oa]s?|disminuid[oa]s? psíquic[oa]s?)\b/gi, nota: "persona con discapacidad" },
];

function inQuotes(text, index) {
  const before = text.slice(0, index);
  const open = (before.match(/«/g) || []).length - (before.match(/»/g) || []).length;
  const dq = (before.match(/["“”]/g) || []).length % 2;
  return open > 0 || dq === 1;
}

const NUMBER_WORDS = { 1: "(?:un|uno|una)", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve", 10: "diez", 11: "once", 12: "doce", 15: "quince", 20: "veinte", 24: "veinticuatro", 30: "treinta", 40: "cuarenta", 45: "cuarenta y cinco", 48: "cuarenta y ocho", 60: "sesenta", 90: "noventa" };
const UNIT = { dia: "d[ií]as?", mes: "mes(?:es)?", ano: "a[ñn]os?", hora: "horas?", semana: "semanas?" };
const unitOf = (word) => Object.keys(UNIT).find((u) => new RegExp(`^${UNIT[u]}$`, "i").test(word));
function plazos(text) {
  const out = [];
  for (const m of text.matchAll(/(?<![\p{L}\d])(\d{1,3})\s*(d[ií]as?|mes(?:es)?|a[ñn]os?|horas?|semanas?)(?!\p{L})/giu)) out.push({ n: Number(m[1]), unit: unitOf(m[2]), texto: m[0] });
  return out;
}
/** Does the law's text state this term ("5 días" ↔ "cinco días hábiles", "plazo de dos últimos años")? */
function termInText(p, haystack) {
  const word = NUMBER_WORDS[p.n] ? `(?:${p.n}|${NUMBER_WORDS[p.n]})` : `${p.n}`;
  return new RegExp(`(?<![\\p{L}\\d])${word}\\s+(?:\\p{L}+\\s+){0,2}(?:${UNIT[p.unit]})(?!\\p{L})`, "iu").test(haystack.normalize("NFC"));
}

function checkResource(rec) {
  const findings = [];
  const add = (check, level, where, msg) => findings.push({ check, level, where, msg });
  const defaultLaw = rec.ley;
  const cited = {};
  const terms = {};

  for (const u of units(rec)) {
    const cites = citations(u.text, "law" in u ? u.law : defaultLaw);
    for (const c of cites) {
      cited[c.law] = (cited[c.law] || 0) + 1;
      const law = load(c.law);
      if (!law) continue;
      const tag = c.porDefecto ? " (ley por defecto)" : "";
      const maxArt = Math.max(...law.orden.map((k) => parseInt(k, 10)));
      for (const r of c.refs) {
        resolveLettered(law, r);
        // A number beyond the law's last article, cited without naming a law, belongs to another
        // text (CC, LOPJ…): not checkable here. "411-1" is the Catalan Civil Code's numbering.
        if ([r.art, r.hasta].some((k) => k && parseInt(k, 10) > maxArt)) {
          if (c.porDefecto) undetermined++;
          else add("citas", "revisar", u.where, `«${c.texto}»: la ${c.law} vigente acaba en el art. ${maxArt}; ¿se refiere a otra norma (p. ej. la LEC de 1881 o el CC)?`);
          continue;
        }
        if (r.hasta && parseInt(r.hasta, 10) < parseInt(r.art, 10)) {
          undetermined++;
          continue;
        }
        const keys = r.hasta ? range(law, r.art, r.hasta) : [r.art];
        if (!keys) {
          add("citas", c.porDefecto ? "revisar" : "error", u.where, `«${c.texto}»: el rango ${r.art}–${r.hasta} no existe en la ${c.law}${tag}`);
          continue;
        }
        for (const k of r.hasta ? [r.art, r.hasta] : keys) {
          const art = law.articulos.get(k);
          if (!art) {
            add("citas", c.porDefecto ? "revisar" : "error", u.where, `«${c.texto}»: el art. ${k} no existe en la ${c.law}${tag}`);
            continue;
          }
          // Inside a range a repealed article is normal; cited on its own it is not.
          if (art.sinContenido) add("citas", r.hasta ? "revisar" : c.porDefecto ? "aviso" : "error", u.where, `«${c.texto}»: el art. ${k} ${c.law} está sin contenido/derogado${r.hasta ? " (extremo de un rango)" : ""}${tag}`);
          if (r.regla && ![...art.apartados.values()].some((a) => a.subs.has(r.regla)))
            add("citas", "aviso", u.where, `«${c.texto}»: el art. ${k} ${c.law} no tiene regla/ordinal ${r.regla}.º/ª${tag}`);
          if (r.apdo && !r.hasta) {
            const ap = art.apartados.get(r.apdo);
            if (!ap) {
              const numbered = [...art.apartados.keys()].filter((x) => x !== "_");
              add("citas", c.porDefecto || !numbered.length ? "revisar" : "aviso", u.where, `«${c.texto}»: el art. ${k} ${c.law} no tiene apartado ${r.apdo}${numbered.length ? ` (tiene ${numbered.join(", ")})` : " (no tiene apartados numerados)"}${tag}`);
            } else if (r.sub && ap.subs.size && !ap.subs.has(r.sub)) {
              add("citas", "aviso", u.where, `«${c.texto}»: el art. ${k}.${r.apdo} ${c.law} no tiene «${r.sub}» (tiene ${[...ap.subs].join(", ")})${tag}`);
            }
          }
          if (art.pendiente) add("citas", "aviso", u.where, `art. ${k} ${c.law}: tiene una redacción publicada que entra en vigor el ${art.pendiente.vigencia}`);
        }
      }
    }

    // Plazos: table rows (plazo + fundamento columns) and guía "d" blocks.
    let termCheck = null;
    if (u.row && u.head) {
      const h = u.head.map((x) => fold(strip(x)));
      const pi = h.findIndex((x) => x.includes("plazo"));
      const fi = h.findIndex((x) => /fundamento|norma|precepto|art/.test(x));
      if (pi >= 0 && fi >= 0) termCheck = { terms: plazos(strip(u.row[pi])), cites: citations(strip(u.row[fi]), defaultLaw, false) };
    } else if (u.kind === "plazo") termCheck = { terms: plazos(u.text), cites: cites };
    if (termCheck && termCheck.terms.length && termCheck.cites.length) {
      const texts = [];
      for (const c of termCheck.cites) {
        const law = load(c.law);
        if (!law) continue;
        for (const r of c.refs) {
          const art = law.articulos.get(r.art);
          if (!art) continue;
          const ap = r.apdo && art.apartados.get(r.apdo);
          texts.push(ap ? ap.texto.join(" ") : art.texto);
        }
      }
      if (texts.length)
        for (const p of termCheck.terms)
          if (!texts.some((t) => termInText(p, t))) add("plazos", "revisar", u.where, `plazo «${p.texto}» no aparece en el precepto citado (${termCheck.cites.map((c) => c.texto + " " + c.law).join("; ")}): «${u.text.slice(0, 160)}»`);
    }

    // Literal quotes next to a LEC/LJV citation.
    const lawsHere = [...new Set(cites.map((c) => c.law).filter((l) => l === "LEC" || l === "LJV"))];
    if (lawsHere.length)
      for (const q of u.text.matchAll(/[«“"]([^«»“”"]{40,})[»”"]/g)) {
        const needle = fold(q[1]).replace(/\.\.\.|…/g, "").trim();
        if (!lawsHere.some((l) => load(l).plano.includes(needle))) add("literales", "revisar", u.where, `texto entrecomillado no hallado literalmente en ${lawsHere.join("/")}: «${q[1].slice(0, 140)}»`);
      }

    for (const t of TERMS)
      for (const m of u.text.matchAll(t.re)) {
        if (inQuotes(u.text, m.index)) continue;
        const k = t.clave;
        (terms[k] = terms[k] || { nota: t.nota, n: 0, donde: [] }).n++;
        if (terms[k].donde.length < 3) terms[k].donde.push(u.where);
      }

    // Card title vs BOE heading (cards for a single LEC/LJV article).
    if (u.card && defaultLaw) {
      const m = strip(u.card.articulo).match(new RegExp(`^Art[íi]culo\\s+(\\d+(?:\\s*(?:${SUFFIXES})(?![a-z]))?)\\s*(?:(LEC|LJV|CC)\\b)?$`, "i"));
      if (m && (!m[2] || m[2] === defaultLaw)) {
        const art = load(defaultLaw).articulos.get(articleKey(m[1]));
        if (art) {
          const words = (s) => new Set(fold(s).split(/[^a-zñ0-9]+/).filter((w) => w.length > 3));
          const a = words(art.rubrica);
          const b = words(u.text);
          const common = [...a].filter((w) => b.has(w)).length;
          if (a.size && common / a.size < 0.5) add("rubricas", "revisar", u.where, `título «${u.text}» frente a la rúbrica del BOE «${art.rubrica}» (art. ${art.key} ${defaultLaw})`);
        }
      }
    }
  }

  // Scope: the articles the resource covers (rec.articulos, the law division it is about).
  // Esquemas: one card per article; guías: every article cited.
  const law = defaultLaw && load(defaultLaw);
  if (law && rec.articulos && rec.articulos.length) {
    const scope = rec.articulos.filter((k) => law.articulos.has(k) && !law.articulos.get(k).sinContenido);
    const div = law.divisiones.find((d) => d.articulos.length === rec.articulos.length && d.articulos[0] === rec.articulos[0]);
    const label = `${div ? `${div.numero} «${div.titulo}» ` : ""}(arts. ${rec.articulos[0]}–${rec.articulos[rec.articulos.length - 1]} ${defaultLaw})`;
    const keysOf = (text) =>
      citations(text, defaultLaw, false)
        .filter((x) => x.law === defaultLaw)
        .flatMap((ci) => ci.refs.map((r) => resolveLettered(law, r)))
        .flatMap((r) => (r.hasta ? range(law, r.art, r.hasta) || [r.art] : [r.art]));
    if (rec.tipo === "esquema") {
      const covered = new Set();
      const cards = rec.secciones.flatMap((s) => s.bloques || []).filter((b) => b.tarjeta).map((b) => b.tarjeta);
      // The badge ("Artículo 8", "Arts. 16–18") says which article a card is; its title may name other laws.
      cards.forEach((c) => keysOf(strip(c.articulo).replace(/^Art[íi]culos?/i, "art.")).forEach((k) => covered.add(k)));
      const missing = scope.filter((k) => !covered.has(k));
      if (missing.length) add("alcance", "aviso", "tarjetas", `${label}: sin tarjeta propia ${missing.map((k) => `art. ${k}`).join(", ")}`);
      // Cards for articles of another division duplicate the esquema that covers them.
      const outside = [...covered].filter((k) => !rec.articulos.includes(k) && law.articulos.has(k));
      if (outside.length) add("alcance", "revisar", "tarjetas", `tarjetas de artículos fuera de su ámbito ${label}: ${outside.map((k) => `art. ${k}`).join(", ")} — ¿duplican otro esquema?`);
      const head = strip([rec.cabecera.subtitulo, ...rec.cabecera.etiquetas].join(" · "));
      const declared = new Set(keysOf(head.replace(/\bArt[íi]culos\b/gi, "arts.")));
      const notDeclared = scope.filter((k) => !declared.has(k));
      if (declared.size && notDeclared.length) add("alcance", "revisar", "cabecera", `la cabecera no menciona ${notDeclared.map((k) => `art. ${k}`).join(", ")} de ${label}`);
    } else {
      const cited = new Set(units(rec).flatMap((u) => keysOf(u.text)));
      const never = scope.filter((k) => !cited.has(k));
      if (never.length) add("alcance", "revisar", "guía", `${label}: la guía nunca cita ${never.map((k) => `art. ${k} («${law.articulos.get(k).rubrica}»)`).join(", ")} — ¿falta algún paso?`);
    }
  } else if (defaultLaw) add("alcance", "revisar", "ámbito", "sin artículos de ámbito: no se ha podido identificar la división de la ley a la que corresponde");

  // Guía graphs.
  if (rec.tipo === "guia" && rec.pasos) {
    const steps = rec.pasos;
    const next = (s) => [s.siguiente, ...(s.opciones || []).map((o) => o.destino)].filter(Boolean);
    for (const [id, s] of Object.entries(steps)) {
      for (const n of next(s)) if (!steps[n]) add("grafos", "error", `paso «${id}»`, `apunta a «${n}», que no existe`);
      if (!next(s).length && !s.fin) add("grafos", "error", `paso «${id}»`, "no tiene salida ni es final");
      if (s.fin && next(s).length) add("grafos", "revisar", `paso «${id}»`, "es final pero tiene salidas");
      if (s.actor && rec.actores && !rec.actores[s.actor]) add("grafos", "aviso", `paso «${id}»`, `actor «${s.actor}» sin etiqueta`);
    }
    const seen = new Set([rec.inicio]);
    const queue = [rec.inicio];
    while (queue.length) for (const n of next(steps[queue.shift()] || {})) if (steps[n] && !seen.has(n)) (seen.add(n), queue.push(n));
    const orphans = Object.keys(steps).filter((k) => !seen.has(k));
    if (orphans.length) add("grafos", "error", "grafo", `pasos inalcanzables desde «${rec.inicio}»: ${orphans.join(", ")}`);
  }

  for (const [k, v] of Object.entries(terms)) add("terminologia", "revisar", v.donde.join(" | ") + (v.n > v.donde.length ? " …" : ""), `«${k}» × ${v.n} → ${v.nota}`);
  return { findings, cited };
}

// ── Report ─────────────────────────────────────────────────────────────────

const ORDER = ["citas", "alcance", "rubricas", "plazos", "literales", "grafos", "terminologia"];
const LEVELS = ["error", "aviso", "revisar"];

const title = (rec) => `${rec.tipo === "guia" ? "Guía" : "Esquema"} · ${rec.ley} · ${rec.corto}`;
const fecha = (d) => `${d.slice(6, 8)}-${d.slice(4, 6)}-${d.slice(0, 4)}`;
const count = (list, pred) => list.filter(pred).length;

function report(results, allCited) {
  const lec = load("LEC");
  const ljv = load("LJV");
  let md = `# Informe automático de contenido\n\n`;
  md += `Generado por \`tools/check-content.js\` el ${new Date().toLocaleDateString("es-ES")} sobre los datos de la app (\`data/esquemas\`, \`data/guias\`). El informe del punto de partida es \`informe-inicial.md\`.\n`;
  md += `Fuente: BOE, LEC consolidada a ${fecha(lec.fecha)} y LJV a ${fecha(ljv.fecha)} (\`sources/boe/\`).\n\n`;
  md += `Niveles: **error** (incorrecto con seguridad) · **aviso** (probable error) · **revisar** (necesita lectura humana; puede ser correcto). `;
  md += `Las citas sin ley explícita se atribuyen a la ley del recurso y se marcan «ley por defecto»: el contexto puede referirse a otra norma. `;
  md += `Es un primer cribado: la revisión manual de cada recurso (fases 4 y 5) parte de aquí, pero no se limita a ello.\n\n`;

  md += `## Resumen\n\n| Id | Recurso | ${ORDER.join(" | ")} |\n|---|---|${ORDER.map(() => "---").join("|")}|\n`;
  const totals = Object.fromEntries(ORDER.map((c) => [c, [0, 0, 0]]));
  for (const { rec, findings } of results) {
    const cells = ORDER.map((c) => {
      const n = LEVELS.map((l) => count(findings, (f) => f.check === c && f.level === l));
      n.forEach((x, i) => (totals[c][i] += x));
      return n.some(Boolean) ? n.map((x, i) => (x ? `${x}${"EAR"[i]}` : "")).filter(Boolean).join(" ") : "·";
    });
    md += `| ${rec.id} | ${title(rec)} | ${cells.join(" | ")} |\n`;
  }
  md += `| | **Total** | ${ORDER.map((c) => totals[c].map((x, i) => `${x}${"EAR"[i]}`).join(" ")).join(" | ")} |\n\n`;
  md += `E = error · A = aviso · R = revisar.\n\n`;

  md += `## Leyes citadas (número de citas)\n\nLas marcadas ✓ tienen instantánea del BOE en \`sources/boe/\` y sus citas se han comprobado; las demás, todavía no.\n\n`;
  md += Object.entries(allCited).sort((a, b) => b[1] - a[1]).map(([k, v]) => `- ${load(k) ? "✓ " : ""}${k}${load(k) ? ` (BOE a ${fecha(load(k).fecha)})` : ""}: ${v}`).join("\n") + "\n\n";
  md += `Además, ${undetermined} referencias sin ley explícita cuyo número no corresponde a la ley del recurso, o en textos que solo nombran otras normas (casi siempre CC u otra norma del contexto): no se han podido comprobar automáticamente.\n\n`;

  md += `## Detalle por recurso\n\n`;
  for (const { rec, findings } of results) {
    md += `### ${rec.id} · ${title(rec)}\n\n`;
    if (!findings.length) {
      md += "Sin hallazgos automáticos.\n\n";
      continue;
    }
    for (const c of ORDER) {
      const list = findings.filter((f) => f.check === c).sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));
      if (!list.length) continue;
      md += `**${c}**\n\n` + list.map((f) => `- [${f.level}] ${f.msg} — _${f.where}_`).join("\n") + "\n\n";
    }
  }
  return md;
}

/** The records of data/<folder>/*.js, in the order of the catalogue (the laws' own order). */
function readData(folder) {
  const ctx = (rec) => ({ Neg: { data: { register: (r) => rec.push(r) } } });
  const read = (file) => {
    const out = [];
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx(out));
    return JSON.parse(JSON.stringify(out[0]));
  };
  const cat = read(path.join(ROOT, "data", "catalogo.js"));
  return cat[folder].map((e) => read(path.join(ROOT, "data", folder, `${e.id}.js`)));
}

function main() {
  const args = process.argv.slice(2);
  const outArg = args.find((a) => a.startsWith("--out="));
  const out = path.join(ROOT, outArg ? outArg.slice(6) : "docs/revision/informe.md");
  const only = args.filter((a) => !a.startsWith("--"));
  const results = [];
  const allCited = {};
  for (const rec of [...readData("esquemas"), ...readData("guias")]) {
    if (only.length && !only.includes(rec.id) && !only.includes(`${rec.tipo}/${rec.id}`)) continue;
    const r = checkResource(rec);
    for (const [k, v] of Object.entries(r.cited)) allCited[k] = (allCited[k] || 0) + v;
    results.push({ rec, ...r });
  }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, report(results, allCited));
  const all = results.flatMap((r) => r.findings);
  console.log(`${results.length} recursos · ${all.length} hallazgos (${LEVELS.map((l) => `${count(all, (f) => f.level === l)} ${l}`).join(", ")}) → ${path.relative(ROOT, out)}`);
  for (const c of ORDER) console.log(`  ${c.padEnd(13)} ${LEVELS.map((l) => count(all, (f) => f.check === c && f.level === l)).join(" / ")}`);
}

module.exports = { citations, parseCitation: citas.parseCitation, plazos, termInText, inQuotes, checkResource, units };

if (require.main === module) main();
