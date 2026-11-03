# Revisión · E04 · LEC · Administración del caudal hereditario (arts. 797–805)

- **Recurso**: `data/esquemas/lec-administracion-caudal.js` (origen E04).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LEC a 07-10-2026 (el art. 797.2 en la redacción del RDL 6/2023, vigente desde el 20-03-2024: «testimonio o copia auténtica»); CC, LN y LJV en sus instantáneas de `sources/boe/`.
- **Método**: como E01–E03; decisiones 9 y 10. Este esquema seguía de cerca el texto legal, así que se ha **corregido** (no rehecho).
- **Resultado del comprobador**: 0 hallazgos en el esquema. Los de la guía G04 (3 pasos huérfanos, una cita literal, «arts. 271» LJV y terminología) quedan para la fase 5.

## Hallazgos y correcciones

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 800 | **error** | La contestación a la impugnación de cuentas, «conforme al art. 438 LEC» (verbal), con «plazo de 10 días», en la ficha, la tabla de plazos y el ecosistema | El art. 800.4 remite a los **arts. 404 y ss.** (contestación del juicio ordinario: **veinte días**, art. 404.1) y después al juicio verbal | art. 800.4 LEC |
| 2 | 800 | error | «Las partes podrán solicitar vista en sus escritos» | Retirado (el art. 800.4 no lo dice; la vista sigue las reglas del verbal) | art. 800.4 |
| 3 | 800 | error | Aprobación «automática por ministerio de la ley» (silencio positivo) | Hace falta el decreto del LAJ que las aprueba, exime de responsabilidad y manda devolver la caución | art. 800.3 |
| 4 | 800 | error | La cuenta final «comprende la totalidad de operaciones… consolidando las parciales» | Retirado: la ley dice «complementaria de las ya presentadas» | art. 800.1 |
| 5 | 797 | error | Inscripción con efectos de «fe pública (arts. 17 y 32 LH)» y requisitos del «art. 209 RH» | El art. 209 RH trata de la cancelación de la anotación de derecho hereditario; la constancia del art. 797.3 es potestativa, por mandamiento del LAJ | LH, RH |
| 6 | 798, 801, ecosistema | error | Herencia yacente «CC arts. 998–1012»; «administrador de hecho (art. 998 CC)»; «posesión en interés de la herencia (arts. 1967–1969 CC)» | El art. 998 dice que la herencia puede aceptarse pura y simplemente o a beneficio de inventario; los arts. 1967–1969 son de prescripción. Retirados (2 normas del ecosistema y una nota) | CC |
| 7 | 798 | estilo | «Legitimación extraordinaria ad processum (no ad causam)» | Retirado (doctrina, no tramitación) | — |
| 8 | 801 | error | Interesados del art. 793.3 = «cualquiera con un derecho de any kind… cotitulares y cualquiera con interés legítimo» | La lista real del art. 793.3 | art. 793.3 |
| 9 | 801 | estilo | Definición inventada de reparación ordinaria; «acciones de regreso» | Lo que dice la ley | art. 801 |
| 10 | 803 | error | Venta en jurisdicción voluntaria «arts. 271 y ss. LJV» (la LJV acaba en el 148) con «secretario judicial»; subasta notarial «Ley 21/2007, de Notaría» | Subasta voluntaria ante el LAJ, **arts. 108 y ss. LJV**; subasta notarial, **arts. 72–77 de la Ley del Notariado** | LJV, LN |
| 11 | 803 | estilo | «Arrendamiento superior a cierto plazo según jurisprudencia»; ejemplos («ruina inminente», «maquinaria obsoleta»…); providencia «motivada» | Retirados; queda el texto de las cuatro excepciones | art. 803 |
| 12 | 804 | estilo | Concepto de «producto líquido» y listas de bienes inventadas; fijación del 4–10 % «revisable en la rendición de cuentas» | Retirados | art. 804 |
| 13 | Ecosistema | error | «LMV, RD 4/2015» (derogado por la Ley 6/2023); «cauciones del art. 581 LEC» (requerimiento de pago) | Retirados (el art. 803.3 ya dice que los valores cotizados se venden en su mercado; la caución, art. 795.3ª) | — |
| 14 | Ecosistema | error | «Ley Hipotecaria … texto refundido RD 1093/1997» | Decreto de 8 de febrero de 1946 (el RD 1093/1997 es de actos urbanísticos) | LH |
| 15 | Ecosistema | error | «Art. 793 — Intervenedores… determina la legitimación en la división» | Art. 793.3: interesados que se citan al inventario | LEC |
| 16 | Participantes | error | «Administradores interinos/sustitutos», «Hederos aparentes o putativos», «Acreedores del causante (distintos de los de la herencia)», «compañías aseguradoras»; «Juez/Juzgado» y «Tribunal» duplicados | Retirados o unificados; el administrador, nombrado por auto tras el inventario (art. 795) | LEC |
| 17 | Cabecera y pie | estilo | Subtítulo con «art. 438»; pie «plantilla HTML reutilizable 100 % offline» | Subtítulo con el contenido real; pie con la ubicación | — |

---

# Revisión · G04 · Guía de tramitación de la administración del caudal hereditario

- **Recurso**: `data/guias/lec-administracion-caudal.js` (origen G04).
- **Fecha de revisión**: 2026-10-30. **Corte del BOE**: LEC a 07-10-2026; Ley del Notariado; LJV.
- **Método**: fase 5. Se conservan recorrido y direcciones; cada paso se rehace con los arts. 795–805 LEC (revisados en E04).
- **Resultado del comprobador**: 0 hallazgos (antes: 1 error de grafo —tres pasos inalcanzables— y 3 «revisar»). 69 → 66 pasos.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | registro_decision, registro_propiedad | **error** | Dos pasos sobre la inscripción de la administración en el Registro de la Propiedad «por el art. 797.3 LEC» (con «arts. 9, 17, 32 LH» y «art. 209 RH») | Retirados: el art. 797 tiene dos apartados y no prevé esa inscripción | LEC |
| 2 | grafo | **error** | `nombramiento`, `caucion_pend` y `caucion_problema` inalcanzables | `presupuestos` distingue: nombrado con caución → posesión; nombrado sin caución → `caucion_pend` (→ `caucion_problema` si hay discusión); sin nombramiento → fin. `nombramiento` se retira: situaba el nombramiento en la división judicial «tras el inventario y avalúo», cuando se hace en el auto del art. 795 | LEC |
| 3 | enajenacion_subasta | **error** | Subasta conforme a la «Ley Notarial 21/2007» o la «LJV, arts. 271 y ss.» | Ley del Notariado (subastas notariales, arts. 72 y ss.) o LJV (subastas voluntarias, arts. 108 a 111) | LN, LJV |
| 4 | inicio, rep_yacente | **error** | «Arts. 1967–1969 CC (posesión en interés de la herencia)»; «RD 4/2015 del Mercado de Valores» | Retirados: los arts. 1967–1969 CC tratan de la prescripción | CC |
| 5 | declaracion_check, representacion_check | **error** | Declaración de herederos «judicial ante el Juzgado de Primera Instancia» o «acta de notoriedad (LJV arts. 55 y ss.)» | Notarial (arts. 55 y 56 de la Ley del Notariado) o, si el llamado es la Administración, en su propio procedimiento | LN |
| 6 | presupuestos, caucion_pend | error | Caución «art. 795.4.ª»; formas «fianza personal o seguro de caución»; «arts. 581 y ss. LEC»; aprobación «por diligencia del LAJ» | Art. 795, reglas 3.ª y 4.ª: caución fijada por el tribunal en las formas de la LEC, con sus dispensas | LEC |
| 7 | traslado_cuentadante | error | Contestación «conforme al art. 438 LEC (10 días)» | El art. 800.4 remite a los arts. 404 y ss. (el art. 404.1 fija veinte días) y luego al juicio verbal | LEC |
| 8 | enajenacion_check, consultar_alt, venta_* | error | Responsabilidad «penal»; alternativas inventadas («adelanto de legítimas», crédito hipotecario…); definición propia de «producto líquido»; «nueva subasta con tipo reducido» | Retirados o reducidos a lo que dice el art. 803 y lo que decida el tribunal | — |
| 9 | caucion_problema, sep_subalterno, fin_* | error | Cita literal recortada del art. 797.1; «audiencia al subalterno»; consecuencias de la impugnación inventadas | Texto del art. 797.1; arts. 800 y 805 sin añadidos | LEC |
| 10 | prov_concedida | estructura | Opción «No, pasar a rendición de cuentas» llevaba a enajenaciones | Respuestas coherentes | — |

Pasos retirados: `registro_decision`, `registro_propiedad`, `nombramiento`. Pasos reconectados: `caucion_pend`, `caucion_problema`.

## Corrección posterior (2026-10-31) · Decisión 17: instantánea del BOE corregida

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| E04 | Artículo 800 › impugnación; nota; tabla de plazos; ecosistema | «Contesta conforme a los arts. 404 y ss. (veinte días, art. 404.1), no al art. 438» (introducido en esta revisión: hallazgo 1) | Contesta conforme al art. 438 (por escrito, diez días, art. 438.1); las partes pueden pedir vista en sus escritos; juicio verbal. **El original estaba bien**: se deshace el hallazgo 1 |
| G04 | traslado_cuentadante, vista_check | Ídem (hallazgo 7 de la revisión G04) | Art. 438, diez días; vista a petición en los escritos (art. 800.4). Se deshace el hallazgo 7 |

Origen: la instantánea de la LEC guardaba, para este artículo, la versión del BOE de 1-10-2015 (LO 7/2015), construida sobre el texto anterior a la Ley 42/2015; la vigente es la de la Ley 42/2015. Detalle en `boe-correcciones.md`.

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| Conexión con art. 798: | Conexión con art. 798 LEC: |
| caudal (art. 798). | caudal (art. 798 LEC). |
| El art. 797.3 permite | El art. 797.3 LEC permite |
| Conexión con art. 803.3: | Conexión con art. 803.3 LEC: |
| venta de bienes del caudal (art. 803.3). | venta de bienes del caudal (art. 803.3 LEC). |

## Corrección posterior (2026-11-03) · Relectura, primera tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda1.md`, aplicados con el visto bueno del propietario.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E04 | Art. 801 › reparaciones ordinarias | **error** | «Facultad autónoma»: «podrá realizar»; «pueden realizarse» | «Deber»: «debe hacer»; «las hace directamente» | LEC 801.2 |
| E04 | Art. 798 › herencia no aceptada | se aparta | «todas las acciones… tanto activas como pasivas» | «las acciones que pudieran corresponder al difunto» | LEC 798 |
| E04 | Art. 799 › inspección | se aparta | «Cualquier parte del procedimiento de división judicial» | «La parte que lo pida» | LEC 799.3 |
| E04 | Art. 798 › herencia aceptada | sin fuente | «Exclusión» de actos de disposición y titulares dominicales | Retirado | LEC 798 |
| E04 | Art. 802 › nota | sin fuente | «providencia motivada», con finalidad añadida | «mediante providencia» | LEC 802.2, 208.1 |
| E04 | Art. 803 › resumen y regla | redacción | «principio de intangibilidad», «prohibición absoluta» | «regla general» | LEC 803.1 y 2 |
| E04 | «Normas» de las fichas 798, 799, 801, 802, 804 y 805 | forma | Incluían lo que no son normas | Solo normas; vacías en 799, 804 y 805 | — |
