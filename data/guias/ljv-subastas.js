/* Migrado por tools/migrate.js desde sources/actual/G24.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-subastas",
 "ley": "LJV",
 "titulo": "De los expedientes de subastas voluntarias",
 "corto": "Título VII · Subastas voluntarias",
 "articulos": [
  "108",
  "109",
  "110",
  "111"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G24"
 },
 "fases": [
  "Admisión y competencia",
  "Solicitud y documentación",
  "Tramitación previa",
  "Publicidad y celebración",
  "Resolución y adjudicación"
 ],
 "actores": {
  "ambos": "LAJ / Interesado",
  "laj": "Letrado de la Admón. de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Identificación del supuesto. Ámbito de aplicación del Título VII",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de iniciar el expediente, compruebe si el supuesto encaja en el ámbito del Título VII: enajenación en subasta, fuera de un procedimiento de apremio, de bienes o derechos determinados, a instancia del propio interesado."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 108 de la Ley 15/2015.</strong> Ámbito de aplicación."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos acumulativos del artículo 108",
     "items": [
      "Se trata de una enajenación en subasta.",
      "La subasta se celebra fuera de un procedimiento de apremio.",
      "El objeto son bienes o derechos determinados.",
      "La iniciativa parte del propio interesado (titular o con poder de disposición)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si falta cualquiera de los requisitos, este Título no resulta aplicable: la subasta deberá encauzarse por la vía ejecutiva ordinaria (arts. 643 y siguientes de la Ley de Enjuiciamiento Civil) o por la vía concursal correspondiente."
    }
   ],
   "pregunta": "¿El supuesto reúne los cuatro requisitos del artículo 108?",
   "opciones": [
    {
     "texto": "Sí, concurren todos los requisitos",
     "tono": "t-nota",
     "destino": "competencia"
    },
    {
     "texto": "No, falta alguno de los requisitos",
     "tono": "t-nota",
     "destino": "fin_no_ambito"
    }
   ]
  },
  "fin_no_ambito": {
   "fase": 0,
   "titulo": "El supuesto queda fuera del Título VII",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente de subasta voluntaria del Título VII no es aplicable a este supuesto. Reconduzca la tramitación por el cauce adecuado."
    },
    {
     "tipo": "info",
     "texto": "Posibles vías alternativas, según el caso:"
    },
    {
     "tipo": "lista",
     "titulo": "Vías alternativas",
     "items": [
      "Subasta judicial ejecutiva (procedimiento de apremio): artículos 643 y siguientes de la Ley de Enjuiciamiento Civil.",
      "Subasta notarial o administrativa, si procediere por la naturaleza del bien o del título.",
      "Venta directa autorizada judicialmente en otros expedientes de jurisdicción voluntaria.",
      "Vía concursal si el titular se halla en situación de concurso (Texto Refundido de la Ley Concursal)."
     ],
     "marcar": true
    }
   ],
   "fin": "error"
  },
  "competencia": {
   "fase": 0,
   "titulo": "Competencia territorial. Fuero aplicable",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La competencia objetiva corresponde siempre al Juzgado de Primera Instancia. El fuero territorial depende de la naturaleza del bien."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 109.1 de la Ley 15/2015.</strong> Competencia."
    }
   ],
   "pregunta": "¿Qué tipo de bien o derecho se pretende subastar?",
   "opciones": [
    {
     "texto": "Bien inmueble",
     "tono": "t-nota",
     "destino": "competencia_inmueble"
    },
    {
     "texto": "Bien mueble o derecho no inmobiliario",
     "tono": "t-nota",
     "destino": "competencia_mueble"
    }
   ]
  },
  "competencia_inmueble": {
   "fase": 0,
   "titulo": "Fuero del lugar de radicación del inmueble",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Tratándose de bienes inmuebles, será competente el Juzgado de Primera Instancia del lugar donde éstos radiquen (forum rei sitae)."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 109.1, párrafo segundo, de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "nota",
     "texto": "Este fuero es imperativo y no admite elección por el solicitante, aun cuando el titular tenga su domicilio en otra demarcación."
    }
   ],
   "siguiente": "postulacion"
  },
  "competencia_mueble": {
   "fase": 0,
   "titulo": "Fuero del domicilio del titular",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Será competente el Juzgado de Primera Instancia que corresponda al domicilio del titular. Si fueran varios titulares, el correspondiente a cualquiera de ellos, a elección del solicitante."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 109.1, párrafo primero, de la Ley 15/2015.</strong>"
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 0,
   "titulo": "Postulación. Intervención de Abogado y Procurador",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para la actuación en este expediente no será preceptiva la intervención de Abogado y Procurador."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 109.2 de la Ley 15/2015.</strong> Postulación."
    },
    {
     "tipo": "nota",
     "texto": "El interesado podrá, no obstante, valerse voluntariamente de dichos profesionales, asumiendo sus honorarios. Esta regla enlaza con el régimen general de postulación de la jurisdicción voluntaria previsto en el artículo 3 de la propia Ley 15/2015."
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 1,
   "titulo": "Preparación de la solicitud de iniciación del expediente",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Será necesaria solicitud de iniciación del expediente, con la identificación y estado del bien o derecho."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 110.1 de la Ley 15/2015.</strong> Solicitud."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido mínimo de la solicitud",
     "items": [
      "Identificación completa del solicitante.",
      "Identificación y estado del bien o derecho que se pretende subastar.",
      "Documentos acreditativos de la capacidad legal para contratar del solicitante (letra a).",
      "Documentos que acrediten su poder de disposición sobre el objeto o derecho de la subasta (letra b).",
      "Pliego de condiciones particulares con la valoración de los bienes o derechos (letra c)."
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿El bien o derecho está sujeto a publicidad registral?",
   "opciones": [
    {
     "texto": "Sí, es un bien o derecho registrable",
     "tono": "t-nota",
     "destino": "doc_registrable"
    },
    {
     "texto": "No, no está sujeto a publicidad registral",
     "tono": "t-nota",
     "destino": "doc_no_registrable"
    }
   ]
  },
  "doc_registrable": {
   "fase": 1,
   "titulo": "Documentación adicional para bienes o derechos registrables",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando se trate de bienes o derechos registrables, se acompañará certificación registral de dominio y cargas."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 110.1.b) de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Documentos a adjuntar por el solicitante",
     "items": [
      "Documentos acreditativos de la capacidad legal para contratar.",
      "Documentos acreditativos del poder de disposición.",
      "Certificación registral de dominio y cargas, actualizada.",
      "Pliego de condiciones particulares con la valoración."
     ],
     "marcar": true
    }
   ],
   "siguiente": "arrendatarios"
  },
  "doc_no_registrable": {
   "fase": 1,
   "titulo": "Documentación para bienes o derechos no registrables",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el bien o derecho no esté sujeto a publicidad registral, bastará con la documentación general del artículo 110.1, sin necesidad de certificación registral."
    },
    {
     "tipo": "lista",
     "titulo": "Documentos a adjuntar",
     "items": [
      "Documentos acreditativos de la capacidad legal para contratar.",
      "Documentos acreditativos del poder de disposición sobre el objeto o derecho.",
      "Pliego de condiciones particulares con la valoración."
     ],
     "marcar": true
    }
   ],
   "siguiente": "arrendatarios"
  },
  "arrendatarios": {
   "fase": 1,
   "titulo": "Existencia de arrendatarios u ocupantes del inmueble",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Solo relevante cuando la subasta recae sobre un inmueble. En caso de existir arrendatarios u ocupantes del inmueble de cuya enajenación se trate, el solicitante deberá identificarlos en su solicitud inicial."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 110.2 de la Ley 15/2015</strong>, que se remite al <strong>artículo 661 de la Ley de Enjuiciamiento Civil.</strong>"
    },
    {
     "tipo": "aviso",
     "texto": "La omisión de esta identificación puede generar indefensión a los ocupantes y nulidad de actuaciones, así como responsabilidad del solicitante frente al adjudicatario por cargas o situaciones posesorias ocultas."
    }
   ],
   "pregunta": "¿Existen arrendatarios u ocupantes del inmueble?",
   "opciones": [
    {
     "texto": "Sí, hay arrendatarios u ocupantes",
     "tono": "t-nota",
     "destino": "notif_661"
    },
    {
     "texto": "No (o no se trata de un inmueble)",
     "tono": "t-nota",
     "destino": "modo_venta"
    }
   ]
  },
  "notif_661": {
   "fase": 1,
   "titulo": "Comunicaciones a arrendatarios y ocupantes (artículo 661 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante identificará a los arrendatarios y ocupantes en la solicitud inicial, y se procederá en la forma prescrita en el artículo 661 de la Ley de Enjuiciamiento Civil."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 661 de la Ley de Enjuiciamiento Civil.</strong> Comunicaciones a arrendatarios y ocupantes de hecho. Trámites para determinar si tienen o no derecho a permanecer en el inmueble tras la enajenación."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones a practicar",
     "items": [
      "Notificación individual a cada arrendatario u ocupante identificado.",
      "Traslado de la información relevante sobre la subasta prevista.",
      "En su caso, tramitación del incidente sobre el derecho a permanecer en el inmueble conforme al artículo 661 de la LEC."
     ],
     "marcar": true
    }
   ],
   "siguiente": "modo_venta"
  },
  "modo_venta": {
   "fase": 1,
   "titulo": "Modo de realización: subasta electrónica o entidad especializada",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la solicitud podrá pedirse al Secretario judicial que acuerde la venta del bien o derecho por persona o entidad especializada. De estimarse procedente, se acordará con sujeción a lo establecido en el artículo 641 de la Ley de Enjuiciamiento Civil en cuanto sea compatible con este Título."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 110.3 de la Ley 15/2015</strong>, en relación con el <strong>artículo 641 de la Ley de Enjuiciamiento Civil.</strong>"
    }
   ],
   "pregunta": "¿Qué modo de realización se solicita?",
   "opciones": [
    {
     "texto": "Subasta electrónica ordinaria (Portal AEBOE)",
     "tono": "t-nota",
     "destino": "pliego"
    },
    {
     "texto": "Venta por persona o entidad especializada (art. 641 LEC)",
     "tono": "t-nota",
     "destino": "especializada"
    }
   ]
  },
  "especializada": {
   "fase": 1,
   "titulo": "Venta por persona o entidad especializada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "De estimarse procedente la petición del solicitante, el Secretario judicial acordará la venta por persona o entidad especializada con sujeción al artículo 641 de la Ley de Enjuiciamiento Civil en cuanto sea compatible con las disposiciones del Título VII."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 641 de la Ley de Enjuiciamiento Civil.</strong> Realización por persona o entidad especializada: requisitos, caución, precio mínimo y régimen temporal."
    },
    {
     "tipo": "nota",
     "texto": "Aun cuando se opte por esta vía, el pliego de condiciones particulares del artículo 110.1.c) sigue siendo necesario, pues fija las reglas económicas y materiales de la enajenación."
    }
   ],
   "siguiente": "pliego"
  },
  "pliego": {
   "fase": 1,
   "titulo": "Pliego de condiciones particulares",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El pliego de condiciones particulares recoge las reglas con arreglo a las cuales ha de celebrarse la subasta y la valoración de los bienes o derechos a subastar."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 110.1.c) de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Contenido típico del pliego",
     "items": [
      "Valoración o tipo de salida del bien o derecho.",
      "Tipo mínimo por debajo del cual el solicitante no aceptará el remate.",
      "Reserva, en su caso, del derecho del solicitante a aprobar o rechazar el remate.",
      "Reglas sobre consignación o depósito previo de los licitadores.",
      "Condiciones de pago del precio: plazo, forma y consecuencias del impago.",
      "Gastos e impuestos a cargo del adjudicatario.",
      "Cargas, servidumbres, gravámenes o situaciones posesorias subsistentes."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El pliego opera como lex specialis de la subasta: rige en todo aquello no previsto por la Ley de Enjuiciamiento Civil, y se expresará íntegramente en los edictos (artículo 111.5)."
    }
   ],
   "siguiente": "consulta_rpc"
  },
  "consulta_rpc": {
   "fase": 2,
   "titulo": "Consulta previa al Registro Público Concursal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Secretario judicial, antes de resolver sobre la solicitud, consultará el Registro Público Concursal a los efectos previstos en la legislación especial."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.1 de la Ley 15/2015</strong>, en relación con el <strong>Texto Refundido de la Ley Concursal (Real Decreto Legislativo 1/2020, de 5 de mayo).</strong>"
    },
    {
     "tipo": "nota",
     "texto": "Finalidad: comprobar que el titular no se halla en situación de concurso o preconcurso que pudiera afectar a su facultad de disposición sobre el bien o a la competencia del juez del concurso respecto de la enajenación."
    }
   ],
   "pregunta": "¿La consulta revela alguna inscripción concursal relevante asociada al titular?",
   "opciones": [
    {
     "texto": "No, no hay inscripciones que afecten",
     "tono": "t-nota",
     "destino": "resolucion_celebracion"
    },
    {
     "texto": "Sí, el titular consta en concurso o situación similar",
     "tono": "t-nota",
     "destino": "fin_concurso"
    }
   ]
  },
  "fin_concurso": {
   "fase": 2,
   "titulo": "Suspensión por afectación concursal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Detectada una inscripción concursal relevante, el expediente no puede continuar por este cauce: debe estarse a lo dispuesto por la legislación concursal sobre la enajenación de bienes del concursado."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones a practicar",
     "items": [
      "Comunicar al solicitante la existencia de la inscripción concursal.",
      "Remitir, en su caso, las actuaciones al juez del concurso competente.",
      "Abstenerse de acordar la celebración de la subasta en tanto subsista la limitación."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Texto Refundido de la Ley Concursal (RDLeg 1/2020): régimen de la facultad de disposición del concursado y de la realización de bienes en sede concursal."
    }
   ],
   "fin": "warning"
  },
  "resolucion_celebracion": {
   "fase": 2,
   "titulo": "Resolución del LAJ sobre la celebración de la subasta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A la vista de la documentación, el Secretario judicial resolverá lo que proceda sobre la celebración de la subasta."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.2 de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del decreto de admisión",
     "items": [
      "Declaración de procedencia de la subasta.",
      "Fijación del régimen de publicidad conforme al pliego.",
      "Comunicación al Registro Público Concursal de la existencia del expediente, con expresa especificación del número de identificación fiscal del titular (persona física o jurídica) cuyo bien vaya a ser objeto de la subasta.",
      "Orden de práctica de los actos preparatorios (certificación registral, edictos, etc.)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Registro Público Concursal notificará al Juzgado la práctica de cualquier asiento asociado al NIF notificado. El Secretario judicial comunicará asimismo la finalización del expediente cuando ésta se produzca."
    }
   ],
   "pregunta": "¿La documentación y presupuestos son suficientes para acordar la celebración?",
   "opciones": [
    {
     "texto": "Sí, se acuerda la celebración de la subasta",
     "tono": "t-nota",
     "destino": "certificacion_registral"
    },
    {
     "texto": "No, se inadmite la solicitud",
     "tono": "t-nota",
     "destino": "fin_inadmision"
    }
   ]
  },
  "fin_inadmision": {
   "fase": 2,
   "titulo": "Inadmisión de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "El decreto de inadmisión pone fin al expediente sin adjudicación. El interesado podrá subsanar los defectos detectados y promover, en su caso, un nuevo expediente."
    },
    {
     "tipo": "info",
     "texto": "La finalización del expediente deberá comunicarse al Registro Público Concursal, tal como prevé el artículo 111.2, párrafo cuarto."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.2 de la Ley 15/2015.</strong>"
    }
   ],
   "fin": "neutral"
  },
  "certificacion_registral": {
   "fase": 2,
   "titulo": "Solicitud de certificación registral de dominio y cargas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acordada la celebración, si se tratare de la subasta de un bien inmueble o derecho real inscrito en el Registro de la Propiedad o de bienes muebles sujetos a un régimen de publicidad registral similar, el Secretario judicial solicitará por procedimientos electrónicos certificación registral de dominio y cargas."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.3, párrafo primero, de la Ley 15/2015.</strong>"
    }
   ],
   "pregunta": "¿El bien está sujeto a publicidad registral?",
   "opciones": [
    {
     "texto": "Sí (Registro de la Propiedad, Bienes Muebles, etc.)",
     "tono": "t-nota",
     "destino": "nota_marginal"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "celebracion_subasta"
    }
   ]
  },
  "nota_marginal": {
   "fase": 2,
   "titulo": "Certificación, nota marginal y deber de notificación continuada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Registrador de la propiedad expedirá la certificación con información continuada por medios electrónicos y hará constar por nota al margen del bien o derecho esta circunstancia."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.3 de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "plazo",
     "texto": "<strong>Caducidad de la nota marginal: seis meses.</strong> Caducará a los seis meses de su fecha salvo que con anterioridad el Secretario judicial notifique al Registrador el cierre del expediente o su suspensión, en cuyo caso el plazo se computará desde que el Secretario judicial notifique su reanudación."
    },
    {
     "tipo": "lista",
     "titulo": "Deberes del Registrador",
     "items": [
      "Expedir la certificación de dominio y cargas con información continuada por procedimientos electrónicos.",
      "Hacer constar por nota marginal la situación de venta en subasta del bien o derecho.",
      "Notificar, inmediatamente y de forma telemática, al Secretario judicial y al Portal de Subastas de la Agencia Estatal Boletín Oficial del Estado la presentación de otro u otros títulos que afecten o modifiquen la información inicial."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Portal de Subastas recogerá la información proporcionada por el Registro de modo inmediato para su traslado a los que consulten su contenido."
    }
   ],
   "siguiente": "celebracion_subasta"
  },
  "celebracion_subasta": {
   "fase": 3,
   "titulo": "Celebración electrónica en el Portal de Subastas de la AEBOE",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La subasta se llevará a cabo, en todo caso, de forma electrónica en el Portal de Subastas de la Agencia Estatal Boletín Oficial del Estado, bajo la responsabilidad del Secretario judicial."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.4 de la Ley 15/2015.</strong> Forma de celebración. Aplicación de las disposiciones de la Ley de Enjuiciamiento Civil en cuanto sean compatibles."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.5 de la Ley 15/2015.</strong> La publicidad y celebración se ajustarán a lo establecido en la Ley de Enjuiciamiento Civil en todo aquello no previsto en el pliego de condiciones particulares. <strong>En los edictos se expresará el pliego de condiciones.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones durante la fase de publicidad y celebración",
     "items": [
      "Publicación de la subasta en el Portal de Subastas AEBOE.",
      "Edictos con expresión íntegra del pliego de condiciones.",
      "Aplicación supletoria de la LEC: requisitos de los licitadores, depósito, duración de la subasta electrónica (artículo 648 LEC), etc.",
      "Información continuada al Portal por parte del Registrador de títulos sobrevenidos que afecten a la información inicial."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La electronificación obligatoria, impuesta desde la reforma operada por la Ley 19/2015, de 13 de julio, busca maximizar la concurrencia, la transparencia y la obtención del mejor precio."
    }
   ],
   "siguiente": "resultado_subasta"
  },
  "resultado_subasta": {
   "fase": 3,
   "titulo": "Análisis del resultado de la subasta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Terminada la subasta, el Secretario judicial, mediante decreto, aprobará el remate en favor del único o mejor postor, siempre y cuando cubra el tipo mínimo que hubiera fijado el solicitante o no se hubiere reservado expresamente el derecho a aprobarla."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.6 y 111.7 de la Ley 15/2015.</strong>"
    }
   ],
   "pregunta": "¿Cuál es el resultado de la subasta?",
   "opciones": [
    {
     "texto": "Hay postor que cubre el tipo mínimo y no hay reserva de aprobación",
     "tono": "t-nota",
     "destino": "aprobacion_directa"
    },
    {
     "texto": "Hay postor, pero el solicitante se reservó el derecho a aprobar el remate",
     "tono": "t-nota",
     "destino": "vista_solicitante"
    },
    {
     "texto": "Hay oferta modificando alguna de las condiciones",
     "tono": "t-nota",
     "destino": "vista_modificacion"
    },
    {
     "texto": "No ha habido ningún postor",
     "tono": "t-nota",
     "destino": "fin_sin_postores"
    }
   ]
  },
  "fin_sin_postores": {
   "fase": 3,
   "titulo": "Sobreseimiento por falta de postores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "Cuando en la subasta no hubiere ningún postor, se sobreseerá el expediente."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.7 de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Decreto de sobreseimiento del expediente.",
      "Comunicación al Registro Público Concursal de la finalización del expediente (art. 111.2, párrafo cuarto).",
      "Comunicación al Registrador para la cancelación de la nota marginal, si se hubiera practicado (art. 111.3).",
      "El interesado podrá promover un nuevo expediente en el futuro con otro pliego de condiciones o con nueva valoración."
     ],
     "marcar": true
    }
   ],
   "fin": "neutral"
  },
  "aprobacion_directa": {
   "fase": 4,
   "titulo": "Aprobación directa del remate",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando el postor cubre el tipo mínimo fijado por el solicitante y éste no se hubiere reservado expresamente el derecho a aprobar la subasta, el Secretario judicial, mediante decreto, aprobará el remate en favor del único o mejor postor."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.6, párrafo primero, de la Ley 15/2015.</strong>"
    }
   ],
   "siguiente": "decreto_adjudicacion"
  },
  "vista_solicitante": {
   "fase": 4,
   "titulo": "Vista al solicitante por reserva del derecho a aprobar el remate",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante se hubiera reservado expresamente el derecho a aprobar el remate, se le dará vista del expediente para que en el término de tres días pida lo que le interese."
    },
    {
     "tipo": "plazo",
     "texto": "<strong>Plazo: tres días.</strong> Término para que el solicitante se pronuncie tras dársele vista del expediente (artículo 111.6)."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.6, párrafo segundo, de la Ley 15/2015.</strong>"
    }
   ],
   "pregunta": "¿Qué resuelve el solicitante en el plazo de tres días?",
   "opciones": [
    {
     "texto": "Aprueba el remate",
     "tono": "t-nota",
     "destino": "decreto_adjudicacion"
    },
    {
     "texto": "No aprueba el remate",
     "tono": "t-nota",
     "destino": "fin_no_aprobacion"
    }
   ]
  },
  "fin_no_aprobacion": {
   "fase": 4,
   "titulo": "Sobreseimiento por no aprobación del solicitante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "Cuando el solicitante, tras la vista, no aprueba el remate ofrecido, se sobreseerá el expediente."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.7 de la Ley 15/2015.</strong> «Cuando en la subasta no hubiere ningún postor o el solicitante no hubiera aceptado la proposición, se sobreseerá el expediente.»"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Decreto de sobreseimiento del expediente.",
      "Comunicación al Registro Público Concursal de la finalización del expediente.",
      "Comunicación al Registrador para la cancelación de la nota marginal, si se hubiera practicado."
     ],
     "marcar": true
    }
   ],
   "fin": "neutral"
  },
  "vista_modificacion": {
   "fase": 4,
   "titulo": "Vista al solicitante por oferta con condiciones modificadas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Igual comunicación se le dará al solicitante en el caso de que por algún licitador se hiciere la oferta de aceptar el remate modificando algunas de las condiciones. Si el solicitante aprueba el remate o acepta la proposición, se resolverá teniendo por aprobado el remate en favor del licitador de la misma."
    },
    {
     "tipo": "plazo",
     "texto": "<strong>Plazo: tres días.</strong> Término para que el solicitante se pronuncie sobre la proposición modificada."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.6, párrafos segundo y tercero, de la Ley 15/2015.</strong>"
    }
   ],
   "pregunta": "¿Qué resuelve el solicitante sobre la proposición modificada?",
   "opciones": [
    {
     "texto": "Acepta la proposición",
     "tono": "t-nota",
     "destino": "decreto_adjudicacion"
    },
    {
     "texto": "No acepta la proposición",
     "tono": "t-nota",
     "destino": "fin_rechazo_modificacion"
    }
   ]
  },
  "fin_rechazo_modificacion": {
   "fase": 4,
   "titulo": "Sobreseimiento por rechazo de la proposición modificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "Si el solicitante no acepta la proposición de remate con condiciones modificadas, se sobreseerá el expediente por aplicación del artículo 111.7."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.7 de la Ley 15/2015.</strong> Sobreseimiento por no aceptación de la proposición."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Decreto de sobreseimiento.",
      "Comunicación al Registro Público Concursal de la finalización.",
      "Cancelación, en su caso, de la nota marginal registral."
     ],
     "marcar": true
    }
   ],
   "fin": "neutral"
  },
  "decreto_adjudicacion": {
   "fase": 4,
   "titulo": "Decreto de adjudicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El decreto de adjudicación es la resolución que cierra positivamente la subasta y sirve de título inscribible al adjudicatario."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.8 de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio del decreto de adjudicación",
     "items": [
      "Descripción del bien o derecho.",
      "Identificación de los intervinientes (solicitante, adjudicatario y, en su caso, sus representantes).",
      "Expresión de las condiciones de la adjudicación (precio, forma de pago, cargas asumidas, etc.).",
      "Los demás requisitos necesarios, en su caso, para la inscripción registral (descripción catastral, referencia registral, manifestaciones fiscales, etc.)."
     ],
     "marcar": true
    }
   ],
   "siguiente": "testimonio"
  },
  "testimonio": {
   "fase": 4,
   "titulo": "Testimonio del decreto. Título para la inscripción registral",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Un testimonio del decreto de adjudicación, que se entregará al adjudicatario, será título suficiente para la práctica de las inscripciones registrales que, en su caso, correspondan."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.8, párrafo segundo, de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "nota",
     "texto": "El testimonio tiene eficacia equivalente a una escritura pública de compraventa a efectos registrales en relación con las inscripciones derivadas de la adjudicación."
    }
   ],
   "siguiente": "comunicacion_final_rpc"
  },
  "comunicacion_final_rpc": {
   "fase": 4,
   "titulo": "Comunicaciones finales: Registro Público Concursal y Registro",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Secretario judicial pondrá en conocimiento del Registro Público Concursal la finalización del expediente cuando la misma se produzca."
    },
    {
     "tipo": "ley",
     "texto": "<strong>Artículo 111.2, párrafo cuarto, de la Ley 15/2015.</strong>"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales",
     "items": [
      "Comunicación al Registro Público Concursal de la finalización del expediente.",
      "Notificación al Registrador del cierre del expediente a los efectos de la nota marginal (art. 111.3).",
      "Entrega del testimonio del decreto de adjudicación al adjudicatario.",
      "Archivo del expediente."
     ],
     "marcar": true
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "fin_exitoso": {
   "fase": 4,
   "titulo": "Expediente concluido con adjudicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "nota",
     "texto": "El expediente de subasta voluntaria ha concluido con adjudicación firme. El adjudicatario dispone del testimonio del decreto como título suficiente para la inscripción registral que corresponda."
    },
    {
     "tipo": "lista",
     "titulo": "Resultados alcanzados",
     "items": [
      "Aprobación del remate mediante decreto del Secretario judicial.",
      "Decreto de adjudicación con todos los requisitos del artículo 111.8.",
      "Testimonio entregado al adjudicatario como título inscribible.",
      "Comunicación al Registro Público Concursal de la finalización del expediente.",
      "Notificación al Registrador para el cierre del expediente y de la nota marginal."
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  }
 }
});
