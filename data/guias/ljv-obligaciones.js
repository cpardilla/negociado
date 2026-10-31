/* Migrado por tools/migrate.js desde sources/actual/G21.json; revisado con el BOE (registro: docs/revision/ljv-obligaciones.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-obligaciones",
 "ley": "LJV",
 "titulo": "De los expedientes de jurisdicción voluntaria relativos al Derecho de obligaciones",
 "corto": "Título V · Derecho de obligaciones",
 "articulos": [
  "96",
  "97",
  "98",
  "99"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G21"
 },
 "fases": [
  "Calificación inicial",
  "Competencia y postulación",
  "Admisión",
  "Tramitación",
  "Respuesta e incidencias",
  "Resolución y cierre"
 ],
 "actores": {
  "ambos": "Juez / LAJ",
  "juez": "Juez",
  "laj": "Letrado/a de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Recepción y calificación del expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se recibe en el Juzgado una solicitud de jurisdicción voluntaria relativa al Derecho de obligaciones. La primera actuación del Letrado o Letrada de la Administración de Justicia (en adelante, LAJ) consiste en calificar el expediente para encauzarlo por la vía procesal correcta del Título V de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "El Título V regula dos expedientes distintos: la fijación judicial del plazo para el cumplimiento de obligaciones (Capítulo I, arts. 96 y 97) y la consignación judicial (Capítulo II, arts. 98 y 99). Ambos comparten rasgos —postulación no preceptiva, aplicación supletoria de las normas comunes— pero tienen presupuestos y trámites propios."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria — Título V, Capítulos I y II (arts. 96 a 99)."
    }
   ],
   "pregunta": "¿Qué tipo de expediente se presenta?",
   "opciones": [
    {
     "texto": "Fijación judicial del plazo para el cumplimiento de una obligación (art. 96)",
     "tono": "t-nota",
     "destino": "fp_competencia"
    },
    {
     "texto": "Consignación judicial (art. 98)",
     "tono": "t-nota",
     "destino": "cg_ambito"
    },
    {
     "texto": "Ofrecimiento de pago y consignación ante Notario (art. 69 de la Ley del Notariado)",
     "tono": "t-nota",
     "destino": "fin_derivacion_notarial"
    }
   ]
  },
  "fp_competencia": {
   "fase": 1,
   "titulo": "Fijación del plazo — examen de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica si el Juzgado es competente para conocer del expediente de fijación judicial del plazo."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas de competencia (art. 97.1)",
     "items": [
      "Regla general: la tramitación y resolución corresponde al Juez de Primera Instancia del domicilio del deudor.",
      "Regla especial de protección del consumidor: si la relación se traba entre un consumidor o usuario y un empresario o profesional, y éste fuera el deudor de la prestación, la competencia podrá corresponder también al Juez de Primera Instancia del domicilio del acreedor, a elección de éste."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La regla especial es proyección del principio de protección del consumidor, en línea con el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, aprobado por el Real Decreto Legislativo 1/2007, de 16 de noviembre."
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección Civil del Tribunal de Instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 97.1 Ley 15/2015 · RDL 1/2007."
    }
   ],
   "pregunta": "¿Qué fuero resulta aplicable?",
   "opciones": [
    {
     "texto": "Regla general: Juez de Primera Instancia del domicilio del deudor",
     "tono": "t-nota",
     "destino": "fp_postulacion"
    },
    {
     "texto": "Regla especial consumidor: Juez de Primera Instancia del domicilio del acreedor, a su elección",
     "tono": "t-nota",
     "destino": "fp_postulacion"
    },
    {
     "texto": "Ninguno de los fueros anteriores recae en este Juzgado",
     "tono": "t-nota",
     "destino": "fin_incompetencia_fp"
    }
   ]
  },
  "fp_postulacion": {
   "fase": 1,
   "titulo": "Fijación del plazo — postulación y remisión a normas comunes",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Confirmada la competencia, el LAJ examina los requisitos de postulación. El régimen del Capítulo I es coherente con la regla general del art. 3 de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "Para la actuación en este expediente no será preceptiva la intervención de Abogado ni Procurador (art. 97.2)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 97.2 Ley 15/2015 · Art. 3 Ley 15/2015 (régimen general de postulación)."
    },
    {
     "tipo": "info",
     "texto": "Seguidamente procede examinar si concurren los presupuestos sustantivos del expediente antes de dictar la providencia o el decreto de admisión."
    }
   ],
   "siguiente": "fp_presupuestos"
  },
  "fp_presupuestos": {
   "fase": 2,
   "titulo": "Fijación del plazo — presupuestos de admisión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica que concurren los presupuestos del art. 96."
    },
    {
     "tipo": "lista",
     "titulo": "Presupuestos exigibles",
     "items": [
      "Que proceda conforme al artículo 1128 del Código Civil o cualquier otra disposición legal que permita el señalamiento judicial del plazo.",
      "Que exista previamente un acto, negocio o relación jurídica de la que nace una obligación exigible, vigente y no extinguida por satisfacción.",
      "Que la pida alguno de los sujetos de la obligación (art. 96: «a instancia de alguno de los sujetos de la misma»)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los supuestos del art. 1128 CC son dos: (1) cuando la obligación no señalare plazo pero de su naturaleza y circunstancias se dedujere que ha querido concederse al deudor; y (2) cuando el plazo haya quedado a voluntad del deudor. La remisión del art. 96, no obstante, es abierta («cualquier otra disposición legal»), por lo que el ámbito objetivo no constituye un numerus clausus y se conecta con los artículos 1125 a 1130 del Código Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 96 Ley 15/2015 · CC art. 1128 · CC arts. 1125–1130"
    }
   ],
   "pregunta": "¿Concurren los presupuestos habilitantes de la fijación judicial del plazo?",
   "opciones": [
    {
     "texto": "Sí, concurren todos los presupuestos",
     "tono": "t-nota",
     "destino": "fp_admision"
    },
    {
     "texto": "No, falta alguno de los presupuestos o la obligación no está vigente",
     "tono": "t-nota",
     "destino": "fin_inadmision_fp"
    }
   ]
  },
  "fp_admision": {
   "fase": 2,
   "titulo": "Fijación del plazo — admisión y remisión a normas comunes",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la solicitud, el expediente se tramita por las normas comunes de la Ley 15/2015. El art. 96 hace una remisión expresa."
    },
    {
     "tipo": "lista",
     "titulo": "Normas comunes aplicables (Ley 15/2015, arts. 13 a 22)",
     "items": [
      "Iniciación del expediente y admisión de la solicitud.",
      "Citación y comparecencia de los interesados.",
      "Práctica de la prueba.",
      "Decisión y recursos."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El LAJ dicta decreto de admisión, cita a los interesados y convoca comparecencia si procede. Los actos de admisión son competencia del LAJ; la resolución final es competencia del Juez."
    },
    {
     "tipo": "ley",
     "texto": "Art. 96 Ley 15/2015 · Arts. 13 a 22 Ley 15/2015."
    }
   ],
   "siguiente": "fp_tramitacion"
  },
  "fp_tramitacion": {
   "fase": 3,
   "titulo": "Fijación del plazo — tramitación y eventual oposición",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Tras la comparecencia, puede producirse o no oposición de los interesados. Este punto es decisivo: la oposición transforma el cauce de jurisdicción voluntaria en contencioso."
    },
    {
     "tipo": "nota",
     "texto": "Si se suscitare oposición, el expediente se hará contencioso y el LAJ citará a los interesados a una vista, continuando la tramitación con arreglo a lo previsto para el juicio verbal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 97.3 Ley 15/2015 · LEC arts. 437 y siguientes."
    }
   ],
   "pregunta": "¿Se suscita oposición en el expediente?",
   "opciones": [
    {
     "texto": "Sí, algún interesado se opone",
     "tono": "t-nota",
     "destino": "fin_contencioso_fp"
    },
    {
     "texto": "No, no se suscita oposición",
     "tono": "t-nota",
     "destino": "fp_resolucion"
    }
   ]
  },
  "fp_resolucion": {
   "fase": 5,
   "titulo": "Fijación del plazo — resolución judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicada la prueba y oídos los interesados, el Juez resuelve por auto en los cinco días siguientes a la comparecencia (art. 19.1 Ley 15/2015)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido posible del auto",
     "items": [
      "Auto estimando la solicitud y fijando el plazo conforme a la naturaleza y circunstancias de la obligación (supuestos del art. 1128 CC).",
      "Auto desestimatorio si no se acreditan los presupuestos o si la obligación ya está sujeta a plazo cierto."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 96 Ley 15/2015 (remisión a normas comunes) · Arts. 19 a 22 Ley 15/2015 · CC art. 1128."
    }
   ],
   "pregunta": "¿Qué resuelve el Juez?",
   "opciones": [
    {
     "texto": "Auto estimatorio: fija el plazo para el cumplimiento",
     "tono": "t-nota",
     "destino": "fin_exito_fp"
    },
    {
     "texto": "Auto desestimatorio: no ha lugar a fijar plazo",
     "tono": "t-nota",
     "destino": "fin_desestimado_fp"
    }
   ]
  },
  "cg_ambito": {
   "fase": 0,
   "titulo": "Consignación — examen del ámbito de aplicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica que el expediente entra en el ámbito del Capítulo II: se aplica cuando, procediendo la consignación conforme a la ley, se realice ante el órgano judicial. La consignación puede hacerse también ante Notario (art. 1178 CC; art. 69 LN), por un cauce distinto."
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos sustantivos de procedencia (art. 1176 CC)",
     "items": [
      "Negativa injustificada del acreedor a admitir el ofrecimiento de pago, a otorgar el documento justificativo o a cancelar la garantía.",
      "Ausencia del acreedor en el lugar en donde el pago deba realizarse.",
      "Impedimento del acreedor para recibir el pago en el momento en que deba hacerse.",
      "Concurrencia de varias personas que pretendan tener derecho a cobrar.",
      "Desconocimiento del acreedor.",
      "Extravío del título que lleve incorporada la obligación.",
      "Cláusula de cierre: en todo caso, procederá la consignación en todos aquellos supuestos en que el cumplimiento de la obligación se haga más gravoso al deudor por causas no imputables al mismo."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 98.1 Ley 15/2015 · CC arts. 1176 y 1178 · LN art. 69"
    }
   ],
   "pregunta": "¿Concurre algún supuesto habilitante de consignación judicial?",
   "opciones": [
    {
     "texto": "Sí, concurre uno de los supuestos del art. 1176 CC o la cláusula de cierre",
     "tono": "t-nota",
     "destino": "cg_competencia"
    },
    {
     "texto": "No concurre ningún supuesto habilitante",
     "tono": "t-nota",
     "destino": "fin_no_procede_cg"
    }
   ]
  },
  "cg_competencia": {
   "fase": 1,
   "titulo": "Consignación — examen de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acreditada la procedencia, el LAJ examina la competencia territorial conforme al art. 98.2."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas de competencia (art. 98.2)",
     "items": [
      "Regla principal: Juzgado de Primera Instancia correspondiente al lugar donde deba cumplirse la obligación.",
      "Pluralidad de lugares de cumplimiento: si pudiera cumplirse en distintos lugares, cualquiera de ellos a elección del solicitante.",
      "Regla supletoria: en su defecto, será competente el que corresponda al domicilio del deudor."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección Civil del Tribunal de Instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 98.2 Ley 15/2015."
    }
   ],
   "pregunta": "¿Resulta competente este Juzgado?",
   "opciones": [
    {
     "texto": "Sí, el fuero encaja en alguna de las reglas del art. 98.2",
     "tono": "t-nota",
     "destino": "cg_legitimacion"
    },
    {
     "texto": "No, no hay competencia territorial en este Juzgado",
     "tono": "t-nota",
     "destino": "fin_incompetencia_cg"
    }
   ]
  },
  "cg_legitimacion": {
   "fase": 1,
   "titulo": "Consignación — examen de la legitimación activa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ comprueba quién promueve el expediente. Podrá promoverlo el deudor o un tercero."
    },
    {
     "tipo": "nota",
     "texto": "La legitimación del tercero se rige por el artículo 1178 del Código Civil y por las reglas del pago por tercero de los artículos 1158, 1159 y 1210.2.º del Código Civil."
    },
    {
     "tipo": "ley",
     "texto": "CC art. 1178 · CC arts. 1158, 1159 y 1210.2.º."
    }
   ],
   "pregunta": "¿Quién promueve la consignación?",
   "opciones": [
    {
     "texto": "El propio deudor",
     "tono": "t-nota",
     "destino": "cg_postulacion"
    },
    {
     "texto": "Un tercero legitimado (pago por tercero, arts. 1158, 1159 y 1210.2.º CC)",
     "tono": "t-nota",
     "destino": "cg_postulacion"
    }
   ]
  },
  "cg_postulacion": {
   "fase": 1,
   "titulo": "Consignación — postulación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "Para la actuación en el presente expediente no será preceptiva la intervención de Abogado ni Procurador (art. 98.3)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 98.3 Ley 15/2015 · Art. 3 Ley 15/2015."
    },
    {
     "tipo": "info",
     "texto": "Verificados ámbito, competencia, legitimación y postulación, se pasa al examen formal de la solicitud del art. 99.1."
    }
   ],
   "siguiente": "cg_solicitud"
  },
  "cg_solicitud": {
   "fase": 2,
   "titulo": "Consignación — examen formal de la solicitud (art. 99.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica que la solicitud reúne todos los extremos exigidos por el art. 99.1."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido mínimo de la solicitud",
     "items": [
      "Datos y circunstancias de identificación de los interesados en la obligación a que se refiera la consignación.",
      "Domicilio o domicilios en que puedan ser citados.",
      "Razones de la consignación.",
      "Todo lo relativo al objeto de la consignación, su puesta a disposición del órgano judicial y, en su caso, lo que se solicite en cuanto a su depósito."
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si la solicitud no reuniera los requisitos necesarios, el LAJ dictará decreto que así lo declare y mandará devolver al promotor lo consignado (art. 99.2, primer inciso)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.1 y 99.2 Ley 15/2015."
    }
   ],
   "pregunta": "¿La solicitud reúne los requisitos formales del art. 99.1?",
   "opciones": [
    {
     "texto": "Sí, la solicitud está completa",
     "tono": "t-nota",
     "destino": "cg_actos_previos"
    },
    {
     "texto": "No, faltan requisitos formales",
     "tono": "t-nota",
     "destino": "fin_inadmision_cg"
    }
   ]
  },
  "cg_actos_previos": {
   "fase": 2,
   "titulo": "Consignación — acreditación de los actos previos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con la solicitud, el promotor debe acreditar los actos previos que exige la legislación sustantiva."
    },
    {
     "tipo": "lista",
     "titulo": "Actos previos acreditables",
     "items": [
      "Ofrecimiento de pago, si procediera, en cumplimiento del artículo 1176 del Código Civil.",
      "Anuncio de la consignación al acreedor y demás interesados en la obligación, en todo caso, tal y como exige sin excepción el artículo 1177 del Código Civil."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El ofrecimiento de pago y el anuncio de la consignación son trámites distintos que, aun realizados con unidad de acto, deben diferenciarse y documentarse separadamente, especialmente cuando se instrumenten mediante requerimiento notarial."
    },
    {
     "tipo": "aviso",
     "texto": "El anuncio de la consignación es exigido en todo caso por el art. 1177 CC. El ofrecimiento de pago procederá cuando lo exija la naturaleza del supuesto (p. ej., no procede en los casos de desconocimiento del acreedor o extravío del título)."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 1176 y 1177."
    }
   ],
   "pregunta": "¿Están acreditados correctamente los actos previos exigibles?",
   "opciones": [
    {
     "texto": "Sí, constan ofrecimiento (si procede) y anuncio",
     "tono": "t-nota",
     "destino": "cg_puesta_disposicion"
    },
    {
     "texto": "No procede ofrecimiento por la naturaleza del supuesto; consta el anuncio",
     "tono": "t-nota",
     "destino": "cg_puesta_disposicion"
    },
    {
     "texto": "Falta el anuncio de la consignación o el ofrecimiento exigible",
     "tono": "t-nota",
     "destino": "fin_inadmision_cg"
    }
   ]
  },
  "cg_puesta_disposicion": {
   "fase": 2,
   "titulo": "Consignación — puesta a disposición de la cosa debida",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con la solicitud se habrá de efectuar la puesta a disposición de la cosa debida, sin perjuicio de que posteriormente pueda designarse como depositario al propio promotor."
    },
    {
     "tipo": "nota",
     "texto": "Concordancia con el artículo 1178 del Código Civil, conforme al cual la consignación se hará depositando las cosas debidas a disposición de la Autoridad judicial, con notificación posterior a los interesados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.1 Ley 15/2015 · CC art. 1178."
    }
   ],
   "siguiente": "cg_admision"
  },
  "cg_admision": {
   "fase": 3,
   "titulo": "Consignación — decreto de admisión y notificación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cumplidos los requisitos, el LAJ dicta decreto de admisión y realiza los siguientes trámites."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ (art. 99.2, segundo inciso)",
     "items": [
      "Dictar decreto admitiendo la solicitud.",
      "Notificar a los interesados la existencia de la consignación.",
      "Adoptar las medidas oportunas en cuanto al depósito de la cosa debida."
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "10 días desde la notificación para que los interesados retiren la cosa debida o realicen las alegaciones que consideren oportunas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.2 Ley 15/2015."
    }
   ],
   "siguiente": "cg_respuesta_interesados"
  },
  "cg_respuesta_interesados": {
   "fase": 4,
   "titulo": "Consignación — respuesta de los interesados dentro del plazo de 10 días",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido el plazo de diez días, el LAJ constata cuál de los posibles escenarios se ha producido. De ello depende radicalmente el curso del expediente."
    },
    {
     "tipo": "plazo",
     "texto": "10 días (art. 99.2) para que los interesados actúen tras la notificación de la consignación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.3 y 99.4 Ley 15/2015."
    }
   ],
   "pregunta": "¿Cómo han reaccionado los interesados en el plazo de 10 días?",
   "opciones": [
    {
     "texto": "Comparecen, retiran la cosa debida y aceptan expresamente la consignación",
     "tono": "t-nota",
     "destino": "cg_aceptacion_expresa"
    },
    {
     "texto": "No retiran la cosa, no realizan ninguna alegación o rechazan la consignación",
     "tono": "t-nota",
     "destino": "cg_traslado_promotor"
    }
   ]
  },
  "cg_aceptacion_expresa": {
   "fase": 5,
   "titulo": "Consignación — aceptación expresa por los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando los interesados comparecidos retirasen la cosa debida aceptando expresamente la consignación, el LAJ dictará decreto teniéndola por aceptada, con los efectos legales procedentes, mandando cancelar la obligación y, en su caso, la garantía, si así lo solicitara el promotor."
    },
    {
     "tipo": "nota",
     "texto": "Proyección del artículo 1180 del Código Civil: hecha debidamente la consignación, podrá el deudor pedir al Juez que mande cancelar la obligación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.3 Ley 15/2015 · CC art. 1180."
    }
   ],
   "siguiente": "fin_aceptacion_cg"
  },
  "cg_traslado_promotor": {
   "fase": 4,
   "titulo": "Consignación — traslado al promotor tras la inactividad o el rechazo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si transcurrido el plazo los interesados no procedieran a retirar la cosa debida, no realizaran ninguna alegación o rechazaran la consignación, se dará traslado al promotor."
    },
    {
     "tipo": "plazo",
     "texto": "5 días para que el promotor inste la devolución de lo consignado o el mantenimiento de la consignación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4, primer inciso, Ley 15/2015."
    }
   ],
   "pregunta": "¿Qué solicita el promotor dentro del plazo de 5 días?",
   "opciones": [
    {
     "texto": "Insta la devolución de lo consignado",
     "tono": "t-nota",
     "destino": "cg_devolucion_traslado_acreedor"
    },
    {
     "texto": "Insta el mantenimiento de la consignación",
     "tono": "t-nota",
     "destino": "cg_comparecencia"
    },
    {
     "texto": "No responde en plazo",
     "tono": "t-nota",
     "destino": "fin_silencio_promotor"
    }
   ]
  },
  "cg_devolucion_traslado_acreedor": {
   "fase": 4,
   "titulo": "Consignación — traslado al acreedor de la petición de devolución",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el caso de que el promotor solicitara la devolución de lo consignado, se dará traslado de la petición al acreedor."
    },
    {
     "tipo": "plazo",
     "texto": "5 días para que el acreedor se pronuncie sobre la devolución."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4 Ley 15/2015."
    }
   ],
   "pregunta": "¿Autoriza el acreedor la retirada de lo consignado?",
   "opciones": [
    {
     "texto": "Sí, el acreedor autoriza al promotor a retirar lo consignado",
     "tono": "t-nota",
     "destino": "fin_devolucion_autorizada"
    },
    {
     "texto": "No autoriza / el promotor retira la cosa por su exclusiva voluntad",
     "tono": "t-nota",
     "destino": "fin_devolucion_unilateral"
    }
   ]
  },
  "cg_comparecencia": {
   "fase": 4,
   "titulo": "Consignación — comparecencia ante el Juez",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el promotor instara el mantenimiento de la consignación, el LAJ citará al promotor, al acreedor y a aquellos que pudieran estar interesados a una comparecencia a celebrar ante el Juez, en la que serán oídos y se practicarán aquellas pruebas que hubieren sido propuestas y acordadas."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia se tramita conforme a las normas comunes de los artículos 17 a 19 de la Ley 15/2015 y, supletoriamente, a la Ley de Enjuiciamiento Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4, segundo inciso, Ley 15/2015 · Arts. 17 a 19 Ley 15/2015 · LEC (supletoria)."
    }
   ],
   "siguiente": "cg_resolucion"
  },
  "cg_resolucion": {
   "fase": 5,
   "titulo": "Consignación — resolución judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Celebrada la comparecencia, el Juez resolverá teniendo en cuenta la justificación ofrecida, la obligación y la concurrencia en la consignación de los requisitos que correspondan, declarando o no estar bien hecha la misma."
    },
    {
     "tipo": "lista",
     "titulo": "Alcance de la resolución (art. 99.5)",
     "items": [
      "Si tuviere por bien hecha la consignación, ésta producirá los efectos legales procedentes, se entregará al acreedor la cosa consignada y se mandará cancelar la obligación si el promotor lo solicitare.",
      "En caso contrario, la obligación subsistirá y se devolverá al promotor lo consignado."
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "El efecto liberatorio de la consignación no se produce por la mera actividad del deudor al depositar lo adeudado, sino que es necesaria la aceptación del acreedor o la resolución judicial que declare bien hecha la consignación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.5 Ley 15/2015 · CC arts. 1180 y 1181."
    }
   ],
   "pregunta": "¿Qué declara el Juez?",
   "opciones": [
    {
     "texto": "Declara bien hecha la consignación",
     "tono": "t-nota",
     "destino": "fin_bien_hecha"
    },
    {
     "texto": "No declara bien hecha la consignación",
     "tono": "t-nota",
     "destino": "fin_mal_hecha"
    }
   ]
  },
  "fin_derivacion_notarial": {
   "fase": 0,
   "titulo": "Ofrecimiento de pago y consignación ante Notario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El ofrecimiento de pago y la consignación pueden hacerse ante Notario (art. 69 LN; art. 1178 CC). Es una vía alternativa a la judicial de los arts. 98 y 99 LJV, que el promotor elige."
    },
    {
     "tipo": "ley",
     "texto": "Art. 98.1 Ley 15/2015 · Art. 1178 CC · Art. 69 LN"
    }
   ],
   "fin": "neutral"
  },
  "fin_incompetencia_fp": {
   "fase": 1,
   "titulo": "Declinación de la competencia — fijación del plazo",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado carece de competencia territorial para conocer del expediente conforme al art. 97.1. Procede declarar la incompetencia y remitir al órgano que resulte competente."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ da cuenta al Juez, que, oídos el Fiscal y el solicitante, acuerda lo procedente y remite al órgano competente (art. 16.3 LJV) (el del domicilio del deudor o, en los supuestos de consumidor-empresario, el del domicilio del acreedor a elección de este)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 97.1 Ley 15/2015 · Art. 16.3 Ley 15/2015."
    }
   ],
   "fin": "error"
  },
  "fin_inadmision_fp": {
   "fase": 2,
   "titulo": "Inadmisión — fijación del plazo",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No concurren los presupuestos habilitantes del art. 96 y del art. 1128 CC. El expediente no puede ser admitido."
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos típicos de inadmisión",
     "items": [
      "La obligación ya tiene señalado plazo cierto y no depende de la sola voluntad del deudor.",
      "La relación jurídica se ha extinguido por satisfacción o por otra causa.",
      "Falta de solicitud de parte interesada (intento de actuación de oficio)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El art. 96 exige que la pida alguno de los sujetos de la obligación. Si la solicitud no es admisible, el LAJ da cuenta al Juez, que resuelve (art. 17.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 17.1 y 96 Ley 15/2015 · CC art. 1128"
    }
   ],
   "fin": "error"
  },
  "fin_contencioso_fp": {
   "fase": 4,
   "titulo": "Conversión en contencioso — juicio verbal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La oposición del interesado transforma el cauce de jurisdicción voluntaria en contencioso."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones tras la oposición (art. 97.3)",
     "items": [
      "El expediente se hace contencioso.",
      "El LAJ cita a los interesados a una vista.",
      "La tramitación continúa con arreglo a lo previsto para el juicio verbal (arts. 437 y siguientes LEC)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "A partir de ese momento ya no se está ante un expediente de jurisdicción voluntaria, sino ante un proceso contencioso declarativo, con las reglas de postulación y práctica de prueba del juicio verbal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 97.3 Ley 15/2015 · LEC arts. 437 y siguientes."
    }
   ],
   "fin": "warning"
  },
  "fin_exito_fp": {
   "fase": 5,
   "titulo": "Auto estimatorio — plazo judicialmente fijado",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto fijando la duración del plazo para el cumplimiento, conforme a la naturaleza y circunstancias de la obligación o, en el segundo supuesto del art. 1128 CC, cuando el plazo hubiera quedado a voluntad del deudor."
    },
    {
     "tipo": "nota",
     "texto": "La resolución se rige por las normas comunes de la Ley 15/2015. Notificada y firme, integra el contenido obligacional y permite exigir el cumplimiento al vencimiento del plazo así fijado."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación, sin efectos suspensivos, en veinte días ante la Audiencia Provincial (art. 20.2 LJV; art. 458 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 96 Ley 15/2015 · CC art. 1128 · Normas comunes Ley 15/2015."
    }
   ],
   "fin": "success"
  },
  "fin_desestimado_fp": {
   "fase": 5,
   "titulo": "Auto desestimatorio — no ha lugar a fijar plazo",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto desestimando la solicitud por no concurrir los presupuestos o por no ser necesaria la fijación judicial del plazo."
    },
    {
     "tipo": "nota",
     "texto": "La obligación mantiene el régimen temporal que le corresponda conforme a su título o a las reglas generales del Código Civil."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación (art. 20.2 LJV; art. 458 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 96 Ley 15/2015 · CC arts. 1125 a 1130."
    }
   ],
   "fin": "error"
  },
  "fin_no_procede_cg": {
   "fase": 0,
   "titulo": "No procede la consignación judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No concurre ninguno de los supuestos del art. 1176 CC: la consignación no procede conforme a la ley (art. 98.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si la solicitud no reúne los requisitos necesarios, el LAJ dicta decreto que así lo declara y manda devolver al promotor lo consignado (art. 99.2 LJV); cabe recurso de revisión ante el Juez (art. 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 98.1, 99.2 y 20.2 Ley 15/2015 · CC art. 1176"
    }
   ],
   "fin": "error"
  },
  "fin_incompetencia_cg": {
   "fase": 1,
   "titulo": "Declinación de la competencia — consignación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado carece de competencia territorial para conocer del expediente conforme al art. 98.2. Procede declarar la incompetencia y, en su caso, indicar el órgano competente."
    },
    {
     "tipo": "lista",
     "titulo": "Órganos potencialmente competentes",
     "items": [
      "El Juzgado de Primera Instancia del lugar donde deba cumplirse la obligación.",
      "En pluralidad de lugares: cualquiera de ellos, a elección del solicitante.",
      "En su defecto, el del domicilio del deudor."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El LAJ da cuenta al Juez, que, oídos el Fiscal y el solicitante, acuerda la remisión al órgano competente (art. 16.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.3 y 98.2 Ley 15/2015"
    }
   ],
   "fin": "error"
  },
  "fin_inadmision_cg": {
   "fase": 2,
   "titulo": "Inadmisión de la solicitud — consignación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud no reúne los requisitos del art. 99.1 o falta la acreditación de los actos previos (ofrecimiento de pago cuando proceda y anuncio de la consignación en todo caso)."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la inadmisión (art. 99.2, primer inciso)",
     "items": [
      "El LAJ dictará decreto declarando la inadmisión.",
      "Mandará devolver al promotor lo consignado."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Contra el decreto cabe recurso de revisión ante el Juez (art. 20.2 LJV; art. 454 bis LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.1 y 99.2 Ley 15/2015 · CC arts. 1176 y 1177."
    }
   ],
   "fin": "error"
  },
  "fin_aceptacion_cg": {
   "fase": 5,
   "titulo": "Aceptación expresa — decreto y cancelación de la obligación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto teniendo por aceptada la consignación, con los efectos legales procedentes, y manda cancelar la obligación y, en su caso, la garantía, si así lo solicitara el promotor."
    },
    {
     "tipo": "nota",
     "texto": "Este desenlace se produce por la sola voluntad expresa del acreedor, sin necesidad de resolución judicial previa sobre la corrección de la consignación. Es la vía más rápida de extinción de la obligación por consignación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.3 Ley 15/2015 · CC art. 1180."
    }
   ],
   "fin": "success"
  },
  "fin_silencio_promotor": {
   "fase": 4,
   "titulo": "Silencio del promotor tras el traslado de 5 días",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El promotor no ha instado ni la devolución ni el mantenimiento de la consignación dentro del plazo de 5 días. Esta situación no encuentra una solución expresa en el art. 99.4."
    },
    {
     "tipo": "nota",
     "texto": "La ausencia de impulso del promotor debe reconducirse por las normas comunes de la Ley 15/2015 y, supletoriamente, por la LEC. En la práctica, procede instar la resolución que corresponda para evitar la paralización indefinida del expediente y del depósito."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4 Ley 15/2015 · LEC (supletoria) · Art. 8 Ley 15/2015."
    }
   ],
   "fin": "warning"
  },
  "fin_devolucion_autorizada": {
   "fase": 5,
   "titulo": "Devolución autorizada — archivo y pérdida de preferencias",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el acreedor autorizara al promotor a retirar lo consignado, el LAJ dictará decreto acordando el archivo del expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos materiales (art. 99.4 · CC art. 1181)",
     "items": [
      "El acreedor perderá toda preferencia que tuviere sobre la cosa.",
      "Los copromotores y fiadores quedarán libres."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los efectos son concordantes con el artículo 1181 del Código Civil. Este desenlace es favorable al promotor porque recupera el objeto consignado con las garantías normativas sobre las preferencias y sobre los copromotores y fiadores."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4 Ley 15/2015 · CC art. 1181."
    }
   ],
   "fin": "success"
  },
  "fin_devolucion_unilateral": {
   "fase": 5,
   "titulo": "Retirada unilateral — obligación subsistente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la cosa fuera retirada por la exclusiva voluntad del promotor, el archivo del expediente dejará subsistente la obligación."
    },
    {
     "tipo": "nota",
     "texto": "Armonía con el artículo 1180, párrafo segundo, del Código Civil, que permite al deudor retirar la cosa o cantidad consignada mientras no exista aceptación o declaración judicial de estar bien hecha, dejando subsistente la obligación."
    },
    {
     "tipo": "aviso",
     "texto": "El efecto es radicalmente distinto al de la devolución autorizada: aquí la obligación no se extingue, ni el acreedor pierde preferencias, ni los copromotores y fiadores quedan liberados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.4 Ley 15/2015 · CC art. 1180, párrafo segundo."
    }
   ],
   "fin": "warning"
  },
  "fin_bien_hecha": {
   "fase": 5,
   "titulo": "Consignación bien hecha — efecto liberatorio",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez declara bien hecha la consignación. Ésta produce los efectos legales procedentes."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos (art. 99.5)",
     "items": [
      "Se entregará al acreedor la cosa consignada.",
      "Se mandará cancelar la obligación si el promotor lo solicitare."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Es el desenlace pleno del Capítulo II: la consignación despliega eficacia liberatoria para el deudor y extingue la obligación cuando así se solicite."
    },
    {
     "tipo": "aviso",
     "texto": "Gastos: los gastos ocasionados por la consignación serán de cuenta del acreedor si fuera aceptada o se declarase estar bien hecha (art. 99.6 · CC art. 1179)."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación (art. 20.2 LJV; art. 458 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.5 y 99.6 Ley 15/2015 · CC arts. 1179, 1180 y 1181."
    }
   ],
   "fin": "success"
  },
  "fin_mal_hecha": {
   "fase": 5,
   "titulo": "Consignación no bien hecha — obligación subsistente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez no declara bien hecha la consignación. En consecuencia, la obligación subsistirá y se devolverá al promotor lo consignado."
    },
    {
     "tipo": "nota",
     "texto": "No se produce el efecto liberatorio: el deudor continúa obligado al cumplimiento conforme al título originario."
    },
    {
     "tipo": "aviso",
     "texto": "Gastos: los gastos serán de cuenta del promotor si la consignación fuera declarada improcedente o retirase la cosa consignada (art. 99.6)."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación (art. 20.2 LJV; art. 458 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 99.5 y 99.6 Ley 15/2015 · CC art. 1179."
    }
   ],
   "fin": "error"
  }
 }
});
