import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./book-now.module.css";

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
  const canonical = `${BASE_URL}/${locale}/book-now`;
  return {
    title: isEs
      ? "Reservar Cita | Pura Vida Chiropractic San Antonio TX"
      : "Schedule an Appointment | Pura Vida San Antonio",
    description: isEs
      ? "Oferta especial para nuevos pacientes — reciba una consulta gratuita en Pura Vida Chiropractic en San Antonio, TX. Reserve ahora y comience a experimentar la diferencia."
      : "New Patient Special Offer — receive a complimentary consultation at Pura Vida Chiropractic in San Antonio, TX. Book now and start experiencing the difference of our chiropractic and wellness care.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/book-now`,
        es: `${BASE_URL}/es/book-now`,
        "x-default": `${BASE_URL}/en/book-now`,
      },
    },
    openGraph: {
      title: isEs
        ? "Reservar Cita | Pura Vida Chiropractic"
        : "Schedule an Appointment | Pura Vida Chiropractic",
      description: isEs
        ? "Reserve su consulta gratuita con el Dr. Dan Foss en Pura Vida Chiropractic en San Antonio, TX."
        : "Book your complimentary consultation with Dr. Dan Foss at Pura Vida Chiropractic in San Antonio, TX.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function BookNowPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/book-now" />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.h1}>
              {isEs ? "Oferta Especial Para Nuevos Pacientes" : "New Patient Special Offer"}
            </h1>
            <h2 className={styles.h2}>
              {isEs ? "Reciba Una Consulta Gratuita" : "Receive A Complimentary Consultation"}
            </h2>
            <p className={styles.lead}>
              {isEs
                ? "Si desea revitalizar su salud de forma natural y aumentar su calidad de vida, le invitamos a aprovechar esta valiosa oferta. Nuestros quiroprácticos experimentados utilizan un enfoque integral hacia el cuidado quiropráctico y el bienestar. Esto significa que trabajamos con nuestros pacientes para identificar sus necesidades particulares de bienestar y crear planes personalizados para ayudarles a alcanzar la mayor calidad de vida posible. También ofrecemos un programa de bienestar único e integral."
                : "If you\u2019d like to revitalize your health naturally and increase your quality of life, we encourage you to take advantage of this valuable offer! Our experienced chiropractors use a \u201Cwhole person\u201D approach to chiropractic care and wellness. This means that we work with our patients to find out their particular wellness needs, then craft personalized care plans to help them achieve the highest quality of life. We also offer a unique, comprehensive wellness program."}
            </p>
            <p className={styles.lead}>
              {isEs
                ? "Pero no solo cr\u00E9ano a nosotros. Lea nuestros testimonios para ver lo que dicen nuestros pacientes."
                : "Don\u2019t just take our word for it though. Read our testimonials to see what our patients have to say."}
            </p>
            <p className={styles.callout}>
              <strong>{isEs ? "\u00A1NO HAY OBLIGACI\u00D3N!" : "There is NO OBLIGATION!"}</strong>{" "}
              {isEs
                ? "Nos encantar\u00EDa ver si podemos ayudarle antes de que asuma cualquier compromiso financiero para tratamientos adicionales."
                : "We would love to see if we can help you before you make a financial commitment to further treatment."}
            </p>
            <p className={styles.lead}>
              <strong>{isEs ? "\u00A1Reserve ahora!" : "Book now!"}</strong>{" "}
              {isEs
                ? "Comience a experimentar la diferencia de nuestro cuidado quiropr\u00E1ctico y de bienestar."
                : "Start experiencing the difference of our chiropractic and wellness care."}
            </p>
            <a href="#schedule" className={styles.ctaBtn}>
              {isEs ? "Comience Hoy" : "Get Started Today"}
            </a>
          </div>
        </section>

        {/* Schedulista booking widget */}
        <section id="schedule" className={styles.scheduleSection}>
          <div className={styles.container}>
            <h2 className={styles.scheduleTitle}>
              {isEs ? "Programe Su Cita" : "Schedule Your Appointment"}
            </h2>
            <div className={styles.widgetWrap}>
              <iframe
                src="https://www.schedulista.com/schedule/puravidachiropractic"
                title={
                  isEs
                    ? "Programe una cita con Pura Vida Chiropractic"
                    : "Schedule an appointment with Pura Vida Chiropractic"
                }
                className={styles.widget}
                loading="lazy"
              />
            </div>
            <p className={styles.bookFallback}>
              {isEs ? "\u00BFProblemas para cargar el programador? " : "Trouble loading the scheduler? "}
              <a
                href="https://www.schedulista.com/schedule/puravidachiropractic"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "\u00C1bralo en una pesta\u00F1a nueva" : "Open it in a new tab"}
              </a>{" "}
              {isEs ? "o llame al " : "or call "}
              <a href="tel:+12106851994">(210) 685-1994</a>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h3 className={styles.finalKicker}>
              {isEs ? "No Espere Otro D\u00EDa" : "Don\u2019t Wait Another Day"}
            </h3>
            <h2 className={styles.finalTitle}>
              {isEs ? "\u00A1Programe Su Cita Hoy!" : "Schedule Your Appointment Today!"}
            </h2>
            <div className={styles.ctaButtons}>
              <a
                href="https://www.schedulista.com/schedule/puravidachiropractic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                {isEs ? "Reservar Ahora" : "Book Now"}
              </a>
              <a href="tel:+12106851994" className={styles.callBtn}>
                {isEs ? "Llame al (210) 685-1994" : "Call (210) 685-1994"}
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section
          className={styles.mapSection}
          aria-label={
            isEs ? "Ubicaci\u00F3n de Pura Vida Chiropractic" : "Pura Vida Chiropractic location"
          }
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.215!2d-98.5340!3d29.5435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c60228a927bef%3A0x1c1e96c3d09ddb8!2sPura%20Vida%20Chiropractic!5e0!3m2!1sen!2sus!4v1714000000000"
            title={
              isEs
                ? "Pura Vida Chiropractic en Google Maps"
                : "Pura Vida Chiropractic on Google Maps"
            }
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
            allowFullScreen
          />
        </section>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
