/* Guía view: #/guia/<id>/<step> (the procedure step by step) and #/guia/<id>/mapa (every step by
 * phase). Draws data/guias/<id>.js. Every step has its own address (back/forward work, a step can
 * be shared); the route taken is remembered in this browser (negociado.guia.<id>). */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const rich = (h) => h || ""; // safe subset, checked by tests/data.test.js
  const states = {};

  const BLOCKS = { info: ["t-info", "Información"], nota: ["t-nota", "Nota"], ley: ["t-ley", "Referencia legal"], aviso: ["t-aviso", "Advertencia"], plazo: ["t-plazo", "Plazo"] };
  const ENDS = {
    success: ["t-ok", "Procedimiento concluido favorablemente"],
    error: ["t-aviso", "Procedimiento finalizado sin éxito"],
    warning: ["t-plazo", "Procedimiento finalizado con observaciones"],
    neutral: ["t-nota", "Fin de esta vía"],
  };
  const ROLE = { laj: "laj", juez: "juez", ambos: "ambos", fiscal: "fiscal", mf: "fiscal", registro: "registro" };
  const tone = (phase) => `c${(phase % 6) + 1}`;
  const plain = (h) => String(h || "").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

  // ── State ────────────────────────────────────────────────────────────────

  function state(rec) {
    if (!states[rec.id]) {
      const saved = Neg.prefs.get(`guia.${rec.id}`, null);
      const ok = saved && rec.pasos[saved.cur] && saved.hist.every((h) => rec.pasos[h.s]);
      states[rec.id] = ok ? { cur: saved.cur, hist: saved.hist, checks: saved.checks || {} } : { cur: rec.inicio, hist: [], checks: {} };
    }
    return states[rec.id];
  }
  const save = (rec, s) => Neg.prefs.set(`guia.${rec.id}`, { cur: s.cur, hist: s.hist, checks: s.checks });

  const exits = (step) => [...(step.siguiente ? [{ to: step.siguiente, c: "" }] : []), ...(step.opciones || []).map((o) => ({ to: o.destino, c: plain(o.texto) }))];

  /** The most direct route from the start to a step (breadth first), as the old guías did. */
  function routeTo(rec, target) {
    if (target === rec.inicio) return [];
    const queue = [{ at: rec.inicio, path: [] }];
    const seen = new Set([rec.inicio]);
    while (queue.length) {
      const { at, path } = queue.shift();
      for (const e of exits(rec.pasos[at])) {
        const next = [...path, { s: at, c: e.c }];
        if (e.to === target) return next;
        if (rec.pasos[e.to] && !seen.has(e.to)) {
          seen.add(e.to);
          queue.push({ at: e.to, path: next });
        }
      }
    }
    return []; // unreachable from the start: shown on its own
  }

  /** Brings the state in line with the address: a choice just made, a step back, or a jump. */
  function sync(rec, s, step) {
    if (step === s.cur) return;
    const back = s.hist.findIndex((h) => h.s === step);
    if (s.pending && s.pending.to === step) s.hist.push({ s: s.pending.from, c: s.pending.c });
    else if (back >= 0) s.hist = s.hist.slice(0, back);
    else s.hist = routeTo(rec, step);
    s.pending = null;
    s.cur = step;
  }

  // ── Drawing ──────────────────────────────────────────────────────────────

  function blocks(list, s, stepId) {
    return list
      .map((b, i) => {
        if (b.tipo === "lista") {
          if (b.marcar) {
            const done = s.checks[stepId] || [];
            return `<div class="checklist">${b.titulo ? `<span class="block-label">${rich(b.titulo)}</span>` : ""}${b.items.map((it, j) => `<label><input type="checkbox" data-check="${i}:${j}"${done.includes(`${i}:${j}`) ? " checked" : ""} /><span>${rich(it)}</span></label>`).join("")}</div>`;
          }
          return `<div class="block t-nota">${b.titulo ? `<span class="block-label">${rich(b.titulo)}</span>` : ""}<ul class="items">${b.items.map((it) => `<li>${rich(it)}</li>`).join("")}</ul></div>`;
        }
        const [cls, label] = BLOCKS[b.tipo];
        return `<div class="block ${cls}"><span class="block-label">${label}</span>${rich(b.texto)}</div>`;
      })
      .join("");
  }

  const actor = (rec, code) => `<span class="actor ${ROLE[code] || "partes"}">${rich(rec.actores[code] || code)}</span>`;

  function phasesHtml(rec, step) {
    return `<nav class="phases" aria-label="Fases">${rec.fases
      .map((name, i) => {
        const cls = i === step.fase ? "current" : i < step.fase ? "done" : "";
        const first = Object.keys(rec.pasos).find((k) => rec.pasos[k].fase === i);
        return first ? `<a class="phase ${tone(i)} ${cls}" href="${Neg.href("guia", rec.id, first)}"${cls === "current" ? ' aria-current="step"' : ""}>${rich(name)}</a>` : `<span class="phase ${tone(i)}">${rich(name)}</span>`;
      })
      .join("")}</nav>`;
  }

  function stepHtml(rec, s) {
    const id = s.cur;
    const step = rec.pasos[id];
    const n = s.hist.length + 1;
    const where = `Paso ${n} de este recorrido · Fase ${step.fase + 1}: ${plain(rec.fases[step.fase] || "")}`;
    const nav = `<div class="step-nav">
        <a class="btn" href="${s.hist.length ? Neg.href("guia", rec.id, s.hist[s.hist.length - 1].s) : "#"}"${s.hist.length ? "" : ' aria-disabled="true" tabindex="-1"'} data-action="back">${Neg.icon("back")} Volver</a>
        <span class="spacer"></span>
        <button class="btn" data-action="restart">${Neg.icon("restart")} Reiniciar</button>
        ${step.siguiente ? `<button class="btn btn-primary" data-go="${esc(step.siguiente)}" data-choice="">Siguiente ${Neg.icon("chev")}</button>` : ""}
      </div>`;
    if (step.fin) {
      const [cls, title] = ENDS[step.fin] || ENDS.neutral;
      const route = [...s.hist.map((h) => `<li>${rich(rec.pasos[h.s].titulo)}${h.c ? `<span class="choice">→ ${esc(h.c)}</span>` : ""}</li>`), `<li class="current">${rich(step.titulo)}</li>`].join("");
      return `<article class="step ${tone(step.fase)}">
        <div class="step-head">${actor(rec, step.actor)}<h2>${rich(step.titulo)}</h2><div class="where">${esc(where)}</div></div>
        <div class="step-body">
          <div class="block ${cls} end"><span class="block-label">Fin del recorrido</span><strong>${title}</strong></div>
          ${blocks(step.bloques, s, id)}
          <h3 class="route-title">Recorrido seguido (${n} pasos)</h3><ol class="route">${route}</ol>
        </div>
        ${nav}
      </article>`;
    }
    const decision = step.opciones
      ? `<div class="decision"><div class="decision-q">${rich(step.pregunta || "")}</div><div class="options">${step.opciones
          .map((o, i) => `<button class="option ${o.tono}" data-go="${esc(o.destino)}" data-choice="${esc(plain(o.texto))}"><span class="key">${String.fromCharCode(65 + i)}</span><span>${rich(o.texto)}${o.nota ? `<small>${rich(o.nota)}</small>` : ""}</span></button>`)
          .join("")}</div></div>`
      : "";
    return `<article class="step ${tone(step.fase)}">
      <div class="step-head">${actor(rec, step.actor)}<h2>${rich(step.titulo)}</h2><div class="where">${esc(where)}</div></div>
      <div class="step-body">${blocks(step.bloques, s, id)}</div>
      ${decision}
      ${nav}
    </article>`;
  }

  function panelHtml(rec, s) {
    const items = s.hist.map((h) => `<li class="${tone(rec.pasos[h.s].fase)}"><a href="${Neg.href("guia", rec.id, h.s)}">${rich(rec.pasos[h.s].titulo)}</a>${h.c ? `<span class="choice">→ ${esc(h.c)}</span>` : ""}</li>`).join("");
    const cur = `<li class="current ${tone(rec.pasos[s.cur].fase)}">${rich(rec.pasos[s.cur].titulo)}</li>`;
    return `<aside class="panel"><h3>Tu recorrido</h3><ol class="route">${items}${cur}</ol>${rec.pie ? `<div class="panel-foot">${rich(rec.pie)}</div>` : ""}</aside>`;
  }

  function head(rec, mode) {
    const rev =
      rec.revision.estado === "revisado"
        ? `<span class="tag t-ok">Revisado con el BOE a ${Neg.fecha(rec.revision.boe)}</span>`
        : `<span class="tag t-aviso" title="Contenido migrado tal cual de la versión anterior; su revisión jurídica está en curso.">Pendiente de revisión</span>`;
    const arts = rec.articulos.length ? ` · arts. ${rec.articulos[0]}–${rec.articulos[rec.articulos.length - 1]}` : "";
    return (
      Neg.shell.head({ crumbs: [["Guías"], [rec.ley], [rec.corto]], kicker: `Guía de tramitación · ${rec.ley}${arts}`, title: rec.corto, sub: rec.titulo !== rec.corto ? rec.titulo : "", meta: rev }) +
      `<div class="toolbar static"><div class="segmented" role="group" aria-label="Vista"><a href="${Neg.href("guia", rec.id, states[rec.id].cur)}" aria-pressed="${mode === "paso"}">Paso a paso</a><a href="${Neg.href("guia", rec.id, "mapa")}" aria-pressed="${mode === "mapa"}">Mapa de pasos</a></div>
        <span class="spacer"></span>${rec.articulos.length && Neg.catalogo.esquemas.some((e) => e.id === rec.id) ? `<a class="btn" href="${Neg.href("esquema", rec.id)}">Esquema</a>` : ""}<button class="btn" data-action="print">${Neg.icon("print")} Imprimir</button></div>`
    );
  }

  function renderMap(el, rec, s) {
    const visited = new Set([...s.hist.map((h) => h.s), s.cur]);
    const cols = rec.fases
      .map((name, i) => {
        const steps = Object.keys(rec.pasos).filter((k) => rec.pasos[k].fase === i);
        if (!steps.length) return "";
        return `<section class="map-phase ${tone(i)}"><h3>${i + 1}. ${rich(name)}</h3><ul>${steps
          .map((k) => {
            const p = rec.pasos[k];
            const cls = [k === s.cur ? "current" : visited.has(k) ? "visited" : "", p.fin ? `end ${(ENDS[p.fin] || ENDS.neutral)[0]}` : ""].join(" ");
            return `<li class="${cls}"><a href="${Neg.href("guia", rec.id, k)}">${rich(p.titulo)}</a>${actor(rec, p.actor)}</li>`;
          })
          .join("")}</ul></section>`;
      })
      .join("");
    el.dataset.view = `guia/${rec.id}/mapa`;
    el.innerHTML = head(rec, "mapa") + `<p class="map-legend"><span class="tag t-ley">Paso actual</span> <span class="tag">Visitado</span> Los pasos finales llevan el color de su resultado. Pulsa un paso para ir a él.</p><div class="map-grid">${cols}</div>`;
    document.title = `${rec.corto} (mapa) · Negociado`;
    wireToolbar(el, rec, s);
  }

  function renderStep(el, rec, s) {
    const step = rec.pasos[s.cur];
    const same = el.dataset.view === `guia/${rec.id}`;
    if (!same) {
      el.dataset.view = `guia/${rec.id}`;
      el.innerHTML = head(rec, "paso") + `<div data-phases></div><div class="guide"><div data-step></div><div data-panel></div></div>`;
      wireToolbar(el, rec, s);
      wire(el, rec, s);
    }
    el.querySelector("[data-phases]").innerHTML = phasesHtml(rec, step);
    el.querySelector("[data-step]").innerHTML = stepHtml(rec, s);
    el.querySelector("[data-panel]").innerHTML = panelHtml(rec, s);
    el.querySelector('.segmented a[aria-pressed="true"]').href = Neg.href("guia", rec.id, s.cur);
    Neg.referencias.link(el.querySelector("[data-step] .step-body"), rec.ley);
    document.title = `${plain(step.titulo)} · ${rec.corto} · Negociado`;
    if (same) {
      const top = el.querySelector("[data-phases]");
      const content = document.getElementById("content");
      if (top.getBoundingClientRect().top < content.getBoundingClientRect().top) top.scrollIntoView({ block: "start" });
    }
  }

  function wireToolbar(el, rec, s) {
    el.querySelector(".toolbar").addEventListener("click", (e) => {
      if (e.target.closest('[data-action="print"]')) window.print();
    });
  }

  /** One set of listeners per drawing of the view (on its own nodes, never on #view). */
  function wire(el, rec, s) {
    const guide = el.querySelector(".guide");
    guide.addEventListener("click", (e) => {
      const go = e.target.closest("[data-go]");
      if (go) {
        s.pending = { from: s.cur, to: go.dataset.go, c: go.dataset.choice };
        Neg.go("guia", rec.id, go.dataset.go);
        return;
      }
      const act = e.target.closest("[data-action]");
      if (!act) return;
      if (act.dataset.action === "back" && !s.hist.length) e.preventDefault();
      if (act.dataset.action === "restart") {
        s.hist = [];
        s.checks = {};
        s.cur = rec.inicio;
        save(rec, s);
        if (Neg.where().args[1] === rec.inicio) renderStep(el, rec, s);
        else Neg.go("guia", rec.id, rec.inicio);
      }
    });
    guide.addEventListener("change", (e) => {
      const box = e.target.closest("[data-check]");
      if (!box) return;
      const list = new Set(s.checks[s.cur] || []);
      box.checked ? list.add(box.dataset.check) : list.delete(box.dataset.check);
      s.checks[s.cur] = [...list];
      save(rec, s);
    });
  }

  Neg.view("guia", async (el, [id, step]) => {
    if (!id) {
      const first = Neg.catalogo.guias[0];
      return first ? Neg.go("guia", first.id) : (el.innerHTML = Neg.message("Aún no hay guías", ""));
    }
    if (!Neg.catalogo.guias.some((r) => r.id === id)) {
      el.innerHTML = Neg.message("No existe esta guía", `«${id}» no está entre las guías de la aplicación.`, true);
      document.title = "No encontrado · Negociado";
      return;
    }
    if (!el.dataset.view || !el.dataset.view.startsWith(`guia/${id}`)) el.innerHTML = Neg.message("Cargando la guía…");
    const rec = await Neg.data.load("guia", id);
    const s = state(rec);
    if (step === "mapa") return renderMap(el, rec, s);
    if (!step || !rec.pasos[step]) {
      if (step) Neg.toast("Ese paso no existe en esta guía");
      // Where the viewer left it (or the start), without a new history entry.
      location.replace(Neg.href("guia", id, s.cur));
      return;
    }
    sync(rec, s, step);
    save(rec, s);
    renderStep(el, rec, s);
  });
})();
