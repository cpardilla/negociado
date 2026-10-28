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

  let lastName = null;
  async function render() {
    const where = Neg.where();
    const el = document.getElementById("view");
    const content = document.querySelector(".content");
    const view = views[where.name];
    // A new view starts at the top; moving inside the same view (another step, another article)
    // lets the view decide.
    if (where.name !== lastName && content) content.scrollTop = 0;
    lastName = where.name;
    Neg.shell && Neg.shell.markCurrent(where);
    if (!view) {
      el.innerHTML = Neg.message("No existe esta página", "La dirección no corresponde a ningún recurso.", true);
      document.title = "No encontrado · Negociado";
      return;
    }
    try {
      await view(el, where.args, where.query);
    } catch (err) {
      console.error(err);
      el.innerHTML = Neg.message("No se ha podido abrir", err.message, true);
    }
  }

  /** Standard message block (loading, error, not found). */
  Neg.message = (title, text, home) =>
    `<div class="message"><h2>${Neg.esc(title)}</h2><p>${Neg.esc(text || "")}</p>${home ? `<p style="margin-top:16px"><a class="btn" href="#/">Ir al inicio</a></p>` : ""}</div>`;

  Neg.start = () => {
    window.addEventListener("hashchange", render);
    render();
  };
})();
