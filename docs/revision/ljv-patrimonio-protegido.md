# Revisión · E17 · LJV · Patrimonio protegido de las personas con discapacidad (arts. 56–58)

- **Recurso**: `data/esquemas/ljv-patrimonio-protegido.js` (origen E17).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; Ley 41/2003 (`LPPD`, redacción de la Ley 8/2021), CC, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E16; decisiones 9 y 10. **Rehecho**: el esquema reproducía bien los tres artículos de la LJV, pero los desarrollaba con muchas afirmaciones sin base legal y con referencias a la Ley 41/2003 que no corresponden.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 57).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 58, plazos | **error** | Apelación «en 20 días, art. 457 LEC» (sin contenido) | Art. 458 LEC | LEC |
| 2 | 58 | error | «Posibilidad de casación…»; «modelo de solicitud aprobado por Orden ministerial»; «documentación anexa preceptiva: certificado de discapacidad, informe médico…»; «inscripción con eficacia erga omnes»; «plazo de inscripción recomendado» | Retirados: no están en la ley | — |
| 3 | 56 | error | «Ley 41/2003, art. 5: a falta de designación, administra el beneficiario si tuviera capacidad suficiente; subsidiariamente, quien ejerza la representación legal» | Art. 5.6: si no puede designarse conforme al título, el juez provee a solicitud del Fiscal; art. 5.5: no pueden ser administradores quienes no puedan ser curadores | Ley 41/2003 |
| 4 | 56 | error | «Art. 5.3: sustitución del administrador por fallecimiento, incapacidad, renuncia…» | El art. 5.3 regula la excepción de la autorización judicial; la sustitución, a instancia del Fiscal, está en el art. 7.1 | Ley 41/2003 |
| 5 | 56 | error | «Art. 6: extinción por fallecimiento, desaparición de la discapacidad o decisión judicial; el remanente se destina a entidades de utilidad social» | Art. 6.1: muerte o declaración de fallecimiento, o dejar de tener la condición de persona con discapacidad del art. 2.2 (lo demás, retirado) | Ley 41/2003 |
| 6 | 56 | incompleto | Sin advertir la diferencia de redacción | El art. 56 a) LJV conserva «progenitores, tutor o curador»; la Ley 41/2003 (art. 3.2, Ley 8/2021) habla de la persona encargada de prestar el apoyo | LJV, Ley 41/2003 |
| 7 | 57 | error | «Art. 3 LJV: los interesados pueden comparecer representados por persona de confianza, salvo que el Juez lo estime necesario por complejidad»; «art. 50 LEC: domicilio» | Retirados (el art. 3 LJV no dice eso; el art. 50 LEC es el fuero de las personas físicas) | LJV, LEC |
| 8 | Plazos | error | «Revisión de medidas de apoyo, máx. 3 años, art. 269 CC» | Retirado: no es de este expediente (y la revisión trienal está en el art. 268 CC); se añaden la rendición anual de cuentas al Fiscal (art. 7.2 Ley 41/2003) y los plazos comunes | CC, Ley 41/2003 |
| 9 | Participantes | error | «Fiscal de circunscripción», «Fiscal de Personas con Discapacidad», «Registro Mercantil»; «órgano de fiscalización independiente» | Lo que prevén la ley y el art. 58.5 LJV; la Comisión de Protección Patrimonial (art. 7.3 Ley 41/2003), bien descrita | Ley 41/2003 |
| 10 | Ecosistema | error | «Ley 20/2011, arts. 58 y 72»; «LH arts. 2 y 18»; CC «arts. 269–270: facultades del curador»; marcas de origen sueltas («[[14]]», «[[50]]»…) | Retirados o corregidos; constancia registral según el art. 8 Ley 41/2003 | — |
| 11 | 57 | desfasado | Juzgado de Primera Instancia | Sección de Familia, Infancia y Capacidad (art. 86.5 LOPJ) | LO 1/2025 |
| 12 | — | incompleto | Sin el régimen sustantivo resumido | Ficha con los arts. 1–8 de la Ley 41/2003 (beneficiarios, constitución, administración, extinción, supervisión) | Ley 41/2003 |

---

# Revisión · G14 · Guía de tramitación de la protección del patrimonio de las personas con discapacidad

- **Recurso**: `data/guias/ljv-patrimonio-protegido.js` (origen G14).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; Ley 41/2003 (LPPD), CC, LEC, LRC y LOPJ en sus instantáneas.
- **Método**: fase 5. El recorrido (25 pasos) sigue bien los arts. 56 a 58 LJV y se conserva con sus identificadores; los bloques de casi todos los pasos se han reescrito desde el texto vigente, porque mezclaban la ley con criterios y requisitos inventados.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 1 error, 1 aviso y 2 «revisar»); queda la denominación legal «Juzgado de Primera Instancia» (art. 57.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | supuestos_art56, cautelares | **error** | «Art. 56.2-5», «art. 56.5 in fine» (el art. 56 tiene un solo apartado) | Art. 56 a) a d) | LJV 56 |
| 2 | recursos, recurso_pendiente | **error** | Apelación por el «art. 457 LEC» (derogado); casación o infracción procesal «en supuestos de especial trascendencia» | Veinte días ante la Audiencia (art. 458 LEC); traslado de oposición (art. 461); efectos suspensivos salvo nombramiento de administrador (art. 58.4); quitado lo de la casación | LJV 58.4; LEC 458, 461 |
| 3 | fin_exitoso | **error** | «Revisión periódica de medidas de apoyo: máximo cada 3 años (art. 269 CC)» | Quitado (no es del patrimonio protegido; y es el art. 268); rendición anual al Fiscal (art. 7.2 LPPD); destino de los bienes (art. 5.4) | LPPD 5.4, 7.2 |
| 4 | inscripcion, inscripcion_registrables | error | «Ley 20/2011 arts. 58 y 72»; «Registro Mercantil»; «eficacia erga omnes»; «protocolos de interoperabilidad»; «se recomienda inscripción inmediata» | Registro Civil si el administrador no es el beneficiario (art. 58.5), en el registro individual (art. 76 LRC); testimonio a la parte para los registros de bienes; gestoras de IIC y sociedades mercantiles | LJV 58.5; LRC 76 |
| 5 | supuesto_a | desfasado | Negativa de «progenitores, tutor o curador»; criterio «interés superior y autonomía» | Negativa de quien debe prestar apoyo (art. 3.2 LPPD tras la Ley 8/2021; el art. 56 a) LJV conserva la redacción antigua); voluntad, deseos y preferencias; el que se negó no puede ser administrador salvo justa causa | LPPD 3.2 |
| 6 | supuesto_b | inventado | Causas «fallecimiento, incapacidad, renuncia, conflicto de intereses o incumplimiento grave»; facultades del administrador | Cuando no pueda designarse conforme al título (art. 5.6 LPPD); inhabilidades del curador (art. 5.5); sin subasta y gasto para necesidades vitales (art. 5.2) | LPPD 5 |
| 7 | supuesto_c, supuesto_d | error | «Art. 5.2» para las exenciones con criterios propios; rendición de cuentas «que el Fiscal puede solicitar» | Art. 5.3 y sus criterios; rendición anual en todo caso (art. 7.2); causas de extinción (art. 6) | LPPD 5.3, 6, 7 |
| 8 | competencia, fin_incompetencia | error | «LEC art. 50»; «residencia habitual o último domicilio conocido»; el órgano «inadmite» | Domicilio o, en su defecto, residencia (art. 57.1); hoy Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ); el LAJ da cuenta al Juez, que remite (art. 16.3) | LJV 16, 57 |
| 9 | solicitud, fin_solicitud | inventado | Documentación «preceptiva» (certificado, informe psicosocial, inventario preliminar); «modelo normalizado, art. 14.3» | Contenido del art. 58.1; acreditación del grado de discapacidad (art. 2.3 LPPD) como conveniente; subsanación en cinco días y cuenta al Juez (arts. 16.4 y 17.1) | LJV 16, 17, 58.1 |
| 10 | audiencia, tramitacion, cautelares | inventado | Audiencia del «art. 58.1 in fine»; «principios rectores» y «acumulación»; cautelas por «apariencia de buen derecho y peligro en la demora» | Normas generales (art. 58.2): comparecencia del art. 17.2, quince días de citación y treinta para celebrarla; las cautelas como medida que pide el Fiscal (art. 56 d) LJV; art. 7.1 LPPD) | LJV 13, 17, 18, 56, 58 |
| 11 | postulacion | impreciso | Fundamento en el art. 3 LJV; asistencia jurídica gratuita | Art. 57.3 LJV | LJV 57.3 |
| 12 | resolucion | incompleto | «Motivación reforzada» | Auto en cinco días (art. 19.1); contenido mínimo del art. 58.3 y del art. 3.3 LPPD, con salvaguardas | LJV 19, 58.3; LPPD 3.3 |
| 13 | actores, pie | forma | «Letrado de la Administración», «Ambos»; CC arts. 269–270 | Nombres completos; pie con las normas citadas | — |

## Corrección posterior (2026-11-03) · Relectura, octava tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda8.md`, aplicados con el visto bueno del propietario.

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 5 | recursos, recurso_pendiente; nuevo fin_desestimada | La desestimación firme acababa en «medida acordada» | Fin propio | LJV 19.3, 58.5 |
| 6 | recurso_pendiente; nuevo fin_recurso_estimado | Revocar volvía a preguntar por el recurso | Fin propio | LJV 58.4 |
| 7 | supuesto_a | Solo la constitución | También aportaciones | LJV 56 a; Ley 41/2003, art. 4 |
| 8 | inscripcion_registrables | «remisión de mandamientos» | Suprimido | LJV 58.5 |
