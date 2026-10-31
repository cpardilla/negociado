/* Migrado por tools/migrate.js desde sources/actual/G25.json; revisado con el BOE (registro: docs/revision/ljv-conciliacion.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-conciliacion",
 "ley": "LJV",
 "titulo": "De la conciliación (artículos 139 a 148 LJV)",
 "corto": "Título IX · Conciliación",
 "articulos": [
  "139",
  "140",
  "141",
  "142",
  "143",
  "144",
  "145",
  "146",
  "147",
  "148"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G25"
 },
 "fases": [
  "Inicio",
  "Procedencia",
  "Competencia",
  "Solicitud",
  "Admisión",
  "Prescripción",
  "Comparecencia",
  "Celebración",
  "Cierre",
  "Posterior"
 ],
 "actores": {
  "ambos": "LAJ o Juez de Paz",
  "juez": "Juez de Paz",
  "laj": "Letrado de la Administración de Justicia",
  "partes": "Ambas partes",
  "solicitante": "Solicitante"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del expediente de conciliación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La conciliación es un medio alternativo de resolución de conflictos regulado en el Título IX de la Ley 15/2015 (arts. 139 a 148). Constituye un acto prejudicial voluntario, previo al ejercicio de acciones judiciales, que persigue evitar el acceso innecesario a los tribunales cuando las partes pueden alcanzar un acuerdo satisfactorio."
    },
    {
     "tipo": "info",
     "texto": "La celebran y resuelven el LAJ o el Juez de Paz (arts. 140, 142 y 145 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Este guía interactivo recorre el procedimiento completo, desde la verificación de procedencia y las exclusiones hasta las posibles vías posteriores al acuerdo."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 139-148; LEC art. 517.2.9.º; CC art. 1973"
    }
   ],
   "pregunta": "¿La pretensión tiene por finalidad lícita alcanzar un acuerdo para evitar un pleito?",
   "opciones": [
    {
     "texto": "Sí, la finalidad es lícita y procede verificar",
     "tono": "t-ok",
     "destino": "verifica_competencia"
    },
    {
     "texto": "No, es un uso indebido (interrupción artificiosa, fraude de ley)",
     "tono": "t-aviso",
     "destino": "fin_abuso"
    }
   ]
  },
  "fin_abuso": {
   "fase": 0,
   "titulo": "Inadmisión de plano por uso indebido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La utilización del expediente para finalidades distintas de alcanzar un acuerdo que suponga un manifiesto abuso de derecho (CC art. 7.2) o entrañe fraude de ley o procesal dará lugar a la inadmisión de plano (art. 139.1 in fine)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 139.1, párrafo segundo, Ley 15/2015; CC arts. 6.4 y 7.2"
    }
   ],
   "fin": "error"
  },
  "verifica_competencia": {
   "fase": 0,
   "titulo": "Verificación de competencia objetiva y territorial",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Compruebe que el órgano ante el que se acude es competente. La competencia territorial la fija el domicilio del requerido (art. 140.1) y no puede modificarse por sumisión (art. 2.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Verificación de competencia (art. 140.1 LJV)",
     "items": [
      "LAJ del Juzgado de Primera Instancia o del de lo Mercantil (hoy, Secciones Civil y de lo Mercantil del Tribunal de Instancia), según la materia",
      "Domicilio del requerido; si no lo tiene en territorio nacional, su última residencia en España",
      "Requerido persona jurídica: también el del domicilio del solicitante, si el requerido tiene allí delegación, sucursal, establecimiento, oficina abierta al público o representante autorizado (debe acreditarse)",
      "Juez de Paz: si la cuantía es inferior a 10.000 euros y no se trata de cuestiones mercantiles (art. 47.2 LEC, redacción de la LO 1/2025; desplaza los 6.000 euros del art. 140.1 LJV; decisión 14)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Cautela (decisión 14): el art. 47.2 LEC no dice que la competencia del Juez de Paz sea exclusiva; si entre 6.000 y 10.000 euros cabe también la del LAJ es cuestión sin norma que la resuelva expresamente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 140.1 LJV · Art. 2.2 LJV · Art. 47.2 LEC · Decisión 14"
    }
   ],
   "siguiente": "verifica_exclusion"
  },
  "verifica_exclusion": {
   "fase": 0,
   "titulo": "Verificación de materias excluidas (art. 139.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Determine si la materia objeto de la conciliación está excluida por razón del objeto. Las peticiones sobre estas materias no se admiten a trámite (art. 139.2)."
    },
    {
     "tipo": "aviso",
     "texto": "La inadmisión de plano es la consecuencia de intentar la conciliación sobre materias excluidas."
    }
   ],
   "pregunta": "¿La materia solicitada está entre las excluidas por el art. 139.2 LJV?",
   "opciones": [
    {
     "texto": "Sí: Menores o personas con discapacidad con medidas de apoyo (art. 139.2.1º)",
     "tono": "t-aviso",
     "destino": "fin_excluido_menores"
    },
    {
     "texto": "Sí: Estado, CC.AA. o Administraciones públicas (art. 139.2.2º)",
     "tono": "t-aviso",
     "destino": "fin_excluido_admin"
    },
    {
     "texto": "Sí: Responsabilidad civil de Jueces y Magistrados (art. 139.2.3º)",
     "tono": "t-aviso",
     "destino": "fin_excluido_jueces"
    },
    {
     "texto": "Sí: Materias no susceptibles de transacción ni compromiso (art. 139.2.4º)",
     "tono": "t-aviso",
     "destino": "fin_excluido_transaccion"
    },
    {
     "texto": "No — La materia es susceptible de conciliación",
     "tono": "t-ok",
     "destino": "verifica_proceso"
    }
   ]
  },
  "fin_excluido_menores": {
   "fase": 1,
   "titulo": "Excluido: Menores y Personas con Discapacidad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admiten las peticiones de conciliación sobre juicios en que estén interesados menores o personas con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica (art. 139.2.1.º LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 139.2.1.º"
    }
   ],
   "fin": "error"
  },
  "fin_excluido_admin": {
   "fase": 1,
   "titulo": "Excluido: Administraciones Públicas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admiten las peticiones sobre juicios en que estén interesados el Estado, las Comunidades Autónomas y las demás Administraciones públicas, Corporaciones o Instituciones de igual naturaleza (art. 139.2.2.º LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 139.2.2.º"
    }
   ],
   "fin": "error"
  },
  "fin_excluido_jueces": {
   "fase": 1,
   "titulo": "Excluido: Jueces y Magistrados (Responsabilidad Civil)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admiten las peticiones sobre el proceso de reclamación de responsabilidad civil contra Jueces y Magistrados (art. 139.2.3.º LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 139.2.3.º"
    }
   ],
   "fin": "error"
  },
  "fin_excluido_transaccion": {
   "fase": 1,
   "titulo": "Excluido: Materias No Transigibles",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admiten, en general, las peticiones sobre materias no susceptibles de transacción ni compromiso (art. 139.2.4.º LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Debe valorarse caso por caso: puede no ser transigible el derecho en sí y sí sus consecuencias patrimoniales (arts. 1809 y ss. y 1814 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 139.2.4.º; CC arts. 1809 y 1814"
    }
   ],
   "fin": "warning"
  },
  "verifica_proceso": {
   "fase": 1,
   "titulo": "Verificación de proceso jurisdiccional en curso (art. 6.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Compruebe si el mismo objeto está siendo sustanciado en un proceso jurisdiccional contencioso."
    },
    {
     "tipo": "aviso",
     "texto": "No se podrá iniciar ni continuar un expediente de JV sobre un objeto que esté siendo sustanciado en un proceso jurisdiccional."
    }
   ],
   "pregunta": "¿Existe un proceso jurisdiccional en curso sobre el mismo objeto?",
   "opciones": [
    {
     "texto": "Sí — Hay demanda presentada sobre el mismo objeto",
     "tono": "t-aviso",
     "destino": "fin_proceso"
    },
    {
     "texto": "No — No hay proceso jurisdiccional sobre este objeto",
     "tono": "t-ok",
     "destino": "verifica_concurrente"
    }
   ]
  },
  "fin_proceso": {
   "fase": 1,
   "titulo": "Archivo por proceso jurisdiccional en curso",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se archiva el expediente, remitiéndose las actuaciones al tribunal que conoce del proceso para que las incorpore a los autos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 6.2 LJV"
    }
   ],
   "fin": "warning"
  },
  "verifica_concurrente": {
   "fase": 1,
   "titulo": "Verificación de proceso contencioso prejudicial (art. 6.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verifique si existe un proceso jurisdiccional contencioso cuya resolución pudiese afectar al expediente."
    },
    {
     "tipo": "nota",
     "texto": "Se acuerda la suspensión del expediente tramitando el incidente conforme al art. 43 LEC (cuestión prejudicial civil)."
    }
   ],
   "pregunta": "¿Existe un proceso contencioso cuya resolución pueda afectar al expediente?",
   "opciones": [
    {
     "texto": "Sí — Se acuerda la suspensión",
     "tono": "t-plazo",
     "destino": "fin_concurrente"
    },
    {
     "texto": "No — No existe proceso que afecte",
     "tono": "t-ok",
     "destino": "verifica_fiscal"
    }
   ]
  },
  "fin_concurrente": {
   "fase": 1,
   "titulo": "Suspensión por proceso prejudicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se acuerda la suspensión tramitando el incidente conforme al art. 43 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 6.3 LJV · Art. 43 LEC"
    }
   ],
   "fin": "warning"
  },
  "verifica_fiscal": {
   "fase": 1,
   "titulo": "Verificación de intervención del Ministerio Fiscal (art. 4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Determine si el Ministerio Fiscal debe intervenir en el expediente."
    },
    {
     "tipo": "nota",
     "texto": "El Fiscal interviene cuando afecta al estado civil, interés de menor o persona con discapacidad, o cuando la ley lo declare expresamente."
    }
   ],
   "pregunta": "¿Procede la intervención del Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Sí — Afecta a estado civil, menores o personas con discapacidad",
     "tono": "t-plazo",
     "destino": "competencia_tipo"
    },
    {
     "texto": "No — No concurren las circunstancias del art. 4",
     "tono": "t-ok",
     "destino": "competencia_tipo"
    }
   ]
  },
  "competencia_tipo": {
   "fase": 2,
   "titulo": "Competencia: Tipo de Órgano",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Son competentes el LAJ del Juzgado de Primera Instancia o del Juzgado de lo Mercantil, cuando se trate de materias de su competencia, y el Juez de Paz (art. 140.1 LJV). Hoy, Secciones Civil y de lo Mercantil del Tribunal de Instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 140.1 LJV · Art. 47.2 LEC · Decisión 14"
    }
   ],
   "pregunta": "¿Qué órgano es competente en este caso?",
   "opciones": [
    {
     "texto": "LAJ de la Sección Civil (antes Juzgado de Primera Instancia): competencia general",
     "tono": "t-ok",
     "destino": "competencia_domicilio"
    },
    {
     "texto": "LAJ de la Sección de lo Mercantil (antes Juzgado de lo Mercantil): materias de su competencia",
     "tono": "t-ok",
     "destino": "competencia_domicilio"
    },
    {
     "texto": "Juez de Paz: cuantía inferior a 10.000 euros y no mercantil (art. 47.2 LEC)",
     "tono": "t-nota",
     "destino": "competencia_domicilio"
    }
   ]
  },
  "competencia_domicilio": {
   "fase": 2,
   "titulo": "Competencia Territorial: Domicilio del Requerido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La competencia territorial se determina por el domicilio del requerido (art. 140.1). El domicilio se entiende como el lugar de residencia habitual (CC art. 40) y domicilio social para personas jurídicas."
    },
    {
     "tipo": "aviso",
     "texto": "Si el requerido no tiene domicilio en territorio nacional, es competente el de su última residencia en España (art. 140.1)."
    }
   ],
   "pregunta": "¿Se conoce el domicilio del requerido?",
   "opciones": [
    {
     "texto": "Sí, el domicilio es conocido",
     "tono": "t-ok",
     "destino": "competencia_pj"
    },
    {
     "texto": "El requerido no tiene domicilio en España: se conoce su última residencia en España",
     "tono": "t-plazo",
     "destino": "competencia_ultima_residencia"
    },
    {
     "texto": "No se le localiza, o está en otro partido judicial",
     "tono": "t-aviso",
     "destino": "competencia_domicilio_desconocido"
    }
   ]
  },
  "competencia_ultima_residencia": {
   "fase": 2,
   "titulo": "Competencia: última residencia en España",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el requerido no tiene domicilio en territorio nacional, es competente el órgano de su última residencia en España (art. 140.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 140.1"
    }
   ],
   "siguiente": "competencia_pj"
  },
  "competencia_pj": {
   "fase": 2,
   "titulo": "Verificación — Persona jurídica con presencia local",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el requerido es persona jurídica, existe un fuero alternativo: será también competente el órgano del domicilio del solicitante, siempre que en dicho lugar tenga el requerido delegación, sucursal, establecimiento u oficina abierta al público o representante autorizado para actuar en nombre de la entidad; el solicitante debe acreditarlo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 140.1, párrafo segundo, Ley 15/2015"
    }
   ],
   "pregunta": "¿El requerido es persona jurídica con establecimiento en el domicilio del solicitante?",
   "opciones": [
    {
     "texto": "Sí — se acredita delegación, sucursal u oficina en mi domicilio",
     "tono": "t-ok",
     "destino": "solicitud"
    },
    {
     "texto": "No — el requerido es persona física, o no tiene establecimiento",
     "tono": "t-nota",
     "destino": "solicitud"
    }
   ]
  },
  "competencia_domicilio_desconocido": {
   "fase": 2,
   "titulo": "Requerido no localizado o en otro partido: expediente terminado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si las averiguaciones sobre el domicilio o residencia son infructuosas, o el requerido se localiza en otro partido judicial, el LAJ dicta decreto o el Juez de Paz auto dando por terminado el expediente, haciendo constar esa circunstancia y reservando al solicitante el derecho a promoverlo de nuevo ante el órgano competente (art. 140.1, párrafo tercero, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 140.1, párrafo tercero; LEC art. 156"
    }
   ],
   "fin": "warning"
  },
  "solicitud": {
   "fase": 3,
   "titulo": "Solicitud de Conciliación (art. 141)",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante presenta la solicitud por escrito o con los impresos normalizados del órgano (art. 141.1). Su presentación, si después se admite, interrumpe la prescripción desde su fecha (art. 143)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la solicitud (art. 141.1 LJV)",
     "items": [
      "Datos y circunstancias de identificación del solicitante y del requerido o requeridos",
      "Domicilio o domicilios en que pueden ser citados",
      "Objeto de la conciliación y fecha, determinando con claridad y precisión el objeto de la avenencia",
      "Documentos que el solicitante considere oportunos (art. 141.2)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la intervención de Abogado ni Procurador (art. 141.3)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 141 Ley 15/2015; art. 143 Ley 15/2015"
    }
   ],
   "siguiente": "verifica_defectos"
  },
  "verifica_defectos": {
   "fase": 4,
   "titulo": "Examen de la solicitud: verificación de requisitos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ examina la solicitud para verificar que reúne los requisitos formales del art. 141 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Si hay defectos, se da un plazo de cinco días para subsanarlos (art. 16.4 LJV)."
    }
   ],
   "pregunta": "¿La solicitud reúne todos los requisitos formales?",
   "opciones": [
    {
     "texto": "Sí — La solicitud es completa y formalmente correcta",
     "tono": "t-ok",
     "destino": "admision"
    },
    {
     "texto": "No — Faltan datos o documentos; se requiere subsanación",
     "tono": "t-plazo",
     "destino": "subsanar"
    }
   ]
  },
  "subsanar": {
   "fase": 4,
   "titulo": "Requerimiento de subsanación de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se requiere al solicitante para que subsane los defectos (art. 16.4 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si no subsana, se tiene por no presentada la solicitud y se archivan las actuaciones (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    }
   ],
   "pregunta": "¿El solicitante ha subsanado las deficiencias en el plazo?",
   "opciones": [
    {
     "texto": "Sí — Subsanación cumplida; la solicitud reúne los requisitos",
     "tono": "t-ok",
     "destino": "admision"
    },
    {
     "texto": "No — No subsana dentro del plazo",
     "tono": "t-aviso",
     "destino": "fin_desistimiento_sol"
    }
   ]
  },
  "fin_desistimiento_sol": {
   "fase": 4,
   "titulo": "Archivo por falta de subsanación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante no subsana en plazo: se tiene por no presentada la solicitud y se archiva (art. 16.4 LJV), sin perjuicio de promover un nuevo expediente."
    }
   ],
   "fin": "warning"
  },
  "admision": {
   "fase": 4,
   "titulo": "Admisión de la solicitud y señalamiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ o el Juez de Paz, en los cinco días hábiles siguientes a la presentación, dicta resolución de admisión y cita a los interesados, señalando día y hora del acto."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de admisión: 5 días hábiles · Antelación mínima: 5 días · Demora máxima: 10 días desde admisión"
    },
    {
     "tipo": "lista",
     "titulo": "La resolución debe contener",
     "items": [
      "Cumplimiento de requisitos formales",
      "Señalamiento del día y hora del acto",
      "Medio de citación (electrónico o diligencia)",
      "Advertencia de consecuencias de la incomparecencia"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 142.1-2 LJV · Art. 130 LEC"
    }
   ],
   "siguiente": "citacion"
  },
  "citacion": {
   "fase": 4,
   "titulo": "Citación de los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se practica la citación en el domicilio señalado. Debe contener: identificación del órgano, fecha, hora, lugar, identidad de las partes y advertencia de incomparecencia."
    },
    {
     "tipo": "nota",
     "texto": "La citación se realiza preferentemente por medios electrónicos o por diligencia de comunicación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 142.2 LJV; LEC arts. 149-164"
    }
   ],
   "siguiente": "efectos_prescripcion"
  },
  "efectos_prescripcion": {
   "fase": 5,
   "titulo": "Efectos sobre la Prescripción (art. 143)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La presentación con ulterior admisión de la solicitud interrumpe la prescripción, tanto adquisitiva como extintiva, desde el momento de su presentación. El efecto es retroactivo a la fecha de presentación."
    },
    {
     "tipo": "nota",
     "texto": "El plazo de prescripción vuelve a computarse desde que recae el decreto del LAJ o el auto del Juez de Paz que pone término al expediente (art. 143)."
    },
    {
     "tipo": "plazo",
     "texto": "Interrupción: desde la fecha de presentación. Nuevo cómputo: desde la terminación del procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 143 LJV; CC art. 1973"
    }
   ],
   "siguiente": "comparecencia_solicitante"
  },
  "comparecencia_solicitante": {
   "fase": 6,
   "titulo": "Comparecencia del solicitante al acto",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las partes deben comparecer por sí mismas o por medio de Procurador con poder suficiente. La comparecencia incluye presencia física o telemática, y para transigir hace falta mandato expreso (CC art. 1713)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.1 Ley 15/2015 · Artículos 23 y ss. LEC; CC art. 1713"
    }
   ],
   "pregunta": "¿Comparece el solicitante (o su Procurador)?",
   "opciones": [
    {
     "texto": "Sí — El solicitante comparece al acto",
     "tono": "t-ok",
     "destino": "comparecencia_requerido"
    },
    {
     "texto": "No — El solicitante no comparece",
     "tono": "t-aviso",
     "destino": "incomp_sol_justacausa"
    }
   ]
  },
  "incomp_sol_justacausa": {
   "fase": 6,
   "titulo": "Incomparecencia del solicitante — ¿justa causa?",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante no comparece, se comprueba si ha alegado justa causa para no concurrir (art. 144.2)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.2 y 4 Ley 15/2015"
    }
   ],
   "pregunta": "¿El solicitante ha alegado justa causa acreditada?",
   "opciones": [
    {
     "texto": "No — Incomparecencia injustificada",
     "tono": "t-aviso",
     "destino": "fin_desistimiento"
    },
    {
     "texto": "Sí — Justa causa acreditada",
     "tono": "t-plazo",
     "destino": "suspension_sol"
    }
   ]
  },
  "suspension_sol": {
   "fase": 6,
   "titulo": "Suspensión por justa causa del solicitante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Considerando acreditada la justa causa, el LAJ/Juez de Paz señalará nuevo día y hora para la celebración."
    },
    {
     "tipo": "plazo",
     "texto": "Nuevo señalamiento: dentro de los 5 días siguientes a la decisión de suspender."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.4 Ley 15/2015"
    }
   ],
   "siguiente": "comparecencia_solicitante"
  },
  "fin_desistimiento": {
   "fase": 6,
   "titulo": "Desistimiento por incomparecencia del solicitante",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no comparece el solicitante ni alega justa causa, se le tiene por desistido y se archiva el expediente (art. 144.2)."
    },
    {
     "tipo": "aviso",
     "texto": "El requerido puede reclamarle la indemnización de los daños y perjuicios que su comparecencia le haya originado; se da traslado al solicitante por cinco días y resuelve el LAJ o el Juez de Paz, sin ulterior recurso (art. 144.2)."
    },
    {
     "tipo": "plazo",
     "texto": "Traslado de la reclamación de indemnización: cinco días."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.2 Ley 15/2015"
    }
   ],
   "fin": "error"
  },
  "comparecencia_requerido": {
   "fase": 6,
   "titulo": "Comparecencia del requerido o requeridos",
   "actor": "partes",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se verifica la comparecencia del requerido o requeridos. A diferencia del solicitante, su incumplimiento no genera las mismas consecuencias sancionadoras."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.3 Ley 15/2015"
    }
   ],
   "pregunta": "¿Comparece(n) el/los requerido(s)?",
   "opciones": [
    {
     "texto": "Sí — Todos los requeridos comparecen",
     "tono": "t-ok",
     "destino": "celebracion"
    },
    {
     "texto": "No comparecen sin justa causa — Conciliación por intentada",
     "tono": "t-aviso",
     "destino": "incomp_req_justacausa"
    },
    {
     "texto": "No comparecen con justa causa — Se reprograma",
     "tono": "t-plazo",
     "destino": "suspension_req"
    },
    {
     "texto": "Algunos comparecen y otros no — Se celebra con los presentes",
     "tono": "t-nota",
     "destino": "celebracion_parcial"
    }
   ]
  },
  "incomp_req_justacausa": {
   "fase": 6,
   "titulo": "Incomparecencia del requerido — ¿justa causa?",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el requerido no comparece sin justa causa, el LAJ declara la conciliación intentada sin efecto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.3 y 144.4 Ley 15/2015"
    }
   ],
   "pregunta": "¿El requerido ha alegado justa causa acreditada?",
   "opciones": [
    {
     "texto": "No — Incomparecencia injustificada",
     "tono": "t-aviso",
     "destino": "fin_intentada_incomp"
    },
    {
     "texto": "Sí — Justa causa acreditada",
     "tono": "t-plazo",
     "destino": "suspension_req"
    }
   ]
  },
  "suspension_req": {
   "fase": 6,
   "titulo": "Suspensión por justa causa del requerido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acreditada la justa causa, se señala nuevo día y hora."
    },
    {
     "tipo": "plazo",
     "texto": "Nuevo señalamiento: dentro de los 5 días siguientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.4 Ley 15/2015"
    }
   ],
   "siguiente": "comparecencia_requerido"
  },
  "fin_intentada_incomp": {
   "fase": 6,
   "titulo": "Conciliación intentada por incomparecencia del requerido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El requerido no comparece sin justa causa. Se tiene por intentada a todos los efectos legales, habilitando al solicitante para ejercitar acciones judiciales. El efecto interruptivo de la prescripción se mantiene."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.3 Ley 15/2015; art. 143 Ley 15/2015"
    }
   ],
   "fin": "neutral"
  },
  "celebracion_parcial": {
   "fase": 7,
   "titulo": "Celebración parcial con los requeridos presentes",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Siendo varios los requeridos y concurriendo solo alguno, se celebra con los presentes y se tiene por intentada respecto de los restantes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 144.3 Ley 15/2015"
    }
   ],
   "siguiente": "celebracion"
  },
  "celebracion": {
   "fase": 7,
   "titulo": "Celebración del acto de conciliación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El acto se estructura en fases: expositiva, contestación, probatoria (documental), avenencia y cierre. El LAJ/Juez invitará a las partes a alcanzar acuerdo, sin imponer solución."
    },
    {
     "tipo": "lista",
     "titulo": "Fases del acto de conciliación",
     "items": [
      "1.ª Exposición: el solicitante presenta su reclamación y fundamentos.",
      "2.ª Contestación: el requerido responde lo que crea conveniente.",
      "3.ª Aportación documental: los intervinientes pueden exhibir o aportar documentos.",
      "4.ª Mediación: si no hay avenencia, el órgano procura avenirlos con réplica y contrarréplica.",
      "5.ª Cierre: Se levanta acta con o sin avenencia."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El desarrollo se registrará, si fuera posible, en soporte apto para grabación de sonido e imagen. El acuerdo requiere conformidad libre y voluntaria."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.1 y 145.4 Ley 15/2015"
    }
   ],
   "pregunta": "¿Se alega alguna cuestión que impida la válida prosecución del acto?",
   "opciones": [
    {
     "texto": "No — El acto se desarrolla con normalidad",
     "tono": "t-ok",
     "destino": "verifica_acuerdo"
    },
    {
     "texto": "Sí — Se alega cuestión impeditiva (falta de capacidad, litispendencia, etc.)",
     "tono": "t-plazo",
     "destino": "fin_impeditiva"
    }
   ]
  },
  "fin_impeditiva": {
   "fase": 7,
   "titulo": "Conciliación intentada por cuestión impeditiva",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se alega alguna cuestión que pueda impedir la válida prosecución del acto (falta de capacidad, defecto de citación, litispendencia, cosa juzgada), se da por terminado el acto y se tiene por intentada la conciliación sin más trámites (art. 145.2). Lo mismo si se suscitan cuestiones de competencia o de recusación del LAJ o del Juez de Paz (art. 140.2)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 140.2 y 145.2 Ley 15/2015"
    }
   ],
   "fin": "neutral"
  },
  "verifica_acuerdo": {
   "fase": 7,
   "titulo": "Verificación de conformidad entre las partes",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Celebrado el acto sin cuestiones impeditivas, se determina si las partes han alcanzado un acuerdo. La avenencia debe respetar los límites de la autonomía de la voluntad (CC art. 1255) y solo produce efecto entre quienes la otorgan (CC art. 1257)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.3 Ley 15/2015; CC arts. 1255, 1257, 1275-1277"
    }
   ],
   "pregunta": "¿Cuál es el resultado del acto de conciliación?",
   "opciones": [
    {
     "texto": "Avenencia total — acuerdo completo sobre el objeto",
     "tono": "t-ok",
     "destino": "avenencia_total"
    },
    {
     "texto": "Avenencia parcial — acuerdo sobre algún punto",
     "tono": "t-plazo",
     "destino": "avenencia_parcial"
    },
    {
     "texto": "Sin avenencia — no se consigue acuerdo alguno",
     "tono": "t-aviso",
     "destino": "sin_avenencia"
    }
   ]
  },
  "avenencia_total": {
   "fase": 7,
   "titulo": "Avenencia total — formalización del acta",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las partes acuerdan sobre la totalidad del objeto. Se hace constar detalladamente en un acta, que debe ser firmada por los comparecientes. El testimonio del acta y del decreto o auto que hace constar la avenencia lleva aparejada ejecución; a otros efectos, lo convenido tiene el valor de un convenio consignado en documento público y solemne (art. 147.1 LJV; art. 517.2.9.º LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "El contenido del acta es crucial: constituye la base del título ejecutivo. Debe ser claro, preciso y susceptible de ejecución forzosa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.3 Ley 15/2015; art. 147 Ley 15/2015; LEC art. 517.2.9.º; CC arts. 1809 y ss."
    }
   ],
   "siguiente": "cierre_avenencia"
  },
  "avenencia_parcial": {
   "fase": 7,
   "titulo": "Avenencia parcial — formalización del acta",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acuerdo sobre parte del objeto. Se identifican los extremos acordados y los aspectos sobre los que no hubo conformidad. El acta parcial tiene fuerza ejecutiva respecto de los extremos acordados."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante conserva la acción para reclamar judicialmente la parte no conciliada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.3 Ley 15/2015"
    }
   ],
   "siguiente": "cierre_avenencia"
  },
  "sin_avenencia": {
   "fase": 7,
   "titulo": "Conciliación celebrada sin avenencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se consigue acuerdo: se hace constar que el acto terminó sin avenencia, y el LAJ dicta decreto o el Juez de Paz auto acordando el archivo definitivo (art. 145.3 y 4). El solicitante puede ejercitar las acciones que le correspondan."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.3 y 4 Ley 15/2015; art. 143 Ley 15/2015"
    }
   ],
   "fin": "neutral"
  },
  "cierre_avenencia": {
   "fase": 8,
   "titulo": "Cierre con avenencia: decreto o auto",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Finalizado el acto, el LAJ dicta decreto o el Juez de Paz auto haciendo constar la avenencia y acordando el archivo definitivo (art. 145.4). El testimonio del acta junto con el de ese decreto o auto lleva aparejada ejecución (art. 147.1)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 145.4 Ley 15/2015; art. 147.1 Ley 15/2015; LEC art. 517.2.9.º"
    }
   ],
   "siguiente": "testimonio_gastos"
  },
  "testimonio_gastos": {
   "fase": 8,
   "titulo": "Testimonio del Acta y Gastos (art. 146)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las partes pueden solicitar testimonio del acta que pone fin al acto de conciliación (art. 146)."
    },
    {
     "tipo": "info",
     "texto": "Los gastos del acto de conciliación son de cuenta de quien lo promovió (art. 146)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 146 Ley 15/2015"
    }
   ],
   "pregunta": "¿Se solicita el despacho de ejecución o se ejerce acción de nulidad?",
   "opciones": [
    {
     "texto": "Se insta la ejecución forzosa del acuerdo",
     "tono": "t-ok",
     "destino": "ejecucion"
    },
    {
     "texto": "No — El acuerdo se cumple voluntariamente",
     "tono": "t-ok",
     "destino": "fin_avenencia_firme"
    },
    {
     "texto": "Se ejerce acción de nulidad contra lo convenido",
     "tono": "t-plazo",
     "destino": "nulidad"
    }
   ]
  },
  "fin_avenencia_firme": {
   "fase": 8,
   "titulo": "Acuerdo Firme y Consentido",
   "actor": "partes",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El acuerdo se cumple voluntariamente y no se ejercita la acción de nulidad en los quince días siguientes al acto (art. 148.2)."
    },
    {
     "tipo": "nota",
     "texto": "Si después se incumple, puede instarse la ejecución (art. 147). El art. 518 LEC fija una caducidad de cinco años para la acción ejecutiva fundada en sentencias y en resoluciones que aprueban transacciones o acuerdos; no menciona expresamente la conciliación."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 146, 147 y 148 Ley 15/2015; LEC art. 518"
    }
   ],
   "fin": "success"
  },
  "ejecucion": {
   "fase": 9,
   "titulo": "Fuerza ejecutiva del acuerdo (art. 147)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El testimonio del acta junto con el decreto/auto lleva aparejada ejecución a los efectos del art. 517.2.9.º LEC. El título ejecutivo se compone de dos documentos conjuntos e inseparables."
    },
    {
     "tipo": "info",
     "texto": "A otros efectos, lo convenido tiene el valor y eficacia de un convenio consignado en documento público y solemne."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos para la ejecución",
     "items": [
      "Título ejecutivo: decreto/auto + acta de conciliación",
      "Determinación de la obligación: cantidad líquida o determinable",
      "Plazo: véase el art. 518 LEC (caducidad de cinco años para sentencias y resoluciones que aprueban transacciones o acuerdos; no menciona la conciliación)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 147.1 Ley 15/2015 · Art. 517.2.9.º LEC"
    }
   ],
   "siguiente": "ejecucion_competencia"
  },
  "ejecucion_competencia": {
   "fase": 9,
   "titulo": "Competencia para la Ejecución",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se determina el órgano competente para la ejecución forzosa. La competencia territorial no es disponible por las partes en la ejecución de títulos judiciales."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas de competencia",
     "items": [
      "Mismo Juzgado que tramitó: cuando sea asunto de su competencia",
      "En los demás casos, el Juzgado de Primera Instancia a quien hubiera correspondido conocer de la demanda (art. 147.2 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 147.2 y 3 Ley 15/2015; LEC art. 545"
    }
   ],
   "pregunta": "¿Se formula oposición a la ejecución?",
   "opciones": [
    {
     "texto": "No — Sin oposición; la ejecución prosigue",
     "tono": "t-ok",
     "destino": "fin_ejecucion"
    },
    {
     "texto": "Sí — Se formula oposición mediante acción de nulidad",
     "tono": "t-plazo",
     "destino": "nulidad"
    }
   ]
  },
  "fin_ejecucion": {
   "fase": 9,
   "titulo": "Ejecución cumplida sin oposición",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ejecución se ha cumplido sin oposición. El procedimiento concluye con la satisfacción del derecho reconocido. Se seguirán los trámites de la LEC: requerimiento de pago, embargo y realización de bienes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 147 Ley 15/2015 · Arts. 538-603 LEC"
    }
   ],
   "fin": "success"
  },
  "nulidad": {
   "fase": 9,
   "titulo": "Acción de Nulidad del Acuerdo (art. 148)",
   "actor": "partes",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contra lo convenido sólo podrá ejercitarse la acción de nulidad por las causas que invalidan los contratos (vicios del consentimiento, defectos de objeto o causa, contravención de normas imperativas). La carga de la prueba recae sobre quien invoca la nulidad."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de caducidad: 15 días desde la celebración del acto. Este plazo es improrrogable y extintivo."
    },
    {
     "tipo": "info",
     "texto": "La demanda se sustanciará por los trámites del juicio que corresponda (ordinario o verbal)."
    },
    {
     "tipo": "aviso",
     "texto": "Acreditado el ejercicio de la acción de nulidad, queda en suspenso la ejecución ipso iure hasta que se resuelva definitivamente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 148.1-2 Ley 15/2015; CC arts. 1261, 1265-1270, 1275-1309; LEC arts. 248, 437"
    }
   ],
   "pregunta": "¿Se interpone demanda de nulidad dentro del plazo de 15 días?",
   "opciones": [
    {
     "texto": "Sí — Dentro del plazo; se suspende la ejecución",
     "tono": "t-ok",
     "destino": "resuelve_nulidad"
    },
    {
     "texto": "No — Fuera del plazo de caducidad",
     "tono": "t-aviso",
     "destino": "fin_caducada"
    }
   ]
  },
  "fin_caducada": {
   "fase": 9,
   "titulo": "Acción de nulidad caducada — Acuerdo Firme",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El transcurso del plazo de caducidad de 15 días determina la firmeza del acuerdo. El título ejecutivo conserva toda su fuerza y la ejecución prosigue."
    },
    {
     "tipo": "aviso",
     "texto": "El plazo de 15 días es de caducidad, no de prescripción: no admite interrupción ni suspensión. La parte debe actuar con la máxima diligencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 148.1 Ley 15/2015; CC arts. 1265-1270"
    }
   ],
   "fin": "warning"
  },
  "resuelve_nulidad": {
   "fase": 9,
   "titulo": "Resolución sobre la acción de nulidad",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal resuelve por sentencia firme estimando o desestimando la demanda."
    }
   ],
   "pregunta": "¿Cuál es el resultado de la demanda de nulidad?",
   "opciones": [
    {
     "texto": "Estimada — El acuerdo se declara nulo",
     "tono": "t-aviso",
     "destino": "fin_nulidad_estimada"
    },
    {
     "texto": "Desestimada — El acuerdo se confirma",
     "tono": "t-ok",
     "destino": "fin_nulidad_desestimada"
    }
   ]
  },
  "fin_nulidad_estimada": {
   "fase": 9,
   "titulo": "Nulidad estimada — acuerdo anulado",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El acuerdo queda sin efecto. Las partes deben restituirse recíprocamente las prestaciones (CC art. 1303), volviendo las cosas al estado anterior a la conciliación."
    },
    {
     "tipo": "nota",
     "texto": "Las partes quedan habilitadas para acudir a la vía judicial ordinaria sobre el fondo del asunto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 148 Ley 15/2015; CC art. 1303"
    }
   ],
   "fin": "error"
  },
  "fin_nulidad_desestimada": {
   "fase": 9,
   "titulo": "Nulidad desestimada — acuerdo confirmado",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El acuerdo mantiene plena validez y eficacia. La ejecución suspendida puede reanudarse desde el punto de suspensión."
    },
    {
     "tipo": "nota",
     "texto": "El título ejecutivo del artículo 147 conserva toda su fuerza. La parte ejecutante puede solicitar la continuación de la ejecución forzosa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 148.3 Ley 15/2015; LEC arts. 394, 517.2.9º"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Ley 15/2015, de 2 de julio<br>Jurisdicción Voluntaria<br>Título IX · Arts. 139–148<br>LEC 1/2000 · CC · LOPJ 6/1985"
});
