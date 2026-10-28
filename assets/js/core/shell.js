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

  /** Esquemas or guías of one law, grouped by their division (Título…). */
  function resources(kind, items, ley) {
    const mine = items.filter((r) => r.ley === ley);
    const byGroup = new Map();
    for (const r of mine) byGroup.set(r.grupo || "", [...(byGroup.get(r.grupo || "") || []), r]);
    let html = "";
    for (const [grupo, list] of byGroup) {
      if (list.length === 1 || !grupo) html += list.map((r) => link(Neg.href(kind, r.id), r.corto || r.titulo)).join("");
      else html += navGroup(`${kind}/${ley}/${grupo}`, `${grupo} (${list.length})`, list.map((r) => link(Neg.href(kind, r.id), r.corto || r.titulo)).join(""));
    }
    return html;
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

  function setDrawer(open) {
    document.getElementById("sidebar").classList.toggle("open", open);
    document.querySelector('[data-action="menu"]').setAttribute("aria-expanded", String(open));
  }

  Neg.shell = {
    async init() {
      const head = document.getElementById("header");
      head.innerHTML = header();
      paintThemeButton();
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

    /** Highlights the navigation entry of the current place and opens its groups. */
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
      for (let sub = found && found.closest(".nav-sub"); sub; sub = sub.parentElement.closest(".nav-sub")) {
        sub.hidden = false;
        sub.previousElementSibling.setAttribute("aria-expanded", "true");
      }
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
