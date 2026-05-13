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
  const canonical = `${BASE_URL}/${locale}/quiropractico-bilingue-san-antonio`;
  return {
    title: isEs
      ? "Quiropráctico Bilingüe San Antonio TX | Inglés y Español"
      : "Bilingual Chiropractor San Antonio TX | English & Spanish",
    description: isEs
      ? "Quiropráctico bilingüe en San Antonio TX que habla inglés y español con fluidez. Dr. Dan Foss DC, 23+ años de experiencia. Atención completa en su idioma. Llame (210) 685-1994."
      : "Bilingual chiropractor in San Antonio TX fluent in English and Spanish. Dr. Dan Foss DC, 23+ years experience. Full care in your language. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/quiropractico-bilingue-san-antonio`,
        es: `${BASE_URL}/es/quiropractico-bilingue-san-antonio`,
        "x-default": `${BASE_URL}/es/quiropractico-bilingue-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctico Bilingüe San Antonio TX | Inglés y Español"
        : "Bilingual Chiropractor San Antonio TX | English & Spanish",
      description: isEs
        ? "Atención quiropráctica completa en español. Dr. Dan Foss, 23+ años de experiencia internacional."
        : "Complete chiropractic care in Spanish. Dr. Dan Foss, 23+ years international experience.",
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
      q: "¿Qué significa que un quiropráctico sea bilingüe?",
      a: "Significa que el doctor y el equipo hablan inglés y español con fluidez profesional — no solo unas palabras básicas. En Pura Vida Chiropractic, el Dr. Dan Foss vivió y practicó en Costa Rica y España durante años antes de abrir su consulta en San Antonio. Todo el equipo atiende en español: la recepción, las consultas, los exámenes, las explicaciones de tratamiento y el papeleo del seguro.",
    },
    en: {
      q: "What does it mean for a chiropractor to be bilingual?",
      a: "It means the doctor and staff speak professional-level English and Spanish — not just a few basic words. At Pura Vida Chiropractic, Dr. Dan Foss lived and practiced in Costa Rica and Spain for years before opening his practice in San Antonio. The entire team serves you in Spanish: front desk, consultations, exams, treatment explanations, and insurance paperwork.",
    },
  },
  {
    es: {
      q: "¿Por qué es importante un quiropráctico que hable mi idioma?",
      a: "Porque el cuidado quiropráctico requiere comunicación detallada sobre dolor, sensaciones, historial médico, expectativas y resultados. Cuando hay barreras de idioma, los detalles importantes se pierden — y eso afecta el diagnóstico y el plan de tratamiento. Con un quiropráctico bilingüe usted puede describir su condición con precisión en su idioma natal y entender completamente lo que está pasando con su cuerpo.",
    },
    en: {
      q: "Why does it matter to have a chiropractor who speaks my language?",
      a: "Because chiropractic care requires detailed communication about pain, sensations, medical history, expectations, and outcomes. When language barriers exist, important details get lost — and that affects diagnosis and treatment plans. With a bilingual chiropractor you can describe your condition precisely in your native language and fully understand what is happening with your body.",
    },
  },
  {
    es: {
      q: "¿Atienden a familias completas en español, incluyendo niños y ancianos?",
      a: "Sí. Atendemos pacientes de todas las edades en español — desde bebés y niños pequeños hasta abuelos. Para padres hispanos, esto significa que pueden traer a sus hijos sin necesidad de traducir términos médicos. Para personas mayores, significa que pueden expresar sus síntomas y preocupaciones cómodamente. La atención pediátrica y geriátrica en español es una parte central de nuestra práctica.",
    },
    en: {
      q: "Do you serve entire families in Spanish, including children and seniors?",
      a: "Yes. We serve patients of all ages in Spanish — from babies and young children to grandparents. For Hispanic parents, this means they can bring their children without needing to translate medical terms. For older adults, it means they can express their symptoms and concerns comfortably. Pediatric and geriatric care in Spanish is a core part of our practice.",
    },
  },
  {
    es: {
      q: "¿Los formularios y documentos de Pura Vida Chiropractic están en español?",
      a: "Sí. Todos los formularios de admisión, consentimiento, historial médico, planes de tratamiento e información del seguro están disponibles en español. Nuestro sitio web también tiene una versión completa en español en puravidasanantonio.com/es. Si necesita algún documento traducido o explicado, simplemente pídanos al (210) 685-1994.",
    },
    en: {
      q: "Are Pura Vida Chiropractic's forms and documents available in Spanish?",
      a: "Yes. All intake forms, consents, medical history, treatment plans, and insurance information are available in Spanish. Our website also has a full Spanish version at puravidasanantonio.com/es. If you need any document translated or explained, just ask at (210) 685-1994.",
    },
  },
  {
    es: {
      q: "¿Cuáles son las técnicas que usa Pura Vida y cómo se explican en español?",
      a: "El Dr. Foss usa tres técnicas principales: SOT Avanzada (Técnica Sacro-Occipital — bloqueo pélvico con cuñas almohadilladas para corregir desbalances), CMRT (Técnica Manipulativa de Reflejos Quiroprácticos — ajuste visceral a través de puntos reflejos en la columna para condiciones como reflujo, cólico infantil y problemas digestivos), y Craneopatía SOT (correcciones suaves de huesos craneales para vértigo, TMJ, migrañas, y problemas posteriores a conmoción cerebral). Cada técnica se explica completamente en español antes de cualquier tratamiento.",
    },
    en: {
      q: "What techniques does Pura Vida use and how are they explained in Spanish?",
      a: "Dr. Foss uses three main techniques: Advanced SOT (Sacro-Occipital Technique — padded-wedge pelvic blocking to correct imbalances), CMRT (Chiropractic Manipulative Reflex Technique — visceral organ adjusting through reflex points on the spine for conditions like reflux, infant colic, and digestive problems), and SOT Craniopathy (gentle cranial bone corrections for vertigo, TMJ, migraines, and post-concussion problems). Each technique is fully explained in Spanish before any treatment.",
    },
  },
  {
    es: {
      q: "¿Aceptan pacientes hispanos sin seguro médico?",
      a: "Sí. Ofrecemos opciones de pago accesibles para pacientes sin seguro médico. Su primera evaluación es gratuita — sin costo ni compromiso. Después de la evaluación, le explicaremos exactamente cuánto costaría el plan de tratamiento recomendado y las opciones de pago disponibles. Trabajamos con presupuestos familiares reales.",
    },
    en: {
      q: "Do you accept Hispanic patients without health insurance?",
      a: "Yes. We offer accessible payment options for uninsured patients. Your first evaluation is free — no cost, no commitment. After the evaluation, we will explain exactly how much the recommended treatment plan would cost and the available payment options. We work with real family budgets.",
    },
  },
  {
    es: {
      q: "¿Cómo reservo una cita con un quiropráctico bilingüe en San Antonio?",
      a: "Llame al (210) 685-1994 y nuestro equipo bilingüe lo atenderá en español inmediatamente. También puede reservar en línea las 24 horas en puravidasanantonio.com/special. Su primera evaluación es gratuita. Estamos en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
    en: {
      q: "How do I book an appointment with a bilingual chiropractor in San Antonio?",
      a: "Call (210) 685-1994 and our bilingual team will serve you in Spanish immediately. You can also book online 24/7 at puravidasanantonio.com/special. Your first evaluation is free. We are at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231.",
    },
  },
];

const relatedSpanishPages = [
  { slug: "quiropractico-cerca-de-mi-san-antonio", es: "Quiropráctico Cerca de Mí en San Antonio", en: "Spanish-Speaking Chiropractor Near Me in San Antonio" },
  { slug: "quiropractico-hispano-san-antonio", es: "Quiropráctico Hispano en San Antonio", en: "Hispanic Chiropractor in San Antonio" },
  { slug: "doctor-de-columna-san-antonio", es: "Doctor de Columna en San Antonio", en: "Spine Doctor in San Antonio" },
  { slug: "huesero-san-antonio", es: "Huesero en San Antonio", en: "Huesero in San Antonio" },
  { slug: "el-mejor-quiropractico-san-antonio", es: "El Mejor Quiropráctico San Antonio", en: "Best Chiropractor San Antonio" },
];

export default async function QuiropracticoBilingueSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/quiropractico-bilingue-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["Pura Vida Quiropráctico Bilingüe", "Quiropráctico Bilingüe San Antonio"],
    description: isEs
      ? "Quiropráctico bilingüe en San Antonio TX. Dr. Dan Foss, DC, atención profesional completa en inglés y español."
      : "Bilingual chiropractor in San Antonio TX. Dr. Dan Foss, DC, full professional care in English and Spanish.",
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
      { "@type": "ListItem", position: 2, name: isEs ? "Quiropráctico Bilingüe San Antonio" : "Bilingual Chiropractor San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/quiropractico-bilingue-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs ? "Pura Vida Chiropractic · Atención Completa en Español" : "Pura Vida Chiropractic · Full Spanish Care"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs ? "Quiropráctico Bilingüe en San Antonio TX" : "Bilingual Chiropractor in San Antonio TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "¿Necesita un quiropráctico bilingüe en San Antonio que hable inglés y español con fluidez profesional? En Pura Vida Chiropractic, el Dr. Dan Foss, DC y todo el equipo le atienden completamente en su idioma. Practicó años en Costa Rica y España antes de abrir consulta en San Antonio en 2010. 4.8★ con 159+ reseñas. Primera evaluación gratuita."
                : "Need a bilingual chiropractor in San Antonio fluent in English and Spanish? At Pura Vida Chiropractic, Dr. Dan Foss, DC and the entire team serve you completely in your language. He practiced for years in Costa Rica and Spain before opening in San Antonio in 2010. 4.8★ from 159+ reviews. Free initial evaluation."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>{isEs ? "100% Bilingüe" : "100% Bilingual"}</span>
              <span className={styles.badge}>⭐ 4.8/5 Google</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
              <span className={styles.badge}>{isEs ? "Insurance Friendly" : "Insurance Friendly"}</span>
              <span className={styles.badge}>{isEs ? "Consulta gratuita" : "Free consultation"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "¿Por qué elegir un quiropráctico bilingüe en San Antonio?" : "Why choose a bilingual chiropractor in San Antonio?"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "San Antonio tiene una de las comunidades hispanas más grandes de Estados Unidos — más del 64% de la población es hispana o latina. Sin embargo, muy pocos quiroprácticos en la ciudad ofrecen atención completamente bilingüe a nivel profesional. La mayoría tienen recepcionistas que hablan algo de español, pero el doctor solo habla inglés — lo cual deja una brecha de comunicación crítica en el momento más importante: la consulta clínica."
                : "San Antonio has one of the largest Hispanic communities in the United States — more than 64% of the population is Hispanic or Latino. However, very few chiropractors in the city offer truly professional bilingual care. Most have receptionists who speak some Spanish, but the doctor only speaks English — which leaves a critical communication gap at the most important moment: the clinical consultation."}
            </p>
            <p className={styles.sectionText}>
              {isEs
                ? "El Dr. Dan Foss es diferente. Después de graduarse de Western States Chiropractic College en 2003, pasó años practicando quiropráctica en Costa Rica y España — atendiendo pacientes hispanos cada día en su idioma natal. Cuando abrió Pura Vida Chiropractic en San Antonio en 2010, trajo esa experiencia bilingüe completa. Hoy, todo el equipo — desde la recepción hasta los ajustes — atiende en español con la misma fluidez que en inglés."
                : "Dr. Dan Foss is different. After graduating from Western States Chiropractic College in 2003, he spent years practicing chiropractic in Costa Rica and Spain — serving Hispanic patients in their native language every day. When he opened Pura Vida Chiropractic in San Antonio in 2010, he brought that full bilingual experience. Today, the entire team — from front desk to adjustments — serves in Spanish with the same fluency as in English."}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Atención completa en español, no solo traducción" : "Full Spanish care, not just translation"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "Hay una diferencia importante entre un quiropráctico que tiene un intérprete y un quiropráctico que realmente habla español. En Pura Vida Chiropractic recibe atención bilingüe en cada paso de su cuidado:"
                : "There is an important difference between a chiropractor who has an interpreter and a chiropractor who actually speaks Spanish. At Pura Vida Chiropractic you receive bilingual care at every step:"}
            </p>
            <ul className={styles.list}>
              <li>{isEs ? "Recepción y reservación de citas en español" : "Reception and appointment booking in Spanish"}</li>
              <li>{isEs ? "Formularios de admisión bilingües (inglés/español)" : "Bilingual intake forms (English/Spanish)"}</li>
              <li>{isEs ? "Consulta clínica completamente en español" : "Clinical consultation fully in Spanish"}</li>
              <li>{isEs ? "Explicación detallada de hallazgos del examen en español" : "Detailed explanation of exam findings in Spanish"}</li>
              <li>{isEs ? "Planes de tratamiento explicados en español con tiempos y expectativas claras" : "Treatment plans explained in Spanish with clear timelines and expectations"}</li>
              <li>{isEs ? "Educación sobre técnicas (SOT, CMRT, Craneopatía) en español" : "Education about techniques (SOT, CMRT, Craniopathy) in Spanish"}</li>
              <li>{isEs ? "Documentación del seguro en español si su plan lo requiere" : "Insurance documentation in Spanish if your plan requires it"}</li>
              <li>{isEs ? "Comunicación con familiares acompañantes en español" : "Communication with accompanying family members in Spanish"}</li>
              <li>{isEs ? "Página web completa en español: puravidasanantonio.com/es" : "Complete Spanish website: puravidasanantonio.com/es"}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Las técnicas de Pura Vida explicadas en español" : "Pura Vida's techniques explained in Spanish"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "El Dr. Foss es el único quiropráctico certificado en SOT Avanzada en todo San Antonio. Aquí está lo que eso significa, en términos claros en español:"
                : "Dr. Foss is the only Advanced SOT-certified chiropractor in all of San Antonio. Here is what that means, in clear Spanish terms:"}
            </p>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "SOT Avanzada — Bloqueo Pélvico Categorías I/II/III" : "Advanced SOT — Pelvic Blocking Categories I/II/III"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Una técnica suave y precisa que usa cuñas almohadilladas debajo de su pelvis para corregir desbalances sacro-ilíacos. Sin manipulaciones de alta velocidad. Tres categorías diferentes según su patrón estructural específico. Excelente para dolor de espalda baja crónico, ciática, problemas de cadera y desbalances estructurales que otros quiroprácticos no logran corregir."
                    : "A gentle, precise technique that uses padded wedges under your pelvis to correct sacroiliac imbalances. No high-velocity manipulations. Three different categories based on your specific structural pattern. Excellent for chronic low back pain, sciatica, hip problems, and structural imbalances that other chiropractors cannot correct."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "CMRT — Ajuste Visceral de Órganos" : "CMRT — Visceral Organ Adjusting"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Técnica Manipulativa de Reflejos Quiroprácticos. Trabaja a través de puntos reflejos específicos en la columna para influir en la función de órganos internos. Por eso podemos ayudar con condiciones que tradicionalmente se consideran 'médicas': reflujo gastroesofágico (GERD), síndrome del intestino irritable (IBS), estreñimiento crónico, cólico infantil, infecciones de oído recurrentes, problemas de fertilidad y asma."
                    : "Chiropractic Manipulative Reflex Technique. Works through specific spinal reflex points to influence internal organ function. That is why we can help with conditions traditionally considered 'medical': GERD, IBS, chronic constipation, infant colic, recurring ear infections, fertility issues, and asthma."}
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{isEs ? "Craneopatía SOT — Trabajo Craneal Suave" : "SOT Craniopathy — Gentle Cranial Work"}</h3>
                <p className={styles.cardText}>
                  {isEs
                    ? "Corrección suave de huesos craneales usando solo 5 gramos de presión — la misma presión que necesitaría para presionar una uva sin reventarla. Útil para vértigo, trastornos de TMJ, síndrome post-concusión, migrañas crónicas, torticolis infantil, plagiocefalia (cabeza plana) y dificultades de lactancia."
                    : "Gentle cranial bone correction using only 5 grams of pressure — the same pressure you would need to press a grape without crushing it. Useful for vertigo, TMJ disorders, post-concussion syndrome, chronic migraines, infant torticollis, plagiocephaly (flat head syndrome), and breastfeeding difficulties."}
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Servimos a toda la comunidad hispana de San Antonio" : "Serving all of San Antonio's Hispanic community"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "Atendemos a familias hispanas y latinas de todo San Antonio y los vecindarios circundantes — desde Stone Oak y Castle Hills hasta el Westside, Northside, Southside y más allá. Nuestra ubicación en NW Military Hwy es céntrica y accesible desde cualquier zona. También atendemos pacientes que viajan desde Boerne, Helotes, Schertz, Cibolo, Universal City y Live Oak."
                : "We serve Hispanic and Latino families from all over San Antonio and surrounding neighborhoods — from Stone Oak and Castle Hills to the Westside, Northside, Southside and beyond. Our location on NW Military Hwy is central and accessible from any area. We also serve patients traveling from Boerne, Helotes, Schertz, Cibolo, Universal City, and Live Oak."}
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

          {/* Related */}
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

          {/* CTA */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>
              {isEs ? "Reserve su evaluación gratuita con un quiropráctico bilingüe" : "Book your free evaluation with a bilingual chiropractor"}
            </h2>
            <p className={styles.ctaText}>
              {isEs
                ? "Llame al (210) 685-1994 y nuestro equipo bilingüe lo atenderá en español. Su primera evaluación es gratuita — sin compromiso. También puede reservar en línea las 24 horas."
                : "Call (210) 685-1994 and our bilingual team will serve you in Spanish. Your first evaluation is free — no commitment. You can also book online 24/7."}
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
