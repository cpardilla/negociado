/* Migrado por tools/migrate.js desde sources/actual/G02.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-division-herencia",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "Del procedimiento para la división de la herencia",
 "corto": "División de la herencia",
 "articulos": [
  "782",
  "783",
  "784",
  "785",
  "786",
  "787",
  "788",
  "789"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20261007",
  "origen": "G02"
 },
 "fases": [
  "Presupuestos y Verificación",
  "Solicitud y Admisión",
  "Actuaciones Previas",
  "Junta y Designación",
  "Operaciones Divisorias",
  "Aprobación y Oposición",
  "Entrega y Cierre"
 ],
 "actores": {
  "ambos": "LAJ / Tribunal",
  "juez": "Tribunal",
  "laj": "LAJ"
 },
 "inicio": "p0_inicio",
 "pasos": {
  "fin_acreedor": {
   "fase": 0,
   "titulo": "Solicitud inadmitida: falta de legitimación activa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los acreedores no están legitimados para instar la división judicial de la herencia (art. 782.3 LEC). Los legatarios de cosa específica tampoco tienen legitimación para pedir la partición. La solicitud no puede admitirse."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.3–5 LEC · Art. 881 CC"
    },
    {
     "tipo": "nota",
     "texto": "Derechos que conservan los acreedores: (a) art. 782.3: ejercitar acciones contra la herencia o los coherederos en el juicio declarativo correspondiente; (b) art. 782.4 (si tienen crédito reconocido o título ejecutivo): oponerse a la partición hasta ser pagados o afianzados; (c) art. 782.5 (acreedores del coheredero): intervenir a su costa en la partición para evitar fraude o perjuicio."
    },
    {
     "tipo": "nota",
     "texto": "Si el solicitante es un legatario de cosa específica, su derecho se satisface directamente con la entrega del bien legado una vez aprobada la partición (art. 881 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.3–5 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Derechos que conservan: (a) ejercitar acciones contra la herencia o los coherederos en juicio declarativo; (b) si tienen crédito reconocido o título ejecutivo, oponerse a la partición hasta ser pagados o afianzados (art. 782.4 LEC); (c) acreedores del coheredero: intervenir a su costa para evitar fraude (art. 782.5 LEC)."
    }
   ],
   "fin": "warning"
  },
  "fin_inhibicion": {
   "fase": 0,
   "titulo": "Falta de competencia territorial — Inhibición del Juzgado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado carece de competencia territorial para conocer de este procedimiento de división judicial. Debe inhibirse a favor del Juzgado competente, dando traslado a las partes para que en el plazo de cinco días aleguen lo que estimen conveniente (art. 48 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 45-53 LEC: normas de competencia territorial. Art. 48 LEC: examen de oficio de la competencia. Art. 51 LEC: conflictos de competencia negativos y positivos."
    },
    {
     "tipo": "nota",
     "texto": "Procedimiento de inhibición: (1) El LAJ acuerda dar traslado a las partes por cinco días; (2) Con las alegaciones o sin ellas, se plantea la inhibición; (3) Si el otro Juzgado se declara competente, se remiten las actuaciones; (4) Si ambos se declaran incompetentes, se plantea conflicto negativo ante el TSJ (art. 53 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "La inhibitoria es la vía procedente en los procesos de división judicial, dado que se inician por solicitud y no por demanda. No obstante, las partes también pueden plantear declinatoria (art. 50 LEC), que no suspende el procedimiento principal."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 45-53 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Procedimiento: (1) Traslado a las partes por cinco días; (2) Planteamiento de la inhibición; (3) Si el otro Juzgado se declara competente, se remiten las actuaciones; (4) Si ambos se declaran incompetentes, conflicto negativo ante el TSJ (art. 53 LEC)."
    }
   ],
   "fin": "error"
  },
  "fin_partidor_previo": {
   "fase": 0,
   "titulo": "Solicitud inadmitida: existe partidor o partición previa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento judicial no procede porque ya existe un comisario o contador-partidor designado, o el testador efectuó la partición directamente, o existe partición notarial en trámite."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.1 LEC · Arts. 1056–1058 CC · Arts. 66 bis/66 ter LN · Art. 92 LJV"
    },
    {
     "tipo": "nota",
     "texto": "Supuestos de exclusión: (a) partición por el testador (art. 1056 CC); (b) contador-partidor testamentario (art. 1057 CC); (c) contador-partidor designado por los coherederos; (d) designado por el LAJ o Notario; (e) acuerdo unánime de todos los herederos mayores con libre administración (art. 1058 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Vías alternativas: partición notarial ante Notario, contador dativo notarial, mediación con eficacia ejecutiva, o arbitraje."
    }
   ],
   "fin": "warning"
  },
  "fin_sin_masc": {
   "fase": 0,
   "titulo": "Solicitud inadmitida: requisito MASC no acreditado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud no puede admitirse a trámite por no haberse acreditado el intento previo de MASC, requisito de procedibilidad insubsanable desde el 3 de abril de 2025 (LO 1/2025, art. 5)."
    },
    {
     "tipo": "ley",
     "texto": "LO 1/2025 art. 5 · Art. 403.2 LEC · Art. 264.1.4.º LEC"
    },
    {
     "tipo": "aviso",
     "texto": "La omisión es insubsanable. Si la solicitud se presentó en el último momento del plazo de prescripción o caducidad, la inadmisión puede comportar la pérdida definitiva de la acción."
    },
    {
     "tipo": "nota",
     "texto": "Pasos a seguir: (a) intentar el MASC; (b) documentar el intento o formalizar declaración responsable del letrado; (c) presentar nueva solicitud acreditando el cumplimiento."
    }
   ],
   "fin": "error"
  },
  "p0_competencia": {
   "fase": 0,
   "titulo": "Verificación de la competencia territorial y objetiva",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal debe examinar de oficio su competencia en todo momento del procedimiento. Con carácter general, es competente el Juzgado de Primera Instancia del lugar del domicilio del causante al tiempo de su fallecimiento (art. 15.1 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 15 LEC (fuero general) · Art. 52 LEC (falta de domicilio en España) · Art. 45.2 LEC (examen de oficio) · Reglamento (UE) nº 650/2012 (sucesiones con elemento internacional: competencia del Estado miembro de residencia habitual del causante, art. 4)."
    },
    {
     "tipo": "nota",
     "texto": "Competencia objetiva: corresponde al Juzgado de Primera Instancia (la cuantía —valor del caudal— casi siempre supera los 2.000 €, umbral de los Juzgados de Paz conforme al art. 85 LEC). Los Juzgados de Violencia sobre la Mujer NO son competentes."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ debe verificar la competencia al inicio y puede inhibirse de oficio en cualquier momento. Las partes también pueden plantear declinatoria (art. 50 LEC) en los primeros cinco días desde la citación."
    },
    {
     "tipo": "plazo",
     "texto": "Si el causante carece de domicilio en España, será competente el Juzgado del lugar de la mayor parte de los bienes (art. 52 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.2 LEC · Art. 52 LEC · Art. 15 LEC · Reglamento (UE) nº 650/2012"
    },
    {
     "tipo": "nota",
     "texto": "Competencia objetiva: Juzgado de Primera Instancia. Los Juzgados de Violencia sobre la Mujer NO son competentes. En sucesiones con elementos internacionales dentro de la UE, son competentes los órganos del Estado miembro de residencia habitual del causante (art. 4 Reglamento 650/2012)."
    }
   ],
   "pregunta": "¿Es este Juzgado territorialmente competente?",
   "opciones": [
    {
     "texto": "Sí — El domicilio del causante al fallecer se encuentra dentro de la demarcación (o se aplica otro fuero atribuyente)",
     "tono": "t-ok",
     "destino": "p0_documentacion"
    },
    {
     "texto": "No — El domicilio corresponde a otro Juzgado, o existen dudas razonables sobre la competencia territorial",
     "tono": "t-aviso",
     "destino": "fin_inhibicion"
    }
   ]
  },
  "p0_inicio": {
   "fase": 0,
   "titulo": "Verificación del requisito MASC (LO 1/2025)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de admitir la solicitud, el LAJ verifica que se ha cumplido el requisito de procedibilidad obligatorio introducido por la LO 1/2025, de 2 de enero (en vigor desde el 3 de abril de 2025): el intento previo de un Medio Adecuado de Solución de Controversias."
    },
    {
     "tipo": "ley",
     "texto": "LO 1/2025 art. 5 · Art. 403.2 LEC · Art. 264.1.4.º LEC"
    },
    {
     "tipo": "nota",
     "texto": "El MASC puede ser: mediación, conciliación, negociación directa, dictamen de experto independiente, oferta vinculante confidencial o derecho colaborativo. La presentación de la solicitud de MASC interrumpe la prescripción y suspende la caducidad. Si no hay acuerdo, la parte dispone de un año para acudir a la vía judicial."
    },
    {
     "tipo": "aviso",
     "texto": "La omisión del intento de MASC es un defecto INSUBSANABLE. La inadmisión no es subsanable y, si la solicitud se presentó en el último momento del plazo, puede comportar la pérdida definitiva de la acción."
    }
   ],
   "pregunta": "¿Acredita el solicitante el intento previo de MASC?",
   "opciones": [
    {
     "texto": "Sí — Se acompaña documento acreditativo del MASC o declaración responsable del letrado, y no hay partidor previo ni partición testamentaria",
     "tono": "t-ok",
     "destino": "p0_legitimacion"
    },
    {
     "texto": "No — No se acredita el intento ni se aporta declaración responsable",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    },
    {
     "texto": "Sí, MASC acreditado, pero existe contador-partidor designado o el testador efectuó la partición",
     "tono": "t-aviso",
     "destino": "fin_partidor_previo"
    }
   ]
  },
  "p0_legitimacion": {
   "fase": 0,
   "titulo": "Verificación de la legitimación activa (art. 782.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ comprueba que quien solicita la división está legitimado. La acción de partición hereditaria es imprescriptible mientras dure la indivisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.1 y 782.3 LEC · Art. 1051 CC · Art. 1059 CC"
    },
    {
     "tipo": "nota",
     "texto": "Legitimados: (a) cualquier coheredero, testamentario o ab intestato; (b) cualquier legatario de parte alícuota, esto es, el que ostenta una cuota abstracta del caudal, no un legado de cosa cierta."
    },
    {
     "tipo": "nota",
     "texto": "Supuestos especiales: (a) Coheredero bajo condición suspensiva (art. 1054 CC): no puede pedir la partición hasta que se cumpla la condición, pero sí pueden los demás; (b) Coherederos del premuerto (art. 1055 CC): si un coheredero muere antes de la partición dejando dos o más herederos, basta que uno pida, pero todos deben comparecer bajo una sola representación; (c) Personas con medidas de apoyo por discapacidad (Ley 8/2021): actuarán conforme a sus medidas de apoyo; (d) Ausentes: actuarán por medio de su defensor judicial."
    },
    {
     "tipo": "aviso",
     "texto": "Los acreedores NO están legitimados para instar la división (art. 782.3 LEC). Sus acciones se ejercitan en el juicio declarativo correspondiente, sin que ello suspenda el procedimiento divisorio. Los legatarios de cosa específica tampoco tienen legitimación para pedir la partición, pues su derecho se satisface directamente con la entrega del bien legado una vez aprobada la partición (art. 881 CC)."
    }
   ],
   "pregunta": "¿Quién insta la división?",
   "opciones": [
    {
     "texto": "Coheredero (testamentario o ab intestato) con libre disposición de bienes",
     "tono": "t-ok",
     "destino": "p0_partidor"
    },
    {
     "texto": "Legatario de parte alícuota (titular de cuota abstracta del caudal)",
     "tono": "t-ok",
     "destino": "p0_documentacion"
    },
    {
     "texto": "Acreedor de la herencia o de algún coheredero, o legatario de cosa específica",
     "tono": "t-aviso",
     "destino": "fin_acreedor"
    }
   ]
  },
  "p0_partidor": {
   "fase": 0,
   "titulo": "Verificación de inexistencia de partidor previo (art. 782.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento es subsidiario. No procede cuando exista ya un comisario o contador-partidor designado para efectuar la partición, ni cuando el testador la haya realizado directamente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.1 LEC · Art. 1056 CC · Art. 1057 CC · Art. 1058 CC"
    },
    {
     "tipo": "nota",
     "texto": "Supuestos de exclusión: (a) partición por el testador (art. 1056 CC); (b) contador-partidor testamentario (art. 1057 CC); (c) contador-partidor designado por los coherederos; (d) designado por el LAJ o el Notario; (e) acuerdo unánime de todos los herederos mayores de edad con libre administración de sus bienes (art. 1058 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Alternativas si existe mecanismo previo: (1) Partición notarial (arts. 66 bis/66 ter LN): todos los herederos otorgan escritura pública ante Notario; (2) Contador dativo notarial (art. 92 LJV): los herederos que representen al menos el 50% solicitan el nombramiento de contador dativo; (3) Mediación (Ley 36/2006): el acuerdo alcanzado, elevado a escritura pública, tiene eficacia de título ejecutivo (art. 25); (4) Arbitraje (Ley 60/2003): el laudo tiene la misma eficacia que sentencia firme."
    }
   ],
   "pregunta": "¿Existe contador-partidor designado o el testador efectuó la partición?",
   "opciones": [
    {
     "texto": "No — No existe partidor designado ni partición previa",
     "tono": "t-ok",
     "destino": "p0_competencia"
    },
    {
     "texto": "Sí — Existe partidor previo, partición testamentaria, contador dativo notarial o partición notarial en trámite",
     "tono": "t-aviso",
     "destino": "fin_partidor_previo"
    }
   ]
  },
  "fin_inadmitida": {
   "fase": 1,
   "titulo": "Solicitud inadmitida — Defectos no subsanados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto inadmitiendo la solicitud de división judicial por no haberse subsanado los defectos documentales en el plazo concedido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 403 LEC · Art. 451 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Contra este decreto cabe recurso de reposición ante el propio Juzgado en el plazo de cinco días (art. 451 LEC), y subsidiariamente recurso de apelación."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante puede presentar una nueva solicitud una vez disponga de la documentación completa, sin perjuicio de los plazos de prescripción que puedan ser aplicables."
    }
   ],
   "fin": "error"
  },
  "p0_admision": {
   "fase": 1,
   "titulo": "Admisión a trámite de la solicitud (art. 782 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto admitiendo a trámite la solicitud de división judicial de la herencia. A partir de este momento se inicia formalmente el procedimiento y se practican las primeras actuaciones."
    },
    {
     "tipo": "plazo",
     "texto": "El decreto de admisión debe contener: (1) Identificación del solicitante y del causante; (2) Bienes objeto de la herencia según la documentación aportada; (3) Personas que deben ser citadas (herederos, legatarios, cónyuge viudo, MF si procede); (4) Acuerdo sobre medidas provisionales si se solicitan."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ procede a identificar a todos los interesados que deben ser citados. Para ello, puede solicitar información al Registro Civil, al Registro General de Actos de Última Voluntad, al Registro de la Propiedad, y a las entidades financieras."
    },
    {
     "tipo": "nota",
     "texto": "La solicitud se presenta por escrito ante el Juzgado de Primera Instancia competente. No se inicia por demanda sino por solicitud (art. 782 LEC), lo que refleja la naturaleza mixta jurisdiccional/no jurisdiccional del procedimiento."
    },
    {
     "tipo": "info",
     "texto": "El LAJ verifica si algún acreedor privilegiado formula petición de que no se lleve a efecto la partición hasta ser pagado o afianzado. Esta petición puede deducirse en cualquier momento antes de la entrega de bienes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.4 LEC · Art. 788.3 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Legitimados: (a) acreedores reconocidos en el testamento o por los coherederos; (b) acreedores con título ejecutivo. Los acreedores del coheredero (art. 782.5 LEC) pueden intervenir a su costa para evitar fraude, pero NO pueden oponerse a que se lleve a efecto la partición."
    }
   ],
   "pregunta": "¿Formulan oposición a la partición acreedores privilegiados conforme al art. 782.4 LEC?",
   "opciones": [
    {
     "texto": "No — No hay oposición de acreedores privilegiados",
     "tono": "t-ok",
     "destino": "p2_intervencion_check"
    },
    {
     "texto": "Sí — Acreedores reconocidos en testamento, por los coherederos, o con título ejecutivo piden que no se lleve a efecto hasta ser pagados o garantizados",
     "tono": "t-plazo",
     "destino": "p0_anota_acreedor"
    }
   ]
  },
  "p0_anota_acreedor": {
   "fase": 1,
   "titulo": "Registro de la oposición de acreedor privilegiado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se registra en el expediente la oposición formulada. Esta anotación condiciona la fase de entrega: no se hará entrega de bienes a ningún heredero ni legatario hasta que los acreedores estén completamente pagados o garantizados a su satisfacción (art. 788.3 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.4 LEC · Art. 788.3 LEC"
    },
    {
     "tipo": "aviso",
     "texto": "Consignar expresamente: nombre del acreedor, naturaleza del crédito, fundamento de la legitimación (reconocimiento testamentario / por coherederos / título ejecutivo) y fecha de la petición."
    },
    {
     "tipo": "aviso",
     "texto": "Consignar: nombre del acreedor, naturaleza del crédito, fundamento de la legitimación (reconocimiento testamentario / por coherederos / título ejecutivo) y fecha de la petición."
    }
   ],
   "siguiente": "p2_intervencion_check"
  },
  "p0_documentacion": {
   "fase": 1,
   "titulo": "Verificación de documentación preceptiva (art. 782.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ comprueba que la solicitud va acompañada de los documentos obligatorios. La ausencia de alguno determina un requerimiento de subsanación antes de la admisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 782.2 LEC · Art. 403 LEC"
    },
    {
     "tipo": "lista",
     "titulo": "Documentación mínima obligatoria",
     "items": [
      "Certificado de defunción del causante",
      "Documento acreditativo de la condición de heredero o legatario (testamento, declaración notarial de herederos, resolución judicial ab intestato u otro título sucesorio)",
      "Documento acreditativo del intento de MASC o declaración responsable del letrado sobre la imposibilidad de llevarlo a cabo (art. 264.1.4.º LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Documentación complementaria recomendada: nota simple registral de inmuebles, certificados de titularidad bancaria, certificados de participaciones societarias, relación de deudas conocidas, certificado literal de nacimiento del causante. Su aportación agiliza notablemente la labor del contador-partidor."
    },
    {
     "tipo": "nota",
     "texto": "La presentación de documentación completa no es requisito ineludible de admisión: el LAJ puede admitir a trámite la solicitud aunque sea incompleta, concediendo un plazo razonable para subsanar las deficiencias (principio de proporcionalidad y tutela judicial efectiva, art. 24.1 CE)."
    }
   ],
   "pregunta": "¿Está la documentación esencial completa?",
   "opciones": [
    {
     "texto": "Sí — Se aporta certificado de defunción y título sucesorio válido, además de acreditación de MASC",
     "tono": "t-ok",
     "destino": "p0_admision"
    },
    {
     "texto": "Parcialmente — Falta algún documento esencial o la acreditación es insuficiente",
     "tono": "t-plazo",
     "destino": "p0_subsanacion"
    }
   ]
  },
  "p0_subsanacion": {
   "fase": 1,
   "titulo": "Requerimiento de subsanación de defectos documentales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ concede al solicitante un plazo para subsanar las deficiencias documentales detectadas. El requerimiento debe ser preciso, indicando con claridad qué documentos faltan y dónde obtenerlos."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: el LAJ fijará un plazo prudente (habitualmente 10-20 días hábiles) para la subsanación. El plazo debe ser suficiente para obtener los documentos, especialmente el certificado del Registro General de Actos de Última Voluntad, que puede demorar varias semanas."
    },
    {
     "tipo": "nota",
     "texto": "Si el defecto consiste en la falta de acreditación de la condición de heredero, y existe testamento, podrá admitirse la solicitud con la presentación de copia simple del testamento, requiriendo la copia autorizada para posteriormente."
    },
    {
     "tipo": "aviso",
     "texto": "Transcurrido el plazo sin que se subsanen los defectos, el LAJ dictará decreto inadmitiendo la solicitud. Contra este decreto cabe recurso de reposición en el plazo de cinco días (art. 451 LEC), y subsidiariamente recurso de apelación."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: habitualmente 10-20 días hábiles. Debe ser suficiente para obtener los documentos, especialmente el certificado del Registro General de Actos de Última Voluntad."
    },
    {
     "tipo": "aviso",
     "texto": "Transcurrido el plazo sin subsanación, el LAJ dictará decreto inadmitiendo la solicitud. Contra este decreto cabrá recurso de reposición."
    }
   ],
   "pregunta": "¿Subsana el solicitante los defectos documentales en el plazo concedido?",
   "opciones": [
    {
     "texto": "Sí — Presenta la documentación requerida completa y válida",
     "tono": "t-ok",
     "destino": "p0_admision"
    },
    {
     "texto": "No — Transcurre el plazo sin subsanación o la subsanación sigue siendo insuficiente",
     "tono": "t-aviso",
     "destino": "fin_inadmitida"
    }
   ]
  },
  "p2_convocatoria": {
   "fase": 2,
   "titulo": "Convocatoria de la Junta (art. 783.2–5 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ procede a convocar la Junta, cuya única finalidad es la designación del contador y, en su caso, los peritos. No es preceptiva la intervención de abogado ni procurador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.2–5 LEC"
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: señalamiento de día DENTRO DE LOS DIEZ DÍAS siguientes (art. 783.2 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos a convocar",
     "items": [
      "Los herederos",
      "Los legatarios de parte alícuota",
      "El cónyuge sobreviviente",
      "Los acreedores del coheredero personados en el procedimiento (art. 783.5 LEC)",
      "El Ministerio Fiscal, si hay menores sin representante legal o ausentes con paradero desconocido (art. 783.4 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los acreedores del coheredero NO personados no son citados, pero pueden participar si concurren espontáneamente aportando sus títulos. El LAJ debe dejar constancia documental de todas las citaciones practicadas."
    },
    {
     "tipo": "info",
     "texto": "Practicadas las actuaciones anteriores (o si no fueren necesarias), el LAJ convoca a Junta a los herederos, legatarios de parte alícuota y al cónyuge sobreviviente. Finalidad exclusiva: designación del contador y, en su caso, los peritos. No es preceptiva la intervención de abogado ni procurador."
    }
   ],
   "pregunta": "¿Existe algún interesado con paradero desconocido (agotados los medios ordinarios de averiguación del domicilio)?",
   "opciones": [
    {
     "texto": "No — Todos los interesados tienen domicilio o residencia conocida",
     "tono": "t-ok",
     "destino": "p2_mf_check"
    },
    {
     "texto": "Sí — Algún interesado tiene paradero desconocido",
     "tono": "t-plazo",
     "destino": "p2_edictos"
    }
   ]
  },
  "p2_edictos": {
   "fase": 2,
   "titulo": "Citación edictal (art. 164 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con paradero desconocido y agotados los medios ordinarios, el LAJ ordena la citación mediante publicación en el Tablón Edictal Judicial Único."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.3 LEC · Art. 164 LEC (redacción RDL 6/2023, en vigor 20/03/2024) · Art. 156 LEC"
    },
    {
     "tipo": "aviso",
     "texto": "La citación edictal es subsidiaria y excepcional. El uso prematuro puede vulnerar el derecho a la tutela judicial efectiva (art. 24 CE). Deben omitirse los datos que identifiquen a menores."
    }
   ],
   "siguiente": "p2_mf_check"
  },
  "p2_gananciales": {
   "fase": 2,
   "titulo": "Inclusión de la liquidación de gananciales en las operaciones divisorias",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador-partidor deberá incluir en sus operaciones divisorias la previa liquidación de la sociedad de gananciales. Esto implica: (a) determinar qué bienes son propios del causante; (b) determinar qué bienes son gananciales; (c) adjudicar al cónyuge viudo su mitad de los gananciales; (d) calcular la masa hereditaria neta (solo la mitad de gananciales que correspondía al causante más sus bienes propios)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 806 CC: la adjudicación al cónyuge viudo de su cuota usufructuaria requiere la previa formación del inventario y liquidación de gananciales. STS 1.ª 489/2016: la liquidación de gananciales y la adjudición de la herencia son operaciones jurídicas distintas, aunque puedan tramitarse en el mismo procedimiento."
    },
    {
     "tipo": "nota",
     "texto": "El inventario hereditario debe distinguir: (a) bienes propios del causante (forman parte de la herencia); (b) mitad de bienes gananciales del causante (forman parte de la herencia); (c) bienes propios del cónyuge viudo (NO forman parte de la herencia); (d) mitad de bienes gananciales del cónyuge viudo (NO forman parte de la herencia)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 806 CC · STS 489/2016"
    },
    {
     "tipo": "nota",
     "texto": "El inventario debe distinguir: (a) bienes propios del causante (herencia); (b) mitad de gananciales del causante (herencia); (c) bienes propios del cónyuge viudo (NO herencia); (d) mitad de gananciales del cónyuge viudo (NO herencia)."
    }
   ],
   "pregunta": "¿Existe controversia entre el cónyuge viudo y los herederos sobre la calificación de algún bien (propio vs. ganancial)?",
   "opciones": [
    {
     "texto": "No — No hay controversia sobre la calificación de los bienes, o las partes están de acuerdo",
     "tono": "t-ok",
     "destino": "p2_convocatoria"
    },
    {
     "texto": "Sí — Hay disputa sobre si determinados bienes son propios del causante o gananciales del matrimonio",
     "tono": "t-plazo",
     "destino": "p2_jv_gananciales"
    }
   ]
  },
  "p2_gananciales_check": {
   "fase": 2,
   "titulo": "Análisis previo: liquidación de gananciales y régimen económico matrimonial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de convocar la Junta, el LAJ debe realizar un análisis previo de las circunstancias del caso que pueden condicionar el procedimiento: existencia de sociedad de gananciales que liquidar, presencia de menores o ausentes que requieran la intervención del Ministerio Fiscal, y personación de acreedores."
    },
    {
     "tipo": "ley",
     "texto": "Art. 806 CC · STS 1.ª 261/2013, de 6 de mayo · STS 1.ª 489/2016, de 19 de julio"
    },
    {
     "tipo": "nota",
     "texto": "Si existe sociedad de gananciales: la liquidación de gananciales es presupuesto necesario para la partición hereditaria. El contador-partidor incluirá la liquidación en sus operaciones divisorias. Si hay controversia sobre el carácter propio o ganancial de algún bien, se sustancia como juicio verbal (art. 794.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El cónyuge sobreviviente debe ser citado aunque no sea heredero, por su interés legítimo derivado de la posible sociedad de gananciales y de su derecho de legítima de usufructo (art. 807 CC)."
    },
    {
     "tipo": "plazo",
     "texto": "El inventario hereditario debe distinguir claramente los bienes propios de los gananciales para determinar la masa hereditaria neta."
    },
    {
     "tipo": "nota",
     "texto": "Si hay menores sin representación o ausentes con paradero desconocido: el LAJ debe convocar al Ministerio Fiscal (art. 783.4 LEC). El cónyuge sobreviviente debe ser citado aunque no sea heredero, por su interés en la sociedad de gananciales y legítima de usufructo (art. 807 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.4 LEC · Art. 794.2 LEC · STS 261/2013"
    }
   ],
   "pregunta": "¿Existía sociedad de gananciales entre el causante y su cónyuge?",
   "opciones": [
    {
     "texto": "No — El causante estaba casado en separación de bienes, era soltero, divorciado o viudo, o el régimen ya fue liquidado",
     "tono": "t-ok",
     "destino": "p2_convocatoria"
    },
    {
     "texto": "Sí — El causante estaba casado en régimen de gananciales y es necesaria la liquidación previa del régimen económico matrimonial",
     "tono": "t-plazo",
     "destino": "p2_gananciales"
    }
   ]
  },
  "p2_intervencion": {
   "fase": 2,
   "titulo": "Intervención judicial del caudal (arts. 791–796 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal acuerda mediante auto las actuaciones de intervención: ocupación y seguridad de bienes, formación de inventario y depósito, y en su caso nombramiento de administrador judicial."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 791–795 LEC · Art. 796 LEC (cesación de la intervención)"
    },
    {
     "tipo": "nota",
     "texto": "Administrador (art. 795 LEC): preferencia para el cónyuge viudo; en su defecto, heredero o legatario con mayor participación; en defecto de estos, cualquier heredero, legatario o un tercero. Debe prestar caución bastante."
    },
    {
     "tipo": "nota",
     "texto": "La intervención cesa (art. 796 LEC): con la entrega de bienes adjudicados, o antes si todos los herederos lo piden de común acuerdo —salvo menores sin representante legal, ausentes no localizables o acreedores privilegiados con oposición pendiente—."
    },
    {
     "tipo": "nota",
     "texto": "Trámite: el LAJ acuerda las medidas de seguridad pertinentes (depósito de metálico y efectos públicos, aseguramiento de bienes inmuebles, nombramiento de administrador con caución), señala día y hora para la formación del inventario, y cita a todos los interesados incluyendo al Ministerio Fiscal y al Abogado del Estado (art. 793 LEC, modificado por Ley 8/2021)."
    },
    {
     "tipo": "nota",
     "texto": "Si durante la formación del inventario surge controversia sobre la inclusión o exclusión de bienes (art. 794.2 LEC), la cuestión se tramita y resuelve como juicio verbal, sin paralizar el resto de las actuaciones."
    }
   ],
   "siguiente": "p2_inventario"
  },
  "p2_intervencion_check": {
   "fase": 2,
   "titulo": "Solicitud de intervención del caudal hereditario (art. 783.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica si algún legitimado ha pedido la intervención judicial del caudal y la formación de inventario como actuación previa a la Junta."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.1 LEC · Arts. 791–796 LEC · Art. 792 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Legitimados para pedir la intervención (art. 792 LEC): (a) coheredero o legatario de parte alícuota al tiempo de solicitar la división, salvo prohibición expresa del testador; (b) acreedores reconocidos en testamento o con título ejecutivo."
    },
    {
     "tipo": "nota",
     "texto": "Si el inventario ya está determinado o hay acuerdo entre los interesados, puede prescindirse de esta actuación y pasar directamente a la Junta."
    },
    {
     "tipo": "nota",
     "texto": "Legitimados (art. 792 LEC): (a) coheredero o legatario de parte alícuota, salvo prohibición expresa del testador; (b) acreedores reconocidos en testamento o con título ejecutivo. Si el inventario ya está determinado o hay acuerdo, puede prescindirse y pasar a la Junta."
    }
   ],
   "pregunta": "¿Se ha solicitado la intervención judicial del caudal y la formación de inventario?",
   "opciones": [
    {
     "texto": "No — El inventario está determinado o no es necesario; se pasa directamente a la Junta",
     "tono": "t-ok",
     "destino": "p2_gananciales_check"
    },
    {
     "texto": "Sí — Se pide intervención del caudal hereditario y formación de inventario (arts. 791–796 LEC)",
     "tono": "t-plazo",
     "destino": "p2_intervencion"
    }
   ]
  },
  "p2_inventario": {
   "fase": 2,
   "titulo": "Formación del inventario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acordada la intervención, se forma el inventario de los bienes que integran el caudal partible. Constituirá la base de las operaciones divisorias y el primer apartado del cuaderno particional (art. 786.2.1.º LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.1 LEC · Art. 786.2.1.º LEC"
    },
    {
     "tipo": "nota",
     "texto": "El inventario debe distinguir: (a) bienes propios del causante (forman parte de la herencia); (b) mitad de bienes gananciales del causante (forman parte de la herencia); (c) bienes propios del cónyuge viudo (NO forman parte de la herencia); (d) mitad de bienes gananciales del cónyuge viudo (NO forman parte de la herencia)."
    }
   ],
   "siguiente": "p2_gananciales_check"
  },
  "p2_jv_gananciales": {
   "fase": 2,
   "titulo": "Juicio verbal sobre controversia de gananciales (Art. 794.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La controversia sobre la inclusión o exclusión de bienes del inventario por discordancia sobre su carácter propio o ganancial se tramita y resuelve como juicio verbal conforme al art. 794.2 LEC (modificado por Ley 42/2015)."
    },
    {
     "tipo": "nota",
     "texto": "Fases del juicio verbal: (1) Alegaciones iniciales de las partes; (2) Proposición y práctica de prueba (documental, testifical, pericial, interrogatorio); (3) Conclusiones; (4) Sentencia. El Juez determinará el carácter propio o ganancial de los bienes controvertidos."
    },
    {
     "tipo": "plazo",
     "texto": "La resolución de esta controversia es presupuesto para las operaciones divisorias: hasta que no se determine con certeza qué bienes integran el caudal hereditario, el contador no puede formar el inventario ni practicar las operaciones. No obstante, el contador puede iniciar su trabajo sobre los bienes no controvertidos."
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia que resuelva la controversia de gananciales tiene eficacia de cosa juzgada material, a diferencia de la sentencia que resuelva la oposición a las operaciones divisorias (art. 787.5 LEC), que no produce cosa juzgada."
    }
   ],
   "siguiente": "p2_convocatoria"
  },
  "p2_mf": {
   "fase": 2,
   "titulo": "Convocatoria del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se convoca al Ministerio Fiscal para que represente en la Junta y en el procedimiento a los interesados sin representación o con paradero desconocido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.4 LEC"
    },
    {
     "tipo": "nota",
     "texto": "La representación cesa: respecto de los menores, cuando tengan representante legal; respecto de los ausentes, cuando se presenten o puedan ser citados personalmente."
    }
   ],
   "siguiente": "p3_junta"
  },
  "p2_mf_check": {
   "fase": 2,
   "titulo": "Intervención del Ministerio Fiscal (art. 783.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ verifica si concurren los presupuestos de intervención del Ministerio Fiscal como representante de interesados vulnerables."
    },
    {
     "tipo": "ley",
     "texto": "Art. 783.4 LEC · Ley 8/2021, de 2 de junio"
    },
    {
     "tipo": "nota",
     "texto": "La representación cesa: respecto de los menores, cuando tengan representante legal; respecto de los ausentes, cuando se presenten o puedan ser citados personalmente."
    }
   ],
   "pregunta": "¿Existen menores sin representante legal o ausentes con paradero desconocido entre los interesados?",
   "opciones": [
    {
     "texto": "No — Todos los interesados son mayores de edad con representación y paradero conocido",
     "tono": "t-ok",
     "destino": "p3_junta"
    },
    {
     "texto": "Sí — Hay menores sin representante o ausentes con paradero desconocido",
     "tono": "t-plazo",
     "destino": "p2_mf"
    }
   ]
  },
  "p3_aceptacion": {
   "fase": 3,
   "titulo": "Aceptación del cargo (art. 785.1–2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ requiere la aceptación formal del cargo al contador y peritos. La aceptación es presupuesto necesario para la entrega de la documentación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 785.1–2 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Efecto de la aceptación: da derecho a cada interesado para obligar al contador a cumplir su encargo (art. 785.2 LEC). La relación jurídica vinculante se establece con todos los partícipes del procedimiento, no solo con quien instó la división."
    },
    {
     "tipo": "aviso",
     "texto": "El contador que acepta y luego se niega a actuar sin causa justificada incurre en responsabilidad por los daños y perjuicios causados. La responsabilidad se exige en la jurisdicción civil, no dentro del propio procedimiento de división (art. 785.2 LEC)."
    }
   ],
   "pregunta": "¿Acepta el contador-partidor el cargo formalmente?",
   "opciones": [
    {
     "texto": "Sí — El contador acepta formalmente el encargo y se compromete a realizar las operaciones divisorias",
     "tono": "t-ok",
     "destino": "p3_entrega_docs"
    },
    {
     "texto": "No — El contador designado rechaza el cargo sin causa justificada, o no comparece a la aceptación",
     "tono": "t-aviso",
     "destino": "p3_sustitucion"
    }
   ]
  },
  "p3_contador_acuerdo": {
   "fase": 3,
   "titulo": "Contador-partidor designado por acuerdo de la Junta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los interesados han acordado el nombramiento del contador-partidor. El LAJ hace constar el acuerdo en el acta de la Junta y procede a requerir formalmente al contador para que acepte el cargo."
    },
    {
     "tipo": "nota",
     "texto": "El contador designado por acuerdo suele ser un abogado con experiencia en derecho de sucesiones propuesto por una o varias de las partes. Su designación tiene carácter vinculante para todos los interesados, incluso para los ausentes a la Junta."
    },
    {
     "tipo": "plazo",
     "texto": "El contador designado por acuerdo queda sometido al mismo régimen que el designado por sorteo en cuanto a obligaciones (cumplir el encargo), plazos (dos meses para las operaciones, art. 786.4 LEC), y responsabilidad (arts. 124 ss. LEC)."
    },
    {
     "tipo": "info",
     "texto": "El LAJ verifica si los interesados alcanzan acuerdo sobre los peritos necesarios para el avalúo, con el límite de un perito por cada clase de bienes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 784.2 LEC"
    }
   ],
   "pregunta": "¿Se alcanza acuerdo sobre la designación de los peritos tasadores?",
   "opciones": [
    {
     "texto": "Sí — Acuerdo sobre peritos o el contador estima que no son necesarios",
     "tono": "t-ok",
     "destino": "p3_aceptacion"
    },
    {
     "texto": "No — No hay acuerdo; designación de peritos por sorteo (art. 341 LEC)",
     "tono": "t-plazo",
     "destino": "p3_sorteo_per"
    }
   ]
  },
  "p3_entrega_docs": {
   "fase": 3,
   "titulo": "Entrega de autos y documentación al contador (art. 785.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Previa aceptación, el LAJ entrega los autos al contador y pone a su disposición cuantos objetos, documentos y papeles sean necesarios para practicar las operaciones divisorias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 785.1 LEC"
    },
    {
     "tipo": "lista",
     "titulo": "Documentación y materiales a entregar",
     "items": [
      "Autos completos del procedimiento",
      "Documentación para el inventario (si no se hubiera practicado)",
      "Documentos y papeles para el avalúo, la liquidación y la división del caudal",
      "Cualesquiera otros objetos o papeles que el contador estime necesarios"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Es conveniente que la entrega se realice mediante diligencia especificando detalladamente la documentación entregada, para evitar controversias posteriores sobre si el contador dispuso de toda la información necesaria para su trabajo."
    },
    {
     "tipo": "nota",
     "texto": "Si el contador solicita documentación adicional que no obra en autos, el LAJ requerirá a los interesados para que la aporten en un plazo prudencial. La negativa a aportar documentación relevante puede generar responsabilidad para el interesado que la retiene."
    }
   ],
   "pregunta": "¿Solicita alguna parte que el LAJ fije formalmente un plazo al contador por diligencia (art. 785.3 LEC)?",
   "opciones": [
    {
     "texto": "No — Opera el plazo máximo imperativo de dos meses del art. 786.2 LEC",
     "tono": "t-ok",
     "destino": "p4_operaciones"
    },
    {
     "texto": "Sí — Se solicita fijación de plazo expreso por diligencia del LAJ",
     "tono": "t-plazo",
     "destino": "p3_plazo"
    }
   ]
  },
  "p3_junta": {
   "fase": 3,
   "titulo": "Celebración de la Junta (art. 784.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Junta se celebra con los concurrentes, presidida por el LAJ. Finalidad exclusiva: designar al contador-partidor y, en su caso, a los peritos. La Junta es válida con los asistentes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 784.1–2 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Acreedores del coheredero no personados: pueden participar si concurren espontáneamente aportando sus títulos (art. 783.5 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Límite imperativo (art. 784.2 y 784.3 LEC): no puede designarse más de un perito para cada clase de bienes."
    },
    {
     "tipo": "plazo",
     "texto": "El LAJ informa a los asistentes sobre el objeto de la Junta, sus derechos, y las consecuencias de la falta de acuerdo (designación por sorteo). Se anima a los interesados a alcanzar un acuerdo sobre el contador y los peritos."
    }
   ],
   "pregunta": "¿Alcanzan los interesados acuerdo sobre el contador-partidor?",
   "opciones": [
    {
     "texto": "Sí — Acuerdo unánime sobre el contador",
     "tono": "t-ok",
     "destino": "p3_contador_acuerdo"
    },
    {
     "texto": "No — No hay acuerdo; el LAJ designa contador por sorteo (art. 341 LEC)",
     "tono": "t-plazo",
     "destino": "p3_sorteo_cont"
    }
   ]
  },
  "p3_plazo": {
   "fase": 3,
   "titulo": "Diligencia de fijación de plazo al contador (art. 785.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A instancia de parte, el LAJ dicta diligencia fijando al contador un plazo concreto para presentar las operaciones divisorias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 785.3 LEC · Art. 786.2 LEC"
    },
    {
     "tipo": "aviso",
     "texto": "Incumplimiento del plazo fijado por diligencia: responsabilidad del contador por daños y perjuicios (art. 785.3 LEC). Este mecanismo es acumulativo con el plazo máximo de dos meses del art. 786.2 LEC."
    }
   ],
   "siguiente": "p4_operaciones"
  },
  "p3_sorteo_cont": {
   "fase": 3,
   "titulo": "Designación del contador por sorteo (arts. 784.3 y 341 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A falta de acuerdo, el LAJ designa contador por sorteo de entre abogados ejercientes con especiales conocimientos y despacho profesional en el lugar del juicio."
    },
    {
     "tipo": "ley",
     "texto": "Art. 784.3 LEC · Art. 341 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Procedimiento: en enero los colegios profesionales envían listas de colegiados. Primera designación por sorteo ante el LAJ; siguientes por orden correlativo."
    },
    {
     "tipo": "nota",
     "texto": "Al contador por sorteo le son aplicables las normas de recusación y provisión de fondos de los peritos (art. 784.4 LEC)."
    },
    {
     "tipo": "plazo",
     "texto": "El sorteo se realiza de entre las listas que los Colegios Profesionales remiten anualmente al Juzgado (art. 341.1 LEC). El abogado designado tiene derecho a ser recusado por las mismas causas que los peritos (art. 124 LEC): parentesco, interés directo o indirecto, amistad íntima o enemistad manifiesta con alguna de las partes."
    },
    {
     "tipo": "aviso",
     "texto": "Si el contador designado por sorteo no acepta el cargo, se procede a un nuevo sorteo. No se admite la renuncia unilateral sin causa justificada (enfermedad, incompatibilidad sobrevenida)."
    }
   ],
   "pregunta": "¿Acuerdo sobre los peritos?",
   "opciones": [
    {
     "texto": "Sí — Acuerdo sobre peritos o el contador estima que no son necesarios",
     "tono": "t-ok",
     "destino": "p3_aceptacion"
    },
    {
     "texto": "No — No hay acuerdo; designación de peritos por sorteo",
     "tono": "t-plazo",
     "destino": "p3_sorteo_per"
    }
   ]
  },
  "p3_sorteo_per": {
   "fase": 3,
   "titulo": "Designación de peritos por sorteo (arts. 784.3 y 341 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ designa por sorteo los peritos que el contador estime necesarios para los avalúos, con el mismo procedimiento que para el contador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 784.3 LEC · Art. 341 LEC"
    },
    {
     "tipo": "aviso",
     "texto": "Límite imperativo: nunca más de un perito para cada clase de bienes (art. 784.3 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Los honorarios de los peritos se consideran gastos de partición deducibles de la herencia conforme al art. 1064 CC, y suelen abonarse a partes iguales por todos los coherederos proporcionalmente a sus cuotas."
    }
   ],
   "siguiente": "p3_aceptacion"
  },
  "p3_sustitucion": {
   "fase": 3,
   "titulo": "Sustitución del contador-partidor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador designado no acepta el cargo o renuncia sin causa justificada. El LAJ debe proceder a la designación de un sustituto mediante el mismo procedimiento utilizado para el original: nuevo sorteo si fue designado por sorteo, o acuerdo de las partes si fue acordado."
    },
    {
     "tipo": "aviso",
     "texto": "El contador que acepta y luego se niega a actuar sin causa justificada incurre en responsabilidad por los daños y perjuicios causados. La responsabilidad se exige en la jurisdicción civil, no dentro del propio procedimiento de división (art. 785.2 LEC)."
    },
    {
     "tipo": "plazo",
     "texto": "El plazo de dos meses para la elaboración de las operaciones divisorias (art. 786.4 LEC) se computa desde la aceptación del nuevo contador, no desde la designación del anterior."
    }
   ],
   "siguiente": "p3_entrega_docs"
  },
  "p4_incumplimiento": {
   "fase": 4,
   "titulo": "Incumplimiento del plazo por el contador-partidor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador no ha presentado las operaciones divisorias en el plazo establecido (dos meses conforme al art. 786.4 LEC, o el plazo fijado por el LAJ a instancia de parte conforme al art. 785.3 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "El contador que no verificare las operaciones en el plazo fijado será responsable de los daños y perjuicios que su incumplimiento cause a los interesados (art. 785.3 LEC). La responsabilidad se exige en la jurisdicción civil, no dentro del procedimiento de división."
    },
    {
     "tipo": "plazo",
     "texto": "El LAJ debe requerir al contador para que presente las operaciones en un nuevo plazo prudencial, informándole de las consecuencias de su incumplimiento. Si el contador no atiende el requerimiento, procede la sustitución."
    }
   ],
   "pregunta": "¿Atiende el contador el requerimiento y presenta las operaciones?",
   "opciones": [
    {
     "texto": "Sí — El contador atiende el requerimiento y presenta las operaciones divisorias (aunque haya superado el plazo original)",
     "tono": "t-ok",
     "destino": "p5_traslado"
    },
    {
     "texto": "No — El contador no atiende el requerimiento o manifiesta su imposibilidad de cumplir",
     "tono": "t-aviso",
     "destino": "p3_sustitucion"
    }
   ]
  },
  "p4_operaciones": {
   "fase": 4,
   "titulo": "Práctica de las operaciones divisorias (art. 786 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador-partidor practica las operaciones divisorias conforme a la ley aplicable a la sucesión del causante (que puede ser derecho extranjero si hay elemento internacional)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786 LEC · Arts. 1051–1087 CC · Arts. 806–822 CC (legítimas)"
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo imperativo: DOS MESES desde que fueron iniciadas las operaciones (art. 786.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Principios de obligado respeto: (a) evitar la indivisión (art. 400 CC); (b) evitar la excesiva división de fincas."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio del cuaderno particional (art. 786.2 LEC)",
     "items": [
      "1.º Relación de bienes que forman el caudal partible (inventario)",
      "2.º Avalúo de los bienes",
      "3.º Liquidación, división y adjudicación a cada partícipe"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Operaciones a realizar por el contador: (a) Inventario: relación exhaustiva de bienes, derechos y obligaciones; (b) Avalúo: valoración de mercado con auxilio de peritos; (c) Colación: los legitimarios que recibieron donaciones del causante traen a colación el valor percibido (arts. 1035-1040 CC); (d) Liquidación: determinación de la masa hereditaria neta, deduciendo deudas, gastos de última enfermedad, funerarios y de administración; (e) Cálculo de legítimas y mejora: porciones estrictas, mejora y porción libre (arts. 807-822 CC); (f) División y adjudicación: asignación concreta de bienes a cada partícipe, procurando la igualdad (arts. 1061-1066 CC)."
    }
   ],
   "pregunta": "¿Ha establecido el testador reglas especiales para el inventario, avalúo, liquidación o división?",
   "opciones": [
    {
     "texto": "No — Se aplica directamente la ley de la sucesión",
     "tono": "t-ok",
     "destino": "p4_presentacion"
    },
    {
     "texto": "Sí — El testador fijó reglas especiales para las operaciones divisorias",
     "tono": "t-plazo",
     "destino": "p4_reglas_testador"
    }
   ]
  },
  "p4_presentacion": {
   "fase": 4,
   "titulo": "Presentación del cuaderno particional",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador presenta las operaciones divisorias mediante escrito firmado que contiene el cuaderno particional completo con todos los elementos del art. 786.2 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786.2 LEC"
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo: DOS MESES desde el inicio de las operaciones. O en el plazo fijado por diligencia si se hizo uso del art. 785.3 LEC."
    },
    {
     "tipo": "nota",
     "texto": "Si el contador no presenta las operaciones en el plazo establecido (dos meses conforme al art. 786.4 LEC, o el plazo fijado por el LAJ a instancia de parte conforme al art. 785.3 LEC), el LAJ debe requerirle para que presente las operaciones en un nuevo plazo prudencial, informándole de las consecuencias de su incumplimiento."
    }
   ],
   "pregunta": "¿Solicitan todos los interesados de común acuerdo el sobreseimiento del procedimiento (art. 789 LEC)?",
   "opciones": [
    {
     "texto": "Sí — El contador presenta el escrito de operaciones divisorias completo y firmado dentro del plazo",
     "tono": "t-ok",
     "destino": "p5_traslado"
    },
    {
     "texto": "Sí — Todos los interesados solicitan de común acuerdo el sobreseimiento (art. 789 LEC)",
     "tono": "t-nota",
     "destino": "fin_acuerdo_coherederos"
    },
    {
     "texto": "No — El contador no presenta las operaciones en plazo o las presenta incompletas",
     "tono": "t-aviso",
     "destino": "p4_incumplimiento"
    }
   ]
  },
  "p4_reglas_testador": {
   "fase": 4,
   "titulo": "Aplicación de reglas especiales del testador (art. 786.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador se atendrá a las reglas fijadas por el testador para las operaciones divisorias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 786.1 LEC · Arts. 806–822 CC (legítimas)"
    },
    {
     "tipo": "aviso",
     "texto": "Límite infranqueable: las reglas del testador no pueden perjudicar las legítimas de los herederos forzosos. En lo que las perjudiquen, prevalece la ley de la sucesión."
    }
   ],
   "siguiente": "p4_presentacion"
  },
  "fin_suspension_penal": {
   "fase": 5,
   "titulo": "Procedimiento en suspenso: prejudicialidad penal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento permanece suspendido por pendencia de causa penal que investiga cohecho en el avalúo, sin acuerdo sobre nuevo avalúo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.6 LEC · Art. 40 LEC"
    },
    {
     "tipo": "nota",
     "texto": "La suspensión se alzará cuando: (a) los interesados presenten nuevo avalúo de común acuerdo; (b) la causa penal finalice por resolución firme; (c) la causa penal quede paralizada."
    },
    {
     "tipo": "aviso",
     "texto": "Registrar la fecha de inicio. Establecer seguimiento periódico (mínimo trimestral) de la evolución del proceso penal para alzar la suspensión en cuanto proceda."
    }
   ],
   "fin": "warning"
  },
  "p5_comparecencia": {
   "fase": 5,
   "titulo": "Convocatoria de comparecencia ante el Tribunal (art. 787.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Formulada oposición en plazo, el LAJ convoca al contador y a las partes a comparecencia ante el Tribunal. A partir de este momento el tribunal asume el protagonismo procesal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.3–5 LEC"
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: la comparecencia se celebrará dentro de los DIEZ DÍAS siguientes a la oposición."
    },
    {
     "tipo": "nota",
     "texto": "Desarrollo de la comparecencia: (1) El LAJ da la palabra a la parte opositora para que explique sus pretensiones; (2) El contador puede defender sus operaciones o aceptar las objeciones; (3) Las demás partes pueden pronunciarse; (4) El Tribunal intenta mediar para lograr un acuerdo que satisfaga a todos."
    },
    {
     "tipo": "nota",
     "texto": "Si se alcanza conformidad (total o parcial): el contador reformará las operaciones conforme a lo acordado, y las reformas serán aprobadas por decreto del LAJ (art. 787.4 LEC). Si la conformidad es solo parcial, lo acordado se aprueba y lo restante se tramita como juicio verbal."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia es un acto de conciliación: su objetivo es lograr que las partes y el contador alcancen un acuerdo sobre las cuestiones impugnadas."
    }
   ],
   "pregunta": "¿Se alcanza conformidad de todos los interesados en la comparecencia?",
   "opciones": [
    {
     "texto": "Sí — Conformidad sobre todas las cuestiones promovidas en la oposición",
     "tono": "t-ok",
     "destino": "p5_reformas"
    },
    {
     "texto": "Parcial — Se acuerdan algunas cuestiones pero persiste discrepancia sobre otras",
     "tono": "t-plazo",
     "destino": "p5_jv_parcial"
    },
    {
     "texto": "No — No hay conformidad; el procedimiento sigue por los trámites del juicio verbal",
     "tono": "t-aviso",
     "destino": "p5_jv_total"
    }
   ]
  },
  "p5_decreto": {
   "fase": 5,
   "titulo": "Decreto aprobatorio y protocolización (art. 787.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto aprobando las operaciones divisorias y manda protocolizarlas ante notario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.2 LEC"
    },
    {
     "tipo": "nota",
     "texto": "La protocolización notarial dota al cuaderno particional de fehaciencia pública y permite su acceso al Registro de la Propiedad y demás registros. La escritura pública constituye título inscribible conforme a la Ley Hipotecaria (art. 205 LH)."
    },
    {
     "tipo": "nota",
     "texto": "El decreto de aprobación del LAJ es el acto que cierra la fase contenciosa del procedimiento y abre la fase de ejecución (entrega de bienes). No tiene eficacia de cosa juzgada material: los interesados pueden impugnar posteriormente la partición por las vías del Código Civil (arts. 1073-1081 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Efecto declarativo de la partición (art. 1068 CC): la partición legalmente hecha confiere a cada heredero la propiedad exclusiva de los bienes adjudicados, pero no transmite la propiedad — la declara, reconociendo una titularidad que se remonta al momento de la muerte del causante (art. 657 CC)."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_jv_parcial": {
   "fase": 5,
   "titulo": "Juicio verbal sobre cuestiones parciales no acordadas (art. 787.6 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha alcanzado conformidad parcial en la comparecencia: algunas cuestiones se han resuelto de común acuerdo, pero persiste discrepancia sobre otras. Lo acordado se aprueba por decreto y las cuestiones restantes se tramitan como juicio verbal (art. 787.6 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El juicio verbal parcial solo versa sobre las cuestiones no acordadas. Las cuestiones acordadas ya están firmes y no se revisan. El Tribunal se limita a resolver las discrepancias pendientes, que habitualmente versan sobre: valoración de un bien concreto, inclusión o exclusión de un bien del inventario, o interpretación de una cláusula testamentaria."
    },
    {
     "tipo": "plazo",
     "texto": "Fases del juicio verbal parcial: (1) Alegaciones iniciales; (2) Proposición y práctica de prueba; (3) Conclusiones; (4) Sentencia. La sentencia solo se pronuncia sobre las cuestiones objeto de controversia, no sobre el conjunto de las operaciones divisorias."
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia que recaiga no tendrá eficacia de cosa juzgada (art. 787.7 LEC). Los interesados podrán ejercitar acciones autónomas en el juicio ordinario que corresponda (acciones de rescisión art. 1073 CC, impugnación por lesión art. 1074 CC, complemento art. 1079 CC)."
    }
   ],
   "pregunta": "¿Cuál es el sentido de la sentencia sobre las cuestiones controvertidas?",
   "opciones": [
    {
     "texto": "Estimatoria — se estiman las pretensiones de la parte opositora y se modifican las operaciones divisorias en los puntos controvertidos",
     "tono": "t-ok",
     "destino": "p5_sentencia_est"
    },
    {
     "texto": "Desestimatoria — se desestima la oposición y se confirman las operaciones divisorias del contador en los puntos controvertidos",
     "tono": "t-ok",
     "destino": "p5_sentencia_des"
    }
   ]
  },
  "p5_jv_total": {
   "fase": 5,
   "titulo": "Sustanciación por los trámites del juicio verbal (art. 787.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin conformidad, el tribunal oye a las partes, admite pruebas pertinentes y sustancia el procedimiento conforme a las normas del juicio verbal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.5 LEC · Art. 40 LEC (prejudicialidad penal)"
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia que recaiga NO tiene eficacia de cosa juzgada. Los interesados pueden hacer valer sus pretensiones sobre los bienes adjudicados en el juicio ordinario que corresponda."
    },
    {
     "tipo": "nota",
     "texto": "El juicio verbal es el procedimiento abreviado de la LEC. En el contexto de la división judicial, se utiliza como mecanismo de resolución rápida de las controversias sobre las operaciones divisorias. La sentencia se limita a resolver las cuestiones concretas planteadas en la oposición."
    },
    {
     "tipo": "info",
     "texto": "Sin conformidad total, el tribunal oye a las partes, admite pruebas pertinentes y sustancia el procedimiento conforme a las normas del juicio verbal."
    }
   ],
   "pregunta": "¿Están las actuaciones suspendidas por prejudicialidad penal? (causa que investiga cohecho en el avalúo — arts. 787.6 y 40 LEC)",
   "opciones": [
    {
     "texto": "Estimatoria — Se estiman las pretensiones de la parte opositora y se modifican las operaciones",
     "tono": "t-ok",
     "destino": "p5_sentencia"
    },
    {
     "texto": "Sí — Actuaciones suspendidas por causa penal que investiga cohecho en el avalúo (art. 40 LEC)",
     "tono": "t-aviso",
     "destino": "p5_suspension"
    }
   ]
  },
  "p5_reformas": {
   "fase": 5,
   "titulo": "Reformas del contador y aprobación definitiva (art. 787.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Alcanzada la conformidad, el contador incorpora las reformas convenidas. Las operaciones reformadas se aprueban por decreto del LAJ y se mandan protocolizar."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.4 LEC · Art. 787.2 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Las operaciones reformadas se protocolizan elevándose a escritura pública ante Notario. El decreto de aprobación del LAJ produce los mismos efectos que la aprobación de las operaciones originales: habilita la entrega de bienes y constituye título para la inscripción registral."
    },
    {
     "tipo": "nota",
     "texto": "Al igual que la aprobación sin oposición, esta aprobación no produce cosa juzgada material (art. 787.5 LEC en relación con el art. 787.7 LEC). Los interesados conservan las acciones de impugnación del Código Civil (rescisión, lesión, complemento)."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_sentencia": {
   "fase": 5,
   "titulo": "Sentencia del Tribunal (sin eficacia de cosa juzgada)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal dicta sentencia que resuelve las cuestiones de la oposición. La sentencia se lleva a efecto conforme al art. 788 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.5 LEC · Art. 788 LEC"
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia NO tiene eficacia de cosa juzgada. Los interesados pueden acudir al juicio ordinario que corresponda para hacer valer sus derechos sobre los bienes adjudicados."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_sentencia_des": {
   "fase": 5,
   "titulo": "Sentencia desestimatoria — Confirmación de las operaciones divisorias",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal ha desestimado la oposición y confirmado las operaciones divisorias del contador-partidor en los puntos controvertidos. Las operaciones se ejecutarán conforme al art. 788 LEC."
    },
    {
     "tipo": "nota",
     "texto": "La sentencia desestimatoria confirma la corrección de las operaciones divisorias del contador. El LAJ procederá a la protocolización y entrega de bienes conforme a los arts. 787 y 788 LEC."
    },
    {
     "tipo": "aviso",
     "texto": "Al igual que la estimatoria, la sentencia desestimatoria no produce cosa juzgada material (art. 787.7 LEC). La parte opositora conserva las acciones de impugnación del Código Civil (rescisión, lesión, complemento), aunque habrá de fundarlas en motivos distintos de los ya planteados y resueltos en el juicio verbal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.7 LEC: ausencia de cosa juzgada. Art. 788 LEC: ejecución. Arts. 1073-1081 CC: acciones de impugnación posteriores."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_sentencia_est": {
   "fase": 5,
   "titulo": "Sentencia estimatoria — Modificación de las operaciones divisorias",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal ha estimado la oposición y modificado las operaciones divisorias en los puntos controvertidos. El contador deberá adecuar las operaciones al contenido de la sentencia, y la versión resultante se aprobará y ejecutará conforme al art. 788 LEC."
    },
    {
     "tipo": "nota",
     "texto": "La sentencia estimatoria puede tener distintos alcances: puede ordenar la inclusión de un bien omitido en el inventario, rectificar el avalúo de un bien, modificar la adjudicación de un lote, o corregir el cálculo de las legítimas. En cualquier caso, las modificaciones se limitan a los puntos concretos resueltos en la sentencia."
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia NO tiene eficacia de cosa juzgada material (art. 787.7 LEC). Los interesados pueden impugnar posteriormente la partición por las vías del Código Civil: rescisión por error, dolo o violencia (art. 1073 CC), acción de lesión (art. 1074 CC, prescribe a los cuatro años), acción de complemento por omisión de bienes (art. 1079 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.7 LEC: ausencia de cosa juzgada. Art. 788 LEC: ejecución de la sentencia (entrega de bienes)."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_suspension": {
   "fase": 5,
   "titulo": "Suspensión por prejudicialidad penal (arts. 787.6 y 40 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las actuaciones están suspendidas por pendencia de causa penal que investiga cohecho en el avalúo de los bienes. Se aplica la regla especial del art. 787.6 LEC, que modula la regla general del art. 40 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.6 LEC · Art. 40 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Regla especial (art. 787.6 LEC): la suspensión puede alzarse SIN esperar resolución penal firme si los interesados presentan un nuevo avalúo de común acuerdo, prescindiendo del impugnado."
    },
    {
     "tipo": "aviso",
     "texto": "Registrar la fecha de inicio de la suspensión. Establecer seguimiento periódico de la evolución del proceso penal para alzar la suspensión en cuanto proceda."
    },
    {
     "tipo": "aviso",
     "texto": "Registrar la fecha de inicio. Establecer seguimiento periódico de la evolución del proceso penal para alzar la suspensión en cuanto proceda."
    }
   ],
   "pregunta": "¿Presentan los interesados un nuevo avalúo de común acuerdo?",
   "opciones": [
    {
     "texto": "Sí — Los interesados presentan nuevo avalúo acordado; el LAJ alza la suspensión sin esperar resolución penal firme",
     "tono": "t-ok",
     "destino": "p5_sentencia"
    },
    {
     "texto": "No — No hay acuerdo sobre nuevo avalúo; la suspensión se mantiene hasta resolución penal firme o paralización de la causa",
     "tono": "t-aviso",
     "destino": "fin_suspension_penal"
    }
   ]
  },
  "p5_traslado": {
   "fase": 5,
   "titulo": "Traslado a las partes y plazo de oposición (art. 787.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ da traslado de las operaciones divisorias a todas las partes, emplazándolas por diez días para que formulen oposición o manifiesten conformidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.1 LEC"
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de oposición: DIEZ DÍAS desde el traslado."
    },
    {
     "tipo": "nota",
     "texto": "Durante el plazo: las partes pueden examinar los autos y obtener copias a su costa."
    },
    {
     "tipo": "nota",
     "texto": "La oposición debe formularse por escrito, con expresión de los puntos impugnados y las razones en que se funda. Una oposición genérica («no estoy de acuerdo con la partición») no es válida y debe ser desestimada."
    },
    {
     "tipo": "lista",
     "titulo": "Derechos de las partes durante el plazo de oposición",
     "items": [
      "Examinar en la Oficina judicial los autos y las operaciones divisorias",
      "Obtener, a su costa, las copias que soliciten",
      "Formular oposición por escrito dentro del plazo de diez días"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Cuál es el resultado transcurrido el plazo de diez días?",
   "opciones": [
    {
     "texto": "Conformidad expresa — Los interesados manifiestan expresamente su conformidad",
     "tono": "t-ok",
     "destino": "p5_decreto"
    },
    {
     "texto": "Oposición en plazo — Algún interesado formula oposición escrita y motivada en plazo hábil",
     "tono": "t-plazo",
     "destino": "p5_comparecencia"
    },
    {
     "texto": "Acuerdo de terminación — Todos solicitan el sobreseimiento de común acuerdo (art. 789 LEC)",
     "tono": "t-nota",
     "destino": "fin_acuerdo_coherederos"
    }
   ]
  },
  "fin_acuerdo_coherederos": {
   "fase": 6,
   "titulo": "Sobreseimiento por acuerdo unánime (art. 789 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Todos los interesados han solicitado de común acuerdo la terminación del procedimiento. El LAJ sobresee el juicio y pone los bienes a disposición de los herederos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 789 LEC · Art. 796 LEC · Art. 1058 CC"
    },
    {
     "tipo": "nota",
     "texto": "El sobreseimiento es un acto reglado: una vez que todos los interesados lo solicitan de común acuerdo, el LAJ no tiene margen de apreciación y está obligado a decretar el sobreseimiento. La facultad puede ejercerse en cualquier estado del juicio."
    },
    {
     "tipo": "nota",
     "texto": "Modalidades del acuerdo: (1) Partición notarial (arts. 66 bis/66 ter LN): todos los herederos otorgan escritura pública ante Notario; (2) Contador dativo notarial (art. 92 LJV): los herederos que representen al menos el 50% solicitan el nombramiento de contador dativo; (3) Mediación (Ley 36/2006): el acuerdo alcanzado, elevado a escritura pública, tiene eficacia de título ejecutivo (art. 25); (4) Arbitraje (Ley 60/2003): el laudo tiene la misma eficacia que sentencia firme."
    },
    {
     "tipo": "ley",
     "texto": "Art. 789 LEC · Art. 796 LEC"
    }
   ],
   "fin": "neutral"
  },
  "fin_bloqueo_acreedores": {
   "fase": 6,
   "titulo": "Entrega bloqueada — Acreedores no satisfechos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La entrega de los bienes adjudicados permanece bloqueada mientras los acreedores cualificados no estén satisfechos o garantizados. Esta situación puede mantenerse indefinidamente si no hay acuerdo entre los herederos y los acreedores sobre la forma de pago o garantía."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.3 LEC · Art. 1082 CC · Art. 789 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Vías de desbloqueo: (1) Pago íntegro del crédito al acreedor; (2) Constitución de garantía suficiente (aval bancario, hipoteca); (3) Acuerdo entre herederos y acreedores sobre el calendario de pago; (4) Si el crédito es objeto de disputa, el acreedor debe demostrar su cuantía en el procedimiento correspondiente; (5) Los acreedores pueden ejercitar sus acciones en juicio declarativo independiente."
    },
    {
     "tipo": "aviso",
     "texto": "Los herederos pueden solicitar el sobreseimiento del procedimiento y adoptar un acuerdo extrajudicial para resolver las deudas (art. 789 LEC). También pueden plantear la cuestión en un juicio declarativo ordinario para que se determine la existencia y cuantía del crédito."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.3 LEC · Art. 1082 CC"
    }
   ],
   "fin": "warning"
  },
  "fin_exitoso": {
   "fase": 6,
   "titulo": "Procedimiento concluido satisfactoriamente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de división judicial de la herencia ha concluido con la entrega de los bienes adjudicados a cada heredero o legatario y la expedición de los testimonios correspondientes."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 782–788 LEC · Art. 1059 CC · Art. 1068 CC · Art. 1069 CC"
    },
    {
     "tipo": "nota",
     "texto": "Trámites posteriores recomendados: inscripción registral de bienes inmuebles, cambio de titularidad bancaria, autoliquidación del ISD (plazo 6 meses, prorrogables 1 año), liquidación de plusvalía municipal (IIVTNU)."
    },
    {
     "tipo": "nota",
     "texto": "Si en la fase de aprobación se dictó sentencia en el juicio verbal (art. 787.5 LEC), los interesados conservan el derecho a ejercitar sus pretensiones sobre los bienes adjudicados en el juicio ordinario que corresponda, dado que la sentencia carece de eficacia de cosa juzgada."
    },
    {
     "tipo": "aviso",
     "texto": "Acciones conservadas a los interesados: la ausencia de cosa juzgada (art. 787.7 LEC) permite que los interesados puedan impugnar la partición posteriormente mediante: acción de rescisión (art. 1073 CC, cuatro años), acción de lesión (art. 1074 CC, cuatro años), acción de complemento por omisión de bienes (art. 1079 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 782–788 LEC"
    }
   ],
   "fin": "success"
  },
  "p6_acreedores": {
   "fase": 6,
   "titulo": "Verificación previa a la entrega: acreedores privilegiados (art. 788.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Aprobadas definitivamente las particiones, el LAJ verifica si la oposición de acreedores privilegiados formulada al amparo del art. 782.4 LEC ha sido satisfecha, pues condiciona la entrega de los bienes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.3 LEC · Art. 782.4 LEC"
    },
    {
     "tipo": "nota",
     "texto": "Tipos de acreedores con derecho de oposición: (1) Acreedores testamentarios (reconocidos en el testamento); (2) Acreedores reconocidos por los coherederos; (3) Acreedores con título ejecutivo (sentencia, laudo, escritura pública con fuerza ejecutiva). El acreedor común (sin título ejecutivo ni reconocimiento) NO tiene derecho de oposición, pero conserva sus acciones contra la herencia o los coherederos individualmente."
    }
   ],
   "pregunta": "¿Hay acreedores privilegiados (art. 782.4 LEC) con oposición pendiente, no pagados ni garantizados?",
   "opciones": [
    {
     "texto": "No — No hay oposición pendiente de acreedores privilegiados",
     "tono": "t-ok",
     "destino": "p6_notas"
    },
    {
     "texto": "Sí — Existe oposición pendiente de acreedores privilegiados no satisfecha; la entrega queda bloqueada hasta que estén pagados o garantizados a su satisfacción",
     "tono": "t-plazo",
     "destino": "p6_pago"
    }
   ]
  },
  "p6_entrega": {
   "fase": 6,
   "titulo": "Entrega de bienes y expedición de testimonios (art. 788.1–2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ entrega a cada interesado los bienes adjudicados y los títulos de propiedad con las notas del actuario. A los partícipes que lo pidan les expide testimonio de su haber y adjudicación respectivos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1–2 LEC"
    },
    {
     "tipo": "nota",
     "texto": "El testimonio del haber adjudicado acredita ante terceros y ante el Registro de la Propiedad la porción atribuida a cada heredero o legatario por virtud de la partición."
    },
    {
     "tipo": "nota",
     "texto": "Efectos posteriores a la entrega: los coherederos quedan obligados recíprocamente a la evicción y saneamiento de los bienes adjudicados (art. 1069 CC). Los acreedores pueden exigir el pago íntegro a cualquiera de los herederos que no haya aceptado a beneficio de inventario (art. 1084 CC)."
    },
    {
     "tipo": "plazo",
     "texto": "Trámites posteriores recomendados para los adjudicatarios: (1) Presentar la escritura de partición en el Registro de la Propiedad para la inscripción de los bienes inmuebles; (2) Comunicar la adjudicación a las entidades financieras para el cambio de titularidad de cuentas y valores; (3) Presentar la autoliquidación del Impuesto de Sucesiones y Donaciones (ISD) si no se ha hecho aún (plazo de seis meses desde el fallecimiento, prorrogables un año); (4) Liquidar la plusvalía municipal (IIVTNU) de los inmuebles adjudicados."
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "p6_notas": {
   "fase": 6,
   "titulo": "Notas de adjudicación en títulos de propiedad (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El actuario pone en los títulos de propiedad notas expresivas de la adjudicación. Estas notas vinculan el título originario con la nueva titularidad resultante de la partición y facilitan la posterior inscripción registral."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.1 LEC"
    }
   ],
   "siguiente": "p6_entrega"
  },
  "p6_pago": {
   "fase": 6,
   "titulo": "Pago o afianzamiento previo de acreedores privilegiados (art. 788.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se hará entrega de bienes a ningún heredero ni legatario hasta que los acreedores que formularon oposición conforme al art. 782.4 LEC estén completamente pagados o garantizados a su satisfacción."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.3 LEC"
    },
    {
     "tipo": "nota",
     "texto": "La garantía puede materializarse por pago efectivo o por cualquier forma de afianzamiento que satisfaga al acreedor: aval bancario, hipoteca sobre los bienes adjudicados, retención de cantidades en depósito judicial, o cualquier otra forma que el LAJ considere suficiente. La ley no impone modalidad concreta."
    },
    {
     "tipo": "nota",
     "texto": "Esta medida protege a los acreedores frente al riesgo de insolvencia de los herederos: si los bienes se dispersan entre los coherederos sin pagar las deudas, los acreedores podrían ver frustrado su cobro. La regla es la contrapartida procesal del art. 1082 CC."
    }
   ],
   "pregunta": "¿Quedan satisfechos o garantizados los créditos de los acreedores oponentes?",
   "opciones": [
    {
     "texto": "Sí — Los acreedores han sido pagados íntegramente, o se ha constituido garantía suficiente a su satisfacción",
     "tono": "t-ok",
     "destino": "p6_notas"
    },
    {
     "texto": "No — Persiste la discrepancia sobre la cuantía del crédito, la suficiencia de la garantía, u otros aspectos",
     "tono": "t-aviso",
     "destino": "fin_bloqueo_acreedores"
    }
   ]
  },
  "p6_protocolizacion": {
   "fase": 6,
   "titulo": "Protocolización de las operaciones divisorias (Art. 787.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ manda protocolizar las operaciones divisorias aprobadas, es decir, elevarlas a escritura pública ante Notario. La escritura pública adquiere carácter de documento público y constituye título inscribible en los Registros públicos (Registro de la Propiedad, Registro Mercantil, etc.)."
    },
    {
     "tipo": "plazo",
     "texto": "La protocolización es necesaria para la inscripción de los bienes adjudicados en el Registro de la Propiedad. Conforme a la Ley Hipotecaria (art. 205 LH), la escritura pública de partición es título inscribible. El Registrador calificará la legalidad de la partición y, si se ajusta a las normas sustantivas, practicará la inscripción."
    },
    {
     "tipo": "nota",
     "texto": "Efecto declarativo de la partición (art. 1068 CC): la partición legalmente hecha confiere a cada heredero la propiedad exclusiva de los bienes adjudicados, pero no transmite la propiedad — la declara, reconociendo una titularidad que se remonta al momento de la muerte del causante (art. 657 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.2 LEC: protocolización. Art. 1068 CC: efecto declarativo. Art. 205 LH: título inscribible. Art. 1065-1066 CC: entrega de títulos de propiedad al adjudicatario."
    }
   ],
   "siguiente": "p6_acreedores"
  }
 },
 "pie": "LEC arts. 782–789<br>LO 1/2025 (MASC) art. 5<br>CC arts. 1051–1059<br>Art. 40 LEC · Art. 164 LEC<br>Art. 341 LEC · Arts. 791–796 LEC<br>Reglamento (UE) 650/2012"
});
