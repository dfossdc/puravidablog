import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/privacy-policy`;
  return {
    title: isEs ? "Política de Privacidad | Pura Vida Chiropractic" : "Privacy Policy | Pura Vida Chiropractic",
    description: isEs
      ? "Política de privacidad de Pura Vida Chiropractic. Cómo recopilamos, usamos y protegemos su información personal."
      : "Privacy policy for Pura Vida Chiropractic. How we collect, use, and protect your personal information.",
    alternates: { canonical, languages: { en: `${BASE_URL}/en/privacy-policy`, es: `${BASE_URL}/es/privacy-policy`, "x-default": `${BASE_URL}/en/privacy-policy` } },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/privacy-policy" />
      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.heroEyebrow}>Pura Vida Chiropractic</p>
          <h1 className={styles.heroTitle}>{isEs ? "Política de Privacidad" : "Privacy Policy"}</h1>
          <p className={styles.heroSub}>{isEs ? "Cómo recopilamos, usamos y protegemos su información." : "How we collect, use, and protect your information."}</p>
        </div>

        <div className={styles.container}>
          <p className={styles.updated}>{isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}</p>

          {isEs ? (
            <>
              <div className={styles.section}>
                <h2 className={styles.h2}>1. Información que Recopilamos</h2>
                <p className={styles.p}>Recopilamos información personal cuando usted rellena formularios en nuestro sitio web, llama a nuestra clínica, o interactúa con nosotros de otra manera. Esta información puede incluir:</p>
                <ul className={styles.ul}>
                  <li>Nombre, dirección, número de teléfono y dirección de correo electrónico</li>
                  <li>Información de salud necesaria para brindarle atención quiropráctica</li>
                  <li>Información de seguro médico cuando sea aplicable</li>
                  <li>Datos de navegación y uso del sitio web (mediante cookies y herramientas analíticas)</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>2. Cómo Usamos Su Información</h2>
                <p className={styles.p}>Utilizamos la información recopilada para:</p>
                <ul className={styles.ul}>
                  <li>Programar y gestionar sus citas en <Link href={`/${locale}/new-patient`} className={styles.internalLink}>Pura Vida Chiropractic</Link></li>
                  <li>Brindarle atención quiropráctica y de salud apropiada</li>
                  <li>Procesar pagos y coordinar con su seguro médico</li>
                  <li>Comunicarnos con usted sobre su tratamiento y citas</li>
                  <li>Mejorar nuestros servicios y la experiencia en nuestro sitio web</li>
                  <li>Cumplir con obligaciones legales y reglamentarias de salud</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>3. Información Médica y HIPAA</h2>
                <p className={styles.p}>Toda la información médica está protegida de conformidad con la <strong>Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA)</strong>. Su historial médico y la información relacionada con su tratamiento sólo se comparte con terceros cuando sea necesario para brindarle atención médica, cuando usted haya dado su consentimiento, o cuando lo exija la ley. Nunca vendemos su información médica a terceros.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>4. Cookies y Tecnologías de Seguimiento</h2>
                <p className={styles.p}>Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de algunos elementos del sitio.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>5. Compartición de Información</h2>
                <p className={styles.p}>No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales. Podemos compartir información limitada con:</p>
                <ul className={styles.ul}>
                  <li>Proveedores de servicios que nos ayudan a operar nuestro sitio web y clínica (bajo acuerdos de confidencialidad)</li>
                  <li>Compañías de seguros cuando sea necesario para procesar reclamaciones</li>
                  <li>Autoridades legales cuando lo requiera la ley</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>6. Seguridad de la Información</h2>
                <p className={styles.p}>Implementamos medidas de seguridad técnicas y administrativas razonables para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ningún método de transmisión o almacenamiento electrónico es completamente seguro.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>7. Sus Derechos</h2>
                <p className={styles.p}>Usted tiene derecho a acceder, corregir o solicitar la eliminación de su información personal. Para ejercer estos derechos, contáctenos directamente.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>8. Contáctenos</h2>
                <div className={styles.contact}>
                  <p><strong>Pura Vida Chiropractic</strong></p>
                  <p>2318 NW Military Hwy, Suite 103, San Antonio, TX 78231</p>
                  <p>Teléfono: <a href="tel:+12106851994">(210) 685-1994</a></p>
                  <p>Correo: <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a></p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.section}>
                <h2 className={styles.h2}>1. Information We Collect</h2>
                <p className={styles.p}>We collect personal information when you fill out forms on our website, call our clinic, or interact with us in other ways. This information may include:</p>
                <ul className={styles.ul}>
                  <li>Name, address, phone number, and email address</li>
                  <li>Health information necessary to provide chiropractic care</li>
                  <li>Health insurance information when applicable</li>
                  <li>Website browsing and usage data (via cookies and analytics tools)</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>2. How We Use Your Information</h2>
                <p className={styles.p}>We use the information collected to:</p>
                <ul className={styles.ul}>
                  <li>Schedule and manage your appointments at <Link href={`/${locale}/new-patient`} className={styles.internalLink}>Pura Vida Chiropractic</Link></li>
                  <li>Provide appropriate chiropractic and health care</li>
                  <li>Process payments and coordinate with your health insurance</li>
                  <li>Communicate with you about your treatment and appointments</li>
                  <li>Improve our services and website experience</li>
                  <li>Comply with legal and healthcare regulatory obligations</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>3. Medical Information and HIPAA</h2>
                <p className={styles.p}>All medical information is protected in accordance with the <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>. Your medical records and treatment-related information are only shared with third parties when necessary to provide medical care, when you have given consent, or when required by law. We never sell your medical information to third parties.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>4. Cookies and Tracking Technologies</h2>
                <p className={styles.p}>Our website may use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. You can configure your browser to reject cookies, though this may affect the functionality of some site elements.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>5. Information Sharing</h2>
                <p className={styles.p}>We do not sell, rent, or share your personal information with third parties for commercial purposes. We may share limited information with:</p>
                <ul className={styles.ul}>
                  <li>Service providers who help us operate our website and clinic (under confidentiality agreements)</li>
                  <li>Insurance companies when necessary to process claims</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>6. Information Security</h2>
                <p className={styles.p}>We implement reasonable technical and administrative security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>7. Your Rights</h2>
                <p className={styles.p}>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us directly.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.h2}>8. Contact Us</h2>
                <div className={styles.contact}>
                  <p><strong>Pura Vida Chiropractic</strong></p>
                  <p>2318 NW Military Hwy, Suite 103, San Antonio, TX 78231</p>
                  <p>Phone: <a href="tel:+12106851994">(210) 685-1994</a></p>
                  <p>Email: <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a></p>
                </div>
              </div>
            </>
          )}

          <div className={styles.internalLinks}>
            <Link href={`/${locale}/terms`} className={styles.internalLink}>{isEs ? "Términos de Servicio" : "Terms of Service"}</Link>
            <Link href={`/${locale}/healthcare-disclaimer`} className={styles.internalLink}>{isEs ? "Aviso Médico" : "Healthcare Disclaimer"}</Link>
            <Link href={`/${locale}/contact`} className={styles.internalLink}>{isEs ? "Contacto" : "Contact"}</Link>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
