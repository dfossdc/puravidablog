import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

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
  const canonical = `${BASE_URL}/${locale}/contact`;
  return {
    title: isEs
      ? "Contacto | Pura Vida Chiropractic San Antonio TX"
      : "Contact | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "Contáctenos en Pura Vida Chiropractic. 2318 NW Military Hwy #103, San Antonio TX 78231. Llame al (210) 685-1994 o reserve su evaluación gratuita hoy."
      : "Contact Pura Vida Chiropractic. 2318 NW Military Hwy #103, San Antonio TX 78231. Call (210) 685-1994 or book your free evaluation today.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/contact`,
        es: `${BASE_URL}/es/contact`,
        "x-default": `${BASE_URL}/en/contact`,
      },
    },
    openGraph: {
      title: isEs ? "Contacto | Pura Vida Chiropractic" : "Contact | Pura Vida Chiropractic",
      description: isEs
        ? "Llame al (210) 685-1994 o reserve su evaluación gratuita. San Antonio, TX."
        : "Call (210) 685-1994 or book your free evaluation. San Antonio, TX.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/puravidasanantonio/" },
  { name: "Instagram", href: "https://www.instagram.com/puravidasatx/" },
  { name: "YouTube", href: "https://www.youtube.com/@puravidasanantonio" },
  { name: "Yelp", href: "https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio" },
];

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/contact" />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            {isEs ? "Contacte a Pura Vida Quiropráctica" : "Contact Pura Vida Chiropractic"}
          </h1>

          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <div className={styles.napBlock}>
                <h2 className={styles.napName}>Pura Vida Chiropractic</h2>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <p className={styles.infoLabel}>{isEs ? "Dirección" : "Address"}</p>
                    <address className={styles.address}>
                      2318 NW Military Hwy #103<br />
                      San Antonio, TX 78231
                    </address>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <p className={styles.infoLabel}>{isEs ? "Teléfono" : "Phone"}</p>
                    <a href="tel:+12106851994" className={styles.phone}>
                      (210) 685-1994
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div>
                    <p className={styles.infoLabel}>{isEs ? "Horario" : "Office Hours"}</p>
                    <ul className={styles.hours}>
                      <li>
                        <span>{isEs ? "Lun / Mar / Jue" : "Mon / Tue / Thu"}</span>
                        <span>7:00 AM – 4:00 PM</span>
                      </li>
                      <li>
                        <span>{isEs ? "Mié / Vie / Sáb / Dom" : "Wed / Fri / Sat / Sun"}</span>
                        <span>{isEs ? "Cerrado" : "Closed"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.ctaBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reservar Evaluación Gratis →" : "Book Free Evaluation →"}
              </a>

              <div className={styles.socialBlock}>
                <p className={styles.socialLabel}>{isEs ? "Síguenos" : "Follow Us"}</p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.mapCol}>
              <iframe
                title="Pura Vida Chiropractic location map"
                src="https://maps.google.com/maps?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
