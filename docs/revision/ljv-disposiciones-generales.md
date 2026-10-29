# Revisión · E06 · LJV · Título Preliminar — Disposiciones generales (arts. 1–8)

- **Recurso**: `data/esquemas/ljv-disposiciones-generales.js` (origen E06).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; LEC a 07-10-2026; LOPJ a 09-10-2026 (LO 1/2025).
- **Método**: como E01–E05; decisiones 9 y 10. Rehecho desde el texto vigente.
- **Resultado del comprobador**: 0 errores, 0 avisos; 1 «revisar» intencionado (la ficha del art. 2 cita la denominación «Juzgados de Primera Instancia» que conserva la LJV).

## DRY: el Título I sale de este esquema

Las cinco fichas de los arts. 13–22 (Título I) duplicaban el esquema E07 («Normas comunes de tramitación»). Se sustituyen por una ficha de remisión con lo esencial (oposición, comparecencia, decisión, recursos, caducidad). En E07 se hará lo inverso con sus fichas de los arts. 1–8.

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 1 y 3 | **error** | «Si surge oposición, el expediente se transforma en proceso contencioso y se archiva (art. 6.2)»; «el expediente de JV se transforma en un proceso contencioso» (contradecía la propia ficha del art. 3) | La oposición **no hace contencioso el expediente ni impide que continúe**, salvo que la ley lo prevea (art. 17.3); el art. 6.2 trata del objeto que ya se discute en un proceso | arts. 6.2 y 17.3 LJV |
| 2 | Plazos | **error** | Apelación «5 días, art. 457 LEC» (suprimido) | **20 días, art. 458 LEC**; se añade la reposición (5 días, art. 452) | LEC |
| 3 | 8 | error | «Art. 641 LEC (sin contenido) → art. 110.3 LJV»; «art. 661 LEC → art. 110.2 LJV» | Retirados: el art. 110 LJV no remite a esos artículos; se listan las remisiones que sí existen (arts. 6.3, 15.2, 18.2, 20, 22.1 y 80 quater) | LJV, LEC |
| 4 | 8 | error | Rangos supletorios: «arts. 133–147 actos de comunicación», «206–223», «281–283: carga y valoración de la prueba»; «CC art. 4.3: normas procesales en leyes sustantivas»; «no se aplican vista oral ni normas del contencioso» | Retirados: los actos de comunicación son los arts. 149 y ss.; el 223 está sin contenido; la carga de la prueba es el art. 217; el art. 4.3 CC es la supletoriedad del Código; y la comparecencia sigue precisamente la vista del juicio verbal (art. 18.2) | LEC, CC, LJV |
| 5 | 2 | error | «Art. 45 LOPJ» (conflictos de competencia), «art. 82 LEC/LOPJ» (Audiencias), «art. 86 ter LOPJ» (suprimido), «art. 451 LOPJ» (suplencias de LAJ) | Secciones Civiles (art. 85 LOPJ) y de lo Mercantil (art. 87 LOPJ) de los Tribunales de Instancia | LOPJ (LO 1/2025) |
| 6 | 2 | desfasado | «Secretario judicial» en el texto explicativo (22 veces) | Letrado de la Administración de Justicia, advirtiendo que la LJV conserva la denominación | LO 7/2015 |
| 7 | 3 | error | No preceptiva en «extracción de órganos (art. 79)» | Retirado (el art. 79 no lo dice); lista comprobada artículo por artículo, incluidos los arts. 91–92, 98, 141 y el deslinde (art. 105) | LJV |
| 8 | 4 | error | Intervención preceptiva en «tutela y curatela (art. 43)», «dispensa del impedimento de muerte dolosa (art. 83)» | Sustituido por el modo de intervención que prevé el Título I (arts. 15, 17.2, 18.2) | LJV |
| 9 | 5 | error | «Arts. 281–283 LEC: carga y valoración»; «LEC arts. 303, 429» | Retirados | LEC |
| 10 | 7 | error | Gastos: «tasas judiciales» como gasto típico; perito de oficio «a cargo del expediente»; «art. 135.6: retribución del administrador»; tasación «arts. 241–246 LEC» | Retirados (sin base en la LJV); ejemplos comprobados: arts. 50, 99.6 y 146 | LJV |
| 11 | 7 bis | estilo | Modelos «médico-rehabilitador/social», CDFUE, CEDH, LO 8/2021 (infancia), ejemplos de facilitadores | Retirados (decisión 9); queda el texto del artículo y la Convención de la ONU | — |
| 12 | 1 | estilo | Fundamentación constitucional e historia (LEC de 1881) | Retiradas (doctrina, no tramitación) | — |
| 13 | Ecosistema | error | «CC arts. 215 y ss.: capacidad jurídica y apoyos» (el 215 trata de la tutela de varios hermanos); Bruselas II ter | Retirados | CC |
| 14 | Cabecera y pie | estilo | «60+ ref. normativas», «Arts. 13–22», «versión fusionada… plantilla HTML» | Cifras y ubicación reales | — |

## Herramienta común (commits propios)

- El analizador de citas no enlaza los convenios y convenciones internacionales («art. 9 de la Convención» se leía como art. 9 LJV).
- Reconoce «y ss.» / «y siguientes» entre el artículo y la ley («arts. 437 y ss. LEC» se leía como art. 437 de la ley del recurso). Esta corrección afecta a todos los recursos: el informe general pasa de 405 a 407 hallazgos porque ahora se comprueban citas que antes se atribuían a la ley equivocada.

## Corrección posterior (2026-10-29)

Competencia: donde exista, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia, con carácter exclusivo y excluyente (art. 86.5 LOPJ); si no, la Sección Civil. Detectado al revisar E13 (véase `ljv-adopcion.md`).

## Corrección posterior (2026-10-29) — decisión 11

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| D11 | Art. 2 y ecosistema | incompleto | Todos los expedientes de personas y familia, a la Sección de Familia, Infancia y Capacidad | Salvo ausencia y fallecimiento y extracción de órganos (caps. IX y X del Título II LJV), que van a la Sección Civil | LOPJ art. 86.5 j); decisión 11 |
