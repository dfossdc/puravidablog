import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./book-now.module.css";

const BASE_URL = "https://puravidasanantonio.com";

export const metadata: Metadata = {
  title: "Schedule an Appointment | Pura Vida San Antonio",
  description:
    "New Patient Special Offer — receive a complimentary consultation at Pura Vida Chiropractic in San Antonio, TX. Book now and start experiencing the difference of our chiropractic and wellness care.",
  alternates: {
    canonical: `${BASE_URL}/book-now`,
  },
  openGraph: {
    title: "Schedule an Appointment | Pura Vida Chiropractic",
    description:
      "Book your complimentary consultation with Dr. Dan Foss at Pura Vida Chiropractic in San Antonio, TX.",
    url: `${BASE_URL}/book-now`,
    siteName: "Pura Vida Chiropractic",
    locale: "en_US",
    type: "website",
  },
};

export default function BookNowPage() {
  return (
    <>
      <Header locale="en" currentPath="/book-now" />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.h1}>New Patient Special Offer</h1>
            <h2 className={styles.h2}>Receive A Complimentary Consultation</h2>
            <p className={styles.lead}>
              If you&rsquo;d like to revitalize your health naturally and increase your quality of
              life, we encourage you to take advantage of this valuable offer! Our experienced
              chiropractors use a &ldquo;whole person&rdquo; approach to chiropractic care and
              wellness. This means that we work with our patients to find out their particular
              wellness needs, then craft personalized care plans to help them achieve the highest
              quality of life. We also offer a unique, comprehensive wellness program.
            </p>
            <p className={styles.lead}>
              Don&rsquo;t just take our word for it though. Read our testimonials to see what our
              patients have to say.
            </p>
            <p className={styles.callout}>
              <strong>There is NO OBLIGATION!</strong> We would love to see if we can help you
              before you make a financial commitment to further treatment.
            </p>
            <p className={styles.lead}>
              <strong>Book now!</strong> Start experiencing the difference of our chiropractic and
              wellness care.
            </p>
            <a href="#schedule" className={styles.ctaBtn}>
              Get Started Today
            </a>
          </div>
        </section>

        {/* Schedulista booking widget */}
        <section id="schedule" className={styles.scheduleSection}>
          <div className={styles.container}>
            <h2 className={styles.scheduleTitle}>Schedule Your Appointment</h2>
            <div className={styles.widgetWrap}>
              <iframe
                src="https://www.schedulista.com/schedule/puravidachiropractic"
                title="Schedule an appointment with Pura Vida Chiropractic"
                className={styles.widget}
                loading="lazy"
              />
            </div>
            <p className={styles.bookFallback}>
              Trouble loading the scheduler?{" "}
              <a
                href="https://www.schedulista.com/schedule/puravidachiropractic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open it in a new tab
              </a>{" "}
              or call <a href="tel:+12106851994">(210) 685-1994</a>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h3 className={styles.finalKicker}>Don&rsquo;t Wait Another Day</h3>
            <h2 className={styles.finalTitle}>Schedule Your Appointment Today!</h2>
            <div className={styles.ctaButtons}>
              <a
                href="https://www.schedulista.com/schedule/puravidachiropractic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Book Now
              </a>
              <a href="tel:+12106851994" className={styles.callBtn}>
                Call (210) 685-1994
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className={styles.mapSection} aria-label="Pura Vida Chiropractic location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.215!2d-98.5340!3d29.5435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c60228a927bef%3A0x1c1e96c3d09ddb8!2sPura%20Vida%20Chiropractic!5e0!3m2!1sen!2sus!4v1714000000000"
            title="Pura Vida Chiropractic on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
            allowFullScreen
          />
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
