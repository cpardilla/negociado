/* Migrado por tools/migrate.js desde sources/actual/G09.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-defensor-judicial",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "LEY 15/2015, DE 2 DE JULIO, DE LA JURISDICCIÓN VOLUNTARIA · TÍTULO II: DE LOS EXPEDIENTES DE JURISDICCIÓN VOLUNTARIA EN MATERIA DE PERSONAS · CAPÍTULO II De la habilitación para comparecer en juicio y del nombramiento de defensor judicial Artículos 27 a 32 LJV − 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar",
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
  "estado": "sin revisar",
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
  "laj": "LAJ / Sec. Judicial"
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
     "texto": "La habilitación se insta cuando el menor no emancipado o la persona con discapacidad, siendo demandado o sufriendo gran perjuicio de no promover la demanda, se encuentre en una de estas tres situaciones tasadas."
    },
    {
     "tipo": "nota",
     "texto": "La causa c) —imposibilidad de hecho— exige además la inscripción de la resolución de nombramiento en el Registro Civil (art. 30.3 LJV). Identifique correctamente la causa para tramitar el expediente de forma adecuada."
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
     "texto": "Concurre cuando los progenitores, tutor o persona de apoyo se encuentran en una situación fáctica —no jurídica— que les impide asumir la representación o asistencia en juicio: enfermedad grave, ingreso hospitalario, privación de libertad u otra causa análoga."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación acreditativa",
     "items": [
      "Informe médico o certificado de ingreso hospitalario",
      "Resolución de internamiento o situación de privación de libertad",
      "Cualquier otro medio de prueba que objetice la imposibilidad física de actuar"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Este supuesto es el único que exige inscripción de la resolución de nombramiento en el Registro Civil (art. 30.3 LJV). Déjese constancia en el expediente desde el inicio."
    },
    {
     "tipo": "ley",
     "texto": "Art. 27.2.c) LJV · Art. 30.3 LJV · Art. 295.1.º CC"
    }
   ],
   "pregunta": "¿Se acredita la imposibilidad de hecho?",
   "opciones": [
    {
     "texto": "Sí — causa c) acreditada. La resolución de nombramiento se inscribirá en el RC",
     "tono": "t-ok",
     "nota": "Acreditada",
     "destino": "competencia_rc"
    },
    {
     "texto": "No — la situación no constituye imposibilidad de hecho",
     "tono": "t-aviso",
     "nota": "No procede",
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
     "texto": "El Secretario judicial competente es el del JPI que corresponda según el criterio de preferencia del art. 28.1 LJV. La competencia territorial es imperativa: no puede modificarse por sumisión expresa ni tácita (art. 2.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios de competencia (orden de preferencia)",
     "items": [
      "1.º JPI del domicilio del menor o persona con discapacidad",
      "2.º En defecto de domicilio: JPI de la residencia",
      "3.º JPI que ya esté conociendo del asunto que exige el nombramiento"
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
  "competencia_rc": {
   "fase": 1,
   "titulo": "Competencia territorial — supuesto c) con inscripción RC",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mismos criterios de competencia del art. 28.1 LJV. Dado que el supuesto es la causa c) del art. 27.2, anotar en el expediente que la resolución de nombramiento deberá remitirse al Registro Civil competente para su inscripción."
    },
    {
     "tipo": "nota",
     "texto": "Anotar en la portada del expediente: «Supuesto art. 27.2.c): testimonio de la resolución de nombramiento se remitirá al Registro Civil competente (art. 30.3 LJV y art. 22 LJV)»."
    },
    {
     "tipo": "ley",
     "texto": "Art. 28.1 LJV · Art. 30.3 LJV · Art. 22 LJV · Ley 20/2011 Registro Civil"
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
      "De oficio (LAJ o iniciativa del Juez)",
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
     "texto": "El Secretario judicial examina la solicitud. Verifica competencia, legitimación, ausencia de defectos y que no exista expediente simultáneo con idéntico objeto (art. 6 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Desde la presentación de la solicitud quedan suspendidos los plazos de prescripción y caducidad de la acción de cuyo ejercicio se trate (art. 29 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si el menor o la persona con discapacidad debe comparecer como demandado o queda sin representación procesal, el MF asume su representación y defensa de forma provisional (art. 29 LJV · art. 8.2 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17 LJV · Art. 29 LJV · Art. 8.2 LEC · Art. 6 LJV"
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
   "titulo": "Trámite de subsanación (art. 17.4 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Secretario judicial otorga al solicitante un plazo de 5 días para subsanar los defectos u omisiones. Transcurrido sin subsanación: se tendrá por no presentada la solicitud y se archivará el expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de subsanación: 5 días hábiles desde la notificación del requerimiento"
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.4 LJV"
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
     "texto": "Admitida la solicitud, el Secretario judicial convoca a comparecencia. Citación con al menos 15 días de antelación (art. 17.3 LJV), acompañando copia de la solicitud y documentos. La comparecencia debe celebrarse dentro de los 30 días siguientes a la admisión."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos de convocatoria obligatoria",
     "items": [
      "El solicitante",
      "Los interesados que consten en el expediente",
      "El menor o persona con discapacidad, si tuvieren suficiente madurez",
      "En todo caso, el menor si tuviere más de 12 años (art. 9 LO 1/1996)",
      "El Ministerio Fiscal (siempre, sin excepción)",
      "Quienes el Secretario judicial estime pertinente"
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
     "texto": "Si el opositor propone prueba que no puede practicarse en la comparecencia, puede acordarse su práctica en los 10 días siguientes (art. 18.4.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.3 LJV · Art. 3.2 LJV · Art. 18.4.ª LJV"
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
     "texto": "La comparecencia se celebra ante el Secretario judicial, que la preside. Se sustancia por los trámites del juicio verbal (art. 18.2 LJV) con las especialidades propias del expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Especialidades procedimentales",
     "items": [
      "Audiencia del menor/persona con discapacidad: puede ser en acto separado, sin interferencias (art. 18.4.ª LJV), con asistencia del MF y levantamiento de acta",
      "Valoración motivada de la exploración practicada en la resolución final",
      "Ajustes para personas con discapacidad: lenguaje claro, facilitadores, apoyos (art. 7 bis LJV)",
      "Grabación audiovisual de la comparecencia (art. 18.6.ª LJV)",
      "El MF puede proponer diligencias de oficio (art. 5 LJV)"
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
     "texto": "No asiste sin causa justificada — tenerle por desistido y archivar",
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
     "texto": "Se practican las pruebas admitidas, se realizan las diligencias relativas al interés del menor o persona con discapacidad acordadas de oficio o a instancia del MF, y los interesados formulan oralmente sus conclusiones (art. 18.5.ª LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación del acto",
     "items": [
      "Grabación audiovisual de la comparecencia (art. 18.6.ª LJV)",
      "Acta de la audiencia del menor, si se practicó en acto separado (art. 18.4.ª LJV)",
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
     "texto": "Terminada la comparecencia, el Secretario judicial dispone de 5 días para resolver. La decisión puede fundarse en cualquier hecho conocido durante el expediente, aunque no hubiera sido invocado por las partes (art. 19.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para resolver: 5 días desde la terminación de la comparecencia o desde la última diligencia practicada (art. 19.1 LJV)"
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
     "texto": "El Secretario judicial dicta decreto de nombramiento designando al defensor judicial y determinando las atribuciones que le confiere. Criterio: idoneidad para el cargo (art. 30.2 LJV · art. 295 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio del decreto",
     "items": [
      "Identificación del defensor judicial nombrado",
      "Atribuciones conferidas: estrictamente limitadas al objeto del expediente",
      "Advertencia de las obligaciones del cargo (arts. 235–236 CC para menores; arts. 295–298 CC para personas con discapacidad)",
      "Indicación del plazo para aceptar el cargo",
      "Si causa c): indicación de la obligación de remisión al Registro Civil (art. 30.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.2 LJV · Arts. 235–236 CC · Arts. 295–298 CC"
    }
   ],
   "pregunta": "¿El supuesto es la causa c) del art. 27.2 LJV (imposibilidad de hecho)?",
   "opciones": [
    {
     "texto": "Sí — remitir testimonio al Registro Civil antes de notificar el nombramiento",
     "tono": "t-nota",
     "nota": "Causa c)",
     "destino": "inscripcion_rc"
    },
    {
     "texto": "No, otro supuesto — proceder directamente a la notificación del nombramiento",
     "tono": "t-nota",
     "nota": "Otro supuesto",
     "destino": "notificacion_nombramiento"
    }
   ]
  },
  "inscripcion_rc": {
   "fase": 3,
   "titulo": "Remisión al Registro Civil para inscripción (art. 30.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El testimonio de la resolución de nombramiento en el supuesto del art. 27.2.c) debe remitirse al Registro Civil competente para su inscripción. Esta publicidad registral produce efectos frente a terceros."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones",
     "items": [
      "Expedir testimonio de la resolución de nombramiento",
      "Remitir el testimonio al Registro Civil del domicilio del afectado",
      "Dejar constancia en el expediente de la remisión y de la fecha",
      "Aguardar confirmación de la inscripción antes de expedir el título al defensor"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 30.3 LJV · Art. 22 LJV · Ley 20/2011 Registro Civil"
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
     "texto": "El Secretario judicial dicta decreto desestimando la solicitud. La resolución firme produce cosa juzgada: no cabe iniciar otro expediente sobre idéntico objeto salvo cambio de circunstancias (art. 19.3 LJV). Sí cabe, sin embargo, el proceso contencioso posterior (art. 19.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La interposición de recursos de revisión o apelación requiere Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19 LJV · Art. 20 LJV · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿Se interpone recurso contra la resolución desestimatoria?",
   "opciones": [
    {
     "texto": "No — la resolución deviene firme",
     "tono": "t-nota",
     "nota": "Sin recurso",
     "destino": "fin_desestimacion_firme"
    },
    {
     "texto": "Sí — recurso de revisión ante el Juez (resolución del Secretario judicial, art. 20.2 LJV)",
     "tono": "t-plazo",
     "nota": "Revisión",
     "destino": "recurso_revision"
    },
    {
     "texto": "Sí — recurso de apelación (resolución del Juez, art. 20.2 LJV)",
     "tono": "t-plazo",
     "nota": "Apelación",
     "destino": "recurso_apelacion"
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
     "texto": "Cuando la resolución desestimatoria proviene del Secretario judicial, el recurso es la revisión ante el Juez competente (art. 20.2 LJV). El recurso de apelación posterior no tiene efectos suspensivos salvo disposición expresa contraria."
    },
    {
     "tipo": "nota",
     "texto": "La interposición del recurso requiere Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Art. 3.2 LJV"
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
  "recurso_apelacion": {
   "fase": 3,
   "titulo": "Recurso de apelación ante la Audiencia Provincial (art. 20.2 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la resolución desestimatoria fue dictada por el Juez, cabe recurso de apelación ante la Audiencia Provincial. Sin efectos suspensivos (art. 20.2 LJV in fine) salvo disposición expresa contraria. Requiere Abogado y Procurador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿La Audiencia Provincial estima el recurso de apelación?",
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
     "texto": "El defensor judicial ejerce las atribuciones determinadas en el decreto de nombramiento. Su cargo es tuitivo, ocasional y estrictamente limitado al objeto del expediente. Debe actuar en interés del afectado, respetando su voluntad, deseos y preferencias."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones del defensor judicial (arts. 235–236 CC y arts. 295–298 CC)",
     "items": [
      "Actuar en el interés del menor o persona con discapacidad",
      "Respetar la voluntad, deseos y preferencias del afectado (en especial, personas con discapacidad)",
      "Prohibición de recibir liberalidades del afectado hasta aprobación definitiva de la gestión",
      "Prohibición de actuar con conflicto de intereses propio o de terceros",
      "Deber activo de comunicación al órgano judicial ante cualquier causa de cesación (art. 31 LJV)"
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
     "texto": "El defensor judicial vigila activamente la concurrencia de causas de cesación y las comunica de inmediato al órgano judicial (art. 31 LJV). El carácter provisional del cargo exige esta vigilancia permanente. Además pueden presentarse incidencias como la excusa o remoción."
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
     "texto": "Art. 31 LJV · Art. 49 LJV (remoción) · Art. 50 LJV (excusa) · Art. 32 LJV"
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
     "texto": "El defensor judicial comunica al órgano judicial la desaparición de la causa que motivó su nombramiento. El Secretario judicial verifica la efectiva desaparición y dicta decreto declarando extinguido el cargo. Notificar a las partes y al MF."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Secretario judicial",
     "items": [
      "Recibir y verificar la comunicación del defensor judicial",
      "Dictar decreto declarando extinguido el cargo",
      "Notificar a las partes, al afectado y al MF",
      "Si fue causa c): comunicar la extinción al Registro Civil (por analogía con art. 30.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 31.1 LJV · Art. 22 LJV"
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
     "titulo": "Actuaciones del Secretario judicial",
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
     "texto": "El defensor judicial comunica la terminación del procedimiento o expediente que motivó su habilitación y nombramiento. La extinción del proceso principal extingue ipso facto la justificación del cargo. Tramitar el decreto de cese y la rendición de cuentas."
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
   "titulo": "Expediente de excusa del defensor judicial (art. 50 LJV, vía art. 32 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deben alegarse las causas de excusa dentro de los 15 días desde el nombramiento. Si la causa es sobrevenida, puede alegarse en cualquier momento, siempre que haya persona de parecidas condiciones para sustituir."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para alegar excusa: 15 días desde el nombramiento (o en cualquier momento si la causa es sobrevenida)"
    },
    {
     "tipo": "lista",
     "titulo": "Trámites del expediente de excusa",
     "items": [
      "Comparecencia: se oye al defensor, al sustituto propuesto, al afectado (si tiene suficiente madurez o &gt;12 años) y al MF",
      "Mientras se tramita: el defensor está obligado a continuar en el cargo",
      "Si no ejerce: el Secretario judicial nombra un defensor provisional que le sustituye",
      "Si la excusa es rechazada: el defensor responsable soporta todos los gastos ocasionados (art. 50.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 50 LJV · Art. 32 LJV · Art. 297 CC"
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
     "texto": "No — el defensor continúa en el cargo; los gastos del expediente son a su cargo",
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
     "texto": "Rechazada la excusa, el defensor judicial continúa en el cargo. Queda responsable de todos los gastos causados por el expediente de excusa (art. 50.3 LJV). El expediente principal retoma su curso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.3 LJV · Art. 32 LJV"
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
     "texto": "Admitida la excusa o acordada la remoción, el Secretario judicial procede al nombramiento de un nuevo defensor judicial conforme al art. 30.2 LJV, con determinación de las atribuciones que le confiera."
    },
    {
     "tipo": "nota",
     "texto": "El nuevo nombramiento sigue los mismos criterios de idoneidad: art. 236 CC para menores y art. 295 CC para personas con discapacidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.4 LJV · Art. 30.2 LJV · Arts. 236, 295 CC"
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "remocion": {
   "fase": 5,
   "titulo": "Expediente de remoción del defensor judicial (art. 49 LJV, vía art. 32 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La remoción puede acordarse de oficio, a solicitud del MF, del afectado o de cualquier persona interesada. Se tramita mediante comparecencia. El Juez puede suspender provisionalmente al defensor y el Secretario judicial nombrará un defensor provisional durante la tramitación."
    },
    {
     "tipo": "lista",
     "titulo": "Trámites del expediente de remoción",
     "items": [
      "Comparecencia: se oye al defensor, a los posibles sustitutos, al afectado (si &gt;12 años o suficiente madurez) y al MF",
      "Si hay oposición: el expediente se hace contencioso — juicio verbal (art. 49.1 LJV)",
      "La resolución de remoción corresponde al JUEZ —no al Secretario judicial— (art. 49.3 LJV)",
      "Si se acuerda la remoción: el Juez nombra nuevo defensor conforme a la legislación civil",
      "Comunicar la remoción al Registro Civil si procede"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La resolución de remoción es del JUEZ, no del Secretario judicial, aunque el expediente haya sido tramitado por el LAJ."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49 LJV · Art. 32 LJV · Art. 297 CC"
    }
   ],
   "pregunta": "¿El Juez acuerda la remoción?",
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
     "texto": "Extinguido el cargo, el defensor judicial debe rendir cuentas de su gestión. La rendición final debe presentarse en el plazo de 3 meses desde el cese (prorrogables por justa causa). Los informes se trasladan al afectado, interesados y MF."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para la rendición de cuentas finales: 3 meses desde el cese del cargo (prorrogable por justa causa)"
    },
    {
     "tipo": "lista",
     "titulo": "Trámites de la rendición de cuentas",
     "items": [
      "Presentación del informe/cuentas por el defensor al Secretario judicial",
      "Traslado por el LAJ al afectado (si tiene suficiente madurez), a los interesados y al MF",
      "Plazo para solicitar comparecencia: 10 días desde el traslado",
      "El Juez puede acordar pericial contable de oficio si hay operaciones complejas (art. 51.3 LJV)",
      "Resolución por auto del Juez (art. 51.3 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La aprobación de las cuentas no impide las acciones recíprocas entre el defensor y el afectado o sus causahabientes por razón de la gestión (art. 51.5 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 LJV · Art. 32 LJV · Art. 298 CC"
    }
   ],
   "pregunta": "¿Algún interesado solicita comparecencia sobre las cuentas en el plazo de 10 días?",
   "opciones": [
    {
     "texto": "No — tramitación sin comparecencia; el Juez resuelve por auto",
     "tono": "t-ok",
     "nota": "Sin comparecencia",
     "destino": "aprobacion_cuentas"
    },
    {
     "texto": "Sí — celebrar comparecencia; el Juez puede ordenar pericial contable",
     "tono": "t-nota",
     "nota": "Con comparecencia",
     "destino": "comparecencia_cuentas"
    }
   ]
  },
  "comparecencia_cuentas": {
   "fase": 5,
   "titulo": "Comparecencia sobre las cuentas (art. 51.2 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra comparecencia con todos los interesados, el afectado (si tiene suficiente madurez o es mayor de 12 años) y el MF. El Juez puede acordar de oficio una pericial contable o de auditoría si las operaciones son complejas o requieren justificación técnica."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.2 y 51.3 LJV"
    }
   ],
   "siguiente": "aprobacion_cuentas"
  },
  "aprobacion_cuentas": {
   "fase": 5,
   "titulo": "Resolución sobre las cuentas: auto del Juez (art. 51.3 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez resuelve por auto sobre la rendición de cuentas. La aprobación judicial cierra el expediente de rendición pero no impide las acciones recíprocas posteriores entre el defensor y el afectado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.3 y 51.5 LJV"
    }
   ],
   "pregunta": "¿El Juez aprueba las cuentas?",
   "opciones": [
    {
     "texto": "Sí, cuentas aprobadas — expediente concluido correctamente",
     "tono": "t-ok",
     "nota": "Aprobadas",
     "destino": "fin_exitoso"
    },
    {
     "texto": "No aprobadas — acciones recíprocas expeditas",
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
     "texto": "El expediente ha concluido satisfactoriamente. El defensor judicial ha cesado por causa legal, las cuentas de gestión han sido aprobadas judicialmente y todos los efectos del art. 29 LJV han quedado extinguidos desde la aceptación del cargo."
    },
    {
     "tipo": "nota",
     "texto": "Resolución firme: cosa juzgada sobre el objeto del expediente (art. 19.3 LJV). La aprobación de cuentas no impide las acciones recíprocas por razón de la gestión (art. 51.5 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 19.3 LJV · Art. 29 LJV · Art. 51.5 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_limite_directo": {
   "fase": 0,
   "titulo": "No procede: límite del artículo 27 in fine",
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
     "texto": "La solicitud presenta un defecto insubsanable. El Secretario judicial dicta decreto archivando el expediente o da cuenta al Juez si a él corresponde la resolución (art. 17.1 LJV). Si el archivo se produce antes de que el defensor acepte el cargo, los plazos del art. 29 LJV no llegan a suspenderse."
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
     "texto": "El solicitante no subsanó el defecto en el plazo de 5 días. Se tiene por no presentada la solicitud y se archiva el expediente (art. 17.4 LJV). La suspensión de plazos del art. 29 LJV —si llegó a iniciarse— queda sin efecto con el archivo firme."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.4 LJV · Art. 29 LJV"
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
     "texto": "El solicitante no asistió a la comparecencia sin causa justificada. Se le tiene por desistido y el expediente se archiva (art. 18.2, 1.ª LJV). La suspensión de plazos del art. 29 LJV cesa con el archivo firme. Si la no asistencia tiene causa justificada, puede acreditarse para evitar este efecto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2, 1.ª LJV · Art. 21 LJV · Art. 29 LJV"
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
     "texto": "La resolución desestimatoria ha devenido firme. Cosa juzgada sobre el objeto del expediente: no cabe nuevo expediente sobre idéntico objeto salvo cambio de circunstancias. El art. 19.4 LJV permite, sin embargo, la incoacin de un proceso contencioso posterior con el mismo objeto."
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
   "titulo": "Cuentas no aprobadas: acciones recíprocas expeditas (art. 51.5 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez no ha aprobado las cuentas. Quedan expeditas las acciones recíprocas entre el defensor judicial y el afectado o sus causahabientes por razón de la gestión (art. 51.5 LJV). El cargo queda extinguido en todo caso."
    },
    {
     "tipo": "nota",
     "texto": "La no aprobación no implica automáticamente responsabilidad civil o penal del defensor: será preciso ejercitar las acciones correspondientes en la vía oportuna."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.5 LJV · Art. 32 LJV · Art. 298 CC"
    }
   ],
   "fin": "warning"
  }
 },
 "pie": "Referencias claveArts. 27–32 LJV<br>Arts. 235–236, 295–298 CC<br>Arts. 7–9 LEC · Art. 7 bis LJV<br>Ley 8/2021 · LO 1/1996"
});
