/* Migrado por tools/migrate.js desde sources/actual/G10.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-adopcion",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "LEY 15/2015, DE 2 DE JULIO, DE LA JURISDICCIÓN VOLUNTARIA · TÍTULO II: DE LOS EXPEDIENTES DE JURISDICCIÓN VOLUNTARIA EN MATERIA DE PERSONAS · CAPÍTULO III De la adopción Artículos 33 a 42 LJV − 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar",
 "corto": "Adopción",
 "articulos": [
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G10"
 },
 "fases": [
  "Inicio y competencia",
  "Propuesta / Solicitud",
  "Citaciones y consentimientos",
  "Oposición / Audiencia",
  "Resolución e inscripción",
  "Procedimientos posteriores"
 ],
 "actores": {
  "ambos": "Juez / LAJ",
  "juez": "Juez",
  "laj": "Letrado A. Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del expediente de adopción",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de adopción comienza determinando el modo de inicio según el artículo 35 de la Ley 15/2015 y el artículo 176 del Código Civil. El Juzgado competente es el de Primera Instancia de la sede de la Entidad Pública que tenga encomendada la protección del adoptando; en su defecto, el del domicilio del adoptante (art. 33 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La tramitación del expediente de adopción tendrá carácter preferente y se practicará con intervención del Ministerio Fiscal. No será preceptiva la asistencia de Abogado ni Procurador (art. 34 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Excepciones que no requieren propuesta previa de la Entidad Pública (Art. 176.2 CC):",
     "items": [
      "Ser huérfano y pariente del adoptante en tercer grado por consanguinidad o afinidad",
      "Ser hijo del cónyuge o persona unida por análoga relación de afectividad a la conyugal",
      "Llevar más de un año en guarda con fines de adopción o bajo tutela del adoptante",
      "Ser mayor de edad o menor emancipado"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 33, 34 y 35.1 Ley 15/2015 · Art. 176 Código Civil"
    }
   ],
   "pregunta": "¿Existe propuesta previa de la Entidad Pública a favor del adoptante?",
   "opciones": [
    {
     "texto": "Sí, hay propuesta previa de la Entidad Pública",
     "tono": "t-ok",
     "nota": "Sí",
     "destino": "propuesta_ep"
    },
    {
     "texto": "No, concurre una excepción del artículo 176 del Código Civil",
     "tono": "t-plazo",
     "nota": "No",
     "destino": "ofrecimiento_adoptante"
    }
   ]
  },
  "propuesta_ep": {
   "fase": 1,
   "titulo": "Propuesta de la Entidad Pública",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente comenzará con el escrito de propuesta de adopción formulada por la Entidad Pública (art. 35.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "La propuesta debe expresar especialmente (art. 35.2 LJV):",
     "items": [
      "a) Condiciones personales, familiares, sociales y medios de vida del adoptante y sus relaciones con el adoptando, con detalle de las razones que justifiquen la elección.",
      "b) Último domicilio conocido del cónyuge del adoptante o persona unida por análoga relación de afectividad, o el de los progenitores, tutor, familia acogedora o guardadores del adoptando.",
      "c) Si unos y otros han formulado su asentimiento ante la Entidad Pública o en documento público."
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Con la propuesta se presentarán la declaración previa de idoneidad del adoptante para el ejercicio de la patria potestad emitida por la Entidad Pública, si procediere, y cuantos informes o documentos se juzguen oportunos (art. 35.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 35.1, 35.2 y 35.4 Ley 15/2015"
    }
   ],
   "siguiente": "competencia"
  },
  "ofrecimiento_adoptante": {
   "fase": 1,
   "titulo": "Ofrecimiento del adoptante (excepción art. 176 CC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El ofrecimiento para la adopción del adoptante se presentará por escrito, expresando las indicaciones del art. 35.2 LJV en cuanto fueren aplicables, y las alegaciones y pruebas conducentes a demostrar que en el adoptando concurre alguna de las circunstancias excepcionales del art. 176 CC (art. 35.3 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "No se requiere propuesta previa de la Entidad Pública, pero sí la declaración previa de idoneidad del adoptante si procediere, y cuantos informes o documentos se juzguen oportunos (art. 35.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 35.3 y 35.4 Ley 15/2015 · Art. 176.2 Código Civil"
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 0,
   "titulo": "Determinación de competencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Determinar el Juzgado de Primera Instancia competente para conocer del expediente de adopción."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas de competencia (art. 33 LJV):",
     "items": [
      "Competente principal: Juzgado de Primera Instancia de la sede de la Entidad Pública que tenga encomendada la protección del adoptando.",
      "En su defecto: Juzgado de Primera Instancia del domicilio del adoptante."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 33 Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria"
    }
   ],
   "siguiente": "intervencion_fiscal"
  },
  "intervencion_fiscal": {
   "fase": 0,
   "titulo": "Intervención del Ministerio Fiscal",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La tramitación del expediente de adopción tiene carácter preferente y se practicará con intervención del Ministerio Fiscal en todo caso."
    },
    {
     "tipo": "nota",
     "texto": "No será preceptiva la asistencia de Abogado ni Procurador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 34 Ley 15/2015"
    }
   ],
   "siguiente": "consentimiento"
  },
  "consentimiento": {
   "fase": 2,
   "titulo": "Citación para prestación de consentimiento (art. 36 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia citará, para manifestar su consentimiento en presencia del Juez, al adoptante o adoptantes y al adoptando si fuere mayor de 12 años."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos que deben consentir la adopción (art. 177.1 CC):",
     "items": [
      "El adoptante o adoptantes.",
      "El adoptando mayor de doce años."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los consentimientos y asentimientos deberán otorgarse libremente, en la forma legal requerida y por escrito, previa información de sus consecuencias jurídicas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 36 Ley 15/2015 · Art. 177.1 Código Civil"
    }
   ],
   "siguiente": "asentimiento"
  },
  "asentimiento": {
   "fase": 2,
   "titulo": "Necesidad de asentimiento (art. 37.1 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Determinar la necesidad de asentimiento de otras personas según el artículo 177.2 del Código Civil. Deberán ser citados para prestar asentimiento ante el Juez: 1.º El cónyuge o persona unida al adoptante por análoga relación de afectividad, salvo separación o divorcio legal o ruptura fehaciente. 2.º Los progenitores del adoptando que no se hallare emancipado, a menos que estuvieran privados de la patria potestad por sentencia firme o incursos en causa legal para tal privación."
    },
    {
     "tipo": "nota",
     "texto": "No serán citados aquellos que, siendo necesario su asentimiento, lo hubieran prestado con anterioridad a la iniciación del expediente ante la correspondiente Entidad Pública o en documento público, salvo que hubieran transcurrido más de seis meses desde que lo hicieron."
    },
    {
     "tipo": "aviso",
     "texto": "El asentimiento de la madre no podrá prestarse hasta que hayan transcurrido seis semanas desde el parto (art. 177.2 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.1 Ley 15/2015 · Art. 177.2 Código Civil"
    }
   ],
   "pregunta": "¿Deben otros sujetos prestar asentimiento a la adopción (cónyuge del adoptante, progenitores no emancipados)?",
   "opciones": [
    {
     "texto": "Sí, deben prestar asentimiento y no lo han prestado aún",
     "tono": "t-ok",
     "nota": "Sí",
     "destino": "asentimiento_sujetos"
    },
    {
     "texto": "No, ya lo han prestado o no es necesario",
     "tono": "t-nota",
     "nota": "No",
     "destino": "audiencia"
    }
   ]
  },
  "asentimiento_sujetos": {
   "fase": 2,
   "titulo": "Asentimiento de sujetos: reclamación de progenitores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deberán ser citados para prestar asentimiento el cónyuge del adoptante y los progenitores del adoptando no emancipado (salvo privación de patria potestad por sentencia firme)."
    },
    {
     "tipo": "plazo",
     "texto": "Asentimiento de la madre: no podrá prestarse hasta que hayan transcurrido 6 semanas desde el parto (art. 177.2 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "En adopciones con propuesta previa de la Entidad Pública, el asentimiento de los progenitores no puede referirse a adoptantes determinados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.1 Ley 15/2015 · Art. 177.2 Código Civil"
    }
   ],
   "pregunta": "¿Los progenitores pretenden que se les reconozca la necesidad de prestar su asentimiento en el expediente?",
   "opciones": [
    {
     "texto": "Sí, los progenitores reclaman la necesidad de su asentimiento",
     "tono": "t-plazo",
     "nota": "Sí",
     "destino": "reclamacion_asentimiento"
    },
    {
     "texto": "No, no hay reclamación de los progenitores",
     "tono": "t-ok",
     "nota": "No",
     "destino": "audiencia"
    }
   ]
  },
  "reclamacion_asentimiento": {
   "fase": 2,
   "titulo": "Reclamación de asentimiento por progenitores (art. 37.2 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si los progenitores manifiestan en el expediente la necesidad de su asentimiento, el Letrado de la Administración de Justicia acordará la suspensión del expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de 15 días para la presentación de la demanda, de la que conocerá el mismo Tribunal (art. 37.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.2 Ley 15/2015 · Art. 781 LEC"
    }
   ],
   "pregunta": "¿Presentan los progenitores demanda dentro del plazo de 15 días?",
   "opciones": [
    {
     "texto": "Sí, presentan demanda en plazo",
     "tono": "t-aviso",
     "nota": "Sí",
     "destino": "contencioso_asentimiento"
    },
    {
     "texto": "No, no presentan demanda en plazo",
     "tono": "t-ok",
     "nota": "No",
     "destino": "alzamiento_suspension"
    }
   ]
  },
  "alzamiento_suspension": {
   "fase": 2,
   "titulo": "Alzamiento de la suspensión (sin demanda)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al no presentarse demanda en el plazo fijado, el Letrado de la Administración de Justicia dictará decreto dando por finalizado el trámite y alzando la suspensión del expediente de adopción."
    },
    {
     "tipo": "nota",
     "texto": "El decreto será recurrible directamente en revisión ante el Tribunal."
    },
    {
     "tipo": "aviso",
     "texto": "Firme la resolución, no se admitirá ninguna reclamación posterior de los mismos sujetos sobre necesidad de asentimiento para la adopción de que se trate."
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.2 párrafo 4º Ley 15/2015"
    }
   ],
   "siguiente": "audiencia"
  },
  "contencioso_asentimiento": {
   "fase": 2,
   "titulo": "Expediente contencioso por asentimiento (art. 781 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presentada la demanda dentro de plazo, el Letrado de la Administración de Justicia dictará decreto declarando contencioso el expediente de adopción y acordará seguir su tramitación conforme a lo dispuesto en el artículo 781 de la Ley de Enjuiciamiento Civil."
    },
    {
     "tipo": "nota",
     "texto": "La tramitación se realizará como pieza separada, con arreglo a lo previsto en el artículo 753 LEC. Una vez firme la resolución que se dicte en la pieza separada sobre la necesidad del asentimiento, se continuará con la adopción."
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.2 párrafo 3º LJV · Art. 781 y 753 LEC"
    }
   ],
   "fin": "warning"
  },
  "audiencia": {
   "fase": 2,
   "titulo": "Audiencia de sujetos (art. 37.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deberán ser citados para ser oídos por el Juez en el expediente las personas señaladas en el apartado 3 del artículo 177 del Código Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos que deben ser oídos (art. 177.3 CC):",
     "items": [
      "1.º Los progenitores que no hayan sido privados de la patria potestad, cuando su asentimiento no fuera necesario para la adopción.",
      "2.º El tutor y, en su caso, la familia acogedora, y el guardador o guardadores.",
      "3.º El adoptando menor de doce años de acuerdo con su edad y madurez."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 37.3 Ley 15/2015 · Art. 177.3 Código Civil"
    }
   ],
   "siguiente": "citaciones"
  },
  "citaciones": {
   "fase": 3,
   "titulo": "Práctica de citaciones (art. 38 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Proceder a realizar las citaciones para asentimiento y audiencia. En las citaciones que deban prestar su asentimiento o ser oídas se incluirá el apercibimiento de que si fueran citados personalmente y no comparecieran se seguirá el trámite sin más citaciones."
    },
    {
     "tipo": "nota",
     "texto": "Todas las actuaciones se llevarán a cabo con la conveniente reserva, evitando en particular que la familia de origen tenga conocimiento de cuál sea la adoptiva."
    },
    {
     "tipo": "ley",
     "texto": "Art. 38 Ley 15/2015"
    }
   ],
   "pregunta": "¿Consta el domicilio de los que deban ser citados?",
   "opciones": [
    {
     "texto": "Sí, el domicilio es conocido",
     "tono": "t-ok",
     "nota": "Sí",
     "destino": "citacion_conocida"
    },
    {
     "texto": "No, el domicilio es desconocido",
     "tono": "t-plazo",
     "nota": "No",
     "destino": "citacion_desconocida"
    }
   ]
  },
  "citacion_conocida": {
   "fase": 3,
   "titulo": "Citación en domicilio conocido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las citaciones incluirán el apercibimiento de que si fueran citados personalmente y no comparecieran se seguirá el trámite sin más citaciones."
    },
    {
     "tipo": "nota",
     "texto": "Si no respondieran a la primera citación y no se realizó en su persona, se les volverá a citar dentro de los quince días siguientes, con el apercibimiento de que aunque no comparezcan el expediente seguirá su trámite."
    },
    {
     "tipo": "ley",
     "texto": "Art. 38.2 Ley 15/2015"
    }
   ],
   "pregunta": "¿Comparecen los citados personalmente o responden a la citación?",
   "opciones": [
    {
     "texto": "Sí, comparecen",
     "tono": "t-ok",
     "nota": "Sí",
     "destino": "tramitacion"
    },
    {
     "texto": "No, citados personalmente no comparecen",
     "tono": "t-aviso",
     "nota": "No",
     "destino": "prescindir_tramite"
    }
   ]
  },
  "citacion_desconocida": {
   "fase": 3,
   "titulo": "Citación en domicilio desconocido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia practicará inmediatamente las diligencias oportunas para la averiguación del domicilio conforme al artículo 156 de la LEC y los citará ante el Juez dentro de los quince días siguientes, debiendo garantizar la debida reserva."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de 15 días siguientes para citar ante el Juez una vez averiguado el domicilio (art. 38.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 38.1 Ley 15/2015 · Art. 156 LEC"
    }
   ],
   "pregunta": "¿Aparece el domicilio tras las diligencias de averiguación o comparece el citado?",
   "opciones": [
    {
     "texto": "Sí, se encuentra el domicilio o comparece",
     "tono": "t-ok",
     "nota": "Sí",
     "destino": "citacion_conocida"
    },
    {
     "texto": "No, no aparece el domicilio ni comparece",
     "tono": "t-aviso",
     "nota": "No",
     "destino": "prescindir_tramite"
    }
   ]
  },
  "prescindir_tramite": {
   "fase": 3,
   "titulo": "Prescindir del trámite por incomparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando no haya podido conocerse el domicilio o paradero de alguna persona que deba ser citada, o si citada debidamente con los apercibimientos oportunos no compareciese, se prescindirá del trámite y la adopción acordada será válida."
    },
    {
     "tipo": "aviso",
     "texto": "Sin perjuicio del derecho que a los progenitores concede el apartado 2 del artículo 180 del Código Civil: podrán solicitar la extinción de la adopción en los 2 años siguientes si no intervinieron sin culpa suya."
    },
    {
     "tipo": "ley",
     "texto": "Art. 38.3 Ley 15/2015 · Art. 180.2 Código Civil"
    }
   ],
   "siguiente": "tramitacion"
  },
  "tramitacion": {
   "fase": 3,
   "titulo": "Tramitación del expediente (art. 39 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez podrá ordenar la práctica de cuantas diligencias estime oportunas para asegurarse de que la adopción sea en interés del adoptando."
    },
    {
     "tipo": "nota",
     "texto": "Todas las actuaciones se llevarán a cabo con la conveniente reserva, evitando en particular que la familia de origen tenga conocimiento de cuál sea la adoptiva, excepto en los supuestos recogidos en los apartados 2 y 4 del artículo 178 del Código Civil y sin perjuicio de lo establecido en el artículo 180 del Código Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 39.1 y 39.2 Ley 15/2015"
    }
   ],
   "pregunta": "¿Se suscita oposición durante la tramitación?",
   "opciones": [
    {
     "texto": "Sí, hay oposición",
     "tono": "t-aviso",
     "nota": "Sí",
     "destino": "oposicion_contencioso"
    },
    {
     "texto": "No, no hay oposición",
     "tono": "t-ok",
     "nota": "No",
     "destino": "resolucion_adopcion"
    }
   ]
  },
  "oposicion_contencioso": {
   "fase": 3,
   "titulo": "Oposición: transformación en contencioso (art. 39.3 LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se suscitare oposición, el expediente se hará contencioso y el Letrado de la Administración de Justicia citará a los interesados a una vista, continuando la tramitación con arreglo a lo previsto para el juicio verbal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 39.3 Ley 15/2015"
    }
   ],
   "fin": "error"
  },
  "resolucion_adopcion": {
   "fase": 4,
   "titulo": "Auto de adopción (art. 39.4 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto resolviendo el expediente de adopción. Contra el auto que resuelva el expediente cabe recurso de apelación, que tendrá carácter preferente, sin que produzca efectos suspensivos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 39.4 Ley 15/2015"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación contra el auto que resuelve la adopción?",
   "opciones": [
    {
     "texto": "Sí, se interpone recurso de apelación",
     "tono": "t-plazo",
     "nota": "Sí",
     "destino": "apelacion_adopcion"
    },
    {
     "texto": "No, el auto es firme",
     "tono": "t-ok",
     "nota": "No",
     "destino": "inscripcion_adopcion"
    }
   ]
  },
  "apelacion_adopcion": {
   "fase": 4,
   "titulo": "Recurso de apelación (carácter preferente)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se interpone recurso de apelación contra el auto. El recurso tendrá carácter preferente y no producirá efectos suspensivos."
    },
    {
     "tipo": "nota",
     "texto": "Una vez resuelto el recurso y firme la resolución, se procederá a la inscripción en el Registro Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 39.4 Ley 15/2015"
    }
   ],
   "fin": "warning"
  },
  "inscripcion_adopcion": {
   "fase": 4,
   "titulo": "Inscripción en el Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El testimonio de la resolución firme en que se acuerde la adopción se remitirá al Registro Civil correspondiente para que se practique su inscripción."
    },
    {
     "tipo": "nota",
     "texto": "La adopción produce la extinción de los vínculos jurídicos entre el adoptado y su familia de origen, con las excepciones previstas en el artículo 178 del Código Civil. La adopción es irrevocable (art. 180.1 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 39.5 Ley 15/2015 · Arts. 178 y 180 Código Civil"
    }
   ],
   "fin": "success"
  },
  "exclusion_extincion": {
   "fase": 5,
   "titulo": "Exclusión de funciones tutelares / extinción de la adopción (arts. 179-180 CC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las actuaciones judiciales a que se refieren los artículos 179 y 180 del Código Civil se sustanciarán por los trámites del juicio que corresponda con arreglo a lo establecido en la Ley de Enjuiciamiento Civil y sus resoluciones serán remitidas al Registro Civil para su inscripción."
    },
    {
     "tipo": "nota",
     "texto": "Durante la sustanciación del procedimiento, el Juez adoptará, incluso de oficio, y previa audiencia del Ministerio Fiscal, las medidas de protección oportunas sobre la persona y bienes del adoptado menor o persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica."
    },
    {
     "tipo": "plazo",
     "texto": "Si el adoptado fuera mayor de edad, la extinción de la adopción requerirá su consentimiento expreso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 40 LJV · Arts. 179 y 180 Código Civil"
    }
   ],
   "pregunta": "¿Cuál es el objeto del procedimiento posterior?",
   "opciones": [
    {
     "texto": "Exclusión de funciones tutelares (art. 179 CC)",
     "tono": "t-plazo",
     "destino": "fin_extincion"
    },
    {
     "texto": "Extinción de la adopción (art. 180 CC)",
     "tono": "t-plazo",
     "destino": "fin_extincion"
    }
   ]
  },
  "fin_extincion": {
   "fase": 5,
   "titulo": "Extinción o exclusión resuelta",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución se remite al Registro Civil para su inscripción."
    },
    {
     "tipo": "nota",
     "texto": "La extinción de la adopción no afecta a la nacionalidad o vecindad civil adquirida, ni a los efectos patrimoniales ya producidos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 180 CC · Art. 40 LJV"
    }
   ],
   "fin": "neutral"
  },
  "adopcion_internacional": {
   "fase": 1,
   "titulo": "Adopción internacional (art. 41 LJV)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los casos de adopción internacional se estará a lo previsto en el artículo 9.5 del Código Civil y en la Ley 54/2007, de 28 de diciembre, de Adopción Internacional, así como a lo establecido en los Tratados y Convenios internacionales en que España sea parte."
    },
    {
     "tipo": "nota",
     "texto": "El Convenio de La Haya de 29 de mayo de 1993 relativo a la protección del niño y a la cooperación en materia de adopción internacional es de aplicación preferente en los países signatarios."
    },
    {
     "tipo": "ley",
     "texto": "Art. 41 LJV · Art. 9.5 CC · Ley 54/2007 · Convenio de La Haya de 29 de mayo de 1993"
    }
   ],
   "fin": "neutral"
  },
  "conversion_simple": {
   "fase": 5,
   "titulo": "Conversión de adopción simple en plena (art. 42 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El adoptante de adopción simple o no plena constituida por autoridad extranjera competente podrá instar ante los Tribunales españoles su conversión en una adopción regulada por el derecho español cuando concurra uno de los siguientes supuestos: a) Que el adoptando tenga su residencia habitual en España en el momento de constitución de la adopción; b) Que el adoptando haya sido o vaya a ser trasladado a España con la finalidad de establecer su residencia habitual en España; c) Que el adoptante tenga la nacionalidad española o tenga su residencia habitual en España."
    },
    {
     "tipo": "nota",
     "texto": "Presentada la solicitud se seguirán los trámites establecidos en los artículos anteriores, en cuanto sean aplicables, debiendo examinar el Juez la concurrencia de los extremos enumerados en la Ley de Adopción Internacional."
    },
    {
     "tipo": "plazo",
     "texto": "En todo caso habrán de manifestar su consentimiento ante el Juez el adoptante o adoptantes y el adoptado si fuere mayor de doce años. Deberá asentir el cónyuge del adoptante o la persona a la que esté unida por análoga relación de afectividad a la conyugal. El testimonio del auto se remitirá al Registro Civil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 LJV · Ley 54/2007 de Adopción Internacional"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "<strong>Referencias normativas</strong>\n  Ley 15/2015 (arts. 33‑42)\n  Código Civil: arts. 176‑180\n  LEC arts. 156, 753, 781\n  Ley 54/2007 Adopción Internacional"
});
