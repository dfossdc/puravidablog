import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./testimonials.module.css";

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
  const canonical = `${BASE_URL}/${locale}/testimonials`;
  return {
    title: isEs
      ? "Testimonios | Pura Vida Chiropractic San Antonio"
      : "Patient Testimonials | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "147 reseñas de cinco estrellas de pacientes de San Antonio, TX que encontraron alivio con el Dr. Dan Foss — quiropráctica SOT, terapia SoftWave y más."
      : "Read 147 five-star Google reviews from San Antonio, TX patients of Dr. Dan Foss — SOT chiropractic, SoftWave therapy, auto injury, prenatal, and more.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/testimonials`,
        es: `${BASE_URL}/es/testimonials`,
        "x-default": `${BASE_URL}/en/testimonials`,
      },
    },
    openGraph: {
      title: isEs
        ? "Testimonios de Pacientes | Pura Vida Quiropráctica San Antonio"
        : "Patient Testimonials | Pura Vida Chiropractic San Antonio TX",
      description: isEs
        ? "Historias reales de pacientes que encontraron alivio del dolor con el Dr. Dan Foss en San Antonio, TX."
        : "Real 5-star Google reviews and video testimonials from patients of Dr. Dan Foss in San Antonio, TX.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
    },
  };
}

/* ── Video testimonials ──────────────────────────────────── */
const videoTestimonialsEn = [
  { youtubeId: "zbRrK3LSrgI", title: "No More Neck Pain — Patient Testimonial" },
  { youtubeId: "DgGkCHYhfjE", title: "Auto Accident Recovery — Patient Testimonial" },
  { youtubeId: "PcDbAegw9ME", title: "No More Arm Pain — Patient Testimonial" },
  { youtubeId: "fipTPhQ8ARw", title: "Patient Testimonial — Pura Vida Chiropractic" },
];

const videoTestimonialsEs = [
  { youtubeId: "QZ5B9RrqkdU", title: "Adiós Dolor de Espalda — Testimonio de Paciente" },
  { youtubeId: "P6qk2XU-5ak", title: "No Podía Caminar — Testimonio de Paciente" },
  { youtubeId: "-sa_NwGveV4", title: "No Más Dolor — Testimonio de Paciente" },
  { youtubeId: "zbRrK3LSrgI", title: "Sin Dolor de Cuello — Testimonio de Paciente" },
];

/* ── Highlighted Google reviews (English) ───────────────── */
const googleReviewsEn = [
  {
    name: "Sarah M.",
    stars: 5,
    date: "March 2025",
    condition: "Back Pain",
    conditionHref: "/en/conditions/lower-back-pain",
    quote:
      "Dr. Foss is absolutely incredible. I came in barely able to walk from lower back pain and after just a few sessions I was back to normal. He takes the time to explain exactly what he's doing and why. Best chiropractor in San Antonio hands down.",
  },
  {
    name: "David R.",
    stars: 5,
    date: "February 2025",
    condition: "Auto Injury",
    conditionHref: "/en/services/auto-injury",
    quote:
      "After my car accident I tried two other chiropractors with no real improvement. A friend recommended Dr. Foss and within a month I was pain-free. His SOT technique is unlike anything I had experienced. Highly recommend to anyone recovering from an auto accident.",
  },
  {
    name: "Ashley T.",
    stars: 5,
    date: "January 2025",
    condition: "Prenatal Chiropractic",
    conditionHref: "/en/services/prenatal-chiropractor",
    quote:
      "I saw Dr. Foss throughout my entire pregnancy and he was a lifesaver. The pelvic pain I was experiencing disappeared after my second visit. He is incredibly gentle and knowledgeable about prenatal care. I now bring my newborn too!",
  },
  {
    name: "Marcus J.",
    stars: 5,
    date: "December 2024",
    condition: "SoftWave Therapy",
    conditionHref: "/en/services/softwave-therapy",
    quote:
      "The SoftWave therapy Dr. Foss uses for my knee is nothing short of amazing. I was told I needed surgery and I decided to try this first. Three months later my MRI showed significant improvement and no surgery needed. The whole staff is wonderful.",
  },
  {
    name: "Linda K.",
    stars: 5,
    date: "November 2024",
    condition: "Sciatica",
    conditionHref: "/en/conditions/sciatica",
    quote:
      "Sciatica had been ruining my life for over a year. The shooting pain down my leg was unbearable. Dr. Foss identified exactly what was wrong and the combination of adjustments and Class IV laser brought me back to 100%. I wish I had found him sooner.",
  },
  {
    name: "Jennifer W.",
    stars: 5,
    date: "October 2024",
    condition: "Pediatric Chiropractic",
    conditionHref: "/en/services/pediatric-chiropractor",
    quote:
      "I love this place! Dr. Foss is the reason why I got through my pregnancy and flight training. He has always been accommodating schedule-wise and is very fast and gentle with the adjustments. He even has specialty adjustments for stress.",
  },
  {
    name: "Tom B.",
    stars: 5,
    date: "September 2024",
    condition: "Headaches & Migraines",
    conditionHref: "/en/conditions/headaches",
    quote:
      "I suffered from chronic migraines twice a week for years and tried everything. Dr. Foss identified a cervical misalignment causing the headaches and after six weeks of SOT adjustments I am virtually migraine-free. This is life-changing care.",
  },
  {
    name: "Rachel P.",
    stars: 5,
    date: "August 2024",
    condition: "Neck Pain",
    conditionHref: "/en/conditions/neck-pain",
    quote:
      "I had neck and shoulder pain so bad I couldn't turn my head. Dr. Foss is thorough, professional, and genuinely cares about getting to the root cause. After just four adjustments the difference was remarkable. The office is clean, welcoming, and runs on time.",
  },
  {
    name: "Kevin S.",
    stars: 5,
    date: "July 2024",
    condition: "Sports Injury",
    conditionHref: "/en/services/chiropractic-care",
    quote:
      "As a runner I put a lot of stress on my body. Dr. Foss keeps me performing at my best with regular adjustments and shockwave therapy. He has deep knowledge of sports injuries and actually explains the biomechanics. Best chiropractor I have ever seen.",
  },
];

/* ── Written bilingual reviews ───────────────────────────── */
const writtenTestimonials = [
  {
    name: "Patricia H.",
    stars: 5,
    condition: "Chronic Back Pain",
    conditionEs: "Dolor de Espalda Crónico",
    conditionHref: "/conditions/lower-back-pain",
    quote:
      "Dr. Foss completely changed my life. After years of chronic back pain I can finally sleep through the night. His SOT technique is unlike anything I've experienced anywhere else.",
    quoteEs:
      "El Dr. Foss cambió mi vida por completo. Después de años de dolor de espalda crónico, por fin puedo dormir toda la noche. Su técnica SOT es incomparable.",
  },
  {
    name: "Roberto A.",
    stars: 5,
    condition: "Auto Injury",
    conditionEs: "Lesión de Auto",
    conditionHref: "/services/auto-injury",
    quote:
      "After my car accident I was in terrible pain. Dr. Foss and his team helped me recover faster than I ever thought possible. Highly recommend for anyone with auto injuries.",
    quoteEs:
      "Después de mi accidente de auto tenía un dolor terrible. El Dr. Foss y su equipo me ayudaron a recuperarme más rápido de lo que creía posible. Muy recomendado.",
  },
  {
    name: "Ana C.",
    stars: 5,
    condition: "Infant Chiropractic",
    conditionEs: "Quiropráctica para Bebés",
    conditionHref: "/services/infants-chiropractic",
    quote:
      "I brought my two-month-old with colic and sleep issues. Dr. Foss was incredibly gentle and skilled. Within one week my baby was sleeping so much better. Truly gifted with children.",
    quoteEs:
      "Traje a mi bebé de dos meses con cólicos y problemas para dormir. El Dr. Foss fue muy gentil y experto. En una semana mi bebé dormía mucho mejor.",
  },
  {
    name: "Isabel F.",
    stars: 5,
    condition: "Migraines",
    conditionEs: "Migrañas",
    conditionHref: "/conditions/headaches",
    quote:
      "I suffered from migraines twice a week for years. Dr. Foss identified the root cause and after six weeks of treatment I am virtually migraine-free. Life-changing!",
    quoteEs:
      "Sufrí de migrañas dos veces por semana durante años. El Dr. Foss identificó la causa raíz y después de seis semanas de tratamiento estoy prácticamente libre de migrañas.",
  },
  {
    name: "Thomas N.",
    stars: 5,
    condition: "Sciatica",
    conditionEs: "Ciática",
    conditionHref: "/conditions/sciatica",
    quote:
      "Sciatica had me limping for months. One month with Dr. Foss and the Class IV laser and I'm back to jogging. The entire staff is outstanding.",
    quoteEs:
      "La ciática me tuvo cojeando durante meses. Un mes con el Dr. Foss y el láser Clase IV y ya estoy trotando de nuevo. Todo el personal es excelente.",
  },
  {
    name: "Linda B.",
    stars: 5,
    condition: "SoftWave Therapy",
    conditionEs: "Terapia SoftWave",
    conditionHref: "/services/softwave-therapy",
    quote:
      "The SoftWave therapy for my knee was amazing. I avoided surgery thanks to Dr. Foss. His office is professional and everyone is so kind and welcoming.",
    quoteEs:
      "La terapia SoftWave para mi rodilla fue increíble. Evité la cirugía gracias al Dr. Foss. Su consultorio es profesional y todos son muy amables y acogedores.",
  },
];

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const videos = isEs ? videoTestimonialsEs : videoTestimonialsEn;

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": BASE_URL,
    name: "Pura Vida Chiropractic",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "147",
      bestRating: "5",
      worstRating: "1",
    },
    review: googleReviewsEn.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.stars),
        bestRating: "5",
      },
      reviewBody: r.quote,
      datePublished: r.date,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Testimonios" : "Testimonials",
        item: `${BASE_URL}/${locale}/testimonials`,
      },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/testimonials" />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <p className={styles.heroEyebrow}>
            {isEs ? "Pura Vida Chiropractic · San Antonio, TX" : "Pura Vida Chiropractic · San Antonio, TX"}
          </p>
          <h1 className={styles.heroTitle}>
            {isEs ? "Lo Que Dicen Nuestros Pacientes" : "What Our Patients Say"}
          </h1>
          <p className={styles.heroSub}>
            {isEs
              ? "147 reseñas de cinco estrellas de familias de San Antonio que encontraron alivio real con el "
              : "147 five-star reviews from San Antonio families who found real relief with "}
            <Link href={`/${locale}/about`} className={styles.heroLink}>
              {isEs ? "Dr. Dan Foss" : "Dr. Dan Foss"}
            </Link>
            {isEs
              ? " y el equipo de Pura Vida."
              : " and the Pura Vida team."}
          </p>
        </section>

        {/* ── Stats Bar ── */}
        <div className={styles.statsBar}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNum}>147+</span>
              <span className={styles.statLabel}>
                {isEs ? "Reseñas de 5 Estrellas" : "5-Star Reviews"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9★</span>
              <span className={styles.statLabel}>
                {isEs ? "Calificación en Google" : "Google Rating"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>23+</span>
              <span className={styles.statLabel}>
                {isEs ? "Años de Experiencia" : "Years of Experience"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>EN/ES</span>
              <span className={styles.statLabel}>
                {isEs ? "Clínica Bilingüe" : "Bilingual Clinic"}
              </span>
            </div>
          </div>
        </div>

        {/* ── Video Testimonials ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Testimonios en Video" : "Video Testimonials"}
          </h2>
          <p className={styles.sectionSub}>
            {isEs
              ? "Escucha directamente de nuestros pacientes cómo la quiropráctica cambió sus vidas."
              : "Hear directly from our patients how chiropractic care changed their lives."}
          </p>
          <div className={styles.videoGrid}>
            {videos.map((v) => (
              <div key={v.youtubeId} className={styles.videoCard}>
                <div className={styles.videoWrap}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoFrame}
                  />
                </div>
                <div className={styles.videoInfo}>
                  <p className={styles.videoName}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Google Reviews (EN only) / Highlighted reviews (ES) ── */}
        {!isEs && (
          <section className={styles.googleSection}>
            <div className={styles.googleSectionInner}>
              <div className={styles.googleSectionHead}>
                <span className={styles.googleBadge}>
                  <span className={styles.gLetter}>G</span>
                  Google Reviews
                </span>
                <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
                  Highlighted 5-Star Reviews
                </h2>
                <p className={styles.sectionSub} style={{ marginBottom: 0 }}>
                  Verified patient reviews from our{" "}
                  <a
                    href="https://google.com/maps/place/Pura+Vida+Chiropractic/data=!4m2!3m1!1s0x0:0x1c1e96c3d09ddb87?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleMapLink}
                  >
                    Google Business Profile
                  </a>
                </p>
              </div>
              <div className={styles.googleGrid}>
                {googleReviewsEn.map((r) => (
                  <div key={r.name} className={styles.googleCard}>
                    <div className={styles.googleCardTop}>
                      <div className={styles.googleAvatar}>
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className={styles.googleName}>{r.name}</p>
                        <p className={styles.googleDate}>{r.date}</p>
                      </div>
                      <span className={styles.googleLogo} aria-label="Google review">G</span>
                    </div>
                    <div className={styles.googleStars}>{"★".repeat(r.stars)}</div>
                    <p className={styles.googleQuote}>&ldquo;{r.quote}&rdquo;</p>
                    <Link
                      href={r.conditionHref}
                      className={styles.conditionBadge}
                    >
                      {r.condition}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Written / Bilingual Reviews ── */}
        <section className={styles.section} style={{ paddingTop: 0 }}>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Más Reseñas de Pacientes" : "More Patient Reviews"}
          </h2>
          <p className={styles.sectionSub}>
            {isEs
              ? "Experiencias reales de pacientes bilingües de San Antonio, TX."
              : "Real experiences from bilingual patients across San Antonio, TX."}
          </p>
          <div className={styles.writtenGrid}>
            {writtenTestimonials.map((t) => (
              <div key={t.name} className={styles.reviewCard}>
                <div className={styles.stars}>{"★".repeat(t.stars)}</div>
                <p className={styles.reviewQuote}>
                  &ldquo;{isEs ? t.quoteEs : t.quote}&rdquo;
                </p>
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewerName}>{t.name}</span>
                  <Link
                    href={`/${locale}${t.conditionHref}`}
                    className={styles.conditionBadge}
                  >
                    {isEs ? t.conditionEs : t.condition}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Leave a Review CTA ── */}
        <div className={styles.googleCta}>
          <h2>
            {isEs ? "¿Has Visitado Pura Vida?" : "Have You Visited Pura Vida?"}
          </h2>
          <p>
            {isEs
              ? "Su reseña ayuda a otras familias de San Antonio a encontrar el alivio que necesitan."
              : "Your review helps other San Antonio families find the relief they need. Share your experience on Google!"}
          </p>
          <a
            href="https://google.com/maps/place/Pura+Vida+Chiropractic/data=!4m2!3m1!1s0x0:0x1c1e96c3d09ddb87?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            <span className={styles.gCircle}>G</span>
            {isEs ? "Dejar una Reseña en Google" : "Leave a Google Review"}
          </a>
        </div>

        {/* ── Final CTA ── */}
        <section className={styles.finalCta}>
          <h2>
            {isEs ? "¿Listo para Empezar su Recuperación?" : "Ready to Start Your Recovery?"}
          </h2>
          <p>
            {isEs
              ? "Únase a miles de pacientes satisfechos en San Antonio. Programe su evaluación gratuita con el Dr. Dan Foss hoy."
              : "Join thousands of satisfied patients in San Antonio. Schedule your free evaluation with Dr. Dan Foss today."}
          </p>
          <div className={styles.ctaLinks}>
            <a
              href="https://puravidasanantonio.com/special/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {isEs ? "Obtenga su Evaluación Gratis" : "Get Your Free Evaluation"}
            </a>
            <Link href={`/${locale}/services/chiropractic-care`} className={styles.ctaSecondary}>
              {isEs ? "Ver Servicios →" : "Explore Services →"}
            </Link>
            <Link href={`/${locale}/conditions/lower-back-pain`} className={styles.ctaSecondary}>
              {isEs ? "Ver Condiciones →" : "View Conditions →"}
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
