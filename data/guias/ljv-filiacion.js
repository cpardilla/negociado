/* Migrado por tools/migrate.js desde sources/actual/G06.json; revisado con el BOE (registro: docs/revision/ljv-filiacion.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-filiacion",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la autorización o aprobación judicial del reconocimiento de la filiación no matrimonial",
 "corto": "Reconocimiento de la filiación no matrimonial",
 "articulos": [
  "23",
  "24",
  "25",
  "26"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G06"
 },
 "fases": [
  "Tipo de expediente",
  "Presentación y admisión",
  "Citación y comparecencia",
  "Resolución judicial",
  "Cierre y recursos"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Determinación del tipo de expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de iniciar la tramitación, identifique con precisión qué tipo de control judicial exige la situación concreta. El artículo 23 LJV distingue dos figuras con efectos jurídicos distintos: la autorización previa (condición de validez del reconocimiento) y la aprobación posterior (condición de eficacia de un reconocimiento ya otorgado)."
    },
    {
     "tipo": "nota",
     "texto": "AUTORIZACIÓN: previa; sin ella no puede quedar determinada la filiación (art. 125 CC). APROBACIÓN: posterior a un reconocimiento ya otorgado; según el caso, la ley la exige para su validez (art. 23.4 LJV; art. 121 CC) o para su eficacia (art. 23.3 LJV; art. 124 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 23 LJV 15/2015; arts. 121, 124 y 125 CC"
    }
   ],
   "pregunta": "¿Cuál es el supuesto concreto que motiva el expediente?",
   "opciones": [
    {
     "texto": "AUTORIZACIÓN (art. 23.2) — El reconociente es hermano o consanguíneo en línea recta del progenitor ya determinado del reconocido. El reconocido es menor o persona con discapacidad con medidas de apoyo.",
     "tono": "t-ok",
     "destino": "tipo_aut"
    },
    {
     "texto": "APROBACIÓN (art. 23.3.a) — El reconociente es menor de edad (no puede contraer matrimonio por razón de edad). Fundamento: art. 121 CC.",
     "tono": "t-ok",
     "destino": "tipo_ap_a"
    },
    {
     "texto": "APROBACIÓN (art. 23.3.b) — El reconociente carece del consentimiento expreso del representante legal o la asistencia del curador del reconocido ni del progenitor legalmente conocido (salvo reconocimiento en testamento o dentro del plazo de inscripción del nacimiento).",
     "tono": "t-ok",
     "destino": "tipo_ap_b"
    },
    {
     "texto": "APROBACIÓN (art. 23.3.c) — Reconocimiento paterno realizado dentro del plazo de inscripción, cuando la inscripción fue suspendida a petición de la madre (art. 124, párrafo segundo, CC).",
     "tono": "t-ok",
     "destino": "tipo_ap_c"
    },
    {
     "texto": "APROBACIÓN (art. 23.4) — El propio reconociente es una persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica (independientemente de la condición del reconocido).",
     "tono": "t-ok",
     "destino": "tipo_ap_disc"
    }
   ]
  },
  "tipo_aut": {
   "fase": 0,
   "titulo": "Autorización judicial previa — art. 23.2 LJV / art. 125 CC",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuesto de AUTORIZACIÓN: condición de validez. El reconociente no puede otorgar el reconocimiento hasta obtener la autorización judicial. El expediente tiene por objeto que el Juez evalúe si el reconocimiento redunda en interés del menor o de la persona con discapacidad con medidas de apoyo."
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN: el Juez solo autorizará cuando la determinación sea en interés del menor o de la persona con discapacidad (art. 26.2 LJV; art. 125 CC: «cuando convenga al interés del menor»). "
    },
    {
     "tipo": "nota",
     "texto": "Ratio: este supuesto previene el riesgo de encubrimiento de relaciones incestuosas. El hijo sería simultáneamente hijo y sobrino (u otro pariente en línea recta) del progenitor ya conocido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 125 CC; art. 23.2 LJV 15/2015; art. 26.2 LJV 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "tipo_ap_a": {
   "fase": 0,
   "titulo": "Aprobación judicial — Reconociente menor de edad (art. 23.3.a / art. 121 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuesto de APROBACIÓN: el reconocimiento ya fue otorgado por el menor de edad (quien no puede contraer matrimonio por razón de edad), pero precisa aprobación judicial para producir efectos jurídicos."
    },
    {
     "tipo": "nota",
     "texto": "El reconocimiento es un acto personalísimo: el menor ha de expresar su propia voluntad, no el representante legal en su lugar. La aprobación judicial sustituye la intervención representativa que en otros actos de trascendencia análoga sería exigida."
    },
    {
     "tipo": "ley",
     "texto": "Art. 121 CC; art. 23.3.a LJV 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "tipo_ap_b": {
   "fase": 0,
   "titulo": "Aprobación judicial — Sin consentimiento ni asistencia (art. 23.3.b / art. 124 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuesto de APROBACIÓN: el reconociente no ha obtenido el consentimiento expreso del representante legal ni la asistencia del curador del reconocido, ni del progenitor legalmente conocido."
    },
    {
     "tipo": "nota",
     "texto": "Excepciones que excluyen este supuesto (y en las que NO se necesita aprobación judicial): (1) el reconocimiento se realizó en testamento —garantías notariales plenas—, o (2) dentro del plazo para practicar la inscripción del nacimiento —supervisión registral inmediata—."
    },
    {
     "tipo": "ley",
     "texto": "Art. 124 CC; art. 23.3.b LJV 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "tipo_ap_c": {
   "fase": 0,
   "titulo": "Aprobación judicial — Suspensión de inscripción a petición de la madre (art. 23.3.c)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuesto de APROBACIÓN: el padre realizó el reconocimiento dentro del plazo para practicar la inscripción del nacimiento, pero la madre solicitó la suspensión de esa inscripción (art. 124, párrafo segundo, CC: puede pedirla durante el año siguiente al nacimiento; si el padre pide la confirmación de la inscripción, hace falta aprobación judicial con audiencia del Ministerio Fiscal)."
    },
    {
     "tipo": "nota",
     "texto": "La aprobación judicial dirime el conflicto entre el padre que quiere reconocer y la madre que se opone, atendiendo siempre al interés superior del menor. El Juez es el árbitro de esa discrepancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 124 CC; art. 23.3.c LJV 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "tipo_ap_disc": {
   "fase": 0,
   "titulo": "Aprobación judicial — Reconociente con discapacidad (art. 23.4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuesto de APROBACIÓN: el propio reconociente es una persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica. Este supuesto opera con independencia de la condición del reconocido."
    },
    {
     "tipo": "nota",
     "texto": "El expediente tutela simultáneamente: (a) el discernimiento del reconociente —cuya capacidad de comprensión puede estar afectada—, y (b) el interés del reconocido. El Juez valorará especialmente el discernimiento del progenitor como primer criterio de la resolución (art. 26.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 121, párrafo segundo, CC; art. 23.4 LJV 15/2015; art. 26.1 LJV 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación del órgano territorialmente competente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado de Primera Instancia competente se determina siguiendo un sistema de fueros en cascada, priorizando la conexión territorial con el reconocido —quien ve afectado su estado civil—."
    },
    {
     "tipo": "nota",
     "texto": "Competencia objetiva: el Juzgado de Primera Instancia; hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 d) LOPJ) o, si no, la Sección Civil. La decisión de fondo es reservada al Juez (no al LAJ) por afectar al estado civil y a derechos de menores o personas con discapacidad (art. 2.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 24.1 LJV 15/2015; art. 2 LJV 15/2015; art. 86.5 LOPJ"
    }
   ],
   "pregunta": "¿Dónde tiene su domicilio o residencia el reconocido?",
   "opciones": [
    {
     "texto": "El reconocido tiene DOMICILIO en España → competente el Juzgado de Primera Instancia de ese domicilio (fuero principal)",
     "tono": "t-ok",
     "destino": "solicitud"
    },
    {
     "texto": "El reconocido NO tiene domicilio en España pero tiene RESIDENCIA en territorio nacional → competente el Juzgado de Primera Instancia de esa residencia (fuero secundario)",
     "tono": "t-ok",
     "destino": "solicitud"
    },
    {
     "texto": "El reconocido NO tiene domicilio NI residencia en España → verificar fuero subsidiario por domicilio o residencia del reconociente",
     "tono": "t-plazo",
     "destino": "fuero_subsidiario"
    }
   ]
  },
  "fuero_subsidiario": {
   "fase": 1,
   "titulo": "Fuero subsidiario — Domicilio o residencia del reconociente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el reconocido no tiene domicilio ni residencia en España, la competencia se atribuye al Juzgado de Primera Instancia del domicilio o residencia del progenitor autor del reconocimiento. Este fuero garantiza que siempre exista un órgano español competente cuando el reconociente sí tiene vínculos con España."
    },
    {
     "tipo": "ley",
     "texto": "Art. 24.1 in fine LJV 15/2015; art. 9 LJV 15/2015"
    }
   ],
   "pregunta": "¿Tiene el reconociente (progenitor autor del reconocimiento) domicilio o residencia en España?",
   "opciones": [
    {
     "texto": "Sí → competente el Juzgado de Primera Instancia del domicilio o residencia del reconociente",
     "tono": "t-ok",
     "destino": "solicitud"
    },
    {
     "texto": "No → ningún órgano judicial español tiene atribuida competencia para este expediente",
     "tono": "t-aviso",
     "destino": "fin_sin_competencia"
    }
   ]
  },
  "fin_sin_competencia": {
   "fase": 1,
   "titulo": "Sin órgano judicial español competente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No existe ningún fuero territorial que atribuya competencia a un Juzgado de Primera Instancia español. El expediente no puede tramitarse ante órganos judiciales españoles."
    },
    {
     "tipo": "nota",
     "texto": "Orientación al interesado: considerar si el reconocimiento puede tramitarse ante las autoridades del Estado donde el reconocido o el reconociente tengan su residencia habitual, conforme a las normas de competencia internacional aplicables (art. 9 LJV y reglamentos europeos de DIPr)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 24.1 LJV 15/2015; art. 9 LJV 15/2015"
    }
   ],
   "fin": "error"
  },
  "solicitud": {
   "fase": 1,
   "titulo": "Preparación y presentación de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud puede presentarse por el progenitor autor del reconocimiento SIN necesidad de Abogado ni Procurador. Está disponible formulario normalizado en la Oficina judicial o sede electrónica (art. 14.3 LJV). El formulario no exige concretar la fundamentación jurídica."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio de la solicitud",
     "items": [
      "Datos e identificación completa del solicitante (el progenitor reconociente)",
      "Domicilio a efectos de notificaciones y, si procede, correo electrónico",
      "Indicación expresa del tipo de expediente: AUTORIZACIÓN (art. 23.2) o APROBACIÓN (art. 23.3 o 23.4)",
      "Exposición clara de los hechos que motivan el expediente",
      "Identificación del reconocido: nombre, domicilio o residencia",
      "Identificación del progenitor conocido, si lo hay, con domicilio para citación",
      "Identificación del representante legal o curador del reconocido, con domicilio",
      "En su caso: identificación de descendientes del reconocido (si este hubiere fallecido)",
      "Documentos acreditativos relevantes (partida de nacimiento, documentación de discapacidad, etc.)",
      "Si es aprobación: copia del reconocimiento ya otorgado"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "POSTULACIÓN: aunque no sea preceptiva, las partes pueden comparecer con Abogado y Procurador voluntariamente. Si cualquier interesado formula oposición, la actuación de Abogado y Procurador es necesaria desde ese momento, y también para interponer recursos (art. 3.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 14 y 24.2–24.3 LJV 15/2015; art. 3 LJV 15/2015"
    }
   ],
   "siguiente": "control_admision"
  },
  "control_admision": {
   "fase": 1,
   "titulo": "Control de oficio de la competencia y de la solicitud (art. 16 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presentada la solicitud, el LAJ examina de oficio si se cumplen las normas de competencia objetiva y territorial, y si la solicitud contiene todos los requisitos formales necesarios. Este control es inmediato a la presentación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16 LJV 15/2015"
    }
   ],
   "pregunta": "¿Qué resultado arroja el control de oficio?",
   "opciones": [
    {
     "texto": "Todo correcto — la solicitud es competencialmente y formalmente conforme → proceder al control de conflicto de intereses",
     "tono": "t-ok",
     "destino": "conflicto_intereses"
    },
    {
     "texto": "Defectos u omisiones en la solicitud — el LAJ concede plazo de 5 días para subsanación",
     "tono": "t-plazo",
     "destino": "subsanacion"
    },
    {
     "texto": "Falta de competencia objetiva — el órgano no tiene atribuida la competencia para este tipo de expediente",
     "tono": "t-aviso",
     "destino": "incompetencia_objetiva"
    },
    {
     "texto": "Falta de competencia territorial — el órgano no es el territorialmente competente",
     "tono": "t-plazo",
     "destino": "incompetencia_territorial"
    }
   ]
  },
  "subsanacion": {
   "fase": 1,
   "titulo": "Plazo de subsanación de defectos u omisiones",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ concede al solicitante un plazo de cinco días para subsanar los defectos u omisiones detectados. El requerimiento de subsanación se notifica al solicitante de forma expresa."
    },
    {
     "tipo": "plazo",
     "texto": "PLAZO: 5 días desde la notificación del requerimiento de subsanación."
    },
    {
     "tipo": "nota",
     "texto": "El trámite de subsanación refleja el principio antiformalista de la JV: antes de inadmitir por defectos de forma, el órgano otorga al solicitante la oportunidad de corregirlos (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV 15/2015"
    }
   ],
   "pregunta": "¿El solicitante ha subsanado los defectos en el plazo concedido de 5 días?",
   "opciones": [
    {
     "texto": "Sí — defectos subsanados en plazo → retomar el control y continuar la tramitación",
     "tono": "t-ok",
     "destino": "conflicto_intereses"
    },
    {
     "texto": "No — plazo transcurrido sin subsanación → la solicitud se tiene por no presentada y se archivan las actuaciones",
     "tono": "t-aviso",
     "destino": "archivo_defectos"
    }
   ]
  },
  "archivo_defectos": {
   "fase": 1,
   "titulo": "Archivo por falta de subsanación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ tiene por no presentada la solicitud y archiva las actuaciones al no haberse subsanado los defectos en el plazo concedido de cinco días."
    },
    {
     "tipo": "nota",
     "texto": "El archivo no impide que el interesado presente una nueva solicitud una vez subsanados los defectos detectados, ya que no genera cosa juzgada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV 15/2015"
    }
   ],
   "fin": "warning"
  },
  "incompetencia_objetiva": {
   "fase": 1,
   "titulo": "Falta de competencia objetiva",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ aprecia que el órgano carece de competencia objetiva. En los expedientes de competencia del LAJ, acuerda el archivo previo audiencia del Ministerio Fiscal y del solicitante. En los del Juez, da cuenta al Juez para que acuerde lo que proceda."
    },
    {
     "tipo": "nota",
     "texto": "La resolución que aprecia la falta de competencia DEBE indicar el órgano judicial que se estima competente, orientando al solicitante hacia el Juzgado de Primera Instancia correcto (art. 16.2 LJV). En este expediente, la competencia objetiva corresponde siempre al Juzgado de Primera Instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.2 LJV 15/2015; art. 24.1 LJV 15/2015"
    }
   ],
   "fin": "warning"
  },
  "incompetencia_territorial": {
   "fase": 1,
   "titulo": "Falta de competencia territorial — Remisión al órgano competente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ aprecia falta de competencia territorial y acuerda la remisión de las actuaciones al Juzgado de Primera Instancia que considera territorialmente competente, previa audiencia del Ministerio Fiscal y del solicitante."
    },
    {
     "tipo": "nota",
     "texto": "A diferencia de la falta de competencia objetiva, la falta de competencia territorial no determina el archivo sino la REMISIÓN. Las actuaciones ya realizadas se conservan y se transfieren al órgano competente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.3 LJV 15/2015"
    }
   ],
   "fin": "neutral"
  },
  "conflicto_intereses": {
   "fase": 1,
   "titulo": "Verificación de conflicto de intereses del representante legal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de la admisión formal, el LAJ verifica si el representante legal del reconocido (cuando este es menor o persona con discapacidad) puede tener intereses opuestos a los del propio reconocido en este expediente."
    },
    {
     "tipo": "nota",
     "texto": "Ejemplo típico de conflicto: el representante legal del reconocido es el cónyuge del reconociente —tiene un interés paralelo que puede comprometer la defensa de los intereses del reconocido—. En tal caso, el reconocido necesita un defensor judicial que actúe en su nombre."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27 LJV 15/2015 (Cap. II Tít. II); arts. 235–236 CC"
    }
   ],
   "pregunta": "¿Se aprecia conflicto de intereses entre el representante legal del reconocido y los intereses del propio reconocido?",
   "opciones": [
    {
     "texto": "No existe conflicto de intereses → proceder a la admisión formal del expediente",
     "tono": "t-ok",
     "destino": "admision_formal"
    },
    {
     "texto": "Existe o se aprecia posible conflicto de intereses → es necesario tramitar previamente el nombramiento de defensor judicial al reconocido (art. 27 LJV)",
     "tono": "t-plazo",
     "destino": "defensor_judicial"
    }
   ]
  },
  "defensor_judicial": {
   "fase": 1,
   "titulo": "Nombramiento de defensor judicial del reconocido (arts. 27–31 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el representante legal del reconocido tiene intereses opuestos al reconocido, se tramita de forma incidental el nombramiento de un defensor judicial conforme al Capítulo II del Título II de la LJV. El defensor judicial actuará en representación del reconocido durante todo el expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Actuación: iniciar el expediente de nombramiento de defensor judicial (arts. 27–31 LJV) de forma previa. El expediente principal de reconocimiento queda en suspenso hasta que el defensor judicial acepte el cargo."
    },
    {
     "tipo": "nota",
     "texto": "Competencia para el nombramiento: Letrado de la Administración de Justicia del Juzgado de Primera Instancia del domicilio o residencia del menor o persona con discapacidad (art. 28.1 LJV). El nombramiento se notifica al designado para que acepte o rechace el cargo. La aceptación activa la representación del reconocido."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 27–31 LJV 15/2015; arts. 235–236 CC"
    }
   ],
   "siguiente": "admision_formal"
  },
  "admision_formal": {
   "fase": 1,
   "titulo": "Admisión formal del expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ resuelve mediante decreto admitiendo formalmente el expediente y determina a continuación si es necesaria la celebración de comparecencia o si basta con el informe escrito del Ministerio Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia es necesaria cuando concurra alguna de estas causas: (a) deben ser oídos interesados distintos del solicitante, (b) han de practicarse pruebas ante el Juez o el LAJ, o (c) el Juez o el LAJ la consideran necesaria para la mejor resolución del expediente (art. 17.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17 LJV 15/2015"
    }
   ],
   "pregunta": "¿Es necesaria la celebración de comparecencia?",
   "opciones": [
    {
     "texto": "SÍ — existen interesados distintos del solicitante que deben ser oídos, pruebas que practicar, o el órgano la considera necesaria → proceder a citación de todas las partes",
     "tono": "t-ok",
     "destino": "citacion"
    },
    {
     "texto": "NO — solo debe oírse al Ministerio Fiscal y no es necesaria prueba → el MF emitirá informe escrito en el plazo de 10 días (art. 17.2 in fine LJV)",
     "tono": "t-ok",
     "destino": "informe_mf_escrito"
    }
   ]
  },
  "informe_mf_escrito": {
   "fase": 2,
   "titulo": "Informe escrito del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando solo deba oírse al Ministerio Fiscal y no sea necesaria la realización de prueba, el MF emite su informe por escrito en el plazo de diez días, sin necesidad de convocar comparecencia. Este mecanismo agiliza la tramitación de expedientes sencillos."
    },
    {
     "tipo": "plazo",
     "texto": "PLAZO: el Ministerio Fiscal dispone de 10 días desde su citación para emitir y remitir el informe escrito."
    },
    {
     "tipo": "nota",
     "texto": "La participación del Ministerio Fiscal en este expediente es SIEMPRE preceptiva (art. 4 LJV), por afectar al estado civil de la persona reconocida y, en los supuestos más frecuentes, al interés de un menor o persona con discapacidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.2 in fine LJV 15/2015; art. 4 LJV 15/2015"
    }
   ],
   "siguiente": "deliberacion"
  },
  "citacion": {
   "fase": 2,
   "titulo": "Citación de las partes a comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ cita a comparecencia a todas las personas que deben intervenir en el expediente. La citación se practica conforme a la LEC, con entrega de copia de la resolución de admisión, de la solicitud y de los documentos que la acompañen."
    },
    {
     "tipo": "plazo",
     "texto": "PLAZO: la citación debe realizarse con al menos 15 días de antelación a la celebración de la comparecencia (art. 17.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos que deben ser citados según proceda (art. 25 LJV)",
     "items": [
      "El SOLICITANTE (progenitor autor del reconocimiento) — SIEMPRE",
      "El MINISTERIO FISCAL — SIEMPRE (participación preceptiva, art. 4 LJV)",
      "El PROGENITOR CONOCIDO — cuando existe filiación ya determinada respecto a la otra línea",
      "El REPRESENTANTE LEGAL o curador del reconocido (o el defensor judicial si fue nombrado)",
      "El PROPIO RECONOCIDO — OBLIGATORIO si es mayor de 12 años; también si tiene suficiente madurez con independencia de la edad",
      "Los DESCENDIENTES del reconocido — si el reconocido hubiere fallecido y los hubiere",
      "Otras PERSONAS que se estime oportuno según las circunstancias del caso"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN — OPOSICIÓN: si algún interesado prevé formular oposición, deberá hacerlo en los 5 días siguientes a la citación. La oposición NO hace contencioso el expediente ni suspende su tramitación, pero desde ese momento la actuación de Abogado y Procurador es necesaria (arts. 17.3 y 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 25 LJV 15/2015; art. 17 LJV 15/2015; art. 4 LJV 15/2015"
    }
   ],
   "pregunta": "¿Ha formulado algún interesado oposición en el plazo de 5 días desde la citación?",
   "opciones": [
    {
     "texto": "No — ningún interesado ha formulado oposición en plazo → proceder a la celebración de la comparecencia",
     "tono": "t-ok",
     "destino": "comparecencia"
    },
    {
     "texto": "Sí — algún interesado ha formulado oposición dentro del plazo de 5 días",
     "tono": "t-plazo",
     "destino": "oposicion"
    }
   ]
  },
  "oposicion": {
   "fase": 2,
   "titulo": "Oposición formulada por interesado (art. 17.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Uno o varios interesados han formulado oposición en el plazo de cinco días siguientes a su citación. El LAJ da traslado INMEDIATO del escrito de oposición a la parte solicitante."
    },
    {
     "tipo": "aviso",
     "texto": "PUNTO CRÍTICO: la oposición NO hace contencioso el expediente ni impide que continúe su tramitación hasta que sea resuelto. El expediente sigue adelante con normalidad."
    },
    {
     "tipo": "nota",
     "texto": "El escrito de oposición se traslada INMEDIATAMENTE al solicitante. La comparecencia se celebra con normalidad; el oponente hará valer su posición en ese acto procesal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.3 LJV 15/2015; art. 3.2 LJV 15/2015"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Celebración de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia se celebra ante el Juez (el expediente afecta al estado civil y a derechos de menores o personas con discapacidad, reserva del art. 2.3 LJV), dentro del plazo máximo de treinta días desde la admisión de la solicitud."
    },
    {
     "tipo": "plazo",
     "texto": "PLAZO MÁXIMO: 30 días desde la admisión de la solicitud para la celebración de la comparecencia."
    },
    {
     "tipo": "lista",
     "titulo": "Desarrollo de la comparecencia (art. 18 LJV)",
     "items": [
      "El Juez oye al solicitante, a los demás citados y a las personas que la ley dispone",
      "Si el reconocido es mayor de 12 años o tiene suficiente madurez: audiencia obligatoria, en condiciones idóneas adaptadas a su edad y circunstancias",
      "Si el reconocido es menor o persona con discapacidad: posibilidad de audiencia en acto separado, sin interferencias, con asistencia del Ministerio Fiscal",
      "El LAJ levanta acta del resultado de la exploración del reconocido (datos objetivos del desarrollo; preservar su intimidad)",
      "Se practican las pruebas propuestas y admitidas por el Juez",
      "Concluidas las pruebas: los interesados formulan oralmente sus conclusiones",
      "Cuestiones procesales (incluyendo de competencia): se resuelven oralmente en el acto",
      "El desarrollo completo de la comparecencia se registra en soporte audiovisual (art. 18.2.6.ª LJV)",
      "Adaptaciones y ajustes para personas con discapacidad: obligatorios, de oficio o a petición (art. 7 bis LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si el solicitante no asiste a la comparecencia sin causa justificada: el Juez archiva el expediente por desistimiento (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18 LJV 15/2015; art. 25 LJV 15/2015; art. 7 bis LJV 15/2015"
    }
   ],
   "pregunta": "¿Qué ocurre con la asistencia del solicitante a la comparecencia?",
   "opciones": [
    {
     "texto": "El solicitante comparece → la comparecencia se celebra con normalidad → proceder a deliberación judicial",
     "tono": "t-ok",
     "destino": "deliberacion"
    },
    {
     "texto": "El solicitante NO comparece sin causa justificada → el Juez archiva el expediente teniéndolo por desistido",
     "tono": "t-aviso",
     "destino": "archivo_desistimiento"
    }
   ]
  },
  "archivo_desistimiento": {
   "fase": 2,
   "titulo": "Archivo por incomparecencia del solicitante (desistimiento)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez acuerda el archivo del expediente al no haber comparecido el solicitante, teniéndolo por desistido del expediente (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El desistimiento por incomparecencia no genera cosa juzgada ni impide que el solicitante presente una nueva solicitud si decide retomar el procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2.1.ª LJV 15/2015"
    }
   ],
   "fin": "warning"
  },
  "deliberacion": {
   "fase": 3,
   "titulo": "Deliberación y dictado del auto judicial (art. 26 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluida la comparecencia o recibido el informe escrito del MF, el Juez dispone de cinco días para dictar auto resolviendo el expediente. La resolución toma la forma de AUTO (el Juez, no el LAJ, por reserva del art. 2.3 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "PLAZO: 5 días desde la terminación de la comparecencia (o desde la última diligencia practicada si no se celebró comparecencia) para dictar auto (art. 19 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios de valoración del Juez (art. 26.1 LJV)",
     "items": [
      "(1) Discernimiento del progenitor: aptitud para comprender el alcance y efectos del reconocimiento. No equivale a plena capacidad de obrar.",
      "(2) Veracidad o autenticidad del acto: voluntad real y libre de vicios (presiones externas, engaño, error esencial sobre el vínculo biológico).",
      "(3) Verosimilitud de la relación de procreación — SIN necesidad de prueba plena: basta la credibilidad del vínculo biológico sustentada en elementos indiciarios.",
      "(4) Interés del reconocido cuando sea menor o persona con discapacidad con medidas de apoyo."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "PRINCIPIO INQUISITIVO REFORZADO: cuando el expediente afecte a menores o personas con discapacidad, la decisión puede fundarse en hechos conocidos durante el expediente aunque no los hubieran invocado las partes (art. 19.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "SUPUESTO ESPECIAL (art. 23.2 / art. 26.2): en el caso de autorización por hermano o pariente consanguíneo del otro progenitor, el Juez SOLO autorizará cuando sea en interés del menor o persona con discapacidad. "
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 LJV 15/2015; art. 19 LJV 15/2015; arts. 121, 124 CC"
    }
   ],
   "pregunta": "¿Cuál es el sentido del auto dictado por el Juez?",
   "opciones": [
    {
     "texto": "Auto ESTIMATORIO — el Juez concede la autorización o la aprobación solicitada",
     "tono": "t-ok",
     "destino": "auto_estimatorio"
    },
    {
     "texto": "Auto DESESTIMATORIO — el Juez deniega la autorización o la aprobación solicitada",
     "tono": "t-aviso",
     "destino": "auto_desestimatorio"
    }
   ]
  },
  "auto_estimatorio": {
   "fase": 3,
   "titulo": "Auto estimatorio — Autorización o aprobación concedida",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto concediendo la autorización (supuestos del art. 23.2) o la aprobación (supuestos del art. 23.3 y 23.4) solicitada. El recurso de apelación no tiene efectos suspensivos (art. 20.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Efectos de la AUTORIZACIÓN concedida: el reconociente queda habilitado para otorgar el reconocimiento ante el Registro Civil o notario. Efectos de la APROBACIÓN concedida: el reconocimiento ya otorgado despliega su plena eficacia jurídica."
    },
    {
     "tipo": "nota",
     "texto": "Efectos sustantivos de la filiación determinada: apellidos (art. 109 CC) · obligaciones de alimentos (art. 143 CC) · derechos sucesorios (arts. 807 y ss. CC) · relaciones paterno-filiales (arts. 154 y ss. CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26.1 LJV 15/2015; arts. 109, 143, 154 y 807 CC"
    }
   ],
   "siguiente": "eficacia_registral"
  },
  "eficacia_registral": {
   "fase": 4,
   "titulo": "Testimonio para el Registro Civil (art. 22.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el expediente da lugar a un hecho o acto inscribible en el Registro Civil, se expide testimonio de la resolución a efectos de su inscripción (art. 22.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "NOTA ESPECIAL (supuesto del art. 23.2 — autorización): el Juez invalidará la determinación si se presenta un documento público con la manifestación del reconocido al respecto, hecha una vez alcanzada la plena capacidad (art. 26.2 LJV; art. 125, párrafo segundo, CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 22.2 LJV 15/2015; art. 26.2 LJV 15/2015"
    }
   ],
   "siguiente": "recurso_auto_est"
  },
  "auto_desestimatorio": {
   "fase": 3,
   "titulo": "Auto desestimatorio — Autorización o aprobación denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto denegando la autorización o la aprobación. El reconocimiento no puede otorgarse (si se denegó la autorización) o no produce efectos (si se denegó la aprobación posterior)."
    },
    {
     "tipo": "nota",
     "texto": "La denegación NO cierra definitivamente la cuestión de la filiación. El interesado puede acudir a la vía contenciosa mediante la acción de reclamación de filiación no matrimonial (arts. 131 y ss. CC), en la que es posible practicar prueba plena, incluida la prueba biológica de ADN."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26.1 LJV 15/2015; arts. 131–140 CC"
    }
   ],
   "siguiente": "recurso_auto_des"
  },
  "recurso_auto_est": {
   "fase": 4,
   "titulo": "Control de recurso contra el auto estimatorio",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquier interesado que se considere perjudicado por el auto estimatorio puede interponer recurso de apelación conforme a la LEC ante la Audiencia Provincial. El recurso NO tiene efectos suspensivos: el auto puede ejecutarse —y el reconocimiento inscribirse— mientras se sustancia la apelación."
    },
    {
     "tipo": "aviso",
     "texto": "POSTULACIÓN OBLIGATORIA para el recurso: la actuación de Abogado y Procurador es siempre obligatoria para interponer el recurso de apelación, aunque no lo fuera en el expediente de instancia (art. 3.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para interponer el recurso de apelación: veinte días desde la notificación del auto (art. 458.1 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV 15/2015; art. 3.2 LJV 15/2015; art. 458 LEC"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación contra el auto estimatorio?",
   "opciones": [
    {
     "texto": "No se interpone recurso → el auto adquiere firmeza; el procedimiento concluye con autorización/aprobación firme",
     "tono": "t-ok",
     "destino": "fin_exitoso"
    },
    {
     "texto": "Se interpone recurso de apelación por un interesado perjudicado → el asunto pasa a la Audiencia Provincial (sin efectos suspensivos)",
     "tono": "t-plazo",
     "destino": "apelacion_vs_est"
    }
   ]
  },
  "recurso_auto_des": {
   "fase": 4,
   "titulo": "Control de recurso contra el auto desestimatorio",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante o cualquier otro interesado perjudicado por el auto desestimatorio puede interponer recurso de apelación conforme a la LEC ante la Audiencia Provincial."
    },
    {
     "tipo": "aviso",
     "texto": "POSTULACIÓN OBLIGATORIA para el recurso: la actuación de Abogado y Procurador es siempre obligatoria para interponer el recurso de apelación, aunque no lo fuera en el expediente de instancia (art. 3.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para interponer el recurso de apelación: veinte días desde la notificación del auto (art. 458.1 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV 15/2015; art. 3.2 LJV 15/2015; art. 458 LEC"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación contra el auto desestimatorio?",
   "opciones": [
    {
     "texto": "No se interpone recurso → el auto adquiere firmeza; el procedimiento concluye con denegación firme",
     "tono": "t-aviso",
     "destino": "fin_denegado"
    },
    {
     "texto": "Se interpone recurso de apelación → el asunto pasa a la Audiencia Provincial",
     "tono": "t-plazo",
     "destino": "apelacion_vs_des"
    }
   ]
  },
  "apelacion_vs_est": {
   "fase": 4,
   "titulo": "Recurso de apelación contra auto estimatorio — Audiencia Provincial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurso de apelación contra el auto estimatorio se tramita ante la Audiencia Provincial conforme a las normas de la LEC. Quien recurre sostiene que no debía haberse concedido la autorización o la aprobación."
    },
    {
     "tipo": "nota",
     "texto": "Durante la tramitación del recurso, el auto recurrido puede ejecutarse (ausencia de efecto suspensivo). Si ya se practicó la inscripción en el Registro Civil y el recurso prospera, deberá procederse a su cancelación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV 15/2015; LEC (arts. 455 y ss. — recurso de apelación)"
    }
   ],
   "pregunta": "¿Cómo resuelve la Audiencia Provincial el recurso de apelación?",
   "opciones": [
    {
     "texto": "Recurso DESESTIMADO — la Audiencia confirma el auto estimatorio → el procedimiento concluye con autorización/aprobación firme",
     "tono": "t-ok",
     "destino": "fin_exitoso_apelacion"
    },
    {
     "texto": "Recurso ESTIMADO — la Audiencia revoca el auto estimatorio → la autorización o aprobación concedida queda sin efecto",
     "tono": "t-aviso",
     "destino": "fin_revocado_apelacion"
    }
   ]
  },
  "apelacion_vs_des": {
   "fase": 4,
   "titulo": "Recurso de apelación contra auto desestimatorio — Audiencia Provincial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurso de apelación contra el auto desestimatorio se tramita ante la Audiencia Provincial. El apelante sostiene que el Juez de instancia debería haber concedido la autorización o la aprobación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV 15/2015; LEC (arts. 455 y ss. — recurso de apelación)"
    }
   ],
   "pregunta": "¿Cómo resuelve la Audiencia Provincial el recurso de apelación?",
   "opciones": [
    {
     "texto": "Recurso DESESTIMADO — la Audiencia confirma la denegación → el procedimiento concluye con denegación definitiva",
     "tono": "t-aviso",
     "destino": "fin_denegado_apelacion"
    },
    {
     "texto": "Recurso ESTIMADO — la Audiencia revoca el auto desestimatorio y concede la autorización o aprobación solicitada",
     "tono": "t-ok",
     "destino": "fin_exitoso_apelacion"
    }
   ]
  },
  "fin_exitoso": {
   "fase": 4,
   "titulo": "Procedimiento concluido — Autorización/Aprobación concedida y firme",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El auto estimatorio ha adquirido firmeza. La filiación no matrimonial queda judicialmente controlada y se inscribe en el Registro Civil. El expediente de jurisdicción voluntaria concluye."
    },
    {
     "tipo": "nota",
     "texto": "NOTA ESPECIAL (supuesto de autorización, art. 23.2): si en el futuro el reconocido presenta ante el Juez un documento público con su manifestación en contrario —realizada una vez alcanzada la plena capacidad—, el Juez deberá invalidar la determinación de la filiación (art. 26.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 22.2 y 23–26 LJV 15/2015"
    }
   ],
   "fin": "success"
  },
  "fin_exitoso_apelacion": {
   "fase": 4,
   "titulo": "Procedimiento concluido — Autorización/Aprobación concedida en segunda instancia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha resuelto el recurso de apelación de forma favorable a la concesión. La autorización o aprobación queda firme y se inscribe en el Registro Civil."
    },
    {
     "tipo": "nota",
     "texto": "NOTA ESPECIAL (supuesto de autorización, art. 23.2): si en el futuro el reconocido presenta ante el Juez un documento público con su manifestación en contrario —realizada una vez alcanzada la plena capacidad—, el Juez deberá invalidar la determinación de la filiación (art. 26.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 22.2 y 23–26 LJV 15/2015"
    }
   ],
   "fin": "success"
  },
  "fin_denegado": {
   "fase": 4,
   "titulo": "Procedimiento concluido — Autorización/Aprobación denegada (firme)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El auto desestimatorio ha adquirido firmeza. La autorización o la aprobación han sido denegadas. El reconocimiento no puede otorgarse (si se denegó la autorización) o no produce efectos (si se denegó la aprobación)."
    },
    {
     "tipo": "nota",
     "texto": "VÍA ALTERNATIVA: el interesado conserva el derecho a acudir a la vía contenciosa para reclamar la filiación mediante la ACCIÓN DE RECLAMACIÓN DE FILIACIÓN NO MATRIMONIAL (arts. 131 y ss. CC), en la que sí es posible practicar prueba plena, incluida la prueba biológica de ADN."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26.1 LJV 15/2015; arts. 131–140 CC"
    }
   ],
   "fin": "neutral"
  },
  "fin_denegado_apelacion": {
   "fase": 4,
   "titulo": "Procedimiento concluido — Autorización/Aprobación denegada en segunda instancia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha confirmado la denegación del Juzgado de Primera Instancia. La denegación adquiere firmeza en segunda instancia."
    },
    {
     "tipo": "nota",
     "texto": "VÍA ALTERNATIVA: el interesado conserva el derecho a acudir a la vía contenciosa mediante la acción de reclamación de filiación no matrimonial (arts. 131 y ss. CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 131–140 CC; art. 26.1 LJV 15/2015"
    }
   ],
   "fin": "neutral"
  },
  "fin_revocado_apelacion": {
   "fase": 4,
   "titulo": "Procedimiento concluido — Autorización/Aprobación revocada en apelación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha revocado el auto estimatorio dictado en primera instancia. La autorización o aprobación que había sido concedida queda sin efecto."
    },
    {
     "tipo": "aviso",
     "texto": "ACCIÓN INMEDIATA: verificar si la filiación ya fue inscrita en el Registro Civil durante la tramitación del recurso (dado que el recurso no tiene efectos suspensivos). Si es así, coordinar con el Registro Civil la cancelación de la inscripción conforme a las normas del Registro Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV 15/2015; Ley 20/2011 del Registro Civil"
    }
   ],
   "fin": "warning"
  }
 }
});
