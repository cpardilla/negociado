# Plan de rediseño — Negociado

Plan propuesto el 2026-10-28 tras la revisión completa de la app. **Aprobado por el propietario el 2026-10-28.** Documento vivo: se actualiza con cada paso (estado, cifras, decisiones, hallazgos).

Marcadores: ✅ hecho · ▶ en curso · ☐ pendiente · ⏸ aplazado · ✖ descartado (con motivo).

---

## 1. Objetivo y prioridades

Rediseñar la app por completo conservando lo que funciona de la base actual (aspecto general, carcasa con menú lateral, tarjetas de los esquemas, motor de decisiones de las guías), con este orden de prioridad, fijado por el propietario:

1. **Contenido exacto y actualizado** en toda la app: eliminar errores e inexactitudes; ajustar al Derecho vigente.
2. **DRY a todos los niveles**: un solo código, un solo sistema de estilos, un solo formato de datos por tipo de recurso, y también contenido no duplicado (un hecho jurídico se escribe una vez y se reutiliza).
3. Leyes completas (markmap) que cubran **íntegramente** LEC y LJV.
4. Interfaces homogéneas y mejoradas.
5. Mejoras adicionales que aporten valor (sección 8).

## 2. Reglas de trabajo (como en Agenda)

- **Ningún cambio en la app sin visto bueno** del propietario. Fase a fase: plan → aprobación → un commit por paso → verificación → informe honesto con cifras.
- Antes de cualquier cambio de riesgo, punto de restauración (tag `baseline-2026-10-28` sobre el estado actual).
- **Separar siempre la forma del fondo**: la migración al nuevo formato no cambia ni una palabra del contenido; la revisión jurídica se hace después, en commits propios, para que cada corrección sea visible y revisable por separado.
- Cada corrección de contenido queda registrada con su **fuente** (precepto y versión del BOE) en el registro de revisión (sección 6.4).
- Las decisiones jurídicas dudosas (eliminar un paso, interpretar un precepto discutido, práctica del juzgado) **se consultan al propietario**; no se deciden en silencio.
- **Lo interno no llega a la app**: números de decisión, «criterio del propietario/del juzgado», códigos de recurso (E14, G10), fases o referencias a este documento se quedan en `docs/`. En la app, el contenido se redacta tal cual (lo vigila `tests/data.test.js`).
- **Cada implementación (uno o varios pasos) va seguida de una auditoría completa** —segunda vuelta en busca de fallos existentes o introducidos y de despistes— **y de una batería de tests**; el informe de cada paso recoge ambas.
- Agenda y Plantillas no se modifican nunca (solo se leen como referencia).
- Push a GitHub solo cuando el propietario lo pida. **`main` es la web publicada** (GitHub Pages, https://cpardilla.github.io/negociado/): el rediseño se hace en una rama propia (`rediseno`) y solo se lleva a `main` con visto bueno, por bloques completos que funcionen. Así la web nunca queda a medias.

## 3. Restricciones técnicas

- **Destino: la web pública en GitHub Pages** (https). Negociado no está en la memoria USB (confirmado, 2026-10-28). Se mantiene además que funcione abierta desde `file://` (la copia de trabajo en el PC), porque no cuesta nada con el diseño elegido y permite usarla sin red; los tests se ejecutan en ambos modos. Navegadores de referencia: Edge y Chrome actuales.
- **Sin paso de compilación para publicar**: Pages sirve el repositorio tal cual desde la raíz de `main`. Lo generado (p. ej. `data/leyes/*.js` desde el BOE) se genera en desarrollo y se versiona. Herramientas en node (generadores, comprobaciones, navegador headless) solo en desarrollo; la app nunca depende de ellas.
- **Vanilla**: HTML, CSS y JavaScript sin frameworks.
- `<script src>` clásicos (sin módulos ES ni `fetch()` de ficheros locales, que `file://` no permite): todo dato va en ficheros `.js` que registran su contenido en un objeto global. Se cargan bajo demanda insertando `<script>`, que funciona en ambos entornos.
- **Cero dependencias de red de terceros en ejecución.** Hoy: Google Fonts en todas las páginas y `html-to-image` desde CDN en una guía. Se eliminan. Tipografía: en https una fuente local `.woff2` funciona, pero en `file://` Chromium la bloquea por CORS; para que valga en ambos, fuente incrustada (`data:` en el CSS, solo los pesos usados) o fuentes del sistema — se decide en fase 1 midiendo el peso. *(2026-11-01, el propietario lo matiza: se admiten recursos externos imprescindibles para una característica, sin abusar; primer caso, la comprobación de vigencia de un artículo contra la API del BOE, a petición.)*
- **Contenido público**: todo lo versionado es visible en internet. Nada personal ni de expedientes; nada de historiales de chat (`.specstory/`). Aviso visible de que es material de apoyo, con la fecha de corte del BOE, no fuente oficial.
- Rutas y nombres de fichero nuevos en ASCII, sin espacios ni tildes (URLs limpias y estables; hoy las rutas llevan espacios y acentos). Enlaces directos por `#hash` a cada ley, artículo, esquema y paso de guía, para poder compartirlos.
- `.nojekyll` en la raíz: Pages deja de procesar el sitio con Jekyll (que oculta ficheros que empiezan por `_` o `.`), y se sirve exactamente lo que hay.
- Almacenamiento: solo preferencias en `localStorage` con prefijo `negociado.*` (tema, zoom, último recurso, progreso de una guía). En `file://` el origen es compartido con Agenda y Plantillas: nunca se leen ni escriben sus claves.

## 4. Situación de partida (revisión del 2026-10-28)

- 57 HTML autocontenidos (~9,5 MB) + `index.html` generado por `build_index.js` (árbol + `<iframe>`).
- **Duplicación total**: 57 hojas de estilo distintas; el motor de las guías copiado 25 veces con variantes (`goTo` en 24, `jumpTo` en 17, `syncHash` en 9; seis nombres distintos para la función de escape).
- `index.html` versionado ≠ salida de `build_index.js` (formateado con Prettier a mano: ~900 líneas de diferencia sin cambio funcional); árbol en sincronía con el disco (57/57).
- **Guías**: 25 grafos (~1.000 pasos), ningún destino roto; **9 pasos huérfanos** (solo accesibles desde el mapa): Adopción (`exclusion_extincion`, `fin_extincion`, `adopcion_internacional`, `conversion_simple`), Administración del caudal (`nombramiento`, `caucion_pend`, `caucion_problema`), Tutela (`fin_error_incompetencia`), Emancipación (`fin_denegada_sin_recurso`). Estado no persistente; descarga = copia del HTML con el estado del momento.
- **Esquemas**: tarjetas por artículo; cifras de cabecera escritas a mano («40+», «18+»); leyendas con colores repetidos.
- **Índices**: copiar al portapapeles duplica el último elemento; búsqueda sensible a tildes; al limpiar el filtro los iconos no coinciden con el estado.
- **Leyes completas (markmap)**: ver 7.1.
- **Contenido**: «Secretario judicial» 240 veces en 27 ficheros (otros dicen LAJ); solo 8 ficheros citan la LO 1/2025; cobertura LJV sin Título III (familia) ni Título VIII (mercantil); LEC solo diligencias preliminares y división judicial de patrimonios.
- **Fuente oficial disponible**: API de datos abiertos del BOE. LEC (BOE-A-2000-323) consolidada a **2026-10-07**, 1.083 bloques; LJV (BOE-A-2015-7391) consolidada a **2025-01-03** (reforma LO 1/2025), 251 bloques.
- Repositorio: `.specstory/` versionado (contiene historial de chat e ID de espacio de trabajo), sin `.gitignore`, rama local `master` obsoleta, README de una línea.

## 5. Arquitectura

Una sola aplicación (`index.html`) con un único sistema de estilos, motores comunes y **contenido como datos**.

```
index.html                    carcasa: cabecera, menú lateral, buscador global, visor
assets/
  css/tokens.css              colores, tipografía, espacios, radios (tema claro y oscuro)
  css/base.css · layout.css · components.css · print.css
  js/core/                    registro de recursos, router (#hash), escape HTML, búsqueda,
                              preferencias (negociado.*), utilidades de texto (tildes)
  js/views/ley.js             vista de ley: índice (árbol + copiar ruta) y mapa (markmap)
  js/views/esquema.js         motor de esquemas (tarjetas, filtros, búsqueda, zoom, imprimir)
  js/views/guia.js            motor de guías (grafo, recorrido, mapa, resumen, imprimir)
  js/views/referencia.js      ventana emergente con el texto literal de un artículo citado
  vendor/markmap/             d3 + markmap-view + toolbar, versión fijada, sin red
data/
  leyes/lec.js · ljv.js       texto íntegro generado desde el BOE (estructura + artículos)
  leyes/<otras>.js            CC, LOPJ, LRC… solo los artículos citados (para la ventana de referencia)
  esquemas/<id>.js            un fichero por esquema (datos, sin HTML ni CSS)
  guias/<id>.js               un fichero por guía (grafo de pasos)
  catalogo.js                 qué recursos hay, en qué orden y con qué títulos
sources/boe/                  instantáneas XML del BOE con fecha (fuente de verdad versionada)
tools/                        generadores y comprobaciones (solo desarrollo, node)
tests/                        comprobaciones en navegador headless (Chromium 144 y Edge)
docs/ROADMAP.md · docs/revision/<id>.md · CLAUDE.md
```

Puntos clave:
- **Los índices y las leyes completas salen de los mismos datos**: hoy son dos copias manuales de la misma estructura. La vista «Ley» tendrá dos modos (Índice / Mapa) sobre un único fichero por ley generado desde el BOE.
- **Referencias vivas**: cada cita «art. 140.3 LJV» en esquemas y guías se marca como referencia; al pulsarla se muestra el texto literal vigente (de `data/leyes`). Además, el comprobador valida que cada cita exista.
- **Formato de datos de guía** (se conserva el actual, que es bueno, normalizado): `{ id, ley, ambito, fases[], actores{}, inicio, pasos: { id: { fase, titulo, actor, bloques[], pregunta?, opciones?[{texto, tono, destino}], siguiente?, fin? } } }`. Bloques tipados: información, plazo, nota, advertencia, referencia, lista de comprobación, modelo de resolución.
- **Formato de datos de esquema**: `{ id, ley, ambito, categorias[], secciones[{ titulo, tarjetas[{ articulos, titulo, resumen, categoria, apartados[{ titulo, puntos[] }], referencias[] }] }] }`. Las cifras de cabecera se calculan, no se escriben.
- **Contenido compartido** (DRY de contenido): reglas comunes de la LJV (Título I: competencia, postulación, comparecencia, resolución, recursos, gastos) en un único bloque reutilizable que las guías enlazan en lugar de repetir; glosario de actores y órganos único.
- Navegación por `#hash` (enlace directo a un recurso, a un artículo o a un paso de guía); sin `<iframe>`.

## 6. Metodología de revisión de contenido (prioridad principal)

### 6.1 Fuente de verdad
- Texto consolidado del BOE vía API (`/legislacion-consolidada/id/{id}/texto`), guardado en `sources/boe/` con su fecha de actualización. Leyes: LEC, LJV y, para verificar citas, CC, LOPJ, LRC 20/2011, LO 1/1996, LO 1/2025, Ley 8/2021, Ley 4/2023, LH, LN, etc., según aparezcan.
- Fecha de corte de cada revisión anotada en el registro; actualizar después = volver a descargar y ejecutar el comparador (sección 9).

### 6.2 Comprobaciones automáticas (`tools/check-content.js`)
1. **Citas**: cada «art. N[.apdo] LEY» existe en la versión vigente; aviso si el apartado o la letra no existen.
2. **Citas literales**: todo texto presentado como literal se compara con el BOE (diferencias señaladas).
3. **Plazos**: los plazos (días, meses; hábiles/naturales) atribuidos a un artículo se contrastan con el texto del artículo.
4. **Terminología desfasada** (lista mantenida y revisable): «Secretario judicial» → Letrado de la Administración de Justicia (LO 7/2015); «Juzgado de Primera Instancia» → Tribunal de Instancia, Sección Civil, cuando se refiera a la organización vigente (LO 1/2025, a verificar con su régimen transitorio y la fecha de implantación en Las Palmas); «incapacitado / incapacitación / tutela de mayores / patria potestad prorrogada» → medidas de apoyo (Ley 8/2021); y las que aparezcan.
5. **Grafos de guías**: destinos inexistentes, pasos huérfanos, pasos sin salida y sin fin, ciclos no deseados, fases vacías.
6. **Esquemas**: todos los artículos del ámbito declarado tienen tarjeta; ninguna tarjeta cita artículos fuera de su ámbito sin marcarlos como conexos.

### 6.3 Revisión manual exhaustiva (por recurso)
Para cada esquema y cada guía, lectura completa contra el texto vigente:
- exactitud de cada afirmación (órgano competente, resolución — decreto/auto/providencia/sentencia —, recursos, plazos, intervención del Fiscal, postulación, efectos);
- actualización a las reformas posteriores a la redacción (en especial LO 1/2025, Ley 8/2021, Ley 4/2023, y las de la LEC hasta 07-10-2026);
- en guías: **pasos que faltan** (p. ej. subsanación, cómputo de plazos, notificación, firmeza, recursos, inscripción registral, archivo) y **pasos sobrantes**. Criterio para eliminar un paso (deben cumplirse todos y se anota el motivo):
  a) no corresponde a una actuación, decisión o comprobación del juzgado ni a un hito que el tramitador deba conocer;
  b) su contenido está íntegramente en otro paso o en un bloque compartido;
  c) no altera ninguna bifurcación ni ningún plazo.
  Si hay duda, el paso se conserva y se consulta al propietario.
- en esquemas: cobertura completa del ámbito, conexiones normativas correctas y vigentes, sin especulación doctrinal presentada como norma.

### 6.4 Registro de revisión
`docs/revision/<id>.md` por recurso: fecha de corte del BOE, lista de hallazgos (`error | desfasado | incompleto | estilo`), corrección aplicada, fuente exacta, y decisiones consultadas. El commit de cada recurso enlaza su registro.

## 7. Fases

### Fase 0 · Red de seguridad y base de verdad (sin cambios en la app) ✅

Hecha el 2026-10-28, en la rama `rediseno`. La app no se ha tocado.

1. ✅ Tag `baseline-2026-10-28` (estado anterior); rama `rediseno`; `CLAUDE.md`; este plan; `.gitignore`; `.specstory/` fuera de git (se conserva en disco); rama local `master` borrada (estaba contenida en `main`).
2. ✅ `tools/boe-fetch.js` → `sources/boe/`: 18 leyes con su fecha de actualización (LEC a 07-10-2026, LJV a 05-03-2026, CC a 07-09-2026, CE, LOPJ a 09-10-2026, LRC, LH, RH, LN, CP, LSC, LO 1/1996, LO 1/1982, Ley 41/2003, Ley 4/2023, Ley 30/1979, RD 1723/2012, Ley 8/2021). Lista y alias en `tools/leyes.json`. Para cada artículo, la redacción vigente y, aparte, la publicada aún no vigente (hoy no hay ninguna).
3. ✅ `tools/extract-current.js` → `sources/actual/` (57 ficheros, 3,7 MB; ids I-LEC, I-LJV, L-LEC, L-LJV, E01–E28, G01–G25 en `catalogo.json`). Esquemas leídos de la página renderizada, con control de texto no capturado (cero); guías: grafo, inicio, etiquetas de actores y demás constantes.
4. ✅ `tools/check-content.js` + `tools/lib/boe.js` → **`docs/revision/informe-inicial.md`**: 390 hallazgos (82 errores, 29 avisos, 279 para revisar). Comprobaciones: citas (artículo, apartado, letra, ordinal; derogados), alcance (contra la estructura real de la ley, deducida del BOE), rúbricas, plazos, citas literales, terminología y grafos.
5. ✅ `tools/run.js` (Edge/Chrome headless por DevTools, `file://` o `--http`) y `tools/serve.js` (servidor como GitHub Pages). Las capturas de referencia no se versionan: el tag permite regenerarlas cuando se necesiten.

Auditoría (segunda vuelta) y tests: corregidos en las propias herramientas seis fallos (unidad «meses», palabras con tilde entre número y unidad, citas sin espacio «art.140», `<pre>` tomado por párrafo, error del puente de capturas que tumbaba el proceso, comprobación de ruta del servidor) y dos de lectura del BOE (ordinales con «°» y artículos numerados en letra: «Artículo primero»). `npm test`: 18 tests, todos pasan (lector del BOE, analizador de citas y plazos, grafos, fidelidad del inventario frente a los HTML, ejecutor en `file://` y http, servidor).

#### Hallazgos de la fase 0 (para las fases 3–5)
- **22 de los 57 recursos no se pueden abrir en local** desde `file://` en este PC: su ruta supera los 260 caracteres de Windows. En Pages funcionan; los nombres cortos del rediseño lo eliminan.
- **Contenido** (detalle en el informe; lo más grave):
  - **Emancipación (E16, G13): cita los arts. 314–324 CC**, sin contenido desde la Ley 8/2021; la emancipación está hoy en los **arts. 239–248 CC** (33 + 20 errores).
  - **Subastas voluntarias (E27, G24): art. 641 LEC**, sin contenido, citado como vigente («venta por persona o entidad especializada»).
  - **Apelación: art. 457 LEC** (preparación del recurso, suprimida en 2011) citado como vigente en varios recursos; y plazos de apelación de 5 días donde el art. 458 LEC fija 20.
  - **«art. 753 bis LEC»** (no existe) en tutela/curatela (E15, G12); **arts. 66 bis y 66 ter de la Ley del Notariado** (no existen) en división de la herencia (E02).
  - Apartados inexistentes: arts. 786.3/786.4, 787.7, 791.4, 258.4, 260.7 LEC; 3.3/3.4, 17.4, 59.4 LJV.
  - 24 plazos que no aparecen en el precepto citado, a revisar uno a uno.
  - Terminología: «Secretario judicial», «Juzgado de Primera Instancia», «incapacitación»… en 90 grupos (ojo: el propio texto consolidado del BOE conserva «Secretario judicial» y «Juzgado de Primera Instancia», porque la LO 7/2015 y la LO 1/2025 cambian la denominación por remisión general; en citas literales se respeta, en el texto explicativo se actualiza).
- **Guías**: 9 pasos huérfanos (ya conocidos). Los códigos de actor significan cosas distintas según la guía (`ambos` = «LAJ + Tribunal», «LAJ / Juez», «LAJ o Juez», «Juez + LAJ»… y en una, «LAJ e interesados»).
- **Contenido duplicado entre esquemas** (DRY de contenido, fase 3): E06 (Título Preliminar) tiene tarjetas de los arts. 13–22 (Título I) y E07 de los arts. 1–8; E05 (liquidación del REM) repite tarjetas de los arts. 784–788 LEC (división de la herencia); E16 (emancipación) repite arts. de las normas comunes de la LJV.
- La LJV numera tres artículos como «42 bis a), b) y c)»: el formato de datos nuevo debe admitirlo.

### Publicación ✅ (2026-11-01: `rediseno` llevado a `main` por avance rápido, 133 commits; web publicada comprobada)
- Cada bloque terminado (p. ej. «leyes completas», «guías migradas») se propone para `main` con un resumen; al fusionarse, Pages lo publica.
- Antes de fusionar: tests en `file://` y http, enlaces internos comprobados, y la web publicada revisada tras el despliegue.
- Las URL antiguas (`/02%20-%20Esquemas.../...html`) dejarán de existir: `404.html` redirige cada una a su equivalente nuevo; las que no tengan equivalente muestran un aviso para actualizar favoritos (decisión 8).

### Fase 1 · Arquitectura común ✅
Visto bueno para empezar: 2026-10-28. Terminada el 2026-10-28, con trabajo adelantado de las fases 2 y 3 (los motores se construyeron sobre datos reales, no sobre muestras). `npm test`: 42/42.

1. ✅ Sistema de estilos y **propuesta visual** — aprobada por el propietario con dos peticiones, aplicadas: cabecera de 64 px con el buscador holgado, y sin barras de desplazamiento en ventanas o paneles pequeños (reglas en `CLAUDE.md`). `assets/css/`: `fonts.css` (Plus Jakarta Sans y Outfit incrustadas, generadas por `tools/build-fonts.js`; 117 KB; funcionan en `file://` y https, sin peticiones a terceros), `tokens.css` (cada color una vez con `light-dark()`, tema según el sistema o el interruptor), `base.css`, `layout.css`, `components.css`, `print.css`. Maqueta (retirada el 2026-11-03; queda en el historial de git): `docs/diseno/muestra.html` (#inicio · #ley · #esquema · #guia; `?tema=oscuro`). Continuidad con la app actual: fondo papel, cabecera tinta con filete dorado, los seis colores de categoría, las mismas tipografías, el logotipo de la balanza. Auditoría: tres defectos corregidos tras ver las capturas (resaltado de búsqueda que partía las líneas del índice, desbordamiento horizontal en móvil por la ventana de referencia —ahora hoja inferior—, buscador inaccesible en móvil); `tests/contrast.test.js` (contraste WCAG AA de todos los pares texto/fondo, claro y oscuro: obligó a oscurecer `--text-3` y `--ok`); sin desbordamiento horizontal a 390 y 1440 px. `npm test`: 21/21.
   - Para la migración: la paleta tiene 6 tonos de categoría (+ neutro). El esquema de conciliación usa 9 categorías y la guía 10 fases: habrá que agruparlas (las fases pueden repetir tono, como en la maqueta).
2. ✅ Carcasa (`index.html`, sustituye a la de marcos en la rama): núcleo en `assets/js/core/` — utilidades (una sola función de escape), tema sin parpadeo, preferencias `negociado.*`, cargador de datos por `<script>` (funciona en `file://` y Pages), rutas `#/…` compartibles, menú generado desde `data/catalogo.js`; vistas de inicio y de búsqueda global (sin tildes ni mayúsculas, todas las palabras; índice `data/busqueda.js` con artículos, fichas y pasos). `tools/build-index.js` genera catálogo e índice desde los propios datos. Retirado `build_index.js`.
3. ✅ Motores:
   - **Ley** (`views/ley.js`, `core/leyes.js`): índice plegable con búsqueda en número, rúbrica y texto; artículo con su texto literal vigente, redacción vigente y norma que la dio, contiguos, enlaces a esquema/guía/BOE, «Copiar» (ruta y texto); el artículo queda fijo junto al índice solo si cabe en pantalla. **Mapa** (markmap) generado de los mismos datos.
   - **Referencias vivas** (`core/referencias.js`, `core/citas.js`): toda cita es un enlace a una ventana con el apartado citado, a su altura natural; Esc o ✕ la cierran; en móvil, hoja inferior; también dentro del texto de las leyes. Un solo analizador de citas para la app y las herramientas.
   - **Esquema** (`views/esquema.js`): secciones plegables, fichas por artículo con enlace directo (`#/esquema/<id>/<art>`), notas, tablas, conexiones normativas, columnas de participantes y fases reconstruidas; filtros por categoría, búsqueda, expandir/contraer, imprimir.
   - **Guía** (`views/guia.js`): cada paso con su dirección (Atrás del navegador incluido), fases, actor, bloques, listas de comprobación recordadas, decisiones A/B…, final con el recorrido, panel «Tu recorrido», progreso guardado en el navegador, mapa de pasos por fase.
4. ✅ Tests: `tests/app.test.js` en navegador real, `file://` y http (inicio, tema, ley, mapa, referencias, esquema, guía, búsqueda, que **todos** los recursos se dibujan sin errores y que no hay desbordamiento horizontal a 390 ni a 1366 px); `tests/data.test.js` (HTML permitido en los datos, ids, catálogo, grafos de las guías, fidelidad de la migración); `tests/contrast.test.js`; `tests/tools.test.js`.

Auditorías de la fase (lo encontrado y corregido): manejador de «Copiar» que se acumulaba en cada visita; mapa sin redibujar al cambiar de tema; ley inexistente que pedía un fichero; colisión de claves «778» / «778 quáter» en el lector del BOE (afectaba también a las comprobaciones), y con ella todas las formas de numerar artículos del BOE (sufijos compuestos, «216 bis 2», «236-ñ», bloques de rango «301 a 324», tildes descompuestas, artículos del decreto aprobatorio); escapes `\uXXXX` convertidos en caracteres invisibles por la herramienta de edición (ahora `\p{M}`, vigilado por un test); etiquetas neutras que heredaban el color de la ficha; barra de herramientas demasiado alta para quedar fija; ventana de referencia que podía salir de la pantalla; resultados de búsqueda que desbordaban a 390 px.

### Fase 2 · Leyes completas (markmap) e índices ✅ (hecha dentro de la fase 1)
1. ✅ `tools/build-law.js`: BOE → `data/leyes/{LEC,LJV}.js` (LEC 867 artículos, 164 divisiones; LJV 165 artículos, 50 divisiones), con el papel de cada párrafo (apartado, subapartado, párrafo, fila de tabla) y la comprobación de que cada artículo aparece una vez en la estructura.
2. ✅ Vista «Ley» con modos Índice y Mapa: sustituye a `00 - Indices` y `01 - Legislación completa interactiva` (se retiran en la fase 3 · 2).
3. ✅ Cobertura: el articulado completo, igual al del BOE (comprobado al generar). Disposiciones y preámbulo, fuera por decisión 3.
4. ✅ (2026-10-28, a petición del propietario) **Enlaces directos al artículo en el BOE**, con la forma de los enlaces del propio BOE: `act.php?id=<norma>&p=<fecha de consolidación>&tn=1#<bloque>` (el ancla es el id del bloque del artículo, a veces en letra: `#atreintayseis`; `p` fija la versión que cita la app). Las demás normas (CC, LOPJ, LRC…) llevan solo los artículos citados en esquemas, guías y texto de LEC/LJV (`tools/build-law.js --citadas`; CC 328, LOPJ 27…), así la ventana de referencia muestra el texto y enlaza al artículo; no salen en el menú de leyes. Hallado de paso: 14 artículos de la LOPJ numerados con cardinales en letra (231, 280–291, 455) que el lector perdía; y citas a artículos inexistentes de la Ley del Notariado (2), Ley 41/2003 (8) y Ley 8/2021 (8), para la fase 4.

#### 7.1 Lo aprendido del markmap actual (preferencias a conservar)
- Jerarquía: Ley → Libro/Título → Título/Capítulo → Capítulo/Sección → **Artículo** («Artículo N. Rúbrica.») → apartados → letras y ordinales.
- **Texto literal íntegro** de cada artículo, apartado por apartado.
- Nodos estructurales en **negrita**; texto normativo sin negrita.
- Ancho máximo de nodo 300 px; al abrir, solo el primer nivel desplegado; barra de herramientas de markmap; modo oscuro automático.

Defectos del markmap anterior — todos resueltos al generar el mapa de los mismos datos que el índice:
- ✅ **Alcance**: articulado completo de ambas leyes. Disposiciones y preámbulo no se incluyen por ahora (decisión 3).
- ✅ **Desfasada**: ahora el texto vigente del BOE (LEC a 07-10-2026; LJV a 05-03-2026).
- ✅ **Incoherencias entre las dos**: un único generador, la misma jerarquía y el mismo formato para ambas.
- ✅ **Errores de conversión** (bloques de código, nodos vacíos, pestañas «Markmap»): no hay conversión desde Markdown.
- ✅ Una sola copia de d3 y markmap en `vendor/` (markmap 0.18.12, d3 7.9.0; `tools/vendor-fetch.js`), cargada solo al abrir un mapa.

### Fase 3 · Migración mecánica de esquemas y guías ✅
1. ✅ `tools/migrate.js` + `tools/migracion.json` (ids nuevos; esquema y guía del mismo ámbito comparten id): 27 esquemas y 25 guías a `data/`, **texto idéntico** (y en las guías también el grafo), comprobado al migrar y en los tests. Se dejaron fuera, por ser interfaz y no contenido: la barra de cifras escritas a mano de los esquemas («40+ conexiones»), los contadores de cada ficha, la leyenda (repite las categorías), el mensaje «sin resultados», las flechas de los diagramas y los títulos de final propios de cada guía (el motor usa unos comunes). Los textos de las guías, que eran HTML sin depurar, quedan en el subconjunto seguro de los esquemas. Las categorías de un esquema por encima de seis repiten tono.
2. ✅ (2026-10-29) Retirados los 57 HTML antiguos (quedan en el historial de git y en el tag `baseline-2026-10-28`). `404.html` (`tools/build-404.js`, autosuficiente): 56 direcciones antiguas redirigen a su sitio nuevo; la del esquema combinado I bis & ter (sin equivalente único) y cualquier otra inexistente muestran el aviso de actualizar favoritos (decisión 8). `.nojekyll` en la raíz. Los tres tests que comparaban el inventario con los HTML antiguos solo se ejecutan donde existen (el tag); `tools/extract-current.js` queda como histórico. Tests en navegador de las redirecciones, servidas como en Pages.
3. ✅ El esquema combinado «CAPÍTULO I BIS & TER» no se migra (decisión 4); en la fase 4 se comprueba si contiene algo que no esté en los separados y se traslada a ellos.

### Fase 4 · Revisión de contenido de los esquemas (28) ✅ (28/28: E11 eliminado)
Un commit por esquema, con su registro en `docs/revision/`. Orden: el de la tabla (decisión 6). Los más usados (E01–E04, E28) con atención especial.

| # | Esquema | Estado |
|---|---|---|
| E01 | LEC · Diligencias preliminares | ✅ 2026-10-29 · 53 correcciones + jurisprudencia no verificable retirada ([registro](revision/lec-diligencias-preliminares.md)) |
| E02 | LEC · División de la herencia — procedimiento | ✅ 2026-10-29 · de 26 a 16 fichas (decisión 9), 39 correcciones ([registro](revision/lec-division-herencia.md)) |
| E03 | LEC · Intervención del caudal hereditario | ✅ 2026-10-29 · las 7 fichas rehechas desde el texto vigente; 20 grupos de hallazgos ([registro](revision/lec-intervencion-caudal.md)) |
| E04 | LEC · Administración del caudal hereditario | ✅ 2026-10-29 · corregido (no rehecho): 17 hallazgos; el hallazgo sobre la impugnación de cuentas (arts. 404 y ss., 20 días) se deshizo con la decisión 17: es el art. 438, diez días, como decía el original ([registro](revision/lec-administracion-caudal.md)) |
| E05 | LEC · Liquidación del régimen económico matrimonial | ✅ 2026-10-29 · rehecho; las 5 fichas de los arts. 784–788, que los describían mal, pasan a una ficha de remisión; corregido el «plazo de prescripción de 3 años» del crédito de participación (es el aplazamiento del pago, art. 1431 CC) ([registro](revision/lec-liquidacion-rem.md)) |
| E06 | LJV · Título Preliminar — Disposiciones generales | ✅ 2026-10-29 · rehecho; corregido que la oposición «convierte en contencioso» el expediente (art. 17.3 LJV: no); apelación 20 días (no 5); Título I sustituido por remisión a E07 ([registro](revision/ljv-disposiciones-generales.md)) |
| E07 | LJV · Título I — Normas comunes de tramitación | ✅ 2026-10-29 · rehecho; fuera la ficha de contexto (numeración del Título Preliminar inventada) y las fichas de los arts. 1–8, ya en E06; juicio verbal arts. 437 y ss. (no 431–445) ([registro](revision/ljv-normas-comunes.md)) |
| E08 | LJV · T. II Cap. I — Reconocimiento de filiación no matrimonial | ✅ 2026-10-29 · corregido; los artículos del CC estaban desplazados (el reconocimiento por hermano o consanguíneo es el art. 125, no el 124) y la suspensión a petición de la madre está en el art. 124 CC, no en la LRC ([registro](revision/ljv-filiacion.md)) |
| E09 | LJV · T. II Cap. I bis — Mención registral del sexo (12–14 años) | ✅ 2026-10-29 · corregido; la reversión no es «solo una vez» (art. 47 Ley 4/2023) ([registro](revision/ljv-mencion-sexo-12-14.md)) |
| E10 | LJV · T. II Cap. I ter — Nueva modificación tras reversión | ✅ 2026-10-29 · corregido; plazos del procedimiento registral (arts. 44.8–9 Ley 4/2023) distinguidos de los del expediente judicial ([registro](revision/ljv-mencion-sexo-reversion.md)) |
| E11 | LJV · T. II Cap. I bis y ter (combinado) | ✖ eliminado (decisión 4); comprobado el 2026-10-29: nada útil sin trasladar (registro en E10) |
| E12 | LJV · T. II Cap. II — Habilitación y defensor judicial | ✅ 2026-10-29 · corregido; excusa, remoción y cuentas del defensor las decide el LAJ (art. 32 LJV), no el Juez; la inscripción del art. 30.3 remite a una letra suprimida por la Ley 8/2021 ([registro](revision/ljv-defensor-judicial.md)) |
| E13 | LJV · T. II Cap. III — Adopción | ✅ 2026-10-29 · corregido; apelación sin efectos suspensivos (había una afirmación contraria); art. 37.2 por el art. 781 LEC; competencia de la Sección de Familia, Infancia y Capacidad (art. 86.5 LOPJ), corregida también en E05–E12 ([registro](revision/ljv-adopcion.md)) |
| E14 | LJV · T. II Cap. III bis — Medidas judiciales de apoyo | ✅ 2026-10-29 · corregido; competencia de la Sección de Familia (art. 86.5 g) LOPJ); defensor judicial arts. 295–298 CC (no 299); medidas voluntarias arts. 255–262; recurso y revisión por el art. 761 LEC ([registro](revision/ljv-medidas-apoyo.md)) |
| E15 | LJV · T. II Cap. IV — Tutela, curatela y guarda de hecho | ✅ 2026-10-29 · rehecho; las referencias al CC seguían la numeración anterior a la Ley 8/2021 (tabla de correspondencias en el registro); fuera el «art. 753 bis LEC» ([registro](revision/ljv-tutela-curatela.md)) |
| E16 | LJV · T. II Cap. V — Emancipación y beneficio de mayoría de edad | ✅ 2026-10-29 · rehecho; arts. 314–324 CC → 239–248; el beneficio de la mayor edad tiene las mismas limitaciones que la emancipación; el matrimonio ya no emancipa ([registro](revision/ljv-emancipacion.md)) |
| E17 | LJV · T. II Cap. VI — Patrimonio de personas con discapacidad | ✅ 2026-10-29 · rehecho; apelación por el art. 458 LEC (no 457); régimen de la Ley 41/2003 citado artículo por artículo; fuera afirmaciones sin base ([registro](revision/ljv-patrimonio-protegido.md)) |
| E18 | LJV · T. II Cap. VII — Honor, intimidad e imagen del menor | ✅ 2026-10-29 · rehecho (16 → 6 fichas); fuera art. 315 CC, LOPJ 86 ter/98, «art. 59.4», «art. 1.4 LO 1/1982», costas inventadas y plazo de apelación de 5 días; apelación 20 días (art. 458 LEC) con efectos suspensivos; el lector del BOE ya entiende los apartados «Uno., Dos.» ([registro](revision/ljv-honor-menor.md)) |
| E19 | LJV · T. II Cap. VIII — Actos de disposición sobre bienes de menores y personas con apoyos | ✅ 2026-10-29 · corregido (texto LJV fiel); la repudiación de herencia va por los arts. 93–95 LJV y la partición sí por este capítulo; art. 5 Ley 41/2003 vigente; art. 65.2 suprimido y venta directa; apelación 20 días ([registro](revision/ljv-actos-disposicion.md)) |
| E20 | LJV · T. II Cap. IX — Ausencia y fallecimiento | ✅ 2026-10-29 · rehecho (11 fichas infladas → 6); fuera medidas, plazos y trámites inventados y normas ajenas; plazos exactos de los arts. 183, 193 y 194 CC; revisión en 5 días; Sección Civil (decisión 11) ([registro](revision/ljv-ausencia-fallecimiento.md)) |
| E21 | LJV · T. II Cap. X — Extracción de órganos de donantes vivos | ✅ 2026-10-29 · rehecho en forma compacta; 24 horas: art. 8.6 RD 1723/2012 (no la LJV); fuera «Cap. IX = filiación», rúbricas erróneas, receptor como interesado y normas ajenas; requisitos del donante con su base; Sección Civil ([registro](revision/ljv-donantes-vivos.md)) |
| E22 | LJV · T. II Cap. XI — Declaraciones sobre hechos pasados | ✅ 2026-10-29 · corregido (texto fiel); fuera la «DA 1.ª LO 1/2025», el art. 89.6 g) como alternativa y la LEC de 1881; recursos con plazos; Sección Civil (decisión 12) ([registro](revision/ljv-hechos-pasados.md)) |
| E23 | LJV · Título IV — Derecho sucesorio | ✅ 2026-10-30 · corregido (texto LJV fiel); arts. 898, 899, 903, 906 y 911 CC mal descritos; tutor: arts. 224 y 287 CC (no 271); fuera art. 749 LEC; recursos con plazos; Sección Civil ([registro](revision/ljv-sucesorio.md)) |
| E24 | LJV · Título V — Derecho de obligaciones | ✅ 2026-10-30 · corregido (texto fiel); fuera jurisprudencia sin cita y normas ajenas; legitimación del tercero por los arts. 1158 y 1178 CC; recursos añadidos; Sección Civil ([registro](revision/ljv-obligaciones.md)) |
| E25 | LJV · T. VI Cap. I — Usufructuario y créditos vencidos | ✅ 2026-10-30 · corregido (texto fiel); postulación del art. 3.2 LJV (necesaria para recurrir y desde la oposición); recursos y caducidad concretos; Sección Civil ([registro](revision/ljv-usufructuario.md)) |
| E26 | LJV · T. VI Cap. II — Deslinde de fincas no inscritas | ✅ 2026-10-30 · corregido (texto fiel); juicio verbal hasta 15.000 € (no 6.000); art. 17.3 LJV leído al revés; postulación exacta; fuera jurisprudencia sin cita; recurso de revisión; Sección Civil ([registro](revision/ljv-deslinde.md)) |
| E27 | LJV · Título VII — Subastas voluntarias | ✅ 2026-10-30 · corregido (texto fiel); el art. 641 LEC al que remite el art. 110.3 LJV está sin contenido desde el 3-4-2025 — criterio del propietario incorporado (decisión 13); artículos de la LEC de la subasta corregidos; recurso de revisión; Sección Civil ([registro](revision/ljv-subastas.md)) |
| E28 | LJV · Título IX — Conciliación | ✅ 2026-10-30 · rehecho (31 fichas → 11, una por artículo); artículos de la transacción (CC 1810–1817) y de la ejecución (LEC 518, 520, 556/557) corregidos; umbral del Juez de Paz 10.000 € (decisión 14); conciliación como requisito de procedibilidad (art. 5.1 LO 1/2025) ([registro](revision/ljv-conciliacion.md)) |

### Fase 5 · Revisión de contenido de las guías (25) ✅ (25/25)
Mismo método; además, pasos que faltan y sobran (criterio 6.3) y los 9 huérfanos (reconectar al punto correcto del flujo o eliminar, con motivo).

| # | Guía | Hallazgos previos | Estado |
|---|---|---|---|
| G01 | LEC · Diligencias preliminares | — | ✅ 2026-10-30 · 51 pasos rehechos con los arts. 256–263 LEC; apartados y plazos corregidos (apelación 20 días); medidas del art. 261 bien asignadas; grafo depurado (control duplicado, practicadas → caución → demanda) ([registro](revision/lec-diligencias-preliminares.md)) |
| G02 | LEC · División de la herencia — procedimiento | — | ✅ 2026-10-30 · 54 → 50 pasos rehechos; 786.2 y 787.5 (no 786.4 ni 787.7); fuera «787.6 = conformidad parcial», «205 LH», «LN 66 bis», Ley 36/2006, STS sin ECLI e impuestos; competencia por el art. 52.1.4.º y 58 LEC ([registro](revision/lec-division-herencia.md)) |
| G03 | LEC · Intervención del caudal hereditario | — | ✅ 2026-10-30 · fiel en lo esencial; fuera «art. 1065 CC», «fianza personal», anotaciones registrales, nulidades y cosa juzgada sin base; rama de acreedores con comprobación de pago ([registro](revision/lec-intervencion-caudal.md)) |
| G04 | LEC · Administración del caudal hereditario | 3 huérfanos | ✅ 2026-10-30 · 69 → 66 pasos; huérfanos reconectados (caución) o retirados (nombramiento); fuera la inscripción registral del «art. 797.3», «Ley 21/2007», «LJV 271», «CC 1967–1969»; subastas por LN 72 y ss. o LJV 108–111 ([registro](revision/lec-administracion-caudal.md)) |
| G05 | LEC · Liquidación del REM | — | ✅ 2026-10-31 · 55 → 51 pasos; el art. 810.4 remite a la entrega y testimonio del art. 788 (no a un decreto o auto); operaciones por el art. 787 (no 785/786) y sentencia sin cosa juzgada; vivienda preferente solo por muerte (art. 1406 CC); fuera «art. 1424: prescripción» e impuestos ([registro](revision/lec-liquidacion-rem.md)) |
| G06 | LJV · T. II Cap. I — Filiación no matrimonial | — | ✅ 2026-10-31 · correcciones puntuales (recorrido fiel); postulación art. 3.2 LJV (no 3.4); testimonio para el Registro Civil por el art. 22.2 (no «26.3»); autorización del art. 23.2 con el art. 125 CC (no 124); apelación 20 días ([registro](revision/ljv-filiacion.md)) |
| G07 | LJV · T. II Cap. I bis — Mención registral del sexo | — | ✅ 2026-10-31 · correcciones puntuales; 26 quinquies.2 (no .3); reversión por el art. 47 Ley 4/2023 (seis meses); fuera la representación del Fiscal «art. 29», OMS/Yogyakarta y «orden público» ([registro](revision/ljv-mencion-sexo-12-14.md)) |
| G08 | LJV · T. II Cap. I ter — Nueva modificación | — | ✅ 2026-10-31 · fiel; retoques: defensor judicial por el LAJ (no el Juez), recursos y art. 19.3 LJV, subsanación en cinco días, sección actual ([registro](revision/ljv-mencion-sexo-reversion.md)) |
| G09 | LJV · T. II Cap. II — Habilitación y defensor judicial | 21 × «Secretario judicial» | ✅ 2026-10-31 · excusa, remoción y cuentas las decide el LAJ (art. 32); solo revisión contra el decreto; art. 30.3 no es la imposibilidad de hecho (pregunta abierta, como E12); 16.4, 18.2 y 29 corregidos ([registro](revision/ljv-defensor-judicial.md)) |
| G10 | LJV · T. II Cap. III — Adopción | 4 huérfanos | ✅ 2026-10-31 · fiel; los 4 pasos huérfanos (arts. 40–42) se enlazan desde el inicio; salvedades del art. 177.2 CC, plazos de los arts. 179–180 CC, art. 42.2 LJV; discrepancia 15 días (art. 37.2 LJV) / hasta 20 (art. 781.1 LEC) pendiente del propietario ([registro](revision/ljv-adopcion.md)) |
| G11 | LJV · T. II Cap. III bis — Medidas de apoyo | — | ✅ 2026-10-31 · estructura fiel; numeración del art. 42 bis b) corregida (cinco apartados); subsanación en cinco días (art. 16.4); apelación contra el auto de revisión; apelación tras el RDL 6/2023; autocuratela (también en E14), arts. 250, 263, 268–270 y 295 CC; defensor judicial por el LAJ (arts. 27–32 LJV) ([registro](revision/ljv-medidas-apoyo.md)) |
| G12 | LJV · T. II Cap. IV — Tutela, curatela y guarda de hecho | 1 huérfano | ✅ 2026-10-31 · rehecha (59 pasos, mismos identificadores): sin tildes y con el CC anterior a la Ley 8/2021; huérfano conectado; «art. 753 bis LEC» fuera; cuentas aprobadas no liberan de responsabilidad; defensor en la remoción lo nombra el LAJ; excusa del art. 279 CC ([registro](revision/ljv-tutela-curatela.md)) |
| G13 | LJV · T. II Cap. V — Emancipación | 1 huérfano | ✅ 2026-10-31 · corregida: arts. 314–324 → 239–248 CC; huérfano y «final con salidas» resueltos; con oposición solo letrado (art. 53.3); defensor judicial del art. 54.1; el LAJ admite y da cuenta al Juez si no es admisible ([registro](revision/ljv-emancipacion.md)) |
| G14 | LJV · T. II Cap. VI — Patrimonio protegido | — | ✅ 2026-10-31 · recorrido fiel, bloques reescritos: art. 56 a)–d) (no «56.2-5»); apelación art. 458 LEC (no 457) con efecto suspensivo salvo nombramiento de administrador; fuera la «revisión trienal» y los criterios inventados; Registro Civil art. 76 LRC ([registro](revision/ljv-patrimonio-protegido.md)) |
| G15 | LJV · T. II Cap. VII — Honor, intimidad e imagen | dependencia de CDN; «art. 98 LOPJ», «art. 59.4», «art. 1.4 LO 1/1982» | ✅ 2026-10-31 · recorrido fiel; las tres citas corregidas (art. 86.5 j) LOPJ, art. 59.3 LJV, art. 2.3 LO 1/1982); subsanación cinco días; comparecencia en treinta; sin casación contra el auto de la Audiencia (art. 477 LEC); criterios del art. 2.2 LOPJM ([registro](revision/ljv-honor-menor.md)) |
| G16 | LJV · T. II Cap. VIII — Actos de disposición | pie «Código Civil arts.…» mal leído; «Juzgado de Primera Instancia» × 3 | ✅ 2026-10-31 · sin pública subasta por defecto desde la Ley 8/2021 (art. 65.2 suprimido; art. 287.2.º CC); recorrido de las exenciones del art. 166 CC corregido; la excepción del patrimonio protegido la concede el Juez; la partición del art. 1060 CC va por este capítulo; pie corregido ([registro](revision/ljv-actos-disposicion.md)) |
| G17 | LJV · T. II Cap. IX — Ausencia y fallecimiento | ordinales del CC como apartados («194.1», «193.2», «196.2»); «Secretario judicial» × 2 | ✅ 2026-10-31 · ordinales corregidos; riesgo inminente con los tres meses del siniestro (art. 193.3.º); división de la herencia arts. 782 y ss. LEC (no 777–782); la competencia por siniestro, solo en el fallecimiento; el cónyuge es defensor nato (art. 181 CC); mandatos extinguidos al inscribirse la ausencia ([registro](revision/ljv-ausencia-fallecimiento.md)) |
| G18 | LJV · T. II Cap. X — Órganos de donantes vivos | «Juzgado de Primera Instancia» × 1; comprobar el plazo de 24 h | ✅ 2026-10-31 · 24 h comprobado (art. 8.6 RD 1723/2012); el receptor es anónimo y no interviene; subsanación cinco días; requisitos completos (Comité de Ética, certificado de médico distinto); revocación sin indemnización ([registro](revision/ljv-donantes-vivos.md)) |
| G19 | LJV · T. II Cap. XI — Hechos pasados | «JPI» × 2, «Juzgado de Primera Instancia» × 1 | ✅ 2026-10-31 · fiel; Sección Civil (decisión 12, no 86.5 j)/89.6 g)); numeración del art. 80 quáter; inscripción por mandamiento del art. 22.2 (fuera el art. 11) ([registro](revision/ljv-hechos-pasados.md)) |
| G20 | LJV · Título IV — Derecho sucesorio | «art. 1057.2» × 5; «JPI» × 22 | ✅ 2026-10-31 · la oposición no hace contencioso el expediente (art. 17.3; archivo solo por el art. 6.2); revisión en cinco días contra los decretos del LAJ (art. 454 bis LEC); renuncia del albacea art. 899 CC; subsanación cinco días; art. 1057, párrafo segundo; Sección Civil también con llamado menor (decisión 19) ([registro](revision/ljv-sucesorio.md)) |
| G21 | LJV · Título V — Derecho de obligaciones | «arts. 1158, 1159 y 1210.2» × 3; «Secretario judicial» × 8 | ✅ 2026-10-31 · fiel; art. 1210.2.º; la consignación improcedente la inadmite el LAJ por decreto (art. 99.2); vía notarial del art. 69 LN; recursos añadidos; sin jurisprudencia no verificada ([registro](revision/ljv-obligaciones.md)) |
| G22 | LJV · T. VI Cap. I — Usufructuario | «Juzgado de Primera Instancia» × 3; «Secretario judicial» × 1 | ✅ 2026-10-31 · fiel; dispensa del art. 492 CC con su condición; subsanación cinco días y cuenta al Juez; archivo del art. 18.2.1.ª; auto en cinco días y apelación ([registro](revision/ljv-usufructuario.md)) |
| G23 | LJV · T. VI Cap. II — Deslinde | «Secretario judicial» × 11; comprobar 6.000 € = verbal y art. 17.3 | ✅ 2026-10-31 · fiel; 6.000 € solo para la postulación (verbal hasta 15.000 €, art. 250.2 LEC); archivo parcial del art. 106.2 como excepción al 17.3; párrafos del art. 106; jurisprudencia retirada; revisión del decreto ([registro](revision/ljv-deslinde.md)) |
| G24 | LJV · Título VII — Subastas voluntarias | art. 641 LEC (sin contenido) × 5; «Secretario judicial» × 14 | ✅ 2026-10-31 · decisión 13 aplicada (art. 641 sin contenido; habilitación del art. 110.3; art. 640 como referencia); pliego y LEC en el orden del art. 111.5; recursos de revisión; quitado lo inventado ([registro](revision/ljv-subastas.md)) |
| G25 | LJV · Título IX — Conciliación | «art. 140.3», «art. 3.5»; «JPI» × 3; umbral de cuantía | ✅ 2026-10-31 · decisión 14 aplicada (Juez de Paz por debajo de 10.000 €, art. 47.2 LEC); sin «cosa juzgada» del art. 1216 CC; última residencia solo si no hay domicilio en España; mandato expreso para transigir (art. 1713 CC); plazos inventados y jurisprudencia retirados ([registro](revision/ljv-conciliacion.md)) |

### Fase 6 · Interfaz: homogeneización y mejoras ✅
Se fue aplicando con los motores (fase 1) y el repaso de estilos; el 2026-11-01 se completó con las propuestas pendientes que aprobó el propietario:
1. ✅ Referencias vivas, enlace directo a cada paso y progreso de la guía guardado (fase 1).
2. ✅ **Inicio**: accesos a lo más usado (diligencias preliminares, división de la herencia, conciliación: esquema y guía) y a los seis últimos recursos visitados en este navegador (`negociado.recientes`, solo tipo e id; botón «Vaciar»).
3. ✅ **Hoja de tramitación**: imprimir una guía (botón o Ctrl+P) imprime el recorrido seguido —cada paso con fase, actor, bloques, casillas y la decisión tomada— con la fecha de impresión.
4. ✅ **Accesibilidad**: anillo de foco ≥ 3:1 en ambos temas, «Saltar al contenido», foco al título del paso tras elegir una opción y al título de la página cuando el control desaparece, aviso del nombre de la página nueva (la vista ya no es una región viva entera), estado de las fichas (`aria-expanded` en su botón), encabezados sin saltos, sin animaciones con «reducir movimiento». Lo vigila un test en navegador (`file://` y http).

### Fase 7 · Cobertura nueva (propuestas — a decidir) ☐
- LJV Título III (familia) y Título VIII (mercantil): esquema y guía — con ellos la LJV quedaría completa.
- Guía de normas comunes de la LJV (Título I) como tronco reutilizable desde todas las guías LJV.
- LEC: otros procedimientos de uso frecuente en el Negociado (el propietario indica cuáles).

## 8. Otras sugerencias (a valorar)
1. ✅ **Referencias vivas** al texto literal (sección 5) — probablemente la de mayor valor para el día a día.
2. ✅ **Buscador global** en leyes, esquemas y guías, insensible a tildes.
3. ✅ **Aviso de desactualización**: cada recurso muestra la fecha de corte del BOE con la que se revisó; el comparador (sección 9) indica qué artículos citados han cambiado después.
4. **Modelos de resolución** (diligencias, decretos) como bloque de las guías, enlazables con Plantillas — *solo si encaja con Plantillas; a hablar*.
5. ✅ Impresión cuidada de esquemas y de un recorrido de guía.
6. Enlace con Agenda: los plazos de una guía muestran «N días hábiles» con la misma regla (sin escribir nunca datos de Agenda).

## 9. Mantenimiento posterior
- ✅ `tools/boe-diff.js` (2026-11-01): descarga cada ley sin tocar `sources/boe/`, la compara bloque a bloque con su instantánea y lista las versiones nuevas, las publicadas aún no vigentes y los bloques añadidos o suprimidos, cada uno con los esquemas y guías que citan sus artículos (`--out=…md` para el informe; `--desde=carpeta` sin conexión). Después, `tools/boe-fetch.js` actualiza las instantáneas. Primera pasada (2026-11-01): ningún artículo cambiado en las 34 leyes; la LEC y la CE tienen fecha de actualización nueva en el BOE (29-10-2026) sin cambios en su articulado.
- `tools/check-content.js` y los tests en navegador antes de cada commit.

## 10. Decisiones del propietario
1. ✅ Visto bueno general al plan y a la arquitectura (2026-10-28).
2. ✅ Entorno: GitHub Pages es el destino; no hay copia en la memoria USB (2026-10-28). Se conserva el funcionamiento desde `file://` en el PC.
3. ✅ Markmap: **sin** disposiciones ni preámbulo por ahora (como el actual); el generador se prepara para poder añadirlos en el futuro con una opción.
4. ✅ Esquema combinado I bis & ter: **se elimina**; se mantienen los dos separados.
5. ✅ A criterio técnico: `.specstory/` sale de git (se conserva en disco, ignorado) y se borra la rama local `master` (está contenida en `main`; nada se pierde).
6. ✅ Orden: primero los esquemas y después las guías, en el orden actual. Los más usados —diligencias preliminares, división judicial de la herencia y conciliación— con atención especial.
7. ⏸ Cobertura nueva (fase 7): no es prioritaria ahora.
8. ✅ URL antiguas: redirección cuando sea posible; si no, aviso para actualizar favoritos («if → else»). Implementación: `404.html` de GitHub Pages con la tabla de correspondencias antigua → nueva; si la dirección está en la tabla, redirige; si no, muestra el aviso con enlace a la portada.
9. ✅ (2026-10-29) **Alcance de los esquemas**: se ciñen a lo que usa el juzgado: sus artículos y las normas del CC, LJV, LN, LH… que se aplican en la tramitación, todo comprobado. Fiscalidad, derechos forales y detalle internacional fuera (como mucho, una mención donde afecten a la tramitación). Lo duplicado en otro esquema se sustituye por una remisión. Todo lo retirado se anota en el registro de revisión.
10. ✅ (2026-10-29) **Jurisprudencia**: se retira la que no se puede verificar y queda anotada en el registro, para reincorporarla con su ECLI si el propietario la aporta. Sin búsquedas en la web.
11. ✅ (2026-10-29) **Art. 86.5 j) LOPJ**: la excepción «capítulos IX y X del título I» se lee como **Título II** de la LJV (errata de la ley). Ausencia y fallecimiento (cap. IX) y extracción de órganos de donantes vivos (cap. X) no son de la Sección de Familia, Infancia y Capacidad: van a la Sección Civil del Tribunal de Instancia. Lo confirma el art. 89.6 g) LOPJ, que en la misma excepción dice «título II».
12. ✅ (2026-10-30) **Hechos pasados (arts. 80 bis–80 quinquies LJV)**: Juzgado de Primera Instancia, hoy la Sección Civil del Tribunal de Instancia; no se trata como materia de personas y familia del art. 86.5 j) LOPJ.
13. ✅ (2026-10-30) **Venta por persona o entidad especializada en subasta voluntaria (art. 110.3 LJV)**: sigue habilitada pese al vaciado de los arts. 641 y 642 LEC; el LAJ decide; integración por el art. 8 LJV, con el art. 640 LEC como referencia; la resolución fija condiciones y la aprobación posterior de la transmisión.
14. ✅ (2026-10-30) **Conciliación ante el Juez de Paz**: umbral de 10.000 € (art. 47.2 LEC y art. 14.6 LO 1/2025); el de 6.000 € del art. 140.1 LJV queda desplazado. Cautela: posible concurrencia con el LAJ entre 6.000 y 10.000 €, sin resolver expresamente.
15. ✅ (2026-10-31) **Defensor judicial y Registro Civil**: el art. 30.3 LJV (remite a la letra c) del art. 27.1, suprimida) y el art. 74.1 LRC (remite al art. 299 bis CC, derogado) se leen referidos al art. 295.4.º CC. Se remite testimonio (art. 22.2 LJV) del nombramiento del art. 295.4.º CC; del de cualquier defensor judicial de una persona con discapacidad, que es medida de apoyo (art. 250 CC; art. 72.1 LRC; art. 300 CC); y del defensor del menor emancipado (art. 4.13.º LRC). No, por defecto, del defensor del menor no emancipado para un litigio o expediente concreto.
16. ✅ (2026-10-31) **Art. 781 LEC (asentimiento en la adopción)**: quince días, como el art. 37.2 LJV, en la redacción de la Ley 26/2015. La versión consolidada del BOE fechada el 1-10-2015 (LO 7/2015) reproduce por error la redacción anterior («no superior a veinte días»); no se aplica.
17. ✅ (2026-10-31) **Errores de consolidación del BOE**: cuando la última versión que lista el BOE no es la publicada en último lugar, la instantánea se corrige con la versión vigente publicada en último lugar (`sources/boe/correcciones.json`, con motivo y decisión; el visor la marca como «Versión corregida»). Aplicado a 16 artículos de la LEC (Ley 42/2015 y, en el art. 781, Ley 26/2015). Registro: `revision/boe-correcciones.md`.
18. ✅ (2026-10-31) **Misma corrección en LOPJ y CP**: arts. 231, 455 y 564 LOPJ y epígrafe de la sección 2.ª del cap. III del título XII CP. En los arts. 231 y 455, la última versión listada es una nota de la STC 105/2000 sin fecha de vigencia que reproduce el texto antiguo. Sin efecto en el contenido.
19. ✅ (2026-10-31) **Aceptación y repudiación de la herencia con llamado menor o con medidas de apoyo (arts. 93–95 LJV)**: Sección Civil del Tribunal de Instancia (art. 85, ordinal 2.º, LOPJ). El art. 94.1, párrafo segundo, solo cambia el fuero territorial; es expediente sucesorio, no de personas y familia del art. 86.5 j). Una cuestión autónoma de Familia (p. ej., patria potestad) se examina aparte.
20. ✅ (2026-11-01) **Competencia: la LEC antes que el CC**: salvo indicación en contrario, en materia de competencia la LEC se cita y se muestra antes que el CC. El domicilio se fundamenta en los arts. 50 y 51 LEC, y los arts. 40 y 41 CC solo lo definen. Aplicado a E01, G01 y G25. En las diligencias preliminares no se incorporan los fueros adicionales de los arts. 50.3, 51.1, segundo inciso, y 51.2 LEC (el art. 257.1 se refiere solo al domicilio de quien ha de intervenir), y del art. 50.2 LEC se mantiene «domicilio del actor».
21. ✅ (2026-11-01) **Conciliación como requisito de procedibilidad**: G25 se alinea con E28: fuera «voluntario» y nota con el art. 5.1 y 5.2 LO 1/2025.
22. ✅ (2026-11-01) **Requisito de procedibilidad en la división de la herencia y la liquidación del REM**: añadido a E02, E05 y G05. En la liquidación se acredita con la solicitud de inventario (art. 808 LEC) y con la de liquidación (art. 810 LEC), según los acuerdos de la Junta Sectorial de Familia de la AP de Madrid de 6-11-2025, II.4 (no vinculantes, y la app lo dice); en el régimen de participación, con su única solicitud (art. 811 LEC). Una negociación anterior vale solo si comprendía ese objeto (art. 5.1 LO 1/2025). No se añade a la intervención y la administración del caudal (E03, E04, G03, G04). *Modificada por la decisión 24 en cuanto a la solicitud en que se acredita.*
23. ✅ (2026-11-01) **Subsanación de la justificación**: en G02 y G05, un defecto formal en la justificación del intento se subsana antes de inadmitir (art. 231 LEC; acuerdos de la Junta Sectorial de Familia de la AP de Madrid de 6-11-2025, III.6, no vinculantes, y la app lo dice); sin justificación alguna, inadmisión directa. *Precisada por la decisión 24.*
24. ✅ (2026-11-01) **Disposiciones generales de las leyes vigentes**: en Las Palmas no hay criterio particular; se atiende a las disposiciones generales de las leyes vigentes y relacionadas. Por tanto: (a) la subsanación se apoya en el art. 231 LEC, sin documento no se admite (art. 403.2 LEC) y los acuerdos de la AP de Madrid (III.6) quedan como orientación no vinculante, en una frase; (b) en la liquidación del REM, la app avisa de que la ley no precisa en qué solicitud se acredita el requisito, sin citar los acuerdos II.4, y G05 solo pregunta en la solicitud única del art. 811 LEC; (c) en G02 y G05, si no se subsana, el LAJ da cuenta al Tribunal, que resuelve sobre la admisión (art. 404.2 LEC); (d) se retira «presentar de nuevo la solicitud (art. 10 LO 1/2025)», que el art. 10 no respalda.

## 11. Registro de cambios del plan
- 2026-10-28 · Primera versión, tras la revisión técnica completa.
- 2026-10-28 · El propietario indica que la app debe seguir accesible en GitHub Pages: restricciones (sección 3) para que funcione en https y en `file://`, rama de trabajo, `.nojekyll`, contenido público, sección «Publicación».
- 2026-10-28 · Plan aprobado; decisiones 3–8 tomadas (sección 10).
- 2026-11-03 · Tanda 7 publicada. Relectura, octava tanda (honor del menor, patrimonio protegido, donantes vivos; `revision/relectura-2026-11-03-tanda8.md`): 14 hallazgos, 3 de ellos errores. Aplicados.
- 2026-11-03 · Tanda 6 publicada. Relectura, séptima tanda (Derecho sucesorio; emancipación; `revision/relectura-2026-11-03-tanda7.md`): 18 hallazgos, 4 de ellos errores. Aplicados.
- 2026-11-03 · Tanda 5 publicada. Relectura, sexta tanda (defensor judicial; tutela, curatela y guarda de hecho; `revision/relectura-2026-11-03-tanda6.md`): 13 hallazgos, 2 de ellos errores. Aplicados.
- 2026-11-03 · Tandas 3 y 4 publicadas. Relectura, quinta tanda (disposiciones generales, normas comunes, actos de disposición, medidas de apoyo; `revision/relectura-2026-11-03-tanda5.md`): 19 hallazgos, 3 de ellos errores (2 seguros y 1 probable). Aplicados.
- 2026-11-03 · Relectura, cuarta tanda (adopción, ausencia y fallecimiento, hechos pasados; `revision/relectura-2026-11-03-tanda4.md`): 27 hallazgos, 6 de ellos errores. Aplicados.
- 2026-11-03 · Tandas 1 y 2 publicadas. Relectura, tercera tanda (filiación y subastas, más búsqueda en las demás guías de la LJV; `revision/relectura-2026-11-03-tanda3.md`): 25 hallazgos, 3 de ellos errores (2 seguros y 1 probable) y 2 preguntas al propietario, ya decididas. Aplicados.
- 2026-11-03 · Relectura, segunda tanda (mención del sexo, 12-14 y reversión; `revision/relectura-2026-11-03-tanda2.md`): 21 hallazgos, 6 de ellos errores (quién examina la solicitud, incompetencia, un plazo y dos citas). Aplicados, con la salida que faltaba en G03.
- 2026-11-03 · Relectura, primera tanda (E03/G03, E04/G04, E05/G05; `revision/relectura-2026-11-03-tanda1.md`): 12 hallazgos, casi todos menores; ninguno en plazos y una cita que se queda corta. Aplicados.
- 2026-11-03 · Aplicados y publicados los hallazgos de la relectura de E01/G01, E02/G02 y E28/G25 (y G25: ejecución y nulidad a cargo del tribunal, no del Juez de Paz). Siguiente, por tandas y a propuesta aprobada: G03, G04 y G05 con sus esquemas; las guías de la LJV; el resto de esquemas.
- 2026-11-03 · G16: «autoridad judicial competente» (art. 5.3 Ley 41/2003). Relectura de E01/G01, E02/G02 y E28/G25 contra el texto vigente (`revision/relectura-2026-11-03.md`): 17 hallazgos, ninguno por la «Redacción anterior» ni en plazos o citas de artículos; pendientes de visto bueno.
- 2026-11-03 · Últimos restos: las citas de la Ley 1/2019 (E01) y del art. 74 LRC (E12) enlazan; el estado de la ficha pasa de `aria-expanded` en el `article` a `data-open` (el botón conserva `aria-expanded`). Publicado. Abierto: vigilar el RDL 29/2026 (arts. 22 y 685 LEC); plazos en días hábiles y modelos de resolución, solo si el propietario lo pide (tocan Agenda y Plantillas).
- 2026-11-03 · Notas del BOE fuera del texto de los artículos: 226 artículos corregidos (solo supresión; los 206 de la LEC y la LJV coinciden con el BOE). Nota aparte en el art. 2 LOPDH. Instantáneas descargadas de nuevo (LEC y CE a 29-10-2026).
- 2026-11-03 · Revisadas las 66 filas «LO 7/2015 con cambios de fondo» (`revision/boe-correcciones.md`): ninguna es error de consolidación. **Hallazgo, pendiente de visto bueno**: 225 artículos de la app llevan en su texto notas del BOE (189 con la «Redacción anterior»), porque el lector no reconoce los `blockquote` con atributos.
- 2026-11-03 · Resuelto lo pendiente: buscador (la dirección se separa antes de descodificarse: se conserva lo que va tras «?», «&» o «+», y un «%» suelto no da error; los signos alrededor de una palabra no cuentan), nota del art. 5.3 LO 1/2025 en E01 y G01, registro de G06 (36 pasos) y limpieza: fuera `.cards`, `.tag-on-ink`, `.no-print`, la regla duplicada de movimiento reducido, una comprobación inútil en `guia.js` y la maqueta `docs/diseno/muestra.html`; decisiones en orden y títulos de §3 y §5 al día. Queda `aria-expanded` en el `article` de la ficha, en el que se apoya el CSS: el botón ya lo lleva bien. A vigilar: RDL 29/2026. Abierto solo si el propietario lo pide: plazos en días hábiles (Agenda) y modelos de resolución (Plantillas).
- 2026-11-01 · Publicadas la decisión 24 y los dos finales de inadmisión (`702defa`, comprobado en la web). Citas de los bloques de normas: una cita sin ley es de la ley que nombra el bloque y, si la app no la tiene, no se enlaza (`normaLaw` y `textos` en `citas.js`, que usan la app, el comprobador y los índices). De 160 citas sueltas en esos bloques, 26 eran de otra ley y ahora la nombran. El comprobador, que antes no las veía, encontró «Artículo 4.4» LRC (es el 4.4.º), corregido. Leído también «art. 194.2.º y 3.º CC» (G17). Sin enlace, porque el texto nombra otra norma en la misma frase: las citas de los bloques de secretos empresariales (Ley 1/2019 y Directiva) y dos del bloque «Otras leyes» de E12. **Sigue pendiente**: buscador, nota del art. 5.3 LO 1/2025 en E01 y G01, registro de G06, limpiezas de CSS y de este documento.
- 2026-11-01 · Decisión 24, a petición del propietario: dos finales de inadmisión en G02 y G05. Defecto no subsanado → `fin_masc_no_subsanado` (art. 404.2 LEC); no se aporta nada → `fin_sin_masc` (art. 403.2 LEC, con nota de que el art. 404 no menciona expresamente este caso). G02 pasa de 51 a 52 pasos y G05 de 53 a 54.
- 2026-11-01 · Decisión 24 aplicada a G02, G05, E02 y E05 (G05 pasa de 55 a 53 pasos: se retiran dos de subsanación). Sin publicar. **Pendiente**: enlaces de los bloques de normas a la ley equivocada (57 bloques y 149 enlaces, 91 a un artículo que existe; no todos son erróneos, y alimentan «Lo citan»); `art. 194.2.º y 3.º CC` en G17, que abre el art. 194 LJV; buscador (se pierde lo que va tras «?» o «&», el «+» se lee como espacio y un «%» suelto da un error sin capturar); nota del art. 5.3 LO 1/2025 en E01 y G01; registro de G06 (dice 43 pasos; son 36); limpiezas de CSS y de este documento. A vigilar: RDL 29/2026.
- 2026-11-01 · Reversiones del BOE revisadas (`revision/boe-correcciones.md`): ninguna es error de consolidación; sin cambios en la app. A vigilar: el RDL 29/2026 (arts. 22 y 685 LEC), pendiente de convalidación. Sin revisar: las 66 filas vigentes de «LO 7/2015 con cambios de fondo» (LOPJ 56, LEC 10).
- 2026-11-01 · Publicación: `rediseno` llevado a `main` por avance rápido, con las decisiones 20–23, la instantánea de la LO 1/2025 y el arreglo de las distancias.
- 2026-11-01 · Decisión 23 aplicada a G02 y G05 (cuatro pasos nuevos de subsanación) y, con una línea, a E02 y E05.
- 2026-11-01 · Instantánea de la LO 1/2025 (`sources/boe/LO1-2025.json`, consolidada a 09-07-2026): sus citas se comprueban y son enlaces, y todas coinciden con el texto. El lector entiende los apartados en letra compuestos («Cincuenta y cuatro.») y, en esos artículos, no toma por apartado el texto citado («8. …»); la ventana de la cita muestra solo el apartado citado y la norma con su nombre (`sigla` en `tools/leyes.json`; de momento, solo esta ley). 35 leyes. Después, decisión 22: requisito de procedibilidad en E02, E05 y G05, con comprobación en G05 (paso nuevo `fin_sin_masc`). Pendiente de hablar: el art. 5.3 LO 1/2025 en las diligencias preliminares.
- 2026-11-01 · Decisión 21 aplicada a G25.
- 2026-11-01 · Estilos: las notas de ancho completo de una ficha abierta quedaban pegadas a lo anterior (0 px en 22 notas: el margen se pierde al acabar la columna); ahora 20 px. Dentro de un grupo de puntos, de 8 a 12 px (29 casos). Test que lo vigila, en todas las fichas y a dos anchos.
- 2026-11-01 · Decisión 20 aplicada: arts. 50 y 51 LEC antes de los arts. 40 y 41 CC en E01, G01 y G25; corregido de paso lo que E01 atribuía al art. 40 CC.
- 2026-11-01 · `CLAUDE.md` puesto al día: arquitectura actual en lugar de la objetivo; fuera los 57 HTML y `build_index.js`, ya retirados; añadidos lo generado y cómo regenerarlo, la regla de la decisión 17, `tools/boe-diff.js` y «lo interno no llega a la app».
- 2026-11-01 · Leyes: acciones del artículo en una fila y «Actualizar contenido» (texto vigente del BOE en este navegador, reversible). Auditoría: las leyes citadas (CC, CE, CP, LOPJ, LOPJM, LPPD, LRC, LTO, RDTO) estaban sin regenerar desde antes de revisar G11–G25: 17 artículos citados sin texto en la ventana de la cita (p. ej. arts. 290, 1257 y 1713 CC) y 32 que ya nadie cita (el mensaje del commit dice 34 por error). Regeneradas, con un test que lo vigila.
- 2026-11-01 · Leyes, a propuesta del propietario: **«Lo citan»** en cada artículo (esquemas y guías que lo citan, enlazados a la ficha o al paso; índice `data/citados.js`) y **«Comprobar vigencia»** (consulta del artículo a la API del BOE al pulsar; misma regla que la decisión 17; probada contra el BOE en 258 artículos). Criterio del propietario sobre recursos externos: se admiten los imprescindibles para una característica, sin abusar (`CLAUDE.md`, sección 3).
- 2026-11-01 · Propuestas pendientes aprobadas y hechas: accesos de inicio (propuesta 7), hoja de tramitación impresa, accesibilidad y comparador del BOE (`tools/boe-diff.js`). **Fase 6 completa.** Pendientes de hablar: plazos en días hábiles (Agenda) y modelos de resolución (Plantillas).
- 2026-11-01 · Ventana de la cita: nunca más alta que la pantalla; si el artículo no cabe, desplaza su texto con la cabecera y el pie fijos (antes un artículo largo, como el 158 CC, quedaba cortado). Regla de diseño precisada en `CLAUDE.md`.
- 2026-11-01 · Fuera de la app toda referencia al trabajo interno (petición del propietario): 24 textos en 13 ficheros (6 esquemas, 7 guías) que citaban «decisión N» o «criterio del juzgado»; mismo contenido jurídico, redactado sin etiquetas. Nuevo test en `tests/data.test.js` que lo impide en adelante.
- 2026-11-01 · Estilos: rejillas con `auto-fit` en vez de `auto-fill` (tarjetas, grupos, mapa, accesos): ocupan todo el ancho sin columnas vacías a la derecha.
- 2026-11-01 · Cabecera: recuperados el zoom del contenido (50–200 %, teclado, recordado), «Nueva pestaña» y «Pantalla completa» de la versión anterior; ocultos en tabletas y móviles.
- 2026-11-01 · Menú lateral rehecho según el índice de cada ley (ruta de cada recurso en el catálogo; orden y jerarquía de Libro/Título/Capítulo/Sección; sin carpetas de un elemento; entradas alineadas).
- 2026-11-01 · Estilos: texto de los artículos justificado (visor de la ley y ventana de la cita), a petición del propietario.
- 2026-11-01 · Estilos: repaso aprobado (propuestas 1–6): fichas abiertas en columnas sin huecos, menú lateral solo con el camino a la página actual, filtros y acciones compactos en móvil, citas sin mayúsculas heredadas, índice de ley más ligero. Pendiente: propuesta 7 (accesos directos en el inicio). Errata de G25 corregida.
- 2026-11-01 · Estilos: la cita que es exactamente un paréntesis lleva los paréntesis dentro del recuadro («(art. 201 CC)»). Repaso de estilos con capturas: propuesta pendiente de aprobación.
- 2026-10-31 · Estilos: separación vertical entre tarjetas de esquema y entre piezas de los pasos de guía (ritmo en el contenedor; 0 cajas pegadas en las 54 vistas). Guías: 10 asteriscos literales de la fase 5 pasan a <strong>.
- 2026-10-31 · Decisión 19: Sección Civil para la aceptación y repudiación de la herencia aunque el llamado sea menor o tenga medidas de apoyo; nota de G20 actualizada.
- 2026-10-31 · Fase 5 · G25 (conciliación) revisada: **fase 5 completa (25/25)**.
- 2026-10-31 · Fase 5 · G24 (subastas voluntarias) revisada. Siguiente: G25.
- 2026-10-31 · Fase 5 · G23 (deslinde) revisada. Siguiente: G24.
- 2026-10-31 · Fase 5 · G22 (usufructuario) revisada. Siguiente: G23.
- 2026-10-31 · Fase 5 · G21 (Derecho de obligaciones) revisada. Siguiente: G22.
- 2026-10-31 · Fase 5 · G20 (Derecho sucesorio) revisada; pregunta al propietario sobre la sección en el Cap. III con menores. Siguiente: G21.
- 2026-10-31 · Fase 5 · G19 (hechos pasados) revisada. Siguiente: G20.
- 2026-10-31 · Fase 5 · G18 (donantes vivos) revisada. Siguiente: G19.
- 2026-10-31 · Fase 5 · G17 (ausencia y fallecimiento) revisada. Siguiente: G18.
- 2026-10-31 · Fase 5 · G16 (actos de disposición) revisada. Siguiente: G17.
- 2026-10-31 · Fase 5 · G15 (honor, intimidad e imagen) revisada. Siguiente: G16.
- 2026-10-31 · Fase 5 · G14 (patrimonio protegido) revisada. Siguiente: G15.
- 2026-10-31 · Fase 5 · G13 (emancipación) revisada. Siguiente: G14.
- 2026-10-31 · Fase 5 · G12 (tutela, curatela y guarda de hecho) rehecha. Siguiente: G13.
- 2026-10-31 · Fase 5 · G11 (medidas de apoyo) revisada; arrastre a E14 (autocuratela). Siguiente: G12.
- 2026-10-31 · Decisión 18: LOPJ 231, 455 y 564 y epígrafe del CP corregidos en las instantáneas; sin efecto en el contenido. `tools/run.js`: espera a que el navegador termine de escribir el puerto de depuración (fallo intermitente «bad port»). Siguiente: G11.
- 2026-10-31 · Decisión 17: detección de errores de consolidación del BOE (`tools/boe-revisiones.js`) y corrección de instantáneas (`sources/boe/correcciones.json`); 16 artículos de la LEC corregidos; arrastre en E04/G04 (art. 800.4: art. 438, diez días; se deshace un cambio de las revisiones), E03/G03/G02 (art. 794.4) y E05/G05 (art. 809.2). Pendientes: LOPJ 231, 455 y 564, epígrafe del CP y las reversiones de otro tipo.
- 2026-10-31 · Decisión 16 (art. 781 LEC: quince días; versión del BOE de 1-10-2015 errónea) aplicada a G10 y E13. Pendiente: el visor de la LEC muestra esa versión errónea; propuesta de mecanismo de corrección de instantáneas.
- 2026-10-31 · Fase 5 · G10 (adopción) revisada. Siguiente: G11.
- 2026-10-31 · Decisión 15 (defensor judicial y Registro Civil) aplicada a G09 y E12.
- 2026-10-31 · Fase 5 · G09 (defensor judicial) revisada. Siguiente: G10.
- 2026-10-31 · Fase 5 · G08 (nueva modificación tras reversión) revisada. Siguiente: G09.
- 2026-10-31 · Fase 5 · G07 (mención del sexo, 12–14 años) revisada. Siguiente: G08.
- 2026-10-31 · Fase 5 · G06 (filiación no matrimonial) revisada. Siguiente: G07.
- 2026-10-31 · Títulos de 15 guías LJV limpiados (llevaban texto de la barra de las páginas antiguas: «− 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar»); se toma el título del esquema homónimo. Nueva prueba que lo impide.
- 2026-10-31 · Fase 5 · G05 (liquidación del régimen económico matrimonial) revisada. Hallazgo: 15 guías LJV tienen texto de la interfaz antigua en el título (se limpia aparte). Siguiente: G06.
- 2026-10-30 · Fase 5 · G04 (administración del caudal) revisada. Siguiente: G05.
- 2026-10-30 · Fase 5 · G03 (intervención del caudal) revisada. Siguiente: G04.
- 2026-10-30 · Fase 5 · G02 (división de la herencia) revisada. Siguiente: G03.
- 2026-10-30 · Fase 5 · G01 (diligencias preliminares) revisada. Siguiente: G02.
- 2026-10-30 · Decisión 14 (Juez de Paz: 10.000 €) y LO 1/2025 (arts. 5 y 14, comprobados en la web del BOE: la API daba error 500) incorporados a E28. Pendiente: instantánea de la LO 1/2025 cuando la API responda.
- 2026-10-30 · E28 (conciliación) revisado: fase 4 terminada. Preguntas: umbral del Juez de Paz (6.000 / 10.000 €) y relación con los MASC (LO 1/2025, sin instantánea; API del BOE con error 500). Siguiente: fase 5 (guías).
- 2026-10-30 · `npm test` registra cada ejecución y los fallos con su nombre (`tools/run-tests.js`), para identificar el fallo intermitente. Siguiente: E28.
- 2026-10-30 · Decisión 13 (art. 110.3 LJV) incorporada a E27.
- 2026-10-30 · E27 (subastas) revisado; pregunta al propietario sobre el art. 110.3 LJV (remite al art. 641 LEC, vacío). Siguiente: E28 (conciliación).
- 2026-10-30 · Decisión 12: hechos pasados → Sección Civil; E22 actualizado.
- 2026-10-30 · E26 (deslinde) revisado. Siguiente: E27. Nota: una ejecución de la batería dio 1 fallo que no se reprodujo en tres ejecuciones seguidas; probablemente una prueba de navegador de tests/app.test.js con esperas fijas, sensible a la carga. Pendiente: identificarla y hacerla robusta. Segunda vez el 2026-10-30 (tras el ajuste de E27): 1 fallo; después, cuatro ejecuciones limpias, también con el comprobador corriendo a la vez. La salida no conservaba el nombre de la prueba: desde el 2026-10-30, `npm test` pasa por `tools/run-tests.js`, que guarda cada ejecución en `tests/results/pruebas/` (no se publica) y anota en `fallos.txt` el nombre de cada prueba que falle. **Identificado y corregido (2026-10-30)**: «old addresses… redirect» falló con EPERM al borrar el perfil temporal del navegador (Windows lo mantiene bloqueado unos instantes); `tools/run.js` espera a que el navegador termine, reintenta durante unos segundos, avisa en vez de fallar y barre los perfiles antiguos.
- 2026-10-30 · E25 (usufructuario) revisado. Siguiente: E26.
- 2026-10-30 · E24 (obligaciones) revisado. Siguiente: E25.
- 2026-10-30 · E23 (sucesiones) revisado. Siguiente: E24.
- 2026-10-29 · E22 (hechos pasados) revisado; pregunta al propietario: ¿Sección de Familia o Civil? Siguiente: E23.
- 2026-10-29 · E21 (donantes vivos) revisado. Siguiente: E22.
- 2026-10-29 · E20 (ausencia y fallecimiento) revisado. Pendiente en el analizador: «art. 194.2.º y 3.º CC» se lee como LJV. Siguiente: E21.
- 2026-10-29 · Decisión 11 (art. 86.5 j) LOPJ → Título II LJV, caps. IX y X a la Sección Civil).
- 2026-10-29 · E19 (actos de disposición) revisado. Siguiente: E20.
- 2026-10-29 · E18 (honor e imagen del menor) revisado; lector del BOE: apartados en letra. Siguiente: E19.
- 2026-10-29 · E17 (patrimonio protegido) revisado. Siguiente: E18.
- 2026-10-29 · E16 (emancipación) revisado: de 83 errores a 0. Siguiente: E17.
- 2026-10-29 · E15 (tutela, curatela y guarda de hecho) revisado: numeración del CC actualizada a la Ley 8/2021. Siguiente: E16.
- 2026-10-29 · E14 (medidas judiciales de apoyo) revisado. Siguiente: E15.
- 2026-10-29 · E13 (adopción) revisado. Hallazgo transversal: art. 86.5 LOPJ (Secciones de Familia, Infancia y Capacidad), corregido en E05, E06, E08, E09, E10 y E12. Siguiente: E14.
- 2026-10-29 · E12 (defensor judicial) revisado; el analizador lee «42 bis a)» LJV como artículo. Siguiente: E13.
- 2026-10-29 · E09 y E10 (mención registral del sexo) revisados; E11 comprobado y cerrado. Siguiente: E12.
- 2026-10-29 · E08 (filiación no matrimonial) revisado. Siguiente: E09.
- 2026-10-29 · E07 (normas comunes LJV) revisado. Cada artículo de la LJV queda en un solo esquema. Siguiente: E08.
- 2026-10-29 · E06 (Título Preliminar LJV) revisado; el analizador de citas no enlaza convenciones internacionales y reconoce «y ss.». Siguiente: E07.
- 2026-10-29 · E05 (liquidación del REM) revisado. Siguiente: E06.
- 2026-10-29 · E04 (administración del caudal) revisado. Siguiente: E05.
- 2026-10-29 · E03 (intervención del caudal) revisado: contenido rehecho desde los arts. 790–796 (cifras y plazos inventados, citas erróneas, 12 resoluciones no verificables). Siguiente: E04.
- 2026-10-29 · E02 (división de la herencia) revisado. Decisiones 9 (alcance de los esquemas) y 10 (jurisprudencia no verificable). Siguiente: E03.
- 2026-10-29 · Fase 4 · E01 (diligencias preliminares) revisado: 53 correcciones contra el BOE y retirada de toda la jurisprudencia no verificable (método aplicable al resto: `tools/dump.js citas` contrasta cada cita con el artículo citado). El analizador de citas reconoce ya las normas de la UE (antes «Dir. 2004/48/CE art. 6» se enlazaba al art. 6 CE). 16 leyes más descargadas para comprobar citas (Patentes, Marcas, Competencia Desleal, Secretos Empresariales, LPI, LCS, CCom…). Siguiente: E02.
- 2026-10-29 · Fase 3 completada: HTML antiguos retirados y direcciones antiguas redirigidas. Siguiente: fase 4.
- 2026-10-28 · Enlaces directos al artículo en el BOE y texto de los artículos citados de las demás normas (petición del propietario).
- 2026-10-28 · Fase 1 completada, con las fases 2 y 3 · 1 adelantadas (los motores necesitaban datos reales). Siguiente: fase 3 · 2 (retirar los HTML antiguos y redirigir sus direcciones) y fase 4 (revisión de contenido de los esquemas).
- 2026-10-28 · Fase 0 completada. El ejecutor (0.5) se adelantó al inventario (0.3) porque el inventario de los esquemas se lee de la página renderizada. Además de LEC y LJV se descargaron las 16 leyes más citadas.
- 2026-10-28 · Forma de trabajar fijada por el propietario: idioma de respuesta según el suyo; auditoría completa + batería de tests tras cada implementación; Agenda y Plantillas intocables; memoria USB fuera del alcance.
