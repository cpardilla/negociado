/* Migrado por tools/migrate.js desde sources/actual/G01.json; revisado con el BOE (registro: docs/revision/lec-diligencias-preliminares.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-diligencias-preliminares",
 "ley": "LEC",
 "titulo": "De las diligencias preliminares (artículos 256 a 263 LEC)",
 "corto": "Diligencias preliminares",
 "articulos": [
  "256",
  "257",
  "258",
  "259",
  "260",
  "261",
  "262",
  "263"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20261007",
  "origen": "G01"
 },
 "fases": [
  "Solicitud y Preparación",
  "Competencia",
  "Admisión y Caución",
  "Citación y Práctica",
  "Oposición",
  "Negativa y Ejecución",
  "Caución y Cierre"
 ],
 "actores": {
  "ambos": "Juez + LAJ",
  "juez": "Juez / Tribunal",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Recepción de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se presenta la solicitud de diligencias preliminares para preparar un juicio. Solo caben las diligencias del art. 256.1 LEC (y las de leyes especiales, núm. 9.º)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 256.1 LEC: «Todo juicio podrá prepararse» por las diligencias que enumera (núms. 1.º a 11.º)."
    },
    {
     "tipo": "lista",
     "titulo": "Comprobación inicial",
     "items": [
      "La diligencia pedida es una de las del art. 256.1 LEC",
      "La solicitud expresa sus fundamentos, con referencia circunstanciada al asunto del juicio que se quiere preparar (art. 256.2)",
      "Se ofrece caución para los gastos y los daños y perjuicios de quienes intervengan (art. 256.3)",
      "Núm. 8.º: se acompaña principio de prueba de la infracción"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los gastos de las personas que intervengan en las diligencias son a cargo del solicitante (art. 256.3 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "No hace falta acudir antes a un medio adecuado de solución de controversias: el requisito de procedibilidad no se exige para solicitar diligencias preliminares (art. 5.3 LO 1/2025)."
    }
   ],
   "pregunta": "¿Qué diligencia se pide?",
   "opciones": [
    {
     "texto": "1.º Declaración o documentos sobre capacidad, representación o legitimación",
     "tono": "t-ok",
     "destino": "det_256_1_1"
    },
    {
     "texto": "2.º Exhibición de la cosa a la que se refiera el juicio",
     "tono": "t-nota",
     "destino": "det_256_1_2"
    },
    {
     "texto": "3.º Exhibición del acto de última voluntad",
     "tono": "t-nota",
     "destino": "det_256_1_3"
    },
    {
     "texto": "4.º Documentos y cuentas de sociedad o comunidad",
     "tono": "t-nota",
     "destino": "det_256_1_4"
    },
    {
     "texto": "5.º Contrato de seguro de responsabilidad civil",
     "tono": "t-nota",
     "destino": "det_256_1_5"
    },
    {
     "texto": "5.º bis Historia clínica",
     "tono": "t-nota",
     "destino": "det_256_1_5bis"
    },
    {
     "texto": "6.º Integrantes de un grupo de consumidores",
     "tono": "t-nota",
     "destino": "det_256_1_6"
    },
    {
     "texto": "7.º Datos sobre infracción de propiedad industrial o intelectual",
     "tono": "t-plazo",
     "destino": "det_256_1_7"
    },
    {
     "texto": "8.º Documentos bancarios, financieros, comerciales o aduaneros (escala comercial)",
     "tono": "t-plazo",
     "destino": "det_256_1_8"
    },
    {
     "texto": "9.º Diligencias previstas en leyes especiales",
     "tono": "t-nota",
     "destino": "det_256_1_9"
    },
    {
     "texto": "10.º Identificación de un prestador de servicios de la sociedad de la información",
     "tono": "t-plazo",
     "destino": "det_256_1_10"
    },
    {
     "texto": "11.º Identificación de un usuario de servicios de la sociedad de la información",
     "tono": "t-plazo",
     "destino": "det_256_1_11"
    }
   ]
  },
  "det_256_1_1": {
   "fase": 0,
   "titulo": "Capacidad, representación o legitimación (art. 256.1.1.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Petición de que la persona a quien se dirigiría la demanda declare, bajo juramento o promesa de decir verdad, sobre algún hecho relativo a su capacidad, representación o legitimación cuyo conocimiento sea necesario para el pleito, o exhiba los documentos en que conste."
    },
    {
     "tipo": "nota",
     "texto": "Si no atiende el requerimiento ni se opone, pueden tenerse por respondidas afirmativamente las preguntas (art. 261.1.ª LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_2": {
   "fase": 0,
   "titulo": "Exhibición de la cosa (art. 256.1.2.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Solicitud de que la persona a la que se pretende demandar exhiba la cosa que tenga en su poder y a la que se haya de referir el juicio."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_3": {
   "fase": 0,
   "titulo": "Exhibición del acto de última voluntad (art. 256.1.3.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Petición de quien se considere heredero, coheredero o legatario de que se exhiba, por quien lo tenga en su poder, el acto de última voluntad del causante."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_4": {
   "fase": 0,
   "titulo": "Documentos y cuentas de sociedad o comunidad (art. 256.1.4.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Petición de un socio o comunero para que se le exhiban los documentos y cuentas de la sociedad o comunidad, dirigida a estas o al consocio o condueño que los tenga."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_5": {
   "fase": 0,
   "titulo": "Contrato de seguro de responsabilidad civil (art. 256.1.5.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Petición de quien se considere perjudicado por un hecho que pudiera estar cubierto por seguro de responsabilidad civil, de que se exhiba el contrato de seguro por quien lo tenga en su poder."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_5bis": {
   "fase": 0,
   "titulo": "Historia clínica (art. 256.1.5.º bis LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Petición de la historia clínica al centro sanitario o profesional que la custodie, en las condiciones y con el contenido que establece la ley."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_6": {
   "fase": 0,
   "titulo": "Integrantes de un grupo de consumidores (art. 256.1.6.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para quien pretenda iniciar un proceso en defensa de intereses colectivos de consumidores y usuarios, a fin de concretar a los integrantes del grupo cuando, no estando determinados, sean fácilmente determinables. El tribunal adopta las medidas oportunas, incluido el requerimiento al demandado para que colabore."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia: el tribunal ante el que haya de presentarse la demanda (art. 257.1, párrafo segundo, LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_7": {
   "fase": 0,
   "titulo": "Datos sobre una infracción de propiedad industrial o intelectual (art. 256.1.7.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para quien pretenda ejercitar una acción por infracción cometida mediante actos que no sean de meros consumidores finales de buena fe y sin ánimo de lucro: datos sobre el posible infractor, el origen y las redes de distribución; en particular, nombres y direcciones de productores, fabricantes, distribuidores y mayoristas o minoristas, y cantidades y precios."
    },
    {
     "tipo": "nota",
     "texto": "Puede acordarse que el interrogatorio sea a puerta cerrada (art. 259.3 LEC). La información obtenida solo puede usarse para la tutela jurisdiccional del derecho (art. 259.4 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia: el tribunal ante el que haya de presentarse la demanda (art. 257.1, párrafo segundo, LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_8": {
   "fase": 0,
   "titulo": "Documentos bancarios, financieros, comerciales o aduaneros (art. 256.1.8.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para quien pretenda ejercitar una acción por infracción de propiedad industrial o intelectual cometida a escala comercial (para obtener beneficios económicos o comerciales directos o indirectos): exhibición de esos documentos, producidos en un determinado tiempo, que se presuman en poder del futuro demandado."
    },
    {
     "tipo": "aviso",
     "texto": "La solicitud debe acompañarse de un principio de prueba de la infracción (p. ej., una muestra de los productos). Puede pedirse testimonio de los documentos si el requerido no quiere desprenderse de ellos."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia: el tribunal ante el que haya de presentarse la demanda (art. 257.1, párrafo segundo, LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_9": {
   "fase": 0,
   "titulo": "Diligencias de leyes especiales (art. 256.1.9.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias y averiguaciones que, para la protección de determinados derechos, prevean las leyes especiales."
    },
    {
     "tipo": "nota",
     "texto": "Se aplica este capítulo de la LEC en lo que no se oponga a la ley especial (art. 263 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia: el tribunal ante el que haya de presentarse la demanda (art. 257.1, párrafo segundo, LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_10": {
   "fase": 0,
   "titulo": "Identificación de un prestador de servicios de la sociedad de la información (art. 256.1.10.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para quien pretenda ejercitar una acción por infracción de propiedad industrial o intelectual: identificación de un prestador de servicios de la sociedad de la información del que haya indicios razonables de que difunde contenidos protegidos sin autorización, con audiencia o volumen apreciable en España."
    },
    {
     "tipo": "nota",
     "texto": "Puede dirigirse a los prestadores de servicios de la sociedad de la información, de pagos electrónicos y de publicidad que hayan mantenido relación con él en los últimos doce meses. La información solo puede usarse para la tutela jurisdiccional del derecho (art. 259.4 LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_11": {
   "fase": 0,
   "titulo": "Identificación de un usuario de servicios de la sociedad de la información (art. 256.1.11.º LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para el titular de un derecho de propiedad intelectual: que un prestador de servicios de la sociedad de la información aporte los datos para identificar a un usuario (relación en los últimos doce meses) del que haya indicios razonables de que difunde contenidos protegidos sin autorización, mediante actos que no sean de meros consumidores finales de buena fe y sin ánimo de lucro, con volumen apreciable."
    },
    {
     "tipo": "nota",
     "texto": "La información solo puede usarse para la tutela jurisdiccional del derecho (art. 259.4 LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "solicitud_formal": {
   "fase": 0,
   "titulo": "Contenido de la solicitud",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "ley",
     "texto": "Art. 256.2 LEC: «En la solicitud de diligencias preliminares se expresarán sus fundamentos, con referencia circunstanciada al asunto objeto del juicio que se quiera preparar»."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido",
     "items": [
      "Diligencia que se pide (art. 256.1)",
      "Fundamentos y referencia circunstanciada al asunto del juicio",
      "Persona que ha de declarar, exhibir o intervenir",
      "Ofrecimiento de caución (art. 256.3); puede prestarse en la forma del art. 64.2, párrafo segundo, LEC"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si, en el mes siguiente a la terminación de las diligencias, no se interpone la demanda sin justificación suficiente a juicio del tribunal, la caución se pierde a favor de las personas que intervinieron (art. 256.3 LEC)."
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Competencia (art. 257 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admite declinatoria: el juez revisa de oficio su competencia (art. 257.2)."
    }
   ],
   "pregunta": "¿Es una diligencia de los núms. 6.º, 7.º, 8.º o 9.º?",
   "opciones": [
    {
     "texto": "Sí: consumidores, propiedad industrial o intelectual (7.º y 8.º), leyes especiales",
     "tono": "t-plazo",
     "destino": "comp_especial"
    },
    {
     "texto": "No: núms. 1.º a 5.º bis, 10.º y 11.º",
     "tono": "t-nota",
     "destino": "comp_general"
    }
   ]
  },
  "comp_general": {
   "fase": 1,
   "titulo": "Regla general: domicilio de quien ha de intervenir",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Juez de primera instancia o de lo mercantil, cuando proceda, del domicilio de la persona que hubiera de declarar, exhibir o intervenir en las diligencias (art. 257.1 LEC). Hoy, Sección Civil o de lo Mercantil del Tribunal de Instancia."
    },
    {
     "tipo": "nota",
     "texto": "Domicilio: persona física, art. 50 LEC (y art. 40 CC: residencia habitual); persona jurídica, art. 51.1 LEC (y art. 41 CC)."
    }
   ],
   "siguiente": "conflicto_competencia"
  },
  "comp_especial": {
   "fase": 1,
   "titulo": "Regla especial: tribunal de la futura demanda",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los núms. 6.º a 9.º es competente el tribunal ante el que haya de presentarse la demanda (art. 257.1, párrafo segundo, LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Si a raíz del resultado se piden nuevas diligencias, pueden instarse del mismo tribunal o del que resultaría competente por los hechos averiguados."
    }
   ],
   "siguiente": "conflicto_competencia"
  },
  "conflicto_competencia": {
   "fase": 1,
   "titulo": "Revisión de oficio de la competencia (art. 257.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el juez entiende que no le corresponde, se abstiene e indica al solicitante el Juzgado al que debe acudir. Si este también se inhibe, decide el conflicto negativo el tribunal inmediato superior común (art. 60 LEC)."
    }
   ],
   "pregunta": "¿Es competente el juzgado?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "resolucion_fondo"
    },
    {
     "texto": "No, y el indicado acepta",
     "tono": "t-plazo",
     "destino": "fin_abstencion"
    },
    {
     "texto": "No, y el indicado también se inhibe: conflicto negativo",
     "tono": "t-aviso",
     "destino": "resolucion_conflicto"
    }
   ]
  },
  "resolucion_conflicto": {
   "fase": 1,
   "titulo": "Conflicto negativo de competencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Lo decide el tribunal inmediato superior común conforme al art. 60 LEC."
    }
   ],
   "fin": "neutral"
  },
  "resolucion_fondo": {
   "fase": 2,
   "titulo": "Decisión sobre la solicitud (art. 258.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal accede si la diligencia es adecuada a la finalidad que persigue el solicitante y concurren justa causa e interés legítimo; si no resultan justificadas, la rechaza."
    },
    {
     "tipo": "plazo",
     "texto": "Debe resolverse en los cinco días siguientes a la presentación."
    }
   ],
   "pregunta": "¿Son adecuadas y concurren justa causa e interés legítimo?",
   "opciones": [
    {
     "texto": "Sí: auto que las acuerda",
     "tono": "t-ok",
     "destino": "auto_admision"
    },
    {
     "texto": "No: auto que las deniega",
     "tono": "t-aviso",
     "destino": "auto_denegacion"
    }
   ]
  },
  "auto_admision": {
   "fase": 2,
   "titulo": "Auto que acuerda las diligencias",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Fija la caución que deba prestarse (art. 258.1) y cita y requiere a los interesados para que, en la sede de la Oficina judicial o en el lugar y modo que se acuerden, lleven a cabo la diligencia dentro de los diez días siguientes (art. 259.1)."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto que acuerda las diligencias no cabe recurso alguno (art. 258.2 LEC)."
    }
   ],
   "siguiente": "caucion_plazo"
  },
  "auto_denegacion": {
   "fase": 2,
   "titulo": "Auto que deniega las diligencias",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contra el auto que las deniega cabe recurso de apelación (art. 258.2 LEC)."
    }
   ],
   "pregunta": "¿Se interpone apelación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "recurso_apelacion"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "fin_denegacion_aceptada"
    }
   ]
  },
  "fin_denegacion_aceptada": {
   "fase": 2,
   "titulo": "Denegación firme",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias no se practican. La denegación no impide presentar la demanda."
    }
   ],
   "fin": "error"
  },
  "recurso_apelacion": {
   "fase": 2,
   "titulo": "Apelación contra el auto que deniega",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación (art. 458.1 LEC)."
    }
   ],
   "pregunta": "¿Estima el recurso la Audiencia Provincial?",
   "opciones": [
    {
     "texto": "Sí: acuerda las diligencias",
     "tono": "t-ok",
     "destino": "auto_admision"
    },
    {
     "texto": "No: confirma la denegación",
     "tono": "t-aviso",
     "destino": "fin_denegacion_definitiva"
    }
   ]
  },
  "fin_denegacion_definitiva": {
   "fase": 2,
   "titulo": "Denegación confirmada",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias no se practican. La denegación no impide presentar la demanda."
    }
   ],
   "fin": "error"
  },
  "caucion_plazo": {
   "fase": 2,
   "titulo": "Prestación de la caución (art. 258.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Tres días desde que se dicta el auto que concede las diligencias."
    },
    {
     "tipo": "aviso",
     "texto": "Si no se presta, el Letrado de la Administración de Justicia acuerda por decreto el archivo definitivo de las actuaciones."
    }
   ],
   "pregunta": "¿Se presta la caución en tres días?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "citacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "archivo_definitivo"
    }
   ]
  },
  "archivo_definitivo": {
   "fase": 2,
   "titulo": "Archivo definitivo por falta de caución",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Decreto del Letrado de la Administración de Justicia que archiva definitivamente las actuaciones (art. 258.3 LEC)."
    }
   ],
   "fin": "error"
  },
  "citacion": {
   "fase": 3,
   "titulo": "Práctica: citación y requerimiento (art. 259 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "A tener en cuenta",
     "items": [
      "Lugar y modo de la práctica y plazo de diez días (art. 259.1)",
      "Los documentos pueden presentarse por medios telemáticos o electrónicos; se examinan en la oficina judicial y el solicitante puede obtener copia electrónica (art. 259.2)",
      "El solicitante puede acudir asesorado por un experto, a su costa (art. 259.2)",
      "Núm. 7.º: el interrogatorio puede celebrarse a puerta cerrada (art. 259.3 y 138.3 LEC)",
      "Núms. 7.º, 8.º, 10.º y 11.º: uso exclusivo para la tutela jurisdiccional; a instancia de interesado, carácter reservado de las actuaciones (art. 259.4)"
     ],
     "marcar": true
    }
   ],
   "siguiente": "respuesta_requerido"
  },
  "respuesta_requerido": {
   "fase": 3,
   "titulo": "Actitud del requerido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Puede oponerse dentro de los cinco días siguientes a aquel en que reciba la citación (art. 260.1 LEC)."
    }
   ],
   "pregunta": "¿Qué hace el requerido?",
   "opciones": [
    {
     "texto": "Atiende el requerimiento",
     "tono": "t-ok",
     "destino": "practica"
    },
    {
     "texto": "Se opone en plazo",
     "tono": "t-plazo",
     "destino": "oposicion"
    },
    {
     "texto": "Ni atiende ni se opone",
     "tono": "t-aviso",
     "destino": "negativa_tipo"
    }
   ]
  },
  "practica": {
   "fase": 3,
   "titulo": "Práctica de la diligencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se lleva a cabo la diligencia acordada en la oficina judicial o en el lugar y modo fijados."
    }
   ],
   "pregunta": "¿La cumple por completo?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "fin_diligencias_practicadas"
    },
    {
     "texto": "Solo en parte",
     "tono": "t-plazo",
     "destino": "cumplimiento_parcial"
    }
   ]
  },
  "cumplimiento_parcial": {
   "fase": 3,
   "titulo": "Cumplimiento parcial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal valora si lo aportado basta. Si el requerido no atiende el requerimiento en lo restante, pueden acordarse las medidas del art. 261 LEC."
    }
   ],
   "pregunta": "¿Es suficiente?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "fin_diligencias_practicadas"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "negativa_tipo"
    }
   ]
  },
  "fin_diligencias_practicadas": {
   "fase": 3,
   "titulo": "Diligencias practicadas",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicadas las diligencias, el tribunal resuelve sobre la aplicación de la caución (art. 262.1 LEC) y empieza a contar el mes para presentar la demanda (art. 256.3 LEC)."
    }
   ],
   "siguiente": "caucion_final"
  },
  "oposicion": {
   "fase": 4,
   "titulo": "Oposición del requerido (art. 260.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se da traslado de la oposición al solicitante, que puede impugnarla por escrito en cinco días. En los escritos de oposición e impugnación las partes pueden pedir vista, que se sigue por los trámites del juicio verbal."
    },
    {
     "tipo": "plazo",
     "texto": "Impugnación: cinco días desde el traslado."
    }
   ],
   "siguiente": "vista_check"
  },
  "vista_check": {
   "fase": 4,
   "titulo": "¿Se ha pedido vista?",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Solo hay vista si la ha pedido alguna de las partes en su escrito (art. 260.1 LEC)."
    }
   ],
   "pregunta": "¿Se ha pedido vista?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "celebrar_vista"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "resolucion_oposicion"
    }
   ]
  },
  "celebrar_vista": {
   "fase": 4,
   "titulo": "Vista (juicio verbal)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra por los trámites del juicio verbal y después el tribunal resuelve por auto (art. 260.2 LEC)."
    }
   ],
   "siguiente": "resolucion_oposicion"
  },
  "resolucion_oposicion": {
   "fase": 4,
   "titulo": "Auto sobre la oposición (art. 260 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Posibles decisiones",
     "items": [
      "Injustificada: condena al requerido a las costas del incidente; auto sin recurso (art. 260.3)",
      "Justificada: así lo declara; auto apelable (art. 260.4)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Es justificada la oposición?",
   "opciones": [
    {
     "texto": "No: injustificada",
     "tono": "t-ok",
     "destino": "op_injustificada"
    },
    {
     "texto": "Sí: justificada",
     "tono": "t-aviso",
     "destino": "op_justificada"
    }
   ]
  },
  "op_injustificada": {
   "fase": 4,
   "titulo": "Oposición injustificada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Condena en costas del incidente al requerido (art. 260.3 LEC) y sigue la práctica de la diligencia."
    }
   ],
   "pregunta": "¿Atiende ahora el requerimiento?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "practica"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "negativa_tipo"
    }
   ]
  },
  "op_justificada": {
   "fase": 4,
   "titulo": "Oposición justificada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias no se practican. El auto puede recurrirse en apelación (art. 260.4 LEC); plazo de veinte días (art. 458.1 LEC)."
    }
   ],
   "siguiente": "caucion_op"
  },
  "negativa_tipo": {
   "fase": 5,
   "titulo": "Negativa: medidas del art. 261 LEC",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el requerido ni atiende el requerimiento ni se opone, el tribunal acuerda por auto motivado, cuando resulte proporcionado, la medida que corresponda a la diligencia pedida."
    }
   ],
   "pregunta": "¿Qué se había pedido?",
   "opciones": [
    {
     "texto": "Declaración sobre capacidad, representación o legitimación (1.º)",
     "tono": "t-nota",
     "destino": "medida_1"
    },
    {
     "texto": "Exhibición de títulos y documentos",
     "tono": "t-nota",
     "destino": "medida_2"
    },
    {
     "texto": "Exhibición de una cosa (2.º)",
     "tono": "t-nota",
     "destino": "medida_3"
    },
    {
     "texto": "Exhibición de documentos contables",
     "tono": "t-nota",
     "destino": "medida_4"
    },
    {
     "texto": "Grupo de consumidores (6.º) o documentos de los núms. 5.º bis, 7.º u 8.º",
     "tono": "t-plazo",
     "destino": "medida_5"
    },
    {
     "texto": "Otra diligencia (núms. 9.º, 10.º u 11.º)",
     "tono": "t-nota",
     "destino": "medida_otras"
    }
   ]
  },
  "medida_1": {
   "fase": 5,
   "titulo": "Hechos tenidos por admitidos (art. 261.1.ª LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pueden tenerse por respondidas afirmativamente las preguntas que el solicitante pretendía formular, y los hechos se consideran admitidos a efectos del juicio posterior."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_2": {
   "fase": 5,
   "titulo": "Entrada y registro para ocupar documentos (art. 261.2.ª LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si hay indicios suficientes de que pueden hallarse en un lugar determinado, se ordena la entrada y registro; los documentos que se encuentren se ocupan y se ponen a disposición del solicitante en la sede del tribunal."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_3": {
   "fase": 5,
   "titulo": "Entrada y registro para presentar la cosa (art. 261.3.ª LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se conoce o presume fundadamente dónde está la cosa, se procede de modo semejante y se presenta al solicitante, que puede pedir su depósito o la medida de garantía más adecuada."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_4": {
   "fase": 5,
   "titulo": "Cuentas tenidas por ciertas (art. 261.4.ª LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pueden tenerse por ciertos, a los efectos del juicio posterior, las cuentas y datos que presente el solicitante."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_5": {
   "fase": 5,
   "titulo": "Medidas de intervención (art. 261.5.ª LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal ordena las medidas de intervención necesarias, incluida la entrada y registro, para encontrar los documentos o datos precisos, sin perjuicio de la responsabilidad penal por desobediencia a la autoridad judicial."
    }
   ],
   "siguiente": "caucion_final"
  },
  "caucion_final": {
   "fase": 6,
   "titulo": "Aplicación de la caución (art. 262 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicadas las diligencias, el tribunal resuelve por auto sobre la aplicación de la caución, a la vista de la petición de indemnización y de la justificación de gastos que se presente, oído el solicitante."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días (art. 262.1 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Apelable sin efectos suspensivos (art. 262.1, párrafo segundo, LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Si queda remanente, no se devuelve al solicitante hasta que pase el mes del art. 256.3 LEC (art. 262.2 LEC)."
    }
   ],
   "siguiente": "control_demanda"
  },
  "caucion_op": {
   "fase": 6,
   "titulo": "Aplicación de la caución tras la oposición justificada (art. 262.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Denegadas las diligencias por oposición justificada, el tribunal resuelve en cinco días sobre la aplicación de la caución, a la vista de la petición de indemnización y de la justificación de gastos, oído el solicitante."
    },
    {
     "tipo": "aviso",
     "texto": "Apelable sin efectos suspensivos."
    }
   ],
   "siguiente": "fin_op_justificada"
  },
  "fin_op_justificada": {
   "fase": 6,
   "titulo": "Fin: diligencias denegadas por oposición justificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias no se practican y se ha resuelto sobre la caución. El solicitante puede presentar la demanda si cuenta con elementos suficientes."
    }
   ],
   "fin": "warning"
  },
  "control_demanda": {
   "fase": 6,
   "titulo": "Plazo para presentar la demanda (art. 256.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Un mes desde la terminación de las diligencias."
    }
   ],
   "pregunta": "¿Se presenta la demanda en un mes?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "fin_demanda_presentada"
    },
    {
     "texto": "No, sin justificación suficiente",
     "tono": "t-aviso",
     "destino": "perdida_caucion"
    },
    {
     "texto": "No, con justificación suficiente a juicio del tribunal",
     "tono": "t-plazo",
     "destino": "fin_justificado"
    }
   ]
  },
  "fin_demanda_presentada": {
   "fase": 6,
   "titulo": "Fin: demanda presentada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias han cumplido su finalidad. El remanente de la caución puede devolverse una vez transcurrido el mes (art. 262.2 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Para la demanda",
     "items": [
      "Usar la información y los documentos obtenidos",
      "Invocar, en su caso, los hechos o cuentas tenidos por ciertos (art. 261 LEC)"
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  },
  "perdida_caucion": {
   "fase": 6,
   "titulo": "Pérdida de la caución",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no se interpone la demanda en el mes sin justificación suficiente, a juicio del tribunal, la caución se pierde en favor de las personas que intervinieron en las diligencias (art. 256.3 LEC)."
    }
   ],
   "fin": "warning"
  },
  "fin_justificado": {
   "fase": 6,
   "titulo": "No presentación justificada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal considera suficiente la justificación: la caución no se pierde por esta causa (art. 256.3 LEC)."
    }
   ],
   "fin": "warning"
  },
  "medida_otras": {
   "fase": 5,
   "titulo": "Sin medida específica en el art. 261 LEC",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El art. 261 LEC no prevé una medida específica para estas diligencias. En las de leyes especiales (núm. 9.º), se estará a lo que disponga la ley especial (art. 263 LEC)."
    }
   ],
   "siguiente": "caucion_final"
  },
  "fin_abstencion": {
   "fase": 1,
   "titulo": "Abstención: conoce el tribunal indicado",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El juez se abstiene e indica al solicitante el Juzgado al que debe acudir (art. 257.2 LEC), que es el que conocerá de la solicitud."
    }
   ],
   "fin": "neutral"
  }
 },
 "pie": "Arts. 256–263 LEC<br>Art. 60 LEC (conflicto de competencia)<br>Art. 64.2 LEC (forma de la caución)<br>Art. 138.3 LEC (puerta cerrada)<br>Art. 458 LEC (apelación)<br>Art. 5.3 LO 1/2025 (sin requisito de procedibilidad)"
});
