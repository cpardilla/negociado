/* Migrado por tools/migrate.js desde sources/actual/G17.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-ausencia-fallecimiento",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la declaración de ausencia y fallecimiento (artículos 67 a 77 LJV)",
 "corto": "Declaración de ausencia y fallecimiento",
 "articulos": [
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G17"
 },
 "fases": [
  "Inicio y Competencia",
  "Defensor Judicial",
  "Declaración de Ausencia",
  "Medidas e Inventario",
  "Declaración de Fallecimiento",
  "Hechos Posteriores",
  "Comunicación Registral"
 ],
 "actores": {
  "ambos": "LAJ / Juez",
  "juez": "Juez",
  "laj": "LAJ (Secretario judicial)"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del procedimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Como Tramitador o Gestor Procesal y Administrativo, debe determinar qué tipo de expediente de jurisdicción voluntaria requiere tramitar conforme al Capítulo IX de la Ley 15/2015 (Arts. 67-77 LJV), en relación con el Título VIII del Libro I del Código Civil (Arts. 181-198 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Estos procedimientos se caracterizan por la ausencia de controversia litigiosa. El órgano decisor es el Letrado de la Administración de Justicia (Secretario judicial), conforme al principio de desjudicialización y simplificación procesal (Art. 67 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 67 LJV — Ámbito de aplicación; CC arts. 181-198 — Desaparición, ausencia y fallecimiento; LO 1/2025 — Competencia Tribunal de Instancia"
    }
   ],
   "pregunta": "¿Qué tipo de procedimiento necesita tramitar?",
   "opciones": [
    {
     "texto": "Nombramiento de defensor judicial por desaparición",
     "tono": "t-ok",
     "nota": "La persona ha desaparecido sin noticias y se necesita representación para actos urgentes (Art. 69 LJV, Art. 181 CC)",
     "destino": "defensor_judicial"
    },
    {
     "texto": "Declaración de ausencia legal",
     "tono": "t-ok",
     "nota": "Se cumplen los plazos legales para declarar la ausencia conforme a los arts. 182-184 CC (Art. 70 LJV)",
     "destino": "competencia_ausencia"
    },
    {
     "texto": "Declaración de fallecimiento",
     "tono": "t-ok",
     "nota": "Procede declarar el fallecimiento conforme a los arts. 193-196 CC (Art. 74 LJV)",
     "destino": "competencia_fallecimiento"
    },
    {
     "texto": "Hechos posteriores",
     "tono": "t-plazo",
     "nota": "Se ha presentado el ausente, hay noticias de su existencia, o se ha comprobado su fallecimiento (Arts. 75-76 LJV)",
     "destino": "hechos_posteriores"
    }
   ]
  },
  "competencia_ausencia": {
   "fase": 0,
   "titulo": "Determinar competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de admitir la solicitud de declaración de ausencia, debe verificar la competencia territorial del Tribunal de Instancia (Sección Civil). La competencia se determina como regla de conexión exclusiva (Art. 68 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Postulación dispensada: No es preceptiva la intervención de Abogado ni Procurador (Art. 68.4 LJV). Sin embargo, se requiere Letrado en caso de controversia sobrevenida o para recursos contra resoluciones del Secretario judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV — Competencia y postulación; LO 1/2025 DA1 — Tribunal de Instancia"
    }
   ],
   "pregunta": "¿Cuál es el criterio de competencia territorial aplicable?",
   "opciones": [
    {
     "texto": "Último domicilio o residencia en España",
     "tono": "t-ok",
     "nota": "Regla general: Tribunal de Instancia del último domicilio o, en su defecto, última residencia conocida",
     "destino": "legitimacion_ausencia"
    },
    {
     "texto": "Siniestro ocurrido en España",
     "tono": "t-plazo",
     "nota": "Excepción (arts. 194.2-3 CC): Juzgado del lugar del siniestro para todos los afectados",
     "destino": "legitimacion_ausencia_siniestro"
    },
    {
     "texto": "Siniestro fuera de España",
     "tono": "t-plazo",
     "nota": "Excepción: Juzgado del lugar de inicio del viaje, o domicilio/residencia de la mayoría de afectados",
     "destino": "legitimacion_ausencia_siniestro_ext"
    }
   ]
  },
  "competencia_fallecimiento": {
   "fase": 0,
   "titulo": "Determinar competencia (fallecimiento)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para la declaración de fallecimiento se aplican las mismas reglas de competencia territorial del Art. 68 LJV, con las especialidades previstas en los arts. 194.2-3 CC para siniestros de nave o aeronave."
    },
    {
     "tipo": "nota",
     "texto": "En los supuestos de arts. 194.2-3 CC (siniestro), la legitimación es exclusiva del Ministerio Fiscal y la competencia corresponde al Juzgado del lugar del siniestro."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV; Art. 74 LJV; CC arts. 193-196"
    }
   ],
   "pregunta": "¿Qué supuesto de fallecimiento se plantea?",
   "opciones": [
    {
     "texto": "Siniestro de nave o aeronave (arts. 194.2-3 CC)",
     "tono": "t-plazo",
     "nota": "Legitimación exclusiva del Ministerio Fiscal. Competencia: lugar del siniestro",
     "destino": "fallecimiento_siniestro"
    },
    {
     "texto": "Desaparición sin siniestro (arts. 193 y 194.1,4,5 CC)",
     "tono": "t-ok",
     "nota": "Legitimación: interesados o MF. Plazos: 10 años, 5 años si mayor de 75, 1 año por riesgo",
     "destino": "fallecimiento_no_siniestro"
    },
    {
     "texto": "Ya existe declaración de ausencia previa",
     "tono": "t-nota",
     "nota": "La declaración de fallecimiento cesará la ausencia legal decretada",
     "destino": "fallecimiento_con_ausencia"
    }
   ]
  },
  "defensor_judicial": {
   "fase": 1,
   "titulo": "Nombramiento de defensor judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando una persona haya desaparecido sin noticias y necesite representación para actos urgentes sin perjuicio grave, se procede al nombramiento de un defensor judicial conforme al Art. 181 CC y Art. 69 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Requisitos sustantivos (Art. 181 CC): Ausencia de representación voluntaria vigente; necesidad de amparo en actos urgentes; inexistencia de cónyuge o pariente que asuma la representación nata."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV — Defensor judicial; Art. 181 CC — Régimen sustantivo; Art. 300 CC — Tutela supletoria"
    }
   ],
   "pregunta": "¿Existe urgencia que impida esperar a la comparecencia ordinaria?",
   "opciones": [
    {
     "texto": "Sí, hay riesgo de perjuicio irreparable",
     "tono": "t-plazo",
     "nota": "Nombramiento urgente: el LAJ designa defensor inmediatamente y adopta medidas de protección patrimonial",
     "destino": "defensor_urgente"
    },
    {
     "texto": "No, puede seguirse el procedimiento ordinario",
     "tono": "t-ok",
     "nota": "Comparecencia en plazo máximo de 5 días con citación a interesados, MF y testigos",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_ordinario": {
   "fase": 1,
   "titulo": "Nombramiento ordinario de defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento: Solicitud → Comparecencia en plazo máximo de 5 días → Citación a interesados, Ministerio Fiscal y testigos → Audiencia y práctica de pruebas → Resolución de nombramiento."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo de comparecencia: 5 días (Art. 69.1 LJV)"
    },
    {
     "tipo": "nota",
     "texto": "Orden de prelación para la designación: 1.º Cónyuge presente mayor de edad no separado; 2.º Pariente más próximo hasta 4.º grado mayor de edad; 3.º Persona solvente y de buenos antecedentes designada por el LAJ, oído el MF."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist del procedimiento ordinario",
     "items": [
      "Solicitud recibida con datos del desaparecido",
      "Citación a interesados, MF y testigos",
      "Señalamiento de comparecencia dentro de 5 días",
      "Audiencia de alegaciones y práctica de pruebas",
      "Verificación de orden de prelación",
      "Resolución de nombramiento por decreto"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.1 LJV; Art. 181 CC; Art. 300 CC (tutela supletoria)"
    }
   ],
   "pregunta": "¿Se ha completado la comparecencia y se ha nombrado defensor?",
   "opciones": [
    {
     "texto": "Sí, defensor nombrado conforme a orden de prelación",
     "tono": "t-ok",
     "nota": "Se emite decreto de nombramiento. El defensor debe aceptar el cargo.",
     "destino": "defensor_aceptacion"
    },
    {
     "texto": "No compareció nadie o no hay persona idónea",
     "tono": "t-plazo",
     "nota": "El LAJ designa persona solvente de buenos antecedentes, oído el MF",
     "destino": "defensor_designado_laj"
    }
   ]
  },
  "defensor_urgente": {
   "fase": 1,
   "titulo": "Nombramiento urgente de defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando exista riesgo de perjuicio irreparable si se espera a la comparecencia, el LAJ puede designar defensor de forma inmediata y adoptar medidas urgentes de protección patrimonial (Art. 69.2 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Facultades excepcionales: Designación inmediata conforme a orden legal o propuesto por solicitante; adopción de medidas urgentes (embargo preventivo, depósito de bienes, intervención de cuentas)."
    },
    {
     "tipo": "nota",
     "texto": "Tramitación posterior: Continuación de trámites ordinarios con citación a interesados. La comparecencia retroactiva ratifica o impugna las medidas adoptadas."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist del procedimiento urgente",
     "items": [
      "Acreditación del riesgo de perjuicio irreparable",
      "Designación inmediata de defensor",
      "Adopción de medidas urgentes de protección",
      "Citación posterior a interesados y MF",
      "Comparecencia retroactiva de ratificación",
      "Decreto de ratificación o revocación"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.2 LJV; Art. 181 CC; LEC arts. 721-742 (medidas cautelares por analogía)"
    }
   ],
   "pregunta": "Resultado de la comparecencia retroactiva de ratificación:",
   "opciones": [
    {
     "texto": "Ratificado el nombramiento y las medidas",
     "tono": "t-ok",
     "nota": "El defensor continúa en el cargo con las medidas confirmadas",
     "destino": "fin_defensor_ratificado"
    },
    {
     "texto": "Revocado el nombramiento o las medidas",
     "tono": "t-aviso",
     "nota": "Se procede a nuevo nombramiento conforme al procedimiento ordinario",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_aceptacion": {
   "fase": 1,
   "titulo": "Aceptación del cargo por el defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor nombrado debe aceptar el cargo formalmente. A partir de la aceptación, adquiere las obligaciones de pesquisa de la persona, protección y administración de bienes, y cumplimiento de obligaciones del desaparecido."
    },
    {
     "tipo": "nota",
     "texto": "El régimen supletorio de tutela (Cap. IV y VIII CC) es aplicable al representante dativo: nombramiento y aceptación, excusas y remoción, prestación de fianza, retribución, rendición de cuentas."
    },
    {
     "tipo": "aviso",
     "texto": "Responsabilidad del defensor: Deber de rendición de cuentas; responsabilidad civil por daños causados por dolo o negligencia grave."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV; CC arts. 181, 300; CC Cap. IV y VIII (tutela supletoria)"
    }
   ],
   "pregunta": "¿Acepta el defensor el cargo?",
   "opciones": [
    {
     "texto": "Sí, acepta y se compromete",
     "tono": "t-ok",
     "nota": "El defensor asume sus funciones. Proceda a registrar el nombramiento.",
     "destino": "fin_defensor_nombrado"
    },
    {
     "texto": "No, se excusa o rechaza el cargo",
     "tono": "t-plazo",
     "nota": "Se procede a nombrar al siguiente en orden de prelación",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_designado_laj": {
   "fase": 1,
   "titulo": "Designación de defensor por el LAJ",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando no comparece nadie idóneo, el LAJ designa como defensor a una persona solvente y de buenos antecedentes, previa audiencia del Ministerio Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "Criterios de selección: Idoneidad, ausencia de conflicto de intereses, disponibilidad para el ejercicio del cargo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.1 LJV; Art. 181 CC"
    }
   ],
   "siguiente": "defensor_aceptacion"
  },
  "legitimacion_ausencia": {
   "fase": 2,
   "titulo": "Verificar legitimación activa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Competencia confirmada: Tribunal de Instancia del último domicilio o residencia. Ahora debe verificar quién está legitimado para solicitar la declaración de ausencia (Art. 68 LJV, Art. 182 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Sujetos legitimados: Ministerio Fiscal (genérica), cónyuge no separado, pareja de hecho, parientes hasta 4.º grado, terceros con derecho ejercitable, cualquier persona con interés legítimo fundado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV; Art. 182 CC; Art. 3 LJV"
    }
   ],
   "pregunta": "¿Quién solicita la declaración de ausencia?",
   "opciones": [
    {
     "texto": "Ministerio Fiscal",
     "tono": "t-ok",
     "nota": "Legitimación genérica como garante del interés público",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Cónyuge no separado o pareja de hecho",
     "tono": "t-ok",
     "nota": "Vínculo vigente, interés patrimonial y personal",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Parientes hasta 4.º grado",
     "tono": "t-ok",
     "nota": "Orden de prelación sucesoria, interés en estado civil",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Terceros con derecho ejercitable",
     "tono": "t-nota",
     "nota": "Acreedores, codeudores, titulares de derechos reales",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Otra persona con interés legítimo",
     "tono": "t-nota",
     "nota": "Art. 3 LJV, interpretación amplia",
     "destino": "solicitud_ausencia"
    }
   ]
  },
  "legitimacion_ausencia_siniestro": {
   "fase": 2,
   "titulo": "Competencia por siniestro en España",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Competencia: Tribunal de Instancia del lugar del siniestro para todos los afectados (Arts. 194.2-3 CC). En estos supuestos, la legitimación es exclusiva del Ministerio Fiscal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV; CC arts. 194.2-3"
    }
   ],
   "siguiente": "solicitud_ausencia"
  },
  "legitimacion_ausencia_siniestro_ext": {
   "fase": 2,
   "titulo": "Competencia por siniestro fuera de España",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Competencia: Juzgado del lugar de inicio del viaje para españoles/residentes; o domicilio/residencia en España de la mayoría de afectados; criterio residual: domicilio de cualquiera de los afectados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV; CC arts. 194.2-3"
    }
   ],
   "siguiente": "solicitud_ausencia"
  },
  "solicitud_ausencia": {
   "fase": 2,
   "titulo": "Contenido de la solicitud inicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe contener: nombre, domicilio y localización de parientes hasta 4.º grado de consanguinidad y 2.º de afinidad; relación de bienes conocidos; hechos constitutivos de desaparición (Art. 68 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Finalidad de estos datos: garantizar derecho de defensa, facilitar citación y publicidad edictal, permitir medidas de averiguación."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist de la solicitud inicial",
     "items": [
      "Datos identificativos del solicitante",
      "Nombre y domicilio del desaparecido",
      "Localización de parientes hasta 4.º grado consanguinidad y 2.º afinidad",
      "Relación de bienes conocidos del desaparecido",
      "Hechos constitutivos de la desaparición",
      "Pruebas documentales o testificales"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV; Art. 182 CC"
    }
   ],
   "pregunta": "¿Se cumplen los plazos legales para declarar la ausencia?",
   "opciones": [
    {
     "texto": "Sí: 1 año sin apoderado con administración general",
     "tono": "t-ok",
     "nota": "Art. 183 CC: transcurrido 1 año sin noticias y sin apoderado",
     "destino": "admision_ausencia"
    },
    {
     "texto": "Sí: 3 años con apoderado",
     "tono": "t-ok",
     "nota": "Art. 183 CC: transcurridos 3 años desde las últimas noticias",
     "destino": "admision_ausencia"
    },
    {
     "texto": "Sí: caducidad de mandato + 1 año sin noticias",
     "tono": "t-ok",
     "nota": "La caducidad del mandato determina la ausencia si se ignora el paradero",
     "destino": "admision_ausencia"
    },
    {
     "texto": "No se cumplen los plazos",
     "tono": "t-aviso",
     "nota": "No procede la declaración de ausencia en este momento",
     "destino": "fin_plazos_no_cumplidos"
    }
   ]
  },
  "admision_ausencia": {
   "fase": 2,
   "titulo": "Admisión a trámite y comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Competencia del LAJ para verificar requisitos formales y concurrencia de indicios suficientes de desaparición. Se emite decreto de admisión con señalamiento de comparecencia y orden de publicidad."
    },
    {
     "tipo": "plazo",
     "texto": "Comparecencia: plazo máximo de 1 mes desde la admisión (Art. 70.2 LJV)"
    },
    {
     "tipo": "info",
     "texto": "Citación a solicitante, MF, parientes indicados e interesados personados. Objeto: práctica de pruebas, audiencia de alegaciones, proposición de nuevas pruebas."
    },
    {
     "tipo": "nota",
     "texto": "Publicidad edictal: dos publicaciones con intervalo mínimo de 8 días. Medios: Tablón Judicial Edictal Único (Art. 164 LEC, modificado por RD-ley 6/2023) y tablón del Ayuntamiento del último domicilio."
    },
    {
     "tipo": "plazo",
     "texto": "Intervalo mínimo entre publicaciones edictales: 8 días (Art. 70.2 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 70 LJV; Art. 164 LEC; LOPD 3/2018"
    }
   ],
   "pregunta": "¿Resultado de la comparecencia y las pruebas?",
   "opciones": [
    {
     "texto": "Procede la declaración de ausencia",
     "tono": "t-ok",
     "nota": "Practicadas las pruebas y finalizada la comparecencia, concurren los requisitos legales",
     "destino": "resolucion_ausencia"
    },
    {
     "texto": "Se necesita práctica de prueba posterior",
     "tono": "t-plazo",
     "nota": "El LAJ puede acordar práctica posterior de pruebas propuestas (testigos, peritos, documentación)",
     "destino": "prueba_posterior_ausencia"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "No se acreditan suficientemente los requisitos legales",
     "destino": "fin_ausencia_no_procede"
    }
   ]
  },
  "prueba_posterior_ausencia": {
   "fase": 2,
   "titulo": "Prueba posterior a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Facultad del LAJ para acordar la práctica posterior de pruebas propuestas: declaraciones de testigos, informes periciales, documentación pública/privada, pruebas tecnológicas con respeto a la protección de datos."
    },
    {
     "tipo": "nota",
     "texto": "Plazo razonable dentro del máximo de duración del expediente. Intervención preceptiva del MF en medidas que afecten al patrimonio o derechos personales del ausente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 70.3 LJV; LOPD 3/2018"
    }
   ],
   "pregunta": "¿Resultado de la prueba posterior?",
   "opciones": [
    {
     "texto": "Procede la declaración de ausencia",
     "tono": "t-ok",
     "nota": "Las pruebas posteriores confirman los requisitos",
     "destino": "resolucion_ausencia"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "Las pruebas no acreditan suficientemente los requisitos",
     "destino": "fin_ausencia_no_procede"
    }
   ]
  },
  "resolucion_ausencia": {
   "fase": 2,
   "titulo": "Decreto de declaración de ausencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicadas las pruebas estimadas necesarias y finalizada la comparecencia, el LAJ emite decreto de declaración legal de ausencia con fundamentación jurídica."
    },
    {
     "tipo": "nota",
     "texto": "Contenido del decreto: declaración legal de ausencia; nombramiento del representante conforme al Art. 184 CC; determinación de funciones (pesquisa, protección, administración, obligaciones); disposiciones complementarias (fianza, retribución, límites, rendición de cuentas)."
    },
    {
     "tipo": "aviso",
     "texto": "Efectos inmediatos: Inscripción en Registro Civil (Art. 198 CC); extinción de mandatos otorgados por el ausente; legitimación del representante para actuar en nombre del ausente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 71 LJV; Art. 184 CC; Art. 198 CC"
    }
   ],
   "siguiente": "representante_ausente"
  },
  "representante_ausente": {
   "fase": 2,
   "titulo": "Régimen del representante del ausente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El representante del ausente es nombrado conforme al Art. 184 CC. Se le asignan tres funciones esenciales: pesquisa de la persona, protección y administración de bienes, y cumplimiento de obligaciones."
    },
    {
     "tipo": "nota",
     "texto": "Régimen supletorio de tutela (Cap. IV y VIII CC): Nombramiento y aceptación; excusas y remoción; prestación de fianza; retribución en función de cuantía patrimonial, complejidad y dedicación."
    },
    {
     "tipo": "aviso",
     "texto": "Autorizaciones judiciales necesarias para actos de disposición, gravamen o enajenación de bienes del ausente. Requisito: utilidad evidente o necesidad acreditada."
    },
    {
     "tipo": "nota",
     "texto": "Rendición de cuentas: anual o al finalizar la gestión, con intervención del MF y aprobación por el LAJ."
    },
    {
     "tipo": "ley",
     "texto": "Art. 71 LJV; Art. 184 CC; CC Cap. IV y VIII"
    }
   ],
   "pregunta": "¿Existían medidas provisionales adoptadas con anterioridad?",
   "opciones": [
    {
     "texto": "Sí, existían medidas previas",
     "tono": "t-plazo",
     "nota": "Las medidas subsisten hasta la declaración de ausencia. Pueden modificarse.",
     "destino": "medidas_subsistencia"
    },
    {
     "texto": "No, pero se necesitan nuevas medidas",
     "tono": "t-nota",
     "nota": "El LAJ puede adoptar medidas provisionales no existentes",
     "destino": "medidas_nuevas"
    },
    {
     "texto": "No se necesitan medidas provisionales",
     "tono": "t-ok",
     "nota": "Proceda directamente al inventario de bienes",
     "destino": "inventario_bienes"
    }
   ]
  },
  "medidas_subsistencia": {
   "fase": 3,
   "titulo": "Subsistencia de medidas provisionales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las medidas reguladas en el Código Civil para casos de desaparición, adoptadas antes de iniciarse el expediente de declaración de ausencia legal, permanecen hasta que tenga lugar la declaración de ausencia legal (Art. 72.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Principio de continuidad en la protección del desaparecido y de sus bienes."
    },
    {
     "tipo": "nota",
     "texto": "Modificación de medidas: a instancia de interesado o MF; competencia del LAJ; criterios: cambio de circunstancias, utilidad, protección de terceros; procedimiento: comparecencia simplificada con audiencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 72.1 LJV; CC arts. 181-182; LEC arts. 721-742"
    }
   ],
   "pregunta": "¿Se modifican las medidas previas?",
   "opciones": [
    {
     "texto": "Sí, se modifican por cambio de circunstancias",
     "tono": "t-plazo",
     "nota": "Comparecencia simplificada con audiencia de los afectados",
     "destino": "inventario_bienes"
    },
    {
     "texto": "No, subsisten tal cual",
     "tono": "t-ok",
     "nota": "Las medidas se mantienen hasta resolución del expediente",
     "destino": "inventario_bienes"
    }
   ]
  },
  "medidas_nuevas": {
   "fase": 3,
   "titulo": "Adopción de medidas provisionales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ puede acordar medidas provisionales en tanto no se ultime el expediente de ausencia (Art. 72.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Tipología: Protección patrimonial (intervención de cuentas, depósito de valores, embargo preventivo); protección personal (designación de cuidador, autorización para actos médicos); medidas de averiguación (requerimientos a registros, publicación de búsqueda, colaboración con fuerzas de seguridad)."
    },
    {
     "tipo": "aviso",
     "texto": "Requisitos: acreditación de riesgo de perjuicio irreparable; proporcionalidad y temporalidad; audiencia previa del MF y, si es posible, de los interesados conocidos."
    },
    {
     "tipo": "nota",
     "texto": "Duración: hasta resolución del expediente o modificación por cambio de circunstancias. Posibilidad de recurso de revisión ante el Juez."
    },
    {
     "tipo": "ley",
     "texto": "Art. 72.2 LJV; LEC arts. 721-742"
    }
   ],
   "siguiente": "inventario_bienes"
  },
  "inventario_bienes": {
   "fase": 3,
   "titulo": "Práctica de inventario de bienes",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Obligación del representante de realizar inventario detallado de bienes muebles y descripción de inmuebles del ausente, conforme al Art. 185.1 CC y Art. 73 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Contenido del inventario: Bienes muebles (descripción, valor estimado, ubicación, estado); inmuebles (descripción registral, catastral y física; cargas y gravámenes; estado de ocupación); derechos y obligaciones (créditos, deudas, contratos, participaciones); documentación relevante (títulos, pólizas, escrituras)."
    },
    {
     "tipo": "nota",
     "texto": "Sujetos con intervención preceptiva: Ministerio Fiscal (garantía del interés público) e interesados personados. Posibilidad de perito tasador si la complejidad lo requiere."
    },
    {
     "tipo": "nota",
     "texto": "Efectos: base para administración provisional; referencia para rendición de cuentas; documento inscribible en Registro Civil (Art. 198 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist del inventario",
     "items": [
      "Bienes muebles: descripción, valor, ubicación y estado",
      "Inmuebles: descripción registral, catastral, física; cargas",
      "Derechos y obligaciones: créditos, deudas, contratos",
      "Documentación relevante: títulos, pólizas, escrituras",
      "Intervención del MF e interesados personados",
      "Levantamiento de acta detallada con firma de intervinientes"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 73 LJV; Art. 185.1 CC; Ley Hipotecaria; LEC arts. 637-640"
    }
   ],
   "pregunta": "¿Desea continuar con la comunicación al Registro Civil?",
   "opciones": [
    {
     "texto": "Sí, proceda a la inscripción registral",
     "tono": "t-ok",
     "nota": "Remisión de testimonios al Registro Civil conforme al Art. 77 LJV",
     "destino": "comunicacion_registro"
    },
    {
     "texto": "El procedimiento ha concluido aquí",
     "tono": "t-ok",
     "nota": "La ausencia legal ha sido declarada con todas las garantías",
     "destino": "fin_ausencia_declarada"
    }
   ]
  },
  "fallecimiento_siniestro": {
   "fase": 4,
   "titulo": "Fallecimiento por siniestro de nave/aeronave",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Supuestos arts. 194.2-3 CC: siniestro comprobado de nave o aeronave. Legitimación exclusiva del Ministerio Fiscal como garante del interés público en determinación del estado civil en catástrofes colectivas."
    },
    {
     "tipo": "plazo",
     "texto": "Práctica de pruebas: plazo máximo de 5 días (Art. 74.1 LJV)"
    },
    {
     "tipo": "nota",
     "texto": "Medios probatorios: informes de autoridades marítimas/aeronáuticas, certificados de siniestro, listas de pasajeros, informes forenses, testimonios de supervivientes. Colaboración diplomática y consular."
    },
    {
     "tipo": "nota",
     "texto": "Resolución: mismo día de práctica de pruebas. Competencia del LAJ del lugar del siniestro. Contenido: declaración de fallecimiento; fecha de muerte: la del siniestro, salvo prueba en contrario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.1 LJV; CC arts. 194.2-3; LEC art. 164"
    }
   ],
   "pregunta": "¿Resultado del procedimiento?",
   "opciones": [
    {
     "texto": "Se declara el fallecimiento",
     "tono": "t-ok",
     "nota": "Decreto de declaración de fallecimiento con fecha del siniestro",
     "destino": "resolucion_fallecimiento"
    },
    {
     "texto": "No se acredita suficientemente",
     "tono": "t-aviso",
     "nota": "Pruebas insuficientes para declarar el fallecimiento",
     "destino": "fin_fallecimiento_no_acredita"
    }
   ]
  },
  "fallecimiento_no_siniestro": {
   "fase": 4,
   "titulo": "Fallecimiento sin siniestro (arts. 193, 194.1,4,5)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Legitimación: interesados o Ministerio Fiscal conforme a reglas generales del Art. 68 LJV. Tramitación conforme al Cap. IX LJV, con aplicación de normas sobre declaración de ausencia en cuanto sean compatibles."
    },
    {
     "tipo": "nota",
     "texto": "Requisitos sustantivos: Art. 193 CC (10 años, 5 años si mayor de 75, 1 año por riesgo inminente); Art. 194.1 CC (operaciones militares); Art. 194.4-5 CC (presunción de siniestro por no llegada a destino)."
    },
    {
     "tipo": "lista",
     "titulo": "Verificar plazos de fallecimiento",
     "items": [
      "10 años desde las últimas noticias (Art. 193.1 CC)",
      "5 años si la persona fuera mayor de 75 años (Art. 193.2 CC)",
      "1 año por riesgo inminente de muerte (Art. 193 CC)",
      "Desaparición en operaciones militares (Art. 194.1 CC)",
      "Presunción de siniestro (Art. 194.4-5 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV; CC arts. 193, 194.1,4,5"
    }
   ],
   "pregunta": "¿Se cumplen los plazos y requisitos legales?",
   "opciones": [
    {
     "texto": "Sí, se cumplen los requisitos",
     "tono": "t-ok",
     "nota": "Procede la tramitación de la declaración de fallecimiento",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "No se cumplen los plazos",
     "tono": "t-aviso",
     "nota": "No procede la declaración de fallecimiento en este momento",
     "destino": "fin_plazos_fallecimiento_no"
    }
   ]
  },
  "fallecimiento_con_ausencia": {
   "fase": 4,
   "titulo": "Fallecimiento con ausencia legal previa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si ya existe declaración de ausencia legal, la declaración de fallecimiento cesará la ausencia legal decretada previamente (cuando resulte acreditado)."
    },
    {
     "tipo": "nota",
     "texto": "Contenido del decreto: cese de ausencia legal; fallecimiento con fecha conforme a criterios legales; efectos: apertura de sucesión, inscripción registral, liquidación de representación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV; CC arts. 193-196"
    }
   ],
   "pregunta": "¿Qué plazo de fallecimiento se cumple?",
   "opciones": [
    {
     "texto": "Plazo general: 10 años sin noticias",
     "tono": "t-ok",
     "nota": "Art. 193.1 CC",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Mayor de 75 años: 5 años sin noticias",
     "tono": "t-ok",
     "nota": "Art. 193.2 CC",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Riesgo inminente: 1 año",
     "tono": "t-ok",
     "nota": "Art. 193 CC, riesgo inminente de muerte",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Operaciones militares (Art. 194.1 CC)",
     "tono": "t-ok",
     "nota": "Desaparición durante campaña o explosión",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "No llegada a destino (Art. 194.4-5 CC)",
     "tono": "t-ok",
     "nota": "Presunción de siniestro con evidencias racionales",
     "destino": "tramitacion_fallecimiento"
    }
   ]
  },
  "tramitacion_fallecimiento": {
   "fase": 4,
   "titulo": "Tramitación de la declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplica el procedimiento del Cap. IX LJV, con las normas sobre declaración de ausencia en cuanto sean compatibles (Art. 74.2 LJV). Admisión, comparecencia, publicidad edictal y práctica de pruebas conforme a los arts. 70-71 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Contenido del decreto de fallecimiento: fallecimiento con fecha conforme a criterios legales; cese de ausencia legal si la hubiera; efectos: apertura de sucesión, inscripción registral, liquidación de representación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV; Arts. 70-71 LJV; CC arts. 193-196"
    }
   ],
   "pregunta": "¿Resultado de la tramitación?",
   "opciones": [
    {
     "texto": "Procede la declaración de fallecimiento",
     "tono": "t-ok",
     "nota": "Se emite decreto declarando el fallecimiento",
     "destino": "resolucion_fallecimiento"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "No se acreditan suficientemente los requisitos legales",
     "destino": "fin_fallecimiento_no_procede"
    }
   ]
  },
  "resolucion_fallecimiento": {
   "fase": 4,
   "titulo": "Decreto de declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El decreto de declaración de fallecimiento debe estar firme (agotada la vía de recursos) para producir efectos sucesorios."
    },
    {
     "tipo": "nota",
     "texto": "Efectos inmediatos: apertura de la sucesión; inscripción registral; cesación de la representación del ausente si la hubiera."
    },
    {
     "tipo": "aviso",
     "texto": "Prohibición de disponer a título gratuito durante 5 años desde la declaración (Art. 196.2 CC). Excepción: legados en favor de instituciones de beneficencia o sufragios."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74 LJV; CC arts. 193-196; LEC arts. 777-782; Ley Notariado"
    }
   ],
   "pregunta": "¿Cómo se adjudican los bienes de la sucesión?",
   "opciones": [
    {
     "texto": "Vía judicial (LEC arts. 777-782)",
     "tono": "t-ok",
     "nota": "Partición y adjudicación judicial de la herencia",
     "destino": "sucesion_judicial"
    },
    {
     "texto": "Vía extrajudicial (escritura pública ante Notario)",
     "tono": "t-ok",
     "nota": "Partición notarial con intervención de todos los herederos",
     "destino": "sucesion_notarial"
    }
   ]
  },
  "sucesion_judicial": {
   "fase": 4,
   "titulo": "Adjudicación judicial de la herencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento de adjudicación de herencia conforme a los arts. 777-782 LEC."
    },
    {
     "tipo": "nota",
     "texto": "Obligación de inventario notarial: formación de inventario detallado de bienes muebles y descripción de inmuebles con intervención notarial."
    },
    {
     "tipo": "ley",
     "texto": "LEC arts. 777-782; Art. 74.3 LJV; Ley Notariado"
    }
   ],
   "siguiente": "comunicacion_registro_fallecimiento"
  },
  "sucesion_notarial": {
   "fase": 4,
   "titulo": "Adjudicación notarial de la herencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Escritura pública de partición ante Notario con intervención de todos los herederos y aceptación de la declaración de fallecimiento."
    },
    {
     "tipo": "nota",
     "texto": "Obligación de inventario notarial: formación de inventario detallado de bienes muebles y descripción de inmuebles."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.3 LJV; Ley Notariado; CC art. 196"
    }
   ],
   "siguiente": "comunicacion_registro_fallecimiento"
  },
  "comunicacion_registro_fallecimiento": {
   "fase": 4,
   "titulo": "Comunicación al Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Remisión de testimonios al Registro Civil conforme al Art. 77 LJV y Art. 198 CC para inscripción de la declaración de fallecimiento en el registro individual."
    },
    {
     "tipo": "nota",
     "texto": "Contenido: decreto de declaración de fallecimiento; escrituras de partición y adjudicación. Forma: medios telemáticos, plazo inmediato a firmeza."
    },
    {
     "tipo": "ley",
     "texto": "Art. 77 LJV; Art. 198 CC; LRC art. 78"
    }
   ],
   "siguiente": "fin_fallecimiento_declarado"
  },
  "hechos_posteriores": {
   "fase": 5,
   "titulo": "Hechos posteriores a la declaración",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento ante la presentación, noticias de existencia o fallecimiento del declarado ausente o fallecido, conforme al Art. 75 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Cuatro supuestos regulados: 1) Presentación del presunto ausente/fallecido; 2) Noticias de existencia sin presentación; 3) Suspensión de la actuación del representante; 4) Noticia de muerte del desaparecido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75 LJV; Art. 76 LJV; CC art. 197"
    }
   ],
   "pregunta": "¿Qué hecho posterior se ha producido?",
   "opciones": [
    {
     "texto": "Se presenta el presunto ausente o fallecido",
     "tono": "t-ok",
     "nota": "La persona se presenta y solicita identificación",
     "destino": "presentacion_ausente"
    },
    {
     "texto": "Hay noticias de existencia sin presentación",
     "tono": "t-plazo",
     "nota": "Se tiene noticia de que la persona puede estar viva",
     "destino": "noticias_existencia"
    },
    {
     "texto": "Persona con identificación solicita suspensión",
     "tono": "t-plazo",
     "nota": "Alguien dice ser el desaparecido y aporta documentación",
     "destino": "suspension_representante"
    },
    {
     "texto": "Noticia de muerte del desaparecido",
     "tono": "t-aviso",
     "nota": "Se ha tenido noticia del fallecimiento efectivo",
     "destino": "noticia_muerte"
    },
    {
     "texto": "Fallecimiento comprobado durante el expediente",
     "tono": "t-nota",
     "nota": "Se comprueba el fallecimiento en cualquier momento de la tramitación (Art. 76 LJV)",
     "destino": "fallecimiento_comprobado"
    }
   ]
  },
  "presentacion_ausente": {
   "fase": 5,
   "titulo": "Presentación del presunto ausente/fallecido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La persona que dice ser el ausente o fallecido se presenta. El LAJ acuerda de oficio o a instancia la identificación por medios adecuados."
    },
    {
     "tipo": "nota",
     "texto": "Medios de identificación: pruebas documentales (DNI, pasaporte, partidas); pruebas biológicas (ADN); declaraciones de testigos; informes periciales."
    },
    {
     "tipo": "nota",
     "texto": "Comparecencia de verificación: citación a persona presentada, MF y todos los que hubieren intervenido en el expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Resolución: decreto dentro de los 3 días siguientes a la comparecencia (Art. 75.1 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.1 LJV; CC art. 197; LOPD 3/2018"
    }
   ],
   "pregunta": "¿Resultado de la verificación de identidad?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: se revoca la declaración",
     "tono": "t-ok",
     "nota": "Restitución de bienes al reaparecido conforme al Art. 197 CC",
     "destino": "fin_revocacion_presentacion"
    },
    {
     "texto": "No se confirma la identidad: se ratifica la declaración",
     "tono": "t-aviso",
     "nota": "La declaración de ausencia o fallecimiento se mantiene",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "noticias_existencia": {
   "fase": 5,
   "titulo": "Noticias de existencia sin presentación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se recibe noticia de que el declarado ausente o fallecido podría estar vivo, pero no se ha presentado personalmente."
    },
    {
     "tipo": "nota",
     "texto": "Notificación personal al presunto afectado: contenido de la resolución de declaración; requerimiento para aportar pruebas de identidad; forma conforme a reglas de LEC; posibilidad de notificación electrónica."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para aporte de pruebas: 20 días desde la notificación (Art. 75.2 LJV)"
    },
    {
     "tipo": "nota",
     "texto": "Comparecencia posterior: convocatoria transcurrido el plazo. Resolución en 3 días."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.2 LJV; LEC normas de notificación; LOPD 3/2018"
    }
   ],
   "pregunta": "¿Resultado de la comparecencia?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: se revoca la declaración",
     "tono": "t-ok",
     "nota": "Se deja sin efecto la declaración de ausencia o fallecimiento",
     "destino": "fin_revocacion_noticias"
    },
    {
     "texto": "No se confirma: se ratifica la declaración",
     "tono": "t-aviso",
     "nota": "La declaración se mantiene",
     "destino": "fin_ratificacion"
    },
    {
     "texto": "No comparece ni aporta pruebas",
     "tono": "t-aviso",
     "nota": "Se ratifica la declaración por falta de oposición",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "suspension_representante": {
   "fase": 5,
   "titulo": "Suspensión de la actuación del representante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Persona que dice ser el desaparecido solicita suspensión y aporta identificación documental bastante. El LAJ acuerda la suspensión cautelar hasta la celebración de la comparecencia de verificación."
    },
    {
     "tipo": "nota",
     "texto": "Finalidad: evitar actos de disposición que pudieran perjudicar derechos del reaparecido. Límites: no afecta a actos de conservación urgente."
    },
    {
     "tipo": "plazo",
     "texto": "Resolución en 3 días siguientes a la comparecencia de verificación"
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.3 LJV"
    }
   ],
   "pregunta": "¿Resultado de la verificación?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: suspensión definitiva y revocación",
     "tono": "t-ok",
     "nota": "Se revoca la declaración, se restituyen bienes",
     "destino": "fin_revocacion_suspension"
    },
    {
     "texto": "No se confirma: se levanta la suspensión",
     "tono": "t-aviso",
     "nota": "El representante continúa sus funciones",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "noticia_muerte": {
   "fase": 5,
   "titulo": "Noticia de muerte del desaparecido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se recibe noticia del fallecimiento efectivo del desaparecido. Se convoca comparecencia de comprobación con citación a interesados y MF."
    },
    {
     "tipo": "nota",
     "texto": "Práctica de pruebas: certificado de defunción, informe forense, testimonios, documentación registral. Resolución en 3 días."
    },
    {
     "tipo": "nota",
     "texto": "Efectos: archivado del expediente; apertura de nueva sucesión por fallecimiento efectivo; liquidación de gestión del representante."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.4 LJV; CC arts. 657 y ss.; LRC art. 78"
    }
   ],
   "siguiente": "fallecimiento_comprobado"
  },
  "fallecimiento_comprobado": {
   "fase": 5,
   "titulo": "Constancia del fallecimiento (Art. 76)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comprobación del fallecimiento en cualquier momento durante la tramitación de expedientes regulados en este Capítulo."
    },
    {
     "tipo": "nota",
     "texto": "Medios de comprobación: certificado de defunción; informe forense; sentencia firme en otro procedimiento; documentación registral de inscripción de defunción."
    },
    {
     "tipo": "nota",
     "texto": "Consecuencias procesales: archivado del expediente; sin efecto de las medidas adoptadas. Consecuencias sustantivas: apertura de sucesión por fallecimiento efectivo (CC art. 657 y ss.); liquidación de gestión del representante; inscripción registral."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV; CC art. 196; LRC art. 78; CC arts. 657 y ss."
    }
   ],
   "pregunta": "¿Procede la apertura de sucesión?",
   "opciones": [
    {
     "texto": "Sí, se abre la sucesión por fallecimiento efectivo",
     "tono": "t-ok",
     "nota": "Trámites conforme a normativa sucesoria",
     "destino": "fin_fallecimiento_comprobado"
    },
    {
     "texto": "El expediente se archiva sin más trámites",
     "tono": "t-nota",
     "nota": "No hay bienes ni herederos conocidos",
     "destino": "fin_archivo_expediente"
    }
   ]
  },
  "comunicacion_registro": {
   "fase": 6,
   "titulo": "Comunicación al Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Obligación de remitir testimonios al Registro Civil competente para inscripción de las declaraciones conforme al Art. 198 CC y Ley 20/2011 del Registro Civil (Art. 77 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Contenido de testimonios: resoluciones o decretos de declaración de desaparición, ausencia legal y fallecimiento; nombramiento, modificación y extinción de representaciones; inventarios de bienes; decretos de autorizaciones; escrituras de transmisiones y gravámenes; escrituras de partición y adjudicación."
    },
    {
     "tipo": "nota",
     "texto": "Forma de remisión: medios telemáticos conforme a LEC; plazo: inmediato a firmeza; garantías: autenticidad, integridad y confidencialidad."
    },
    {
     "tipo": "nota",
     "texto": "Efectos: oponibilidad frente a terceros (erga omnes); seguridad jurídica; coordinación con otros registros (Propiedad, Mercantil, Bienes Muebles)."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist de comunicación registral",
     "items": [
      "Testimonio de decreto de declaración",
      "Nombramiento y datos del representante",
      "Inventario de bienes (si procede)",
      "Autorizaciones de disposición",
      "Escrituras de transmisiones",
      "Escrituras de partición y adjudicación",
      "Remisión telemática al Registro Civil"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 77 LJV; Art. 198 CC; LRC arts. 4, 78; Ley 39/2015"
    }
   ],
   "siguiente": "fin_ausencia_declarada_registro"
  },
  "fin_defensor_nombrado": {
   "fase": 1,
   "titulo": "Defensor judicial nombrado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial ha sido nombrado conforme al procedimiento ordinario y ha aceptado el cargo. Sus funciones incluyen: pesquisa de la persona, protección y administración de bienes, y cumplimiento de obligaciones del desaparecido."
    },
    {
     "tipo": "nota",
     "texto": "El nombramiento debe comunicarse al Registro Civil conforme al Art. 77 LJV."
    },
    {
     "tipo": "nota",
     "texto": "El defensor está sujeto al régimen de fianza, retribución, rendición de cuentas y autorizaciones judiciales conforme a los Cap. IV y VIII CC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV; Art. 181 CC; CC Cap. IV y VIII; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_defensor_ratificado": {
   "fase": 1,
   "titulo": "Defensor urgente ratificado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial nombrado de forma urgente ha sido ratificado en la comparecencia retroactiva. Las medidas adoptadas se mantienen."
    },
    {
     "tipo": "nota",
     "texto": "Comunicar al Registro Civil conforme al Art. 77 LJV. El defensor debe rendir cuentas de las medidas adoptadas durante el período urgente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.2 LJV; Art. 181 CC; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_plazos_no_cumplidos": {
   "fase": 2,
   "titulo": "Plazos legales no cumplidos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No procede la declaración de ausencia legal porque no se cumplen los plazos establecidos en los arts. 183-184 CC."
    },
    {
     "tipo": "nota",
     "texto": "Alternativas: Solicitar nombramiento de defensor judicial (Art. 69 LJV) para la protección provisional del desaparecido y sus bienes mientras transcurren los plazos legales."
    },
    {
     "tipo": "nota",
     "texto": "Plazos: 1 año sin noticias y sin apoderado; 3 años con apoderado; caducidad de mandato + 1 año sin noticias."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 183-184; Art. 69 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_ausencia_no_procede": {
   "fase": 2,
   "titulo": "No procede la declaración de ausencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas no acreditan suficientemente los requisitos legales para declarar la ausencia conforme a los arts. 182-184 CC."
    },
    {
     "tipo": "nota",
     "texto": "Posibilidad de reiterar la solicitud si se obtienen nuevas pruebas. El solicitante puede recurrir la decisión ante el Juez."
    },
    {
     "tipo": "ley",
     "texto": "Art. 70 LJV; CC arts. 182-184"
    }
   ],
   "fin": "warning"
  },
  "fin_ausencia_declarada": {
   "fase": 3,
   "titulo": "Ausencia legal declarada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ausencia legal ha sido declarada mediante decreto del LAJ. Se ha nombrado representante conforme al Art. 184 CC, se han adoptado las medidas provisionales pertinentes y se ha practicado el inventario de bienes."
    },
    {
     "tipo": "nota",
     "texto": "Efectos: inscripción en Registro Civil; extinción de mandatos; legitimación del representante. El procedimiento puede reabrirse si se producen hechos posteriores (Art. 75 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 70-73 LJV; CC arts. 182-185, 198; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_ausencia_declarada_registro": {
   "fase": 6,
   "titulo": "Procedimiento completado con inscripción",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ausencia legal ha sido declarada, el representante nombrado, las medidas adoptadas, el inventario practicado y los testimonios remitidos al Registro Civil para inscripción. El procedimiento ha concluido con todas las garantías."
    },
    {
     "tipo": "nota",
     "texto": "La inscripción produce efectos erga omnes y coordina con otros registros (Propiedad, Mercantil, Bienes Muebles)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 67-73, 77 LJV; CC arts. 181-185, 198; LRC art. 78"
    }
   ],
   "fin": "success"
  },
  "fin_fallecimiento_no_acredita": {
   "fase": 4,
   "titulo": "Fallecimiento no acreditado por siniestro",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas en el plazo de 5 días no acreditan suficientemente el fallecimiento en el siniestro de nave o aeronave."
    },
    {
     "tipo": "nota",
     "texto": "El MF puede reiterar la solicitud si obtiene nuevas pruebas. La colaboración diplomática y consular puede aportar documentación adicional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.1 LJV; CC arts. 194.2-3"
    }
   ],
   "fin": "warning"
  },
  "fin_fallecimiento_no_procede": {
   "fase": 4,
   "titulo": "No procede la declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas no acreditan suficientemente los requisitos legales para declarar el fallecimiento."
    },
    {
     "tipo": "nota",
     "texto": "Posibilidad de reiterar la solicitud si se obtienen nuevas pruebas o transcurren más plazos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74 LJV; CC arts. 193-196"
    }
   ],
   "fin": "warning"
  },
  "fin_plazos_fallecimiento_no": {
   "fase": 4,
   "titulo": "Plazos de fallecimiento no cumplidos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se cumplen los plazos legales para declarar el fallecimiento conforme a los arts. 193-194 CC."
    },
    {
     "tipo": "nota",
     "texto": "Plazos legales: 10 años desde las últimas noticias; 5 años si mayor de 75; 1 año por riesgo inminente; operaciones militares; presunción de siniestro."
    },
    {
     "tipo": "nota",
     "texto": "Alternativa: solicitar declaración de ausencia legal si se cumplen sus plazos."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 193-194; Art. 70 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_fallecimiento_declarado": {
   "fase": 6,
   "titulo": "Fallecimiento declarado y sucesión abierta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El fallecimiento ha sido declarado firme, la sucesión se ha abierto y adjudicado, y los testimonios han sido remitidos al Registro Civil. El procedimiento ha concluido."
    },
    {
     "tipo": "nota",
     "texto": "Prohibición de disponer a título gratuito durante 5 años (Art. 196.2 CC). Si el declarado fallecido reaparece, tiene derecho a la restitución de bienes conforme al Art. 197 CC."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 74, 77 LJV; CC arts. 193-197; LEC arts. 777-782; LRC art. 78"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_presentacion": {
   "fase": 5,
   "titulo": "Declaración revocada por presentación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha verificado la identidad del presentado y se deja sin efecto la declaración de ausencia o fallecimiento. Restitución de bienes al reaparecido conforme al Art. 197 CC."
    },
    {
     "tipo": "nota",
     "texto": "Responsabilidad por actos de gestión: validez de los realizados de buena fe por el representante. El reaparecido puede reclamar daños por dolo o negligencia grave."
    },
    {
     "tipo": "nota",
     "texto": "Comunicar la revocación al Registro Civil para cancelación de asientos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.1 LJV; CC art. 197; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_noticias": {
   "fase": 5,
   "titulo": "Declaración revocada por noticias de existencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas aportadas confirman la existencia del declarado ausente o fallecido. Se deja sin efecto la declaración."
    },
    {
     "tipo": "nota",
     "texto": "Restitución de bienes conforme al Art. 197 CC. Validez de actos de buena fe del representante. Comunicación al Registro Civil para cancelación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.2 LJV; CC art. 197; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_suspension": {
   "fase": 5,
   "titulo": "Declaración revocada tras suspensión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se confirma la identidad de la persona que solicitó la suspensión. La suspensión del representante se torna definitiva y se revoca la declaración."
    },
    {
     "tipo": "nota",
     "texto": "Restitución de bienes, cancelación de asientos registrales, liquidación de la gestión del representante."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.3 LJV; CC art. 197; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_ratificacion": {
   "fase": 5,
   "titulo": "Declaración ratificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se ha confirmado la identidad del presunto reaparecido o no ha aportado pruebas suficientes. La declaración de ausencia o fallecimiento se mantiene íntegramente."
    },
    {
     "tipo": "nota",
     "texto": "El representante continúa en el ejercicio de sus funciones. Las medidas adoptadas se mantienen."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75 LJV"
    }
   ],
   "fin": "neutral"
  },
  "fin_fallecimiento_comprobado": {
   "fase": 5,
   "titulo": "Fallecimiento efectivo comprobado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha comprobado el fallecimiento efectivo del desaparecido. El expediente de ausencia o fallecimiento declarado se archiva. Se abre la sucesión por fallecimiento efectivo."
    },
    {
     "tipo": "nota",
     "texto": "Consecuencias: archivo del expediente; cesación de representación y medidas; apertura de sucesión conforme al CC art. 657 y ss.; liquidación de gestión del representante; inscripción registral del fallecimiento."
    },
    {
     "tipo": "nota",
     "texto": "Validez de actos de disposición realizados de buena fe por el representante antes de la comprobación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV; CC arts. 196, 657 y ss.; LRC art. 78"
    }
   ],
   "fin": "success"
  },
  "fin_archivo_expediente": {
   "fase": 5,
   "titulo": "Expediente archivado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se archiva al comprobarse el fallecimiento sin que existan bienes ni herederos conocidos."
    },
    {
     "tipo": "nota",
     "texto": "Si posteriormente aparecieren herederos o bienes, podrán iniciar los trámites sucesorios correspondientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV; CC arts. 657 y ss."
    }
   ],
   "fin": "neutral"
  }
 },
 "pie": "Ley 15/2015, Arts. 67-77 LJV<br>CC arts. 181-198"
});
