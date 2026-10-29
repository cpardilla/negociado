# Revisión · E18 · LJV · Honor, intimidad e imagen del menor o persona con discapacidad (arts. 59–60)

- **Recurso**: `data/esquemas/ljv-honor-menor.js` (origen E18).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; LO 1/1982 (`LOPDH`), LO 1/1996 (`LOPJM`), CC, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E17; decisiones 9 y 10. **Rehecho**: de 16 fichas y 9 secciones (fundamentos internacionales, «sharenting», perspectiva de género, vía penal, protección de datos…) a 6 fichas sobre los arts. 59–60 LJV y su marco sustantivo, más plazos, participantes y normas.
- **Lector del BOE**: la LO 1/1982 numera sus apartados en letra («Uno.», «Dos.»); el lector no los reconocía y el comprobador daba 22 falsos «revisar». Corregido en commit propio (ad875f1) con prueba.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 59.2).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Ámbito | **error** | Menor de edad «art. 315 CC» | Retirado (la mayoría de edad está hoy en el art. 240 CC; no hacía falta citarla) | CC (Ley 8/2021) |
| 2 | Competencia | **error** | «Art. 86 ter LOPJ» y «Juzgados especializados en familia (art. 98 LOPJ)» | Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, Sección Civil | LO 1/2025 |
| 3 | Postulación | **error** | Ficha «Art. 59.4» (el art. 59 tiene tres apartados); «el art. 3 LJV solo impone postulación cuando la ley lo exija o el Juez lo acuerde» | Art. 59.3: sin abogado ni procurador para promover; para apelar, sí (art. 3.2 LJV) | LJV |
| 4 | Postulación | **error** | «Art. 7 LJV: no se impondrán costas salvo mala fe o temeridad» | Retirado: el art. 7 LJV dice que los gastos son a cargo del solicitante | LJV |
| 5 | Recurso | **error** | Plazos contradictorios: «5 días, art. 20.2 LJV» y «20 días, art. 458 LEC»; «arts. 455–467 LEC» | Veinte días (art. 458.1 LEC); el art. 20.2 LJV no fija plazo; efectos suspensivos y tramitación preferente (art. 60.4 LJV) | LJV, LEC |
| 6 | LO 1/1982 | **error** | «Art. 1.4 LO 1/1982» (no existe); «art. 9.3: presunción de perjuicio» atribuido a la revocación | Revocación: art. 2.3 (indemnización con expectativas justificadas); el art. 9 es la tutela contenciosa frente a intromisiones | LO 1/1982 |
| 7 | Legitimación | error | Cita literal del art. 162 CC que no coincide con el texto vigente; tutela «arts. 215 y ss., 222 y 228 CC»; defensor judicial «arts. 300 y ss. CC»; curatela «art. 269.III y 287 ss.» | Art. 162.1.º CC literal; curatela representativa solo excepcional y para actos concretos (art. 269 CC) | CC (Ley 8/2021) |
| 8 | Comparecencia | error | «Audiencia obligatoria desde los 12 años» | El menor tiene derecho a ser oído; se presume suficiente madurez con doce años (art. 9 LOPJM); la LJV cita al menor «si el Juez lo creyera necesario» (art. 60.2) | LOPJM, LJV |
| 9 | Tramitación | error | «Plazo de admisión: art. 17 LEC»; «presentación conforme a la Ley 39/2015»; «medidas cautelares del art. 158 CC y arts. 721 ss. LEC» como parte del expediente | Retirados; se añade el plazo de la comparecencia (30 días, art. 18.1 LJV) y la decisión sobre hechos no invocados (art. 19.2 LJV) | LJV |
| 10 | Varias | error | «EOMF art. 3.6 y 3.7»; LOPDGDD arts. 7, 84, 94; RGPD; DSA; «art. 26 LOPJM (mod. LOPIVI)»; CP; AJG | Retirados (decisión 9: fuera del expediente o sin comprobar) | — |
| 11 | Fundamentos | jurisprudencia | Von Hannover, Axel Springer (TEDH) | Retirados (decisión 10) | — |
| 12 | Nota final | error | «Si el MF no se opone en la comparecencia, el representante queda habilitado…» | Retirado: sin oposición del Fiscal en ocho días no hay expediente (art. 3.2 LO 1/1982) | LO 1/1982 |
| 13 | Competencia | desfasado | Juzgado de Primera Instancia; «Secretario judicial» | Sección de Familia, Infancia y Capacidad; Letrado de la Administración de Justicia | LO 1/2025; LO 7/2015 |
| 14 | — | incompleto | Sin la regla del art. 4.3 LOPJM | Añadida: el uso de la imagen del menor en medios contrario a sus intereses es intromisión ilegítima aunque conste el consentimiento | LOPJM |

## Para la fase 5 (G15)

La guía repite tres errores del esquema: «art. 98 LOPJ» (paso «competencia»), «art. 59.4» (paso «inicio») y «art. 1.4 LO 1/1982» (paso «revocacion»).
