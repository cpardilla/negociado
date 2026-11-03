# Revisión · E01 · LEC · Diligencias preliminares (arts. 256–263)

- **Recurso**: `data/esquemas/lec-diligencias-preliminares.js` (origen E01).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LEC consolidada a 07-10-2026 (`sources/boe/LEC.json`); CC a 07-09-2026; LOPJ a 09-10-2026; LSC, CCom, LCS, LPI, Ley 24/2015 (Patentes), Ley 3/1991 (Competencia Desleal), Ley 1/2019 (Secretos Empresariales) y CE en sus instantáneas de `sources/boe/`.
- **Método**: lectura completa de la ficha contra el texto vigente de los arts. 256–263 LEC (`node tools/dump.js esquema lec-diligencias-preliminares --ley`) y de **cada cita** contra la rúbrica y el texto del artículo citado (`node tools/dump.js citas esquema lec-diligencias-preliminares`).
- **Resultado del comprobador**: 0 errores, 0 avisos; 2 «revisar» de terminología que se mantienen a propósito (ver al final).

Tipos: **error** (contradice la ley o cita un artículo que no dice eso) · **desfasado** · **incompleto** · **estilo**.

## 1. Jurisprudencia no verificable — eliminada

El esquema citaba 9 sentencias del Tribunal Supremo y 3 del TJUE sin ningún dato que permitiera comprobarlas, y las del TJUE que pueden identificarse por su número **no corresponden** a lo que se les atribuía (C-427/07 no es un asunto «EGMA» sobre pruebas en propiedad intelectual; C-235/09 es un asunto de marca comunitaria, no «Abdida»). Al no poder verificar ninguna, se han retirado todas, con su texto, de las fichas, las notas, las «Normas» y el ecosistema normativo (2 bloques enteros). Criterio del plan (6.3): sin especulación presentada como norma.

| Cita retirada | Dónde estaba | Tipo |
|---|---|---|
| STS 146/2017, 234/2015, 89/2018 | 256.1.2º (límites) | error (no verificable) |
| STS 241/2015 | 256.1.4º | error (no verificable) |
| STS 563/2019, 89/2020, 112/2019, 345/2020 | 256.2–3 | error; además, «la caducidad opera de pleno derecho» contradice el art. 256.3 («sin justificación suficiente, **a juicio del tribunal**») |
| STS 315/2018 | 258.1 | error (no verificable) |
| STJUE C-427/07 «EGMA», C-524/21 «Nintendo», C-235/09 «Abdida» | 256.1.2º, 7º, 8º, 10º; 263; ecosistema | error (número y asunto no coinciden) |
| STC 159/2009 | 260.1 | error (no verificable) |

Si el propietario dispone de las referencias exactas, pueden reincorporarse con su ECLI.

## 2. Hallazgos y correcciones

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Cabecera | estilo | «40+ Conexiones normativas · 20+ Actores» (cifras escritas a mano) | «8 artículos · Tribunales de Instancia (LO 1/2025)» | — |
| 2 | 256.1.1º | desfasado | Curatela «que puede limitar la capacidad de obrar» | Curatela asistencial o, excepcionalmente, representativa (Ley 8/2021 suprime la limitación de capacidad) | arts. 249, 269 CC |
| 3 | 256.1.1º | error | Guarda de hecho y poderes preventivos en «arts. 249, 250 CC» | Poderes y mandatos preventivos arts. 256–262 CC; guarda de hecho arts. 263–267 CC | CC |
| 4 | 256.1.1º | error | Curatela «arts. 269–294 CC» | arts. 268–294 CC | CC |
| 5 | 256.1.1º | estilo | «autorización judicial para actos dispositivos del curador» (genérico) | Autorización judicial del curador representativo, art. 287 CC | art. 287 CC |
| 6 | 256.1.2º | error | «Exhibición de cosa mueble»; «no procede para inmuebles» | La ley dice «la cosa»; se explica por qué se aplica sobre todo a muebles y que el inmueble va por reconocimiento judicial / prueba anticipada | arts. 256.1.2º, 353, 293 LEC |
| 7 | 256.1.2º | error | «Art. 335 LEC (peritación de muebles)» | Retirado: el art. 335 es el objeto del dictamen de peritos | art. 335 LEC |
| 8 | 256.1.2º | error | «Directiva 2004/48/CE, art. 6» leído por la app como **art. 6 CE** | Redactado y corregido el analizador de citas (ver §3) | — |
| 9 | 256.1.3º | error | Normas «Arts. 762–763 LEC» | Retirado: son medidas cautelares en procesos de capacidad / competencia, sin relación | arts. 762–763 LEC |
| 10 | 256.1.3º | estilo | Legitimación pasiva «incluidos notarios o instituciones depositarias» | «cualquier persona que lo tenga en su poder; p. ej., otro coheredero o quien conserve un testamento ológrafo» | art. 256.1.3º LEC |
| 11 | 256.1.4º | error | Acción social de responsabilidad «art. 236 LSC» | arts. 238–240 LSC (el 236 son los presupuestos); acción individual, art. 241 LSC | LSC |
| 12 | 256.1.4º | error | Impugnación de acuerdos «arts. 204–211 LSC» | arts. 204–208 (209–211 son administración) | LSC |
| 13 | 256.1.4º | error | «El tribunal puede ordenar la revisión por auditor externo»; «no es necesaria participación mínima (a diferencia del derecho de información en junta)» | Retirado lo primero (sin base legal); lo segundo, «la ley no exige una participación mínima» | art. 256.1.4º LEC |
| 14 | 256.1.5º | error | Seguro «de responsabilidad civil **o de cualquier otra naturaleza**»; ejemplos de seguro de accidentes de trabajo y de vida | Solo el seguro de responsabilidad civil; retirados los dos ejemplos | art. 256.1.5º LEC |
| 15 | 256.1.5º | error | «art. 7 RDL 8/2004 (obligación de comunicar el seguro)» | Referencia genérica al seguro obligatorio del RDL 8/2004 | — |
| 16 | 256.1.5º bis | incompleto | «Ley 41/2002: regulación…»; medidas de «anonimización, seudonimización…» (sin base) | Arts. 15–18 Ley 41/2002 (art. 18, acceso); limitación a lo necesario (art. 258.1) y reserva de actuaciones | Ley 41/2002; art. 258.1 LEC |
| 17 | 256.1.6º | estilo | «Los representantes legales de asociaciones…» | Legitimados según el art. 11 LEC | art. 11 LEC |
| 18 | 256.1.7º | error | «Rasgos comunes» de 7º, 8º, 10º y 11º: todos excluyen al consumidor final y todos admiten **puerta cerrada** | Exclusión del consumidor final: solo 7º y 11º; 8º exige escala comercial; puerta cerrada solo en el 7º (art. 259.3); uso exclusivo y reserva, los cuatro (art. 259.4) | arts. 256.1, 259.3–4 LEC |
| 19 | 256.1.7º | error | Normas «LPI art. 139» (cese de la actividad ilícita) | LPI art. 138 (acciones y medidas) | LPI |
| 20 | 256.1.8º | error | «La enumeración de documentos es abierta» | Es cerrada: bancarios, financieros, comerciales o aduaneros, de un tiempo determinado | art. 256.1.8º LEC |
| 21 | 256.1.8º | desfasado | «testimonio del Secretario» | Letrado de la Administración de Justicia (el texto legal conserva «Secretario») | LO 7/2015 |
| 22 | 256.1.9º | error | Leyes especiales con artículos que no regulan diligencias: LPI 139–145, LM 43–51, LPAT 55–62, LCD 18–21, LSE 5–9, LA 23 (arbitraje: medidas cautelares, no diligencias) | Las que de verdad las regulan: **Ley 24/2015 arts. 123–126** (diligencias de comprobación de hechos), **Ley 3/1991 art. 36** (remite a Patentes), **Ley 1/2019 art. 17**; LPI y LM sin régimen propio; retirado el arbitraje | Instantáneas BOE de cada ley |
| 23 | 256.1.9º | desfasado | «Juzgados de lo Mercantil» | Sección de lo Mercantil del Tribunal de Instancia, art. 87.6 LOPJ | LO 1/2025 |
| 24 | 256.1.9º, ecosistema | error | Dir. 2016/943 «arts. 6–8: protección del secreto en el proceso» | arts. 6–15; confidencialidad en el proceso, art. 9 | Directiva (UE) 2016/943 |
| 25 | 256.1.10º | estilo | Sujetos: «prestadores que alojen o faciliten el acceso…» | Los que mantengan o hayan mantenido en los 12 últimos meses relación de servicio con el prestador a identificar | art. 256.1.10º LEC |
| 26 | 256.1.11º | error | «se excluyen las descargas privadas»; «usuarios menores» | Redacción de la ley: actos de meros consumidores finales de buena fe y sin ánimo de beneficio; volumen apreciable | art. 256.1.11º LEC |
| 27 | 256.2–3 | error | «Prueba anticipada (conexión arts. 427, 430, 498)»: «las diligencias pueden tramitarse como prueba anticipada», garantías del art. 427, «pleno valor probatorio» | Distinción: la prueba anticipada y el aseguramiento son otra institución (arts. 293–298); citación con 5 días (295.1); pierde valor si no se demanda en 2 meses (295.3); puede repetirse (295.4). Los arts. 427, 430 y 498 no tratan de esto | arts. 293–298 LEC |
| 28 | 256.2–3 | incompleto | Forma de la caución «art. 64.2 LEC» resumida | Párrafo segundo del art. 64.2, completo (entidad de crédito o SGR; inmediata disponibilidad a juicio del tribunal) | art. 64.2 LEC |
| 29 | 257.1 | desfasado | «Juzgado de Primera Instancia / de lo Mercantil», «art. 86 ter LOPJ» (suprimido) | Sección Civil / Sección de lo Mercantil del Tribunal de Instancia (art. 87.6 LOPJ) | LO 1/2025 |
| 30 | 257.1 | error | Domicilio de persona jurídica «art. 8.2 LEC»; empresario individual «art. 8.3 LEC» | Persona jurídica, art. 41 CC; retirado lo del empresario (el art. 8 LEC trata de otra cosa) | arts. 40–41 CC |
| 31 | 257.1 | error | «Inmuebles: juzgado de la situación del bien»; «conexidad objetiva, art. 53» | Retirado lo primero (sin base); lo segundo, como analogía con el art. 53.2 LEC, señalando que la ley no lo resuelve | arts. 257, 53.2 LEC |
| 32 | 257.1 | error | Nota: «Arts. 50, 60 LOPJ», «Arts. 8, 53, 63 LEC (domicilio, conexidad)» | Art. 87 LOPJ; arts. 40–41 CC; art. 53.2 LEC | — |
| 33 | 257.2 | error | Conflicto negativo resuelto «dentro de los 10 días siguientes» | Los 10 días del art. 60.3 son para el emplazamiento ante el tribunal designado, no para decidir: «por auto y sin ulterior recurso» | art. 60.3 LEC |
| 34 | 258.1 | error | «auto… (art. 209 LEC)»; «STS 315/2018 … proporcionalidad» | Motivación de los autos, art. 208.2 LEC | art. 208.2 LEC |
| 35 | 258.2 | error | Nulidad de actuaciones «art. 241 LEC» (costas) | art. 228 LEC y art. 241 LOPJ | arts. 228 LEC, 241 LOPJ |
| 36 | 258.3 | error | Caución en 3 días «desde la notificación del auto»; «plazo de caducidad» | Desde que **se dicte** el auto; plazo improrrogable (art. 134 LEC) | arts. 258.3, 134 LEC |
| 37 | 259.1 | error | Contenido de la citación inventado (identificación del LAJ, abogado y procurador…); cédula «art. 158 LEC»; «art. 14 LEC» (intervención provocada); «Ley 39/2015» | Contenido según los arts. 259–261; actos de comunicación arts. 152, 160–162, 164; obligación electrónica art. 273.3 LEC; retirada la Ley 39/2015 (procedimiento administrativo) | LEC |
| 38 | 259.2 | error | «La comparecencia del requerido es facultativa» | El requerido debe cumplir o oponerse en 5 días; si no, art. 261 | arts. 260–261 LEC |
| 39 | 259.3 | estilo | Ficha «Art. 259.3» con contenido del apartado 4 | «Art. 259.3–4»; puerta cerrada a solicitud de quien acredite interés legítimo | art. 259 LEC |
| 40 | 260 | error | Fichas «260.2 — injustificada» y «260.3 — justificada» | Son los apartados **3** y **4**; el 2 (resolución tras la vista) se incorpora a la ficha 260.1 | art. 260 LEC |
| 41 | 260.1 | error | Sigilo sacramental «art. 416.2 LEC» (el art. 416 LEC trata de las cuestiones procesales en la audiencia previa); STC 159/2009; STEDH Goodwin | Retirados; se mantienen abogados (art. 542.3 LOPJ), sanitarios, periodistas (art. 20.1.d CE) y ministros de culto | — |
| 42 | 260.1 | error | «Ley 42/2015 reforzó los mecanismos de oposición… y amplió los motivos» | La ley no enumera motivos; la Ley 42/2015 dio la redacción vigente de los arts. 259 y 260 (comprobado en las notas de versión del BOE) | BOE, notas de versión |
| 43 | 260.1 | error | «Falta de competencia» como motivo de oposición | No cabe declinatoria; el tribunal la controla de oficio (art. 257.2) | art. 257.2 LEC |
| 44 | 261 | estilo | «el tribunal acordarán» | «acordará» | — |
| 45 | 261 | error | «Art. 217.7 LEC: valoración de la negativa como indicio»; «inversión de la carga de la prueba» | 217.7: disponibilidad y facilidad probatoria; la 4ª medida es facultativa («se podrán tener por ciertos») | arts. 217.7, 261 LEC |
| 46 | 262 | error | Normas «Art. 1902 CC» | Retirado (sin relación con la aplicación de la caución) | — |
| 47 | 263 | error | «sin perjuicio de las leyes especiales sobre propiedad intelectual, competencia, marcas, patentes, secretos empresariales y arbitraje» | Texto real: para las diligencias del 256.1.9º, la LEC se aplica en lo que no se oponga a la ley especial; ejemplos verificados | art. 263 LEC |
| 48 | Plazos | error | Filas «saneamiento por vicios ocultos (art. 1490 CC)» y «garantía de consumo (Ley 7/2022), 3 años» | Retiradas: ajenas a las diligencias; además, la Ley 7/2022 es de residuos (la garantía de 3 años vino del RDL 7/2021) | — |
| 49 | Plazos | error | Caución «tras auto concediendo»; oposición sin dies a quo | «desde que se dicta el auto»; «desde que recibe la citación» | arts. 258.3, 260.1 |
| 50 | Actores | error / desfasado | Juzgado de 1ª Instancia y de lo Mercantil (86 ter LOPJ); «Perito judicial de lista (art. 341)»; «Notario (art. 178 RN)»; «sigilo sacramental (art. 416.2 LEC)»; «administrador requerido para rendir cuentas (236 LSC)»; «certificaciones … LH art. 34» (fe pública registral) | Secciones del Tribunal de Instancia (art. 87 LOPJ); experto del solicitante a su costa (259.2); notario sin artículo; ministro de culto; administrador posible demandado (236–241 LSC); publicidad registral arts. 221–227 LH | — |
| 51 | Ecosistema | error | «Arts. 394–410, 427, 430, 498, 721–738 LEC» | arts. 293–298, 394–398 y 721–747 | LEC |
| 52 | Ecosistema | error | TRLGDCU «arts. 114–127 … reformado por Ley 7/2022 (garantía de 3 años) … productos defectuosos» | Su relación real con el esquema: el núm. 6º (intereses colectivos de consumidores) | — |
| 53 | Ecosistema | error | Ley 1/2019 «arts. 5–9» (cotitularidad, licencias…) | Acciones (8–11) y normas procesales (12–25): art. 15 confidencialidad, art. 17 diligencias | Ley 1/2019 |

## 3. Cambio en la herramienta común

El analizador de citas (`assets/js/core/citas.js`, compartido por la app y el comprobador) leía «Dir. 2004/48/CE art. 6» como **art. 6 de la Constitución** y «art. 9 RGPD» como **art. 9 LEC**: la app enlazaba esos artículos. Ahora reconoce las normas de la UE completas (Directiva/Dir. con su número, Reglamento (UE/CE) n/aaaa, RGPD, DSA…) y exige que el nombre de una ley empiece palabra. Tests añadidos en `tests/tools.test.js`. Afecta a todos los recursos: se regeneraron las leyes citadas y el índice.

## 4. Terminología que se mantiene a propósito

- «incapacitación»: en la nota de la Ley 8/2021, que explica precisamente que **se suprimió**.
- «Juzgado de Primera Instancia»: en el mapa de actores, «Tribunal de Instancia, Sección Civil (antes Juzgado de Primera Instancia)», y en 257.2 para advertir de que el texto legal conserva esa denominación.

## 5. Pendiente para la guía G01 (fase 5)

El comprobador marca en la guía de diligencias preliminares 6 avisos y 10 «revisar» de citas, 1 plazo y 4 citas literales; se revisarán en su turno con lo aprendido aquí (en particular, el cómputo de la caución desde que se dicta el auto y la numeración de los apartados del art. 260).

---

# Revisión · G01 · Guía de tramitación de las diligencias preliminares

- **Recurso**: `data/guias/lec-diligencias-preliminares.js` (origen G01).
- **Fecha de revisión**: 2026-10-30. **Corte del BOE**: LEC a 07-10-2026.
- **Método**: fase 5 (ROADMAP): mismo método que los esquemas, más pasos que faltan o sobran (criterio 6.3). Se conserva el recorrido y las direcciones de los pasos que siguen teniendo sentido; cada paso se rehace con el texto de los arts. 256–263 LEC (ya revisados en E01).
- **Resultado del comprobador**: 0 hallazgos (citas, plazos y grafo: sin huérfanos ni pasos sin salida). 51 pasos.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | inicio, solicitud_formal | **error** | Gastos a cargo del solicitante «art. 256.4» y pérdida de la caución «art. 256.5» | Art. 256.3 (el 256 tiene tres apartados) | LEC |
| 2 | inicio, det_256_1_1, det_256_1_2, solicitud_formal | **error** | Citas literales inventadas («Toda persona que se considere con derecho…», «Que exhiba la cosa mueble…», «Las diligencias preliminares se solicitarán al Juez mediante escrito…») | Texto literal del art. 256 o paráfrasis sin comillas | LEC |
| 3 | recurso_apelacion | **error** | «Plazo de apelación: 5 días (art. 459 LEC)»; «art. 258.4» | Veinte días (art. 458.1 LEC); el recurso está en el art. 258.2 | LEC |
| 4 | caucion_plazo, auto_admision | **error** | Caución «art. 258.5»; irrecurribilidad «art. 258.3» | Arts. 258.3 y 258.2 respectivamente | LEC |
| 5 | citacion, det_256_1_7, practica | **error** | Uso exclusivo «art. 259.5»; carácter reservado «art. 259.6»; puerta cerrada «art. 259.4»; experto «art. 259.3» | Arts. 259.4, 259.4, 259.3 y 259.2 | LEC |
| 6 | resolucion_oposicion, op_* | **error** | Arts. «260.5-7»; «causas de oposición a) b) c) d)»; «si el solicitante no impugna, se entiende que acepta»; «resolución en 5 días tras la vista» | Arts. 260.3 (injustificada, sin recurso) y 260.4 (justificada, apelable); lo demás, retirado (no está en la ley) | LEC |
| 7 | negativa_tipo, medida_* | **error** | Medidas del «art. 261.1.1º…5º» mal asignadas (cosa y documentos juntos; 6.º y 5.º bis mezclados; sin la medida 3.ª) | Cinco salidas según el art. 261 (1.ª a 5.ª), con la medida 3.ª (cosa) añadida | LEC |
| 8 | medida_5 | error | «Art. 556 CP: prisión de 3 meses a 1 año» | «Responsabilidad penal por desobediencia» (lo que dice el art. 261.5.ª), sin pena no comprobada | LEC |
| 9 | caucion_final | error | Apelable «art. 262.2»; remanente «art. 262.3» | Arts. 262.1, párrafo segundo, y 262.2 | LEC |
| 10 | perdida_caucion | **error** | «La pérdida es automática y no requiere resolución» | Se pierde si no se demanda «sin justificación suficiente, a juicio del tribunal» (art. 256.3) | LEC |
| 11 | det_256_1_* | error | 2.º «cosa mueble»; 3.º solo testamento cerrado u ológrafo; 5.º «ampliado por la Ley 20/2015 a la mera información»; 7.º con el principio de prueba del 8.º; 10.º «datos de registros públicos» | Contenido de cada número según el art. 256.1 | LEC |
| 12 | fin_denegacion_definitiva, archivo_definitivo | error | «Cabría casación (art. 477)»; «contra el decreto de archivo no cabe recurso» | Retirados (sin base) | — |
| 13 | grafo | estructura | Dos controles de admisión duplicados (verificar_presupuestos y resolucion_fondo); paso de «nuevas diligencias» en mitad del recorrido; pregunta de op_justificada con dos respuestas al mismo destino; diligencias practicadas como final sin pasar por la caución | Un solo control (art. 258.1); las nuevas diligencias, como nota de la competencia especial; op_justificada sigue directo; practicadas → aplicación de la caución (art. 262.1) → plazo de la demanda | LEC |
| 14 | comp_general | desfasado | Juzgado de Primera Instancia o de lo Mercantil | Hoy, Sección Civil o de lo Mercantil del Tribunal de Instancia | LO 1/2025 |

Pasos retirados: `verificar_presupuestos`, `fin_no_admision`, `nuevas_diligencias`. Paso nuevo: `medida_3`. Una dirección guardada que apunte a un paso retirado lleva al paso guardado (comportamiento de la app ya probado).

## Corrección posterior (2026-11-01) · Decisión 20: en competencia, la LEC antes que el CC

Corte del BOE: LEC a 07-10-2026; CC a 07-09-2026.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E01 | Art. 257.1 › Determinación del domicilio (persona física) | **error** | «Domicilio habitual (art. 40 CC); en su defecto, lugar de última residencia»: el art. 40 CC habla de residencia habitual y no contiene esa regla subsidiaria | Fuero de los arts. 50.1 y 50.2 LEC; el art. 40 CC, solo para definir el domicilio | LEC 50; CC 40 |
| E01 | Ídem (persona jurídica) | incompleto | Solo el art. 41 CC | Art. 51.1 LEC y, para definir el domicilio, art. 41 CC | LEC 51.1; CC 41 |
| E01 | Conexiones normativas y «Normas» de la ficha | orden | CC antes que LEC | Arts. 50 y 51 LEC, art. 53.2 LEC y después arts. 40 y 41 CC | Decisión 20 |
| G01 | comp_general | incompleto | Sin decir cómo se determina el domicilio | Nota con los arts. 50 y 51.1 LEC y 40 y 41 CC | LEC 50, 51; CC 40, 41 |

**Sin incorporar, pendiente del propietario**: si en las diligencias preliminares valen también los fueros adicionales del art. 50.3 LEC (empresarios y profesionales), del art. 51.1, segundo inciso, LEC (lugar de la relación jurídica con establecimiento o representante) y del art. 51.2 LEC (entes sin personalidad), dado que el art. 257.1 se refiere solo al domicilio de quien ha de intervenir.

**Respuesta del propietario (2026-11-01)**: los fueros adicionales de los arts. 50.3, 51.1, segundo inciso, y 51.2 LEC no se incorporan a E01: el art. 257.1 se refiere solo al domicilio de quien ha de intervenir. Del art. 50.2 LEC se mantiene la expresión legal «domicilio del actor».

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| núms. 10º y 11º del art. 256.1; la Ley 42/2015 dio la redacción vigente de los arts. 259 y 260. | núms. 10º y 11º del art. 256.1 LEC; la Ley 42/2015 dio la redacción vigente de los arts. 259 y 260 LEC. |

## Corrección posterior (2026-11-03) · Art. 5.3 LO 1/2025

Corte del BOE: LO 1/2025 a 09-07-2026. A petición del propietario.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E01 | Art. 256.2–3 › Contenido de la solicitud | incompleto | Sin mencionarlo | Línea: no hace falta el trámite previo; referencia añadida | LO 1/2025 art. 5.3 |
| G01 | inicio; pie | incompleto | Sin mencionarlo | Nota con la misma regla; precepto en el pie | LO 1/2025 art. 5.3 |

## Corrección posterior (2026-11-03) · Citas de la Ley 1/2019

Ecosistema normativo › Secretos empresariales: la mención de la Directiva pasa a su propia línea, y las citas de los arts. 8–11, 12–25, 15 y 17 enlazan a la Ley 1/2019. Sin cambio de fondo.

## Corrección posterior (2026-11-03) · Relectura

Corte del BOE: descarga del 2026-11-03. Hallazgos de la relectura (`relectura-2026-11-03.md`), aplicados con el visto bueno del propietario.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E01 | Art. 261 › 1.ª | **error** | «se tendrán por respondidas» | «se podrán tener por respondidas» | LEC 261.1.ª |
| E01 | Art. 256.1.7º | **error** | «el precio pagado o por el que se ofrecieron» | «las satisfechas como precio»; añadido «fabricadas» | LEC 256.1.7.º c) |
| E01 | Art. 256.1.4º › legitimación | sin fuente | Participación «directa o indirecta»; herederos sin inscribir | «El socio o comunero» | LEC 256.1.4.º |
| E01 | Art. 262 | sin fuente | «5 días desde que se cumplan los presupuestos» | «5 días» | LEC 262.1 |
| E01 | Art. 257; art. 260 | sin fuente | «suele aplicarse por analogía»; «habituales en la práctica» | «cf. … art. 53.2 LEC»; «orientativos» | Decisión 24 |
| G01 | negativa_tipo | incompleto | Sin salida para los núms. 9.º a 11.º | Paso `medida_otras` | LEC 261, 263 |
| G01 | conflicto_competencia | incompleto | Sin salida si el tribunal indicado acepta | Paso `fin_abstencion` | LEC 257.2 |

## Normas no cotejadas (2026-11-03)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 2 | Esquema, art. 256.1.5.º bis | «Remisión expresa a la Ley 41/2002» | La LEC dice «la ley»; esa ley es hoy la 41/2002 | LEC 256.1.5.º bis |
| 10 | Esquema, negativa | «delito de desobediencia» | «desobediencia grave» | CP 556.1 |
