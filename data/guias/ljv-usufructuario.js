/* Migrado por tools/migrate.js desde sources/actual/G22.json; revisado con el BOE (registro: docs/revision/ljv-usufructuario.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-usufructuario",
 "ley": "LJV",
 "grupo": "Título VI · Derechos reales",
 "titulo": "De la autorización judicial al usufructuario para reclamar créditos vencidos que formen parte del usufructo",
 "corto": "Usufructuario: reclamación de créditos vencidos",
 "articulos": [
  "100",
  "101",
  "102",
  "103"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G22"
 },
 "fases": [
  "Presupuestos previos",
  "Competencia y postulación",
  "Solicitud",
  "Admisión y comparecencia",
  "Resolución"
 ],
 "actores": {
  "ambos": "Juez / LAJ",
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio — Naturaleza y objeto del expediente",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Este expediente de jurisdicción voluntaria tiene por objeto obtener la autorización judicial del usufructuario para reclamar y cobrar por sí los créditos vencidos que formen parte del usufructo y, en su caso, para poner a interés el capital obtenido con dicha reclamación."
    },
    {
     "tipo": "nota",
     "texto": "Base sustantiva en el artículo 507 del Código Civil. Cauce procesal en los artículos 100 a 103 de la Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria (LJV). La Ley de Enjuiciamiento Civil se aplica supletoriamente por remisión del artículo 8 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 100 a 103 LJV · Artículo 507 CC · Artículo 8 LJV"
    }
   ],
   "siguiente": "verif_usufructo"
  },
  "verif_usufructo": {
   "fase": 0,
   "titulo": "Verificación del título constitutivo del usufructo",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Ha de constatarse la existencia de un título válido constitutivo del usufructo (testamento, escritura pública, resolución judicial u otro título admitido en Derecho) que legitime al solicitante como usufructuario."
    },
    {
     "tipo": "nota",
     "texto": "La legitimación activa corresponde exclusivamente al usufructuario (artículos 100 y 102 LJV; artículo 507 CC). Debe acompañarse con la solicitud la documentación acreditativa del derecho."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 467 CC · Artículo 102 LJV"
    }
   ],
   "pregunta": "¿Existe título válido constitutivo del usufructo?",
   "opciones": [
    {
     "texto": "Sí, se dispone de título válido",
     "tono": "t-nota",
     "destino": "verif_credito"
    },
    {
     "texto": "No se acredita el título de usufructo",
     "tono": "t-nota",
     "destino": "fin_sin_usufructo"
    }
   ]
  },
  "verif_credito": {
   "fase": 0,
   "titulo": "Verificación de la existencia de crédito vencido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es presupuesto común a cualquier variante del expediente que exista un crédito vencido que forme parte del usufructo, o bien un capital ya obtenido del cobro de dicho crédito que se pretenda poner a interés."
    },
    {
     "tipo": "nota",
     "texto": "El crédito debe formar parte del usufructo y haber vencido. Sin vencimiento no procede la reclamación directa por el usufructuario."
    }
   ],
   "pregunta": "¿Existe un crédito vencido que forme parte del usufructo?",
   "opciones": [
    {
     "texto": "Sí, existe un crédito vencido",
     "tono": "t-nota",
     "destino": "verif_fianza"
    },
    {
     "texto": "No existe crédito vencido (no vencido o ajeno al usufructo)",
     "tono": "t-nota",
     "destino": "fin_sin_credito"
    }
   ]
  },
  "verif_fianza": {
   "fase": 0,
   "titulo": "Situación de la fianza del usufructuario",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de entrar en el goce de los bienes, el usufructuario está obligado a prestar fianza salvo dispensa (artículo 491 CC). El expediente de los artículos 100 a 103 LJV solo procede cuando la fianza falta, es insuficiente o el usufructuario está dispensado."
    },
    {
     "tipo": "nota",
     "texto": "Dispensas legales del artículo 492 CC: vendedor o donante que se hubiere reservado el usufructo; padres usufructuarios de los bienes de los hijos y cónyuge sobreviviente respecto de la cuota legal usufructuaria, si no contraen ulterior matrimonio. Dispensa convencional del artículo 493 CC, cuando de ello no resultare perjuicio a nadie."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 491, 492, 493 y 494 CC · Artículo 100 LJV"
    }
   ],
   "pregunta": "¿Cuál es la situación de la fianza?",
   "opciones": [
    {
     "texto": "Usufructuario dispensado de prestar fianza",
     "tono": "t-nota",
     "destino": "verif_autorizacion"
    },
    {
     "texto": "No se ha podido constituir la fianza",
     "tono": "t-nota",
     "destino": "verif_autorizacion"
    },
    {
     "texto": "Fianza constituida pero insuficiente",
     "tono": "t-nota",
     "destino": "verif_autorizacion"
    },
    {
     "texto": "Fianza constituida y suficiente",
     "tono": "t-nota",
     "destino": "fin_fianza_suficiente"
    }
   ]
  },
  "verif_autorizacion": {
   "fase": 0,
   "titulo": "Falta de autorización o acuerdo del propietario",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente solo procede cuando el usufructuario no cuenta con la autorización del propietario para cobrar el crédito o, en su caso, no cuenta con su acuerdo para poner a interés el capital obtenido."
    },
    {
     "tipo": "nota",
     "texto": "Debe acreditarse la falta de autorización o la existencia de desacuerdo: requerimiento previo al propietario, negativa expresa, silencio, o manifestación razonada de la falta de acuerdo."
    }
   ],
   "pregunta": "¿Cuenta el usufructuario con la autorización o acuerdo del propietario?",
   "opciones": [
    {
     "texto": "No cuenta con autorización ni acuerdo del propietario",
     "tono": "t-nota",
     "destino": "determina_objeto"
    },
    {
     "texto": "Sí cuenta con la autorización del propietario",
     "tono": "t-nota",
     "destino": "fin_con_autorizacion"
    }
   ]
  },
  "determina_objeto": {
   "fase": 0,
   "titulo": "Determinación del objeto de la petición",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Conforme al artículo 100 LJV, el expediente admite dos objetos: autorización para reclamar y cobrar créditos vencidos, y autorización para poner a interés el capital obtenido con dicha reclamación. Ambas pueden solicitarse conjuntamente."
    },
    {
     "tipo": "nota",
     "texto": "La elección del objeto determina el contenido específico de la resolución final (artículo 103.2 LJV)."
    }
   ],
   "pregunta": "¿Qué pretende solicitar el usufructuario?",
   "opciones": [
    {
     "texto": "Autorización para cobrar el crédito vencido",
     "tono": "t-nota",
     "destino": "competencia"
    },
    {
     "texto": "Autorización para poner a interés capital ya cobrado",
     "tono": "t-nota",
     "destino": "verif_garantias"
    },
    {
     "texto": "Ambas autorizaciones conjuntamente",
     "tono": "t-nota",
     "destino": "verif_garantias"
    }
   ]
  },
  "verif_garantias": {
   "fase": 0,
   "titulo": "Ofrecimiento de garantías para la puesta a interés del capital",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la solicitud incluya la autorización para poner a interés el capital obtenido tras cobrar el crédito vencido, el usufructuario deberá ofrecer garantías suficientes para conservar su integridad."
    },
    {
     "tipo": "aviso",
     "texto": "Sin ofrecimiento de garantías suficientes, la solicitud de puesta a interés queda incompleta y puede ser objeto de requerimiento de subsanación o, en su caso, de denegación en la resolución final."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 102 LJV · Artículo 507 in fine CC"
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Será competente para conocer del expediente el Juzgado de Primera Instancia del último domicilio o, en su defecto, de la última residencia del solicitante."
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección Civil del Tribunal de Instancia. La tramitación se ajusta a las normas comunes de la LJV (arts. 13 a 22)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 101.1 LJV · Artículo 2 LJV · Artículo 13 LJV"
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 1,
   "titulo": "Postulación procesal: Abogado y Procurador",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para la actuación en estos expedientes no será preceptiva la intervención de Abogado ni de Procurador."
    },
    {
     "tipo": "aviso",
     "texto": "En todo caso, son necesarios Abogado y Procurador para los recursos de revisión y apelación contra la resolución definitiva y desde que se formule oposición (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 101.2 LJV · Artículo 3.2 LJV"
    }
   ],
   "siguiente": "preparar_solicitud"
  },
  "preparar_solicitud": {
   "fase": 2,
   "titulo": "Preparación de la solicitud inicial",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se iniciará mediante solicitud del usufructuario. Conforme al artículo 14 LJV, la solicitud consignará los datos y circunstancias de identificación del solicitante, con indicación de un domicilio a efectos de notificaciones, y expondrá con claridad y precisión lo que se pida, así como una exposición de los hechos y fundamentos jurídicos en que se funde la pretensión."
    },
    {
     "tipo": "lista",
     "titulo": "Documentos y medios de prueba a adjuntar (art. 102 LJV)",
     "items": [
      "Título constitutivo del usufructo (testamento, escritura pública, resolución judicial u otro título).",
      "Documentación acreditativa de la existencia del crédito vencido que se pretende reclamar o, en su caso, del importe cobrado que se pretende poner a interés.",
      "Documentación acreditativa de la situación de la fianza (dispensa legal o convencional, imposibilidad de constitución o insuficiencia).",
      "Documentación acreditativa de la falta de autorización del propietario (requerimiento previo, negativa, o, en su defecto, manifestación razonada).",
      "Cuando se solicite poner a interés el capital: ofrecimiento expreso de garantías suficientes para conservar su integridad."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículos 102, 14 y 17 LJV · Artículo 507 CC"
    }
   ],
   "siguiente": "presentar_solicitud"
  },
  "presentar_solicitud": {
   "fase": 2,
   "titulo": "Presentación de la solicitud en el Juzgado competente",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud se presenta ante el Juzgado de Primera Instancia territorialmente competente (último domicilio o, en su defecto, última residencia del solicitante)."
    },
    {
     "tipo": "nota",
     "texto": "Los gastos ocasionados en el expediente serán a cargo del solicitante, salvo que la Ley disponga otra cosa (artículo 7 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 14 LJV · Artículo 7 LJV"
    }
   ],
   "siguiente": "admision"
  },
  "admision": {
   "fase": 3,
   "titulo": "Admisión a trámite por el Letrado de la Administración de Justicia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia (el art. 103.1 aún dice «Secretario judicial») examina la solicitud y resuelve sobre su admisión a trámite. Conforme al artículo 16 LJV, apreciará de oficio la falta de competencia y otros defectos u omisiones."
    },
    {
     "tipo": "nota",
     "texto": "Si hay defectos, da cinco días para subsanarlos (art. 16.4 LJV). Si la solicitud no es admisible, da cuenta al Juez, a quien corresponde resolver el expediente (arts. 17.1 y 103.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.1 LJV · Artículos 16, 17 y 18 LJV"
    }
   ],
   "pregunta": "¿El Letrado de la Administración de Justicia admite a trámite la solicitud?",
   "opciones": [
    {
     "texto": "Sí, admite a trámite la solicitud",
     "tono": "t-nota",
     "destino": "convocatoria"
    },
    {
     "texto": "Observa defectos subsanables y concede plazo",
     "tono": "t-nota",
     "destino": "subsanacion"
    },
    {
     "texto": "Defectos insubsanables o falta de competencia",
     "tono": "t-nota",
     "destino": "fin_inadmision"
    }
   ]
  },
  "subsanacion": {
   "fase": 3,
   "titulo": "Subsanación de defectos de la solicitud",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se dan al promotor cinco días para subsanar; si no lo hace, el LAJ da cuenta al Juez, que acuerda lo procedente (art. 16.4 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 16.4 LJV"
    }
   ],
   "pregunta": "¿Se subsanan los defectos en el plazo otorgado?",
   "opciones": [
    {
     "texto": "Sí, se subsanan correctamente y en plazo",
     "tono": "t-nota",
     "destino": "convocatoria"
    },
    {
     "texto": "No se subsanan o se subsanan defectuosamente",
     "tono": "t-nota",
     "destino": "fin_inadmision"
    }
   ]
  },
  "convocatoria": {
   "fase": 3,
   "titulo": "Convocatoria a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite por el Letrado de la Administración de Justicia la solicitud, convocará a la comparecencia a quienes deben ser oídos."
    },
    {
     "tipo": "lista",
     "titulo": "Citados a la comparecencia (art. 103.1 LJV)",
     "items": [
      "El promotor (usufructuario solicitante).",
      "El propietario (nudo propietario).",
      "Aquellos que pudieran estar interesados en el cobro del crédito."
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Citación con al menos quince días de antelación; comparecencia dentro de los treinta días siguientes a la admisión (arts. 17.3 y 18.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.1 LJV · Artículo 17 LJV (citación de los interesados)"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 3,
   "titulo": "Celebración de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia se celebra ante el Juez, que preside el acto y oye a los citados."
    },
    {
     "tipo": "nota",
     "texto": "Si el solicitante no asiste, el Juez acuerda el archivo y le tiene por desistido; si falta otro citado, el acto se celebra (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 18 LJV · Artículo 103.1 LJV"
    }
   ],
   "pregunta": "¿Comparecen los citados?",
   "opciones": [
    {
     "texto": "Comparece al menos el promotor",
     "tono": "t-nota",
     "destino": "audiencia"
    },
    {
     "texto": "No comparece el promotor debidamente citado",
     "tono": "t-nota",
     "destino": "fin_archivo"
    }
   ]
  },
  "audiencia": {
   "fase": 3,
   "titulo": "Audiencia de los comparecientes por su orden",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Conforme al artículo 103.1 LJV, los comparecientes son oídos en el siguiente orden de prelación legal:"
    },
    {
     "tipo": "lista",
     "titulo": "Orden legal de audiencia",
     "items": [
      "1.º — El promotor (usufructuario solicitante).",
      "2.º — El propietario (nudo propietario).",
      "3.º — Aquellos que pudieran estar interesados en el cobro del crédito."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.1 LJV · Artículo 18 LJV"
    }
   ],
   "siguiente": "oposicion"
  },
  "oposicion": {
   "fase": 3,
   "titulo": "Examen de la eventual oposición",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquiera de los citados —típicamente el propietario o los terceros interesados— puede formular oposición a la petición del usufructuario."
    },
    {
     "tipo": "nota",
     "texto": "Salvo que la Ley expresamente lo prevea, la formulación de oposición por alguno de los interesados no hará contencioso el expediente ni impedirá que continúe su tramitación hasta que sea resuelto."
    }
   ],
   "pregunta": "¿Se ha formulado oposición por alguno de los citados?",
   "opciones": [
    {
     "texto": "Sí, se formula oposición (no hace contencioso el expediente)",
     "tono": "t-nota",
     "destino": "practica_pruebas"
    },
    {
     "texto": "No se formula oposición",
     "tono": "t-nota",
     "destino": "practica_pruebas"
    }
   ]
  },
  "practica_pruebas": {
   "fase": 3,
   "titulo": "Práctica de pruebas propuestas y acordadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Tras la audiencia de los comparecientes, se practicarán aquellas pruebas que hubieren sido propuestas y acordadas por el Juez."
    },
    {
     "tipo": "nota",
     "texto": "La prueba se rige por el artículo 5 LJV y, supletoriamente, por la Ley de Enjuiciamiento Civil (artículo 8 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.1 LJV · Artículo 5 LJV · Artículo 8 LJV"
    }
   ],
   "siguiente": "resolucion_juez"
  },
  "resolucion_juez": {
   "fase": 4,
   "titulo": "Resolución del Juez sobre la autorización solicitada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, teniendo en cuenta la justificación ofrecida y valorando la conveniencia del cobro del crédito que forma parte del usufructo o de la inversión del capital obtenido, resolverá concediendo o denegando la autorización solicitada."
    },
    {
     "tipo": "nota",
     "texto": "Resuelve por auto en los cinco días siguientes a la comparecencia (art. 19.1 LJV); su contenido obligatorio depende de lo autorizado (art. 103.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.2 LJV · Artículo 19 LJV"
    }
   ],
   "pregunta": "¿Qué resuelve el Juez?",
   "opciones": [
    {
     "texto": "Concede autorización para cobrar el crédito vencido",
     "tono": "t-nota",
     "destino": "fin_concedida_cobro"
    },
    {
     "texto": "Concede autorización para poner a interés el capital",
     "tono": "t-nota",
     "destino": "fin_concedida_interes"
    },
    {
     "texto": "Concede ambas autorizaciones conjuntamente",
     "tono": "t-nota",
     "destino": "fin_concedida_ambos"
    },
    {
     "texto": "Deniega la autorización solicitada",
     "tono": "t-nota",
     "destino": "fin_denegada"
    }
   ]
  },
  "fin_sin_usufructo": {
   "fase": 0,
   "titulo": "No procede el expediente: falta título de usufructo",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Sin título válido constitutivo del usufructo el solicitante carece de legitimación activa. El expediente de los artículos 100 a 103 LJV solo corresponde al usufructuario que acredite su derecho."
    },
    {
     "tipo": "nota",
     "texto": "Procederá, en su caso, acreditar previamente la existencia del usufructo por la vía correspondiente antes de instar este expediente."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 467 CC · Artículo 102 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_sin_credito": {
   "fase": 0,
   "titulo": "No procede el expediente: inexistencia de crédito vencido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Sin un crédito vencido que forme parte del usufructo no concurre el presupuesto común del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Podrá reconsiderarse la solicitud cuando el crédito haya vencido efectivamente o cuando se identifique el crédito concreto que forma parte del usufructo."
    }
   ],
   "fin": "error"
  },
  "fin_fianza_suficiente": {
   "fase": 0,
   "titulo": "No es necesaria autorización judicial",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Conforme al artículo 507 CC, el usufructuario con fianza suficiente podrá reclamar por sí los créditos vencidos sin necesidad de autorización del propietario ni del Juez, y podrá dar al capital que realice el destino que estime conveniente."
    },
    {
     "tipo": "nota",
     "texto": "El expediente de los artículos 100 a 103 LJV no procede en este supuesto: su ámbito se ciñe a los casos de dispensa, imposibilidad o insuficiencia de la fianza unidos a la falta de autorización del propietario."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 507 CC · Artículo 100 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_con_autorizacion": {
   "fase": 0,
   "titulo": "No procede expediente judicial: existe autorización del propietario",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contando el usufructuario con la autorización del propietario para cobrar el crédito (o, en su caso, con su acuerdo para la puesta a interés del capital), no procede instar el expediente judicial: la intervención judicial es subsidiaria respecto de la autorización extrajudicial del propietario."
    },
    {
     "tipo": "nota",
     "texto": "La reclamación podrá realizarse directamente con la autorización obtenida, sin acudir al expediente de jurisdicción voluntaria."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 100 LJV · Artículo 507 CC"
    }
   ],
   "fin": "warning"
  },
  "fin_inadmision": {
   "fase": 3,
   "titulo": "Inadmisión a trámite de la solicitud",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El Juez, a quien el LAJ ha dado cuenta, no admite la solicitud por defectos insubsanables, falta de competencia u omisiones no subsanadas (arts. 16 y 17.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación, con Abogado y Procurador (arts. 3.2 y 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 16, 17.1 y 20.2 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_archivo": {
   "fase": 3,
   "titulo": "Archivo del expediente por incomparecencia del promotor",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El Juez acuerda el archivo del expediente y tiene al solicitante por desistido (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Podrá promoverse de nuevo el expediente si subsisten los presupuestos."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 18.2.1.ª LJV"
    }
   ],
   "fin": "error"
  },
  "fin_concedida_cobro": {
   "fase": 4,
   "titulo": "Autorización concedida para cobrar el crédito vencido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez concede al usufructuario autorización para reclamar y cobrar por sí el crédito vencido que forma parte del usufructo."
    },
    {
     "tipo": "nota",
     "texto": "La resolución establece la obligación del usufructuario de informar periódicamente al Tribunal, dentro de los plazos otorgados, sobre las gestiones realizadas, así como del resultado final."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto cabe apelación, sin efectos suspensivos, en veinte días ante la Audiencia Provincial (art. 20.2 LJV; art. 458 LEC). El cumplimiento y la ejecución se rigen por el art. 22 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.2 LJV · Artículos 20 y 22 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_concedida_interes": {
   "fase": 4,
   "titulo": "Autorización concedida para poner a interés el capital",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez concede al usufructuario autorización para poner a interés el capital obtenido por el cobro del crédito vencido."
    },
    {
     "tipo": "nota",
     "texto": "La resolución deberá contener las garantías a establecer por el usufructuario para conservar la integridad del capital."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto cabe apelación, sin efectos suspensivos, en veinte días ante la Audiencia Provincial (art. 20.2 LJV; art. 458 LEC). El cumplimiento y la ejecución se rigen por el art. 22 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.2 LJV · Artículo 507 CC · Artículos 20 y 22 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_concedida_ambos": {
   "fase": 4,
   "titulo": "Autorización concedida para cobro y puesta a interés",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez concede conjuntamente las dos autorizaciones solicitadas: cobro del crédito vencido y puesta a interés del capital obtenido."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio de la resolución (art. 103.2 LJV)",
     "items": [
      "Obligación del usufructuario de informar periódicamente al Tribunal sobre las gestiones realizadas y del resultado final, dentro de los plazos otorgados.",
      "Fijación de las garantías que debe establecer el usufructuario para conservar la integridad del capital obtenido."
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto cabe apelación, sin efectos suspensivos, en veinte días ante la Audiencia Provincial (art. 20.2 LJV; art. 458 LEC). El cumplimiento y la ejecución se rigen por el art. 22 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.2 LJV · Artículo 507 CC · Artículos 20 y 22 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_denegada": {
   "fase": 4,
   "titulo": "Denegación de la autorización solicitada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, valorando la justificación ofrecida y la conveniencia del cobro del crédito o de la inversión del capital, deniega la autorización solicitada."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto cabe apelación (art. 20.2 LJV; art. 458 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 103.2 LJV · Artículo 20.2 LJV"
    }
   ],
   "fin": "warning"
  }
 }
});
