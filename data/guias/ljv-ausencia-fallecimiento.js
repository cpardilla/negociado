/* Migrado por tools/migrate.js desde sources/actual/G17.json; revisado con el BOE (registro: docs/revision/ljv-ausencia-fallecimiento.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-ausencia-fallecimiento",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la declaración de ausencia y fallecimiento (artículos 67 a 77 LJV)",
 "corto": "Declaración de ausencia y fallecimiento",
 "articulos": [
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G17"
 },
 "fases": [
  "Inicio y Competencia",
  "Defensor Judicial",
  "Declaración de Ausencia",
  "Medidas e Inventario",
  "Declaración de Fallecimiento",
  "Hechos Posteriores",
  "Comunicación Registral"
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
   "titulo": "Inicio del procedimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expedientes del capítulo IX del título II LJV (arts. 67 a 77): las actuaciones del título VIII del libro I del Código Civil sobre desaparición y declaraciones de ausencia y fallecimiento (arts. 181 a 198 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Los tramita y resuelve el LAJ: nombramiento de defensor (art. 69), declaración de ausencia y representante (arts. 70 y 71), medidas (art. 72), declaración de fallecimiento (art. 74) y hechos posteriores (art. 75). Contra sus decretos definitivos cabe recurso de revisión ante el Juez (art. 20.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la intervención de Abogado ni Procurador (art. 68.4 LJV); sí para los recursos de revisión y apelación contra la resolución definitiva (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 67 a 77 LJV · Arts. 181 a 198 CC · Art. 20.2 LJV"
    }
   ],
   "pregunta": "¿Qué tipo de procedimiento necesita tramitar?",
   "opciones": [
    {
     "texto": "Nombramiento de defensor judicial por desaparición",
     "tono": "t-ok",
     "nota": "La persona ha desaparecido sin noticias y se necesita representación para actos urgentes (Art. 69 LJV, Art. 181 CC)",
     "destino": "defensor_judicial"
    },
    {
     "texto": "Declaración de ausencia legal",
     "tono": "t-ok",
     "nota": "Se cumplen los plazos legales para declarar la ausencia conforme a los arts. 182-184 CC (Art. 70 LJV)",
     "destino": "competencia_ausencia"
    },
    {
     "texto": "Declaración de fallecimiento (arts. 193 y 194 CC; art. 74 LJV)",
     "tono": "t-ok",
     "nota": "Procede declarar el fallecimiento conforme a los arts. 193-196 CC (Art. 74 LJV)",
     "destino": "competencia_fallecimiento"
    },
    {
     "texto": "Hechos posteriores",
     "tono": "t-plazo",
     "nota": "Se ha presentado el ausente, hay noticias de su existencia, o se ha comprobado su fallecimiento (Arts. 75-76 LJV)",
     "destino": "hechos_posteriores"
    }
   ]
  },
  "competencia_ausencia": {
   "fase": 0,
   "titulo": "Determinar competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juzgado de Primera Instancia del último domicilio del desaparecido o, en su defecto, de su última residencia (art. 68.1 LJV). Hoy, la Sección Civil del Tribunal de Instancia (decisión 11: el capítulo IX no es de la Sección de Familia, Infancia y Capacidad)."
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la intervención de Abogado ni Procurador (art. 68.4 LJV); sí para los recursos de revisión y apelación (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68.1 y 4 LJV · Art. 3.2 LJV · Art. 86.5 j) LOPJ"
    }
   ],
   "siguiente": "legitimacion_ausencia"
  },
  "competencia_fallecimiento": {
   "fase": 0,
   "titulo": "Determinar competencia (fallecimiento)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Regla general: el Juzgado del último domicilio o, en su defecto, de la última residencia (art. 68.1 LJV). Hoy, la Sección Civil del Tribunal de Instancia."
    },
    {
     "tipo": "nota",
     "texto": "Siniestro de nave o aeronave (art. 194.2.º y 3.º CC): competencia especial del art. 68.1, párrafo segundo, y solo puede instarla el Ministerio Fiscal (art. 68.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68 LJV · Art. 74 LJV · Arts. 193 y 194 CC"
    }
   ],
   "pregunta": "¿Qué supuesto de fallecimiento se plantea?",
   "opciones": [
    {
     "texto": "Siniestro de nave o aeronave ocurrido en España (art. 194.2.º y 3.º CC)",
     "tono": "t-aviso",
     "destino": "legitimacion_ausencia_siniestro"
    },
    {
     "texto": "Siniestro de nave o aeronave ocurrido fuera de España (art. 194.2.º y 3.º CC)",
     "tono": "t-aviso",
     "destino": "legitimacion_ausencia_siniestro_ext"
    },
    {
     "texto": "Desaparición sin siniestro (art. 193 y art. 194.1.º, 4.º y 5.º CC): la insta cualquier interesado o el Fiscal",
     "tono": "t-nota",
     "destino": "fallecimiento_no_siniestro"
    },
    {
     "texto": "Ya existe declaración de ausencia previa",
     "tono": "t-nota",
     "destino": "fallecimiento_con_ausencia"
    }
   ]
  },
  "defensor_judicial": {
   "fase": 1,
   "titulo": "Nombramiento de defensor judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Desaparecida una persona de su domicilio o última residencia sin más noticias, el LAJ, a instancia de parte interesada o del Ministerio Fiscal, puede nombrar un defensor que la ampare y represente en juicio o en los negocios que no admitan demora sin perjuicio grave (art. 181 CC; art. 69 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "No procede si el desaparecido está legítimamente representado voluntariamente (arts. 181 y 183 CC). Puede adoptarse también, según prudente arbitrio, las medidas necesarias para conservar el patrimonio (art. 181 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV · Art. 181 CC"
    }
   ],
   "pregunta": "¿Existe urgencia que impida esperar a la comparecencia ordinaria?",
   "opciones": [
    {
     "texto": "Sí, hay urgencia: se seguiría perjuicio si se espera a la comparecencia (art. 69.2 LJV)",
     "tono": "t-plazo",
     "nota": "Nombramiento urgente: el LAJ designa defensor inmediatamente y adopta medidas de protección patrimonial",
     "destino": "defensor_urgente"
    },
    {
     "texto": "No: comparecencia en el plazo máximo de cinco días (art. 69.1 LJV)",
     "tono": "t-ok",
     "nota": "Comparecencia en plazo máximo de 5 días con citación a interesados, MF y testigos",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_ordinario": {
   "fase": 1,
   "titulo": "Nombramiento ordinario de defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento: Solicitud → Comparecencia en plazo máximo de 5 días → Citación a interesados, Ministerio Fiscal y testigos → Audiencia y práctica de pruebas → Resolución de nombramiento."
    },
    {
     "tipo": "plazo",
     "texto": "Comparecencia en el plazo máximo de cinco días desde la presentación de la solicitud, con citación de los interesados y del Fiscal y audiencia de los testigos propuestos (art. 69.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Defensor nato: el cónyuge presente mayor de edad no separado legalmente; a falta de él, el pariente más próximo hasta el cuarto grado, mayor de edad. En defecto de parientes, si no están presentes o hay urgencia notoria, el LAJ nombra a una persona solvente y de buenos antecedentes, previa audiencia del Fiscal (art. 181 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist del procedimiento ordinario",
     "items": [
      "Solicitud recibida con datos del desaparecido",
      "Citación a interesados, MF y testigos",
      "Señalamiento de comparecencia dentro de 5 días",
      "Audiencia de alegaciones y práctica de pruebas",
      "Verificación de orden de prelación",
      "Resolución de nombramiento por decreto"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.1 LJV · Art. 181 CC"
    }
   ],
   "pregunta": "¿Se ha completado la comparecencia y se ha nombrado defensor?",
   "opciones": [
    {
     "texto": "Sí, defensor nombrado conforme a orden de prelación",
     "tono": "t-ok",
     "nota": "Se emite decreto de nombramiento. El defensor debe aceptar el cargo.",
     "destino": "defensor_aceptacion"
    },
    {
     "texto": "No compareció nadie o no hay persona idónea",
     "tono": "t-plazo",
     "nota": "El LAJ designa persona solvente de buenos antecedentes, oído el MF",
     "destino": "defensor_designado_laj"
    }
   ]
  },
  "defensor_urgente": {
   "fase": 1,
   "titulo": "Nombramiento urgente de defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se siguiera perjuicio esperando a la comparecencia, el LAJ puede designar de inmediato defensor a quien corresponda o a quien proponga el solicitante y adoptar medidas urgentes de protección del patrimonio del desaparecido (art. 69.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Después continúan los trámites ordinarios, y el expediente termina por resolución que ratifica o revoca el nombramiento y las medidas acordadas al inicio (art. 69.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.2 LJV · Art. 181 CC"
    }
   ],
   "pregunta": "¿Qué decide la resolución final?",
   "opciones": [
    {
     "texto": "Ratifica el nombramiento y las medidas",
     "tono": "t-ok",
     "nota": "El defensor continúa en el cargo con las medidas confirmadas",
     "destino": "fin_defensor_ratificado"
    },
    {
     "texto": "Los revoca: se sigue el nombramiento ordinario",
     "tono": "t-aviso",
     "nota": "Se procede a nuevo nombramiento conforme al procedimiento ordinario",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_aceptacion": {
   "fase": 1,
   "titulo": "Aceptación del cargo por el defensor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor nombrado acepta el cargo y asume el amparo y la representación del desaparecido en juicio y en los negocios urgentes (art. 181 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El nombramiento se hace constar en el Registro Civil (art. 198 CC; art. 77 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV · Arts. 181 y 198 CC · Art. 77 LJV"
    }
   ],
   "pregunta": "¿Acepta el defensor el cargo?",
   "opciones": [
    {
     "texto": "Sí, acepta y se compromete",
     "tono": "t-ok",
     "nota": "El defensor asume sus funciones. Proceda a registrar el nombramiento.",
     "destino": "fin_defensor_nombrado"
    },
    {
     "texto": "No, se excusa o rechaza el cargo",
     "tono": "t-plazo",
     "nota": "Se procede a nombrar al siguiente en orden de prelación",
     "destino": "defensor_ordinario"
    }
   ]
  },
  "defensor_designado_laj": {
   "fase": 1,
   "titulo": "Designación de defensor por el LAJ",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando no comparece nadie idóneo, el LAJ designa como defensor a una persona solvente y de buenos antecedentes, previa audiencia del Ministerio Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ la designa a su prudente arbitrio (art. 181 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.1 LJV · Art. 181 CC"
    }
   ],
   "siguiente": "defensor_aceptacion"
  },
  "legitimacion_ausencia": {
   "fase": 2,
   "titulo": "Verificar legitimación activa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pueden pedir la declaración de ausencia el Ministerio Fiscal, de oficio o por denuncia; el cónyuge no separado legalmente; quien esté unido al ausente por análoga relación de afectividad; los parientes consanguíneos hasta el cuarto grado, y cualquier persona que fundadamente pueda tener sobre los bienes del desaparecido algún derecho ejercitable en vida de este o dependiente de su muerte (art. 68.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El cónyuge, los parientes consanguíneos hasta el cuarto grado y el Fiscal tienen la obligación de promoverla (art. 182 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68.2 LJV · Art. 182 CC"
    }
   ],
   "pregunta": "¿Quién solicita la declaración de ausencia?",
   "opciones": [
    {
     "texto": "Ministerio Fiscal",
     "tono": "t-ok",
     "nota": "Legitimación genérica como garante del interés público",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Cónyuge no separado legalmente o persona unida por análoga relación de afectividad",
     "tono": "t-ok",
     "nota": "Vínculo vigente, interés patrimonial y personal",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Parientes consanguíneos hasta el cuarto grado",
     "tono": "t-ok",
     "nota": "Orden de prelación sucesoria, interés en estado civil",
     "destino": "solicitud_ausencia"
    },
    {
     "texto": "Quien pueda tener sobre los bienes un derecho ejercitable en vida del desaparecido o dependiente de su muerte",
     "tono": "t-nota",
     "nota": "Acreedores, codeudores, titulares de derechos reales",
     "destino": "solicitud_ausencia"
    }
   ]
  },
  "legitimacion_ausencia_siniestro": {
   "fase": 4,
   "titulo": "Competencia por siniestro en España",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente, para todos los afectados, el Juzgado de Primera Instancia del lugar del siniestro (art. 68.1, párrafo segundo, LJV). La declaración solo puede instarla el Ministerio Fiscal (art. 68.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68.1 y 2 LJV · Art. 194.2.º y 3.º CC"
    }
   ],
   "siguiente": "fallecimiento_siniestro"
  },
  "legitimacion_ausencia_siniestro_ext": {
   "fase": 4,
   "titulo": "Competencia por siniestro fuera de España",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el siniestro ocurrió fuera de España: respecto de españoles y residentes en España, el Juzgado del lugar donde se inició el viaje; si se inició en el extranjero, el del domicilio o residencia en España de la mayoría de los afectados; y, si no puede determinarse así, el del domicilio o residencia de cualquiera de ellos (art. 68.1, párrafo segundo, LJV). Solo puede instarla el Ministerio Fiscal (art. 68.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 68.1 y 2 LJV · Art. 194.2.º y 3.º CC"
    }
   ],
   "siguiente": "fallecimiento_siniestro"
  },
  "solicitud_ausencia": {
   "fase": 2,
   "titulo": "Contenido de la solicitud inicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud expresa el nombre, domicilio y demás datos de localización de los parientes conocidos más próximos hasta el cuarto grado de consanguinidad y el segundo de afinidad (art. 68.3 LJV), y se acompañan las pruebas que acrediten los requisitos del Código Civil (art. 70.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist de la solicitud",
     "items": [
      "Datos del solicitante y del desaparecido",
      "Parientes hasta el cuarto grado de consanguinidad y el segundo de afinidad, con sus datos de localización (art. 68.3 LJV)",
      "Hechos de la desaparición y fecha de las últimas noticias",
      "Si dejó apoderado, el poder y su alcance (art. 183 CC)",
      "Pruebas (art. 70.1 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 68.3 y 70.1 LJV · Arts. 182 y 183 CC"
    }
   ],
   "pregunta": "¿Se cumplen los plazos legales para declarar la ausencia?",
   "opciones": [
    {
     "texto": "Sí: un año desde las últimas noticias (o desde la desaparición), sin apoderado con facultades de administración de todos sus bienes (art. 183.1.º CC)",
     "tono": "t-ok",
     "nota": "Art. 183 CC: transcurrido 1 año sin noticias y sin apoderado",
     "destino": "admision_ausencia"
    },
    {
     "texto": "Sí: tres años, con apoderado para la administración de todos sus bienes (art. 183.2.º CC)",
     "tono": "t-ok",
     "nota": "Art. 183 CC: transcurridos 3 años desde las últimas noticias",
     "destino": "admision_ausencia"
    },
    {
     "texto": "Sí: muerte o renuncia justificada del mandatario o caducidad del mandato, ignorándose el paradero y pasado un año desde las últimas noticias (art. 183 CC)",
     "tono": "t-ok",
     "nota": "La caducidad del mandato determina la ausencia si se ignora el paradero",
     "destino": "admision_ausencia"
    },
    {
     "texto": "No se cumplen los plazos",
     "tono": "t-aviso",
     "nota": "No procede la declaración de ausencia en este momento",
     "destino": "fin_plazos_no_cumplidos"
    }
   ]
  },
  "admision_ausencia": {
   "fase": 2,
   "titulo": "Admisión a trámite y comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ admite la solicitud y señala la comparecencia, a la que cita al solicitante, al Ministerio Fiscal, a los parientes indicados en la solicitud y a quienes consten como interesados (art. 70.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Comparecencia en el plazo máximo de un mes (art. 70.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La admisión se publica dos veces por edictos, con intervalo mínimo de ocho días, en el Tablón Judicial Edictal Único y en el tablón del Ayuntamiento del último domicilio; el edicto advierte que puede intervenir en la comparecencia cualquier interesado (art. 70.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ puede acordar, de oficio o a instancia de interesado y con intervención del Fiscal, medidas de averiguación e investigación y de protección del desaparecido (art. 70.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 70.2 y 3 LJV"
    }
   ],
   "pregunta": "¿Resultado de la comparecencia y las pruebas?",
   "opciones": [
    {
     "texto": "Procede la declaración de ausencia",
     "tono": "t-ok",
     "nota": "Practicadas las pruebas y finalizada la comparecencia, concurren los requisitos legales",
     "destino": "resolucion_ausencia"
    },
    {
     "texto": "Se necesita práctica de prueba posterior",
     "tono": "t-plazo",
     "nota": "El LAJ puede acordar práctica posterior de pruebas propuestas (testigos, peritos, documentación)",
     "destino": "prueba_posterior_ausencia"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "No se acreditan suficientemente los requisitos legales",
     "destino": "fin_ausencia_no_procede"
    }
   ]
  },
  "prueba_posterior_ausencia": {
   "fase": 2,
   "titulo": "Prueba posterior a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si en la comparecencia se propone algún medio de prueba o actuación útil para averiguar el paradero, el LAJ puede acordar su práctica posterior (art. 70.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 70.4 LJV"
    }
   ],
   "pregunta": "¿Resultado de la prueba posterior?",
   "opciones": [
    {
     "texto": "Procede la declaración de ausencia",
     "tono": "t-ok",
     "nota": "Las pruebas posteriores confirman los requisitos",
     "destino": "resolucion_ausencia"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "Las pruebas no acreditan suficientemente los requisitos",
     "destino": "fin_ausencia_no_procede"
    }
   ]
  },
  "resolucion_ausencia": {
   "fase": 2,
   "titulo": "Decreto de declaración de ausencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicadas las pruebas y finalizada la comparecencia, el LAJ, si procede, dicta decreto de declaración legal de ausencia y nombra representante del ausente conforme al art. 184 CC (art. 71.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Representante del ausente, salvo motivo grave (art. 184 CC)",
     "items": [
      "1.º El cónyuge presente mayor de edad no separado legalmente o de hecho",
      "2.º El hijo mayor de edad (preferidos los que convivían con el ausente y el mayor al menor)",
      "3.º El ascendiente más próximo de menos edad",
      "4.º Los hermanos mayores de edad que hayan convivido familiarmente con el ausente (el mayor sobre el menor)",
      "En su defecto, la persona solvente de buenos antecedentes que designe el LAJ, oído el Fiscal"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Inscrita en el Registro Civil la declaración de ausencia, quedan extinguidos de derecho todos los mandatos otorgados por el ausente (art. 183 CC; art. 198 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 71.1 LJV · Arts. 183, 184 y 198 CC"
    }
   ],
   "siguiente": "representante_ausente"
  },
  "representante_ausente": {
   "fase": 2,
   "titulo": "Régimen del representante del ausente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al representante le corresponden la pesquisa de la persona del ausente, la protección y administración de sus bienes y el cumplimiento de sus obligaciones (art. 71.1 LJV; art. 184 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones (art. 185 CC)",
     "items": [
      "Inventariar los bienes muebles y describir los inmuebles",
      "Prestar la garantía que fije el LAJ (salvo los representantes de los números 1.º a 3.º del art. 184)",
      "Conservar y defender el patrimonio y obtener sus rendimientos normales"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "A los representantes dativos se les aplican, en lo que se adapten, las normas de los capítulos IV y VIII de la LJV sobre nombramiento, aceptación, excusa y remoción, fianza, retribución, autorizaciones y aprobaciones de actos y rendición de cuentas al concluir la gestión, que tramita y decide el LAJ (art. 71.2 LJV; art. 185 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Los representantes legítimos tienen la posesión temporal del patrimonio y hacen suyos los productos en la cuantía que señale el LAJ; no pueden vender, gravar, hipotecar o dar en prenda sino por necesidad o utilidad evidente declarada por el LAJ, que fija el empleo de lo obtenido (art. 186 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 71 LJV · Arts. 184 a 186 CC"
    }
   ],
   "pregunta": "¿Existían medidas provisionales adoptadas con anterioridad?",
   "opciones": [
    {
     "texto": "Sí, existían medidas previas",
     "tono": "t-plazo",
     "nota": "Las medidas subsisten hasta la declaración de ausencia. Pueden modificarse.",
     "destino": "medidas_subsistencia"
    },
    {
     "texto": "No, pero se necesitan nuevas medidas",
     "tono": "t-nota",
     "nota": "El LAJ puede adoptar medidas provisionales no existentes",
     "destino": "medidas_nuevas"
    },
    {
     "texto": "No se necesitan medidas provisionales",
     "tono": "t-ok",
     "nota": "Proceda directamente al inventario de bienes",
     "destino": "inventario_bienes"
    }
   ]
  },
  "medidas_subsistencia": {
   "fase": 3,
   "titulo": "Subsistencia de medidas provisionales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las medidas del Código Civil para los casos de desaparición adoptadas antes de iniciarse el expediente subsisten hasta la declaración de ausencia, salvo que el LAJ, a instancia del interesado o del Ministerio Fiscal, estime conveniente modificarlas (art. 72.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 72.1 LJV · Art. 181 CC"
    }
   ],
   "pregunta": "¿Se modifican las medidas previas?",
   "opciones": [
    {
     "texto": "Sí, el LAJ las modifica a instancia del interesado o del Fiscal",
     "tono": "t-plazo",
     "nota": "Comparecencia simplificada con audiencia de los afectados",
     "destino": "inventario_bienes"
    },
    {
     "texto": "No, subsisten tal cual",
     "tono": "t-ok",
     "nota": "Las medidas se mantienen hasta resolución del expediente",
     "destino": "inventario_bienes"
    }
   ]
  },
  "medidas_nuevas": {
   "fase": 3,
   "titulo": "Adopción de medidas provisionales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no se hubieran adoptado, el LAJ puede acordarlas con carácter provisional mientras no se ultime el expediente de ausencia (art. 72.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Además, puede adoptar de oficio o a instancia de interesado, con intervención del Fiscal, medidas de averiguación e investigación y todas las de protección que juzgue útiles al desaparecido o ausente (art. 70.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 72.2 LJV · Art. 70.3 LJV"
    }
   ],
   "siguiente": "inventario_bienes"
  },
  "inventario_bienes": {
   "fase": 3,
   "titulo": "Práctica de inventario de bienes",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Aceptado el cargo, el representante, al que se da testimonio de la resolución como título, hace el inventario de los bienes muebles y la descripción de los inmuebles del art. 185.1.ª CC, incluyendo las deudas u obligaciones pendientes del ausente (art. 73 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Se practica en el mismo expediente, con intervención del Ministerio Fiscal y de todos los interesados personados (art. 73 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El inventario se anota en el Registro Civil (art. 198 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 73 LJV · Arts. 185 y 198 CC"
    }
   ],
   "pregunta": "¿Desea continuar con la comunicación al Registro Civil?",
   "opciones": [
    {
     "texto": "Sí, proceda a la inscripción registral",
     "tono": "t-ok",
     "nota": "Remisión de testimonios al Registro Civil conforme al Art. 77 LJV",
     "destino": "comunicacion_registro"
    },
    {
     "texto": "El procedimiento ha concluido aquí",
     "tono": "t-ok",
     "nota": "La ausencia legal ha sido declarada con todas las garantías",
     "destino": "fin_ausencia_declarada"
    }
   ]
  },
  "fallecimiento_siniestro": {
   "fase": 4,
   "titulo": "Fallecimiento por siniestro de nave/aeronave",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Ministerio Fiscal insta la declaración inmediatamente después del siniestro (art. 194.2.º CC) o, en el caso del art. 194.3.º, a los ocho días si no se han identificado los restos (art. 74.1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Pruebas en el plazo máximo de cinco días, con la colaboración, en su caso, de las oficinas diplomáticas o consulares; el LAJ dicta la resolución el mismo día (art. 74.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El decreto declara el fallecimiento de cuantas personas se encuentren en esa situación, con la fecha del siniestro como fecha de la muerte (art. 74.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.1 LJV · Art. 194.2.º y 3.º CC"
    }
   ],
   "pregunta": "¿Resultado del procedimiento?",
   "opciones": [
    {
     "texto": "Se declara el fallecimiento",
     "tono": "t-ok",
     "nota": "Decreto de declaración de fallecimiento con fecha del siniestro",
     "destino": "resolucion_fallecimiento"
    },
    {
     "texto": "No se acredita suficientemente",
     "tono": "t-aviso",
     "nota": "Pruebas insuficientes para declarar el fallecimiento",
     "destino": "fin_fallecimiento_no_acredita"
    }
   ]
  },
  "fallecimiento_no_siniestro": {
   "fase": 4,
   "titulo": "Fallecimiento sin siniestro comprobado (art. 193 y art. 194.1.º, 4.º y 5.º CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La declaración del art. 193 y del art. 194.1.º, 4.º y 5.º CC puede instarla cualquier interesado o el Ministerio Fiscal, y se tramita conforme a este capítulo (art. 74.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos (arts. 193 y 194 CC)",
     "items": [
      "Diez años desde las últimas noticias o, a falta de ellas, desde la desaparición (art. 193.1.º)",
      "Cinco años si al expirar el plazo el ausente hubiera cumplido setenta y cinco años (art. 193.2.º); ambos plazos se cuentan desde el final del año natural de las últimas noticias o de la desaparición",
      "Un año, de fecha a fecha, desde un riesgo inminente de muerte por violencia sin noticias posteriores; tres meses en caso de siniestro (art. 193.3.º)",
      "Desaparecidos en operaciones de campaña: dos años desde el tratado de paz o la declaración oficial de fin de la guerra (art. 194.1.º)",
      "Nave o aeronave que se presume siniestrada por no llegar a su destino o no retornar, con evidencias racionales de ausencia de supervivientes: un mes (art. 194.4.º y 5.º)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV · Arts. 193 y 194 CC"
    }
   ],
   "pregunta": "¿Se cumplen los plazos y requisitos legales?",
   "opciones": [
    {
     "texto": "Sí, se cumplen los requisitos",
     "tono": "t-ok",
     "nota": "Procede la tramitación de la declaración de fallecimiento",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "No se cumplen los plazos",
     "tono": "t-aviso",
     "nota": "No procede la declaración de fallecimiento en este momento",
     "destino": "fin_plazos_fallecimiento_no"
    }
   ]
  },
  "fallecimiento_con_ausencia": {
   "fase": 4,
   "titulo": "Fallecimiento con ausencia legal previa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si hubo declaración de ausencia, el decreto que declare el fallecimiento declara también, si resulta acreditado, el cese de la ausencia legal (art. 74.2 LJV; art. 195 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El decreto expresa la fecha a partir de la cual se entiende sucedida la muerte (art. 74.2 LJV; art. 195 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV · Arts. 193 a 195 CC"
    }
   ],
   "pregunta": "¿Qué plazo de fallecimiento se cumple?",
   "opciones": [
    {
     "texto": "Diez años sin noticias (art. 193.1.º CC)",
     "tono": "t-nota",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Cinco años si ha cumplido setenta y cinco (art. 193.2.º CC)",
     "tono": "t-nota",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Riesgo inminente de muerte: un año; tres meses si es siniestro (art. 193.3.º CC)",
     "tono": "t-nota",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Operaciones de campaña (art. 194.1.º CC)",
     "tono": "t-nota",
     "destino": "tramitacion_fallecimiento"
    },
    {
     "texto": "Nave o aeronave que no llega a su destino (art. 194.4.º y 5.º CC)",
     "tono": "t-nota",
     "destino": "tramitacion_fallecimiento"
    }
   ]
  },
  "tramitacion_fallecimiento": {
   "fase": 4,
   "titulo": "Tramitación de la declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tramita conforme a este capítulo (art. 74.2 LJV): admisión, comparecencia, publicidad y prueba como en la ausencia (arts. 70 y 71 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Contenido del decreto de fallecimiento: fallecimiento con fecha conforme a criterios legales; cese de ausencia legal si la hubiera; efectos: apertura de sucesión, inscripción registral, liquidación de representación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.2 LJV; Arts. 70-71 LJV; CC arts. 193-196"
    }
   ],
   "pregunta": "¿Resultado de la tramitación?",
   "opciones": [
    {
     "texto": "Procede la declaración de fallecimiento",
     "tono": "t-ok",
     "nota": "Se emite decreto declarando el fallecimiento",
     "destino": "resolucion_fallecimiento"
    },
    {
     "texto": "No procede la declaración",
     "tono": "t-aviso",
     "nota": "No se acreditan suficientemente los requisitos legales",
     "destino": "fin_fallecimiento_no_procede"
    }
   ]
  },
  "resolucion_fallecimiento": {
   "fase": 4,
   "titulo": "Decreto de declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Firme la declaración de fallecimiento, se abre la sucesión y se adjudican los bienes por los trámites de la LEC o extrajudicialmente (art. 74.3 LJV; art. 196 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Los herederos no pueden disponer a título gratuito hasta cinco años después de la declaración; hasta entonces no se entregan los legados, salvo las mandas piadosas y los legados a instituciones de beneficencia (art. 196 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Los sucesores deben formar notarialmente inventario detallado de los muebles y descripción de los inmuebles, aunque no haga falta partición (art. 196 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.3 LJV · Arts. 195 y 196 CC · Arts. 782 y ss. LEC"
    }
   ],
   "pregunta": "¿Cómo se adjudican los bienes de la sucesión?",
   "opciones": [
    {
     "texto": "Vía judicial: división judicial de la herencia (arts. 782 y ss. LEC)",
     "tono": "t-ok",
     "nota": "Partición y adjudicación judicial de la herencia",
     "destino": "sucesion_judicial"
    },
    {
     "texto": "Vía extrajudicial (escritura pública ante Notario)",
     "tono": "t-ok",
     "nota": "Partición notarial con intervención de todos los herederos",
     "destino": "sucesion_notarial"
    }
   ]
  },
  "sucesion_judicial": {
   "fase": 4,
   "titulo": "Adjudicación judicial de la herencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La adjudicación se hace por el procedimiento de división judicial de la herencia (arts. 782 y ss. LEC; art. 74.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Los sucesores forman además el inventario notarial del art. 196 CC."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 782 y ss. LEC · Art. 74.3 LJV · Art. 196 CC"
    }
   ],
   "siguiente": "comunicacion_registro_fallecimiento"
  },
  "sucesion_notarial": {
   "fase": 4,
   "titulo": "Adjudicación notarial de la herencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Escritura pública de partición ante Notario con intervención de todos los herederos y aceptación de la declaración de fallecimiento."
    },
    {
     "tipo": "nota",
     "texto": "Obligación de inventario notarial: formación de inventario detallado de bienes muebles y descripción de inmuebles."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.3 LJV; Ley Notariado; CC art. 196"
    }
   ],
   "siguiente": "comunicacion_registro_fallecimiento"
  },
  "comunicacion_registro_fallecimiento": {
   "fase": 4,
   "titulo": "Comunicación al Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Remisión de testimonios al Registro Civil conforme al Art. 77 LJV y Art. 198 CC para inscripción de la declaración de fallecimiento en el registro individual."
    },
    {
     "tipo": "nota",
     "texto": "Se inscribe en el registro individual del declarado fallecido, con la fecha a partir de la cual se entiende ocurrida la muerte (art. 78 LRC); se anotan la escritura de inventario y las de partición y adjudicación (art. 198 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 77 LJV; Art. 198 CC; LRC art. 78"
    }
   ],
   "siguiente": "fin_fallecimiento_declarado"
  },
  "hechos_posteriores": {
   "fase": 5,
   "titulo": "Hechos posteriores a la declaración",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento ante la presentación, noticias de existencia o fallecimiento del declarado ausente o fallecido, conforme al Art. 75 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Cuatro supuestos regulados: 1) Presentación del presunto ausente/fallecido; 2) Noticias de existencia sin presentación; 3) Suspensión de la actuación del representante; 4) Noticia de muerte del desaparecido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75 LJV; Art. 76 LJV; CC art. 197"
    }
   ],
   "pregunta": "¿Qué hecho posterior se ha producido?",
   "opciones": [
    {
     "texto": "Se presenta el presunto ausente o fallecido",
     "tono": "t-ok",
     "nota": "La persona se presenta y solicita identificación",
     "destino": "presentacion_ausente"
    },
    {
     "texto": "Hay noticias de existencia sin presentación",
     "tono": "t-plazo",
     "nota": "Se tiene noticia de que la persona puede estar viva",
     "destino": "noticias_existencia"
    },
    {
     "texto": "Persona con identificación solicita suspensión",
     "tono": "t-plazo",
     "nota": "Alguien dice ser el desaparecido y aporta documentación",
     "destino": "suspension_representante"
    },
    {
     "texto": "Noticia de muerte del desaparecido",
     "tono": "t-aviso",
     "nota": "Se ha tenido noticia del fallecimiento efectivo",
     "destino": "noticia_muerte"
    },
    {
     "texto": "Fallecimiento comprobado durante el expediente",
     "tono": "t-nota",
     "nota": "Se comprueba el fallecimiento en cualquier momento de la tramitación (Art. 76 LJV)",
     "destino": "fallecimiento_comprobado"
    }
   ]
  },
  "presentacion_ausente": {
   "fase": 5,
   "titulo": "Presentación del presunto ausente/fallecido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La persona que dice ser el ausente o fallecido se presenta. El LAJ acuerda de oficio o a instancia la identificación por medios adecuados."
    },
    {
     "tipo": "nota",
     "texto": "Medios de identificación: pruebas documentales (DNI, pasaporte, partidas); pruebas biológicas (ADN); declaraciones de testigos; informes periciales."
    },
    {
     "tipo": "nota",
     "texto": "Comparecencia de verificación: citación a persona presentada, MF y todos los que hubieren intervenido en el expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Resolución: decreto dentro de los 3 días siguientes a la comparecencia (Art. 75.1 LJV)"
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.1 LJV · Arts. 187 y 197 CC"
    }
   ],
   "pregunta": "¿Resultado de la verificación de identidad?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: se revoca la declaración",
     "tono": "t-ok",
     "nota": "Restitución del patrimonio (art. 187 CC si había ausencia; art. 197 CC si había declaración de fallecimiento)",
     "destino": "fin_revocacion_presentacion"
    },
    {
     "texto": "No se confirma la identidad: se ratifica la declaración",
     "tono": "t-aviso",
     "nota": "La declaración de ausencia o fallecimiento se mantiene",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "noticias_existencia": {
   "fase": 5,
   "titulo": "Noticias de existencia sin presentación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se recibe noticia de que el declarado ausente o fallecido podría estar vivo, pero no se ha presentado personalmente."
    },
    {
     "tipo": "nota",
     "texto": "Se notifica personalmente al presunto afectado la resolución de declaración, requiriéndole para que aporte pruebas de su identidad (art. 75.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para aporte de pruebas: 20 días desde la notificación (Art. 75.2 LJV)"
    },
    {
     "tipo": "nota",
     "texto": "Transcurrido el plazo, haya aportado o no las pruebas, el LAJ convoca la comparecencia y resuelve en los tres días siguientes (art. 75.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.2 LJV"
    }
   ],
   "pregunta": "¿Resultado de la comparecencia?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: se revoca la declaración",
     "tono": "t-ok",
     "nota": "Se deja sin efecto la declaración de ausencia o fallecimiento",
     "destino": "fin_revocacion_noticias"
    },
    {
     "texto": "No se confirma: se ratifica la declaración",
     "tono": "t-aviso",
     "nota": "La declaración se mantiene",
     "destino": "fin_ratificacion"
    },
    {
     "texto": "No comparece ni aporta pruebas: no se acredita la identidad",
     "tono": "t-aviso",
     "nota": "Se ratifica la declaración por falta de oposición",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "suspension_representante": {
   "fase": 5,
   "titulo": "Suspensión de la actuación del representante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si quien dice ser el desaparecido lo solicita y aporta identificación documental que el LAJ considere bastante, puede decretarse la suspensión de la actuación del representante del declarado ausente hasta la comparecencia (art. 75.3 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Resolución en 3 días siguientes a la comparecencia de verificación"
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.3 LJV"
    }
   ],
   "pregunta": "¿Resultado de la verificación?",
   "opciones": [
    {
     "texto": "Se confirma la identidad: suspensión definitiva y revocación",
     "tono": "t-ok",
     "nota": "Se revoca la declaración, se restituyen bienes",
     "destino": "fin_revocacion_suspension"
    },
    {
     "texto": "No se confirma: se levanta la suspensión",
     "tono": "t-aviso",
     "nota": "El representante continúa sus funciones",
     "destino": "fin_ratificacion"
    }
   ]
  },
  "noticia_muerte": {
   "fase": 5,
   "titulo": "Noticia de muerte del desaparecido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se tiene noticia de la muerte del desaparecido después de la declaración de ausencia o de fallecimiento, el LAJ, previa comparecencia con citación de los interesados y del Fiscal y práctica de las pruebas pertinentes, resuelve sobre la revocación de la resolución en los tres días siguientes (art. 75.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Probada la muerte del declarado ausente, se abre la sucesión en favor de quienes eran sus sucesores en el momento del fallecimiento, y el poseedor temporal les entrega el patrimonio (art. 188 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.4 LJV · Art. 188 CC"
    }
   ],
   "siguiente": "fallecimiento_comprobado"
  },
  "fallecimiento_comprobado": {
   "fase": 5,
   "titulo": "Constancia del fallecimiento (Art. 76)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si durante cualquiera de los expedientes de este capítulo se comprueba el fallecimiento del desaparecido o ausente, se archiva el expediente y quedan sin efecto las medidas adoptadas (art. 76 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La defunción se inscribe en el Registro Civil y se abre la sucesión (arts. 657 y ss. CC; art. 188 CC si había representante del ausente)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV · Arts. 188 y 657 y ss. CC"
    }
   ],
   "pregunta": "¿Procede la apertura de sucesión?",
   "opciones": [
    {
     "texto": "Sí, se abre la sucesión por fallecimiento efectivo",
     "tono": "t-ok",
     "nota": "Trámites conforme a normativa sucesoria",
     "destino": "fin_fallecimiento_comprobado"
    },
    {
     "texto": "El expediente se archiva sin más trámites",
     "tono": "t-nota",
     "nota": "No hay bienes ni herederos conocidos",
     "destino": "fin_archivo_expediente"
    }
   ]
  },
  "comunicacion_registro": {
   "fase": 6,
   "titulo": "Comunicación al Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se remiten al Registro Civil todos los testimonios necesarios para hacer constar lo previsto en el art. 198 CC (art. 77 LJV). Las declaraciones de ausencia y fallecimiento se inscriben en el registro individual del afectado (art. 78 LRC)."
    },
    {
     "tipo": "lista",
     "titulo": "Constan en el Registro Civil (art. 198 CC)",
     "items": [
      "Las declaraciones de desaparición, ausencia legal y fallecimiento",
      "Las representaciones legítimas y dativas y su extinción",
      "Los inventarios de muebles y descripciones de inmuebles",
      "Los decretos de concesión y las escrituras de transmisiones y gravámenes que efectúen los representantes",
      "La escritura de inventario y las de partición y adjudicación tras la declaración de fallecimiento"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 77 LJV · Art. 198 CC · Art. 78 LRC"
    }
   ],
   "siguiente": "fin_ausencia_declarada_registro"
  },
  "fin_defensor_nombrado": {
   "fase": 1,
   "titulo": "Defensor judicial nombrado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial ha sido nombrado conforme al procedimiento ordinario y ha aceptado el cargo. Sus funciones incluyen: pesquisa de la persona, protección y administración de bienes, y cumplimiento de obligaciones del desaparecido."
    },
    {
     "tipo": "nota",
     "texto": "El nombramiento debe comunicarse al Registro Civil conforme al Art. 77 LJV."
    },
    {
     "tipo": "nota",
     "texto": "Su función es amparar y representar al desaparecido en juicio y en los negocios urgentes (art. 181 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69 LJV · Art. 181 CC · Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_defensor_ratificado": {
   "fase": 1,
   "titulo": "Defensor urgente ratificado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El defensor judicial nombrado de forma urgente ha sido ratificado en la comparecencia retroactiva. Las medidas adoptadas se mantienen."
    },
    {
     "tipo": "nota",
     "texto": "Se comunica al Registro Civil (art. 77 LJV; art. 198 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 69.2 LJV; Art. 181 CC; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_plazos_no_cumplidos": {
   "fase": 2,
   "titulo": "Plazos legales no cumplidos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No procede la declaración de ausencia legal porque no se cumplen los plazos del art. 183 CC."
    },
    {
     "tipo": "nota",
     "texto": "Alternativas: Solicitar nombramiento de defensor judicial (Art. 69 LJV) para la protección provisional del desaparecido y sus bienes mientras transcurren los plazos legales."
    },
    {
     "tipo": "nota",
     "texto": "Plazos del art. 183 CC: un año sin apoderado general; tres años con él; o un año desde las últimas noticias si muere o renuncia el mandatario o caduca el mandato."
    },
    {
     "tipo": "ley",
     "texto": "Art. 183 CC · Art. 69 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_ausencia_no_procede": {
   "fase": 2,
   "titulo": "No procede la declaración de ausencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas no acreditan suficientemente los requisitos legales para declarar la ausencia conforme a los arts. 182-184 CC."
    },
    {
     "tipo": "nota",
     "texto": "Contra el decreto del LAJ cabe recurso de revisión ante el Juez (art. 20.2 LJV). Puede instarse de nuevo si cambian las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 19.3, 20.2 y 70 LJV · Arts. 182 y 183 CC"
    }
   ],
   "fin": "warning"
  },
  "fin_ausencia_declarada": {
   "fase": 3,
   "titulo": "Ausencia legal declarada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ausencia legal ha sido declarada mediante decreto del LAJ. Se ha nombrado representante conforme al Art. 184 CC, se han adoptado las medidas provisionales pertinentes y se ha practicado el inventario de bienes."
    },
    {
     "tipo": "nota",
     "texto": "Efectos: inscripción en el Registro Civil, con la que se extinguen los mandatos del ausente (art. 183 CC); representación del ausente. El procedimiento puede reabrirse si se producen hechos posteriores (Art. 75 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 70-73 LJV; CC arts. 182-185, 198; Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_ausencia_declarada_registro": {
   "fase": 6,
   "titulo": "Procedimiento completado con inscripción",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ausencia legal ha sido declarada, el representante nombrado, las medidas adoptadas, el inventario practicado y los testimonios remitidos al Registro Civil para inscripción. El procedimiento ha concluido con todas las garantías."
    },
    {
     "tipo": "nota",
     "texto": "La declaración se inscribe en el registro individual del ausente (art. 78 LRC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 67-73, 77 LJV; CC arts. 181-185, 198; LRC art. 78"
    }
   ],
   "fin": "success"
  },
  "fin_fallecimiento_no_acredita": {
   "fase": 4,
   "titulo": "Fallecimiento no acreditado por siniestro",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas en el plazo de 5 días no acreditan suficientemente el fallecimiento en el siniestro de nave o aeronave (art. 194.2.º y 3.º CC)."
    },
    {
     "tipo": "nota",
     "texto": "El MF puede reiterar la solicitud si obtiene nuevas pruebas. La colaboración diplomática y consular puede aportar documentación adicional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74.1 LJV; Art. 194.2.º y 3.º CC"
    }
   ],
   "fin": "warning"
  },
  "fin_fallecimiento_no_procede": {
   "fase": 4,
   "titulo": "No procede la declaración de fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas practicadas no acreditan suficientemente los requisitos legales para declarar el fallecimiento."
    },
    {
     "tipo": "nota",
     "texto": "Posibilidad de reiterar la solicitud si se obtienen nuevas pruebas o transcurren más plazos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 74 LJV; CC arts. 193-196"
    }
   ],
   "fin": "warning"
  },
  "fin_plazos_fallecimiento_no": {
   "fase": 4,
   "titulo": "Plazos de fallecimiento no cumplidos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se cumplen los plazos legales para declarar el fallecimiento conforme a los arts. 193-194 CC."
    },
    {
     "tipo": "nota",
     "texto": "Plazos de los arts. 193 y 194 CC: diez años; cinco si ha cumplido setenta y cinco; un año (tres meses si es siniestro) tras riesgo inminente de muerte; dos años tras el fin de la guerra; un mes si la nave o aeronave no llega a su destino."
    },
    {
     "tipo": "nota",
     "texto": "Alternativa: solicitar declaración de ausencia legal si se cumplen sus plazos."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 193-194; Art. 70 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_fallecimiento_declarado": {
   "fase": 6,
   "titulo": "Fallecimiento declarado y sucesión abierta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El fallecimiento ha sido declarado firme, la sucesión se ha abierto y adjudicado, y los testimonios han sido remitidos al Registro Civil. El procedimiento ha concluido."
    },
    {
     "tipo": "nota",
     "texto": "Los herederos no pueden disponer a título gratuito hasta cinco años después de la declaración (art. 196 CC). Si el declarado fallecido reaparece, recobra sus bienes en el estado en que se encuentren y el precio de los vendidos (art. 197 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 74 y 77 LJV · Arts. 193 a 197 CC · Arts. 782 y ss. LEC · Art. 78 LRC"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_presentacion": {
   "fase": 5,
   "titulo": "Declaración revocada por presentación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha verificado la identidad del presentado y se deja sin efecto la declaración de ausencia o fallecimiento. Restitución del patrimonio (art. 187 CC si había ausencia; art. 197 CC si había declaración de fallecimiento)."
    },
    {
     "tipo": "nota",
     "texto": "Si había ausencia, se le restituye el patrimonio, pero no los productos percibidos, salvo mala fe (art. 187 CC). Si había fallecimiento, recobra los bienes en el estado en que se encuentren, sin rentas ni frutos anteriores a su presencia (art. 197 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Comunicar la revocación al Registro Civil para cancelación de asientos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.1 LJV · Arts. 187 y 197 CC · Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_noticias": {
   "fase": 5,
   "titulo": "Declaración revocada por noticias de existencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las pruebas aportadas confirman la existencia del declarado ausente o fallecido. Se deja sin efecto la declaración."
    },
    {
     "tipo": "nota",
     "texto": "Restitución del patrimonio (arts. 187 y 197 CC). Comunicación al Registro Civil (art. 77 LJV; art. 198 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.2 LJV · Arts. 187 y 197 CC · Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_revocacion_suspension": {
   "fase": 5,
   "titulo": "Declaración revocada tras suspensión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se confirma la identidad de la persona que solicitó la suspensión. La suspensión del representante se torna definitiva y se revoca la declaración."
    },
    {
     "tipo": "nota",
     "texto": "Restitución de bienes, cancelación de asientos registrales, liquidación de la gestión del representante."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75.3 LJV · Arts. 187 y 197 CC · Art. 77 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_ratificacion": {
   "fase": 5,
   "titulo": "Declaración ratificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se ha confirmado la identidad del presunto reaparecido o no ha aportado pruebas suficientes. La declaración de ausencia o fallecimiento se mantiene íntegramente."
    },
    {
     "tipo": "nota",
     "texto": "El representante continúa en el ejercicio de sus funciones. Las medidas adoptadas se mantienen."
    },
    {
     "tipo": "ley",
     "texto": "Art. 75 LJV"
    }
   ],
   "fin": "neutral"
  },
  "fin_fallecimiento_comprobado": {
   "fase": 5,
   "titulo": "Fallecimiento efectivo comprobado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha comprobado el fallecimiento efectivo del desaparecido. El expediente de ausencia o fallecimiento declarado se archiva. Se abre la sucesión por fallecimiento efectivo."
    },
    {
     "tipo": "nota",
     "texto": "Consecuencias: archivo del expediente; cesación de representación y medidas; apertura de sucesión conforme al CC art. 657 y ss.; liquidación de gestión del representante; inscripción registral del fallecimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV · Arts. 188 y 657 y ss. CC · Art. 78 LRC"
    }
   ],
   "fin": "success"
  },
  "fin_archivo_expediente": {
   "fase": 5,
   "titulo": "Expediente archivado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se archiva al comprobarse el fallecimiento sin que existan bienes ni herederos conocidos."
    },
    {
     "tipo": "nota",
     "texto": "Si posteriormente aparecieren herederos o bienes, podrán iniciar los trámites sucesorios correspondientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 76 LJV; CC arts. 657 y ss."
    }
   ],
   "fin": "neutral"
  }
 },
 "pie": "<strong>Referencias normativas</strong><br>Arts. 3, 19, 20 y 67 a 77 LJV<br>Arts. 181 a 198 CC<br>Art. 78 LRC<br>Arts. 782 y ss. LEC"
});
