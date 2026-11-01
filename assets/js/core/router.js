/* Hash router. Every place in the app has a shareable address:
 *   #/                       home
 *   #/ley/LJV                a law (index)        #/ley/LJV/140   an article
 *   #/ley/LJV/mapa           the law as a mind map
 *   #/esquema/<id>[/<art>]   an esquema (optionally opened at an article's card)
 *   #/guia/<id>[/<paso>]     a guía (optionally at a step)
 *   #/buscar?q=…             search results
 * Hash-based so that it works on GitHub Pages and from file:// alike. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const views = {};

  /** Registers a view: render(el, args, query) draws it into el (may be async). */
  Neg.view = (name, render) => {
    views[name] = render;
  };

  /** Current address, parsed. */
  Neg.where = () => {
    const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [path, qs] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    return { name: parts[0] || "inicio", args: parts.slice(1), query: new URLSearchParams(qs || ""), path };
  };

  /** Address of a place: Neg.href("ley", "LJV", "140") → "#/ley/LJV/140". */
  Neg.href = (...parts) => "#/" + parts.filter((p) => p != null && p !== "").map((p) => encodeURIComponent(p)).join("/");

  Neg.go = (...parts) => {
    location.hash = Neg.href(...parts).slice(1);
  };

  /** Where a keyboard or screen-reader user lands: the page's main heading. */
  function focusHeading() {
    const h = document.querySelector("#view h1") || document.getElementById("content");
    if (!h) return;
    if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
    h.focus({ preventScroll: true });
  }

  let lastName = null;
  let first = true;
  async function render() {
    const where = Neg.where();
    const el = document.getElementById("view");
    const content = document.querySelector(".content");
    const view = views[where.name];
    // A new view starts at the top and from scratch (el.dataset.view is where a view notes what it
    // drew, to update only what changes when moving inside it: another article, another step).
    if (where.name !== lastName) {
      if (content) content.scrollTop = 0;
      delete el.dataset.view;
    }
    lastName = where.name;
    Neg.shell && Neg.shell.markCurrent(where);
    if (!view) {
      el.innerHTML = Neg.message("No existe esta página", "La dirección no corresponde a ningún recurso.", true);
      document.title = "No encontrado · Negociado";
      return;
    }
    try {
      await view(el, where.args, where.query);
      // Remembered for the home page, only if it is a resource of the catalogue (not a wrong address).
      const lists = { ley: "leyes", esquema: "esquemas", guia: "guias" };
      const id = where.args[0];
      if (lists[where.name] && Neg.catalogo && Neg.catalogo[lists[where.name]].some((r) => r.id === id)) Neg.recientes.add(where.name, id);
    } catch (err) {
      console.error(err);
      el.innerHTML = Neg.message("No se ha podido abrir", err.message, true);
    }
    // After moving to another page: screen readers hear its name, and the keyboard focus, if the
    // control that had it is gone with the old page, starts again at the new heading.
    if (!first) {
      const announce = document.getElementById("announce");
      if (announce) announce.textContent = document.title.replace(/ · Negociado$/, "");
      const at = document.activeElement;
      if (!at || at === document.body || !at.isConnected) focusHeading();
    }
    first = false;
  }

  /** Standard message block (loading, error, not found). */
  Neg.message = (title, text, home) =>
    `<div class="message"><h2>${Neg.esc(title)}</h2><p>${Neg.esc(text || "")}</p>${home ? `<p style="margin-top:16px"><a class="btn" href="#/">Ir al inicio</a></p>` : ""}</div>`;

  Neg.start = () => {
    // "Saltar al contenido": the hash holds the route, so the jump is done here, not by the link.
    document.addEventListener("click", (e) => {
      if (!e.target.closest('[data-action="skip"]')) return;
      e.preventDefault();
      focusHeading();
    });
    window.addEventListener("hashchange", render);
    render();
  };
})();
