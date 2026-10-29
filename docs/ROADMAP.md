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
- **Cada implementación (uno o varios pasos) va seguida de una auditoría completa** —segunda vuelta en busca de fallos existentes o introducidos y de despistes— **y de una batería de tests**; el informe de cada paso recoge ambas.
- Agenda y Plantillas no se modifican nunca (solo se leen como referencia).
- Push a GitHub solo cuando el propietario lo pida. **`main` es la web publicada** (GitHub Pages, https://cpardilla.github.io/negociado/): el rediseño se hace en una rama propia (`rediseno`) y solo se lleva a `main` con visto bueno, por bloques completos que funcionen. Así la web nunca queda a medias.

## 3. Restricciones técnicas (propuestas — confirmar)

- **Destino: la web pública en GitHub Pages** (https). Negociado no está en la memoria USB (confirmado, 2026-10-28). Se mantiene además que funcione abierta desde `file://` (la copia de trabajo en el PC), porque no cuesta nada con el diseño elegido y permite usarla sin red; los tests se ejecutan en ambos modos. Navegadores de referencia: Edge y Chrome actuales.
- **Sin paso de compilación para publicar**: Pages sirve el repositorio tal cual desde la raíz de `main`. Lo generado (p. ej. `data/leyes/*.js` desde el BOE) se genera en desarrollo y se versiona. Herramientas en node (generadores, comprobaciones, navegador headless) solo en desarrollo; la app nunca depende de ellas.
- **Vanilla**: HTML, CSS y JavaScript sin frameworks.
- `<script src>` clásicos (sin módulos ES ni `fetch()` de ficheros locales, que `file://` no permite): todo dato va en ficheros `.js` que registran su contenido en un objeto global. Se cargan bajo demanda insertando `<script>`, que funciona en ambos entornos.
- **Cero dependencias de red de terceros en ejecución.** Hoy: Google Fonts en todas las páginas y `html-to-image` desde CDN en una guía. Se eliminan. Tipografía: en https una fuente local `.woff2` funciona, pero en `file://` Chromium la bloquea por CORS; para que valga en ambos, fuente incrustada (`data:` en el CSS, solo los pesos usados) o fuentes del sistema — se decide en fase 1 midiendo el peso.
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

## 5. Arquitectura propuesta

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

### Publicación ☐
- Cada bloque terminado (p. ej. «leyes completas», «guías migradas») se propone para `main` con un resumen; al fusionarse, Pages lo publica.
- Antes de fusionar: tests en `file://` y http, enlaces internos comprobados, y la web publicada revisada tras el despliegue.
- Las URL antiguas (`/02%20-%20Esquemas.../...html`) dejarán de existir: `404.html` redirige cada una a su equivalente nuevo; las que no tengan equivalente muestran un aviso para actualizar favoritos (decisión 8).

### Fase 1 · Arquitectura común ✅
Visto bueno para empezar: 2026-10-28. Terminada el 2026-10-28, con trabajo adelantado de las fases 2 y 3 (los motores se construyeron sobre datos reales, no sobre muestras). `npm test`: 42/42.

1. ✅ Sistema de estilos y **propuesta visual** — aprobada por el propietario con dos peticiones, aplicadas: cabecera de 64 px con el buscador holgado, y sin barras de desplazamiento en ventanas o paneles pequeños (reglas en `CLAUDE.md`). `assets/css/`: `fonts.css` (Plus Jakarta Sans y Outfit incrustadas, generadas por `tools/build-fonts.js`; 117 KB; funcionan en `file://` y https, sin peticiones a terceros), `tokens.css` (cada color una vez con `light-dark()`, tema según el sistema o el interruptor), `base.css`, `layout.css`, `components.css`, `print.css`. Maqueta: `docs/diseno/muestra.html` (#inicio · #ley · #esquema · #guia; `?tema=oscuro`). Continuidad con la app actual: fondo papel, cabecera tinta con filete dorado, los seis colores de categoría, las mismas tipografías, el logotipo de la balanza. Auditoría: tres defectos corregidos tras ver las capturas (resaltado de búsqueda que partía las líneas del índice, desbordamiento horizontal en móvil por la ventana de referencia —ahora hoja inferior—, buscador inaccesible en móvil); `tests/contrast.test.js` (contraste WCAG AA de todos los pares texto/fondo, claro y oscuro: obligó a oscurecer `--text-3` y `--ok`); sin desbordamiento horizontal a 390 y 1440 px. `npm test`: 21/21.
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

### Fase 4 · Revisión de contenido de los esquemas (28) ◐ (18/27)
Un commit por esquema, con su registro en `docs/revision/`. Orden: el de la tabla (decisión 6). Los más usados (E01–E04, E28) con atención especial.

| # | Esquema | Estado |
|---|---|---|
| E01 | LEC · Diligencias preliminares | ✅ 2026-10-29 · 53 correcciones + jurisprudencia no verificable retirada ([registro](revision/lec-diligencias-preliminares.md)) |
| E02 | LEC · División de la herencia — procedimiento | ✅ 2026-10-29 · de 26 a 16 fichas (decisión 9), 39 correcciones ([registro](revision/lec-division-herencia.md)) |
| E03 | LEC · Intervención del caudal hereditario | ✅ 2026-10-29 · las 7 fichas rehechas desde el texto vigente; 20 grupos de hallazgos ([registro](revision/lec-intervencion-caudal.md)) |
| E04 | LEC · Administración del caudal hereditario | ✅ 2026-10-29 · corregido (no rehecho): 17 hallazgos; el más relevante, la contestación a la impugnación de cuentas va por los arts. 404 y ss. (20 días), no por el 438 ([registro](revision/lec-administracion-caudal.md)) |
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
| E19 | LJV · T. II Cap. VIII — Actos de disposición sobre bienes de menores y personas con apoyos | ☐ |
| E20 | LJV · T. II Cap. IX — Ausencia y fallecimiento | ☐ |
| E21 | LJV · T. II Cap. X — Extracción de órganos de donantes vivos | ☐ |
| E22 | LJV · T. II Cap. XI — Declaraciones sobre hechos pasados | ☐ |
| E23 | LJV · Título IV — Derecho sucesorio | ☐ |
| E24 | LJV · Título V — Derecho de obligaciones | ☐ |
| E25 | LJV · T. VI Cap. I — Usufructuario y créditos vencidos | ☐ |
| E26 | LJV · T. VI Cap. II — Deslinde de fincas no inscritas | ☐ |
| E27 | LJV · Título VII — Subastas voluntarias | ☐ |
| E28 | LJV · Título IX — Conciliación | ☐ |

### Fase 5 · Revisión de contenido de las guías (25) ☐
Mismo método; además, pasos que faltan y sobran (criterio 6.3) y los 9 huérfanos (reconectar al punto correcto del flujo o eliminar, con motivo).

| # | Guía | Hallazgos previos | Estado |
|---|---|---|---|
| G01 | LEC · Diligencias preliminares | — | ☐ |
| G02 | LEC · División de la herencia — procedimiento | — | ☐ |
| G03 | LEC · Intervención del caudal hereditario | — | ☐ |
| G04 | LEC · Administración del caudal hereditario | 3 huérfanos | ☐ |
| G05 | LEC · Liquidación del REM | — | ☐ |
| G06 | LJV · T. II Cap. I — Filiación no matrimonial | — | ☐ |
| G07 | LJV · T. II Cap. I bis — Mención registral del sexo | — | ☐ |
| G08 | LJV · T. II Cap. I ter — Nueva modificación | — | ☐ |
| G09 | LJV · T. II Cap. II — Habilitación y defensor judicial | 21 × «Secretario judicial» | ☐ |
| G10 | LJV · T. II Cap. III — Adopción | 4 huérfanos | ☐ |
| G11 | LJV · T. II Cap. III bis — Medidas de apoyo | — | ☐ |
| G12 | LJV · T. II Cap. IV — Tutela, curatela y guarda de hecho | 1 huérfano | ☐ |
| G13 | LJV · T. II Cap. V — Emancipación | 1 huérfano | ☐ |
| G14 | LJV · T. II Cap. VI — Patrimonio protegido | — | ☐ |
| G15 | LJV · T. II Cap. VII — Honor, intimidad e imagen | dependencia de CDN; «art. 98 LOPJ», «art. 59.4», «art. 1.4 LO 1/1982» | ☐ |
| G16 | LJV · T. II Cap. VIII — Actos de disposición | — | ☐ |
| G17 | LJV · T. II Cap. IX — Ausencia y fallecimiento | — | ☐ |
| G18 | LJV · T. II Cap. X — Órganos de donantes vivos | — | ☐ |
| G19 | LJV · T. II Cap. XI — Hechos pasados | — | ☐ |
| G20 | LJV · Título IV — Derecho sucesorio | — | ☐ |
| G21 | LJV · Título V — Derecho de obligaciones | — | ☐ |
| G22 | LJV · T. VI Cap. I — Usufructuario | — | ☐ |
| G23 | LJV · T. VI Cap. II — Deslinde | — | ☐ |
| G24 | LJV · Título VII — Subastas voluntarias | — | ☐ |
| G25 | LJV · Título IX — Conciliación | — | ☐ |

### Fase 6 · Interfaz: homogeneización y mejoras ☐
Se va aplicando con los motores (fase 1), pero aquí se recogen las mejoras de uso que se decidan tras ver la versión migrada: referencias vivas, enlace directo a cada paso, progreso de la guía guardado, impresión de un recorrido como hoja de tramitación, accesibilidad (teclado, contraste ≥ 4,5:1, foco visible).

### Fase 7 · Cobertura nueva (propuestas — a decidir) ☐
- LJV Título III (familia) y Título VIII (mercantil): esquema y guía — con ellos la LJV quedaría completa.
- Guía de normas comunes de la LJV (Título I) como tronco reutilizable desde todas las guías LJV.
- LEC: otros procedimientos de uso frecuente en el Negociado (el propietario indica cuáles).

## 8. Otras sugerencias (a valorar)
1. **Referencias vivas** al texto literal (sección 5) — probablemente la de mayor valor para el día a día.
2. **Buscador global** en leyes, esquemas y guías, insensible a tildes.
3. **Aviso de desactualización**: cada recurso muestra la fecha de corte del BOE con la que se revisó; el comparador (sección 9) indica qué artículos citados han cambiado después.
4. **Modelos de resolución** (diligencias, decretos) como bloque de las guías, enlazables con Plantillas — *solo si encaja con Plantillas; a hablar*.
5. Impresión cuidada de esquemas y de un recorrido de guía.
6. Enlace con Agenda: los plazos de una guía muestran «N días hábiles» con la misma regla (sin escribir nunca datos de Agenda).

## 9. Mantenimiento posterior
- `tools/boe-fetch.js` + `tools/boe-diff.js`: vuelve a descargar las leyes, lista los artículos modificados desde la última fecha de corte y los recursos que los citan → lista de trabajo de actualización.
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

## 11. Registro de cambios del plan
- 2026-10-28 · Primera versión, tras la revisión técnica completa.
- 2026-10-28 · El propietario indica que la app debe seguir accesible en GitHub Pages: restricciones (sección 3) para que funcione en https y en `file://`, rama de trabajo, `.nojekyll`, contenido público, sección «Publicación».
- 2026-10-28 · Plan aprobado; decisiones 3–8 tomadas (sección 10).
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
