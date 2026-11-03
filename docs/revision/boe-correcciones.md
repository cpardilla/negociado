# Correcciones a las instantáneas del BOE

- **Fecha**: 2026-10-31. **Decisión**: 17 (ROADMAP §10), a raíz de la decisión 16 (art. 781 LEC).
- **Herramientas**: `tools/boe-revisiones.js` (detección, consulta el historial completo de versiones en la API del BOE); `sources/boe/correcciones.json` + `tools/lib/boe-correcciones.js` (corrección, aplicada por `tools/boe-fetch.js` tras cada descarga y por `tools/boe-correcciones.js` sobre las instantáneas guardadas); `tests/data.test.js` comprueba que cada corrección está aplicada y llega a `data/leyes`. El visor de la ley marca el artículo con «Versión corregida» y el motivo.

## El problema

La instantánea guarda, de cada bloque, la última versión que lista el BOE. El BOE construye cada versión sobre el texto **publicado** antes que ella, pero las lista por **fecha de entrada en vigor**. Cuando una norma publicada después entra en vigor antes, la última versión listada no incorpora la reforma posterior:

- **LO 7/2015** (publicada el 22-7-2015, vigente desde el 1-10-2015; solo sustituye «Secretario judicial» por «Letrado de la Administración de Justicia») frente a la **Ley 42/2015** (publicada el 6-10-2015, vigente desde el 7-10-2015). El BOE lista después la versión de la LO 7/2015, que conserva el texto anterior a la Ley 42/2015.
- **Art. 781 LEC**: la versión de la LO 7/2015 se construyó sobre el texto anterior a la **Ley 26/2015** (publicada el 29-7-2015, vigente desde el 18-8-2015).

Regla que se aplica: la versión completa es la vigente **publicada en último lugar**. La detección la contrasta con la última listada y, aparte, señala las versiones que vuelven al texto de una anterior.

## Resultado (todas las leyes de `tools/leyes.json`)

| Ley | Bloques | Situación |
|---|---|---|
| LEC | arts. 14, 64, 159, 165, 167, 243, 274, 333, 540, 560, 794, 800, 809, 816 y 826 | **Corregidos**: versión de la Ley 42/2015 |
| LEC | art. 781 | **Corregido**: versión de la Ley 26/2015 (decisión 16) |
| LOPJ | arts. 231 y 455 | **Corregidos** (decisión 18): el BOE lista al final una «versión» sin fecha de vigencia (BOE-A-2000-9230, nota de la STC 105/2000) con el texto antiguo; se toma la de la LO 5/2015 (art. 231) y la de la LO 7/2015 (art. 455) |
| LOPJ | art. 564 | **Corregido** (decisión 18): versión de la LO 4/2018; el BOE lista después la de 26-12-2016 (nota de la STC 191/2016) |
| CP | sección 2.ª del cap. III del título XII | **Corregido** (decisión 18): «De la sustracción de menores» (LO 9/2002); el BOE lista después el epígrafe original de 1996 |

Falsos positivos de una primera regla (la más reciente por fecha de vigencia), descartados con la regla de publicación: art. 33 LEC, art. 18 LJV, arts. 59, 60, 74, 78 y DF 5.ª LRC, arts. 60 y 99 TRLGDCU, arts. 567 y 599 LOPJ. El aviso inicial sobre los arts. 439 y 685 LEC también desaparece: la instantánea ya tiene la versión publicada en último lugar.

Quedan, sin revisar, las «reversiones» que no son de este tipo (una versión que vuelve al texto de otra anterior): pueden ser legítimas (derogaciones, anulaciones, fin de regímenes transitorios). Listado: `node tools/boe-revisiones.js --out=…` (LEC 45, 525, 685, 763; RH 16; LSSI 19; CC 2; CP 2; LSC, CCom, TRLGDCU, LAC 1).

Las correcciones de la decisión 18 no cambian el contenido: esos bloques no están en `data/leyes` (la LOPJ y el CP solo llevan los artículos citados) y el comprobador de citas da el mismo resultado. La única otra versión sin fecha de vigencia que queda como última en las instantáneas (disposición adicional primera de la LOPJ) tiene el mismo texto que la versión de 1994.

## Efecto en el contenido

Los recursos revisados contra la instantánea errónea, corregidos en commit propio (registros en cada `docs/revision/<id>.md`):

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| E04 y G04 (administración del caudal) | Impugnación de cuentas (art. 800.4) | «Contesta conforme a los arts. 404 y ss., veinte días» (introducido en las revisiones de E04 y G04) | Contesta conforme al art. 438 (por escrito, diez días); las partes pueden pedir vista en sus escritos; juicio verbal. Era lo que decían los originales |
| E03 y G03 (intervención del caudal), G02 (división de herencia) | Controversia sobre el inventario (art. 794.4) | El LAJ cita a vista | El LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica, y cita a vista |
| E05 y G05 (liquidación del REM) | Controversia sobre el inventario (art. 809.2) | Ídem | Ídem |
| E13 y G10 (adopción) | Art. 781 LEC | Ya corregido (decisión 16); desaparecen los 3 avisos «no tiene apartado 3» | — |

Los demás artículos corregidos (14, 64, 159, 165, 167, 243, 274, 333, 540, 560, 816, 826) no se citan en el contenido de forma que cambie lo que dice (el art. 64.2, sobre la caución, no varía).

## Reversiones revisadas (2026-11-01)

`node tools/boe-revisiones.js` sobre las 35 leyes, con el historial y las notas del BOE de cada artículo. Quedaban por revisar las reversiones en la versión vigente que no son errores de desorden. **Ninguna es un error de consolidación: todas tienen causa en una norma o resolución, y la instantánea coincide con la última versión. No cambia nada en la app ni en `correcciones.json`.**

| Ley | Artículos | Causa | ¿Se cita en la app? |
|---|---|---|---|
| LEC | 45 | Disposición final 1.1 de la LO 7/2022 deshace el cambio de la LO 7/2015 | Sí (E02), sin efecto |
| LEC | 525 | Art. 22.43 LO 1/2025 retira la oposición a resoluciones de protección de menores; coincide por azar con el texto de 2015 | No |
| LEC | 685 | RDL 26/2026, derogado por el Congreso (Resolución de 2-10-2026) y vuelto a aprobar en el RDL 29/2026 | No |
| LEC | 763 | Desaparece la nota sobre la STC 132/2010 al darle carácter orgánico la LO 8/2015 | No |
| CP | 576 bis y epígrafe del título VIII | LO 2/2015; epígrafe según la versión de BOE-A-2022-14630 (no leída su nota) | No |
| LSC | 5 | Art. 2.3 de la Ley 18/2022 | No |
| CCom | 580 | Disposición derogatoria de la Ley 38/2011 | No |
| TRLGDCU | 20 | Derogación del RDL 4/2026 por el Congreso | No |
| LAC | 35 | Art. 5.2 de la Ley 5/2021 | No |
| RH | 16 artículos | Muestra leída: arts. 250 (RD 2388/1984 deja sin efecto la derogación de 1982) y 457 (STS de 6-7-2012 anula el RD 253/2011); los demás, por la misma norma | No |
| LSSI | 19 artículos | Muestra leída: art. 14. El Congreso deroga el RDL 9/2024 (Resolución de 22-1-2025); los demás, por la misma norma | No |

Las reversiones en versiones anteriores a la vigente (LEC 29, CP 4, CC 2, LOPJ 1) no se han leído una a una: ya no son el texto en vigor. Tampoco se han revisado aquí las 66 filas vigentes de «LO 7/2015 con cambios de fondo» (LOPJ 56, LEC 10), que son otro tipo de candidato; las 10 de la LEC, vistas por encima, parecen reformas reales de esa ley.

**Vigilar**: el RDL 29/2026 (BOE-A-2026-20823, en vigor desde el 8-10-2026) da la redacción vigente de los arts. 22 y 685 LEC y, según la ficha del Congreso (130/000060), estaba pendiente de convalidación al revisar. Su antecesor, el RDL 26/2026, fue derogado. Si decae, `tools/boe-diff.js` lo mostrará. Ninguno de los dos se cita de verdad en la app.

**Hallazgo de paso, sin corregir**: E02 (ecosistema normativo, Reglamento (UE) 650/2012) dice «Art. 4 — Competencia» y «Arts. 21–22 — Ley aplicable» sin nombrar la norma en esa frase, y el analizador los lee como artículos de la LEC: los enlaza mal y aparecen en «Lo citan» de esos artículos. Pendiente del visto bueno del propietario.

## «LO 7/2015 con cambios de fondo» revisadas (2026-11-03)

Las 66 filas vigentes de `tools/boe-revisiones.js` (LOPJ 56, LEC 10). Pregunta: ¿es una reforma real o una versión construida sobre un texto anticuado, como el art. 781 LEC? Método: lo que añade cada versión se busca en el texto de la propia LO 7/2015 (BOE-A-2015-8167) y en las versiones anteriores del artículo. **Ninguna es un error de consolidación. No cambia nada en la app ni en `correcciones.json`.**

| Ley | Artículos | Resultado |
|---|---|---|
| LEC | 115, 116, 117, 140, 266, 510, 511 | Reforma real: disposición final 4.ª; el 100 % de lo añadido está en la LO |
| LEC | 138, 512 | Ídem (95 % y 94 %): lo no hallado son las palabras en la frontera entre el texto reformado y el que no («recurso de reposición», «del referido tribunal») |
| LEC | 123 | Sin cambio de fondo: el BOE corrige una errata de maquetación («mani festará») |
| LOPJ | 56 artículos | Reforma real: 2.647 de las 2.651 palabras añadidas están en la LO; lo demás es la frontera «de esta ley 2» del art. 495. Ninguna coincide con una versión antigua. En 14 filas lo añadido son menos de 8 palabras, prueba menos fuerte, pero no son textos anticuados. La app cita dos: arts. 22 y 456 |

Las filas de la LEC con texto de una versión antigua son las 16 ya corregidas por la decisión 17: la prueba las detecta, lo que la valida.

**Hallazgo al revisar, pendiente del visto bueno del propietario: notas del BOE dentro del texto de los artículos.** El BOE envuelve en `<blockquote caduca="…" class="soloTexto">` y `<blockquote class="noDesde…">` sus avisos, a menudo con la «Redacción anterior». El lector (`tools/boe-fetch.js`, y también `assets/js/core/vigencia.js`) solo reconoce `<blockquote>` sin atributos, así que ese contenido se guarda como texto del artículo. Afecta a 225 artículos de los que lleva la app (189 con «Redacción anterior»): LEC 165/150, LJV 41/21, LPPD 6/6, LH 5/4, LRC 4/4, LN 2/2, LMED 1/1, LOPJ 1/1. Ejemplo: el art. 117 LEC se muestra con sus apartados vigentes y, debajo, con los anteriores. `class="sangrado"` no es una nota: es texto legal (LO 1/2025, Ley 4/2023) y debe conservarse.

Simulado el arreglo en una copia aparte: 503 bloques cambian en las instantáneas y todos son solo supresión; no queda ninguna nota en los artículos de la app; el comprobador sigue con 3 errores y pierde un aviso falso (art. 51.2 LJV, cuyo apartado 2 lo pisaba el de la redacción anterior). Ninguna cita, plazo o rúbrica dependía solo del texto derogado, en lo que el comprobador examina; no cubre toda afirmación de las guías. Solo una nota sigue viva en esos artículos: art. 2 LOPDH (inciso anulado por la STC 9/1990).

## Notas del BOE fuera del texto de los artículos (2026-11-03)

Aplicado lo que quedó pendiente en la sección anterior, con el visto bueno del propietario. Corte del BOE: descarga del 2026-11-03 (LEC y CE, con fecha de actualización 29-10-2026, sin cambios en su articulado).

- 226 artículos de los que lleva la app cambian (LEC 165, LJV 41 y 20 de otras leyes), todos solo por supresión; ninguna versión ni marca «sin contenido» varía.
- Contrastados contra la API del BOE los 206 de la LEC y la LJV: todos coinciden palabra por palabra.
- Única nota no caducada: art. 2 LOPDH (inciso anulado por la STC 9/1990), ahora «Nota del BOE» con el texto del inciso, que el BOE solo distingue en negrita y la app mostraba como vigente.
- Comprobador: 3 errores intencionados, 0 avisos, 53 por revisar; desaparece el aviso falso del art. 51.2 LJV.

Límite: el comprobador examina citas, apartados, rúbricas y plazos, no cada afirmación. Las revisiones de las fases 4 y 5 se hicieron sobre instantáneas con esas notas; no se ha releído cada recurso.
