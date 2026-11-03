/* Migrado por tools/migrate.js desde sources/actual/G20.json; revisado con el BOE (registro: docs/revision/ljv-sucesorio.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-sucesorio",
 "ley": "LJV",
 "titulo": "De los expedientes de jurisdicción voluntaria relativos al Derecho sucesorio",
 "corto": "Título IV · Derecho sucesorio",
 "articulos": [
  "91",
  "92",
  "93",
  "94",
  "95"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G20"
 },
 "fases": [
  "Inicio y clasificación",
  "Competencia y postulación",
  "Admisión y citación",
  "Comparecencia",
  "Resolución",
  "Recursos y cierre"
 ],
 "actores": {
  "ambos": "LAJ / Juez",
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Recepción y clasificación inicial de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia (LAJ) recibe la solicitud de expediente de jurisdicción voluntaria en materia sucesoria, la registra y efectúa un primer examen para determinar a qué Capítulo del Título IV de la Ley 15/2015 corresponde."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria (LJV). Título IV \"De los expedientes de jurisdicción voluntaria relativos al Derecho sucesorio\", arts. 91 a 95 LJV; normas comunes, arts. 13 a 22 LJV."
    },
    {
     "tipo": "nota",
     "texto": "El Título IV comprende tres capítulos: Capítulo I (Albaceazgo, art. 91), Capítulo II (Contadores-partidores dativos, art. 92) y Capítulo III (Aceptación y repudiación de la herencia, arts. 93 a 95). La clasificación inicial determina el itinerario procedimental completo."
    },
    {
     "tipo": "lista",
     "titulo": "Comprobaciones de registro y reparto",
     "items": [
      "Verificar que el objeto de la solicitud es propio de jurisdicción voluntaria y no contencioso",
      "Identificar inequívocamente el Capítulo del Título IV aplicable al supuesto",
      "Comprobar acreditación documental del fallecimiento del causante (certificación del Registro Civil) y título sucesorio (testamento o declaración de herederos)",
      "Anotar entrada, asignar número de expediente y efectuar el reparto al órgano judicial competente"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿A qué Capítulo del Título IV corresponde el expediente?",
   "opciones": [
    {
     "texto": "Capítulo I — Albaceazgo (art. 91 LJV)",
     "tono": "t-nota",
     "destino": "alb_clasif"
    },
    {
     "texto": "Capítulo II — Contadores-partidores dativos (art. 92 LJV)",
     "tono": "t-nota",
     "destino": "cp_clasif"
    },
    {
     "texto": "Capítulo III — Aceptación y repudiación de la herencia (arts. 93 a 95 LJV)",
     "tono": "t-nota",
     "destino": "acep_clasif"
    }
   ]
  },
  "alb_clasif": {
   "fase": 0,
   "titulo": "Clasificación del supuesto concreto de albaceazgo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 91.1 LJV enumera cuatro supuestos distintos sujetos a este capítulo. La clasificación es decisiva porque el artículo 91.4 LJV distribuye la competencia funcional: la renuncia del albacea y la prórroga del plazo las resuelve el LAJ; los demás supuestos (remoción, rendición de cuentas y autorización de disposición) quedan reservados al Juez."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.1 y 91.4 LJV; en cuanto al derecho sustantivo, arts. 898, 899, 903, 904, 905, 906, 907, 910 y 911 del Código Civil."
    },
    {
     "tipo": "nota",
     "texto": "Todos los supuestos comparten el mismo fuero (art. 91.3 LJV) y la misma regla de postulación (art. 91.2 LJV). Lo único que varía es el órgano decisor."
    }
   ],
   "pregunta": "¿Cuál es el supuesto concreto solicitado?",
   "opciones": [
    {
     "texto": "Renuncia del albacea a su cargo (art. 91.1.1.º) — resuelve el LAJ",
     "tono": "t-nota",
     "destino": "alb_comp_laj"
    },
    {
     "texto": "Prórroga del plazo del albaceazgo (art. 91.1.1.º) — resuelve el LAJ",
     "tono": "t-nota",
     "destino": "alb_comp_laj"
    },
    {
     "texto": "Remoción del albacea de su cargo (art. 91.1.2.º) — resuelve el Juez",
     "tono": "t-nota",
     "destino": "alb_comp_juez"
    },
    {
     "texto": "Rendición de cuentas del albacea (art. 91.1.3.º) — resuelve el Juez",
     "tono": "t-nota",
     "destino": "alb_comp_juez"
    },
    {
     "texto": "Autorización para actos de disposición sobre bienes de la herencia (art. 91.1.4.º) — resuelve el Juez",
     "tono": "t-nota",
     "destino": "alb_comp_juez"
    }
   ]
  },
  "cp_clasif": {
   "fase": 0,
   "titulo": "Clasificación del supuesto de contador-partidor dativo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 92.1 LJV distingue tres supuestos: (a) designación del contador-partidor dativo en los casos del art. 1057 CC; (b) renuncia del contador-partidor nombrado o prórroga del plazo fijado; y (c) aprobación de la partición realizada por el contador-partidor cuando no haya sido confirmada expresamente por todos los herederos y legatarios."
    },
    {
     "tipo": "ley",
     "texto": "Art. 92.1 y 92.3 LJV; art. 1057 CC (norma material clave); arts. 1056, 1058, 1059 y 1060 CC como normas conexas."
    },
    {
     "tipo": "nota",
     "texto": "En todos los supuestos del Capítulo II la competencia para tramitar y decidir corresponde al Letrado de la Administración de Justicia (art. 92.3 LJV); el Juez no interviene salvo por recurso."
    },
    {
     "tipo": "aviso",
     "texto": "La vía del art. 92 LJV es alternativa a la notarial: tanto el Notario como el LAJ pueden, a elección del solicitante, tramitar la designación y aprobación."
    }
   ],
   "pregunta": "¿Cuál es el supuesto concreto solicitado?",
   "opciones": [
    {
     "texto": "Designación del contador-partidor dativo (art. 92.1.a, art. 1057 CC)",
     "tono": "t-nota",
     "destino": "cp_designa_50"
    },
    {
     "texto": "Renuncia del contador-partidor o prórroga del plazo (art. 92.1.b)",
     "tono": "t-nota",
     "destino": "cp_comp_renun"
    },
    {
     "texto": "Aprobación de la partición realizada por el contador-partidor (art. 92.1.c)",
     "tono": "t-nota",
     "destino": "cp_comp_aprob"
    }
   ]
  },
  "acep_clasif": {
   "fase": 0,
   "titulo": "Clasificación del supuesto de aceptación o repudiación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 93 LJV delimita los supuestos en que la validez de la aceptación o repudiación de la herencia precisa autorización o aprobación judicial. La identificación del supuesto condiciona el fuero (general o especial de protección), la legitimación, la eventual intervención del Ministerio Fiscal y las consecuencias de la denegación."
    },
    {
     "tipo": "nota",
     "texto": "Legitimación (art. 94.2 LJV): los llamados a la herencia y los acreedores del heredero que la repudió; si son menores, sus representantes y, en su defecto, el Fiscal; si tienen medidas de apoyo representativo para estos actos, quienes ejerzan el apoyo; y el defensor judicial si no se le dio la autorización en el nombramiento."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 93, 94 y 95 LJV · Arts. 166, 287, 996, 1001 y 1010 y ss. CC"
    },
    {
     "tipo": "nota",
     "texto": "La intervención preceptiva del Ministerio Fiscal (art. 94.3 LJV) se limita a los supuestos a) y b) del art. 93.2 (progenitores en nombre de menores y tutores/curadores/defensores judiciales)."
    },
    {
     "tipo": "aviso",
     "texto": "Si se deniega la autorización o aprobación para aceptar sin beneficio de inventario o para repudiar, por imperativo del art. 95.2 LJV sólo podrá aceptarse a beneficio de inventario. Esta consecuencia debe anticiparse al solicitante."
    }
   ],
   "pregunta": "¿Cuál es el supuesto concreto solicitado?",
   "opciones": [
    {
     "texto": "Progenitores que repudian la herencia o legados en nombre de hijos menores de 16 años, o de mayores de esa edad que no consienten (art. 93.2.a) — interviene MF, fuero especial",
     "tono": "t-nota",
     "destino": "acep_comp_esp"
    },
    {
     "texto": "Tutores, curadores representativos o defensores judiciales que aceptan sin beneficio de inventario o repudian (art. 93.2.b) — interviene MF, fuero especial",
     "tono": "t-nota",
     "destino": "acep_comp_esp"
    },
    {
     "texto": "Acreedores del heredero que ha repudiado en su perjuicio, para aceptar en su nombre (art. 93.2.c y art. 1001 CC) — fuero general",
     "tono": "t-nota",
     "destino": "acep_comp_gen"
    },
    {
     "texto": "Aprobación judicial de la repudiación por personas jurídicas (art. 93.3) — fuero general",
     "tono": "t-nota",
     "destino": "acep_comp_gen"
    }
   ]
  },
  "alb_comp_laj": {
   "fase": 1,
   "titulo": "Competencia territorial y funcional (albaceazgo — resuelve el LAJ)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expediente de renuncia del albacea a su cargo o de prórroga del plazo del albaceazgo. El artículo 91.4 LJV reserva su resolución al Letrado de la Administración de Justicia. La competencia territorial se determina conforme al art. 91.3 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.3 y 4 LJV · Art. 86.5 j) LOPJ"
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales (a elección del solicitante)",
     "items": [
      "Juzgado del último domicilio o residencia habitual del causante, si estaban en España",
      "Juzgado donde estuviera la mayor parte del patrimonio del causante, con independencia de su naturaleza",
      "Juzgado del lugar en que hubiera fallecido el causante, si fue en España",
      "En defecto de todos ellos: Juzgado del domicilio del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La decisión de la renuncia y la prórroga corresponde al LAJ (art. 91.4 LJV). Hoy, la Sección Civil del Tribunal de Instancia (art. 85.2.º LOPJ): el Título IV es materia sucesoria, no de personas y familia del art. 86.5 j) LOPJ, aunque el llamado sea menor o tenga medidas de apoyo."
    }
   ],
   "siguiente": "alb_postulacion"
  },
  "alb_comp_juez": {
   "fase": 1,
   "titulo": "Competencia territorial y funcional (albaceazgo — resuelve el Juez)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expediente de remoción del albacea, rendición de cuentas o autorización para actos de disposición sobre bienes de la herencia. Conforme al artículo 91.4 LJV, la decisión corresponde al Juez; la tramitación material sigue a cargo del LAJ en aplicación de las normas comunes (arts. 13 a 22 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección Civil del Tribunal de Instancia (art. 85.2.º LOPJ): el Título IV es materia sucesoria, no de personas y familia del art. 86.5 j) LOPJ, aunque el llamado sea menor o tenga medidas de apoyo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.3 y 4 LJV · Art. 86.5 j) LOPJ"
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales (a elección del solicitante)",
     "items": [
      "Juzgado del último domicilio o residencia habitual del causante, si estaban en España",
      "Juzgado donde estuviera la mayor parte del patrimonio del causante",
      "Juzgado del lugar en que hubiera fallecido el causante, si fue en España",
      "En defecto de todos ellos: Juzgado del domicilio del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Pese a que la decisión final corresponde al Juez, la tramitación procedimental (admisión, citaciones, celebración de la comparecencia, notificaciones) recae sobre el LAJ. El LAJ da cuenta al Juez para que resuelva."
    }
   ],
   "siguiente": "alb_postulacion"
  },
  "alb_postulacion": {
   "fase": 1,
   "titulo": "Verificación de la postulación procesal (art. 91.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 91.2 LJV establece que en los expedientes del Capítulo I no será preceptiva la intervención de Abogado ni de Procurador cuando la cuantía del haber hereditario sea inferior a 6.000 euros."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.2 LJV. Norma común conexa: art. 14 LJV (contenido de la solicitud)."
    }
   ],
   "pregunta": "¿Cuál es la cuantía del haber hereditario?",
   "opciones": [
    {
     "texto": "Inferior a 6.000 € — no es preceptiva la intervención de Abogado ni Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    },
    {
     "texto": "Igual o superior a 6.000 € — intervención preceptiva de Abogado y Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    }
   ]
  },
  "cp_designa_50": {
   "fase": 1,
   "titulo": "Verificación del porcentaje mínimo del 50 % del haber (art. 1057 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 1057 CC exige, como presupuesto ineludible para el nombramiento del contador-partidor dativo, que la petición sea formulada por herederos y legatarios que representen, al menos, el 50 % del haber hereditario. La falta de este presupuesto determina la inadmisión del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Además: que no haya testamento, contador-partidor designado en él o que el cargo esté vacante; y se cita a los demás interesados si su domicilio es conocido (art. 1057, párrafo segundo, CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 1057, párrafo segundo, CC; art. 92.1.a LJV; art. 17 LJV (resolución sobre admisibilidad)."
    },
    {
     "tipo": "lista",
     "titulo": "Comprobaciones previas",
     "items": [
      "Identificar a la totalidad de herederos y legatarios llamados",
      "Calcular la cuota que representan los solicitantes respecto del haber hereditario",
      "Comprobar que los solicitantes alcanzan, en conjunto, al menos el 50 % del haber",
      "Exigir, en su caso, inventario o relación de bienes y cálculo justificado de los porcentajes"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si el testador hubiera nombrado contador-partidor y este no estuviera vacante, no procede la designación dativa, sino en su caso los demás supuestos del art. 92.1 (renuncia, prórroga o aprobación)."
    }
   ],
   "pregunta": "¿Los solicitantes representan al menos el 50 % del haber hereditario?",
   "opciones": [
    {
     "texto": "Sí, representan al menos el 50 % del haber",
     "tono": "t-ok",
     "destino": "cp_comp_designa"
    },
    {
     "texto": "No alcanzan el 50 % del haber hereditario",
     "tono": "t-aviso",
     "destino": "fin_inadmision_50"
    }
   ]
  },
  "cp_comp_designa": {
   "fase": 1,
   "titulo": "Competencia territorial y funcional (contador-partidor — designación)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La tramitación y decisión corresponden al LAJ (art. 92.3 LJV), que también fija los fueros. Hoy, la Sección Civil del Tribunal de Instancia (art. 85.2.º LOPJ): el Título IV es materia sucesoria, no de personas y familia del art. 86.5 j) LOPJ, aunque el llamado sea menor o tenga medidas de apoyo."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 92.1.a y 92.3 LJV; art. 1057 CC."
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales (a elección del solicitante)",
     "items": [
      "Juzgado del último domicilio o residencia habitual del causante, si estaban en España",
      "Juzgado donde estuviera la mayor parte del patrimonio del causante",
      "Juzgado del lugar en que hubiera fallecido el causante, si fue en España",
      "En defecto de todos ellos: Juzgado del domicilio del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Notario dispone de competencia alternativa para esta misma designación (art. 1057, párrafo segundo, CC). La elección entre vía notarial y judicial corresponde al solicitante."
    }
   ],
   "siguiente": "cp_postulacion"
  },
  "cp_comp_renun": {
   "fase": 1,
   "titulo": "Competencia territorial y funcional (contador-partidor — renuncia o prórroga)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expediente de renuncia del contador-partidor nombrado o de prórroga del plazo fijado para la realización de su encargo. Tramitación y decisión por el LAJ (art. 92.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 92.1.b y 92.3 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales",
     "items": [
      "Juzgado del último domicilio o residencia habitual del causante, si estaban en España",
      "Juzgado donde estuviera la mayor parte del patrimonio",
      "Juzgado del lugar en que hubiera fallecido el causante, si fue en España",
      "En defecto de todos ellos: Juzgado del domicilio del solicitante"
     ],
     "marcar": true
    }
   ],
   "siguiente": "cp_postulacion"
  },
  "cp_comp_aprob": {
   "fase": 1,
   "titulo": "Competencia territorial y funcional (contador-partidor — aprobación de la partición)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Aprobación de la partición realizada por el contador-partidor cuando no haya sido confirmada expresamente por todos los herederos y legatarios. Tramitación y decisión por el LAJ (art. 92.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 92.1.c y 92.3 LJV; art. 1057, párrafo segundo, CC."
    },
    {
     "tipo": "nota",
     "texto": "Si la partición ha sido confirmada expresamente por todos los herederos y legatarios, NO es necesaria la aprobación del LAJ y el expediente no procede."
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales",
     "items": [
      "Juzgado del último domicilio o residencia habitual del causante, si estaban en España",
      "Juzgado donde estuviera la mayor parte del patrimonio",
      "Juzgado del lugar en que hubiera fallecido el causante, si fue en España",
      "En defecto de todos ellos: Juzgado del domicilio del solicitante"
     ],
     "marcar": true
    }
   ],
   "siguiente": "cp_postulacion"
  },
  "cp_postulacion": {
   "fase": 1,
   "titulo": "Verificación de la postulación procesal (art. 92.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Regla idéntica a la del albaceazgo: no será preceptiva la intervención de Abogado ni Procurador cuando la cuantía del haber hereditario sea inferior a 6.000 euros."
    },
    {
     "tipo": "ley",
     "texto": "Art. 92.2 LJV."
    }
   ],
   "pregunta": "¿Cuál es la cuantía del haber hereditario?",
   "opciones": [
    {
     "texto": "Inferior a 6.000 € — no preceptiva la intervención de Abogado ni Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    },
    {
     "texto": "Igual o superior a 6.000 € — intervención preceptiva de Abogado y Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    }
   ]
  },
  "acep_comp_esp": {
   "fase": 1,
   "titulo": "Competencia territorial ESPECIAL de protección (menores y personas con medidas de apoyo)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando sea llamado a la herencia un menor o una persona con medidas judiciales de apoyo a personas con discapacidad, el artículo 94.1, párrafo segundo, LJV atribuye la competencia al Juzgado del lugar donde estos residan. Hoy, la Sección Civil del Tribunal de Instancia (art. 85.2.º LOPJ): el Título IV es materia sucesoria, no de personas y familia del art. 86.5 j) LOPJ, aunque el llamado sea menor o tenga medidas de apoyo. Este fuero prevalece sobre el fuero general del art. 94.1 párrafo primero."
    },
    {
     "tipo": "ley",
     "texto": "Art. 94.1, párrafo segundo, y 94.3 LJV · Arts. 166 y 287 CC · Art. 86.5 j) LOPJ"
    },
    {
     "tipo": "aviso",
     "texto": "En estos supuestos siempre es competente el Juez (arts. 93.2 y 95.1 LJV), aunque la tramitación sea responsabilidad del LAJ. La intervención del Ministerio Fiscal es preceptiva (art. 94.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Comprobaciones competenciales",
     "items": [
      "Acreditar la condición de menor o de persona con medidas judiciales de apoyo",
      "Determinar el lugar de residencia efectiva del menor o de la persona protegida",
      "Si la residencia está en distinto partido judicial que el domicilio del causante, prevalece el fuero de protección",
      "Confirmar que no concurre remisión a otro órgano por razones orgánicas"
     ],
     "marcar": true
    }
   ],
   "siguiente": "acep_postulacion"
  },
  "acep_comp_gen": {
   "fase": 1,
   "titulo": "Competencia territorial GENERAL (aceptación o repudiación — acreedores y personas jurídicas)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 94.1, párrafo primero, LJV establece el fuero general para los expedientes del Capítulo III cuando no resulte aplicable el fuero especial de protección del párrafo segundo. La competencia para decidir corresponde al Juez (art. 95.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección Civil del Tribunal de Instancia (art. 85.2.º LOPJ): el Título IV es materia sucesoria, no de personas y familia del art. 86.5 j) LOPJ, aunque el llamado sea menor o tenga medidas de apoyo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 94.1 LJV; art. 95.1 LJV; art. 1001 CC (para la acción del acreedor del heredero repudiante); art. 93.3 LJV (para personas jurídicas)."
    },
    {
     "tipo": "lista",
     "titulo": "Fueros competenciales",
     "items": [
      "Juzgado del último domicilio del causante",
      "En su defecto, el de la última residencia del causante",
      "Si tuvo su último domicilio en el extranjero: el de su último domicilio en España o donde estuviera la mayor parte de sus bienes, a elección del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En estos dos supuestos (93.2.c acreedores y 93.3 personas jurídicas) NO es preceptiva la intervención del Ministerio Fiscal."
    }
   ],
   "siguiente": "acep_postulacion"
  },
  "acep_postulacion": {
   "fase": 1,
   "titulo": "Verificación de la postulación procesal (art. 94.4 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Regla idéntica a la del albaceazgo y los contadores-partidores: la intervención de Abogado y Procurador no es preceptiva cuando la cuantía del haber hereditario sea inferior a 6.000 euros."
    },
    {
     "tipo": "ley",
     "texto": "Art. 94.4 LJV."
    }
   ],
   "pregunta": "¿Cuál es la cuantía del haber hereditario?",
   "opciones": [
    {
     "texto": "Inferior a 6.000 € — no preceptiva la intervención de Abogado ni Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    },
    {
     "texto": "Igual o superior a 6.000 € — intervención preceptiva de Abogado y Procurador",
     "tono": "t-nota",
     "destino": "examen_solicitud"
    }
   ]
  },
  "examen_solicitud": {
   "fase": 2,
   "titulo": "Examen de la solicitud inicial (art. 14 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ examina de oficio la competencia (art. 16.1 LJV) y si la solicitud reúne los requisitos del artículo 14 LJV, con los documentos necesarios (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 14, 16 y 17 LJV (normas comunes)."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos del art. 14 LJV (contenido de la solicitud)",
     "items": [
      "Datos y circunstancias de identificación del solicitante",
      "Indicación del expediente que se promueve y del objeto concreto",
      "Exposición ordenada de los hechos y fundamentos jurídicos",
      "Petición que se formula, con claridad y precisión",
      "Documentos que se acompañan (certificado de defunción, certificado del Registro de Actos de Última Voluntad, testamento o declaración de herederos, acreditación del cargo cuando proceda, etc.)",
      "Identificación de los demás interesados y sus domicilios (art. 14.2 LJV)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿La solicitud cumple los requisitos del art. 14 LJV?",
   "opciones": [
    {
     "texto": "Sí, la solicitud cumple íntegramente los requisitos — procede la admisión",
     "tono": "t-ok",
     "destino": "admision_tramite"
    },
    {
     "texto": "No cumple o presenta defectos subsanables — procede requerimiento",
     "tono": "t-plazo",
     "destino": "subsanacion"
    },
    {
     "texto": "Entiende que falta competencia o que no es admisible",
     "tono": "t-aviso",
     "destino": "falta_admisibilidad"
    }
   ]
  },
  "falta_admisibilidad": {
   "fase": 2,
   "titulo": "Falta de competencia o solicitud no admisible",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si decide el LAJ (renuncia o prórroga del albacea; contador-partidor): dicta decreto de archivo si no es admisible; si falta competencia, previa audiencia del Ministerio Fiscal y del solicitante, puede acordar el archivo (objetiva) o la remisión al órgano competente (territorial)."
    },
    {
     "tipo": "info",
     "texto": "Si decide el Juez (los demás supuestos): el LAJ le da cuenta y el Juez acuerda lo que proceda; en la falta de competencia, tras oír al Ministerio Fiscal y al solicitante."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.2 y 16.3 LJV · Art. 17.1 LJV"
    }
   ],
   "pregunta": "¿Qué se acuerda?",
   "opciones": [
    {
     "texto": "Se admite a trámite",
     "tono": "t-ok",
     "destino": "admision_tramite"
    },
    {
     "texto": "Archivo o remisión",
     "tono": "t-aviso",
     "destino": "fin_no_admitida"
    }
   ]
  },
  "subsanacion": {
   "fase": 2,
   "titulo": "Requerimiento de subsanación de defectos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ requiere al solicitante para que subsane los defectos de la solicitud (postulación, identificación de interesados, documentación, etc.) (art. 16.4 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días para subsanar (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si no se subsana, en los expedientes que decide el LAJ (renuncia o prórroga del albacea, contador-partidor) este tiene por no presentada la solicitud y archiva; en los que decide el Juez, le da cuenta para que acuerde lo procedente (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    }
   ],
   "pregunta": "¿Se ha subsanado en plazo?",
   "opciones": [
    {
     "texto": "Sí, se han subsanado los defectos en plazo",
     "tono": "t-ok",
     "destino": "admision_tramite"
    },
    {
     "texto": "No se han subsanado en plazo o la subsanación resulta insuficiente",
     "tono": "t-aviso",
     "destino": "fin_archivo_subsanacion"
    }
   ]
  },
  "admision_tramite": {
   "fase": 2,
   "titulo": "Decreto de admisión a trámite (art. 17 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto admitiendo el expediente a trámite, acordando las actuaciones que procedan conforme a las normas comunes y específicas del capítulo correspondiente. En particular, identifica a los interesados que han de ser citados y cita a la comparecencia a quienes hayan de intervenir (art. 17.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17 LJV (admisión a trámite y decisión sobre la práctica de las actuaciones)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido habitual del decreto de admisión (práctica)",
     "items": [
      "Declaración formal de admisión a trámite",
      "Identificación de los interesados que han de ser citados",
      "Acuerdo sobre la práctica de las actuaciones iniciales",
      "Señalamiento de día y hora para la comparecencia prevista en el art. 18 LJV",
      "En supuestos del art. 93.2.a) y b) LJV: traslado al Ministerio Fiscal para que informe e intervenga"
     ],
     "marcar": true
    }
   ],
   "siguiente": "citacion_interesados"
  },
  "citacion_interesados": {
   "fase": 2,
   "titulo": "Citación de los interesados (arts. 17.3 y 18 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ cita a todos aquellos que, según la Ley y el caso, deban intervenir en el expediente y puedan resultar afectados por la resolución. La citación se efectúa con al menos quince días de antelación a la comparecencia (art. 17.3 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Antelación mínima de la citación a los interesados: 15 días respecto a la comparecencia."
    },
    {
     "tipo": "plazo",
     "texto": "Quien vaya a oponerse lo hace en los cinco días siguientes a su citación; se da traslado inmediato al solicitante (art. 17.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 14.2, 17.2 y 17.3 LJV"
    },
    {
     "tipo": "lista",
     "titulo": "Interesados a citar según el tipo de expediente",
     "items": [
      "Albaceazgo: albacea afectado, herederos y legatarios",
      "Contadores-partidores: demás herederos y legatarios no solicitantes, si su domicilio es conocido (art. 1057 CC)",
      "Aceptación/repudiación por progenitores: el otro progenitor, si no comparece con el solicitante",
      "Aceptación/repudiación por tutor/curador/defensor judicial: demás interesados en la herencia",
      "Acreedores del heredero repudiante: heredero repudiante y demás interesados en la herencia",
      "Personas jurídicas: órgano de representación y fiscal, en su caso"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La citación avisa de que se acuda con los medios de prueba de que se intente valerse, y se entrega copia de la resolución, de la solicitud y de los documentos (art. 17.3 LJV)."
    }
   ],
   "siguiente": "mf_check"
  },
  "mf_check": {
   "fase": 2,
   "titulo": "Verificación de la intervención preceptiva del Ministerio Fiscal (art. 94.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 94.3 LJV limita la intervención preceptiva del Ministerio Fiscal a los supuestos a) y b) del artículo 93.2: progenitores que repudian en nombre de menores y tutores/curadores/defensores judiciales que aceptan sin beneficio de inventario o repudian. En el resto de expedientes del Título IV la intervención del MF no es, con carácter general, preceptiva."
    },
    {
     "tipo": "ley",
     "texto": "Art. 94.3 LJV · Arts. 166 y 287 CC"
    },
    {
     "tipo": "nota",
     "texto": "La misión general del MF de defender la legalidad y el interés público está en los arts. 1 y 3 EOMF; su intervención en el expediente, en el art. 4 LJV."
    }
   ],
   "pregunta": "¿Es preceptiva la intervención del Ministerio Fiscal en este expediente?",
   "opciones": [
    {
     "texto": "Sí — supuesto del art. 93.2.a o 93.2.b LJV (menores, tutores, curadores o defensores judiciales)",
     "tono": "t-plazo",
     "destino": "mf_emplazamiento"
    },
    {
     "texto": "No — cualquier otro supuesto del Título IV",
     "tono": "t-nota",
     "destino": "senalamiento_comparecencia"
    }
   ]
  },
  "mf_emplazamiento": {
   "fase": 2,
   "titulo": "Emplazamiento del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ da traslado al Ministerio Fiscal para que informe y, en su caso, intervenga en la comparecencia. El emplazamiento se verifica con todas las actuaciones practicadas hasta el momento y se le cita a la comparecencia con idéntica antelación que al resto de interesados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 94.3 LJV"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones a practicar con el MF",
     "items": [
      "Traslado formal del expediente",
      "Citación para la comparecencia",
      "Solicitud de informe previo en los casos del art. 93.2.a y b, cuando proceda",
      "Constancia en autos de la intervención del MF en todas las actuaciones"
     ],
     "marcar": true
    }
   ],
   "siguiente": "senalamiento_comparecencia"
  },
  "senalamiento_comparecencia": {
   "fase": 2,
   "titulo": "Señalamiento de la comparecencia (art. 18 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ fija día y hora para la comparecencia al admitir el expediente, de modo que las citaciones los indiquen y se hagan con quince días de antelación (art. 17.3 LJV). En la misma resolución puede acordar la práctica de las pruebas o actuaciones que estime necesarias."
    },
    {
     "tipo": "plazo",
     "texto": "La comparecencia se celebra dentro de los treinta días siguientes a la admisión (art. 18.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 17.3 y 18.1 LJV"
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia se celebra con la presencia del LAJ o, en los supuestos en que la decisión corresponda al Juez (albaceazgo salvo renuncia/prórroga; toda la aceptación/repudiación), con la presencia del órgano que debe resolver."
    }
   ],
   "siguiente": "celebracion_comparecencia"
  },
  "celebracion_comparecencia": {
   "fase": 3,
   "titulo": "Celebración de la comparecencia (art. 18 LJV)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el día y hora señalados se celebra la comparecencia con asistencia del solicitante, los interesados citados y, en su caso, el Ministerio Fiscal. Se oyen las alegaciones, se examina la documentación aportada y se practican las pruebas admitidas. El resultado de la comparecencia condiciona la continuación del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Si el expediente afecta a una persona menor o con discapacidad: las diligencias relativas a sus intereses se practican en el mismo acto o en los diez días siguientes; su audiencia puede hacerse en acto separado, con asistencia del Ministerio Fiscal, y el LAJ levanta acta de la exploración (art. 18.2.4.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 6.2, 17.3 y 18 LJV"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones a practicar en la comparecencia",
     "items": [
      "Comprobación de asistencia y debida citación",
      "Ratificación del solicitante y audiencia de los demás interesados",
      "Alegaciones y, en su caso, oposición formalizada",
      "Práctica de pruebas (documental, testifical, pericial)",
      "Informe del Ministerio Fiscal cuando sea preceptivo",
      "Levantamiento de acta suscrita por el LAJ"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La oposición no hace contencioso el expediente ni impide que continúe hasta su resolución, salvo que la ley lo prevea (art. 17.3 LJV), y la LJV no lo prevé en el Título IV. Si se acredita que el objeto se está sustanciando en un proceso jurisdiccional, se archiva el expediente y se remiten las actuaciones al tribunal (art. 6.2 LJV)."
    }
   ],
   "pregunta": "¿Qué resultado ha tenido la comparecencia?",
   "opciones": [
    {
     "texto": "Incomparecencia del solicitante",
     "tono": "t-aviso",
     "destino": "fin_archivo_incomparecencia"
    },
    {
     "texto": "Comparecencia sin oposición — procede dictar resolución",
     "tono": "t-ok",
     "destino": "resolucion_tipo"
    },
    {
     "texto": "Hay oposición: el expediente continúa hasta su resolución (art. 17.3 LJV)",
     "tono": "t-plazo",
     "destino": "resolucion_tipo"
    },
    {
     "texto": "Se acredita un proceso jurisdiccional sobre el mismo objeto: archivo (art. 6.2 LJV)",
     "tono": "t-aviso",
     "destino": "fin_remision_contencioso"
    }
   ]
  },
  "resolucion_tipo": {
   "fase": 4,
   "titulo": "Identificación del tipo de resolución a dictar",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En función del supuesto tramitado (elegido al inicio del expediente), la resolución adopta forma de decreto del LAJ o de auto del Juez, y se rige por un régimen específico. Confirme el tipo que corresponde para encauzar la resolución."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19 LJV (resolución); art. 91.4 LJV (albaceazgo); art. 92.3 LJV (contador-partidor); art. 95 LJV (aceptación/repudiación)."
    }
   ],
   "pregunta": "¿Qué tipo de resolución corresponde dictar?",
   "opciones": [
    {
     "texto": "Decreto del LAJ — Albaceazgo: renuncia o prórroga del albacea (art. 91.4 LJV)",
     "tono": "t-nota",
     "destino": "resolucion_alb_laj"
    },
    {
     "texto": "Auto del Juez — Albaceazgo: remoción, rendición de cuentas o autorización de disposición (art. 91.4 LJV)",
     "tono": "t-nota",
     "destino": "resolucion_alb_juez"
    },
    {
     "texto": "Decreto del LAJ — Contador-partidor: designación dativa (art. 92.1.a)",
     "tono": "t-nota",
     "destino": "resolucion_cp_designa"
    },
    {
     "texto": "Decreto del LAJ — Contador-partidor: renuncia o prórroga (art. 92.1.b)",
     "tono": "t-nota",
     "destino": "resolucion_cp_renun"
    },
    {
     "texto": "Decreto del LAJ — Contador-partidor: aprobación de la partición (art. 92.1.c)",
     "tono": "t-nota",
     "destino": "resolucion_cp_aprob"
    },
    {
     "texto": "Auto del Juez — Aceptación o repudiación de la herencia (arts. 93 a 95 LJV)",
     "tono": "t-nota",
     "destino": "resolucion_acep"
    }
   ]
  },
  "resolucion_alb_laj": {
   "fase": 4,
   "titulo": "Decreto del LAJ (albaceazgo: renuncia o prórroga)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto resolviendo sobre la renuncia del albacea o la prórroga del plazo del albaceazgo. La renuncia exige alegar causa justa (art. 899 CC). La prórroga la puede conceder el LAJ por el tiempo necesario cuando, transcurrido el plazo legal (un año, art. 904) y su prórroga, no se haya cumplido la voluntad del testador (art. 905 CC); los herederos y legatarios también pueden prorrogarlo de común acuerdo (art. 906 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.4 LJV · Arts. 899, 904, 905, 906 y 910 CC"
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del decreto",
     "items": [
      "Antecedentes de hecho (resumen de las actuaciones)",
      "Fundamentos de derecho (arts. 91 LJV y disposiciones del CC aplicables)",
      "Parte dispositiva (estimación o desestimación de la renuncia/prórroga)",
      "Efectos (fecha de eficacia, extensión temporal de la prórroga en su caso)",
      "Régimen de recursos (art. 20 LJV)",
      "Notificación a todos los comparecidos"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Sentido de la resolución?",
   "opciones": [
    {
     "texto": "Se estima la renuncia o la prórroga — decreto favorable",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "Se desestima la solicitud — decreto denegatorio",
     "tono": "t-plazo",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "resolucion_alb_juez": {
   "fase": 4,
   "titulo": "Auto del Juez (albaceazgo: remoción, rendición de cuentas o autorización de disposición)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto resolviendo sobre la remoción del albacea, la rendición de cuentas o la autorización para actos de disposición sobre bienes de la herencia. La remoción la aprecia el Juez (art. 910 CC); las cuentas se rinden al Juez cuando el albacea fue nombrado para invertir o distribuir los bienes (art. 907 CC); la autorización de actos de disposición, en los casos en que la legislación civil la exige (art. 91.1.4.º LJV; art. 903 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 91.4 LJV; art. 19 LJV; arts. 903, 907, 910 y 911 CC."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del auto",
     "items": [
      "Antecedentes y fundamentos",
      "Parte dispositiva (estimación o desestimación)",
      "En caso de rendición de cuentas: aprobación, reparos o requerimiento de complemento",
      "En caso de autorización de disposición: condiciones o salvaguardas patrimoniales",
      "Régimen de recursos (art. 20 LJV)",
      "Notificación"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Sentido del auto?",
   "opciones": [
    {
     "texto": "Estimación de la pretensión (removido, cuentas aprobadas o autorización concedida)",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "Desestimación de la pretensión",
     "tono": "t-plazo",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "resolucion_cp_designa": {
   "fase": 4,
   "titulo": "Decreto del LAJ (designación del contador-partidor dativo)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto sobre la designación del contador-partidor dativo en los términos del art. 1057 CC. Si procede, nombra a la persona que habrá de realizar la partición, fija plazo para el encargo y acuerda su aceptación del cargo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 92.1.a y 92.3 LJV; art. 1057 CC."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del decreto",
     "items": [
      "Constancia de la representación del ≥ 50 % del haber por los solicitantes",
      "Nombramiento del contador-partidor dativo según las reglas de la LEC para la designación de peritos (art. 1057 CC; art. 341 LEC: listas y sorteo)",
      "Fijación del plazo para ejecutar el encargo",
      "Acuerdo sobre aceptación del cargo y toma de posesión",
      "Régimen de recursos (art. 20 LJV)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Sentido del decreto?",
   "opciones": [
    {
     "texto": "Se designa contador-partidor dativo",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "No procede la designación (no concurren los presupuestos del art. 1057 CC)",
     "tono": "t-aviso",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "resolucion_cp_renun": {
   "fase": 4,
   "titulo": "Decreto del LAJ (renuncia o prórroga del plazo del contador-partidor)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ resuelve sobre la renuncia del contador-partidor nombrado o sobre la prórroga del plazo fijado para su encargo. Por analogía con el albacea: causa justa para la renuncia (art. 899 CC) y necesidad de la prórroga (art. 905 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 92.1.b y 92.3 LJV."
    }
   ],
   "pregunta": "¿Sentido del decreto?",
   "opciones": [
    {
     "texto": "Estimación (se acepta la renuncia o se concede la prórroga)",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "Desestimación",
     "tono": "t-plazo",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "resolucion_cp_aprob": {
   "fase": 4,
   "titulo": "Decreto del LAJ (aprobación de la partición)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ resuelve sobre la aprobación de la partición realizada por el contador-partidor dativo cuando no ha sido confirmada expresamente por todos los herederos y legatarios (art. 1057, párrafo segundo, CC). La aprobación requiere verificar que la partición se ajusta a Derecho y respeta los derechos hereditarios."
    },
    {
     "tipo": "ley",
     "texto": "Art. 92.1.c y 92.3 LJV; art. 1057, párrafo segundo, CC."
    }
   ],
   "pregunta": "¿Sentido del decreto?",
   "opciones": [
    {
     "texto": "Se aprueba la partición",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "Se deniega la aprobación (la partición no se ajusta a Derecho o lesiona derechos hereditarios)",
     "tono": "t-plazo",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "resolucion_acep": {
   "fase": 4,
   "titulo": "Auto del Juez (aceptación o repudiación — arts. 95.1 y 95.2 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, teniendo en cuenta la justificación ofrecida y valorando su conveniencia a los intereses de los llamados a la herencia, resuelve concediendo o denegando la autorización o aprobación solicitada (art. 95.1 LJV). La denegación produce un efecto legal específico previsto en el art. 95.2 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 95.1 y 95.2 LJV; en materia sustantiva, arts. 1010 a 1034 CC (beneficio de inventario)."
    },
    {
     "tipo": "aviso",
     "texto": "Art. 95.2 LJV: si se denegare la autorización o aprobación solicitada para aceptar sin beneficio de inventario o para repudiar la herencia, esta sólo podrá ser aceptada a beneficio de inventario."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del auto",
     "items": [
      "Valoración de la justificación ofrecida y de los intereses de los llamados",
      "Informe del Ministerio Fiscal si su intervención ha sido preceptiva",
      "Parte dispositiva expresa (concesión o denegación)",
      "En caso de denegación para aceptar sin beneficio de inventario o repudiar: advertencia del efecto del art. 95.2 LJV",
      "Régimen de recursos (art. 95.3 LJV: apelación con efectos suspensivos)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Sentido del auto?",
   "opciones": [
    {
     "texto": "Se concede la autorización o aprobación",
     "tono": "t-ok",
     "destino": "notificacion_recursos"
    },
    {
     "texto": "Se deniega (si se pidió aceptar sin beneficio de inventario o repudiar, solo podrá aceptarse a beneficio de inventario: art. 95.2 LJV)",
     "tono": "t-plazo",
     "destino": "notificacion_recursos"
    }
   ]
  },
  "notificacion_recursos": {
   "fase": 5,
   "titulo": "Notificación de la resolución y régimen de recursos (arts. 20 y 95.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Dictada la resolución, el LAJ la notifica a todos los comparecidos y al Ministerio Fiscal si intervino."
    },
    {
     "tipo": "lista",
     "titulo": "Recursos",
     "items": [
      "Decreto del LAJ que pone fin al expediente (renuncia o prórroga del albacea; contador-partidor): recurso de revisión ante el Juez, en cinco días (art. 20.2 LJV; art. 454 bis LEC)",
      "Auto del Juez (albaceazgo en los demás casos): apelación, sin efectos suspensivos salvo que la ley disponga otra cosa (art. 20.2 LJV)",
      "Auto del Juez sobre aceptación o repudiación: apelación con efectos suspensivos (art. 95.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Apelación: veinte días desde la notificación, ante la Audiencia Provincial (art. 458.1 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Para los recursos de revisión y apelación son necesarios Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 3.2, 20 y 95.3 LJV · Arts. 454 bis y 458 LEC"
    }
   ],
   "pregunta": "¿Se interpone recurso contra la resolución?",
   "opciones": [
    {
     "texto": "No se interpone recurso en plazo — la resolución deviene firme",
     "tono": "t-ok",
     "destino": "fin_firmeza"
    },
    {
     "texto": "Sí, se interpone recurso (revisión o apelación)",
     "tono": "t-nota",
     "destino": "tramitacion_apelacion"
    }
   ]
  },
  "tramitacion_apelacion": {
   "fase": 5,
   "titulo": "Tramitación del recurso",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La revisión se resuelve por el Juez del propio Juzgado (art. 454 bis LEC). La apelación se interpone ante la Audiencia Provincial, cuyo LAJ pide las actuaciones al Juzgado; este las remite y emplaza a las partes no recurrentes; la Audiencia da traslado para oposición o impugnación y resuelve (arts. 458 a 465 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "En el Capítulo III la resolución no se ejecuta mientras se resuelve la apelación (art. 95.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV · Art. 95.3 LJV · Arts. 454 bis y 458 a 465 LEC"
    }
   ],
   "pregunta": "¿Cuál ha sido el resultado del recurso?",
   "opciones": [
    {
     "texto": "Se estima el recurso (total o parcialmente)",
     "tono": "t-nota",
     "destino": "fin_apelacion_estimada"
    },
    {
     "texto": "Se desestima el recurso",
     "tono": "t-ok",
     "destino": "fin_apelacion_desestimada"
    },
    {
     "texto": "Desistimiento del recurrente",
     "tono": "t-ok",
     "destino": "fin_apelacion_desistimiento"
    }
   ]
  },
  "fin_inadmision_50": {
   "fase": 1,
   "titulo": "INADMISIÓN por falta del mínimo del 50 % del haber",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de designación del contador-partidor dativo (art. 92.1.a LJV) exige, por remisión al art. 1057 CC, que los solicitantes representen al menos el 50 % del haber hereditario. Al no cumplirse este presupuesto, el LAJ dicta decreto de inadmisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 1057, párrafo segundo, CC, 92.1.a LJV, 17 LJV."
    },
    {
     "tipo": "nota",
     "texto": "La inadmisión por este motivo no impide promover de nuevo el expediente si, con posterioridad, los solicitantes consiguen alcanzar el porcentaje legal."
    },
    {
     "tipo": "aviso",
     "texto": "Alternativamente, los herederos mayores de edad que no se entiendan pueden acudir al juicio de división judicial de la herencia (arts. 782 y siguientes LEC)."
    }
   ],
   "fin": "error"
  },
  "fin_no_admitida": {
   "fase": 2,
   "titulo": "Solicitud no admitida o falta de competencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se archiva el expediente o se remite al órgano competente. La resolución en que se aprecie la falta de competencia indica el órgano que se estima competente (art. 16.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16 y 17.1 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_archivo_subsanacion": {
   "fase": 2,
   "titulo": "ARCHIVO por falta de subsanación en plazo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurridos los cinco días sin subsanar, el LAJ tiene por no presentada la solicitud y archiva o, si decide el Juez, le da cuenta (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    },
    {
     "tipo": "nota",
     "texto": "El archivo por esta causa no produce cosa juzgada: puede promoverse nuevamente el expediente con la solicitud correctamente formulada y los documentos pertinentes."
    }
   ],
   "fin": "error"
  },
  "fin_archivo_incomparecencia": {
   "fase": 3,
   "titulo": "ARCHIVO por incomparecencia del solicitante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante no asiste, quien deba resolver (Juez o LAJ) acuerda el archivo y le tiene por desistido (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2.1.ª LJV"
    },
    {
     "tipo": "nota",
     "texto": "Cabe nueva solicitud si subsisten los presupuestos materiales. El archivo por esta causa no prejuzga el fondo del asunto."
    }
   ],
   "fin": "neutral"
  },
  "fin_remision_contencioso": {
   "fase": 3,
   "titulo": "Archivo: el objeto se sustancia en un proceso jurisdiccional",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acreditada la presentación de la demanda de un proceso jurisdiccional sobre el mismo objeto, se archiva el expediente y se remiten las actuaciones al tribunal que conozca de ese proceso (art. 6.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Procesos frecuentes",
     "items": [
      "División judicial de la herencia (arts. 782 y ss. LEC)",
      "Juicio declarativo sobre la partición o las cuentas del albacea"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La resolución de un expediente de jurisdicción voluntaria tampoco impide un proceso posterior con el mismo objeto (art. 19.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 6.2 y 19.4 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_firmeza": {
   "fase": 5,
   "titulo": "RESOLUCIÓN FIRME — no recurrida",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido el plazo para recurrir sin interposición de recurso, la resolución deviene firme. El LAJ procede a declarar la firmeza y a realizar las actuaciones de ejecución, comunicación y archivo que correspondan."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV; art. 207 LEC (cosa juzgada formal) en cuanto supletorio; art. 19 LJV (efectos de la resolución)."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Diligencia de constancia de la firmeza",
      "Expedición de testimonios para los interesados",
      "Comunicaciones a Registros (Civil, Mercantil, de la Propiedad) cuando proceda",
      "Remisión del expediente a archivo"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Efectos según el expediente tramitado: los constantes en la parte dispositiva de la resolución firme (aceptación o denegación, nombramientos, autorizaciones, aprobaciones, etc.)."
    }
   ],
   "fin": "success"
  },
  "fin_apelacion_estimada": {
   "fase": 5,
   "titulo": "Recurso estimado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se estima el recurso, total o parcialmente; si es apelación, la Audiencia devuelve las actuaciones al Juzgado para cumplir lo resuelto."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 454 bis y 455 y ss. LEC · Art. 20 LJV"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones tras la estimación",
     "items": [
      "Recepción de la resolución del recurso",
      "Notificación a las partes y al Ministerio Fiscal si intervino",
      "Ejecución de lo resuelto en su caso",
      "Comunicaciones a Registros y archivo"
     ],
     "marcar": true
    }
   ],
   "fin": "neutral"
  },
  "fin_apelacion_desestimada": {
   "fase": 5,
   "titulo": "Recurso desestimado: resolución confirmada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se desestima el recurso y se confirma la resolución, que queda firme."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 454 bis y 455 y ss. LEC · Art. 20 LJV"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Recepción de la resolución del recurso y diligencia de firmeza",
      "Expedición de testimonios para los interesados",
      "Comunicaciones a Registros (Civil, Mercantil, de la Propiedad) cuando proceda",
      "Ejecución de lo resuelto en la instancia",
      "Archivo definitivo del expediente"
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  },
  "fin_apelacion_desistimiento": {
   "fase": 5,
   "titulo": "DESISTIMIENTO del recurso — resolución firme",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurrente desiste del recurso de apelación. El Tribunal lo tiene por desistido y declara la firmeza de la resolución dictada en primera instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 450 LEC (desistimiento del recurso); art. 20 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "Decreto teniendo por desistido al recurrente",
      "Declaración de firmeza de la resolución de instancia",
      "Ejecución y archivo del expediente"
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  }
 }
});
