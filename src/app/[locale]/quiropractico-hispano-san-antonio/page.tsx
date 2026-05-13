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
  const canonical = `${BASE_URL}/${locale}/quiropractico-hispano-san-antonio`;
  return {
    title: isEs
      ? "Quiropráctico Hispano en San Antonio TX | Atención Latina"
      : "Hispanic Chiropractor in San Antonio TX | Latino Care",
    description: isEs
      ? "Quiropráctico hispano en San Antonio TX con experiencia atendiendo a la comunidad latina. Dr. Dan Foss DC, bilingüe, 23+ años de experiencia internacional. Llame (210) 685-1994."
      : "Hispanic chiropractor in San Antonio TX with deep experience serving the Latino community. Dr. Dan Foss DC, bilingual, 23+ years international experience. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/quiropractico-hispano-san-antonio`,
        es: `${BASE_URL}/es/quiropractico-hispano-san-antonio`,
        "x-default": `${BASE_URL}/es/quiropractico-hispano-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctico Hispano en San Antonio TX"
        : "Hispanic Chiropractor in San Antonio TX",
      description: isEs
        ? "Atención quiropráctica culturalmente competente para la comunidad hispana de San Antonio."
        : "Culturally-competent chiropractic care for San Antonio's Hispanic community.",
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
      q: "¿Qué hace que un quiropráctico sea verdaderamente hispano-amigable?",
      a: "Más que solo hablar español. Un quiropráctico verdaderamente hispano-amigable entiende las creencias culturales sobre salud, las estructuras familiares latinas, las preocupaciones específicas de la comunidad (como el rol del huesero tradicional, los remedios caseros, y las dinámicas multigeneracionales), y atiende con respeto cultural. En Pura Vida Chiropractic, el Dr. Foss combina la formación quiropráctica científica occidental con un profundo respeto y entendimiento de la cultura latina.",
    },
    en: {
      q: "What makes a chiropractor truly Hispanic-friendly?",
      a: "More than just speaking Spanish. A truly Hispanic-friendly chiropractor understands cultural beliefs about health, Latino family structures, community-specific concerns (like the role of the traditional huesero, home remedies, and multigenerational dynamics), and serves with cultural respect. At Pura Vida Chiropractic, Dr. Foss combines scientific Western chiropractic training with deep respect and understanding of Latino culture.",
    },
  },
  {
    es: {
      q: "¿Cuál es la diferencia entre un quiropráctico hispano y un huesero?",
      a: "Un quiropráctico licenciado (como el Dr. Foss, con licencia TX10880) tiene un doctorado en quiropráctica, formación clínica de 4 años, certificaciones avanzadas y entrenamiento en diagnóstico, imágenes médicas, anatomía y biomecánica. Un huesero tradicional generalmente aprende por aprendizaje informal o tradición familiar. Ambos pueden ayudar — pero solo el quiropráctico licenciado puede emitir documentación médica oficial, facturar seguros, y proporcionar tratamiento basado en evidencia científica. Para condiciones serias (hernia de disco, escoliosis, vértigo, problemas neurológicos), recomendamos atención quiropráctica licenciada.",
    },
    en: {
      q: "What is the difference between a Hispanic chiropractor and a huesero?",
      a: "A licensed chiropractor (like Dr. Foss, with license TX10880) holds a Doctor of Chiropractic degree, 4 years of clinical training, advanced certifications, and training in diagnosis, medical imaging, anatomy, and biomechanics. A traditional huesero typically learns through informal apprenticeship or family tradition. Both can help — but only the licensed chiropractor can issue official medical documentation, bill insurance, and provide evidence-based treatment. For serious conditions (herniated disc, scoliosis, vertigo, neurological issues), we recommend licensed chiropractic care.",
    },
  },
  {
    es: {
      q: "¿Atienden a familias multigeneracionales — abuelos, padres y niños?",
      a: "Sí — y es una de las cosas que más nos gusta hacer. En muchas familias hispanas, varias generaciones viven juntas o muy cerca. Atendemos a abuelos con artritis y dolor crónico, padres con lesiones laborales o de auto, madres embarazadas (técnica Webster certificada), niños con problemas de postura o TDAH, y bebés con cólicos o torticolis. Tener un quiropráctico que conozca a toda la familia hace el cuidado más continuo, eficiente y culturalmente apropiado.",
    },
    en: {
      q: "Do you serve multigenerational families — grandparents, parents, and children?",
      a: "Yes — and it's one of the things we love most. In many Hispanic families, multiple generations live together or very close. We treat grandparents with arthritis and chronic pain, parents with work or auto injuries, pregnant mothers (Webster Technique certified), children with posture problems or ADHD, and babies with colic or torticollis. Having a chiropractor who knows the whole family makes care more continuous, efficient, and culturally appropriate.",
    },
  },
  {
    es: {
      q: "¿Aceptan pacientes hispanos sin documentación o sin seguro?",
      a: "Sí. No requerimos documentación migratoria — solo identificación básica para nuestros registros médicos. Para pacientes sin seguro, ofrecemos opciones de pago accesibles y planes basados en su situación financiera real. Su primera evaluación es completamente gratuita, sin compromiso. Trabajamos con familias hispanas todos los días que están construyendo sus vidas en San Antonio y merecen atención de calidad sin barreras.",
    },
    en: {
      q: "Do you accept Hispanic patients without documentation or without insurance?",
      a: "Yes. We do not require immigration documentation — only basic ID for our medical records. For uninsured patients, we offer accessible payment options and plans based on your real financial situation. Your first evaluation is completely free, no commitment. We work with Hispanic families every day who are building their lives in San Antonio and deserve quality care without barriers.",
    },
  },
  {
    es: {
      q: "¿Tienen experiencia con condiciones comunes en la comunidad hispana?",
      a: "Sí. El Dr. Foss ha desarrollado experiencia especializada con condiciones que vemos frecuentemente en familias hispanas: dolor de espalda por trabajo manual (construcción, jardinería, limpieza, cocina), lesiones de auto, problemas posturales por trabajo prolongado, cólicos infantiles (donde la madre lactante busca soluciones naturales), problemas digestivos relacionados con dieta y estrés, dolores de cabeza tensionales, y embarazos donde la familia prefiere atención no-farmacológica usando la técnica Webster.",
    },
    en: {
      q: "Do you have experience with conditions common in the Hispanic community?",
      a: "Yes. Dr. Foss has developed specialized experience with conditions we see frequently in Hispanic families: back pain from manual work (construction, gardening, cleaning, cooking), auto injuries, postural problems from prolonged work, infant colic (where breastfeeding mothers seek natural solutions), digestive issues related to diet and stress, tension headaches, and pregnancies where the family prefers non-pharmacological care using the Webster Technique.",
    },
  },
  {
    es: {
      q: "¿Por qué tantas familias hispanas en San Antonio prefieren Pura Vida Chiropractic?",
      a: "Hay varias razones: (1) Comunicación completamente en español sin barreras, (2) El Dr. Foss vivió años en Costa Rica y España y entiende profundamente la cultura latina, (3) Respeto por las creencias y tradiciones familiares, (4) Atención culturalmente competente sin condescendencia, (5) Precios transparentes y opciones de pago para familias trabajadoras, (6) 23+ años de experiencia clínica con técnicas avanzadas que otros quiroprácticos en SA no ofrecen (SOT, CMRT, Craneopatía), y (7) Una práctica que recibe igualmente a un abuelito mexicano de 75 años como a un bebé de 2 semanas.",
    },
    en: {
      q: "Why do so many Hispanic families in San Antonio prefer Pura Vida Chiropractic?",
      a: "Several reasons: (1) Communication entirely in Spanish without barriers, (2) Dr. Foss lived years in Costa Rica and Spain and deeply understands Latino culture, (3) Respect for family beliefs and traditions, (4) Culturally-competent care without condescension, (5) Transparent prices and payment options for working families, (6) 23+ years of clinical experience with advanced techniques that other SA chiropractors do not offer (SOT, CMRT, Craniopathy), and (7) A practice that welcomes a 75-year-old Mexican grandfather as warmly as a 2-week-old baby.",
    },
  },
  {
    es: {
      q: "¿Cómo reservo una cita con un quiropráctico hispano en San Antonio?",
      a: "Llame al (210) 685-1994 y le atenderemos en español inmediatamente. También puede reservar en línea las 24 horas en puravidasanantonio.com/special. Su primera evaluación es gratuita. Estamos en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
    en: {
      q: "How do I book an appointment with a Hispanic chiropractor in San Antonio?",
      a: "Call (210) 685-1994 and we will serve you in Spanish immediately. You can also book online 24/7 at puravidasanantonio.com/special. Your first evaluation is free. We are at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
  },
];

const relatedSpanishPages = [
  { slug: "quiropractico-cerca-de-mi-san-antonio", es: "Quiropráctico Cerca de Mí en San Antonio", en: "Spanish-Speaking Chiropractor Near Me" },
  { slug: "quiropractico-bilingue-san-antonio", es: "Quiropráctico Bilingüe en San Antonio", en: "Bilingual Chiropractor in San Antonio" },
  { slug: "doctor-de-columna-san-antonio", es: "Doctor de Columna en San Antonio", en: "Spine Doctor in San Antonio" },
  { slug: "huesero-san-antonio", es: "Huesero en San Antonio", en: "Huesero in San Antonio" },
  { slug: "el-mejor-quiropractico-san-antonio", es: "El Mejor Quiropráctico San Antonio", en: "Best Chiropractor San Antonio" },
];

export default async function QuiropracticoHispanoSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/quiropractico-hispano-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["Quiropráctico Hispano San Antonio", "Quiropráctico Latino San Antonio"],
    description: isEs
      ? "Quiropráctico hispano en San Antonio TX. Atención culturalmente competente para la comunidad latina."
      : "Hispanic chiropractor in San Antonio TX. Culturally-competent care for the Latino community.",
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
      { "@type": "ListItem", position: 2, name: isEs ? "Quiropráctico Hispano San Antonio" : "Hispanic Chiropractor San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/quiropractico-hispano-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs ? "Pura Vida Chiropractic · Atención para la Comunidad Latina" : "Pura Vida Chiropractic · Care for the Latino Community"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs ? "Quiropráctico Hispano en San Antonio TX" : "Hispanic Chiropractor in San Antonio TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "¿Busca un quiropráctico hispano en San Antonio que entienda su cultura, hable su idioma y respete sus tradiciones familiares? En Pura Vida Chiropractic, el Dr. Dan Foss, DC ofrece atención quiropráctica culturalmente competente a familias latinas e hispanas. 23+ años de experiencia internacional. 159+ reseñas 5 estrellas. Primera evaluación gratuita."
                : "Looking for a Hispanic chiropractor in San Antonio who understands your culture, speaks your language, and respects your family traditions? At Pura Vida Chiropractic, Dr. Dan Foss, DC offers culturally-competent chiropractic care to Latino and Hispanic families. 23+ years of international experience. 159+ five-star reviews. Free initial evaluation."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Consulta Gratuita" : "Book Free Consultation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>{isEs ? "Atención en Español" : "Spanish Care"}</span>
              <span className={styles.badge}>⭐ 4.8/5 Google</span>
              <span className={styles.badge}>{isEs ? "Familias Bienvenidas" : "Families Welcome"}</span>
              <span className={styles.badge}>{isEs ? "Insurance Friendly" : "Insurance Friendly"}</span>
              <span className={styles.badge}>{isEs ? "Sin Seguro? OK" : "No Insurance? OK"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Atención quiropráctica para la comunidad hispana de San Antonio" : "Chiropractic care for San Antonio's Hispanic community"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "San Antonio es una ciudad profundamente hispana. Más del 64% de los residentes son hispanos o latinos — y muchas familias hablan principalmente español en casa. Sin embargo, encontrar un quiropráctico hispano que combine entrenamiento clínico moderno con verdadera comprensión cultural no es fácil. La mayoría de las clínicas en la ciudad atienden a la comunidad hispana como una idea posterior, no como una prioridad central."
                : "San Antonio is a deeply Hispanic city. More than 64% of residents are Hispanic or Latino — and many families speak primarily Spanish at home. However, finding a Hispanic chiropractor who combines modern clinical training with true cultural understanding is not easy. Most clinics in the city serve the Hispanic community as an afterthought, not a central priority."}
            </p>
            <p className={styles.sectionText}>
              {isEs
                ? "Pura Vida Chiropractic es diferente. El Dr. Dan Foss pasó años practicando quiropráctica en Costa Rica y España antes de establecerse en San Antonio en 2010 — atendiendo cada día a pacientes hispanos en su idioma y dentro de su contexto cultural. Esa experiencia se nota: en cómo escucha, en cómo explica, en cómo respeta las creencias familiares sobre salud y tratamiento."
                : "Pura Vida Chiropractic is different. Dr. Dan Foss spent years practicing chiropractic in Costa Rica and Spain before settling in San Antonio in 2010 — serving Hispanic patients in their language and within their cultural context every day. That experience shows: in how he listens, how he explains, how he respects family beliefs about health and treatment."}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Lo que ofrecemos a familias hispanas y latinas" : "What we offer to Hispanic and Latino families"}
            </h2>
            <ul className={styles.list}>
              <li>{isEs ? "Atención completa en español — desde la recepción hasta los ajustes" : "Full Spanish care — from reception to adjustments"}</li>
              <li>{isEs ? "Atención multigeneracional — bebés, niños, adultos y ancianos" : "Multigenerational care — babies, children, adults, and elders"}</li>
              <li>{isEs ? "Respeto a las creencias familiares y tradiciones culturales sobre salud" : "Respect for family beliefs and cultural traditions about health"}</li>
              <li>{isEs ? "Cuidado prenatal con técnica Webster certificada para mamás hispanas" : "Prenatal care with certified Webster Technique for Hispanic moms"}</li>
              <li>{isEs ? "Atención pediátrica suave para bebés con cólicos, torticolis, problemas de lactancia" : "Gentle pediatric care for babies with colic, torticollis, latching problems"}</li>
              <li>{isEs ? "Documentación bilingüe completa para reclamos de seguro" : "Full bilingual documentation for insurance claims"}</li>
              <li>{isEs ? "Opciones de pago accesibles para familias trabajadoras sin seguro" : "Accessible payment options for working families without insurance"}</li>
              <li>{isEs ? "Sin requisitos de documentación migratoria — solo identificación básica" : "No immigration documentation requirements — just basic ID"}</li>
              <li>{isEs ? "Atención para lesiones laborales (construcción, limpieza, cocina, jardinería)" : "Care for work injuries (construction, cleaning, cooking, gardening)"}</li>
              <li>{isEs ? "Tratamiento para lesiones de auto con facturación directa PIP/MedPay" : "Auto injury treatment with direct PIP/MedPay billing"}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Diferencia entre quiropráctico licenciado y huesero tradicional" : "Difference between licensed chiropractor and traditional huesero"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "Muchas familias hispanas crecieron con la tradición del huesero — la persona en el barrio o el pueblo que 'sabía componer huesos'. Es una tradición valiosa con raíces culturales profundas, y muchos hueseros ayudan a sus comunidades genuinamente. Sin embargo, hay diferencias importantes que vale la pena entender:"
                : "Many Hispanic families grew up with the huesero tradition — the person in the neighborhood or town who 'knew how to set bones'. It is a valuable tradition with deep cultural roots, and many hueseros genuinely help their communities. However, there are important differences worth understanding:"}
            </p>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Quiropráctico Licenciado" : "Licensed Chiropractor"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Doctorado en Quiropráctica (D.C.) — 4 años de escuela profesional. Licencia estatal verificable (TX10880 en nuestro caso). Entrenamiento en diagnóstico clínico, anatomía detallada, imágenes médicas (rayos X), neurología, biomecánica. Puede emitir documentación médica oficial, facturar seguros, coordinar cuidado con médicos, y proporcionar tratamiento basado en evidencia científica. Certificaciones avanzadas adicionales (SOT, CMRT, Craneopatía, Webster)."
                    : "Doctor of Chiropractic (D.C.) — 4 years of professional school. Verifiable state license (TX10880 in our case). Training in clinical diagnosis, detailed anatomy, medical imaging (X-rays), neurology, biomechanics. Can issue official medical documentation, bill insurance, coordinate care with physicians, and provide evidence-based treatment. Additional advanced certifications (SOT, CMRT, Craniopathy, Webster)."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Huesero Tradicional" : "Traditional Huesero"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Generalmente aprende por aprendizaje informal, herencia familiar o experiencia personal. Sin formación clínica formal ni licencia regulada. No puede emitir documentación médica oficial ni facturar seguros. Puede ser útil para masajes y manipulaciones generales, pero no está entrenado para diagnosticar condiciones serias como hernia de disco, escoliosis, problemas neurológicos, vértigo, o casos pediátricos complejos."
                    : "Generally learns through informal apprenticeship, family heritage, or personal experience. No formal clinical training or regulated license. Cannot issue official medical documentation or bill insurance. May be helpful for massages and general manipulations, but is not trained to diagnose serious conditions like herniated disc, scoliosis, neurological problems, vertigo, or complex pediatric cases."}
                </p>
              </div>
            </div>
            <p className={styles.sectionText}>
              {isEs
                ? "Nuestra recomendación: para condiciones serias o crónicas — busque un quiropráctico licenciado. Para masaje general en familia o ajustes simples, un huesero puede ser una opción cultural válida. Pero para diagnóstico real y tratamiento documentado, la atención quiropráctica profesional es la opción correcta."
                : "Our recommendation: for serious or chronic conditions — see a licensed chiropractor. For general family massage or simple adjustments, a huesero may be a valid cultural option. But for real diagnosis and documented treatment, professional chiropractic care is the right choice."}
            </p>
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
              {isEs ? "Bienvenido a Pura Vida Chiropractic" : "Welcome to Pura Vida Chiropractic"}
            </h2>
            <p className={styles.ctaText}>
              {isEs
                ? "Su familia merece atención quiropráctica de calidad en su idioma y con respeto cultural. Su primera evaluación es completamente gratuita. Llame al (210) 685-1994 o reserve en línea las 24 horas."
                : "Your family deserves quality chiropractic care in your language with cultural respect. Your first evaluation is completely free. Call (210) 685-1994 or book online 24/7."}
            </p>
            <div className={styles.ctaActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                {isEs ? "Reservar Consulta Gratuita" : "Book Free Consultation"}
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
