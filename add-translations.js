const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/conditionsContent.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const translations = {
  'immune-system-support': {
    introEs: 'El sistema nervioso regula directamente la función inmunológica. La subluxación espinal crea interferencia nerviosa que suprime la respuesta inmunológica — la corrección quiropráctica elimina esta interferencia y permite que el sistema inmunológico funcione de manera óptima.',
    whatIsEs: 'Los sistemas nervioso e inmunológico están profundamente interconectados — el hipotálamo, el tronco encefálico y la médula espinal regulan continuamente la actividad de las células inmunológicas a través del sistema nervioso autónomo. La investigación ha demostrado que los ajustes cervicales superiores aumentan el recuento de células asesinas naturales, que la subluxación reduce los niveles de inmunoglobulina, y que los pacientes de quiropráctica tienen una función inmunológica mediblemente más fuerte. El bazo, el timo y los ganglios linfáticos están inervados por los sistemas nerviosos simpático y parasimpático — cuando la alineación espinal es óptima, esta inervación está intacta y la función inmunológica se maximiza.',
    symptomsEs: [
      'Enfermedad frecuente — resfriados recurrentes, infecciones del oído o infecciones respiratorias',
      'Recuperación lenta de la enfermedad',
      'Inflamación crónica de bajo grado',
      'Alergias y reactividad autoinmune',
      'Fatiga relacionada con la activación inmunológica crónica',
      'Niños con infecciones frecuentes del oído o enfermedades respiratorias',
    ],
    causesEs: [
      'Subluxación espinal creando interferencia nerviosa en los centros reguladores inmunológicos',
      'Estrés crónico activando cortisol y suprimiendo la función inmunológica',
      'Sueño pobre que interrumpe la reposición de células inmunológicas',
      'Deficiencias nutricionales',
      'Estilo de vida sedentario reduciendo la circulación linfática',
      'Carga de toxinas abrumando la capacidad de desintoxicación e inmunológica',
    ],
    chiropracticTreatmentEs: 'La corrección espinal SOT — particularmente los ajustes cervicales superiores y torácicos superiores — elimina la interferencia nerviosa que suprime la función inmunológica. El Dr. Foss utiliza protocolos de órganos CMRT (Técnica de Reflejo Manipulativo Quiropráctico) suave que apoyan directamente el bazo, el timo y las vías linfáticas a través de contactos espinales y de tejido blando específicos. Muchos pacientes reportan enfermarse con menos frecuencia, recuperarse más rápidamente y experimentar síntomas de alergia reducidos después del cuidado quiropráctico regular. Los niños con infecciones crónicas del oído responden especialmente bien al apoyo inmunológico quiropráctico.',
  },
  'bed-wetting-enuresis': {
    introEs: 'La enuresis nocturna pediátrica (mojar la cama) a menudo está relacionada con disfunción del nervio sacro que afecta el control de la vejiga. La investigación respalda la corrección sacra quiropráctica como un enfoque efectivo y sin medicamentos para muchos niños.',
    whatIsEs: 'La enuresis nocturna afecta aproximadamente al 15% de los niños de 5 años y al 5% de los niños de 10 años. Aunque a menudo se atribuye únicamente a retrasos del desarrollo, una proporción significativa de casos implica disfunción del nervio sacro que afecta la capacidad del sistema nervioso para inhibir la contracción de la vejiga durante el sueño. Los nervios sacros (S2-S4) inervan directamente el músculo detrusor y el esfínter uretral — la subluxación sacra crea interferencia en este camino. Múltiples casos publicados y estudios demuestran la resolución de la enuresis después de la corrección sacra quiropráctica.',
    symptomsEs: [
      'Micción involuntaria durante el sueño después de los 5 a 6 años',
      'Control normal de la vejiga durante el día con pérdida nocturna',
      'Sin infección del tracto urinario identificable o anomalía anatómica',
      'Antecedentes familiares de entrenamiento tardío del baño',
      'Urgencia o frecuencia diurna asociada en algunos casos',
      'Perturbaciones del sueño o patrones de sueño profundo',
    ],
    causesEs: [
      'Subluxación sacra que interfiere con la inervación de la vejiga S2-S4',
      'Inmadurez del desarrollo de la vía de comunicación vejiga-cerebro',
      'Sueño profundo previniendo el despertar de las señales de la vejiga',
      'Factores genéticos — el 75% de los niños tienen un padre afectado',
      'Estreñimiento que afecta mecánicamente la capacidad de la vejiga',
      'Desencadenantes de estrés psicológico o emocional',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss utiliza protocolos de evaluación y corrección sacra suave específicamente diseñados para pacientes pediátricos. El trabajo pélvico de Categoría II de SOT normaliza la mecánica sacra y restaura la inervación adecuada a través de las raíces nerviosas S2-S4 hacia la vejiga. Este es un enfoque suave y no invasivo que muchos padres prueban antes de considerar medicamentos. Los casos publicados informan de la resolución o mejora significativa de la enuresis en una proporción sustancial de niños que reciben cuidado sacro quiropráctico. El tratamiento es cómodo y los niños típicamente disfrutan sus visitas.',
  },
  'constipation': {
    introEs: 'El estreñimiento crónico a menudo refleja disfunción del sistema nervioso que afecta el movimiento intestinal. La corrección espinal quiropráctica y los protocolos CMRT restauran la inervación abdominal y resuelven la causa raíz.',
    whatIsEs: 'El estreñimiento es la dificultad para defecar o una frecuencia de deposiciones inferior a tres por semana. Aunque a menudo se atribuye únicamente a la dieta, la mayoría de los casos implican interferencia del sistema nervioso que afecta la peristalsis (movimiento ondulatorio) de los intestinos. Los nervios lumbares y sacros (L2-L5, S1-S4) inervan directamente el colon y el recto — la subluxación espinal en estas regiones suprime el control motriz normal. La constipación crónica es una indicación común de disfunción neuro-intestinal que responde bien a la corrección quiropráctica.',
    symptomsEs: [
      'Menos de tres deposiciones por semana',
      'Evacuaciones difíciles o dolorosas',
      'Heces duras o grumosas',
      'Sensación de evacuación incompleta después de defecar',
      'Necesidad de esfuerzo excesivo o tensión',
      'Síntomas asociados como hinchazón, dolor abdominal o gases',
    ],
    causesEs: [
      'Subluxación lumbar y sacra interfiriendo con el control motriz intestinal',
      'Deshidratación insuficiente',
      'Dieta baja en fibra',
      'Sedentarismo reduciendo el tono intestinal',
      'Estrés crónico suprimiendo la motilidad del colon',
      'Medicamentos que afectan el movimiento intestinal',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss utiliza correcciones lumbares y sacras específicas junto con protocolos CMRT (Técnica de Reflejo Manipulativo Quiropráctico) dirigidos al colon y los intestinos delgados. Estos protocolos de órganos restauran la inervación adecuada y mejoran la motilidad intestinal de manera natural, sin medicamentos ni laxantes. Muchos pacientes reportan deposiciones regulares y sin dolor después de varias semanas de cuidado quiropráctico consistente.',
  },
  'bloating-gas': {
    introEs: 'La hinchazón y los gases excesivos a menudo no se deben únicamente a la dieta, sino a disfunción del sistema nervioso que afecta la digestión y el movimiento intestinal. La quiropráctica aborda la causa nerviosa raíz.',
    whatIsEs: 'La hinchazón es la sensación de plenitud incómoda o estiramiento abdominal, a menudo acompañada de gases visibles o eructos. Aunque a menudo se atribuye al tipo de alimento consumido, la mayoría de los casos resultan de disfunción del sistema nervioso entérico — el "segundo cerebro" del abdomen. Los nervios vagos y espinales (particularmente T5-L2) regulan la secreción ácida gástrica, el movimiento intestinal y la flora bacteriana. La subluxación espinal en el tórax medio y la región lumbar superior interrumpe estas funciones, causando fermentación, gases y retención de alimentos.',
    symptomsEs: [
      'Sensación de hinchazón o plenitud abdominal',
      'Gases excesivos o eructos frecuentes',
      'Distensión abdominal visible después de comer',
      'Flatulencia odorosa',
      'Sensación de presión o incomodidad después de las comidas',
      'Síntomas que empeoran después de ciertas comidas',
    ],
    causesEs: [
      'Subluxación torácica media interfiriendo con la inervación gástrica',
      'Subluxación lumbar superior afectando el nervio vago y los nervios espinales intestinales',
      'Masticación inadecuada o comer rápido',
      'Intolerancia alimentaria o disbiosis (desequilibrio bacteriano)',
      'Estrés afectando la función digestiva vagal',
      'Estreñimiento predispuesto afectando el tránsito intestinal',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación de la columna torácica media y la región lumbar superior para identificar la subluxación que interfiere con la regulación digestiva. La corrección SOT restaura la inervación normal del estómago e intestinos a través de los nervios espinales y vagales. Los protocolos CMRT específicos destinados al páncreas, el hígado y los intestinos mejoran la coordinación digestiva. La mayoría de los pacientes notan una reducción significativa de la hinchazón y los gases dentro de 2-4 semanas de cuidado consistente.',
  },
  'radiculopathy': {
    introEs: 'La radiculopatía es el dolor, debilidad u hormigueo causado por la irritación o compresión de un nervio espinal. La corrección quiropráctica elimina la presión sobre el nervio y restaura la función.',
    whatIsEs: 'La radiculopatía se refiere a la disfunción de una raíz nerviosa específica que sale de la médula espinal. Cuando una vértebra se subluxiona (desalinea), puede herniarse el disco intervertebral adyacente, causando compresión directa de la raíz nerviosa. Esto resulta en dolor quemante, entumecimiento, hormigueo o debilidad a lo largo del camino del nervio afectado — comúnmente en la pierna (lumbar) o en el brazo (cervical). A diferencia del dolor local espinal, la radiculopatía se irradia a la extremidad porque el nervio mismo está irritado.',
    symptomsEs: [
      'Dolor quemante, agudo o eléctrico que irradia hacia la pierna o brazo',
      'Entumecimiento u hormigueo en un patrón de raíz nerviosa específica',
      'Debilidad muscular en el brazo o la pierna afectados',
      'Hipersensibilidad de la piel o alodinia (dolor ante estímulos ligeros)',
      'Síntomas que empeoran al doblar o girar el cuello o la cintura',
      'Dolor que despierta por la noche o que es peor después de prolongadas posiciones sedentes',
    ],
    causesEs: [
      'Subluxación vertebral con hernias de disco comprimiendo la raíz nerviosa',
      'Estenosis foraminal — estrechamiento óseo del espacio por el cual sale el nervio',
      'Inflamación peri-radicular o edema por lesión crónica del nervio',
      'Traumatismo agudo como latigazo cervical o lesión laboral',
      'Cambios degenerativos relacionados con la edad y osteoartrosis',
      'Cicatrización epidural de un procedimiento quirúrgico previo',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss utiliza evaluación neurológica y neuroimagen (si es necesario) para identificar la raíz nerviosa afectada y la causa mecánica subyacente. La corrección espinal SOT restaura la altura discal normal y alivia la presión sobre el nervio. La terapia de decompresión suave, los ajustes segmentarios y los protocolos de tejido blando reducen la inflamación y restauran la función nerviosa. Muchos pacientes con radiculopatía crónica experimentan resolución del dolor radiante dentro de 4-8 semanas de cuidado quiropráctico focado.',
  },
  'cluster-headaches': {
    introEs: 'Los dolores de cabeza en racimo son migrañas severas agrupadas en el tiempo, frecuentemente unilaterales. La corrección quiropráctica aborda la disfunción neurovascular subyacente.',
    whatIsEs: 'Los dolores de cabeza en racimo son episodios de dolor intenso y punzante alrededor del ojo, a menudo con síntomas autonómicos como lagrimeo, congestión nasal y enrojecimiento facial. A diferencia de las migrañas comunes, ocurren en "racimos" o patrones temporales predecibles — diarios durante semanas o meses, seguidos de períodos sin dolor. Se cree que resultan de disfunción hipotalámica e irritación del nervio trigémino, a menudo precipitados o agravados por subluxación cervical superior que afecta el flujo sanguíneo intracraneal y la transmisión del trigémino.',
    symptomsEs: [
      'Dolor intenso, quemante, punzante unilateral alrededor del ojo o la sien',
      'Comienzo abrupto, a menudo 1-2 horas después de dormir',
      'Duración de 15 minutos a 3 horas por ataque',
      'Lagrimeo excesivo del ojo ipsilateral',
      'Congestión nasal o rinorrea del mismo lado',
      'Inquietud durante el ataque — a menudo necesidad de movimiento',
    ],
    causesEs: [
      'Subluxación cervical superior interfiriendo con el nervio trigémino y la inervación craneal',
      'Disfunción hipotalámica y alteración del ritmo circadiano subyacente',
      'Vasodilatación intracraneal precipitada por factores ambientales',
      'Inflamación trigémino-vascular',
      'Factores desencadenantes como cambios en la presión barométrica o alcohol',
      'Trauma cervical previo o lesiones por latigazo',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza una evaluación cervical superior exhaustiva y utiliza la Técnica Sacro-Occipital (SOT) para corregir la subluxación del atlas (C1) y el axis (C2) que puede estar precipitando los dolores de cabeza en racimo. La corrección específica restaura la inervación trigémina normal y normaliza el flujo sanguíneo intracraneal y el tono simpático. Los ajustes consistentes, a menudo con terapia láser y protocolos de tejido blando, ayudan a reducir la frecuencia, duración e intensidad de los racimos. Muchos pacientes reportan remisión parcial o completa después de 2-3 meses de cuidado enfocado.',
  },
  'occipital-neuralgia': {
    introEs: 'La neuralgia occipital es el dolor agudo en la parte posterior de la cabeza causado por irritación del nervio occipital mayor. La corrección quiropráctica alivia la presión sobre el nervio.',
    whatIsEs: 'La neuralgia occipital (ON) es la irritación del nervio occipital mayor, que sale de la médula espinal entre C1 y C2 y se extiende hacia la parte posterior de la cabeza. Cuando la subluxación cervical superior o la tensión muscular suboccipital comprime este nervio, causa dolor eléctrico, quemante o punzante que irradia desde la base del cráneo hasta la coronilla, a menudo unilateral. A diferencia del dolor de cabeza tensional, es verdadero dolor neuropático — dolor nervioso — y responde bien a la corrección de la causa subyacente de compresión nerviosa.',
    symptomsEs: [
      'Dolor quemante, eléctrico o punzante en la parte posterior de la cabeza',
      'Dolor que irradia desde la base del cráneo hacia la coronilla o frente',
      'A menudo unilateral, pero puede ser bilateral',
      'Sensibilidad aumentada al tacto en la base del cráneo',
      'Síntomas que empeoran con los movimientos de cuello o rotación cervical',
      'Hipersensibilidad anormal o alodinia del cuero cabelludo',
    ],
    causesEs: [
      'Subluxación del atlas (C1) comprimiendo el nervio occipital mayor',
      'Tensión muscular suboccipital del músculo recto posterior mayor o menor',
      'Rigidez dural o tracción meníngea de la alineación espinal pobre',
      'Inflamación del nervio occipital de irritación mecánica crónica',
      'Traumatismo cervical previo, latigazo cervical o lesiones deportivas',
      'Estrés postural prolongado o uso de pantalla',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza una evaluación neurológica específica para confirmar el patrón de inervación occipital y luego utiliza la Técnica Sacro-Occipital (SOT) para aliviar la presión sobre el nervio. Los ajustes cervicales superiores suave, combinados con liberación de tejido blando del suboccipital y protocolos de decompresión, restauran el flujo nervioso normal. La mayoría de los pacientes con neuralgia occipital experimentan alivio significativo dentro de 4-6 semanas de cuidado consistente.',
  },
  'shoulder-impingement': {
    introEs: 'El atrapamiento del hombro ocurre cuando los tendones del manguito de los rotadores se aprietan en el espacio subacromial. La corrección quiropráctica restaura el alineamiento escapular y alivia la presión.',
    whatIsEs: 'El síndrome de atrapamiento subacromial es el pinzamiento de los tendones del manguito de los rotadores (especialmente el supraespinoso) dentro del espacio entre el acromion (punta ósea de la escápula) y la cabeza del húmero. Resulta de una combinación de mala alineación escapular, disfunción articular de la escápula-clavícula, rigidez de los músculos pectorales menores y subluxación cervical superior que afecta la inervación escapular. El atrapamiento causa dolor con ciertos movimientos de brazos, especialmente al levantar o alcanzar, y puede causar tendinitis o bursitis secundaria.',
    symptomsEs: [
      'Dolor en el hombro que empeora al levantar el brazo o alcanzar',
      'Dolor particular entre los 60-120 grados de movimiento de abducción',
      'Debilidad en el hombro o sensación de inseguridad',
      'Dolor nocturno, especialmente al dormir sobre el hombro afectado',
      'Crepitación o chasquido en el hombro con movimiento',
      'Rango de movimiento reducido',
    ],
    causesEs: [
      'Subluxación cervical superior afectando la inervación del nervio accesorio y supraescapular',
      'Disfunción articular acromioclavicular (AC) o escapulotorácica',
      'Hipertono del músculo pectoral menor causando rotación escapular anterior',
      'Rigidez del supraespinoso u otros músculos del manguito de los rotadores',
      'Postura de cabeza adelantada o cifosis torácica',
      'Traumatismo previo de hombro o uso excesivo',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación cervical superior, la función escapular y el movimiento articular glenohumeral para identificar la causa mecánica del atrapamiento. Los ajustes cervicales superiores SOT, combinados con correcciones escapulares, liberación de tejido blando del pectoral menor y movilización articular subacromial, restauran el espacio y alivian el pinzamiento. La terapia láser y los protocolos de fortalecimiento específicos apoyan la curación del tendón. Muchos pacientes notan mejora sustancial dentro de 4-6 semanas.',
  },
  'bursitis': {
    introEs: 'La bursitis es la inflamación de la bolsa (saco lleno de líquido) que amortigua las articulaciones. La corrección quiropráctica alivia la causa mecánica subyacente y reduce la inflamación.',
    whatIsEs: 'Las bursas son sacos pequeños llenos de líquido lubricante ubicados alrededor de las articulaciones para reducir la fricción entre huesos, tendones y músculos. La bursitis ocurre cuando una bolsa se irrita o se inflama, a menudo como resultado de fricción mecánica repetida de mala alineación articular, subluxación o desequilibrio muscular. Aunque la bursitis es a menudo etiquetada como "inflamación idiopática", la mayoría de los casos tienen una causa mecánica clara — subluxación articular, mala postura o desequilibrio neuromuscular causado por disfunción espinal.',
    symptomsEs: [
      'Dolor local alrededor de la articulación afectada',
      'Tumefacción o edema visible',
      'Limitación del rango de movimiento',
      'Dolor con presión sobre la bolsa inflamada',
      'Enrojecimiento de la piel en casos agudos',
      'Síntomas que empeoran con movimiento o actividad',
    ],
    causesEs: [
      'Subluxación articular causando fricción anormal sobre la bolsa',
      'Desequilibrio muscular de disfunción espinal superior',
      'Mala postura crónica provocando carga repetida de la bolsa',
      'Traumatismo agudo o caída directa en la articulación',
      'Actividad repetitiva de alto impacto con mecánica articular pobre',
      'Infección secundaria (rara)',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss identifica la subluxación articular subyacente o el desequilibrio postural causando la fricción mecánica que irrita la bolsa. La corrección espinal y articular específica, combinada con liberación de tejido blando de los músculos circundantes y drenaje linfático suave, reduce la inflamación. La terapia láser Clase IV acelera la resolución. La mayoría de los pacientes notan alivio rápido dentro de 2-3 semanas, especialmente cuando se combinan ajustes quiroprácticos con reposo relativo y modificación de la actividad.',
  },
  'tendonitis': {
    introEs: 'La tendinitis es la inflamación de un tendón, a menudo causada por uso excesivo o biomecánica pobre. La corrección quiropráctica restaura la alineación y reduce el estrés del tendón.',
    whatIsEs: 'La tendinitis es la irritación inflamatoria de un tendón, el tejido conectivo fibroso que une el músculo al hueso. Aunque comúnmente atribuida simplemente al "uso excesivo", la mayoría de los casos resultan de biomecánica articular pobre, desequilibrio muscular de disfunción espinal, o subluxación que altera el movimiento articular y causa fricción anormal del tendón. Por ejemplo, la tendinitis del supraespinoso en el hombro puede resultar de subluxación cervical superior que afecta la inervación y coordinación del manguito de los rotadores.',
    symptomsEs: [
      'Dolor localizado a lo largo del tendón afectado',
      'Empeoramiento del dolor con actividad específica o movimiento',
      'Rigidez después del reposo',
      'Tumefacción o crepitación palpable a lo largo del tendón',
      'Débil resistencia al movimiento contra la gravedad',
      'Síntomas que empeoran gradualmente sin tratamiento',
    ],
    causesEs: [
      'Biomecánica articular pobre de subluxación espinal',
      'Desequilibrio muscular causando tracción anormal del tendón',
      'Movimiento repetitivo de alto impacto sin apoyo quiropráctico',
      'Debilidad muscular intrinseca de disfunción nerviosa espinal',
      'Mala postura crónica cambiando el ángulo de tracción del tendón',
      'Cicatrización de microrroturas no tratadas',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la biomecánica articular y la alineación espinal para identificar la causa subyacente de la tensión anormal del tendón. La corrección específica de la subluxación, combinada con liberación miofascial del músculo asociado y rehabilitación del fortalecimiento, restaura el movimiento normal y alivia el estrés del tendón. La terapia de onda de choque extracorpórea y la terapia láser Clase IV estimulan la curación del tendón. La mayoría de los pacientes con tendinitis crónica experimentan resolución dentro de 4-8 semanas con tratamiento consistente.',
  },
  'work-injuries': {
    introEs: 'Las lesiones laborales pueden variar desde traumatismos agudos hasta el estrés repetitivo acumulativo. La quiropráctica restaura la función y acelera la curación.',
    whatIsEs: 'Las lesiones laborales abarcan cualquier lesión musculoesquelética o trauma sufrido durante el empleo, desde caídas agudas, colisiones y atrapamientos hasta lesiones por esfuerzo repetitivo (RSI) acumuladas. Muchas lesiones laborales afectan la columna vertebral, causando subluxación, hernias discales, esguinces ligamentosos o daño de tejido blando. Incluso lesiones aparentemente menores pueden desarrollarse en problemas crónicos sin tratamiento oportuno. El cuidado quiropráctico temprano reduce la inflamación, restaura la alineación y evita la transición de lesión aguda a dolor crónico incapacitante.',
    symptomsEs: [
      'Dolor agudo en el sitio de lesión inmediatamente después de la lesión',
      'Inflamación, enrojecimiento o hematoma visible',
      'Rango de movimiento limitado',
      'Debilidad o inestabilidad de la región afectada',
      'Síntomas que empeoran al regresar al trabajo',
      'Desarrollo gradual de síntomas crónicos sin tratamiento adecuado',
    ],
    causesEs: [
      'Traumatismo agudo — caídas, colisiones, atrapamientos, levantamiento incorrecto',
      'Ergonomía de trabajo pobre causando uso excesivo repetitivo',
      'Desequilibrio muscular y fatiga de largas horas en posición',
      'Subluxación preexistente que predispone a la lesión',
      'Estrés laboral psicológico exacerbando la tensión musculoesquelética',
      'Falta de reposo o modificación de actividad después de la lesión',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss proporciona evaluación inmediata de lesiones laborales agudas, documentación para fines de compensación, y tratamiento focado para restaurar la función. Los ajustes quiroprácticos alinean las vértebras subluxadas, reduciendo el dolor y permitiendo la curación. Los protocolos de tejido blando, la terapia láser y los ejercicios de rehabilitación específicos restauran la fuerza y estabilidad. El Dr. Foss trabaja con abogados de compensación de trabajadores y proveedores de seguros para asegurar que los pacientes reciban el cuidado continuo necesario para una recuperación completa.',
  },
  'repetitive-strain-injury': {
    introEs: 'Las lesiones por esfuerzo repetitivo (RSI) son trastornos del tejido blando causados por movimiento repetitivo. La quiropráctica aborda la biomecánica deficiente y restaura la función.',
    whatIsEs: 'Las lesiones por esfuerzo repetitivo (RSI) son daños acumulativos en músculos, tendones, nervios y ligamentos resultantes de movimiento repetitivo de alto impacto sin descanso adecuado. El trabajo de oficina moderno, el uso del teléfono móvil, la digitación intensiva y los trabajos de línea de producción son desencadenantes comunes. Aunque a menudo se consideran problemas de "desgaste y desgarre" puramente locales, la mayoría de los RSI tienen una causa biomecánica espinal subyacente — subluxación cervical o torácica que afecta la inervación del miembro afectado y causa compensación muscular, mala postura y desequilibrio.',
    symptomsEs: [
      'Dolor progresivo en el área afectada durante o después del trabajo',
      'Entumecimiento, hormigueo u hormigueo en la mano o brazo',
      'Rigidez matutina que mejora con movimiento',
      'Debilidad de agarre o dificultad con tareas finas',
      'Síntomas que se resuelven con reposo pero regresan con actividad',
      'Inflamación visible o tumefacción crónica',
    ],
    causesEs: [
      'Subluxación cervical o torácica afectando los nervios de la extremidad',
      'Biomecánica deficiente de la estación de trabajo o postura de trabajo',
      'Desequilibrio muscular de disfunción espinal subyacente',
      'Microtraumatismo repetitivo sin períodos de reposo suficientes',
      'Tensión postural crónica en los hombros, cuello y espalda superior',
      'Uso prolongado de teléfono móvil, teclado o herramientas de vibración',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación espinal, la postura y el patrón de movimiento para identificar la causa biomecánica del RSI. La corrección espinal específica, combinada con ergonomía mejorada de la estación de trabajo, liberación de tejido blando y ejercicios de fortalecimiento y estiramiento, resuelve la mayoría de los RSI. La educación sobre micro-pausas, cambios de postura y manejo de la carga es crítica para prevenir la recurrencia. Muchos pacientes notan mejora significativa dentro de 4-6 semanas de cuidado consistente.',
  },
  'text-neck': {
    introEs: 'El "text neck" es la tensión del cuello causada por mirar hacia abajo durante el uso prolongado del teléfono móvil. La corrección quiropráctica restaura la postura cervical normal.',
    whatIsEs: 'El "text neck" (cuello de texto) es un síndrome postural causado por la flexión cervical prolongada mientras se mira hacia abajo en dispositivos móviles. Cuando la cabeza se inclina hacia adelante 45 grados, la columna cervical soporta fuerzas equivalentes a 48 libras (22 kg), en lugar de solo el peso de la cabeza (10-12 libras). La repetición diaria de esta postura causa subluxación cervical progresiva, debilitamiento de los músculos estabilizadores del cuello y cifosis cervical. Esto resulta en dolor de cuello, dolores de cabeza, compresión de nervios y cambios degenerativos acelerados.',
    symptomsEs: [
      'Dolor de cuello crónico centrado en las vértebras cervicales inferiores',
      'Rigidez del cuello, especialmente por la mañana',
      'Dolores de cabeza en la base del cráneo',
      'Dolor de hombros y escápulas por desequilibrio muscular',
      'Síntomas que empeoran después de uso prolongado del teléfono o computadora',
      'Rango de movimiento del cuello reducido',
    ],
    causesEs: [
      'Flexión cervical prolongada desde uso de dispositivos móviles',
      'Postura de cabeza adelantada de los hábitos de trabajo de computadora',
      'Debilitamiento de los músculos del cuello y espalda superior por sedentarismo',
      'Subluxación cervical inferior progresiva de la carga postural crónica',
      'Falta de estiramiento o períodos de descanso durante el uso del dispositivo',
      'Cifosis torácica acompañante del hombro encorvado',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación cervical y las curvaturas espinales, a menudo usando radiografías para medir la cifosis del cuello. Los ajustes cervicales específicos SOT, combinados con ejercicios de postura del cuello, fortalecimiento del cuello posterior y educación sobre ergonomía del dispositivo móvil, restauran la alineación cervical normal. La terapia láser y los protocolos de tejido blando alivian la inflamación. El cambio de hábito postura es crítico para prevenir la recurrencia.',
  },
  'cervicogenic-headaches': {
    introEs: 'Los dolores de cabeza cervicogénicos se originan en las estructuras del cuello, no en el cerebro. La corrección quiropráctica del cuello resuelve la causa raíz.',
    whatIsEs: 'Los dolores de cabeza cervicogénicos (CDH) son dolores de cabeza causados directamente por disfunción de las vértebras cervicales superiores, articulaciones facetarias, discos o músculosligamentos. A diferencia de otros tipos de dolores de cabeza, el CDH verdadero tiene una fuente mecánica en el cuello — típicamente subluxación de C1-C3, irritación de la raíz C2, o irritación muscular de C2-C3. Los nervios cervicales comparten conexiones con el sistema trigeminial (responsable del dolor de cabeza), por lo que la disfunción cervical irradía directamente como dolor de cabeza. El CDH responde excelentemente a la corrección quiropráctica.',
    symptomsEs: [
      'Dolor de cabeza unilateral, a menudo en el lado de la subluxación cervical',
      'Origen del dolor en la base del cráneo o cuello superior',
      'Dolor que empeora con movimientos del cuello o ciertos ángulos de cabeza',
      'A menudo acompañado de rigidez del cuello',
      'Síntomas que mejoran con tracción cervical suave o movilización',
      'Sin características migrañosas (sin náusea, fotosensibilidad como las migrañas)',
    ],
    causesEs: [
      'Subluxación de C1-C3 comprimiendo o irritando las raíces nerviosas cervicales',
      'Síndrome facetario cervical de la disfunción articular C2-C3',
      'Rigidez muscular suboccipital o de los erectores espinales cervicales',
      'Irritación de la duramadre de la alineación espinal pobre',
      'Traumatismo cervical previo o latigazo cervical sin resolución completa',
      'Postura de cabeza adelantada de los hábitos de trabajo de pantalla',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza una evaluación neurológica cervical exhaustiva y neuroimagen si es necesario para confirmar la causa mecánica cervical del dolor de cabeza. Luego utiliza la Técnica Sacro-Occipital (SOT) para corregir específicamente la subluxación cervical superior causa, restaurando el movimiento articular normal y aliviando la compresión o irritación del nervio. Los protocolos de tejido blando, la movilización articular y los ejercicios de postura apoyan la curación completa. La mayoría de los pacientes notan mejora significativa dentro de 4-6 semanas.',
  },
  'osteoporosis-support': {
    introEs: 'La osteoporosis es el debilitamiento del hueso que aumenta el riesgo de fractura. La quiropráctica mejora la densidad ósea a través de la carga mecánica de los ajustes y la mejora de la función neuromuscular.',
    whatIsEs: 'La osteoporosis es una condición en la que la densidad mineral ósea disminuye, dejando los huesos porosos y frágiles. Aunque a menudo vinculada solo con la deficiencia de calcio, la realidad es más compleja — el sistema nervioso regula directamente la remodelación ósea. La inervación espinal normal, la carga mecánica adecuada en las vértebras, y el tono muscular equilibrado son críticos para mantener la densidad ósea. La subluxación crónica reduce la estimulación mecánica del hueso vertebral, acelerando la pérdida ósea. La corrección quiropráctica consistente proporciona carga mecánica terapéutica que estimula la densidad ósea.',
    symptomsEs: [
      'A menudo sin síntomas hasta que ocurre fractura',
      'Pérdida de altura progresiva o cifosis (cifosis de viuda)',
      'Dolor de espalda de fracturas por compresión vertebral',
      'Limitación de la movilidad o rango de movimiento del cuello',
      'Mayor fragilidad o miedo a caídas',
      'En pruebas de densidad ósea: puntuación T de -2.5 o inferior',
    ],
    causesEs: [
      'Deficiencia de estrógeno peri y postmenopáusica acelerando la pérdida ósea',
      'Ingesta insuficiente de calcio y vitamina D',
      'Sedentarismo reduciendo la estimulación mecánica del hueso',
      'Subluxación crónica reduciendo la inervación y carga mecánica vertebral',
      'Inflamación sistémica crónica de estrés o desequilibrio metabólico',
      'Medicamentos como corticosteroides que afectan la densidad ósea',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss utiliza ajustes quiroprácticos específicos para proporcionar carga mecánica terapéutica que estimula la remodelación ósea y aumenta la densidad mineral ósea. Los ajustes consisten en movimiento ortopédico controlado y fuerzas de compresión que estimulan los osteoblastos (células formadoras de hueso). Los estudios documentan que los pacientes que reciben ajustes quiroprácticos consistentes tienen una densidad ósea vertebral significativamente mayor que los controles no ajustados. Se recomienda evaluación de densidad ósea basal y monitoreo periódico. Los suplementos de calcio/vitamina D y el ejercicio de carga de peso complementan el cuidado quiropráctico.',
  },
  'costochondritis': {
    introEs: 'La costocondritis es la inflamación de la unión entre las costillas y el esternón. La corrección quiropráctica aborda la causa torácica subyacente.',
    whatIsEs: 'La costocondritis es la inflamación de los cartílagos costocondales — las uniones entre las costillas óseas y el esternón cartilaginoso en la parte anterior del pecho. Aunque a menudo atribuida a "inflamación idiopática" o traumatismo menor, la mayoría de los casos resultan de subluxación vertebral torácica que causa desequilibrio muscular y movimiento anormal de la caja torácica. Cuando las costillas no se mueven normalmente con la respiración, el cartílago costocondral sufre estrés mecánico anormal, desencadenando inflamación. La corrección espinal tóraca restaura el movimiento costal normal.',
    symptomsEs: [
      'Dolor en la parte anterior del pecho a lo largo de los bordes esternales',
      'Dolor que empeora con la respiración profunda, la tos o los movimientos del pecho',
      'Sensibilidad a la palpación de las uniones costocondales',
      'Hinchazón visible o tumefacción de los cartílagos costales',
      'Síntomas que se asemejan al dolor cardíaco, causando ansiedad',
      'Dolor que mejora con reposo pero recurre con actividad',
    ],
    causesEs: [
      'Subluxación vertebral torácica causando desequilibrio muscular intercostal',
      'Movimiento anormal de la caja torácica de la disfunción costovertebral',
      'Traumatismo previo de pecho o lesión por caída',
      'Respiración paradójica de estrés postural crónico',
      'Tos prolongada de enfermedad respiratoria',
      'Postura de hombros encorvados causando sobrecarga costal',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación torácica y la mecánica costovertebral, a menudo palpando para reproducir la sensibilidad costocondral. Los ajustes torácicos específicos y la movilización de las costillas restauran el movimiento costal normal durante la respiración. La liberación de tejido blando de los músculos intercostales, la terapia láser y los ejercicios respiratorios adecuados alivian la inflamación. Muchos pacientes notan alivio del dolor del pecho dentro de 2-4 semanas.',
  },
  'balance-disorders': {
    introEs: 'Los trastornos del equilibrio resultan de disfunción del sistema vestibular o de la mecánica cervical superior. La quiropráctica restaura la estabilidad postural.',
    whatIsEs: 'El equilibrio es mantenido por un sistema complejo que incluye el sistema vestibular del oído interno, la propiocepción espinal (conciencia de posición), el sistema visual y la inervación motora. Aunque a menudo se culpa al oído interno, la mayoría de los trastornos del equilibrio adquirido resultan de subluxación cervical superior que interfiere con la propiocepción cervical o afecta el flujo sanguíneo intracraneal al sistema vestibular. Los receptores de presión en las articulaciones cervicales C1-C2 son densamente inervados y envían entrada sensorial crítica para el control postural. La subluxación disminuye esta entrada, resultando en marcha inestable, vértigo o sensación de flotación.',
    symptomsEs: [
      'Marcha inestable o insegura',
      'Sensación de vértigo o mareo, especialmente al cambiar de posición',
      'Sensación de flotación o estar "fuera del centro"',
      'Dificultad para caminar en línea recta o en la oscuridad',
      'Mayor riesgo de caídas o tropiezos',
      'Síntomas que empeoran con movimientos rápidos de cabeza',
    ],
    causesEs: [
      'Subluxación cervical superior interfiriendo con la propiocepción cervical',
      'Reducción del flujo sanguíneo vertebral al sistema vestibular',
      'Tensión postural dural de la alineación espinal pobre',
      'Debilitamiento del núcleo o músculos estabilizadores de cadera de la inactividad',
      'Enfermedad vestibular periférica primaria',
      'Neuropatía o déficit sensorial de otras causas',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza pruebas vestibulares cervicales específicas para determinar si la causa del trastorno del equilibrio es espinal o vestibular periférica. Si es espinal, los ajustes cervicales superiores SOT restauran la propiocepción cervical normal y el flujo sanguíneo vertebral. Los ejercicios propioceptivos y el entrenamiento del equilibrio aceleran la recuperación. Si se sospecha enfermedad vestibular periférica, la maniobra de reposicionamiento de partículas (Epley) o la rehabilitación vestibular pueden ser apropiadas. La mayoría de los pacientes notan mejora dentro de 3-6 semanas.',
  },
  'numbness-tingling': {
    introEs: 'El entumecimiento y el hormigueo resultan de compresión o irritación del nervio. La corrección quiropráctica alivia la presión y restaura la función nerviosa.',
    whatIsEs: 'El entumecimiento (parestesias) y el hormigueo (disestesias) son síntomas de compresión o irritación del nervio, donde el nervio no puede transmitir señales sensoriales normalmente. Pueden resultar de subluxación directa comprimiendo un nervio que sale de la médula espinal (radiculopatía), síndrome de túnel (como síndrome del túnel carpiano), o irritación nerviosa difusa de inflamación o estrés del nervio. La ubicación del entumecimiento (patrón de distribución) indica qué nervio está involucrado. La causa subyacente es típicamente subluxación espinal que afecta la raíz o el tronco nerviosos.',
    symptomsEs: [
      'Entumecimiento u hormigueo en patrón específico de distribución nerviosa',
      'Síntomas que se desarrollan gradualmente o comienzan tras lesión',
      'Síntomas que empeoran con ciertos movimientos o posiciones',
      'Debilidad motriz menor si el nervio motor está afectado',
      'Síntomas que mejoran después de ajustes quiroprácticos',
      'A menudo peor después de período de inactividad',
    ],
    causesEs: [
      'Subluxación vertebral comprimiendo la raíz nerviosa que sale',
      'Hernia discal presionando el nervio directamente',
      'Síndrome de atrapamiento nerviosa (túnel carpiano, síndrome del túnel cubital, etc.)',
      'Inflamación periférica de irritación crónica del nervio',
      'Subluxación cervical superior afectando la inervación de la extremidad',
      'Cicatrización epidural de lesión anterior o cirugía',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza una evaluación neurológica exhaustiva para localizar exactamente qué nervio está comprimido o irritado, luego identifica la causa mecánica. Los ajustes quiroprácticos específicos alivian la compresión, los protocolos de decompresión terapéutica amplían el espacio del nervio, y la liberación de tejido blando reduce la inflamación local. Los ejercicios de movilidad neural mejoran el deslizamiento del nervio. Muchos pacientes notan resolución del entumecimiento y el hormigueo dentro de 4-8 semanas de cuidado enfocado.',
  },
  'bruxism': {
    introEs: 'El bruxismo (rechinar de dientes) es causado por estrés y disfunción neuromuscular. La corrección quiropráctica reduce la tensión y normaliza la función del ATM.',
    whatIsEs: 'El bruxismo es el rechinamiento involuntario o apretamiento de los dientes, típicamente durante el sueño (bruxismo del sueño) pero a veces también durante el día bajo estrés. Aunque a menudo atribuido únicamente al estrés psicológico o a una "mala mordida", la investigación moderna sugiere que la disfunción neuromuscular es un factor importante. La subluxación cervical superior afecta la inervación del núcleo motor trigémino, la vía que controla los músculos de masticación. El desequilibrio muscular del cuello/mandíbula, la mala alineación de la ATM y la respuesta de lucha-o-huida aumentada por la subluxación contribuyen todos al bruxismo.',
    symptomsEs: [
      'Rechinamiento audible de dientes durante el sueño',
      'Desgaste visible de la superficie de los dientes',
      'Dolor de mandíbula o disfunción temporomandibular (ATM)',
      'Dolores de cabeza por la mañana de la tensión muscular',
      'Síntomas de ATM como chasquido o limitación de la apertura',
      'Tensión en los músculos de la masticación',
    ],
    causesEs: [
      'Subluxación cervical superior afectando la inervación del trigémino',
      'Estrés y respuesta simpática elevada de presión de la vida',
      'Mala alineación de la ATM de subluxación mandibular o maxilar',
      'Desequilibrio muscular del cuello y el escaleno contribuyendo a la tensión de masticación',
      'Sueño perturbado o apnea del sueño',
      'Hábitos de masticación como mascar chicle o hielo',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss evalúa la alineación cervical superior y la función de la ATM, tratando cualquier subluxación cervical o mandibular. Los ajustes SOT cervicales superiores normalizan la inervación trigémina. La liberación de tejido blando de los músculos de la masticación (masetero, temporal) y los músculos del cuello, combinada con educación sobre manejo del estrés y técnicas de relajación, reduce significativamente el bruxismo. Muchos pacientes notan menos rechinamiento dentro de 3-4 semanas de cuidado consistente.',
  },
  'allergies': {
    introEs: 'Las alergias resultan de disfunción del sistema inmunológico. La quiropráctica mejora el control inmunológico a través de la corrección espinal que normaliza la inervación.',
    whatIsEs: 'Las alergias son respuestas inmunológicas exageradas a sustancias inofensivas (alérgenos) que no afectan a las personas no alérgicas. Aunque a menudo consideradas como una condición puramente local (rinitis alérgica, conjuntivitis), las alergias reflejan una disfunción sistémica del sistema inmunológico en el cual las células Th2 y las células B producen excesivamente inmunoglobulina E (IgE) en respuesta a antígenos benignos. La investigación ha demostrado que la subluxación espinal interfiere con la regulación del sistema nervioso del sistema inmunológico, exacerbando la respuesta alérgica. La corrección espinal restaura la regulación inmunológica normal.',
    symptomsEs: [
      'Estornudos, secreción nasal o congestión nasal',
      'Picazón o lagrimeo de ojos',
      'Picazón en la garganta o paladar',
      'Urticaria o dermatitis de contacto',
      'Síntomas gastrointestinales de alergias alimentarias',
      'Síntomas que empeoran en la estación de alérgenos específicos',
    ],
    causesEs: [
      'Disfunción del sistema nervioso de la subluxación espinal aumentando la reactividad inmunológica',
      'Disbiosis (desequilibrio bacteriano intestinal) comprometiendo el sistema inmunológico intestinal',
      'Inflamación crónica de la mala alineación espinal',
      'Deficiencia de nutrientes (zinc, vitamina D) afectando la tolerancia inmunológica',
      'Predisposición genética a la respuesta Th2',
      'Exposición ambiental o temporal a alérgenos',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza ajustes quiroprácticos SOT especialmente dirigidos a la región cervical superior y torácica para normalizar la inervación del sistema inmunológico. El CMRT (Técnica de Reflejo Manipulativo Quiropráctico) y protocolos de órganos específicamente para el timo, los ganglios linfáticos y los órganos linfoides Peyer del intestino apoyan la regulación inmunológica. Los pacientes con alergias frecuentemente reportan mejora significativa de los síntomas alérgicos después de 4-8 semanas de cuidado consistente, con reducción continua durante meses. Complementar con suplementos de probióticos, vitamina D y manejo del estrés optimiza los resultados.',
  },
  'anxiety-depression': {
    introEs: 'La ansiedad y la depresión tienen componentes neuroquímicos pero también están influenciadas por la función del sistema nervioso y la alineación espinal. La quiropráctica mejora la función neurológica.',
    whatIsEs: 'La ansiedad y la depresión son trastornos del estado de ánimo que involucran desequilibrios neuroquímicos, pero cada vez más investigación sugiere que la disfunción del sistema nervioso espinal es un factor contribuyente importante. El sistema nervioso autónomo — simpático (lucha-o-huida) y parasimpático (descanso-y-digestión) — es regulado por conexiones que emergen de la médula espinal. La subluxación crónica desencadena activación simpática persistente, causando vigilancia exagerada, ansiedad y, con el tiempo, depresión por agotamiento. La alineación espinal normal y el tono parasimpático equilibrado son críticos para la salud mental.',
    symptomsEs: [
      'Sensación persistente de preocupación, miedo o aprensión',
      'Pánico agudo o ataques de pánico',
      'Dificultad para dormir o insomnio',
      'Irritabilidad o cambios de humor',
      'Pérdida de interés en actividades (anhedonia)',
      'Sentimientos de falta de esperanza o inutilidad',
    ],
    causesEs: [
      'Subluxación espinal causando activación simpática crónica de estrés',
      'Desequilibrio del sistema nervioso autónomo de la alineación pobre',
      'Estrés psicosocial crónico exacerbado por disfunción espinal',
      'Inflamación sistémica de la mala alineación espinal',
      'Deficiencias de neurotransmisores (serotonina, GABA) de la disfunción del sistema nervioso',
      'Patrones de sueño perturbados de la disfunción espinal',
    ],
    chiropracticTreatmentEs: 'El Dr. Foss realiza ajustes quiroprácticos cervicales superiores y torácicos SOT para normalizar el equilibrio del sistema nervioso autónomo, desplazando el cuerpo de la hiperactividad simpática a la parasimpaticidad equilibrada. La restauración del movimiento espinal normal reduce la inflamación neurológica y mejora la circulación de neurotransmisores. Muchos pacientes reportan mejora del estado de ánimo, mejor sueño y reducción de la ansiedad dentro de 4-6 semanas de cuidado consistente. La quiropráctica se utiliza mejor como complemento a la terapia psicológica y, cuando sea necesario, a la medicación psicotrópica.',
  },
};

// First add condition 1 as a baseline since it's already done
console.log('Processing translations...');
let processedCount = 0;

for (const slug in translations) {
  const trans = translations[slug];
  let slugFound = false;

  // Try to find and replace for each field
  const fields = ['introEs', 'whatIsEs', 'symptomsEs', 'causesEs', 'chiropracticTreatmentEs'];

  for (const field of fields) {
    // Skip if field already exists
    const fieldRegex = new RegExp(`\\s+${field}:`);
    if (fieldRegex.test(content)) {
      console.log(`${slug}: ${field} already exists, skipping`);
      continue;
    }

    // Find the position to insert the new field
    let insertPosition = -1;

    if (field === 'introEs') {
      const introRegex = new RegExp(`slug: "${slug}"[\\s\\S]*?intro: "[\\s\\S]*?",`);
      const match = introRegex.exec(content);
      if (match) {
        insertPosition = match.index + match[0].length;
        slugFound = true;
      }
    } else if (field === 'whatIsEs') {
      const whatIsRegex = new RegExp(`slug: "${slug}"[\\s\\S]*?whatIs: "[\\s\\S]*?",`);
      const match = whatIsRegex.exec(content);
      if (match) {
        insertPosition = match.index + match[0].length;
      }
    } else if (field === 'symptomsEs') {
      const sympRegex = new RegExp(`slug: "${slug}"[\\s\\S]*?symptoms: \\[[\\s\\S]*?\\],`);
      const match = sympRegex.exec(content);
      if (match) {
        insertPosition = match.index + match[0].length;
      }
    } else if (field === 'causesEs') {
      const causesRegex = new RegExp(`slug: "${slug}"[\\s\\S]*?causes: \\[[\\s\\S]*?\\],`);
      const match = causesRegex.exec(content);
      if (match) {
        insertPosition = match.index + match[0].length;
      }
    } else if (field === 'chiropracticTreatmentEs') {
      const treatRegex = new RegExp(`slug: "${slug}"[\\s\\S]*?chiropracticTreatment: "[\\s\\S]*?",`);
      const match = treatRegex.exec(content);
      if (match) {
        insertPosition = match.index + match[0].length;
      }
    }

    if (insertPosition !== -1) {
      let fieldValue = trans[field];
      let fieldString;

      if (Array.isArray(fieldValue)) {
        fieldString = JSON.stringify(fieldValue);
      } else {
        fieldString = `"${fieldValue.replace(/"/g, '\\"')}"`;
      }

      const insertText = `\n    ${field}: ${fieldString},`;
      content = content.slice(0, insertPosition) + insertText + content.slice(insertPosition);
      processedCount++;
    }
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Successfully added ${processedCount} translation fields`);
