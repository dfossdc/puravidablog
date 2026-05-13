import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/doctor-de-columna-san-antonio`;
  return {
    title: isEs
      ? "Doctor de Columna en San Antonio TX | Especialista en Espalda"
      : "Spine Doctor in San Antonio TX | Back Specialist",
    description: isEs
      ? "Doctor de columna en San Antonio TX — quiropráctico bilingüe Dr. Dan Foss DC, especialista en problemas de espalda, hernia de disco, ciática, escoliosis. 23+ años de experiencia. Llame (210) 685-1994."
      : "Spine doctor in San Antonio TX — bilingual chiropractor Dr. Dan Foss DC, back specialist for herniated disc, sciatica, scoliosis. 23+ years experience. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/doctor-de-columna-san-antonio`,
        es: `${BASE_URL}/es/doctor-de-columna-san-antonio`,
        "x-default": `${BASE_URL}/es/doctor-de-columna-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "Doctor de Columna en San Antonio TX | Pura Vida"
        : "Spine Doctor in San Antonio TX | Pura Vida",
      description: isEs
        ? "Especialista en columna vertebral. Hernias de disco, ciática, escoliosis, dolor de espalda crónico. Atención bilingüe."
        : "Spine specialist. Herniated discs, sciatica, scoliosis, chronic back pain. Bilingual care.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

const faqs = [
  {
    es: {
      q: "¿Cuál es la diferencia entre un doctor de columna y un quiropráctico?",
      a: "En el habla popular hispana, 'doctor de columna' a menudo significa cualquier profesional que trata problemas de la espina dorsal — incluyendo quiroprácticos, ortopedistas y neurocirujanos. El Dr. Dan Foss es Doctor en Quiropráctica (D.C.), licencia de Texas TX10880, especializado en condiciones de la columna vertebral sin necesidad de cirugía: hernias de disco, ciática, escoliosis, dolor de espalda crónico, dolor de cuello, problemas posturales y desbalances estructurales. La quiropráctica trata la columna a través de ajustes precisos, terapias manuales, y técnicas como SOT (Sacro-Occipital Technique) que no usan medicamentos ni cirugía.",
    },
    en: {
      q: "What is the difference between a spine doctor and a chiropractor?",
      a: "In popular Hispanic speech, 'doctor de columna' often means any professional who treats spinal problems — including chiropractors, orthopedists, and neurosurgeons. Dr. Dan Foss is a Doctor of Chiropractic (D.C.), Texas license TX10880, specialized in spine conditions without surgery: herniated discs, sciatica, scoliosis, chronic back pain, neck pain, postural problems, and structural imbalances. Chiropractic treats the spine through precise adjustments, manual therapies, and techniques like SOT (Sacro-Occipital Technique) without medications or surgery.",
    },
  },
  {
    es: {
      q: "¿Puede un doctor de columna tratar una hernia de disco sin cirugía?",
      a: "Sí, en la mayoría de los casos. Estudios publicados muestran que el 85-90% de pacientes con hernias de disco sintomáticas mejoran con cuidado conservador sin necesidad de cirugía. En Pura Vida Chiropractic combinamos ajuste SOT, terapia de descompresión, terapia de láser Clase IV y SoftWave (ondas de choque extracorpóreas) para tratar hernias de disco lumbares y cervicales. Muchos pacientes que habían sido referidos a cirugía evitan la intervención quirúrgica después de un ciclo de tratamiento quiropráctico.",
    },
    en: {
      q: "Can a spine doctor treat a herniated disc without surgery?",
      a: "Yes, in most cases. Published studies show 85-90% of patients with symptomatic herniated discs improve with conservative care without surgery. At Pura Vida Chiropractic we combine SOT adjustment, decompression therapy, Class IV laser therapy, and SoftWave (extracorporeal shockwave) to treat lumbar and cervical herniated discs. Many patients referred for surgery avoid surgical intervention after a course of chiropractic treatment.",
    },
  },
  {
    es: {
      q: "¿Qué condiciones de la columna trata el Dr. Foss?",
      a: "Tratamos una amplia variedad de condiciones de columna vertebral: hernias de disco lumbares y cervicales, ciática, escoliosis (en niños y adultos), dolor de espalda crónico, dolor de cuello, latigazo cervical por accidentes de auto, estenosis espinal, espondilolistesis, dolor sacroilíaco, lumbalgia aguda, costocondritis, subluxación de costilla, dolor del coxis, lesiones laborales de columna, y dolor de espalda durante el embarazo (con técnica Webster certificada). También vemos problemas neurológicos relacionados con la columna como hormigueo, entumecimiento y debilidad en brazos o piernas.",
    },
    en: {
      q: "What spine conditions does Dr. Foss treat?",
      a: "We treat a wide variety of spine conditions: lumbar and cervical herniated discs, sciatica, scoliosis (in children and adults), chronic back pain, neck pain, whiplash from auto accidents, spinal stenosis, spondylolisthesis, sacroiliac pain, acute lumbago, costochondritis, rib subluxation, tailbone pain, work-related spine injuries, and back pain during pregnancy (with certified Webster Technique). We also see neurological problems related to the spine like tingling, numbness, and weakness in arms or legs.",
    },
  },
  {
    es: {
      q: "¿Tienen experiencia con escoliosis en niños y adultos?",
      a: "Sí. La escoliosis es una de las condiciones donde la atención quiropráctica especializada hace una diferencia importante. En adultos con escoliosis moderada, podemos mejorar la postura, reducir el dolor y prevenir la progresión de la curvatura. En niños y adolescentes con escoliosis idiopática, los ajustes específicos pueden ayudar a estabilizar o mejorar la curvatura cuando se combinan con ejercicios correctivos. Tenemos una página específica sobre quiropráctico para escoliosis en español si desea más información.",
    },
    en: {
      q: "Do you have experience with scoliosis in children and adults?",
      a: "Yes. Scoliosis is one of the conditions where specialized chiropractic care makes an important difference. In adults with moderate scoliosis, we can improve posture, reduce pain, and prevent progression of the curve. In children and adolescents with idiopathic scoliosis, specific adjustments can help stabilize or improve the curve when combined with corrective exercises. We have a specific Spanish page about chiropractor for scoliosis if you'd like more information.",
    },
  },
  {
    es: {
      q: "¿El dolor de columna durante el embarazo requiere un doctor de columna especial?",
      a: "Sí. El embarazo cambia la biomecánica de la columna significativamente — el peso adicional, el cambio de centro de gravedad, la relaxina hormonal que afloja los ligamentos, y la posición del bebé pueden causar dolor lumbar, ciática, dolor pélvico y dolor sacroilíaco. El Dr. Foss está certificado en la Técnica Webster, un método quiropráctico específico para el embarazo que es seguro durante todos los trimestres. Atendemos pacientes embarazadas semanalmente con resultados excelentes.",
    },
    en: {
      q: "Does spine pain during pregnancy require a special spine doctor?",
      a: "Yes. Pregnancy significantly changes spinal biomechanics — added weight, shifted center of gravity, hormonal relaxin loosening ligaments, and baby positioning can cause lumbar pain, sciatica, pelvic pain, and sacroiliac pain. Dr. Foss is certified in the Webster Technique, a chiropractic method specific to pregnancy that is safe throughout all trimesters. We treat pregnant patients weekly with excellent outcomes.",
    },
  },
  {
    es: {
      q: "¿Necesito una orden médica o referencia para ver al doctor de columna?",
      a: "No. En Texas, los pacientes pueden ver directamente a un quiropráctico licenciado sin necesidad de referencia médica. Su primera evaluación con el Dr. Foss es completamente gratuita — incluye historial detallado, examen físico, evaluación postural y biomecánica, y un plan de tratamiento personalizado. Si después necesitamos imágenes médicas (rayos X o MRI), coordinamos la orden y revisión.",
    },
    en: {
      q: "Do I need a medical order or referral to see the spine doctor?",
      a: "No. In Texas, patients can see a licensed chiropractor directly without a medical referral. Your first evaluation with Dr. Foss is completely free — includes detailed history, physical exam, postural and biomechanical assessment, and a personalized treatment plan. If we later need medical imaging (X-rays or MRI), we coordinate the order and review.",
    },
  },
  {
    es: {
      q: "¿Cómo reservo una cita con el doctor de columna en San Antonio?",
      a: "Llame al (210) 685-1994 y atenderemos su llamada en español inmediatamente. También puede reservar en línea las 24 horas en puravidasanantonio.com/special. Su primera evaluación es gratuita. Estamos en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
    en: {
      q: "How do I book an appointment with the spine doctor in San Antonio?",
      a: "Call (210) 685-1994 and we will take your call in Spanish immediately. You can also book online 24/7 at puravidasanantonio.com/special. Your first evaluation is free. We are at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
  },
];

const relatedSpanishPages = [
  { slug: "quiropractico-cerca-de-mi-san-antonio", es: "Quiropráctico Cerca de Mí en San Antonio", en: "Spanish-Speaking Chiropractor Near Me" },
  { slug: "quiropractico-bilingue-san-antonio", es: "Quiropráctico Bilingüe en San Antonio", en: "Bilingual Chiropractor in San Antonio" },
  { slug: "quiropractico-hispano-san-antonio", es: "Quiropráctico Hispano en San Antonio", en: "Hispanic Chiropractor in San Antonio" },
  { slug: "quiropractico-escoliosis-san-antonio", es: "Quiropráctico para Escoliosis en San Antonio", en: "Scoliosis Chiropractor in San Antonio" },
  { slug: "huesero-san-antonio", es: "Huesero en San Antonio", en: "Huesero in San Antonio" },
];

export default async function DoctorDeColumnaSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/doctor-de-columna-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["Doctor de Columna San Antonio", "Especialista en Columna San Antonio"],
    description: isEs
      ? "Doctor de columna en San Antonio TX. Quiropráctico especialista en problemas de espalda, hernia de disco, ciática, escoliosis."
      : "Spine doctor in San Antonio TX. Chiropractor specialist in back problems, herniated disc, sciatica, scoliosis.",
    image: `${BASE_URL}/images/dr-foss-adjusting-patient.webp`,
    url: canonical,
    telephone: "+12106851994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2318 NW Military Hwy, Suite 103",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78231",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 29.5447, longitude: -98.5394 },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+12106851994",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "es", "en"],
      areaServed: { "@type": "City", name: "San Antonio" },
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "07:00", closes: "16:00" },
    ],
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    sameAs: [
      "https://www.youtube.com/@puravidadc",
      "https://www.facebook.com/puravidasanantonio",
      "https://www.instagram.com/puravidasanantonio",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => {
      const item = isEs ? f.es : f.en;
      return { "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Doctor de Columna San Antonio" : "Spine Doctor San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/doctor-de-columna-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs ? "Pura Vida Chiropractic · Especialista en Columna Vertebral" : "Pura Vida Chiropractic · Spine Specialist"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs ? "Doctor de Columna en San Antonio TX" : "Spine Doctor in San Antonio TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "¿Necesita un doctor de columna en San Antonio que trate hernias de disco, ciática, escoliosis o dolor crónico de espalda sin medicamentos ni cirugía? El Dr. Dan Foss, DC es Doctor en Quiropráctica con 23+ años de experiencia especializada en condiciones de la columna vertebral. Atención completamente bilingüe (inglés/español). 159+ reseñas 5 estrellas. Primera evaluación gratuita."
                : "Need a spine doctor in San Antonio who treats herniated discs, sciatica, scoliosis, or chronic back pain without medications or surgery? Dr. Dan Foss, DC is a Doctor of Chiropractic with 23+ years of specialized experience in spine conditions. Fully bilingual care (English/Spanish). 159+ five-star reviews. Free initial evaluation."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>{isEs ? "Sin Cirugía" : "No Surgery"}</span>
              <span className={styles.badge}>⭐ 4.8/5 Google</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
              <span className={styles.badge}>{isEs ? "Atención Bilingüe" : "Bilingual Care"}</span>
              <span className={styles.badge}>{isEs ? "TX License TX10880" : "TX License TX10880"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Especialista en columna vertebral sin cirugía" : "Spine specialist without surgery"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "La columna vertebral es la estructura más compleja de su cuerpo — 33 vértebras conectadas por discos, ligamentos, articulaciones y músculos, todo coordinado por la médula espinal y miles de nervios. Cuando algo se desalinea, las consecuencias pueden ser dolorosas y limitantes: dolor irradiado, hormigueo, entumecimiento, debilidad muscular, problemas de movilidad. Muchos pacientes llegan a Pura Vida Chiropractic después de meses o años de dolor — habiendo probado medicamentos, fisioterapia, inyecciones, e incluso considerando cirugía."
                : "The spine is the most complex structure in your body — 33 vertebrae connected by discs, ligaments, joints, and muscles, all coordinated by the spinal cord and thousands of nerves. When something becomes misaligned, the consequences can be painful and limiting: radiating pain, tingling, numbness, muscle weakness, mobility problems. Many patients arrive at Pura Vida Chiropractic after months or years of pain — having tried medications, physical therapy, injections, and even considering surgery."}
            </p>
            <p className={styles.sectionText}>
              {isEs
                ? "La buena noticia: la mayoría de los problemas de columna no requieren cirugía. Estudios médicos consistentemente muestran que entre el 85% y 90% de pacientes con hernias de disco sintomáticas mejoran significativamente con cuidado conservador. El Dr. Foss combina cuatro técnicas especializadas — SOT Avanzada, descompresión, terapia de láser Clase IV, y SoftWave — para tratar la causa estructural del problema, no solo enmascarar el dolor."
                : "The good news: most spine problems do not require surgery. Medical studies consistently show that 85% to 90% of patients with symptomatic herniated discs significantly improve with conservative care. Dr. Foss combines four specialized techniques — Advanced SOT, decompression, Class IV laser therapy, and SoftWave — to address the structural cause of the problem, not just mask the pain."}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Condiciones de columna que tratamos" : "Spine conditions we treat"}
            </h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Hernia de Disco (Cervical y Lumbar)" : "Herniated Disc (Cervical and Lumbar)"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Cuando el disco intervertebral se proyecta y presiona los nervios. Síntomas: dolor radiante hacia brazo o pierna, entumecimiento, hormigueo, debilidad. Tratamos con descompresión, SOT y láser Clase IV. 85-90% mejoran sin cirugía."
                    : "When the intervertebral disc protrudes and compresses nerves. Symptoms: radiating pain to arm or leg, numbness, tingling, weakness. Treated with decompression, SOT, and Class IV laser. 85-90% improve without surgery."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Ciática (Dolor del Nervio Ciático)" : "Sciatica (Sciatic Nerve Pain)"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Dolor irradiado desde la espalda baja hasta la pierna, a veces con hormigueo o entumecimiento. Causas: hernia de disco, síndrome piriforme, subluxación pélvica. Tratamos con SOT (bloqueo pélvico Categoría II), terapia de láser y ejercicios correctivos específicos."
                    : "Radiating pain from low back to leg, sometimes with tingling or numbness. Causes: herniated disc, piriformis syndrome, pelvic subluxation. Treated with SOT (Category II pelvic blocking), laser therapy, and specific corrective exercises."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Escoliosis" : "Scoliosis"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Curvatura lateral anormal de la columna. En niños y adolescentes puede progresar rápidamente sin tratamiento. En adultos causa dolor crónico y problemas posturales. Tratamiento incluye ajustes específicos, ejercicios correctivos y monitoreo de la progresión con rayos X."
                    : "Abnormal lateral spinal curvature. In children and adolescents it can progress rapidly without treatment. In adults it causes chronic pain and postural problems. Treatment includes specific adjustments, corrective exercises, and progression monitoring with X-rays."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Dolor de Espalda Crónico" : "Chronic Back Pain"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Dolor de más de 3 meses sin causa estructural obvia. La mayoría tiene un componente sacroilíaco o miofacial que la medicina convencional no identifica. SOT identifica el patrón específico (Categoría I, II, o III) y aplica corrección dirigida."
                    : "Pain lasting more than 3 months without obvious structural cause. Most have a sacroiliac or myofascial component that conventional medicine does not identify. SOT identifies the specific pattern (Category I, II, or III) and applies targeted correction."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Latigazo Cervical (Whiplash)" : "Whiplash"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Lesión común después de accidentes de auto. Causa dolor de cuello, dolores de cabeza, mareo y rigidez. Tratamos con ajustes específicos, terapia de láser y SoftWave. Trabajamos directamente con su seguro PIP/MedPay y abogados de lesiones personales."
                    : "Common injury after auto accidents. Causes neck pain, headaches, dizziness, and stiffness. Treated with specific adjustments, laser therapy, and SoftWave. We work directly with your PIP/MedPay insurance and personal injury attorneys."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Dolor de Espalda en Embarazo" : "Pregnancy Back Pain"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Cambios biomecánicos del embarazo causan dolor lumbar, ciática y dolor pélvico. La Técnica Webster (Dr. Foss está certificado) es segura durante todos los trimestres y puede mejorar la posición fetal antes del parto. Atendemos mujeres embarazadas semanalmente."
                    : "Pregnancy biomechanical changes cause lumbar pain, sciatica, and pelvic pain. The Webster Technique (Dr. Foss is certified) is safe through all trimesters and can improve fetal positioning before delivery. We treat pregnant women weekly."}
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Por qué Pura Vida es diferente a otros doctores de columna en San Antonio" : "Why Pura Vida is different from other spine doctors in San Antonio"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "La mayoría de quiroprácticos en San Antonio usan principalmente la técnica Diversified — el método tradicional de manipulación de alta velocidad. Es efectivo para casos simples, pero limitado para condiciones complejas o pacientes sensibles. El Dr. Foss es el único quiropráctico en San Antonio con certificación SOT Avanzada — un sistema de protocolo de 3 pilares que va mucho más allá de la quiropráctica básica:"
                : "Most chiropractors in San Antonio primarily use the Diversified technique — the traditional high-velocity manipulation method. It is effective for simple cases, but limited for complex conditions or sensitive patients. Dr. Foss is the only chiropractor in San Antonio with Advanced SOT certification — a 3-pillar protocol system that goes far beyond basic chiropractic:"}
            </p>
            <ul className={styles.list}>
              <li>
                <strong>{isEs ? "SOT Avanzada (Bloqueo Pélvico):" : "Advanced SOT (Pelvic Blocking):"}</strong>{" "}
                {isEs
                  ? "Identifica si su problema de columna es Categoría I (sacroilíaco), Categoría II (carga de peso pélvica) o Categoría III (lumbar/disco) y aplica corrección específica con cuñas almohadilladas. Sin manipulación de alta velocidad — ideal para pacientes sensibles, ancianos, embarazadas y niños."
                  : "Identifies whether your spine problem is Category I (sacroiliac), Category II (pelvic weight-bearing), or Category III (lumbar/disc) and applies specific correction with padded wedges. No high-velocity manipulation — ideal for sensitive patients, elderly, pregnant women, and children."}
              </li>
              <li>
                <strong>CMRT:</strong>{" "}
                {isEs
                  ? "Técnica Manipulativa de Reflejos Quiroprácticos para condiciones de columna con componente visceral (donde el dolor de espalda está conectado con problemas de órganos como reflujo, estreñimiento o problemas digestivos)."
                  : "Chiropractic Manipulative Reflex Technique for spine conditions with visceral component (where back pain is connected with organ problems like reflux, constipation, or digestive issues)."}
              </li>
              <li>
                <strong>{isEs ? "Craneopatía SOT:" : "SOT Craniopathy:"}</strong>{" "}
                {isEs
                  ? "Para condiciones cervicales altas y problemas relacionados con la base del cráneo — vértigo cervicogénico, TMJ, dolores de cabeza por tensión, post-conmoción cerebral."
                  : "For upper cervical conditions and skull-base-related problems — cervicogenic vertigo, TMJ, tension headaches, post-concussion."}
              </li>
              <li>
                <strong>{isEs ? "Láser Clase IV + SoftWave:" : "Class IV Laser + SoftWave:"}</strong>{" "}
                {isEs
                  ? "Terapias regenerativas no-invasivas en la oficina para acelerar la sanación de discos, ligamentos y tejidos blandos. La mayoría de clínicas en SA no las ofrecen."
                  : "Non-invasive regenerative therapies in-office to accelerate healing of discs, ligaments, and soft tissues. Most SA clinics do not offer them."}
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</h2>
            {faqs.map((f, i) => {
              const item = isEs ? f.es : f.en;
              return (
                <div key={i} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{item.q}</h3>
                  <p className={styles.faqA}>{item.a}</p>
                </div>
              );
            })}
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Páginas relacionadas en español" : "Related Spanish pages"}</h2>
            <ul className={styles.relatedList}>
              {relatedSpanishPages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${locale}/${p.slug}`}>{isEs ? p.es : p.en}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>
              {isEs ? "¿Listo para tratar el problema de columna sin cirugía?" : "Ready to treat your spine problem without surgery?"}
            </h2>
            <p className={styles.ctaText}>
              {isEs
                ? "Su primera evaluación con el Dr. Foss es completamente gratuita. Incluye examen físico, evaluación postural y biomecánica, y un plan de tratamiento personalizado. Llame al (210) 685-1994 o reserve en línea."
                : "Your first evaluation with Dr. Foss is completely free. Includes physical exam, postural and biomechanical assessment, and a personalized treatment plan. Call (210) 685-1994 or book online."}
            </p>
            <div className={styles.ctaActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.ctaPhone}>📞 (210) 685-1994</a>
            </div>
          </section>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
