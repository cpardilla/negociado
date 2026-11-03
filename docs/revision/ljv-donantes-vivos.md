# Revisión · E21 · LJV · Extracción de órganos de donantes vivos (arts. 78–80)

- **Recurso**: `data/esquemas/ljv-donantes-vivos.js` (origen E21).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; Ley 30/1979 (`LTO`), RD 1723/2012 (`RDTO`) y LOPJ en sus instantáneas.
- **Método**: como E01–E20; decisiones 9, 10 y 11. **Rehecho en forma compacta**: las fichas de los arts. 78–80 eran fieles; se corrigen atribuciones, se retiran las dos fichas de «conexiones» (con errores y normas ajenas) y se añade una ficha de requisitos del donante con su base exacta.
- **Resultado del comprobador**: 0 hallazgos en el esquema.

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 80, plazos | **error** | Plazo de 24 horas entre la firma y la extracción atribuido al «art. 80 LJV · art. 4 Ley 30/1979 · art. 8 RD 1723/2012» | Solo el art. 8.6 RD 1723/2012 (que añade: revocación sin formalidad ni indemnización) | RD 1723/2012 |
| 2 | Conexiones | **error** | «Capítulo IX (arts. 76 y 77): autorización judicial del reconocimiento de la filiación no matrimonial» | Retirado: el Capítulo IX es la ausencia y el fallecimiento | LJV |
| 3 | Conexiones | **error** | Rúbricas de la LJV equivocadas: «art. 17. Solicitud», «art. 19. Decreto o auto», «art. 3. Postulación … para expedientes de escasa complejidad» | Retiradas (el art. 17 es la admisión y citación; el art. 19, la decisión; el art. 3 no dice eso) | LJV |
| 4 | 79 | **error** | El receptor puede intervenir como interesado (arts. 3 y 17 LJV); el LAJ «ha de estar presente» | Retirado: la ley no lo prevé y el art. 4 d) Ley 30/1979 garantiza el anonimato del receptor | Ley 30/1979 |
| 5 | Conexiones | error | «DA 1.ª LO 1/2025: atribuye la competencia a la Sección Civil»; «antes era competente el Juez encargado del Registro Civil» | Sin comprobar: retirado; Sección Civil por el art. 86.5 j) LOPJ (decisión 11) | LOPJ |
| 6 | Conexiones | error | Directiva 2010/45/UE («inspira la intervención judicial»), Convenio de Oviedo, Código Penal, Ley 14/1986, Ley 41/2002, LOPDGDD | Retirados (decisión 9) | — |
| 7 | Requisitos | incompleto | Sin el informe del Comité de Ética, el médico certificante distinto, los condicionamientos que excluyen la donación ni la firma previa obligatoria | Añadidos (art. 8.2, 8.3 RD 1723/2012; art. 4 c) Ley 30/1979) | RD 1723/2012, Ley 30/1979 |
| 8 | 78 | desfasado | Juez de Primera Instancia | Sección Civil del Tribunal de Instancia (art. 86.5 j) LOPJ; decisión 11) | LOPJ |

## Para la fase 5 (G18)

La guía dice «Juzgado de Primera Instancia» en un paso; revisar además si atribuye el plazo de 24 horas a la LJV.

---

# Revisión · G18 · Guía de tramitación de la extracción de órganos de donantes vivos

- **Recurso**: `data/guias/ljv-donantes-vivos.js` (origen G18).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; Ley 30/1979 (LTO), RD 1723/2012 (RDTO), CP y LOPJ en sus instantáneas.
- **Método**: fase 5. Se conservan los 28 pasos y sus identificadores; se corrigen las fuentes y los bloques erróneos.
- **Resultado del comprobador**: sin hallazgos (antes, 1 «revisar» de terminología). **Plazo de 24 horas** (pendiente en el ROADMAP): comprobado; está en el art. 8.6 RD 1723/2012, no en la Ley 30/1979.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | citacion_comparecencia | **error** | «El receptor podrá intervenir como persona con interés legítimo (arts. 3 y 17 LJV)» | El receptor no es parte: la ley garantiza su anonimato | Ley 30/1979 art. 4 d) |
| 2 | documento_cesion_firmado, plazo_reflexion, fin_revocacion | error | Veinticuatro horas «conforme a la Ley 30/1979 y el RD»; la revocación «no produce efecto jurídico adverso» | Art. 8.6 RD 1723/2012; la revocación no puede dar lugar a indemnización alguna | RD 1723/2012 8.6 |
| 3 | requerir_subsanacion, fin_solicitud_incompleta | error | Plazo «el que fije el LAJ»; archivo directo | Cinco días; como decide el Juez, el LAJ le da cuenta (art. 16.4) | LJV 16.4 |
| 4 | requisitos_donante, requisitos_especificos_ok, fin_certificado_no_adjunto | incompleto | Sin destino a persona determinada ni anonimato; sin informe del Comité de Ética; certificado por «profesional competente» | Lista completa de los arts. 4 Ley 30/1979 y 8.1 y 2 RD 1723/2012 (incluidos el Comité de Ética y la exclusión por condicionamiento); certificado de médico distinto de los que extraen y trasplantan, con su contenido (art. 8.3) | Ley 30/1979 4; RD 8 |
| 5 | competencia_objetiva | desfasado | «Novedad: deja de ser competente el Juez encargado del Registro Civil»; «LO 1/2025, DA 1.ª» | Juez de Primera Instancia (art. 78.2 LJV; art. 8.4 RD); hoy Sección Civil, por la excepción del art. 86.5 j) LOPJ (decisión 11) | LJV 78.2; LOPJ 86.5 |
| 6 | competencia_territorial | impreciso | «Partido judicial» | «Localidad» de la extracción o el trasplante, como dice la ley | LJV 78.2 |
| 7 | fin_incompetencia_* | error | «Indicar al solicitante que se dirija» al competente | El LAJ da cuenta al Juez, que, oídos el Fiscal y el solicitante, resuelve e indica el órgano competente o remite (art. 16.2 y 3) | LJV 16 |
| 8 | verificar_oposicion, resolucion_conceder | impreciso | «Dudas razonables» | Basta la duda sobre el consentimiento para oponerse «eficazmente» (art. 8.5 RD); sin la firma previa del documento no hay extracción | LJV 80; RD 8.5; Ley 30/1979 4 c) |
| 9 | fin_denegacion, fin_oposicion | impreciso | «Recurso conforme al art. 20»; «el expediente puede reanudarse» | Apelación (art. 20.2); nuevo expediente si cambian las circunstancias (art. 19.3) | LJV 19.3, 20.2 |
| 10 | fin_consentimiento_invalido, fin_exito | impreciso | «Ley 30/1979, arts. 1 y 4»; «Código Penal» | Arts. 2 y 4; art. 156 bis CP; centros autorizados y asistencia al donante (art. 8.7 y 8 RD) | Ley 30/1979; CP 156 bis; RD 8 |
| 11 | inicio_donante, actores, pie | forma | «Vía habitual»; «Letrado AJ», «Ambos» | Quitado; nombres completos; pie con las normas citadas | — |

## Corrección posterior (2026-11-03) · Relectura, octava tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda8.md`, aplicados con el visto bueno del propietario.

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 9 | requisitos_especificos_ok; se suprime fin_certificado_no_adjunto | Fin directo sin certificado | Subsanación | LJV 16.4 |
| 10 | citacion_comparecencia, desarrollo_comparecencia; nuevo fin_incomparecencia | Sin plazos, donante ni salida | Añadidos | LJV 13, 17.3, 18.1, 18.2.1.ª, 79.3 |
| 11 | fin_incompetencia_*, fin_solicitud_incompleta | Actor LAJ | Juez | LJV 16 |
| 12 y 14 | requisitos_donante | Sin posibilidades de éxito ni quién decide | Añadidos | RD 1723/2012, art. 8.2; LJV 17.1 |
| 13 | inicio, fin_oposicion, fin_consentimiento_invalido, fin_revocacion | Glosas sin fuente | Suprimidas | Sin fuente |

## Normas no cotejadas (2026-11-03)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 7 | Guía (3 lugares) | «Directiva 2010/45/UE» | «Directiva 2010/53/UE» | RD 1723/2012, preámbulo |
| 8 | Guía | «ante una instancia oficial» | «ante una autoridad» | Convenio de Oviedo, art. 19.2 |
