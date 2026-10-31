/* Migrado por tools/migrate.js desde sources/actual/G09.json; revisado con el BOE (registro: docs/revision/ljv-defensor-judicial.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-defensor-judicial",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la habilitación para comparecer en juicio y del nombramiento de defensor judicial",
 "corto": "Habilitación para comparecer y defensor judicial",
 "articulos": [
  "27",
  "28",
  "29",
  "30",
  "31",
  "32"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G09"
 },
 "fases": [
  "Presupuestos",
  "Iniciación",
  "Tramitación",
  "Resolución",
  "Ejercicio del cargo",
  "Extinción y cierre"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Determinación del cauce: ¿habilitación o nombramiento directo?",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de iniciar el expediente, determine qué vía procede conforme al art. 27 LJV: nombramiento directo (sin habilitación previa) o habilitación previa más ulterior nombramiento. La elección condiciona todo el expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Criterio de distinción",
     "items": [
      "Nombramiento directo (art. 27.1 y 27.3): la propia ley lo prevé directamente —conflicto de intereses, expediente JV, medidas de apoyo instadas por el MF—",
      "Habilitación previa (art. 27.2): los representantes no pueden actuar por ausencia, negativa o imposibilidad de hecho"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 27 LJV · Arts. 163, 235–236 CC (menores) · Arts. 295–298 CC (discapacidad)"
    }
   ],
   "pregunta": "¿Qué vía procede?",
   "opciones": [
    {
     "texto": "Nombramiento directo sin habilitación (art. 27.1 y 27.3 LJV)",
     "tono": "t-nota",
     "nota": "Directo",
     "destino": "causa_directa"
    },
    {
     "texto": "Habilitación previa necesaria (art. 27.2 LJV)",
     "tono": "t-nota",
     "nota": "Habilitación",
     "destino": "causa_habilitacion"
    }
   ]
  },
  "causa_directa": {
   "fase": 0,
   "titulo": "Verificación: nombramiento directo (art. 27.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El nombramiento directo opera sin habilitación previa en tres supuestos tasados del art. 27.3 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Causas que permiten el nombramiento directo",
     "items": [
      "Para litigar contra sus progenitores, tutor o curador (conflicto de intereses: art. 163 CC, art. 295.2.º CC)",
      "Para instar expedientes de jurisdicción voluntaria",
      "Cuando el Ministerio Fiscal inste un procedimiento para la adopción de medidas de apoyo (arts. 42 bis a) LJV y 758 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "LÍMITE ESENCIAL: no procede si el otro progenitor o tutor, si lo hubiere, no tiene interés opuesto al menor o persona con discapacidad. En ese caso, la representación se canaliza por el cauce ordinario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.3 LJV · Art. 163 CC · Art. 295.2.º CC"
    }
   ],
   "pregunta": "¿El otro progenitor/tutor tiene interés opuesto al afectado?",
   "opciones": [
    {
     "texto": "Sí tiene interés opuesto — procede el nombramiento directo",
     "tono": "t-ok",
     "nota": "Procede",
     "destino": "competencia"
    },
    {
     "texto": "No tiene interés opuesto o puede actuar — no procede",
     "tono": "t-aviso",
     "nota": "No procede",
     "destino": "fin_limite_directo"
    }
   ]
  },
  "causa_habilitacion": {
   "fase": 0,
   "titulo": "Identificación de la causa de habilitación (art. 27.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La habilitación se insta cuando el menor no emancipado o la persona con discapacidad, siendo demandado o siguiéndosele gran perjuicio de no promover la demanda, se encuentra en una de estas situaciones (art. 27.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.2 LJV · Art. 295.1.º CC"
    }
   ],
   "pregunta": "¿Qué causa de habilitación concurre?",
   "opciones": [
    {
     "texto": "a) Progenitores/tutor/apoyo ausentes con paradero ignorado, sin motivo racional de regreso próximo",
     "tono": "t-nota",
     "nota": "Causa a)",
     "destino": "verif_ausencia"
    },
    {
     "texto": "b) Negativa de AMBOS progenitores/tutor/apoyo a representar o asistir en juicio",
     "tono": "t-nota",
     "nota": "Causa b)",
     "destino": "verif_negativa"
    },
    {
     "texto": "c) Imposibilidad de hecho para la representación o asistencia en juicio",
     "tono": "t-nota",
     "nota": "Causa c)",
     "destino": "verif_imposibilidad"
    }
   ]
  },
  "verif_ausencia": {
   "fase": 0,
   "titulo": "Verificación: ausencia con paradero ignorado [art. 27.2.a)]",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deben concurrir acumulativamente: (1) ausencia efectiva con paradero ignorado; (2) inexistencia de motivo racional bastante para creer próximo su regreso. Ambos elementos son necesarios."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación acreditativa recomendada",
     "items": [
      "Certificado de empadronamiento o informe del último domicilio conocido",
      "Gestiones de averiguación del paradero y su resultado negativo",
      "Declaración del solicitante sobre las diligencias realizadas",
      "Si existe procedimiento principal: acreditar el perjuicio derivado de la inacción"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si el paradero es conocido pero el representante no puede actuar, valorar la causa c) (imposibilidad de hecho)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.2.a) LJV · Art. 295.1.º CC"
    }
   ],
   "pregunta": "¿Se acreditan suficientemente los dos elementos de la causa a)?",
   "opciones": [
    {
     "texto": "Sí, ambos elementos acreditados — causa a) concurre",
     "tono": "t-ok",
     "nota": "Acreditada",
     "destino": "competencia"
    },
    {
     "texto": "No se cumplen los requisitos",
     "tono": "t-aviso",
     "nota": "No procede",
     "destino": "fin_no_procede"
    }
   ]
  },
  "verif_negativa": {
   "fase": 0,
   "titulo": "Verificación: negativa a representar [art. 27.2.b)]",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La causa b) exige la negativa de AMBOS progenitores, tutor o persona designada para ejercer el apoyo. La negativa de uno solo no es suficiente: si el otro puede actuar, no procede la habilitación."
    },
    {
     "tipo": "nota",
     "texto": "La negativa puede ser expresa o resultar de conducta inequívoca. Conviene documentarla mediante requerimiento fehaciente previo."
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN: si solo uno se niega, el otro puede y debe representar al afectado. En ese caso no procede la habilitación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.2.b) LJV"
    }
   ],
   "pregunta": "¿Se niegan AMBOS progenitores/tutor/persona de apoyo?",
   "opciones": [
    {
     "texto": "Sí, ambos se niegan — causa b) acreditada",
     "tono": "t-ok",
     "nota": "Ambos niegan",
     "destino": "competencia"
    },
    {
     "texto": "Solo uno se niega — el otro puede actuar sin necesidad de defensor",
     "tono": "t-plazo",
     "nota": "Solo uno",
     "destino": "fin_progenitor_disponible"
    }
   ]
  },
  "verif_imposibilidad": {
   "fase": 0,
   "titulo": "Verificación: imposibilidad de hecho [art. 27.2.c)]",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concurre cuando los progenitores, tutor o persona designada para el apoyo se hallan en una situación de imposibilidad de hecho para la representación o asistencia en juicio."
    },
    {
     "tipo": "nota",
     "texto": "La inscripción en el Registro Civil del art. 30.3 LJV no se refiere a este supuesto de imposibilidad de hecho; qué nombramientos se comunican al Registro se indica en el paso del decreto de nombramiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.2.c) LJV · Art. 295.1.º CC"
    }
   ],
   "pregunta": "¿Se acredita la imposibilidad de hecho?",
   "opciones": [
    {
     "texto": "Sí — imposibilidad de hecho acreditada",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No — no constituye imposibilidad de hecho",
     "tono": "t-aviso",
     "destino": "fin_no_procede"
    }
   ]
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación de la competencia territorial (art. 28.1 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia competente es el del Juzgado de Primera Instancia que corresponda según el criterio de preferencia del art. 28.1 LJV. No puede modificarse por sumisión expresa ni tácita (art. 2.2 LJV). Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 LOPJ) o, si no, la Sección Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios de competencia (orden de preferencia)",
     "items": [
      "1.º Juzgado de Primera Instancia del domicilio del menor o persona con discapacidad",
      "2.º En defecto de domicilio: Juzgado de Primera Instancia de la residencia",
      "3.º Juzgado de Primera Instancia que ya esté conociendo del asunto que exige el nombramiento"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Verificar que no exista ya otro expediente con idéntico objeto en tramitación (art. 6 LJV). Si existe, archivo del posterior."
    },
    {
     "tipo": "ley",
     "texto": "Art. 28.1 LJV · Art. 2.2 LJV · Art. 6 LJV"
    }
   ],
   "siguiente": "iniciacion"
  },
  "iniciacion": {
   "fase": 1,
   "titulo": "Iniciación del expediente y postulación (art. 28.2 y 28.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente puede iniciarse por tres vías. No es preceptiva la intervención de Abogado ni Procurador en la tramitación ordinaria."
    },
    {
     "tipo": "lista",
     "titulo": "Vías de iniciación",
     "items": [
      "De oficio",
      "A petición del Ministerio Fiscal",
      "Por el menor, la persona con discapacidad con medidas de apoyo, o cualquier persona que actúe en su interés"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Excepción a la libre postulación: si se formula oposición o se interpone recurso de revisión o apelación, la intervención de Abogado y Procurador pasa a ser preceptiva (art. 3.2 LJV). Notificar a las partes esta circunstancia."
    },
    {
     "tipo": "nota",
     "texto": "La referencia del art. 28.2 a «capacidad modificada judicialmente» debe entenderse, en la terminología post-Ley 8/2021, como «persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica»."
    },
    {
     "tipo": "ley",
     "texto": "Art. 28.2–28.3 LJV · Art. 3.2 LJV · Ley 8/2021"
    }
   ],
   "siguiente": "admision"
  },
  "admision": {
   "fase": 1,
   "titulo": "Examen y admisión de la solicitud (art. 17 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia examina la solicitud. Verifica competencia, legitimación, ausencia de defectos y que no exista expediente simultáneo con idéntico objeto (art. 6 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Desde que se solicita la habilitación y hasta que el defensor acepte o se archive el expediente por resolución firme, se suspenden los plazos de prescripción o caducidad de la acción de que se trate (art. 29 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si el menor o la persona con discapacidad debe comparecer como demandado o ha quedado sin representación procesal, el Ministerio Fiscal asume su representación y defensa hasta el nombramiento (art. 29 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 6, 16, 17 y 29 LJV"
    }
   ],
   "pregunta": "¿La solicitud es admisible?",
   "opciones": [
    {
     "texto": "Admitida a trámite — proceder con la tramitación",
     "tono": "t-ok",
     "nota": "Admitida",
     "destino": "convocatoria"
    },
    {
     "texto": "Defecto subsanable — conceder plazo de 5 días para subsanación",
     "tono": "t-plazo",
     "nota": "Defecto subsanable",
     "destino": "subsanacion"
    },
    {
     "texto": "Defecto insubsanable o causa de inadmisión — archivar",
     "tono": "t-aviso",
     "nota": "Inadmisible",
     "destino": "fin_inadmision"
    }
   ]
  },
  "subsanacion": {
   "fase": 1,
   "titulo": "Trámite de subsanación (art. 16.4 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia otorga al solicitante un plazo de 5 días para subsanar los defectos u omisiones. Transcurrido sin subsanación: se tendrá por no presentada la solicitud y se archivará el expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de subsanación: cinco días (art. 16.4 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    }
   ],
   "pregunta": "¿Se subsana el defecto en el plazo de 5 días?",
   "opciones": [
    {
     "texto": "Sí, subsanado en plazo — admitir a trámite",
     "tono": "t-ok",
     "nota": "Subsanado",
     "destino": "convocatoria"
    },
    {
     "texto": "No subsanado en plazo — tener por no presentada y archivar",
     "tono": "t-aviso",
     "nota": "No subsanado",
     "destino": "fin_archivo_subsanacion"
    }
   ]
  },
  "convocatoria": {
   "fase": 2,
   "titulo": "Convocatoria a comparecencia (arts. 17.3, 18 y 30.1 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la solicitud, el Letrado de la Administración de Justicia convoca a comparecencia. Citación con al menos 15 días de antelación (art. 17.3 LJV), acompañando copia de la solicitud y documentos. La comparecencia debe celebrarse dentro de los 30 días siguientes a la admisión."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos de convocatoria obligatoria",
     "items": [
      "El solicitante",
      "Los interesados que consten en el expediente",
      "El menor o persona con discapacidad, si tuvieren suficiente madurez",
      "En todo caso, el menor si tuviere más de 12 años (art. 30.1 LJV)",
      "El Ministerio Fiscal (siempre, sin excepción)",
      "Quienes el Letrado de la Administración de Justicia estime pertinente"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Ajustes para personas con discapacidad (art. 7 bis LJV): lenguaje claro, medios de apoyo, facilitadores y acompañante de su elección desde el primer contacto."
    },
    {
     "tipo": "plazo",
     "texto": "Citación: con ≥15 días de antelación · Comparecencia: en los 30 días siguientes a la admisión"
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.1 LJV · Art. 17.3 LJV · Art. 18 LJV · Art. 7 bis LJV · Art. 9 LO 1/1996"
    }
   ],
   "siguiente": "oposicion_previa"
  },
  "oposicion_previa": {
   "fase": 2,
   "titulo": "Oposición previa a la comparecencia (art. 17.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los interesados citados pueden formular oposición dentro de los 5 días siguientes a su citación. La oposición no hace contencioso el expediente ni impide su tramitación, salvo disposición legal expresa contraria. Dar traslado al solicitante inmediatamente."
    },
    {
     "tipo": "aviso",
     "texto": "La formulación de oposición activa la obligatoriedad de Abogado y Procurador (art. 3.2 LJV). Notificar a las partes esta circunstancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.3 LJV · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿Se formula oposición en el plazo de 5 días tras la citación?",
   "opciones": [
    {
     "texto": "No hay oposición — comparecencia ordinaria",
     "tono": "t-ok",
     "nota": "Sin oposición",
     "destino": "comparecencia"
    },
    {
     "texto": "Se formula oposición — advertir preceptividad de Abogado/Procurador y continuar",
     "tono": "t-plazo",
     "nota": "Con oposición",
     "destino": "comparecencia_oposicion"
    }
   ]
  },
  "comparecencia_oposicion": {
   "fase": 2,
   "titulo": "Comparecencia con oposición formulada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La oposición no suspende ni hace contencioso el expediente. La comparecencia se celebra con normalidad. Las partes deben estar asistidas por Abogado y representadas por Procurador desde este momento."
    },
    {
     "tipo": "aviso",
     "texto": "Verificar que las partes están debidamente asistidas antes de dar inicio a la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "Si el opositor propone prueba que no puede practicarse en la comparecencia, puede acordarse su práctica en los 10 días siguientes (art. 18.2, 4.ª, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.3 LJV · Art. 3.2 LJV · Art. 18.2, 4.ª, LJV"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Celebración de la comparecencia (arts. 18 y 30.1 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia se celebra ante el Letrado de la Administración de Justicia, que la preside. Se sustancia por los trámites del juicio verbal (art. 18.2 LJV) con las especialidades propias del expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Especialidades procedimentales",
     "items": [
      "Audiencia del menor/persona con discapacidad: puede ser en acto separado, sin interferencias (art. 18.2, 4.ª, LJV), con asistencia del MF y levantamiento de acta",
      "Valoración motivada de la exploración practicada en la resolución final",
      "Ajustes para personas con discapacidad: lenguaje claro, facilitadores, apoyos (art. 7 bis LJV)",
      "Grabación audiovisual de la comparecencia (art. 18.2, 6.ª, LJV)",
      "Diligencias relativas a sus intereses, de oficio o a instancia del Ministerio Fiscal, en el mismo acto o en los diez días siguientes (art. 18.2, 4.ª, LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Resolución: en los 5 días siguientes a la terminación de la comparecencia (art. 19.1 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.1 LJV · Art. 18 LJV · Art. 7 bis LJV · Art. 5 LJV"
    }
   ],
   "pregunta": "¿Asiste el solicitante a la comparecencia?",
   "opciones": [
    {
     "texto": "Sí asiste — practicar prueba y continuar",
     "tono": "t-ok",
     "nota": "Asiste",
     "destino": "practica_prueba"
    },
    {
     "texto": "No asiste — tenerle por desistido y archivar",
     "tono": "t-aviso",
     "nota": "No asiste",
     "destino": "fin_desistimiento"
    }
   ]
  },
  "practica_prueba": {
   "fase": 2,
   "titulo": "Práctica de prueba y conclusiones (art. 18 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se practican las pruebas admitidas, se realizan las diligencias relativas al interés del menor o persona con discapacidad acordadas de oficio o a instancia del MF, y los interesados formulan oralmente sus conclusiones (art. 18.2, 5.ª, LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación del acto",
     "items": [
      "Grabación audiovisual de la comparecencia (art. 18.2, 6.ª, LJV)",
      "Acta de la exploración, que el LAJ levanta en todo caso (art. 18.2, 4.ª, LJV)",
      "Testimonio de las pruebas practicadas",
      "Traslado del acta a las partes para alegaciones en 5 días si la audiencia del menor fue posterior a la comparecencia"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 18 LJV · Art. 5 LJV · Art. 19 LJV"
    }
   ],
   "siguiente": "decision_fondo"
  },
  "decision_fondo": {
   "fase": 3,
   "titulo": "Decisión sobre el fondo (arts. 19 y 30 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Terminada la comparecencia, el Letrado de la Administración de Justicia dispone de 5 días para resolver. La decisión puede fundarse en cualquier hecho conocido durante el expediente, aunque no hubiera sido invocado por las partes (art. 19.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para resolver: 5 días desde la terminación de la comparecencia o, si no se celebró, desde la última diligencia practicada (art. 19.1 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 19 LJV · Art. 30 LJV"
    }
   ],
   "pregunta": "¿Procede el nombramiento del defensor judicial?",
   "opciones": [
    {
     "texto": "Sí procede — dictar decreto de nombramiento",
     "tono": "t-ok",
     "nota": "Procede",
     "destino": "resolucion_estimatoria"
    },
    {
     "texto": "No procede — dictar resolución desestimatoria",
     "tono": "t-aviso",
     "nota": "No procede",
     "destino": "resolucion_desestimatoria"
    }
   ]
  },
  "resolucion_estimatoria": {
   "fase": 3,
   "titulo": "Decreto de nombramiento del defensor judicial (art. 30.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ nombra defensor judicial a quien estime más idóneo para el cargo, con determinación de las atribuciones que le confiera (art. 30.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido",
     "items": [
      "Identificación del defensor judicial",
      "Atribuciones que se le confieren",
      "Recordatorio de sus obligaciones (arts. 235–236 CC; arts. 295–298 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Comunicación al Registro Civil: testimonio del decreto (art. 22.2 LJV)",
     "marcar": true,
     "items": [
      "Sí, siempre: defensor para administrar los bienes mientras se tramita la provisión de medidas judiciales de apoyo (art. 295.4.º CC; arts. 30.3 LJV y 74.1 LRC)",
      "Sí: cualquier otro defensor judicial de una persona con discapacidad (art. 295.1.º, 2.º, 3.º y 5.º CC), que es una medida de apoyo (art. 250 CC; art. 72.1 LRC; art. 300 CC)",
      "Sí: defensor judicial del menor emancipado (art. 4.13.º LRC)",
      "No, por defecto: defensor del menor no emancipado para un litigio o expediente concreto (la ley no prevé su inscripción)"
     ]
    },
    {
     "tipo": "nota",
     "texto": "Criterio del juzgado. El art. 30.3 LJV remite a la letra c) del art. 27.1, suprimida por la Ley 8/2021, y el art. 74.1 LRC al art. 299 bis CC, derogado: ambos se leen hoy referidos al art. 295.4.º CC, que recoge el mismo supuesto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.2 y 3 LJV · Art. 22.2 LJV · Arts. 235–236, 250 y 295–300 CC · Arts. 4, 72 y 74 LRC"
    }
   ],
   "siguiente": "notificacion_nombramiento"
  },
  "notificacion_nombramiento": {
   "fase": 3,
   "titulo": "Notificación del nombramiento y aceptación del cargo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución de nombramiento se notifica al defensor judicial designado. La suspensión de plazos del art. 29 LJV continúa vigente hasta la aceptación formal del cargo. Expedir al defensor testimonio de la resolución como título acreditativo."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones",
     "items": [
      "Notificar la resolución al defensor judicial nombrado",
      "Aguardar la aceptación formal del cargo",
      "Si no acepta: tramitar nuevo nombramiento (volver a la resolución estimatoria)",
      "Notificar la aceptación al afectado, al MF y a los demás interesados",
      "Expedir testimonio de la resolución de nombramiento al defensor judicial"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La aceptación del cargo es el dies ad quem de la suspensión de plazos de prescripción y caducidad (art. 29 LJV). Desde ese momento, el defensor judicial puede actuar en el proceso o expediente que motivó su nombramiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 29 LJV · Art. 30.2 LJV"
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "resolucion_desestimatoria": {
   "fase": 3,
   "titulo": "Resolución desestimatoria (arts. 19 y 20 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia dicta decreto desestimando la solicitud. Firme, no cabe iniciar otro expediente sobre idéntico objeto salvo cambio de circunstancias (art. 19.3 LJV). Sí cabe, sin embargo, el proceso contencioso posterior (art. 19.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El recurso de revisión requiere abogado y procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19 LJV · Art. 20 LJV · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿Se interpone recurso contra la resolución desestimatoria?",
   "opciones": [
    {
     "texto": "No — la resolución deviene firme (Sin recurso)",
     "tono": "t-nota",
     "destino": "fin_desestimacion_firme"
    },
    {
     "texto": "Sí — recurso de revisión ante el Juez (art. 20.2 LJV)",
     "tono": "t-plazo",
     "destino": "recurso_revision"
    }
   ]
  },
  "recurso_revision": {
   "fase": 3,
   "titulo": "Recurso de revisión ante el Juez (art. 20.2 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contra el decreto del LAJ que pone fin al expediente cabe recurso de revisión ante el Juez (art. 20.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días (art. 454 bis.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Para interponerlo son necesarios abogado y procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Art. 454 bis LEC · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿El Juez estima el recurso de revisión?",
   "opciones": [
    {
     "texto": "Sí — devolver al cauce de nombramiento",
     "tono": "t-ok",
     "nota": "Estimado",
     "destino": "resolucion_estimatoria"
    },
    {
     "texto": "No — confirmación desestimatoria",
     "tono": "t-aviso",
     "nota": "Desestimado",
     "destino": "fin_desestimacion_firme"
    }
   ]
  },
  "ejercicio_cargo": {
   "fase": 4,
   "titulo": "Ejercicio del cargo por el defensor judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial ejerce las atribuciones que le confiere la resolución de nombramiento (art. 30.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones",
     "items": [
      "El defensor del menor ejerce el cargo en interés de este, de acuerdo con su personalidad y respetando sus derechos (arts. 235 y 236 CC)",
      "El de la persona con discapacidad debe conocer y respetar su voluntad, deseos y preferencias (art. 297 CC)",
      "Rendir cuentas una vez realizada su gestión (art. 298 CC)",
      "Comunicar al órgano judicial las causas de cesación (art. 31 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.2 LJV · Art. 31 LJV · Arts. 235–236 CC · Arts. 295–298 CC"
    }
   ],
   "siguiente": "vigilancia_cesacion"
  },
  "vigilancia_cesacion": {
   "fase": 4,
   "titulo": "Vigilancia de causas de cesación o incidencias del cargo (art. 31 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial vigila activamente la concurrencia de causas de cesación y las comunica de inmediato al órgano judicial (art. 31 LJV). Además pueden presentarse incidencias como la excusa o remoción."
    },
    {
     "tipo": "lista",
     "titulo": "Causas de comunicación obligatoria (art. 31 LJV)",
     "items": [
      "Desaparición de la causa que motivó el nombramiento",
      "Progenitores/representantes/curador se prestan a comparecer en juicio por el afectado",
      "Terminación del procedimiento que motivó la habilitación"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 31 y 32 LJV (con remisión a los arts. 49 a 51)"
    }
   ],
   "pregunta": "¿Qué incidencia se produce durante el ejercicio del cargo?",
   "opciones": [
    {
     "texto": "Desaparece la causa original del nombramiento — comunicar y tramitar cesación",
     "tono": "t-nota",
     "nota": "Causa desaparece",
     "destino": "cesacion_causa"
    },
    {
     "texto": "Representantes disponibles para comparecer por el afectado — comunicar y cesar",
     "tono": "t-nota",
     "nota": "Representante disponible",
     "destino": "cesacion_representante"
    },
    {
     "texto": "Termina el procedimiento principal — comunicar y rendir cuentas",
     "tono": "t-nota",
     "nota": "Fin procedimiento",
     "destino": "cesacion_fin_procedimiento"
    },
    {
     "texto": "El defensor solicita excusa del cargo (art. 50 LJV)",
     "tono": "t-plazo",
     "nota": "Excusa",
     "destino": "excusa"
    },
    {
     "texto": "Se promueve la remoción del defensor (art. 49 LJV)",
     "tono": "t-plazo",
     "nota": "Remoción",
     "destino": "remocion"
    }
   ]
  },
  "cesacion_causa": {
   "fase": 5,
   "titulo": "Cesación: comunicación de desaparición de la causa (art. 31.1 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial comunica al órgano judicial la desaparición de la causa que motivó su nombramiento. El LAJ resuelve lo que proceda. Notificar a las partes y al MF."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Letrado de la Administración de Justicia",
     "items": [
      "Recibir y verificar la comunicación del defensor judicial",
      "Dictar decreto declarando extinguido el cargo",
      "Notificar a las partes, al afectado y al MF"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 31.1 LJV"
    }
   ],
   "siguiente": "rendicion_cuentas"
  },
  "cesacion_representante": {
   "fase": 5,
   "titulo": "Cesación: representante disponible para comparecer (art. 31.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial comunica al órgano judicial que alguno de los progenitores, representantes o curador se presta a comparecer en juicio por el afectado. El cargo cesa y la representación vuelve al cauce ordinario."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Letrado de la Administración de Justicia",
     "items": [
      "Recibir la comunicación del defensor judicial",
      "Verificar la disponibilidad y capacidad del representante",
      "Dictar decreto declarando extinguido el cargo",
      "Notificar a las partes y al MF"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 31.2 LJV"
    }
   ],
   "siguiente": "rendicion_cuentas"
  },
  "cesacion_fin_procedimiento": {
   "fase": 5,
   "titulo": "Cesación: terminación del procedimiento principal (art. 31.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial comunica la terminación del procedimiento o expediente que motivó su habilitación y nombramiento. Tramitar el decreto de cese y la rendición de cuentas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 31.2 LJV"
    }
   ],
   "siguiente": "rendicion_cuentas"
  },
  "excusa": {
   "fase": 5,
   "titulo": "Excusa del defensor judicial (art. 32 LJV, con el art. 50)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplican las causas de excusa del curador (art. 297 CC) y el procedimiento del art. 50 LJV; la tramita y decide el LAJ (art. 32 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Debe alegarse dentro de los quince días desde que conoce el nombramiento; si el motivo sobreviene, en cualquier momento, siempre que haya persona de parecidas condiciones para sustituirle (art. 50.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Trámite",
     "items": [
      "Comparecencia con quien se excusa, quien vaya a sustituirle, el afectado si tiene suficiente madurez y en todo caso el menor de más de doce años, y el Ministerio Fiscal (art. 50.2)",
      "Mientras se tramita, debe seguir ejerciendo; si no lo hace, se nombra un sustituto y, si la excusa se rechaza, responde de los gastos (art. 50.3)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 32 LJV · Art. 50 LJV · Art. 297 CC"
    }
   ],
   "pregunta": "¿Se admite la excusa?",
   "opciones": [
    {
     "texto": "Sí — proceder al nombramiento de nuevo defensor judicial",
     "tono": "t-ok",
     "nota": "Admitida",
     "destino": "nuevo_defensor"
    },
    {
     "texto": "No — el defensor continúa en el cargo",
     "tono": "t-aviso",
     "nota": "Rechazada",
     "destino": "excusa_rechazada"
    }
   ]
  },
  "excusa_rechazada": {
   "fase": 4,
   "titulo": "Excusa rechazada: continuación del cargo (art. 50.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Rechazada la excusa, continúa en el cargo y responde de los gastos ocasionados si no siguió ejerciendo durante la tramitación (art. 50.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 32 y 50.3 LJV"
    }
   ],
   "siguiente": "vigilancia_cesacion"
  },
  "nuevo_defensor": {
   "fase": 5,
   "titulo": "Nombramiento de nuevo defensor judicial (arts. 50.4 y 30.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la excusa o acordada la remoción, se nombra nuevo defensor judicial con sus atribuciones (arts. 30.2 y 50.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 30.2, 32 y 50.4 LJV · Arts. 235–236 y 295 CC"
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "remocion": {
   "fase": 5,
   "titulo": "Remoción del defensor judicial (art. 32 LJV, con el art. 49)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplican las causas de remoción del curador (art. 297 CC). Puede acordarse de oficio o a solicitud del Ministerio Fiscal, del afectado o de otra persona interesada, previa comparecencia; la tramita y decide el LAJ (art. 32 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Trámite (art. 49.1 LJV)",
     "items": [
      "Comparecencia con el defensor, las personas que puedan sustituirle, la persona con discapacidad, el menor si tiene suficiente madurez y en todo caso si es mayor de doce años, y el Ministerio Fiscal",
      "Si hay oposición, el expediente se hace contencioso: vista y juicio verbal"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 32 LJV · Art. 49 LJV · Art. 297 CC"
    }
   ],
   "pregunta": "¿Se acuerda la remoción?",
   "opciones": [
    {
     "texto": "Sí — proceder al nombramiento de nuevo defensor judicial",
     "tono": "t-ok",
     "nota": "Remoción acordada",
     "destino": "nuevo_defensor"
    },
    {
     "texto": "No — el defensor continúa en el cargo",
     "tono": "t-aviso",
     "nota": "Remoción denegada",
     "destino": "vigilancia_cesacion"
    }
   ]
  },
  "rendicion_cuentas": {
   "fase": 5,
   "titulo": "Rendición de cuentas (art. 51 LJV, vía art. 32 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Realizada su gestión, el defensor judicial rinde cuentas (art. 298 CC). Se tramitan y deciden por el LAJ (art. 32 LJV), con los trámites del art. 51.2 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Trámite (art. 51.2 LJV)",
     "items": [
      "Presentadas las cuentas, el LAJ las traslada a la persona con discapacidad, al menor si tiene suficiente madurez y en todo caso si es mayor de doce años, a los interesados y al Ministerio Fiscal",
      "Si alguno lo pide en diez días, se cita a todos a una comparecencia, en la que pueden proponerse diligencias y pruebas"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Diez días desde el traslado para pedir comparecencia."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 32 y 51.2 LJV · Art. 298 CC"
    }
   ],
   "pregunta": "¿Algún interesado solicita comparecencia sobre las cuentas en el plazo de 10 días?",
   "opciones": [
    {
     "texto": "No — sin comparecencia; resuelve el LAJ",
     "tono": "t-ok",
     "nota": "Sin comparecencia",
     "destino": "aprobacion_cuentas"
    },
    {
     "texto": "Sí — celebrar comparecencia",
     "tono": "t-nota",
     "nota": "Con comparecencia",
     "destino": "comparecencia_cuentas"
    }
   ]
  },
  "comparecencia_cuentas": {
   "fase": 5,
   "titulo": "Comparecencia sobre las cuentas (art. 51.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comparecencia con todos los citados; pueden proponerse de oficio o a instancia de parte diligencias y pruebas (art. 51.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 32 y 51.2 LJV"
    }
   ],
   "siguiente": "aprobacion_cuentas"
  },
  "aprobacion_cuentas": {
   "fase": 5,
   "titulo": "Resolución sobre las cuentas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las decide el LAJ (art. 32 LJV). Contra su decreto cabe revisión ante el Juez (art. 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 20.2 y 32 LJV"
    }
   ],
   "pregunta": "¿Se aprueban las cuentas?",
   "opciones": [
    {
     "texto": "Sí, cuentas aprobadas — expediente concluido correctamente",
     "tono": "t-ok",
     "nota": "Aprobadas",
     "destino": "fin_exitoso"
    },
    {
     "texto": "No aprobadas",
     "tono": "t-aviso",
     "nota": "No aprobadas",
     "destino": "fin_cuentas_no_aprobadas"
    }
   ]
  },
  "fin_exitoso": {
   "fase": 5,
   "titulo": "Expediente concluido: cargo extinguido y cuentas aprobadas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente ha concluido satisfactoriamente. El defensor judicial ha cesado y sus cuentas han sido aprobadas."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no puede iniciarse otro expediente con idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19.3 LJV · Art. 298 CC"
    }
   ],
   "fin": "success"
  },
  "fin_limite_directo": {
   "fase": 0,
   "titulo": "No procede: límite del art. 27.3 in fine",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No procede el nombramiento porque el otro progenitor o tutor, si lo hubiere, no tiene un interés opuesto al menor o persona con discapacidad. La representación debe canalizarse por el cauce ordinario."
    },
    {
     "tipo": "nota",
     "texto": "Este límite tiene por objetivo evitar el uso del defensor judicial cuando existe una vía representativa ordinaria funcional y sin conflicto de intereses. Si la situación cambia, el expediente puede replantearse."
    }
   ],
   "fin": "warning"
  },
  "fin_no_procede": {
   "fase": 0,
   "titulo": "No procede el nombramiento: causa no acreditada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los requisitos legales para el nombramiento de defensor judicial o la tramitación de la habilitación no se cumplen en el supuesto concreto. El expediente no puede iniciarse o debe archivarse."
    },
    {
     "tipo": "nota",
     "texto": "Si las circunstancias cambian, puede instarse de nuevo el expediente. La decisión de no proceder en esta fase no produce cosa juzgada sobre nuevos supuestos de hecho."
    }
   ],
   "fin": "error"
  },
  "fin_progenitor_disponible": {
   "fase": 0,
   "titulo": "No procede la habilitación: un progenitor puede actuar",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La causa b) del art. 27.2 LJV exige la negativa de AMBOS progenitores. Si solo uno se niega, el otro puede representar o asistir al menor o persona con discapacidad en juicio. No procede la habilitación."
    },
    {
     "tipo": "nota",
     "texto": "Derivar la representación al progenitor disponible y dispuesto a actuar por el afectado. Si hay desacuerdo entre los progenitores sobre la representación, valorar si procede otro cauce procesal."
    }
   ],
   "fin": "warning"
  },
  "fin_inadmision": {
   "fase": 1,
   "titulo": "Inadmisión: defecto insubsanable",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud presenta un defecto insubsanable. El Letrado de la Administración de Justicia dicta decreto archivando el expediente (art. 17.1 LJV). La suspensión de plazos del art. 29 LJV cesa con el archivo por resolución firme."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.1 LJV · Art. 29 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_archivo_subsanacion": {
   "fase": 1,
   "titulo": "Archivo: no subsanación en plazo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante no subsanó el defecto en el plazo de 5 días. Se tiene por no presentada la solicitud y se archiva el expediente (art. 16.4 LJV). La suspensión de plazos del art. 29 LJV —si llegó a iniciarse— queda sin efecto con el archivo firme."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV · Art. 29 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_desistimiento": {
   "fase": 2,
   "titulo": "Archivo: solicitante tenido por desistido (art. 18.2, 1.ª LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante no asistió a la comparecencia. Se le tiene por desistido y el expediente se archiva (art. 18.2, 1.ª LJV). La suspensión de plazos del art. 29 LJV cesa con el archivo firme."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2, 1.ª LJV · Art. 29 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_desestimacion_firme": {
   "fase": 3,
   "titulo": "Resolución desestimatoria firme (art. 19.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución desestimatoria ha devenido firme. No cabe nuevo expediente sobre idéntico objeto salvo cambio de circunstancias (art. 19.3 LJV). El art. 19.4 LJV permite, sin embargo, la incoación de un proceso contencioso posterior con el mismo objeto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19.3 y 19.4 LJV · Art. 20 LJV"
    }
   ],
   "fin": "neutral"
  },
  "fin_cuentas_no_aprobadas": {
   "fase": 5,
   "titulo": "Cuentas no aprobadas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas no se han aprobado. Las responsabilidades que procedan se exigirán en la vía correspondiente."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 32 y 51 LJV · Art. 298 CC"
    }
   ],
   "fin": "warning"
  }
 },
 "pie": "Arts. 27–32 LJV (y 49–51 por remisión del art. 32)<br>Arts. 163, 235–236 y 295–298 CC<br>Art. 7 bis LJV · Art. 9 LO 1/1996"
});
