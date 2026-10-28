/* Migrado por tools/migrate.js desde sources/actual/G01.json (contenido sin cambios; pendiente de revisión). */
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
  "estado": "sin revisar",
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
  "laj": "Letrado de la Admón. de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Análisis inicial y recepción de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se recibe en el registro del juzgado la solicitud de diligencias preliminares. El LAJ debe verificar el cumplimiento de los requisitos formales mínimos y el solicitante debe haber realizado un análisis exhaustivo de la viabilidad."
    },
    {
     "tipo": "nota",
     "texto": "Las diligencias preliminares constituyen un numerus clausus interpretado flexiblemente. Su finalidad es preparar el juicio, no obtener prueba anticipada. No proceden diligencias meramente indagatorias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 256.1 LEC: \"Toda persona que se considere con derecho a ejercitar una acción contra otra... podrá instar del Juez la práctica de las diligencias que se indican a continuación...\""
    },
    {
     "tipo": "aviso",
     "texto": "Atención: Si no se cumple alguno de los tres presupuestos esenciales (adecuación, justa causa e interés legítimo), la solicitud será inadmitida."
    },
    {
     "tipo": "lista",
     "titulo": "Verificación preliminar",
     "items": [
      "Identificar la acción principal que se pretende ejercitar",
      "Determinar si se necesita información previa para fundamentar la demanda",
      "Evaluar si alguna de las 11 categorías del art. 256.1 LEC es aplicable",
      "Verificar la existencia de legitimación activa y pasiva",
      "Comprobar referencia circunstanciada al asunto",
      "Verificar ofrecimiento de caución",
      "En su caso, principio de prueba de la infracción (núm. 8º)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los gastos que se ocasionen a las personas que hubieren de intervenir serán siempre a cargo del solicitante (art. 256.4 LEC)."
    }
   ],
   "pregunta": "¿Qué tipo de diligencia preliminar necesita?",
   "opciones": [
    {
     "texto": "Declaración jurada sobre capacidad/representación (art. 256.1.1º)",
     "tono": "t-ok",
     "destino": "det_256_1_1"
    },
    {
     "texto": "Exhibición de cosa mueble (art. 256.1.2º)",
     "tono": "t-nota",
     "destino": "det_256_1_2"
    },
    {
     "texto": "Exhibición de testamento (art. 256.1.3º)",
     "tono": "t-nota",
     "destino": "det_256_1_3"
    },
    {
     "texto": "Documentos y cuentas de sociedad (art. 256.1.4º)",
     "tono": "t-nota",
     "destino": "det_256_1_4"
    },
    {
     "texto": "Contrato de seguro de responsabilidad civil (art. 256.1.5º)",
     "tono": "t-nota",
     "destino": "det_256_1_5"
    },
    {
     "texto": "Historia clínica (art. 256.1.5º bis)",
     "tono": "t-nota",
     "destino": "det_256_1_5bis"
    },
    {
     "texto": "Datos sobre grupo de consumidores (art. 256.1.6º)",
     "tono": "t-nota",
     "destino": "det_256_1_6"
    },
    {
     "texto": "Datos de infracción de PI/PIndustrial (art. 256.1.7º)",
     "tono": "t-plazo",
     "destino": "det_256_1_7"
    },
    {
     "texto": "Documentos bancarios escala comercial (art. 256.1.8º)",
     "tono": "t-plazo",
     "destino": "det_256_1_8"
    },
    {
     "texto": "Leyes especiales (art. 256.1.9º)",
     "tono": "t-nota",
     "destino": "det_256_1_9"
    },
    {
     "texto": "Identificación de prestador SSI (art. 256.1.10º)",
     "tono": "t-plazo",
     "destino": "det_256_1_10"
    },
    {
     "texto": "Identificación de usuario SSI (art. 256.1.11º)",
     "tono": "t-plazo",
     "destino": "det_256_1_11"
    }
   ]
  },
  "det_256_1_1": {
   "fase": 0,
   "titulo": "Declaración jurada sobre capacidad o representación (art. 256.1.1º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite recabar información sobre la capacidad civil de una persona o sobre su representación legal o voluntaria. Es especialmente útil cuando se ignora quién ostenta la condición de heredero, tutor o apoderado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 256.1.1º LEC: \"Que declare bajo juramento o promesa sobre cuál es su capacidad o representación legal o voluntaria...\""
    },
    {
     "tipo": "plazo",
     "texto": "El requerido dispone de 10 días para cumplir voluntariamente desde la citación. Si se opone, tiene 5 días para formular escrito de oposición."
    },
    {
     "tipo": "aviso",
     "texto": "La diligencia no puede usarse como medio de investigación general sobre la solvencia o patrimonio del futuro demandado."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_2": {
   "fase": 0,
   "titulo": "Exhibición de cosa mueble (art. 256.1.2º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite solicitar que una persona exhiba una cosa mueble que obre en su poder, cuando resulte necesario para fundamentar la futura demanda."
    },
    {
     "tipo": "ley",
     "texto": "Art. 256.1.2º LEC: \"Que exhiba la cosa mueble que obre en su poder, a fin de que el solicitante o la persona designada por el tribunal pueda examinarla...\""
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de 10 días para cumplimiento voluntario. Si no se cumple, el tribunal puede ordenar entrada y registro."
    },
    {
     "tipo": "nota",
     "texto": "Frecuente en reclamaciones por vicios ocultos de productos."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_3": {
   "fase": 0,
   "titulo": "Exhibición de testamento (art. 256.1.3º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Obliga a quien tenga en su poder un testamento cerrado u ológrafo a exhibirlo ante el tribunal. Esencial en procedimientos hereditarios."
    },
    {
     "tipo": "aviso",
     "texto": "Si el testamento es abierto, no es necesaria esta diligencia porque ya consta en el protocolo notarial."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_4": {
   "fase": 0,
   "titulo": "Documentos y cuentas de sociedad (art. 256.1.4º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite a socios y partícipes recabar la exhibición de documentos y cuentas de una sociedad."
    },
    {
     "tipo": "aviso",
     "texto": "El solicitante debe acreditar su condición de socio o partícipe. No puede usarse por terceros ajenos."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_5": {
   "fase": 0,
   "titulo": "Contrato de seguro de responsabilidad civil (art. 256.1.5º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite obtener información sobre la existencia, condiciones y límites de un contrato de seguro de responsabilidad civil. Esencial en reclamaciones de daños."
    },
    {
     "tipo": "nota",
     "texto": "El art. 256.1.5º fue modificado por la Ley 20/2015, ampliando su alcance para incluir no solo la exhibición del contrato, sino también la mera información."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_5bis": {
   "fase": 0,
   "titulo": "Historia clínica (art. 256.1.5º bis)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite recabar la historia clínica cuando sea preciso para fundamentar una reclamación por daños personales."
    },
    {
     "tipo": "aviso",
     "texto": "El acceso está sujeto a la normativa de protección de datos y ley de autonomía del paciente. El solicitante debe acreditar su legitimación."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_6": {
   "fase": 0,
   "titulo": "Datos sobre grupo de consumidores (art. 256.1.6º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite obtener información necesaria para la identificación de los miembros de un grupo de consumidores afectados."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia especial: es competente el tribunal ante el que haya de presentarse la demanda, no el del domicilio del requerido."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_7": {
   "fase": 0,
   "titulo": "Datos de infracción de PI/PIndustrial (art. 256.1.7º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite obtener información sobre el origen y las redes de distribución de productos o servicios que infrinjan derechos de PI."
    },
    {
     "tipo": "aviso",
     "texto": "La solicitud del núm. 8º deberá acompañarse de un principio de prueba de la realidad de la infracción."
    },
    {
     "tipo": "nota",
     "texto": "La información obtenida (núms. 7, 8, 10 y 11) se utilizará exclusivamente para la tutela jurisdiccional, con prohibición de divulgarla (art. 259.5 LEC)."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_8": {
   "fase": 0,
   "titulo": "Documentos bancarios escala comercial (art. 256.1.8º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite solicitar de entidades bancarias la exhibición de documentos que obren en su poder a escala comercial."
    },
    {
     "tipo": "aviso",
     "texto": "La solicitud debe ser proporcional y concreta. No se admite una solicitud genérica de \"todos los documentos bancarios\". Debe acompañarse de un principio de prueba."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_9": {
   "fase": 0,
   "titulo": "Leyes especiales (art. 256.1.9º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Remite a las diligencias que estén previstas en leyes especiales para casos concretos."
    },
    {
     "tipo": "aviso",
     "texto": "Es necesario identificar con precisión la ley especial que habilita la diligencia. No puede usarse como cláusula general."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_10": {
   "fase": 0,
   "titulo": "Identificación de prestador SSI (art. 256.1.10º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite recabar datos de identificación de un prestador de servicios de la sociedad de la información que figuren en registros públicos."
    },
    {
     "tipo": "aviso",
     "texto": "Se limita a datos ya registrados públicamente. No autoriza la obtención de datos personales no públicos."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "det_256_1_11": {
   "fase": 0,
   "titulo": "Identificación de usuario SSI (art. 256.1.11º)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Permite obtener datos de identificación de un usuario de SSI a través del prestador del servicio. Clave para identificar a autores de infracciones en internet."
    },
    {
     "tipo": "aviso",
     "texto": "Debe respetar la normativa de protección de datos. Los datos solo podrán utilizarse para el ejercicio de la acción que motiva la diligencia."
    }
   ],
   "siguiente": "solicitud_formal"
  },
  "solicitud_formal": {
   "fase": 0,
   "titulo": "Formalización de la solicitud",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe formularse por escrito, expresando con claridad la diligencia, los fundamentos jurídicos, y una referencia circunstanciada de los hechos y personas afectadas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 256.2 LEC: \"Las diligencias preliminares se solicitarán al Juez mediante escrito, acompañado de los documentos en que se funde...\""
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio",
     "items": [
      "Identificación del solicitante, Letrado y Procurador",
      "Expresión clara de la diligencia solicitada (art. 256.1)",
      "Fundamentos jurídicos",
      "Referencia circunstanciada de los hechos",
      "Identificación de las personas afectadas",
      "Ofrecimiento de caución",
      "Principio de prueba (núms. 8º, 10º, 11º)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Salvo excepción, la solicitud requiere procurador y abogado."
    },
    {
     "tipo": "aviso",
     "texto": "La caución se perderá si transcurrido 1 mes desde la terminación de las diligencias no se interpone demanda sin justificación suficiente (art. 256.5)."
    }
   ],
   "siguiente": "verificar_presupuestos"
  },
  "verificar_presupuestos": {
   "fase": 0,
   "titulo": "Verificación de presupuestos procesales",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deben concurrir simultáneamente tres presupuestos procesales esenciales que el tribunal examinará de oficio."
    },
    {
     "tipo": "lista",
     "titulo": "Presupuestos procesales (art. 258.1)",
     "items": [
      "Adecuación: La diligencia debe encajar en el art. 256.1 LEC y ser idónea para la finalidad perseguida",
      "Justa causa: Indicios racionales de necesidad para preparar la demanda",
      "Interés legítimo: Interés actual y directo del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La falta de cualquiera determina la inadmisión."
    }
   ],
   "pregunta": "¿Concurren los tres presupuestos?",
   "opciones": [
    {
     "texto": "Sí, concurren",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No concurren plenamente",
     "tono": "t-aviso",
     "destino": "fin_no_admision"
    }
   ]
  },
  "fin_no_admision": {
   "fase": 0,
   "titulo": "No admisión por falta de presupuestos",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud no ha sido admitida por falta de alguno de los presupuestos esenciales. El tribunal ha dictado auto de denegación."
    },
    {
     "tipo": "nota",
     "texto": "Antes de intentar una nueva solicitud, analice qué presupuesto falló y si es posible subsanarlo."
    }
   ],
   "fin": "warning"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación de la competencia territorial",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Determinar el Juez competente es esencial. El juez revisa de oficio; no se admite declinatoria."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas de competencia",
     "items": [
      "Regla general (núms. 1º a 5º bis, 10º y 11º): Juez del domicilio del requerido",
      "Regla especial (núms. 6º, 7º, 8º y 9º): Tribunal ante el que haya de presentarse la demanda",
      "Nuevas diligencias derivadas: Mismo tribunal o el competente por nuevos hechos"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si el requerido es persona jurídica, el domicilio es el domicilio social."
    }
   ],
   "pregunta": "¿Se trata de los supuestos de los núms. 6º, 7º, 8º o 9º?",
   "opciones": [
    {
     "texto": "Sí (consumidores, PI/PInd, docs bancarios, leyes especiales)",
     "tono": "t-nota",
     "destino": "comp_especial"
    },
    {
     "texto": "No (núms. 1º a 5º bis, 10º y 11º)",
     "tono": "t-ok",
     "destino": "comp_general"
    }
   ]
  },
  "comp_general": {
   "fase": 1,
   "titulo": "Competencia general: Juez del domicilio del requerido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juez de Primera Instancia o de lo Mercantil del domicilio del requerido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 257.1.1º LEC."
    }
   ],
   "siguiente": "conflicto_competencia"
  },
  "comp_especial": {
   "fase": 1,
   "titulo": "Competencia especial: Tribunal de la futura demanda",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para los núms. 6º, 7º, 8º y 9º, es competente el Tribunal ante el que haya de presentarse la demanda."
    },
    {
     "tipo": "ley",
     "texto": "Art. 257.1.2º LEC."
    }
   ],
   "siguiente": "nuevas_diligencias"
  },
  "nuevas_diligencias": {
   "fase": 1,
   "titulo": "Nuevas diligencias por ampliación (art. 257.2)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si del resultado de las primeras diligencias se deriva la necesidad de practicar otras nuevas, podrán instarse del mismo tribunal o del competente por los nuevos hechos."
    },
    {
     "tipo": "aviso",
     "texto": "No es automático. Debe justificarse la necesidad."
    }
   ],
   "siguiente": "conflicto_competencia"
  },
  "conflicto_competencia": {
   "fase": 1,
   "titulo": "Inhibición y conflicto negativo de competencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el juez se inhibe, indicará al solicitante el Juzgado al que debe acudir. Si el indicado también se inhibe, se produce un conflicto negativo."
    },
    {
     "tipo": "plazo",
     "texto": "Conflicto negativo: el tribunal superior decide por auto, sin ulterior recurso, en 10 días."
    }
   ],
   "pregunta": "¿Existe conflicto de competencia?",
   "opciones": [
    {
     "texto": "No, el juzgado es competente",
     "tono": "t-ok",
     "destino": "resolucion_fondo"
    },
    {
     "texto": "Sí, se inhibe y hay conflicto negativo",
     "tono": "t-plazo",
     "destino": "resolucion_conflicto"
    }
   ]
  },
  "resolucion_conflicto": {
   "fase": 1,
   "titulo": "Resolución del conflicto negativo (art. 60 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal inmediato superior común decide por auto, sin ulterior recurso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60 LEC."
    }
   ],
   "fin": "neutral"
  },
  "resolucion_fondo": {
   "fase": 2,
   "titulo": "Triple control de admisibilidad (art. 258 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal evalúa si concurren adecuación, justa causa e interés legítimo."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para resolver: 5 días desde la presentación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 258.1 LEC."
    }
   ],
   "pregunta": "¿Concurren adecuación, justa causa e interés legítimo?",
   "opciones": [
    {
     "texto": "Sí — El tribunal admite la solicitud",
     "tono": "t-ok",
     "destino": "auto_admision"
    },
    {
     "texto": "No — Las diligencias no resultan justificadas",
     "tono": "t-aviso",
     "destino": "auto_denegacion"
    }
   ]
  },
  "auto_admision": {
   "fase": 2,
   "titulo": "Auto acordando diligencias y fijando caución",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El juez dicta auto acordando las diligencias y fijando la cuantía de la caución."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto que acuerde las diligencias no se dará recurso alguno (art. 258.3)."
    },
    {
     "tipo": "nota",
     "texto": "La caución puede prestarse en dinero, aval bancario solidario, o cualquier medio que garantice disponibilidad inmediata (art. 64.2 LEC)."
    }
   ],
   "siguiente": "caucion_plazo"
  },
  "auto_denegacion": {
   "fase": 2,
   "titulo": "Auto denegando las diligencias",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El juez rechaza la petición. Contra el auto denegatorio cabe recurso de apelación (art. 258.4)."
    },
    {
     "tipo": "aviso",
     "texto": "Solo cabe apelación contra el auto desestimatorio. El estimatorio es irrecurrible."
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "recurso_apelacion"
    },
    {
     "texto": "No, se acepta",
     "tono": "t-aviso",
     "destino": "fin_denegacion_aceptada"
    }
   ]
  },
  "fin_denegacion_aceptada": {
   "fase": 2,
   "titulo": "Denegación aceptada sin recurso",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La decisión es firme. La denegación solo afecta a la vía preparatoria, no impide interponer la demanda principal si se cuenta con información suficiente."
    }
   ],
   "fin": "error"
  },
  "recurso_apelacion": {
   "fase": 2,
   "titulo": "Recurso de apelación (art. 258.4 LEC)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contra el auto que deniega cabe apelación ante la Audiencia Provincial."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de apelación: 5 días (art. 459 LEC)."
    }
   ],
   "pregunta": "La Audiencia estima el recurso?",
   "opciones": [
    {
     "texto": "Sí, estima y acuerda diligencias",
     "tono": "t-ok",
     "destino": "auto_admision"
    },
    {
     "texto": "No, confirma la denegación",
     "tono": "t-aviso",
     "destino": "fin_denegacion_definitiva"
    }
   ]
  },
  "fin_denegacion_definitiva": {
   "fase": 2,
   "titulo": "Denegación definitiva tras recurso",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La decisión es firme. Solo cabría casación si se dan los requisitos del art. 477 LEC. No impide interponer la demanda principal."
    }
   ],
   "fin": "error"
  },
  "caucion_plazo": {
   "fase": 2,
   "titulo": "Control de la prestación de la caución",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se verifica si el solicitante presta la caución en el plazo de 3 días. Es improrrogable."
    },
    {
     "tipo": "ley",
     "texto": "Art. 258.5 LEC."
    },
    {
     "tipo": "aviso",
     "texto": "Si no se presta, el LAJ archivará definitivamente las actuaciones mediante decreto. No cabe subsanación."
    }
   ],
   "pregunta": "¿Se presta la caución en 3 días?",
   "opciones": [
    {
     "texto": "Sí — Caución prestada",
     "tono": "t-ok",
     "destino": "citacion"
    },
    {
     "texto": "No — Archivo definitivo",
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
     "texto": "El LAJ dicta decreto de archivo definitivo. No cabe recurso. Si se desea iniciar de nuevo, habrá de formularse una solicitud nueva."
    }
   ],
   "fin": "error"
  },
  "citacion": {
   "fase": 3,
   "titulo": "Citación y requerimiento (art. 259 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se cita y requiere a los interesados para que lleven a cabo la diligencia en 10 días."
    },
    {
     "tipo": "lista",
     "titulo": "Incluir en la citación",
     "items": [
      "Lugar de la práctica",
      "Plazo de 10 días",
      "Posibilidad de exhibición telemática (art. 259.2)",
      "Posibilidad de acudir con experto a costa del solicitante (art. 259.3)",
      "Advertencia de consecuencias de incomparecencia (art. 261)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En diligencias del art. 256.1.7º, puede ordenarse puerta cerrada (art. 259.4 y 138.3 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "La información de los núms. 7, 8, 10 y 11 es exclusiva para tutela jurisdiccional (art. 259.5 LEC)."
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
     "tipo": "info",
     "texto": "Tres escenarios: atiende el requerimiento, formula oposición en 5 días, o no atiende ni se opone."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para oponerse: 5 días desde la citación (art. 260.1)."
    }
   ],
   "pregunta": "¿Cuál es la actitud del requerido?",
   "opciones": [
    {
     "texto": "Atiende y practica la diligencia",
     "tono": "t-ok",
     "destino": "practica"
    },
    {
     "texto": "Formula oposición en plazo",
     "tono": "t-plazo",
     "destino": "oposicion"
    },
    {
     "texto": "No atiende ni formula oposición",
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
     "texto": "El requerido lleva a cabo la diligencia. Se documenta con intervención del LAJ."
    },
    {
     "tipo": "lista",
     "titulo": "Aspectos a controlar",
     "items": [
      "Verificar identidad de intervinientes",
      "Documentar la diligencia",
      "Si procede puerta cerrada (núm. 7º), adoptarla",
      "Atribuir carácter reservado si lo solicita algún interesado (art. 259.6)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Cumple completamente?",
   "opciones": [
    {
     "texto": "Sí, cumple completamente",
     "tono": "t-ok",
     "destino": "fin_diligencias_practicadas"
    },
    {
     "texto": "Cumple parcialmente",
     "tono": "t-plazo",
     "destino": "cumplimiento_parcial"
    },
    {
     "texto": "No, se niega a cumplir",
     "tono": "t-aviso",
     "destino": "negativa_tipo"
    }
   ]
  },
  "cumplimiento_parcial": {
   "fase": 3,
   "titulo": "Cumplimiento parcial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El requerido ha cumplido parcialmente. El tribunal valorará si es suficiente."
    }
   ],
   "pregunta": "¿Es suficiente el cumplimiento parcial?",
   "opciones": [
    {
     "texto": "Sí, es suficiente",
     "tono": "t-ok",
     "destino": "fin_diligencias_practicadas"
    },
    {
     "texto": "No, se requiere total",
     "tono": "t-aviso",
     "destino": "negativa_tipo"
    }
   ]
  },
  "fin_diligencias_practicadas": {
   "fase": 3,
   "titulo": "Diligencias practicadas con éxito",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El requirente dispone de la información necesaria para interponer la demanda principal."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de 1 mes para interponer la demanda. Si no, se pierde la caución (art. 256.3 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El tribunal resolverá sobre la aplicación de la caución en 5 días (art. 262 LEC). Apelable sin efectos suspensivos."
    }
   ],
   "fin": "success"
  },
  "oposicion": {
   "fase": 4,
   "titulo": "Oposición del requerido (art. 260 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El requerido formula oposición en 5 días. Se da traslado al solicitante para impugnar en 5 días."
    },
    {
     "tipo": "ley",
     "texto": "Art. 260.1 LEC. Causas: a) No concurren presupuestos; b) No es de las previstas; c) Inadecuada; d) Otra causa bastante."
    },
    {
     "tipo": "nota",
     "texto": "El requirente puede impugnar en 5 días. Si no lo hace, el tribunal puede considerar que acepta la oposición."
    }
   ],
   "siguiente": "vista_check"
  },
  "vista_check": {
   "fase": 4,
   "titulo": "¿Se solicita vista?",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La vista no es preceptiva; solo se celebra a instancia de parte, siguiendo trámites de juicio verbal."
    }
   ],
   "pregunta": "¿Se solicita vista?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "celebrar_vista"
    },
    {
     "texto": "No, se resuelve sin vista",
     "tono": "t-ok",
     "destino": "resolucion_oposicion"
    }
   ]
  },
  "celebrar_vista": {
   "fase": 4,
   "titulo": "Celebración de vista (art. 260.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra vista siguiendo los trámites del juicio verbal. Ambas partes exponen sus argumentos."
    },
    {
     "tipo": "plazo",
     "texto": "La resolución se dicta en los 5 días siguientes a la vista."
    }
   ],
   "siguiente": "resolucion_oposicion"
  },
  "resolucion_oposicion": {
   "fase": 4,
   "titulo": "Resolución sobre la oposición (art. 260.4-7)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal resuelve mediante auto motivado si la oposición es justificada o injustificada."
    },
    {
     "tipo": "lista",
     "titulo": "Decisiones posibles",
     "items": [
      "Injustificada: Condena al requerido al pago de costas (auto irrecurrible, art. 260.5-6)",
      "Justificada: Se declara justificada (auto apelable, art. 260.7)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿El tribunal considera justificada la oposición?",
   "opciones": [
    {
     "texto": "No — Injustificada",
     "tono": "t-ok",
     "destino": "op_injustificada"
    },
    {
     "texto": "Sí — Justificada",
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
     "texto": "El tribunal condena al requerido al pago de costas. La diligencia debe practicarse."
    },
    {
     "tipo": "aviso",
     "texto": "Contra este auto no cabe recurso alguno (art. 260.6)."
    }
   ],
   "pregunta": "¿El requerido cumple tras la desestimación?",
   "opciones": [
    {
     "texto": "Sí — Practica la diligencia",
     "tono": "t-ok",
     "destino": "practica"
    },
    {
     "texto": "No — Persiste en la negativa",
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
     "texto": "Las diligencias no se practicarán. Se procede a resolver sobre la aplicación de la caución."
    },
    {
     "tipo": "aviso",
     "texto": "Contra este auto cabe recurso de apelación por parte del solicitante (art. 260.7 LEC)."
    }
   ],
   "pregunta": "¿Se interpone apelación por el solicitante?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "caucion_op"
    },
    {
     "texto": "No, se acepta",
     "tono": "t-nota",
     "destino": "caucion_op"
    }
   ]
  },
  "negativa_tipo": {
   "fase": 5,
   "titulo": "Negativa — Selección de medida (art. 261 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal acuerda medidas proporcionadas mediante auto motivado."
    },
    {
     "tipo": "aviso",
     "texto": "Las medidas varían según el tipo de diligencia."
    }
   ],
   "pregunta": "¿Qué tipo de diligencia se solicitó?",
   "opciones": [
    {
     "texto": "1º: Capacidad/representación",
     "tono": "t-nota",
     "destino": "medida_1"
    },
    {
     "texto": "2º, 3º, 5º: Exhibición docs/cosa/testamento/seguro",
     "tono": "t-plazo",
     "destino": "medida_2"
    },
    {
     "texto": "4º: Documentos contables",
     "tono": "t-nota",
     "destino": "medida_4"
    },
    {
     "texto": "5º bis, 6º, 7º, 8º: HC, consumidores, PI",
     "tono": "t-aviso",
     "destino": "medida_5"
    }
   ]
  },
  "medida_1": {
   "fase": 5,
   "titulo": "Ficta confessio — Hechos admitidos (art. 261.1.1º)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tendrán por respondidas afirmativamente las preguntas. Los hechos se consideran admitidos a efectos del juicio posterior (presunción iuris tantum)."
    },
    {
     "tipo": "aviso",
     "texto": "Solo a \"efectos del juicio ulterior\". No constituyen prueba plena."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_2": {
   "fase": 5,
   "titulo": "Entrada y registro (art. 261.1.2º y 3º)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si hay indicios suficientes, se ordena entrada y registro. Los documentos/cosas se ocupan y ponen a disposición del solicitante en sede judicial."
    },
    {
     "tipo": "aviso",
     "texto": "Requiere autorización judicial específica y garantías del art. 18.3 CE."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_4": {
   "fase": 5,
   "titulo": "Cuentas tenidas por ciertas (art. 261.1.4º)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tendrán por ciertos los datos que presente el solicitante. Inversión de la carga de la prueba. Presunción relativa."
    },
    {
     "tipo": "aviso",
     "texto": "Especialmente gravosa para el requerido."
    }
   ],
   "siguiente": "caucion_final"
  },
  "medida_5": {
   "fase": 5,
   "titulo": "Medidas de intervención (art. 261.1.5º)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ordenan medidas de intervención necesarias, incluida entrada y registro."
    },
    {
     "tipo": "aviso",
     "texto": "Sin perjuicio de responsabilidad penal por desobediencia (art. 556 CP: prisión 3 meses a 1 año)."
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
     "texto": "El tribunal resuelve sobre la caución a vista de la petición de indemnización y justificación de gastos."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: 5 días, oído el solicitante (art. 262.1)."
    },
    {
     "tipo": "aviso",
     "texto": "Apelable sin efectos suspensivos (art. 262.2)."
    },
    {
     "tipo": "nota",
     "texto": "Si queda remanente, no se devuelve hasta que transcurra el plazo de 1 mes (art. 262.3)."
    }
   ],
   "siguiente": "control_demanda"
  },
  "caucion_op": {
   "fase": 6,
   "titulo": "Caución tras oposición justificada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplica la caución para resarcir al requerido de gastos y perjuicios."
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
   "titulo": "Fin — Oposición justificada firme",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las diligencias no se practicarán. La caución se ha aplicado. El procedimiento concluye."
    },
    {
     "tipo": "nota",
     "texto": "El requirente podrá intentar otras vías o interponer la demanda si cuenta con elementos suficientes."
    }
   ],
   "fin": "warning"
  },
  "control_demanda": {
   "fase": 6,
   "titulo": "Plazo de interposición de demanda (art. 256.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante dispone de 1 mes para interponer la demanda. Si no, se pierde la caución."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: 1 mes desde la terminación de las diligencias. Improrrogable."
    }
   ],
   "pregunta": "¿Se interpone demanda en 1 mes?",
   "opciones": [
    {
     "texto": "Sí — Demanda interpuesta",
     "tono": "t-ok",
     "destino": "fin_demanda_presentada"
    },
    {
     "texto": "No, sin justificación",
     "tono": "t-aviso",
     "destino": "perdida_caucion"
    },
    {
     "texto": "No, pero con justificación suficiente",
     "tono": "t-plazo",
     "destino": "fin_justificado"
    }
   ]
  },
  "fin_demanda_presentada": {
   "fase": 6,
   "titulo": "Fin — Demanda interpuesta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante ha interpuesto la demanda en plazo. Si queda remanente de caución, se devuelve. Las diligencias han cumplido su finalidad."
    },
    {
     "tipo": "lista",
     "titulo": "Próximos pasos",
     "items": [
      "Utilizar la información para fundamentar la demanda",
      "Aportar la documentación exhibida como prueba",
      "Invocar hechos tenidos por admitidos si procede"
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  },
  "perdida_caucion": {
   "fase": 6,
   "titulo": "Pérdida de caución por no demandar (art. 256.3)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La caución se pierde a favor de las personas que intervinieron, a prorrata del perjuicio. La pérdida es automática y no requiere resolución."
    },
    {
     "tipo": "aviso",
     "texto": "No impide interponer la demanda después, pero se ha perdido la garantía económica."
    }
   ],
   "fin": "warning"
  },
  "fin_justificado": {
   "fase": 6,
   "titulo": "No interposición justificada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante acredita justificación suficiente a juicio del tribunal. La caución no se pierde."
    },
    {
     "tipo": "nota",
     "texto": "La valoración es discrecional del tribunal."
    }
   ],
   "fin": "warning"
  }
 },
 "pie": "Arts. 256–263 LEC · Ley 1/2000<br>Art. 60 LEC (conflicto)<br>Art. 64 LEC (caución)<br>Art. 138.3 LEC (puerta cerrada)<br>Art. 556 CP (desobediencia)"
});
