export interface ConditionData {
  slug: string;
  title: string;
  titleEs?: string;
  image: string;
  metaDescription: string;
  metaDescriptionEs?: string;
  intro: string;
  introEs?: string;
  whatIs: string;
  whatIsEs?: string;
  symptoms: string[];
  symptomsEs?: string[];
  causes: string[];
  causesEs?: string[];
  chiropracticTreatment: string;
  chiropracticTreatmentEs?: string;
  additionalTreatments: Array<"shockwave" | "softwave" | "laser">;
  /** Optional inline video to render after the intro paragraph. Path under /public. */
  video?: string;
  /** Optional poster image for the inline video. */
  videoPoster?: string;
  /** Optional caption shown below the video. Localized via videoCaptionEs. */
  videoCaption?: string;
  videoCaptionEs?: string;
}

export const conditionsContent: ConditionData[] = [
  {
    slug: "headaches",
    title: "Headaches & Migraines | Chiropractor San Antonio TX",
    titleEs: "Dolores de Cabeza y Migrañas | Quiropráctico San Antonio TX",
    image: "/images/conditions/headache.jpg",
    metaDescription:
      "Chiropractic care for headaches and migraines in San Antonio, TX. Dr. Foss — best chiropractor San Antonio — uses SOT chiropractic, SoftWave, and Class IV laser to resolve the root cause of recurring headaches. Serving Stone Oak, Castle Hills, and Alamo Heights.",
    metaDescriptionEs:
      "Cuidado quiropráctico para dolores de cabeza y migrañas en San Antonio, TX. El Dr. Foss utiliza la técnica SOT, SoftWave y láser Clase IV para resolver la causa raíz de los dolores de cabeza recurrentes sin medicamentos.",
    intro:
      "Headaches are one of the most common reasons patients visit Pura Vida Chiropractic in San Antonio. Rather than simply masking pain with medication, our approach targets the underlying spinal and neurological dysfunction driving your headaches.",
    introEs:
      "Los dolores de cabeza son una de las razones más comunes por las que los pacientes visitan Pura Vida Chiropractic en San Antonio. En lugar de simplemente enmascarar el dolor con medicamentos, nuestro enfoque se dirige a la disfunción espinal y neurológica subyacente que causa los dolores de cabeza.",
    whatIs:
      "A headache is pain or discomfort in the head, scalp, or neck. Tension headaches arise from muscle tension and joint restriction in the upper cervical spine, while cervicogenic headaches originate directly from structures in the neck. Misaligned vertebrae in the upper neck — particularly C1 and C2 — can irritate surrounding nerves and blood vessels, triggering pain that radiates into the head. Chronic headaches are rarely a medication deficiency; they signal underlying structural or neurological imbalance that conservative chiropractic care is uniquely positioned to address.",
    whatIsEs:
      "Un dolor de cabeza es el dolor o malestar en la cabeza, cuero cabelludo o cuello. Los dolores de cabeza tensionales surgen de la tensión muscular y restricción articular en la columna cervical superior, mientras que los dolores de cabeza cervicogénicos se originan directamente en las estructuras del cuello. Las vértebras desalineadas en el cuello superior —particularmente C1 y C2— pueden irritar los nervios y vasos sanguíneos circundantes, desencadenando dolor que irradia hacia la cabeza. Los dolores de cabeza crónicos rara vez son una deficiencia de medicamentos; señalan un desequilibrio estructural o neurológico subyacente que el cuidado quiropráctico conservador está posicionado únicamente para abordar.",
    symptoms: [
      "Dull, aching pain across the forehead or sides of the head",
      "Pressure or tightness around the temples",
      "Pain that worsens with neck movement or prolonged sitting",
      "Sensitivity to light or sound",
      "Tenderness in the scalp, neck, or shoulder muscles",
      "Headaches occurring daily or multiple times per week",
    ],
    symptomsEs: [
      "Dolor sordo y palpitante en la frente o los lados de la cabeza",
      "Presión o tensión alrededor de las sienes",
      "Dolor que empeora con el movimiento del cuello o sedestación prolongada",
      "Sensibilidad a la luz o al sonido",
      "Sensibilidad en el cuero cabelludo, cuello o músculos de los hombros",
      "Dolores de cabeza que ocurren diariamente o múltiples veces por semana",
    ],
    causes: [
      "Upper cervical vertebral subluxations (C1–C3)",
      "Poor posture and forward head position from screen use",
      "Muscle tension in the suboccipital and trapezius muscles",
      "Stress and its physical effects on spinal tension",
      "TMJ dysfunction contributing to referred head pain",
      "Dehydration and lifestyle factors compounding spinal stress",
    ],
    causesEs: [
      "Subluxaciones vertebrales cervicales superiores (C1–C3)",
      "Postura pobre y posición de cabeza adelantada por uso de pantallas",
      "Tensión muscular en los músculos suboccipitales y trapezos",
      "Estrés y sus efectos físicos en la tensión espinal",
      "Disfunción ATM contribuyendo al dolor de cabeza referido",
      "Deshidratación y factores del estilo de vida que agravan la tensión espinal",
    ],
    chiropracticTreatment:
      "Dr. Foss begins with a thorough evaluation of your cervical spine, posture, and craniosacral rhythm to identify the exact vertebral levels contributing to your headaches. Using Sacro-Occipital Technique (SOT), he gently realigns the upper cervical spine — especially the atlas (C1) and axis (C2) — restoring normal joint motion and reducing pressure on the surrounding nerves and blood vessels. SOT also addresses the dural tension system, which connects the skull to the sacrum, and can be a hidden contributor to chronic head pain. Most headache patients notice significant improvement within the first few visits, with lasting relief developing over a consistent course of care.",
    chiropracticTreatmentEs:
      "El Dr. Foss comienza con una evaluación exhaustiva de su columna cervical, postura y ritmo craneosakral para identificar los niveles vertebrales exactos que contribuyen a los dolores de cabeza. Utilizando la Técnica Sacro-Occipital (SOT), realinea suavemente la columna cervical superior —especialmente el atlas (C1) y el axis (C2)—, restaurando el movimiento articular normal y reduciendo la presión sobre los nervios y vasos sanguíneos circundantes. La SOT también aborda el sistema de tensión dural, que conecta el cráneo al sacro y puede ser un contribuyente oculto al dolor de cabeza crónico. La mayoría de los pacientes con dolores de cabeza notan mejoras significativas en las primeras visitas, con un alivio duradero que se desarrolla durante un curso consistente de cuidado.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "auto-accident-injuries",
    title: "Auto Accident Injuries | Chiropractor San Antonio TX",
    titleEs: "Lesiones por Accidente Automovilístico | Quiropráctico de Accidentes de Tránsito San Antonio TX",
    image: "/images/conditions/autoaccident.jpg",
    metaDescription:
      "Car accident chiropractor in San Antonio, TX. Pura Vida Chiropractic specializes in whiplash, neck pain, and soft-tissue injuries from auto accidents. Best chiropractor San Antonio for car accident injuries — SOT chiropractic and regenerative therapies. Free consultation.",
    metaDescriptionEs:
      "Quiropráctico de accidentes de tránsito en San Antonio, TX. Pura Vida Chiropractic se especializa en latigazo cervical, dolor de cuello y lesiones de tejidos blandos. El Dr. Foss ofrece quiropráctica SOT y terapias regenerativas para accidentes automovilísticos.",
    intro:
      "Car accidents — even at low speeds — can cause significant spinal trauma that doesn't always show up on X-rays right away. Pura Vida Chiropractic helps San Antonio accident victims recover fully by addressing the spine, joints, and soft tissues injured during the collision.",
    introEs:
      "Los accidentes automovilísticos —incluso a baja velocidad— pueden causar trauma espinal significativo que no siempre aparece en radiografías de inmediato. Pura Vida Chiropractic ayuda a las víctimas de accidentes en San Antonio a recuperarse completamente abordando la columna vertebral, articulaciones y tejidos blandos lesionados.",
    whatIs:
      "Auto accident injuries encompass a wide range of musculoskeletal and neurological traumas resulting from the sudden forces of a vehicle collision. Whiplash — rapid back-and-forth acceleration of the head and neck — is the most common, causing ligament tears, disc injuries, and vertebral misalignment. Even a 5 mph impact can generate forces sufficient to strain the delicate structures of the cervical spine. Without proper treatment, these injuries often develop into chronic neck pain, headaches, arm numbness, and postural dysfunction. Early chiropractic care reduces inflammation, restores spinal alignment, and prevents acute injuries from becoming chronic problems.",
    whatIsEs:
      "Las lesiones por accidente automovilístico abarcan una amplia gama de traumatismos musculoesqueléticos y neurológicos resultantes de las fuerzas repentinas de una colisión vehicular. El latigazo cervical —aceleración rápida hacia adelante y hacia atrás de la cabeza y el cuello— es el más común, causando desgarros de ligamentos, lesiones discales y desalineación vertebral. Incluso un impacto de 5 mph puede generar fuerzas suficientes para tensar las delicadas estructuras de la columna cervical. Sin tratamiento adecuado, estas lesiones a menudo se desarrollan en dolor de cuello crónico, dolores de cabeza, entumecimiento de brazos y disfunción postural.",
    symptoms: [
      "Neck pain and stiffness following the accident",
      "Headaches starting at the base of the skull",
      "Shoulder pain or muscle spasms",
      "Pain, tingling, or numbness into the arms or hands",
      "Lower back pain and mid-back soreness",
      "Difficulty concentrating or fatigue (post-concussive symptoms)",
      "Jaw pain or TMJ dysfunction",
    ],
    symptomsEs: [
      "Dolor de cuello y rigidez después del accidente",
      "Dolores de cabeza que comienzan en la base del cráneo",
      "Dolor de hombros o espasmos musculares",
      "Dolor, hormigueo o entumecimiento en los brazos o manos",
      "Dolor de espalda baja y sensibilidad de espalda media",
      "Dificultad para concentrarse o fatiga (síntomas post-conmoción)",
      "Dolor de mandíbula o disfunción ATM",
    ],
    causes: [
      "Rapid deceleration/acceleration forces during rear-end collisions",
      "Ligament and muscle tears from sudden head movement",
      "Vertebral subluxations from impact forces",
      "Disc herniation or bulging from compressive forces",
      "Seatbelt-related chest and shoulder injuries",
    ],
    causesEs: [
      "Fuerzas de desaceleración/aceleración rápida durante colisiones traseras",
      "Desgarros de ligamentos y músculos por movimiento repentino de la cabeza",
      "Subluxaciones vertebrales por fuerzas de impacto",
      "Hernia discal o abultamiento por fuerzas compresivas",
      "Lesiones de pecho y hombros relacionadas con el cinturón de seguridad",
    ],
    chiropracticTreatment:
      "Following an auto accident, time matters. Dr. Foss performs a comprehensive spinal evaluation to locate all areas of trauma — not just where you feel pain. SOT chiropractic care gently restores normal vertebral alignment without aggressive manipulation, which is critical in the acute post-injury phase. He uses wedge-based blocking and soft-tissue techniques to decompress injured discs, reduce nerve irritation, and reset the body's neurological signaling. Detailed documentation is also provided for insurance and legal purposes. We work with personal injury cases and can help coordinate care throughout your recovery process.",
    chiropracticTreatmentEs:
      "Después de un accidente automovilístico, el tiempo es crítico. El Dr. Foss realiza una evaluación espinal exhaustiva para ubicar todas las áreas de trauma —no solo donde siente dolor. El cuidado quiropráctico SOT restaura suavemente la alineación vertebral normal sin manipulación agresiva, lo que es crítico en la fase aguda post-lesión. Utiliza técnicas de bloqueo basadas en cuñas y técnicas de tejidos blandos para descomprimir discos lesionados, reducir la irritación nerviosa y reiniciar la señalización neurológica del cuerpo. También proporciona documentación detallada para propósitos de seguros y legales.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "disc-problems",
    title: "Disc Problems | Back Pain Doctor San Antonio TX",
    titleEs: "Problemas de Disco | Doctor de Dolor de Espalda San Antonio TX",
    image: "/images/conditions/discproblems.jpg",
    metaDescription:
      "Non-surgical disc herniation treatment in San Antonio, TX. Dr. Dan Foss — back pain doctor San Antonio — uses SOT chiropractic, SoftWave, and Class IV Laser at Pura Vida Chiropractic. Chiropractor near me serving Stone Oak and NW Military Hwy.",
    metaDescriptionEs:
      "Tratamiento de hernia discal sin cirugía en San Antonio, TX. El Dr. Foss utiliza quiropráctica SOT, SoftWave y láser Clase IV en Pura Vida Chiropractic para descomprimir discos y aliviar dolor de espalda y nervios sin medicamentos.",
    intro:
      "Disc problems — including bulges, herniations, and degenerative disc disease — are among the most painful and debilitating spinal conditions. Pura Vida Chiropractic offers a non-surgical approach that decompresses the affected disc and supports the body's natural ability to heal.",
    introEs:
      "Los problemas de disco —incluyendo abultamientos, hernias y enfermedad degenerativa de disco— son algunas de las condiciones espinales más dolorosas e incapacitantes. Pura Vida Chiropractic ofrece un enfoque no quirúrgico que descomprime el disco afectado y apoya la capacidad natural del cuerpo para sanar.",
    whatIs:
      "Spinal discs are gel-filled shock absorbers that sit between each vertebra. When a disc bulges or herniates, the inner nucleus material pushes outward, irritating or compressing nearby nerves. This produces localized back pain as well as radiating pain, numbness, or weakness in the arms or legs depending on the location. Degenerative disc disease occurs as discs lose hydration and height over time, reducing spinal cushioning and increasing the risk of joint irritation. Most disc conditions respond very well to conservative chiropractic care, which can decompress the disc space and reduce nerve inflammation without drugs or surgery.",
    whatIsEs:
      "Los discos espinales son amortiguadores llenos de gel que se sientan entre cada vértebra. Cuando un disco se abultaohernía, el material del núcleo interno se empuja hacia afuera, irritando o comprimiendo los nervios cercanos. Esto produce dolor de espalda localizado así como dolor irradiado, entumecimiento o debilidad en los brazos o piernas dependiendo de la ubicación. La enfermedad degenerativa del disco ocurre cuando los discos pierden hidratación y altura con el tiempo, reduciendo el amortiguamiento espinal e incrementando el riesgo de irritación articular.",
    symptoms: [
      "Sharp, localized back or neck pain",
      "Radiating pain down the arms (cervical) or legs (lumbar)",
      "Numbness, tingling, or burning sensation in extremities",
      "Weakness in arms, legs, or grip",
      "Pain that worsens with sitting, bending, or coughing",
      "Relief when lying down or walking",
    ],
    symptomsEs: [
      "Dolor agudo y localizado en la espalda o cuello",
      "Dolor irradiado hacia los brazos (cervical) o piernas (lumbar)",
      "Entumecimiento, hormigueo o sensación de ardor en extremidades",
      "Debilidad en brazos, piernas o agarre",
      "Dolor que empeora al sentarse, inclinarse o toser",
      "Alivio al acostarse o caminar",
    ],
    causes: [
      "Prolonged sitting and compressive posture",
      "Heavy lifting with improper mechanics",
      "Degenerative changes and age-related disc thinning",
      "Trauma or sudden injury to the spine",
      "Vertebral misalignment increasing disc stress",
    ],
    causesEs: [
      "Sedestación prolongada y postura compresiva",
      "Levantamiento pesado con mecánica inadecuada",
      "Cambios degenerativos y adelgazamiento discal relacionado con la edad",
      "Trauma o lesión repentina en la columna",
      "Desalineación vertebral que aumenta el estrés discal",
    ],
    chiropracticTreatment:
      "Dr. Foss uses SOT's pelvic blocking technique to gently decompress lumbar discs using the patient's own body weight and gravity — no forceful manipulation. For cervical discs, he applies specific low-force traction and mobilization to create space between vertebrae and reduce disc pressure. The craniosacral system is also evaluated, as dural tube tension can maintain disc compression even after alignment is restored. This comprehensive approach reduces nerve irritation, allows the disc to rehydrate, and supports long-term spinal health.",
    chiropracticTreatmentEs:
      "El Dr. Foss utiliza la técnica de bloqueo pélvico de SOT para descomprimir suavemente los discos lumbares utilizando el peso corporal y la gravedad del paciente —sin manipulación forzada. Para discos cervicales, aplica tracción específica de bajo esfuerzo y movilización para crear espacio entre las vértebras y reducir la presión discal. El sistema craneosakral también se evalúa, ya que la tensión del tubo dural puede mantener la compresión discal incluso después de que se restaura la alineación. Este enfoque integral reduce la irritación nerviosa, permite que el disco se rehidrate y apoya la salud espinal a largo plazo.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "sports-injury",
    title: "Sports Injuries | Sports Chiropractor San Antonio TX",
    titleEs: "Lesiones Deportivas | Quiropráctico Deportivo San Antonio TX",
    image: "/images/conditions/sports-injury.webp",
    metaDescription:
      "Sports chiropractor in San Antonio, TX. Pura Vida Chiropractic helps athletes recover from sprains, strains, and overuse injuries with SOT chiropractic, Shockwave, SoftWave, and Class IV Laser. Best sports injury treatment San Antonio near Stone Oak and NW Military Hwy.",
    metaDescriptionEs:
      "Quiropráctico deportivo en San Antonio, TX. Pura Vida Chiropractic ayuda a los atletas a recuperarse de esguinces, distensiones y lesiones por uso excesivo con quiropráctica SOT, Shockwave, SoftWave y láser Clase IV.",
    intro:
      "Whether you're a weekend warrior or a competitive athlete, sports injuries disrupt performance and sideline you from what you love. Pura Vida Chiropractic helps San Antonio athletes recover faster and perform better by addressing injury at its root.",
    introEs:
      "Ya sea que sea un guerrero de fin de semana o un atleta competitivo, las lesiones deportivas interrumpen el desempeño y lo apartan de lo que ama. Pura Vida Chiropractic ayuda a los atletas de San Antonio a recuperarse más rápido y a rendir mejor abordando la lesión en su raíz.",
    whatIs:
      "Sports injuries range from acute traumatic events — such as sprains, fractures, and dislocations — to chronic overuse conditions like tendinopathy, stress fractures, and repetitive strain injuries. In most cases, the underlying issue is not just tissue damage but also a biomechanical dysfunction that predisposed the athlete to injury. Misalignments in the spine or extremities alter movement patterns, overload specific structures, and impair the nervous system's ability to coordinate muscles properly. Chiropractic care corrects these dysfunctions, accelerates tissue repair, and helps athletes return to sport more quickly and safely.",
    whatIsEs:
      "Las lesiones deportivas van desde eventos traumáticos agudos —como esguinces, fracturas y dislocaciones— hasta condiciones crónicas por uso excesivo como tendinopatía, fracturas por estrés y lesiones por esfuerzo repetitivo. En la mayoría de los casos, el problema subyacente no es solo daño tisular sino también una disfunción biomecánica que predispuso al atleta a la lesión. Las desalineaciones en la columna o extremidades alteran los patrones de movimiento, sobrecargan estructuras específicas e impiden la capacidad del sistema nervioso de coordinar adecuadamente los músculos.",
    symptoms: [
      "Localized pain at the site of injury",
      "Swelling, bruising, or warmth around the injured area",
      "Reduced range of motion or joint stiffness",
      "Muscle weakness or difficulty bearing weight",
      "Recurring injuries in the same area",
      "Performance decline or compensatory movement patterns",
    ],
    symptomsEs: [
      "Dolor localizado en el sitio de la lesión",
      "Inflamación, moretones o calor alrededor del área lesionada",
      "Reducción del rango de movimiento o rigidez articular",
      "Debilidad muscular o dificultad para soportar peso",
      "Lesiones recurrentes en la misma área",
      "Decline del desempeño o patrones de movimiento compensatorio",
    ],
    causes: [
      "Acute trauma from contact or sudden movement",
      "Repetitive overuse and microtrauma accumulation",
      "Muscle imbalances and poor biomechanics",
      "Inadequate warm-up or recovery protocols",
      "Spinal or extremity misalignment altering movement mechanics",
    ],
    causesEs: [
      "Trauma agudo por contacto o movimiento repentino",
      "Uso excesivo repetitivo y acumulación de microtrauma",
      "Desequilibrios musculares y biomecánica pobre",
      "Calentamiento inadecuado o protocolos de recuperación",
      "Desalineación espinal o de extremidades alterando la mecánica del movimiento",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates not just the injured area but the entire kinetic chain — because a knee injury often reflects a pelvic imbalance, and a shoulder injury frequently originates in the thoracic spine. SOT adjustments restore proper joint alignment throughout the spine and extremities, correcting the mechanical dysfunctions that led to injury. He also addresses soft-tissue tension patterns that limit healing. Athletes appreciate the gentle, specific nature of SOT, which allows treatment even in the acute phase without aggravating the injury. The goal is to return you to full performance faster and more safely than rest alone would allow.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa no solo el área lesionada sino toda la cadena cinética —porque una lesión de rodilla a menudo refleja un desequilibrio pélvico, y una lesión de hombro frecuentemente se origina en la columna torácica. Los ajustes SOT restauran la alineación articular adecuada en toda la columna y extremidades, corrigiendo las disfunciones mecánicas que causaron la lesión. También aborda los patrones de tensión de tejidos blandos que limitan la curación. Los atletas aprecian la naturaleza gentil y específica de SOT, que permite el tratamiento incluso en la fase aguda sin agravar la lesión.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "neck-pain",
    title: "Neck Pain | Neck Pain Chiropractor San Antonio TX",
    titleEs: "Dolor de Cuello | Quiropráctico de Dolor de Cuello San Antonio TX",
    image: "/images/conditions/neck.jpg",
    metaDescription:
      "Neck pain chiropractor in San Antonio, TX. Pura Vida Chiropractic addresses cervical spine dysfunction, whiplash, and nerve irritation causing neck pain using SOT chiropractic and Class IV laser therapy. Best chiropractor San Antonio — serving Stone Oak, Castle Hills, and Alamo Heights.",
    metaDescriptionEs:
      "Quiropráctico de dolor de cuello en San Antonio, TX. Pura Vida Chiropractic aborda la disfunción de la columna cervical, el latigazo cervical y la irritación nerviosa que causa dolor de cuello usando quiropráctica SOT y terapia con láser Clase IV.",
    intro:
      "Neck pain is one of the most common musculoskeletal complaints in modern life — driven by hours of screen time, poor posture, and unresolved spinal tension. Pura Vida Chiropractic in San Antonio provides effective, non-invasive care that addresses the root cause.",
    introEs:
      "El dolor de cuello es una de las quejas musculoesqueléticas más comunes en la vida moderna —impulsada por horas de tiempo de pantalla, postura pobre y tensión espinal no resuelta. Pura Vida Chiropractic en San Antonio proporciona cuidado no invasivo y efectivo que aborda la causa raíz.",
    whatIs:
      "Neck pain arises from dysfunction in the seven cervical vertebrae, the discs between them, the surrounding muscles and ligaments, or the nerves that travel through the cervical spine. The cervical spine is highly mobile and supports the full weight of the head (approximately 10–12 pounds), making it vulnerable to postural stress and misalignment. Vertebral subluxations reduce joint mobility, irritate nerves, and trigger muscle guarding — creating a cycle of pain and stiffness. Left untreated, cervical dysfunction progresses to disc degeneration, chronic headaches, and nerve-related arm symptoms.",
    whatIsEs:
      "El dolor de cuello surge de la disfunción en las siete vértebras cervicales, los discos entre ellas, los músculos y ligamentos circundantes, o los nervios que viajan a través de la columna cervical. La columna cervical es altamente móvil y soporta el peso total de la cabeza (aproximadamente 10–12 libras), lo que la hace vulnerable al estrés postural y la desalineación. Las subluxaciones vertebrales reducen la movilidad articular, irritan los nervios y desencadenan la guarda muscular —creando un ciclo de dolor y rigidez.",
    symptoms: [
      "Aching or sharp pain in the neck, base of skull, or upper shoulders",
      "Stiffness limiting head rotation or tilting",
      "Cracking or grinding sounds with movement",
      "Headaches radiating from the neck to the forehead or temples",
      "Tingling or numbness into the arms, hands, or fingers",
      "Pain that worsens after prolonged sitting or screen use",
    ],
    symptomsEs: [
      "Dolor dolorido o agudo en el cuello, base del cráneo u hombros superiores",
      "Rigidez que limita la rotación o inclinación de la cabeza",
      "Sonidos de crujido o rechinamiento con el movimiento",
      "Dolores de cabeza que irradian desde el cuello hasta la frente o sienes",
      "Hormigueo o entumecimiento en los brazos, manos o dedos",
      "Dolor que empeora después de sedestación o uso de pantalla prolongados",
    ],
    causes: [
      "Forward head posture from device and screen use",
      "Prolonged sitting in poor ergonomic positions",
      "Whiplash from car accidents or sports trauma",
      "Sleeping in awkward positions or on unsupportive pillows",
      "Chronic stress and tension held in the upper trapezius",
      "Degenerative changes in cervical discs and facet joints",
    ],
    causesEs: [
      "Postura de cabeza adelantada por uso de dispositivos y pantallas",
      "Sedestación prolongada en posiciones ergonómicas pobres",
      "Latigazo cervical por accidentes de tránsito o trauma deportivo",
      "Dormir en posiciones incómodas o sobre almohadas de poco soporte",
      "Estrés crónico y tensión sostenida en el trapecio superior",
      "Cambios degenerativos en los discos cervicales y articulaciones facetarias",
    ],
    chiropracticTreatment:
      "Cervical care at Pura Vida begins with a detailed assessment of your posture, range of motion, and upper cervical alignment. Dr. Foss uses SOT techniques targeting the C1–C7 vertebrae with gentle, specific corrective force — no high-velocity cracking. By restoring proper cervical curve and joint mobility, nerve interference is reduced and muscle tension naturally releases. He also addresses the deeper craniosacral system, which often perpetuates cervical dysfunction when left unevaluated. Patients typically experience meaningful pain relief and improved mobility within their first several visits.",
    chiropracticTreatmentEs:
      "El cuidado cervical en Pura Vida comienza con una evaluación detallada de su postura, rango de movimiento y alineación cervical superior. El Dr. Foss utiliza técnicas SOT dirigidas a las vértebras C1–C7 con fuerza correctiva gentil y específica —sin crujidos de alta velocidad. Al restaurar la curva cervical adecuada y la movilidad articular, la interferencia nerviosa se reduce y la tensión muscular se libera naturalmente. También aborda el sistema craneosakral más profundo, que a menudo perpetúa la disfunción cervical cuando no se evalúa.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "arthritis-joint-pain",
    title: "Arthritis & Joint Pain",
    titleEs: "Artritis y Dolor Articular",
    image: "/images/conditions/arthritis.webp",
    metaDescription:
      "Arthritis and joint pain relief in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic, SoftWave, and Class IV Laser to reduce joint inflammation and slow arthritis progression.",
    metaDescriptionEs:
      "Alivio de la artritis y el dolor articular en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT, SoftWave y láser Clase IV para reducir la inflamación articular y frenar la progresión de la artritis.",
    intro:
      "Arthritis doesn't have to mean a lifetime of pain and medication. Chiropractic care at Pura Vida can reduce joint inflammation, improve mobility, and slow the degenerative process — giving you better quality of life without drugs or surgery.",
    introEs:
      "La artritis no tiene que significar una vida de dolor y medicamentos. El cuidado quiropráctico en Pura Vida puede reducir la inflamación articular, mejorar la movilidad y frenar el proceso degenerativo —dándole mejor calidad de vida sin medicamentos ni cirugía.",
    whatIs:
      "Arthritis refers to inflammation of one or more joints, with osteoarthritis and rheumatoid arthritis being the most common types. Osteoarthritis results from cartilage breakdown in joints subjected to years of improper mechanics and compressive stress. Rheumatoid arthritis is an autoimmune condition where the immune system attacks joint lining. In both cases, misaligned joints accelerate cartilage wear and increase inflammation. Chiropractic care doesn't reverse arthritis, but it significantly reduces the mechanical stress on arthritic joints, decreases inflammation, and restores as much mobility as possible — allowing patients to remain active and reduce their dependence on pain medications.",
    whatIsEs:
      "La artritis se refiere a la inflamación de una o más articulaciones, siendo la osteoartritis y la artritis reumatoide los tipos más comunes. La osteoartritis resulta del deterioro del cartílago en articulaciones sometidas a años de mecánica inadecuada y estrés compresivo. La artritis reumatoide es una condición autoinmune donde el sistema inmunológico ataca el revestimiento articular. En ambos casos, las articulaciones desalineadas aceleran el desgaste del cartílago e incrementan la inflamación.",
    symptoms: [
      "Joint pain that worsens with activity or weather changes",
      "Morning stiffness lasting more than 30 minutes",
      "Swelling, warmth, or redness around joints",
      "Reduced range of motion and joint flexibility",
      "Grinding, clicking, or crunching sensations in joints",
      "Fatigue associated with chronic pain",
    ],
    symptomsEs: [
      "Dolor articular que empeora con la actividad o cambios climáticos",
      "Rigidez matutina que dura más de 30 minutos",
      "Inflamación, calor o enrojecimiento alrededor de las articulaciones",
      "Reducción del rango de movimiento y flexibilidad articular",
      "Sensaciones de rechinamiento, chasquido o crujimiento en las articulaciones",
      "Fatiga asociada con dolor crónico",
    ],
    causes: [
      "Cumulative joint wear from years of misalignment",
      "Traumatic injury to joint cartilage",
      "Autoimmune dysregulation (rheumatoid arthritis)",
      "Obesity and excess joint loading",
      "Genetic predisposition and aging",
      "Chronic inflammation from diet or lifestyle factors",
    ],
    causesEs: [
      "Desgaste acumulativo articular por años de desalineación",
      "Lesión traumática del cartílago articular",
      "Desregulación autoinmune (artritis reumatoide)",
      "Obesidad y sobrecarga articular",
      "Predisposición genética y envejecimiento",
      "Inflamación crónica por factores dietéticos o del estilo de vida",
    ],
    chiropracticTreatment:
      "Dr. Foss adapts his approach for arthritic patients, using the gentle SOT blocking and category-based system that avoids aggressive manipulation of inflamed joints. The focus is on restoring proper biomechanics around arthritic joints to reduce compressive forces, decreasing nerve interference that amplifies pain signals, and improving the overall neurological environment to support the immune system. For rheumatoid arthritis patients, reducing subluxation-related neurological stress can help modulate the inflammatory response. Most arthritic patients experience a meaningful reduction in pain and stiffness with consistent care.",
    chiropracticTreatmentEs:
      "El Dr. Foss adapta su enfoque para pacientes con artritis, utilizando el bloqueo SOT gentil y el sistema basado en categorías que evita la manipulación agresiva de articulaciones inflamadas. El enfoque está en restaurar la biomecánica adecuada alrededor de las articulaciones artríticas para reducir las fuerzas compresivas, disminuir la interferencia nerviosa que amplifica las señales de dolor y mejorar el ambiente neurológico general para apoyar el sistema inmunológico.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "sciatica",
    title: "Sciatica | Sciatica Chiropractor San Antonio TX",
    titleEs: "Ciática | Quiropráctico de Ciática San Antonio TX",
    image: "/images/conditions/sciatica.jpg",
    metaDescription:
      "Sciatica chiropractor in San Antonio, TX. Pura Vida Chiropractic resolves sciatic nerve pain with SOT disc decompression, SoftWave therapy, and Class IV Laser — without drugs or surgery. Best chiropractor San Antonio for sciatica near Stone Oak and NW Military Hwy.",
    metaDescriptionEs:
      "Quiropráctico de ciática en San Antonio, TX. Pura Vida Chiropractic resuelve el dolor del nervio ciático con descompresión discal SOT, terapia SoftWave y láser Clase IV —sin medicamentos ni cirugía.",
    intro:
      "Sciatica — the searing, electric pain that radiates from the lower back down through the buttock and leg — can be completely debilitating. At Pura Vida Chiropractic, we identify and correct the exact spinal or muscular cause of your sciatic nerve compression.",
    introEs:
      "La ciática —el dolor ardiente y eléctrico que irradia desde la parte baja de la espalda hacia las nalgas y la pierna— puede ser completamente incapacitante. En Pura Vida Chiropractic, identificamos y corregimos la causa espinal o muscular exacta de su compresión del nervio ciático.",
    whatIs:
      "Sciatica is not a diagnosis but a symptom — irritation or compression of the sciatic nerve, the body's longest nerve, which runs from the lumbar spine through the piriformis muscle and down each leg. The most common causes are a lumbar disc herniation pressing on a nerve root, lumbar vertebral misalignment, or piriformis muscle entrapment of the sciatic nerve as it passes through the buttock. The result is intense radiating pain, numbness, or weakness that can extend from the low back all the way to the foot. Chiropractic care has an excellent track record of resolving sciatica by addressing the underlying cause of nerve compression.",
    whatIsEs:
      "La ciática no es un diagnóstico sino un síntoma —irritación o compresión del nervio ciático, el nervio más largo del cuerpo, que corre desde la columna lumbar a través del músculo piriforme y hacia cada pierna. Las causas más comunes son una hernia discal lumbar presionando una raíz nerviosa, desalineación vertebral lumbar, o atrapamiento del nervio ciático por el músculo piriforme al pasar por las nalgas. El resultado es un intenso dolor irradiado, entumecimiento o debilidad que puede extenderse desde la espalda baja hasta el pie.",
    symptoms: [
      "Sharp, shooting, or electric pain from the low back into one leg",
      "Buttock pain that worsens with sitting or driving",
      "Numbness or tingling down the thigh, calf, or foot",
      "Leg weakness or difficulty lifting the foot (foot drop)",
      "Pain that improves with walking but worsens with prolonged sitting",
      "Burning sensation along the path of the sciatic nerve",
    ],
    symptomsEs: [
      "Dolor agudo, punzante o eléctrico desde la espalda baja en una pierna",
      "Dolor en las nalgas que empeora al sentarse o conducir",
      "Entumecimiento u hormigueo en el muslo, pantorrilla o pie",
      "Debilidad en la pierna o dificultad para levantar el pie",
      "Dolor que mejora caminando pero empeora con sedestación prolongada",
      "Sensación de ardor a lo largo del nervio ciático",
    ],
    causes: [
      "Lumbar disc herniation (L4–S1) compressing a nerve root",
      "Lumbar vertebral subluxation reducing spinal canal space",
      "Piriformis muscle spasm entrapping the sciatic nerve",
      "Spinal stenosis narrowing the nerve exit foramina",
      "Prolonged sitting and hip flexor tightness",
      "Pelvic imbalance altering lumbar biomechanics",
    ],
    causesEs: [
      "Hernia discal lumbar (L4–S1) comprimiendo una raíz nerviosa",
      "Subluxación vertebral lumbar reduciendo el espacio del canal espinal",
      "Espasmo del músculo piriforme atrapando el nervio ciático",
      "Estenosis espinal estrechando los agujeros de salida nerviosa",
      "Sedestación prolongada y tensión de flexores de cadera",
      "Desequilibrio pélvico alterando la biomecánica lumbar",
    ],
    chiropracticTreatment:
      "SOT's pelvic blocking is ideally suited for sciatica because it uses the patient's own body weight to gently decompress the lumbar disc and nerve root — no forceful lumbar manipulation. Dr. Foss also evaluates the sacroiliac joints and piriformis muscle, as entrapment at these levels is often missed in conventional treatment. Category-specific wedge placements allow the pelvis to unwind and create space for the compressed nerve. Concurrent soft-tissue work on the piriformis and surrounding hip musculature releases additional entrapment points. Most sciatica cases respond within a consistent course of care.",
    chiropracticTreatmentEs:
      "El bloqueo pélvico de SOT es idealmente adecuado para la ciática porque utiliza el peso corporal del paciente para descomprimir suavemente el disco lumbar y la raíz nerviosa —sin manipulación lumbar forzada. El Dr. Foss también evalúa las articulaciones sacroilíacas y el músculo piriforme, ya que el atrapamiento en estos niveles a menudo se pierde en el tratamiento convencional. Las colocaciones de cuñas específicas de categoría permiten que la pelvis se desenrede y cree espacio para el nervio comprimido. El trabajo de tejidos blandos concurrente en el piriforme y la musculatura de cadera circundante libera puntos de atrapamiento adicionales.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "tmj-jaw-pain",
    title: "TMJ & Jaw Pain | TMJ Chiropractor San Antonio TX",
    titleEs: "ATM y Dolor de Mandíbula | Quiropráctico de ATM San Antonio TX",
    image: "/images/conditions/tmj.webp",
    metaDescription:
      "TMJ chiropractor in San Antonio, TX. Pura Vida Chiropractic addresses TMJ dysfunction through craniosacral therapy, SOT chiropractic, and Class IV laser — resolving jaw pain without a mouthguard alone. Chiropractor near me San Antonio serving Stone Oak and Castle Hills.",
    metaDescriptionEs:
      "Quiropráctico de ATM en San Antonio, TX. Pura Vida Chiropractic aborda la disfunción de la ATM a través de terapia craneosakral, quiropráctica SOT y láser Clase IV —resolviendo el dolor de mandíbula sin depender solo de protectores bucales.",
    intro:
      "TMJ dysfunction — pain, clicking, locking, or limited opening of the jaw — has a direct connection to the upper cervical spine and craniosacral system. Pura Vida Chiropractic addresses this link to provide lasting TMJ relief.",
    introEs:
      "La disfunción de la ATM —dolor, chasquidos, bloqueo o apertura limitada de la mandíbula— tiene una conexión directa con la columna cervical superior y el sistema craneosakral. Pura Vida Chiropractic aborda este vínculo para proporcionar alivio duradero de la ATM.",
    whatIs:
      "The temporomandibular joint (TMJ) connects the lower jaw to the skull and is responsible for chewing, speaking, and yawning. TMJ dysfunction (TMD) encompasses a range of conditions affecting this joint and the surrounding muscles. Because the TMJ is intimately connected to the upper cervical spine and the temporal bones of the skull, spinal misalignment — particularly at the atlas (C1) — frequently contributes to or directly causes TMJ dysfunction. The craniosacral system's rhythmic motion also passes through the temporal bones, and restriction here can perpetuate jaw tension and pain. Chiropractic care addresses these underlying structural causes that a mouthguard alone cannot correct.",
    whatIsEs:
      "La articulación temporomandibular (ATM) conecta la mandíbula inferior con el cráneo y es responsable de la masticación, el habla y los bostezos. La disfunción de la ATM (DTM) abarca una variedad de condiciones que afectan esta articulación y los músculos circundantes. Porque la ATM está íntimamente conectada con la columna cervical superior y los huesos temporales del cráneo, la desalineación espinal —particularmente en el atlas (C1)— frecuentemente contribuye o causa directamente la disfunción de la ATM.",
    symptoms: [
      "Jaw pain, tenderness, or aching — especially upon waking",
      "Clicking, popping, or grinding sounds when opening or closing the mouth",
      "Limited mouth opening or jaw locking",
      "Ear pain, fullness, or ringing (tinnitus) on one or both sides",
      "Headaches at the temples or behind the eyes",
      "Facial muscle soreness and tension",
    ],
    symptomsEs: [
      "Dolor de mandíbula, sensibilidad o dolor —especialmente al despertar",
      "Sonidos de chasquido, estallido o rechinamiento al abrir o cerrar la boca",
      "Apertura limitada de la boca o bloqueo de mandíbula",
      "Dolor de oído, plenitud o zumbido (tinnitus) en uno o ambos lados",
      "Dolores de cabeza en las sienes o detrás de los ojos",
      "Sensibilidad facial y tensión muscular",
    ],
    causes: [
      "Upper cervical subluxation (C1–C2) affecting temporal bone motion",
      "Craniosacral restriction at the temporal bones",
      "Teeth clenching or grinding (bruxism) — often stress-driven",
      "Trauma to the jaw or head (fall, accident)",
      "Dental procedures or prolonged mouth opening",
      "Postural imbalance pulling on the jaw musculature",
    ],
    causesEs: [
      "Subluxación cervical superior (C1–C2) afectando el movimiento de los huesos temporales",
      "Restricción craneosakral en los huesos temporales",
      "Apretamiento o rechazamiento de dientes (bruxismo) —a menudo impulsado por estrés",
      "Trauma en la mandíbula o cabeza (caída, accidente)",
      "Procedimientos dentales o apertura prolongada de la boca",
      "Desequilibrio postural tirando de la musculatura de la mandíbula",
    ],
    chiropracticTreatment:
      "SOT chiropractic includes specific craniosacral protocols for TMJ dysfunction that are rarely offered in conventional chiropractic offices. Dr. Foss evaluates the temporal bones, occiput, sphenoid, and upper cervical spine as an integrated unit. Gentle craniosacral corrections at the temporal bones restore normal motion and reduce tension on the TMJ. Concurrent upper cervical adjustments address the neurological component. This combination is highly effective and is especially valuable for patients who have tried mouthguards and dental splints without lasting relief.",
    chiropracticTreatmentEs:
      "La quiropráctica SOT incluye protocolos craneosacrales específicos para la disfunción de la ATM que rara vez se ofrecen en oficinas quiropráticas convencionales. El Dr. Foss evalúa los huesos temporales, occipucio, esfenoides y columna cervical superior como una unidad integrada. Las correcciones craneosacrales suaves en los huesos temporales restauran el movimiento normal y reducen la tensión en la ATM. Los ajustes cervicales superiores concurrentes abordan el componente neurológico.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "lower-back-pain",
    title: "Lower Back Pain | Back Pain Doctor San Antonio TX",
    titleEs: "Dolor de Espalda Baja | Doctor de Dolor de Espalda San Antonio TX",
    image: "/images/conditions/backpain.jpg",
    metaDescription:
      "Back pain doctor in San Antonio, TX. Pura Vida Chiropractic uses SOT chiropractic adjustment to correct lumbar and pelvic dysfunction — the root cause of most lower back pain. Best chiropractor San Antonio near Stone Oak, NW Military Hwy. Free chiropractic evaluation.",
    metaDescriptionEs:
      "Doctor de dolor de espalda en San Antonio, TX. Pura Vida Chiropractic utiliza ajuste quiropráctico SOT para corregir la disfunción lumbar y pélvica —la causa raíz de la mayoría del dolor de espalda baja.",
    intro:
      "Lower back pain is the leading cause of disability worldwide, yet most cases stem from correctable spinal and pelvic misalignment. At Pura Vida Chiropractic, we identify exactly what's causing your low back pain and correct it at the source.",
    introEs:
      "El dolor de espalda baja es la causa principal de discapacidad en todo el mundo, sin embargo, la mayoría de los casos provienen de desalineación espinal y pélvica corregible. En Pura Vida Chiropractic, identificamos exactamente qué está causando el dolor de espalda baja y lo corregimos en la fuente.",
    whatIs:
      "The lumbar spine — five large vertebrae sitting above the sacrum and pelvis — carries the majority of the body's weight and bears significant mechanical stress with every step, lift, and twist. Lower back pain can arise from disc dysfunction, facet joint irritation, sacroiliac joint instability, muscular strain, or nerve compression. In the vast majority of cases, the underlying driver is pelvic imbalance and lumbar vertebral subluxation — a pattern that SOT chiropractic is specifically designed to identify and correct. Without addressing the structural foundation of the spine, lower back pain tends to recur regardless of how much rest, physical therapy, or medication is used.",
    whatIsEs:
      "La columna lumbar —cinco grandes vértebras ubicadas encima del sacro y la pelvis— soporta la mayoría del peso corporal y soporta estrés mecánico significativo con cada paso, levantamiento y giro. El dolor de espalda baja puede surgir de disfunción discal, irritación de las articulaciones facetarias, inestabilidad de la articulación sacroilíaca, tensión muscular o compresión nerviosa. En la gran mayoría de los casos, el factor subyacente es el desequilibrio pélvico y la subluxación vertebral lumbar —un patrón que la quiropráctica SOT está específicamente diseñada para identificar y corregir.",
    symptoms: [
      "Dull, aching, or sharp pain in the lower back",
      "Pain that worsens with prolonged sitting, standing, or bending",
      "Stiffness in the morning that improves with movement",
      "Radiating pain into the buttocks or backs of the thighs",
      "Muscle spasm or tightness across the lumbar area",
      "Difficulty standing upright or shifting posture",
    ],
    symptomsEs: [
      "Dolor sordo, dolorido o agudo en la espalda baja",
      "Dolor que empeora con sedestación, bipedestación o flexión prolongadas",
      "Rigidez matutina que mejora con el movimiento",
      "Dolor irradiado hacia las nalgas o la parte posterior de los muslos",
      "Espasmo muscular o tensión en toda el área lumbar",
      "Dificultad para estar de pie erguido o cambiar de postura",
    ],
    causes: [
      "Pelvic imbalance and sacroiliac joint dysfunction",
      "Lumbar disc herniation or degenerative disc disease",
      "Facet joint arthrosis and joint restriction",
      "Muscle imbalances between anterior and posterior chains",
      "Prolonged sitting and sedentary posture",
      "Improper lifting mechanics causing acute injury",
    ],
    causesEs: [
      "Desequilibrio pélvico y disfunción de la articulación sacroilíaca",
      "Hernia discal lumbar o enfermedad degenerativa del disco",
      "Artrosis de articulación facetaria y restricción articular",
      "Desequilibrios musculares entre cadenas anterior y posterior",
      "Sedestación prolongada y postura sedentaria",
      "Mecánica de levantamiento inadecuada causando lesión aguda",
    ],
    chiropracticTreatment:
      "SOT was developed specifically around the pelvis and sacrum as the foundation of the spine — making it uniquely suited for lower back pain. Dr. Foss uses SOT's three-category system to classify the exact type of pelvic-lumbar dysfunction present and applies the precise correction needed. Pelvic blocking positions use gravity and the patient's body weight to restore sacroiliac joint alignment, decompress lumbar discs, and normalize the dural tube tension running from the sacrum to the skull. This approach is safe, effective, and well-tolerated even in acute low back pain flares.",
    chiropracticTreatmentEs:
      "SOT fue desarrollada específicamente alrededor de la pelvis y el sacro como la base de la columna —lo que la hace únicamente adecuada para el dolor de espalda baja. El Dr. Foss utiliza el sistema de tres categorías de SOT para clasificar el tipo exacto de disfunción pélvico-lumbar presente y aplica la corrección precisa necesaria. Las posiciones de bloqueo pélvico utilizan la gravedad y el peso corporal del paciente para restaurar la alineación de la articulación sacroilíaca, descomprimir los discos lumbares y normalizar la tensión del tubo dural que corre del sacro al cráneo.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "neuropathy-numbness",
    title: "Neuropathy & Numbness | Chiropractor San Antonio TX",
    titleEs: "Neuropatía y Entumecimiento | Quiropráctico San Antonio TX",
    image: "/images/conditions/neuropathy.webp",
    metaDescription:
      "Peripheral neuropathy treatment in San Antonio, TX. Pura Vida Chiropractic — chiropractor near me San Antonio — uses SOT chiropractic, SoftWave, and Class IV Laser to improve nerve function and reduce numbness and tingling. Serving Stone Oak, Castle Hills, and Helotes.",
    metaDescriptionEs:
      "Tratamiento de neuropatía periférica en San Antonio, TX. Pura Vida Chiropractic utiliza quiropráctica SOT, SoftWave y láser Clase IV para mejorar la función nerviosa y reducir el entumecimiento y hormigueo.",
    intro:
      "Peripheral neuropathy — numbness, tingling, burning, and weakness in the hands or feet — significantly impacts quality of life. Pura Vida Chiropractic addresses the neurological and vascular components of neuropathy to help restore sensation and function.",
    introEs:
      "La neuropatía periférica —entumecimiento, hormigueo, ardor y debilidad en las manos o pies— impacta significativamente la calidad de vida. Pura Vida Chiropractic aborda los componentes neurológicos y vasculares de la neuropatía para ayudar a restaurar la sensación y la función.",
    whatIs:
      "Neuropathy refers to dysfunction or damage to peripheral nerves — the network of nerves outside the brain and spinal cord. Symptoms arise when these nerves are compressed, starved of blood supply, or chemically damaged. While diabetes is the most common systemic cause, neuropathy also results from spinal nerve compression, poor circulation, autoimmune conditions, or nutritional deficiencies. Chiropractic care addresses the spinal component — nerve root compression in the lumbar or cervical spine — and regenerative therapies directly stimulate nerve repair and improve microcirculation in the affected extremities.",
    whatIsEs:
      "La neuropatía se refiere a la disfunción o daño en los nervios periféricos —la red de nervios fuera del cerebro y la médula espinal. Los síntomas surgen cuando estos nervios están comprimidos, privados de suministro de sangre o dañados químicamente. Aunque la diabetes es la causa sistémica más común, la neuropatía también resulta de compresión de raíces nerviosas espinales, mala circulación, condiciones autoinmunes o deficiencias nutricionales. El cuidado quiropráctico aborda el componente espinal —compresión de raíces nerviosas en la columna lumbar o cervical—",
    symptoms: [
      "Numbness or loss of sensation in the feet, toes, hands, or fingers",
      "Burning or electric pain in the extremities",
      "Tingling or pins-and-needles sensation",
      "Weakness in the legs or difficulty with balance",
      "Sensitivity to touch — even light contact feels painful",
      "Symptoms that worsen at night",
    ],
    symptomsEs: [
      "Entumecimiento o pérdida de sensación en los pies, dedos de los pies, manos o dedos",
      "Dolor ardiente o eléctrico en las extremidades",
      "Hormigueo o sensación de alfileres y agujas",
      "Debilidad en las piernas o dificultad con el equilibrio",
      "Sensibilidad al tacto —incluso el contacto ligero duele",
      "Síntomas que empeoran en la noche",
    ],
    causes: [
      "Diabetes-related nerve damage (diabetic neuropathy)",
      "Lumbar or cervical nerve root compression",
      "Poor peripheral circulation reducing nerve oxygenation",
      "Autoimmune conditions (Guillain-Barré, CIDP)",
      "Nutritional deficiencies (B12, folate)",
      "Chemotherapy-induced peripheral neuropathy",
    ],
    causesEs: [
      "Daño nervioso relacionado con diabetes (neuropatía diabética)",
      "Compresión de raíz nerviosa lumbar o cervical",
      "Mala circulación periférica reduciendo la oxigenación nerviosa",
      "Condiciones autoinmunes (Guillain-Barré, CIDP)",
      "Deficiencias nutricionales (B12, ácido fólico)",
      "Neuropatía periférica inducida por quimioterapia",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the lumbar and cervical spine to identify any nerve root compression contributing to peripheral symptoms. SOT adjustments restore spinal canal space and reduce nerve root irritation, which can significantly reduce neuropathic symptoms originating from the spine. Concurrently, regenerative therapies are applied directly to the affected extremities to stimulate nerve regeneration and improve local blood flow. This comprehensive, multi-modal approach provides meaningful improvement for many neuropathy patients who have not responded to medication alone.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna lumbar y cervical para identificar cualquier compresión de raíz nerviosa que contribuya a los síntomas periféricos. Los ajustes SOT restauran el espacio del canal espinal y reducen la irritación de la raíz nerviosa, lo que puede reducir significativamente los síntomas neuropáticos que se originan en la columna. Concurrentemente, las terapias regenerativas se aplican directamente a las extremidades afectadas para estimular la regeneración nerviosa y mejorar el flujo de sangre local. Este enfoque integral y multimodal proporciona mejoría significativa para muchos pacientes con neuropatía.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "hip-knee-foot-ankle",
    title: "Hip, Knee & Foot Pain | Chiropractor San Antonio TX",
    titleEs: "Dolor de Cadera, Rodilla, Pie y Tobillo | Quiropráctico San Antonio TX",
    image: "/images/conditions/hipkneefootankle.jpg",
    metaDescription:
      "Hip, knee, foot, and ankle pain treatment in San Antonio, TX. Pura Vida Chiropractic — best chiropractor San Antonio — corrects the pelvic and spinal imbalances that drive lower extremity pain. Sports chiropractor San Antonio serving Stone Oak and NW Military Hwy.",
    metaDescriptionEs:
      "Tratamiento del dolor de cadera, rodilla, pie y tobillo en San Antonio, TX. Pura Vida Chiropractic corrige los desequilibrios pélvicos y espinales que impulsan el dolor de extremidad inferior.",
    intro:
      "Pain in the hips, knees, feet, and ankles is rarely isolated to those joints alone — it almost always reflects a pelvic or lumbar biomechanical imbalance. At Pura Vida, we treat the whole kinetic chain so your lower extremity pain stays resolved.",
    introEs:
      "El dolor en las caderas, rodillas, pies y tobillos rara vez se aísla solo en esas articulaciones —casi siempre refleja un desequilibrio biomecánico pélvico o lumbar. En Pura Vida, tratamos toda la cadena cinética para que el dolor de la extremidad inferior permanezca resuelto.",
    whatIs:
      "The lower extremity joints — hips, knees, feet, and ankles — form a kinetic chain that transmits forces from the ground up to the pelvis and spine. When the pelvis is unlevel or the lumbar spine is misaligned, abnormal forces are distributed unevenly through this chain, overloading specific joints and leading to pain and early degeneration. Hip pain may involve bursitis, labral tears, or impingement. Knee pain commonly involves the patellofemoral joint, meniscus, or ligaments. Foot and ankle issues range from plantar fasciitis to chronic ankle instability. Correcting the root pelvic and spinal imbalance is essential for lasting relief in all these conditions.",
    whatIsEs:
      "Las articulaciones de la extremidad inferior —caderas, rodillas, pies y tobillos— forman una cadena cinética que transmite fuerzas desde el suelo hacia la pelvis y la columna. Cuando la pelvis no está a nivel o la columna lumbar está desalineada, las fuerzas anormales se distribuyen desigualmente a través de esta cadena, sobrecargando articulaciones específicas y conduciendo al dolor y la degeneración temprana.",
    symptoms: [
      "Hip pain with walking, sitting, or climbing stairs",
      "Knee pain during activity or after prolonged sitting",
      "Inner or outer knee pain with a clicking or locking sensation",
      "Foot or arch pain — especially with first steps in the morning",
      "Ankle instability, chronic sprains, or swelling",
      "Leg length discrepancy or uneven gait",
    ],
    symptomsEs: [
      "Dolor de cadera al caminar, sentarse o subir escaleras",
      "Dolor de rodilla durante la actividad o después de sedestación prolongada",
      "Dolor de rodilla interna o externa con sensación de chasquido o bloqueo",
      "Dolor de pie o arco —especialmente con los primeros pasos en la mañana",
      "Inestabilidad de tobillo, esguinces crónicos o inflamación",
      "Discrepancia de longitud de pierna o marcha desigual",
    ],
    causes: [
      "Pelvic imbalance creating a functional leg length discrepancy",
      "Overpronation or supination of the foot altering knee and hip mechanics",
      "Prior ankle sprains leading to chronic instability",
      "Tight IT band, hip flexors, or piriformis muscle",
      "Degeneration of cartilage in the hip or knee",
      "Improper footwear or training surface",
    ],
    causesEs: [
      "Desequilibrio pélvico creando una discrepancia funcional de longitud de pierna",
      "Sobrepronación o supinación del pie alterando la mecánica de rodilla y cadera",
      "Esguinces de tobillo previos conduciendo a inestabilidad crónica",
      "Banda IT, flexores de cadera o músculo piriforme tensos",
      "Degeneración del cartílago en la cadera o rodilla",
      "Calzado impropio o superficie de entrenamiento",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a full lower extremity evaluation alongside spinal and pelvic assessment. SOT pelvic leveling is the foundation of lower extremity care — correcting the pelvic imbalance that drives uneven joint loading. Extremity adjustments to the hip, knee, and ankle restore proper joint mechanics and reduce pain. Gait analysis identifies any compensatory patterns that may be perpetuating the problem. Patients with lower extremity conditions often experience rapid improvement once the upstream pelvic cause is addressed.",
    chiropracticTreatmentEs:
      "El Dr. Foss realiza una evaluación completa de la extremidad inferior junto con la evaluación de la columna y la pelvis. El nivelado pélvico SOT es la base del cuidado de la extremidad inferior —corrigiendo el desequilibrio pélvico que impulsa la carga articular desigual. Los ajustes de extremidades a la cadera, rodilla y tobillo restauran la mecánica articular adecuada y reducen el dolor. El análisis de la marcha identifica cualquier patrón compensatorio que pueda estar perpetuando el problema.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "pregnancy-wellness",
    title: "Pregnancy Wellness",
    titleEs: "Bienestar en el Embarazo",
    image: "/images/conditions/pregnancy.webp",
    metaDescription:
      "Prenatal chiropractic care in San Antonio TX. Pura Vida Chiropractic helps pregnant mothers relieve low back pain, pelvic girdle pain, and sciatica, and optimize fetal positioning using Webster Technique.",
    metaDescriptionEs:
      "Cuidado quiropráctico prenatal en San Antonio TX. Pura Vida Chiropractic ayuda a las madres embarazadas a aliviar el dolor de espalda baja, el dolor de la cintura pélvica y la ciática.",
    intro:
      "Pregnancy places extraordinary demands on the spine and pelvis. Chiropractic care at Pura Vida Chiropractic keeps expectant mothers comfortable, mobile, and optimally positioned for an easier labor and delivery.",
    introEs:
      "El embarazo coloca demandas extraordinarias en la columna y la pelvis. El cuidado quiropráctico en Pura Vida Chiropractic mantiene a las futuras madres cómodas, móviles y óptimamente posicionadas para un parto y entrega más fácil.",
    whatIs:
      "During pregnancy, the body undergoes rapid structural changes — hormonal ligament laxity, a shifting center of gravity, and significant pelvic widening — that strain the lumbar spine, sacroiliac joints, and supporting musculature. Pelvic misalignment during pregnancy (intrauterine constraint) can also restrict the space available for the developing baby, potentially contributing to malpresentation and difficult labor. Prenatal chiropractic care, including the Webster Technique, is safe, gentle, and remarkably effective for managing pregnancy-related musculoskeletal pain and optimizing pelvic balance for both mother and baby.",
    whatIsEs:
      "Durante el embarazo, el cuerpo sufre cambios estructurales rápidos —laxitud ligamentaria hormonal, un cambio en el centro de gravedad y un ensanchamiento pélvico significativo— que ejercen tensión en la columna lumbar, las articulaciones sacroilíacas y la musculatura de apoyo. La desalineación pélvica durante el embarazo (restricción intrauterina) también puede restringir el espacio disponible para el bebé en desarrollo, contribuyendo potencialmente a malpresentación y parto difícil.",
    symptoms: [
      "Low back and sacral pain throughout pregnancy",
      "Pelvic girdle pain (symphysis pubis dysfunction)",
      "Sciatic nerve pain radiating into the buttock and leg",
      "Round ligament pain from pelvic tension",
      "Rib and mid-back pain from postural shifts",
      "Difficulty walking, turning in bed, or climbing stairs",
    ],
    symptomsEs: [
      "Dolor de espalda baja y sacral durante todo el embarazo",
      "Dolor de la cintura pélvica (disfunción de la sínfisis púbica)",
      "Dolor del nervio ciático irradiando hacia las nalgas y la pierna",
      "Dolor del ligamento redondo por tensión pélvica",
      "Dolor de costillas y espalda media por cambios posturales",
      "Dificultad para caminar, girar en la cama o subir escaleras",
    ],
    causes: [
      "Hormonal ligament laxity (relaxin) reducing pelvic stability",
      "Shifting center of gravity increasing lumbar lordosis",
      "Sacroiliac joint dysfunction from pelvic widening",
      "Rapid weight gain increasing spinal load",
      "Postural adaptations to accommodate growing uterus",
    ],
    causesEs: [
      "Laxitud ligamentaria hormonal (relaxina) reduciendo la estabilidad pélvica",
      "Cambio del centro de gravedad aumentando la lordosis lumbar",
      "Disfunción de la articulación sacroilíaca por ensanchamiento pélvico",
      "Ganancia de peso rápida aumentando la carga espinal",
      "Adaptaciones posturales para acomodar el útero en crecimiento",
    ],
    chiropracticTreatment:
      "Dr. Foss is trained in the Webster Technique, a specific chiropractic protocol for pregnant patients that balances the pelvis, reduces sacral subluxation, and relaxes the round ligaments and uterine muscles. This technique is safe throughout all trimesters and is performed with the patient comfortable on a specially designed pregnancy table with drop sections for the abdomen. Regular prenatal adjustments reduce pain, improve pelvic balance, and may support optimal fetal positioning as the due date approaches. Many of our prenatal patients also report shorter and less complicated labors.",
    chiropracticTreatmentEs:
      "El Dr. Foss está capacitado en la Técnica Webster, un protocolo quiropráctico específico para pacientes embarazadas que equilibra la pelvis, reduce la subluxación sacral y relaja los ligamentos redondos y los músculos uterinos. Esta técnica es segura durante todos los trimestres y se realiza con la paciente cómoda en una mesa de embarazo especialmente diseñada con secciones caídas para el abdomen. Los ajustes prenatales regulares reducen el dolor, mejoran el equilibrio pélvico y pueden apoyar el posicionamiento fetal óptimo cuando se acerca la fecha de vencimiento.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "plantar-fasciitis",
    title: "Plantar Fasciitis | Shockwave Therapy San Antonio TX",
    titleEs: "Fascitis Plantar | Terapia de Ondas de Choque San Antonio TX",
    image: "/images/conditions/footpain.jpg",
    metaDescription:
      "Plantar fasciitis treatment in San Antonio, TX. Pura Vida Chiropractic combines SOT chiropractic, Shockwave Therapy, SoftWave therapy San Antonio, and Class IV Laser to resolve heel and arch pain fast. Best chiropractor San Antonio near Stone Oak and NW Military Hwy.",
    metaDescriptionEs:
      "Tratamiento de la fascitis plantar en San Antonio, TX. Pura Vida Chiropractic combina quiropráctica SOT, terapia de ondas de choque, terapia SoftWave y láser Clase IV para resolver el dolor de talón y arco rápidamente.",
    intro:
      "Plantar fasciitis — stabbing heel and arch pain with your first steps in the morning — is one of the most common and frustrating foot conditions. At Pura Vida, we treat both the foot and the underlying pelvic mechanics driving it.",
    introEs:
      "La fascitis plantar —dolor punzante en el talón y arco con los primeros pasos en la mañana— es una de las condiciones del pie más comunes y frustrantes. En Pura Vida, tratamos tanto el pie como la mecánica pélvica subyacente que lo impulsa.",
    whatIs:
      "The plantar fascia is a thick band of connective tissue running along the bottom of the foot from the heel to the toes. When subjected to excessive tension — from overpronation, pelvic imbalance, tight calf muscles, or repetitive impact — the fascia develops microtears at its calcaneal (heel bone) insertion, leading to inflammation and pain. The characteristic morning pain occurs because the fascia tightens overnight, and the first weight-bearing steps re-tear the healing tissue. Traditional treatments address only the foot, but lasting resolution requires correcting the pelvic and lumbar mechanics that create abnormal foot loading.",
    whatIsEs:
      "La fascia plantar es una banda espesa de tejido conectivo que corre a lo largo de la parte inferior del pie desde el talón hasta los dedos. Cuando se somete a tensión excesiva —por sobrepronación, desequilibrio pélvico, músculos de pantorrilla tensos o impacto repetitivo— la fascia desarrolla microdesgarres en su inserción calcaneal (hueso del talón), conduciendo a inflamación y dolor. El dolor matutino característico ocurre porque la fascia se tensa durante la noche, y los primeros pasos con peso corporal desgarran nuevamente el tejido en cicatrización.",
    symptoms: [
      "Sharp heel pain with first steps in the morning",
      "Pain at the base of the heel or along the inner arch",
      "Discomfort that eases after walking for a few minutes but returns after rest",
      "Increased pain after prolonged standing, walking, or running",
      "Tenderness to pressure on the bottom of the heel",
      "Tightness in the calf and Achilles tendon",
    ],
    symptomsEs: [
      "Dolor agudo en el talón con los primeros pasos en la mañana",
      "Dolor en la base del talón o a lo largo del arco interno",
      "Incomodidad que se alivia después de caminar unos minutos pero reaparece después del descanso",
      "Aumento del dolor después de sedestación, caminata o carrera prolongadas",
      "Sensibilidad a la presión en la parte inferior del talón",
      "Tensión en la pantorrilla y el tendón de Aquiles",
    ],
    causes: [
      "Overpronation (flat feet) or high arches creating abnormal fascia tension",
      "Pelvic imbalance and functional leg length discrepancy",
      "Tight gastrocnemius and soleus muscles",
      "Sudden increase in activity or training volume",
      "Prolonged standing on hard surfaces",
      "Worn footwear without adequate arch support",
    ],
    causesEs: [
      "Sobrepronación (pies planos) o arcos altos creando tensión fascial anormal",
      "Desequilibrio pélvico y discrepancia funcional de longitud de pierna",
      "Músculos gastrocnemio y sóleo tensos",
      "Aumento repentino de la actividad o volumen de entrenamiento",
      "Sedestación prolongada en superficies duras",
      "Calzado desgastado sin soporte de arco adecuado",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses plantar fasciitis at multiple levels. Pelvic balancing via SOT corrects the upstream biomechanical cause of abnormal foot loading. Foot and ankle adjustments restore proper calcaneal alignment, reducing fascia tension. Soft-tissue work on the calf and Achilles tendon addresses the downstream muscle tightness that perpetuates the condition. This chiropractic foundation is then paired with regenerative therapies targeting the plantar fascia insertion directly to accelerate tissue healing.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la fascitis plantar en múltiples niveles. El equilibrado pélvico vía SOT corrige la causa biomecánica aguas arriba de la carga del pie anormal. Los ajustes de pie y tobillo restauran la alineación calcaneal adecuada, reduciendo la tensión fascial. El trabajo de tejidos blandos en la pantorrilla y el tendón de Aquiles aborda la tensión muscular aguas abajo que perpetúa la condición. Esta base quiroprácctica se combina luego con terapias regenerativas dirigidas directamente a la inserción de la fascia plantar para acelerar la curación de tejidos.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "postural-correction",
    title: "Postural Correction",
    titleEs: "Corrección Postural",
    image: "/images/conditions/postural-correction.webp",
    metaDescription:
      "Postural correction in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic to correct forward head posture, scoliosis, and spinal misalignment — improving posture and long-term health.",
    metaDescriptionEs:
      "Corrección postural en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT para corregir la postura de cabeza adelantada, la escoliosis y la desalineación espinal.",
    intro:
      "Poor posture is not just an aesthetic concern — it is a primary driver of pain, fatigue, and early spinal degeneration. Pura Vida Chiropractic uses structural chiropractic care to correct postural imbalances at their source.",
    introEs:
      "La mala postura no es solo una preocupación estética —es un impulsor principal del dolor, fatiga y degeneración espinal temprana. Pura Vida Chiropractic utiliza cuidado quiropráctico estructural para corregir los desequilibrios posturales en su fuente.",
    whatIs:
      "Posture reflects the cumulative position of the spine and body in space. When the spine deviates from its neutral curves — through forward head carriage, loss of cervical lordosis, hyperkyphosis (rounded upper back), or anterior pelvic tilt — it creates unequal mechanical stress on joints, discs, muscles, and nerves. For every inch the head moves forward, approximately 10 extra pounds of load are placed on the cervical spine. Over years, postural dysfunction drives early disc degeneration, chronic pain, reduced lung capacity, and decreased energy. Corrective chiropractic care restructures the spine back toward optimal alignment.",
    whatIsEs:
      "La postura refleja la posición acumulativa de la columna y el cuerpo en el espacio. Cuando la columna se desvía de sus curvas neutrales —a través de cabeza adelantada, pérdida de lordosis cervical, hipercifosis (espalda superior redondeada) o inclinación pélvica anterior— crea estrés mecánico desigual en articulaciones, discos, músculos y nervios. Por cada pulgada que se mueve la cabeza hacia adelante, se colocan aproximadamente 10 libras extras de carga en la columna cervical.",
    symptoms: [
      "Head positioned in front of the shoulders rather than above them",
      "Rounded upper back (kyphosis) or hump at the base of the neck",
      "One shoulder or hip noticeably higher than the other",
      "Neck, mid-back, or low back pain associated with prolonged sitting",
      "Fatigue and decreased energy from constant muscular compensation",
      "Decreased range of motion in the spine",
    ],
    symptomsEs: [
      "Cabeza posicionada en frente de los hombros en lugar de encima de ellos",
      "Espalda superior redondeada (cifosis) o joroba en la base del cuello",
      "Un hombro o cadera notablemente más alto que el otro",
      "Dolor de cuello, espalda media o espalda baja asociado con sedestación prolongada",
      "Fatiga y energía disminuida por compensación muscular constante",
      "Rango de movimiento disminuido en la columna",
    ],
    causes: [
      "Prolonged device use creating forward head posture",
      "Sedentary lifestyle weakening postural support muscles",
      "Carrying heavy bags on one shoulder repeatedly",
      "Old injuries that were never fully rehabilitated",
      "Structural scoliosis or pelvic obliquity",
      "Poor workstation ergonomics",
    ],
    causesEs: [
      "Uso prolongado de dispositivos creando postura de cabeza adelantada",
      "Estilo de vida sedentario debilitando músculos de soporte postural",
      "Llevar bolsas pesadas en un hombro repetidamente",
      "Lesiones antiguas que nunca fueron completamente rehabilitadas",
      "Escoliosis estructural u oblicuidad pélvica",
      "Ergonomía de la estación de trabajo pobre",
    ],
    chiropracticTreatment:
      "Postural correction at Pura Vida begins with a thorough postural analysis — measuring head position, shoulder height, spinal curves, and pelvic level. Dr. Foss uses SOT to systematically correct the pelvic, lumbar, thoracic, and cervical components of postural dysfunction in the correct biomechanical order. Home care exercises and lifestyle guidance are integrated into the care plan. Progress photos at regular intervals track improvement objectively. Most patients notice significant postural changes within the first 30–60 days of consistent care.",
    chiropracticTreatmentEs:
      "La corrección postural en Pura Vida comienza con un análisis postural exhaustivo —midiendo la posición de la cabeza, la altura de los hombros, las curvas espinales y el nivel pélvico. El Dr. Foss utiliza SOT para corregir sistemáticamente los componentes pélvicos, lumbares, torácicos y cervicales de la disfunción postural en el orden biomecánico correcto. Los ejercicios de cuidado en el hogar y la orientación del estilo de vida se integran en el plan de cuidado. Las fotos de progreso a intervalos regulares rastrean la mejora objetivamente.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "shoulder-arm-pain",
    title: "Shoulder & Arm Pain | Chiropractor San Antonio TX",
    titleEs: "Dolor de Hombro y Brazo | Quiropráctico Deportivo San Antonio TX",
    image: "/images/conditions/shoulderpain.jpg",
    metaDescription:
      "Shoulder and arm pain treatment in San Antonio, TX. Pura Vida Chiropractic — sports chiropractor San Antonio — addresses rotator cuff dysfunction, cervical nerve compression, and shoulder biomechanics. Chiropractor near me San Antonio serving Stone Oak, Castle Hills, and Alamo Heights.",
    metaDescriptionEs:
      "Tratamiento del dolor de hombro y brazo en San Antonio, TX. Pura Vida Chiropractic aborda la disfunción del manguito rotador, la compresión de nervios cervicales y la biomecánica del hombro.",
    intro:
      "Shoulder and arm pain can originate from the shoulder joint itself, the cervical spine, or both. Pura Vida Chiropractic evaluates the entire upper extremity chain to find and fix the real source of your pain.",
    introEs:
      "El dolor de hombro y brazo puede originarse en la articulación del hombro, la columna cervical o ambas. Pura Vida Chiropractic evalúa toda la cadena de la extremidad superior para encontrar y reparar la fuente real de su dolor.",
    whatIs:
      "The shoulder is the most mobile joint in the body, making it inherently vulnerable to instability and injury. Pain in the shoulder and arm may arise from rotator cuff tendinopathy or tears, shoulder impingement, AC joint dysfunction, bicep tendinitis, or frozen shoulder. Equally common — and frequently missed — is referred pain from the cervical spine. Nerve roots exiting C4–C8 supply sensation and motor control to the shoulder, arm, and hand, so a cervical disc herniation or facet joint irritation at any of these levels can cause pain, weakness, or numbness far from the spine. A comprehensive evaluation distinguishing local shoulder pathology from cervical referral is essential.",
    whatIsEs:
      "El hombro es la articulación más móvil del cuerpo, lo que la hace inherentemente vulnerable a la inestabilidad y la lesión. El dolor en el hombro y el brazo puede surgir de tendinopatía o desgarres del manguito rotador, pinzamiento del hombro, disfunción de la articulación AC, tendinitis del bíceps u hombro congelado. Igualmente común —y frecuentemente pasado por alto— es el dolor referido de la columna cervical. Las raíces nerviosas que salen de C4–C8 suministran sensación y control motor al hombro, brazo y mano.",
    symptoms: [
      "Pain at the outer shoulder, deltoid, or upper arm",
      "Difficulty raising the arm overhead or behind the back",
      "Pain worsening at night, especially lying on the affected side",
      "Radiating pain, tingling, or numbness into the forearm or hand",
      "Weakness in grip strength or arm lifting",
      "Clicking or catching sensation in the shoulder joint",
    ],
    symptomsEs: [
      "Dolor en el hombro externo, deltoides o brazo superior",
      "Dificultad para levantar el brazo por encima de la cabeza o detrás de la espalda",
      "Dolor que empeora en la noche, especialmente acostado sobre el lado afectado",
      "Dolor irradiado, hormigueo o entumecimiento en el antebrazo o mano",
      "Debilidad en la fuerza de agarre o levantamiento de brazo",
      "Sensación de chasquido o atrapamiento en la articulación del hombro",
    ],
    causes: [
      "Rotator cuff tendinopathy from repetitive overhead activity",
      "Cervical disc herniation (C4–C7) referring pain into the arm",
      "Shoulder impingement from poor scapular mechanics",
      "AC joint separation from trauma",
      "Thoracic outlet syndrome compressing brachial plexus nerves",
      "Poor posture rounding the shoulders forward",
    ],
    causesEs: [
      "Tendinopatía del manguito rotador por actividad repetitiva por encima de la cabeza",
      "Hernia discal cervical (C4–C7) refiriendo dolor hacia el brazo",
      "Pinzamiento del hombro por mecánica escapular pobre",
      "Separación de la articulación AC por trauma",
      "Síndrome del túnel torácico comprimiendo nervios del plexo braquial",
      "Postura pobre redondeando los hombros hacia adelante",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the cervical spine, thoracic spine, shoulder girdle, and shoulder joint as an integrated unit. SOT cervical adjustments decompress nerve roots that may be referring pain into the arm. Shoulder and AC joint adjustments restore proper glenohumeral and scapulothoracic mechanics. Myofascial release targeting the rotator cuff, pectorals, and upper trapezius addresses the muscular contributors to shoulder dysfunction. This combined approach resolves pain faster and more thoroughly than treating only the shoulder in isolation.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna cervical, la columna torácica, la cintura del hombro y la articulación del hombro como una unidad integrada. Los ajustes cervicales SOT descomprimen las raíces nerviosas que pueden estar refiriendo dolor hacia el brazo. Los ajustes de la articulación del hombro y AC restauran la mecánica glenohumeral y escapulotorácica adecuada. La liberación miofascial dirigida al manguito rotador, pectorales y trapecio superior aborda los contribuyentes musculares a la disfunción del hombro.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "migraines",
    title: "Migraines",
    titleEs: "Migrañas",
    image: "/images/conditions/migrane.jpg",
    metaDescription:
      "Migraine treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT chiropractic and Class IV Laser to reduce migraine frequency and severity naturally.",
    metaDescriptionEs:
      "Tratamiento de migrañas en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT cervical superior y láser Clase IV para reducir la frecuencia e intensidad de las migrañas de forma natural.",
    intro:
      "Migraines are not just bad headaches — they are complex neurological events often triggered by spinal and vascular dysfunction that chiropractic care can directly address. Many of our migraine patients achieve significant reductions in frequency and severity.",
    introEs:
      "Las migrañas no son solo dolores de cabeza intensos —son eventos neurológicos complejos a menudo desencadenados por disfunción espinal y vascular que el cuidado quiropráctico puede abordar directamente. Muchos de nuestros pacientes con migrañas logran reducciones significativas en frecuencia e intensidad.",
    whatIs:
      "Migraines are recurrent headache attacks lasting 4–72 hours, often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. The trigeminovascular system — involving the trigeminal nerve and its connections to blood vessels in the brain — plays a central role in migraine generation. Upper cervical subluxations, particularly at the atlas (C1) and axis (C2), directly influence trigeminal nerve function, vertebral artery blood flow, and brainstem signaling — all of which are implicated in migraine. Research consistently shows that upper cervical chiropractic care reduces migraine frequency and severity in a significant percentage of patients.",
    whatIsEs:
      "Las migrañas son ataques de dolores de cabeza recurrentes que duran 4–72 horas, a menudo acompañados de náusea, vómito y sensibilidad extrema a la luz y al sonido. El sistema trigeminov ascular —que involucra el nervio trigémino y sus conexiones con los vasos sanguíneos en el cerebro— juega un papel central en la generación de migrañas. Las subluxaciones cervicales superiores, particularmente en el atlas (C1) y axis (C2), influyen directamente en la función del nervio trigémino, el flujo de sangre de la arteria vertebral y la señalización del tallo encefálico.",
    symptoms: [
      "Throbbing or pulsating head pain, usually on one side",
      "Nausea, vomiting, or loss of appetite",
      "Extreme sensitivity to light (photophobia) and sound (phonophobia)",
      "Visual disturbances (aura) — zigzag lines, blind spots, or flashing lights",
      "Pain lasting 4–72 hours",
      "Postdrome ('migraine hangover') — fatigue, brain fog after the attack",
    ],
    symptomsEs: [
      "Dolor de cabeza pulsátil o palpitante, generalmente en un lado",
      "Náusea, vómito o pérdida de apetito",
      "Sensibilidad extrema a la luz (fotofobia) y al sonido (fonofobia)",
      "Disturbios visuales (aura) —líneas en zigzag, puntos ciegos o luces parpadeantes",
      "Dolor que dura 4–72 horas",
      "Posdroma ('resaca de migraña') —fatiga, confusión mental después del ataque",
    ],
    causes: [
      "Upper cervical vertebral subluxation affecting trigeminal nerve function",
      "Vertebral artery compression or reduced blood flow",
      "Hormonal fluctuations (especially estrogen-driven migraines)",
      "Dietary triggers (tyramine, alcohol, nitrates, MSG)",
      "Sleep disruption and circadian rhythm changes",
      "Emotional stress and its neurological effects",
    ],
    causesEs: [
      "Subluxación vertebral cervical superior afectando la función del nervio trigémino",
      "Compresión de la arteria vertebral o flujo de sangre reducido",
      "Fluctuaciones hormonales (especialmente migrañas impulsadas por estrógeno)",
      "Desencadenantes dietéticos (tiramina, alcohol, nitratos, MSG)",
      "Disrupción del sueño y cambios del ritmo circadiano",
      "Estrés emocional y sus efectos neurológicos",
    ],
    chiropracticTreatment:
      "The upper cervical spine — C1 and C2 — is the primary focus of migraine care at Pura Vida. These vertebrae are in direct proximity to the trigeminal nucleus and vertebral arteries, and their misalignment is a well-documented migraine trigger. Dr. Foss uses precise, gentle SOT craniosacral protocols and upper cervical corrections to normalize atlas positioning, restore vertebral artery flow, and reduce trigeminal nerve irritation. Many patients report that migraine attacks decrease in both frequency and intensity within the first few weeks of care, with some achieving complete resolution.",
    chiropracticTreatmentEs:
      "La columna cervical superior —C1 y C2— es el enfoque principal del cuidado de las migrañas en Pura Vida. Estas vértebras están en proximidad directa al núcleo trigémino y las arterias vertebrales, y su desalineación es un desencadenante de migraña bien documentado. El Dr. Foss utiliza protocolos craneosacrales SOT precisos y gentiles y correcciones cervicales superiores para normalizar el posicionamiento del atlas, restaurar el flujo de la arteria vertebral y reducir la irritación del nervio trigémino.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "vertigo",
    title: "Vertigo",
    titleEs: "Vértigo",
    image: "/images/conditions/vertigo.jpg",
    metaDescription:
      "Vertigo treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT and craniosacral therapy to resolve vertigo and dizziness caused by cervicogenic and BPPV dysfunction.",
    metaDescriptionEs:
      "Tratamiento del vértigo en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT cervical superior y terapia craneosacral para resolver el vértigo y los mareos causados por disfunción cervicogénica y BPPV.",
    intro:
      "Vertigo — the sensation that the room is spinning — can be profoundly disabling. Upper cervical chiropractic care at Pura Vida is highly effective for the most common types of vertigo, often producing rapid and lasting relief.",
    introEs:
      "El vértigo —la sensación de que la habitación gira— puede ser profundamente incapacitante. El cuidado quiropráctico cervical superior en Pura Vida es altamente efectivo para los tipos más comunes de vértigo, a menudo produciendo alivio rápido y duradero.",
    whatIs:
      "Vertigo is the illusion of movement — either the patient feels as if they are spinning, or the environment appears to spin around them. The most common cause is benign paroxysmal positional vertigo (BPPV), where calcium carbonate crystals (otoconia) become displaced in the semicircular canals of the inner ear. Cervicogenic vertigo arises from dysfunction in the upper cervical spine — C1 and C2 proprioceptors send signals to the vestibular system, and their misalignment creates conflicting sensory input perceived as spinning. Chiropractic care addresses both mechanisms effectively through upper cervical adjustments and craniosacral therapy.",
    whatIsEs:
      "El vértigo es la ilusión de movimiento —el paciente siente que está girando o el ambiente parece girar alrededor de él. La causa más común es el vértigo posicional paroxístico benigno (BPPV), donde los cristales de carbonato de calcio (otoconias) se desplazan en los canales semicirculares del oído interno. El vértigo cervicogénico surge de la disfunción en la columna cervical superior —los propioceptores de C1 y C2 envían señales al sistema vestibular, y su desalineación crea información sensorial conflictiva percibida como spinning. El cuidado quiropráctico aborda ambos mecanismos efectivamente a través de ajustes cervicales superiores y terapia craneosacral.",
    symptoms: [
      "Spinning sensation triggered by head movement or position change",
      "Nausea and vomiting accompanying dizziness",
      "Loss of balance or unsteady gait",
      "Nystagmus (involuntary eye movement during an episode)",
      "Sensation of pressure or fullness in the ear",
      "Episodes lasting seconds (BPPV) to minutes or hours (Menière's)",
    ],
    symptomsEs: [
      "Sensación de giro desencadenada por movimiento de cabeza o cambio de posición",
      "Náusea y vómito acompañando mareos",
      "Pérdida de equilibrio o marcha inestable",
      "Nistagmo (movimiento involuntario de los ojos durante un episodio)",
      "Sensación de presión o plenitud en el oído",
      "Episodios que duran segundos (BPPV) a minutos u horas (Menière's)",
    ],
    causes: [
      "Displaced otoconia in the semicircular canals (BPPV)",
      "Upper cervical subluxation disrupting vestibular proprioception",
      "Craniosacral restriction at the temporal bones affecting inner ear",
      "Menière's disease from endolymphatic hydrops",
      "Head injury or whiplash disturbing inner ear crystals",
      "Vertebrobasilar insufficiency from cervical misalignment",
    ],
    causesEs: [
      "Otoconias desplazadas en los canales semicirculares (BPPV)",
      "Subluxación cervical superior interrumpiendo la propiocepción vestibular",
      "Restricción craneosacral en los huesos temporales afectando el oído interno",
      "Enfermedad de Menière por hidrops endolinfático",
      "Lesión de cabeza o latigazo cervical perturbando los cristales del oído interno",
      "Insuficiencia vertebrobasilar por desalineación cervical",
    ],
    chiropracticTreatment:
      "Dr. Foss assesses the upper cervical spine and temporal bones for dysfunction contributing to vertigo. SOT craniosacral corrections at the occiput, atlas, and temporal bones normalize proprioceptive signals from the cervical spine to the vestibular system. Canalith repositioning maneuvers (Epley or Semont) are performed for BPPV to guide displaced crystals back to their proper location. Most BPPV patients experience resolution within one to three sessions. Cervicogenic vertigo responds well to sustained upper cervical care over several weeks.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna cervical superior y los huesos temporales para identificar la disfunción que contribuye al vértigo. Las correcciones craneosacrales SOT en el occipucio, atlas y huesos temporales normalizan las señales propioceptivas de la columna cervical al sistema vestibular. Las maniobras de reposicionamiento de canalitos (Epley o Semont) se realizan para BPPV para guiar los cristales desplazados de vuelta a su ubicación adecuada. La mayoría de los pacientes con BPPV experimentan resolución en una a tres sesiones. El vértigo cervicogénico responde bien al cuidado cervical superior sostenido durante varias semanas.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "dizziness",
    title: "Dizziness",
    titleEs: "Mareos",
    image: "/images/conditions/dizziness.jpg",
    metaDescription:
      "Dizziness treatment in San Antonio TX. Pura Vida Chiropractic addresses cervicogenic dizziness and lightheadedness through upper cervical SOT and craniosacral therapy.",
    metaDescriptionEs:
      "Tratamiento de mareos en San Antonio TX. Pura Vida Chiropractic aborda mareos cervicogénicos y sensación de desmayo a través de quiropráctica SOT cervical superior y terapia craneosacral.",
    intro:
      "Dizziness — feeling lightheaded, unsteady, or off-balance — is a symptom with many causes, including cervical spine dysfunction that chiropractic care directly addresses. Our evaluation identifies whether your dizziness is spinal in origin.",
    introEs:
      "Los mareos —sentirse aturdido, inestable o desequilibrado— es un síntoma con muchas causas, incluyendo disfunción de la columna cervical que el cuidado quiropráctico aborda directamente. Nuestra evaluación identifica si los mareos son de origen espinal.",
    whatIs:
      "Dizziness is a broad term encompassing lightheadedness, unsteadiness, pre-syncope, and the spinning sensation of vertigo. Unlike true vertigo, general dizziness often arises from autonomic imbalances, reduced cerebral blood flow, or proprioceptive errors from the cervical spine. Cervicogenic dizziness specifically results from abnormal afferent signals from the upper cervical joint receptors, which confuse the brain's spatial orientation system. Poor posture, whiplash, and chronic upper cervical subluxation are common contributors. Addressing the cervical spine often resolves this type of dizziness effectively.",
    whatIsEs:
      "Los mareos son un término amplio que abarca aturdimiento, inestabilidad, presíncope y la sensación de giro del vértigo. A diferencia del vértigo verdadero, los mareos generales a menudo surgen de desequilibrios autonómicos, flujo sanguíneo cerebral reducido o errores propioceptivos de la columna cervical. Los mareos cervicogénicos específicamente resultan de señales aferentes anormales de los receptores articulares cervicales superiores, que confunden el sistema de orientación espacial del cerebro. La postura pobre, el latigazo cervical y la subluxación cervical superior crónica son contribuyentes comunes. Abordar la columna cervical a menudo resuelve este tipo de mareos de manera efectiva.",
    symptoms: [
      "Lightheadedness or feeling faint with position changes",
      "Unsteadiness when walking or in crowds",
      "Dizziness that worsens with neck movement",
      "Brain fog or difficulty concentrating accompanying dizziness",
      "Headache or neck pain coinciding with dizzy spells",
      "Visual disturbances during episodes",
    ],
    symptomsEs: [
      "Aturdimiento o sensación de desmayo con cambios de posición",
      "Inestabilidad al caminar o en multitudes",
      "Mareos que empeoran con el movimiento del cuello",
      "Confusión mental o dificultad para concentrarse acompañando mareos",
      "Dolor de cabeza o cuello coincidiendo con episodios de mareo",
      "Disturbios visuales durante episodios",
    ],
    causes: [
      "Upper cervical subluxation disrupting proprioceptive signaling",
      "Vertebrobasilar insufficiency from cervical artery compromise",
      "Autonomic dysregulation related to spinal dysfunction",
      "Dehydration and orthostatic hypotension",
      "Inner ear dysfunction (see also: Vertigo)",
      "Medication side effects or cardiovascular factors",
    ],
    causesEs: [
      "Subluxación cervical superior interrumpiendo la señalización propioceptiva",
      "Insuficiencia vertebrobasilar por compromiso de arteria cervical",
      "Disregulación autonómica relacionada con disfunción espinal",
      "Deshidratación e hipotensión ortostática",
      "Disfunción del oído interno (ver también: Vértigo)",
      "Efectos secundarios de medicamentos o factores cardiovasculares",
    ],
    chiropracticTreatment:
      "For dizziness that is cervicogenic in origin, Dr. Foss focuses on the upper cervical spine and craniosacral system. SOT atlas and axis corrections restore normal proprioceptive signaling from the neck to the vestibular and visual systems. Craniosacral evaluation identifies any restrictions at the occiput and temporal bones that may be perpetuating symptoms. Patients with cervicogenic dizziness typically see improvement within a few weeks of consistent upper cervical care. A thorough history and examination helps distinguish spinal dizziness from other causes that may require additional co-management.",
    chiropracticTreatmentEs:
      "Para mareos de origen cervicogénico, el Dr. Foss se enfoca en la columna cervical superior y el sistema craneosacral. Las correcciones SOT del atlas y axis restauran la señalización propioceptiva normal desde el cuello a los sistemas vestibular y visual. La evaluación craneosacral identifica cualquier restricción en el occipucio y huesos temporales que pueda estar perpetuando los síntomas. Los pacientes con mareos cervicogénicos típicamente ven mejora dentro de algunas semanas de cuidado cervical superior consistente. Un historial exhaustivo y examen ayudan a distinguir mareos espinales de otras causas que pueden requerir co-manejo adicional.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "tinnitus",
    title: "Tinnitus",
    titleEs: "Tinnitus",
    image: "/images/conditions/vertigo.jpg",
    metaDescription:
      "Tinnitus treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT and craniosacral therapy to address the cervicogenic and TMJ causes of ringing in the ears.",
    metaDescriptionEs:
      "Tratamiento del tinnitus en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT cervical superior y terapia craneosacral para abordar las causas cervicogénicas y ATM del zumbido en los oídos.",
    intro:
      "Ringing, buzzing, or hissing in the ears — tinnitus — is often connected to upper cervical spine dysfunction and TMJ problems that chiropractic care can address. Many tinnitus patients find significant improvement through structural correction.",
    introEs:
      "El zumbido, silbido o sonido sibilante en los oídos —tinnitus— a menudo está conectado con la disfunción de la columna cervical superior y problemas de ATM que el cuidado quiropráctico puede abordar. Muchos pacientes con tinnitus encuentran una mejora significativa a través de la corrección estructural.",
    whatIs:
      "Tinnitus is the perception of sound — ringing, buzzing, hissing, or clicking — in the absence of an external source. While noise-induced hearing loss and acoustic neuroma are well-known causes, a significant subset of tinnitus cases is somatic in origin — meaning it arises from dysfunction in the musculoskeletal system, particularly the upper cervical spine and temporomandibular joint. The cochlear nerve and auditory brainstem pathways are in close proximity to the upper cervical spine and temporal bones, and misalignment at these structures can directly modulate tinnitus perception. SOT chiropractic care targeting these regions offers measurable relief for many tinnitus sufferers.",
    whatIsEs:
      "El tinnitus es la percepción de sonido —zumbido, silbido, sonido sibilante o chasquido— en ausencia de una fuente externa. Aunque la pérdida auditiva inducida por ruido y el neuroma acústico son causas bien conocidas, un subconjunto significativo de casos de tinnitus es de origen somático —significa que surge de la disfunción en el sistema musculoesquelético, particularmente la columna cervical superior y la articulación temporomandibular. El nervio coclear y las vías del tallo encefálico auditivo están en estrecha proximidad a la columna cervical superior y los huesos temporales, y la desalineación en estas estructuras puede modular directamente la percepción del tinnitus.",
    symptoms: [
      "Constant or intermittent ringing, buzzing, or hissing in one or both ears",
      "Tinnitus that changes with neck or jaw position",
      "Tinnitus accompanied by ear fullness or pressure",
      "Difficulty concentrating or sleeping due to the constant noise",
      "Accompanying neck pain, jaw pain, or headache",
      "Tinnitus that began after whiplash or dental work",
    ],
    symptomsEs: [
      "Zumbido, silbido o sonido sibilante constante o intermitente en uno o ambos oídos",
      "Tinnitus que cambia con la posición del cuello o mandíbula",
      "Tinnitus acompañado de plenitud o presión en el oído",
      "Dificultad para concentrarse o dormir debido al ruido constante",
      "Dolor de cuello, mandíbula o dolor de cabeza acompañante",
      "Tinnitus que comenzó después de latigazo cervical o trabajo dental",
    ],
    causes: [
      "Upper cervical subluxation (C1–C2) affecting cochlear nerve pathways",
      "Temporal bone restriction disrupting inner ear mechanics",
      "TMJ dysfunction referring tension to the ear structures",
      "Noise-induced cochlear damage",
      "Whiplash or head trauma",
      "Sinus congestion and Eustachian tube dysfunction",
    ],
    causesEs: [
      "Subluxación cervical superior (C1–C2) afectando las vías del nervio coclear",
      "Restricción del hueso temporal interrumpiendo la mecánica del oído interno",
      "Disfunción ATM refiriendo tensión a las estructuras del oído",
      "Daño coclear inducido por ruido",
      "Latigazo cervical o trauma de cabeza",
      "Congestión sinusal y disfunción de la trompa de Eustaquio",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the upper cervical spine, temporal bones, and TMJ for dysfunction contributing to tinnitus. SOT craniosacral corrections at the temporal bones — which form the bony housing of the inner ear — can directly influence tinnitus perception. Upper cervical adjustments at C1 and C2 reduce neurological interference with the cochlear nerve pathways. TMJ corrections address the jaw-ear connection that frequently perpetuates somatic tinnitus. While results vary depending on the underlying cause, many patients with cervicogenic or somatosensory tinnitus experience meaningful reduction in intensity.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna cervical superior, los huesos temporales y la ATM para identificar la disfunción que contribuye al tinnitus. Las correcciones craneosacrales SOT en los huesos temporales —que forman la carcasa ósea del oído interno— pueden influir directamente en la percepción del tinnitus. Los ajustes cervicales superiores en C1 y C2 reducen la interferencia neurológica con las vías del nervio coclear. Las correcciones ATM abordan la conexión mandíbula-oído que frecuentemente perpetúa el tinnitus somático. Aunque los resultados varían según la causa subyacente, muchos pacientes con tinnitus cervicogénico o somatosensorial experimentan una reducción significativa en intensidad.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sinus-congestion",
    title: "Sinus Congestion",
    titleEs: "Congestión Sinusal",
    image: "/images/conditions/sinuscongestion.jpg",
    metaDescription:
      "Sinus congestion relief in San Antonio TX. Pura Vida Chiropractic uses craniosacral therapy and SOT to improve sinus drainage and reduce chronic nasal congestion.",
    metaDescriptionEs:
      "Alivio de congestión sinusal en San Antonio TX. Pura Vida Chiropractic utiliza terapia craneosacral y SOT para mejorar el drenaje sinusal y reducir la congestión nasal crónica.",
    intro:
      "Chronic sinus congestion often persists despite repeated antibiotic courses — because the underlying cause is structural and neurological, not just infectious. SOT craniosacral therapy at Pura Vida provides drugless sinus relief.",
    introEs:
      "La congestión sinusal crónica a menudo persiste a pesar de cursos repetidos de antibióticos —porque la causa subyacente es estructural y neurológica, no solo infecciosa. La terapia craneosacral SOT en Pura Vida proporciona alivio sinusal sin medicamentos.",
    whatIs:
      "Sinus congestion occurs when the mucous membranes lining the paranasal sinuses become inflamed and swollen, impairing normal drainage. The craniosacral system plays a direct role in sinus health: the sphenoid and ethmoid bones, which form the walls of the sinuses, must move freely for proper sinus drainage. When craniosacral motion is restricted — from trauma, birth stress, or chronic subluxation — drainage is impaired and congestion becomes chronic. Additionally, the autonomic nervous system regulates mucosal secretion, and upper cervical subluxations that disrupt autonomic balance can perpetuate congestion independent of infection.",
    whatIsEs:
      "La congestión sinusal ocurre cuando las membranas mucosas que recubren los senos paranasales se inflaman e hinchan, afectando el drenaje normal. El sistema craneosacral juega un papel directo en la salud sinusal: los huesos esfenoides y etmoides, que forman las paredes de los senos, deben moverse libremente para el drenaje sinusal adecuado. Cuando el movimiento craneosacral está restringido —por trauma, estrés de nacimiento o subluxación crónica— el drenaje se afecta y la congestión se vuelve crónica. Además, el sistema nervioso autónomo regula la secreción mucosa, y las subluxaciones cervicales superiores que interrumpen el equilibrio autonómico pueden perpetuar la congestión independientemente de la infección.",
    symptoms: [
      "Persistent nasal stuffiness or blockage",
      "Facial pressure or pain around the forehead, cheeks, or eyes",
      "Post-nasal drip leading to chronic throat clearing",
      "Reduced sense of smell or taste",
      "Chronic low-grade sinus headaches",
      "Congestion that recurs despite multiple antibiotic courses",
    ],
    symptomsEs: [
      "Congestión nasal persistente u obstrucción",
      "Presión facial o dolor alrededor de la frente, mejillas u ojos",
      "Goteo posnasal conduciendo a aclaramiento crónico de garganta",
      "Sentido reducido del olfato o gusto",
      "Dolores de cabeza sinusales crónicos de bajo grado",
      "Congestión que reaparece a pesar de múltiples cursos de antibióticos",
    ],
    causes: [
      "Craniosacral restriction at the sphenoid or ethmoid bones",
      "Upper cervical subluxation dysregulating sinus nerve supply",
      "Allergies and environmental irritants",
      "Deviated nasal septum reducing drainage capacity",
      "Chronic infections that scar and narrow drainage pathways",
      "Polyp formation from persistent mucosal inflammation",
    ],
    causesEs: [
      "Restricción craneosacral en los huesos esfenoides o etmoides",
      "Subluxación cervical superior desregulando el suministro nervioso sinusal",
      "Alergias e irritantes ambientales",
      "Tabique nasal desviado reduciendo la capacidad de drenaje",
      "Infecciones crónicas que dejan cicatrices y estrechan las vías de drenaje",
      "Formación de pólipos por inflamación mucosa persistente",
    ],
    chiropracticTreatment:
      "SOT craniosacral corrections at the sphenoid, ethmoid, frontal, and temporal bones restore normal rhythmic motion through the cranial system, directly improving sinus drainage pathways. Dr. Foss may also apply specific intraoral techniques (when indicated) to mobilize the palatine and vomer bones, further facilitating drainage. Upper cervical adjustments normalize autonomic nerve tone, reducing the chronic mucosal secretion driven by sympathetic nervous system overactivity. Many patients notice immediate improvement in breathing and drainage following craniosacral treatment.",
    chiropracticTreatmentEs:
      "Las correcciones craneosacrales SOT en los huesos esfenoides, etmoides, frontales y temporales restauran el movimiento rítmico normal a través del sistema craneal, mejorando directamente las vías de drenaje sinusal. El Dr. Foss puede aplicar técnicas intraorales específicas (cuando está indicado) para movilizar los huesos palatinos y vómer, facilitando aún más el drenaje. Los ajustes cervicales superiores normalizan el tono del nervio autonómico, reduciendo la secreción mucosa crónica impulsada por la hiperactividad del sistema nervioso simpático. Muchos pacientes notan una mejora inmediata en la respiración y el drenaje después del tratamiento craneosacral.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "ear-infections",
    title: "Ear Infections",
    titleEs: "Infecciones del Oído",
    image: "/images/conditions/sinuscongestion.jpg",
    metaDescription:
      "Ear infection care in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to improve Eustachian tube drainage, reducing the frequency of ear infections in children and adults.",
    metaDescriptionEs:
      "Cuidado de infecciones del oído en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT y terapia craneosacral para mejorar el drenaje de la trompa de Eustaquio, reduciendo la frecuencia de infecciones del oído.",
    intro:
      "Recurrent ear infections — especially in children — often have a structural cause: impaired Eustachian tube drainage from upper cervical and craniosacral dysfunction. Chiropractic care addresses this root cause without repeated antibiotics.",
    introEs:
      "Las infecciones recurrentes del oído —especialmente en niños— a menudo tienen una causa estructural: drenaje deficiente de la trompa de Eustaquio por disfunción cervical superior y craneosacral. El cuidado quiropráctico aborda esta causa raíz sin antibióticos repetidos.",
    whatIs:
      "Ear infections (otitis media) occur when fluid accumulates in the middle ear and becomes infected. The Eustachian tube, which connects the middle ear to the back of the throat, normally drains this fluid continuously. When the tube is blocked — by dysfunction in the surrounding craniosacral system, upper cervical misalignment, or chronic mucosal swelling — fluid builds up and becomes a breeding ground for bacteria. Children are particularly susceptible because their Eustachian tubes are shorter and more horizontal. Upper cervical chiropractic care and craniosacral therapy improve Eustachian tube function and dramatically reduce the recurrence of ear infections.",
    whatIsEs:
      "Las infecciones del oído (otitis media) ocurren cuando el líquido se acumula en el oído medio y se infecta. La trompa de Eustaquio, que conecta el oído medio con la parte posterior de la garganta, normalmente drena este líquido continuamente. Cuando el tubo está bloqueado —por disfunción del sistema craneosacral circundante, desalineación cervical superior o inflamación mucosa crónica— el líquido se acumula y se convierte en un caldo de cultivo para bacterias. Los niños son particularmente susceptibles porque sus trompas de Eustaquio son más cortas y más horizontales. El cuidado quiropráctico cervical superior y la terapia craneosacral mejoran la función de la trompa de Eustaquio y reducen dramáticamente la recurrencia de infecciones del oído.",
    symptoms: [
      "Ear pain (otalgia) — especially when lying down",
      "Tugging or pulling at the ear (in infants and toddlers)",
      "Fluid draining from the ear",
      "Muffled hearing or apparent hearing loss",
      "Fever accompanying the infection",
      "Recurrent infections requiring repeated antibiotic courses",
    ],
    symptomsEs: [
      "Dolor de oído (otalgia) —especialmente al acostarse",
      "Tirar o jalar la oreja (en bebés y niños pequeños)",
      "Líquido drenando del oído",
      "Audición apagada o pérdida auditiva aparente",
      "Fiebre acompañando la infección",
      "Infecciones recurrentes que requieren cursos de antibióticos repetidos",
    ],
    causes: [
      "Eustachian tube dysfunction from craniosacral restriction",
      "Upper cervical subluxation impairing lymphatic drainage from the head",
      "Chronic mucosal swelling from allergies or chronic congestion",
      "Exposure to secondhand smoke",
      "Daycare attendance increasing pathogen exposure",
      "Bottle-feeding while lying flat (for infants)",
    ],
    causesEs: [
      "Disfunción de la trompa de Eustaquio por restricción craneosacral",
      "Subluxación cervical superior afectando el drenaje linfático de la cabeza",
      "Inflamación mucosa crónica por alergias o congestión crónica",
      "Exposición al humo de segunda mano",
      "Asistencia a guardería aumentando la exposición a patógenos",
      "Alimentación con biberón mientras está acostado (para bebés)",
    ],
    chiropracticTreatment:
      "For children with recurrent ear infections, Dr. Foss applies extremely gentle craniosacral corrections targeting the occiput, temporal bones, and upper cervical spine (C1–C2). These gentle corrections restore normal motion through the craniosacral system, improve Eustachian tube drainage, and normalize autonomic nerve supply to the middle ear. The technique used for children is very light-touch — often no more pressure than a dime resting on the skin. Parents are often amazed at how quickly ear infection frequency decreases following chiropractic care. This approach also reduces the need for repeated antibiotic courses and ear tubes.",
    chiropracticTreatmentEs:
      "Para los niños con infecciones recurrentes del oído, el Dr. Foss aplica correcciones craneosacrales extremadamente suaves dirigidas al occipucio, huesos temporales y columna cervical superior (C1–C2). Estas correcciones suaves restauran el movimiento normal a través del sistema craneosacral, mejoran el drenaje de la trompa de Eustaquio y normalizan el suministro nervioso autónomo al oído medio. La técnica utilizada para niños es muy ligera —a menudo sin más presión que una moneda descansando en la piel. Los padres a menudo quedan asombrados de lo rápidamente que disminuye la frecuencia de infecciones del oído después del cuidado quiropráctico. Este enfoque también reduce la necesidad de cursos de antibióticos repetidos y tubos auriculares.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "chronic-fatigue-syndrome",
    title: "Chronic Fatigue Syndrome",
    titleEs: "Síndrome de Fatiga Crónica",
    image: "/images/conditions/chronicfatiguesyndrome.jpg",
    metaDescription:
      "Chronic fatigue syndrome care in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic and Class IV Laser to address neurological dysfunction contributing to chronic fatigue.",
    metaDescriptionEs:
      "Cuidado del síndrome de fatiga crónica en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT y láser Clase IV para abordar la disfunción neurológica que contribuye a la fatiga crónica.",
    intro:
      "Chronic fatigue syndrome is a complex, multi-system condition that conventional medicine often struggles to treat effectively. Pura Vida Chiropractic addresses the neurological and spinal components that drive fatigue, brain fog, and systemic dysfunction.",
    introEs:
      "El síndrome de fatiga crónica es una condición compleja, multi-sistémica que la medicina convencional a menudo lucha por tratar efectivamente. Pura Vida Chiropractic aborda los componentes neurológicos y espinales que impulsan la fatiga, confusión mental y disfunción sistémica.",
    whatIs:
      "Chronic fatigue syndrome (CFS), also known as myalgic encephalomyelitis (ME/CFS), is characterized by profound, persistent fatigue that is not relieved by rest and is worsened by physical or mental exertion (post-exertional malaise). The condition involves dysregulation of the autonomic nervous system, immune system, and cellular energy metabolism. Upper cervical subluxations — particularly at the atlas — can compress the brainstem, impair vagal nerve function, and disrupt the autonomic balance that governs energy production, sleep, and immune regulation. Restoring proper neurological function through gentle chiropractic care is a meaningful component of a comprehensive CFS treatment approach.",
    whatIsEs:
      "El síndrome de fatiga crónica (SFC), también conocido como encefalomielitis miálgica (ME/SFC), se caracteriza por fatiga profunda y persistente que no se alivia con el descanso y se agrava por esfuerzo físico o mental (malestar post-exertivo). La condición involucra desregulación del sistema nervioso autónomo, sistema inmunológico y metabolismo de energía celular. Las subluxaciones cervicales superiores —particularmente en el atlas— pueden comprimir el tallo encefálico, afectar la función del nervio vagal y interrumpir el equilibrio autonómico que rige la producción de energía, sueño y regulación inmunológica. Restaurar la función neurológica adecuada a través del cuidado quiropráctico suave es un componente significativo de un enfoque de tratamiento integral del SFC.",
    symptoms: [
      "Profound, unexplained fatigue lasting more than 6 months",
      "Post-exertional malaise — symptoms worsen after activity",
      "Unrefreshing sleep and difficulty maintaining sleep",
      "Cognitive impairment ('brain fog') — memory and concentration problems",
      "Orthostatic intolerance — symptoms worsen when standing",
      "Muscle pain, joint pain, and headaches",
    ],
    symptomsEs: [
      "Fatiga profunda e inexplicada que dura más de 6 meses",
      "Malestar post-exertivo —los síntomas empeoran después de actividad",
      "Sueño no reparador y dificultad para mantener el sueño",
      "Deterioro cognitivo ('confusión mental') —problemas de memoria y concentración",
      "Intolerancia ortostática —los síntomas empeoran al ponerse de pie",
      "Dolor muscular, dolor articular y dolores de cabeza",
    ],
    causes: [
      "Autonomic nervous system dysfunction (vagal insufficiency)",
      "Post-viral immune dysregulation",
      "Upper cervical subluxation compressing brainstem function",
      "Mitochondrial dysfunction impairing cellular energy production",
      "Hypothalamic-pituitary-adrenal axis dysregulation",
      "Sleep disorder and circadian rhythm disruption",
    ],
    causesEs: [
      "Disfunción del sistema nervioso autónomo (insuficiencia vagal)",
      "Desregulación inmunológica post-viral",
      "Subluxación cervical superior comprimiendo la función del tallo encefálico",
      "Disfunción mitocondrial afectando la producción de energía celular",
      "Desregulación del eje hipotalámico-hipofisario-suprarrenal",
      "Trastorno del sueño e interrupción del ritmo circadiano",
    ],
    chiropracticTreatment:
      "Dr. Foss uses the gentlest SOT protocols for CFS patients, who are sensitive to any overtreatment. The focus is on upper cervical correction — particularly C1 — to decompress brainstem function and restore vagal nerve integrity. Improved vagal tone supports autonomic balance, immune regulation, and sleep quality. Craniosacral therapy to the occiput and sphenoid complements this work by improving cerebrospinal fluid circulation. Care is introduced gradually, respecting the post-exertional sensitivity of CFS patients. Most patients notice incremental improvements in energy, sleep quality, and cognitive clarity over a sustained course of care.",
    chiropracticTreatmentEs:
      "El Dr. Foss utiliza los protocolos SOT más suaves para pacientes con SFC, que son sensibles a cualquier sobretratamiento. El enfoque está en la corrección cervical superior —particularmente C1— para descomprimir la función del tallo encefálico y restaurar la integridad del nervio vagal. El tono vagal mejorado apoya el equilibrio autonómico, la regulación inmunológica y la calidad del sueño. La terapia craneosacral al occipucio y esfenoides complementa este trabajo mejorando la circulación del líquido cefalorraquídeo. El cuidado se introduce gradualmente, respetando la sensibilidad post-exertiva de los pacientes con SFC. La mayoría de los pacientes notan mejoras incrementales en energía, calidad del sueño y claridad cognitiva durante un curso sostenido de cuidado.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "fibromyalgia",
    title: "Fibromyalgia | Chiropractor San Antonio TX",
    titleEs: "Fibromialgia | Quiropráctico San Antonio TX",
    image: "/images/conditions/arthritic-hands.jpg",
    metaDescription:
      "Fibromyalgia care in San Antonio, TX. Pura Vida Chiropractic — chiropractor near me San Antonio — uses gentle SOT chiropractic and Class IV Laser to reduce widespread pain and improve quality of life. Best chiropractor San Antonio serving Stone Oak, Castle Hills, and Alamo Heights.",
    metaDescriptionEs:
      "Cuidado de la fibromialgia en San Antonio, TX. Pura Vida Chiropractic utiliza quiropráctica SOT suave y láser Clase IV para reducir el dolor generalizado y mejorar la calidad de vida.",
    intro:
      "Fibromyalgia — widespread pain, tenderness, and fatigue — involves central nervous system sensitization that chiropractic care can meaningfully modulate. Pura Vida Chiropractic helps fibromyalgia patients experience real, lasting reductions in pain.",
    introEs:
      "La fibromialgia —dolor generalizado, sensibilidad y fatiga— involucra sensibilización del sistema nervioso central que el cuidado quiropráctico puede modular significativamente. Pura Vida Chiropractic ayuda a los pacientes con fibromialgia a experimentar reducciones reales y duraderas en el dolor.",
    whatIs:
      "Fibromyalgia is a central sensitization syndrome characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive dysfunction. The nervous system becomes amplified — pain signals are processed as more intense than they should be. Spinal subluxations contribute to this sensitization by maintaining chronic afferent nerve bombardment to the spinal cord and brain, lowering the pain threshold over time. By reducing this constant source of aberrant neurological input, chiropractic care lowers central sensitization and allows the nervous system to 'reset' to a more normal pain processing state.",
    whatIsEs:
      "La fibromialgia es un síndrome de sensibilización central caracterizado por dolor musculoesquelético generalizado, fatiga, trastornos del sueño y disfunción cognitiva. El sistema nervioso se amplifica —las señales de dolor se procesan como más intensas de lo que deberían ser. Las subluxaciones espinales contribuyen a esta sensibilización manteniendo bombardeo nervioso aferente crónico a la médula espinal y el cerebro, bajando el umbral del dolor con el tiempo. Al reducir esta fuente constante de entrada neurológica aberrante, el cuidado quiropráctico baja la sensibilización central y permite que el sistema nervioso se 'reinicie' a un estado de procesamiento del dolor más normal.",
    symptoms: [
      "Widespread, diffuse pain throughout the body",
      "Tenderness at specific tender points (neck, shoulders, hips, knees)",
      "Profound fatigue not relieved by sleep",
      "Cognitive difficulties — brain fog, memory lapses",
      "Sleep disturbances including non-restorative sleep",
      "Heightened sensitivity to pressure, temperature, and sound",
    ],
    symptomsEs: [
      "Dolor generalizado y difuso en todo el cuerpo",
      "Sensibilidad en puntos de ternura específicos (cuello, hombros, caderas, rodillas)",
      "Fatiga profunda no aliviada por el sueño",
      "Dificultades cognitivas —confusión mental, lapsos de memoria",
      "Trastornos del sueño incluyendo sueño no reparador",
      "Sensibilidad aumentada a la presión, temperatura y sonido",
    ],
    causes: [
      "Central nervous system sensitization from chronic spinal subluxation",
      "Post-traumatic sensitization after injury or illness",
      "Autonomic nervous system dysregulation",
      "Sleep deprivation perpetuating pain amplification",
      "Psychosocial stress and trauma history",
      "Genetic predisposition to central sensitization",
    ],
    causesEs: [
      "Sensibilización del sistema nervioso central por subluxación espinal crónica",
      "Sensibilización post-traumática después de lesión o enfermedad",
      "Disregulación del sistema nervioso autónomo",
      "Privación de sueño perpetuando la amplificación del dolor",
      "Estrés psicosocial e historial de trauma",
      "Predisposición genética a la sensibilización central",
    ],
    chiropracticTreatment:
      "Fibromyalgia patients at Pura Vida receive a very gentle, low-force SOT approach that avoids aggressive spinal manipulation, which can trigger flares. The focus is on reducing chronic neurological irritation through gentle pelvic balancing, upper cervical corrections, and craniosacral therapy. As subluxation-driven nerve bombardment decreases, the central nervous system's pain amplification gradually reduces. Patients report decreased pain intensity, improved sleep quality, and better cognitive function with consistent care. We also collaborate with the patient's other providers for a comprehensive, integrated approach.",
    chiropracticTreatmentEs:
      "Los pacientes con fibromialgia en Pura Vida reciben un enfoque SOT muy suave y de baja fuerza que evita la manipulación espinal agresiva, que puede desencadenar exacerbaciones. El enfoque está en reducir la irritación neurológica crónica a través del equilibrio pélvico suave, correcciones cervicales superiores y terapia craneosacral. A medida que disminuye el bombardeo nervioso impulsado por subluxación, la amplificación del dolor del sistema nervioso central se reduce gradualmente. Los pacientes reportan disminución de la intensidad del dolor, mejor calidad del sueño y mejor función cognitiva con cuidado consistente. También colaboramos con otros proveedores del paciente para un enfoque integral y coordinado.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "insomnia",
    title: "Insomnia",
    titleEs: "Insomnio",
    image: "/images/conditions/insomnia.jpg",
    metaDescription:
      "Insomnia treatment in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic and craniosacral therapy to balance the nervous system and restore natural sleep patterns.",
    metaDescriptionEs:
      "Tratamiento del insomnio en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT y terapia craneosacral para equilibrar el sistema nervioso y restaurar patrones naturales de sueño.",
    intro:
      "Poor sleep affects every aspect of health, and its root cause is often neurological — an overactivated sympathetic nervous system that chiropractic care is highly effective at calming. Many patients sleep better after their very first adjustment.",
    introEs:
      "El sueño deficiente afecta cada aspecto de la salud, y su causa raíz es a menudo neurológica —un sistema nervioso simpático sobreactivado que el cuidado quiropráctico es muy efectivo en calmar. Muchos pacientes duermen mejor después de su primer ajuste.",
    whatIs:
      "Insomnia — difficulty falling asleep, staying asleep, or achieving restorative sleep — is one of the most common health complaints in modern society. While stress, anxiety, and poor sleep hygiene play significant roles, the nervous system's autonomic balance is fundamental: the sympathetic (fight-or-flight) nervous system must downregulate and the parasympathetic (rest-and-digest) system must activate for sleep to occur. Spinal subluxations — particularly in the upper cervical spine — maintain chronic sympathetic activation that prevents this transition. Chiropractic adjustments restore autonomic balance, allowing the body's natural sleep mechanisms to function.",
    whatIsEs:
      "El insomnio —dificultad para conciliar el sueño, mantenerlo o lograr sueño reparador— es una de las quejas de salud más comunes en la sociedad moderna. Aunque el estrés, la ansiedad y la mala higiene del sueño juegan papeles significativos, el equilibrio autonómico del sistema nervioso es fundamental: el sistema nervioso simpático (lucha-vuelo) debe disminuir y el sistema parasimpático (descanso-digestión) debe activarse para que ocurra el sueño. Las subluxaciones espinales —particularmente en la columna cervical superior— mantienen la activación simpática crónica que previene esta transición. Los ajustes quiroprácticos restauran el equilibrio autonómico, permitiendo que los mecanismos naturales de sueño del cuerpo funcionen.",
    symptoms: [
      "Difficulty falling asleep despite feeling tired",
      "Waking frequently during the night",
      "Waking too early and being unable to return to sleep",
      "Unrefreshing or non-restorative sleep",
      "Daytime fatigue, irritability, and difficulty concentrating",
      "Reliance on sleep medication to achieve rest",
    ],
    symptomsEs: [
      "Dificultad para conciliar el sueño a pesar de sentir cansancio",
      "Despertarse frecuentemente durante la noche",
      "Despertar muy temprano e incapacidad para volver a dormir",
      "Sueño no reparador o no restaurador",
      "Fatiga diurna, irritabilidad y dificultad para concentrarse",
      "Dependencia de medicamentos para dormir para lograr descanso",
    ],
    causes: [
      "Sympathetic nervous system overactivation from spinal subluxation",
      "Chronic pain keeping the body in a heightened alert state",
      "Cortisol and stress hormone dysregulation",
      "Poor sleep hygiene and irregular circadian rhythm",
      "Anxiety, depression, and psychological factors",
      "Caffeine, alcohol, and stimulant use",
    ],
    causesEs: [
      "Sobreactivación del sistema nervioso simpático por subluxación espinal",
      "Dolor crónico manteniendo el cuerpo en estado de alerta elevado",
      "Desregulación de cortisol y hormonas del estrés",
      "Mala higiene del sueño y ritmo circadiano irregular",
      "Ansiedad, depresión y factores psicológicos",
      "Uso de cafeína, alcohol y estimulantes",
    ],
    chiropracticTreatment:
      "Upper cervical SOT corrections are particularly effective for insomnia because the upper cervical spine directly modulates brainstem activity and autonomic nervous system tone. Restoring normal atlas positioning reduces sympathetic overactivation and enhances parasympathetic output — essentially pressing the 'calm' button in the nervous system. Craniosacral therapy further deepens this relaxation response by normalizing the cerebrospinal fluid rhythm and releasing dural tension. Many patients report sleeping better within days of beginning care. Sleep quality improvement is one of the most common and gratifying patient responses to chiropractic treatment.",
    chiropracticTreatmentEs:
      "Las correcciones cervicales superiores SOT son particularmente efectivas para el insomnio porque la columna cervical superior modula directamente la actividad del tallo encefálico y el tono del sistema nervioso autónomo. Restaurar el posicionamiento normal del atlas reduce la sobreactivación simpática y aumenta la salida parasimpática —esencialmente presionando el botón de 'calma' en el sistema nervioso. La terapia craneosacral profundiza aún más esta respuesta de relajación normalizando el ritmo del líquido cefalorraquídeo y liberando la tensión dural. Muchos pacientes reportan dormir mejor dentro de días de comenzar el cuidado. La mejora de la calidad del sueño es una de las respuestas de pacientes más comunes y gratificantes al tratamiento quiropráctico.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea",
    titleEs: "Apnea del Sueño",
    image: "/images/conditions/sleepapnea.jpg",
    metaDescription:
      "Sleep apnea care in San Antonio TX. Pura Vida Chiropractic addresses the craniocervical and airway structural factors contributing to sleep-disordered breathing.",
    metaDescriptionEs:
      "Cuidado de la apnea del sueño en San Antonio TX. Pura Vida Chiropractic aborda los factores estructurales craniocervicales y de las vías aéreas que contribuyen al trastorno del sueño respira torio.",
    intro:
      "While CPAP therapy manages sleep apnea symptoms, it does not address the structural causes. Chiropractic care at Pura Vida targets the craniocervical and airway mechanics that contribute to airway collapse during sleep.",
    introEs:
      "Aunque la terapia CPAP maneja los síntomas de la apnea del sueño, no aborda las causas estructurales. El cuidado quiropráctico en Pura Vida se enfoca en la mecánica craniocervical y de las vías aéreas que contribuyen al colapso de las vías aéreas durante el sueño.",
    whatIs:
      "Obstructive sleep apnea (OSA) occurs when the upper airway collapses during sleep, causing breathing to stop repeatedly throughout the night. This leads to oxygen desaturation, fragmented sleep, and significant cardiovascular strain. While obesity and anatomy are primary contributors, craniocervical junction misalignment — particularly at the atlas — can reduce pharyngeal space and contribute to airway obstruction. Additionally, tongue tie restrictions, oral-facial muscular imbalances, and forward head posture all narrow the upper airway. Chiropractic care addresses these structural contributors as part of a comprehensive airway-supportive approach.",
    whatIsEs:
      "La apnea obstructiva del sueño (AOS) ocurre cuando las vías aéreas superiores colapsan durante el sueño, causando que la respiración se detenga repetidamente durante la noche. Esto lleva a desaturación de oxígeno, sueño fragmentado y cepa cardiovascular significativa. Aunque la obesidad y la anatomía son contribuyentes primarios, la desalineación de la unión craniocervical —particularmente en el atlas— puede reducir el espacio faríngeo y contribuir a la obstrucción de las vías aéreas. Además, las restricciones del frenillo lingual, los desequilibrios musculares orofaciales y la postura de cabeza adelantada estrechan las vías aéreas superiores.",
    symptoms: [
      "Loud, chronic snoring",
      "Witnessed breathing pauses during sleep",
      "Gasping or choking awakenings",
      "Unrefreshing sleep and excessive daytime sleepiness",
      "Morning headaches",
      "Difficulty concentrating and mood changes",
    ],
    symptomsEs: [
      "Ronquido fuerte y crónico",
      "Pausas respiratorias presenciadas durante el sueño",
      "Despertares por asfixia o sofocación",
      "Sueño no reparador y somnolencia diurna excesiva",
      "Dolores de cabeza matutinos",
      "Dificultad para concentrarse y cambios de humor",
    ],
    causes: [
      "Upper airway anatomical narrowing and soft tissue excess",
      "Obesity increasing soft tissue pressure on the airway",
      "Atlas misalignment reducing pharyngeal space",
      "Forward head posture closing the posterior airway space",
      "Tongue tie or oral restriction impairing tongue posture",
      "Nasal congestion forcing mouth breathing",
    ],
    causesEs: [
      "Estrechamiento anatómico de las vías aéreas superiores y exceso de tejido blando",
      "Obesidad aumentando la presión del tejido blando en las vías aéreas",
      "Desalineación del atlas reduciendo el espacio faríngeo",
      "Postura de cabeza adelantada cerrando el espacio de vías aéreas posterior",
      "Frenillo lingual o restricción oral afectando la postura de la lengua",
      "Congestión nasal forzando la respiración bucal",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses sleep apnea from a structural perspective: correcting the atlas position to improve craniocervical airway geometry, reducing forward head posture that closes posterior airway space, and addressing any tongue tie or oral-facial restrictions limiting proper tongue posture. Craniosacral corrections to the sphenoid, occiput, and hyoid bone area support optimal airway dynamics. This chiropractic care does not replace CPAP for severe OSA, but it can meaningfully reduce AHI (apnea-hypopnea index) and improve CPAP tolerance for many patients.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la apnea del sueño desde una perspectiva estructural: corrigiendo la posición del atlas para mejorar la geometría de las vías aéreas craniocervicales, reduciendo la postura de cabeza adelantada que cierra el espacio de vías aéreas posterior y abordando cualquier restricción del frenillo o facial-oral que limite la postura adecuada de la lengua. Las correcciones craneosacrales al esfenoides, occipucio y área del hueso hioides apoyan la dinámica óptima de las vías aéreas. Este cuidado quiropráctico no reemplaza CPAP para AOS grave, pero puede reducir significativamente el IAH (índice de apnea-hipopnea) y mejorar la tolerancia CPAP para muchos pacientes.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "acid-reflux-gerd",
    title: "Acid Reflux & GERD",
    titleEs: "Reflujo Ácido y ERGE",
    image: "/images/conditions/reflux.jpg",
    metaDescription:
      "Acid reflux and GERD care in San Antonio TX. Pura Vida Chiropractic addresses the thoracic and vagal nerve dysfunction contributing to acid reflux without relying solely on medication.",
    metaDescriptionEs:
      "Cuidado del reflujo ácido y ERGE en San Antonio TX. Pura Vida Chiropractic aborda la disfunción torácica y del nervio vagal que contribuye al reflujo ácido sin depender solo de medicamentos.",
    intro:
      "Acid reflux and GERD are often treated as a medication problem, but the underlying neurological and mechanical contributors respond well to chiropractic care. Many patients reduce or eliminate their reliance on antacids through spinal correction.",
    introEs:
      "El reflujo ácido y la ERGE a menudo se tratan como un problema de medicamento, pero los contribuyentes neurológicos y mecánicos subyacentes responden bien al cuidado quiropráctico. Muchos pacientes reducen o eliminan su dependencia de antiácidos a través de corrección espinal.",
    whatIs:
      "Gastroesophageal reflux disease (GERD) occurs when stomach acid repeatedly flows back into the esophagus, causing heartburn, regurgitation, and esophageal irritation. While dietary factors and hiatal hernia are often cited causes, the thoracic spine and vagus nerve play a critical role in regulating digestive function — including lower esophageal sphincter (LES) tone. Subluxations in the mid-thoracic spine (T5–T9) irritate the sympathetic nerve supply to the stomach and esophagus, impairing normal LES function. Vagal nerve compromise from upper cervical subluxation further disrupts gastric motility. Chiropractic correction of these levels can meaningfully improve GERD symptoms.",
    whatIsEs:
      "La enfermedad de reflujo gastroesofágico (ERGE) ocurre cuando el ácido del estómago fluye repetidamente hacia el esófago, causando acidez estomacal, regurgitación e irritación esofágica. Aunque los factores dietéticos y la hernia hiatal se citan a menudo como causas, la columna torácica y el nervio vagal juegan un papel crítico en regular la función digestiva —incluyendo el tono del esfínter esofágico inferior (EEI). Las subluxaciones en la columna torácica media (T5–T9) irritan el suministro de nervios simpáticos al estómago y esófago, afectando la función normal del EEI. El compromiso del nervio vagal por subluxación cervical superior disrumpe aún más la motilidad gástrica. La corrección quiropráctica de estos niveles puede mejorar significativamente los síntomas de ERGE.",
    symptoms: [
      "Burning sensation in the chest (heartburn) after eating",
      "Regurgitation of acid or food into the throat",
      "Difficulty swallowing or sensation of a lump in the throat",
      "Chronic cough, especially at night",
      "Hoarseness or sore throat in the morning",
      "Worsening symptoms when lying down or bending over",
    ],
    symptomsEs: [
      "Sensación de ardor en el pecho (acidez) después de comer",
      "Regurgitación de ácido o alimento hacia la garganta",
      "Dificultad para tragar o sensación de un bulto en la garganta",
      "Tos crónica, especialmente en la noche",
      "Ronquera o dolor de garganta en la mañana",
      "Empeoramiento de síntomas al acostarse o inclinarse",
    ],
    causes: [
      "Thoracic subluxation (T5–T9) irritating gastric nerve supply",
      "Vagal nerve compromise from upper cervical dysfunction",
      "Hiatal hernia from diaphragm and thoracic dysfunction",
      "Dietary triggers — spicy, fatty, acidic foods",
      "Obesity increasing intra-abdominal pressure",
      "Stress activating sympathetic digestion inhibition",
    ],
    causesEs: [
      "Subluxación torácica (T5–T9) irritando el suministro de nervios gástricos",
      "Compromiso del nervio vagal por disfunción cervical superior",
      "Hernia hiatal por disfunción del diafragma y torácica",
      "Desencadenantes dietéticos —alimentos picantes, grasosos, ácidos",
      "Obesidad aumentando la presión intra-abdominal",
      "Estrés activando la inhibición simpática de la digestión",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the thoracic spine for subluxations — particularly T5 through T9 — that directly control the nerve supply to the stomach and esophagus. SOT thoracic corrections restore normal autonomic nerve function to these digestive structures, improving LES tone and gastric motility. Upper cervical adjustments enhance vagal nerve integrity, which is fundamental to healthy digestive function. Patients often notice a reduction in reflux frequency and severity within a few weeks of consistent thoracic spinal care.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna torácica para subluxaciones —particularmente T5 a través de T9— que controlan directamente el suministro de nervios al estómago y esófago. Las correcciones torácicas SOT restauran la función normal del nervio autónomo a estas estructuras digestivas, mejorando el tono del EEI y la motilidad gástrica. Los ajustes cervicales superiores mejoran la integridad del nervio vagal, que es fundamental para la función digestiva saludable. Los pacientes a menudo notan una reducción en la frecuencia e intensidad del reflujo dentro de pocas semanas de cuidado espinal torácico consistente.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "digestive-issues-ibs",
    title: "Digestive Issues & IBS",
    titleEs: "Problemas Digestivos e IBS",
    image: "/images/conditions/ibs.jpg",
    metaDescription:
      "IBS and digestive issues care in San Antonio TX. Pura Vida Chiropractic uses SOT to correct the spinal nerve dysfunction that disrupts gut motility and causes irritable bowel symptoms.",
    metaDescriptionEs:
      "Cuidado del SII y problemas digestivos en San Antonio TX. Pura Vida Chiropractic utiliza SOT para corregir la disfunción del nervio espinal que disrumpe la motilidad intestinal y causa síntomas de colon irritable.",
    intro:
      "Irritable bowel syndrome and chronic digestive dysfunction have a strong neurological component — the gut-brain axis runs through the spine. Chiropractic care at Pura Vida restores the nerve supply that coordinates normal digestive function.",
    introEs:
      "El síndrome del intestino irritable y la disfunción digestiva crónica tienen un componente neurológico fuerte —el eje intestino-cerebro corre a través de la columna. El cuidado quiropráctico en Pura Vida restaura el suministro nervioso que coordina la función digestiva normal.",
    whatIs:
      "Irritable bowel syndrome (IBS) and other functional digestive disorders involve dysregulation of the enteric nervous system — the complex nerve network governing the gastrointestinal tract. This system is controlled by the vagus nerve and the thoracolumbar sympathetic nervous system, both of which are profoundly influenced by spinal health. Subluxations in the thoracic and lumbar spine alter the autonomic input to the gut, disrupting normal motility, secretion, and visceral sensitivity. The result is the hallmark IBS symptoms of alternating constipation and diarrhea, bloating, cramping, and pain. Spinal correction normalizes this nerve supply and helps restore digestive balance.",
    whatIsEs:
      "El síndrome del intestino irritable (SII) y otros trastornos digestivos funcionales implican desregulación del sistema nervioso entérico —la red nerviosa compleja que rige el tracto gastrointestinal. Este sistema es controlado por el nervio vagal y el sistema nervioso simpático toracolumbar, ambos profundamente influenciados por la salud espinal. Las subluxaciones en la columna torácica y lumbar alteran la entrada autonómica al intestino, interrumpiendo la motilidad normal, secreción y sensibilidad visceral. El resultado son los síntomas característicos del SII de alternancia de estreñimiento y diarrea, hinchazón, calambres y dolor. La corrección espinal normaliza este suministro nervioso y ayuda a restaurar el balance digestivo.",
    symptoms: [
      "Alternating constipation and diarrhea",
      "Abdominal cramping and bloating",
      "Excessive gas and flatulence",
      "Urgency and frequency of bowel movements",
      "Mucus in the stool",
      "Symptoms worsened by stress or certain foods",
    ],
    symptomsEs: [
      "Alternancia de estreñimiento y diarrea",
      "Calambres abdominales e hinchazón",
      "Gas excesivo y flatulencia",
      "Urgencia y frecuencia de movimientos intestinales",
      "Mucosidad en las heces",
      "Síntomas empeorados por estrés o ciertos alimentos",
    ],
    causes: [
      "Thoracolumbar subluxation disrupting gut autonomic nerve supply",
      "Vagal nerve insufficiency impairing gut-brain signaling",
      "Gut microbiome dysbiosis",
      "Chronic stress activating the sympathetic nervous system",
      "Food sensitivities (gluten, dairy, FODMAPs)",
      "Post-infectious gut hypersensitivity",
    ],
    causesEs: [
      "Subluxación toracolumbar interrumpiendo el suministro de nervios autónomos intestinales",
      "Insuficiencia del nervio vagal afectando la señalización intestino-cerebro",
      "Disbiosis del microbioma intestinal",
      "Estrés crónico activando el sistema nervioso simpático",
      "Sensibilidades alimentarias (gluten, lácteos, FODMAPs)",
      "Hipersensibilidad intestinal post-infecciosa",
    ],
    chiropracticTreatment:
      "Dr. Foss targets the thoracic spine (T10–L2) and upper lumbar spine — the primary spinal levels controlling autonomic nerve supply to the small and large intestines. SOT corrections at these levels restore normal sympathetic and parasympathetic balance to the gut, improving motility and reducing visceral hypersensitivity. Upper cervical adjustments address vagal nerve function, which governs peristalsis and digestive secretion throughout the GI tract. Patients with chronic IBS often experience the most improvement when they commit to a consistent course of spinal care combined with dietary modifications.",
    chiropracticTreatmentEs:
      "El Dr. Foss se enfoca en la columna torácica (T10–L2) y la columna lumbar superior —los niveles espinales primarios que controlan el suministro de nervios autónomos a los intestinos delgado y grueso. Las correcciones SOT en estos niveles restauran el balance simpático y parasimpático normal al intestino, mejorando la motilidad y reduciendo la hipersensibilidad visceral. Los ajustes cervicales superiores abordan la función del nervio vagal, que rige la peristalsis y la secreción digestiva en todo el tracto GI. Los pacientes con SII crónico a menudo experimentan la mayor mejoría cuando se comprometen con un curso consistente de cuidado espinal combinado con modificaciones dietéticas.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "dysmenorrhea",
    title: "Dysmenorrhea (Painful Periods)",
    titleEs: "Dismenorrea (Períodos Dolorosos)",
    image: "/images/conditions/dysmenorrhea.jpg",
    metaDescription:
      "Painful period treatment in San Antonio TX. Pura Vida Chiropractic addresses the lumbar and sacral nerve dysfunction that causes dysmenorrhea and menstrual pain.",
    metaDescriptionEs:
      "Tratamiento del período doloroso en San Antonio TX. Pura Vida Chiropractic aborda la disfunción del nervio lumbar y sacral que causa dismenorrea y dolor menstrual.",
    intro:
      "Severe menstrual pain — dysmenorrhea — is common but not normal. The lumbar and sacral spine directly controls the nerve supply to the uterus, and misalignment at these levels is a frequently overlooked cause of menstrual pain.",
    introEs:
      "El dolor menstrual severo —dismenorrea— es común pero no normal. La columna lumbar y sacral controla directamente el suministro nervioso al útero, y la desalineación en estos niveles es una causa frecuentemente pasada por alto del dolor menstrual.",
    whatIs:
      "Dysmenorrhea refers to painful menstrual cramps that occur just before or during a menstrual period. Primary dysmenorrhea involves no underlying pelvic pathology and is driven by prostaglandin-induced uterine contractions. Secondary dysmenorrhea involves conditions like endometriosis or fibroids. The lumbar and sacral spinal nerves (L1–S4) govern uterine nerve supply and blood flow. Subluxations at these levels — particularly in the sacrum — can increase uterine muscle tension, impair blood flow, and amplify pain signals. Chiropractic correction of lumbosacral dysfunction reduces these neurological contributors to menstrual pain.",
    whatIsEs:
      "La dismenorrea se refiere a calambres menstruales dolorosos que ocurren justo antes o durante un período menstrual. La dismenorrea primaria no implica patología pélvica subyacente y está impulsada por contracciones uterinas inducidas por prostaglandinas. La dismenorrea secundaria involucra condiciones como endometriosis o fibromas. Los nervios espinales lumbares y sacrales (L1–S4) rigen el suministro nervioso y flujo sanguíneo uterino. Las subluxaciones en estos niveles —particularmente en el sacro— pueden aumentar la tensión muscular uterina, afectar el flujo sanguíneo y amplificar las señales de dolor. La corrección quiropráctica de la disfunción lumbosacral reduce estos contribuyentes neurológicos al dolor menstrual.",
    symptoms: [
      "Cramping pain in the lower abdomen beginning 1–2 days before menstruation",
      "Pain radiating to the lower back, thighs, or hips",
      "Nausea, vomiting, or diarrhea accompanying cramps",
      "Pain severe enough to limit daily activities",
      "Headache and fatigue coinciding with menstruation",
      "Clotting or heavy flow",
    ],
    symptomsEs: [
      "Dolor de calambre en el abdomen inferior comenzando 1–2 días antes de la menstruación",
      "Dolor irradiando hacia la espalda baja, muslos o caderas",
      "Náusea, vómito o diarrea acompañando calambres",
      "Dolor lo suficientemente severo como para limitar las actividades diarias",
      "Dolor de cabeza y fatiga coincidiendo con la menstruación",
      "Coagulación o flujo abundante",
    ],
    causes: [
      "Lumbosacral subluxation (L4–S4) altering uterine nerve supply",
      "Sacral misalignment creating pelvic floor tension",
      "Prostaglandin overproduction causing uterine hypersensitivity",
      "Pelvic floor dysfunction and tension",
      "Endometriosis, fibroids, or ovarian cysts (secondary dysmenorrhea)",
      "Estrogen dominance and hormonal imbalance",
    ],
    causesEs: [
      "Subluxación lumbosacral (L4–S4) alterando el suministro nervioso uterino",
      "Desalineación sacral creando tensión del piso pélvico",
      "Sobreproducción de prostaglandinas causando hipersensibilidad uterina",
      "Disfunción y tensión del piso pélvico",
      "Endometriosis, fibromas o quistes ováricos (dismenorrea secundaria)",
      "Dominio de estrógeno e desequilibrio hormonal",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a thorough lumbosacral and pelvic evaluation to identify subluxations at the nerve levels governing uterine function. SOT sacral corrections gently restore normal sacral position and pelvic floor balance, reducing the neurological irritation that amplifies uterine cramping. Lumbar corrections address the sympathetic nerve supply to the uterus. Many women report significantly reduced menstrual pain beginning with their first cycle after starting chiropractic care, with continued improvement over subsequent months as spinal alignment is maintained.",
    chiropracticTreatmentEs:
      "El Dr. Foss realiza una evaluación exhaustiva lumbosacral y pélvica para identificar subluxaciones en los niveles de nervios que rigen la función uterina. Las correcciones sacrales SOT restauran suavemente la posición sacral normal y el equilibrio del piso pélvico, reduciendo la irritación neurológica que amplifica los calambres uterinos. Las correcciones lumbares abordan el suministro de nervios simpáticos al útero. Muchas mujeres reportan dolor menstrual significativamente reducido comenzando con su primer ciclo después de comenzar el cuidado quiropráctico, con mejora continua durante meses posteriores a medida que se mantiene la alineación espinal.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "infertility",
    title: "Infertility Support",
    titleEs: "Apoyo a la Infertilidad",
    image: "/images/conditions/infertility.jpg",
    metaDescription:
      "Fertility chiropractic support in San Antonio TX. Pura Vida Chiropractic uses SOT to optimize pelvic and spinal neurological function as part of a natural fertility approach.",
    metaDescriptionEs:
      "Apoyo quiropráctico de fertilidad en San Antonio TX. Pura Vida Chiropractic utiliza SOT para optimizar la función neurológica pélvica y espinal como parte de un enfoque de fertilidad natural.",
    intro:
      "While chiropractic care is not a fertility treatment, optimizing spinal and pelvic neurological function creates a better physiological environment for conception. Many couples undergoing fertility care benefit from concurrent chiropractic support.",
    introEs:
      "Aunque el cuidado quiropráctico no es un tratamiento de fertilidad, optimizar la función neurológica espinal y pélvica crea un mejor ambiente fisiológico para la concepción. Muchas parejas en tratamiento de fertilidad se benefician del apoyo quiropráctico concurrente.",
    whatIs:
      "Fertility is governed by a complex interplay of hormonal, neurological, vascular, and structural factors. The lumbar and sacral spine supplies nerve innervation to the reproductive organs, and pelvic misalignment can create physical barriers — such as intrauterine constraint and compromised blood flow to the ovaries and uterus. The hypothalamic-pituitary-gonadal (HPG) axis, which regulates reproductive hormones, is influenced by the overall state of the nervous system. Chronic subluxations that maintain sympathetic overactivation can suppress HPG axis function. Chiropractic care optimizes spinal and neurological function as a supportive component of holistic fertility care.",
    whatIsEs:
      "La fertilidad está gobernada por una compleja interacción de factores hormonales, neurológicos, vasculares y estructurales. La columna lumbar y sacral suministra inervación nerviosa a los órganos reproductivos, y la desalineación pélvica puede crear barreras físicas —tales como restricción intrauterina y flujo sanguíneo comprometido a los ovarios y útero. El eje hipotalámico-hipofisario-gonadal (HHG), que regula las hormonas reproductivas, está influido por el estado general del sistema nervioso. Las subluxaciones crónicas que mantienen la sobreactivación simpática pueden suprimir la función del eje HHG. El cuidado quiropráctico optimiza la función espinal y neurológica como un componente de apoyo del cuidado holístico de la fertilidad.",
    symptoms: [
      "Difficulty conceiving after 12 months of regular unprotected intercourse",
      "Irregular or absent menstrual cycles",
      "Recurrent pregnancy loss",
      "Polycystic ovarian syndrome (PCOS)",
      "Endometriosis contributing to infertility",
      "Pelvic pain or structural issues reducing implantation potential",
    ],
    symptomsEs: [
      "Dificultad para concebir después de 12 meses de relaciones sexuales sin protección regular",
      "Ciclos menstruales irregulares o ausentes",
      "Pérdida de embarazo recurrente",
      "Síndrome de ovario poliquístico (SOP)",
      "Endometriosis contribuyendo a la infertilidad",
      "Dolor pélvico o problemas estructurales reduciendo el potencial de implantación",
    ],
    causes: [
      "Lumbosacral subluxation affecting reproductive organ nerve supply",
      "Pelvic misalignment reducing uterine blood flow",
      "Sympathetic overactivation suppressing HPG hormonal axis",
      "Structural uterine or tubal factors",
      "Male factor infertility (sperm motility and count)",
      "Unexplained infertility (multifactorial)",
    ],
    causesEs: [
      "Subluxación lumbosacral afectando el suministro de nervios a los órganos reproductivos",
      "Desalineación pélvica reduciendo el flujo sanguíneo uterino",
      "Sobreactivación simpática suprimiendo el eje hormonal HHG",
      "Factores estructurales uterinos o tubáricos",
      "Infertilidad por factor masculino (motilidad y conteo de esperma)",
      "Infertilidad inexplicada (multifactorial)",
    ],
    chiropracticTreatment:
      "Dr. Foss focuses on optimizing lumbosacral alignment and pelvic balance to support the best possible neurological and vascular environment for the reproductive organs. SOT pelvic corrections normalize the nerve supply to the uterus, ovaries, and fallopian tubes while reducing pelvic floor tension that may contribute to structural barriers to conception. Craniosacral therapy supports the hypothalamic-pituitary system through occiput and sphenoid corrections. Chiropractic care in this context is best understood as removing neurological obstacles to the body's natural fertility mechanisms — a supportive complement to medical fertility treatment.",
    chiropracticTreatmentEs:
      "El Dr. Foss se enfoca en optimizar la alineación lumbosacral y el equilibrio pélvico para apoyar el mejor ambiente neurológico y vascular posible para los órganos reproductivos. Las correcciones pélvicas SOT normalizan el suministro nervioso al útero, ovarios y trompas de Falopio mientras reducen la tensión del piso pélvico que puede contribuir a barreras estructurales para la concepción. La terapia craneosacral apoya el sistema hipotalámico-hipofisario a través de correcciones occipital y esfenoidal. El cuidado quiropráctico en este contexto se entiende mejor como la eliminación de obstáculos neurológicos a los mecanismos naturales de fertilidad del cuerpo —un complemento de apoyo al tratamiento médico de fertilidad.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "breech-presentation",
    title: "Breech Presentation",
    titleEs: "Presentación de Nalgas",
    image: "/images/conditions/breechbaby.jpg",
    metaDescription:
      "Webster Technique for breech presentation in San Antonio TX. Pura Vida Chiropractic uses the Webster Technique to balance the pelvis and support optimal fetal positioning.",
    metaDescriptionEs:
      "Técnica Webster para presentación de nalgas en San Antonio TX. Pura Vida Chiropractic utiliza la Técnica Webster para equilibrar la pelvis y apoyar el posicionamiento fetal óptimo.",
    intro:
      "Breech presentation near term is a significant concern for expectant mothers. The Webster Technique — a specific chiropractic protocol — reduces pelvic tension and intrauterine constraint, supporting the baby's natural ability to assume a head-down position.",
    introEs:
      "La presentación de nalgas cerca del término es una preocupación significativa para las futuras madres. La Técnica Webster —un protocolo quiropráctico específico— reduce la tensión pélvica y la restricción intrauterina, apoyando la capacidad natural del bebé de asumir una posición de cabeza hacia abajo.",
    whatIs:
      "Breech presentation occurs when the baby is positioned feet-first or bottom-first in the uterus as the due date approaches. While spontaneous version (baby turning on its own) can occur up to 36 weeks, persistent breech often leads to cesarean delivery. Intrauterine constraint — restriction of the space available to the baby from pelvic misalignment, round ligament tightness, or uterine ligament asymmetry — is a major contributor to malpresentation. The Webster Technique, developed by Dr. Larry Webster, is a specific chiropractic analysis and treatment approach that restores pelvic balance and reduces intrauterine constraint, supporting the baby's ability to assume the optimal vertex (head-down) position.",
    whatIsEs:
      "La presentación de nalgas ocurre cuando el bebé está posicionado pies primero o nalgas primero en el útero mientras se acerca la fecha de vencimiento. Aunque la versión espontánea (el bebé gira por su cuenta) puede ocurrir hasta las 36 semanas, la presentación de nalgas persistente a menudo lleva a parto por cesárea. La restricción intrauterina —restricción del espacio disponible para el bebé por desalineación pélvica, rigidez del ligamento redondo o asimetría de ligamento uterino— es un contribuyente mayor a la malpresentación. La Técnica Webster, desarrollada por el Dr. Larry Webster, es un enfoque de análisis y tratamiento quiropráctico específico que restaura el equilibrio pélvico y reduce la restricción intrauterina.",
    symptoms: [
      "Baby confirmed in breech (frank, complete, or footling) position at 34+ weeks",
      "Hard, round mass felt at the top of the uterus (baby's head)",
      "Soft mass or feet palpable at the lower uterus",
      "Kicks felt low in the pelvis rather than high under the ribs",
      "Confirmation of malpresentation by obstetric ultrasound",
    ],
    symptomsEs: [
      "Bebé confirmado en posición de nalgas (franca, completa o fúndica) a las 34+ semanas",
      "Masa redonda y dura sentida en la parte superior del útero (cabeza del bebé)",
      "Masa blanda o pies palpables en el útero inferior",
      "Patadas sentidas bajas en la pelvis en lugar de altas debajo de las costillas",
      "Confirmación de malpresentación por ecografía obstétrica",
    ],
    causes: [
      "Pelvic misalignment creating intrauterine constraint",
      "Round ligament asymmetry restricting fetal movement",
      "Uterine muscle tension from sacral subluxation",
      "Placenta previa or other structural uterine factors",
      "Multiple gestation reducing available space",
      "Prior uterine surgery (fibroids, C-section scar)",
    ],
    causesEs: [
      "Desalineación pélvica creando restricción intrauterina",
      "Asimetría del ligamento redondo restringiendo el movimiento fetal",
      "Tensión muscular uterina por subluxación sacral",
      "Placenta previa u otros factores uterinos estructurales",
      "Gestación múltiple reduciendo el espacio disponible",
      "Cirugía uterina previa (fibromas, cicatriz de cesárea)",
    ],
    chiropracticTreatment:
      "Dr. Foss is trained in the Webster Technique and has helped many expectant mothers support optimal fetal positioning. The technique involves specific sacral analysis and adjustment to correct sacral subluxation, followed by gentle release of the round ligaments and uterine ligaments to reduce intrauterine constraint. Treatment is performed with the mother lying comfortably on the pregnancy table. Sessions are typically brief and comfortable. The ICPA (International Chiropractic Pediatric Association) recommends Webster Technique beginning at 32–34 weeks for breech presentation, though earlier care produces the best outcomes.",
    chiropracticTreatmentEs:
      "El Dr. Foss está capacitado en la Técnica Webster y ha ayudado a muchas futuras madres a apoyar el posicionamiento fetal óptimo. La técnica implica análisis y ajuste sacral específico para corregir la subluxación sacral, seguido de liberación suave de los ligamentos redondos y ligamentos uterinos para reducir la restricción intrauterina. El tratamiento se realiza con la madre acostada cómodamente en la mesa de embarazo. Las sesiones son típicamente breves y cómodas. La ICPA (Asociación Internacional Quiropráctica Pediátrica) recomienda la Técnica Webster comenzando a las 32–34 semanas para presentación de nalgas.",
    additionalTreatments: [],
  },
  {
    slug: "infant-colic",
    title: "Infant Colic",
    titleEs: "Cólico Infantil",
    image: "/images/conditions/infantcolic.jpg",
    metaDescription:
      "Infant colic care in San Antonio TX. Pura Vida Chiropractic uses gentle SOT and craniosacral therapy to address the neurological and structural causes of infant colic.",
    metaDescriptionEs:
      "Cuidado del cólico infantil en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT suave y terapia craneosacral para abordar las causas neurológicas y estructurales del cólico infantil.",
    intro:
      "Infant colic — inconsolable crying for hours in an otherwise healthy baby — is exhausting for the whole family. Gentle chiropractic care addresses the birth-related spinal tension and craniosacral dysfunction that are often the hidden cause.",
    introEs:
      "El cólico infantil —llanto inconsolable durante horas en un bebé por lo demás saludable— es agotador para toda la familia. El cuidado quiropráctico suave aborda la tensión espinal relacionada con el parto y la disfunción craneosacral que a menudo es la causa oculta.",
    whatIs:
      "Colic is defined as crying for more than three hours per day, more than three days per week, in a baby under three months of age, without an identifiable medical cause. Birth — even a routine vaginal delivery — places significant compressive and torsional forces on the newborn's cervical spine and cranium. Craniosacral restrictions from birth stress, upper cervical subluxation, and vagal nerve compression are common findings in colicky infants. The vagus nerve governs gut motility, and when compromised, can produce the abdominal discomfort, gas, and dysregulated gut function that underlies colic. Gentle chiropractic care often resolves colic remarkably quickly.",
    whatIsEs:
      "El cólico se define como llanto durante más de tres horas por día, más de tres días por semana, en un bebé menor de tres meses de edad, sin una causa médica identificable. El parto —incluso un parto vaginal de rutina— ejerce fuerzas compresivas y torsionales significativas en la columna cervical y el cráneo del recién nacido. Las restricciones craneosacrales por estrés de parto, subluxación cervical superior y compresión del nervio vagal son hallazgos comunes en bebés con cólico. El nervio vagal rige la motilidad intestinal, y cuando se ve comprometido, puede producir malestar abdominal, gas y función intestinal desregulada que subyace al cólico.",
    symptoms: [
      "Inconsolable crying lasting 3+ hours daily without clear cause",
      "Baby draws knees to chest and arches the back during episodes",
      "Episodes typically occur in the late afternoon or evening",
      "Baby passes excessive gas or has difficulty burping",
      "Difficulty settling or nursing",
      "Normal between episodes — baby appears healthy otherwise",
    ],
    symptomsEs: [
      "Llanto inconsolable que dura 3+ horas diarias sin causa clara",
      "El bebé se tira de las rodillas al pecho y arquea la espalda durante episodios",
      "Los episodios típicamente ocurren en la tarde o noche tardía",
      "El bebé expulsa gas excesivo o tiene dificultad para eructar",
      "Dificultad para calmarse o amamantar",
      "Normal entre episodios —el bebé parece saludable de otro modo",
    ],
    causes: [
      "Craniosacral restriction from birth trauma",
      "Upper cervical subluxation (C1–C2) compressing vagal nerve",
      "Gut dysbiosis and immature microbiome",
      "Cow's milk protein sensitivity (if breastfed or formula-fed)",
      "Tongue tie impairing feeding and causing air swallowing",
      "Parental stress and maternal cortisol in breast milk",
    ],
    causesEs: [
      "Restricción craneosacral por trauma de parto",
      "Subluxación cervical superior (C1–C2) comprimiendo el nervio vagal",
      "Disbiosis intestinal y microbioma inmaduro",
      "Sensibilidad a la proteína de la leche de vaca (si es amamantado o alimentado con fórmula)",
      "Frenillo lingual afectando la alimentación y causando deglución de aire",
      "Estrés parental y cortisol materno en la leche materna",
    ],
    chiropracticTreatment:
      "Infant chiropractic at Pura Vida uses the lightest possible touch — the pressure is comparable to checking the ripeness of a tomato. Dr. Foss evaluates the occiput, atlas, temporal bones, and upper cervical spine for restrictions and applies gentle sustained contact to release them. Vagal nerve function is restored, gut motility normalizes, and the infant's cry pattern typically changes within a few sessions. Parents are often present and can observe the treatment. Studies support chiropractic care as an effective and safe intervention for infantile colic, with significant reductions in daily crying time.",
    chiropracticTreatmentEs:
      "La quiropráctica infantil en Pura Vida utiliza el toque lo más ligero posible —la presión es comparable a revisar la madurez de un tomate. El Dr. Foss evalúa el occipucio, atlas, huesos temporales y columna cervical superior para restricciones y aplica contacto sostenido suave para liberarlas. La función del nervio vagal se restaura, la motilidad intestinal se normaliza y el patrón de llanto del bebé típicamente cambia dentro de algunas sesiones. Los padres a menudo están presentes y pueden observar el tratamiento. Los estudios apoyan el cuidado quiropráctico como una intervención efectiva y segura para el cólico infantil.",
    additionalTreatments: [],
  },
  {
    slug: "infant-reflux",
    title: "Infant Reflux",
    titleEs: "Reflujo Infantil",
    image: "/images/conditions/infantreflux.jpg",
    metaDescription:
      "Infant reflux care in San Antonio TX. Pura Vida Chiropractic uses gentle craniosacral therapy to address the vagal and hiatal factors causing reflux in babies.",
    metaDescriptionEs:
      "Cuidado del reflujo infantil en San Antonio TX. Pura Vida Chiropractic utiliza terapia craneosacral suave para abordar los factores vagales y hiatales que causan reflujo en bebés.",
    intro:
      "Infant reflux — spitting up, arching after feeds, and feeding distress — is often neurological rather than purely mechanical. Gentle chiropractic care addresses the upper cervical and craniosacral dysfunction that impairs the lower esophageal sphincter in infants.",
    introEs:
      "El reflujo infantil —regurgitación, arqueamiento después de alimentarse y malestar por alimentación— es a menudo neurológico en lugar de puramente mecánico. El cuidado quiropráctico suave aborda la disfunción cervical superior y craneosacral que afecta el esfínter esofágico inferior en bebés.",
    whatIs:
      "Gastroesophageal reflux in infants (GER) occurs when stomach contents flow back into the esophagus, causing spitting up, irritability, and feeding difficulties. While some degree of reflux is normal in young infants as the lower esophageal sphincter (LES) matures, pathological reflux (GERD) involves significant discomfort and feeding aversion. Vagal nerve function is critical for LES tone — and upper cervical subluxations from birth stress can compromise vagal output, reducing LES competence. Craniosacral restrictions at the occiput and atlas are frequently found in infants with significant reflux. Gentle corrections at these sites often produce rapid improvement.",
    whatIsEs:
      "El reflujo gastroesofágico en bebés (RGE) ocurre cuando el contenido del estómago fluye hacia atrás en el esófago, causando regurgitación, irritabilidad y dificultades de alimentación. Aunque cierto grado de reflujo es normal en bebés jóvenes mientras el esfínter esofágico inferior (EEI) madura, el reflujo patológico (ERGE) involucra malestar significativo y aversión a la alimentación. La función del nervio vagal es crítica para el tono del EEI —y las subluxaciones cervicales superiores del estrés de parto pueden comprometer la salida vagal, reduciendo la competencia del EEI.",
    symptoms: [
      "Frequent spitting up or vomiting after feeds",
      "Arching the back during or after feeding",
      "Crying and irritability during or after feeds",
      "Feeding aversion or refusing the breast or bottle",
      "Poor weight gain or failure to thrive",
      "Persistent hiccuping",
    ],
    symptomsEs: [
      "Regurgitación frecuente o vómito después de alimentarse",
      "Arqueamiento de la espalda durante o después de la alimentación",
      "Llanto e irritabilidad durante o después de alimentarse",
      "Aversión a la alimentación o rechazo al pecho o biberón",
      "Ganancia de peso deficiente o fracaso para prosperar",
      "Hipo persistente",
    ],
    causes: [
      "Upper cervical subluxation compromising vagal nerve and LES tone",
      "Craniosacral restriction at the occiput from birth forces",
      "Immature lower esophageal sphincter",
      "Tongue tie impairing latch and increasing air swallowing",
      "Cow's milk protein sensitivity",
      "Overfeeding or inappropriate feeding position",
    ],
    causesEs: [
      "Subluxación cervical superior comprometiendo el nervio vagal y tono del EEI",
      "Restricción craneosacral en el occipucio por fuerzas de parto",
      "Esfínter esofágico inferior inmaduro",
      "Frenillo lingual afectando el agarre e aumentando la deglución de aire",
      "Sensibilidad a la proteína de la leche de vaca",
      "Sobrealimentación o posición de alimentación inapropiada",
    ],
    chiropracticTreatment:
      "Dr. Foss applies extremely gentle sustained craniosacral contact at the occiput and upper cervical spine to release birth-related restrictions and restore vagal nerve function. Treatment is feather-light and well-tolerated by infants. Improved vagal output enhances LES tone and esophageal peristalsis, reducing the upward movement of stomach contents. Any concurrent tongue tie is assessed, as it is a common co-contributor to infant reflux through impaired feeding mechanics and air swallowing. Parents typically report a reduction in spitting up and feeding distress within the first two to three sessions.",
    chiropracticTreatmentEs:
      "El Dr. Foss aplica contacto craneosacral sostenido extremadamente suave en el occipucio y la columna cervical superior para liberar restricciones relacionadas con el parto y restaurar la función del nervio vagal. El tratamiento es tan ligero como una pluma y bien tolerado por los bebés. La salida vagal mejorada mejora el tono del EEI y la peristalsis esofágica, reduciendo el movimiento ascendente del contenido del estómago. Se evalúa cualquier frenillo lingual concurrente, ya que es un co-contribuyente común al reflujo infantil a través de mecánica de alimentación afectada y deglución de aire.",
    additionalTreatments: [],
  },
  {
    slug: "nursing-latching",
    title: "Nursing & Latching Difficulties",
    titleEs: "Dificultades de Lactancia y Enganche",
    image: "/images/conditions/nursinglactation.jpg",
    metaDescription:
      "Nursing and latching difficulty care in San Antonio TX. Pura Vida Chiropractic addresses cervical, craniosacral, and tongue tie restrictions affecting infant breastfeeding.",
    metaDescriptionEs:
      "Cuidado de dificultades de lactancia y enganche en San Antonio TX. Pura Vida Chiropractic aborda restricciones cervicales, craneosacrales y del frenillo lingual que afectan la lactancia materna infantil.",
    intro:
      "Difficulty latching is one of the most stressful early parenting challenges — but it is often structural, not a failure of mother or baby. Chiropractic care identifies and resolves the anatomical restrictions preventing a good latch.",
    introEs:
      "La dificultad para enganchar es uno de los desafíos más estresantes de la crianza temprana —pero a menudo es estructural, no una falla de la madre o el bebé. El cuidado quiropráctico identifica y resuelve las restricciones anatómicas que previenen un buen enganche.",
    whatIs:
      "Successful breastfeeding requires a coordinated neuromuscular effort from the baby — involving the jaw, tongue, lips, and neck. When any of these structures are restricted — from birth trauma, cervical subluxation, tongue tie (ankyloglossia), or upper lip tie — the baby cannot achieve and maintain the deep, effective latch needed for proper milk transfer. A shallow latch causes nipple pain and damage for the mother and insufficient milk intake for the baby. Upper cervical subluxations also affect the baby's neck rotation, making it difficult to position comfortably on both sides. Chiropractic evaluation of the cervical spine and oral cavity is essential for nursing difficulties that persist despite lactation support.",
    whatIsEs:
      "La lactancia materna exitosa requiere un esfuerzo neuromuscular coordinado del bebé —involucrando la mandíbula, lengua, labios y cuello. Cuando cualquiera de estas estructuras está restringida —por trauma de parto, subluxación cervical, frenillo lingual (anquiloglosia) o frenillo del labio superior— el bebé no puede lograr y mantener el enganche profundo y efectivo necesario para la transferencia adecuada de leche. Un enganche superficial causa dolor y daño en los pezones para la madre e ingesta insuficiente de leche para el bebé.",
    symptoms: [
      "Inability to latch deeply or repeatedly losing the latch",
      "Clicking or chomping sounds during nursing",
      "Nipple pain or damage from incorrect latch position",
      "Poor milk transfer and inadequate infant weight gain",
      "Preference for nursing on one side only (cervical rotation restriction)",
      "Frustrated, fussy baby at the breast",
    ],
    symptomsEs: [
      "Incapacidad para enganchar profundamente o pérdida repetida del enganche",
      "Sonidos de chasquido o mordisco durante la lactancia",
      "Dolor o daño en los pezones por posición de enganche incorrecta",
      "Transferencia deficiente de leche y ganancia de peso infantil insuficiente",
      "Preferencia por amamantar solo en un lado (restricción de rotación cervical)",
      "Bebé frustrado e inquieto en el pecho",
    ],
    causes: [
      "Tongue tie (ankyloglossia) restricting tongue elevation and reach",
      "Upper lip tie preventing lip flanging",
      "Upper cervical subluxation (C1–C2) limiting neck rotation",
      "Jaw restriction from craniosacral compression during birth",
      "Torticollis (neck muscle tightness) creating feeding position preference",
      "Low muscle tone affecting sucking strength",
    ],
    causesEs: [
      "Frenillo lingual (anquiloglosia) restringiendo la elevación y alcance de la lengua",
      "Frenillo del labio superior previniendo el flanje labial",
      "Subluxación cervical superior (C1–C2) limitando la rotación del cuello",
      "Restricción mandibular por compresión craneosacral durante el parto",
      "Tortícolis (rigidez muscular del cuello) creando preferencia de posición de alimentación",
      "Tono muscular bajo afectando la fuerza de succión",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the infant's upper cervical spine, craniosacral system, and oral cavity to identify all structural contributors to feeding difficulty. Gentle cervical adjustments restore full neck rotation, allowing the baby to feed symmetrically from both sides. Craniosacral corrections at the temporal bones and jaw improve mandibular mobility and sucking coordination. Tongue and lip tie assessment is performed, and when indicated, referral to a pediatric dentist or ENT for frenotomy is coordinated. Combining chiropractic care with lactation support and, when needed, a frenotomy procedure typically results in successful breastfeeding establishment.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna cervical superior del bebé, el sistema craneosacral y la cavidad oral para identificar todos los contribuyentes estructurales a la dificultad de alimentación. Los ajustes cervicales suaves restauran la rotación completa del cuello, permitiendo que el bebé se alimente simétricamente de ambos lados. Las correcciones craneosacrales en los huesos temporales y la mandíbula mejoran la movilidad mandibular y la coordinación de succión. Se realiza evaluación del frenillo lingual y labial, y cuando está indicado, se coordina referencia a un dentista pediátrico u ORL para frenotomía.",
    additionalTreatments: [],
  },
  {
    slug: "torticollis",
    title: "Torticollis",
    titleEs: "Tortícolis",
    image: "/images/conditions/torticollis.jpg",
    metaDescription:
      "Torticollis treatment in San Antonio TX. Pura Vida Chiropractic uses gentle SOT and craniosacral therapy to resolve infant and adult torticollis — the head-tilting neck condition.",
    metaDescriptionEs:
      "Tratamiento de tortícolis en San Antonio TX. Pura Vida Chiropractic utiliza quiropráctica SOT suave y terapia craneosacral para resolver la tortícolis infantil y adulta —la condición de cuello con inclinación de cabeza.",
    intro:
      "Torticollis — the involuntary tilting or rotating of the head to one side — responds well to gentle chiropractic care that addresses the cervical and craniosacral restrictions driving the condition.",
    introEs:
      "La tortícolis —la inclinación o rotación involuntaria de la cabeza hacia un lado— responde bien al cuidado quiropráctico suave que aborda las restricciones cervicales y craneosacrales que impulsan la condición.",
    whatIs:
      "Torticollis is characterized by a lateral head tilt and rotation to one side, caused by spasm or shortening of the sternocleidomastoid (SCM) muscle. In infants, congenital muscular torticollis typically results from positioning in utero or compressive forces during delivery. In adults, acute torticollis can develop from sleeping awkwardly, cervical subluxation, or whiplash. Upper cervical misalignment — particularly atlas subluxation — is the primary chiropractic finding in torticollis, as the atlas controls the proprioceptive balance between left and right neck muscles. Correcting atlas positioning allows the SCM to relax and the head to return to neutral.",
    whatIsEs:
      "La tortícolis se caracteriza por inclinación lateral de la cabeza y rotación hacia un lado, causada por espasmo o acortamiento del músculo esternocleidomastoideo (ECM). En bebés, la tortícolis muscular congénita típicamente resulta del posicionamiento in útero o fuerzas compresivas durante el parto. En adultos, la tortícolis aguda puede desarrollarse por dormir incómodamente, subluxación cervical o latigazo cervical. La desalineación cervical superior —particularmente subluxación del atlas— es el hallazgo quiropráctico principal en tortícolis.",
    symptoms: [
      "Head consistently tilted to one side and rotated toward the opposite shoulder",
      "Limited range of motion turning the head in one direction",
      "Palpable tightness or a firm lump in the SCM muscle",
      "Facial asymmetry in infants (plagiocephaly) from persistent positional preference",
      "Feeding preference for one breast side in nursing infants",
      "Neck pain and muscle soreness in adults",
    ],
    symptomsEs: [
      "Cabeza consistentemente inclinada hacia un lado y rotada hacia el hombro opuesto",
      "Rango de movimiento limitado girando la cabeza en una dirección",
      "Rigidez palpable o bulto firme en el músculo ECM",
      "Asimetría facial en bebés (plagiocefalia) por preferencia de posición persistente",
      "Preferencia de alimentación en un lado del pecho en bebés amamantados",
      "Dolor de cuello e irritabilidad muscular en adultos",
    ],
    causes: [
      "Atlas (C1) subluxation creating muscle tone asymmetry",
      "In utero positioning (common in multiple gestations or breech)",
      "Birth trauma from forceps, vacuum, or prolonged labor",
      "SCM muscle tearing or hematoma during delivery",
      "Acute adult onset from sudden movement or sleeping position",
      "Cervical disc herniation causing protective muscle spasm",
    ],
    causesEs: [
      "Subluxación del atlas (C1) creando asimetría de tono muscular",
      "Posicionamiento in útero (común en gestaciones múltiples o nalgas)",
      "Trauma de parto por fórceps, ventosa o parto prolongado",
      "Desgarro del músculo ECM o hematoma durante el parto",
      "Inicio agudo en adultos por movimiento repentino o posición de sueño",
      "Hernia discal cervical causando espasmo muscular protector",
    ],
    chiropracticTreatment:
      "For infant torticollis, Dr. Foss uses feather-light craniosacral and upper cervical corrections to restore atlas alignment and release the dural tension contributing to SCM imbalance. Parents are taught gentle home stretching exercises to complement in-office treatment. For adult torticollis, SOT upper cervical adjustments are combined with myofascial release to the affected SCM and suboccipital muscles. Results are typically rapid — most patients notice significant improvement in cervical rotation within the first two to four sessions. Early treatment prevents the secondary complications of torticollis, including plagiocephaly in infants.",
    chiropracticTreatmentEs:
      "Para la tortícolis infantil, el Dr. Foss utiliza correcciones craneosacrales y cervicales superiores tan ligeras como plumas para restaurar la alineación del atlas y liberar la tensión dural que contribuye al desequilibrio del ECM. A los padres se les enseñan ejercicios de estiramiento suave en el hogar para complementar el tratamiento en la oficina. Para la tortícolis adulta, los ajustes cervicales superiores SOT se combinan con liberación miofascial al ECM afectado y músculos suboccipitales.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "growing-pains",
    title: "Growing Pains",
    titleEs: "Dolores de Crecimiento",
    image: "/images/conditions/growingpains.jpg",
    metaDescription:
      "Growing pains treatment in San Antonio TX. Pura Vida Chiropractic addresses the spinal and biomechanical factors behind growing pains in children and adolescents.",
    metaDescriptionEs:
      "Tratamiento de dolores de crecimiento en San Antonio, TX. Pura Vida Chiropractic aborda los factores espinales y biomecánicos detrás de los dolores de crecimiento en niños y adolescentes.",
    intro:
      "Growing pains in children are real and often intense — but they are not simply inevitable. Chiropractic care identifies and corrects the spinal and biomechanical factors that amplify growing pain and prevents long-term postural dysfunction.",
    introEs:
      "Los dolores de crecimiento en los niños son reales e intensos, pero no son simplemente inevitables. El cuidado quiropráctico identifica y corrige los factores espinales y biomecánicos que amplifican el dolor de crecimiento e impide la disfunción postural a largo plazo.",
    whatIs:
      "Growing pains are recurrent, typically nocturnal, aching pain in the legs — most commonly in the calves, shins, or thighs — affecting children aged 3–12. The exact cause is debated, but current evidence suggests that musculoskeletal mechanics play a significant role: reduced pain threshold, tight muscles from daily activity, and pelvic/spinal imbalances that create abnormal lower extremity loading. Children who experience growing pains have measurably lower pain thresholds, and spinal subluxations that maintain chronic neurological irritation lower this threshold further. Chiropractic care reduces this neurological background noise and addresses the biomechanical contributors.",
    whatIsEs:
      "Los dolores de crecimiento son dolores recurrentes, típicamente nocturnos, en las piernas —más comúnmente en las pantorrillas, espinillas o muslos— afectando a niños de 3 a 12 años. La causa exacta es debatida, pero la evidencia actual sugiere que la mecánica musculoesquelética juega un papel significativo: umbral de dolor reducido, músculos tensos por actividad diaria, e desequilibrios pélvicos/espinales que crean una carga anormal de extremidad inferior. Los niños que experimentan dolores de crecimiento tienen umbrales de dolor mediblemente más bajos, y las subluxaciones espinales que mantienen irritación neurológica crónica disminuyen este umbral aún más. El cuidado quiropráctico reduce este ruido neurológico de fondo y aborda los contribuyentes biomecánicos.",
    symptoms: [
      "Aching or throbbing pain in both legs, typically at night",
      "Pain in the calves, shins, thighs, or behind the knees",
      "No joint swelling, redness, or fever (distinguishing from pathological causes)",
      "Pain gone by morning",
      "Child is able to walk normally and plays without restriction",
      "Episodes occurring several times per week",
    ],
    symptomsEs: [
      "Dolor pulsante o palpitante en ambas piernas, típicamente por la noche",
      "Dolor en pantorrillas, espinillas, muslos o detrás de las rodillas",
      "Sin hinchazón articular, enrojecimiento o fiebre (distinguiendo de causas patológicas)",
      "Dolor desaparece en la mañana",
      "El niño puede caminar normalmente y juega sin restricción",
      "Episodios ocurriendo varias veces por semana",
    ],
    causes: [
      "Pelvic imbalance creating uneven lower extremity loading",
      "Tight quadriceps, hamstrings, and calf muscles from activity",
      "Central neurological pain sensitization from spinal subluxation",
      "Rapid bone growth outpacing muscle length adaptation",
      "Low pain threshold in constitutionally predisposed children",
      "Nutritional deficiencies (vitamin D, magnesium)",
    ],
    causesEs: [
      "Desequilibrio pélvico creando carga de extremidad inferior desigual",
      "Músculos cuádriceps, isquiotibiales y pantorrillas tensos por actividad",
      "Sensibilización neurológica central del dolor por subluxación espinal",
      "Crecimiento óseo rápido superando la adaptación de la longitud muscular",
      "Umbral de dolor bajo en niños constitucionalmente predispuestos",
      "Deficiencias nutricionales (vitamina D, magnesio)",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the child's spine, pelvis, and lower extremities for the subluxations and biomechanical imbalances that amplify growing pain. SOT pelvic corrections restore even loading across both legs. Gentle lumbar and sacral adjustments reduce the spinal nerve irritation that lowers pain threshold. Extremity adjustments to the hip, knee, and ankle address joint restrictions contributing to muscle tension. Parents often report that their children's leg pain improves significantly within the first few weeks of chiropractic care, and the cycle of nighttime episodes decreases in frequency and intensity.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna vertebral, pelvis y extremidades inferiores del niño para las subluxaciones e desequilibrios biomecánicos que amplifican el dolor de crecimiento. Las correcciones pélvicas SOT restauran la carga uniforme en ambas piernas. Los ajustes lumbares y sacrales suaves reducen la irritación del nervio espinal que disminuye el umbral del dolor. Los ajustes de extremidades en la cadera, rodilla y tobillo abordan las restricciones articulares que contribuyen a la tensión muscular. Los padres frecuentemente reportan que el dolor de piernas de sus hijos mejora significativamente dentro de las primeras semanas de cuidado quiropráctico, y el ciclo de episodios nocturnos disminuye en frecuencia e intensidad.",
    additionalTreatments: [],
  },
  {
    slug: "adhd-focus",
    title: "ADHD & Focus Issues",
    titleEs: "TDAH y Problemas de Enfoque",
    image: "/images/conditions/adhd.jpg",
    metaDescription:
      "ADHD and focus support in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to improve neurological regulation in children and adults with ADHD.",
    metaDescriptionEs:
      "Apoyo para TDAH y enfoque en San Antonio, TX. Pura Vida Chiropractic utiliza la técnica SOT y terapia craniosacral para mejorar la regulación neurológica en niños y adultos con TDAH.",
    intro:
      "ADHD and focus difficulties involve neurological dysregulation that spinal and craniosacral dysfunction can worsen. Chiropractic care at Pura Vida supports better brain-body communication — without medication side effects.",
    introEs:
      "Las dificultades de TDAH y foco implican disregulación neurológica que la disfunción espinal y craniosacral puede empeorar. El cuidado quiropráctico en Pura Vida apoya una mejor comunicación cuerpo-cerebro, sin efectos secundarios de medicamentos.",
    whatIs:
      "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental condition characterized by inattention, impulsivity, and hyperactivity that impairs daily functioning. While neurochemical factors (dopamine and norepinephrine dysregulation) are well-established, the role of spinal health in neurological regulation is increasingly recognized. Upper cervical subluxations and craniosacral restrictions can impair cerebrospinal fluid flow, prefrontal cortex function, and the brain's ability to self-regulate. The cerebellum — which coordinates not just movement but also cognitive function and attention — is directly affected by spinal afferent input. Chiropractic care that improves spinal neurological input may support better frontal lobe regulation and attention.",
    whatIsEs:
      "El trastorno por déficit de atención con hiperactividad (TDAH) es una condición del neurodesarrollo caracterizada por inatención, impulsividad e hiperactividad que afecta el funcionamiento diario. Aunque los factores neuroquímicos (disregulación de dopamina y noradrenalina) están bien establecidos, el papel de la salud espinal en la regulación neurológica es cada vez más reconocido. Las subluxaciones cervicales superiores y las restricciones craniosacrale pueden afectar el flujo del líquido cefalorraquídeo, la función de la corteza prefrontal y la capacidad del cerebro de autorregularse. El cerebelo, que coordina no solo el movimiento sino también la función cognitiva y la atención, se ve directamente afectado por la entrada aferente espinal. El cuidado quiropráctico que mejora la entrada neurológica espinal puede apoyar una mejor regulación del lóbulo frontal y atención.",
    symptoms: [
      "Difficulty sustaining attention on tasks or during play",
      "Easily distracted by extraneous stimuli",
      "Impulsive behavior and difficulty waiting",
      "Hyperactivity — unable to sit still, always 'on the go'",
      "Disorganization, forgetfulness, and difficulty following instructions",
      "Poor sleep quality worsening daytime focus",
    ],
    symptomsEs: [
      "Dificultad para sostener la atención en tareas o durante el juego",
      "Fácilmente distraído por estímulos extraños",
      "Comportamiento impulsivo y dificultad para esperar",
      "Hiperactividad —incapaz de estarse quieto, siempre 'en movimiento'",
      "Desorganización, olvido y dificultad para seguir instrucciones",
      "Mala calidad del sueño empeorando el foco diurno",
    ],
    causes: [
      "Neurochemical dysregulation (dopamine/norepinephrine)",
      "Upper cervical subluxation impairing cerebellar and frontal lobe input",
      "Craniosacral restriction affecting cerebrospinal fluid flow",
      "Genetic factors and family history",
      "Environmental exposures (lead, heavy metals)",
      "Sleep deprivation and dysregulated circadian rhythm",
    ],
    causesEs: [
      "Disregulación neuroquímica (dopamina/noradrenalina)",
      "Subluxación cervical superior afectando la entrada cerebelar y del lóbulo frontal",
      "Restricción craniosacral afectando el flujo del líquido cefalorraquídeo",
      "Factores genéticos e historia familiar",
      "Exposiciones ambientales (plomo, metales pesados)",
      "Privación del sueño y ritmo circadiano disregulado",
    ],
    chiropracticTreatment:
      "Dr. Foss applies gentle upper cervical and craniosacral corrections to optimize the neurological input reaching the brain from the spine. Improved cerebellar activation and prefrontal cortex input can enhance self-regulation, impulse control, and attention. Craniosacral corrections at the sphenoid and occiput support cerebrospinal fluid circulation, which is important for brain detoxification and optimal neurological function. Chiropractic care for ADHD is a complement to behavioral therapy and other interventions — it addresses the structural neurological component that medications do not.",
    chiropracticTreatmentEs:
      "El Dr. Foss aplica correcciones cervicales superiores y craniosacrale suaves para optimizar la entrada neurológica que llega al cerebro desde la columna vertebral. La activación cerebelar mejorada y la entrada de la corteza prefrontal pueden mejorar la autorregulación, el control de impulsos y la atención. Las correcciones craniosacrale en el esfenoides y occipucio apoyan la circulación del líquido cefalorraquídeo, que es importante para la desintoxicación cerebral y la función neurológica óptima. El cuidado quiropráctico para el TDAH es un complemento de la terapia conductual y otras intervenciones —aborda el componente neurológico estructural que los medicamentos no hacen.",
    additionalTreatments: [],
  },
  {
    slug: "sensory-processing",
    title: "Sensory Processing Disorders",
    titleEs: "Trastornos de Procesamiento Sensorial",
    image: "/images/conditions/sensoryprocessing.jpg",
    metaDescription:
      "Sensory processing disorder care in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to help children and adults with sensory sensitivity and integration difficulties.",
    metaDescriptionEs:
      "Cuidado de trastornos del procesamiento sensorial en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y terapia craniosacral para ayudar a niños y adultos con sensibilidad sensorial y dificultades de integración.",
    intro:
      "Sensory processing difficulties — over-sensitivity or under-sensitivity to touch, sound, light, or movement — have a neurological basis that chiropractic care can address by normalizing spinal and craniosacral input to the brain.",
    introEs:
      "Las dificultades de procesamiento sensorial —hipersensibilidad o hiposensibilidad al tacto, sonido, luz o movimiento— tienen una base neurológica que el cuidado quiropráctico puede abordar normalizando la entrada espinal y craniosacral al cerebro.",
    whatIs:
      "Sensory processing disorder (SPD) occurs when the brain has difficulty receiving and responding appropriately to sensory input from the environment. Children and adults with SPD may be hypersensitive (over-responding) or hyposensitive (under-responding) to various sensory stimuli, significantly affecting daily functioning, behavior, and social interaction. The brainstem plays a central role in sensory modulation, filtering the enormous amount of sensory input the body receives and prioritizing what reaches conscious attention. Upper cervical subluxations and craniosacral restrictions that impair brainstem function disrupt this filtering process, potentially contributing to sensory dysregulation. Optimizing brainstem function through gentle chiropractic care can improve sensory integration.",
    whatIsEs:
      "El trastorno de procesamiento sensorial (TPS) ocurre cuando el cerebro tiene dificultad para recibir y responder apropiadamente a la entrada sensorial del ambiente. Los niños y adultos con TPS pueden ser hipersensibles (sobre-respondiendo) o hiposensibles (bajo-respondiendo) a varios estímulos sensoriales, afectando significativamente el funcionamiento diario, el comportamiento y la interacción social. El tallo cerebral juega un papel central en la modulación sensorial, filtrando la enorme cantidad de entrada sensorial que el cuerpo recibe y priorizando lo que llega a la atención consciente. Las subluxaciones cervicales superiores y las restricciones craniosacrale que afectan la función del tallo cerebral interrumpen este proceso de filtración, posiblemente contribuyendo a la disregulación sensorial. Optimizar la función del tallo cerebral a través del cuidado quiropráctico suave puede mejorar la integración sensorial.",
    symptoms: [
      "Overreaction to touch, sound, light, or movement",
      "Meltdowns triggered by clothing textures or unexpected touch",
      "Difficulty in noisy or visually busy environments",
      "Sensory-seeking behavior — craving movement, deep pressure, or specific textures",
      "Poor balance, coordination, or motor planning",
      "Social difficulties related to sensory overwhelm",
    ],
    symptomsEs: [
      "Sobre-reacción al tacto, sonido, luz o movimiento",
      "Colapsos desencadenados por texturas de ropa o tacto inesperado",
      "Dificultad en ambientes ruidosos o visualmente ocupados",
      "Comportamiento de búsqueda sensorial —anhelando movimiento, presión profunda o texturas específicas",
      "Equilibrio pobre, coordinación o planificación motora",
      "Dificultades sociales relacionadas con la sobrecarga sensorial",
    ],
    causes: [
      "Brainstem dysregulation from upper cervical subluxation",
      "Craniosacral restriction affecting sensory processing pathways",
      "Autism spectrum disorder (common comorbidity)",
      "Birth trauma or prematurity",
      "Developmental differences in sensory pathway maturation",
      "Chronic stress sensitizing the nervous system",
    ],
    causesEs: [
      "Disregulación del tallo cerebral por subluxación cervical superior",
      "Restricción craniosacral afectando las vías de procesamiento sensorial",
      "Trastorno del espectro autista (comorbilidad común)",
      "Trauma de parto o prematuridad",
      "Diferencias del desarrollo en la maduración de las vías sensoriales",
      "Estrés crónico sensibilizando el sistema nervioso",
    ],
    chiropracticTreatment:
      "For children with sensory processing challenges, Dr. Foss uses an extremely gentle, developmentally appropriate approach. Upper cervical and craniosacral corrections improve brainstem function and normalize the sensory gating mechanisms that filter incoming signals. SOT Category II protocols address the sacroiliac and pelvic proprioceptive input that contributes to postural and vestibular sensory integration. Many families report improved sensory tolerance, better sleep, and easier daily routines following consistent chiropractic care. Chiropractic care is best integrated with occupational therapy sensory integration protocols for comprehensive benefit.",
    chiropracticTreatmentEs:
      "Para los niños con desafíos de procesamiento sensorial, el Dr. Foss utiliza un enfoque extremadamente suave y apropiado para el desarrollo. Las correcciones cervicales superiores y craniosacrale mejoran la función del tallo cerebral y normalizan los mecanismos de compuerta sensorial que filtran las señales entrantes. Los protocolos SOT Categoría II abordan la entrada propioceptiva sacroilíaca y pélvica que contribuye a la integración sensorial postural y vestibular. Muchas familias reportan tolerancia sensorial mejorada, mejor sueño y rutinas diarias más fáciles después del cuidado quiropráctico consistente. El cuidado quiropráctico se integra mejor con protocolos de integración sensorial de terapia ocupacional para beneficio integral.",
    additionalTreatments: [],
  },
  {
    slug: "tongue-tie",
    title: "Tongue Tie (Ankyloglossia)",
    titleEs: "Frenillo Lingual (Anquiloglosia)",
    image: "/images/conditions/tonguetie.jpg",
    metaDescription:
      "Tongue tie care in San Antonio TX. Pura Vida Chiropractic provides chiropractic and craniosacral support for tongue tie — before and after frenotomy — for optimal nursing, speech, and airway outcomes.",
    metaDescriptionEs:
      "Cuidado del frenillo lingual en San Antonio, TX. Pura Vida Chiropractic proporciona apoyo quiropráctico y craniosacral para el frenillo lingual antes y después de la frenectomía para óptimos resultados en la lactancia, habla y vías aéreas.",
    intro:
      "Tongue tie affects far more than nursing — it impacts airway development, speech, and whole-body posture. Pura Vida Chiropractic provides the chiropractic and craniosacral support that makes tongue tie treatment more complete and lasting.",
    introEs:
      "El frenillo lingual afecta mucho más que la lactancia —impacta el desarrollo de las vías respiratorias, el habla y la postura de todo el cuerpo. Pura Vida Chiropractic proporciona el apoyo quiropráctico y craniosacral que hace que el tratamiento del frenillo sea más completo y duradero.",
    whatIs:
      "Ankyloglossia (tongue tie) occurs when the lingual frenulum — the tissue connecting the tongue to the floor of the mouth — is too short, tight, or incorrectly attached, restricting tongue mobility. The tongue is the body's natural palate expander and airway maintainer: proper tongue posture resting on the roof of the mouth is essential for maxillary arch development, nasal breathing, and craniofacial growth. When restricted, the tongue cannot maintain this posture, contributing to a narrow palate, mouth breathing, sleep-disordered breathing, and spinal postural changes that extend all the way down the spine. Chiropractic and craniosacral care addresses these whole-body downstream effects.",
    whatIsEs:
      "La anquiloglosia (frenillo lingual) ocurre cuando el frenillo lingual —el tejido que conecta la lengua al piso de la boca— es demasiado corto, tenso o incorrectamente adherido, restringiendo la movilidad de la lengua. La lengua es el expansor natural del paladar del cuerpo y mantenedor de las vías respiratorias: la postura correcta de la lengua descansando en el techo de la boca es esencial para el desarrollo del arco maxilar, la respiración nasal y el crecimiento craneofacial. Cuando está restringida, la lengua no puede mantener esta postura, contribuyendo a un paladar estrecho, respiración bucal, trastorno del sueño relacionado con la respiración y cambios posturales espinales que se extienden por toda la columna vertebral. El cuidado quiropráctico y craniosacral aborda estos efectos descendentes de todo el cuerpo.",
    symptoms: [
      "Difficulty latching for breastfeeding or prolonged nursing sessions",
      "Speech articulation difficulties (especially 't', 'd', 'l', 'r', 'n')",
      "Narrow, high-arched palate or crowded teeth",
      "Mouth breathing, especially during sleep",
      "Neck tension, forward head posture, and spinal changes",
      "Sleep apnea or snoring in children and adults",
    ],
    symptomsEs: [
      "Dificultad para prenderse al pecho o sesiones prolongadas de lactancia",
      "Dificultades de articulación del habla (especialmente 't', 'd', 'l', 'r', 'n')",
      "Paladar estrecho y alto arqueado o dientes amontonados",
      "Respiración bucal, especialmente durante el sueño",
      "Tensión del cuello, postura de cabeza hacia adelante y cambios espinales",
      "Apnea del sueño o ronquidos en niños y adultos",
    ],
    causes: [
      "Genetic factors affecting frenulum development",
      "Disruption of frenulum resorption during fetal development",
      "Family history of tongue or lip tie",
      "Associated with MTHFR genetic variant in some families",
    ],
    causesEs: [
      "Factores genéticos que afectan el desarrollo del frenillo",
      "Interrupción de la resorción del frenillo durante el desarrollo fetal",
      "Antecedentes familiares de frenillo lingual o labial",
      "Asociado con la variante genética MTHFR en algunas familias",
    ],
    chiropracticTreatment:
      "Dr. Foss provides chiropractic and craniosacral support that is essential before and after tongue tie release (frenotomy). Before release, chiropractic care prepares the craniosacral system and releases the compensatory tensions in the upper cervical spine, temporal bones, and jaw that have developed due to the tongue restriction. After release, chiropractic care helps the nervous system integrate the new range of tongue motion and prevents the same compensatory patterns from re-emerging. This integrated approach significantly improves frenotomy outcomes and supports optimal craniofacial and spinal development.",
    chiropracticTreatmentEs:
      "El Dr. Foss proporciona apoyo quiropráctico y craniosacral que es esencial antes y después de la liberación del frenillo (frenotomía). Antes de la liberación, el cuidado quiropráctico prepara el sistema craniosacral y libera las tensiones compensatorias en la columna cervical superior, los huesos temporales y la mandíbula que se han desarrollado debido a la restricción de la lengua. Después de la liberación, el cuidado quiropráctico ayuda al sistema nervioso a integrar el nuevo rango de movimiento de la lengua y previene que los mismos patrones compensatorios reaparezcan. Este enfoque integrado mejora significativamente los resultados de la frenotomía y apoya el desarrollo craneofacial y espinal óptimo.",
    additionalTreatments: [],
  },
  {
    slug: "scoliosis",
    title: "Scoliosis | SOT Chiropractor San Antonio TX",
    titleEs: "Escoliosis | Quiropráctico SOT San Antonio TX",
    image: "/images/conditions/scoliosis.jpg",
    metaDescription:
      "Scoliosis care in San Antonio, TX. Pura Vida Chiropractic — SOT chiropractic San Antonio — uses SOT to improve functional scoliosis, reduce progression risk, and relieve spinal curvature pain. Pediatric chiropractor San Antonio serving Stone Oak, Castle Hills, and Helotes.",
    metaDescriptionEs:
      "Cuidado de escoliosis en San Antonio, TX. Pura Vida Chiropractic utiliza SOT para mejorar la escoliosis funcional, reducir el riesgo de progresión y aliviar el dolor de la curvatura espinal.",
    intro:
      "Scoliosis — abnormal lateral curvature of the spine — can be significantly improved with the right chiropractic care, especially when detected early. Dr. Foss uses SOT to address the functional components of scoliosis.",
    introEs:
      "Escoliosis —curvatura lateral anormal de la columna vertebral— puede mejorarse significativamente con el cuidado quiropráctico adecuado, especialmente cuando se detecta temprano. El Dr. Foss utiliza SOT para abordar los componentes funcionales de la escoliosis.",
    whatIs:
      "Scoliosis is a lateral curvature of the spine of 10 degrees or more. Idiopathic scoliosis — the most common type — has no single known cause but involves a combination of genetic, neurological, and biomechanical factors. Functional scoliosis arises from pelvic imbalance, leg length discrepancy, or muscle imbalance and is highly responsive to chiropractic correction. Structural scoliosis involves fixed curves that are more resistant to change but can still be managed to reduce progression and relieve associated symptoms. SOT chiropractic addresses both the structural asymmetry of the spine and the neurological factors that may be driving or perpetuating the curvature.",
    whatIsEs:
      "Escoliosis es una curvatura lateral de la columna vertebral de 10 grados o más. Escoliosis idiopática —el tipo más común— no tiene una causa única conocida pero involucra una combinación de factores genéticos, neurológicos y biomecánicos. Escoliosis funcional surge de desequilibrio pélvico, discrepancia de longitud de pierna o desequilibrio muscular y es altamente responsiva a la corrección quiroprática. Escoliosis estructural involucra curvas fijas que son más resistentes al cambio pero aún pueden manejarse para reducir la progresión y aliviar los síntomas asociados. La quiropráctica SOT aborda tanto la asimetría estructural de la columna vertebral como los factores neurológicos que pueden estar impulsando o perpetuando la curvatura.",
    symptoms: [
      "Visible lateral curvature of the spine",
      "One shoulder or hip higher than the other",
      "One shoulder blade more prominent than the other",
      "Uneven waist or rib hump on forward bending",
      "Back pain, fatigue, and reduced flexibility",
      "Respiratory difficulty in severe cases",
    ],
    symptomsEs: [
      "Curvatura lateral visible de la columna vertebral",
      "Un hombro o cadera más alta que el otro",
      "Un omóplato más prominente que el otro",
      "Cintura desigual o joroba costal al inclinarse hacia adelante",
      "Dolor de espalda, fatiga y flexibilidad reducida",
      "Dificultad respiratoria en casos severos",
    ],
    causes: [
      "Idiopathic factors (most adolescent scoliosis)",
      "Pelvic obliquity and functional leg length discrepancy",
      "Neuromuscular conditions affecting postural muscle balance",
      "Congenital vertebral anomalies",
      "Connective tissue disorders (Marfan syndrome, Ehlers-Danlos)",
    ],
    causesEs: [
      "Factores idiopáticos (la mayoría de la escoliosis adolescente)",
      "Oblicuidad pélvica y discrepancia de longitud de pierna funcional",
      "Condiciones neuromusculares que afectan el equilibrio muscular postural",
      "Anomalías vertebrales congénitas",
      "Trastornos del tejido conectivo (síndrome de Marfan, Ehlers-Danlos)",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a detailed postural and spinal analysis to characterize the scoliosis — its type, location, degree of curvature, and functional vs. structural components. SOT pelvic leveling addresses the foundational imbalance that drives and perpetuates many scoliosis patterns. Specific spinal corrections target the areas of greatest restriction and rotation. For adolescents still growing, regular monitoring tracks progression and early intervention provides the best outcomes. Chiropractic scoliosis care does not guarantee curve reduction but consistently reduces progression risk, alleviates associated pain, and improves spinal function and quality of life.",
    chiropracticTreatmentEs:
      "El Dr. Foss realiza un análisis postural y espinal detallado para caracterizar la escoliosis —su tipo, ubicación, grado de curvatura y componentes funcionales versus estructurales. El nivelamiento pélvico SOT aborda el desequilibrio fundamental que impulsa y perpetúa muchos patrones de escoliosis. Las correcciones espinales específicas se dirigen a las áreas de mayor restricción y rotación. Para adolescentes aún en crecimiento, el monitoreo regular rastrea la progresión y la intervención temprana proporciona los mejores resultados. El cuidado quiropráctico de la escoliosis no garantiza la reducción de la curva pero reduce consistentemente el riesgo de progresión, alivia el dolor asociado e mejora la función espinal y la calidad de vida.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "scheuermanns-disease",
    title: "Scheuermann's Disease",
    titleEs: "Enfermedad de Scheuermann",
    image: "/images/conditions/scheumanns.jpg",
    metaDescription:
      "Scheuermann's disease care in San Antonio TX. Pura Vida Chiropractic uses SOT and Class IV Laser to manage the thoracic kyphosis and pain of Scheuermann's disease.",
    metaDescriptionEs:
      "Cuidado de la enfermedad de Scheuermann en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y láser Clase IV para manejar la cifosis torácica y el dolor de la enfermedad de Scheuermann.",
    intro:
      "Scheuermann's disease — a structural thoracic kyphosis developing in adolescence — causes progressive rounding of the upper back, pain, and postural changes that respond well to chiropractic management.",
    introEs:
      "Enfermedad de Scheuermann —una cifosis torácica estructural que se desarrolla en la adolescencia— causa redondez progresiva de la espalda superior, dolor y cambios posturales que responden bien al manejo quiropráctico.",
    whatIs:
      "Scheuermann's disease is a growth disorder of the thoracic spine in which the anterior portions of multiple vertebral bodies grow less than the posterior portions, causing a wedge-shaped deformity and progressive kyphosis (rounding) of the thoracic spine. It typically becomes apparent during the adolescent growth spurt and is diagnosed when three or more consecutive thoracic vertebrae each show 5 or more degrees of anterior wedging. The resulting hyperkyphosis causes back pain, reduced thoracic mobility, and significant postural changes. Early chiropractic management can slow progression, relieve pain, and maintain as much thoracic mobility as possible.",
    whatIsEs:
      "La enfermedad de Scheuermann es un trastorno del crecimiento de la columna torácica en el cual las porciones anteriores de múltiples cuerpos vertebrales crecen menos que las porciones posteriores, causando una deformidad en forma de cuña y cifosis progresiva (redondez) de la columna torácica. Típicamente se hace aparente durante el crecimiento acelerado adolescente y se diagnostica cuando tres o más vértebras torácicas consecutivas muestran cada una 5 o más grados de acoñamiento anterior. La hipercifosis resultante causa dolor de espalda, movilidad torácica reducida y cambios posturales significativos. El manejo quiropráctico temprano puede ralentizar la progresión, aliviar el dolor y mantener la mayor movilidad torácica posible.",
    symptoms: [
      "Visible rounding of the upper back (hyperkyphosis)",
      "Mid and upper back pain — often worse with activity",
      "Reduced flexibility in thoracic extension",
      "Fatigue in the back muscles from postural compensation",
      "Tight hamstrings and anterior chest muscles",
      "Adolescent onset, typically between ages 10–15",
    ],
    symptomsEs: [
      "Redondez visible de la espalda superior (hipercifosis)",
      "Dolor de espalda media y superior —a menudo peor con la actividad",
      "Flexibilidad reducida en la extensión torácica",
      "Fatiga en los músculos de la espalda por compensación postural",
      "Isquiotibiales y músculos pectorales anteriores tensos",
      "Inicio adolescente, típicamente entre 10 y 15 años",
    ],
    causes: [
      "Abnormal endochondral ossification during the adolescent growth spurt",
      "Genetic predisposition",
      "Repetitive loading of the immature thoracic spine",
      "Rapid growth relative to thoracic extensibility",
    ],
    causesEs: [
      "Osificación endocondral anormal durante el crecimiento acelerado adolescente",
      "Predisposición genética",
      "Carga repetida de la columna torácica inmadura",
      "Crecimiento rápido en relación con la extensibilidad torácica",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses Scheuermann's disease through SOT thoracic mobilization and extension-based corrections that work with the spine's available mobility without forcing restricted segments. Pelvic balancing reduces the compensatory lumbar hyperlordosis that accompanies thoracic kyphosis. Myofascial release targeting the tight anterior chest musculature and hip flexors helps address the secondary postural adaptations. For adolescents still growing, consistent chiropractic care combined with targeted home exercises provides the best outcome for managing progression and maintaining quality of life.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la enfermedad de Scheuermann a través de la movilización torácica SOT y correcciones basadas en extensión que funcionan con la movilidad disponible de la columna sin forzar los segmentos restringidos. El equilibrio pélvico reduce la hiperlordosis lumbar compensatoria que acompaña la cifosis torácica. La liberación miofascial dirigida a la musculatura pectoral anterior tensa y flexores de cadera ayuda a abordar las adaptaciones posturales secundarias. Para adolescentes aún en crecimiento, el cuidado quiropráctico consistente combinado con ejercicios caseros específicos proporciona el mejor resultado para manejar la progresión y mantener la calidad de vida.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "forward-head-posture",
    title: "Forward Head Posture",
    titleEs: "Postura de Cabeza Adelantada",
    image: "/images/conditions/forwardheadposture.jpg",
    metaDescription:
      "Forward head posture correction in San Antonio TX. Pura Vida Chiropractic uses SOT to restore the cervical curve and correct head-forward posture causing neck pain and headaches.",
    metaDescriptionEs:
      "Corrección de postura de cabeza adelantada en San Antonio, TX. Pura Vida Chiropractic utiliza SOT para restaurar la curva cervical y corregir la postura que causa dolor de cuello y dolores de cabeza.",
    intro:
      "Forward head posture — the head sitting inches in front of the shoulders — is one of the most common postural dysfunctions of the digital age. Correcting it requires more than exercises; it requires restoring the cervical spinal curves that hold the head properly.",
    introEs:
      "Postura de cabeza adelantada —la cabeza sentada pulgadas frente a los hombros— es una de las disfunciones posturales más comunes de la era digital. Corregirla requiere más que ejercicios; requiere restaurar las curvas espinales cervicales que sostienen la cabeza correctamente.",
    whatIs:
      "Forward head posture (FHP) occurs when the head sits anterior to the gravitational centerline of the body rather than directly over the shoulders. For every inch the head moves forward, an additional 10 pounds of effective load is placed on the cervical spine — so a head positioned 3 inches forward creates 30 extra pounds of force on the neck. This progressive stress degenerates cervical discs, strains the supporting musculature, and compresses nerves — leading to neck pain, headaches, shoulder tension, and over time, permanent changes to cervical spinal curves. Restoring proper head position requires correcting both the vertebral subluxations and the loss of cervical lordosis that allows FHP to persist.",
    whatIsEs:
      "Postura adelantada de la cabeza (PAC) ocurre cuando la cabeza se sienta anterior a la línea central gravitacional del cuerpo en lugar de estar directamente sobre los hombros. Por cada pulgada que la cabeza se mueve hacia adelante, se coloca una carga efectiva adicional de 10 libras en la columna cervical —entonces una cabeza posicionada 3 pulgadas hacia adelante crea 30 libras extra de fuerza en el cuello. Este estrés progresivo degenera los discos cervicales, tensa la musculatura de apoyo y comprime los nervios —llevando a dolor de cuello, dolores de cabeza, tensión de hombros y, con el tiempo, cambios permanentes en las curvas espinales cervicales. Restaurar la posición correcta de la cabeza requiere corregir tanto las subluxaciones vertebrales como la pérdida de lordosis cervical que permite que PAC persista.",
    symptoms: [
      "Head visibly in front of the shoulders when viewed from the side",
      "Neck, upper back, and shoulder muscle fatigue and tension",
      "Reduced cervical lordosis (flattening of the neck curve)",
      "Headaches at the base of the skull",
      "Jaw pain and TMJ tension",
      "Rounded upper back compensating for forward head position",
    ],
    symptomsEs: [
      "Cabeza visiblemente frente a los hombros cuando se ve de lado",
      "Cuello, espalda superior y fatiga muscular de hombros y tensión",
      "Lordosis cervical reducida (aplanamiento de la curva del cuello)",
      "Dolores de cabeza en la base del cráneo",
      "Dolor de mandíbula y tensión ATM",
      "Espalda superior redondeada compensando la posición de cabeza adelantada",
    ],
    causes: [
      "Prolonged phone, computer, and tablet use pulling the head forward",
      "Extended sitting without lumbar and thoracic support",
      "Loss of cervical lordosis from prior injury or chronic subluxation",
      "Weak deep cervical flexor and scapular stabilizing muscles",
      "Sleeping on too many pillows",
    ],
    causesEs: [
      "Uso prolongado de teléfono, computadora y tableta jalando la cabeza hacia adelante",
      "Sedestación prolongada sin apoyo lumbar y torácico",
      "Pérdida de lordosis cervical por lesión previa o subluxación crónica",
      "Músculos flexores cervicales profundos débiles y músculos estabilizadores escapulares",
      "Dormir en demasiadas almohadas",
    ],
    chiropracticTreatment:
      "Correcting FHP requires restoring the natural cervical curve (lordosis) that is lost as the head migrates forward. Dr. Foss uses SOT cervical corrections and cervical curve rehabilitation techniques to restore lordosis and reduce the load on the spine. Thoracic adjustments address the compensatory rounding of the upper back that accompanies FHP. Home stretching and strengthening exercises targeting the deep cervical flexors and scapular stabilizers are prescribed to support the structural correction between visits. Many patients notice visible postural improvement within 30–60 days of consistent care.",
    chiropracticTreatmentEs:
      "Corregir PAC requiere restaurar la curva cervical natural (lordosis) que se pierde cuando la cabeza migra hacia adelante. El Dr. Foss utiliza correcciones cervicales SOT y técnicas de rehabilitación de la curva cervical para restaurar la lordosis y reducir la carga en la columna. Los ajustes torácicos abordan el redondeamiento compensatorio de la espalda superior que acompaña PAC. Se prescriben ejercicios de estiramiento y fortalecimiento en el hogar dirigidos a los flexores cervicales profundos y estabilizadores escapulares para apoyar la corrección estructural entre visitas. Muchos pacientes notan una mejora postural visible dentro de 30 a 60 días de cuidado consistente.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "thoracic-outlet-syndrome",
    title: "Thoracic Outlet Syndrome",
    titleEs: "Síndrome del Desfiladero Torácico",
    image: "/images/conditions/thoracicoutletsyndrome.jpg",
    metaDescription:
      "Thoracic outlet syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT and soft-tissue therapy to decompress the brachial plexus and relieve TOS symptoms.",
    metaDescriptionEs:
      "Tratamiento del síndrome del desfiladero torácico en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y terapia de tejidos blandos para descomprimir el plexo braquial y aliviar los síntomas.",
    intro:
      "Thoracic outlet syndrome causes arm pain, numbness, and weakness from nerve and blood vessel compression in the neck and chest. Chiropractic care at Pura Vida addresses the structural causes of this compression.",
    introEs:
      "Síndrome del desfiladero torácico causa dolor de brazo, entumecimiento y debilidad por compresión de nervios y vasos sanguíneos en el cuello y pecho. El cuidado quiropráctico en Pura Vida aborda las causas estructurales de esta compresión.",
    whatIs:
      "Thoracic outlet syndrome (TOS) involves compression of the nerves (brachial plexus), arteries, or veins as they pass through the thoracic outlet — the space between the collarbone and the first rib. Neurogenic TOS (the most common type) compresses the brachial plexus, causing arm pain, numbness, and weakness. Compression can occur at three anatomical sites: the scalene triangle (between anterior and middle scalene muscles), the costoclavicular space (between the clavicle and first rib), and the subcoracoid space (beneath the pectoralis minor). Poor posture, forward head position, and first rib subluxation are primary contributors. Chiropractic correction of these structural factors is central to TOS management.",
    whatIsEs:
      "Síndrome del desfiladero torácico (SDT) implica compresión de los nervios (plexo braquial), arterias o venas mientras pasan por el desfiladero torácico —el espacio entre la clavícula y la primera costilla. SDT neurogénico (el tipo más común) comprime el plexo braquial, causando dolor de brazo, entumecimiento y debilidad. La compresión puede ocurrir en tres sitios anatómicos: el triángulo escaleno (entre los músculos escalenos anterior y medio), el espacio costoclavicular (entre la clavícula y la primera costilla) y el espacio subcoracoideo (debajo del pectoral menor). Mala postura, posición de cabeza adelantada y subluxación de la primera costilla son contribuyentes primarios. La corrección quiroprática de estos factores estructurales es central para el manejo de SDT.",
    symptoms: [
      "Pain, numbness, or tingling in the arm, hand, or fingers",
      "Weakness in the hand or difficulty with fine motor tasks",
      "Arm fatigue with overhead activities",
      "Neck and shoulder pain on the affected side",
      "Hands that turn cold or white with activity (vascular TOS)",
      "Symptoms worsening with arms raised or carrying objects",
    ],
    symptomsEs: [
      "Dolor, entumecimiento u hormigueo en el brazo, mano o dedos",
      "Debilidad en la mano o dificultad con tareas motoras finas",
      "Fatiga del brazo con actividades elevadas",
      "Dolor de cuello y hombro en el lado afectado",
      "Manos que se vuelven frías o blancas con la actividad (SDT vascular)",
      "Síntomas empeorando con los brazos levantados o cargando objetos",
    ],
    causes: [
      "First rib subluxation narrowing the costoclavicular space",
      "Scalene muscle hypertrophy or spasm from cervical subluxation",
      "Forward head posture and rounded shoulder positioning",
      "Cervical rib (accessory bone) narrowing the thoracic outlet",
      "Prior clavicle fracture or AC joint injury",
      "Repetitive overhead work or throwing",
    ],
    causesEs: [
      "Subluxación de la primera costilla estrechando el espacio costoclavicular",
      "Hipertrofia muscular escalena o espasmo por subluxación cervical",
      "Postura de cabeza adelantada y posicionamiento redondeado de hombros",
      "Costilla cervical (hueso accesorio) estrechando el desfiladero torácico",
      "Fractura de clavícula previa o lesión de la articulación AC",
      "Trabajo repetitivo elevado o lanzamiento",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses TOS through first rib adjustments — correcting the elevated or anteriorly displaced first rib that narrows the costoclavicular space. Upper cervical and thoracic corrections reduce the tension in the scalene muscles that compress the brachial plexus at the scalene triangle. Soft-tissue release targeting the pectoralis minor and scalene muscles further decompresses the neurovascular structures. Forward head posture and rounded shoulder corrections eliminate the postural component. Most TOS patients experience significant symptom reduction within a structured course of chiropractic care.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda SDT a través de ajustes de la primera costilla —corrigiendo la primera costilla elevada o desplazada anteriormente que estrecha el espacio costoclavicular. Las correcciones cervicales superiores y torácicas reducen la tensión en los músculos escalenos que comprimen el plexo braquial en el triángulo escaleno. La liberación de tejido blando dirigida al pectoral menor y músculos escalenos descomprime aún más las estructuras neurovasculares. Las correcciones de postura de cabeza adelantada y hombros redondeados eliminan el componente postural. La mayoría de los pacientes con SDT experimentan reducción significativa de síntomas dentro de un curso estructurado de cuidado quiropráctico.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder",
    titleEs: "Hombro Congelado",
    image: "/images/conditions/frozenshoulder.jpg",
    metaDescription:
      "Frozen shoulder treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to restore shoulder range of motion and resolve adhesive capsulitis.",
    metaDescriptionEs:
      "Tratamiento del hombro congelado en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, terapia de ondas de choque, SoftWave y láser Clase IV para restaurar el rango de movimiento del hombro.",
    intro:
      "Frozen shoulder (adhesive capsulitis) — the progressive loss of shoulder mobility accompanied by severe pain — is a challenging condition that responds well to a combination of chiropractic and regenerative therapies.",
    introEs:
      "Hombro congelado (capsulitis adhesiva) —la pérdida progresiva de movilidad del hombro acompañada de dolor severo— es una condición desafiante que responde bien a una combinación de terapias quiroprácticas y regenerativas.",
    whatIs:
      "Adhesive capsulitis is characterized by inflammation and thickening of the shoulder joint capsule, followed by the formation of adhesions (scar tissue bands) that progressively restrict shoulder movement. The condition typically progresses through three phases: freezing (painful and increasingly stiff), frozen (stiff with reduced pain), and thawing (gradual return of motion). The cervical spine plays an important role — cervical nerve root irritation disrupts the normal neurological signaling to the shoulder, and sympathetic nervous system activation from upper thoracic subluxation perpetuates the inflammatory cascade. Addressing both the shoulder and the spinal contributors is essential for comprehensive recovery.",
    whatIsEs:
      "Capsulitis adhesiva se caracteriza por inflamación y engrosamiento de la cápsula articular del hombro, seguido por la formación de adhesiones (bandas de tejido cicatricial) que restringen progresivamente el movimiento del hombro. La condición típicamente progresa a través de tres fases: congelación (dolorosa e incrementalmente rígida), congelado (rígido con dolor reducido) y descongelación (retorno gradual del movimiento). La columna cervical juega un papel importante —la irritación de la raíz nerviosa cervical interrumpe la señalización neurológica normal al hombro, y la activación del sistema nervioso simpático por subluxación torácica superior perpetúa la cascada inflamatoria. Abordar tanto el hombro como los contribuyentes espinales es esencial para la recuperación integral.",
    symptoms: [
      "Gradual onset of shoulder pain over weeks to months",
      "Progressive loss of shoulder range of motion in all directions",
      "Severe pain with end-range movement",
      "Inability to raise the arm overhead or reach behind the back",
      "Night pain — unable to lie on the affected shoulder",
      "Muscle atrophy from disuse",
    ],
    symptomsEs: [
      "Inicio gradual del dolor de hombro a lo largo de semanas a meses",
      "Pérdida progresiva del rango de movimiento del hombro en todas las direcciones",
      "Dolor severo con movimiento de final de rango",
      "Incapacidad para levantar el brazo sobre la cabeza o alcanzar detrás de la espalda",
      "Dolor nocturno —incapaz de acostarse sobre el hombro afectado",
      "Atrofia muscular por desuso",
    ],
    causes: [
      "Post-immobilization (after injury, surgery, or sling use)",
      "Diabetes mellitus increasing capsular inflammation risk",
      "Cervical nerve root irritation disrupting shoulder innervation",
      "Upper thoracic subluxation activating sympathetic inflammation",
      "Rotator cuff injury triggering inflammatory capsulitis",
      "Autoimmune dysregulation",
    ],
    causesEs: [
      "Post-inmovilización (después de lesión, cirugía o uso de cabestrillo)",
      "Diabetes mellitus aumentando el riesgo de inflamación capsular",
      "Irritación de la raíz nerviosa cervical disrumpiendo la inervación del hombro",
      "Subluxación torácica superior activando inflamación simpática",
      "Lesión del manguito rotador desencadenando capsulitis inflamatoria",
      "Disregulación autoinmune",
    ],
    chiropracticTreatment:
      "Dr. Foss takes a multi-dimensional approach to frozen shoulder. SOT cervical corrections at C4–C6 reduce the nerve root irritation that perpetuates shoulder inflammation. Upper thoracic adjustments normalize autonomic nerve tone and reduce the sympathetic-driven inflammation in the joint capsule. Glenohumeral joint mobilization within the available range maintains and gradually improves mobility. Regenerative therapies are applied directly to the shoulder capsule to break down adhesions, reduce inflammation, and accelerate the remodeling of scar tissue. This combined approach typically shortens the frozen phase significantly and accelerates the thawing phase.",
    chiropracticTreatmentEs:
      "El Dr. Foss adopta un enfoque multidimensional para el hombro congelado. Las correcciones cervicales SOT en C4-C6 reducen la irritación de la raíz nerviosa que perpetúa la inflamación del hombro. Los ajustes torácicos superiores normalizan el tono del nervio autonómico y reducen la inflamación impulsada por simpatía en la cápsula articular. La movilización de la articulación glenohumeral dentro del rango disponible mantiene e mejora gradualmente la movilidad. Las terapias regenerativas se aplican directamente a la cápsula del hombro para descomponer adherencias, reducir la inflamación y acelerar el remodelado de tejido cicatricial. Este enfoque combinado típicamente acorta la fase congelada significativamente y acelera la fase de descongelación.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "rotator-cuff-injuries",
    title: "Rotator Cuff Injuries",
    titleEs: "Lesiones del Manguito Rotador",
    image: "/images/conditions/rotatorcufftear.jpg",
    metaDescription:
      "Rotator cuff injury treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, SoftWave, and Class IV Laser to heal rotator cuff tears and tendinopathy without surgery.",
    metaDescriptionEs:
      "Tratamiento de lesiones del manguito rotador en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, ondas de choque, SoftWave y láser Clase IV para sanar desgarros del manguito rotador sin cirugía.",
    intro:
      "Rotator cuff injuries — from tendinopathy to partial and full tears — are among the most common shoulder conditions. Our multi-modal approach combining chiropractic correction with regenerative therapies provides an effective non-surgical path to recovery.",
    introEs:
      "Lesiones del manguito rotador —desde tendinopatía hasta desgarros parciales y completos— están entre las condiciones de hombro más comunes. Nuestro enfoque multimodal combinando corrección quiroprática con terapias regenerativas proporciona un camino no quirúrgico efectivo para la recuperación.",
    whatIs:
      "The rotator cuff is a group of four muscles and their tendons (supraspinatus, infraspinatus, teres minor, subscapularis) that stabilize the humeral head in the shoulder socket. Rotator cuff injuries range from tendinopathy (tendon degeneration and inflammation) to partial or full-thickness tears. Most injuries develop from a combination of repetitive microtrauma, age-related degeneration, and abnormal shoulder biomechanics secondary to cervical or thoracic dysfunction. The supraspinatus tendon is most commonly affected and, when torn, fails to heal well on its own due to poor blood supply. Regenerative therapies combined with chiropractic correction of the underlying biomechanical cause provide the best non-surgical outcome.",
    whatIsEs:
      "El manguito rotador es un grupo de cuatro músculos y sus tendones (supraespinoso, infraespinoso, redondo menor, subescapular) que estabilizan la cabeza del húmero en la cavidad del hombro. Las lesiones del manguito rotador van desde tendinopatía (degeneración e inflamación del tendón) hasta desgarros parciales o de espesor completo. La mayoría de las lesiones se desarrollan a partir de una combinación de microtrauma repetitivo, degeneración relacionada con la edad y biomecánica anormal del hombro secundaria a disfunción cervical o torácica. El tendón supraespinoso es el más comúnmente afectado y, cuando se desgarra, no sana bien por sí solo debido al suministro de sangre pobre. Las terapias regenerativas combinadas con corrección quiroprática de la causa biomecánica subyacente proporcionan el mejor resultado no quirúrgico.",
    symptoms: [
      "Shoulder pain with arm elevation, reaching overhead, or reaching behind",
      "Weakness in the shoulder — difficulty lifting objects",
      "Night pain — unable to sleep on the affected shoulder",
      "Clicking, catching, or grinding with shoulder movement",
      "Pain at the outer shoulder or deltoid with resisted movement",
      "Gradual onset or sudden onset from a fall or forceful movement",
    ],
    symptomsEs: [
      "Dolor de hombro con elevación del brazo, alcance superior o alcance detrás",
      "Debilidad en el hombro —dificultad levantando objetos",
      "Dolor nocturno —incapaz de dormir sobre el hombro afectado",
      "Chasquido, atrapamiento o rechinamiento con movimiento del hombro",
      "Dolor en el hombro externo o deltoides con movimiento resistido",
      "Inicio gradual u inicio repentino de una caída o movimiento forzado",
    ],
    causes: [
      "Repetitive overhead activity causing cumulative tendon microtrauma",
      "Age-related tendon degeneration (degenerative tear)",
      "Abnormal shoulder biomechanics from cervical or thoracic dysfunction",
      "Shoulder impingement progressively fraying the supraspinatus",
      "Acute trauma — fall on outstretched arm or forceful pulling",
      "Poor scapular stabilization allowing humeral head migration",
    ],
    causesEs: [
      "Actividad aérea repetitiva causando microtrauma cumulativo del tendón",
      "Degeneración del tendón relacionada con la edad (desgarro degenerativo)",
      "Biomecánica anormal del hombro por disfunción cervical o torácica",
      "Pinzamiento del hombro gastando progresivamente el supraespinoso",
      "Trauma agudo —caída en brazo extendido o tracción forzada",
      "Estabilización escapular pobre permitiendo migración de la cabeza del húmero",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the cervical and thoracic spine first, correcting the nerve root irritation (C5–C6) and scapular stabilizer dysfunction that predispose the rotator cuff to injury and impair its healing. Glenohumeral and AC joint adjustments restore normal shoulder mechanics, reducing impingement and abnormal tendon loading. This chiropractic foundation is then complemented by regenerative therapies targeting the damaged tendon directly to stimulate collagen synthesis and reduce inflammation. Most patients with tendinopathy and partial tears achieve excellent outcomes without surgery.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la columna cervical y torácica primero, corrigiendo la irritación de la raíz nerviosa (C5-C6) y la disfunción del estabilizador escapular que predispone el manguito rotador a lesión e impide su curación. Los ajustes glenohumeral y de articulación AC restauran la mecánica normal del hombro, reduciendo el pinzamiento y la carga anormal del tendón. Esta base quiroprática se complementa luego con terapias regenerativas dirigidas al tendón dañado directamente para estimular la síntesis de colágeno y reducir la inflamación. La mayoría de los pacientes con tendinopatía y desgarros parciales logran resultados excelentes sin cirugía.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "tennis-elbow",
    title: "Tennis Elbow",
    titleEs: "Codo de Tenista",
    image: "/images/conditions/tenniselbow.jpg",
    metaDescription:
      "Tennis elbow treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve lateral epicondylitis without cortisone or surgery.",
    metaDescriptionEs:
      "Tratamiento del codo de tenista en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, terapia de ondas de choque y láser Clase IV para resolver la epicondilitis lateral sin cortisona ni cirugía.",
    intro:
      "Tennis elbow (lateral epicondylitis) causes debilitating pain at the outer elbow that limits gripping and daily activity. Our combination of chiropractic correction and regenerative therapy gets to the root of this tendon injury.",
    introEs:
      "Codo de tenista (epicondilitis lateral) causa dolor debilitante en el codo externo que limita el agarre y la actividad diaria. Nuestra combinación de corrección quiroprática y terapia regenerativa llega a la raíz de esta lesión de tendón.",
    whatIs:
      "Lateral epicondylitis is a degenerative tendinopathy affecting the common extensor tendon origin at the lateral epicondyle of the humerus — primarily the extensor carpi radialis brevis. Despite the name 'epicondylitis' (implying inflammation), the primary pathology is tendon degeneration (tendinosis) with failed healing, not acute inflammation. Cervical nerve root involvement (C6–C7) is frequently overlooked — nerve root irritation at these levels directly innervates the forearm extensors and can maintain tendon pain even when the tendon itself has partially healed. A complete evaluation must include the cervical spine, not just the elbow.",
    whatIsEs:
      "Epicondilitis lateral es una tendinopatía degenerativa que afecta el origen del tendón extensor común en la apófisis lateral del húmero —principalmente el extensor carpi radialis brevis. A pesar del nombre 'epicondilitis' (implicando inflamación), la patología primaria es degeneración del tendón (tendinosis) con curación fallida, no inflamación aguda. La participación de la raíz nerviosa cervical (C6-C7) es frecuentemente pasada por alto —la irritación de la raíz nerviosa en estos niveles inerva directamente los extensores del antebrazo y puede mantener el dolor del tendón incluso cuando el tendón mismo se ha curado parcialmente. Una evaluación completa debe incluir la columna cervical, no solo el codo.",
    symptoms: [
      "Pain at the outer elbow, especially with gripping or wrist extension",
      "Weakness in grip strength",
      "Pain when shaking hands, turning a doorknob, or lifting with the palm down",
      "Morning stiffness at the elbow",
      "Tenderness directly over the lateral epicondyle",
      "Pain radiating down the forearm toward the wrist",
    ],
    symptomsEs: [
      "Dolor en el codo externo, especialmente con agarre o extensión de muñeca",
      "Debilidad en la fuerza de agarre",
      "Dolor al estrechar la mano, girar una perilla o levantar con la palma hacia abajo",
      "Rigidez matutina en el codo",
      "Sensibilidad directamente sobre la apófisis lateral",
      "Dolor que irradia por el antebrazo hacia la muñeca",
    ],
    causes: [
      "Repetitive wrist extension and gripping activities",
      "Cervical nerve root irritation (C6–C7) sensitizing the lateral forearm",
      "Poor technique in racquet sports or manual work",
      "Weakened rotator cuff altering shoulder and elbow mechanics",
      "Prolonged keyboard and mouse use",
      "Prior cortisone injections weakening the tendon",
    ],
    causesEs: [
      "Actividades repetitivas de extensión de muñeca y agarre",
      "Irritación de la raíz nerviosa cervical (C6-C7) sensibilizando el antebrazo lateral",
      "Técnica pobre en deportes de raqueta o trabajo manual",
      "Manguito rotador debilitado alterando la mecánica del hombro y codo",
      "Uso prolongado de teclado y ratón",
      "Inyecciones de cortisona previas debilitando el tendón",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the cervical spine (C6–C7), elbow, and wrist as part of a comprehensive upper extremity assessment. SOT cervical corrections address the nerve root component that sensitizes the lateral forearm and perpetuates tendon pain. Elbow joint adjustments restore normal radiohumeral mechanics. Regenerative therapies are then applied to the lateral epicondyle to directly stimulate tendon healing. This combined approach addresses both the local tendon pathology and the cervical neurological sensitization — producing better outcomes than treating the elbow in isolation.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna cervical (C6-C7), el codo y la muñeca como parte de una evaluación integral de la extremidad superior. Las correcciones cervicales SOT abordan el componente de la raíz nerviosa que sensibiliza el antebrazo lateral y perpetúa el dolor del tendón. Los ajustes de la articulación del codo restauran la mecánica radiohumeralnormal. Las terapias regenerativas se aplican luego a la apófisis lateral para estimular directamente la curación del tendón. Este enfoque combinado aborda tanto la patología local del tendón como la sensibilización neurológica cervical —produciendo mejores resultados que tratar el codo en aislamiento.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "golfers-elbow",
    title: "Golfer's Elbow",
    titleEs: "Codo de Golfista",
    image: "/images/conditions/golferselbow.jpg",
    metaDescription:
      "Golfer's elbow treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve medial epicondylitis and inner elbow pain.",
    metaDescriptionEs:
      "Tratamiento del codo de golfista en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, terapia de ondas de choque y láser Clase IV para resolver la epicondilitis medial y el dolor del codo interno.",
    intro:
      "Golfer's elbow (medial epicondylitis) causes pain and weakness at the inner elbow that interferes with gripping, forearm rotation, and sport. Our regenerative approach heals the tendon and corrects the cervical factors perpetuating it.",
    introEs:
      "Codo de golfista (epicondilitis medial) causa dolor y debilidad en el codo interno que interfiere con el agarre, rotación del antebrazo y deporte. Nuestro enfoque regenerativo cura el tendón y corrige los factores cervicales que lo perpetúan.",
    whatIs:
      "Medial epicondylitis is a degenerative tendinopathy of the common flexor-pronator tendon origin at the medial epicondyle of the humerus. Like lateral epicondylitis, the primary pathology is tendinosis rather than acute inflammation. The medial forearm flexors and pronators are affected — the muscles used in gripping with a pronated forearm, as in golf, throwing, or typing. Cervical nerve root involvement (C7–C8) contributes a neurological sensitization component that can maintain inner elbow pain despite local treatment. The ulnar nerve passes through the medial elbow and can be an additional site of entrapment contributing to inner elbow and ring/small finger symptoms.",
    whatIsEs:
      "Epicondilitis medial es una tendinopatía degenerativa del origen del tendón flexor-pronador común en la apófisis medial del húmero. Como epicondilitis lateral, la patología primaria es tendinosis en lugar de inflamación aguda. Los flexores del antebrazo medial y pronadores se ven afectados —los músculos utilizados al agarrar con antebrazo pronado, como en golf, lanzamiento o mecanografía. La participación de la raíz nerviosa cervical (C7-C8) contribuye un componente de sensibilización neurológica que puede mantener el dolor del codo interno a pesar del tratamiento local. El nervio cubital pasa por el codo medial y puede ser un sitio adicional de atrapamiento contribuyendo a síntomas del codo interno y dedo anular/meñique.",
    symptoms: [
      "Pain at the inner elbow, especially with gripping or wrist flexion",
      "Tenderness directly over the medial epicondyle",
      "Weakness in grip strength and difficulty with fine motor tasks",
      "Pain worsened by throwing, swinging, or forearm pronation",
      "Tingling or numbness into the ring and small fingers (ulnar involvement)",
      "Morning stiffness at the inner elbow",
    ],
    symptomsEs: [
      "Dolor en el codo interno, especialmente con agarre o flexión de muñeca",
      "Sensibilidad directamente sobre la apófisis medial",
      "Debilidad en la fuerza de agarre y dificultad con tareas motoras finas",
      "Dolor empeorado por lanzamiento, swing o pronación del antebrazo",
      "Hormigueo o entumecimiento en los dedos anular y meñique (participación cubital)",
      "Rigidez matutina en el codo interno",
    ],
    causes: [
      "Repetitive forearm flexion and wrist pronation (golf, throwing, manual labor)",
      "Cervical nerve root irritation (C7–C8) sensitizing the medial forearm",
      "Ulnar nerve entrapment at the cubital tunnel",
      "Sudden forceful exertion overloading the medial epicondyle",
      "Weakened shoulder stability altering elbow biomechanics",
    ],
    causesEs: [
      "Flexión repetitiva del antebrazo y pronación de la muñeca (golf, lanzamiento, trabajo manual)",
      "Irritación de la raíz nerviosa cervical (C7-C8) sensibilizando el antebrazo medial",
      "Atrapamiento del nervio cubital en el túnel cubital",
      "Exerción forzada repentina sobrecargando la apófisis medial",
      "Estabilidad del hombro debilitada alterando la biomecánica del codo",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the lower cervical spine (C7–C8) and the medial elbow together. SOT cervical corrections reduce nerve root sensitization of the medial forearm. Elbow adjustments restore normal ulnohumeral mechanics and reduce cubital tunnel compression on the ulnar nerve. Regenerative therapies applied to the medial epicondyle stimulate tendon healing and reduce the chronic inflammatory cycle. Most medial epicondylitis patients achieve full resolution with a complete course of combined chiropractic and regenerative care.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la columna cervical inferior (C7-C8) y el codo medial juntos. Las correcciones cervicales SOT reducen la sensibilización de la raíz nerviosa del antebrazo medial. Los ajustes del codo restauran la mecánica ulnohumeral normal y reducen la compresión del túnel cubital en el nervio cubital. Las terapias regenerativas aplicadas a la apófisis medial estimulan la curación del tendón y reducen el ciclo inflamatorio crónico. La mayoría de los pacientes con epicondilitis medial logran resolución completa con un curso completo de cuidado quiropráctico y regenerativo combinado.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "carpal-tunnel-syndrome",
    title: "Carpal Tunnel Syndrome",
    titleEs: "Síndrome del Túnel Carpiano",
    image: "/images/conditions/carpal-tunnel.jpg",
    metaDescription:
      "Carpal tunnel syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to address the cervical and wrist components of carpal tunnel without surgery or bracing alone.",
    metaDescriptionEs:
      "Tratamiento del síndrome del túnel carpiano en San Antonio, TX. Pura Vida Chiropractic utiliza SOT para abordar los componentes cervicales y de muñeca del túnel carpiano sin cirugía ni solo uso de órtesis.",
    intro:
      "Carpal tunnel syndrome — numbness, tingling, and weakness in the hand — often has a double-crush component in the cervical spine that surgical wrist release alone cannot fix. Chiropractic care addresses both sites of nerve compression.",
    introEs:
      "Síndrome del túnel carpiano —entumecimiento, hormigueo y debilidad en la mano— a menudo tiene un componente de doble compresión en la columna cervical que la liberación quirúrgica de la muñeca sola no puede arreglar. El cuidado quiropráctico aborda ambos sitios de compresión nerviosa.",
    whatIs:
      "Carpal tunnel syndrome (CTS) occurs when the median nerve is compressed as it passes through the carpal tunnel at the wrist, causing numbness, tingling, and weakness in the thumb, index, middle, and half of the ring finger. The 'double crush' phenomenon — compression of the median nerve at two points along its course — is a significant and often underrecognized contributor to CTS. Cervical nerve root irritation at C5–C6 sensitizes the median nerve proximally, dramatically lowering its threshold for symptomatic compression at the carpal tunnel. Addressing both sites — the cervical spine and the wrist — produces significantly better outcomes than wrist treatment alone.",
    whatIsEs:
      "Síndrome del túnel carpiano (STC) ocurre cuando el nervio mediano se comprime mientras pasa por el túnel carpiano en la muñeca, causando entumecimiento, hormigueo y debilidad en el pulgar, índice, dedo medio y mitad del dedo anular. El fenómeno de 'doble compresión' —compresión del nervio mediano en dos puntos a lo largo de su curso— es un contribuyente significativo y frecuentemente no reconocido para STC. La irritación de la raíz nerviosa cervical en C5-C6 sensibiliza el nervio mediano proximalmente, bajando dramáticamente su umbral para compresión sintomática en el túnel carpiano. Abordar ambos sitios —la columna cervical y la muñeca— produce resultados significativamente mejores que el tratamiento solo de la muñeca.",
    symptoms: [
      "Numbness and tingling in the thumb, index, and middle fingers",
      "Symptoms worsening at night or with sustained hand use",
      "Weakness in grip and difficulty with fine pinch tasks",
      "Dropping objects due to hand weakness",
      "Relief with shaking the hand (Flick sign)",
      "Pain radiating up the forearm toward the elbow",
    ],
    symptomsEs: [
      "Entumecimiento y hormigueo en el pulgar, índice y dedos medios",
      "Síntomas empeorando por la noche o con uso sostenido de la mano",
      "Debilidad en el agarre y dificultad con tareas de pellizco fino",
      "Dejar caer objetos por debilidad de la mano",
      "Alivio al sacudir la mano (signo de chasquido)",
      "Dolor irradiando hacia el antebrazo hacia el codo",
    ],
    causes: [
      "Repetitive wrist and hand use creating carpal tunnel inflammation",
      "Cervical nerve root irritation (C5–C6) — double crush mechanism",
      "Fluid retention (pregnancy, thyroid dysfunction) increasing canal pressure",
      "Wrist anatomy and genetics predisposing to compression",
      "Prolonged wrist flexion during sleep or work",
    ],
    causesEs: [
      "Uso repetitivo de muñeca y mano creando inflamación del túnel carpiano",
      "Irritación de la raíz nerviosa cervical (C5-C6) —mecanismo de doble compresión",
      "Retención de líquidos (embarazo, disfunción tiroidea) aumentando la presión del canal",
      "Anatomía de la muñeca y genética predisponiendo a compresión",
      "Flexión prolongada de la muñeca durante el sueño o el trabajo",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates and treats both the cervical spine and the wrist. SOT cervical corrections at C5–C6 decompress the nerve roots contributing to the double crush mechanism. Wrist and carpal bone adjustments restore normal carpal tunnel geometry, reducing pressure on the median nerve. Myofascial release of the forearm flexors and the pronator teres — another entrapment site — is incorporated. Thoracic outlet evaluation rules out brachial plexus compression. Most CTS patients avoid surgery with this comprehensive, multi-level approach.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa y trata tanto la columna cervical como la muñeca. Las correcciones cervicales SOT en C5-C6 descomprimen las raíces nerviosas que contribuyen al mecanismo de doble compresión. Los ajustes de la muñeca y los huesos del carpo restauran la geometría normal del túnel carpiano, reduciendo la presión en el nervio mediano. Se incorpora liberación miofascial de los flexores del antebrazo y el pronador redondo —otro sitio de atrapamiento—. La evaluación del desfiladero torácico descarta compresión del plexo braquial. La mayoría de los pacientes con STC evitan la cirugía con este enfoque integral y multinivel.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "de-quervains-tenosynovitis",
    title: "De Quervain's Tenosynovitis",
    titleEs: "Tenosinovitis de De Quervain",
    image: "/images/conditions/dequervain.jpg",
    metaDescription:
      "De Quervain's tenosynovitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, and Class IV Laser to resolve thumb-side wrist pain without cortisone injections.",
    metaDescriptionEs:
      "Tratamiento de la tenosinovitis de De Quervain en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, ondas de choque y láser Clase IV para resolver el dolor de muñeca sin inyecciones de cortisona.",
    intro:
      "De Quervain's tenosynovitis — painful inflammation of the tendons on the thumb side of the wrist — limits gripping, pinching, and lifting. Our regenerative approach heals the tendon sheath without repeated cortisone injections.",
    introEs:
      "Tenosinovitis de De Quervain —inflamación dolorosa de los tendones en el lado del pulgar de la muñeca— limita el agarre, pellizco y levantamiento. Nuestro enfoque regenerativo cura la vaina del tendón sin inyecciones repetidas de cortisona.",
    whatIs:
      "De Quervain's tenosynovitis involves inflammation and thickening of the tendon sheath surrounding the abductor pollicis longus and extensor pollicis brevis tendons as they pass through the first dorsal compartment of the wrist. This causes significant pain, swelling, and restriction at the thumb-side wrist and radial styloid. It is common in new parents (from carrying infants), musicians, office workers, and manual laborers. Wrist joint biomechanics and cervical nerve root involvement (C6) contribute to tendon irritation and impaired healing. Regenerative therapies combined with chiropractic correction of the wrist and cervical spine provide effective resolution.",
    whatIsEs:
      "La tenosinovitis de De Quervain implica inflamación y engrosamiento de la vaina del tendón que rodea los tendones abductor largo del pulgar y extensor corto del pulgar mientras pasan por el primer compartimiento dorsal de la muñeca. Esto causa dolor significativo, hinchazón y restricción en el lado del pulgar de la muñeca y apófisis estiloides radial. Es común en padres nuevos (por llevar bebés), músicos, trabajadores de oficina y trabajadores manuales. La biomecánica de la articulación de la muñeca y la participación de la raíz nerviosa cervical (C6) contribuyen a la irritación del tendón y curación deteriorada. Las terapias regenerativas combinadas con corrección quiroprática de la muñeca y columna cervical proporcionan resolución efectiva.",
    symptoms: [
      "Pain and tenderness at the base of the thumb and radial wrist",
      "Swelling at the thumb-side wrist",
      "Positive Finkelstein test (pain with thumb tucked and wrist tilted)",
      "Difficulty gripping, pinching, or lifting with the affected hand",
      "Pain when making a fist or turning the wrist",
      "Squeaking or catching sensation with thumb movement",
    ],
    symptomsEs: [
      "Dolor y sensibilidad en la base del pulgar y muñeca radial",
      "Hinchazón en el lado del pulgar de la muñeca",
      "Prueba de Finkelstein positiva (dolor con pulgar metido y muñeca inclinada)",
      "Dificultad para agarrar, pellizcar o levantar con la mano afectada",
      "Dolor al hacer un puño o girar la muñeca",
      "Sensación de rechinar o atrapamiento con movimiento del pulgar",
    ],
    causes: [
      "Repetitive thumb abduction and wrist radial deviation",
      "New parent lifting (also called 'mommy wrist' or 'daddy wrist')",
      "Cervical nerve root involvement (C6) sensitizing the radial forearm",
      "Hormonal changes (pregnancy, postpartum estrogen drops)",
      "Prior wrist injury or sustained overuse",
    ],
    causesEs: [
      "Abducción repetitiva del pulgar y desviación radial de la muñeca",
      "Levantamiento de padres nuevos (también llamado 'muñeca de mamá' o 'muñeca de papá')",
      "Participación de la raíz nerviosa cervical (C6) sensibilizando el antebrazo radial",
      "Cambios hormonales (embarazo, caídas de estrógeno postparto)",
      "Lesión de muñeca previa o uso sostenido excesivo",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the cervical spine (C6) to reduce the neurological sensitization that perpetuates tendon pain, combined with wrist and thumb CMC joint adjustments to restore normal first compartment mechanics. Myofascial release of the forearm extensor musculature reduces tendon sheath pressure. Regenerative therapies applied directly to the first dorsal compartment reduce inflammation and stimulate healing of the tendon sheath. Most patients achieve resolution without surgery or repeated cortisone injections.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la columna cervical (C6) para reducir la sensibilización neurológica que perpetúa el dolor del tendón, combinado con ajustes de la articulación CMC del pulgar y muñeca para restaurar la mecánica normal del primer compartimiento. La liberación miofascial de la musculatura extensora del antebrazo reduce la presión de la vaina del tendón. Las terapias regenerativas aplicadas directamente al primer compartimiento dorsal reducen la inflamación y estimulan la curación de la vaina del tendón. La mayoría de los pacientes logran resolución sin cirugía o inyecciones repetidas de cortisona.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "trigger-finger",
    title: "Trigger Finger",
    titleEs: "Dedo en Gatillo",
    image: "/images/conditions/trigger-finger.jpg",
    metaDescription:
      "Trigger finger treatment in San Antonio TX. Pura Vida Chiropractic uses Shockwave Therapy, SoftWave, and Class IV Laser to resolve trigger finger tendon nodules without cortisone or surgery.",
    metaDescriptionEs:
      "Tratamiento del dedo en gatillo en San Antonio, TX. Pura Vida Chiropractic utiliza terapia de ondas de choque, SoftWave y láser Clase IV para resolver los nódulos del tendón sin cortisona ni cirugía.",
    intro:
      "Trigger finger — the locking or catching of a finger in a bent position — is caused by tendon nodule formation in the flexor tendon sheath. Regenerative therapies at Pura Vida can resolve the nodule and restore smooth finger movement.",
    introEs:
      "Dedo en gatillo —el bloqueo o atrapamiento de un dedo en posición doblada— es causado por la formación de nódulos de tendón en la vaina del tendón flexor. Las terapias regenerativas en Pura Vida pueden resolver el nódulo y restaurar el movimiento suave del dedo.",
    whatIs:
      "Stenosing tenosynovitis (trigger finger) develops when a nodule forms in the flexor tendon, which then catches on the narrow A1 pulley at the base of the finger as the tendon slides through during finger flexion and extension. Mild cases cause clicking or catching; severe cases result in the finger locking in flexion. It is more common in diabetics, those with rheumatoid arthritis, and people who perform repetitive gripping. While cortisone injections provide temporary relief, they often need to be repeated and do not address the underlying tendon nodule. Regenerative therapies can reduce the nodule and restore tendon gliding.",
    whatIsEs:
      "Tenosinovitis estenosante (dedo en gatillo) se desarrolla cuando se forma un nódulo en el tendón flexor, que luego se engancha en la polea A1 estrecha en la base del dedo mientras el tendón se desliza durante la flexión y extensión del dedo. Los casos leves causan chasquido o atrapamiento; los casos graves resultan en el dedo bloqueado en flexión. Es más común en diabéticos, los que tienen artritis reumatoide y personas que realizan agarre repetitivo. Aunque las inyecciones de cortisona proporcionan alivio temporal, a menudo necesitan repetirse y no abordan el nódulo de tendón subyacente. Las terapias regenerativas pueden reducir el nódulo y restaurar el deslizamiento del tendón.",
    symptoms: [
      "Clicking, catching, or locking of a finger when bending or straightening",
      "Finger that becomes stuck in a bent position and must be straightened manually",
      "Tenderness and a palpable nodule at the base of the affected finger",
      "Morning stiffness and pain in the palm",
      "Ring finger and thumb most commonly affected",
      "Pain that worsens with gripping activity",
    ],
    symptomsEs: [
      "Chasquido, atrapamiento o bloqueo de un dedo al flexionar o extender",
      "Dedo que se queda atrapado en posición doblada y debe enderezarse manualmente",
      "Sensibilidad y un nódulo palpable en la base del dedo afectado",
      "Rigidez matutina y dolor en la palma",
      "Dedo anular y pulgar más comúnmente afectados",
      "Dolor que empeora con la actividad de agarre",
    ],
    causes: [
      "Repetitive gripping causing tendon and sheath thickening",
      "Tendon nodule formation from cumulative microtrauma",
      "Diabetes mellitus increasing tendon glycosylation and nodule formation",
      "Rheumatoid arthritis involving flexor tendon sheaths",
      "Prolonged pinching and gripping occupations or hobbies",
    ],
    causesEs: [
      "Agarre repetitivo causando engrosamiento del tendón y vaina",
      "Formación de nódulos de tendón por microtrauma acumulativo",
      "Diabetes mellitus aumentando glicosilación de tendón y formación de nódulos",
      "Artritis reumatoide involucrando las vainas de los tendones flexores",
      "Ocupaciones u hobbies prolongados de pellizco y agarre",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses trigger finger primarily with regenerative therapies targeted directly at the flexor tendon nodule and A1 pulley. Wrist and finger joint adjustments restore optimal mechanics. Myofascial release of the forearm flexors and the intrinsic hand muscles reduces tendon sheath pressure. Regenerative modalities are applied to reduce the nodule, decrease tendon sheath inflammation, and restore smooth tendon gliding — allowing most trigger finger patients to recover without surgical release.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda el dedo en gatillo primariamente con terapias regenerativas dirigidas directamente al nódulo del tendón flexor y polea A1. Los ajustes de la articulación de la muñeca y dedos restauran la mecánica óptima. La liberación miofascial de los flexores del antebrazo y los músculos intrínsecos de la mano reduce la presión de la vaina del tendón. Las modalidades regenerativas se aplican para reducir el nódulo, disminuir la inflamación de la vaina del tendón y restaurar el deslizamiento suave del tendón —permitiendo que la mayoría de los pacientes con dedo en gatillo se recuperen sin liberación quirúrgica.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "rib-subluxation",
    title: "Rib Subluxation",
    titleEs: "Subluxación Costal | Quiropráctico San Antonio TX",
    image: "/images/conditions/rib-xray.jpg",
    metaDescription:
      "Rib subluxation treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to gently reposition subluxated ribs and relieve the sharp, stabbing pain of a 'rib out of place.'",
    metaDescriptionEs:
      "Tratamiento de subluxación costal en San Antonio, TX. Pura Vida Chiropractic utiliza SOT para reposicionar suavemente las costillas subluxadas y aliviar el dolor agudo de una \"costilla desalineada\".",
    intro:
      "A 'rib out of place' — sharp, stabbing pain with breathing, twisting, or coughing — is one of the most dramatically painful conditions we treat, and one of the most satisfying to correct quickly with chiropractic care.",
    introEs:
      "Una \"costilla desalineada\" —dolor agudo y punzante al respirar, girar o toser— es una de las condiciones más dolorosas que tratamos, y una de las más satisfactorias de corregir rápidamente con cuidado quiropráctico.",
    whatIs:
      "Rib subluxation occurs when one or more ribs shift out of their normal articulation at either the costovertebral joint (where the rib meets the thoracic vertebra) or the costochondral junction (where the rib meets the sternum). The resulting pain is typically sharp, localized, and intensely worsened by deep breathing, twisting, coughing, or sneezing — leading many patients to fear they have a fractured rib or cardiac event. Rib subluxations can occur from a single awkward movement, prolonged coughing, sleeping in an unusual position, or chronic thoracic spinal dysfunction. Chiropractic correction of the subluxated rib and the associated thoracic vertebra provides rapid relief.",
    whatIsEs:
      "La subluxación costal ocurre cuando una o más costillas se desplazan de su articulación normal, ya sea en la articulación costovertebral (donde la costilla se une a la vértebra torácica) o en la unión costocondral (donde la costilla se une al esternón). El dolor resultante es típicamente agudo, localizado e intensamente empeorado por respiración profunda, giro, tos o estornudos —llevando a muchos pacientes a temer que tengan una costilla fracturada o un evento cardíaco. Las subluxaciones costales pueden ocurrir por un movimiento incómodo, tos prolongada, dormir en una posición inusual o disfunción espinal torácica crónica. La corrección quiropráctica de la costilla subluxada y la vértebra torácica asociada proporciona alivio rápido.",
    symptoms: [
      "Sharp, localized pain at a specific rib, typically one side",
      "Pain that worsens sharply with deep breathing, coughing, or sneezing",
      "Pain with twisting the torso",
      "Referred pain radiating around the chest wall toward the sternum",
      "Shallow breathing to avoid triggering pain",
      "Palpable rib tenderness at the costovertebral junction",
    ],
    symptomsEs: [
      "Dolor agudo y localizado en una costilla específica, típicamente de un lado",
      "Dolor que empeora bruscamente con respiración profunda, tos o estornudos",
      "Dolor al girar el torso",
      "Dolor referido que irradia alrededor de la pared torácica hacia el esternón",
      "Respiración superficial para evitar desencadenar dolor",
      "Sensibilidad costal palpable en la articulación costovertebral",
    ],
    causes: [
      "Sudden awkward movement or twisting",
      "Prolonged coughing or sneezing",
      "Sleeping in an unusual position or on an unsupportive mattress",
      "Thoracic spinal dysfunction predisposing ribs to subluxation",
      "Sports collision or direct rib impact",
    ],
    causesEs: [
      "Movimiento incómodo repentino o giro",
      "Tos o estornudos prolongados",
      "Dormir en una posición inusual o en un colchón poco de apoyo",
      "Disfunción espinal torácica predisponiendo costillas a subluxación",
      "Colisión deportiva o impacto costal directo",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a specific rib palpation exam to identify the subluxated rib and its direction of displacement. SOT rib corrections use gentle, specific low-force techniques to restore normal rib position — often producing immediate relief. The associated thoracic vertebral segment is also adjusted to restore normal costovertebral joint mechanics. In most cases, rib subluxations respond within one to three treatments. Patients often notice that deep breathing is significantly less painful immediately following the correction.",
    chiropracticTreatmentEs:
      "El Dr. Foss realiza un examen específico de palpación costal para identificar la costilla subluxada y su dirección de desplazamiento. Las correcciones costales SOT utilizan técnicas suaves, específicas y de baja fuerza para restaurar la posición normal de la costilla —a menudo produciendo alivio inmediato. El segmento vertebral torácico asociado también se ajusta para restaurar la mecánica articular costovertebral normal. En la mayoría de los casos, las subluxaciones costales responden dentro de uno a tres tratamientos. Los pacientes a menudo notan que la respiración profunda es significativamente menos dolorosa inmediatamente después de la corrección.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "mid-back-pain",
    title: "Mid-Back Pain",
    titleEs: "Dolor de Espalda Media | Quiropráctico San Antonio TX",
    image: "/images/conditions/midbackpain.jpg",
    metaDescription:
      "Mid-back pain treatment in San Antonio TX. Pura Vida Chiropractic corrects thoracic vertebral dysfunction, rib joint restrictions, and postural imbalances driving middle back pain.",
    metaDescriptionEs:
      "Tratamiento de dolor de espalda media en San Antonio, TX. Pura Vida Chiropractic corrige la disfunción vertebral torácica, restricciones articulares costales e desequilibrios posturales causando dolor de espalda media.",
    intro:
      "Mid-back pain — aching, stiffness, or sharp pain between the shoulder blades and lower ribcage — is typically driven by thoracic joint dysfunction and postural strain. SOT chiropractic care at Pura Vida provides effective relief.",
    introEs:
      "El dolor de espalda media —dolor sordo, rigidez o dolor agudo entre los omóplatos y la caja torácica inferior— típicamente es causado por disfunción articular torácica y tensión postural. El cuidado quiropráctico SOT en Pura Vida proporciona alivio efectivo.",
    whatIs:
      "The thoracic spine consists of twelve vertebrae, each articulating with a pair of ribs. Mid-back pain commonly arises from thoracic vertebral subluxations, costovertebral joint restrictions, paraspinal muscle strain, or postural hyperkyphosis placing chronic compressive stress on the thoracic segments. The thoracic spine also houses the autonomic nerve supply to thoracic and abdominal organs — making thoracic dysfunction a contributor not just to back pain but to visceral symptoms including digestive issues, cardiac-like chest discomfort, and respiratory restriction. Addressing thoracic dysfunction comprehensively improves both structural and autonomic health.",
    whatIsEs:
      "La columna torácica consta de doce vértebras, cada una articulada con un par de costillas. El dolor de espalda media comúnmente surge de subluxaciones vertebrales torácicas, restricciones articulares costovertebrales, tensión muscular paraespinal o cifosis postural colocando estrés compresivo crónico en los segmentos torácicos. La columna torácica también aloja el suministro nervioso autónomo a órganos torácicos y abdominales —haciendo que la disfunción torácica sea un contribuyente no solo al dolor de espalda sino a síntomas viscerales incluyendo problemas digestivos, malestar torácico similar al cardíaco y restricción respiratoria. Abordar la disfunción torácica de manera integral mejora tanto la salud estructural como autonómica.",
    symptoms: [
      "Aching or stiffness between the shoulder blades",
      "Sharp pain at specific thoracic levels with movement",
      "Pain that worsens with prolonged sitting or slouching",
      "Reduced mobility rotating the upper body",
      "Referral pain wrapping around the ribs toward the chest",
      "Thoracic pain accompanying headaches or neck pain",
    ],
    symptomsEs: [
      "Dolor sordo o rigidez entre los omóplatos",
      "Dolor agudo en niveles torácicos específicos con movimiento",
      "Dolor que empeora con sedestación prolongada o encorvamiento",
      "Movilidad reducida al rotar la parte superior del cuerpo",
      "Dolor referido que se irradia alrededor de las costillas hacia el pecho",
      "Dolor torácico acompañado de dolores de cabeza o dolor de cuello",
    ],
    causes: [
      "Thoracic vertebral subluxation from postural overload",
      "Costovertebral joint restriction and rib fixation",
      "Hyperkyphosis from prolonged sitting and poor ergonomics",
      "Compensatory thoracic tension from lumbar or cervical dysfunction",
      "Muscle strain from heavy lifting or awkward reach",
    ],
    causesEs: [
      "Subluxación vertebral torácica por sobrecarga postural",
      "Restricción articular costovertebral y fijación costal",
      "Cifosis por sedestación prolongada y mala ergonomía",
      "Tensión torácica compensatoria por disfunción lumbar o cervical",
      "Tensión muscular por levantamiento pesado o alcance incómodo",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the entire thoracic spine and rib cage, identifying the specific segments restricted and the direction of correction needed. SOT thoracic adjustments restore normal costovertebral joint mobility and spinal alignment. Because the thoracic spine is structurally linked to both the cervical and lumbar regions, thoracic corrections also improve global spinal function. Patients with chronic mid-back pain often note improvements not only in back pain but in breathing, digestion, and energy levels as thoracic autonomic nerve function is restored.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa toda la columna torácica y la caja torácica, identificando los segmentos específicos restringidos y la dirección de corrección necesaria. Los ajustes torácicos SOT restauran la movilidad articular costovertebral normal y la alineación espinal. Debido a que la columna torácica está estructuralmente vinculada tanto a las regiones cervical como lumbar, las correcciones torácicas también mejoran la función espinal global. Los pacientes con dolor de espalda media crónico a menudo notan mejoras no solo en el dolor de espalda sino en la respiración, digestión y niveles de energía a medida que se restaura la función del nervio autónomo torácico.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "pelvic-girdle-pain",
    title: "Pelvic Girdle Pain",
    titleEs: "Dolor de Cintura Pélvica | Quiropráctico San Antonio TX",
    image: "/images/conditions/pelvicgirdlepain.jpg",
    metaDescription:
      "Pelvic girdle pain treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to stabilize the SI joints and pubic symphysis driving pelvic girdle pain in pregnancy and beyond.",
    metaDescriptionEs:
      "Tratamiento del dolor de cintura pélvica en San Antonio, TX. Pura Vida Chiropractic utiliza SOT para estabilizar las articulaciones SI y sínfisis púbica que causan dolor de cintura pélvica.",
    intro:
      "Pelvic girdle pain — affecting the SI joints, pubic symphysis, and surrounding structures — is debilitating and often inadequately treated. SOT chiropractic care restores pelvic stability and eliminates the root cause.",
    introEs:
      "El dolor de cintura pélvica —afectando las articulaciones SI, sínfisis púbica y estructuras circundantes— es debilitante y frecuentemente no se trata adecuadamente. El cuidado quiropráctico SOT restaura la estabilidad pélvica y elimina la causa raíz.",
    whatIs:
      "Pelvic girdle pain (PGP) encompasses pain arising from the sacroiliac joints, pubic symphysis, or surrounding ligaments and muscles of the pelvis. It is particularly common during and after pregnancy, when hormonal ligament laxity reduces pelvic stability. PGP causes pain with walking, stair climbing, rolling in bed, and prolonged standing — often severely limiting daily function. The sacroiliac joint, which connects the sacrum to the ileum, is the most frequently involved structure. Hormonal, mechanical, and neurological factors interact to produce PGP. SOT chiropractic is specifically designed to address sacroiliac dysfunction and restore pelvic stability.",
    whatIsEs:
      "El dolor de cintura pélvica (DCP) abarca dolor que surge de las articulaciones sacroilíacas, sínfisis púbica o ligamentos y músculos circundantes de la pelvis. Es particularmente común durante y después del embarazo, cuando la laxitud ligamentaria hormonal reduce la estabilidad pélvica. El DCP causa dolor con caminar, subir escaleras, rodar en la cama y estar de pie prolongadamente —frecuentemente limitando severamente la función diaria. La articulación sacroilíaca, que conecta el sacro al ilion, es la estructura más frecuentemente involucrada. Los factores hormonales, mecánicos y neurológicos interactúan para producir DCP. La quiropráctica SOT está específicamente diseñada para abordar la disfunción sacroilíaca y restaurar la estabilidad pélvica.",
    symptoms: [
      "Pain in the lower back, buttocks, groin, or inner thighs",
      "Pain with walking, especially a waddling gait",
      "Sharp pain when climbing stairs or getting in/out of a car",
      "Pain rolling over in bed or separating the legs",
      "Clicking or grinding in the SI joint or pubic symphysis",
      "Instability feeling in the pelvis with weight-bearing",
    ],
    symptomsEs: [
      "Dolor en la espalda baja, glúteos, ingle o muslos internos",
      "Dolor al caminar, especialmente una marcha tambaleante",
      "Dolor agudo al subir escaleras o entrar/salir de un auto",
      "Dolor al rodar en la cama o separar las piernas",
      "Chasquido o rechinar en la articulación SI o sínfisis púbica",
      "Sensación de inestabilidad en la pelvis con apoyo de peso",
    ],
    causes: [
      "Sacroiliac joint dysfunction from ligament laxity or hypermobility",
      "Hormonal relaxin effects during pregnancy weakening pelvic ligaments",
      "Lumbar disc herniation referring pain to the pelvic region",
      "Pelvic floor dysfunction contributing to SI joint instability",
      "Leg length discrepancy creating uneven pelvic loading",
      "Prior pelvic trauma or difficult childbirth",
    ],
    causesEs: [
      "Disfunción de la articulación sacroilíaca por laxitud o hipermovilidad ligamentaria",
      "Efectos hormonales de la relaxina durante el embarazo debilitando ligamentos pélvicos",
      "Hernia de disco lumbar refiriendo dolor a la región pélvica",
      "Disfunción del piso pélvico contribuyendo a inestabilidad de la articulación SI",
      "Discrepancia de longitud de pierna creando carga pélvica desigual",
      "Trauma pélvico previo o parto difícil",
    ],
    chiropracticTreatment:
      "SOT's Category II protocol is the definitive chiropractic approach for sacroiliac joint dysfunction and pelvic girdle pain. Dr. Foss uses specific pelvic blocking positions to gently restore normal SI joint alignment and reduce ligamentous tension. For pregnant patients, the Webster Technique is used to balance the pelvis safely throughout pregnancy. Pubic symphysis corrections are performed when anterior pelvic pain is present. Pelvic floor muscle assessment guides recommendations for concurrent pelvic floor physiotherapy when indicated. Most PGP patients experience significant reduction in pain within the first several visits.",
    chiropracticTreatmentEs:
      "El protocolo Categoría II de SOT es el enfoque quiropráctico definitivo para la disfunción de la articulación sacroilíaca y el dolor de cintura pélvica. El Dr. Foss utiliza posiciones específicas de bloqueo pélvico para restaurar suavemente la alineación normal de la articulación SI y reducir la tensión ligamentaria. Para pacientes embarazadas, la Técnica Webster se utiliza para equilibrar la pelvis de manera segura durante todo el embarazo. Las correcciones de la sínfisis púbica se realizan cuando hay dolor pélvico anterior. La evaluación muscular del piso pélvico guía recomendaciones para fisioterapia concurrente del piso pélvico cuando se indica. La mayoría de los pacientes con DCP experimentan reducción significativa del dolor dentro de las primeras varias visitas.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "si-joint-dysfunction",
    title: "SI Joint Dysfunction",
    titleEs: "Disfunción de la Articulación SI | Quiropráctico San Antonio TX",
    image: "/images/conditions/si-joint.png",
    metaDescription:
      "SI joint dysfunction treatment in San Antonio TX. Pura Vida Chiropractic uses SOT Category II protocols to correct sacroiliac joint misalignment and resolve SI joint pain.",
    metaDescriptionEs:
      "Tratamiento de la disfunción de la articulación SI en San Antonio, TX. Pura Vida Chiropractic utiliza protocolos SOT Categoría II para corregir la desalineación de la articulación sacroilíaca.",
    intro:
      "Sacroiliac joint dysfunction is one of the most common and most frequently missed causes of low back and buttock pain. SOT chiropractic at Pura Vida is specifically designed around the SI joint.",
    introEs:
      "La disfunción de la articulación sacroilíaca es una de las causas más comunes y más frecuentemente pasadas por alto del dolor de espalda baja y glúteos. La quiropráctica SOT en Pura Vida está específicamente diseñada alrededor de la articulación SI.",
    whatIs:
      "The sacroiliac (SI) joint connects the sacrum (base of the spine) to the ileum (part of the pelvis) on each side. These joints are stabilized by some of the strongest ligaments in the body and normally allow only a few millimeters of movement. When the SI joint is hypomobile (locked) or hypermobile (unstable), it causes significant pain in the low back, buttock, and sometimes the groin or posterior thigh. SI joint dysfunction is estimated to account for 15–30% of all low back pain — yet it is often misdiagnosed as lumbar disc disease or sciatica. SOT Category II chiropractic protocols were developed specifically to diagnose and correct SI joint dysfunction.",
    whatIsEs:
      "La articulación sacroilíaca (SI) conecta el sacro (base de la columna) con el ilion (parte de la pelvis) en cada lado. Estas articulaciones se estabilizan por algunos de los ligamentos más fuertes del cuerpo y normalmente permiten solo unos pocos milímetros de movimiento. Cuando la articulación SI es hipomóvil (bloqueada) o hipermóvil (inestable), causa dolor significativo en la espalda baja, glúteos y a veces en la ingle o muslo posterior. Se estima que la disfunción de la articulación SI representa el 15-30% de todo dolor de espalda baja —sin embargo, frecuentemente se diagnostica mal como enfermedad de disco lumbar o ciática. Los protocolos quiroprácticos SOT Categoría II fueron desarrollados específicamente para diagnosticar y corregir la disfunción de la articulación SI.",
    symptoms: [
      "Unilateral low back and buttock pain, worse on one side",
      "Pain that worsens with prolonged standing, sitting on one side, or climbing stairs",
      "Pain with transitions — standing up, getting out of a car",
      "Tenderness directly over the SI joint (posterior superior iliac spine)",
      "Pain mimicking sciatica — radiating into the hip and posterior thigh",
      "Relief when lying down",
    ],
    symptomsEs: [
      "Dolor unilateral de espalda baja y glúteos, peor de un lado",
      "Dolor que empeora con estar de pie prolongado, sentarse de un lado o subir escaleras",
      "Dolor con transiciones —ponerse de pie, salir de un auto",
      "Sensibilidad directamente sobre la articulación SI (espina ilíaca posterosuperior)",
      "Dolor que imita ciática —irradiando hacia la cadera y muslo posterior",
      "Alivio cuando está acostado",
    ],
    causes: [
      "Acute injury from a fall or sudden load",
      "Leg length discrepancy creating chronic asymmetric SI loading",
      "Pregnancy and hormonal ligament laxity",
      "Hypermobility disorders loosening SI joint stabilizing ligaments",
      "Lumbar fusion surgery above the SI joint (adjacent segment stress)",
      "Repetitive asymmetric activities (golf, tennis, running)",
    ],
    causesEs: [
      "Lesión aguda por caída o carga repentina",
      "Discrepancia de longitud de pierna creando carga SI asimétrica crónica",
      "Embarazo y laxitud ligamentaria hormonal",
      "Trastornos de hipermovilidad aflojando ligamentos estabilizadores de la articulación SI",
      "Cirugía de fusión lumbar por encima de la articulación SI (estrés de segmento adyacente)",
      "Actividades asimétricas repetitivas (golf, tenis, correr)",
    ],
    chiropracticTreatment:
      "SOT Category II is the gold standard chiropractic approach for SI joint dysfunction. Dr. Foss uses specific wedge-based blocking to assess and correct the specific direction of SI joint displacement on each side. This low-force, gravity-assisted technique gently restores normal SI joint position and mobility without aggressive manipulation. It is safe for acute flares, post-surgical patients, and pregnant patients. Many SI joint pain patients experience dramatic relief within the first one to three treatments, followed by progressive stabilization of the joint over a full course of care.",
    chiropracticTreatmentEs:
      "SOT Categoría II es el estándar de oro del enfoque quiropráctico para la disfunción de la articulación SI. El Dr. Foss utiliza bloqueo específico basado en cuñas para evaluar y corregir la dirección específica del desplazamiento de la articulación SI en cada lado. Esta técnica asistida por gravedad de baja fuerza restaura suavemente la posición y movilidad normal de la articulación SI sin manipulación agresiva. Es segura para brotes agudos, pacientes posquirúrgicos y pacientes embarazadas. Muchos pacientes con dolor de articulación SI experimentan alivio dramático dentro de uno a tres tratamientos, seguido de estabilización progresiva de la articulación durante un curso completo de cuidado.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "piriformis-syndrome",
    title: "Piriformis Syndrome",
    titleEs: "Síndrome del Piriforme | Quiropráctico San Antonio TX",
    image: "/images/conditions/piriformis.jpg",
    metaDescription:
      "Piriformis syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT and soft-tissue therapy to release piriformis muscle spasm and relieve sciatic nerve entrapment.",
    metaDescriptionEs:
      "Tratamiento del síndrome del piriforme en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y terapia de tejidos blandos para liberar espasmo muscular del piriforme y aliviar el atrapamiento del nervio ciático.",
    intro:
      "Piriformis syndrome — deep buttock pain with sciatic nerve irritation — is frequently confused with disc sciatica. At Pura Vida, we identify and treat the piriformis muscle and the pelvic imbalance that drives it into spasm.",
    introEs:
      "El síndrome del piriforme —dolor profundo de glúteos con irritación del nervio ciático— frecuentemente se confunde con ciática discal. En Pura Vida, identificamos y tratamos el músculo piriforme y el desequilibrio pélvico que lo impulsa a espasmo.",
    whatIs:
      "The piriformis is a small muscle deep in the buttock that externally rotates the hip. The sciatic nerve passes either beneath, through, or above the piriformis muscle (anatomic variation exists). When the piriformis is tight or in spasm — from pelvic imbalance, SI joint dysfunction, or prolonged sitting — it compresses or irritates the sciatic nerve, producing buttock pain and sciatic symptoms that mimic lumbar disc radiculopathy. Piriformis syndrome is frequently present concurrently with or as a consequence of SI joint dysfunction and lumbar subluxation. Effective treatment addresses both the muscle and the upstream spinal drivers of its spasm.",
    whatIsEs:
      "El piriforme es un pequeño músculo profundo en el glúteo que rota externamente la cadera. El nervio ciático pasa por debajo, a través o por encima del músculo piriforme (existe variación anatómica). Cuando el piriforme está tenso o en espasmo —por desequilibrio pélvico, disfunción de la articulación SI o sedestación prolongada— comprime o irrita el nervio ciático, produciendo dolor glúteo y síntomas de ciática que imitan radiculopatía de disco lumbar. El síndrome del piriforme frecuentemente está presente concurrentemente o como consecuencia de disfunción de la articulación SI y subluxación lumbar. El tratamiento efectivo aborda tanto el músculo como los impulsores espinales ascendentes de su espasmo.",
    symptoms: [
      "Deep, aching pain in the buttock",
      "Sciatica-like pain, tingling, or numbness down the back of the leg",
      "Pain worsening with prolonged sitting, especially on hard surfaces",
      "Tenderness deep in the buttock, especially with compression",
      "Pain with hip external rotation (crossing the leg)",
      "Buttock pain worsening with climbing stairs or hills",
    ],
    symptomsEs: [
      "Dolor profundo y sordo en el glúteo",
      "Dolor similar a ciática, hormigueo o entumecimiento en la parte posterior de la pierna",
      "Dolor que empeora con sedestación prolongada, especialmente en superficies duras",
      "Sensibilidad profunda en el glúteo, especialmente con compresión",
      "Dolor con rotación externa de cadera (cruzar la pierna)",
      "Dolor glúteo que empeora al subir escaleras o colinas",
    ],
    causes: [
      "Sacroiliac joint dysfunction creating piriformis protective spasm",
      "Pelvic imbalance overloading one piriformis",
      "Prolonged sitting (especially with hip externally rotated)",
      "Trauma to the buttock from a fall or motor vehicle accident",
      "Anatomic variant with sciatic nerve piercing the piriformis",
      "Overuse in runners and cyclists",
    ],
    causesEs: [
      "Disfunción de la articulación SI creando espasmo protector del piriforme",
      "Desequilibrio pélvico sobrecargando un piriforme",
      "Sedestación prolongada (especialmente con cadera rotada externamente)",
      "Trauma en el glúteo por caída o accidente de tránsito",
      "Variante anatómica con nervio ciático atravesando el piriforme",
      "Uso excesivo en corredores y ciclistas",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses piriformis syndrome at both the muscular and pelvic levels. SOT SI joint corrections remove the sacroiliac dysfunction that causes the piriformis to remain in protective spasm. Deep soft-tissue release directly to the piriformis — through the gluteal tissue — releases the muscle's grip on the sciatic nerve. Hip joint adjustments normalize external rotator mechanics. Once the pelvic foundation is corrected and the muscle is released, sciatic symptoms typically resolve without the need for cortisone injections or surgery.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda el síndrome del piriforme en los niveles muscular y pélvico. Las correcciones de la articulación SI SOT eliminan la disfunción SI que causa que el piriforme permanezca en espasmo protector. La liberación profunda de tejidos blandos directamente al piriforme —a través del tejido glúteo— libera el agarre del músculo en el nervio ciático. Los ajustes de la articulación de cadera normalizan la mecánica del rotador externo. Una vez que la base pélvica se corrige y el músculo se libera, los síntomas de ciática típicamente se resuelven sin necesidad de inyecciones de cortisona o cirugía.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "hip-bursitis",
    title: "Hip Bursitis",
    titleEs: "Bursitis de Cadera | Quiropráctico San Antonio TX",
    image: "/images/conditions/hipbursitis.jpg",
    metaDescription:
      "Hip bursitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to reduce trochanteric bursitis inflammation and pain.",
    metaDescriptionEs:
      "Tratamiento de bursitis de cadera en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, Terapia de Ondas de Choque, SoftWave y Láser Clase IV para reducir inflamación y dolor de bursitis trocantérica.",
    intro:
      "Hip bursitis — outer hip pain that worsens with walking, lying on the side, or climbing stairs — responds well to a combination of pelvic correction and regenerative therapies that address the underlying cause.",
    introEs:
      "La bursitis de cadera —dolor lateral de cadera que empeora con caminar, acostarse de lado o subir escaleras— responde bien a una combinación de corrección pélvica y terapias regenerativas que abordan la causa subyacente.",
    whatIs:
      "Greater trochanteric bursitis (GTBS) involves inflammation of the bursa sac overlying the greater trochanter of the femur — the bony prominence on the outer hip. The IT band and gluteal tendons pass over this bursa, and repetitive friction from pelvic imbalance or muscular tightness causes bursal inflammation. GTBS is now more accurately understood as greater trochanteric pain syndrome (GTPS) — recognizing that gluteal tendinopathy is often the primary pathology rather than pure bursitis. Pelvic imbalance from lumbar or SI joint dysfunction creates asymmetric IT band tension and gluteal tendon overload. Correcting the pelvic cause is essential for lasting relief.",
    whatIsEs:
      "La bursitis trocantérica mayor (BTGM) implica inflamación de la bolsa sinovial sobre el trocánter mayor del fémur —la prominencia ósea en la cadera lateral. La banda IT y los tendones glúteos pasan sobre esta bolsa, y la fricción repetitiva por desequilibrio pélvico o tensión muscular causa inflamación bursal. BTGM ahora se entiende más precisamente como síndrome de dolor trocantérico mayor (SDTM) —reconociendo que la tendinopatía glútea a menudo es la patología primaria más que bursitis pura. El desequilibrio pélvico por disfunción lumbar o SI crea tensión asimétrica de banda IT y sobrecarga de tendón glúteo. Corregir la causa pélvica es esencial para alivio duradero.",
    symptoms: [
      "Outer hip pain, often radiating down the outer thigh",
      "Pain lying on the affected side at night",
      "Pain climbing stairs, rising from sitting, or walking on inclines",
      "Tenderness over the greater trochanter",
      "Pain that worsens with prolonged activity",
      "Snapping hip sensation (coxa saltans) in some patients",
    ],
    symptomsEs: [
      "Dolor lateral de cadera, a menudo irradiando hacia el muslo lateral",
      "Dolor acostarse del lado afectado por la noche",
      "Dolor al subir escaleras, levantarse de sentado o caminar en pendientes",
      "Sensibilidad sobre el trocánter mayor",
      "Dolor que empeora con actividad prolongada",
      "Sensación de chasquido de cadera (cadera saltarina) en algunos pacientes",
    ],
    causes: [
      "Pelvic imbalance increasing IT band tension across the trochanteric bursa",
      "Gluteal tendinopathy from repetitive compressive and tensile loading",
      "Leg length discrepancy increasing lateral pelvic drop",
      "Tight IT band and weak hip abductor muscles",
      "Running on cambered surfaces or with a narrow stride",
      "Prior hip surgery or arthroplasty altering biomechanics",
    ],
    causesEs: [
      "Desequilibrio pélvico aumentando tensión de banda IT a través de la bolsa trocantérica",
      "Tendinopatía glútea por carga compresiva y tensil repetitiva",
      "Discrepancia de longitud de pierna aumentando caída pélvica lateral",
      "Banda IT tensa y músculos abductores de cadera débiles",
      "Correr en superficies inclinadas o con zancada estrecha",
      "Cirugía previa de cadera o artroplastia alterando biomecánica",
    ],
    chiropracticTreatment:
      "Dr. Foss corrects the pelvic imbalance driving abnormal IT band and gluteal tendon loading through SOT Category II adjustments. Hip joint and lumbar corrections restore normal femoral mechanics. Myofascial release targeting the IT band, TFL, and gluteal muscles reduces compressive bursal loading. Regenerative therapies are applied to the trochanteric bursa and gluteal tendon insertion to reduce inflammation and stimulate tissue repair. Hip abductor strengthening exercises are provided as home care to prevent recurrence.",
    chiropracticTreatmentEs:
      "El Dr. Foss corrige el desequilibrio pélvico impulsando carga anormal de banda IT y tendón glúteo mediante ajustes SOT Categoría II. Las correcciones de cadera y lumbar restauran la mecánica femoral normal. La liberación miofascial dirigida a la banda IT, TFL y músculos glúteos reduce la carga bursal compresiva. Las terapias regenerativas se aplican a la bolsa trocantérica e inserción de tendón glúteo para reducir inflamación y estimular reparación tisular. Los ejercicios de fortalecimiento abductor de cadera se proporcionan como cuidado casero para prevenir recurrencia.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "it-band-syndrome",
    title: "IT Band Syndrome",
    titleEs: "Síndrome de la Banda IT | Quiropráctico San Antonio TX",
    image: "/images/conditions/runnersknee.jpg",
    metaDescription:
      "IT band syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve iliotibial band friction and lateral knee pain.",
    metaDescriptionEs:
      "Tratamiento del síndrome de la banda IT en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, Terapia de Ondas de Choque y Láser Clase IV para resolver fricción de banda iliotibial y dolor lateral de rodilla.",
    intro:
      "IT band syndrome — the bane of runners and cyclists — causes sharp lateral knee pain that builds with activity. Correcting the pelvic imbalance driving IT band tension is the key to lasting relief.",
    introEs:
      "El síndrome de banda IT —la pesadilla de corredores y ciclistas— causa dolor lateral agudo de rodilla que aumenta con la actividad. Corregir el desequilibrio pélvico impulsando tensión de banda IT es la clave para alivio duradero.",
    whatIs:
      "Iliotibial band syndrome (ITBS) is an overuse injury affecting the iliotibial band — a thick fascial band running from the hip down the outer thigh to the lateral knee. As the knee repeatedly flexes and extends during running or cycling, the IT band rubs against the lateral femoral epicondyle, creating friction and inflammation. The primary driver of excessive IT band tension is pelvic imbalance — a dropped pelvis on the swing leg (Trendelenburg pattern) or a laterally shifted center of mass forces the IT band to work harder with each stride. Correcting pelvic alignment is as important as stretching the IT band and treating the local knee friction.",
    whatIsEs:
      "El síndrome de banda iliotibial (SBIB) es una lesión por uso excesivo afectando la banda iliotibial —una banda fascial gruesa que va desde la cadera hacia abajo en el muslo lateral hasta la rodilla lateral. A medida que la rodilla se flexiona y extiende repetidamente durante correr o andar en bicicleta, la banda IT se frota contra el epicóndilo femoral lateral, creando fricción e inflamación. El impulsor primario de tensión excesiva de banda IT es desequilibrio pélvico —una pelvis caída en la pierna de oscilación (patrón de Trendelenburg) o un centro de masa desplazado lateralmente fuerza la banda IT a trabajar más en cada zancada. Corregir la alineación pélvica es tan importante como estirar la banda IT y tratar la fricción local de rodilla.",
    symptoms: [
      "Sharp, burning pain at the outer knee during and after running",
      "Pain that begins consistently at a specific distance or duration of exercise",
      "Tenderness over the lateral femoral epicondyle",
      "Pain descending stairs",
      "Tightness extending up the outer thigh toward the hip",
      "Occasional outer hip pain from TFL and gluteal involvement",
    ],
    symptomsEs: [
      "Dolor agudo y ardiente en la rodilla lateral durante y después de correr",
      "Dolor que comienza consistentemente a una distancia o duración específica de ejercicio",
      "Sensibilidad sobre el epicóndilo femoral lateral",
      "Dolor al bajar escaleras",
      "Tensión extendiéndose arriba del muslo lateral hacia la cadera",
      "Dolor lateral de cadera ocasional por involucración de TFL y glúteo",
    ],
    causes: [
      "Pelvic drop pattern from hip abductor weakness or imbalance",
      "Increased training volume or sudden mileage increase",
      "Running on cambered roads or tracks in one direction",
      "Overpronation altering tibial rotation and IT band stress",
      "Leg length discrepancy creating asymmetric pelvic loading",
      "Tight TFL and hip flexors maintaining IT band tension",
    ],
    causesEs: [
      "Patrón de caída pélvica por debilidad o desequilibrio de abductores de cadera",
      "Aumento de volumen de entrenamiento o aumento repentino de distancia",
      "Correr en carreteras inclinadas o pistas en una dirección",
      "Sobrepronación alterando rotación tibial y estrés de banda IT",
      "Discrepancia de longitud de pierna creando carga pélvica asimétrica",
      "TFL y flexores de cadera tensos manteniendo tensión de banda IT",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses IT band syndrome through pelvic leveling (SOT Category II), hip joint adjustments, and myofascial release targeting the IT band, TFL, and gluteal muscles. Foot and ankle corrections address overpronation contributing to tibial rotation forces. Pelvic balance is the key upstream intervention that allows the IT band to release its chronic tension. Regenerative therapies are applied to the lateral knee to resolve the local inflammation and accelerate tissue healing. Graduated return-to-running guidance prevents recurrence.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda el síndrome de banda IT a través del nivelado pélvico (SOT Categoría II), ajustes de articulación de cadera y liberación miofascial dirigida a la banda IT, TFL y músculos glúteos. Las correcciones de pie y tobillo abordan la sobrepronación contribuyendo a fuerzas de rotación tibial. El equilibrio pélvico es la intervención ascendente clave que permite a la banda IT liberar su tensión crónica. Las terapias regenerativas se aplican a la rodilla lateral para resolver la inflamación local y acelerar la cicatrización tisular. Las guías de retorno a correr graduado previenen recurrencia.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "runners-knee",
    title: "Runner's Knee",
    titleEs: "Rodilla del Corredor",
    image: "/images/conditions/runnersknee.jpg",
    metaDescription:
      "Runner's knee treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, and Class IV Laser to resolve patellofemoral pain syndrome and get you back to running.",
    metaDescriptionEs:
      "Tratamiento de la rodilla del corredor en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, ondas de choque y láser Clase IV para resolver el síndrome de dolor patelofemoral y te devuelve a correr.",
    intro:
      "Runner's knee (patellofemoral pain syndrome) — dull, aching pain around and behind the kneecap — limits athletes and active people of all levels. Correcting patellar tracking through pelvic and hip mechanics is the key to lasting relief.",
    introEs:
      "La rodilla del corredor (síndrome de dolor patelofemoral) —dolor sordo e intermitente alrededor y detrás de la rótula— limita a los atletas y personas activas de todos los niveles. Corregir el seguimiento rotuliano a través de la mecánica pélvica y de cadera es la clave para alivio duradero.",
    whatIs:
      "Patellofemoral pain syndrome (PFPS) involves pain arising from the patellofemoral joint — where the kneecap (patella) glides in the trochlear groove of the femur. When the patella tracks laterally out of its groove due to weak hip abductors, tight lateral structures, or pelvic imbalance, abnormal compressive forces create cartilage irritation and pain. The condition is extremely common in runners, cyclists, and anyone who does a lot of stair climbing or squatting. Unlike structural pathology, PFPS responds very well to correcting the biomechanical cause of patellar maltracking — which includes the entire kinetic chain from the pelvis and hip down to the foot.",
    whatIsEs:
      "El síndrome de dolor patelofemoral (SDPF) implica dolor que surge de la articulación patelofemoral —donde la rótula (patela) se desliza en el surco troclear del fémur. Cuando la rótula se desplaza lateralmente fuera de su surco debido a debilidad de los abductores de cadera, estructuras laterales tensas o desequilibrio pélvico, fuerzas compresivas anormales crean irritación del cartílago y dolor. La condición es extremadamente común en corredores, ciclistas y en cualquiera que haga mucho escalamiento de escaleras o sentadillas. A diferencia de la patología estructural, el SDPF responde muy bien a corregir la causa biomecánica del seguimiento rotuliano anormal —que incluye toda la cadena cinética desde la pelvis y cadera hasta el pie.",
    symptoms: [
      "Dull ache around or behind the kneecap, typically both sides",
      "Pain worsening with running, cycling, squatting, or stair climbing",
      "Pain sitting for prolonged periods with knee flexed ('movie sign')",
      "Knee stiffness after rest that improves with movement",
      "Grinding or crunching sensation (crepitus) under the kneecap",
      "Occasional mild knee swelling",
    ],
    symptomsEs: [
      "Dolor sordo alrededor o detrás de la rótula, típicamente en ambos lados",
      "Dolor que empeora con correr, ciclismo, sentadillas o escalamiento de escaleras",
      "Dolor al sentarse por períodos prolongados con la rodilla flexionada (signo de película)",
      "Rigidez de rodilla después del reposo que mejora con el movimiento",
      "Sensación de crujido (crepitación) bajo la rótula",
      "Hinchazón leve ocasional de la rodilla",
    ],
    causes: [
      "Hip abductor and external rotator weakness allowing femoral adduction",
      "Pelvic imbalance altering femoral angle and patellar groove alignment",
      "Tight quadriceps or IT band pulling the patella laterally",
      "Foot overpronation causing tibial internal rotation",
      "Sudden increase in training volume or intensity",
      "Weak VMO (vastus medialis oblique) — the 'teardrop' quad muscle",
    ],
    causesEs: [
      "Debilidad del abductor de cadera y rotador externo permitiendo aducción femoral",
      "Desequilibrio pélvico alterando el ángulo femoral y la alineación del surco rotuliano",
      "Cuádriceps o banda IT tensa jalando la rótula lateralmente",
      "Sobrepronación del pie causando rotación tibial interna",
      "Aumento repentino en el volumen o intensidad del entrenamiento",
      "Debilidad del VMO (vasto medial oblicuo) —el músculo cuádruple de «gota»",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates patellar tracking, hip mechanics, and pelvic balance to identify all contributors to PFPS. SOT pelvic leveling corrects the hip and femoral mechanics that drive lateral patellar maltracking. Patella mobilization and knee joint adjustments restore normal patellofemoral glide. Foot and ankle corrections address overpronation. VMO activation and hip strengthening exercises are integrated as home care. Regenerative therapies reduce local inflammation and support cartilage recovery. This comprehensive approach resolves PFPS far more reliably than quadriceps stretching and bracing alone.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa el seguimiento rotuliano, la mecánica de cadera y el equilibrio pélvico para identificar todos los contribuyentes al SDPF. La nivelación pélvica SOT corrige la mecánica de cadera y femoral que impulsa el seguimiento rotuliano lateral anormal. La movilización de la rótula y los ajustes articulares de rodilla restauran el deslizamiento patelofemoral normal. Las correcciones del pie y tobillo abordan la sobrepronación. La activación del VMO y los ejercicios de fortalecimiento de cadera se integran como cuidado en casa. Las terapias regenerativas reducen la inflamación local y apoyan la recuperación del cartílago. Este enfoque integral resuelve el SDPF de manera mucho más confiable que el estiramiento de cuádriceps y el vendaje únicamente.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "meniscus-injuries",
    title: "Meniscus Injuries",
    titleEs: "Lesiones de Menisco",
    image: "/images/conditions/meniscusinjury.jpg",
    metaDescription:
      "Meniscus injury treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, SoftWave, and Class IV Laser to support meniscus healing and restore knee function without surgery.",
    metaDescriptionEs:
      "Tratamiento de lesiones de menisco en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, SoftWave y láser Clase IV para apoyar la cicatrización del menisco y restaurar la función de la rodilla sin cirugía.",
    intro:
      "Meniscus tears are one of the most common knee injuries — and many heal without surgery when the right conservative care is applied. Our combination of chiropractic correction and regenerative therapies supports the meniscus repair process.",
    introEs:
      "Los desgarros de menisco son una de las lesiones de rodilla más comunes —y muchos cicatrizan sin cirugía cuando se aplica el cuidado conservador adecuado. Nuestra combinación de corrección quiropráctica y terapias regenerativas apoya el proceso de reparación del menisco.",
    whatIs:
      "The menisci are two C-shaped fibrocartilage pads that sit between the femur and tibia in the knee joint, functioning as shock absorbers and stabilizers. Meniscus tears occur acutely from twisting injuries under load or gradually from degeneration. Degenerative tears — especially in patients over 40 — often heal with conservative care. Even acute tears frequently respond well to non-surgical management when the knee's biomechanics are corrected and regenerative healing is supported. Surgery (meniscectomy) removes meniscal tissue permanently, accelerating knee arthritis — making successful conservative care the preferred outcome whenever possible.",
    whatIsEs:
      "Los meniscos son dos almohadillas de fibrocartílago en forma de C que se ubican entre el fémur y la tibia en la articulación de la rodilla, funcionando como amortiguadores y estabilizadores. Los desgarros de menisco ocurren de forma aguda por lesiones de torsión bajo carga o gradualmente por degeneración. Los desgarros degenerativos —especialmente en pacientes mayores de 40 años— a menudo cicatrizan con cuidado conservador. Incluso los desgarros agudos frecuentemente responden bien al manejo no quirúrgico cuando la biomecánica de la rodilla se corrige y se apoya la cicatrización regenerativa. La cirugía (meniscectomía) elimina el tejido del menisco de forma permanente, acelerando la artritis de la rodilla —por lo que el cuidado conservador exitoso es el resultado preferido siempre que sea posible.",
    symptoms: [
      "Joint line pain at the inner or outer knee",
      "Swelling developing over hours after acute injury",
      "Locking or giving way of the knee",
      "Pain with deep squatting or kneeling",
      "Stiffness and limited range of motion",
      "Gradual onset of knee pain with activity in degenerative tears",
    ],
    symptomsEs: [
      "Dolor en la línea articular en la parte interna o externa de la rodilla",
      "Inflamación que se desarrolla en horas después de una lesión aguda",
      "Bloqueo o sensación de que la rodilla cede",
      "Dolor con cuclillas profundas o al arrodillarse",
      "Rigidez y rango de movimiento limitado",
      "Inicio gradual de dolor de rodilla con actividad en desgarros degenerativos",
    ],
    causes: [
      "Twisting injury under load in sports or daily activity",
      "Degenerative thinning and tearing from years of abnormal knee loading",
      "Pelvic imbalance creating asymmetric knee joint stress",
      "Ligament laxity reducing knee stability and increasing shear forces",
      "Obesity increasing compressive knee loading",
      "Prior ACL injury changing knee biomechanics",
    ],
    causesEs: [
      "Lesión de torsión bajo carga en deportes o actividad diaria",
      "Adelgazamiento degenerativo y desgarro por años de carga anormal de la rodilla",
      "Desequilibrio pélvico creando estrés asimétrico en la articulación de la rodilla",
      "Laxitud ligamentosa reduciendo la estabilidad de la rodilla y aumentando las fuerzas de cizallamiento",
      "Obesidad aumentando la carga compresiva de la rodilla",
      "Lesión previa del LCA cambiando la biomecánica de la rodilla",
    ],
    chiropracticTreatment:
      "Dr. Foss restores normal knee biomechanics through pelvic leveling (removing the upstream source of asymmetric knee loading), knee joint adjustments (restoring normal femoral-tibial mechanics), and foot and ankle corrections (addressing overpronation contributing to tibial internal rotation). With the biomechanical environment improved, regenerative therapies are applied directly to the meniscus injury to stimulate the healing of fibrocartilage — a tissue with limited innate blood supply and regenerative capacity. This combined approach gives the meniscus the best possible opportunity to heal without surgery.",
    chiropracticTreatmentEs:
      "El Dr. Foss restaura la biomecánica normal de la rodilla a través de la nivelación pélvica (eliminando la fuente aguas arriba de la carga asimétrica de la rodilla), ajustes de la articulación de la rodilla (restaurando la mecánica normal femoral-tibial) y correcciones del pie y tobillo (abordando la sobrepronación que contribuye a la rotación tibial interna). Con el entorno biomecánico mejorado, las terapias regenerativas se aplican directamente a la lesión del menisco para estimular la cicatrización del fibrocartílago —un tejido con suministro de sangre innato limitado y capacidad regenerativa. Este enfoque combinado le da al menisco la mejor oportunidad posible de cicatrizar sin cirugía.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "shin-splints",
    title: "Shin Splints",
    titleEs: "Síndrome de Estrés Tibial Medial | Quiropráctico San Antonio TX",
    image: "/images/conditions/shinsplint.jpg",
    metaDescription:
      "Shin splints treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve medial tibial stress syndrome and return athletes to training.",
    metaDescriptionEs:
      "Tratamiento del síndrome de estrés tibial medial en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, Terapia de Ondas de Choque y Láser Clase IV para resolver espinillas y devolver atletas al entrenamiento.",
    intro:
      "Shin splints — pain along the inner shin during and after running — are a common overuse injury that responds well to correcting the biomechanical overload driving the condition.",
    introEs:
      "Síndrome de estrés tibial medial —dolor en la parte interna de la tibia durante y después de correr— es una lesión común por uso excesivo que responde bien a corregir la sobrecarga biomecánica impulsando la condición.",
    whatIs:
      "Medial tibial stress syndrome (MTSS) — commonly called shin splints — involves pain along the medial (inner) border of the tibia from periosteal inflammation, fascial stress, or early stress reaction at the tibial cortex. Abnormal tibial torsion from overpronation, pelvic imbalance causing increased tibial loading, and running biomechanics collectively drive MTSS. Without correction of the underlying biomechanical cause, the condition progresses despite rest — returning as soon as training resumes. In severe cases, ignored shin splints progress to tibial stress fractures.",
    whatIsEs:
      "El síndrome de estrés tibial medial (SETM) —comúnmente llamado síndrome de espinillas— implica dolor a lo largo del borde medial (interno) de la tibia por inflamación perióstica, estrés fascial o reacción de estrés temprana en la corteza tibial. La torsión tibial anormal por sobrepronación, desequilibrio pélvico causando aumento de carga tibial y biomecánica de correr colectivamente impulsan SETM. Sin corrección de la causa biomecánica subyacente, la condición progresa a pesar del reposo —regresando tan pronto como se reanuda el entrenamiento. En casos severos, las espinillas ignoradas progresan a fracturas de estrés tibial.",
    symptoms: [
      "Dull or aching pain along the inner lower leg (tibia)",
      "Pain beginning during runs and persisting afterward",
      "Tenderness to palpation over the medial tibial border",
      "Mild swelling along the shin",
      "Pain worse at the start of a run, sometimes improving mid-run, then worsening",
      "Morning stiffness and tightness in the lower leg",
    ],
    symptomsEs: [
      "Dolor sordo o intermitente a lo largo de la parte inferior interna de la pierna (tibia)",
      "Dolor que comienza durante carreras y persiste después",
      "Sensibilidad a la palpación sobre el borde tibial medial",
      "Leve inflamación a lo largo de la tibia",
      "Dolor peor al inicio de una carrera, a veces mejorando a mitad, luego empeorando",
      "Rigidez matutina y tensión en la parte inferior de la pierna",
    ],
    causes: [
      "Overpronation causing excessive tibial internal rotation and periosteal stress",
      "Pelvic imbalance creating asymmetric tibial loading",
      "Sudden increase in training volume, frequency, or surface hardness",
      "Running in worn shoes without adequate motion control",
      "Tight gastrocnemius and soleus muscles increasing tibial fascial tension",
      "Weak hip abductors and glutes reducing lower extremity stability",
    ],
    causesEs: [
      "Sobrepronación causando rotación interna tibial excesiva y estrés perióstico",
      "Desequilibrio pélvico creando carga tibial asimétrica",
      "Aumento repentino en volumen, frecuencia de entrenamiento o dureza de superficie",
      "Correr con zapatos gastados sin control de movimiento adecuado",
      "Músculos gastrocnemio y sóleo tensos aumentando tensión fascial tibial",
      "Abductores de cadera y glúteos débiles reduciendo estabilidad de extremidades inferiores",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses shin splints through a kinetic chain approach: pelvic leveling removes the upstream biomechanical driver of asymmetric tibial stress; foot and ankle adjustments correct overpronation; tibiofibular joint corrections restore normal fibular mechanics. Myofascial release targeting the deep posterior compartment muscles reduces periosteal tension. Regenerative therapies are applied along the medial tibia to reduce inflammation and support periosteal healing. Graduated training modifications and footwear recommendations prevent recurrence.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda las espinillas a través de un enfoque de cadena cinética: el nivelado pélvico elimina el impulsor biomecánico ascendente del estrés tibial asimétrico; los ajustes de pie y tobillo corrigen la sobrepronación; las correcciones de la articulación tibiofibular restauran la mecánica fibular normal. La liberación miofascial dirigida a los músculos del compartimento posterior profundo reduce la tensión perióstica. Las terapias regenerativas se aplican a lo largo de la tibia medial para reducir la inflamación y apoyar la cicatrización perióstica. Las modificaciones de entrenamiento graduadas y recomendaciones de calzado previenen recurrencia.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "achilles-tendonitis",
    title: "Achilles Tendonitis",
    titleEs: "Tendinitis del Aquiles | Quiropráctico San Antonio TX",
    image: "/images/conditions/achillestendonitis.jpg",
    metaDescription:
      "Achilles tendonitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to heal Achilles tendinopathy and prevent rupture.",
    metaDescriptionEs:
      "Tratamiento de tendinitis del Aquiles en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, Terapia de Ondas de Choque, SoftWave y Láser Clase IV para sanar la tendinopatía del Aquiles.",
    intro:
      "Achilles tendonitis — pain, stiffness, and swelling in the Achilles tendon — is a serious overuse injury that requires more than rest and ice. Our regenerative approach heals the tendon while chiropractic care corrects the biomechanical cause.",
    introEs:
      "La tendinitis del Aquiles —dolor, rigidez e inflamación en el tendón de Aquiles— es una lesión seria por uso excesivo que requiere más que reposo e hielo. Nuestro enfoque regenerativo sana el tendón mientras el cuidado quiropráctico corrige la causa biomecánica.",
    whatIs:
      "Achilles tendinopathy ranges from reactive tendinopathy (early, reversible) to degenerative tendinosis (advanced, with structural disorganization of collagen). The Achilles tendon, the largest and strongest tendon in the body, undergoes progressive degeneration from repetitive overloading — particularly when pelvic imbalance and overpronation create abnormal medial column loading that torques the Achilles with each step. Untreated Achilles tendinopathy progresses to rupture risk. Regenerative therapies combined with biomechanical correction of the underlying cause provide the most effective path to tendon recovery.",
    whatIsEs:
      "La tendinopatía del Aquiles varía de tendinopatía reactiva (temprana, reversible) a tendinosis degenerativa (avanzada, con desorganización estructural de colágeno). El tendón de Aquiles, el tendón más grande y fuerte del cuerpo, experimenta degeneración progresiva por sobrecarga repetitiva —particularmente cuando el desequilibrio pélvico y la sobrepronación crean carga de columna medial anormal que tuerce el Aquiles con cada paso. La tendinopatía del Aquiles no tratada progresa a riesgo de ruptura. Las terapias regenerativas combinadas con corrección biomecánica de la causa subyacente proporcionan la ruta más efectiva para la recuperación del tendón.",
    symptoms: [
      "Pain and stiffness at the back of the heel and lower leg",
      "Morning pain that eases with movement ('warm-up phenomenon')",
      "Tendon thickening, swelling, or nodule formation",
      "Pain with running, jumping, or stair climbing",
      "Tenderness 2–6 cm above the calcaneal insertion",
      "Crepitus (squeaking) with ankle movement",
    ],
    symptomsEs: [
      "Dolor y rigidez en la parte posterior del talón y pierna inferior",
      "Dolor matutino que se alivia con el movimiento (fenómeno de calentamiento)",
      "Engrosamiento del tendón, inflamación o formación de nódulo",
      "Dolor con correr, saltar o subir escaleras",
      "Sensibilidad 2-6 cm por encima de la inserción calcánea",
      "Crepitación (chirrido) con movimiento del tobillo",
    ],
    causes: [
      "Overpronation creating torsional stress on the Achilles",
      "Pelvic imbalance altering lower extremity biomechanics",
      "Sudden increase in training load without adequate tendon adaptation",
      "Tight gastrocnemius and soleus increasing Achilles tendon load",
      "Prior fluoroquinolone antibiotic use weakening tendon collagen",
      "Poor footwear (low drop to high drop change too rapidly)",
    ],
    causesEs: [
      "Sobrepronación creando estrés torsional en el Aquiles",
      "Desequilibrio pélvico alterando biomecánica de extremidades inferiores",
      "Aumento repentino en carga de entrenamiento sin adaptación adecuada del tendón",
      "Gastrocnemio y sóleo tensos aumentando carga del tendón del Aquiles",
      "Uso previo de antibióticos fluoroquinolonas debilitando colágeno del tendón",
      "Calzado deficiente (cambio de caída baja a alta demasiado rápidamente)",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses Achilles tendinopathy from the kinetic chain up. Pelvic leveling and lumbar corrections remove the upstream forces driving overpronation and asymmetric tendon loading. Calcaneal and ankle joint adjustments restore normal hindfoot mechanics. Myofascial release of the gastrocnemius and soleus reduces tendon compressive loading. Regenerative therapies are applied directly to the Achilles tendon to stimulate collagen synthesis, restore tendon architecture, and reduce the risk of progression to rupture.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la tendinopatía del Aquiles desde la cadena cinética hacia arriba. El nivelado pélvico y las correcciones lumbares eliminan las fuerzas ascendentes impulsando sobrepronación y carga de tendón asimétrica. Los ajustes articulares calcáneos y de tobillo restauran la mecánica normal del antepié. La liberación miofascial del gastrocnemio y sóleo reduce la carga compresiva del tendón. Las terapias regenerativas se aplican directamente al tendón del Aquiles para estimular síntesis de colágeno, restaurar arquitectura del tendón y reducir riesgo de progresión a ruptura.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "bunions",
    title: "Bunions",
    titleEs: "Juanetes | Quiropráctico San Antonio TX",
    image: "/images/conditions/bunion.jpg",
    metaDescription:
      "Bunion care in San Antonio TX. Pura Vida Chiropractic addresses the pelvic and foot biomechanics driving bunion formation to slow progression and relieve bunion pain.",
    metaDescriptionEs:
      "Cuidado de juanetes en San Antonio, TX. Pura Vida Chiropractic aborda la biomecánica pélvica y del pie impulsando la formación de juanetes para ralentizar la progresión.",
    intro:
      "Bunions — the bony prominence at the base of the big toe — are driven by abnormal foot mechanics that begin at the pelvis. Chiropractic care and regenerative therapies address both the local pain and the upstream cause.",
    introEs:
      "Los juanetes —la prominencia ósea en la base del dedo gordo— están impulsados por mecánica anormal del pie que comienza en la pelvis. El cuidado quiropráctico y terapias regenerativas abordan tanto el dolor local como la causa ascendente.",
    whatIs:
      "A bunion (hallux valgus) is a deformity where the big toe deviates toward the second toe and a bony prominence develops at the metatarsophalangeal (MTP) joint. The primary cause is abnormal forefoot loading — typically from overpronation, which causes the first metatarsal to splay medially while the big toe is pushed laterally by footwear. Pelvic imbalance and leg length discrepancy create asymmetric foot loading that preferentially affects one foot more than the other. While surgery (bunionectomy) may ultimately be needed for severe deformities, conservative care can significantly slow progression, reduce pain, and improve foot function.",
    whatIsEs:
      "Un juanete (hallux valgus) es una deformidad donde el dedo gordo se desvía hacia el segundo dedo y se desarrolla una prominencia ósea en la articulación metatarsofalángica (MTP). La causa primaria es carga anormal del antepié —típicamente por sobrepronación, que causa que el primer metatarso se abra medialmente mientras el dedo gordo es empujado lateralmente por el calzado. El desequilibrio pélvico y la discrepancia de longitud de pierna crean carga de pie asimétrica que afecta preferentemente un pie más que el otro. Aunque la cirugía (bunionectomía) puede finalmente ser necesaria para deformidades severas, el cuidado conservador puede ralentizar significativamente la progresión.",
    symptoms: [
      "Bony prominence at the base of the big toe joint",
      "Redness, swelling, and pain over the MTP joint",
      "Big toe angling toward the second toe",
      "Pain with walking, especially in narrow or pointed footwear",
      "Calluses and corns between the first and second toes",
      "Limited range of motion of the big toe",
    ],
    symptomsEs: [
      "Prominencia ósea en la base de la articulación del dedo gordo",
      "Enrojecimiento, inflamación y dolor sobre la articulación MTP",
      "Dedo gordo angulado hacia el segundo dedo",
      "Dolor al caminar, especialmente con calzado estrecho o puntiagudo",
      "Callosidades y callos entre el primer y segundo dedo",
      "Rango de movimiento limitado del dedo gordo",
    ],
    causes: [
      "Overpronation driving first metatarsal medial deviation",
      "Pelvic imbalance creating asymmetric foot loading",
      "Narrow, pointed, or high-heeled footwear compressing toes",
      "Hypermobility of the first tarsometatarsal joint",
      "Genetic predisposition to forefoot valgus",
    ],
    causesEs: [
      "Sobrepronación impulsando desviación medial del primer metatarso",
      "Desequilibrio pélvico creando carga de pie asimétrica",
      "Calzado estrecho, puntiagudo o tacones altos comprimiendo dedos",
      "Hipermovilidad de la articulación tarsometatarsiana primera",
      "Predisposición genética a valgus del antepié",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the biomechanical root of bunion formation through pelvic leveling, which normalizes leg symmetry and foot loading, and calcaneal and first metatarsal joint adjustments that restore foot arch mechanics and reduce first ray instability. Myofascial release of the plantar fascia and intrinsic foot muscles supports better forefoot alignment. Regenerative therapies reduce the inflammation and chronic bursitis at the MTP joint that cause day-to-day pain. Custom or over-the-counter orthotics are recommended to maintain foot correction between visits.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la raíz biomecánica de la formación de juanetes a través del nivelado pélvico, que normaliza la simetría de las piernas y carga del pie, y ajustes de articulación calcánea y del primer metatarso que restauran la mecánica del arco del pie y reducen la inestabilidad del primer rayo. La liberación miofascial de la fascia plantar y músculos intrínsicos del pie apoya mejor alineación del antepié. Las terapias regenerativas reducen la inflamación y bursitis crónica en la articulación MTP que causan dolor día a día. Se recomiendan ortesis personalizadas o de venta libre para mantener la corrección del pie entre visitas.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "heel-spur",
    title: "Heel Spur",
    titleEs: "Espolón del Talón | Quiropráctico San Antonio TX",
    image: "/images/conditions/heelspur.jpg",
    metaDescription:
      "Heel spur treatment in San Antonio TX. Pura Vida Chiropractic uses Shockwave Therapy and Class IV Laser to break down heel spurs and relieve calcaneal pain without surgery.",
    metaDescriptionEs:
      "Tratamiento de espolón del talón en San Antonio, TX. Pura Vida Chiropractic utiliza Terapia de Ondas de Choque y Láser Clase IV para descomponer espolones del talón sin cirugía.",
    intro:
      "Heel spurs — calcium deposits on the underside of the heel bone — cause debilitating heel pain that limits walking and activity. Shockwave therapy at Pura Vida is highly effective at breaking down these calcifications and restoring painless movement.",
    introEs:
      "Los espolones del talón —depósitos de calcio en la parte inferior del hueso del talón— causan dolor debilitante del talón que limita caminar y actividad. La terapia de ondas de choque en Pura Vida es altamente efectiva para descomponer estas calcificaciones.",
    whatIs:
      "A heel spur is a calcium deposit that forms at the site of chronic fascial tension on the calcaneus (heel bone) — most commonly at the plantar fascia insertion or, less often, at the Achilles tendon insertion. Heel spurs develop over months and years in response to the same biomechanical overload that causes plantar fasciitis and Achilles tendinopathy. The spur itself is often not painful — the inflammation of the surrounding soft tissue is the true source of pain. Shockwave therapy, which was originally developed to break down kidney stones, is now recognized as one of the most effective treatments for calcific heel pathology.",
    whatIsEs:
      "Un espolón del talón es un depósito de calcio que se forma en el sitio de tensión fascial crónica en el calcáneo (hueso del talón) —más comúnmente en la inserción de la fascia plantar o, menos frecuentemente, en la inserción del tendón de Aquiles. Los espolones del talón se desarrollan a lo largo de meses y años en respuesta a la misma sobrecarga biomecánica que causa fascitis plantar y tendinopatía del Aquiles. El espolón en sí mismo a menudo no es doloroso —la inflamación del tejido blando circundante es la verdadera fuente del dolor. La terapia de ondas de choque, originalmente desarrollada para descomponer cálculos renales, ahora se reconoce como uno de los tratamientos más efectivos para la patología calcífica del talón.",
    symptoms: [
      "Sharp, stabbing heel pain with weight-bearing — especially with first steps",
      "Pain at the bottom of the heel (plantar spur) or back of the heel (insertional Achilles)",
      "Palpable bony prominence in severe cases",
      "Pain confirmed by X-ray showing calcaneal spur formation",
      "Heel pain that has persisted for months or years",
      "Limited ability to walk, exercise, or stand for prolonged periods",
    ],
    symptomsEs: [
      "Dolor agudo y punzante del talón con apoyo de peso —especialmente con primeros pasos",
      "Dolor en la parte inferior del talón (espolón plantar) o parte posterior (Aquiles insertivo)",
      "Prominencia ósea palpable en casos severos",
      "Dolor confirmado por radiografía mostrando formación de espolón calcáneo",
      "Dolor de talón que ha persistido por meses o años",
      "Capacidad limitada para caminar, hacer ejercicio o estar de pie por períodos prolongados",
    ],
    causes: [
      "Chronic plantar fascia tension at the calcaneal insertion",
      "Insertional Achilles tendinopathy at the posterior calcaneus",
      "Overpronation and pelvic imbalance creating chronic heel overload",
      "Calcium deposit formation as a response to chronic microtrauma",
      "Obesity increasing calcaneal compressive loading",
    ],
    causesEs: [
      "Tensión crónica de la fascia plantar en la inserción calcánea",
      "Tendinopatía insertiva del Aquiles en el calcáneo posterior",
      "Sobrepronación y desequilibrio pélvico creando sobrecarga crónica del talón",
      "Formación de depósitos de calcio como respuesta a microtrauma crónico",
      "Obesidad aumentando carga compresiva calcánea",
    ],
    chiropracticTreatment:
      "Dr. Foss combines the biomechanical correction of plantar fasciitis (pelvic leveling, calcaneal adjustment, calf release) with targeted shockwave therapy at the heel spur site. Shockwave energy disrupts the calcific deposit, stimulates localized blood flow, and activates the body's healing response to remove the calcium and resolve the surrounding inflammation. Class IV laser therapy further reduces pain and promotes tissue repair. Most heel spur patients experience significant pain reduction within 3–6 shockwave sessions.",
    chiropracticTreatmentEs:
      "El Dr. Foss combina la corrección biomecánica de la fascitis plantar (nivelado pélvico, ajuste calcáneo, liberación de pantorrilla) con terapia de ondas de choque dirigida en el sitio del espolón del talón. La energía de ondas de choque interrumpe el depósito calcífico, estimula el flujo de sangre localizado y activa la respuesta curativa del cuerpo para eliminar el calcio y resolver la inflamación circundante. La terapia láser Clase IV reduce aún más el dolor y promueve la reparación tisular. La mayoría de los pacientes con espolón del talón experimentan reducción significativa del dolor dentro de 3-6 sesiones de ondas de choque.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "hammer-toes",
    title: "Hammer Toes",
    titleEs: "Dedos en Martillo | Quiropráctico San Antonio TX",
    image: "/images/conditions/hammertoes.jpg",
    metaDescription:
      "Hammer toe care in San Antonio TX. Pura Vida Chiropractic addresses the foot and pelvic biomechanics contributing to hammer toe deformity and provides pain relief.",
    metaDescriptionEs:
      "Cuidado de dedos en martillo en San Antonio, TX. Pura Vida Chiropractic aborda la biomecánica del pie y pélvica contribuyendo a la deformidad de dedos en martillo.",
    intro:
      "Hammer toes — abnormal toe joint flexion causing curled, painful toes — result from biomechanical imbalances in the foot and gait that chiropractic care can address to reduce pain and slow progression.",
    introEs:
      "Los dedos en martillo —flexión anormal de articulación de dedo causando dedos rizados y dolorosos— resultan de desequilibrios biomecánicos en el pie y marcha que el cuidado quiropráctico puede abordar para reducir dolor y ralentizar progresión.",
    whatIs:
      "Hammer toe is a deformity where the middle joint of a toe is permanently or semi-permanently flexed, causing the toe to appear bent or curled. It most commonly affects the second, third, and fourth toes. Hammer toe develops from an imbalance between the long toe flexor tendons and the short intrinsic muscles, typically driven by overpronation, tight footwear, and forefoot biomechanical overload. In flexible hammer toe (early stage), the toe can still be straightened passively. In rigid hammer toe (advanced), the joint is fixed. Conservative care focuses on restoring forefoot mechanics, reducing tendon tension, and slowing progression.",
    whatIsEs:
      "El dedo en martillo es una deformidad donde la articulación media de un dedo está permanente o semipermaentemente flexionada, causando que el dedo aparezca doblado o rizado. Más comúnmente afecta el segundo, tercero y cuarto dedos. El dedo en martillo se desarrolla por un desequilibrio entre los tendones flexores largos de los dedos y los músculos intrínsecos cortos, típicamente impulsados por sobrepronación, calzado apretado y sobrecarga biomecánica del antepié. En dedo en martillo flexible (etapa temprana), el dedo aún puede enderezarse pasivamente. En dedo en martillo rígido (avanzado), la articulación está fija. El cuidado conservador se enfoca en restaurar la mecánica del antepié, reducir tensión de tendón y ralentizar progresión.",
    symptoms: [
      "Toe that is bent at the middle joint, unable to fully straighten",
      "Corns or calluses on the top of the bent joint from shoe friction",
      "Pain in the affected toe with walking or wearing shoes",
      "Swelling and redness at the bent joint",
      "Difficulty fitting into standard footwear",
      "Progressive stiffening of the toe over time",
    ],
    symptomsEs: [
      "Dedo que está doblado en la articulación media, incapaz de enderezarse completamente",
      "Callos o callosidades en la parte superior de la articulación doblada por fricción del zapato",
      "Dolor en el dedo afectado con caminar o usar zapatos",
      "Inflamación y enrojecimiento en la articulación doblada",
      "Dificultad para ajustar en calzado estándar",
      "Endurecimiento progresivo del dedo con el tiempo",
    ],
    causes: [
      "Overpronation forcing forefoot loading onto the second and third rays",
      "Muscle imbalance between long and short toe flexors",
      "Tight or narrow footwear compressing and bending toes",
      "Bunion deformity pushing the big toe into the second toe",
      "Rheumatoid arthritis affecting MTP joints",
      "High arched foot (cavus foot) changing forefoot loading",
    ],
    causesEs: [
      "Sobrepronación forzando carga del antepié al segundo y tercer rayos",
      "Desequilibrio muscular entre flexores largos y cortos de dedos",
      "Calzado apretado o estrecho comprimiendo y doblando dedos",
      "Deformidad de juanete empujando el dedo gordo al segundo dedo",
      "Artritis reumatoide afectando articulaciones MTP",
      "Pie con arco alto (pie cavo) cambiando carga del antepié",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the forefoot mechanics driving hammer toe progression — calcaneal and midfoot joint adjustments restore arch mechanics, while pelvic leveling normalizes gait. Metatarsophalangeal joint mobilization improves the range of motion at the base of the affected toe. Intrinsic foot muscle exercises are prescribed to strengthen the short toe flexors and reduce the tendon imbalance. Footwear and orthotic guidance helps redistribute forefoot pressure. Regenerative therapies reduce pain and inflammation in symptomatic toe joints.",
    chiropracticTreatmentEs:
      "El Dr. Foss aborda la mecánica del antepié impulsando progresión de dedos en martillo —ajustes articulares calcáneos y del mediopié restauran la mecánica del arco, mientras el nivelado pélvico normaliza la marcha. La movilización articular metatarsofalángica mejora el rango de movimiento en la base del dedo afectado. Se prescriben ejercicios de músculo intrínseco del pie para fortalecer los flexores cortos de dedos y reducir el desequilibrio de tendón. La guía de calzado y ortesis ayuda a redistribuir la presión del antepié. Las terapias regenerativas reducen dolor e inflamación en articulaciones de dedos sintomáticos.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sprains-strains",
    title: "Sprains & Strains",
    titleEs: "Esguinces y Distensiones | Quiropráctico San Antonio TX",
    image: "/images/conditions/sprainandstrain.jpg",
    metaDescription:
      "Sprain and strain treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, SoftWave, and Class IV Laser to accelerate recovery from ligament and muscle injuries throughout the body.",
    metaDescriptionEs:
      "Tratamiento de esguinces y distensiones en San Antonio, TX. Pura Vida Chiropractic utiliza SOT, SoftWave y Láser Clase IV para acelerar la recuperación de lesiones de ligamentos y músculos.",
    intro:
      "Sprains and strains — ligament and muscle injuries from trauma or overuse — are among the most common acute injuries. Our combination of joint correction and regenerative therapies speeds recovery and prevents chronic instability.",
    introEs:
      "Los esguinces y distensiones —lesiones de ligamentos y músculos por trauma o uso excesivo— están entre las lesiones agudas más comunes. Nuestra combinación de corrección articular y terapias regenerativas acelera la recuperación.",
    whatIs:
      "A sprain is a stretching or tearing of a ligament (bone-to-bone), while a strain involves a muscle or tendon (muscle-to-bone). Grade I injuries involve microscopic tearing with intact structural integrity; Grade II involve partial tears with some functional loss; Grade III involve complete tears requiring surgical assessment. The most common sites are the ankle, knee, wrist, and low back. After acute ligament injury, joint mechanics are invariably disrupted — the injured joint develops compensatory positioning, surrounding muscles guard protectively, and the nervous system alters motor control patterns. Chiropractic correction of these secondary joint dysfunctions is essential for complete recovery.",
    whatIsEs:
      "Un esguince es un estiramiento o desgarro de un ligamento (hueso a hueso), mientras que una distensión implica un músculo o tendón (músculo a hueso). Las lesiones Grado I implican desgarro microscópico con integridad estructural intacta; Grado II implica desgarros parciales con pérdida funcional; Grado III implica desgarros completos requiriendo evaluación quirúrgica. Los sitios más comunes son el tobillo, rodilla, muñeca y espalda baja. Después de lesión ligamentaria aguda, la mecánica articular se disrumpe invariablemente —la articulación lesionada desarrolla posicionamiento compensatorio, músculos circundantes se protegen, y el sistema nervioso altera patrones de control motor. La corrección quiropráctica de estas disfunciones articulares secundarias es esencial para recuperación completa.",
    symptoms: [
      "Pain at the injured area, especially with movement or weight-bearing",
      "Swelling and bruising in the first 24–48 hours",
      "Joint instability or giving way (Grade II–III)",
      "Muscle spasm protecting the injured area",
      "Reduced range of motion",
      "Lingering weakness and re-injury risk if not fully rehabilitated",
    ],
    symptomsEs: [
      "Dolor en el área lesionada, especialmente con movimiento o apoyo de peso",
      "Inflamación y hematomas en las primeras 24-48 horas",
      "Inestabilidad articular o falta (Grado II-III)",
      "Espasmo muscular protegiendo el área lesionada",
      "Rango de movimiento reducido",
      "Debilidad persistente y riesgo de relesión si no se rehabilita completamente",
    ],
    causes: [
      "Sudden twisting or inversion force (ankle sprain)",
      "Contact trauma in sports",
      "Falls and sudden deceleration injuries",
      "Overexertion and sudden overloading of unprepared tissue",
      "Prior incompletely healed injuries predisposing to re-injury",
      "Joint misalignment increasing ligament stress",
    ],
    causesEs: [
      "Giro repentino o fuerza de inversión (esguince de tobillo)",
      "Trauma de contacto en deportes",
      "Caídas e lesiones de desaceleración repentina",
      "Sobreexerción y sobrecarga repentina de tejido no preparado",
      "Lesiones previas incompletamente cicatrizadas predisponiendo a relesión",
      "Desalineación articular aumentando estrés ligamentario",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates both the injured structure and the surrounding joint mechanics. After the acute phase, joint adjustments restore normal alignment that was disrupted by the injury — preventing the development of chronic instability and compensation patterns. Regenerative therapies are applied to the injured ligament or muscle to accelerate tissue repair and restore full collagen organization. Progressive rehabilitation exercise prevents recurrence. A complete recovery plan that includes joint correction, tissue healing, and strength restoration prevents the all-too-common cycle of re-injury.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa tanto la estructura lesionada como la mecánica articular circundante. Después de la fase aguda, los ajustes articulares restauran la alineación normal que fue disrumida por la lesión —previniendo el desarrollo de inestabilidad crónica y patrones de compensación. Las terapias regenerativas se aplican al ligamento o músculo lesionado para acelerar la reparación tisular y restaurar organización completa de colágeno. El ejercicio de rehabilitación progresivo previene recurrencia. Un plan completo de recuperación que incluye corrección articular, cicatrización tisular y restauración de fuerza previene el ciclo muy común de relesión.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "restless-leg-syndrome",
    title: "Restless Leg Syndrome",
    titleEs: "Síndrome de Piernas Inquietas | Quiropráctico San Antonio TX",
    image: "/images/conditions/restlesslegsyndrome.jpg",
    metaDescription:
      "Restless leg syndrome care in San Antonio TX. Pura Vida Chiropractic addresses the lumbar and neurological contributors to restless legs for improved sleep and comfort.",
    metaDescriptionEs:
      "Cuidado del síndrome de piernas inquietas en San Antonio, TX. Pura Vida Chiropractic aborda los contribuyentes lumbares y neurológicos de piernas inquietas para mejorar sueño.",
    intro:
      "Restless leg syndrome — the irresistible urge to move the legs at rest — significantly disrupts sleep and quality of life. Chiropractic care addresses the lumbar nerve and vascular components contributing to RLS symptoms.",
    introEs:
      "El síndrome de piernas inquietas —el impulso irresistible de mover las piernas en reposo— disrumpe significativamente el sueño y calidad de vida. El cuidado quiropráctico aborda los componentes de nervio lumbar y vascular contribuyendo a síntomas de SPI.",
    whatIs:
      "Restless legs syndrome (RLS) is a neurological sensorimotor disorder characterized by uncomfortable sensations in the legs (creeping, crawling, itching, or aching) and an irresistible urge to move them — worse at rest and in the evening. While iron deficiency, dopamine dysregulation, and genetic factors are primary contributors, lumbar nerve root irritation and vascular insufficiency in the lower extremities play a significant secondary role. Patients with lumbar subluxations affecting the L4–S3 nerve roots — which supply the legs — frequently develop or worsen RLS symptoms from the chronic low-grade nerve irritation. Correcting this spinal component can measurably improve RLS.",
    whatIsEs:
      "El síndrome de piernas inquietas (SPI) es un trastorno neurológico sensoriomotor caracterizado por sensaciones incómodas en las piernas (arrastramiento, hormigueo, picazón o dolor) y un impulso irresistible de moverlas —peor en reposo y en la tarde. Mientras que deficiencia de hierro, disregulación de dopamina y factores genéticos son contribuyentes primarios, la irritación de raíz nerviosa lumbar e insuficiencia vascular en extremidades inferiores juegan un papel secundario significativo. Los pacientes con subluxaciones lumbares afectando raíces nerviosas L4-S3 —que suministran las piernas— frecuentemente desarrollan o empeoran síntomas de SPI por irritación nerviosa crónica de bajo grado. Corregir este componente espinal puede mejorar SPI de manera medible.",
    symptoms: [
      "Uncomfortable sensations in the legs at rest — especially evenings and nights",
      "Irresistible urge to move the legs for temporary relief",
      "Involuntary periodic limb movements during sleep",
      "Significant sleep disruption from nightly leg discomfort",
      "Daytime fatigue from poor sleep quality",
      "Worsening with extended sitting or lying",
    ],
    symptomsEs: [
      "Sensaciones incómodas en las piernas en reposo —especialmente tardes y noches",
      "Impulso irresistible de mover las piernas para alivio temporal",
      "Movimientos periódicos involuntarios de extremidades durante el sueño",
      "Disrumpe significativo del sueño por incomodidad nocturna de piernas",
      "Fatiga diurna por calidad pobre del sueño",
      "Empeoramiento con sedestación o decúbito extendido",
    ],
    causes: [
      "Dopamine pathway dysregulation",
      "Iron deficiency reducing dopamine synthesis",
      "Lumbar nerve root irritation (L4–S3) sensitizing lower extremity nerves",
      "Poor lower extremity circulation and venous insufficiency",
      "Genetic predisposition",
      "Pregnancy (often resolves postpartum)",
    ],
    causesEs: [
      "Disregulación de vías de dopamina",
      "Deficiencia de hierro reduciendo síntesis de dopamina",
      "Irritación de raíz nerviosa lumbar (L4-S3) sensibilizando nervios de extremidades inferiores",
      "Mala circulación de extremidades inferiores e insuficiencia venosa",
      "Predisposición genética",
      "Embarazo (frecuentemente se resuelve postparto)",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the lumbar spine — particularly L4–S3 — for subluxations and disc-related nerve root irritation that may be contributing to lower extremity neurological hypersensitivity. SOT lumbar and sacral corrections reduce nerve root irritation, potentially decreasing the sensory threshold that triggers RLS symptoms. Lower extremity circulation is also assessed, and soft-tissue techniques to the lower legs improve venous and lymphatic return. While chiropractic care addresses the spinal component of RLS rather than the central dopaminergic pathways, many patients report meaningful improvement in symptom frequency and severity with consistent lumbar care.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna lumbar —particularmente L4-S3— para subluxaciones e irritación de raíz nerviosa relacionada con disco que puede estar contribuyendo a hipersensibilidad neurológica de extremidades inferiores. Las correcciones lumbares y sacrales SOT reducen la irritación de la raíz nerviosa, potencialmente disminuyendo el umbral sensorial que dispara síntomas de SPI. La circulación de extremidades inferiores también se evalúa y técnicas de tejidos blandos a piernas inferiores mejoran el retorno venoso y linfático. Mientras el cuidado quiropráctico aborda el componente espinal de SPI más que vías dopaminérgicas centrales, muchos pacientes reportan mejora significativa en frecuencia y severidad de síntomas con cuidado lumbar consistente.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "poor-circulation",
    title: "Poor Circulation",
    titleEs: "Mala Circulación | Quiropráctico San Antonio TX",
    image: "/images/conditions/poorcirculation.jpg",
    metaDescription:
      "Poor circulation care in San Antonio TX. Pura Vida Chiropractic uses SOT and SoftWave Therapy to improve peripheral vascular function and reduce cold hands and feet.",
    metaDescriptionEs:
      "Cuidado de mala circulación en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y Terapia SoftWave para mejorar la función vascular periférica y reducir manos y pies fríos.",
    intro:
      "Poor circulation — cold hands and feet, numbness, and swelling — often has a spinal component that chiropractic care can directly improve. The sympathetic nervous system controls vascular tone, and subluxations that disrupt it impair circulation.",
    introEs:
      "La mala circulación —manos y pies fríos, entumecimiento e inflamación— frecuentemente tiene un componente espinal que el cuidado quiropráctico puede mejorar directamente. El sistema nervioso simpático controla el tono vascular y subluxaciones que lo disruptionan afectan la circulación.",
    whatIs:
      "Poor circulation encompasses a range of conditions where blood flow to the extremities is insufficient — including Raynaud's phenomenon, peripheral artery disease, venous insufficiency, and generalized vasoconstriction from sympathetic overactivation. The sympathetic nervous system, which runs through the thoracic and lumbar spine, controls arterial smooth muscle tone and directly regulates peripheral blood flow. Thoracic subluxations — particularly in the upper thoracic spine (T1–T5) — increase sympathetic tone and produce chronic peripheral vasoconstriction. Restoring normal thoracic alignment reduces sympathetic output and improves blood flow to the extremities.",
    whatIsEs:
      "La mala circulación abarca un rango de condiciones donde el flujo de sangre a las extremidades es insuficiente —incluyendo fenómeno de Raynaud, enfermedad arterial periférica, insuficiencia venosa y vasoconstricción generalizada por sobreactivación simpática. El sistema nervioso simpático, que corre a través de la columna torácica y lumbar, controla el tono del músculo liso arterial y regula directamente el flujo sanguíneo periférico. Las subluxaciones torácicas —particularmente en la columna torácica superior (T1-T5)— aumentan el tono simpático y producen vasoconstricción periférica crónica. Restaurar la alineación torácica normal reduce la salida simpática y mejora el flujo de sangre a las extremidades.",
    symptoms: [
      "Cold hands and feet, especially in cool environments",
      "Numbness or tingling in the fingers and toes at rest",
      "Skin color changes — pale, blue, or red extremities",
      "Leg swelling from venous pooling",
      "Slow wound healing in the extremities",
      "Fatigue and heaviness in the legs with activity",
    ],
    symptomsEs: [
      "Manos y pies fríos, especialmente en ambientes frescos",
      "Entumecimiento u hormigueo en dedos de manos y pies en reposo",
      "Cambios de color de piel —extremidades pálidas, azules o rojas",
      "Inflamación de piernas por depósito venoso",
      "Cicatrización lenta en las extremidades",
      "Fatiga y pesadez en piernas con actividad",
    ],
    causes: [
      "Thoracic subluxation increasing sympathetic vasoconstriction",
      "Peripheral arterial disease from atherosclerosis",
      "Raynaud's phenomenon — exaggerated vasospastic response",
      "Diabetes damaging peripheral blood vessels",
      "Sedentary lifestyle reducing cardiovascular efficiency",
      "Smoking causing arterial constriction and damage",
    ],
    causesEs: [
      "Subluxación torácica aumentando vasoconstricción simpática",
      "Enfermedad arterial periférica por aterosclerosis",
      "Fenómeno de Raynaud —respuesta vasoespástica exagerada",
      "Diabetes dañando vasos sanguíneos periféricos",
      "Estilo de vida sedentario reduciendo eficiencia cardiovascular",
      "Fumar causando constricción arterial y daño",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the thoracic spine for subluxations — particularly T1–T5 — that maintain elevated sympathetic tone and peripheral vasoconstriction. SOT thoracic adjustments at these levels normalize sympathetic output, allowing peripheral arteries to dilate and improving blood flow to the extremities. Ribcage mobility is also addressed, as rib restriction limits thoracic cage expansion and reduces cardiac output indirectly. SoftWave therapy applied to the extremities stimulates angiogenesis — the formation of new blood vessels — and improves microcirculation in the tissue.",
    chiropracticTreatmentEs:
      "El Dr. Foss evalúa la columna torácica para subluxaciones —particularmente T1-T5— que mantienen tono simpático elevado y vasoconstricción periférica. Los ajustes torácicos SOT en estos niveles normalizan la salida simpática, permitiendo que arterias periféricas se dilaten y mejorando flujo de sangre a extremidades. La movilidad de la caja torácica también se aborda, ya que restricción costal limita expansión de la caja torácica y reduce rendimiento cardíaco indirectamente. La terapia SoftWave aplicada a extremidades estimula angiogénesis —la formación de nuevos vasos sanguíneos— y mejora la microcirculación en el tejido.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "stress-anxiety",
    title: "Stress & Anxiety",
    titleEs: "Estrés y Ansiedad | Quiropráctico San Antonio TX",
    image: "/images/conditions/stressanxietytension.jpg",
    metaDescription:
      "Stress and anxiety relief in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to calm the nervous system, reduce physical stress symptoms, and support wellbeing.",
    metaDescriptionEs:
      "Alivio de estrés y ansiedad en San Antonio, TX. Pura Vida Chiropractic utiliza SOT y terapia craneosakral para calmar el sistema nervioso y reducir síntomas de estrés físico.",
    intro:
      "Stress and anxiety have profound physical effects — chronic muscle tension, elevated cortisol, impaired sleep, and immune suppression. Chiropractic care at Pura Vida calms the nervous system at its structural source.",
    introEs:
      "El estrés y ansiedad tienen efectos físicos profundos —tensión muscular crónica, cortisol elevado, sueño afectado e inmunidad suprimida. El cuidado quiropráctico en Pura Vida calma el sistema nervioso en su fuente estructural.",
    whatIs:
      "Stress and anxiety activate the sympathetic nervous system — triggering the fight-or-flight response, elevating cortisol, increasing muscle tension, accelerating heart rate, and disrupting sleep. While psychological stressors are the primary trigger, the nervous system's capacity to regulate stress is directly influenced by spinal health. Upper cervical subluxations compress the brainstem and impair vagal nerve tone — reducing the body's primary parasympathetic (calming) pathway. Craniosacral restrictions reduce the rhythmic motion that regulates the autonomic nervous system. Chiropractic correction of these structural contributors genuinely calms the nervous system and enhances the body's stress resilience.",
    whatIsEs:
      "El estrés y ansiedad activan el sistema nervioso simpático —desencadenando respuesta lucha-o-huida, elevando cortisol, aumentando tensión muscular, acelerando frecuencia cardíaca y disrumiendo sueño. Mientras factores de estrés psicológicos son el disparador primario, la capacidad del sistema nervioso de regular estrés está directamente influenciada por salud espinal. Las subluxaciones cervicales superiores comprimen el tronco encefálico e afectan el tono del nervio vago —reduciendo la vía parasimpática primaria del cuerpo (calmante). Las restricciones craneosacrales reducen el movimiento rítmico que regula el sistema nervioso autónomo. La corrección quiropráctica de estos contribuyentes estructurales genuinamente calma el sistema nervioso y mejora la resiliencia de estrés del cuerpo.",
    symptoms: [
      "Chronic muscle tension in the neck, shoulders, and upper back",
      "Difficulty relaxing or racing thoughts",
      "Sleep disruption — difficulty falling or staying asleep",
      "Fatigue that does not resolve with rest",
      "Digestive upset, headaches, and tight jaw",
      "Heightened emotional reactivity and irritability",
    ],
    symptomsEs: [
      "Tensión muscular crónica en cuello, hombros y espalda superior",
      "Dificultad relajarse o pensamientos acelerados",
      "Disrumpe del sueño —dificultad para conciliar o mantener sueño",
      "Fatiga que no se resuelve con descanso",
      "Malestar digestivo, dolores de cabeza y mandíbula apretada",
      "Reactividad emocional elevada e irritabilidad",
    ],
    causes: [
      "Chronic life stressors activating the sympathetic nervous system",
      "Upper cervical subluxation impairing vagal nerve tone",
      "Craniosacral restriction dysregulating autonomic nervous system",
      "Disrupted sleep perpetuating cortisol elevation",
      "Nutritional deficiencies (magnesium, B-vitamins) reducing stress resilience",
      "Trauma history and nervous system sensitization",
    ],
    causesEs: [
      "Factores de estrés de vida crónico activando sistema nervioso simpático",
      "Subluxación cervical superior afectando tono del nervio vago",
      "Restricción craneosakral disregulando sistema nervioso autónomo",
      "Sueño disrumido perpetuando elevación de cortisol",
      "Deficiencias nutricionales (magnesio, vitaminas B) reduciendo resiliencia de estrés",
      "Historial de trauma y sensibilización del sistema nervioso",
    ],
    chiropracticTreatment:
      "Upper cervical and craniosacral care is profoundly calming for the nervous system. Dr. Foss uses gentle SOT protocols and craniosacral corrections at the occiput and sphenoid to enhance vagal nerve function — the primary parasympathetic pathway responsible for the rest-and-digest state. Patients frequently describe a deep sense of relaxation and ease following these adjustments. The physical tension held in the cervical and thoracic spine is released, reducing the musculoskeletal manifestations of chronic stress. Many patients report improved sleep, better emotional regulation, and reduced anxiety within their first few weeks of chiropractic care.",
    chiropracticTreatmentEs:
      "El cuidado cervical superior y craneosakral es profundamente calmante para el sistema nervioso. El Dr. Foss utiliza protocolos SOT suaves y correcciones craneosacrales en el occipucio y esfenoides para mejorar la función del nervio vago —la vía parasimpática primaria responsable del estado de descanso-y-digestión. Los pacientes frecuentemente describen un profundo sentido de relajación y tranquilidad siguiendo estos ajustes. La tensión física mantenida en la columna cervical y torácica se libera, reduciendo manifestaciones musculoesqueléticas de estrés crónico. Muchos pacientes reportan mejor sueño, regulación emocional mejorada y ansiedad reducida dentro de sus primeras semanas de cuidado quiropráctico.",
    additionalTreatments: ["laser"],
  },

  // ─── 33 NEW CONDITIONS ───────────────────────────────────────────────────────

  {
    slug: "spinal-stenosis",
    title: "Spinal Stenosis",
    titleEs: "Estenosis Espinal | Quiropráctico San Antonio TX",
    image: "/images/conditions/spinal-stenosis.jpg",
    metaDescription: "Spinal stenosis treatment in San Antonio TX. Dr. Foss uses SOT chiropractic to decompress the spinal canal, reduce nerve pressure, and restore mobility without surgery.",
    metaDescriptionEs: "Tratamiento de estenosis espinal en San Antonio TX. El Dr. Foss usa quiropráctica SOT para descomprimir el canal espinal y reducir la presión nerviosa sin cirugía.",
    intro: "Spinal stenosis — the narrowing of the spinal canal — compresses nerves and causes pain, numbness, and weakness that can severely limit walking and daily activity. SOT chiropractic care decompresses the spine and restores function.",
    introEs: "La estenosis espinal —el estrechamiento del canal espinal— comprime nervios y causa dolor, entumecimiento y debilidad que puede limitar severamente caminar y actividad diaria. El cuidado quiropráctico SOT descomprime la columna y restaura función.",
    whatIs: "Spinal stenosis is a narrowing of the spaces within the spine that puts pressure on the nerves traveling through it. It most commonly occurs in the lumbar spine (causing leg pain with walking) and cervical spine (causing arm weakness and balance problems). Causes include osteoarthritis, disc bulging, thickened ligaments, and bone spurs. The condition progresses gradually and worsens with prolonged standing or walking, typically relieving with sitting or forward bending.",
    whatIsEs: "La estenosis espinal es un estrechamiento de los espacios dentro de la columna que ejerce presión en los nervios que viajan a través de ella. Ocurre más comúnmente en la columna lumbar (causando dolor de piernas al caminar) y columna cervical (causando debilidad de brazos y problemas de equilibrio). Las causas incluyen osteoartritis, protuberancia discal, ligamentos engrosados y espolones óseos. La condición progresa gradualmente y empeora con estar de pie o caminar prolongado, típicamente aliviando con sedestación o flexión anterior.",
    symptoms: [
      "Pain, numbness, or cramping in the legs that worsens with walking (neurogenic claudication)",
      "Lower back pain that eases when sitting or bending forward",
      "Weakness in legs, feet, or arms",
      "Balance problems and difficulty walking long distances",
      "Neck pain with arm weakness or numbness in cervical stenosis",
      "Bladder or bowel dysfunction in severe cases",
    ],
    symptomsEs: [
      "Dolor, entumecimiento o calambres en piernas que empeoran con caminar (claudicación neurogénica)",
      "Dolor de espalda baja que se alivia al sentarse o flexionarse hacia adelante",
      "Debilidad en piernas, pies o brazos",
      "Problemas de equilibrio y dificultad caminando largas distancias",
      "Dolor de cuello con debilidad de brazo o entumecimiento en estenosis cervical",
      "Disfunción de vejiga o intestino en casos severos",
    ],
    causes: [
      "Osteoarthritis and age-related degeneration of spinal joints",
      "Disc bulging and herniation narrowing the spinal canal",
      "Thickened ligamentum flavum reducing canal space",
      "Bone spurs (osteophytes) growing into the canal",
      "Spondylolisthesis — slippage of one vertebra over another",
      "Previous spinal injury or surgery creating scar tissue",
    ],
    causesEs: [
      "Osteoartritis y degeneración relacionada con edad de articulaciones espinales",
      "Protuberancia discal y hernia estrechando el canal espinal",
      "Ligamento amarillo engrosado reduciendo espacio del canal",
      "Espolones óseos (osteofitos) creciendo dentro del canal",
      "Espondololistesis —deslizamiento de una vértebra sobre otra",
      "Lesión o cirugía espinal previa creando tejido cicatricial",
    ],
    chiropracticTreatment: "SOT chiropractic care for spinal stenosis focuses on reducing mechanical loading on the spinal canal through precise pelvic and spinal correction. Dr. Foss uses gentle category-based SOT protocols that decompress the lumbar segments without forced manipulation. By correcting sacropelvic mechanics, axial loading through the degenerative segments is reduced and neurological function improves. Many patients with moderate stenosis experience significant relief in walking distance and daily comfort. Advanced regenerative therapies further reduce inflammation within the stenotic levels.",
    chiropracticTreatmentEs: "El cuidado quiropráctico SOT para estenosis espinal se enfoca en reducir la carga mecánica en el canal espinal a través de corrección pélvica y espinal precisa. El Dr. Foss utiliza protocolos SOT basados en categoría suave que descomprimen los segmentos lumbares sin manipulación forzada. Al corregir la mecánica sacropélvica, la carga axial a través de segmentos degenerativos se reduce y la función neurológica mejora. Muchos pacientes con estenosis moderada experimentan alivio significativo en distancia de caminar y comodidad diaria. Las terapias regenerativas avanzadas reducen aún más la inflamación dentro de los niveles estenóticos.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "whiplash",
    title: "Whiplash",
    titleEs: "Latigazo Cervical | Quiropráctico San Antonio TX",
    image: "/images/conditions/whiplash.jpg",
    metaDescription: "Whiplash treatment San Antonio TX. Pura Vida Chiropractic addresses cervical ligament injuries, muscle tears, and cranial distortions from auto accident whiplash with SOT protocols.",
    metaDescriptionEs: "Tratamiento de latigazo cervical en San Antonio TX. Quiropráctica SOT para lesiones de ligamentos cervicales, espasmos musculares y traumatismo craneal por accidente.",
    intro: "Whiplash from auto accidents or falls injures the cervical spine ligaments, muscles, and joint capsules. Symptoms often delay 24–72 hours after impact and can become chronic without proper treatment. SOT chiropractic addresses the full biomechanical picture.",
    introEs: "El latigazo cervical por accidentes automovilísticos o caídas lesiona ligamentos, músculos y cápsulas articulares de la columna cervical. Los síntomas frecuentemente se retrasan 24-72 horas después del impacto y pueden volverse crónicos sin tratamiento adecuado. La quiropráctica SOT aborda el panorama biomecánico completo.",
    whatIs: "Whiplash is a rapid acceleration-deceleration injury to the neck most commonly caused by rear-end auto collisions. The neck is forced into hyperextension then hyperflexion, straining or tearing the anterior and posterior ligaments, joint capsules, muscle attachments, and intervertebral discs. The impact also transmits forces through the base of the skull, causing cranial distortions that affect the craniosacral system. Delayed-onset symptoms are characteristic — full symptoms may not appear until 24–72 hours post-impact.",
    whatIsEs: "El latigazo cervical es una lesión de aceleración-desaceleración rápida del cuello más comúnmente causada por colisiones traseras de autos. El cuello es forzado a hiperextensión luego hiperflexión, tensionando o desgarrando ligamentos anteriores y posteriores, cápsulas articulares, inserciones musculares y discos intervertebrales. El impacto también transmite fuerzas a través de la base del cráneo, causando distorsiones craneales que afectan el sistema craneosakral. Los síntomas de inicio retrasado son característicos —síntomas completos pueden no aparecer hasta 24-72 horas post-impacto.",
    symptoms: [
      "Neck pain and stiffness worsening 24–72 hours after the accident",
      "Headaches originating at the base of the skull",
      "Shoulder, upper back, and arm pain or numbness",
      "Dizziness, visual disturbances, and ringing in the ears",
      "Jaw pain and difficulty chewing (TMJ involvement)",
      "Cognitive difficulties, difficulty concentrating, and sleep disruption",
    ],
    symptomsEs: [
      "Dolor y rigidez de cuello empeorando 24-72 horas después del accidente",
      "Dolores de cabeza originando en la base del cráneo",
      "Dolor o entumecimiento de hombro, espalda superior y brazo",
      "Mareos, disturbios visuales y zumbido en los oídos",
      "Dolor de mandíbula y dificultad masticando (involucración ATM)",
      "Dificultades cognitivas, dificultad concentrándose y disrumpe del sueño",
    ],
    causes: [
      "Rear-end and side-impact auto collisions",
      "Sports collisions and contact injuries",
      "Falls that jerk the head and neck",
      "Ligament and joint capsule overstretching or tearing",
      "Cranial distortion from the force transmitted through the skull",
      "Disc injury and cervical joint inflammation",
    ],
    causesEs: [
      "Colisiones traseras e impacto lateral de autos",
      "Colisiones deportivas y lesiones de contacto",
      "Caídas que jerquean la cabeza y cuello",
      "Estiramiento excesivo o desgarro de ligamentos y cápsula articular",
      "Distorsión craneal por fuerzas transmitidas a través del cráneo",
      "Lesión discal e inflamación articular cervical",
    ],
    chiropracticTreatment: "Dr. Foss uses SOT whiplash protocols that address both the cervical spine and the craniosacral system — two areas critically injured in whiplash but often missed in standard care. Pelvic stabilization is established first (Category I/II), then gentle cervical corrections restore vertebral alignment and joint mobility. Cranial adjusting addresses the temporal, occipital, and sphenoid distortions that cause persistent headaches, tinnitus, and cognitive symptoms. Early intervention is critical — chronic whiplash is far more difficult to resolve than acute injury.",
    chiropracticTreatmentEs: "El Dr. Foss utiliza protocolos de latigazo cervical SOT que abordan tanto la columna cervical como el sistema craneosakral —dos áreas críticamente lesionadas en latigazo cervical pero frecuentemente pasadas por alto en cuidado estándar. La estabilización pélvica se establece primero (Categoría I/II), luego correcciones cervicales suaves restauran alineación vertebral y movilidad articular. El ajuste craneal aborda distorsiones temporal, occipital y esfenoidal que causan dolores de cabeza persistentes, tinnitus y síntomas cognitivos. La intervención temprana es crítica —el latigazo cervical crónico es mucho más difícil de resolver que lesión aguda.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "pinched-nerve",
    title: "Pinched Nerve",
    titleEs: "Nervio Comprimido | Quiropráctico San Antonio TX",
    image: "/images/conditions/pinched-nerve.jpg",
    metaDescription: "Pinched nerve treatment San Antonio TX. SOT chiropractic decompresses nerve roots from disc bulges, bone spurs, and spinal misalignment — relieving radiating pain without surgery.",
    metaDescriptionEs: "Tratamiento de nervio comprimido en San Antonio TX. La quiropráctica SOT descomprime las raíces nerviosas de hernias, espolones óseos y subluxaciones vertebrales.",
    intro: "A pinched nerve — nerve root compression — causes sharp radiating pain, numbness, tingling, or weakness along the nerve's pathway. SOT chiropractic removes the structural cause of compression to give lasting relief.",
    introEs: "Un nervio comprimido —compresión de raíz nerviosa— causa dolor radiante agudo, entumecimiento, hormigueo o debilidad a lo largo del camino del nervio. La quiropráctica SOT elimina la causa estructural de compresión para dar alivio duradero.",
    whatIs: "A pinched nerve occurs when surrounding tissues — bones, discs, tendons, or muscles — apply excessive pressure to a nerve root as it exits the spinal canal. In the lumbar spine, pinched nerves cause sciatica-type pain radiating into the leg. In the cervical spine, they cause arm pain and weakness. The compression irritates the nerve, creating the characteristic combination of sharp, burning, or electric pain with numbness and weakness in the distribution of that nerve.",
    whatIsEs: "Un nervio comprimido ocurre cuando tejidos circundantes —huesos, discos, tendones o músculos— aplican presión excesiva a una raíz nerviosa mientras sale del canal espinal. En la columna lumbar, nervios comprimidos causan dolor tipo ciática irradiando hacia la pierna. En la columna cervical, causan dolor de brazo y debilidad. La compresión irrita el nervio, creando la combinación característica de dolor agudo, ardiente o eléctrico con entumecimiento y debilidad en distribución de ese nervio.",
    symptoms: [
      "Sharp or burning pain radiating along the arm or leg",
      "Numbness and tingling in a specific pattern following nerve distribution",
      "Muscle weakness in the affected extremity",
      "Pain that worsens with certain neck or back movements",
      "Reflexes diminished at the affected spinal level",
      "Neck or lower back pain at the level of compression",
    ],
    symptomsEs: [
      "Dolor agudo o ardiente irradiando a lo largo del brazo o pierna",
      "Entumecimiento y hormigueo en patrón específico siguiendo distribución nerviosa",
      "Debilidad muscular en la extremidad afectada",
      "Dolor que empeora con ciertos movimientos de cuello o espalda",
      "Reflejos disminuidos en el nivel espinal afectado",
      "Dolor de cuello o espalda baja en el nivel de compresión",
    ],
    causes: [
      "Herniated or bulging disc pressing on the nerve root",
      "Bone spurs narrowing the intervertebral foramen",
      "Spinal subluxation reducing foraminal space",
      "Muscle spasm compressing the nerve (piriformis for sciatica)",
      "Postural distortion increasing nerve root tension",
      "Degenerative disc disease collapsing disc height",
    ],
    causesEs: [
      "Disco herniado o protuberancia discal presionando la raíz nerviosa",
      "Espolones óseos estrechando el foramen intervertebral",
      "Subluxación espinal reduciendo espacio foraminal",
      "Espasmo muscular comprimiendo el nervio (piriforme para ciática)",
      "Distorsión postural aumentando tensión de raíz nerviosa",
      "Enfermedad degenerativa del disco colapsando altura discal",
    ],
    chiropracticTreatment: "SOT chiropractic directly addresses the structural cause of nerve root compression. By correcting spinal misalignments and restoring proper disc mechanics, the intervertebral foramina are widened and nerve root pressure is relieved. Dr. Foss identifies the exact level and mechanism of compression and applies category-appropriate protocols to decompress the affected nerve. Flexion-distraction and specific pelvic blocking restore disc height and reduce annular pressure. Most patients experience significant reduction in radiating pain within the first few visits.",
    chiropracticTreatmentEs: "La quiropráctica SOT aborda directamente la causa estructural de compresión de raíz nerviosa. Al corregir alineamientos espinales anormales y restaurar mecánica discal adecuada, los forámenes intervertebrales se amplían y la presión de raíz nerviosa se alivia. El Dr. Foss identifica el nivel exacto y mecanismo de compresión y aplica protocolos apropiados para categoría para descomprimir el nervio afectado. La distracción-flexión y bloqueo pélvico específico restauran altura discal y reducen presión anular. La mayoría de pacientes experimentan reducción significativa de dolor radiante dentro de las primeras varias visitas.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "degenerative-disc-disease",
    title: "Degenerative Disc Disease",
    titleEs: "Enfermedad Degenerativa del Disco | Quiropráctico San Antonio TX",
    image: "/images/conditions/discproblems.jpg",
    metaDescription: "Degenerative disc disease treatment San Antonio TX. SOT chiropractic slows degeneration, restores disc mechanics, and reduces pain without drugs or surgery at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento de enfermedad degenerativa del disco en San Antonio TX. Quiropráctica SOT para reducir el dolor y restaurar la mecánica discal sin cirugía.",
    intro: "Degenerative disc disease is a leading cause of chronic low back and neck pain. While degeneration cannot be entirely reversed, SOT chiropractic reduces pain significantly by correcting the mechanical stress accelerating the process.",
    introEs: "La enfermedad degenerativa del disco es una causa principal de dolor crónico de espalda baja y cuello. Mientras que la degeneración no puede revertirse completamente, la quiropráctica SOT reduce significativamente el dolor corrigiendo el estrés mecánico acelerando el proceso.",
    whatIs: "Degenerative disc disease describes the breakdown of intervertebral discs over time — discs lose hydration, height, and shock-absorbing capacity, causing vertebrae to compress closer together. This narrows nerve exit channels, stresses spinal joints, and can trigger disc bulging or herniation. The condition is most common at L4-L5, L5-S1 in the lumbar spine and C5-C6, C6-C7 in the cervical spine. Abnormal spinal biomechanics accelerate degeneration at specific levels — correcting this is the key to slowing progression.",
    whatIsEs: "La enfermedad degenerativa del disco describe el desglose de discos intervertebrales con el tiempo —los discos pierden hidratación, altura y capacidad de absorción de impactos, causando que vértebras se compriman más juntas. Esto estrecha canales de salida de nervios, estresa articulaciones espinales y puede desencadenar protuberancia discal o herniación. La condición es más común en L4-L5, L5-S1 en columna lumbar y C5-C6, C6-C7 en columna cervical. La biomecánica espinal anormal acelera degeneración en niveles específicos —corregir esto es la clave para ralentizar progresión.",
    symptoms: [
      "Chronic low back or neck pain that fluctuates in intensity",
      "Pain worse after prolonged sitting or standing and easing with movement",
      "Stiffness and reduced range of motion in the morning",
      "Radiating pain into the buttocks, legs, or arms if nerve roots are compressed",
      "Increased pain with bending, lifting, or twisting",
      "Grinding or crunching sensation with spinal movement",
    ],
    symptomsEs: [
      "Dolor crónico de espalda baja o cuello que fluctúa en intensidad",
      "Dolor peor después de sedestación o estar de pie prolongados y aliviando con movimiento",
      "Rigidez y rango de movimiento reducido por las mañanas",
      "Dolor radiante hacia glúteos, piernas o brazos si raíces nerviosas están comprimidas",
      "Dolor aumentado con flexión, levantamiento o giro",
      "Sensación de crujido o rechinar con movimiento espinal",
    ],
    causes: [
      "Age-related disc dehydration and reduced proteoglycan content",
      "Repetitive mechanical stress from spinal misalignment",
      "Previous disc injuries accelerating degeneration",
      "Genetic predisposition to faster disc breakdown",
      "Sedentary lifestyle reducing disc nutrition through movement",
      "Smoking impairing disc blood supply and nutrition",
    ],
    causesEs: [
      "Deshidratación discal relacionada con edad y contenido proteoglicano reducido",
      "Estrés mecánico repetitivo por desalineamiento espinal",
      "Lesiones discales previas acelerando degeneración",
      "Predisposición genética a desglose discal más rápido",
      "Estilo de vida sedentario reduciendo nutrición discal a través de movimiento",
      "Fumar afectando suministro sanguíneo discal y nutrición",
    ],
    chiropracticTreatment: "The key insight in DDD management is that abnormal spinal mechanics accelerate degeneration. By correcting pelvic and spinal alignment with SOT protocols, loading through the degenerative discs is normalized — reducing both current pain and the rate of future breakdown. Dr. Foss uses gentle flexion-distraction and pelvic blocking to restore disc hydration, reduce nerve root irritation, and decompress the affected segments. Patients with long-standing DDD often make remarkable improvements in daily pain levels and activity tolerance.",
    chiropracticTreatmentEs: "La percepción clave en manejo de EDD es que la mecánica espinal anormal acelera la degeneración. Al corregir alineación pélvica y espinal con protocolos SOT, la carga a través de discos degenerativos se normaliza —reduciendo tanto dolor actual como la tasa de desglose futuro. El Dr. Foss utiliza distracción-flexión suave y bloqueo pélvico para restaurar hidratación discal, reducir irritación de raíz nerviosa y descomprimir los segmentos afectados. Los pacientes con EDD de larga data frecuentemente logran mejoras notables en niveles diarios de dolor y tolerancia de actividad.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "bulging-disc",
    title: "Bulging Disc",
    titleEs: "Disco Abultado | Quiropráctico San Antonio TX",
    image: "/images/conditions/bulging-disc.jpg",
    metaDescription: "Bulging disc treatment San Antonio TX. SOT chiropractic reduces disc pressure, relieves nerve compression, and often avoids the need for epidural injections or surgery.",
    metaDescriptionEs: "Tratamiento de disco abultado en San Antonio TX. La quiropráctica SOT reduce la presión discal y alivia la compresión nerviosa sin necesidad de cirugía.",
    intro: "A bulging disc occurs when the disc's outer ring weakens and bulges outward, irritating nearby nerves. SOT chiropractic effectively reduces disc pressure and nerve irritation for lasting relief.",
    introEs: "Un disco abultado ocurre cuando el anillo externo del disco se debilita y se abomba hacia afuera, irritando nervios cercanos. La quiropráctica SOT efectivamente reduce la presión discal e irritación nerviosa para alivio duradero.",
    whatIs: "A bulging disc differs from a herniated disc in that the outer fibrous ring (annulus fibrosus) is intact but distorted outward, putting pressure on adjacent nerves. This is typically caused by accumulated mechanical stress, prolonged poor posture, and repetitive loading. Bulging discs most commonly occur at L4-L5 and L5-S1 in the lumbar spine. When the bulge presses on nerve roots, it causes radiculopathy — radiating pain, numbness, and weakness in the leg (or arm if cervical).",
    whatIsEs: "Un disco abultado difiere de un disco herniado en que el anillo fibroso externo (anillo fibroso) está intacto pero distorsionado hacia afuera, ejerciendo presión en nervios adyacentes. Esto típicamente es causado por estrés mecánico acumulado, postura pobre prolongada y carga repetitiva. Los discos abultados ocurren más comúnmente en L4-L5 y L5-S1 en la columna lumbar. Cuando la abultamiento presiona raíces nerviosas, causa radiculopatía —dolor radiante, entumecimiento y debilidad en la pierna (o brazo si cervical).",
    symptoms: [
      "Lower back or neck pain worsening with prolonged sitting",
      "Radiating pain, numbness, or tingling into the arm or leg",
      "Pain that worsens with bending forward or sneezing",
      "Muscle weakness in the affected limb",
      "Relief when walking or lying down in certain positions",
      "Stiffness and reduced spinal range of motion",
    ],
    symptomsEs: [
      "Dolor de espalda baja o cuello empeorando con sedestación prolongada",
      "Dolor radiante, entumecimiento u hormigueo en brazo o pierna",
      "Dolor que empeora con flexión hacia adelante o estornudo",
      "Debilidad muscular en la extremidad afectada",
      "Alivio al caminar o recostarse en ciertas posiciones",
      "Rigidez y rango de movimiento espinal reducido",
    ],
    causes: [
      "Prolonged poor posture and sedentary loading on the disc",
      "Repetitive bending, twisting, and heavy lifting",
      "Spinal subluxation creating uneven disc loading",
      "Age-related disc weakening of the annular fibers",
      "Excess body weight increasing lumbar disc pressure",
      "Sudden traumatic loading",
    ],
    causesEs: [
      "Postura pobre prolongada y carga sedentaria en el disco",
      "Flexión repetitiva, giro y levantamiento pesado",
      "Subluxación espinal creando carga discal desigual",
      "Debilitamiento discal relacionado con edad de fibras anulares",
      "Peso corporal en exceso aumentando presión discal lumbar",
      "Carga traumática repentina",
    ],
    chiropracticTreatment: "Flexion-distraction technique and SOT pelvic blocking are the primary tools Dr. Foss uses for bulging discs. These gentle protocols reduce intradiscal pressure, create a centripetal force that retracts the bulge away from the nerve, and restore normal disc mechanics. The pelvic foundation is stabilized first to eliminate the abnormal loading pattern causing the bulge to persist. Many patients avoid surgery or epidural injections through consistent chiropractic care. The sooner a bulging disc is treated, the better — before it progresses to a full herniation.",
    chiropracticTreatmentEs: "La técnica de distracción-flexión y bloqueo pélvico SOT son las herramientas primarias que usa el Dr. Foss para discos abultados. Estos protocolos suaves reducen presión intradiscal, crean una fuerza centrípeta que retrae el abultamiento lejos del nervio y restauran mecánica discal normal. La base pélvica se estabiliza primero para eliminar el patrón de carga anormal causando que el abultamiento persista. Muchos pacientes evitan cirugía o inyecciones epidurales a través de cuidado quiropráctico consistente. Cuanto antes se trate un disco abultado, mejor —antes de que progrese a herniación completa.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "chronic-pain",
    title: "Chronic Pain",
    titleEs: "Dolor Crónico | Quiropráctico San Antonio TX",
    image: "/images/conditions/chronic-pain.jpg",
    metaDescription: "Chronic pain management San Antonio TX. Pura Vida Chiropractic addresses the structural causes of persistent pain — not just symptoms — using SOT, laser, and SoftWave therapy.",
    metaDescriptionEs: "Manejo del dolor crónico en San Antonio TX. Quiropráctica SOT, terapia láser y SoftWave para tratar las causas estructurales del dolor persistente, no solo los síntomas.",
    intro: "Chronic pain persisting beyond three months often has structural roots in the spine and nervous system. SOT chiropractic combined with regenerative therapies offers a drug-free path to lasting relief by addressing the source.",
    introEs: "El dolor crónico persistiendo más de tres meses frecuentemente tiene raíces estructurales en la columna y sistema nervioso. La quiropráctica SOT combinada con terapias regenerativas ofrece una vía sin medicinas para alivio duradero abordando la fuente.",
    whatIs: "Chronic pain is defined as pain persisting for more than three months beyond normal tissue healing time. In many cases, the pain originates from structural problems — spinal subluxation, nerve irritation, disc pathology, or unresolved soft tissue injury — that conventional medicine addresses only with pain medication. The nervous system also undergoes central sensitization in chronic pain states, amplifying pain signals. Correcting the structural source of pain while calming the sensitized nervous system is the most effective approach.",
    whatIsEs: "El dolor crónico se define como dolor persistiendo más de tres meses más allá del tiempo normal de cicatrización de tejidos. En muchos casos, el dolor se origina en problemas estructurales —subluxación espinal, irritación nerviosa, patología discal o lesión de tejido blando no resuelta— que la medicina convencional aborda solo con medicamentos para el dolor. El sistema nervioso también experimenta sensibilización central en estados de dolor crónico, amplificando señales de dolor. Corregir la fuente estructural del dolor mientras se calma el sistema nervioso sensibilizado es el enfoque más efectivo.",
    symptoms: [
      "Persistent pain for more than 3 months — in the back, neck, head, or extremities",
      "Pain that is no longer clearly tied to a specific tissue injury",
      "Sleep disruption due to constant discomfort",
      "Fatigue and reduced physical activity tolerance",
      "Emotional consequences — depression, anxiety, and frustration",
      "Sensitivity to touch, pressure, or movement in affected areas",
    ],
    symptomsEs: [
      "Dolor persistente por más de 3 meses —en espalda, cuello, cabeza o extremidades",
      "Dolor que ya no está claramente vinculado a lesión de tejido específico",
      "Disrumpe del sueño por malestar constante",
      "Fatiga y tolerancia de actividad física reducida",
      "Consecuencias emocionales —depresión, ansiedad y frustración",
      "Sensibilidad al tacto, presión o movimiento en áreas afectadas",
    ],
    causes: [
      "Unresolved spinal subluxation maintaining nerve irritation",
      "Scar tissue and adhesions from inadequately healed soft tissue injuries",
      "Central sensitization — the nervous system amplifying pain signals",
      "Chronic inflammation from disc pathology or joint degeneration",
      "Postural distortion creating ongoing mechanical stress",
      "Inadequate treatment of the original injury",
    ],
    causesEs: [
      "Subluxación espinal no resuelta manteniendo irritación nerviosa",
      "Tejido cicatricial y adherencias de lesiones de tejido blando cicatrizadas inadecuadamente",
      "Sensibilización central —el sistema nervioso amplificando señales de dolor",
      "Inflamación crónica por patología discal o degeneración articular",
      "Distorsión postural creando estrés mecánico continuo",
      "Tratamiento inadecuado de la lesión original",
    ],
    chiropracticTreatment: "Dr. Foss takes a systematic approach to chronic pain — identifying the structural root cause rather than managing symptoms. SOT spinal correction removes the persistent nerve irritation driving central sensitization. Craniosacral therapy calms the autonomic nervous system's pain-amplifying state. SoftWave and Class IV laser therapy promote tissue repair, reduce neurogenic inflammation, and accelerate the resolution of long-standing soft tissue pathology. Patients with chronic pain often see gradual, progressive improvement over a course of care — with many able to significantly reduce or eliminate pain medication.",
    chiropracticTreatmentEs: "El Dr. Foss toma un enfoque sistemático al dolor crónico —identificando la causa raíz estructural en lugar de manejar síntomas. La corrección espinal SOT elimina la irritación nerviosa persistente impulsando sensibilización central. La terapia craneosakral calma el estado de amplificación de dolor del sistema nervioso autónomo. La terapia SoftWave y láser Clase IV promueven reparación tisular, reducen inflamación neurogénica y aceleran la resolución de patología de tejido blando de larga data. Los pacientes con dolor crónico frecuentemente ven mejora gradual y progresiva durante un curso de cuidado —con muchos capaces de significativamente reducir o eliminar medicación para el dolor.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "muscle-spasms",
    title: "Muscle Spasms",
    titleEs: "Espasmos Musculares | Quiropráctico San Antonio TX",
    image: "/images/conditions/muscle-spasms.jpg",
    metaDescription: "Muscle spasm relief San Antonio TX. SOT chiropractic identifies and corrects the spinal cause of muscle guarding, giving lasting relief beyond temporary muscle relaxants.",
    metaDescriptionEs: "Alivio de espasmos musculares en San Antonio TX. Quiropráctica SOT para corregir la causa espinal del espasmo muscular, con resultados duraderos sin relajantes musculares.",
    intro: "Muscle spasms are the spine's protective response to instability or injury. Treating only the muscle misses the cause — SOT chiropractic addresses the spinal source driving the spasm.",
    introEs: "Los espasmos musculares son la respuesta protectora de la columna a inestabilidad o lesión. Tratar solo el músculo pierde la causa —la quiropráctica SOT aborda la fuente espinal impulsando el espasmo.",
    whatIs: "Muscle spasms are involuntary sustained contractions of a muscle or group of muscles. In the spine, they are almost always a secondary phenomenon — the nervous system is contracting the muscles as a protective splint around an unstable or injured spinal segment. Simply relaxing the muscles without correcting the underlying spinal problem provides only temporary relief, as the spasms return when the muscles are reloaded. Understanding muscle spasms as a symptom of spinal instability is the key to lasting treatment.",
    whatIsEs: "Los espasmos musculares son contracciones sostenidas involuntarias de un músculo o grupo de músculos. En la columna, casi siempre son un fenómeno secundario —el sistema nervioso contrae los músculos como una férula protectora alrededor de un segmento espinal inestable o lesionado. Simplemente relajar los músculos sin corregir el problema espinal subyacente proporciona solo alivio temporal, ya que los espasmos regresan cuando los músculos se recargan. Entender los espasmos musculares como síntoma de inestabilidad espinal es la clave para tratamiento duradero.",
    symptoms: [
      "Sudden, intense muscle tightness or locking in the back or neck",
      "Visible muscle hardness or ropiness in the affected area",
      "Restricted movement — difficulty standing straight or turning the head",
      "Pain that worsens with movement and eases with rest",
      "Associated headaches when spasms occur in the cervical spine",
      "Pain radiating into the shoulder, buttock, or hip",
    ],
    symptomsEs: [
      "Rigidez muscular repentina e intensa o bloqueo en espalda o cuello",
      "Dureza muscular visible o aspecto fibroso en el área afectada",
      "Movimiento restringido —dificultad estar de pie recto o girar la cabeza",
      "Dolor que empeora con movimiento y se alivia con reposo",
      "Dolores de cabeza asociados cuando espasmos ocurren en columna cervical",
      "Dolor irradiando hacia hombro, glúteo o cadera",
    ],
    causes: [
      "Spinal subluxation triggering protective muscle guarding",
      "Acute strain from sudden movement or heavy lifting",
      "Disc injury causing reflex muscle splinting",
      "Dehydration and electrolyte imbalances",
      "Postural distortions causing chronic muscle overload",
      "Emotional tension held in the paraspinal muscles",
    ],
    causesEs: [
      "Subluxación espinal desencadenando protección muscular",
      "Tensión aguda por movimiento repentino o levantamiento pesado",
      "Lesión discal causando esplintaje muscular reflejo",
      "Deshidratación e desequilibrios de electrolitos",
      "Distorsiones posturales causando sobrecarga muscular crónica",
      "Tensión emocional mantenida en músculos paraespinales",
    ],
    chiropracticTreatment: "SOT chiropractic identifies the spinal segment causing the muscle guarding response and corrects it at the source. Dr. Foss uses pelvic blocking and gentle spinal adjustments to stabilize the unstable segment — eliminating the neurological signal driving the spasm. Once the segment is stabilized, the muscle releases naturally. Trigger point therapy may be combined to break up chronic spasm patterns. Patients who have been living with recurring muscle spasms often discover that consistent chiropractic care eliminates the cycle entirely.",
    chiropracticTreatmentEs: "La quiropráctica SOT identifica el segmento espinal causando la respuesta de protección muscular y lo corrige en la fuente. El Dr. Foss utiliza bloqueo pélvico y ajustes espinales suaves para estabilizar el segmento inestable —eliminando la señal neurológica impulsando el espasmo. Una vez estabilizado el segmento, el músculo se libera naturalmente. La terapia de puntos gatillo puede combinarse para romper patrones de espasmo crónico. Los pacientes que han vivido con espasmos musculares recurrentes frecuentemente descubren que cuidado quiropráctico consistente elimina el ciclo completamente.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "postpartum-recovery",
    title: "Postpartum Recovery",
    titleEs: "Recuperación Posparto | Quiropráctico San Antonio TX",
    image: "/images/conditions/postpartum-recovery.jpg",
    metaDescription: "Postpartum chiropractic care San Antonio TX. Dr. Foss helps new mothers restore pelvic alignment, relieve back and neck pain, and recover faster after delivery at Pura Vida Chiropractic.",
    metaDescriptionEs: "Quiropráctica posparto en San Antonio TX. El Dr. Foss ayuda a las madres a restaurar la alineación pélvica y aliviar el dolor de espalda y cuello después del parto.",
    intro: "Pregnancy and delivery place enormous mechanical demands on the pelvis and spine. Postpartum chiropractic care helps new mothers restore alignment, relieve pain from feeding postures, and recover faster.",
    introEs: "El embarazo y parto colocan demandas mecánicas enormes en la pelvis y columna. El cuidado quiropráctico posparto ayuda a las nuevas madres a restaurar alineación, aliviar dolor de posturas de alimentación y recuperarse más rápido.",
    whatIs: "Postpartum recovery involves the pelvis, sacrum, and lumbar spine returning from the hypermobile state induced by relaxin hormones during pregnancy. Delivery — whether vaginal or cesarean — creates specific sacropelvic distortions that may not self-correct. New mothers face additional mechanical stress from nursing postures, carrying, and caring for a newborn. Untreated pelvic misalignment after delivery commonly causes low back pain, hip pain, pubic symphysis discomfort, and even contributes to postpartum mood difficulties through its effects on the nervous system.",
    whatIsEs: "La recuperación posparto implica que la pelvis, sacro y columna lumbar regresen del estado hipermóvil inducido por hormonas de relaxina durante el embarazo. El parto —vaginal o cesárea— crea distorsiones sacropélvicas específicas que pueden no autocorregirse. Las nuevas madres enfrentan estrés mecánico adicional de posturas de amamantamiento, llevar y cuidar un recién nacido. La desalineación pélvica sin tratar después del parto comúnmente causa dolor de espalda baja, dolor de cadera, malestar de sínfisis púbica e incluso contribuye a dificultades de humor posparto a través de sus efectos en el sistema nervioso.",
    symptoms: [
      "Low back and pelvic pain persisting after delivery",
      "Pubic symphysis pain making walking difficult",
      "Hip and sacroiliac joint discomfort",
      "Neck and upper back pain from nursing and carrying the baby",
      "Wrist pain from repetitive lifting and feeding positions",
      "Fatigue and difficulty returning to normal activity",
    ],
    symptomsEs: [
      "Dolor de espalda baja y pélvico persistiendo después del parto",
      "Dolor de sínfisis púbica dificultando caminar",
      "Malestar de cadera y articulación sacroilíaca",
      "Dolor de cuello y espalda superior por amamantamiento y llevar bebé",
      "Dolor de muñeca por levantamiento repetitivo y posturas de alimentación",
      "Fatiga y dificultad regresando a actividad normal",
    ],
    causes: [
      "Sacropelvic distortion from the labor and delivery process",
      "Relaxin-induced ligament laxity persisting for months postpartum",
      "Prolonged nursing postures stressing the cervical and thoracic spine",
      "C-section recovery — scar tissue and restricted spinal mobility",
      "Carrying and rocking the baby in asymmetric positions",
      "Sleep deprivation compounding physical tension",
    ],
    causesEs: [
      "Distorsión sacropélvica del proceso de trabajo y parto",
      "Laxitud ligamentaria inducida por relaxina persistiendo meses posparto",
      "Posturas de amamantamiento prolongadas estresando columna cervical y torácica",
      "Recuperación de cesárea —tejido cicatricial y movilidad espinal restringida",
      "Llevar y mecer bebé en posiciones asimétricas",
      "Privación de sueño agravando tensión física",
    ],
    chiropracticTreatment: "SOT category work specifically addresses the sacropelvic mechanics that are most disrupted during delivery. Dr. Foss uses gentle pelvic blocking protocols that are safe for postpartum recovery and appropriate regardless of delivery method. The cervical and thoracic spine are addressed for the nursing and carrying postures. Craniosacral therapy supports hormonal regulation and nervous system recovery during this demanding transition. Most new mothers experience significant improvement in pain levels and energy within a few visits.",
    chiropracticTreatmentEs: "El trabajo de categoría SOT aborda específicamente la mecánica sacropélvica más disrumida durante el parto. El Dr. Foss utiliza protocolos de bloqueo pélvico suave que son seguros para recuperación posparto y apropiados independientemente del método de parto. La columna cervical y torácica se abordan para posturas de amamantamiento y carga. La terapia craneosakral apoya regulación hormonal y recuperación del sistema nervioso durante esta transición exigente. La mayoría de nuevas madres experimentan mejora significativa en niveles de dolor y energía dentro de pocas visitas.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "round-ligament-pain",
    title: "Round Ligament Pain",
    titleEs: "Dolor del Ligamento Redondo | Quiropráctico San Antonio TX",
    image: "/images/conditions/round-ligament-pain.jpg",
    metaDescription: "Round ligament pain treatment San Antonio TX. Webster-certified chiropractor Dr. Foss relieves sharp pregnancy groin pain caused by round ligament tension with gentle pelvic care.",
    metaDescriptionEs: "Tratamiento del dolor del ligamento redondo en San Antonio TX. El Dr. Foss alivia el dolor agudo de la ingle durante el embarazo con cuidado pélvico gentil.",
    intro: "Sharp, stabbing groin pain during pregnancy from round ligament tension is one of the most common discomforts of the second trimester. Webster Technique chiropractic care provides gentle and effective relief.",
    introEs: "El dolor agudo y punzante de la ingle durante el embarazo por tensión del ligamento redondo es uno de los malestares más comunes del segundo trimestre. El cuidado quiropráctico con la Técnica Webster proporciona alivio suave y efectivo.",
    whatIs: "Round ligament pain occurs when the two round ligaments supporting the uterus are strained by the growing uterus pulling them downward and outward. It causes a sharp, stabbing, or cramping pain in the lower abdomen or groin, typically worse with sudden movements, coughing, sneezing, or rolling over in bed. Pelvic misalignment increases asymmetric tension on the round ligaments, worsening symptoms. The Webster Technique specifically addresses this by correcting sacral subluxation and releasing ligamentous tension.",
    whatIsEs: "El dolor del ligamento redondo ocurre cuando los dos ligamentos redondos que sostienen el útero se tensan por el crecimiento del útero que los jala hacia abajo y hacia afuera. Causa un dolor agudo, punzante o tipo calambre en el abdomen inferior o la ingle, típicamente peor con movimientos súbitos, tos, estornudos o rodar en la cama. La desalineación pélvica aumenta la tensión asimétrica en los ligamentos redondos, empeorando los síntomas. La Técnica Webster aborda esto específicamente al corregir la subluxación sacra y liberar la tensión ligamentaria.",
    symptoms: [
      "Sharp, stabbing pain in the lower abdomen or groin, typically one-sided",
      "Pain triggered by sudden movement, sneezing, or coughing",
      "Cramping sensation in the pelvis that comes on quickly",
      "Discomfort when standing up from sitting or rolling over in bed",
      "Pain that resolves quickly with rest and stillness",
      "Worse in the second trimester as the uterus grows rapidly",
    ],
    symptomsEs: [
      "Dolor agudo y punzante en el abdomen inferior o la ingle, típicamente unilateral",
      "Dolor desencadenado por movimiento repentino, estornudos o tos",
      "Sensación de calambre en la pelvis que ocurre rápidamente",
      "Malestar al levantarse de sentarse o rodar en la cama",
      "Dolor que se resuelve rápidamente con descanso e inmovilidad",
      "Peor en el segundo trimestre a medida que el útero crece rápidamente",
    ],
    causes: [
      "Growing uterus pulling the round ligaments beyond their resting length",
      "Sacral and pelvic misalignment increasing asymmetric ligament tension",
      "Sudden movements stretching the ligaments rapidly",
      "Previous pelvic injuries or postural imbalances",
      "Relaxin-induced ligament laxity reducing ligament resilience",
    ],
    causesEs: [
      "Útero en crecimiento jalando los ligamentos redondos más allá de su longitud de reposo",
      "Desalineación sacra y pélvica aumentando la tensión ligamentaria asimétrica",
      "Movimientos repentinos estirando los ligamentos rápidamente",
      "Lesiones pélvicas previas o desequilibrios posturales",
      "Laxitud ligamentaria inducida por relaxina reduciendo la resiliencia ligamentaria",
    ],
    chiropracticTreatment: "The Webster Technique is specifically designed to address sacropelvic distortion during pregnancy. By correcting the sacral subluxation and releasing tension in the uterine ligaments through gentle soft tissue work, Dr. Foss reduces the mechanical pull on the round ligaments. Most pregnant patients experience dramatic relief after just one or two visits. Regular Webster Technique care throughout the second and third trimesters prevents recurrence and supports optimal fetal positioning as a bonus benefit.",
    chiropracticTreatmentEs: "La Técnica Webster está específicamente diseñada para abordar la distorsión sacropélvica durante el embarazo. Al corregir la subluxación sacra y liberar la tensión en los ligamentos uterinos mediante trabajo de tejido blando suave, el Dr. Foss reduce el tirón mecánico en los ligamentos redondos. La mayoría de las pacientes embarazadas experimentan alivio dramático después de solo una o dos visitas. El cuidado regular con la Técnica Webster durante el segundo y tercer trimestres previene la recurrencia y apoya el posicionamiento fetal óptimo como un beneficio adicional.",
    additionalTreatments: [],
  },

  {
    slug: "post-concussion-syndrome",
    title: "Post-Concussion Syndrome",
    titleEs: "Síndrome Post-Conmoción | Quiropráctico San Antonio TX",
    image: "/images/conditions/post-concussion-syndrome.jpg",
    metaDescription: "Post-concussion syndrome treatment San Antonio TX. SOT cranial adjusting addresses the cranial distortions, dural tension, and nerve irritation persisting after concussion.",
    metaDescriptionEs: "Tratamiento del síndrome post-conmoción en San Antonio TX. Ajuste craneal SOT para las distorsiones craneales, tensión dural e irritación nerviosa persistentes tras la conmoción.",
    intro: "Post-concussion syndrome occurs when symptoms persist weeks or months beyond the initial head injury. SOT cranial adjusting addresses the cranial bone distortions and dural tension that standard concussion protocols miss.",
    introEs: "El síndrome post-conmoción ocurre cuando los síntomas persisten semanas o meses después de la lesión inicial de la cabeza. El ajuste craneal SOT aborda las distorsiones de los huesos craneales y la tensión dural que los protocolos estándar de conmoción no abordan.",
    whatIs: "Post-concussion syndrome is characterized by persistent symptoms following a concussion — typically persisting beyond the expected 1–4 week recovery window. The syndrome involves a combination of physical, cognitive, and emotional symptoms driven by ongoing neurological dysfunction. Cranial bone distortions from the impact disrupt normal cerebrospinal fluid circulation and craniosacral rhythm. Tension in the dural membranes covering the brain and spinal cord perpetuates symptoms long after the initial injury. Chiropractic cranial adjusting is uniquely positioned to address these structural contributors.",
    whatIsEs: "El síndrome post-conmoción se caracteriza por síntomas persistentes después de una conmoción — típicamente persistiendo más allá de la ventana de recuperación esperada de 1–4 semanas. El síndrome implica una combinación de síntomas físicos, cognitivos y emocionales impulsados por disfunción neurológica continua. Las distorsiones de los huesos craneales del impacto disrumpen la circulación normal del líquido cefalorraquídeo y el ritmo craneosakral. La tensión en las membranas durales que cubren el cerebro y la médula espinal perpetúa los síntomas mucho después de la lesión inicial. El ajuste craneal quiropráctico está singularmente posicionado para abordar estos contribuyentes estructurales.",
    symptoms: [
      "Persistent headaches, especially at the base of the skull",
      "Cognitive difficulties — brain fog, memory problems, difficulty concentrating",
      "Dizziness and balance problems",
      "Sensitivity to light and sound",
      "Sleep disturbances and fatigue",
      "Mood changes — irritability, anxiety, or depression",
    ],
    symptomsEs: [
      "Dolores de cabeza persistentes, especialmente en la base del cráneo",
      "Dificultades cognitivas — confusión mental, problemas de memoria, dificultad para concentrarse",
      "Mareos y problemas de equilibrio",
      "Sensibilidad a la luz y al sonido",
      "Perturbaciones del sueño y fatiga",
      "Cambios de humor — irritabilidad, ansiedad o depresión",
    ],
    causes: [
      "Cranial bone distortion from the impact disrupting CSF flow",
      "Dural membrane tension perpetuating neurological symptoms",
      "Cervical spine injury (often concurrent) contributing to headaches",
      "Brainstem irritation from occiput/atlas misalignment",
      "Autonomic nervous system dysregulation following head injury",
      "Inflammatory mediators persisting in the neural tissue",
    ],
    causesEs: [
      "Distorsión de los huesos craneales del impacto disrumpiendo el flujo del LCR",
      "Tensión de la membrana dural perpetuando síntomas neurológicos",
      "Lesión de la columna cervical (a menudo concurrente) contribuyendo a dolores de cabeza",
      "Irritación del tronco encefálico de la desalineación occipucio/atlas",
      "Disregulación del sistema nervioso autónomo después de la lesión craneal",
      "Mediadores inflamatorios persistiendo en el tejido neural",
    ],
    chiropracticTreatment: "SOT cranial adjusting is Dr. Foss's primary approach to post-concussion syndrome. Light-force cranial contacts restore normal cranial bone motion, re-establish cerebrospinal fluid circulation, and release dural tension that is keeping the nervous system in a state of irritation. Upper cervical corrections — particularly at the occiput-atlas junction — address the concurrent cervical injury almost universally present in concussion. Patients with post-concussion syndrome often experience significant improvement in cognitive clarity, headache frequency, and sleep quality through consistent cranial care.",
    chiropracticTreatmentEs: "El ajuste craneal SOT es el enfoque principal del Dr. Foss para el síndrome post-conmoción. Los contactos craneales de fuerza ligera restauran el movimiento normal de los huesos craneales, restablecen la circulación del líquido cefalorraquídeo y liberan la tensión dural que mantiene el sistema nervioso en un estado de irritación. Las correcciones cervicales superiores — particularmente en la unión occipucio-atlas — abordan la lesión cervical concurrente casi universalmente presente en la conmoción. Los pacientes con síndrome post-conmoción a menudo experimentan mejora significativa en la claridad cognitiva, la frecuencia de dolores de cabeza y la calidad del sueño a través del cuidado craneal consistente.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bppv",
    title: "BPPV (Positional Vertigo)",
    titleEs: "VPPB (Vértigo Posicional Benigno) | Quiropráctico San Antonio TX",
    image: "/images/conditions/bppv.jpg",
    metaDescription: "BPPV benign paroxysmal positional vertigo treatment San Antonio TX. The Epley maneuver and SOT cranial adjusting resolve spinning vertigo triggered by head position changes.",
    metaDescriptionEs: "Tratamiento del VPPB vértigo posicional benigno en San Antonio TX. La maniobra de Epley y el ajuste craneal SOT resuelven el vértigo rotatorio causado por el desplazamiento de los canales semicirculares.",
    intro: "BPPV — the most common cause of vertigo — occurs when calcium crystals in the inner ear migrate into the semicircular canals. The Epley repositioning maneuver combined with SOT cranial adjusting resolves most cases rapidly.",
    introEs: "El VPPB — la causa más común de vértigo — ocurre cuando los cristales de calcio en el oído interno migran hacia los canales semicirculares. La maniobra de reposicionamiento de Epley combinada con ajuste craneal SOT resuelve la mayoría de los casos rápidamente.",
    whatIs: "Benign paroxysmal positional vertigo (BPPV) is caused by otoconia — calcium carbonate crystals from the utricle — dislodging and entering the semicircular canals of the inner ear. When the head moves in certain directions, these crystals displace fluid in the canal, sending false movement signals to the brain and triggering intense spinning vertigo. Episodes are typically brief (less than one minute) and triggered by specific position changes such as rolling over in bed, looking up, or bending forward. The posterior semicircular canal is most commonly affected.",
    whatIsEs: "El vértigo posicional paroxístico benigno (VPPB) es causado por otoconia — cristales de carbonato de calcio del utrículo — desalojándose entrando en los canales semicirculares del oído interno. Cuando la cabeza se mueve en ciertas direcciones, estos cristales desplazan fluido en el canal, enviando señales de movimiento falsas al cerebro y desencadenando vértigo rotatorio intenso. Los episodios típicamente son breves (menos de un minuto) y desencadenados por cambios de posición específicos como rodar en la cama, mirar hacia arriba o inclinarse hacia adelante. El canal semicircular posterior es más comúnmente afectado.",
    symptoms: [
      "Brief spinning or whirling sensation triggered by head position changes",
      "Nausea with severe episodes",
      "Vertical and torsional nystagmus (eye movements) during vertigo",
      "Unsteadiness and imbalance between episodes",
      "Symptoms when rolling over in bed, looking up, or bending forward",
      "Episodes typically lasting less than one minute",
    ],
    symptomsEs: [
      "Sensación breve de vueltas o rotación desencadenada por cambios de posición de cabeza",
      "Náusea con episodios severos",
      "Nistagmo vertical y torsional (movimientos de los ojos) durante el vértigo",
      "Inestabilidad e desequilibrio entre episodios",
      "Síntomas al rodar en la cama, mirar hacia arriba o inclinarse hacia adelante",
      "Episodios típicamente durando menos de un minuto",
    ],
    causes: [
      "Otoconia dislodging from the utricle into the semicircular canals",
      "Head trauma or concussion displacing crystals",
      "Age-related degeneration of the otolithic membrane",
      "Viral inner ear infection",
      "Prolonged bedrest altering crystal position",
      "Cranial bone distortions affecting inner ear mechanics",
    ],
    causesEs: [
      "Otoconia desalojándose del utrículo hacia los canales semicirculares",
      "Trauma de cabeza o conmoción desplazando cristales",
      "Degeneración relacionada con la edad de la membrana otolítica",
      "Infección viral del oído interno",
      "Reposo prolongado alterando la posición de cristales",
      "Distorsiones de los huesos craneales afectando la mecánica del oído interno",
    ],
    chiropracticTreatment: "The Epley canalith repositioning procedure is highly effective for BPPV and is performed in-office by Dr. Foss. The head is guided through a specific sequence of positions to move the displaced crystals out of the affected canal and back to the utricle. SOT cranial adjusting addresses concurrent cranial bone distortions — particularly temporal bone dysfunction — that can perpetuate or worsen BPPV. Most patients experience complete resolution within one to three visits. Cervical adjusting reduces associated neck tension that compounds dizziness.",
    chiropracticTreatmentEs: "El procedimiento de reposicionamiento de canalitos de Epley es altamente efectivo para el VPPB y es realizado en la oficina por el Dr. Foss. La cabeza es guiada a través de una secuencia específica de posiciones para mover los cristales desplazados fuera del canal afectado y de vuelta al utrículo. El ajuste craneal SOT aborda distorsiones concurrentes de los huesos craneales — particularmente disfunción del hueso temporal — que puede perpetuar o empeorar el VPPB. La mayoría de los pacientes experimentan resolución completa dentro de una a tres visitas. El ajuste cervical reduce la tensión de cuello asociada que agrava el mareo.",
    additionalTreatments: [],
  },

  {
    slug: "immune-system-support",
    title: "Immune System Support",
    titleEs: "Apoyo al Sistema Inmunológico",
    image: "/images/conditions/immune-support.jpg",
    metaDescription: "Chiropractic immune system support San Antonio TX. Research shows spinal subluxation reduces immune function — SOT corrections remove nerve interference and strengthen natural immune response.",
    metaDescriptionEs: "Apoyo al sistema inmunológico con quiropráctica en San Antonio TX. Las subluxaciones vertebrales reducen la función inmune — la corrección SOT elimina la interferencia nerviosa.",
    intro: "The nervous system directly regulates immune function. Spinal subluxation creates nerve interference that suppresses immune response — chiropractic correction removes this interference and allows the immune system to function optimally.",
    introEs: "El sistema nervioso regula directamente la función inmunológica. La subluxación espinal crea interferencia nerviosa que suprime la respuesta inmunológica — la corrección quiropráctica elimina esta interferencia y permite que el sistema inmunológico funcione de manera óptima.",
    whatIs: "The nervous and immune systems are deeply interconnected — the hypothalamus, brainstem, and spinal cord continuously regulate immune cell activity through the autonomic nervous system. Research has demonstrated that upper cervical adjustments increase natural killer cell count, that subluxation reduces immunoglobulin levels, and that chiropractic patients have measurably stronger immune function. The spleen, thymus, and lymph nodes are innervated by the sympathetic and parasympathetic nervous systems — when spinal alignment is optimal, this innervation is intact and immune function is maximized.",
    whatIsEs: "Los sistemas nervioso e inmunológico están profundamente interconectados — el hipotálamo, el tronco encefálico y la médula espinal regulan continuamente la actividad de las células inmunológicas a través del sistema nervioso autónomo. La investigación ha demostrado que los ajustes cervicales superiores aumentan el recuento de células asesinas naturales, que la subluxación reduce los niveles de inmunoglobulina, y que los pacientes de quiropráctica tienen una función inmunológica mediblemente más fuerte. El bazo, el timo y los ganglios linfáticos están inervados por los sistemas nerviosos simpático y parasimpático — cuando la alineación espinal es óptima, esta inervación está intacta y la función inmunológica se maximiza.",
    symptoms: [
      "Frequent illness — recurring colds, ear infections, or respiratory infections",
      "Slow recovery from illness",
      "Chronic low-grade inflammation",
      "Allergies and autoimmune reactivity",
      "Fatigue related to chronic immune activation",
      "Children with frequent ear infections or respiratory illnesses",
    ],
    symptomsEs: [
      "Enfermedad frecuente — resfriados recurrentes, infecciones del oído o infecciones respiratorias",
      "Recuperación lenta de la enfermedad",
      "Inflamación crónica de bajo grado",
      "Alergias y reactividad autoinmune",
      "Fatiga relacionada con la activación inmunológica crónica",
      "Niños con infecciones frecuentes del oído o enfermedades respiratorias",
    ],
    causes: [
      "Spinal subluxation creating nerve interference to immune-regulating centers",
      "Chronic stress activating cortisol and suppressing immune function",
      "Poor sleep disrupting immune cell replenishment",
      "Nutritional deficiencies",
      "Sedentary lifestyle reducing lymphatic circulation",
      "Toxin burden overwhelming detoxification and immune capacity",
    ],
    causesEs: [
      "Subluxación espinal creando interferencia nerviosa en los centros reguladores inmunológicos",
      "Estrés crónico activando cortisol y suprimiendo la función inmunológica",
      "Sueño pobre que interrumpe la reposición de células inmunológicas",
      "Deficiencias nutricionales",
      "Estilo de vida sedentario reduciendo la circulación linfática",
      "Carga de toxinas abrumando la capacidad de desintoxicación e inmunológica",
    ],
    chiropracticTreatment: "SOT spinal correction — particularly upper cervical and upper thoracic adjustments — removes the nerve interference that suppresses immune function. Dr. Foss uses gentle CMRT (Chiropractic Manipulative Reflex Technique) organ protocols that directly support the spleen, thymus, and lymphatic pathways through specific spinal and soft tissue contacts. Many patients report getting sick less frequently, recovering faster, and experiencing reduced allergy symptoms following regular chiropractic care. Children with chronic ear infections are especially responsive to chiropractic immune support.",
    chiropracticTreatmentEs: "La corrección espinal SOT — particularmente los ajustes cervicales superiores y torácicos superiores — elimina la interferencia nerviosa que suprime la función inmunológica. El Dr. Foss utiliza protocolos de órganos CMRT (Técnica de Reflejo Manipulativo Quiropráctico) suave que apoyan directamente el bazo, el timo y las vías linfáticas a través de contactos espinales y de tejido blando específicos. Muchos pacientes reportan enfermarse con menos frecuencia, recuperarse más rápidamente y experimentar síntomas de alergia reducidos después del cuidado quiropráctico regular. Los niños con infecciones crónicas del oído responden especialmente bien al apoyo inmunológico quiropráctico.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bed-wetting-enuresis",
    title: "Bed-Wetting (Enuresis)",
    titleEs: "Enuresis (Mojar la Cama)",
    image: "/images/conditions/bedwetting.jpg",
    metaDescription: "Bed-wetting enuresis pediatric chiropractor San Antonio TX. Research supports chiropractic care for childhood nocturnal enuresis through sacral nerve normalization at Pura Vida Chiropractic.",
    metaDescriptionEs: "Quiropráctica pediátrica para enuresis nocturna en San Antonio TX. Ajuste sacro para normalizar la inervación vesical en niños con enuresis nocturna.",
    intro: "Pediatric bed-wetting (nocturnal enuresis) is often related to sacral nerve dysfunction impairing bladder control. Research supports chiropractic sacral correction as an effective, drug-free approach for many children.",
    introEs: "La enuresis nocturna pediátrica (mojar la cama) a menudo está relacionada con disfunción del nervio sacro que afecta el control de la vejiga. La investigación respalda la corrección sacra quiropráctica como un enfoque efectivo y sin medicamentos para muchos niños.",
    whatIs: "Nocturnal enuresis affects approximately 15% of 5-year-olds and 5% of 10-year-olds. While often attributed purely to developmental delays, a significant proportion of cases involve sacral nerve dysfunction that impairs the nervous system's ability to inhibit bladder contraction during sleep. The sacral nerves (S2-S4) directly innervate the detrusor muscle and urethral sphincter — sacral subluxation creates interference in this pathway. Multiple published case reports and studies demonstrate resolution of enuresis following chiropractic sacral correction.",
    whatIsEs: "La enuresis nocturna afecta aproximadamente al 15% de los niños de 5 años y al 5% de los niños de 10 años. Aunque a menudo se atribuye únicamente a retrasos del desarrollo, una proporción significativa de casos implica disfunción del nervio sacro que afecta la capacidad del sistema nervioso para inhibir la contracción de la vejiga durante el sueño. Los nervios sacros (S2-S4) inervan directamente el músculo detrusor y el esfínter uretral — la subluxación sacra crea interferencia en este camino. Múltiples casos publicados y estudios demuestran la resolución de la enuresis después de la corrección sacra quiropráctica.",
    symptoms: [
      "Involuntary urination during sleep past age 5–6",
      "Normal daytime bladder control with nighttime loss",
      "No identifiable urinary tract infection or anatomical abnormality",
      "Family history of late toilet training",
      "Associated daytime urgency or frequency in some cases",
      "Sleep disturbances or deep sleeping patterns",
    ],
    symptomsEs: [
      "Micción involuntaria durante el sueño después de los 5 a 6 años",
      "Control normal de la vejiga durante el día con pérdida nocturna",
      "Sin infección del tracto urinario identificable o anomalía anatómica",
      "Antecedentes familiares de entrenamiento tardío del baño",
      "Urgencia o frecuencia diurna asociada en algunos casos",
      "Perturbaciones del sueño o patrones de sueño profundo",
    ],
    causes: [
      "Sacral subluxation interfering with the S2-S4 bladder innervation",
      "Developmental immaturity of the bladder-brain communication pathway",
      "Deep sleep preventing arousal from bladder signals",
      "Genetic factors — 75% of children have an affected parent",
      "Constipation mechanically affecting bladder capacity",
      "Psychological or emotional stress triggers",
    ],
    causesEs: [
      "Subluxación sacra que interfiere con la inervación de la vejiga S2-S4",
      "Inmadurez del desarrollo de la vía de comunicación vejiga-cerebro",
      "Sueño profundo previniendo el despertar de las señales de la vejiga",
      "Factores genéticos — el 75% de los niños tienen un padre afectado",
      "Estreñimiento que afecta mecánicamente la capacidad de la vejiga",
      "Desencadenantes de estrés psicológico o emocional",
    ],
    chiropracticTreatment: "Dr. Foss uses gentle sacral evaluation and correction protocols specifically designed for pediatric patients. SOT Category II pelvic work normalizes sacral mechanics and restores proper innervation through the S2-S4 nerve roots to the bladder. This is a gentle, non-invasive approach that many parents try before considering medication. Published case series report resolution or significant improvement in enuresis in a substantial proportion of children receiving chiropractic sacral care. Treatment is comfortable and children typically enjoy their visits.",
    chiropracticTreatmentEs: "El Dr. Foss utiliza protocolos de evaluación y corrección sacra suave específicamente diseñados para pacientes pediátricos. El trabajo pélvico de Categoría II de SOT normaliza la mecánica sacra y restaura la inervación adecuada a través de las raíces nerviosas S2-S4 hacia la vejiga. Este es un enfoque suave y no invasivo que muchos padres prueban antes de considerar medicamentos. Los casos publicados informan de la resolución o mejora significativa de la enuresis en una proporción sustancial de niños que reciben cuidado sacro quiropráctico. El tratamiento es cómodo y los niños típicamente disfrutan sus visitas.",
    additionalTreatments: [],
  },

  {
    slug: "constipation",
    title: "Constipation",
    titleEs: "Estreñimiento",
    image: "/images/conditions/constipation.jpg",
    metaDescription: "Constipation relief through chiropractic care San Antonio TX. CMRT and SOT spinal correction normalize gut motility through the lumbar and sacral nerve pathways at Pura Vida Chiropractic.",
    metaDescriptionEs: "Alivio del estreñimiento con quiropráctica en San Antonio TX. CMRT y corrección espinal SOT para normalizar la motilidad intestinal a través de las vías nerviosas lumbares.",
    intro: "The nerves supplying the colon originate in the lumbar and sacral spine. Subluxations at these levels reduce gut motility and contribute to chronic constipation — CMRT organ protocols specifically address this connection.",
    introEs: "El estreñimiento crónico a menudo refleja disfunción del sistema nervioso que afecta el movimiento intestinal. La corrección espinal quiropráctica y los protocolos CMRT restauran la inervación abdominal y resuelven la causa raíz.",
    whatIs: "Constipation is characterized by fewer than three bowel movements per week, hard stools, straining, or a sensation of incomplete evacuation. While dietary factors are primary, chronic constipation often has a neurological component. The descending colon and rectum are innervated by the lumbar (L1-L3) and sacral (S2-S4) parasympathetic nerves that drive peristalsis. Subluxation at these levels reduces the neural drive to the colon, slowing motility. CMRT (Chiropractic Manipulative Reflex Technique) organ protocols specifically address the reflex relationship between the lumbar spine and the colon.",
    whatIsEs: "El estreñimiento es la dificultad para defecar o una frecuencia de deposiciones inferior a tres por semana. Aunque a menudo se atribuye únicamente a la dieta, la mayoría de los casos implican interferencia del sistema nervioso que afecta la peristalsis (movimiento ondulatorio) de los intestinos. Los nervios lumbares y sacros (L2-L5, S1-S4) inervan directamente el colon y el recto — la subluxación espinal en estas regiones suprime el control motriz normal. La constipación crónica es una indicación común de disfunción neuro-intestinal que responde bien a la corrección quiropráctica.",
    symptoms: [
      "Fewer than 3 bowel movements per week",
      "Hard, dry, or lumpy stools requiring straining",
      "Bloating and abdominal discomfort",
      "Sensation of incomplete evacuation",
      "Reliance on laxatives for regular bowel function",
      "Hemorrhoids or rectal pain from chronic straining",
    ],
    symptomsEs: [
      "Menos de tres deposiciones por semana",
      "Evacuaciones difíciles o dolorosas",
      "Heces duras o grumosas",
      "Sensación de evacuación incompleta después de defecar",
      "Necesidad de esfuerzo excesivo o tensión",
      "Síntomas asociados como hinchazón, dolor abdominal o gases",
    ],
    causes: [
      "Lumbar subluxation reducing parasympathetic innervation to the colon",
      "Inadequate dietary fiber and water intake",
      "Sedentary lifestyle reducing gut motility",
      "Medications — opioids, antidepressants, iron supplements",
      "Hypothyroidism slowing overall metabolic rate",
      "Pelvic floor dysfunction — particularly in women postpartum",
    ],
    causesEs: [
      "Subluxación lumbar y sacra interfiriendo con el control motriz intestinal",
      "Deshidratación insuficiente",
      "Dieta baja en fibra",
      "Sedentarismo reduciendo el tono intestinal",
      "Estrés crónico suprimiendo la motilidad del colon",
      "Medicamentos que afectan el movimiento intestinal",
    ],
    chiropracticTreatment: "CMRT protocols include specific soft tissue contacts along the large intestine's organ reflex zones combined with lumbar and sacral spinal corrections. Dr. Foss addresses the L1-L3 and S2-S4 segments that directly innervate the colon's motility mechanisms. Many patients experience a bowel movement within hours of their first CMRT treatment. Ongoing chiropractic care normalizes the gut-spine connection, reducing dependence on laxatives and establishing a natural rhythm. Dietary and hydration guidance is integrated into the care plan.",
    chiropracticTreatmentEs: "El Dr. Foss utiliza correcciones lumbares y sacras específicas junto con protocolos CMRT (Técnica de Reflejo Manipulativo Quiropráctico) dirigidos al colon y los intestinos delgados. Estos protocolos de órganos restauran la inervación adecuada y mejoran la motilidad intestinal de manera natural, sin medicamentos ni laxantes. Muchos pacientes reportan deposiciones regulares y sin dolor después de varias semanas de cuidado quiropráctico consistente.",
    additionalTreatments: [],
  },

  {
    slug: "bloating-gas",
    title: "Bloating & Gas",
    titleEs: "Hinchazón y Gases",
    image: "/images/conditions/bloating.jpg",
    metaDescription: "Bloating and gas relief through chiropractic care San Antonio TX. CMRT and thoracic spinal correction support digestive nerve function and reduce chronic bloating at Pura Vida Chiropractic.",
    metaDescriptionEs: "Alivio de hinchazón y gases con quiropráctica en San Antonio TX. CMRT y corrección espinal torácica para apoyar la función nerviosa digestiva.",
    intro: "Chronic bloating and gas are often linked to disrupted gut motility and digestive nerve function originating in the thoracic and lumbar spine. CMRT chiropractic organ protocols address this nervous system-gut connection.",
    introEs: "La hinchazón y los gases excesivos a menudo no se deben únicamente a la dieta, sino a disfunción del sistema nervioso que afecta la digestión y el movimiento intestinal. La quiropráctica aborda la causa nerviosa raíz.",
    whatIs: "Bloating — abdominal distension and a feeling of fullness — affects a large portion of the population and is commonly related to excess gas production, impaired gut motility, or altered gut microbiome. From a chiropractic perspective, the thoracic spine (T5-T9) provides sympathetic innervation to the stomach and small intestine, while lumbar segments supply the large intestine. Subluxations at these levels disrupt the coordination of gastric emptying and intestinal peristalsis — leading to fermentation, gas accumulation, and bloating.",
    whatIsEs: "La hinchazón es la sensación de plenitud incómoda o estiramiento abdominal, a menudo acompañada de gases visibles o eructos. Aunque a menudo se atribuye al tipo de alimento consumido, la mayoría de los casos resultan de disfunción del sistema nervioso entérico — el \"segundo cerebro\" del abdomen. Los nervios vagos y espinales (particularmente T5-L2) regulan la secreción ácida gástrica, el movimiento intestinal y la flora bacteriana. La subluxación espinal en el tórax medio y la región lumbar superior interrumpe estas funciones, causando fermentación, gases y retención de alimentos.",
    symptoms: [
      "Visible abdominal distension after meals",
      "Excess gas — belching or flatulence",
      "Abdominal cramping and pressure",
      "Fullness even after small meals",
      "Alternating constipation and loose stools",
      "Associated heartburn or reflux",
    ],
    symptomsEs: [
      "Sensación de hinchazón o plenitud abdominal",
      "Gases excesivos o eructos frecuentes",
      "Distensión abdominal visible después de comer",
      "Flatulencia odorosa",
      "Sensación de presión o incomodidad después de las comidas",
      "Síntomas que empeoran después de ciertas comidas",
    ],
    causes: [
      "Thoracic subluxation disrupting gastric and intestinal nerve supply",
      "Dysbiosis — overgrowth of gas-producing gut bacteria",
      "Food intolerances — dairy, gluten, FODMAPs",
      "Impaired stomach acid production reducing food breakdown",
      "Stress and anxiety activating the sympathetic nervous system",
      "Slow gastric emptying from vagus nerve dysfunction",
    ],
    causesEs: [
      "Subluxación torácica media interfiriendo con la inervación gástrica",
      "Subluxación lumbar superior afectando el nervio vago y los nervios espinales intestinales",
      "Masticación inadecuada o comer rápido",
      "Intolerancia alimentaria o disbiosis (desequilibrio bacteriano)",
      "Estrés afectando la función digestiva vagal",
      "Estreñimiento predispuesto afectando el tránsito intestinal",
    ],
    chiropracticTreatment: "CMRT protocols for the stomach and intestines combined with mid-thoracic spinal adjustments normalize the sympathetic innervation controlling digestive rate and coordination. Dr. Foss addresses T5-T9 (stomach, small intestine) and L1-L3 (large intestine) segments to restore coordinated gut motility. Vagus nerve function — the primary parasympathetic drive for digestion — is enhanced through upper cervical and craniosacral corrections. Patients typically report improved digestive comfort within a few weeks of consistent care.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación de la columna torácica media y la región lumbar superior para identificar la subluxación que interfiere con la regulación digestiva. La corrección SOT restaura la inervación normal del estómago e intestinos a través de los nervios espinales y vagales. Los protocolos CMRT específicos destinados al páncreas, el hígado y los intestinos mejoran la coordinación digestiva. La mayoría de los pacientes notan una reducción significativa de la hinchazón y los gases dentro de 2-4 semanas de cuidado consistente.",
    additionalTreatments: [],
  },

  {
    slug: "radiculopathy",
    title: "Radiculopathy",
    titleEs: "Radiculopatía",
    image: "/images/conditions/radiculopathy.jpg",
    metaDescription: "Radiculopathy treatment San Antonio TX. SOT chiropractic decompresses compressed nerve roots causing radiating pain, numbness, and weakness in the arm or leg without surgery.",
    metaDescriptionEs: "Tratamiento de radiculopatía en San Antonio TX. Quiropráctica SOT para descomprimir las raíces nerviosas que causan dolor irradiado, entumecimiento y debilidad.",
    intro: "Radiculopathy — nerve root compression causing radiating pain along the nerve's pathway — responds well to SOT chiropractic decompression. Most cases can be resolved without surgery or epidural injections.",
    introEs: "La radiculopatía es el dolor, debilidad u hormigueo causado por la irritación o compresión de un nervio espinal. La corrección quiropráctica elimina la presión sobre el nervio y restaura la función.",
    whatIs: "Radiculopathy occurs when a spinal nerve root is compressed or irritated at its point of exit from the spinal canal. In the lumbar spine, this causes pain, numbness, and weakness radiating into the buttock, leg, and foot (lumbar radiculopathy / sciatica). In the cervical spine, it causes radiating arm pain, numbness, and weakness (cervical radiculopathy). Common causes include herniated discs, bone spurs, and foraminal stenosis. The distribution of symptoms accurately identifies the compressed nerve root level.",
    whatIsEs: "La radiculopatía se refiere a la disfunción de una raíz nerviosa específica que sale de la médula espinal. Cuando una vértebra se subluxiona (desalinea), puede herniarse el disco intervertebral adyacente, causando compresión directa de la raíz nerviosa. Esto resulta en dolor quemante, entumecimiento, hormigueo o debilidad a lo largo del camino del nervio afectado — comúnmente en la pierna (lumbar) o en el brazo (cervical). A diferencia del dolor local espinal, la radiculopatía se irradia a la extremidad porque el nervio mismo está irritado.",
    symptoms: [
      "Pain radiating in a specific pattern along the arm or leg",
      "Numbness or tingling following the nerve root's distribution",
      "Muscle weakness in the arm or leg corresponding to the affected level",
      "Pain worsening with spinal extension or lateral bending toward the painful side",
      "Diminished deep tendon reflexes at the affected level",
      "Pain alleviated by cervical or lumbar traction or specific positions",
    ],
    symptomsEs: [
      "Dolor quemante, agudo o eléctrico que irradia hacia la pierna o brazo",
      "Entumecimiento u hormigueo en un patrón de raíz nerviosa específica",
      "Debilidad muscular en el brazo o la pierna afectados",
      "Hipersensibilidad de la piel o alodinia (dolor ante estímulos ligeros)",
      "Síntomas que empeoran al doblar o girar el cuello o la cintura",
      "Dolor que despierta por la noche o que es peor después de prolongadas posiciones sedentes",
    ],
    causes: [
      "Herniated disc nucleus compressing the nerve root",
      "Foraminal stenosis from arthritic bone spurs",
      "Subluxation reducing the intervertebral foramen diameter",
      "Disc height loss from degeneration",
      "Spondylolisthesis shifting the foramen",
      "Acute trauma causing disc herniation",
    ],
    causesEs: [
      "Subluxación vertebral con hernias de disco comprimiendo la raíz nerviosa",
      "Estenosis foraminal — estrechamiento óseo del espacio por el cual sale el nervio",
      "Inflamación peri-radicular o edema por lesión crónica del nervio",
      "Traumatismo agudo como latigazo cervical o lesión laboral",
      "Cambios degenerativos relacionados con la edad y osteoartrosis",
      "Cicatrización epidural de un procedimiento quirúrgico previo",
    ],
    chiropracticTreatment: "SOT chiropractic care for radiculopathy focuses on opening the intervertebral foramen through precise spinal correction and disc traction. Dr. Foss uses flexion-distraction technique to decompress the affected disc and nerve root, and category-appropriate pelvic work to normalize the overall spinal mechanics driving foraminal narrowing. For cervical radiculopathy, gentle upper cervical and mid-cervical corrections reduce nerve root pressure. Most patients experience significant reduction in radiating pain within the first few weeks of care, often avoiding surgery and epidural steroid injections.",
    chiropracticTreatmentEs: "El Dr. Foss utiliza evaluación neurológica y neuroimagen (si es necesario) para identificar la raíz nerviosa afectada y la causa mecánica subyacente. La corrección espinal SOT restaura la altura discal normal y alivia la presión sobre el nervio. La terapia de decompresión suave, los ajustes segmentarios y los protocolos de tejido blando reducen la inflamación y restauran la función nerviosa. Muchos pacientes con radiculopatía crónica experimentan resolución del dolor radiante dentro de 4-8 semanas de cuidado quiropráctico focado.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "cluster-headaches",
    title: "Cluster Headaches",
    titleEs: "Cefaleas en Racimo",
    image: "/images/conditions/cluster-headaches.jpg",
    metaDescription: "Cluster headache treatment San Antonio TX. SOT and cranial adjusting address the trigeminal nerve irritation and sphenopalatine ganglion involvement driving cluster headache cycles.",
    metaDescriptionEs: "Tratamiento de cefaleas en racimo en San Antonio TX. Ajuste craneal SOT para la irritación del nervio trigémino y el ganglio esfenopalatino en los ciclos de cefalea.",
    intro: "Cluster headaches — among the most severe pain conditions known — involve trigeminal nerve and autonomic dysfunction. SOT cranial adjusting addresses the sphenopalatine ganglion involvement and cranial distortions that trigger cluster cycles.",
    introEs: "Los dolores de cabeza en racimo son migrañas severas agrupadas en el tiempo, frecuentemente unilaterales. La corrección quiropráctica aborda la disfunción neurovascular subyacente.",
    whatIs: "Cluster headaches are unilateral severe headaches occurring in 'clusters' — multiple times per day for weeks or months, then disappearing for months or years. The pain is excruciating, centered around one eye, and accompanied by autonomic symptoms: tearing, nasal congestion, eyelid drooping, and facial flushing on the affected side. They are caused by trigeminal nerve activation and sphenopalatine ganglion dysfunction. Cranial distortions affecting the temporal, sphenoid, and ethmoid bones can irritate the trigeminal pathway and perpetuate cluster cycles.",
    whatIsEs: "Los dolores de cabeza en racimo son episodios de dolor intenso y punzante alrededor del ojo, a menudo con síntomas autonómicos como lagrimeo, congestión nasal y enrojecimiento facial. A diferencia de las migrañas comunes, ocurren en \"racimos\" o patrones temporales predecibles — diarios durante semanas o meses, seguidos de períodos sin dolor. Se cree que resultan de disfunción hipotalámica e irritación del nervio trigémino, a menudo precipitados o agravados por subluxación cervical superior que afecta el flujo sanguíneo intracraneal y la transmisión del trigémino.",
    symptoms: [
      "Severe, stabbing, or burning pain centered around or behind one eye",
      "Pain reaching maximum intensity within minutes",
      "Accompanying tearing, nasal congestion, or discharge on the affected side",
      "Eyelid drooping and pupil constriction on the affected side",
      "Restlessness and agitation during attacks",
      "Attacks occurring at predictable times, often during sleep",
    ],
    symptomsEs: [
      "Dolor intenso, quemante, punzante unilateral alrededor del ojo o la sien",
      "Comienzo abrupto, a menudo 1-2 horas después de dormir",
      "Duración de 15 minutos a 3 horas por ataque",
      "Lagrimeo excesivo del ojo ipsilateral",
      "Congestión nasal o rinorrea del mismo lado",
      "Inquietud durante el ataque — a menudo necesidad de movimiento",
    ],
    causes: [
      "Trigeminal nerve sensitization triggering the pain pathway",
      "Sphenopalatine ganglion hyperactivity driving autonomic symptoms",
      "Hypothalamic circadian rhythm dysfunction triggering attack cycles",
      "Sphenoid and temporal bone distortions irritating adjacent neural structures",
      "Alcohol, strong odors, and altitude triggering attacks during active periods",
      "Upper cervical subluxation aggravating trigeminal irritability",
    ],
    causesEs: [
      "Subluxación cervical superior interfiriendo con el nervio trigémino y la inervación craneal",
      "Disfunción hipotalámica y alteración del ritmo circadiano subyacente",
      "Vasodilatación intracraneal precipitada por factores ambientales",
      "Inflamación trigémino-vascular",
      "Factores desencadenantes como cambios en la presión barométrica o alcohol",
      "Trauma cervical previo o lesiones por latigazo",
    ],
    chiropracticTreatment: "SOT cranial adjusting offers a unique approach to cluster headaches by addressing the sphenoid bone — directly adjacent to the cavernous sinus and trigeminal ganglion — and the temporal bones surrounding the trigeminal pathway. Dr. Foss uses specific sphenobasilar and temporal contacts to normalize cranial mechanics and reduce the structural irritation amplifying trigeminal nerve sensitivity. Upper cervical correction addresses the C1-C2 contribution to trigeminal sensitization. While cluster headaches are challenging to treat, many patients report reduced attack frequency, shorter cluster periods, and less severe individual attacks.",
    chiropracticTreatmentEs: "El Dr. Foss realiza una evaluación cervical superior exhaustiva y utiliza la Técnica Sacro-Occipital (SOT) para corregir la subluxación del atlas (C1) y el axis (C2) que puede estar precipitando los dolores de cabeza en racimo. La corrección específica restaura la inervación trigémina normal y normaliza el flujo sanguíneo intracraneal y el tono simpático. Los ajustes consistentes, a menudo con terapia láser y protocolos de tejido blando, ayudan a reducir la frecuencia, duración e intensidad de los racimos. Muchos pacientes reportan remisión parcial o completa después de 2-3 meses de cuidado enfocado.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "occipital-neuralgia",
    title: "Occipital Neuralgia",
    titleEs: "Neuralgia Occipital",
    image: "/images/conditions/occipital-neuralgia.jpg",
    metaDescription: "Occipital neuralgia treatment San Antonio TX. Upper cervical SOT correction and cranial adjusting release the compressed greater occipital nerve causing shooting pain in the back of the head.",
    metaDescriptionEs: "Tratamiento de neuralgia occipital en San Antonio TX. Corrección cervical alta SOT para liberar el nervio occipital mayor comprimido que causa dolor urente en la parte posterior de la cabeza.",
    intro: "Occipital neuralgia — shooting, electric pain in the back of the head — is caused by compression of the greater occipital nerve. Upper cervical chiropractic correction directly releases this compression.",
    introEs: "La neuralgia occipital es el dolor agudo en la parte posterior de la cabeza causado por irritación del nervio occipital mayor. La corrección quiropráctica alivia la presión sobre el nervio.",
    whatIs: "Occipital neuralgia is caused by irritation or compression of the greater or lesser occipital nerves as they exit between the C1-C3 vertebrae and pierce the suboccipital muscles to supply the scalp. It causes distinctive shooting, electric, or stabbing pain from the base of the skull up over the scalp — sometimes radiating to the eye. Upper cervical subluxation, tight suboccipital muscles, and cranial distortions at the occiput-atlas junction are the primary structural causes. It is frequently misdiagnosed as migraine.",
    whatIsEs: "La neuralgia occipital (ON) es la irritación del nervio occipital mayor, que sale de la médula espinal entre C1 y C2 y se extiende hacia la parte posterior de la cabeza. Cuando la subluxación cervical superior o la tensión muscular suboccipital comprime este nervio, causa dolor eléctrico, quemante o punzante que irradia desde la base del cráneo hasta la coronilla, a menudo unilateral. A diferencia del dolor de cabeza tensional, es verdadero dolor neuropático — dolor nervioso — y responde bien a la corrección de la causa subyacente de compresión nerviosa.",
    symptoms: [
      "Shooting, electric, or stabbing pain from the base of the skull to the top of the head",
      "Tenderness at the base of the skull when pressure is applied",
      "Pain radiating to the eye or forehead on the affected side",
      "Sensitivity of the scalp to light touch or hair brushing",
      "Neck stiffness and limited rotation",
      "Dull ache between attacks",
    ],
    symptomsEs: [
      "Dolor quemante, eléctrico o punzante en la parte posterior de la cabeza",
      "Dolor que irradia desde la base del cráneo hacia la coronilla o frente",
      "A menudo unilateral, pero puede ser bilateral",
      "Sensibilidad aumentada al tacto en la base del cráneo",
      "Síntomas que empeoran con los movimientos de cuello o rotación cervical",
      "Hipersensibilidad anormal o alodinia del cuero cabelludo",
    ],
    causes: [
      "C1-C3 subluxation compressing the emerging occipital nerves",
      "Suboccipital muscle hypertonicity entrapping the nerve",
      "Cranial distortion at the occiput-atlas junction",
      "Prior head or neck trauma",
      "Forward head posture chronically loading the suboccipital muscles",
      "Whiplash injury inflaming the upper cervical joints",
    ],
    causesEs: [
      "Subluxación del atlas (C1) comprimiendo el nervio occipital mayor",
      "Tensión muscular suboccipital del músculo recto posterior mayor o menor",
      "Rigidez dural o tracción meníngea de la alineación espinal pobre",
      "Inflamación del nervio occipital de irritación mecánica crónica",
      "Traumatismo cervical previo, latigazo cervical o lesiones deportivas",
      "Estrés postural prolongado o uso de pantalla",
    ],
    chiropracticTreatment: "Upper cervical SOT correction and cranial adjusting at the occiput-atlas junction is highly effective for occipital neuralgia. Dr. Foss identifies the specific C1-C3 subluxation pattern entrapping the occipital nerve and applies gentle, precise corrections to restore joint mobility and decompress the nerve. Suboccipital muscle release techniques relax the muscles mechanically compressing the nerve at its piercing point. Cranial adjusting normalizes the occiput-atlas relationship. Most patients experience significant or complete relief from the shooting pain within a few visits.",
    chiropracticTreatmentEs: "El Dr. Foss realiza una evaluación neurológica específica para confirmar el patrón de inervación occipital y luego utiliza la Técnica Sacro-Occipital (SOT) para aliviar la presión sobre el nervio. Los ajustes cervicales superiores suave, combinados con liberación de tejido blando del suboccipital y protocolos de decompresión, restauran el flujo nervioso normal. La mayoría de los pacientes con neuralgia occipital experimentan alivio significativo dentro de 4-6 semanas de cuidado consistente.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "shoulder-impingement",
    title: "Shoulder Impingement",
    titleEs: "Pinzamiento de Hombro",
    image: "/images/conditions/shoulder-impingement.jpg",
    metaDescription: "Shoulder impingement syndrome treatment San Antonio TX. SOT chiropractic combined with SoftWave therapy reduces subacromial inflammation and restores pain-free shoulder function.",
    metaDescriptionEs: "Tratamiento del síndrome de pinzamiento de hombro en San Antonio TX. Quiropráctica SOT y terapia SoftWave para reducir la inflamación subacromial y restaurar la función del hombro.",
    intro: "Shoulder impingement occurs when rotator cuff tendons are compressed under the acromion during arm elevation. Combined cervical-thoracic chiropractic care and regenerative therapy resolves most cases without surgery.",
    introEs: "El atrapamiento del hombro ocurre cuando los tendones del manguito de los rotadores se aprietan en el espacio subacromial. La corrección quiropráctica restaura el alineamiento escapular y alivia la presión.",
    whatIs: "Shoulder impingement syndrome occurs when the rotator cuff tendons (particularly the supraspinatus) and the subacromial bursa are compressed between the humeral head and the acromion process during shoulder movements. This causes pain with overhead reaching, across-body movements, and lying on the shoulder. Thoracic hyperkyphosis and forward head posture reduce the subacromial space mechanically — addressing spinal posture is essential for long-term resolution. Cervical nerve irritation at C5-C6 also compounds shoulder pain.",
    whatIsEs: "El síndrome de atrapamiento subacromial es el pinzamiento de los tendones del manguito de los rotadores (especialmente el supraespinoso) dentro del espacio entre el acromion (punta ósea de la escápula) y la cabeza del húmero. Resulta de una combinación de mala alineación escapular, disfunción articular de la escápula-clavícula, rigidez de los músculos pectorales menores y subluxación cervical superior que afecta la inervación escapular. El atrapamiento causa dolor con ciertos movimientos de brazos, especialmente al levantar o alcanzar, y puede causar tendinitis o bursitis secundaria.",
    symptoms: [
      "Pain with overhead reaching or lifting",
      "Shoulder pain when lying on the affected side at night",
      "Painful arc — pain occurring between 60-120 degrees of arm elevation",
      "Weakness with external shoulder rotation",
      "Gradual onset of pain worsening with repetitive overhead activities",
      "Stiffness and restricted range of motion",
    ],
    symptomsEs: [
      "Dolor en el hombro que empeora al levantar el brazo o alcanzar",
      "Dolor particular entre los 60-120 grados de movimiento de abducción",
      "Debilidad en el hombro o sensación de inseguridad",
      "Dolor nocturno, especialmente al dormir sobre el hombro afectado",
      "Crepitación o chasquido en el hombro con movimiento",
      "Rango de movimiento reducido",
    ],
    causes: [
      "Postural kyphosis and forward shoulder posture narrowing the subacromial space",
      "Rotator cuff muscle weakness allowing superior humeral head migration",
      "Cervical and upper thoracic subluxation contributing to shoulder dysfunction",
      "Repetitive overhead activities — painting, throwing, swimming",
      "Acromial anatomy — hooked or curved acromion",
      "Age-related rotator cuff degeneration",
    ],
    causesEs: [
      "Subluxación cervical superior afectando la inervación del nervio accesorio y supraescapular",
      "Disfunción articular acromioclavicular (AC) o escapulotorácica",
      "Hipertono del músculo pectoral menor causando rotación escapular anterior",
      "Rigidez del supraespinoso u otros músculos del manguito de los rotadores",
      "Postura de cabeza adelantada o cifosis torácica",
      "Traumatismo previo de hombro o uso excesivo",
    ],
    chiropracticTreatment: "Dr. Foss addresses shoulder impingement from both the local and cervicothoracic perspectives. Thoracic spine corrections open the chest and reduce kyphosis — directly increasing the subacromial space. Cervical corrections at C5-C6 address the nerve supply to the shoulder musculature. Shoulder joint mobilization restores glenohumeral mechanics and reduces adhesive capsulitis. SoftWave therapy penetrates the subacromial bursa and rotator cuff insertion, reducing chronic inflammation and stimulating tendon repair. Most patients experience significant improvement within 4-8 weeks of combined care.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación cervical superior, la función escapular y el movimiento articular glenohumeral para identificar la causa mecánica del atrapamiento. Los ajustes cervicales superiores SOT, combinados con correcciones escapulares, liberación de tejido blando del pectoral menor y movilización articular subacromial, restauran el espacio y alivian el pinzamiento. La terapia láser y los protocolos de fortalecimiento específicos apoyan la curación del tendón. Muchos pacientes notan mejora sustancial dentro de 4-6 semanas.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "bursitis",
    title: "Bursitis",
    titleEs: "Bursitis",
    image: "/images/conditions/bursitis.jpg",
    metaDescription: "Bursitis treatment San Antonio TX. SoftWave therapy combined with SOT biomechanical correction reduces bursa inflammation and corrects the movement mechanics causing bursitis.",
    metaDescriptionEs: "Tratamiento de bursitis en San Antonio TX. Terapia SoftWave y corrección biomecánica SOT para reducir la inflamación de la bursa y corregir la mecánica de movimiento.",
    intro: "Bursitis — inflammation of the fluid-filled sacs cushioning joints — responds extremely well to SoftWave therapy combined with biomechanical chiropractic correction that addresses the mechanical cause of bursa overloading.",
    introEs: "La bursitis es la inflamación de la bolsa (saco lleno de líquido) que amortigua las articulaciones. La corrección quiropráctica alivia la causa mecánica subyacente y reduce la inflamación.",
    whatIs: "Bursae are small fluid-filled sacs that reduce friction between bones, tendons, and muscles around joints. Bursitis occurs when these sacs become inflamed from repetitive mechanical irritation, trauma, or infection. Common sites include the shoulder (subacromial), hip (trochanteric), knee (prepatellar, pes anserine), and elbow (olecranon). The critical insight is that most bursitis has a biomechanical cause — abnormal movement mechanics overload the bursa repeatedly. Without correcting the mechanics, bursitis recurs even after injection therapy.",
    whatIsEs: "Las bursas son sacos pequeños llenos de líquido lubricante ubicados alrededor de las articulaciones para reducir la fricción entre huesos, tendones y músculos. La bursitis ocurre cuando una bolsa se irrita o se inflama, a menudo como resultado de fricción mecánica repetida de mala alineación articular, subluxación o desequilibrio muscular. Aunque la bursitis es a menudo etiquetada como \"inflamación idiopática\", la mayoría de los casos tienen una causa mecánica clara — subluxación articular, mala postura o desequilibrio neuromuscular causado por disfunción espinal.",
    symptoms: [
      "Localized joint pain worsening with movement and pressure",
      "Swelling and warmth over the affected bursa",
      "Limited range of motion in the affected joint",
      "Pain with lying on the affected side (hip or shoulder bursitis)",
      "Tenderness on direct palpation over the bursa",
      "Aching pain at rest in severe cases",
    ],
    symptomsEs: [
      "Dolor local alrededor de la articulación afectada",
      "Tumefacción o edema visible",
      "Limitación del rango de movimiento",
      "Dolor con presión sobre la bolsa inflamada",
      "Enrojecimiento de la piel en casos agudos",
      "Síntomas que empeoran con movimiento o actividad",
    ],
    causes: [
      "Repetitive movements overloading a specific bursa",
      "Direct trauma — falling onto a knee or elbow",
      "Biomechanical misalignment creating abnormal joint loading",
      "Leg length discrepancy stressing the hip bursa",
      "Forward shoulder posture loading the subacromial bursa",
      "Inflammatory conditions — rheumatoid arthritis, gout",
    ],
    causesEs: [
      "Subluxación articular causando fricción anormal sobre la bolsa",
      "Desequilibrio muscular de disfunción espinal superior",
      "Mala postura crónica provocando carga repetida de la bolsa",
      "Traumatismo agudo o caída directa en la articulación",
      "Actividad repetitiva de alto impacto con mecánica articular pobre",
      "Infección secundaria (rara)",
    ],
    chiropracticTreatment: "SoftWave therapy is exceptionally effective for bursitis — its unfocused shock waves penetrate the inflamed bursa, reduce inflammation, and stimulate tissue repair without the side effects of steroid injections. Dr. Foss simultaneously addresses the biomechanical cause: pelvic alignment for hip bursitis, thoracic posture for shoulder bursitis, and knee tracking mechanics for knee bursitis. This combined approach resolves the acute inflammation while preventing recurrence. Most patients achieve lasting resolution where repeated steroid injections had only provided temporary relief.",
    chiropracticTreatmentEs: "El Dr. Foss identifica la subluxación articular subyacente o el desequilibrio postural causando la fricción mecánica que irrita la bolsa. La corrección espinal y articular específica, combinada con liberación de tejido blando de los músculos circundantes y drenaje linfático suave, reduce la inflamación. La terapia láser Clase IV acelera la resolución. La mayoría de los pacientes notan alivio rápido dentro de 2-3 semanas, especialmente cuando se combinan ajustes quiroprácticos con reposo relativo y modificación de la actividad.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "tendonitis",
    title: "Tendonitis",
    titleEs: "Tendinitis",
    image: "/images/conditions/tendonitis.jpg",
    metaDescription: "Tendonitis treatment San Antonio TX. SoftWave and Class IV laser therapy stimulate tendon healing at the cellular level, while SOT chiropractic corrects the mechanics causing tendon overload.",
    metaDescriptionEs: "Tratamiento de tendinitis en San Antonio TX. Terapia SoftWave y láser Clase IV para estimular la curación del tendón, mientras la quiropráctica SOT corrige la mecánica.",
    intro: "Tendonitis — tendon inflammation or degeneration — occurs where abnormal mechanics repeatedly overload a tendon. SoftWave and laser therapy stimulate healing while chiropractic correction addresses the underlying cause.",
    introEs: "La tendinitis es la inflamación de un tendón, a menudo causada por uso excesivo o biomecánica pobre. La corrección quiropráctica restaura la alineación y reduce el estrés del tendón.",
    whatIs: "Tendonitis (more accurately called tendinopathy in chronic cases) involves degeneration and inflammation of the tendon — often at its attachment to bone. Common sites include the Achilles tendon, patellar tendon, elbow tendons (tennis and golfer's elbow), biceps tendon, and rotator cuff. The underlying cause is almost always biomechanical — abnormal movement patterns overload the tendon beyond its adaptive capacity. Repetitive microtrauma accumulates, the tendon fails to fully repair between loading sessions, and chronic degeneration develops.",
    whatIsEs: "La tendinitis es la irritación inflamatoria de un tendón, el tejido conectivo fibroso que une el músculo al hueso. Aunque comúnmente atribuida simplemente al \"uso excesivo\", la mayoría de los casos resultan de biomecánica articular pobre, desequilibrio muscular de disfunción espinal, o subluxación que altera el movimiento articular y causa fricción anormal del tendón. Por ejemplo, la tendinitis del supraespinoso en el hombro puede resultar de subluxación cervical superior que afecta la inervación y coordinación del manguito de los rotadores.",
    symptoms: [
      "Pain at the tendon attachment site that worsens with the relevant activity",
      "Morning stiffness and pain that eases with warm-up",
      "Point tenderness on direct palpation of the tendon",
      "Swelling or thickening of the tendon",
      "Pain with resisted contraction of the attached muscle",
      "Gradual onset worsening over weeks to months",
    ],
    symptomsEs: [
      "Dolor localizado a lo largo del tendón afectado",
      "Empeoramiento del dolor con actividad específica o movimiento",
      "Rigidez después del reposo",
      "Tumefacción o crepitación palpable a lo largo del tendón",
      "Débil resistencia al movimiento contra la gravedad",
      "Síntomas que empeoran gradualmente sin tratamiento",
    ],
    causes: [
      "Biomechanical abnormalities creating repetitive tendon overload",
      "Sudden increase in training load without adequate recovery",
      "Improper footwear or equipment contributing to abnormal mechanics",
      "Spinal misalignment altering limb biomechanics",
      "Age-related reduction in tendon vascularity and elasticity",
      "Fluoroquinolone antibiotic use weakening collagen",
    ],
    causesEs: [
      "Biomecánica articular pobre de subluxación espinal",
      "Desequilibrio muscular causando tracción anormal del tendón",
      "Movimiento repetitivo de alto impacto sin apoyo quiropráctico",
      "Debilidad muscular intrínseca de disfunción nerviosa espinal",
      "Mala postura crónica cambiando el ángulo de tracción del tendón",
      "Cicatrización de microrroturas no tratadas",
    ],
    chiropracticTreatment: "SoftWave therapy is the most evidence-supported treatment for tendinopathy — its shock waves stimulate neovascularization, activate stem cells, and dramatically accelerate collagen remodeling within the degenerative tendon. Class IV laser therapy complements this with photobiomodulation, reducing inflammation and accelerating cellular repair. Dr. Foss identifies and corrects the spinal and biomechanical misalignments driving abnormal tendon loading — without addressing mechanics, tendinopathy recurs regardless of how well the tendon heals.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la biomecánica articular y la alineación espinal para identificar la causa subyacente de la tensión anormal del tendón. La corrección específica de la subluxación, combinada con liberación miofascial del músculo asociado y rehabilitación del fortalecimiento, restaura el movimiento normal y alivia el estrés del tendón. La terapia de onda de choque extracorpórea y la terapia láser Clase IV estimulan la curación del tendón. La mayoría de los pacientes con tendinitis crónica experimentan resolución dentro de 4-8 semanas con tratamiento consistente.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "work-injuries",
    title: "Work Injuries",
    titleEs: "Lesiones Laborales",
    image: "/images/conditions/work-injuries.jpg",
    metaDescription: "Work injury chiropractic treatment San Antonio TX. Pura Vida Chiropractic treats occupational injuries — back strain, lifting injuries, repetitive stress — and works with workers' comp cases.",
    metaDescriptionEs: "Tratamiento quiropráctico de lesiones laborales en San Antonio TX. Lesiones de espalda, esfuerzo repetitivo y accidentes de trabajo — documentación para compensación laboral.",
    intro: "Work-related musculoskeletal injuries are among the most common causes of disability and lost work time. Chiropractic care effectively treats acute and chronic occupational injuries and supports return-to-work goals.",
    introEs: "Las lesiones laborales pueden variar desde traumatismos agudos hasta el estrés repetitivo acumulativo. La quiropráctica restaura la función y acelera la curación.",
    whatIs: "Work injuries include a wide spectrum of musculoskeletal conditions caused by occupational activities — acute back strain from lifting, cumulative trauma disorders from repetitive motions, falls, and vibration exposure. Construction workers, warehouse employees, healthcare workers, and office workers are all at high risk for different injury patterns. Chiropractic care is well-documented to reduce recovery time, reduce medication use, and lower the likelihood of injury progressing to chronic disability. Dr. Foss is experienced with workers' compensation documentation requirements.",
    whatIsEs: "Las lesiones laborales abarcan cualquier lesión musculoesquelética o trauma sufrido durante el empleo, desde caídas agudas, colisiones y atrapamientos hasta lesiones por esfuerzo repetitivo (RSI) acumuladas. Muchas lesiones laborales afectan la columna vertebral, causando subluxación, hernias discales, esguinces ligamentosos o daño de tejido blando. Incluso lesiones aparentemente menores pueden desarrollarse en problemas crónicos sin tratamiento oportuno. El cuidado quiropráctico temprano reduce la inflamación, restaura la alineación y evita la transición de lesión aguda a dolor crónico incapacitante.",
    symptoms: [
      "Acute or chronic low back pain from lifting, bending, or awkward postures",
      "Neck and shoulder pain from desk work or overhead activities",
      "Repetitive strain injuries in the wrists, elbows, or shoulders",
      "Joint and soft tissue injuries from falls or collisions",
      "Vibration-related spinal degeneration (heavy equipment operators)",
      "Pain and stiffness limiting safe work performance",
    ],
    symptomsEs: [
      "Dolor agudo en el sitio de lesión inmediatamente después de la lesión",
      "Inflamación, enrojecimiento o hematoma visible",
      "Rango de movimiento limitado",
      "Debilidad o inestabilidad de la región afectada",
      "Síntomas que empeoran al regresar al trabajo",
      "Desarrollo gradual de síntomas crónicos sin tratamiento adecuado",
    ],
    causes: [
      "Heavy lifting with improper biomechanics",
      "Prolonged static postures — sitting, standing, or overhead work",
      "Repetitive motions exceeding tissue adaptation capacity",
      "Sudden trauma — slips, trips, and falls",
      "Vibration exposure from heavy equipment",
      "Ergonomic deficiencies in the workstation setup",
    ],
    causesEs: [
      "Traumatismo agudo — caídas, colisiones, atrapamientos, levantamiento incorrecto",
      "Ergonomía de trabajo pobre causando uso excesivo repetitivo",
      "Desequilibrio muscular y fatiga de largas horas en posición",
      "Subluxación preexistente que predispone a la lesión",
      "Estrés laboral psicológico exacerbando la tensión musculoesquelética",
      "Falta de reposo o modificación de actividad después de la lesión",
    ],
    chiropracticTreatment: "Dr. Foss provides comprehensive musculoskeletal evaluation, treatment, and documentation for occupational injuries. SOT protocols restore spinal alignment and nerve function impaired by the injury mechanism. SoftWave therapy accelerates soft tissue healing and reduces post-traumatic inflammation. Functional rehabilitation guidance supports safe return to full work capacity. Dr. Foss has experience working with workers' compensation cases and can provide the clinical documentation required for insurance and legal purposes.",
    chiropracticTreatmentEs: "El Dr. Foss proporciona evaluación inmediata de lesiones laborales agudas, documentación para fines de compensación, y tratamiento focado para restaurar la función. Los ajustes quiroprácticos alinean las vértebras subluxadas, reduciendo el dolor y permitiendo la curación. Los protocolos de tejido blando, la terapia láser y los ejercicios de rehabilitación específicos restauran la fuerza y estabilidad. El Dr. Foss trabaja con abogados de compensación de trabajadores y proveedores de seguros para asegurar que los pacientes reciban el cuidado continuo necesario para una recuperación completa.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "repetitive-strain-injury",
    title: "Repetitive Strain Injury",
    titleEs: "Lesión por Esfuerzo Repetitivo",
    image: "/images/conditions/tendonitis.jpg",
    metaDescription: "Repetitive strain injury treatment San Antonio TX. SOT chiropractic and SoftWave therapy address the biomechanical and neurological causes of RSI affecting wrists, elbows, and shoulders.",
    metaDescriptionEs: "Tratamiento de lesión por esfuerzo repetitivo en San Antonio TX. Quiropráctica SOT y SoftWave para las causas biomecánicas y neurológicas de las LER en muñecas, codos y hombros.",
    intro: "Repetitive strain injuries from keyboard use, assembly line work, or sports accumulate in tendons, muscles, and nerves. A combined approach addressing both the local injury and the spinal biomechanics driving it achieves lasting results.",
    introEs: "Las lesiones por esfuerzo repetitivo (RSI) son trastornos del tejido blando causados por movimiento repetitivo. La quiropráctica aborda la biomecánica deficiente y restaura la función.",
    whatIs: "Repetitive strain injury (RSI) is an umbrella term for musculoskeletal conditions caused by repetitive movements, sustained postures, or awkward positions. Common RSIs include carpal tunnel syndrome, cubital tunnel syndrome, medial and lateral epicondylitis, rotator cuff tendinopathy, and cervicobrachial syndrome. The repetitive loading exceeds tissue repair capacity, leading to cumulative microtrauma. Cervical spine subluxation frequently contributes by compressing the nerve roots supplying the affected extremity — increasing nerve susceptibility to compression at distal sites (double crush syndrome).",
    whatIsEs: "Las lesiones por esfuerzo repetitivo (RSI) son daños acumulativos en músculos, tendones, nervios y ligamentos resultantes de movimiento repetitivo de alto impacto sin descanso adecuado. El trabajo de oficina moderno, el uso del teléfono móvil, la digitación intensiva y los trabajos de línea de producción son desencadenantes comunes. Aunque a menudo se consideran problemas de \"desgaste y desgarre\" puramente locales, la mayoría de los RSI tienen una causa biomecánica espinal subyacente — subluxación cervical o torácica que afecta la inervación del miembro afectado y causa compensación muscular, mala postura y desequilibrio.",
    symptoms: [
      "Gradual onset pain, aching, or burning in the affected area",
      "Stiffness and reduced strength in the extremity",
      "Numbness or tingling in the fingers or hands",
      "Symptoms worsening during or after activity and improving with rest",
      "Swelling and tenderness in tendons or muscle attachment points",
      "Progressive limitation of work capacity",
    ],
    symptomsEs: [
      "Dolor progresivo en el área afectada durante o después del trabajo",
      "Entumecimiento, hormigueo u hormigueo en la mano o brazo",
      "Rigidez matutina que mejora con movimiento",
      "Debilidad de agarre o dificultad con tareas finas",
      "Síntomas que se resuelven con reposo pero regresan con actividad",
      "Inflamación visible o tumefacción crónica",
    ],
    causes: [
      "Repetitive movements exceeding tissue recovery capacity",
      "Cervical subluxation creating proximal nerve compression (double crush)",
      "Poorly designed workstation ergonomics",
      "Sustained awkward postures during prolonged tasks",
      "Inadequate recovery time between repetitive loading cycles",
      "Pre-existing tissue vulnerability from prior injury",
    ],
    causesEs: [
      "Subluxación cervical o torácica afectando los nervios de la extremidad",
      "Biomecánica deficiente de la estación de trabajo o postura de trabajo",
      "Desequilibrio muscular de disfunción espinal subyacente",
      "Microtraumatismo repetitivo sin períodos de reposo suficientes",
      "Tensión postural crónica en los hombros, cuello y espalda superior",
      "Uso prolongado de teléfono móvil, teclado o herramientas de vibración",
    ],
    chiropracticTreatment: "The 'double crush' concept — where cervical nerve compression proximal to a peripheral entrapment amplifies the peripheral injury — explains why treating the wrist or elbow alone often fails. Dr. Foss evaluates and treats the full kinetic chain: cervical spine, thoracic outlet, elbow, and wrist. Cervical corrections reduce the proximal neural burden. SoftWave therapy accelerates soft tissue healing at the local injury site. Ergonomic modification guidance and activity pacing prevent recurrence. This comprehensive approach resolves RSI where isolated local treatment has failed.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación espinal, la postura y el patrón de movimiento para identificar la causa biomecánica del RSI. La corrección espinal específica, combinada con ergonomía mejorada de la estación de trabajo, liberación de tejido blando y ejercicios de fortalecimiento y estiramiento, resuelve la mayoría de los RSI. La educación sobre micro-pausas, cambios de postura y manejo de la carga es crítica para prevenir la recurrencia. Muchos pacientes notan mejora significativa dentro de 4-6 semanas de cuidado consistente.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "text-neck",
    title: "Text Neck",
    titleEs: "Cuello de Texto",
    image: "/images/conditions/text-neck.jpg",
    metaDescription: "Text neck treatment San Antonio TX. SOT chiropractic corrects the forward head posture, cervical curve reversal, and nerve compression caused by prolonged phone and screen use.",
    metaDescriptionEs: "Tratamiento del cuello de texto en San Antonio TX. Quiropráctica SOT para corregir la postura de cabeza adelantada, la inversión de la curva cervical y la compresión nerviosa por pantallas.",
    intro: "Text neck — the posture damage from chronic phone and screen use — creates significant cervical spine degeneration over time. Early chiropractic correction can reverse the damage before it becomes permanent.",
    introEs: "El \"text neck\" es la tensión del cuello causada por mirar hacia abajo durante el uso prolongado del teléfono móvil. La corrección quiropráctica restaura la postura cervical normal.",
    whatIs: "Text neck describes the cervical spine damage caused by prolonged forward head posture from smartphone, tablet, and computer use. Every inch the head moves forward from its balanced position adds approximately 10 pounds of effective weight on the cervical spine. At 45-degree forward tilt (typical phone use angle), the effective load becomes 49 pounds. This chronic overloading accelerates disc degeneration, reverses the natural cervical lordosis, stretches the posterior ligaments and muscles, and compresses anterior disc structures and nerve roots.",
    whatIsEs: "El \"text neck\" (cuello de texto) es un síndrome postural causado por la flexión cervical prolongada mientras se mira hacia abajo en dispositivos móviles. Cuando la cabeza se inclina hacia adelante 45 grados, la columna cervical soporta fuerzas equivalentes a 48 libras (22 kg), en lugar de solo el peso de la cabeza (10-12 libras). La repetición diaria de esta postura causa subluxación cervical progresiva, debilitamiento de los músculos estabilizadores del cuello y cifosis cervical. Esto resulta en dolor de cuello, dolores de cabeza, compresión de nervios y cambios degenerativos acelerados.",
    symptoms: [
      "Chronic neck pain and stiffness, especially at the base of the skull",
      "Upper back and shoulder muscle tension and pain",
      "Forward head posture visible in side-view photographs",
      "Headaches starting at the back of the neck",
      "Arm numbness or tingling from cervical nerve compression",
      "Fatigue in neck and shoulder muscles with prolonged screen use",
    ],
    symptomsEs: [
      "Dolor de cuello crónico centrado en las vértebras cervicales inferiores",
      "Rigidez del cuello, especialmente por la mañana",
      "Dolores de cabeza en la base del cráneo",
      "Dolor de hombros y escápulas por desequilibrio muscular",
      "Síntomas que empeoran después de uso prolongado del teléfono o computadora",
      "Rango de movimiento del cuello reducido",
    ],
    causes: [
      "Prolonged smartphone, tablet, and computer use with forward head position",
      "Loss of cervical lordosis from sustained flexion posture",
      "Posterior cervical muscle fatigue and anterior ligament shortening",
      "Accelerated cervical disc degeneration from abnormal loading",
      "Cervical subluxation from sustained postural stress",
      "Occupational screen use extending forward head posture for hours daily",
    ],
    causesEs: [
      "Flexión cervical prolongada desde uso de dispositivos móviles",
      "Postura de cabeza adelantada de los hábitos de trabajo de computadora",
      "Debilitamiento de los músculos del cuello y espalda superior por sedentarismo",
      "Subluxación cervical inferior progresiva de la carga postural crónica",
      "Falta de estiramiento o períodos de descanso durante el uso del dispositivo",
      "Cifosis torácica acompañante del hombro encorvado",
    ],
    chiropracticTreatment: "SOT cervical correction restores the natural lordotic curve of the neck, reduces forward head posture, and decompresses the anterior cervical disc structures. Dr. Foss uses extension traction and specific cervical mobilization to reverse curve loss while correcting vertebral subluxations. Thoracic spine adjustments address the upper back rounding that accompanies forward head posture. Patients receive guidance on screen ergonomics, positioning, and specific exercises that reinforce cervical curve restoration between visits. Early treatment achieves more complete structural correction.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación cervical y las curvaturas espinales, a menudo usando radiografías para medir la cifosis del cuello. Los ajustes cervicales específicos SOT, combinados con ejercicios de postura del cuello, fortalecimiento del cuello posterior y educación sobre ergonomía del dispositivo móvil, restauran la alineación cervical normal. La terapia láser y los protocolos de tejido blando alivian la inflamación. El cambio de hábito postural es crítico para prevenir la recurrencia.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "cervicogenic-headaches",
    title: "Cervicogenic Headaches",
    titleEs: "Cefaleas Cervicogénicas",
    image: "/images/conditions/cervicogenic-headaches.jpg",
    metaDescription: "Cervicogenic headache treatment San Antonio TX. Upper cervical SOT correction addresses the C1-C3 dysfunction causing referred headache pain — the most directly treatable headache type.",
    metaDescriptionEs: "Tratamiento de cefaleas cervicogénicas en San Antonio TX. Corrección cervical alta SOT para la disfunción C1-C3 que causa cefaleas referidas desde el cuello.",
    intro: "Cervicogenic headaches originate in the upper cervical spine — C1, C2, or C3 dysfunction refers pain into the head. This is the most directly treatable headache type with upper cervical chiropractic correction.",
    introEs: "Los dolores de cabeza cervicogénicos se originan en las estructuras del cuello, no en el cerebro. La corrección quiropráctica del cuello resuelve la causa raíz.",
    whatIs: "Cervicogenic headaches are caused by dysfunction of the upper cervical joints (C1-C3) referring pain into the head through the trigeminocervical complex. The convergence of trigeminal and upper cervical nerve signals in the brainstem means that upper cervical joint irritation can produce pain anywhere in the head and face. These headaches are unilateral, originating at the back of the neck and radiating forward to the forehead, temple, or eye. They are frequently misdiagnosed as migraine or tension headache and treated with medications that address the symptom but not the structural cause.",
    whatIsEs: "Los dolores de cabeza cervicogénicos (CDH) son dolores de cabeza causados directamente por disfunción de las vértebras cervicales superiores, articulaciones facetarias, discos o músculosligamentos. A diferencia de otros tipos de dolores de cabeza, el CDH verdadero tiene una fuente mecánica en el cuello — típicamente subluxación de C1-C3, irritación de la raíz C2, o irritación muscular de C2-C3. Los nervios cervicales comparten conexiones con el sistema trigeminial (responsable del dolor de cabeza), por lo que la disfunción cervical irradía directamente como dolor de cabeza. El CDH responde excelentemente a la corrección quiropráctica.",
    symptoms: [
      "Unilateral head pain starting at the back of the neck and radiating forward",
      "Neck stiffness and restricted rotation on the painful side",
      "Pain triggered by sustained postures or neck movements",
      "Referred pain to the shoulder or arm on the same side",
      "Reduced cervical range of motion",
      "Tenderness on palpation of C1-C3 joints",
    ],
    symptomsEs: [
      "Dolor de cabeza unilateral, a menudo en el lado de la subluxación cervical",
      "Origen del dolor en la base del cráneo o cuello superior",
      "Dolor que empeora con movimientos del cuello o ciertos ángulos de cabeza",
      "A menudo acompañado de rigidez del cuello",
      "Síntomas que mejoran con tracción cervical suave o movilización",
      "Sin características migrañosas (sin náusea, fotosensibilidad como las migrañas)",
    ],
    causes: [
      "Subluxation of C1, C2, or C3 irritating the upper cervical nerve roots",
      "Zygapophyseal (facet) joint arthropathy at the upper cervical levels",
      "Myofascial trigger points in the suboccipital and cervical muscles",
      "Prior neck trauma — whiplash, concussion, or direct blow",
      "Forward head posture chronically loading the upper cervical joints",
      "Occupation requiring sustained cervical flexion or rotation",
    ],
    causesEs: [
      "Subluxación de C1-C3 comprimiendo o irritando las raíces nerviosas cervicales",
      "Síndrome facetario cervical de la disfunción articular C2-C3",
      "Rigidez muscular suboccipital o de los erectores espinales cervicales",
      "Irritación de la duramadre de la alineación espinal pobre",
      "Traumatismo cervical previo o latigazo cervical sin resolución completa",
      "Postura de cabeza adelantada de los hábitos de trabajo de pantalla",
    ],
    chiropracticTreatment: "Upper cervical correction is the most direct and effective treatment for cervicogenic headaches — addressing the structural cause rather than masking symptoms. Dr. Foss uses palpation and motion analysis to identify the specific restricted or subluxated upper cervical segments and applies targeted SOT corrections to restore normal joint mechanics. The trigeminocervical reflex is normalized, and referred head pain resolves. Most patients with confirmed cervicogenic headaches experience dramatic improvement within the first few visits. Sustained improvement requires correcting the postural drivers of recurrent upper cervical dysfunction.",
    chiropracticTreatmentEs: "El Dr. Foss realiza una evaluación neurológica cervical exhaustiva y neuroimagen si es necesario para confirmar la causa mecánica cervical del dolor de cabeza. Luego utiliza la Técnica Sacro-Occipital (SOT) para corregir específicamente la subluxación cervical superior, restaurando el movimiento articular normal y aliviando la compresión o irritación del nervio. Los protocolos de tejido blando, la movilización articular y los ejercicios de postura apoyan la curación completa. La mayoría de los pacientes notan mejora significativa dentro de 4-6 semanas.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "osteoporosis-support",
    title: "Osteoporosis Support",
    titleEs: "Apoyo para Osteoporosis",
    image: "/images/conditions/osteoporosis-support.jpg",
    metaDescription: "Osteoporosis support chiropractic San Antonio TX. Gentle SOT protocols improve spinal mechanics and balance in osteoporotic patients, reducing fracture risk and maintaining mobility.",
    metaDescriptionEs: "Quiropráctica para osteoporosis en San Antonio TX. Protocolos SOT suaves para mejorar la mecánica espinal y el equilibrio en pacientes con osteoporosis, reduciendo el riesgo de fractura.",
    intro: "Osteoporosis requires gentle, specialized chiropractic care — not high-velocity manipulation. Dr. Foss uses low-force SOT protocols that safely improve spinal mechanics, balance, and quality of life for osteoporotic patients.",
    introEs: "La osteoporosis es el debilitamiento del hueso que aumenta el riesgo de fractura. La quiropráctica mejora la densidad ósea a través de la carga mecánica de los ajustes y la mejora de la función neuromuscular.",
    whatIs: "Osteoporosis is a systemic metabolic condition characterized by reduced bone mineral density and structural bone deterioration, increasing fracture risk. The spine is particularly vulnerable — compression fractures of the vertebral bodies cause progressive kyphosis, height loss, and chronic pain. Standard chiropractic manipulation is contraindicated in severe osteoporosis, but gentle low-force SOT techniques are safe and effective. The goal is to improve spinal biomechanics, reduce pain, enhance balance to prevent falls, and support overall musculoskeletal health.",
    whatIsEs: "La osteoporosis es una condición en la que la densidad mineral ósea disminuye, dejando los huesos porosos y frágiles. Aunque a menudo vinculada solo con la deficiencia de calcio, la realidad es más compleja — el sistema nervioso regula directamente la remodelación ósea. La inervación espinal normal, la carga mecánica adecuada en las vértebras, y el tono muscular equilibrado son críticos para mantener la densidad ósea. La subluxación crónica reduce la estimulación mecánica del hueso vertebral, acelerando la pérdida ósea. La corrección quiropráctica consistente proporciona carga mecánica terapéutica que estimula la densidad ósea.",
    symptoms: [
      "Back pain from vertebral compression fractures",
      "Progressive loss of height over time",
      "Increasing thoracic kyphosis (dowager's hump)",
      "Stooped posture and difficulty standing upright",
      "Reduced balance and increased fall risk",
      "Fragility fractures from minor trauma",
    ],
    symptomsEs: [
      "A menudo sin síntomas hasta que ocurre fractura",
      "Pérdida de altura progresiva o cifosis (cifosis de viuda)",
      "Dolor de espalda de fracturas por compresión vertebral",
      "Limitación de la movilidad o rango de movimiento del cuello",
      "Mayor fragilidad o miedo a caídas",
      "En pruebas de densidad ósea: puntuación T de -2.5 o inferior",
    ],
    causes: [
      "Age-related decline in bone turnover favoring resorption",
      "Estrogen deficiency in postmenopausal women",
      "Sedentary lifestyle reducing bone-loading mechanical stimulus",
      "Nutritional deficiencies — calcium, vitamin D, magnesium",
      "Long-term steroid medication use",
      "Smoking and excessive alcohol consumption",
    ],
    causesEs: [
      "Deficiencia de estrógeno peri y postmenopáusica acelerando la pérdida ósea",
      "Ingesta insuficiente de calcio y vitamina D",
      "Sedentarismo reduciendo la estimulación mecánica del hueso",
      "Subluxación crónica reduciendo la inervación y carga mecánica vertebral",
      "Inflamación sistémica crónica de estrés o desequilibrio metabólico",
      "Medicamentos como corticosteroides que afectan la densidad ósea",
    ],
    chiropracticTreatment: "Dr. Foss has specific training in low-force techniques appropriate for patients with osteoporosis. SOT pelvic blocking requires no high-velocity thrust and safely corrects pelvic and lumbar mechanics. Gentle mobilization addresses thoracic hyperkyphosis, improves rib cage mechanics, and reduces the respiratory limitations caused by progressive kyphosis. Balance training and fall prevention guidance are integrated into care. Patients with osteoporosis can safely receive chiropractic care and benefit from improved spinal function, reduced pain, and greater confidence in their movement.",
    chiropracticTreatmentEs: "El Dr. Foss utiliza ajustes quiroprácticos específicos para proporcionar carga mecánica terapéutica que estimula la remodelación ósea y aumenta la densidad mineral ósea. Los ajustes consisten en movimiento ortopédico controlado y fuerzas de compresión que estimulan los osteoblastos (células formadoras de hueso). Los estudios documentan que los pacientes que reciben ajustes quiroprácticos consistentes tienen una densidad ósea vertebral significativamente mayor que los controles no ajustados. Se recomienda evaluación de densidad ósea basal y monitoreo periódico. Los suplementos de calcio/vitamina D y el ejercicio de carga de peso complementan el cuidado quiropráctico.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "costochondritis",
    title: "Costochondritis",
    titleEs: "Costocondritis",
    image: "/images/conditions/costochondritis.jpg",
    metaDescription: "Costochondritis treatment San Antonio TX. Thoracic and rib chiropractic adjustments with SOT protocols resolve the joint and cartilage inflammation causing chest wall pain at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento de costocondritis en San Antonio TX. Ajustes torácicos y costales SOT para resolver la inflamación del cartílago costal que causa dolor en la pared torácica.",
    intro: "Costochondritis — inflammation where the ribs meet the sternum — causes chest pain that can mimic cardiac symptoms. Thoracic spine and rib chiropractic correction resolves most cases that anti-inflammatories cannot.",
    introEs: "La costocondritis es la inflamación de la unión entre las costillas y el esternón. La corrección quiropráctica aborda la causa torácica subyacente.",
    whatIs: "Costochondritis is inflammation of the costal cartilage — the cartilage connecting the ribs to the sternum. It causes localized chest wall tenderness and pain that can mimic cardiac chest pain, causing significant patient anxiety. The pain is typically reproducible on palpation and worsens with deep breathing, coughing, or specific trunk movements. Thoracic spine subluxation and rib head dysfunction are frequent structural contributors — abnormal rib mechanics stress the costochondral junction. Posterior rib head corrections relieve tension on the anterior cartilage.",
    whatIsEs: "La costocondritis es la inflamación de los cartílagos costocondales — las uniones entre las costillas óseas y el esternón cartilaginoso en la parte anterior del pecho. Aunque a menudo atribuida a \"inflamación idiopática\" o traumatismo menor, la mayoría de los casos resultan de subluxación vertebral torácica que causa desequilibrio muscular y movimiento anormal de la caja torácica. Cuando las costillas no se mueven normalmente con la respiración, el cartílago costocondral sufre estrés mecánico anormal, desencadenando inflamación. La corrección espinal torácica restaura el movimiento costal normal.",
    symptoms: [
      "Sharp or aching chest wall pain, usually on the left side",
      "Pain worsening with deep breathing, coughing, or sneezing",
      "Tenderness on direct palpation of the costochondral junctions",
      "Pain aggravated by leaning forward or certain arm movements",
      "Multiple affected ribs in some cases",
      "Pain misinterpreted as a cardiac event due to chest location",
    ],
    symptomsEs: [
      "Dolor en la parte anterior del pecho a lo largo de los bordes esternales",
      "Dolor que empeora con la respiración profunda, la tos o los movimientos del pecho",
      "Sensibilidad a la palpación de las uniones costocondales",
      "Hinchazón visible o tumefacción de los cartílagos costales",
      "Síntomas que se asemejan al dolor cardíaco, causando ansiedad",
      "Dolor que mejora con reposo pero recurre con actividad",
    ],
    causes: [
      "Thoracic subluxation creating abnormal rib mechanics",
      "Rib head dysfunction stressing the anterior cartilage",
      "Upper respiratory infection with repeated coughing",
      "Trauma to the chest wall",
      "Repetitive upper extremity movements stressing rib attachments",
      "Inflammatory conditions — fibromyalgia, rheumatoid arthritis",
    ],
    causesEs: [
      "Subluxación vertebral torácica causando desequilibrio muscular intercostal",
      "Movimiento anormal de la caja torácica de la disfunción costovertebral",
      "Traumatismo previo de pecho o lesión por caída",
      "Respiración paradójica de estrés postural crónico",
      "Tos prolongada de enfermedad respiratoria",
      "Postura de hombros encorvados causando sobrecarga costal",
    ],
    chiropracticTreatment: "Posterior rib head mobilization and thoracic spine adjustments are the primary chiropractic approaches for costochondritis. By restoring normal rib motion and thoracic mechanics, the abnormal stress on the anterior costochondral junction is relieved. Dr. Foss addresses the specific thoracic segments driving the rib dysfunction — typically T2-T7 — and uses gentle rib mobilization techniques that restore the posterior costotransverse joint motion. Most patients experience significant improvement in chest wall pain within a few visits, with resolution of the pain on deep breathing a reliable early indicator of improvement.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación torácica y la mecánica costovertebral, a menudo palpando para reproducir la sensibilidad costocondral. Los ajustes torácicos específicos y la movilización de las costillas restauran el movimiento costal normal durante la respiración. La liberación de tejido blando de los músculos intercostales, la terapia láser y los ejercicios respiratorios adecuados alivian la inflamación. Muchos pacientes notan alivio del dolor del pecho dentro de 2-4 semanas.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "balance-disorders",
    title: "Balance Disorders",
    titleEs: "Trastornos del Equilibrio",
    image: "/images/conditions/balance-disorders.jpg",
    metaDescription: "Balance disorder treatment San Antonio TX. SOT cranial adjusting and upper cervical correction address the proprioceptive and vestibular dysfunction driving chronic balance problems.",
    metaDescriptionEs: "Tratamiento de trastornos del equilibrio en San Antonio TX. Ajuste craneal SOT y corrección cervical alta para la disfunción propioceptiva y vestibular que causa problemas de equilibrio.",
    intro: "Balance disorders have multiple contributing causes — vestibular dysfunction, upper cervical proprioceptive impairment, and cranial distortions. SOT cranial adjusting addresses the neurological causes of chronic balance problems.",
    introEs: "Los trastornos del equilibrio resultan de disfunción del sistema vestibular o de la mecánica cervical superior. La quiropráctica restaura la estabilidad postural.",
    whatIs: "Balance depends on the integration of three sensory systems: the vestibular system (inner ear), visual input, and proprioception (spinal joint position sense). Disorders in any of these systems — or their central nervous system integration — disrupt balance. Upper cervical proprioception is a major input to the balance control centers; C1-C2 subluxation significantly impairs the proprioceptive signal quality. Cranial distortions affecting the temporal bones disturb inner ear mechanics. SOT chiropractic addresses both of these structural contributors simultaneously.",
    whatIsEs: "El equilibrio es mantenido por un sistema complejo que incluye el sistema vestibular del oído interno, la propiocepción espinal (conciencia de posición), el sistema visual y la inervación motora. Aunque a menudo se culpa al oído interno, la mayoría de los trastornos del equilibrio adquirido resultan de subluxación cervical superior que interfiere con la propiocepción cervical o afecta el flujo sanguíneo intracraneal al sistema vestibular. Los receptores de presión en las articulaciones cervicales C1-C2 son densamente inervados y envían entrada sensorial crítica para el control postural. La subluxación disminuye esta entrada, resultando en marcha inestable, vértigo o sensación de flotación.",
    symptoms: [
      "Unsteadiness and difficulty walking on uneven surfaces",
      "Tendency to fall or stumble, especially in the dark",
      "Dizziness or lightheadedness with position changes",
      "Difficulty standing on one foot or with eyes closed",
      "Spatial disorientation",
      "Falls in elderly patients with significant injury risk",
    ],
    symptomsEs: [
      "Marcha inestable o insegura",
      "Sensación de vértigo o mareo, especialmente al cambiar de posición",
      "Sensación de flotación o estar \"fuera del centro\"",
      "Dificultad para caminar en línea recta o en la oscuridad",
      "Mayor riesgo de caídas o tropiezos",
      "Síntomas que empeoran con movimientos rápidos de cabeza",
    ],
    causes: [
      "Upper cervical subluxation impairing proprioceptive input to balance centers",
      "Temporal bone distortion affecting inner ear mechanics",
      "Vestibular nerve dysfunction from prior infection or trauma",
      "Cerebellar or brainstem dysfunction in more complex cases",
      "Medication side effects — particularly antihypertensives and sedatives",
      "Peripheral neuropathy reducing foot proprioception",
    ],
    causesEs: [
      "Subluxación cervical superior interfiriendo con la propiocepción cervical",
      "Reducción del flujo sanguíneo vertebral al sistema vestibular",
      "Tensión postural dural de la alineación espinal pobre",
      "Debilitamiento del núcleo o músculos estabilizadores de cadera de la inactividad",
      "Enfermedad vestibular periférica primaria",
      "Neuropatía o déficit sensorial de otras causas",
    ],
    chiropracticTreatment: "Upper cervical SOT correction dramatically improves proprioceptive input quality from the cervical spine — normalizing the balance signal that C1-C2 provides to the cerebellum. Temporal bone cranial adjusting restores normal inner ear mechanics and vestibular function. Many patients with long-standing balance disorders experience rapid improvement in steadiness and confidence following their first few adjustments. For patients with fall risk, Dr. Foss integrates proprioceptive training exercises to reinforce the neurological improvements from chiropractic care.",
    chiropracticTreatmentEs: "El Dr. Foss realiza pruebas vestibulares cervicales específicas para determinar si la causa del trastorno del equilibrio es espinal o vestibular periférica. Si es espinal, los ajustes cervicales superiores SOT restauran la propiocepción cervical normal y el flujo sanguíneo vertebral. Los ejercicios propioceptivos y el entrenamiento del equilibrio aceleran la recuperación. Si se sospecha enfermedad vestibular periférica, la maniobra de reposicionamiento de partículas (Epley) o la rehabilitación vestibular pueden ser apropiadas. La mayoría de los pacientes notan mejora dentro de 3-6 semanas.",
    additionalTreatments: [],
  },

  {
    slug: "numbness-tingling",
    title: "Numbness & Tingling",
    titleEs: "Entumecimiento y Hormigueo",
    image: "/images/conditions/numbness-tingling.jpg",
    metaDescription: "Numbness and tingling treatment San Antonio TX. SOT chiropractic identifies the spinal or peripheral nerve source of numbness and tingling and corrects the structural cause for lasting relief.",
    metaDescriptionEs: "Tratamiento de entumecimiento y hormigueo en San Antonio TX. Quiropráctica SOT para identificar y corregir la causa espinal o nerviosa periférica del entumecimiento.",
    intro: "Numbness and tingling in the hands, arms, feet, or legs almost always indicate nerve compression somewhere along the pathway from the spine to the extremity. SOT chiropractic identifies and corrects the source.",
    introEs: "El entumecimiento y el hormigueo resultan de compresión o irritación del nervio. La corrección quiropráctica alivia la presión y restaura la función nerviosa.",
    whatIs: "Numbness and tingling (paresthesia) are symptoms of nerve compression or irritation at any point along the neural pathway — from the spinal cord and nerve roots to peripheral nerves in the extremities. The pattern of symptoms accurately identifies the location: dermatomal distribution points to specific nerve roots, while the median nerve distribution (index finger, thumb) suggests carpal tunnel. Spinal nerve root compression from disc pathology, subluxation, or foraminal stenosis is the most common cause. Cervical subluxation causing arm tingling and lumbar subluxation causing leg numbness are frequently and quickly resolved with chiropractic correction.",
    whatIsEs: "El entumecimiento (parestesias) y el hormigueo (disestesias) son síntomas de compresión o irritación del nervio, donde el nervio no puede transmitir señales sensoriales normalmente. Pueden resultar de subluxación directa comprimiendo un nervio que sale de la médula espinal (radiculopatía), síndrome de túnel (como síndrome del túnel carpiano), o irritación nerviosa difusa de inflamación o estrés del nervio. La ubicación del entumecimiento (patrón de distribución) indica qué nervio está involucrado. La causa subyacente es típicamente subluxación espinal que afecta la raíz o el tronco nerviosos.",
    symptoms: [
      "Numbness, pins-and-needles, or tingling in the hands, arms, feet, or legs",
      "Symptoms following a specific nerve distribution pattern",
      "Weakness accompanying numbness in the affected area",
      "Symptoms worsening with specific postures or movements",
      "Numbness that wakes the patient at night",
      "Associated neck or back pain at the compression site",
    ],
    symptomsEs: [
      "Entumecimiento u hormigueo en patrón específico de distribución nerviosa",
      "Síntomas que se desarrollan gradualmente o comienzan tras lesión",
      "Síntomas que empeoran con ciertos movimientos o posiciones",
      "Debilidad motriz menor si el nervio motor está afectado",
      "Síntomas que mejoran después de ajustes quiroprácticos",
      "A menudo peor después de período de inactividad",
    ],
    causes: [
      "Cervical disc herniation compressing upper extremity nerve roots",
      "Lumbar disc herniation compressing lower extremity nerve roots",
      "Thoracic outlet syndrome compressing the brachial plexus",
      "Carpal tunnel syndrome compressing the median nerve at the wrist",
      "Peripheral neuropathy from diabetes or nutritional deficiency",
      "Double crush — proximal and distal nerve compression occurring simultaneously",
    ],
    causesEs: [
      "Subluxación vertebral comprimiendo la raíz nerviosa que sale",
      "Hernia discal presionando el nervio directamente",
      "Síndrome de atrapamiento nervioso (túnel carpiano, síndrome del túnel cubital, etc.)",
      "Inflamación periférica de irritación crónica del nervio",
      "Subluxación cervical superior afectando la inervación de la extremidad",
      "Cicatrización epidural de lesión anterior o cirugía",
    ],
    chiropracticTreatment: "Dr. Foss performs a systematic neurological examination to identify the level and mechanism of nerve compression causing the numbness and tingling. SOT spinal corrections at the identified levels decompress the nerve roots and restore normal neural function. The double-crush syndrome — where cervical compression amplifies peripheral entrapment — is evaluated and addressed comprehensively. Most patients experience improvement in tingling within the first few visits as nerve root pressure is relieved. Complete resolution of numbness may take longer as nerve healing is gradual.",
    chiropracticTreatmentEs: "El Dr. Foss realiza una evaluación neurológica exhaustiva para localizar exactamente qué nervio está comprimido o irritado, luego identifica la causa mecánica. Los ajustes quiroprácticos específicos alivian la compresión, los protocolos de decompresión terapéutica amplían el espacio del nervio, y la liberación de tejido blando reduce la inflamación local. Los ejercicios de movilidad neural mejoran el deslizamiento del nervio. Muchos pacientes notan resolución del entumecimiento y el hormigueo dentro de 4-8 semanas de cuidado enfocado.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bruxism",
    title: "Bruxism (Jaw Clenching)",
    titleEs: "Bruxismo (Apretar los Dientes)",
    image: "/images/conditions/bruxism.jpg",
    metaDescription: "Bruxism treatment San Antonio TX. SOT cranial adjusting addresses the craniosacral imbalances and upper cervical tension driving jaw clenching and teeth grinding at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento del bruxismo en San Antonio TX. Ajuste craneal SOT para las tensiones craneosakrales y cervicales que impulsan el apretamiento de dientes y la mandíbula.",
    intro: "Bruxism — teeth grinding and jaw clenching — is commonly driven by craniosacral imbalance and upper cervical tension, not just stress. SOT cranial adjusting provides a structural solution that dentistry alone cannot.",
    introEs: "El bruxismo (rechinar de dientes) es causado por estrés y disfunción neuromuscular. La corrección quiropráctica reduce la tensión y normaliza la función del ATM.",
    whatIs: "Bruxism is involuntary teeth grinding or jaw clenching occurring most commonly during sleep. While stress and anxiety are well-known triggers, the structural component is frequently overlooked: temporal bone distortion and sphenobasilar dysfunction create abnormal neuromuscular tension in the temporomandibular joint and masseter muscles. Upper cervical subluxation contributes through reflex hypertension of the jaw muscles. Craniosacral imbalance — particularly occipital and sphenoid restrictions — can drive chronic bruxism independently of psychological state.",
    whatIsEs: "El bruxismo es el rechinamiento involuntario o apretamiento de los dientes, típicamente durante el sueño (bruxismo del sueño) pero a veces también durante el día bajo estrés. Aunque a menudo atribuido únicamente al estrés psicológico o a una \"mala mordida\", la investigación moderna sugiere que la disfunción neuromuscular es un factor importante. La subluxación cervical superior afecta la inervación del núcleo motor trigémino, la vía que controla los músculos de masticación. El desequilibrio muscular del cuello/mandíbula, la mala alineación de la ATM y la respuesta de lucha-o-huida aumentada por la subluxación contribuyen todos al bruxismo.",
    symptoms: [
      "Tooth wear, chipping, or flattening visible on dental examination",
      "Morning jaw pain, stiffness, and soreness",
      "Tension headaches starting at the temples",
      "Facial pain and fatigue of jaw muscles",
      "Sleep disturbance from teeth grinding",
      "TMJ clicking, popping, or locking",
    ],
    symptomsEs: [
      "Rechinamiento audible de dientes durante el sueño",
      "Desgaste visible de la superficie de los dientes",
      "Dolor de mandíbula o disfunción temporomandibular (ATM)",
      "Dolores de cabeza por la mañana de la tensión muscular",
      "Síntomas de ATM como chasquido o limitación de la apertura",
      "Tensión en los músculos de la masticación",
    ],
    causes: [
      "Craniosacral imbalance — temporal, sphenoid, and occipital distortions",
      "Upper cervical subluxation creating reflex jaw muscle tension",
      "Psychological stress and anxiety",
      "Malocclusion — dental bite problems",
      "Sleep disorders, particularly obstructive sleep apnea",
      "Certain medications — SSRIs, stimulants",
    ],
    causesEs: [
      "Subluxación cervical superior afectando la inervación del trigémino",
      "Estrés y respuesta simpática elevada de presión de la vida",
      "Mala alineación de la ATM de subluxación mandibular o maxilar",
      "Desequilibrio muscular del cuello y el escaleno contribuyendo a la tensión de masticación",
      "Sueño perturbado o apnea del sueño",
      "Hábitos de masticación como mascar chicle o hielo",
    ],
    chiropracticTreatment: "Cranial adjusting specifically targeting the temporal bones, sphenoid, and occiput normalizes the craniosacral rhythm and reduces the structural drivers of jaw muscle hypertonicity. Dr. Foss works in close coordination with the TMJ and the temporal bones — which house the temporomandibular joint — to restore balanced mechanics. Upper cervical corrections eliminate the reflex tension contributing to nighttime clenching. Many patients report that after a few cranial adjustments, they wake without jaw pain and their dentist notices reduced tooth wear. This structural approach complements dental night guards without making teeth grinding permanently dependent on an appliance.",
    chiropracticTreatmentEs: "El Dr. Foss evalúa la alineación cervical superior y la función de la ATM, tratando cualquier subluxación cervical o mandibular. Los ajustes SOT cervicales superiores normalizan la inervación trigémina. La liberación de tejido blando de los músculos de la masticación (masetero, temporal) y los músculos del cuello, combinada con educación sobre manejo del estrés y técnicas de relajación, reduce significativamente el bruxismo. Muchos pacientes notan menos rechinamiento dentro de 3-4 semanas de cuidado consistente.",
    additionalTreatments: [],
  },

  {
    slug: "allergies",
    title: "Allergies",
    titleEs: "Alergias",
    image: "/images/conditions/allergies.jpg",
    metaDescription: "Allergy relief through chiropractic care San Antonio TX. SOT spinal correction and CMRT protocols support nervous system regulation of immune function and reduce allergic reactivity.",
    metaDescriptionEs: "Alivio de alergias con quiropráctica en San Antonio TX. Corrección espinal SOT y CMRT para apoyar la regulación nerviosa de la función inmune y reducir la reactividad alérgica.",
    intro: "Allergic reactivity is regulated by the nervous system. Spinal subluxation disrupts this regulation — many patients experience significant reduction in allergy symptoms following chiropractic spinal correction.",
    introEs: "Las alergias resultan de disfunción del sistema inmunológico. La quiropráctica mejora el control inmunológico a través de la corrección espinal que normaliza la inervación.",
    whatIs: "Allergies represent an inappropriate immune response to harmless environmental substances. The nervous system — through hypothalamic-pituitary-adrenal axis regulation and direct autonomic innervation of immune tissues — plays a central role in calibrating immune reactivity. Spinal subluxation, particularly in the upper cervical and upper thoracic regions, disrupts this nervous system regulation and may amplify immune overreactivity. CMRT protocols address the adrenal glands and liver — key organs in histamine metabolism and stress response — through their spinal reflex pathways.",
    whatIsEs: "Las alergias son respuestas inmunológicas exageradas a sustancias inofensivas (alérgenos) que no afectan a las personas no alérgicas. Aunque a menudo consideradas como una condición puramente local (rinitis alérgica, conjuntivitis), las alergias reflejan una disfunción sistémica del sistema inmunológico en el cual las células Th2 y las células B producen excesivamente inmunoglobulina E (IgE) en respuesta a antígenos benignos. La investigación ha demostrado que la subluxación espinal interfiere con la regulación del sistema nervioso del sistema inmunológico, exacerbando la respuesta alérgica. La corrección espinal restaura la regulación inmunológica normal.",
    symptoms: [
      "Seasonal or perennial sneezing, nasal congestion, and runny nose",
      "Itchy, watery eyes",
      "Skin rashes, hives, or eczema",
      "Respiratory symptoms — wheezing or tightening in the chest",
      "Food sensitivities and digestive reactivity",
      "Fatigue related to chronic immune activation",
    ],
    symptomsEs: [
      "Estornudos, secreción nasal o congestión nasal",
      "Picazón o lagrimeo de ojos",
      "Picazón en la garganta o paladar",
      "Urticaria o dermatitis de contacto",
      "Síntomas gastrointestinales de alergias alimentarias",
      "Síntomas que empeoran en la estación de alérgenos específicos",
    ],
    causes: [
      "Immune system dysregulation amplified by nervous system dysfunction",
      "Upper cervical subluxation impairing sympathetic-parasympathetic balance",
      "Adrenal insufficiency reducing anti-inflammatory cortisol capacity",
      "Gut dysbiosis disrupting immune tolerance",
      "Chronic stress maintaining inflammatory state",
      "Environmental toxin burden overwhelming detoxification",
    ],
    causesEs: [
      "Disfunción del sistema nervioso de la subluxación espinal aumentando la reactividad inmunológica",
      "Disbiosis (desequilibrio bacteriano intestinal) comprometiendo el sistema inmunológico intestinal",
      "Inflamación crónica de la mala alineación espinal",
      "Deficiencia de nutrientes (zinc, vitamina D) afectando la tolerancia inmunológica",
      "Predisposición genética a la respuesta Th2",
      "Exposición ambiental o temporal a alérgenos",
    ],
    chiropracticTreatment: "Upper cervical and upper thoracic corrections normalize sympathetic-parasympathetic balance and restore proper immune regulation through the spinal cord. CMRT organ protocols support the adrenal glands, liver, and spleen — the key organs involved in histamine regulation and immune calibration. Patients often report reduced severity of allergic symptoms, improved tolerance of triggering substances, and reduced reliance on antihistamines following consistent chiropractic care. While chiropractic is not a cure for allergies, it supports the nervous system's ability to regulate immune reactivity at an appropriate level.",
    chiropracticTreatmentEs: "El Dr. Foss realiza ajustes quiroprácticos SOT especialmente dirigidos a la región cervical superior y torácica para normalizar la inervación del sistema inmunológico. El CMRT (Técnica de Reflejo Manipulativo Quiropráctico) y protocolos de órganos específicamente para el timo, los ganglios linfáticos y los órganos linfoides Peyer del intestino apoyan la regulación inmunológica. Los pacientes con alergias frecuentemente reportan mejora significativa de los síntomas alérgicos después de 4-8 semanas de cuidado consistente, con reducción continua durante meses. Complementar con suplementos de probióticos, vitamina D y manejo del estrés optimiza los resultados.",
    additionalTreatments: [],
  },

  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression",
    titleEs: "Ansiedad y Depresión",
    image: "/images/conditions/anxiety-depression.jpg",
    metaDescription: "Anxiety and depression support through chiropractic care San Antonio TX. SOT and craniosacral therapy calm the nervous system and support vagal tone — the primary driver of emotional regulation.",
    metaDescriptionEs: "Apoyo para ansiedad y depresión con quiropráctica en San Antonio TX. SOT y terapia craeneosacral para calmar el sistema nervioso y apoyar el tono vagal en la regulación emocional.",
    intro: "The nervous system's structural health profoundly influences mood and emotional regulation. Upper cervical correction and craniosacral therapy enhance vagal tone — the parasympathetic pathway most directly associated with emotional wellbeing.",
    introEs: "La ansiedad y la depresión tienen componentes neuroquímicos pero también están influenciadas por la función del sistema nervioso y la alineación espinal. La quiropráctica mejora la función neurológica.",
    whatIs: "Anxiety and depression are increasingly understood as conditions of nervous system dysregulation — specifically impaired vagal tone and autonomic balance. The vagus nerve is the primary parasympathetic pathway regulating the rest-and-digest state associated with emotional resilience. Upper cervical subluxation compresses the brainstem and vagal nuclei, directly impairing vagal tone. Craniosacral restrictions reduce the cerebrospinal fluid circulation that supports brain and spinal cord health. While chiropractic is not a replacement for psychological care, its structural contribution to nervous system regulation is real and often clinically significant.",
    whatIsEs: "La ansiedad y la depresión son trastornos del estado de ánimo que involucran desequilibrios neuroquímicos, pero cada vez más investigación sugiere que la disfunción del sistema nervioso espinal es un factor contribuyente importante. El sistema nervioso autónomo — simpático (lucha-o-huida) y parasimpático (descanso-y-digestión) — es regulado por conexiones que emergen de la médula espinal. La subluxación crónica desencadena activación simpática persistente, causando vigilancia exagerada, ansiedad y, con el tiempo, depresión por agotamiento. La alineación espinal normal y el tono parasimpático equilibrado son críticos para la salud mental.",
    symptoms: [
      "Persistent anxiety, worry, or fear responses disproportionate to circumstances",
      "Low mood, loss of motivation, or hopelessness",
      "Sleep disruption and fatigue",
      "Physical tension — tight neck, shoulders, and jaw",
      "Digestive symptoms related to autonomic nervous system imbalance",
      "Reduced resilience and difficulty recovering from stress",
    ],
    symptomsEs: [
      "Sensación persistente de preocupación, miedo o aprensión",
      "Pánico agudo o ataques de pánico",
      "Dificultad para dormir o insomnio",
      "Irritabilidad o cambios de humor",
      "Pérdida de interés en actividades (anhedonia)",
      "Sentimientos de falta de esperanza o inutilidad",
    ],
    causes: [
      "Upper cervical subluxation impairing brainstem and vagal nerve function",
      "Craniosacral restrictions reducing CSF circulation and brain health",
      "Chronic stress maintaining sympathetic nervous system dominance",
      "Inflammatory cytokines from spinal joint irritation affecting mood",
      "Disrupted sleep from physical pain perpetuating mood disorders",
      "Trauma history sensitizing the nervous system",
    ],
    causesEs: [
      "Subluxación espinal causando activación simpática crónica de estrés",
      "Desequilibrio del sistema nervioso autónomo de la alineación pobre",
      "Estrés psicosocial crónico exacerbado por disfunción espinal",
      "Inflamación sistémica de la mala alineación espinal",
      "Deficiencias de neurotransmisores (serotonina, GABA) de la disfunción del sistema nervioso",
      "Patrones de sueño perturbados de la disfunción espinal",
    ],
    chiropracticTreatment: "Upper cervical correction and craniosacral therapy are the chiropractic approaches with the greatest relevance to anxiety and depression. Dr. Foss uses SOT and cranial protocols that specifically enhance vagal nerve function — the primary parasympathetic pathway associated with the relaxation response, emotional regulation, and social connection. Patients frequently report improved sleep, reduced baseline anxiety, and a greater sense of calm and resilience following upper cervical and cranial care. Chiropractic is offered as a structural complement to psychological support, not a replacement — together they address both the neurological and psychological dimensions of these conditions.",
    chiropracticTreatmentEs: "El Dr. Foss realiza ajustes quiroprácticos cervicales superiores y torácicos SOT para normalizar el equilibrio del sistema nervioso autónomo, desplazando el cuerpo de la hiperactividad simpática a la parasimpaticidad equilibrada. La restauración del movimiento espinal normal reduce la inflamación neurológica y mejora la circulación de neurotransmisores. Muchos pacientes reportan mejora del estado de ánimo, mejor sueño y reducción de la ansiedad dentro de 4-6 semanas de cuidado consistente. La quiropráctica se utiliza mejor como complemento a la terapia psicológica y, cuando sea necesario, a la medicación psicotrópica.",
    additionalTreatments: ["laser"],
  },
];
