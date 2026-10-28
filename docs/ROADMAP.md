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

### Fase 0 · Red de seguridad y base de verdad (sin cambios en la app) ☐
1. ☐ Tag `baseline-2026-10-28`; rama de trabajo `rediseno`; `CLAUDE.md`; este plan; `.gitignore`; `.specstory/` fuera del control de versiones (se conserva en disco; hoy es visible en el repositorio público) — *confirmar*; rama local `master` obsoleta — *confirmar si se borra*.
2. ☐ `tools/boe-fetch.js`: descarga y guarda en `sources/boe/` LEC y LJV (y leyes citadas) con su fecha.
3. ☐ `tools/extract-current.js`: extrae el contenido actual de los 57 ficheros a JSON (inventario fiel, base para la migración y para comparar).
4. ☐ `tools/check-content.js` sobre el inventario: **primer informe de hallazgos automáticos** (citas, plazos, terminología, grafos) → `docs/revision/_informe-inicial.md`. Da una visión temprana del estado del contenido antes de rediseñar nada.
5. ☐ Ejecutor headless (`tools/run.js`, como `edge-run.js` de Agenda), que abre la app por `file://` y por un servidor local http (equivalente a Pages), y captura de pantallas de referencia de cada recurso actual.

### Publicación ☐
- Cada bloque terminado (p. ej. «leyes completas», «guías migradas») se propone para `main` con un resumen; al fusionarse, Pages lo publica.
- Antes de fusionar: tests en `file://` y http, enlaces internos comprobados, y la web publicada revisada tras el despliegue.
- Las URL antiguas (`/02%20-%20Esquemas.../...html`) dejarán de existir: `404.html` redirige cada una a su equivalente nuevo; las que no tengan equivalente muestran un aviso para actualizar favoritos (decisión 8).

### Fase 1 · Arquitectura común ☐
1. ☐ Sistema de estilos (`tokens.css` + componentes), tema claro/oscuro, impresión. Propuesta visual con capturas antes de aplicarla.
2. ☐ Carcasa nueva (`index.html`): menú lateral desde `catalogo.js`, router `#hash`, buscador global, sin `<iframe>`.
3. ☐ Motores: `ley.js`, `esquema.js`, `guia.js`, `referencia.js`.
4. ☐ Tests de cada motor (`tests/*.js`) en Chromium 144 y Edge.

### Fase 2 · Leyes completas (markmap) e índices ☐
1. ☐ `tools/build-law.js`: BOE → `data/leyes/{lec,ljv}.js`, con la jerarquía y el estilo actuales (7.1).
2. ☐ Vista «Ley» con modos Índice y Mapa; sustituye a `00 - Indices` y `01 - Legislación completa interactiva`.
3. ☐ Comprobación de cobertura: número de artículos, disposiciones y bloques igual al BOE.

#### 7.1 Lo aprendido del markmap actual (preferencias a conservar)
- Jerarquía: Ley → Libro/Título → Título/Capítulo → Capítulo/Sección → **Artículo** («Artículo N. Rúbrica.») → apartados → letras y ordinales.
- **Texto literal íntegro** de cada artículo, apartado por apartado.
- Nodos estructurales en **negrita**; texto normativo sin negrita.
- Ancho máximo de nodo 300 px; al abrir, solo el primer nivel desplegado; barra de herramientas de markmap; modo oscuro automático.

Defectos a corregir:
- **Alcance**: articulado completo de ambas leyes. Disposiciones y preámbulo no se incluyen por ahora (decisión 3), pero el generador lo admitirá con una opción.
- **Desfasada**: la LEC del BOE tiene cambios hasta 07-10-2026; la LJV hasta la LO 1/2025.
- **Incoherencias entre las dos**: título en mayúsculas en una y no en la otra; los artículos son `h6` en la LEC y `h5` en la LJV; la LJV repite el número de apartado fuera del texto; «Sección 1.ª.» vs «Sección 1.ª».
- **Errores de conversión**: 8 nodos de la LEC se muestran como bloque de código (sangrías del Markdown de origen) y 3 nodos de lista vacíos; las pestañas se titulan «Markmap».
- Cada fichero lleva su propia copia de d3 y markmap (~280 KB cada uno): una sola copia en `vendor/`.

### Fase 3 · Migración mecánica de esquemas y guías ☐
1. ☐ `tools/migrate.js`: de cada HTML actual a `data/esquemas/*.js` y `data/guias/*.js` **sin cambiar el contenido** (comprobación automática: el texto visible antes y después es idéntico).
2. ☐ Retirada de los 53 HTML antiguos (quedan en el historial de git y en el tag).
3. ☐ El esquema combinado «CAPÍTULO I BIS & TER» se elimina (decisión 4); antes se comprueba si contiene algo que no esté en los separados, y eso se traslada a ellos en la fase 4.

### Fase 4 · Revisión de contenido de los esquemas (28) ☐
Un commit por esquema, con su registro en `docs/revision/`. Orden: el de la tabla (decisión 6). Los más usados (E01–E04, E28) con atención especial.

| # | Esquema | Estado |
|---|---|---|
| E01 | LEC · Diligencias preliminares | ☐ |
| E02 | LEC · División de la herencia — procedimiento | ☐ |
| E03 | LEC · Intervención del caudal hereditario | ☐ |
| E04 | LEC · Administración del caudal hereditario | ☐ |
| E05 | LEC · Liquidación del régimen económico matrimonial | ☐ |
| E06 | LJV · Título Preliminar — Disposiciones generales | ☐ |
| E07 | LJV · Título I — Normas comunes de tramitación | ☐ |
| E08 | LJV · T. II Cap. I — Reconocimiento de filiación no matrimonial | ☐ |
| E09 | LJV · T. II Cap. I bis — Mención registral del sexo (12–14 años) | ☐ |
| E10 | LJV · T. II Cap. I ter — Nueva modificación tras reversión | ☐ |
| E11 | LJV · T. II Cap. I bis y ter (combinado) | ✖ se elimina (decisión 4); su contenido útil pasa a E09/E10 |
| E12 | LJV · T. II Cap. II — Habilitación y defensor judicial | ☐ |
| E13 | LJV · T. II Cap. III — Adopción | ☐ |
| E14 | LJV · T. II Cap. III bis — Medidas judiciales de apoyo | ☐ |
| E15 | LJV · T. II Cap. IV — Tutela, curatela y guarda de hecho | ☐ |
| E16 | LJV · T. II Cap. V — Emancipación y beneficio de mayoría de edad | ☐ |
| E17 | LJV · T. II Cap. VI — Patrimonio de personas con discapacidad | ☐ |
| E18 | LJV · T. II Cap. VII — Honor, intimidad e imagen del menor | ☐ |
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
| G15 | LJV · T. II Cap. VII — Honor, intimidad e imagen | dependencia de CDN | ☐ |
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

## 11. Registro de cambios del plan
- 2026-10-28 · Primera versión, tras la revisión técnica completa.
- 2026-10-28 · El propietario indica que la app debe seguir accesible en GitHub Pages: restricciones (sección 3) para que funcione en https y en `file://`, rama de trabajo, `.nojekyll`, contenido público, sección «Publicación».
- 2026-10-28 · Plan aprobado; decisiones 3–8 tomadas (sección 10).
- 2026-10-28 · Forma de trabajar fijada por el propietario: idioma de respuesta según el suyo; auditoría completa + batería de tests tras cada implementación; Agenda y Plantillas intocables; memoria USB fuera del alcance.
