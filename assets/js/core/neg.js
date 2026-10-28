/* Negociado — shared utilities on the one global the app defines: window.Neg.
 * Classic script (no modules): it must work from file:// as well as on GitHub Pages. */
(function () {
  "use strict";
  const Neg = (window.Neg = window.Neg || {});

  /** The only HTML-escaping function of the app: every text put into markup goes through it. */
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  Neg.esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);

  /** Lowercase without accents: for search and comparisons ("jurisdiccion" finds "Jurisdicción"). */
  Neg.fold = (s) =>
    String(s == null ? "" : s)
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase();

  /** "20260305" → "05-03-2026". */
  Neg.fecha = (d) => (d && d.length === 8 ? `${d.slice(6, 8)}-${d.slice(4, 6)}-${d.slice(0, 4)}` : d || "");

  Neg.debounce = (fn, ms) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  };

  /** Per-viewer preferences in localStorage, under "negociado.*" only (the file:// origin is
   *  shared with Agenda and Plantillas). Storage may be unavailable: never fatal. */
  Neg.prefs = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(`negociado.${key}`);
        return v == null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        if (value == null) localStorage.removeItem(`negociado.${key}`);
        else localStorage.setItem(`negociado.${key}`, JSON.stringify(value));
      } catch {
        /* storage blocked or full: the preference simply is not remembered */
      }
    },
  };

  /** Inline SVG icons (stroke style), by name. */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    out: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    print: '<path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 14h12v7H6z"/>',
    back: '<path d="M15 6l-6 6 6 6"/>',
    restart: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
    scale: '<path d="M16 4v24M8 4h16M11 28h10M8 5 3 16M8 5l5 11M3 16q5 4 10 0M24 5l-5 11M24 5l5 11M19 16q5 4 10 0"/>',
  };
  Neg.icon = (name, cls) =>
    name === "scale"
      ? `<svg class="${cls || ""}" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">${ICONS.scale}</svg>`
      : `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  /** Copy text to the clipboard; falls back to a hidden textarea (older browsers, file://). */
  Neg.copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;left:-9999px;top:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      ta.remove();
      return ok;
    }
  };

  /** Theme: the system's unless the viewer chose one ("claro" / "oscuro"), remembered.
   *  Applied as soon as this script runs (it is loaded in <head>), so there is no flash. */
  Neg.theme = {
    get() {
      const chosen = Neg.prefs.get("tema", null);
      if (chosen) return chosen;
      return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
    },
    apply() {
      const chosen = Neg.prefs.get("tema", null);
      if (chosen) document.documentElement.dataset.theme = chosen === "oscuro" ? "dark" : "light";
      else delete document.documentElement.dataset.theme;
    },
    toggle() {
      Neg.prefs.set("tema", Neg.theme.get() === "oscuro" ? "claro" : "oscuro");
      Neg.theme.apply();
      document.dispatchEvent(new Event("neg:tema"));
    },
  };
  Neg.theme.apply();
  // Following the system: its changes are announced too (views that read colours redraw).
  if (window.matchMedia)
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!Neg.prefs.get("tema", null)) document.dispatchEvent(new Event("neg:tema"));
    });

  /** A short message at the bottom of the screen. */
  Neg.toast = (msg) => {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("visible");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("visible"), 2200);
  };
})();
