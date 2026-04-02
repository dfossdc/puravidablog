import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ReviewCarousel from "@/components/ReviewCarousel";
import styles from "./home.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}`;
  return {
    title: isEs
      ? "Quiropráctica en San Antonio TX | Pura Vida Chiropractic"
      : "Chiropractor in San Antonio TX | Pura Vida Chiropractic",
    description: isEs
      ? "El Dr. Dan Foss ofrece atención quiropráctica bilingüe en San Antonio, TX. Técnica SOT, más de 23 años de experiencia. ¡Evaluación gratuita!"
      : "Dr. Dan Foss offers bilingual chiropractic care in San Antonio, TX. SOT technique, 23+ years experience. Free evaluation!",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctica San Antonio TX | Pura Vida Chiropractic"
        : "Chiropractor San Antonio TX | Pura Vida Chiropractic",
      description: isEs
        ? "Atención quiropráctica bilingüe en San Antonio. Dr. Dan Foss, DC — más de 23 años de experiencia."
        : "Bilingual chiropractic care in San Antonio. Dr. Dan Foss, DC — 23+ years experience.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const services = [
  {
    slugEn: "chiropractic-care",
    slugEs: "chiropractic-care",
    nameEn: "Chiropractic Care",
    nameEs: "Cuidado Quiropráctico",
    image: "/images/dr-foss-adjusting-patient.webp",
    alt: "Chiropractic care adjustment",
  },
  {
    slugEn: "cranial-chiropractic",
    slugEs: "cranial-chiropractic",
    nameEn: "Cranial Chiropractic",
    nameEs: "Quiropráctica Craneal",
    image: "/images/cranialadult.jpg",
    alt: "Cranial chiropractic therapy",
  },
  {
    slugEn: "softwave-therapy",
    slugEs: "terapia-softwave",
    nameEn: "SoftWave Therapy",
    nameEs: "Terapia SoftWave",
    image: "/images/shockwave-back.webp",
    alt: "SoftWave therapy treatment",
  },
  {
    slugEn: "shockwave-therapy",
    slugEs: "terapia-ondas-de-choque",
    nameEn: "Shockwave Therapy",
    nameEs: "Terapia de Ondas de Choque",
    image: "/images/shockwave-back.webp",
    alt: "Shockwave therapy treatment",
  },
  {
    slugEn: "pediatric-chiropractic",
    slugEs: "pediatric-chiropractic",
    nameEn: "Pediatric Chiropractic",
    nameEs: "Quiropráctica Pediátrica",
    image: "/images/dr-foss-adjusting-child.webp",
    alt: "Pediatric chiropractic care",
  },
  {
    slugEn: "pregnancy-chiropractic",
    slugEs: "pregnancy-chiropractic",
    nameEn: "Pregnancy Chiropractic",
    nameEs: "Quiropráctica Prenatal",
    image: "/images/pregnant-patient.webp",
    alt: "Pregnancy chiropractic care",
  },
  {
    slugEn: "class-iv-laser",
    slugEs: "laser-clase-iv",
    nameEn: "Class IV Laser",
    nameEs: "Láser Clase IV",
    image: "/images/laser-therapy-knee.webp",
    alt: "Class IV laser therapy",
  },
  {
    slugEn: "latino-community",
    slugEs: "latino-community",
    nameEn: "Latino Community",
    nameEs: "Comunidad Latina",
    image: "/images/latino-community.png",
    alt: "Bilingual chiropractic care for the Latino community",
  },
];

const conditions = [
  {
    nameEN: "NECK PAIN", nameES: "DOLOR DE CUELLO",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp",
    hrefEN: "/en/blog/neck-pain-chiropractor-san-antonio", hrefES: "/es/blog/dolor-de-cuello-quiropractico-san-antonio",
  },
  {
    nameEN: "LOWER BACK PAIN", nameES: "DOLOR DE ESPALDA",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp",
    hrefEN: "/en/blog/back-pain-chiropractor-san-antonio", hrefES: "/es/blog/dolor-de-espalda-quiropractico-san-antonio",
  },
  {
    nameEN: "HEADACHES", nameES: "DOLORES DE CABEZA",
    image: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=600&q=80",
    hrefEN: "/en/blog/headaches-migraines-chiropractor-san-antonio", hrefES: "/es/blog/dolores-de-cabeza-migranas-san-antonio",
  },
  {
    nameEN: "SCIATICA", nameES: "CIÁTICA",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    hrefEN: "/en/blog/sciatica-chiropractor-san-antonio", hrefES: "/es/blog/ciatica-quiropractico-san-antonio",
  },
  {
    nameEN: "DISC PROBLEMS", nameES: "HERNIA DE DISCO",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    hrefEN: "/en/blog/herniated-disc-chiropractor-san-antonio", hrefES: "/es/blog/hernia-disco-quiropractico-san-antonio",
  },
  {
    nameEN: "PLANTAR FASCIITIS", nameES: "FASCITIS PLANTAR",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    hrefEN: "/en/services/shockwave-therapy", hrefES: "/es/services/terapia-ondas-de-choque",
  },
  {
    nameEN: "HIP, KNEE & ANKLE", nameES: "CADERA, RODILLA Y PIE",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80",
    hrefEN: "/en/services/softwave-therapy", hrefES: "/es/services/terapia-softwave",
  },
  {
    nameEN: "SHOULDER & ELBOW", nameES: "HOMBRO Y CODO",
    image: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80",
    hrefEN: "/en/services/shockwave-therapy", hrefES: "/es/services/terapia-ondas-de-choque",
  },
  {
    nameEN: "AUTO ACCIDENT", nameES: "ACCIDENTE DE AUTO",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp",
    hrefEN: "/en/blog/auto-injury", hrefES: "/es/blog/lesiones-de-auto",
  },
  {
    nameEN: "PREGNANCY PAIN", nameES: "DOLOR EN EL EMBARAZO",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Pregnant-Patient-HP-circle.webp",
    hrefEN: "/en/services/pregnancy-chiropractic", hrefES: "/es/services/pregnancy-chiropractic",
  },
  {
    nameEN: "SPORTS INJURY", nameES: "LESIONES DEPORTIVAS",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80",
    hrefEN: "/en/sports-chiropractic", hrefES: "/es/sports-chiropractic",
  },
  {
    nameEN: "ARTHRITIS & JOINTS", nameES: "ARTRITIS Y ARTICULACIONES",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    hrefEN: "/en/services/softwave-therapy", hrefES: "/es/services/terapia-softwave",
  },
  {
    nameEN: "TMJ & JAW PAIN", nameES: "DOLOR DE MANDÍBULA",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242c54c?w=600&q=80",
    hrefEN: "/en/blog/a-doctor-s-perspective-on-tmj", hrefES: "/es/blog/a-doctor-s-perspective-on-tmj",
  },
  {
    nameEN: "POSTURAL CORRECTION", nameES: "CORRECCIÓN POSTURAL",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Patients-Neck-HP-circle.webp",
    hrefEN: "/en/services/sot-chiropractic", hrefES: "/es/services/quiropractica-sot",
  },
  {
    nameEN: "NEUROPATHY & NUMBNESS", nameES: "NEUROPATÍA Y ENTUMECIMIENTO",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Laser-Therapy-Being-Used-On-A-Knee-HP-circle.webp",
    hrefEN: "/en/services/class-iv-laser", hrefES: "/es/services/laser-clase-iv",
  },
];

const videoTestimonials = [
  { id: "JrWGLXMUjTQ", titleEn: "Patient Testimony", titleEs: "Testimonio Paciente" },
  { id: "PiY9pCDDZTI", titleEn: "Quality of Life 100%", titleEs: "Calidad de Vida 100%" },
  { id: "MTkj64jX_bw", titleEn: "Webster Technique", titleEs: "Técnica Webster" },
  { id: "QZ5B9RrqkdU", titleEn: "Goodbye Back Pain", titleEs: "Adiós al Dolor de Espalda" },
  { id: "P6qk2XU-5ak", titleEn: "Couldn't Walk", titleEs: "No Podía Caminar" },
  { id: "-sa_NwGveV4", titleEn: "No More Pain or Fatigue!", titleEs: "¡No más Dolor ni Cansancio!" },
  { id: "zbRrK3LSrgI", titleEn: "No More Neck Pain", titleEs: "Sin Dolor de Cuello" },
  { id: "DgGkCHYhfjE", titleEn: "Car Accident & Sinusitis", titleEs: "Accidente y Sinusitis" },
];

function WaveDown({ fill }: { fill: string }) {
  return (
    <div className={styles.waveDivider}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z`} fill={fill} />
      </svg>
    </div>
  );
}

function WaveUp({ fill }: { fill: string }) {
  return (
    <div className={styles.waveDividerUp}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z`} fill={fill} />
      </svg>
    </div>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const welcomeVideoId = isEs ? "aQgkzlxAof0" : "XWHe6AukR0E";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Pura Vida Chiropractic",
    "description": "Bilingual chiropractic clinic in San Antonio, TX. Dr. Dan Foss, DC — SOT technique, 23+ years experience.",
    "url": BASE_URL,
    "telephone": "+12106851994",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2318 NW Military Hwy Suite 103",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78231",
      "addressCountry": "US",
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Thursday"], "opens": "07:00", "closes": "16:00" },
    ],
    "medicalSpecialty": "Chiropractic",
    "priceRange": "$$",
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <LocalBusinessSchema />

        {/* ── HERO ──────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>
                {isEs ? "Cuidado Quiropráctico Bilingüe — San Antonio, TX" : "Bilingual Chiropractic Care — San Antonio, TX"}
              </p>
              <h1 className={styles.heroTitle}>
                {isEs ? "Quiropráctico de San Antonio Mejor Calificado" : "Top Rated San Antonio Chiropractor"}
              </h1>
              <p className={styles.heroSub}>
                {isEs
                  ? "El Dr. Dan Foss de Pura Vida Quiropráctica es un destacado quiropráctico bilingüe que sirve a San Antonio, Castle Hills, Stone Oak, Alamo Heights, Leon Valley, Helotes y Shavano Park — brindando cuidado personalizado para toda su familia."
                  : "Dr. Dan Foss of Pura Vida Chiropractic is a leading bilingual chiropractor serving San Antonio, Castle Hills, Stone Oak, Alamo Heights, Leon Valley, Helotes, and Shavano Park — providing personalized care for your entire family."}
              </p>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>⭐ {isEs ? "147+ Reseñas 5 Estrellas" : "147+ Five-Star Reviews"}</span>
                <span className={styles.heroTrustItem}>✓ {isEs ? "23+ Años de Experiencia" : "23+ Years Experience"}</span>
                <span className={styles.heroTrustItem}>🗣 {isEs ? "Bilingüe EN/ES" : "Bilingual EN/ES"}</span>
              </div>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.heroCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reserve Ahora →" : "Book Now →"}
              </a>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-About.webp"
                alt={isEs ? "Dr. Dan Foss Quiropráctico San Antonio TX" : "Dr. Dan Foss Chiropractor San Antonio TX"}
                fill
                className={styles.heroImg}
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Wave: Hero (light) → Trust bar (blue) */}
        <WaveDown fill="#2E7EA6" />

        {/* ── TRUST BAR ─────────────────────────────── */}
        <section className={styles.trustBar}>
          <div className={styles.trustInner}>
            {(isEs
              ? ["23+ Años de Experiencia", "Certificado SOT Avanzado", "¡Hablamos Español!", "San Antonio desde 2010", "3 Continentes · 5 Países"]
              : ["23+ Years Experience", "Advanced SOT Certified", "Bilingual EN/ES — ¡Hablamos Español!", "San Antonio Since 2010", "3 Continents · 5 Countries"]
            ).map((item) => (
              <span key={item} className={styles.trustItem}>{item}</span>
            ))}
          </div>
        </section>

        {/* Wave: Trust bar (blue) → About (#F4F9FF) */}
        <WaveDown fill="#F4F9FF" />

        {/* ── WELCOME VIDEO ─────────────────────────── */}
        <section className={styles.videoSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Bienvenido a Pura Vida Quiropráctica" : "Welcome To Pura Vida Chiropractic"}
            </h2>
            <p className={styles.videoSub}>
              {isEs
                ? "Conozca al Dr. Dan Foss y descubra cómo nuestro Protocolo Pura Vida puede ayudarle."
                : "Meet Dr. Dan Foss and discover how our Pura Vida Protocol can help you achieve optimal health."}
            </p>
            <div className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${welcomeVideoId}`}
                title={isEs ? "Bienvenido a Pura Vida Quiropráctica" : "Welcome To Pura Vida Chiropractic"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────── */}
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                {isEs ? "Sobre el Dr. Dan Foss" : "About Dr. Dan Foss"}
              </h2>
              <p>
                {isEs
                  ? "En Pura Vida Quiropráctica, creemos que su cuerpo fue diseñado para sanar. El Dr. Dan Foss trae más de 23 años de experiencia quiropráctica internacional — estudiando en 3 continentes y 5 países — a las familias de San Antonio. Su exclusivo Protocolo Pura Vida integra quiropráctica, osteopatía, terapia manual y modalidades energéticas, tratando la causa raíz, no solo los síntomas."
                  : "At Pura Vida Chiropractic, we believe your body was designed to heal. Dr. Dan Foss brings over 23 years of international chiropractic experience — studying across 3 continents and 5 countries — to San Antonio families. His unique Pura Vida Protocol integrates chiropractic, osteopathic, manual therapy, and energetic modalities, treating the root cause, not just the symptoms."}
              </p>
              <div className={styles.aboutBtns}>
                <Link href={`/${locale}/about`} className={styles.learnMore}>
                  {isEs ? "Conozca al Dr. Foss →" : "Meet Dr. Foss →"}
                </Link>
                <Link href={`/${locale}/testimonials`} className={styles.learnMoreSecondary}>
                  {isEs ? "Ver Testimonios →" : "Read Testimonials →"}
                </Link>
              </div>
            </div>
            <div className={styles.aboutPhoto}>
              <Image
                src="/images/dr-foss-about-hp.webp"
                alt="Dr. Dan Foss, chiropractor in San Antonio TX"
                width={480}
                height={540}
                className={styles.aboutImg}
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* Wave: About (#F4F9FF) → Stats (#0d1f2d) */}
        <WaveDown fill="#0d1f2d" />

        {/* ── STATS / IMPACT ────────────────────────── */}
        <section className={styles.statsSection}>
          <p className={styles.statsEyebrow}>
            {isEs ? "Comprometidos con San Antonio" : "Committed to San Antonio"}
          </p>
          <h2 className={styles.statsTitle}>
            {isEs
              ? "Descubre el Impacto del Cuidado Quiropráctico"
              : "Discover the Impact of Chiropractic Care"}
          </h2>
          <p className={styles.statsSub}>
            {isEs
              ? "Durante más de dos décadas, el Dr. Foss ha ayudado a familias de San Antonio a encontrar alivio real y recuperar su calidad de vida."
              : "For over two decades, Dr. Foss has helped San Antonio families find real relief and reclaim their quality of life."}
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>23</div>
              <div className={styles.statLabel}>
                {isEs ? "Años de Experiencia" : "Years of Experience"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>
                {isEs ? "Satisfacción del Paciente" : "Patient Satisfaction"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>147+</div>
              <div className={styles.statLabel}>
                {isEs ? "Reseñas de 5 Estrellas" : "Five-Star Reviews"}
              </div>
            </div>
          </div>

          <div className={styles.statsCtaWrap}>
            <div className={styles.statsCtaLine} aria-hidden="true" />
            <a
              href="https://puravidasanantonio.com/special/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.statsCta}
            >
              {isEs ? "Obtenga su Evaluación Gratis" : "Get Your Free Evaluation"}
            </a>
            <div className={styles.statsCtaLine} aria-hidden="true" />
          </div>

          <p className={styles.statsTagline}>
            {isEs
              ? "Únase a miles de familias de San Antonio que encontraron alivio real."
              : "Join thousands of San Antonio families who found real relief."}
          </p>
        </section>

        {/* Wave: Stats (#0d1f2d) → Why Different (#ffffff) */}
        <WaveUp fill="#0d1f2d" />
        <WaveDown fill="#ffffff" />

        {/* ── WHY DIFFERENT ─────────────────────────── */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "¿Por Qué Nuestro Enfoque Es Diferente?" : "Why Is Our Approach Different?"}
            </h2>
            <p className={styles.whySub}>
              {isEs
                ? "El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con Certificación SOT Avanzada. El Protocolo Pura Vida ha ayudado a decenas de miles de pacientes."
                : "Dr. Foss is one of the few chiropractors in San Antonio with Advanced SOT Certification through SORSI. The Pura Vida Protocol has helped tens of thousands of patients."}
            </p>
            <div className={styles.pillarsGrid}>
              {(isEs
                ? [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss realizando ajuste quiropráctico", title: "Quiropráctica", desc: "Ajustes SOT® Certificado Avanzado de columna y pelvis que restauran la alineación correcta y la función del sistema nervioso." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss realizando ajuste craneal", title: "Ajuste Craneal", desc: "Técnicas precisas de huesos craneales que alivian la presión, mejoran la función cerebral y abordan dolores de cabeza, mandíbula y cuello." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss realizando manipulación de órganos", title: "Manipulación de Órganos", desc: "Técnicas viscerales suaves para restaurar la posición, movilidad y función correcta de los órganos, mejorando la salud integral." },
                    { img: "/images/shockwave-back.webp", imgAlt: "Dr. Foss realizando terapia de ondas de choque", title: "Modalidades Avanzadas", desc: "Terapias SoftWave, Ondas de Choque y Láser Clase IV para cicatrización acelerada y alivio del dolor." },
                  ]
                : [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss performing chiropractic adjustment", title: "Chiropractic", desc: "Advanced SOT® Certified spinal and pelvic adjustments that restore proper alignment and full nervous system function." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss performing cranial adjusting", title: "Cranial Adjusting", desc: "Precise cranial bone techniques that relieve pressure, improve brain function, and address headaches, jaw pain, and more." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss performing organ manipulation", title: "Organ Manipulation", desc: "Gentle visceral techniques to restore proper organ position, mobility, and function for improved whole-body health." },
                    { img: "/images/shockwave-back.webp", imgAlt: "Dr. Foss performing shockwave therapy", title: "Advanced Modalities", desc: "SoftWave, Shockwave, and Class IV Laser therapies for accelerated healing and lasting pain relief." },
                  ]
              ).map((p) => (
                <div key={p.title} className={styles.pillar}>
                  <div className={styles.pillarImgWrap}>
                    <Image
                      src={p.img}
                      alt={p.imgAlt}
                      fill
                      className={styles.pillarImg}
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className={styles.pillarBody}>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: Why (#ffffff) → Services (#F4F9FF) */}
        <WaveDown fill="#F4F9FF" />

        {/* ── SERVICES ──────────────────────────────── */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Nuestros Servicios" : "Our Services"}
            </h2>
            <div className={styles.servicesGrid}>
              {services.map((svc) => {
                const slug = isEs ? svc.slugEs : svc.slugEn;
                const name = isEs ? svc.nameEs : svc.nameEn;
                return (
                  <Link key={svc.slugEn} href={`/${locale}/services/${slug}`} className={styles.serviceCard}>
                    <div className={styles.serviceImgWrap}>
                      <Image
                        src={svc.image}
                        alt={svc.alt}
                        fill
                        className={styles.serviceImg}
                        sizes="160px"
                      />
                    </div>
                    <span className={styles.serviceName}>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Services (#F4F9FF) → Conditions (#ffffff) */}
        <WaveDown fill="#ffffff" />

        {/* ── CONDITIONS PHOTO GRID ─────────────────── */}
        <section className={styles.conditionsSection}>
          <p className={styles.conditionsSectionTitle}>
            {isEs ? "TRATAMOS LAS SIGUIENTES CONDICIONES" : "WE HELP WITH THE FOLLOWING CONDITIONS"}
          </p>
          <div className={styles.conditionsGrid}>
            {conditions.map((c) => {
              const href = isEs ? c.hrefES : c.hrefEN;
              const name = isEs ? c.nameES : c.nameEN;
              return (
                <Link key={c.nameEN} href={href} className={styles.conditionCard}>
                  <Image
                    src={c.image}
                    alt={name}
                    fill
                    className={styles.conditionImg}
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    unoptimized
                  />
                  <div className={styles.conditionOverlay} aria-hidden="true" />
                  <span className={styles.conditionName}>{name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Wave: Conditions (#ffffff) → Testimonials (dark) */}
        <WaveDown fill="#0d2a3a" />

        {/* ── VIDEO TESTIMONIALS ────────────────────── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} style={{ color: "#ffffff" }}>
              {isEs ? "Lo Que Dicen Nuestros Pacientes" : "What Our Patients Say"}
            </h2>
            <p className={styles.testimonialsSub}>
              {isEs
                ? "Historias reales de pacientes que encontraron alivio con el Dr. Dan Foss en San Antonio, TX."
                : "Real patient stories of relief with Dr. Dan Foss in San Antonio, TX."}
            </p>
            <div className={styles.videosGrid}>
              {videoTestimonials.map((v) => (
                <div key={v.id} className={styles.videoCard}>
                  <div className={styles.videoCardEmbed}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={isEs ? v.titleEs : v.titleEn}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.videoCardIframe}
                      loading="lazy"
                    />
                  </div>
                  <p className={styles.videoCardTitle}>{isEs ? v.titleEs : v.titleEn}</p>
                </div>
              ))}
            </div>
            <div className={styles.testimonialsMoreWrap}>
              <Link href={`/${locale}/testimonials`} className={styles.testimonialsMore}>
                {isEs ? "Ver Todos los Testimonios →" : "View All Testimonials →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Wave: Testimonials (dark) → Review Carousel (dark) */}
        <WaveUp fill="#0d2a3a" />

        {/* ── REVIEW CAROUSEL ───────────────────────── */}
        <ReviewCarousel locale={locale as "en" | "es"} />

        {/* ── NEW PATIENT SPECIAL ───────────────────── */}
        <section className={styles.newPatientSection}>
          <div className={styles.newPatientInner}>
            <div className={styles.newPatientText}>
              <h2 className={styles.newPatientTitle}>
                {isEs ? "¿Es Usted Nuevo en Nuestra Oficina?" : "Are You New to Our Office?"}
              </h2>
              <p className={styles.newPatientDesc}>
                {isEs
                  ? "Su consulta gratuita incluye una cita individual con el Dr. Dan Foss, donde tomaremos el tiempo para hablar sobre sus preocupaciones de salud actuales y determinar si usted es un buen candidato para el cuidado quiropráctico. Recibirá recomendaciones expertas enfocadas en corregir la causa raíz de su problema, no solo los síntomas. Y si determinamos que no podemos ayudarle, haremos todo lo posible para guiarle al proveedor adecuado."
                  : "Your free consultation includes a one-on-one appointment with Dr. Dan Foss, where we will take the time to discuss your current health concerns and determine if you are a good candidate for chiropractic care. You'll receive expert recommendations focused on correcting the root cause of your problem — not just the symptoms. And if we determine that we cannot help you, we will do everything we can to guide you to the right provider who can."}
              </p>
              <a href="https://puravidasanantonio.com/special/" className={styles.newPatientBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Comenzar Hoy →" : "Get Started Today →"}
              </a>
            </div>
            <div className={styles.newPatientPhoto}>
              <Image
                src="/images/newpatientphoto.jpg"
                alt={isEs
                  ? "Dr. Dan Foss en consulta con paciente en Pura Vida Quiropráctica San Antonio"
                  : "Dr. Dan Foss consulting with patient at Pura Vida Chiropractic San Antonio"}
                width={550}
                height={500}
                className={styles.newPatientImg}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>
        </section>

        {/* Wave: New Patient (white) → Final CTA (dark blue) */}
        <WaveDown fill="#0d2a3a" />

        {/* ── FINAL CTA ─────────────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.sectionInner}>
            <h2 className={styles.finalCtaTitle}>
              {isEs ? "¿Listo para Sentirse Mejor?" : "Ready to Feel Better?"}
            </h2>
            <p className={styles.finalCtaSub}>
              {isEs
                ? "No hay riesgo en ver lo que podemos hacer por usted. Llámenos hoy o reserve su evaluación gratuita en línea."
                : "There is no risk to see what we can do for you. Call us today or book your free evaluation online."}
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="https://puravidasanantonio.com/special/" className={styles.finalCtaBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Reservar Evaluación Gratis" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.finalCtaPhone}>(210) 685-1994</a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
