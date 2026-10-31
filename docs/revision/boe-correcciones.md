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
| LOPJ | arts. 231, 455 y 564 | Pendientes del propietario (no los usa la app más que para comprobar citas) |
| CP | epígrafe de una sección 2.ª | Pendiente (sin uso en la app) |

Falsos positivos de una primera regla (la más reciente por fecha de vigencia), descartados con la regla de publicación: art. 33 LEC, art. 18 LJV, arts. 59, 60, 74, 78 y DF 5.ª LRC, arts. 60 y 99 TRLGDCU, arts. 567 y 599 LOPJ. El aviso inicial sobre los arts. 439 y 685 LEC también desaparece: la instantánea ya tiene la versión publicada en último lugar.

Quedan, sin revisar, las «reversiones» que no son de este tipo (una versión que vuelve al texto de otra anterior): pueden ser legítimas (derogaciones, anulaciones, fin de regímenes transitorios). Listado: `node tools/boe-revisiones.js --out=…` (LEC 45, 525, 685, 763; RH 16; LSSI 19; CC 2; CP 2; LSC, CCom, TRLGDCU, LAC 1).

## Efecto en el contenido

Los recursos revisados contra la instantánea errónea, corregidos en commit propio (registros en cada `docs/revision/<id>.md`):

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| E04 y G04 (administración del caudal) | Impugnación de cuentas (art. 800.4) | «Contesta conforme a los arts. 404 y ss., veinte días» (introducido en las revisiones de E04 y G04) | Contesta conforme al art. 438 (por escrito, diez días); las partes pueden pedir vista en sus escritos; juicio verbal. Era lo que decían los originales |
| E03 y G03 (intervención del caudal), G02 (división de herencia) | Controversia sobre el inventario (art. 794.4) | El LAJ cita a vista | El LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica, y cita a vista |
| E05 y G05 (liquidación del REM) | Controversia sobre el inventario (art. 809.2) | Ídem | Ídem |
| E13 y G10 (adopción) | Art. 781 LEC | Ya corregido (decisión 16); desaparecen los 3 avisos «no tiene apartado 3» | — |

Los demás artículos corregidos (14, 64, 159, 165, 167, 243, 274, 333, 540, 560, 816, 826) no se citan en el contenido de forma que cambie lo que dice (el art. 64.2, sobre la caución, no varía).
