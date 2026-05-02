import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchPosts } from "@/lib/posts";
import { fetchSotPages } from "@/lib/sot";
import { conditionsContent } from "@/lib/conditionsContent";
import { neighborhoods } from "@/lib/neighborhoods";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/site-map`;
  return {
    title: isEs
      ? "Mapa del Sitio | Pura Vida Chiropractic"
      : "Site Map | Pura Vida Chiropractic",
    description: isEs
      ? "Índice completo de páginas en puravidasanantonio.com — quiropráctico en San Antonio, TX."
      : "Complete index of pages on puravidasanantonio.com — chiropractor in San Antonio, TX.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/site-map`,
        es: `${BASE_URL}/es/site-map`,
        "x-default": `${BASE_URL}/en/site-map`,
      },
    },
    openGraph: {
      title: isEs ? "Mapa del Sitio — Pura Vida" : "Site Map — Pura Vida",
      description: isEs
        ? "Encuentre cualquier página en puravidasanantonio.com."
        : "Find any page on puravidasanantonio.com.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
    },
  };
}

// Static lists used by the XML sitemap, restated here so the HTML sitemap
// stays in sync. Updating either list updates both — keep them aligned by
// hand when adding new pages.
const enServices = [
  "chiropractic-care", "sot-chiropractic", "softwave-therapy", "auto-injury",
  "pediatric-chiropractor", "prenatal-chiropractor", "pregnancy-chiropractor",
  "infants-chiropractic", "shockwave-therapy", "class-iv-laser",
  "wellness-care", "latino-community",
];
const esServices = [
  "chiropractic-care", "quiropractica-sot", "terapia-softwave", "lesiones-de-auto",
  "quiropractico-pediatrico", "quiropractico-prenatal", "quiropractico-embarazo",
  "quiropractico-infantes", "terapia-ondas-de-choque", "laser-clase-iv",
  "wellness-care", "latino-community",
];

const staticPages: { slug: string; en: string; es: string }[] = [
  { slug: "about",                en: "About",                              es: "Sobre Nosotros" },
  { slug: "meet-dr-foss",         en: "Meet Dr. Foss",                      es: "Conozca al Dr. Foss" },
  { slug: "mission",              en: "Mission",                            es: "Misión" },
  { slug: "office-hours",         en: "Office Hours",                       es: "Horario" },
  { slug: "contact",              en: "Contact",                            es: "Contacto" },
  { slug: "book-now",             en: "Book Appointment",                   es: "Reservar Cita" },
  { slug: "new-patient",          en: "New Patient",                        es: "Pacientes Nuevos" },
  { slug: "faq",                  en: "FAQ",                                es: "Preguntas Frecuentes" },
  { slug: "testimonials",         en: "Testimonials",                       es: "Testimonios" },
  { slug: "videos",               en: "Videos",                             es: "Videos" },
  { slug: "provider-referral",    en: "Provider Referral",                  es: "Referencia de Proveedor" },
  { slug: "thank-you",            en: "Thank You",                          es: "Gracias" },
];

const landingPagesEn = [
  { slug: "chiropractor-near-me-san-antonio", label: "Chiropractor Near Me — San Antonio" },
  { slug: "best-chiropractor-san-antonio",    label: "Best Chiropractor — San Antonio" },
  { slug: "migraine-chiropractor-san-antonio",   label: "Migraine Chiropractor — San Antonio" },
  { slug: "headache-chiropractor-san-antonio",   label: "Headache Chiropractor — San Antonio" },
  { slug: "scoliosis-chiropractor-san-antonio",  label: "Scoliosis Chiropractor — San Antonio" },
  { slug: "postpartum-chiropractor-san-antonio", label: "Postpartum Chiropractor — San Antonio" },
  { slug: "sports-chiropractic",                 label: "Sports Chiropractic" },
];

const landingPagesEs = [
  { slug: "quiropractico-cerca-de-mi-san-antonio",   label: "Quiropráctico Cerca de Mí — San Antonio" },
  { slug: "el-mejor-quiropractico-san-antonio",      label: "El Mejor Quiropráctico — San Antonio" },
  { slug: "san-antonio-quiropractico",               label: "San Antonio Quiropráctico" },
  { slug: "quiropratico-san-antonio",                label: "Quiropráctico San Antonio" },
  { slug: "que-es-un-quiropractico",                 label: "¿Qué es un Quiropráctico?" },
  { slug: "huesero-san-antonio",                     label: "Huesero en San Antonio" },
  { slug: "quiropractico-para-migranas-san-antonio", label: "Quiropráctico para Migrañas" },
  { slug: "quiropractico-dolor-de-cabeza-san-antonio", label: "Quiropráctico Dolor de Cabeza" },
  { slug: "quiropractico-escoliosis-san-antonio",    label: "Quiropráctico Escoliosis" },
  { slug: "quiropractico-postparto-san-antonio",     label: "Quiropráctico Postparto" },
];

const legalPages = [
  { slug: "privacy-policy",        en: "Privacy Policy",        es: "Política de Privacidad" },
  { slug: "terms",                 en: "Terms",                 es: "Términos" },
  { slug: "healthcare-disclaimer", en: "Healthcare Disclaimer", es: "Aviso Médico" },
];

export default async function SiteMap({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: "en" | "es" = rawLocale === "es" ? "es" : "en";
  const isEs = locale === "es";

  const posts = await fetchPosts(locale);
  const sotPages = fetchSotPages(locale);
  const services = locale === "es" ? esServices : enServices;
  const landingPages = locale === "es" ? landingPagesEs : landingPagesEn;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Mapa del Sitio" : "Site Map", item: `${BASE_URL}/${locale}/site-map` },
    ],
  };

  return (
    <>
      <Header locale={locale} currentPath="/site-map" />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.25rem" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", color: "#1a3a4a", marginBottom: "0.5rem" }}>
            {isEs ? "Mapa del Sitio" : "Site Map"}
          </h1>
          <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6 }}>
            {isEs
              ? "Índice completo de todas las páginas en puravidasanantonio.com. Use esta página para encontrar contenido sobre síntomas, técnicas, vecindarios atendidos y más."
              : "Complete index of every page on puravidasanantonio.com. Use this page to find content about symptoms, techniques, neighborhoods served, and more."}
          </p>
        </header>

        <Section title={isEs ? "Páginas Principales" : "Main Pages"}>
          <Item href={`/${locale}`} label={isEs ? "Inicio" : "Home"} />
          {staticPages.map((p) => (
            <Item key={p.slug} href={`/${locale}/${p.slug}`} label={isEs ? p.es : p.en} />
          ))}
        </Section>

        <Section title={isEs ? "Páginas de Aterrizaje SEO" : "SEO Landing Pages"}>
          {landingPages.map((p) => (
            <Item key={p.slug} href={`/${locale}/${p.slug}`} label={p.label} />
          ))}
        </Section>

        <Section title={isEs ? "Servicios" : "Services"}>
          <Item href={`/${locale}/services`} label={isEs ? "Todos los Servicios" : "All Services"} />
          {services.map((slug) => (
            <Item key={slug} href={`/${locale}/services/${slug}`} label={slug.replace(/-/g, " ")} />
          ))}
        </Section>

        <Section title={isEs ? "Condiciones que Tratamos" : "Conditions We Treat"}>
          <Item href={`/${locale}/conditions`} label={isEs ? "Todas las Condiciones" : "All Conditions"} />
          {conditionsContent.map((c) => (
            <Item key={c.slug} href={`/${locale}/conditions/${c.slug}`} label={c.title.split("|")[0].trim()} />
          ))}
        </Section>

        <Section title={isEs ? "Vecindarios Atendidos" : "Neighborhoods Served"}>
          {neighborhoods.map((n) => (
            <Item key={n.slug} href={`/${locale}/${n.slug}-chiropractor`} label={n.name} />
          ))}
        </Section>

        <Section title={isEs ? "Técnica SOT (Sacro Occipital)" : "SOT (Sacro Occipital Technique)"}>
          <Item href={`/${locale}/sot`} label={isEs ? "Pillar SOT — Inicio" : "SOT Pillar — Overview"} />
          {sotPages
            .filter((s) => s.slug !== "pillar")
            .map((s) => (
              <Item key={s.slug} href={`/${locale}/sot/${s.slug}`} label={s.title.split("|")[0].trim()} />
            ))}
        </Section>

        <Section title={isEs ? `Blog (${posts.length} artículos)` : `Blog (${posts.length} articles)`}>
          <Item href={`/${locale}/blog`} label={isEs ? "Índice del Blog" : "Blog Index"} />
          {posts.map((p) => (
            <Item key={p.slug} href={`/${locale}/blog/${p.slug}`} label={p.title} />
          ))}
        </Section>

        <Section title={isEs ? "Legal" : "Legal"}>
          {legalPages.map((p) => (
            <Item key={p.slug} href={`/${locale}/${p.slug}`} label={isEs ? p.es : p.en} />
          ))}
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          color: "#1a3a4a",
          borderBottom: "2px solid #d6e4f0",
          paddingBottom: "0.5rem",
          marginBottom: "0.75rem",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "0.4rem 1.5rem",
        }}
      >
        {children}
      </ul>
    </section>
  );
}

function Item({ href, label }: { href: string; label: string }) {
  return (
    <li style={{ borderBottom: "1px dotted #e0e0e0", padding: "0.35rem 0" }}>
      <Link
        href={href}
        style={{
          color: "#1a5d80",
          textDecoration: "none",
          fontSize: "0.95rem",
          lineHeight: 1.4,
          textTransform: "capitalize",
        }}
      >
        {label}
      </Link>
    </li>
  );
}
