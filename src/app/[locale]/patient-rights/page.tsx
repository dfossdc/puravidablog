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
  const canonical = `${BASE_URL}/${locale}/patient-rights`;
  return {
    title: isEs
      ? "Derechos del Paciente y Avisos al Consumidor | Pura Vida Chiropractic"
      : "Patient Rights & Consumer Notices | Pura Vida Chiropractic",
    description: isEs
      ? "Cómo solicitar sus expedientes médicos, cómo comunicarse con el Texas Board of Chiropractic Examiners y cómo presentar una queja del consumidor. Aviso requerido por la ley de Texas (HSC §181.105)."
      : "How to request your health records, how to contact the Texas Board of Chiropractic Examiners, and how to file a consumer complaint. Notice required by Texas law (HSC §181.105).",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/patient-rights`,
        es: `${BASE_URL}/es/patient-rights`,
        "x-default": `${BASE_URL}/en/patient-rights`,
      },
    },
    robots: { index: false, follow: true },
  };
}

export default async function PatientRightsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/patient-rights" />
      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.heroEyebrow}>Pura Vida Chiropractic</p>
          <h1 className={styles.heroTitle}>
            {isEs ? "Derechos del Paciente y Avisos al Consumidor" : "Patient Rights & Consumer Notices"}
          </h1>
          <p className={styles.heroSub}>
            {isEs
              ? "Aviso requerido por el Código de Salud y Seguridad de Texas, §181.105."
              : "Notice required by Texas Health & Safety Code §181.105."}
          </p>
        </div>

        <div className={styles.container}>
          <p className={styles.updated}>
            {isEs ? "Última actualización: mayo de 2026" : "Last updated: May 2026"}
          </p>

          {isEs ? (
            <>
              <div className={styles.section}>
                <h2 className={styles.h2}>1. Cómo solicitar sus expedientes médicos</h2>
                <p className={styles.p}>
                  Como paciente de Pura Vida Chiropractic, usted tiene derecho a recibir una copia de sus
                  expedientes médicos conforme a la ley federal HIPAA y la ley de Texas. Para iniciar una
                  solicitud, siga estos pasos:
                </p>
                <ul className={styles.ul}>
                  <li>
                    <strong>Paso 1 — Llame primero a la oficina:</strong>{" "}
                    <a href="tel:+12106851994">(210) 685-1994</a>. Todas las solicitudes de expedientes
                    deben iniciarse por teléfono. Esto nos permite verificar su identidad y explicarle el
                    proceso.
                  </li>
                  <li>
                    <strong>Paso 2 — Verificación de identidad:</strong> le pediremos información para
                    confirmar que usted es el paciente o un representante autorizado.
                  </li>
                  <li>
                    <strong>Paso 3 — Autorización por escrito:</strong> después de la llamada, le
                    proporcionaremos un formulario de autorización (HIPAA) para que firme. Puede
                    completarlo en la oficina, por correo electrónico o por correo postal.
                  </li>
                  <li>
                    <strong>Paso 4 — Entrega:</strong> los expedientes pueden entregarse en formato
                    electrónico o impreso, recogerse en la oficina o enviarse a la dirección que usted
                    indique.
                  </li>
                  <li>
                    <strong>Plazo:</strong> normalmente cumplimos con las solicitudes dentro de 15 días
                    hábiles, conforme al Código de Salud y Seguridad de Texas §241.154 y a la ley HIPAA.
                  </li>
                  <li>
                    <strong>Tarifas:</strong> pueden aplicarse tarifas razonables por copia, conforme a la
                    ley de Texas y a las normas federales HIPAA. Le informaremos del costo antes de
                    procesar la solicitud.
                  </li>
                </ul>
                <p className={styles.p}>
                  Si necesita expedientes con urgencia (por ejemplo, para otro proveedor de salud o por un
                  asunto legal), indíquelo al llamar y haremos lo posible por darle prioridad.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>
                  2. Cómo comunicarse con la autoridad disciplinaria y de licencias
                </h2>
                <p className={styles.p}>
                  El quiropráctico de Pura Vida Chiropractic, Dr. Daniel Foss, D.C. (Licencia de Texas
                  #10880), está regulado por el <strong>Texas Board of Chiropractic Examiners (TBCE)</strong>.
                  El TBCE es la agencia estatal responsable de otorgar licencias y de la conducta
                  profesional de los quiroprácticos en Texas.
                </p>
                <div className={styles.contact}>
                  <p><strong>Texas Board of Chiropractic Examiners</strong></p>
                  <p>1801 Congress Avenue, Suite 10.500</p>
                  <p>Austin, TX 78701</p>
                  <p>
                    Teléfono: <a href="tel:+15123056708">(512) 305-6708</a> &nbsp;|&nbsp;{" "}
                    Llamada gratuita: <a href="tel:+18008213205">(800) 821-3205</a>
                  </p>
                  <p>Fax: (512) 305-6705</p>
                  <p>
                    Sitio web:{" "}
                    <a href="https://tbce.texas.gov" target="_blank" rel="noopener noreferrer">
                      tbce.texas.gov
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>3. Cómo presentar una queja del consumidor</h2>
                <p className={styles.p}>
                  Conforme al Código de Salud y Seguridad de Texas §181.103, los consumidores tienen
                  derecho a presentar una queja ante el Texas Board of Chiropractic Examiners sobre la
                  conducta o la atención brindada por un quiropráctico autorizado en Texas. Usted no
                  necesita la autorización de la oficina para presentar una queja.
                </p>
                <p className={styles.p}>
                  <strong>Cómo presentarla:</strong>
                </p>
                <ul className={styles.ul}>
                  <li>
                    <strong>En línea:</strong> use el formulario oficial de quejas del TBCE en{" "}
                    <a
                      href="https://tbce.texas.gov/complaint-information.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tbce.texas.gov/complaint-information.html
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Por correo postal:</strong> envíe el formulario impreso a la dirección de
                    Austin indicada arriba.
                  </li>
                  <li>
                    <strong>Por correo electrónico o fax:</strong> los detalles aparecen en el formulario
                    PDF disponible en el sitio web del TBCE.
                  </li>
                </ul>
                <p className={styles.p}>
                  <strong>Información que debe incluir:</strong> fecha(s) del incidente, nombre del o de
                  los quiroprácticos involucrados, descripción del tratamiento o conducta y todos los
                  detalles relevantes del problema.
                </p>
                <p className={styles.p}>
                  <strong>Qué sucede después:</strong> el TBCE acusará recibo de su queja por escrito y
                  revisará las acusaciones. Si encuentra evidencia que justifique investigación, notificará
                  al quiropráctico y le pedirá una respuesta por escrito. La mayoría de las quejas se
                  resuelven en aproximadamente de 3 a 6 meses. El TBCE le mantendrá informado durante todo
                  el proceso.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>4. Aviso adicional — privacidad de la información médica</h2>
                <p className={styles.p}>
                  Pura Vida Chiropractic está comprometida con la protección de la confidencialidad de su
                  información médica conforme a HIPAA y a las leyes de privacidad de salud de Texas. Para
                  más detalles, consulte nuestra{" "}
                  <Link href="/privacy/es" className={styles.internalLink}>
                    Política de Privacidad
                  </Link>
                  . Las quejas relacionadas con la privacidad de información médica también pueden
                  presentarse ante el Procurador General de Texas y la Oficina de Derechos Civiles del
                  Departamento de Salud y Servicios Humanos de los Estados Unidos (HHS OCR).
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>5. Contacto con nuestra oficina</h2>
                <div className={styles.contact}>
                  <p><strong>Pura Vida Chiropractic</strong></p>
                  <p>2318 NW Military Hwy, Suite 103</p>
                  <p>San Antonio, TX 78231</p>
                  <p>
                    Teléfono: <a href="tel:+12106851994">(210) 685-1994</a>
                  </p>
                  <p>
                    Correo: <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.section}>
                <h2 className={styles.h2}>1. How to request your health records</h2>
                <p className={styles.p}>
                  As a patient of Pura Vida Chiropractic, you have the right to receive a copy of your
                  health records under federal HIPAA law and Texas law. To start a request, follow these
                  steps:
                </p>
                <ul className={styles.ul}>
                  <li>
                    <strong>Step 1 — Call the office first:</strong>{" "}
                    <a href="tel:+12106851994">(210) 685-1994</a>. All records requests must be initiated
                    by phone. This lets us verify your identity and walk you through the process.
                  </li>
                  <li>
                    <strong>Step 2 — Identity verification:</strong> we will ask for information to confirm
                    you are the patient or an authorized representative.
                  </li>
                  <li>
                    <strong>Step 3 — Written authorization:</strong> after the call, we will provide a
                    HIPAA-compliant authorization form for you to sign. You can complete it in the office,
                    by email, or by mail.
                  </li>
                  <li>
                    <strong>Step 4 — Delivery:</strong> records can be delivered electronically or in
                    print, picked up in the office, or mailed to the address you specify.
                  </li>
                  <li>
                    <strong>Timeline:</strong> we typically fulfill requests within 15 business days,
                    consistent with Texas Health &amp; Safety Code §241.154 and HIPAA.
                  </li>
                  <li>
                    <strong>Fees:</strong> reasonable copying fees may apply, consistent with Texas law
                    and federal HIPAA regulations. We will tell you the cost before processing the
                    request.
                  </li>
                </ul>
                <p className={styles.p}>
                  If you need records urgently (for example, for another health care provider or for a
                  legal matter), let us know on the call and we will do our best to prioritize your
                  request.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>2. How to contact the disciplinary &amp; licensing authority</h2>
                <p className={styles.p}>
                  The chiropractor at Pura Vida Chiropractic, Dr. Daniel Foss, D.C. (Texas License
                  #10880), is regulated by the <strong>Texas Board of Chiropractic Examiners (TBCE)</strong>.
                  TBCE is the state agency responsible for licensing and professional conduct of
                  chiropractors in Texas.
                </p>
                <div className={styles.contact}>
                  <p><strong>Texas Board of Chiropractic Examiners</strong></p>
                  <p>1801 Congress Avenue, Suite 10.500</p>
                  <p>Austin, TX 78701</p>
                  <p>
                    Phone: <a href="tel:+15123056708">(512) 305-6708</a> &nbsp;|&nbsp;{" "}
                    Toll-free: <a href="tel:+18008213205">(800) 821-3205</a>
                  </p>
                  <p>Fax: (512) 305-6705</p>
                  <p>
                    Website:{" "}
                    <a href="https://tbce.texas.gov" target="_blank" rel="noopener noreferrer">
                      tbce.texas.gov
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>3. How to file a consumer complaint</h2>
                <p className={styles.p}>
                  Under Texas Health &amp; Safety Code §181.103, consumers have the right to file a
                  complaint with the Texas Board of Chiropractic Examiners about the conduct or care
                  provided by a Texas-licensed chiropractor. You do not need permission from the office to
                  file a complaint.
                </p>
                <p className={styles.p}>
                  <strong>How to file:</strong>
                </p>
                <ul className={styles.ul}>
                  <li>
                    <strong>Online:</strong> use TBCE&rsquo;s official online complaint form at{" "}
                    <a
                      href="https://tbce.texas.gov/complaint-information.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tbce.texas.gov/complaint-information.html
                    </a>
                    .
                  </li>
                  <li>
                    <strong>By mail:</strong> send the printed complaint form to the Austin address listed
                    above.
                  </li>
                  <li>
                    <strong>By email or fax:</strong> details are included on the PDF complaint form
                    available on the TBCE website.
                  </li>
                </ul>
                <p className={styles.p}>
                  <strong>What to include:</strong> date(s) of the incident, name of the chiropractor(s)
                  involved, a description of the treatment or conduct, and any relevant details about the
                  issue.
                </p>
                <p className={styles.p}>
                  <strong>What happens next:</strong> TBCE will acknowledge your written complaint and
                  review the allegations. If they find evidence to sustain investigation, they will notify
                  the chiropractor and request a written response. Most complaints are resolved in
                  approximately 3&ndash;6 months. TBCE will keep you informed throughout the process.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>4. Additional notice — health information privacy</h2>
                <p className={styles.p}>
                  Pura Vida Chiropractic is committed to protecting the confidentiality of your health
                  information under HIPAA and Texas health-privacy law. For details, see our{" "}
                  <Link href="/privacy" className={styles.internalLink}>Privacy Policy</Link>. Complaints
                  regarding health information privacy can also be filed with the Texas Attorney General
                  and the U.S. Department of Health &amp; Human Services Office for Civil Rights (HHS
                  OCR).
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.h2}>5. Contact our office</h2>
                <div className={styles.contact}>
                  <p><strong>Pura Vida Chiropractic</strong></p>
                  <p>2318 NW Military Hwy, Suite 103</p>
                  <p>San Antonio, TX 78231</p>
                  <p>
                    Phone: <a href="tel:+12106851994">(210) 685-1994</a>
                  </p>
                  <p>
                    Email: <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a>
                  </p>
                </div>
              </div>
            </>
          )}

          <div className={styles.internalLinks}>
            <Link href={isEs ? "/privacy/es" : "/privacy"} className={styles.internalLink}>
              {isEs ? "Política de Privacidad" : "Privacy Policy"}
            </Link>
            <Link href={`/${locale}/healthcare-disclaimer`} className={styles.internalLink}>
              {isEs ? "Aviso Médico" : "Healthcare Disclaimer"}
            </Link>
            <Link href={`/${locale}/contact`} className={styles.internalLink}>
              {isEs ? "Contacto" : "Contact"}
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
