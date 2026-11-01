/* The shell around every view: header (brand, search, theme), side navigation built from
 * data/catalogo.js, mobile drawer, and the page header that every view uses. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;

  const groupsOpen = new Set(Neg.prefs.get("nav", []));
  const saveGroups = () => Neg.prefs.set("nav", [...groupsOpen]);

  function navGroup(key, label, inner) {
    const open = groupsOpen.has(key);
    return `<button class="nav-item" data-group="${esc(key)}" aria-expanded="${open}">${Neg.icon("chev", "chev")}<span>${esc(label)}</span></button>
      <div class="nav-sub" ${open ? "" : "hidden"}>${inner}</div>`;
  }
  const link = (href, label, tag) => `<a class="nav-item" href="${esc(href)}"><span>${esc(label)}</span>${tag ? `<span class="tag">${esc(tag)}</span>` : ""}</a>`;

  /** «TÍTULO II» → «Título II», «CAPÍTULO I BIS» → «Cap. I bis» (short: «Tít. II»). */
  function division(num, short) {
    const [first, ...rest] = num.trim().split(/\s+/);
    const name = { TÍTULO: short ? "Tít." : "Título", CAPÍTULO: "Cap.", LIBRO: "Libro", SECCIÓN: "Secc." }[first.toUpperCase()] || first;
    return [name, ...rest.map((w) => (/^[IVXLC]+$/.test(w) ? w : w.toLowerCase()))].join(" ").replace(/ preliminar$/, " Preliminar");
  }

  /** Esquemas or guías of one law, placed as the law's own index places them (catalogo `ruta`:
   *  the divisions that contain every article of the resource). A division holding a single
   *  division or a single resource is merged with it, so there are no one-item folders; the rest
   *  are folders, in the law's order, and every entry of a level lines up with its peers. */
  function resources(kind, items, ley) {
    const root = { kids: [] };
    for (const r of items.filter((x) => x.ley === ley)) {
      let node = root;
      for (const d of r.ruta || []) {
        let next = node.kids.find((k) => !k.res && k.num === d.num);
        if (!next) node.kids.push((next = { num: d.num, t: d.t, kids: [] }));
        node = next;
      }
      node.kids.push({ res: r });
    }
    const under = (n) => (n.res ? [n.res] : n.kids.flatMap(under));
    const leaf = (r, chain) => {
      const name = r.corto || r.titulo;
      const where = chain.map((d) => division(d.num, chain.length > 1)).join(" › ");
      const label = !where || name.startsWith(division(chain[chain.length - 1].num)) ? name : `${where} · ${name}`;
      return `<a class="nav-item" href="${esc(Neg.href(kind, r.id))}"><span class="chev-space"></span><span>${esc(label)}</span></a>`;
    };
    const render = (kids) =>
      kids
        .map((k) => {
          if (k.res) return leaf(k.res, []);
          const chain = [k];
          while (chain[chain.length - 1].kids.length === 1 && !chain[chain.length - 1].kids[0].res) chain.push(chain[chain.length - 1].kids[0]);
          const last = chain[chain.length - 1];
          if (last.kids.length === 1) return leaf(last.kids[0].res, chain);
          const list = under(last);
          const grupo = list[0].grupo;
          const where = chain.map((d) => division(d.num, chain.length > 1)).join(" › ");
          const label = grupo && list.every((r) => r.grupo === grupo) && grupo.startsWith(division(last.num)) ? grupo : `${where} · ${last.t}`;
          return navGroup(`${kind}/${ley}/${chain.map((d) => d.num).join("/")}`, `${label} (${list.length})`, render(last.kids));
        })
        .join("");
    return render(root.kids);
  }

  function sidebar(cat) {
    const leyes = cat.leyes.map((l) => link(Neg.href("ley", l.id), l.nombre, l.id)).join("");
    const block = (kind, title, items) => {
      if (!items.length) return "";
      const laws = cat.leyes.filter((l) => items.some((r) => r.ley === l.id));
      return `<div class="nav-group"><div class="nav-group-title">${title}</div>${laws.map((l) => navGroup(`${kind}/${l.id}`, l.id, resources(kind, items, l.id))).join("")}</div>`;
    };
    return `<div class="nav-group"><div class="nav-group-title">Leyes</div>${leyes}</div>` + block("esquema", "Esquemas", cat.esquemas) + block("guia", "Guías de tramitación", cat.guias);
  }

  function header() {
    return `
      <button class="icon-btn menu-btn" data-action="menu" aria-label="Menú" aria-controls="sidebar" aria-expanded="false">${Neg.icon("menu")}</button>
      <a class="brand" href="#/"><span class="brand-mark">${Neg.icon("scale")}</span><span class="brand-name">Negociado<small>Juzgados de Las Palmas</small></span></a>
      <form class="header-search search search-on-ink" role="search" data-action="search">
        ${Neg.icon("search")}
        <input type="search" name="q" placeholder="Buscar en leyes, esquemas y guías…" aria-label="Buscar en leyes, esquemas y guías" autocomplete="off" />
        <kbd aria-hidden="true">/</kbd>
      </form>
      <div class="header-actions">
        <button class="icon-btn search-btn" data-action="open-search" aria-label="Buscar">${Neg.icon("search")}</button>
        <div class="view-tools" role="group" aria-label="Vista">
          <div class="zoom-cluster" role="group" aria-label="Tamaño del contenido"><button data-action="zoom-out" aria-label="Reducir">&minus;</button><output data-zoom aria-live="polite">100%</output><button data-action="zoom-in" aria-label="Ampliar">+</button></div>
          <button class="icon-btn" data-action="zoom-reset" aria-label="Tamaño original (100 %)" title="Tamaño original">${Neg.icon("restart")}</button>
          <button class="tool-btn" data-action="new-tab" title="Abrir esta página en una pestaña nueva">${Neg.icon("out")}<span>Nueva pestaña</span></button>
          <button class="tool-btn" data-action="fullscreen" title="Ver el contenido a pantalla completa">${Neg.icon("fullscreen")}<span>Pantalla completa</span></button>
        </div>
        <button class="icon-btn" data-action="theme" aria-label="Cambiar a tema oscuro">${Neg.icon("moon")}</button>
      </div>`;
  }

  function paintThemeButton() {
    const btn = document.querySelector('[data-action="theme"]');
    if (!btn) return;
    const dark = Neg.theme.get() === "oscuro";
    btn.innerHTML = Neg.icon(dark ? "sun" : "moon");
    btn.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  }

  // ── View tools (as in the old pages): zoom of the content, new tab, full screen ──
  const ZOOM = { step: 10, min: 50, max: 200 };
  let zoom = Neg.prefs.get("zoom", 100);
  function applyZoom() {
    zoom = Math.min(ZOOM.max, Math.max(ZOOM.min, zoom));
    const inner = document.querySelector(".content-inner");
    if (inner) inner.style.zoom = zoom === 100 ? "" : String(zoom / 100);
    const out = document.querySelector("[data-zoom]");
    if (out) out.textContent = `${zoom}%`;
    const less = document.querySelector('[data-action="zoom-out"]');
    const more = document.querySelector('[data-action="zoom-in"]');
    if (less) less.disabled = zoom <= ZOOM.min;
    if (more) more.disabled = zoom >= ZOOM.max;
    Neg.prefs.set("zoom", zoom);
  }
  const setZoom = (z) => {
    zoom = z;
    applyZoom();
  };
  function paintFullscreen() {
    const btn = document.querySelector('[data-action="fullscreen"]');
    if (!btn) return;
    const on = !!document.fullscreenElement;
    btn.innerHTML = `${Neg.icon(on ? "exitfs" : "fullscreen")}<span>${on ? "Salir de pantalla completa" : "Pantalla completa"}</span>`;
    btn.title = on ? "Salir de la pantalla completa" : "Ver el contenido a pantalla completa";
  }
  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.getElementById("content").requestFullscreen().catch(() => {});
  }

  function setDrawer(open) {
    document.getElementById("sidebar").classList.toggle("open", open);
    document.querySelector('[data-action="menu"]').setAttribute("aria-expanded", String(open));
  }

  Neg.shell = {
    async init() {
      const head = document.getElementById("header");
      head.innerHTML = header();
      paintThemeButton();
      applyZoom();
      paintFullscreen();
      document.addEventListener("fullscreenchange", paintFullscreen);
      // Zoom from the keyboard, as in the old pages: Ctrl/⌘ with + − 0, or + − 0 alone outside a field.
      document.addEventListener("keydown", (e) => {
        const typing = e.target.closest && e.target.closest("input, textarea, select, [contenteditable]");
        if (e.altKey || (!e.ctrlKey && !e.metaKey && typing)) return;
        const k = e.key;
        if (k === "+" || k === "=") setZoom(zoom + ZOOM.step);
        else if (k === "-" || k === "_") setZoom(zoom - ZOOM.step);
        else if (k === "0") setZoom(100);
        else return;
        e.preventDefault();
      });
      const cat = await Neg.data.load("catalogo", "catalogo");
      Neg.catalogo = cat;
      const nav = document.getElementById("sidebar");
      nav.innerHTML = sidebar(cat);

      nav.addEventListener("click", (e) => {
        const g = e.target.closest("[data-group]");
        if (g) {
          const open = g.getAttribute("aria-expanded") !== "true";
          g.setAttribute("aria-expanded", String(open));
          g.nextElementSibling.hidden = !open;
          open ? groupsOpen.add(g.dataset.group) : groupsOpen.delete(g.dataset.group);
          saveGroups();
        } else if (e.target.closest("a")) setDrawer(false);
      });
      head.addEventListener("click", (e) => {
        const a = e.target.closest("[data-action]");
        if (!a) return;
        if (a.dataset.action === "theme") {
          Neg.theme.toggle();
          paintThemeButton();
        }
        if (a.dataset.action === "menu") setDrawer(!nav.classList.contains("open"));
        if (a.dataset.action === "zoom-in") setZoom(zoom + ZOOM.step);
        if (a.dataset.action === "zoom-out") setZoom(zoom - ZOOM.step);
        if (a.dataset.action === "zoom-reset") setZoom(100);
        if (a.dataset.action === "new-tab") window.open(location.href, "_blank", "noopener");
        if (a.dataset.action === "fullscreen") toggleFullscreen();
        if (a.dataset.action === "open-search") {
          head.classList.add("searching");
          head.querySelector('input[name="q"]').focus();
        }
      });
      head.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const q = e.target.q.value.trim();
        if (q) location.hash = `#/buscar?q=${encodeURIComponent(q)}`;
        head.classList.remove("searching");
      });
      // "/" focuses the search, as in many reference sites; Esc closes the drawer.
      document.addEventListener("keydown", (e) => {
        if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
          e.preventDefault();
          head.classList.add("searching");
          head.querySelector('input[name="q"]').focus();
        }
        if (e.key === "Escape") {
          setDrawer(false);
          head.classList.remove("searching");
        }
      });
    },

    /** Highlights the navigation entry of the current place and opens its groups. On a page with
     *  an entry, only the groups that lead to it stay open (the menu does not keep growing as one
     *  moves between esquemas and guías); groups opened by hand stay until the next page. */
    markCurrent(where) {
      const nav = document.getElementById("sidebar");
      if (!nav) return;
      const target = where.name === "inicio" ? null : Neg.href(where.name, where.args[0]);
      let found = null;
      nav.querySelectorAll("a.nav-item").forEach((a) => {
        const on = !found && a.getAttribute("href") === target;
        if (on) found = a;
        on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
      });
      if (!found) return;
      const path = new Set();
      for (let sub = found.closest(".nav-sub"); sub; sub = sub.parentElement.closest(".nav-sub")) path.add(sub);
      nav.querySelectorAll(".nav-sub").forEach((sub) => {
        const open = path.has(sub);
        sub.hidden = !open;
        sub.previousElementSibling.setAttribute("aria-expanded", String(open));
      });
      groupsOpen.clear();
      path.forEach((sub) => groupsOpen.add(sub.previousElementSibling.dataset.group));
      saveGroups();
    },

    /** The header of a page: breadcrumbs (none when `crumbs` is null), kicker, title, subtitle,
     *  tags. Sets the tab title. */
    head({ crumbs = [], kicker = "", title, sub = "", meta = "", tab }) {
      document.title = tab || `${title} · Negociado`;
      const trail = crumbs
        ? [["Inicio", "#/"], ...crumbs].map(([label, href]) => `<li>${href ? `<a href="${esc(href)}">${esc(label)}</a>` : esc(label)}</li>`).join("")
        : "";
      return `${trail ? `<nav aria-label="Ruta"><ol class="crumbs">${trail}</ol></nav>` : ""}
        <header class="page-head">
          ${kicker ? `<div class="page-kicker">${esc(kicker)}</div>` : ""}
          <h1>${esc(title)}</h1>
          ${sub ? `<p class="page-sub">${esc(sub)}</p>` : ""}
          ${meta ? `<div class="page-meta">${meta}</div>` : ""}
        </header>`;
    },
  };
})();
