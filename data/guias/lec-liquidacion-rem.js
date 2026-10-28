/* Migrado por tools/migrate.js desde sources/actual/G05.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-liquidacion-rem",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "LEY 1/2000, DE 7 DE ENERO, DE ENJUICIAMIENTO CIVIL · LIBRO IV: DE LOS PROCESOS ESPECIALES · TÍTULO II: DE LA DIVISIÓN JUDICIAL DE PATRIMONIOS · CAPÍTULO II Del procedimiento para la liquidación del régimen económico matrimonial Artículos 806 a 811 LEC − 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar",
 "corto": "Liquidación del régimen económico matrimonial",
 "articulos": [
  "806",
  "807",
  "808",
  "809",
  "810",
  "811"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20261007",
  "origen": "G05"
 },
 "fases": [
  "Inicio y competencia",
  "Formación del inventario",
  "Liquidación (gananciales)",
  "Operaciones divisorias",
  "Régimen de participación",
  "Resolución final"
 ],
 "actores": {
  "juez": "Juez / Tribunal",
  "laj": "LAJ",
  "ambos": "LAJ + Tribunal"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del procedimiento de liquidación del régimen económico matrimonial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Este procedimiento regula la liquidación judicial de cualquier régimen económico matrimonial que determine la existencia de una masa común de bienes y derechos (art. 806 LEC). Opera en defecto de acuerdo entre los cónyuges."
    },
    {
     "tipo": "nota",
     "texto": "Si los cónyuges ya han alcanzado un acuerdo extrajudicial completo, podrán instrumentarlo mediante convenio regulador aprobado judicialmente (CC art. 90) o escritura pública notarial (CC art. 1404), sin necesidad de este procedimiento judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 806 LEC · CC arts. 1344‑1410 (gananciales) · CC arts. 1411‑1434 (participación) · Reg. (UE) 2016/1103"
    }
   ],
   "pregunta": "¿Qué régimen económico matrimonial se va a liquidar?",
   "opciones": [
    {
     "texto": "Sociedad de gananciales u otro régimen con masa común (conquistas navarras, consorcio aragonés, comunicación foral vasca…)",
     "tono": "t-ok",
     "destino": "acuerdo_extrajudicial"
    },
    {
     "texto": "Régimen de participación en las ganancias (CC arts. 1411‑1434)",
     "tono": "t-nota",
     "destino": "art811_inicio"
    }
   ]
  },
  "acuerdo_extrajudicial": {
   "fase": 0,
   "titulo": "Verificación de acuerdo extrajudicial previo",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de iniciar el procedimiento judicial, verificar si los cónyuges han alcanzado o pueden alcanzar un acuerdo sobre la liquidación."
    },
    {
     "tipo": "nota",
     "texto": "El acuerdo puede instrumentarse mediante: (1) Convenio regulador aprobado judicialmente, que puede incluir la liquidación del régimen (CC art. 90; LEC art. 774.1); o (2) escritura pública notarial (CC art. 1404)."
    },
    {
     "tipo": "aviso",
     "texto": "Si el acuerdo es solo parcial, el procedimiento del capítulo se aplica únicamente a la parte de la masa no acordada."
    },
    {
     "tipo": "ley",
     "texto": "CC art. 90 · LEC art. 774.1 · CC art. 1404"
    }
   ],
   "pregunta": "¿Han acordado los cónyuges (o sus herederos) la liquidación extrajudicialmente?",
   "opciones": [
    {
     "texto": "Sí — existe acuerdo extrajudicial completo (convenio regulador aprobado o escritura notarial)",
     "tono": "t-ok",
     "destino": "fin_acuerdo_privado"
    },
    {
     "texto": "No — no hay acuerdo; se inicia el procedimiento judicial",
     "tono": "t-aviso",
     "destino": "verificar_proceso"
    },
    {
     "texto": "Acuerdo parcial — se liquida judicialmente la parte no acordada",
     "tono": "t-plazo",
     "destino": "verificar_proceso"
    }
   ]
  },
  "verificar_proceso": {
   "fase": 0,
   "titulo": "Verificación del proceso principal habilitante (art. 808 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud de inventario solo puede formularse una vez admitida la demanda del proceso principal de crisis matrimonial o iniciado el proceso de disolución del régimen por causa civil (art. 808 LEC)."
    },
    {
     "tipo": "plazo",
     "texto": "El momento habilitante es la admisión de la demanda, no la sentencia. Puede solicitarse el inventario desde ese mismo momento para asegurar la integridad del patrimonio común."
    },
    {
     "tipo": "nota",
     "texto": "Causas de disolución por vía civil (CC art. 1392 para gananciales): concurso de acreedores de un cónyuge, privación de patria potestad, separación judicial, tutela, ausencia, incapacitación o abandono de familia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 808 LEC · CC art. 1392"
    }
   ],
   "pregunta": "¿Existe un proceso principal en curso o ya resuelto?",
   "opciones": [
    {
     "texto": "Sí — demanda de nulidad, separación o divorcio admitida",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "Sí — proceso de disolución del régimen por causa civil (CC art. 1392)",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No — aún no existe proceso principal admitido",
     "tono": "t-aviso",
     "destino": "fin_sin_proceso"
    }
   ]
  },
  "competencia": {
   "fase": 0,
   "titulo": "Determinación del órgano competente (art. 807 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Será competente el Juzgado de Primera Instancia o el Juzgado de Violencia sobre la Mujer que esté conociendo, o haya conocido, del proceso principal de nulidad, separación, divorcio o disolución del régimen. Principio de vis attractiva."
    },
    {
     "tipo": "aviso",
     "texto": "Competencia funcional e inderogable: no puede alterarse por sumisión expresa ni tácita de las partes (LEC art. 62). Su infracción determina la nulidad de actuaciones."
    },
    {
     "tipo": "nota",
     "texto": "Si el proceso se tramita ante el JVSM, la competencia civil cesa si se dicta sentencia penal absolutoria firme o se archiva el procedimiento penal, debiendo inhibirse a favor del JPI (art. 49 bis.4 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 807 LEC · Art. 87 ter LOPJ · Art. 49 bis LEC · LO 1/2004 · LEC art. 769 (competencia territorial)"
    }
   ],
   "pregunta": "¿Ante qué órgano se tramita el proceso principal?",
   "opciones": [
    {
     "texto": "Juzgado de Primera Instancia (JPI) — proceso matrimonial ordinario",
     "tono": "t-ok",
     "destino": "solicitud_inventario"
    },
    {
     "texto": "Juzgado de Violencia sobre la Mujer (JVSM) — contexto LO 1/2004",
     "tono": "t-plazo",
     "destino": "solicitud_inventario"
    }
   ]
  },
  "solicitud_inventario": {
   "fase": 1,
   "titulo": "Solicitud de formación de inventario (art. 808 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquiera de los cónyuges o sus herederos puede solicitar la formación de inventario. La solicitud debe acompañarse de una propuesta de inventario con todas las partidas y los documentos que las justifiquen."
    },
    {
     "tipo": "nota",
     "texto": "Legitimados: cualquiera de los cónyuges (con independencia de quién demandó) o, si han fallecido, sus herederos actuando conjuntamente (CC art. 1058). Los acreedores no están legitimados."
    },
    {
     "tipo": "lista",
     "titulo": "Documentos que deben acompañar la solicitud",
     "items": [
      "Propuesta de inventario con partidas del activo ganancial (bienes del trabajo, frutos, adquisiciones onerosas: CC art. 1347)",
      "Partidas del pasivo ganancial (gastos familiares, deudas comunes: CC arts. 1362‑1374)",
      "Créditos de reintegro entre masas (CC arts. 1364, 1390‑1391), si procede",
      "Bienes adquiridos mixtos (fondos comunes y privativos): regla proporcional CC art. 1354",
      "Títulos de propiedad de bienes inmuebles (escrituras públicas, notas registrales actualizadas)",
      "Certificados bancarios de saldos, depósitos y productos financieros",
      "Documentación de deudas pendientes (préstamos, hipotecas, avales)",
      "Tasaciones o informes periciales de bienes de difícil valoración objetiva (si se dispone de ellos)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 808‑809 LEC · CC arts. 1344‑1410"
    }
   ],
   "siguiente": "senalamiento_inventario"
  },
  "senalamiento_inventario": {
   "fase": 1,
   "titulo": "Señalamiento del acto de inventario por el LAJ (art. 809.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A la vista de la solicitud, el Letrado de la Administración de Justicia señalará día y hora para la formación del inventario y mandará citar a los cónyuges."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo: 10 días desde la presentación de la solicitud para celebrar el acto de formación del inventario."
    },
    {
     "tipo": "nota",
     "texto": "La citación se practicará conforme a los arts. 152‑168 LEC. Si los cónyuges tienen procurador constituido, la citación se entiende con este (LEC art. 153)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.1 LEC · Arts. 152‑168 LEC"
    }
   ],
   "siguiente": "acto_inventario"
  },
  "acto_inventario": {
   "fase": 1,
   "titulo": "Acto de formación del inventario (art. 809 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ, con los cónyuges presentes y sus representantes procesales, procede a formar el inventario de la comunidad matrimonial conforme a la legislación civil aplicable. El inventario distingue el activo y el pasivo de la comunidad, y los créditos de reintegro entre masas."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ actúa como fedatario judicial y director del acto, no como juzgador. Las resoluciones de fondo sobre controversias corresponden al Tribunal (Juez o Magistrado)."
    }
   ],
   "pregunta": "¿Cuál es el resultado del acto de formación del inventario?",
   "opciones": [
    {
     "texto": "Ambos cónyuges comparecen y alcanzan acuerdo sobre el inventario",
     "tono": "t-ok",
     "destino": "inventario_acordado"
    },
    {
     "texto": "Un cónyuge no comparece sin causa justificada",
     "tono": "t-plazo",
     "destino": "conformidad_ficta_inv"
    },
    {
     "texto": "Ambos comparecen pero existe controversia sobre el inventario",
     "tono": "t-aviso",
     "destino": "controversia_inventario"
    },
    {
     "texto": "La incomparecencia está justificada (enfermedad acreditada, causa de fuerza mayor)",
     "tono": "t-nota",
     "destino": "nuevo_senalamiento_inv"
    }
   ]
  },
  "inventario_acordado": {
   "fase": 1,
   "titulo": "Inventario acordado — Consignación en acta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ consigna el inventario acordado en el acta y declara concluido el acto. El acta tiene valor de documento judicial con plena eficacia probatoria."
    },
    {
     "tipo": "nota",
     "texto": "El inventario acordado recoge el activo (bienes y derechos gananciales) y el pasivo (cargas y obligaciones comunes), así como los créditos de reintegro entre masas si los hubiere."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.1 LEC"
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "conformidad_ficta_inv": {
   "fase": 1,
   "titulo": "Conformidad ficta por incomparecencia injustificada (art. 809.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El cónyuge que no comparece sin causa justificada queda vinculado (\"conforme\") a la propuesta de inventario del cónyuge que haya comparecido. El LAJ consigna este resultado en el acta."
    },
    {
     "tipo": "aviso",
     "texto": "La conformidad ficta es una sanción procesal que desincentiva la obstrucción del procedimiento. Solo opera si la incomparecencia carece de justificación objetiva."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.1 LEC"
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "nuevo_senalamiento_inv": {
   "fase": 1,
   "titulo": "Nuevo señalamiento por incomparecencia justificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la incomparecencia está debidamente justificada (enfermedad acreditada, fuerza mayor imprevisible), el LAJ señala nueva fecha para el acto de formación del inventario."
    },
    {
     "tipo": "aviso",
     "texto": "La causa justificada debe alegarse y acreditarse mediante escrito o en el propio acto. La indefensión sobrevenida puede dar lugar a la nulidad del acto si no se subsana (LEC art. 185 en relación con el art. 238.3 LOPJ)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.1 LEC · Art. 185 LEC · Art. 238.3 LOPJ"
    }
   ],
   "siguiente": "acto_inventario"
  },
  "controversia_inventario": {
   "fase": 1,
   "titulo": "Controversia sobre el inventario (art. 809.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica, y cita a los interesados a una vista conforme al juicio verbal."
    },
    {
     "tipo": "lista",
     "titulo": "Causas frecuentes de controversia",
     "items": [
      "Discrepancia sobre inclusión o exclusión de bienes (calificación ganancial vs. privativo)",
      "Bienes de naturaleza mixta (fondos comunes y privativos: CC art. 1354)",
      "Discrepancia sobre el importe o valor de una partida (inmueble, empresa, participaciones)",
      "Existencia o cuantía de un crédito de reintegro entre masas (CC arts. 1364, 1390‑1391)",
      "Bienes adquiridos por retracto de carácter ganancial"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "El señalamiento de la vista debe efectuarse en los veinte días siguientes al acto de formación del inventario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.2 LEC · CC arts. 1347‑1361 · Arts. 437‑447 LEC (juicio verbal)"
    }
   ],
   "siguiente": "vista_verbal_inv"
  },
  "vista_verbal_inv": {
   "fase": 1,
   "titulo": "Vista de juicio verbal sobre el inventario",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra la vista conforme al juicio verbal (arts. 437‑447 LEC). En el propio acto se practica la prueba propuesta y admitida. El Tribunal dicta sentencia en los veinte días siguientes a la vista."
    },
    {
     "tipo": "nota",
     "texto": "Prueba habitual: pericial sobre valoración de bienes, documental sobre origen privativo o ganancial de determinados bienes, interrogatorio de las partes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.2 LEC · Arts. 437‑447 LEC"
    }
   ],
   "siguiente": "sentencia_inventario"
  },
  "sentencia_inventario": {
   "fase": 1,
   "titulo": "Sentencia aprobando el inventario (art. 809.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sentencia resuelve sobre todas las cuestiones controvertidas, aprueba el inventario de la comunidad matrimonial y dispone lo procedente sobre la administración y disposición de los bienes comunes durante el proceso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.2 LEC · Arts. 455‑467 LEC (recurso de apelación)"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación contra la sentencia?",
   "opciones": [
    {
     "texto": "No — la sentencia es firme; se procede a la resolución sobre administración",
     "tono": "t-ok",
     "destino": "resolucion_administracion"
    },
    {
     "texto": "Sí — recurso de apelación ante la Audiencia Provincial (plazo 20 días, LEC art. 458)",
     "tono": "t-plazo",
     "destino": "apelacion_inv"
    }
   ]
  },
  "apelacion_inv": {
   "fase": 1,
   "titulo": "Recurso de apelación sobre el inventario",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial resuelve el recurso de apelación contra la sentencia que aprueba el inventario. La interposición del recurso no impide la continuación del proceso de liquidación, salvo que el Tribunal acuerde expresamente la suspensión."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días desde la notificación de la sentencia (LEC art. 458)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 455‑467 LEC · Art. 458 LEC"
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "resolucion_administracion": {
   "fase": 1,
   "titulo": "Auto del Tribunal sobre administración y disposición de bienes (art. 809.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el mismo día del acto de inventario o en el siguiente, el Tribunal dicta auto sobre la administración y disposición de los bienes incluidos en el inventario durante la pendencia del proceso."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: mismo día o día siguiente al acto de formación del inventario o a la sentencia firme."
    },
    {
     "tipo": "lista",
     "titulo": "Posibles medidas del auto",
     "items": [
      "Atribuir la administración exclusiva a uno de los cónyuges",
      "Exigir consentimiento conjunto para actos de disposición de bienes de cierto valor",
      "Nombrar administrador judicial en casos de conflicto grave o riesgo de deterioro del patrimonio"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto: recurso de reposición (LEC art. 451) y, en su caso, de apelación si la resolución fuera definitiva (LEC art. 455). Este auto complementa las medidas del art. 103.4 CC y del art. 773 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 809.1 LEC · CC art. 103.4 · Art. 773 LEC · LEC art. 451 (reposición)"
    }
   ],
   "pregunta": "¿Se va a solicitar a continuación la liquidación del régimen o solo se pretendía la formación del inventario?",
   "opciones": [
    {
     "texto": "Se va a solicitar la liquidación (ahora o en breve)",
     "tono": "t-ok",
     "destino": "espera_firmeza"
    },
    {
     "texto": "Solo se solicitó inventario — fin de actuación por ahora",
     "tono": "t-plazo",
     "destino": "fin_solo_inventario"
    }
   ]
  },
  "espera_firmeza": {
   "fase": 2,
   "titulo": "Verificación de requisitos previos para solicitar la liquidación (art. 810.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para poder solicitar la liquidación deben cumplirse dos condiciones: (1) que el inventario haya concluido (por acuerdo o por sentencia firme); y (2) en su caso, que sea firme la resolución que declare disuelto el régimen económico matrimonial."
    },
    {
     "tipo": "nota",
     "texto": "Firmeza (LEC art. 207.2): la resolución no es recurrible, o el plazo para recurrir ha transcurrido sin interposición de recurso. La firmeza impide que la reconciliación conyugal (CC art. 84) reabra el régimen ya disuelto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.1 LEC · LEC art. 207.2 · CC art. 84"
    }
   ],
   "pregunta": "¿Se cumplen ambos requisitos?",
   "opciones": [
    {
     "texto": "Sí — inventario concluido y resolución de disolución firme (o no se requiere resolución de disolución separada)",
     "tono": "t-ok",
     "destino": "solicitud_liquidacion"
    },
    {
     "texto": "No — pendiente de firmeza de la resolución de disolución; hay que esperar",
     "tono": "t-plazo",
     "destino": "espera_firmeza_pte"
    }
   ]
  },
  "espera_firmeza_pte": {
   "fase": 2,
   "titulo": "En espera de firmeza de la resolución de disolución",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de liquidación no puede iniciarse todavía porque la resolución de disolución del régimen económico matrimonial no es firme."
    },
    {
     "tipo": "aviso",
     "texto": "Comunicar a las partes la imposibilidad de iniciar la liquidación y la necesidad de esperar a la firmeza. Una vez firme, podrán presentar la solicitud de liquidación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.1 LEC · LEC art. 207.2"
    }
   ],
   "siguiente": "solicitud_liquidacion"
  },
  "solicitud_liquidacion": {
   "fase": 2,
   "titulo": "Solicitud de liquidación (art. 810.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquiera de los cónyuges —o, de haber fallecido, sus herederos— solicita la liquidación del régimen, acompañando una propuesta de liquidación con los elementos que indica el art. 810.2 LEC."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio de la propuesta de liquidación",
     "items": [
      "Indemnizaciones y reintegros debidos a cada cónyuge (CC arts. 1364, 1390‑1391, 1397‑1399)",
      "División del remanente: por mitad en la sociedad de gananciales (CC art. 1404)",
      "Derecho preferente a la vivienda habitual familiar (CC art. 1406.4)",
      "Derecho preferente al local de ejercicio profesional (CC art. 1406.3)",
      "Derecho preferente a la explotación económica gestionada efectivamente (CC art. 1406.2)",
      "Compensación en metálico si el valor del bien excede la cuota del adjudicatario (CC art. 1407)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.2 LEC · CC arts. 1397‑1399 · CC arts. 1404, 1406‑1407"
    }
   ],
   "siguiente": "senalamiento_liquidacion"
  },
  "senalamiento_liquidacion": {
   "fase": 2,
   "titulo": "Señalamiento de la comparecencia de liquidación (art. 810.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite la solicitud, el LAJ señala día y hora para la comparecencia. El objeto de la comparecencia es doble: (1) intentar el acuerdo entre los cónyuges o herederos sobre la propuesta de liquidación; y (2) en defecto de acuerdo, designar contador y, en su caso, peritos."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo: 10 días desde la admisión de la solicitud para celebrar la comparecencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.3 LEC"
    }
   ],
   "siguiente": "acto_liquidacion"
  },
  "acto_liquidacion": {
   "fase": 2,
   "titulo": "Comparecencia de liquidación (art. 810 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra la comparecencia ante el LAJ. Se intenta el acuerdo sobre la propuesta de liquidación. Si no hay acuerdo, se procede a la designación de contador y, en su caso, peritos para las operaciones divisorias."
    }
   ],
   "pregunta": "¿Cuál es el resultado de la comparecencia de liquidación?",
   "opciones": [
    {
     "texto": "Acuerdo — cónyuges o herederos alcanzan acuerdo sobre la liquidación",
     "tono": "t-ok",
     "destino": "acuerdo_liquidacion"
    },
    {
     "texto": "Incomparecencia injustificada de uno de los cónyuges o herederos",
     "tono": "t-plazo",
     "destino": "conformidad_ficta_liq"
    },
    {
     "texto": "No hay acuerdo — se procede a designar contador y peritos (art. 784 LEC)",
     "tono": "t-aviso",
     "destino": "designacion_contador"
    }
   ]
  },
  "acuerdo_liquidacion": {
   "fase": 2,
   "titulo": "Acuerdo en la comparecencia de liquidación (art. 810.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ consigna el acuerdo en el acta y da por concluido el acto. La ejecución del acuerdo se rige por los dos primeros apartados del artículo 788 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.4 LEC · Art. 788.1 y 788.2 LEC"
    }
   ],
   "siguiente": "ejecucion_788"
  },
  "conformidad_ficta_liq": {
   "fase": 2,
   "titulo": "Conformidad ficta en la comparecencia de liquidación (art. 810.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El cónyuge o heredero que no comparece sin causa justificada queda vinculado a la propuesta del compareciente. El LAJ consigna el resultado en el acta."
    },
    {
     "tipo": "aviso",
     "texto": "Si son herederos quienes deben comparecer, la incomparecencia de todos ellos determina su conformidad con la propuesta del otro cónyuge o sus herederos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.4 LEC"
    }
   ],
   "siguiente": "ejecucion_788"
  },
  "ejecucion_788": {
   "fase": 2,
   "titulo": "Ejecución del acuerdo conforme al art. 788 LEC",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El acuerdo o la conformidad ficta se ejecutan conforme a los dos primeros apartados del art. 788 LEC. Este mecanismo tiene fuerza ejecutiva directa (LEC art. 517.2.9.ª)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1 y 788.2 LEC · Art. 517.2.9.ª LEC"
    }
   ],
   "pregunta": "¿Se formula oposición a la ejecución del acuerdo?",
   "opciones": [
    {
     "texto": "Sin oposición — el LAJ aprueba la liquidación mediante decreto (art. 788.1 LEC)",
     "tono": "t-ok",
     "destino": "decreto_acuerdo"
    },
    {
     "texto": "Hay oposición — el Tribunal resuelve mediante auto (art. 788.2 LEC)",
     "tono": "t-plazo",
     "destino": "auto_788"
    }
   ]
  },
  "decreto_acuerdo": {
   "fase": 2,
   "titulo": "Decreto del LAJ aprobando la liquidación (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto aprobando la liquidación acordada. Este decreto tiene fuerza ejecutiva directa (LEC art. 517.2.9.ª), lo que permite acudir directamente al proceso de ejecución sin necesidad de nueva sentencia de condena."
    },
    {
     "tipo": "nota",
     "texto": "Procede a continuación la entrega a cada adjudicatario de los bienes adjudicados. En caso de resistencia, son aplicables las normas de ejecución forzosa (LEC arts. 699 y ss. para inmuebles; arts. 701 y ss. para muebles)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1 LEC · Art. 517.2.9.ª LEC · LEC arts. 699 y ss."
    }
   ],
   "siguiente": "fin_decreto_acuerdo"
  },
  "auto_788": {
   "fase": 2,
   "titulo": "Auto del Tribunal resolviendo la oposición (art. 788.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal resuelve la oposición mediante auto. El auto aprobatorio también tiene fuerza ejecutiva directa (LEC art. 517.2.9.ª)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.2 LEC · Art. 517.2.9.ª LEC"
    }
   ],
   "siguiente": "fin_auto_788"
  },
  "designacion_contador": {
   "fase": 3,
   "titulo": "Designación de contador y peritos (art. 784 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al no alcanzarse acuerdo, el art. 810.5 LEC remite al art. 784 LEC para el nombramiento de contador y, en su caso, peritos para la práctica de las operaciones divisorias."
    },
    {
     "tipo": "lista",
     "titulo": "Procedimiento de designación",
     "items": [
      "Por acuerdo de los interesados: pueden designar al contador de mutuo acuerdo (abogado, economista, graduado social, notario)",
      "En defecto de acuerdo: el LAJ designa de entre los listados de peritos judiciales (LEC art. 341)",
      "El contador debe aceptar el cargo y prestar juramento o promesa de desempeñarlo fielmente",
      "Si hay bienes de difícil valoración, se nombran peritos especializados (inmuebles, empresas, participaciones)",
      "El LAJ fija al contador un plazo para presentar el cuaderno particional (habitualmente dos meses, prorrogable)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 784 LEC · Art. 810.5 LEC · Art. 341 LEC (listados de peritos judiciales)"
    }
   ],
   "siguiente": "elaboracion_cuaderno"
  },
  "elaboracion_cuaderno": {
   "fase": 3,
   "titulo": "Elaboración del cuaderno particional por el contador",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador elabora el cuaderno particional dentro del plazo fijado por el LAJ. Los peritos, en su caso, valoran los bienes y remiten su informe para su incorporación."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del cuaderno particional",
     "items": [
      "Inventario: activo ganancial (bienes y derechos) y pasivo (cargas y obligaciones)",
      "Liquidación: reintegros e indemnizaciones entre masas patrimoniales (CC arts. 1364, 1390‑1391)",
      "Pago del pasivo de la comunidad",
      "Formación de lotes: adjudicación respetando las preferencias de CC arts. 1406‑1407 (vivienda, local profesional, explotación)",
      "Valoración de bienes según informes periciales"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 785 LEC · CC arts. 1396‑1410"
    }
   ],
   "siguiente": "presentacion_cuaderno"
  },
  "presentacion_cuaderno": {
   "fase": 3,
   "titulo": "Presentación del cuaderno y traslado a los interesados (art. 785 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador presenta el cuaderno particional ante el LAJ. El LAJ da traslado a los interesados por un plazo de diez días para que formulen oposición o lo aprueben expresamente."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: 10 días desde el traslado para formular oposición al cuaderno particional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 785 LEC"
    }
   ],
   "pregunta": "¿Formulan los interesados oposición al cuaderno?",
   "opciones": [
    {
     "texto": "No hay oposición — el LAJ aprueba las operaciones mediante decreto (título ejecutivo directo)",
     "tono": "t-ok",
     "destino": "decreto_cuaderno"
    },
    {
     "texto": "Hay oposición al cuaderno particional",
     "tono": "t-aviso",
     "destino": "oposicion_cuaderno"
    }
   ]
  },
  "decreto_cuaderno": {
   "fase": 3,
   "titulo": "Decreto del LAJ aprobando el cuaderno (art. 785 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin oposición (o con aprobación expresa), el LAJ aprueba las operaciones divisorias mediante decreto. Este decreto es título ejecutivo directo (LEC art. 517.2.9.ª)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 785 LEC · Art. 517.2.9.ª LEC"
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "oposicion_cuaderno": {
   "fase": 3,
   "titulo": "Oposición al cuaderno particional (art. 786 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal convoca a los interesados a una comparecencia para intentar un acuerdo sobre las discrepancias planteadas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786 LEC"
    }
   ],
   "pregunta": "¿Cuál es el resultado de la comparecencia ante el Tribunal?",
   "opciones": [
    {
     "texto": "Se alcanza acuerdo en la comparecencia",
     "tono": "t-ok",
     "destino": "acuerdo_786"
    },
    {
     "texto": "No hay acuerdo — el Tribunal resuelve la oposición por auto (art. 787 LEC)",
     "tono": "t-plazo",
     "destino": "auto_aprobacion"
    },
    {
     "texto": "No hay acuerdo — el Tribunal señala vista de juicio verbal para resolver",
     "tono": "t-aviso",
     "destino": "vista_verbal_cuaderno"
    }
   ]
  },
  "acuerdo_786": {
   "fase": 3,
   "titulo": "Acuerdo en la comparecencia del art. 786 LEC",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al alcanzarse acuerdo en la comparecencia, el LAJ aprueba el acuerdo mediante decreto. Procede la ejecución y entrega de los bienes adjudicados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786 LEC · Art. 788 LEC"
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "vista_verbal_cuaderno": {
   "fase": 3,
   "titulo": "Vista de juicio verbal para resolver la oposición (art. 786 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal señala y celebra vista conforme al juicio verbal para resolver las discrepancias sobre el cuaderno particional."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786 LEC · Arts. 437‑447 LEC (juicio verbal)"
    }
   ],
   "siguiente": "auto_aprobacion"
  },
  "auto_aprobacion": {
   "fase": 3,
   "titulo": "Auto de aprobación de las operaciones divisorias (art. 787 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal aprueba las operaciones divisorias mediante auto. El auto puede aprobar el cuaderno tal como fue presentado por el contador o modificarlo en los puntos que hayan sido objeto de oposición fundada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787 LEC · Arts. 455‑467 LEC (recurso de apelación)"
    }
   ],
   "pregunta": "¿Se recurre el auto de aprobación?",
   "opciones": [
    {
     "texto": "No — el auto es firme; procede la entrega de bienes adjudicados",
     "tono": "t-ok",
     "destino": "entrega_bienes"
    },
    {
     "texto": "Sí — recurso de apelación ante la Audiencia Provincial (plazo 20 días)",
     "tono": "t-plazo",
     "destino": "apelacion_787"
    }
   ]
  },
  "apelacion_787": {
   "fase": 3,
   "titulo": "Recurso de apelación contra el auto del art. 787 LEC",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial resuelve el recurso de apelación contra el auto de aprobación de las operaciones divisorias."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días desde la notificación del auto (LEC art. 458)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787 LEC · Arts. 455‑467 LEC · Art. 458 LEC"
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "entrega_bienes": {
   "fase": 3,
   "titulo": "Entrega de bienes adjudicados (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez aprobadas las operaciones (por decreto, auto u acuerdo), el LAJ procede a la entrega a cada adjudicatario de los bienes que le hayan sido adjudicados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1 LEC · Art. 517.2.9.ª LEC"
    }
   ],
   "pregunta": "¿Se producen incidencias en la entrega de bienes adjudicados?",
   "opciones": [
    {
     "texto": "No — entrega efectiva sin incidencias",
     "tono": "t-ok",
     "destino": "fin_operaciones"
    },
    {
     "texto": "Sí — resistencia a la entrega; se insta la ejecución forzosa (art. 788.2 LEC)",
     "tono": "t-aviso",
     "destino": "ejecucion_forzosa"
    }
   ]
  },
  "ejecucion_forzosa": {
   "fase": 3,
   "titulo": "Ejecución forzosa de la adjudicación (art. 788.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el adjudicatario se niega a recibir o el actual poseedor se niega a entregar, se aplican las normas de ejecución forzosa. La resolución aprobatoria tiene fuerza ejecutiva directa: no se necesita nueva sentencia de condena."
    },
    {
     "tipo": "lista",
     "titulo": "Normas aplicables según el tipo de bien",
     "items": [
      "Bienes inmuebles: LEC arts. 699 y ss.",
      "Bienes muebles: LEC arts. 701 y ss."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.2 LEC · Arts. 699 y ss. LEC · Arts. 701 y ss. LEC · Art. 517.2.9.ª LEC"
    }
   ],
   "siguiente": "fin_operaciones"
  },
  "art811_inicio": {
   "fase": 4,
   "titulo": "Liquidación del régimen de participación — Caracterización (art. 811 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El régimen de participación (CC arts. 1411‑1434) funciona como separación de bienes durante el matrimonio. A la disolución, cada cónyuge tiene derecho a participar en las ganancias obtenidas por el otro. No existe masa común: el objeto de la liquidación es el cálculo del crédito de participación."
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN: A diferencia del art. 810, la firmeza de la resolución de disolución es aquí un requisito ABSOLUTO e incondicional (art. 811.1 LEC). No puede solicitarse la liquidación hasta que no sea firme."
    },
    {
     "tipo": "nota",
     "texto": "El crédito de participación prescribe a los tres años desde la disolución del régimen (CC art. 1424). Verificar que no haya prescrito antes de iniciar el procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811 LEC · CC arts. 1411‑1434 · CC art. 1424 (prescripción 3 años)"
    }
   ],
   "siguiente": "art811_firmeza"
  },
  "art811_firmeza": {
   "fase": 4,
   "titulo": "Verificación de firmeza obligatoria (art. 811.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El art. 811.1 impone de forma absoluta que la resolución de disolución sea firme antes de solicitar la liquidación. Sin firmeza no existe certeza sobre la fecha de cierre de los patrimonios inicial y final, y no puede calcularse el crédito."
    },
    {
     "tipo": "nota",
     "texto": "Firmeza (LEC art. 207.2): resolución no recurrible, o plazo de recurso transcurrido sin interposición."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.1 LEC · LEC art. 207.2"
    }
   ],
   "pregunta": "¿Es firme la resolución que declara disuelto el régimen de participación?",
   "opciones": [
    {
     "texto": "Sí — la resolución de disolución es firme",
     "tono": "t-ok",
     "destino": "art811_solicitud"
    },
    {
     "texto": "No — pendiente de firmeza; la liquidación no puede solicitarse todavía",
     "tono": "t-aviso",
     "destino": "fin_811_no_firme"
    }
   ]
  },
  "art811_solicitud": {
   "fase": 4,
   "titulo": "Solicitud de liquidación del régimen de participación (art. 811.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe acompañarse de una propuesta de liquidación que incluya la estimación de los patrimonios iniciales y finales de cada cónyuge y la cantidad resultante a pagar."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la propuesta de liquidación",
     "items": [
      "Patrimonio inicial de cada cónyuge: bienes al inicio del régimen + bienes adquiridos a título gratuito − deudas iniciales (CC arts. 1417‑1419). Si es negativo, computa como cero.",
      "Patrimonio final de cada cónyuge: bienes a la disolución − obligaciones pendientes + adición ficticia de donaciones fraudulentas sin consentimiento del otro cónyuge (CC arts. 1420‑1422)",
      "Crédito de participación (CC arts. 1423‑1424): si ambos tienen ganancias, el de menor ganancia participa en la mitad de la diferencia; si solo uno tiene, el otro participa en la mitad",
      "Forma de pago propuesta: dinero en primer lugar (CC art. 1431); bienes si se autoriza judicialmente (CC art. 1432)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.2 LEC · CC arts. 1417‑1424 · CC arts. 1431‑1432"
    }
   ],
   "siguiente": "art811_senalamiento"
  },
  "art811_senalamiento": {
   "fase": 4,
   "titulo": "Señalamiento de la comparecencia (art. 811.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ señala, dentro del plazo máximo de diez días desde la admisión de la solicitud, el día y hora en que los cónyuges deberán comparecer al objeto de alcanzar un acuerdo."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo: 10 días desde la admisión de la solicitud para celebrar la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "A diferencia del art. 810, el único objeto de esta comparecencia es el acuerdo: no está prevista la designación de contador ni de peritos en el propio acto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.3 LEC"
    }
   ],
   "siguiente": "art811_comparecencia"
  },
  "art811_comparecencia": {
   "fase": 4,
   "titulo": "Comparecencia de liquidación del régimen de participación (art. 811 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra la comparecencia ante el LAJ. El único objeto es intentar el acuerdo entre los cónyuges sobre la liquidación del crédito de participación."
    }
   ],
   "pregunta": "¿Cuál es el resultado de la comparecencia?",
   "opciones": [
    {
     "texto": "Acuerdo entre los cónyuges sobre la liquidación",
     "tono": "t-ok",
     "destino": "art811_acuerdo"
    },
    {
     "texto": "Un cónyuge no comparece sin causa justificada",
     "tono": "t-plazo",
     "destino": "art811_ficta"
    },
    {
     "texto": "No hay acuerdo — se procede al juicio verbal (no hay contador: diferencia esencial con el art. 810)",
     "tono": "t-aviso",
     "destino": "art811_verbal"
    }
   ]
  },
  "art811_acuerdo": {
   "fase": 4,
   "titulo": "Acuerdo en la comparecencia (art. 811.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ consigna el acuerdo en el acta y da por concluido el acto. El art. 811.4 no remite expresamente al art. 788, pero la doctrina mayoritaria entiende aplicable dicha remisión analógicamente para la ejecución del acuerdo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.4 LEC · Art. 788 LEC (aplicación analógica)"
    }
   ],
   "siguiente": "fin_participacion_acuerdo"
  },
  "art811_ficta": {
   "fase": 4,
   "titulo": "Conformidad ficta en el régimen de participación (art. 811.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El cónyuge que no comparece sin causa justificada queda vinculado a la propuesta del compareciente. El LAJ consigna el resultado en el acta."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.4 LEC"
    }
   ],
   "siguiente": "fin_participacion_acuerdo"
  },
  "art811_verbal": {
   "fase": 4,
   "titulo": "Vista de juicio verbal (art. 811.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ cita a los cónyuges a una vista conforme al juicio verbal (LEC arts. 437‑447). Diferencia esencial respecto al art. 810: no se prevé el nombramiento de contador ni peritos. La tramitación es íntegramente contenciosa ante el Tribunal desde el primer desacuerdo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.5 LEC · Arts. 437‑447 LEC (juicio verbal)"
    }
   ],
   "siguiente": "art811_sentencia"
  },
  "art811_sentencia": {
   "fase": 4,
   "titulo": "Sentencia de liquidación del régimen de participación (art. 811.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sentencia determina los patrimonios iniciales y finales de cada cónyuge, la cantidad que deba satisfacer el de mayor incremento y la forma de pago."
    },
    {
     "tipo": "lista",
     "titulo": "Determinaciones de la sentencia",
     "items": [
      "Patrimonios iniciales y finales de cada cónyuge (con todos sus componentes e inclusión de adiciones por donaciones fraudulentas del art. 1422 CC)",
      "Cantidad que debe satisfacer el cónyuge con mayor incremento patrimonial neto",
      "Forma de pago: dinero en primer lugar (CC art. 1431); si no es posible, bienes con autorización judicial (CC art. 1432)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.5 LEC · CC arts. 1423‑1424 · CC arts. 1431‑1432"
    }
   ],
   "pregunta": "¿Se recurre la sentencia?",
   "opciones": [
    {
     "texto": "No — la sentencia es firme; procede el pago del crédito de participación",
     "tono": "t-ok",
     "destino": "fin_participacion_sentencia"
    },
    {
     "texto": "Sí — recurso de apelación ante la Audiencia Provincial (plazo 20 días)",
     "tono": "t-plazo",
     "destino": "art811_apelacion"
    }
   ]
  },
  "art811_apelacion": {
   "fase": 4,
   "titulo": "Recurso de apelación en el régimen de participación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial resuelve el recurso de apelación contra la sentencia de liquidación del régimen de participación."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días desde la notificación (LEC art. 458)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 455‑467 LEC · Art. 458 LEC"
    }
   ],
   "siguiente": "fin_participacion_sentencia"
  },
  "fin_acuerdo_privado": {
   "fase": 5,
   "titulo": "Fin: Liquidación extrajudicial por acuerdo entre los cónyuges",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La liquidación del régimen económico matrimonial se ha instrumentado extrajudicialmente mediante acuerdo entre los cónyuges, sin necesidad de procedimiento judicial."
    },
    {
     "tipo": "nota",
     "texto": "El convenio regulador, una vez aprobado judicialmente, tiene valor de sentencia y es título ejecutivo directo. La escritura pública notarial produce plenos efectos entre las partes y frente a terceros desde su otorgamiento."
    },
    {
     "tipo": "ley",
     "texto": "CC art. 90 · LEC art. 774.1 · CC art. 1404"
    }
   ],
   "fin": "success"
  },
  "fin_sin_proceso": {
   "fase": 5,
   "titulo": "Fin: Procedimiento no iniciable — sin proceso principal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede iniciarse el procedimiento de liquidación porque todavía no existe proceso principal admitido (demanda de nulidad, separación o divorcio) ni proceso de disolución del régimen por causa civil."
    },
    {
     "tipo": "aviso",
     "texto": "Deberá esperarse a que se admita la demanda principal y presentar entonces la solicitud de inventario (art. 808 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 808 LEC"
    }
   ],
   "fin": "warning"
  },
  "fin_solo_inventario": {
   "fase": 5,
   "titulo": "Fin: Inventario concluido — en espera de solicitud de liquidación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La fase de inventario ha concluido, pero no se ha solicitado aún la liquidación. El procedimiento queda archivado provisionalmente."
    },
    {
     "tipo": "nota",
     "texto": "Para iniciar la fase de liquidación se requiere: (1) inventario concluido; (2) en su caso, resolución firme que declare disuelto el REM. La parte podrá solicitar la liquidación cuando proceda."
    },
    {
     "tipo": "ley",
     "texto": "Art. 810.1 LEC"
    }
   ],
   "fin": "warning"
  },
  "fin_decreto_acuerdo": {
   "fase": 5,
   "titulo": "Fin: Liquidación aprobada por decreto del LAJ (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de liquidación del régimen económico matrimonial ha concluido satisfactoriamente mediante decreto del LAJ aprobando la liquidación acordada."
    },
    {
     "tipo": "nota",
     "texto": "El decreto es título ejecutivo directo (LEC art. 517.2.9.ª). Los bienes inmuebles adjudicados deben inscribirse en el Registro de la Propiedad (LH arts. 2, 10, 32‑34). La adjudicación tributa por AJD (no por ITP onerosa, pues no hay transmisión sino especificación de derechos)."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales recomendadas",
     "items": [
      "Edicto de finalización del procedimiento",
      "Comunicación al Registro de la Propiedad",
      "Entrega de copias autorizadas a las partes",
      "Archivo del expediente",
      "Control de plazos de apelación (si procede)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1 LEC · Art. 517.2.9.ª LEC · LH arts. 32‑34 · RDLeg. 1/1993 art. 45.I.B.3"
    }
   ],
   "fin": "success"
  },
  "fin_auto_788": {
   "fase": 5,
   "titulo": "Fin: Liquidación aprobada por auto del Tribunal (art. 788.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento ha concluido mediante auto del Tribunal que resuelve la oposición a la ejecución del acuerdo de liquidación. El auto tiene fuerza ejecutiva directa."
    },
    {
     "tipo": "nota",
     "texto": "Los bienes inmuebles adjudicados deben inscribirse en el Registro de la Propiedad. Tributación por AJD, no por ITP onerosa."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales recomendadas",
     "items": [
      "Edicto de finalización del procedimiento",
      "Inscripción registral de las adjudicaciones",
      "Entrega de copias autorizadas a las partes",
      "Archivo del expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.2 LEC · Art. 517.2.9.ª LEC · LH arts. 32‑34"
    }
   ],
   "fin": "success"
  },
  "fin_operaciones": {
   "fase": 5,
   "titulo": "Fin: Liquidación completada mediante operaciones divisorias",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de liquidación del régimen económico matrimonial ha concluido satisfactoriamente mediante la aprobación y ejecución de las operaciones divisorias practicadas por el contador."
    },
    {
     "tipo": "nota",
     "texto": "Los bienes inmuebles adjudicados deben inscribirse en el Registro de la Propiedad (LH arts. 2, 10, 32‑34). La adjudicación tributa por AJD; si hay excesos de adjudicación no compensados, pueden tributar por ITP onerosa."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones finales recomendadas",
     "items": [
      "Edicto de finalización del procedimiento",
      "Comunicación al Registro de la Propiedad",
      "Entrega de copias autorizadas a las partes",
      "Archivo del expediente",
      "Control de plazos de apelación (si procede)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 784‑788 LEC · LH arts. 32‑34 · RDLeg. 1/1993 art. 45.I.B.3"
    }
   ],
   "fin": "success"
  },
  "fin_811_no_firme": {
   "fase": 5,
   "titulo": "Fin: Liquidación de participación no iniciable — resolución no firme",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede solicitarse la liquidación del régimen de participación porque la resolución de disolución no es firme todavía (art. 811.1 LEC). Este requisito es absoluto e imperativo, a diferencia del art. 810."
    },
    {
     "tipo": "aviso",
     "texto": "Deberá esperarse a la firmeza e iniciar el procedimiento en ese momento. Tener en cuenta que el crédito de participación prescribe a los tres años desde la disolución del régimen (CC art. 1424)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.1 LEC · CC art. 1424"
    }
   ],
   "fin": "error"
  },
  "fin_participacion_acuerdo": {
   "fase": 5,
   "titulo": "Fin: Liquidación del régimen de participación por acuerdo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de liquidación del régimen de participación ha concluido satisfactoriamente mediante acuerdo entre los cónyuges consignado en acta por el LAJ."
    },
    {
     "tipo": "nota",
     "texto": "El crédito de participación acordado se satisfará en los términos pactados. El pago deberá realizarse en dinero, salvo que se haya acordado o autorizado judicialmente el pago en bienes (CC art. 1432)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.4 LEC · CC arts. 1431‑1432"
    }
   ],
   "fin": "success"
  },
  "fin_participacion_sentencia": {
   "fase": 5,
   "titulo": "Fin: Liquidación del régimen de participación por sentencia firme",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de liquidación del régimen de participación ha concluido mediante sentencia judicial firme que determina los patrimonios iniciales y finales, el crédito de participación y la forma de pago."
    },
    {
     "tipo": "nota",
     "texto": "La sentencia firme es título ejecutivo directo. El pago del crédito se realiza en dinero, o en bienes si el juez lo ha autorizado (CC art. 1432)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 811.5 LEC · Arts. 455‑467 LEC · CC arts. 1431‑1432"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "ReferenciasArts. 806–811 LEC<br>Ley 1/2000, de 7 de enero<br>Enjuiciamiento Civil"
});
