/* Search over the whole app (laws, esquemas, guías), from data/busqueda.js — an index built in
 * development by tools/build-index.js. Every word must match; accents and case are ignored.
 * One logic for the results page (views/buscar.js) and for the suggestions under the header's
 * field: what they show can never differ. The index only loads the first time it is needed. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const KINDS = [
    ["ley", "En las leyes"],
    ["esquema", "En los esquemas"],
    ["guia", "En las guías"],
  ];
  const SUGERENCIAS = 8;
  const SUGERENCIAS_MOVIL = 5; // with the keyboard open there is little room
  const ESPERA = 120; // ms after the last key
  const ART = /^(?:art|arts|articulo|articulos)\.?$/;
  // Articles, prepositions and conjunctions, folded (no accents), as palabras() compares them.
  const VACIAS = new Set("el la los las lo un una unos unas al del de a ante bajo con contra desde en entre hacia hasta para por segun sin sobre tras y e o u ni que se su sus".split(" "));

  /** The words of a query. Signs around a word are not part of it: «¿caución?» looks for «caución».
   *  The dot and the bracket stay, because they belong to citations («art. 140.1», «42 bis a)»). */
  function palabras(q) {
    const words = Neg.fold(q)
      .split(/\s+/)
      .map((w) => w.replace(/^[¿?¡!«»"'“”,;:&]+|[¿?¡!«»"'“”,;:&]+$/g, ""))
      .filter(Boolean);
    // «art. 140 de la LEC»: when a law is named, the most common small words are not searched.
    const leyes = ((Neg.catalogo && Neg.catalogo.leyes) || []).map((l) => Neg.fold(l.id));
    return words.some((w) => leyes.includes(w)) ? words.filter((w) => !VACIAS.has(w)) : words;
  }

  /** The heading of the article a query names, as it starts in the index («art. 140.»), or null. */
  function articulo(words) {
    const resto = words
      .filter((w) => !ART.test(w))
      .join(" ")
      .replace(/\.$/, "")
      .replace(/^(\d+)\.\d.*$/, "$1"); // «140.1» is article 140
    return /^\d/.test(resto) ? `art. ${resto}.` : null;
  }

  /** Whether a folded text has a word. «art.», «art», «arts.» and «artículo» are one and the same. */
  const contiene = (hay, w) => (ART.test(w) ? /\b(?:arts?\.|articulos?\b)/.test(hay) : hay.includes(w));

  /** The law an entry belongs to, folded: the first word of its context («LEC › LIBRO I»). */
  const ley = (e) => (e.l === undefined ? (e.l = Neg.fold((e.c || "").split(/\s/)[0])) : e.l);

  /** Every entry with all the words: first the article named exactly, then those with the words in
   *  the title, then the rest; within each, in the order of the index (sort is stable). A word may
   *  also be the name of the entry's law, whole («art. 140 LEC»): the rest of the context does not
   *  count, or «título» or «adopción» would bring every entry under them. */
  function buscar(index, words) {
    const nivel = (e) => {
      const t = e.ft || (e.ft = Neg.fold(e.t));
      const propias = words.filter((w) => w !== ley(e) || t.includes(w)); // without the law's name
      const exacto = articulo(propias);
      if (exacto && t.startsWith(exacto)) return 0;
      return propias.length && propias.every((w) => contiene(t, w)) ? 1 : 2;
    };
    return index.entradas
      .filter((e) => {
        const hay = e.f || (e.f = Neg.fold(`${e.t} ${e.d || ""}`)); // folded once, then reused
        return words.every((w) => contiene(hay, w) || w === ley(e));
      })
      .map((e) => [nivel(e), e])
      .sort((a, b) => a[0] - b[0])
      .map((x) => x[1]);
  }

  /** Text with every query word wrapped in <mark>, escaped. */
  function marcar(text, words) {
    const folded = Neg.fold(text);
    const marks = new Array(text.length).fill(false);
    for (const w of words) for (let i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + 1)) for (let j = i; j < i + w.length; j++) marks[j] = true;
    let out = "";
    let open = false;
    for (let i = 0; i < text.length; i++) {
      if (marks[i] !== open) {
        out += marks[i] ? "<mark>" : "</mark>";
        open = marks[i];
      }
      out += esc(text[i]);
    }
    return out + (open ? "</mark>" : "");
  }

  const cargar = () => Neg.data.load("catalogo", "busqueda");
  const href = (q) => `#/buscar?q=${encodeURIComponent(q)}`;

  /** Suggestions as one types, under a search form. `alCerrar` runs when the search is left. */
  function sugerir(form, alCerrar) {
    const input = form.querySelector("input");
    const panel = document.createElement("div");
    panel.className = "search-panel";
    panel.id = "search-panel";
    panel.hidden = true;
    form.append(panel);
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-controls", panel.id);
    input.setAttribute("aria-expanded", "false");

    let espera = null;
    let turno = 0; // an answer that arrives after a newer key, or after closing, is dropped
    let activa = -1;
    const opciones = () => [...panel.querySelectorAll("[role=option], .search-all")];
    const abierto = () => !panel.hidden;

    function cerrar() {
      clearTimeout(espera);
      turno++;
      activa = -1;
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    }

    /** Room down to the bottom of what is visible, the keyboard aside. It scrolls only if it must. */
    function ajustar() {
      if (!abierto()) return;
      const alto = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      panel.style.maxHeight = `${Math.max(160, alto - panel.getBoundingClientRect().top - 8)}px`;
    }

    function pintar(hits, words, q) {
      const movil = window.matchMedia("(max-width: 560px)").matches;
      const vistos = hits.slice(0, movil ? SUGERENCIAS_MOVIL : SUGERENCIAS);
      let n = 0;
      let html = "";
      for (const [kind, label] of KINDS) {
        const lista = vistos.filter((e) => e.k === kind);
        if (!lista.length) continue;
        html += `<div role="group" aria-label="${esc(label)}"><div class="search-group" aria-hidden="true">${esc(label)}</div>`;
        for (const e of lista)
          html += `<a class="search-option" role="option" aria-selected="false" id="sugerencia-${n++}" href="${esc(e.u)}"><strong>${marcar(e.t, words)}</strong>${e.d ? `<span>${marcar(e.d, words)}</span>` : ""}${e.c ? `<small>${esc(e.c)}</small>` : ""}</a>`;
        html += "</div>";
      }
      panel.innerHTML = hits.length
        ? `<div role="listbox" aria-label="Sugerencias">${html}</div><a class="search-all" href="${esc(href(q))}">Ver todos los resultados (${hits.length})</a>`
        : `<p class="search-none">Sin resultados. Prueba con otras palabras o con menos palabras.</p>`;
      activa = -1;
      input.removeAttribute("aria-activedescendant");
      panel.hidden = false;
      input.setAttribute("aria-expanded", "true");
      ajustar();
      const aviso = document.getElementById("announce");
      if (aviso) aviso.textContent = hits.length ? `${hits.length} resultados` : "Sin resultados";
    }

    async function consultar() {
      const q = input.value.trim();
      const words = palabras(q);
      // One letter finds half the app; one digit is an article.
      if (!words.length || (q.length < 2 && !/\d/.test(q))) return cerrar();
      const mio = ++turno;
      let index;
      try {
        index = await cargar();
      } catch (err) {
        return; // the field still works: Enter goes to the results page, which reports it
      }
      if (mio === turno) pintar(buscar(index, words), words, q);
    }

    function marcarActiva(i) {
      const lista = opciones();
      if (!lista.length) return;
      activa = (i + lista.length) % lista.length;
      lista.forEach((o, k) => {
        o.classList.toggle("active", k === activa);
        if (o.getAttribute("role") === "option") o.setAttribute("aria-selected", String(k === activa));
      });
      if (lista[activa].id) input.setAttribute("aria-activedescendant", lista[activa].id);
      else input.removeAttribute("aria-activedescendant");
      lista[activa].scrollIntoView({ block: "nearest" });
    }

    input.addEventListener("input", () => {
      clearTimeout(espera);
      espera = setTimeout(consultar, ESPERA);
    });
    input.addEventListener("focus", () => cargar().catch(() => {}));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Tab") return cerrar();
      if (!abierto()) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        marcarActiva(e.key === "ArrowDown" ? activa + 1 : activa < 0 ? -1 : activa - 1);
      } else if (e.key === "Enter" && activa >= 0) {
        e.preventDefault();
        opciones()[activa].click();
      } else if (e.key === "Escape") {
        // The first Esc closes the suggestions; the next one, the search.
        e.stopPropagation();
        cerrar();
      }
    });
    // Pressing a suggestion must not take the focus from the field before the click arrives.
    panel.addEventListener("mousedown", (e) => e.preventDefault());
    panel.addEventListener("click", (e) => {
      if (!e.target.closest("a")) return;
      cerrar();
      input.value = ""; // the results page writes its own query back
      input.blur();
      alCerrar();
    });
    form.addEventListener("submit", cerrar);
    window.addEventListener("hashchange", cerrar);
    document.addEventListener("pointerdown", (e) => {
      if (form.contains(e.target) || e.target.closest('[data-action="open-search"]')) return;
      cerrar();
      alCerrar();
    });
    if (window.visualViewport) window.visualViewport.addEventListener("resize", ajustar);
    return { cerrar };
  }

  Neg.busqueda = { KINDS, palabras, buscar, marcar, cargar, sugerir };
})();
