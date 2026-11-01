# Negociado

Material de apoyo para la tramitación en el Negociado de los juzgados de Las Palmas (interfaz en español): leyes completas (LEC y LJV) con índice y mapa, esquemas interactivos por artículo y guías de tramitación paso a paso. Publicado en GitHub Pages (https://cpardilla.github.io/negociado/, desde la raíz de `main`) y usable también como copia local desde `file://`.

El plan, el estado de cada fase y las decisiones están en `docs/ROADMAP.md`; la revisión jurídica de cada recurso, en `docs/revision/<id>.md`.

## Principio rector

**El contenido manda.** Lo más importante es que todo lo que dice la app sea exacto y esté vigente. Cada afirmación jurídica se puede contrastar con el texto consolidado del BOE, y cada corrección se registra con su fuente. Ante la duda en una cuestión jurídica o de práctica del juzgado, se pregunta al propietario; no se decide en silencio.

## Restricciones

- Tiene que funcionar igual en **https (GitHub Pages)** y en **`file://`**: `<script src>` clásicos, sin módulos ES, sin `fetch()` de ficheros locales, sin service workers. Los datos son ficheros `.js` que se registran en un objeto global.
- Vanilla (HTML, CSS, JS). Sin frameworks ni paso de compilación para publicar: lo generado se genera en desarrollo y se versiona. Las herramientas en node (`tools/`) son solo de desarrollo.
- Recursos externos en ejecución solo cuando sean imprescindibles para una característica y sin abusar de ellos (criterio del propietario: la app no maneja datos personales, privados ni de procedimientos judiciales, así que no necesita el aislamiento de Agenda y Plantillas). Nada de CDN ni Google Fonts: lo que pueda ir en el repositorio va en el repositorio. Caso aprobado: la consulta a la API de datos abiertos del BOE al pulsar «Comprobar vigencia» en un artículo.
- El repositorio es público: nada personal, de expedientes ni historiales de chat.
- `localStorage` solo con claves `negociado.*`. En `file://` el origen es compartido con Agenda y Plantillas: nunca se tocan sus claves.

## Arquitectura

Una sola aplicación con rutas `#/…` (el rediseño ya está publicado; historia y detalle en el ROADMAP):

- `index.html` (carcasa) · `404.html` (redirige las direcciones antiguas).
- `assets/css/`: `tokens`, `base`, `layout`, `components`, `print` y `fonts` (fuentes incrustadas).
- `assets/js/core/`: utilidades (`neg`), carga de datos, rutas, carcasa, citas, leyes, referencias y vigencia. `assets/js/views/`: inicio, ley, esquema, guía y búsqueda.
- `vendor/markmap/`: d3 y markmap, versión fijada.
- `data/esquemas/` y `data/guias/`: el contenido, un fichero por recurso; esquema y guía del mismo ámbito comparten id.
- `data/leyes/`: LEC y LJV completas; de las demás normas, solo los artículos citados. `data/catalogo.js`, `data/busqueda.js`, `data/citados.js`: catálogo e índices.
- `sources/boe/`: instantáneas del BOE con fecha y `correcciones.json`. `sources/actual/`: inventario de la app anterior (histórico).
- `tools/` · `tests/` · `docs/`.

Lo generado no se edita a mano: `data/leyes/`, `data/catalogo.js`, `data/busqueda.js`, `data/citados.js`, `404.html` y `assets/css/fonts.css`. Al cambiar un esquema o una guía, regenerar con `node tools/build-law.js --citadas` y después `node tools/build-index.js`. Comprobaciones: `npm test` (necesita Edge) y `npm run check` (actualiza `docs/revision/informe.md`).

## Fuente de verdad jurídica

API de datos abiertos del BOE, legislación consolidada: `https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/{id}/...` (LEC `BOE-A-2000-323`, LJV `BOE-A-2015-7391`). Las leyes están en `tools/leyes.json`. Las instantáneas se guardan en `sources/boe/` con su fecha de actualización; toda revisión anota su fecha de corte. El BOE a veces lista como última una versión errónea: vale la vigente publicada en último lugar (decisión 17), y las correcciones van en `sources/boe/correcciones.json`. `node tools/boe-diff.js` lista lo que ha cambiado en el BOE y qué recursos lo citan, sin tocar nada.

## Forma de trabajar

- Idioma de la respuesta: el del propietario. En castellano → castellano (de «tú»); en inglés → inglés; mezclado → inglés.
- **Ningún cambio en la app sin visto bueno del propietario.** Fase a fase: plan → aprobación → un commit por paso → verificación → informe honesto con cifras.
- **Tras cada implementación (uno o varios pasos), siempre dos cosas más, en este orden:**
  1. **Auditoría completa (segunda vuelta)**: revisar lo hecho y lo que toca, buscando fallos ya existentes o introducidos por los cambios recientes, y despistes. Lo encontrado se corrige o se anota en el ROADMAP.
  2. **Batería de tests** que compruebe que todo funciona como debe (https/servidor local y `file://`), con los resultados en el informe.
- Preguntas interactivas al propietario cuando él lo pida o cuando haga falta su criterio para seguir.
- **Agenda y Plantillas no se modifican nunca** (corresponde a sus propios chats); sus repositorios se pueden leer como referencia. La memoria USB se ignora: Negociado no está en ella.
- La forma y el fondo nunca van en el mismo commit: migrar o rediseñar no cambia el contenido; las correcciones de contenido van en commits propios con su registro.
- El trabajo se hace en la rama `rediseno`; a `main` (= la web publicada) solo llegan bloques completos y probados, con visto bueno.
- Push a GitHub solo cuando el propietario lo pida.
- Actualizar `docs/ROADMAP.md` con cada paso.
- Lo interno no llega a la app: números de decisión, «criterio del propietario» o del juzgado, códigos de recurso (E14, G10), fases o referencias a `docs/` se quedan en `docs/`. Lo vigila `tests/data.test.js`.
- Construir HTML siempre escapando el texto (una única función compartida) o con APIs del DOM.
- En expresiones regulares, nada de escapes `\uXXXX` escritos con la herramienta de edición (los convierte en caracteres literales invisibles): usar clases Unicode (`\p{M}`, `\p{L}` con la bandera `u`). Lo vigila un test.
- Un solo analizador de citas (`assets/js/core/citas.js`) para la app y las herramientas.

## Reglas de diseño (del propietario)

- Sin barras de desplazamiento dentro de ventanas o paneles pequeños siempre que se pueda: altura natural y, si el contenido es largo, mostrar lo esencial con un enlace a la vista completa. Solo desplazan la columna de navegación y la página. Si no hay más remedio (un artículo largo en la ventana de la cita), se permite el desplazamiento vertical: el contenido nunca se corta.
- Cabecera de 64 px, con el buscador holgado (no apretado).
- Contraste mínimo WCAG AA (4,5:1) en ambos temas: lo comprueba `tests/contrast.test.js`.
