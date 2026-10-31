/* Migrado por tools/migrate.js desde sources/actual/G23.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-deslinde",
 "ley": "LJV",
 "grupo": "Título VI · Derechos reales",
 "titulo": "Del expediente de deslinde de fincas no inscritas",
 "corto": "Deslinde de fincas no inscritas",
 "articulos": [
  "104",
  "105",
  "106",
  "107"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G23"
 },
 "fases": [
  "Admisibilidad",
  "Competencia",
  "Solicitud",
  "Tramitación",
  "Acto de deslinde",
  "Resolución"
 ],
 "actores": {
  "ambos": "LAJ e interesados",
  "laj": "LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Verificación del ámbito de aplicación (I): inscripción registral",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de deslinde de fincas no inscritas se regula en los artículos 104 a 107 de la Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria, dentro del Capítulo II del Título VI relativo a los expedientes de jurisdicción voluntaria sobre derechos reales."
    },
    {
     "tipo": "nota",
     "texto": "Se aplicarán las disposiciones de este Capítulo cuando se pretenda obtener el deslinde de fincas que no estuvieran inscritas en el Registro de la Propiedad."
    },
    {
     "tipo": "aviso",
     "texto": "Tratándose de fincas inscritas, se aplicará lo dispuesto en la legislación hipotecaria (artículo 200 de la Ley Hipotecaria, expediente notarial)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 104 LJV — Ámbito de aplicación"
    }
   ],
   "pregunta": "¿La finca cuyo deslinde se pretende está inscrita en el Registro de la Propiedad?",
   "opciones": [
    {
     "texto": "Sí, la finca está inscrita",
     "tono": "t-aviso",
     "destino": "fin_inscrita"
    },
    {
     "texto": "No, la finca no está inscrita",
     "tono": "t-ok",
     "destino": "verificar_admin"
    }
   ]
  },
  "verificar_admin": {
   "fase": 0,
   "titulo": "Verificación del ámbito de aplicación (II): titularidad pública",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Descartada la inscripción registral, debe comprobarse si el inmueble pertenece a una Administración Pública, supuesto igualmente excluido de este expediente."
    },
    {
     "tipo": "aviso",
     "texto": "No resultarán de aplicación a los inmuebles cuya titularidad corresponda a las Administraciones Públicas, cuyo deslinde se practicará conforme a su legislación específica."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 104 LJV — Ámbito de aplicación"
    }
   ],
   "pregunta": "¿El inmueble es de titularidad de una Administración Pública?",
   "opciones": [
    {
     "texto": "Sí, es un bien de una Administración Pública",
     "tono": "t-aviso",
     "destino": "fin_admin"
    },
    {
     "texto": "No, es un bien de titularidad privada",
     "tono": "t-ok",
     "destino": "confusion_lindes"
    }
   ]
  },
  "confusion_lindes": {
   "fase": 0,
   "titulo": "Presupuesto material: confusión de linderos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Superado el filtro del ámbito de aplicación, debe verificarse el presupuesto material de la acción de deslinde: la existencia de confusión de linderos."
    },
    {
     "tipo": "nota",
     "texto": "La jurisprudencia del Tribunal Supremo exige, como requisito objetivo de la acción de deslinde, la existencia de confusión de linderos entre las fincas, de suerte que no se pueda tener conocimiento exacto de la línea perimetral de cada propiedad, con la consiguiente incertidumbre respecto de la aparente extensión superficial de cada una de ellas."
    },
    {
     "tipo": "aviso",
     "texto": "Si los predios están perfectamente identificados y delimitados, no cabe el ejercicio de esta acción."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 384 a 387 del Código Civil — Régimen sustantivo del deslinde"
    }
   ],
   "pregunta": "¿Existe confusión de linderos entre la finca y las fincas colindantes?",
   "opciones": [
    {
     "texto": "Sí, existe confusión de linderos",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No, los linderos están claros",
     "tono": "t-plazo",
     "destino": "fin_sin_confusion"
    }
   ]
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación del órgano competente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitido que el procedimiento es el adecuado, corresponde determinar el órgano competente para el conocimiento del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Será competente para el conocimiento de este expediente el Secretario judicial del Juzgado de Primera Instancia correspondiente al lugar donde estuviera situada la finca o la mayor parte de ella."
    },
    {
     "tipo": "lista",
     "titulo": "Comprobaciones de competencia",
     "items": [
      "Identificar el lugar donde está situada la finca",
      "Si la finca abarca varios partidos judiciales, determinar en cuál se encuentra la mayor parte de ella",
      "Atribuir el conocimiento al Secretario judicial del Juzgado de Primera Instancia correspondiente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 105.1 LJV — Competencia"
    }
   ],
   "siguiente": "legitimacion"
  },
  "legitimacion": {
   "fase": 1,
   "titulo": "Verificación de la legitimación activa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Tras determinar la competencia, debe verificarse la legitimación del solicitante para instar el expediente."
    },
    {
     "tipo": "nota",
     "texto": "Se iniciará el expediente a instancia del titular del dominio de la finca o, de ser varios, de cualquiera de ellos, o del titular de cualquier derecho real de uso y disfrute sobre la misma."
    },
    {
     "tipo": "lista",
     "titulo": "Verificación de legitimación",
     "items": [
      "El solicitante es titular del dominio de la finca, o",
      "Siendo varios titulares, basta con que inste cualquiera de ellos, o",
      "El solicitante es titular de un derecho real de uso y disfrute sobre la finca"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 105.2 LJV; artículo 384 del Código Civil"
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 1,
   "titulo": "Determinación de la postulación procesal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La preceptividad de Abogado depende del valor de la finca objeto del deslinde."
    },
    {
     "tipo": "nota",
     "texto": "En la tramitación del presente expediente será preceptiva la intervención de Abogado si el valor de la finca fuera superior a 6.000 euros."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 105.3 LJV — Postulación"
    }
   ],
   "pregunta": "¿El valor de la finca es superior a 6.000 euros?",
   "opciones": [
    {
     "texto": "Sí, el valor excede de 6.000 €",
     "tono": "t-plazo",
     "destino": "con_abogado"
    },
    {
     "texto": "No, el valor es igual o inferior a 6.000 €",
     "tono": "t-nota",
     "destino": "sin_abogado"
    }
   ]
  },
  "con_abogado": {
   "fase": 1,
   "titulo": "Intervención preceptiva de Abogado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al superar el valor de la finca los 6.000 euros, será preceptiva la intervención de Abogado en la tramitación del expediente."
    },
    {
     "tipo": "aviso",
     "texto": "La intervención de Abogado es preceptiva cuando el valor de la finca supera los 6.000 euros."
    },
    {
     "tipo": "nota",
     "texto": "Esta cuantía coincide con la que delimita el juicio verbal y el juicio ordinario en la Ley de Enjuiciamiento Civil, de modo que, si el expediente deviene contencioso, el proceso declarativo posterior se tramitará conforme a esas reglas."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 105.3 LJV"
    }
   ],
   "siguiente": "solicitud"
  },
  "sin_abogado": {
   "fase": 1,
   "titulo": "Intervención facultativa de Abogado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al no superar el valor de la finca los 6.000 euros, la intervención de Abogado no es preceptiva."
    },
    {
     "tipo": "nota",
     "texto": "La postulación procesal tendrá, en consecuencia, carácter facultativo."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 105.3 LJV"
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 2,
   "titulo": "Redacción del escrito de iniciación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se procede a la redacción del escrito mediante el cual se iniciará el expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio del escrito",
     "items": [
      "Circunstancias de la finca que se pretende deslindar",
      "Circunstancias de las fincas colindantes",
      "Datos identificativos de los titulares de la finca a deslindar, incluidos los catastrales, con su domicilio si fuera conocido por el solicitante",
      "Datos identificativos de los titulares de las fincas colindantes, incluidos los catastrales, con su domicilio si fuera conocido por el solicitante",
      "Cuando el deslinde no se refiera a la totalidad del perímetro de la finca, determinación de la parte a que haya de contraerse"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Se admite el deslinde parcial, posibilidad avalada por la jurisprudencia y por la Dirección General de Seguridad Jurídica y Fe Pública, y recogida expresamente en el artículo 200 de la Ley Hipotecaria para fincas inscritas."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.1 LJV — Solicitud"
    }
   ],
   "siguiente": "documentacion"
  },
  "documentacion": {
   "fase": 2,
   "titulo": "Aportación de documentación preceptiva",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al escrito deberá acompañarse, en todo caso, la documentación exigida por la norma."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación preceptiva",
     "items": [
      "Certificación registral respecto de las fincas colindantes que aparezcan inscritas en el Registro de la Propiedad",
      "Certificación catastral descriptiva y gráfica de la finca objeto del deslinde",
      "Certificación catastral descriptiva y gráfica de las fincas colindantes",
      "Documentos o justificantes que sirvan de fundamento a la pretensión (títulos de propiedad, mediciones, planos, actas notariales previas, etc.)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.1 LJV, párrafos segundo y tercero"
    }
   ],
   "siguiente": "rep_grafica"
  },
  "rep_grafica": {
   "fase": 2,
   "titulo": "Representación gráfica: cotejo con la catastral",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Debe comprobarse si la representación gráfica catastral coincide con el deslinde que se solicita, para determinar si basta con aquella o es necesaria una representación gráfica alternativa."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.1 LJV, párrafos cuarto a sexto"
    }
   ],
   "pregunta": "¿Coincide la representación gráfica catastral con el deslinde solicitado?",
   "opciones": [
    {
     "texto": "Sí, coincide con la representación catastral",
     "tono": "t-ok",
     "destino": "presentacion"
    },
    {
     "texto": "No, no coincide con la catastral",
     "tono": "t-plazo",
     "destino": "rep_alternativa"
    }
   ]
  },
  "rep_alternativa": {
   "fase": 2,
   "titulo": "Aportación de representación gráfica alternativa",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El promotor manifiesta que la representación gráfica catastral no coincide con la del deslinde solicitado."
    },
    {
     "tipo": "aviso",
     "texto": "Deberá aportar representación gráfica georreferenciada del mismo."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos de la representación gráfica alternativa",
     "items": [
      "Debe respetar el resto de la delimitación de las fincas afectadas que resulten de la cartografía catastral en lo no afectado por el deslinde",
      "Debe estar debidamente georreferenciada",
      "Debe estar suscrita por técnico competente",
      "Debe permitir su incorporación al Catastro una vez practicado el deslinde"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.1 LJV, párrafos quinto y sexto; Texto Refundido de la Ley del Catastro Inmobiliario (RDLeg 1/2004)"
    }
   ],
   "siguiente": "presentacion"
  },
  "presentacion": {
   "fase": 2,
   "titulo": "Presentación de la solicitud en el Juzgado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Completada la preparación documental, se presenta la solicitud, junto con toda la documentación, ante el Juzgado de Primera Instancia competente."
    },
    {
     "tipo": "nota",
     "texto": "El escrito se dirige al Secretario judicial (Letrado de la Administración de Justicia) del Juzgado de Primera Instancia del lugar donde esté situada la finca o la mayor parte de ella."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 105.1 y 106.1 LJV"
    }
   ],
   "siguiente": "admision"
  },
  "admision": {
   "fase": 3,
   "titulo": "Admisión y comunicación del inicio a los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Recibida la solicitud, el Secretario judicial resuelve sobre su admisión y, en caso de admitirla, comunica el inicio del expediente a todos los interesados."
    },
    {
     "tipo": "nota",
     "texto": "El Secretario judicial, admitida la solicitud, comunicará el inicio del expediente a todos los interesados."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ tras la admisión",
     "items": [
      "Dictar la correspondiente resolución de admisión",
      "Identificar a todos los interesados (solicitante, titulares de fincas colindantes, titulares de derechos reales afectados)",
      "Comunicar el inicio del expediente a cada uno de ellos"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.2 LJV, párrafo primero"
    }
   ],
   "siguiente": "alegaciones"
  },
  "alegaciones": {
   "fase": 3,
   "titulo": "Fase de alegaciones y pruebas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comunicado el inicio del expediente, se abre el plazo para que los interesados presenten alegaciones y pruebas."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: quince días desde la comunicación del inicio del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Los interesados, en el plazo de quince días, podrán hacer las alegaciones y presentar las pruebas que estimen procedentes."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.2 LJV, párrafo primero"
    }
   ],
   "pregunta": "Durante este plazo (o antes de la comparecencia), ¿se opone al deslinde el dueño de alguna finca colindante?",
   "opciones": [
    {
     "texto": "Sí, hay oposición de un colindante",
     "tono": "t-plazo",
     "destino": "archivo_parcial"
    },
    {
     "texto": "No, no hay oposición previa",
     "tono": "t-ok",
     "destino": "traslado"
    }
   ]
  },
  "archivo_parcial": {
   "fase": 3,
   "titulo": "Archivo parcial por oposición previa a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de la comparecencia, el dueño de alguna de las fincas colindantes se ha opuesto al deslinde."
    },
    {
     "tipo": "aviso",
     "texto": "Si antes de la comparecencia, el dueño de alguna de las fincas colindantes se opusiera al deslinde, archivará el expediente en relación a la parte de la finca lindante con la del opositor, reservando a las partes su derecho para que lo ejerciten en el juicio declarativo que corresponda."
    },
    {
     "tipo": "nota",
     "texto": "El expediente continuará respecto del resto de linderos no afectados por la oposición."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ ante la oposición previa",
     "items": [
      "Archivar el expediente en la parte relativa al lindero con el opositor",
      "Hacer constar la reserva a las partes para acudir al juicio declarativo que corresponda",
      "Continuar con el resto de linderos no afectados por la oposición"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.2 LJV, párrafo cuarto; artículo 17.3 LJV (archivo por oposición, régimen general)"
    }
   ],
   "siguiente": "traslado"
  },
  "traslado": {
   "fase": 3,
   "titulo": "Traslado de documentación y citación al acto de deslinde",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido el plazo de alegaciones (o, en su caso, tras el archivo parcial del lindero afectado por la oposición), el LAJ traslada la documentación a los interesados y los cita al acto de deslinde."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: treinta días para la celebración del acto de deslinde."
    },
    {
     "tipo": "nota",
     "texto": "Transcurrido el plazo, el Secretario judicial dará traslado a dichos interesados de toda la documentación aportada y les citará al acto de deslinde a celebrar en el plazo de treinta días para buscar la avenencia entre ellos."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Dar traslado a los interesados de toda la documentación aportada",
      "Citarles al acto de deslinde",
      "Señalar el acto dentro del plazo de treinta días"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.2 LJV, párrafo segundo"
    }
   ],
   "siguiente": "acto_deslinde"
  },
  "acto_deslinde": {
   "fase": 4,
   "titulo": "Celebración del acto de deslinde",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Llegada la fecha señalada, se celebra el acto de deslinde con los interesados que hayan comparecido, con el objetivo de alcanzar la avenencia."
    },
    {
     "tipo": "aviso",
     "texto": "No se suspenderá la práctica del deslinde por la falta de asistencia de alguno de los dueños colindantes, quedando a salvo su derecho para demandar, en el juicio declarativo que corresponda, la posesión o propiedad de las que se creyese despojado en virtud del deslinde."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia no es obligatoria, lo que resulta coherente con la naturaleza voluntaria del expediente (artículo 1.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 106.2 LJV, párrafo tercero"
    }
   ],
   "pregunta": "¿Qué resultado se obtiene en el acto de deslinde?",
   "opciones": [
    {
     "texto": "Avenencia total entre todos los interesados",
     "tono": "t-ok",
     "destino": "fin_avenencia_total"
    },
    {
     "texto": "Avenencia parcial (solo respecto de algunos linderos)",
     "tono": "t-plazo",
     "destino": "fin_avenencia_parcial"
    },
    {
     "texto": "No se logra acuerdo alguno",
     "tono": "t-nota",
     "destino": "fin_sin_avenencia"
    }
   ]
  },
  "fin_avenencia_total": {
   "fase": 5,
   "titulo": "Avenencia total entre los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha logrado el acuerdo entre todos los interesados respecto a la totalidad de los linderos objeto del deslinde."
    },
    {
     "tipo": "nota",
     "texto": "El Secretario judicial hará constar en un acta todo cuanto acuerden y que el acto terminó con avenencia total, así como los términos de la misma, debiendo ser firmada por los comparecientes."
    },
    {
     "tipo": "nota",
     "texto": "Finalizado el acto, el Secretario judicial dictará decreto haciendo constar la avenencia, acordándose el archivo definitivo de las actuaciones."
    },
    {
     "tipo": "nota",
     "texto": "Al decreto se incorporará el acta y, en todo caso, la certificación catastral descriptiva y gráfica y, en el supuesto de discordancia con esta, la representación gráfica alternativa aportada."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales del LAJ",
     "items": [
      "Levantar acta firmada por los comparecientes haciendo constar la avenencia total y sus términos",
      "Dictar decreto haciendo constar la avenencia",
      "Acordar el archivo definitivo de las actuaciones",
      "Incorporar al decreto el acta y la certificación catastral (o representación gráfica alternativa en caso de discordancia)",
      "Remitir testimonio del acta y del decreto al Catastro para las alteraciones catastrales que correspondan"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 107 LJV — Resolución; Texto Refundido de la Ley del Catastro Inmobiliario (RDLeg 1/2004)"
    }
   ],
   "fin": "success"
  },
  "fin_avenencia_parcial": {
   "fase": 5,
   "titulo": "Avenencia parcial respecto de alguno o algunos de los linderos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha logrado avenencia parcial: el acuerdo afecta solo a alguno o algunos de los linderos objeto del deslinde."
    },
    {
     "tipo": "nota",
     "texto": "El Secretario judicial hará constar en acta todo cuanto acuerden y que el acto terminó con avenencia parcial respecto de alguno o algunos de los linderos, así como los términos de la misma, debiendo ser firmada por los comparecientes."
    },
    {
     "tipo": "nota",
     "texto": "Finalizado el acto, el Secretario judicial dictará decreto haciendo constar que la avenencia fue parcial respecto de alguno o algunos de los linderos, acordándose el archivo definitivo de las actuaciones."
    },
    {
     "tipo": "nota",
     "texto": "Al decreto se incorporará el acta y, en todo caso, la certificación catastral descriptiva y gráfica y, en el supuesto de discordancia con esta, la representación gráfica alternativa aportada."
    },
    {
     "tipo": "aviso",
     "texto": "Sobre los linderos respecto de los que no se alcanzó acuerdo queda a salvo el derecho de los interesados para ejercitarlo en el juicio declarativo que corresponda, donde regirán los criterios sustantivos de los artículos 385 a 387 del Código Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales del LAJ",
     "items": [
      "Levantar acta firmada por los comparecientes haciendo constar la avenencia parcial",
      "Dictar decreto haciendo constar la avenencia parcial respecto de los linderos concretos",
      "Incorporar al decreto el acta y la certificación catastral (o representación gráfica alternativa)",
      "Remitir testimonio del acta y del decreto al Catastro a los efectos de las alteraciones catastrales que correspondan",
      "Reservar a las partes su derecho a acudir al juicio declarativo respecto de los linderos sin acuerdo"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 107 LJV; artículos 385 a 387 del Código Civil"
    }
   ],
   "fin": "warning"
  },
  "fin_sin_avenencia": {
   "fase": 5,
   "titulo": "Acto celebrado sin avenencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No ha podido conseguirse acuerdo alguno entre los interesados."
    },
    {
     "tipo": "nota",
     "texto": "Si no pudiere conseguirse acuerdo alguno, se hará constar que el acto terminó sin avenencia."
    },
    {
     "tipo": "nota",
     "texto": "Finalizado el acto, el Secretario judicial dictará decreto haciendo constar que se celebró sin avenencia, acordándose el archivo definitivo de las actuaciones."
    },
    {
     "tipo": "aviso",
     "texto": "Queda a salvo el derecho de los interesados para ejercitarlo en el juicio declarativo que corresponda, donde se aplicarán los criterios sustantivos del Código Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales del LAJ",
     "items": [
      "Hacer constar en acta que el acto terminó sin avenencia",
      "Dictar decreto haciendo constar que se celebró sin avenencia",
      "Acordar el archivo definitivo de las actuaciones",
      "Reservar a las partes su derecho a acudir al juicio declarativo correspondiente"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En el juicio declarativo posterior regirán los artículos 385 a 387 del Código Civil: el deslinde se hará en conformidad con los títulos de cada propietario y, a falta de títulos suficientes, por lo que resultare de la posesión; en defecto de ambos, distribuyendo el terreno en partes iguales; y, si los títulos indicasen un espacio mayor o menor que el total, distribuyendo la diferencia proporcionalmente."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 107 LJV; artículos 385 a 387 del Código Civil"
    }
   ],
   "fin": "neutral"
  },
  "fin_inscrita": {
   "fase": 0,
   "titulo": "Expediente improcedente: finca inscrita",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente regulado en los artículos 104 a 107 de la Ley 15/2015 no es aplicable a fincas inscritas."
    },
    {
     "tipo": "aviso",
     "texto": "Tratándose de fincas inscritas, se aplicará lo dispuesto en la legislación hipotecaria."
    },
    {
     "tipo": "nota",
     "texto": "Debe remitirse al interesado al expediente notarial de deslinde previsto en el artículo 200 de la Ley Hipotecaria (en la redacción dada por la Ley 13/2015, de 24 de junio)."
    },
    {
     "tipo": "lista",
     "titulo": "Vía alternativa",
     "items": [
      "Expediente notarial de deslinde del artículo 200 LH",
      "Competencia: Notario del distrito donde radique la finca o en uno de los distritos colindantes",
      "En caso de oposición, cauce judicial contencioso (juicio verbal u ordinario según cuantía, LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 104 LJV; artículo 200 de la Ley Hipotecaria; Ley 13/2015, de 24 de junio"
    }
   ],
   "fin": "error"
  },
  "fin_admin": {
   "fase": 0,
   "titulo": "Expediente improcedente: inmueble de Administración Pública",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente regulado en los artículos 104 a 107 LJV no resulta aplicable a los inmuebles de titularidad pública."
    },
    {
     "tipo": "aviso",
     "texto": "No resultarán de aplicación a los inmuebles cuya titularidad corresponda a las Administraciones Públicas, cuyo deslinde se practicará conforme a su legislación específica."
    },
    {
     "tipo": "nota",
     "texto": "Procederá aplicar los artículos 50 y siguientes de la Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones Públicas, y, en su caso, la legislación sectorial correspondiente (Ley 43/2003 de Montes, Ley 22/1988 de Costas, Ley 3/1995 de Vías Pecuarias, TR Ley de Aguas, etc.)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 104 LJV; artículos 50 a 54 de la Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones Públicas"
    }
   ],
   "fin": "error"
  },
  "fin_sin_confusion": {
   "fase": 0,
   "titulo": "No concurre el presupuesto material: inexistencia de confusión de linderos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se cumple el presupuesto material de la acción de deslinde."
    },
    {
     "tipo": "aviso",
     "texto": "La jurisprudencia exige la existencia de confusión de linderos como requisito objetivo. Si los predios están perfectamente identificados y delimitados, no cabe el ejercicio de esta acción."
    },
    {
     "tipo": "nota",
     "texto": "En caso de controversia sobre la propiedad o la posesión que no se reduzca a la delimitación física de la finca, el cauce procesal adecuado es la acción reivindicatoria, la declarativa de dominio u otra acción contenciosa, no el expediente de jurisdicción voluntaria del Capítulo II del Título VI de la LJV."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 384 a 387 del Código Civil; jurisprudencia del Tribunal Supremo (entre otras, STS 1.ª de 14 de octubre de 1991)"
    }
   ],
   "fin": "warning"
  }
 }
});
