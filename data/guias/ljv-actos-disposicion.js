/* Migrado por tools/migrate.js desde sources/actual/G16.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-actos-disposicion",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la autorización o aprobación judicial para la realización de actos de disposición, gravamen u otros que se refieran a los bienes y derechos de menores y personas con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica (artículos 61 a 66 LJV)",
 "corto": "Actos de disposición sobre bienes de menores y personas con apoyos",
 "articulos": [
  "61",
  "62",
  "63",
  "64",
  "65",
  "66"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G16"
 },
 "fases": [
  "Ámbito y procedencia",
  "Competencia y legitimación",
  "Postulación",
  "Solicitud",
  "Tramitación",
  "Resolución",
  "Destino y garantías"
 ],
 "actores": {
  "ambos": "Ambos",
  "juez": "Juez",
  "laj": "LAJ"
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
     "texto": "Este asistente le guía paso a paso por el procedimiento de autorización o aprobación judicial para actos de disposición, gravamen u otros que se refieran a bienes o derechos de menores, personas con discapacidad o patrimonios protegidos, regulado en los artículos 61 a 66 de la Ley 15/2015, de la Jurisdicción Voluntaria."
    },
    {
     "tipo": "nota",
     "texto": "El procedimiento se estructura como un grafo dirigido con múltiples ramas según el sujeto protegido, el tipo de acto, las condiciones de exención y las decisiones judiciales. Avance seleccionando la opción que corresponda a su caso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV — Ámbito de aplicación"
    }
   ],
   "pregunta": "¿Sobre qué sujeto o patrimonio recae el acto que se pretende realizar?",
   "opciones": [
    {
     "texto": "Menor de edad",
     "tono": "t-ok",
     "destino": "menor_tipo"
    },
    {
     "texto": "Persona con discapacidad con medidas de apoyo",
     "tono": "t-nota",
     "destino": "discapacidad_tipo"
    },
    {
     "texto": "Patrimonio protegido (Ley 41/2003)",
     "tono": "t-nota",
     "destino": "patrimonio_tipo"
    }
   ]
  },
  "menor_tipo": {
   "fase": 0,
   "titulo": "Tipo de intervención respecto del menor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 61 LJV establece una distinción conceptual fundamental entre dos figuras procesales que determinan el momento de la intervención judicial y sus efectos."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Autorización:</strong> Es previa al acto. Habilita al solicitante para realizarlo. Sin ella, el acto no puede llevarse a cabo válidamente."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Aprobación:</strong> Es posterior al acto ya ejecutado. Otorga validez al acto realizado sin intervención judicial previa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV — Distinción conceptual"
    }
   ],
   "pregunta": "¿Se trata de autorización previa o de aprobación posterior al acto?",
   "opciones": [
    {
     "texto": "Autorización judicial (previa al acto)",
     "tono": "t-ok",
     "destino": "menor_tramit_esp"
    },
    {
     "texto": "Aprobación judicial (posterior al acto)",
     "tono": "t-ok",
     "destino": "menor_tramit_esp"
    }
   ]
  },
  "menor_tramit_esp": {
   "fase": 0,
   "titulo": "Comprobación de tramitación específica",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de proseguir por la vía del artículo 61 LJV, debe verificarse si existe una tramitación específica establecida para el acto de que se trate. Si la hubiere, el expediente se sustanciará por esa vía específica y no por la del Capítulo VIII."
    },
    {
     "tipo": "nota",
     "texto": "La excepción remite, entre otros, a los cauces previstos para la partición hereditaria (art. 1060 CC), la liquidación de la sociedad de gananciales, actuaciones específicas del albaceazgo y de la guarda de hecho."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV — Excepción de tramitación específica; Art. 1060 CC"
    }
   ],
   "pregunta": "¿Existe una tramitación específica establecida para este acto?",
   "opciones": [
    {
     "texto": "Sí, existe tramitación específica (ej. partición hereditaria, liquidación gananciales, albaceazgo)",
     "tono": "t-plazo",
     "destino": "fin_tramit_especifica"
    },
    {
     "texto": "No, no existe tramitación específica",
     "tono": "t-ok",
     "destino": "menor_exencion16"
    }
   ]
  },
  "menor_exencion16": {
   "fase": 0,
   "titulo": "Posible exención por edad y consentimiento del menor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 166 del Código Civil establece una exención relevante: no será necesaria autorización judicial si el menor hubiese cumplido dieciséis años y consintiere en documento público. Esta exención supone un reconocimiento de la madurez del menor para determinados actos."
    },
    {
     "tipo": "nota",
     "texto": "El consentimiento debe prestarse en documento público, lo que garantiza la seriedad y formalidad de la decisión del menor. No basta con un consentimiento verbal o privado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 166 CC — Exención para menor mayor de dieciséis años"
    }
   ],
   "pregunta": "¿El menor ha cumplido dieciséis años y consiente en documento público?",
   "opciones": [
    {
     "texto": "Sí, menor mayor de 16 años que consiente en documento público",
     "tono": "t-ok",
     "destino": "menor_exencion_valores"
    },
    {
     "texto": "No, el menor es menor de 16 años o no consiente en documento público",
     "tono": "t-nota",
     "destino": "menor_cc166"
    }
   ]
  },
  "menor_exencion_valores": {
   "fase": 0,
   "titulo": "Exención por enajenación de valores mobiliarios",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Además de la exención general por edad y consentimiento, el artículo 166 CC establece una exención específica para la enajenación de valores mobiliarios, siempre que su importe se reinvierta en bienes o valores seguros."
    },
    {
     "tipo": "nota",
     "texto": "Esta exención se justifica por la naturaleza fungible de los valores mobiliarios y la garantía que supone la reinversión en bienes o valores seguros, que preserva el patrimonio del menor."
    },
    {
     "tipo": "aviso",
     "texto": "La reinversión debe efectuarse en bienes o valores seguros. Si la reinversión no se produce o se desvía a fines distintos, la exención podría ser objeto de revisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 166 CC — Enajenación de valores mobiliarios"
    }
   ],
   "pregunta": "¿Se trata de enajenación de valores mobiliarios cuyo importe se reinvierta en bienes o valores seguros?",
   "opciones": [
    {
     "texto": "Sí, enajenación de valores mobiliarios con reinversión en bienes o valores seguros",
     "tono": "t-ok",
     "destino": "fin_exencion_menor"
    },
    {
     "texto": "No, se trata de otro tipo de acto",
     "tono": "t-nota",
     "destino": "menor_cc166"
    }
   ]
  },
  "menor_cc166": {
   "fase": 0,
   "titulo": "Actos del menor que requieren autorización judicial (art. 166 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los progenitores titulares de la patria potestad necesitan autorización judicial para los siguientes actos relativos a los bienes de los hijos menores:"
    },
    {
     "tipo": "lista",
     "titulo": "Actos que requieren autorización judicial (art. 166 CC)",
     "items": [
      "Renunciar a derechos de que sean titulares los hijos",
      "Enajenar o gravar bienes inmuebles, establecimientos mercantiles o industriales, objetos preciosos y valores mobiliarios (salvo derecho de suscripción preferente de acciones)",
      "Repudiar herencia o legado deferidos al hijo",
      "Todo acto de disposición, gravamen u otro que se refiera a sus bienes o derechos, por causas justificadas de utilidad o necesidad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La autorización debe concederse por causas justificadas de utilidad o necesidad y con audiencia del Ministerio Fiscal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 166 CC; Art. 61 LJV"
    }
   ],
   "siguiente": "competencia_menor"
  },
  "discapacidad_tipo": {
   "fase": 0,
   "titulo": "Tipo de intervención respecto de la persona con discapacidad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al igual que en el caso de los menores, la LJV distingue entre autorización previa y aprobación posterior respecto de los actos sobre bienes y derechos de la persona con discapacidad con medidas de apoyo."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Autorización:</strong> Previa al acto. Habilita al solicitante. <strong>Aprobación:</strong> Posterior. Otorga validez al acto ejecutado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV"
    }
   ],
   "pregunta": "¿Se trata de autorización previa o de aprobación posterior al acto?",
   "opciones": [
    {
     "texto": "Autorización judicial (previa al acto)",
     "tono": "t-ok",
     "destino": "disc_tramit_esp"
    },
    {
     "texto": "Aprobación judicial (posterior al acto)",
     "tono": "t-ok",
     "destino": "disc_tramit_esp"
    }
   ]
  },
  "disc_tramit_esp": {
   "fase": 0,
   "titulo": "Comprobación de tramitación específica (discapacidad)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Igual que para los menores, debe verificarse si existe una tramitación específica para el acto de que se trate. Si la hubiere, el expediente se sustanciará por esa vía."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV — Excepción de tramitación específica"
    }
   ],
   "pregunta": "¿Existe una tramitación específica establecida para este acto?",
   "opciones": [
    {
     "texto": "Sí, existe tramitación específica",
     "tono": "t-plazo",
     "destino": "fin_tramit_especifica"
    },
    {
     "texto": "No, no existe tramitación específica",
     "tono": "t-ok",
     "destino": "disc_quien_apoyo"
    }
   ]
  },
  "disc_quien_apoyo": {
   "fase": 0,
   "titulo": "Identificación de quién ejerce el apoyo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El régimen de autorización judicial depende de quién ejerza las funciones de apoyo a la persona con discapacidad. La LJV y el Código Civil distinguen tres supuestos principales."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Curador representativo (art. 287 CC):</strong> Necesita autorización judicial para los actos enumerados en sus ordinales 1.º a 9.º y para los que determine la resolución judicial."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Guardador de hecho (art. 264 CC):</strong> Cuando excepcionalmente requiera actuación representativa, deberá recabar autorización judicial en los términos del artículo 287."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Propia persona con discapacidad:</strong> Podrá promover el expediente de conformidad con las medidas de apoyo establecidas."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 264, 269, 287 CC; Art. 62.2 LJV"
    }
   ],
   "pregunta": "¿Quién ejerce las funciones de apoyo a la persona con discapacidad?",
   "opciones": [
    {
     "texto": "Curador con funciones de representación",
     "tono": "t-nota",
     "destino": "disc_curador"
    },
    {
     "texto": "Guardador de hecho con actuación representativa excepcional",
     "tono": "t-plazo",
     "destino": "disc_guardador"
    },
    {
     "texto": "La propia persona con discapacidad con medidas de apoyo",
     "tono": "t-ok",
     "destino": "disc_propia"
    }
   ]
  },
  "disc_curador": {
   "fase": 0,
   "titulo": "Actos del curador representativo que requieren autorización (art. 287 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El curador con funciones de representación necesita autorización judicial para los actos que determine la resolución judicial y, en todo caso, para los enumerados en los ordinales 1.º a 9.º del artículo 287 del Código Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Actos que requieren autorización del curador representativo (art. 287 CC)",
     "items": [
      "Actos de trascendencia personal o familiar",
      "Enajenar o gravar bienes inmuebles, establecimientos mercantiles o industriales",
      "Enajenar o gravar bienes o derechos de especial significado personal o familiar",
      "Enajenar o gravar bienes muebles de extraordinario valor, objetos preciosos y valores mobiliarios no cotizados",
      "Dar inmuebles en arrendamiento por término inicial superior a seis años",
      "Disposiciones a título gratuito",
      "Renuncias, transacciones o arbitrajes",
      "Aceptación sin beneficio de inventario o repudiación de herencias y liberalidades",
      "Gastos extraordinarios, interposición de demandas, préstamos, avales o fianzas, seguros de vida y rentas vitalicias de cuantía extraordinaria"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La resolución judicial que establezca la curatela determinará los actos para los que el curador necesitará autorización, además de los enumerados en el artículo 287."
    },
    {
     "tipo": "ley",
     "texto": "Art. 287 CC; Art. 269 CC; Art. 61 LJV"
    }
   ],
   "siguiente": "competencia_disc"
  },
  "disc_guardador": {
   "fase": 0,
   "titulo": "Guardador de hecho con actuación representativa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 264 del Código Civil prevé que, cuando excepcionalmente el guardador de hecho requiera actuación representativa, deberá recabar autorización judicial a través del correspondiente expediente de jurisdicción voluntaria."
    },
    {
     "tipo": "nota",
     "texto": "La actuación del guardador de hecho es, por principio, asistencial y no representativa. Solo de forma excepcional podrá actuar en representación, y en ese caso la autorización judicial se rige por los mismos términos que la del curador representativo (art. 287 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "El guardador de hecho no ostenta la representación legal ordinaria. La necesidad de actuación representativa debe estar justificada de forma excepcional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 264 CC; Art. 287 CC; Art. 61 LJV"
    }
   ],
   "siguiente": "competencia_disc"
  },
  "disc_propia": {
   "fase": 0,
   "titulo": "Persona con discapacidad que promueve el expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La propia persona con discapacidad puede promover el expediente de autorización o aprobación judicial de conformidad con las medidas de apoyo establecidas, conforme al principio rector de respeto a su voluntad, deseos y preferencias (art. 249 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Este reconocimiento es una manifestación del derecho a la capacidad jurídica en igualdad de condiciones (art. 12 Convención ONU 2006) y del acceso a la justicia (art. 13 Convención)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.2 LJV; Art. 249 CC; Convención ONU 2006, arts. 12 y 13"
    }
   ],
   "siguiente": "competencia_disc"
  },
  "patrimonio_tipo": {
   "fase": 0,
   "titulo": "Tipo de intervención respecto del patrimonio protegido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las reglas de administración del patrimonio protegido (Ley 41/2003) deberán prever la autorización judicial en los mismos supuestos que el curador representativo."
    },
    {
     "tipo": "nota",
     "texto": "Los actos de disposición, gravamen u otros que se refieran a los bienes del patrimonio protegido necesitan autorización o aprobación judicial, conforme al artículo 5 de la Ley 41/2003."
    },
    {
     "tipo": "ley",
     "texto": "Art. 5 LPPPD; Art. 61 LJV"
    }
   ],
   "pregunta": "¿Se trata de autorización previa o de aprobación posterior al acto?",
   "opciones": [
    {
     "texto": "Autorización judicial (previa al acto)",
     "tono": "t-ok",
     "destino": "pat_tramit_esp"
    },
    {
     "texto": "Aprobación judicial (posterior al acto)",
     "tono": "t-ok",
     "destino": "pat_tramit_esp"
    }
   ]
  },
  "pat_tramit_esp": {
   "fase": 0,
   "titulo": "Comprobación de tramitación específica (patrimonio)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Debe verificarse si existe una tramitación específica. Si la hubiere, el expediente se sustanciará por esa vía."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV — Excepción"
    }
   ],
   "pregunta": "¿Existe una tramitación específica establecida para este acto?",
   "opciones": [
    {
     "texto": "Sí, existe tramitación específica",
     "tono": "t-plazo",
     "destino": "fin_tramit_especifica"
    },
    {
     "texto": "No, no existe tramitación específica",
     "tono": "t-ok",
     "destino": "pat_exencion"
    }
   ]
  },
  "pat_exencion": {
   "fase": 0,
   "titulo": "Posible exención de autorización para el patrimonio protegido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 5 de la Ley 41/2003 permite que los constituyentes o el administrador del patrimonio protegido insten al Ministerio Fiscal la excepción de la autorización judicial en atención a la composición del patrimonio, las circunstancias personales del beneficiario u otras análogas."
    },
    {
     "tipo": "nota",
     "texto": "Esta exención no es automática: requiere la instancia ante el Ministerio Fiscal y que éste la considere procedente en atención a las circunstancias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 5 LPPPD; Art. 7 LPPPD (supervisión del MF)"
    }
   ],
   "pregunta": "¿Se ha instado al Ministerio Fiscal la exención de la autorización y ha sido estimada?",
   "opciones": [
    {
     "texto": "Sí, el Ministerio Fiscal ha estimado la exención",
     "tono": "t-ok",
     "destino": "fin_exencion_patrimonio"
    },
    {
     "texto": "No se ha instado, fue denegada o la exención no procede",
     "tono": "t-nota",
     "destino": "competencia_pat"
    }
   ]
  },
  "competencia_menor": {
   "fase": 1,
   "titulo": "Competencia territorial: residencia del menor",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado competente es el Juzgado de Primera Instancia de la residencia del menor. El criterio de competencia se concreta por el lugar de residencia de la persona protegida y no por el de ubicación del bien o derecho sobre el que recae el acto."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual del menor, se remitirán las actuaciones al Juzgado correspondiente en el estado en que se hallen."
    },
    {
     "tipo": "plazo",
     "texto": "Cambio de residencia antes de la comparecencia: remisión de actuaciones al nuevo Juzgado competente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV"
    }
   ],
   "siguiente": "legitimacion_menor"
  },
  "competencia_disc": {
   "fase": 1,
   "titulo": "Competencia territorial: residencia de la persona con discapacidad",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado competente es el Juzgado de Primera Instancia de la residencia de la persona con discapacidad. El criterio de competencia es el lugar de residencia de la persona protegida, no el de ubicación del bien."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual, se remitirán las actuaciones al Juzgado correspondiente en el estado en que se hallen."
    },
    {
     "tipo": "plazo",
     "texto": "Cambio de residencia antes de la comparecencia: remisión de actuaciones."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV"
    }
   ],
   "siguiente": "legitimacion_disc"
  },
  "competencia_pat": {
   "fase": 1,
   "titulo": "Competencia territorial: residencia del beneficiario del patrimonio",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado competente es el Juzgado de Primera Instancia de la residencia del beneficiario del patrimonio protegido. El criterio de competencia es el lugar de residencia de la persona protegida."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual, se remitirán las actuaciones al Juzgado correspondiente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV"
    }
   ],
   "siguiente": "legitimacion_pat"
  },
  "legitimacion_menor": {
   "fase": 1,
   "titulo": "Legitimación para promover el expediente (menor)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 62.2 LJV determina quiénes están legitimados para promover el expediente cuando se trata de actos sobre bienes del menor. La legitimación depende de la relación jurídica con el menor y con los bienes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.2 LJV"
    }
   ],
   "pregunta": "¿Quién solicita la autorización o aprobación?",
   "opciones": [
    {
     "texto": "Progenitores titulares de la patria potestad (representante legal)",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "Tutor del menor",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "Administrador designado por el transmitente (administración conferida a título gratuito)",
     "tono": "t-nota",
     "destino": "postulacion"
    },
    {
     "texto": "Tutor de los bienes (ejercicio separado de tutela)",
     "tono": "t-nota",
     "destino": "postulacion"
    }
   ]
  },
  "legitimacion_disc": {
   "fase": 1,
   "titulo": "Legitimación para promover el expediente (discapacidad)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 62.2 LJV establece la legitimación para promover el expediente cuando se trata de actos sobre bienes de la persona con discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Legitimación ordinaria:</strong> Quienes ostenten la representación legal o ejerzan el apoyo, así como la propia persona con discapacidad conforme a las medidas de apoyo."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Administración conferida por transmitente:</strong> Si la administración de bienes o derechos determinados fue conferida por el transmitente a título gratuito a favor de quien no ostente la representación legal, el administrador designado por el transmitente deberá solicitar la autorización."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Ejercicio separado:</strong> Cuando se ejerzan separadamente la tutela o curatela de la persona y la de los bienes, el tutor de los bienes será el legitimado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.2 LJV"
    }
   ],
   "pregunta": "¿Quién solicita la autorización o aprobación?",
   "opciones": [
    {
     "texto": "Curador con funciones de representación",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "Guardador de hecho",
     "tono": "t-plazo",
     "destino": "postulacion"
    },
    {
     "texto": "La propia persona con discapacidad con medidas de apoyo",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "Administrador designado por el transmitente",
     "tono": "t-nota",
     "destino": "postulacion"
    },
    {
     "texto": "Tutor de los bienes (ejercicio separado)",
     "tono": "t-nota",
     "destino": "postulacion"
    }
   ]
  },
  "legitimacion_pat": {
   "fase": 1,
   "titulo": "Legitimación: administrador del patrimonio protegido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el acto fuera respecto a los bienes del patrimonio protegido, el legitimado para promover el expediente será su administrador, conforme al artículo 62.2 LJV y al artículo 5 de la Ley 41/2003."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.2 LJV; Art. 5 LPPPD"
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 2,
   "titulo": "Régimen de postulación: abogado y procurador",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 62.3 LJV regula la intervención de abogado y procurador en el expediente. El régimen depende del valor del acto y de las circunstancias del caso."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Umbral de exención (6.000 euros):</strong> No será preceptiva la intervención de abogado ni procurador siempre que el valor del acto no supere los 6.000 euros."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Supera el umbral:</strong> La solicitud inicial podrá realizarse sin necesidad de ambos profesionales."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Facultad judicial:</strong> El Juez podrá ordenar la actuación de todos los interesados por medio de abogado cuando la complejidad de la operación así lo requiera o comparezcan sujetos con intereses enfrentados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.3 LJV; LJV art. 4; LEC"
    }
   ],
   "pregunta": "¿Cuál es el valor del acto para el que se insta el expediente?",
   "opciones": [
    {
     "texto": "No supera los 6.000 euros (intervención no preceptiva)",
     "tono": "t-ok",
     "destino": "solicitud_general"
    },
    {
     "texto": "Supera los 6.000 euros (solicitud sin ambos profesionales, pero posible orden judicial)",
     "tono": "t-nota",
     "destino": "postulacion_supera"
    }
   ]
  },
  "postulacion_supera": {
   "fase": 2,
   "titulo": "Valor superior a 6.000 euros",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el valor del acto supera los 6.000 euros, la solicitud inicial podrá realizarse sin necesidad de abogado y procurador. Sin embargo, el Juez podrá ordenar la intervención de abogado si la complejidad de la operación lo requiere o si comparecen sujetos con intereses enfrentados."
    },
    {
     "tipo": "aviso",
     "texto": "El Juez puede ordenar la intervención de abogado de oficio si concurren circunstancias de complejidad o conflicto de intereses. Prepárese para esta posibilidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.3 LJV"
    }
   ],
   "pregunta": "¿Concurren circunstancias de complejidad o intereses enfrentados?",
   "opciones": [
    {
     "texto": "Sí, hay complejidad o intereses enfrentados (el Juez podría ordenar abogado)",
     "tono": "t-plazo",
     "destino": "postulacion_abogado"
    },
    {
     "texto": "No, no hay complejidad ni intereses enfrentados",
     "tono": "t-ok",
     "destino": "solicitud_general"
    }
   ]
  },
  "postulacion_abogado": {
   "fase": 2,
   "titulo": "Intervención previsible de abogado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando concurran circunstancias de complejidad o intereses enfrentados, el Juez podrá ordenar la actuación de todos los interesados por medio de abogado. Deberá preverse la designación de abogado y, en su caso, de procurador."
    },
    {
     "tipo": "nota",
     "texto": "Si el solicitante no dispone de abogado, podrá solicitar la designación de abogado del turno de oficio."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.3 LJV; LEC"
    }
   ],
   "siguiente": "solicitud_general"
  },
  "solicitud_general": {
   "fase": 3,
   "titulo": "Contenido de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 63.1 LJV establece el contenido obligatorio de la solicitud de autorización o aprobación judicial. Todos los extremos deben acreditarse documentalmente."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio de la solicitud (art. 63.1 LJV)",
     "items": [
      "Motivo del acto o negocio de que se trate",
      "Razón de la necesidad, utilidad o conveniencia del acto",
      "Identificación con precisión del bien o derecho a que se refiera",
      "Finalidad a que deba aplicarse la suma obtenida (en su caso)",
      "Documentos y antecedentes necesarios para formular juicio exacto sobre el negocio",
      "En su caso, las operaciones particionales de la herencia o división de la cosa común realizada"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 63.1 LJV"
    }
   ],
   "pregunta": "¿La solicitud incluye además alguno de estos supuestos especiales?",
   "opciones": [
    {
     "texto": "Sí, se solicita autorización para transigir",
     "tono": "t-plazo",
     "destino": "solicitud_transigir"
    },
    {
     "texto": "Sí, se solicita venta directa sin subasta",
     "tono": "t-nota",
     "destino": "solicitud_venta_directa"
    },
    {
     "texto": "Sí, ambos: transigir y venta directa",
     "tono": "t-plazo",
     "destino": "solicitud_ambos"
    },
    {
     "texto": "No, es una solicitud general sin supuestos especiales",
     "tono": "t-ok",
     "destino": "tramitacion_admision"
    }
   ]
  },
  "solicitud_transigir": {
   "fase": 3,
   "titulo": "Supuesto especial: autorización para transigir",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la autorización se solicite para transigir, deberá acompañarse, además de la documentación general, el documento en que se hubieren formulado las bases de la transacción."
    },
    {
     "tipo": "nota",
     "texto": "Las bases de la transacción deben estar formuladas por escrito y documentadas, para que el Juez pueda valorar la conveniencia de la transacción para los intereses del menor o persona con discapacidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 63.2 LJV"
    }
   ],
   "siguiente": "tramitacion_admision"
  },
  "solicitud_venta_directa": {
   "fase": 3,
   "titulo": "Supuesto especial: venta directa sin subasta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la solicitud fuera para la realización de un acto de disposición, podrá incluirse la petición de que la autorización se extienda a la celebración de venta directa, sin necesidad de subasta ni intervención de persona o entidad especializada."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos adicionales para la venta directa (art. 63.3 LJV)",
     "items": [
      "Dictamen pericial de valoración del precio de mercado del bien o derecho",
      "Especificación de las demás condiciones del acto de disposición que se pretenda realizar",
      "Petición expresa de venta directa sin subasta"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Sin dictamen pericial de valoración de mercado, la petición de venta directa no prosperará."
    },
    {
     "tipo": "ley",
     "texto": "Art. 63.3 LJV"
    }
   ],
   "siguiente": "tramitacion_admision"
  },
  "solicitud_ambos": {
   "fase": 3,
   "titulo": "Supuestos especiales: transigir y venta directa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la solicitud incluya ambos supuestos especiales —autorización para transigir y petición de venta directa—, deberán cumplirse los requisitos de ambos."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación adicional necesaria",
     "items": [
      "Documento con las bases de la transacción (art. 63.2 LJV)",
      "Dictamen pericial de valoración del precio de mercado (art. 63.3 LJV)",
      "Especificación de las condiciones del acto de disposición (art. 63.3 LJV)",
      "Petición expresa de venta directa sin subasta (art. 63.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 63.2 y 63.3 LJV"
    }
   ],
   "siguiente": "tramitacion_admision"
  },
  "tramitacion_admision": {
   "fase": 4,
   "titulo": "Admisión a trámite y citación a comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite la solicitud por el Letrado de la Administración de Justicia, éste citará a comparecencia. La citación debe incluir a los intervinientes preceptivos."
    },
    {
     "tipo": "lista",
     "titulo": "Intervinientes preceptivos en la comparecencia (art. 64.1 LJV)",
     "items": [
      "Ministerio Fiscal",
      "Todas las personas que, según los distintos casos, exijan las leyes",
      "La persona con discapacidad (en todo caso)",
      "El menor que tenga suficiente madurez (en todo caso, cuando sea mayor de doce años)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La citación del menor mayor de doce años y de la persona con discapacidad es una manifestación del derecho a ser oído y expresa voluntad, deseos y preferencias, conforme al principio rector de respeto a la voluntad de la persona con discapacidad (art. 249 CC) y a la Convención de Nueva York de 2006."
    },
    {
     "tipo": "ley",
     "texto": "Art. 64.1 LJV; Art. 249 CC; Convención ONU 2006"
    }
   ],
   "siguiente": "tramitacion_dictamen"
  },
  "tramitacion_dictamen": {
   "fase": 4,
   "titulo": "Dictamen pericial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 64.2 LJV regula el dictamen pericial en el expediente. Se acordará de oficio o a instancia de parte, y deberá emitirse antes de celebrarse la comparecencia."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos del dictamen pericial",
     "items": [
      "Se acuerda de oficio por el Juez o a instancia de parte",
      "Debe emitirse antes de la celebración de la comparecencia",
      "Si se acordó, el perito o peritos que lo emitieron deberán ser citados a la comparecencia para responder a las cuestiones que planteen los intervinientes y el Juez"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "El dictamen pericial debe emitirse antes de la celebración de la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia del perito no es siempre necesaria: solo si así se acuerda. Cuando se acuerde, el perito deberá responder a las cuestiones que le planteen tanto los intervinientes como el Juez."
    },
    {
     "tipo": "ley",
     "texto": "Art. 64.2 LJV"
    }
   ],
   "siguiente": "resolucion"
  },
  "resolucion": {
   "fase": 5,
   "titulo": "Resolución judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, teniendo en cuenta la justificación ofrecida y valorando su conveniencia a los intereses del menor o persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica, resolverá concediendo o denegando la autorización o aprobación solicitada."
    },
    {
     "tipo": "nota",
     "texto": "El criterio rector es siempre el interés superior del menor o de la persona con discapacidad. El Juez valora la justificación ofrecida y la conveniencia del acto para los intereses de la persona protegida."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.1 LJV"
    }
   ],
   "pregunta": "¿Cuál ha sido el resultado de la resolución judicial?",
   "opciones": [
    {
     "texto": "El Juez concede la autorización o aprobación",
     "tono": "t-ok",
     "destino": "res_concedida"
    },
    {
     "texto": "El Juez deniega la autorización o aprobación",
     "tono": "t-aviso",
     "destino": "res_denegada"
    }
   ]
  },
  "res_concedida": {
   "fase": 5,
   "titulo": "Autorización o aprobación concedida",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha concedido la autorización o aprobación solicitada. A continuación debe determinarse el régimen aplicable según el tipo de acto autorizado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65 LJV"
    }
   ],
   "pregunta": "¿Qué tipo de acto ha sido autorizado?",
   "opciones": [
    {
     "texto": "Autorización para transigir",
     "tono": "t-nota",
     "destino": "res_transigir"
    },
    {
     "texto": "Acto de gravamen o extinción de derechos reales",
     "tono": "t-nota",
     "destino": "res_gravamen"
    },
    {
     "texto": "Acto de disposición (enajenación) con venta",
     "tono": "t-nota",
     "destino": "res_venta"
    },
    {
     "texto": "Otro acto autorizado (disposición general)",
     "tono": "t-ok",
     "destino": "res_recurso"
    }
   ]
  },
  "res_transigir": {
   "fase": 5,
   "titulo": "Autorización para transigir: testimonio",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el caso de autorización solicitada para transigir, si fuera concedida por el Juez, determinará la expedición de testimonio que se entregará al solicitante para el uso que corresponda."
    },
    {
     "tipo": "nota",
     "texto": "El testimonio es el documento que acredita la autorización judicial y que el solicitante deberá utilizar en el procedimiento de transacción."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.3 LJV"
    }
   ],
   "siguiente": "res_recurso"
  },
  "res_gravamen": {
   "fase": 5,
   "titulo": "Acto de gravamen o extinción de derechos reales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se autorizare la realización de algún acto de gravamen sobre bienes o derechos que pertenezcan al menor o persona con discapacidad o la extinción de derechos reales a ellos pertenecientes, se ordenará seguir las mismas formalidades establecidas para la venta, con exclusión de la subasta."
    },
    {
     "tipo": "nota",
     "texto": "La exclusión de la subasta en los actos de gravamen o extinción de derechos reales busca simplificar el procedimiento, aplicando las formalidades de la venta pero sin el trámite de la subasta pública."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.4 LJV; Art. 1060 CC"
    }
   ],
   "siguiente": "res_recurso"
  },
  "res_venta": {
   "fase": 5,
   "titulo": "Acto de disposición con venta",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el acto autorizado sea de disposición con venta, deberá determinarse el régimen de la venta, que podrá ser mediante subasta o venta directa."
    },
    {
     "tipo": "nota",
     "texto": "Si la solicitud incluyó petición de venta directa sin subasta (art. 63.3 LJV) y el Juez la estimó, la venta se realizará de forma directa, sin necesidad de subasta ni intervención de persona o entidad especializada."
    },
    {
     "tipo": "nota",
     "texto": "Si no se solicitó venta directa, o el Juez no la estimó, se seguirá el régimen ordinario de enajenación judicial, que incluye la subasta."
    },
    {
     "tipo": "ley",
     "texto": "Art. 63.3 LJV; Art. 65.4 LJV"
    }
   ],
   "siguiente": "res_recurso"
  },
  "res_denegada": {
   "fase": 5,
   "titulo": "Autorización o aprobación denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha denegado la autorización o aprobación solicitada. Esto significa que el acto no puede realizarse (si era autorización previa) o que carece de validez confirmada judicialmente (si era aprobación posterior)."
    },
    {
     "tipo": "aviso",
     "texto": "La denegación impide la realización válida del acto. El solicitante puede interponer recurso de apelación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.1 LJV"
    }
   ],
   "siguiente": "res_recurso"
  },
  "res_recurso": {
   "fase": 5,
   "titulo": "Régimen de recursos: apelación con efectos suspensivos",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución judicial es recurrible en apelación con efectos suspensivos. Esto significa que la eficacia de la resolución queda en suspenso hasta la resolución del recurso y, en consecuencia, el acto autorizado no podrá ejecutarse entre tanto."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Efectos suspensivos:</strong> Tanto si la resolución fue estimatoria como desestimatoria, la interposición del recurso de apelación suspende la eficacia de la resolución. Si la autorización fue concedida, no podrá ejecutarse el acto hasta que se resuelva el recurso. Si fue denegada, la denegación tampoco es firme."
    },
    {
     "tipo": "aviso",
     "texto": "Si la autorización fue concedida y se interpone recurso, el acto autorizado NO podrá ejecutarse hasta la resolución del recurso de apelación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.5 LJV; LEC (recurso de apelación); LJV art. 22"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación?",
   "opciones": [
    {
     "texto": "Sí, se interpone recurso de apelación",
     "tono": "t-plazo",
     "destino": "res_recurso_si"
    },
    {
     "texto": "No, la resolución es firme",
     "tono": "t-ok",
     "destino": "res_recurso_no"
    }
   ]
  },
  "res_recurso_si": {
   "fase": 5,
   "titulo": "Recurso de apelación interpuesto",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Interpuesto el recurso de apelación, la eficacia de la resolución queda en suspenso hasta su resolución. El acto autorizado —si lo fue— no podrá ejecutarse entre tanto."
    },
    {
     "tipo": "plazo",
     "texto": "Los efectos suspensivos se mantienen hasta la resolución del recurso de apelación."
    },
    {
     "tipo": "nota",
     "texto": "Si la apelación confirma la concesión, el acto podrá ejecutarse. Si la revoca, el acto no podrá realizarse. Si la apelación confirma la denegación, la vía judicial ordinaria se agota."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.5 LJV; LEC"
    }
   ],
   "pregunta": "¿Cuál es el resultado del recurso de apelación?",
   "opciones": [
    {
     "texto": "La apelación confirma la concesión de la autorización o aprobación",
     "tono": "t-ok",
     "destino": "fin_concesion_firme"
    },
    {
     "texto": "La apelación confirma la denegación",
     "tono": "t-aviso",
     "destino": "fin_denegacion_firme"
    },
    {
     "texto": "La apelación revoca la denegación y concede la autorización",
     "tono": "t-ok",
     "destino": "fin_concesion_firme"
    },
    {
     "texto": "La apelación revoca la concesión y deniega la autorización",
     "tono": "t-aviso",
     "destino": "fin_denegacion_firme"
    }
   ]
  },
  "res_recurso_no": {
   "fase": 5,
   "titulo": "Resolución firme (sin recurso)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución es firme al no haberse interpuesto recurso de apelación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.5 LJV"
    }
   ],
   "pregunta": "¿Cuál fue el sentido de la resolución firme?",
   "opciones": [
    {
     "texto": "La autorización o aprobación fue concedida y es firme",
     "tono": "t-ok",
     "destino": "fin_concesion_firme"
    },
    {
     "texto": "La autorización o aprobación fue denegada y es firme",
     "tono": "t-aviso",
     "destino": "fin_denegacion_firme"
    }
   ]
  },
  "fin_concesion_firme": {
   "fase": 6,
   "titulo": "Autorización o aprobación firme: destino de la cantidad obtenida",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la autorización o aprobación es firme y el acto se ejecuta, el Juez podrá adoptar las medidas necesarias para asegurar que la cantidad obtenida por el acto de enajenación o gravamen, así como por la realización del negocio o contrato autorizado, se aplique a la finalidad en atención a la que se hubiere concedido la autorización."
    },
    {
     "tipo": "nota",
     "texto": "Este precepto (art. 66 LJV) sirve de garantía ex post del interés superior del menor o de la persona con discapacidad. Permite adoptar medidas de aseguramiento para evitar el desvío del precio o de la contraprestación a fines ajenos a los que justificaron la autorización."
    },
    {
     "tipo": "lista",
     "titulo": "Posibles medidas de aseguramiento (art. 66 LJV)",
     "items": [
      "Consignación de la cantidad obtenida",
      "Depósito en entidad financiera",
      "Reinversión tutelada en bienes o valores seguros",
      "Cualquier otra medida que asegure la aplicación de la cantidad a la finalidad autorizada"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si el solicitante desvía la cantidad obtenida a fines distintos de los que justificaron la autorización, podría incurrir en responsabilidad y las medidas de aseguramiento podrían activarse."
    },
    {
     "tipo": "ley",
     "texto": "Art. 66 LJV; Art. 65 LJV; Art. 63 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_denegacion_firme": {
   "fase": 6,
   "titulo": "Denegación firme: el acto no puede realizarse",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La denegación firme de la autorización o aprobación implica que el acto no puede realizarse válidamente. Si el acto ya se había ejecutado (en caso de solicitud de aprobación posterior), carece de validez confirmada judicialmente."
    },
    {
     "tipo": "aviso",
     "texto": "La realización de un acto sin la autorización judicial requerida puede generar responsabilidad civil e, incluso, penal para el representante legal o la persona que presta apoyo."
    },
    {
     "tipo": "nota",
     "texto": "Si las circunstancias cambian, podrá plantearse una nueva solicitud de autorización judicial con nueva justificación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.1 LJV; Art. 166 CC; Art. 287 CC"
    }
   ],
   "fin": "error"
  },
  "fin_tramit_especifica": {
   "fase": 0,
   "titulo": "Procedimiento por tramitación específica",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Existe una tramitación específica establecida para el acto de que se trate. El expediente deberá sustanciarse por la vía específica correspondiente y no por la del Capítulo VIII de la LJV."
    },
    {
     "tipo": "nota",
     "texto": "Las vías específicas más frecuentes son: la partición hereditaria (art. 1060 CC), la liquidación de la sociedad de gananciales, las actuaciones específicas del albaceazgo y de la guarda de hecho."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV; Art. 1060 CC"
    }
   ],
   "fin": "warning"
  },
  "fin_exencion_menor": {
   "fase": 0,
   "titulo": "Exención: no se precisa autorización judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Conforme al artículo 166 del Código Civil, no es necesaria la autorización judicial en los siguientes supuestos:"
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos de exención (art. 166 CC)",
     "items": [
      "El menor ha cumplido dieciséis años y consiente en documento público",
      "Enajenación de valores mobiliarios siempre que su importe se reinvierta en bienes o valores seguros"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Esta exención reconoce la madurez del menor para determinados actos y la naturaleza fungible de los valores mobiliarios con reinversión garantizada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 166 CC"
    }
   ],
   "fin": "success"
  },
  "fin_exencion_patrimonio": {
   "fase": 0,
   "titulo": "Exención de autorización por estimación del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los constituyentes o el administrador del patrimonio protegido han instado al Ministerio Fiscal la excepción de la autorización judicial, y ha sido estimada en atención a la composición del patrimonio, las circunstancias personales del beneficiario u otras análogas."
    },
    {
     "tipo": "nota",
     "texto": "La exención no es definitiva: si cambian las circunstancias que la motivaron, podría dejarse sin efecto y exigirse la autorización judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 5 LPPPD; Art. 7 LPPPD"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Ley 15/2015, LJV, Arts. 61-66<br>CC arts. 166, 249, 264, 269, 287, 1060<br>Ley 41/2003 (LPPPD)<br>Convención ONU 2006"
});
