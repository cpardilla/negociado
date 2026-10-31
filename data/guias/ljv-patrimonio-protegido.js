/* Migrado por tools/migrate.js desde sources/actual/G14.json; revisado con el BOE (registro: docs/revision/ljv-patrimonio-protegido.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-patrimonio-protegido",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la protección del patrimonio de las personas con discapacidad",
 "corto": "Patrimonio de las personas con discapacidad",
 "articulos": [
  "56",
  "57",
  "58"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G14"
 },
 "fases": [
  "Identificación y ámbito",
  "Competencia y legitimación",
  "Solicitud y documentación",
  "Tramitación",
  "Resolución judicial",
  "Recursos y eficacia registral"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia",
  "ambos": "Juez / LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio: Verificación del ámbito material",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expediente de jurisdicción voluntaria para las actuaciones judiciales previstas en el capítulo I de la Ley 41/2003, de protección patrimonial de las personas con discapacidad (art. 56 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Solo puede promoverlo el Ministerio Fiscal, de oficio o a solicitud de cualquier persona (art. 57.2 LJV; art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "nota",
     "texto": "A efectos de esa ley, son personas con discapacidad las que tienen una discapacidad psíquica igual o superior al 33 % o física o sensorial igual o superior al 65 %, acreditada por certificado o resolución judicial firme (art. 2.2 y 3 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 LJV · Arts. 1 a 7 Ley 41/2003"
    }
   ],
   "pregunta": "¿El expediente tiene por objeto alguna de las actuaciones previstas en el Capítulo I de la Ley 41/2003?",
   "opciones": [
    {
     "texto": "Sí: Constitución, administración, fiscalización, modificación o extinción de patrimonio protegido",
     "tono": "t-nota",
     "destino": "supuestos_art56"
    },
    {
     "texto": "No: El asunto no encaja en este procedimiento",
     "tono": "t-nota",
     "destino": "fin_no_ambito"
    }
   ]
  },
  "fin_no_ambito": {
   "fase": 0,
   "titulo": "Fin: Fuera de ámbito",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El asunto no es ninguna de las actuaciones del art. 56 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Habrá que valorar el expediente de jurisdicción voluntaria o el proceso que corresponda a la materia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 LJV · Ley 41/2003, capítulo I"
    }
   ],
   "fin": "error"
  },
  "supuestos_art56": {
   "fase": 0,
   "titulo": "Supuestos del Artículo 56: Selección del tipo de actuación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Identifique cuál de los supuestos del art. 56 LJV motiva el expediente:"
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos (art. 56 LJV)",
     "items": [
      "a) Constitución del patrimonio protegido o aprobación de aportaciones, ante la negativa injustificada a consentir o asentir de quien debe hacerlo",
      "b) Nombramiento de administrador cuando no pueda hacerse conforme al título de constitución",
      "c) Exenciones de la autorización o aprobación judicial para actos de disposición, gravamen u otros del administrador",
      "d) Tras la constitución: sustitución del administrador, cambio de las reglas de administración, medidas especiales de fiscalización, cautelas, extinción u otra medida análoga"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 a) a d) LJV · Arts. 3, 5 y 7 Ley 41/2003"
    }
   ],
   "pregunta": "Seleccione el supuesto aplicable:",
   "opciones": [
    {
     "texto": "a) Constitución/aportaciones con negativa de consentimiento",
     "tono": "t-nota",
     "destino": "supuesto_a"
    },
    {
     "texto": "b) Nombramiento de administrador por imposibilidad",
     "tono": "t-nota",
     "destino": "supuesto_b"
    },
    {
     "texto": "c) Exenciones de autorización judicial",
     "tono": "t-nota",
     "destino": "supuesto_c"
    },
    {
     "texto": "d) Medidas posteriores a la constitución",
     "tono": "t-nota",
     "destino": "supuesto_d"
    }
   ]
  },
  "supuesto_a": {
   "fase": 1,
   "titulo": "Supuesto a): Constitución con negativa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquier persona con interés legítimo puede pedir a la persona con discapacidad, con el apoyo que requiera, que constituya un patrimonio protegido, ofreciendo una aportación suficiente. Ante la negativa injustificada de quien debe prestar ese apoyo, puede acudir al Ministerio Fiscal, que insta del Juez lo que proceda (art. 3.2 Ley 41/2003; art. 56 a) LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El art. 56 a) LJV habla aún de la negativa de «progenitores, tutor o curador»; tras la Ley 8/2021, el art. 3.2 de la Ley 41/2003 se refiere a la persona encargada de prestar apoyo."
    },
    {
     "tipo": "nota",
     "texto": "Criterio: la voluntad, deseos y preferencias de la persona con discapacidad. El cargo de administrador no puede recaer, salvo justa causa, en quien se negó injustificadamente (art. 3.2 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 a) LJV · Arts. 3.2 y 4 Ley 41/2003"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_b": {
   "fase": 1,
   "titulo": "Supuesto b): Nombramiento de administrador",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando no pueda designarse administrador conforme a las reglas del documento público o de la resolución judicial de constitución, el Juez provee lo que corresponda, a solicitud del Fiscal, teniendo en cuenta los deseos, voluntad y preferencias del beneficiario (art. 5.6 Ley 41/2003; art. 56 b) LJV)."
    },
    {
     "tipo": "nota",
     "texto": "No pueden ser administradores quienes no puedan ser curadores (art. 5.5 Ley 41/2003; art. 275 CC). No hace falta subasta pública para enajenar bienes del patrimonio, y el gasto de dinero y el consumo de bienes fungibles para atender las necesidades vitales del beneficiario no son actos de disposición (art. 5.2 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 b) LJV · Art. 5.2, 5 y 6 Ley 41/2003"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_c": {
   "fase": 1,
   "titulo": "Supuesto c): Exenciones de autorización judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los constituyentes o el administrador pueden instar al Fiscal que pida al Juez la excepción de la autorización judicial en determinados supuestos (art. 5.3 Ley 41/2003; art. 56 c) LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Se atiende a la composición del patrimonio, las circunstancias personales del beneficiario, las necesidades derivadas de su discapacidad, la solvencia del administrador o cualquier otra circunstancia análoga (art. 5.3 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 c) LJV · Art. 5.3 Ley 41/2003"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_d": {
   "fase": 1,
   "titulo": "Supuesto d): Medidas posteriores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La supervisión de la administración corresponde al Fiscal, que insta del Juez lo que proceda: sustitución del administrador, cambio de las reglas de administración, medidas especiales de fiscalización, cautelas, extinción u otra medida análoga, respetando la voluntad, deseos y preferencias de la persona (art. 7.1 Ley 41/2003; art. 56 d) LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si el administrador no es el propio beneficiario, rinde cuentas al Fiscal cuando este lo determine y, en todo caso, anualmente (art. 7.2 Ley 41/2003)."
    },
    {
     "tipo": "nota",
     "texto": "El patrimonio se extingue por la muerte o declaración de fallecimiento del beneficiario o por dejar de tener la condición de persona con discapacidad del art. 2.2 (art. 6 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 d) LJV · Arts. 6 y 7 Ley 41/2003"
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Competencia territorial y objetiva",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juzgado de Primera Instancia del domicilio o, en su defecto, de la residencia de la persona con discapacidad (art. 57.1 LJV). Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "La competencia territorial no puede modificarse por sumisión (art. 2.2 LJV); el LAJ la examina de oficio (art. 16.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 57.1 LJV · Arts. 2.2 y 16 LJV · Art. 86.5 j) LOPJ"
    }
   ],
   "pregunta": "¿Está determinada correctamente la competencia territorial?",
   "opciones": [
    {
     "texto": "Sí: la persona tiene aquí su domicilio o, en su defecto, su residencia",
     "tono": "t-nota",
     "destino": "legitimacion"
    },
    {
     "texto": "No: falta de competencia territorial",
     "tono": "t-nota",
     "destino": "fin_incompetencia"
    }
   ]
  },
  "fin_incompetencia": {
   "fase": 1,
   "titulo": "Fin: Incompetencia territorial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El Juzgado carece de competencia territorial."
    },
    {
     "tipo": "nota",
     "texto": "Como la decisión corresponde al Juez, el LAJ le da cuenta y este acuerda la remisión al órgano competente, tras oír al Fiscal (arts. 16.3 y 2.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2.3 y 16.3 LJV · Art. 57.1 LJV"
    }
   ],
   "fin": "error"
  },
  "legitimacion": {
   "fase": 1,
   "titulo": "Legitimación: Monopolio del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Solo el Ministerio Fiscal está legitimado para promover estos expedientes; actúa de oficio o a solicitud de cualquier persona (art. 57.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Debe ser oído en todas las actuaciones judiciales relativas al patrimonio protegido (art. 57.2 LJV; art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 57.2 LJV · Art. 7.1 Ley 41/2003"
    }
   ],
   "pregunta": "¿La solicitud ha sido formulada por el Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Sí: Solicitud fiscal válida",
     "tono": "t-nota",
     "destino": "postulacion"
    },
    {
     "texto": "No: Solicitud de particular sin intervención fiscal",
     "tono": "t-nota",
     "destino": "fin_legitimacion"
    }
   ]
  },
  "fin_legitimacion": {
   "fase": 1,
   "titulo": "Fin: Falta de legitimación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente no puede tramitarse: falta legitimación activa."
    },
    {
     "tipo": "nota",
     "texto": "Solo el Fiscal puede promoverlo. Quien quiera instarlo debe dirigirse al Fiscal, que valorará si lo promueve (art. 57.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 57.2 LJV"
    }
   ],
   "fin": "error"
  },
  "postulacion": {
   "fase": 1,
   "titulo": "Postulación profesional: Acceso directo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los interesados no necesitan Abogado ni Procurador para intervenir en el expediente (art. 57.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Pueden actuar asistidos o representados si lo desean (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 57.3 LJV · Art. 3.2 LJV"
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 2,
   "titulo": "Solicitud: Requisitos formales y contenido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se inicia por solicitud escrita del Ministerio Fiscal (art. 58.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la solicitud (art. 58.1 LJV)",
     "items": [
      "Datos y circunstancias de identificación de la persona con discapacidad",
      "De sus representantes o su curador, según proceda, y de los demás interesados",
      "Domicilio o domicilios en que pueden ser citados",
      "Los hechos y demás alegaciones que procedan"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Conviene acompañar la acreditación del grado de discapacidad (art. 2.3 Ley 41/2003) y, según el supuesto, el documento público o la resolución de constitución."
    },
    {
     "tipo": "plazo",
     "texto": "Si hay defectos, el LAJ da cinco días para subsanarlos (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.1 LJV · Art. 16.4 LJV · Art. 2.3 Ley 41/2003"
    }
   ],
   "pregunta": "¿La solicitud cumple los requisitos formales y documentales?",
   "opciones": [
    {
     "texto": "Sí: la solicitud es admisible (o se ha subsanado)",
     "tono": "t-nota",
     "destino": "audiencia"
    },
    {
     "texto": "No: Defectos insubsanables o no subsanados en plazo",
     "tono": "t-nota",
     "destino": "fin_solicitud"
    }
   ]
  },
  "fin_solicitud": {
   "fase": 2,
   "titulo": "Fin: Inadmisión de la solicitud",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La solicitud no es admisible por defectos insubsanables o no subsanados en plazo."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ da cuenta al Juez, a quien corresponde decidir, que resuelve lo procedente (arts. 16.4 y 17.1 LJV). Contra el auto que pone fin al expediente cabe apelación (art. 58.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.4 y 17.1 LJV · Art. 58.4 LJV"
    }
   ],
   "fin": "error"
  },
  "audiencia": {
   "fase": 2,
   "titulo": "Admisión y comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La tramitación sigue las normas generales de la LJV (art. 58.2): admitida la solicitud, el LAJ cita a comparecencia cuando deban ser oídos interesados distintos del solicitante, hayan de practicarse pruebas o el Juez la considere necesaria (art. 17.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El Fiscal es oído en todas las actuaciones (art. 57.2 LJV). La persona con discapacidad interviene con los ajustes necesarios (arts. 7 bis y 18.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Citación con al menos quince días de antelación; comparecencia dentro de los treinta días siguientes a la admisión (arts. 17.3 y 18.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.2 LJV · Arts. 7 bis, 17 y 18 LJV · Art. 57.2 LJV"
    }
   ],
   "siguiente": "tramitacion"
  },
  "tramitacion": {
   "fase": 3,
   "titulo": "Tramitación: Normas generales aplicables",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplican las disposiciones generales del capítulo II del título I de la LJV (arts. 13 a 22), en lo que no se opongan a las específicas (art. 13 y 58.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Entre las medidas que el Fiscal puede pedir está la adopción de cautelas sobre el patrimonio (art. 56 d) LJV; art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 13 y 58.2 LJV · Art. 56 d) LJV"
    }
   ],
   "pregunta": "¿Ha pedido el Fiscal la adopción de cautelas?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "cautelares"
    },
    {
     "texto": "No: continuar hacia la resolución",
     "tono": "t-nota",
     "destino": "resolucion"
    }
   ]
  },
  "cautelares": {
   "fase": 3,
   "titulo": "Cautelas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez puede acordar las cautelas que pida el Fiscal para proteger el patrimonio (art. 56 d) LJV; art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "nota",
     "texto": "Las decide en interés de la persona con discapacidad, respetando su voluntad, deseos y preferencias (art. 58.3 LJV; art. 7.1 Ley 41/2003)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 56 d) LJV · Art. 58.3 LJV · Art. 7.1 Ley 41/2003"
    }
   ],
   "siguiente": "resolucion"
  },
  "resolucion": {
   "fase": 4,
   "titulo": "Resolución judicial: Criterios y contenido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta la resolución en interés de la persona con discapacidad (art. 58.3 LJV), por auto, en los cinco días siguientes a la comparecencia o a la última diligencia (art. 19.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Si constituye el patrimonio protegido, contiene al menos (art. 58.3 LJV; art. 3.3 Ley 41/2003)",
     "items": [
      "El inventario de los bienes y derechos que inicialmente lo constituyan",
      "Las reglas de su administración y, en su caso, de fiscalización (art. 5 Ley 41/2003)",
      "Los procedimientos de designación de quienes hayan de integrar los órganos de administración o de fiscalización",
      "Cualquier otra disposición oportuna sobre su administración o conservación; puede establecer medidas de control y salvaguardas frente a abusos, conflictos de intereses e influencia indebida"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.3 LJV · Art. 19.1 LJV · Arts. 3.3 y 5 Ley 41/2003"
    }
   ],
   "pregunta": "¿Se estima la solicitud del Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Sí: Se acuerda la medida solicitada",
     "tono": "t-nota",
     "destino": "resolucion_estimada"
    },
    {
     "texto": "No: Se desestima la solicitud",
     "tono": "t-nota",
     "destino": "resolucion_desestimada"
    }
   ]
  },
  "resolucion_estimada": {
   "fase": 4,
   "titulo": "Resolución estimatoria: Constitución o medida acordada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se acuerda la constitución del patrimonio protegido, el nombramiento de administrador, las exenciones o las medidas posteriores pedidas."
    },
    {
     "tipo": "nota",
     "texto": "La resolución se notifica a los interesados y al Fiscal. Si se apela, el recurso suspende sus efectos, salvo cuando se nombra administrador por no poder designarse conforme al título (art. 58.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.3 y 4 LJV"
    }
   ],
   "siguiente": "recursos"
  },
  "resolucion_desestimada": {
   "fase": 4,
   "titulo": "Resolución desestimatoria",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se desestima la solicitud del Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "La resolución se motiva y se notifica a los interesados y al Fiscal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.3 LJV"
    }
   ],
   "siguiente": "recursos"
  },
  "recursos": {
   "fase": 5,
   "titulo": "Régimen de recursos: Apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución es recurrible en apelación ante la Audiencia Provincial (art. 58.4 LJV; art. 20.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación (art. 458.1 LEC). Se interpone ante la Audiencia, cuyo LAJ pide las actuaciones al Juzgado (art. 458.3 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Efectos suspensivos, salvo cuando la resolución nombra administrador por no poder designarse conforme a las reglas del documento público o de la resolución de constitución (art. 58.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Para el recurso son necesarios Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 3.2, 20.2 y 58.4 LJV · Arts. 455 y ss. LEC"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación en plazo?",
   "opciones": [
    {
     "texto": "Sí: Recurso interpuesto",
     "tono": "t-nota",
     "destino": "recurso_pendiente"
    },
    {
     "texto": "No: Resolución firme",
     "tono": "t-nota",
     "destino": "inscripcion"
    }
   ]
  },
  "recurso_pendiente": {
   "fase": 5,
   "titulo": "Trámite del recurso de apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia da traslado a las demás partes por diez días para oposición o impugnación (art. 461.1 LEC) y resuelve el recurso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.4 LJV · Arts. 458 a 465 LEC"
    }
   ],
   "pregunta": "¿La Audiencia estima el recurso?",
   "opciones": [
    {
     "texto": "Sí: Se revoca o modifica la resolución",
     "tono": "t-nota",
     "destino": "resolucion_estimada"
    },
    {
     "texto": "No: Se confirma la resolución",
     "tono": "t-nota",
     "destino": "inscripcion"
    }
   ]
  },
  "inscripcion": {
   "fase": 5,
   "titulo": "Inscripción registral y comunicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la resolución constituye un patrimonio protegido y el administrador no es el propio beneficiario, se comunica al Registro Civil para su inscripción, igual que las demás circunstancias del patrimonio y la designación y modificación de administradores (art. 58.5 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Se inscribe en el registro individual de la persona con discapacidad (art. 76 LRC)."
    },
    {
     "tipo": "lista",
     "titulo": "Además (art. 58.5, párrafo segundo, LJV)",
     "items": [
      "Si hay bienes registrables, se entrega a la parte testimonio de la resolución para su inscripción o anotación en los registros respectivos",
      "Si hay participaciones o acciones, a las gestoras de instituciones de inversión colectiva o a las sociedades mercantiles"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.5 LJV · Art. 76 LRC"
    }
   ],
   "pregunta": "¿El patrimonio incluye bienes registrables?",
   "opciones": [
    {
     "texto": "Sí: Bienes inmuebles, derechos reales o valores",
     "tono": "t-nota",
     "destino": "inscripcion_registrables"
    },
    {
     "texto": "No: Solo bienes no registrables o efectivo",
     "tono": "t-nota",
     "destino": "fin_exitoso"
    }
   ]
  },
  "inscripcion_registrables": {
   "fase": 5,
   "titulo": "Inscripción de bienes registrables",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se entrega a la parte testimonio de la resolución para su inscripción o anotación en los registros de los bienes, o para su presentación a las gestoras o sociedades (art. 58.5, párrafo segundo, LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La remisión de mandamientos a otros registros se hace por medios electrónicos (art. 22.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 58.5 LJV · Art. 22.2 LJV · Arts. 2 y 18 LH"
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "fin_exitoso": {
   "fase": 5,
   "titulo": "Fin: medida acordada y comunicada",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluye el expediente con la medida acordada y las comunicaciones registrales hechas."
    },
    {
     "tipo": "lista",
     "titulo": "Después",
     "items": [
      "Si el administrador no es el beneficiario, rinde cuentas al Fiscal cuando lo determine y, en todo caso, anualmente (art. 7.2 Ley 41/2003)",
      "El Fiscal supervisa la administración y puede instar nuevas medidas (art. 7.1 Ley 41/2003; art. 56 d) LJV)",
      "Los bienes y sus frutos se destinan a las necesidades vitales del beneficiario o al mantenimiento de la productividad del patrimonio (art. 5.4 Ley 41/2003)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 5 y 7 Ley 41/2003 · Arts. 56 y 58 LJV"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "<strong>Referencias normativas</strong><br>Arts. 2, 13 a 22 y 56 a 58 LJV<br>Arts. 1 a 7 Ley 41/2003<br>Art. 76 LRC<br>Arts. 458 y 461 LEC"
});
