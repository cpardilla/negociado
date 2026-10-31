# Revisión · E09 · LJV · Mención registral del sexo de personas de 12 a 14 años (arts. 26 bis–26 quinquies)

- **Recurso**: `data/esquemas/ljv-mencion-sexo-12-14.js` (origen E09).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (Capítulo I bis vigente desde el 02-03-2023, Ley 4/2023); Ley 4/2023 (`LTRANS`), CC y LRC en sus instantáneas.
- **Método**: como E01–E08; decisiones 9 y 10. El esquema seguía bien la LJV: **corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal «Juzgado de Primera Instancia» con su equivalencia).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 26 quinquies, ecosistema | **error** | «La Ley Trans permite la reversión de la rectificación, pero solo una vez» | El art. 47 Ley 4/2023 dice otra cosa: a los seis meses puede recuperarse la mención anterior por el procedimiento registral (párrafo primero); una nueva rectificación posterior exige el procedimiento judicial del Capítulo I ter (párrafo segundo) | Ley 4/2023, art. 47 |
| 2 | 26 ter | error | Postulación preceptiva desde la oposición «art. 3.2, párrafo tercero» (no existe); la no preceptividad presentada como «excepción a la regla general del art. 3.2» | Art. 3.2, párrafo segundo; la no preceptividad la establece el art. 26 ter.4 (la regla general del art. 3.2 ya es que solo se exige cuando la ley lo prevé) | LJV |
| 3 | Marco | error | Tramos de edad sin fundamento y «mayores de 16 años **o emancipados**»; menores de 12 «sin capacidad» | Tramos del art. 43 Ley 4/2023 (16 años, 14–16 asistidos, 12–14 por el Capítulo I bis); para los menores de 12 la ley no prevé la rectificación del sexo, sí el cambio de nombre (art. 48) | Ley 4/2023, arts. 43 y 48 |
| 4 | 26 quinquies | error | Inscripción con «valor de prueba plena (Ley 20/2011)… oponible frente a terceros» | Efectos constitutivos desde la inscripción (art. 46.1 Ley 4/2023); dato de publicidad restringida (art. 83 LRC) | Ley 4/2023, LRC |
| 5 | Ecosistema | error | «Art. 154 CC: desacuerdo como ejercicio discorde» | El desacuerdo de los progenitores es el art. 156 CC; el art. 162 CC, bien descrito (derechos de la personalidad) | CC |
| 6 | 26 quinquies, ecosistema | estilo | OMS, Consejo de Europa, Parlamento Europeo, Principios de Yogyakarta; normas de la CE, el CEDH y la Carta de la UE | Retirados (decisión 9); se cita el art. 44.3 Ley 4/2023, que generaliza la prohibición de condicionantes | — |
| 7 | Varios | desfasado | «Juez de Primera Instancia» | Sección Civil del Tribunal de Instancia | LO 1/2025 |

## Herramienta común (commits propios)

El analizador de citas reconoce «, párrafo segundo,» entre el artículo y la ley y el nombre completo de la Ley 4/2023 («artículo 47, párrafo segundo, de la Ley para la igualdad real…» se enlazaba al art. 47 LJV).

## Corrección posterior (2026-10-29)

Competencia: donde exista, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia, con carácter exclusivo y excluyente (art. 86.5 LOPJ); si no, la Sección Civil. Detectado al revisar E13 (véase `ljv-adopcion.md`).

---

# Revisión · G07 · Guía de tramitación de la modificación de la mención registral del sexo (12 a 14 años)

- **Recurso**: `data/guias/ljv-mencion-sexo-12-14.js` (origen G07).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; Ley 4/2023 (`LTRANS`); LOPJ.
- **Método**: fase 5. La guía seguía bien los arts. 26 bis–26 quinquies LJV; correcciones puntuales sin tocar el recorrido.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 3 avisos y 2 «revisar»); se mantiene la denominación legal «Juzgado de Primera Instancia», con la sección actual indicada al inicio.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | testimonio, inscripcion, fin_exitoso | **error** | Remisión al Registro Civil «art. 26 quinquies.3» | Art. 26 quinquies.2 (el artículo tiene dos apartados) | LJV |
| 2 | fin_exitoso | **error** | «La reversión solo puede hacerse una vez (art. 47.2 Ley 4/2023)» | Art. 47 Ley 4/2023: tras seis meses desde la inscripción, por el mismo procedimiento; una nueva rectificación posterior va por el Capítulo I ter LJV | LTRANS |
| 3 | edad_check, fin_edad_incorrecta | error | Mayores de 16 «o emancipados» | Art. 43 Ley 4/2023: mayores de dieciséis por sí mismos; de catorce a dieciséis asistidos; doce a catorce, este expediente | LTRANS |
| 4 | repr_desacuerdo | **error** | «Mientras se nombra defensor, el Ministerio Fiscal asume la representación del menor (art. 29 LJV)»; «se suspenden los plazos de prescripción»; «no se requiere habilitación previa (art. 27.3)» | Retirado: el art. 29 LJV prevé esa representación solo si el menor es demandado o queda sin representación procesal, y la suspensión se refiere a la acción para la que se pide la habilitación | LJV |
| 5 | postulacion_info, recurso_apelacion | error | Art. 3.2 «párrafo 2.º» y «párrafo 3.º» | Párrafo primero (actuación voluntaria) y segundo (recursos y oposición) | LJV |
| 6 | domicilio_ok, inicio | error | «Competencia de orden público, no saneable»; «el Juez dirige el expediente» | Remisión al competente (art. 16.3 LJV); decide el Juez (art. 2.3); hoy Sección de Familia, Infancia y Capacidad o Sección Civil | LJV, LOPJ |
| 7 | subsanacion, admision_auto | error | Subsanación «arts. 231 y ss. LEC»; «auto de admisión» | Cinco días (art. 16.4 LJV); admisión sin forma impuesta | LJV |
| 8 | testimonio, inscripcion | error | «Registro de la inscripción de nacimiento»; «prueba plena y oponibilidad» | «Registro Civil competente» (art. 26 quinquies.2); lo demás, retirado | LJV |
| 9 | concesion, audiencia_menor, deliberacion, recurso_apelacion | error | OMS, Principios de Yogyakarta, CEDH, CE, CDN, CDPD; interés superior «prevalente»; «el expediente queda en suspenso durante la apelación» | Retirados (decisión 9); la apelación no tiene efectos suspensivos (art. 20.2 LJV) | LJV |
| 10 | Varios | desfasado | «Secretario judicial», «JPI» | Letrado de la Administración de Justicia; Juzgado de Primera Instancia | LO 7/2015 |
