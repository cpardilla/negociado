# Revisión · E14 · LJV · Provisión de medidas judiciales de apoyo (arts. 42 bis a)–42 bis c))

- **Recurso**: `data/esquemas/ljv-medidas-apoyo.js` (origen E14).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (Capítulo III bis vigente desde el 03-09-2021, Ley 8/2021); CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: como E01–E13; decisiones 9 y 10. El esquema seguía bien la LJV: **corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos; 3 «revisar» intencionados (el rango «299 bis a 324 CC», que se cita precisamente por estar sin contenido, y la denominación legal del art. 42 bis a).2).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 42 bis a), participantes | **desfasado** | «Juzgado de Primera Instancia» | Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista, con carácter exclusivo y excluyente (art. 86.5 g) LOPJ); si no, la Sección Civil | LOPJ (LO 1/2025) |
| 2 | 42 bis b) | error | Si solo se discute quién será curador, «el Juez designará otra persona» | La ley solo dice que eso no es oposición a efectos de terminar el expediente; la designación se resuelve en él conforme al CC (arts. 275 y ss.) | art. 42 bis b).5 LJV |
| 3 | 42 bis b) | error | Las medidas provisionales duran 30 días y «durante ese plazo debe presentarse demanda… art. 756 LEC» | Se mantienen como máximo 30 días salvo que antes se presente la demanda en el proceso contencioso (arts. 756 y ss. LEC) | LJV, LEC |
| 4 | 42 bis c) | incompleto | Sin recurso ni enlace con el proceso contencioso | Apelación (art. 20.2 LJV; 20 días, art. 458 LEC); oposición en la revisión → proceso contencioso (art. 42 bis c).3; art. 761 LEC); las medidas acordadas en sentencia también se revisan por este trámite (art. 761 LEC) | LJV, LEC |
| 5 | Ecosistema | error | «Arts. 251–262 CC: medidas voluntarias» | Arts. 251–253: prohibiciones y disposiciones comunes; medidas voluntarias, arts. 255–262 | CC |
| 6 | Ecosistema y fichas | error | Defensor judicial «arts. 295–299 CC»; Título XI «arts. 249–299» | Arts. 295–298 (el art. 299 es la responsabilidad civil de la persona con discapacidad) | CC |
| 7 | Ecosistema | error | «Deroga los arts. 299 bis a 324 CC (antiguo régimen de incapacitación)» | Esos artículos quedaron sin contenido; la incapacitación estaba en otros (arts. 199 y ss. en la redacción anterior) | CC |
| 8 | Ecosistema | error | Art. 756 LEC: «competencia: JPI del lugar de residencia»; art. 757: «misma lista que el art. 42 bis a)» | Art. 756: ámbito y competencia de la autoridad que conoció del expediente previo; art. 757: el Fiscal promueve el proceso si los legitimados no existen o no demandan | LEC |

## Herramienta común (commit propio)

`articleKey` reducía la clave canónica «42 bis a» a «42 bis», y el rango «arts. 42 bis a)–42 bis c)» no se encontraba. Ahora las claves canónicas se leen igual (test de ida y vuelta).
