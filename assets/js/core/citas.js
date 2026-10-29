/* Legal citations: finding "art. 140.1 LJV", "arts. 256 a 263 LEC", "artículo 1973 del Código Civil"
 * in a text, and the canonical key of an article number. One parser, shared by the app (live
 * references: Neg.citas) and the development tools (tools/check-content.js, tools/lib/boe.js:
 * require), so that what the checker verifies is exactly what the app links. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else (root.Neg = root.Neg || {}).citas = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // ── Article numbers ───────────────────────────────────────────────────────

  // Latin suffixes of inserted articles. The BOE writes some with an accent ("778 quáter"): both
  // forms are read, keys use the plain one. Compound ones are built, not listed (un/duo/ter/… +
  // decies/vicies/tricies: "529 tervicies" in the LSC). Always used with (?![a-z]), so "ter" never
  // takes the start of "terdecies".
  const SUFFIXES = "bis|ter|qu[aá]ter|quinquies|sexies|s[eé]pties|octies|nonies|(?:un|duo|ter|qu[aá]ter|quin|sex|sept|octo|novo)?(?:decies|vicies|tricies)";
  // An article number in every form the BOE uses: "140", "26 bis", "778 quáter", "529 terdecies",
  // "216 bis 2" (LOPJ), "42 bis a)" (LJV), "236-a", "236-ñ", "354 a)", "398.a" (RH).
  const ART_NUM = `\\d+(?:\\s*(?:${SUFFIXES})(?![a-zñ])(?:\\s+\\d+(?!\\d))?)?(?:[-.][a-zñ](?![a-zñ])|\\s*\\.?\\s*[a-zñ]\\))?`;

  /** Canonical key of an article number: "26BIS" → "26 bis", "778 quáter" → "778 quater",
   *  "42 bis.b)" → "42 bis b", "216 bis 2" → "216 bis 2", "236-a" / "398.a" / "354 a)" → "236 a"…
   *  Accents go, but "ñ" stays a letter of its own ("236-ñ" is not "236-n"). */
  function articleKey(s) {
    const t = String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/n\p{M}/gu, "ñ")
      .replace(/\p{M}/gu, "")
      .trim();
    const m = t.match(new RegExp(`^(\\d+)(?:\\s*(${SUFFIXES})(?![a-zñ])(?:\\s+(\\d+)(?!\\d))?)?(?:[-.]([a-zñ])(?![a-zñ])|\\s*\\.?\\s*([a-zñ])\\))?`));
    if (!m) return null;
    return [m[1], m[2], m[3], m[4] || m[5]].filter(Boolean).join(" ");
  }

  // ── Law names ────────────────────────────────────────────────────────────

  const LAW_PATTERNS = [
    ["LEC", /^(?:LEC(?:iv)?\b|Ley 1\/2000\b|Ley de Enjuiciamiento Civil\b)/],
    ["LJV", /^(?:LJV\b|Ley 15\/2015\b|Ley de (?:la )?Jurisdicci[oó]n Voluntaria\b)/],
    ["LECrim", /^(?:LECrim\b|Ley de Enjuiciamiento Criminal\b)/],
    ["CC", /^(?:CC\b|C[oó]digo Civil\b|C\.C\.)/],
    ["LOPJ", /^(?:LOPJ\b|Ley Org[aá]nica del Poder Judicial\b|LO 6\/1985\b)/],
    ["CE", /^(?:CE\b|Constituci[oó]n(?: Española)?\b)/],
    ["LRC", /^(?:LRC\b|Ley del Registro Civil\b|Ley 20\/2011\b)/],
    ["LH", /^(?:LH\b|Ley Hipotecaria\b)/],
    ["RH", /^(?:RH\b|Reglamento Hipotecario\b)/],
    ["LN", /^(?:LN\b|Ley del Notariado\b)/],
    ["CCom", /^(?:CCom\b|C[oó]digo de Comercio\b)/],
    ["LSC", /^(?:LSC\b|Ley de Sociedades de Capital\b)/],
    ["TRLC", /^(?:TRLC\b|LC\b|Ley Concursal\b)/],
    ["CP", /^(?:CP\b|C[oó]digo Penal\b)/],
    ["LJCA", /^(?:LJCA\b)/],
    ["LJS", /^(?:LJS\b|LRJS\b)/],
    ["LPAP", /^(?:LPAP\b|Ley 33\/2003\b)/],
    ["LOPJM", /^(?:LOPJM\b|LO 1\/1996\b|Ley Org[aá]nica 1\/1996\b)/],
    ["LO 1/2025", /^(?:LO 1\/2025\b|Ley Org[aá]nica 1\/2025\b)/],
    ["TRLGDCU", /^(?:TRLGDCU\b|RDL(?:eg)? 1\/2007\b)/],
    ["LM", /^(?:Ley de Marcas\b)/],
    ["LPAT", /^(?:Ley de Patentes\b)/],
    ["LCD", /^(?:LCD\b|Ley de Competencia Desleal\b)/],
    ["LSE", /^(?:Ley de Secretos Empresariales\b)/],
    ["LA", /^(?:Ley de Arbitraje\b)/],
    ["LPI", /^(?:LPI\b|TRLPI\b|Ley de Propiedad Intelectual\b)/],
    ["LCS", /^(?:LCS\b|Ley de Contrato de Seguro\b)/],
    ["LSSI", /^(?:LSSI(?:CE)?\b)/],
    ["LOPDGDD", /^(?:LOPDGDD\b)/],
    ["LMED", /^(?:Ley de [Mm]ediaci[oó]n\b)/],
    ["LAP", /^(?:Ley de autonom[ií]a del paciente\b)/],
    // EU instruments, whole ("Dir. 2004/48/CE", "Directiva (UE) 2016/943"), so that the "CE" of a
    // directive's number is not read as the Constitution.
    ["UE", /^(?:(?:Directiva|Dir\.)(?:\s*\((?:UE|CE)\))?(?:\s*\d+\/\d+(?:\/(?:CEE?|UE))?)?|Reglamento \((?:UE|CE)\)(?:\s*(?:n\.?º\s*)?\d+\/\d+)?|Reglamento Bruselas(?: I bis)?|RGPD\b|DSA\b|TFUE\b|CDFUE\b|Convenio\b)/],
    ["otra", /^(?:Ley(?: Org[aá]nica)? \d+\/\d{4}\b|LO \d+\/\d{4}\b|RD(?:L|Leg)? ?\d+\/\d{4}\b|Real Decreto(?:-ley| Legislativo)? \d+\/\d{4}\b|Reglamento\b)/],
  ];

  /** The law named at the start of `s`, as its key ("LO 1/1996" → "LOPJM" with the alias table). */
  function lawAt(s, alias) {
    for (const [key, re] of LAW_PATTERNS) {
      const m = s.match(re);
      if (m) {
        const raw = key === "otra" ? m[0].replace(/^Ley Org[aá]nica /, "LO ").replace(/^Real Decreto /, "RD ") : key;
        return { key: (alias && alias[raw]) || raw, length: m[0].length };
      }
    }
    return null;
  }

  /** Laws named anywhere in a text. */
  function lawsIn(text, alias) {
    const found = new Set();
    for (const m of text.matchAll(/(?:^|[\s(,;:·])(?=[A-ZDRL])/g)) {
      const l = lawAt(text.slice(m.index + m[0].length), alias);
      if (l) found.add(l.key);
    }
    return found;
  }

  // ── Citations ────────────────────────────────────────────────────────────

  const NUM = `\\d+(?:\\s*(?:${SUFFIXES})(?![a-z]))?(?:\\.\\d+(?:\\s*\\.?\\s*[ºª°])?)*(?:\\.?\\s*[a-zñ]\\))?`;
  // "art. 5", "art.5", "arts. 5 a 9", "artículos 6, 7 y 9"
  const CITE = new RegExp(`\\b(?:art[ií]culos?\\s+|arts?\\.\\s*|arts?\\s+)(${NUM}(?:\\s*(?:,|y|e|a|al|–|-)\\s*${NUM})*)`, "gi");

  /** "256 a 263" / "256-263" are ranges; "6, 7 y 9" a list; "517.2.9º" article.apartado.sub-item;
   *  "18.4.ª" the 4th rule (regla) of article 18. */
  function parseCitation(numbers) {
    const parts = [];
    // A word separator must be followed by a number: the "a" in "42 bis a)" is part of the article.
    const tokens = numbers.split(/\s*(,|\by\b(?=\s*\d)|\be\b(?=\s*\d)|\ba\b(?=\s*\d)|\bal\b(?=\s*\d)|–|-)\s*/i);
    for (let i = 0; i < tokens.length; i += 2) {
      const t = tokens[i].trim();
      if (!t) continue;
      const sep = tokens[i - 1];
      const m = t.match(new RegExp(`^(\\d+(?:\\s*(?:${SUFFIXES})(?![a-z]))?)((?:\\.\\d+)?)((?:\\.\\d+)?)\\s*(\\.?\\s*[ºª°])?\\.?\\s*(?:([a-zñ])\\))?`, "i"));
      if (!m) continue;
      const ordinalOnly = m[2] && !m[3] && m[4];
      const ref = ordinalOnly
        ? { art: articleKey(m[1]), apdo: null, regla: m[2].slice(1) }
        : { art: articleKey(m[1]), apdo: m[2] ? m[2].slice(1) : null, sub: m[3] ? m[3].slice(1) : m[5] || null };
      if (sep && /^(a|al|–|-)$/i.test(sep) && parts.length && !ref.apdo) parts[parts.length - 1].hasta = ref.art;
      else parts.push(ref);
    }
    return parts;
  }

  /** Every citation in `text`: { index, length, texto, law, porDefecto, refs }. The law is the one
   *  named right after or before the article; otherwise `defaultLaw` — unless the text names other
   *  laws but never that one (then `law` is null: a bare "art. 7" there is not the resource's law). */
  function find(text, { defaultLaw = null, alias = null } = {}) {
    let fallback = defaultLaw;
    if (defaultLaw) {
      const named = lawsIn(text, alias);
      if (named.size && !named.has(defaultLaw)) fallback = null;
    }
    const out = [];
    for (const m of text.matchAll(CITE)) {
      const after = text.slice(m.index + m[0].length);
      const before = text.slice(Math.max(0, m.index - 40), m.index);
      let law = null;
      let lawLength = 0;
      const a = after.match(/^\s*,?\s*(?:de\s+(?:la|el)\s+|del\s+|\()?/);
      const la = lawAt(after.slice(a[0].length), alias);
      if (la) {
        law = la.key;
        lawLength = a[0].length + la.length; // so a link can cover "art. 140 LJV" whole
      }
      if (!law) {
        // "LEC art. 517", "Ley 15/2015, arts. 2"
        const b = before.match(/([A-Z][\w/.() ]{1,45}?)\s*,?\s*$/);
        if (b)
          for (let i = 0; i < b[1].length && !law; i++) {
            if (i > 0 && /[\w/]/.test(b[1][i - 1])) continue; // a law name starts a word
            const lb = lawAt(b[1].slice(i), alias);
            if (lb && i + lb.length >= b[1].trimEnd().length - 1) law = lb.key;
          }
      }
      out.push({ index: m.index, length: m[0].length, lawLength, texto: m[0], law: law || fallback, porDefecto: !law, refs: parseCitation(m[1]) });
    }
    return out;
  }

  return { SUFFIXES, ART_NUM, articleKey, LAW_PATTERNS, lawAt, lawsIn, parseCitation, find };
});
