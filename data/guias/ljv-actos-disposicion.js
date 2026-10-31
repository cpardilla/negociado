/* Migrado por tools/migrate.js desde sources/actual/G16.json; revisado con el BOE (registro: docs/revision/ljv-actos-disposicion.md). */
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
  "estado": "revisado",
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
  "ambos": "Juez / LAJ",
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
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
     "texto": "Se aplica cuando el representante legal del menor, quien presta apoyo a la persona con discapacidad o el administrador de un patrimonio protegido necesita autorización o aprobación judicial para la validez del acto, salvo que haya una tramitación específica (art. 61 LJV)."
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
     "texto": "Si la ley establece una tramitación específica para el acto, se sigue esa y no la de este capítulo (art. 61 LJV). La aprobación de la partición hecha por el tutor, el curador representativo o el defensor judicial (art. 1060 CC) se tramita por este capítulo: la solicitud acompaña las operaciones particionales (art. 63.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV · Art. 63.1 LJV · Art. 1060 CC"
    }
   ],
   "pregunta": "¿Existe una tramitación específica establecida para este acto?",
   "opciones": [
    {
     "texto": "Sí, la ley establece una tramitación específica para este acto",
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
     "destino": "fin_exencion_menor"
    },
    {
     "texto": "No, el menor es menor de 16 años o no consiente en documento público",
     "tono": "t-nota",
     "destino": "menor_exencion_valores"
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
     "texto": "Aunque el menor no haya cumplido dieciséis años o no consienta, el artículo 166 CC establece una exención específica para la enajenación de valores mobiliarios, siempre que su importe se reinvierta en bienes o valores seguros."
    },
    {
     "tipo": "nota",
     "texto": "Esta exención se justifica por la naturaleza fungible de los valores mobiliarios y la garantía que supone la reinversión en bienes o valores seguros, que preserva el patrimonio del menor."
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
     "texto": "Los progenitores necesitan autorización judicial, que se concede por causas justificadas de utilidad o necesidad y con audiencia del Ministerio Fiscal (art. 166 CC), para:"
    },
    {
     "tipo": "lista",
     "titulo": "Actos que requieren autorización (art. 166 CC)",
     "items": [
      "Renunciar a derechos de que sean titulares los hijos",
      "Enajenar o gravar sus bienes inmuebles, establecimientos mercantiles o industriales, objetos preciosos y valores mobiliarios, salvo el derecho de suscripción preferente de acciones",
      "Repudiar la herencia o legado deferidos al hijo; si el Juez deniega la autorización, la herencia solo puede aceptarse a beneficio de inventario"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Tutor del menor: se le aplican supletoriamente las normas de la curatela (art. 224 CC), entre ellas las autorizaciones del art. 287 CC."
    },
    {
     "tipo": "nota",
     "texto": "El art. 166 CC habla del «Juez del domicilio»; la competencia del expediente es la del art. 62.1 LJV (residencia del menor)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 166 CC · Art. 224 CC · Art. 61 LJV"
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
     "texto": "Si la ley establece una tramitación específica para el acto, se sigue esa y no la de este capítulo (art. 61 LJV). La aprobación de la partición hecha por el tutor, el curador representativo o el defensor judicial (art. 1060 CC) se tramita por este capítulo: la solicitud acompaña las operaciones particionales (art. 63.1 LJV)."
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
     "texto": "El curador con funciones de representación necesita autorización judicial para los actos que determine la resolución y, en todo caso, para los del art. 287 CC."
    },
    {
     "tipo": "lista",
     "titulo": "Actos del art. 287 CC",
     "items": [
      "1.º Actos de trascendencia personal o familiar cuando la persona no pueda hacerlos por sí misma (a salvo internamiento, consentimiento informado y leyes especiales)",
      "2.º Enajenar o gravar inmuebles, establecimientos mercantiles o industriales, bienes o derechos de especial significado personal o familiar, muebles de extraordinario valor, objetos preciosos y valores no cotizados; arrendar inmuebles por más de seis años; actos dispositivos inscribibles (salvo la venta del derecho de suscripción preferente)",
      "3.º Disponer a título gratuito, salvo bienes de escasa relevancia económica y sin especial significado personal o familiar",
      "4.º Renunciar derechos, transigir o someter a arbitraje, salvo escasa relevancia económica (no el arbitraje de consumo)",
      "5.º Aceptar sin beneficio de inventario cualquier herencia o repudiarla, o repudiar liberalidades",
      "6.º Hacer gastos extraordinarios en los bienes",
      "7.º Interponer demanda en su nombre, salvo asuntos urgentes o de escasa cuantía (no para instar la revisión de sus apoyos)",
      "8.º Dar y tomar dinero a préstamo y prestar aval o fianza",
      "9.º Seguros de vida, renta vitalicia y análogos que requieran inversiones o aportaciones de cuantía extraordinaria"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La enajenación de los bienes del 2.º se hace por venta directa, salvo que el Tribunal considere necesaria la subasta judicial (art. 287.2.º CC). Antes de autorizar, el Juez oye al Fiscal y a la persona con medidas de apoyo (art. 290 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 269, 287 y 290 CC · Art. 61 LJV"
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
     "texto": "La actuación representativa del guardador es excepcional. En todo caso necesita autorización para los actos del art. 287 CC; no la necesita para pedir una prestación económica que no cambie significativamente la forma de vida de la persona ni para actos sobre bienes de escasa relevancia económica y sin especial significado personal o familiar (art. 264 CC). La autoridad judicial entrevista por sí misma a la persona (art. 52.3 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "El guardador de hecho no ostenta la representación legal ordinaria. La necesidad de actuación representativa debe estar justificada de forma excepcional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 264 CC · Art. 287 CC · Arts. 52.3 y 61 LJV"
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
     "texto": "El administrador del patrimonio protegido necesita autorización o aprobación judicial cuando así resulte de las reglas de administración del documento público o de la resolución de constitución, o de los apoyos y salvaguardas establecidos (art. 5.2 Ley 41/2003)."
    },
    {
     "tipo": "nota",
     "texto": "No hace falta subasta pública para enajenar sus bienes, y el gasto de dinero y el consumo de bienes fungibles para atender las necesidades vitales del beneficiario no son actos de disposición (art. 5.2 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 5 Ley 41/2003 · Art. 61 LJV"
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
     "texto": "Si la ley establece una tramitación específica para el acto, se sigue esa y no la de este capítulo (art. 61 LJV)."
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
     "texto": "Los constituyentes o el administrador pueden instar al Ministerio Fiscal que solicite del Juez la excepción de la autorización judicial en determinados supuestos, atendiendo a la composición del patrimonio, las circunstancias personales del beneficiario, las necesidades derivadas de su discapacidad, la solvencia del administrador u otras análogas (art. 5.3 Ley 41/2003)."
    },
    {
     "tipo": "nota",
     "texto": "La excepción la concede el Juez en el expediente del art. 56 c) LJV, a instancia del Fiscal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 5.3 Ley 41/2003 · Art. 56 c) LJV"
    }
   ],
   "pregunta": "¿Ha concedido el Juez la excepción de la autorización para este acto?",
   "opciones": [
    {
     "texto": "Sí, hay resolución judicial que exceptúa la autorización",
     "tono": "t-ok",
     "destino": "fin_exencion_patrimonio"
    },
    {
     "texto": "No (no se ha pedido, se denegó o no comprende este acto)",
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
     "texto": "Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual del menor, se remitirán las actuaciones al Juzgado correspondiente en el estado en que se hallen."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV · Art. 86.5 j) LOPJ"
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
     "texto": "Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual, se remitirán las actuaciones al Juzgado correspondiente en el estado en que se hallen."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV · Art. 86.5 j) LOPJ"
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
     "texto": "Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "Si antes de la celebración de la comparecencia se produjera un cambio de la residencia habitual, se remitirán las actuaciones al Juzgado correspondiente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.1 LJV · Art. 86.5 j) LOPJ"
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
     "texto": "Art. 62.2 LJV; Art. 5 Ley 41/2003"
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
     "texto": "Art. 62.3 LJV"
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
     "texto": "El Juez puede ordenar, de oficio, que todos los interesados actúen por medio de abogado si la operación es compleja o comparecen sujetos con intereses enfrentados (art. 62.3 LJV)."
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
     "texto": "Cuando concurran circunstancias de complejidad o intereses enfrentados, el Juez podrá ordenar la actuación de todos los interesados por medio de abogado. La ley prevé la orden de actuar por medio de abogado, no de procurador."
    },
    {
     "tipo": "nota",
     "texto": "Si reúne los requisitos, puede pedir el reconocimiento del derecho a la asistencia jurídica gratuita."
    },
    {
     "tipo": "ley",
     "texto": "Art. 62.3 LJV"
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
     "texto": "El artículo 63.1 LJV establece el contenido obligatorio de la solicitud de autorización o aprobación judicial. Con ella se presentan los documentos y antecedentes necesarios para formular juicio exacto sobre el negocio."
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
     "texto": "La petición de venta directa debe acompañarse del dictamen pericial de valoración del precio de mercado (art. 63.3 LJV)."
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
     "tipo": "plazo",
     "texto": "Citación con al menos quince días de antelación; comparecencia dentro de los treinta días siguientes a la admisión (arts. 17.3 y 18.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La citación del menor mayor de doce años y de la persona con discapacidad es una manifestación del derecho a ser oído y expresa voluntad, deseos y preferencias, conforme al principio rector de respeto a la voluntad de la persona con discapacidad (art. 249 CC) y a la Convención de Nueva York de 2006."
    },
    {
     "tipo": "ley",
     "texto": "Art. 64.1 LJV · Arts. 17.3 y 18.1 LJV · Art. 249 CC · Convención ONU 2006"
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
     "texto": "El Juez resuelve por auto en los cinco días siguientes a la comparecencia (art. 19.1 LJV). En los actos de los progenitores, la autorización exige causas justificadas de utilidad o necesidad (art. 166 CC); en los del curador, oír al Fiscal y a la persona con medidas de apoyo (art. 290 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.1 LJV · Art. 19.1 LJV · Arts. 166 y 290 CC"
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
     "texto": "Se siguen las formalidades de la venta, sin subasta."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.4 LJV"
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
     "texto": "Cuando el acto autorizado sea una venta, hay que estar a la forma de enajenación que fije la resolución."
    },
    {
     "tipo": "nota",
     "texto": "Si la solicitud incluyó petición de venta directa sin subasta (art. 63.3 LJV) y el Juez la estimó, la venta se realizará de forma directa, sin necesidad de subasta ni intervención de persona o entidad especializada."
    },
    {
     "tipo": "nota",
     "texto": "La Ley 8/2021 suprimió la regla de la pública subasta (art. 65.2 LJV). Para el curador representativo, la enajenación se hace por venta directa, salvo que el Tribunal considere necesaria la subasta judicial (art. 287.2.º CC); en el patrimonio protegido no hace falta subasta (art. 5.2 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 63.3 y 65 LJV · Art. 287.2.º CC · Art. 5.2 Ley 41/2003"
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
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación, ante la Audiencia Provincial, con Abogado y Procurador (art. 458.1 LEC; art. 3.2 LJV)."
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
     "texto": "Art. 65.5 LJV · Art. 3.2 LJV · Arts. 455 y ss. LEC"
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
     "texto": "Si la apelación confirma la concesión, el acto podrá ejecutarse. Si la revoca, el acto no podrá realizarse. Si confirma la denegación, cabe una nueva solicitud si cambian las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.5 LJV · Arts. 458 y 461 LEC"
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
     "texto": "El acto realizado sin la autorización exigida puede ser impugnado, y quien lo realizó responde de los daños causados por su culpa o negligencia (arts. 234 y 294 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no cabe otro expediente sobre idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 65.1 LJV · Art. 19.3 LJV · Arts. 166, 234, 287 y 294 CC"
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
     "texto": "La ley establece una tramitación específica para el acto: el expediente se sustancia por esa vía y no por la del capítulo VIII de la LJV (art. 61 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "No lo es la aprobación de la partición del art. 1060 CC, que se tramita por este capítulo (art. 63.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 61 LJV"
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
   "titulo": "Exención de autorización acordada por el Juez",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una resolución judicial, a instancia del Fiscal, ha exceptuado la autorización judicial para este supuesto (art. 5.3 Ley 41/2003; art. 56 c) LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El Fiscal sigue supervisando la administración y puede instar nuevas medidas (art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 5.3 y 7 Ley 41/2003 · Art. 56 c) LJV"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "<strong>Referencias normativas</strong><br>Arts. 17 a 20 y 61 a 66 LJV<br>Arts. 166, 224, 249, 264, 269, 287, 290 y 1060 CC<br>Art. 5 Ley 41/2003<br>Convención ONU 2006"
});
