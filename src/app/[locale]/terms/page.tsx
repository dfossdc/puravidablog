import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";

  return {
    title: isSpanish
      ? "Términos y Condiciones | Pura Vida Chiropractic San Antonio"
      : "Terms & Conditions | Pura Vida Chiropractic San Antonio",
    description: isSpanish
      ? "Términos y condiciones que rigen el uso del sitio web de Pura Vida Chiropractic."
      : "Terms and conditions governing use of the Pura Vida website.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/terms`,
      languages: {
        en: `${BASE_URL}/en/terms`,
        es: `${BASE_URL}/es/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as "en" | "es";
  const isSpanish = loc === "es";

  return (
    <>
      <Header locale={loc} />
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px", lineHeight: "1.7" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "8px" }}>
          {isSpanish ? "Términos y Condiciones" : "Terms & Conditions"}
        </h1>
        <p style={{ color: "#666", marginBottom: "32px" }}>
          {isSpanish ? "Última actualización: abril de 2026" : "Last updated: April 2026"}
        </p>

        {isSpanish ? (
          <>
            <p>
              Bienvenido al sitio web de Pura Vida Chiropractic. Al acceder a este sitio web,
              asumimos que usted acepta estos términos y condiciones. No continúe usando nuestro
              sitio si no está de acuerdo con todos los términos y condiciones establecidos aquí.
            </p>

            <h2 style={{ marginTop: "32px" }}>Derechos de Propiedad Intelectual</h2>
            <p>
              Salvo el contenido que usted posee, bajo estos Términos, Pura Vida Chiropractic y/o
              sus licenciantes poseen todos los derechos de propiedad intelectual y materiales
              contenidos en este sitio web. Se le otorga una licencia limitada solo para fines de
              visualización del material contenido en este sitio web.
            </p>

            <h2 style={{ marginTop: "32px" }}>Restricciones</h2>
            <p>Usted tiene específicamente prohibido lo siguiente:</p>
            <ul>
              <li>Publicar cualquier material del sitio web en cualquier otro medio;</li>
              <li>Vender, sublicenciar y/o comercializar cualquier material del sitio web;</li>
              <li>Usar este sitio web de cualquier manera que sea o pueda ser perjudicial para este sitio;</li>
              <li>Usar este sitio web de cualquier manera que afecte el acceso del usuario a este sitio;</li>
              <li>
                Usar este sitio web en contra de las leyes y regulaciones aplicables, o de cualquier
                manera que pueda causar daño al sitio, o a cualquier persona o entidad comercial;
              </li>
              <li>
                Participar en cualquier actividad de minería de datos, recolección de datos,
                extracción de datos o cualquier otra actividad similar en relación con este sitio
                web;
              </li>
              <li>Usar este sitio web para participar en cualquier publicidad o marketing.</li>
            </ul>

            <h2 style={{ marginTop: "32px" }}>Su Contenido</h2>
            <p>
              En estos Términos y Condiciones, &ldquo;Su Contenido&rdquo; significará cualquier
              audio, video, texto, imágenes u otro material que usted elija mostrar en este sitio
              web. Al mostrar Su Contenido, usted otorga a Pura Vida Chiropractic una licencia no
              exclusiva, mundial e irrevocable para usarlo, reproducirlo, adaptarlo, publicarlo,
              traducirlo y distribuirlo en cualquier medio.
            </p>
            <p>
              Su Contenido debe ser propio y no debe invadir los derechos de terceros. Pura Vida
              Chiropractic se reserva el derecho de eliminar cualquiera de Su Contenido de este
              sitio web en cualquier momento sin previo aviso.
            </p>

            <h2 style={{ marginTop: "32px" }}>Sin Garantías</h2>
            <p>
              Este sitio web se proporciona &ldquo;tal cual&rdquo;, con todos los defectos, y Pura
              Vida Chiropractic no expresa ninguna representación o garantía de ningún tipo
              relacionada con este sitio web o los materiales contenidos en él. Además, nada de lo
              contenido en este sitio web se interpretará como asesoramiento médico.
            </p>

            <h2 style={{ marginTop: "32px" }}>Limitación de Responsabilidad</h2>
            <p>
              En ningún caso Pura Vida Chiropractic, ni ninguno de sus funcionarios, directores o
              empleados, será responsable de nada que surja de o esté relacionado de alguna manera
              con su uso de este sitio web, ya sea que dicha responsabilidad sea bajo contrato,
              agravio o de otro modo.
            </p>

            <h2 style={{ marginTop: "32px" }}>Indemnización</h2>
            <p>
              Por la presente, usted indemniza en la mayor medida posible a Pura Vida Chiropractic
              de y contra todas y cada una de las responsabilidades, costos, demandas, causas de
              acción, daños y gastos que surjan de cualquier manera relacionados con su
              incumplimiento de cualquiera de las disposiciones de estos Términos.
            </p>

            <h2 style={{ marginTop: "32px" }}>Divisibilidad</h2>
            <p>
              Si se determina que alguna disposición de estos Términos es inválida bajo cualquier
              ley aplicable, dichas disposiciones se eliminarán sin afectar las disposiciones
              restantes de este documento.
            </p>

            <h2 style={{ marginTop: "32px" }}>Variación de los Términos</h2>
            <p>
              Pura Vida Chiropractic puede revisar estos Términos en cualquier momento que
              considere oportuno, y al usar este sitio web se espera que revise estos Términos de
              manera regular.
            </p>

            <h2 style={{ marginTop: "32px" }}>Cesión</h2>
            <p>
              Pura Vida Chiropractic tiene permitido ceder, transferir y subcontratar sus derechos
              y/u obligaciones bajo estos Términos sin ninguna notificación. Sin embargo, usted no
              tiene permitido ceder, transferir o subcontratar ninguno de sus derechos y/u
              obligaciones bajo estos Términos.
            </p>

            <h2 style={{ marginTop: "32px" }}>Acuerdo Completo</h2>
            <p>
              Estos Términos constituyen el acuerdo completo entre Pura Vida Chiropractic y usted
              en relación con su uso de este sitio web, y reemplazan todos los acuerdos y
              entendimientos previos.
            </p>

            <h2 style={{ marginTop: "32px" }}>Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de
              Texas, y usted se somete a la jurisdicción no exclusiva de los tribunales estatales
              y federales ubicados en Texas para la resolución de cualquier disputa.
            </p>

            <h2 style={{ marginTop: "32px" }}>Contáctenos</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos, comuníquese con nosotros a través de
              nuestro <Link href={`/${locale}/contact`}>formulario de contacto</Link>.
            </p>
          </>
        ) : (
          <>
            <p>
              Welcome to the Pura Vida Chiropractic website. By accessing this website, we assume
              you accept these terms and conditions. Do not continue to use our site if you do not
              agree to all of the terms and conditions stated here.
            </p>

            <h2 style={{ marginTop: "32px" }}>Intellectual Property Rights</h2>
            <p>
              Other than content you own, under these Terms, Pura Vida Chiropractic and/or its
              licensors own all the intellectual property rights and materials contained in this
              website. You are granted a limited license only for purposes of viewing the material
              contained on this website.
            </p>

            <h2 style={{ marginTop: "32px" }}>Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any website material in any other media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material;</li>
              <li>Using this website in any way that is, or may be, damaging to this website;</li>
              <li>Using this website in any way that impacts user access to this website;</li>
              <li>
                Using this website contrary to applicable laws and regulations, or in a way that
                causes, or may cause, harm to the website, or to any person or business entity;
              </li>
              <li>
                Engaging in any data mining, data harvesting, data extracting, or any other similar
                activity in relation to this website;
              </li>
              <li>Using this website to engage in any advertising or marketing.</li>
            </ul>

            <h2 style={{ marginTop: "32px" }}>Your Content</h2>
            <p>
              In these Terms and Conditions, &ldquo;Your Content&rdquo; shall mean any audio,
              video, text, images, or other material you choose to display on this website. By
              displaying Your Content, you grant Pura Vida Chiropractic a non-exclusive,
              worldwide, irrevocable license to use, reproduce, adapt, publish, translate, and
              distribute it in any and all media.
            </p>
            <p>
              Your Content must be your own and must not be invading any third-party&apos;s
              rights. Pura Vida Chiropractic reserves the right to remove any of Your Content from
              this website at any time without notice.
            </p>

            <h2 style={{ marginTop: "32px" }}>No Warranties</h2>
            <p>
              This website is provided &ldquo;as is,&rdquo; with all faults, and Pura Vida
              Chiropractic expresses no representations or warranties of any kind related to this
              website or the materials contained on it. Further, nothing contained on this
              website shall be construed as providing medical advice.
            </p>

            <h2 style={{ marginTop: "32px" }}>Limitation of Liability</h2>
            <p>
              In no event shall Pura Vida Chiropractic, nor any of its officers, directors, and
              employees, be liable for anything arising out of or in any way connected with your
              use of this website, whether such liability is under contract, tort, or otherwise.
            </p>

            <h2 style={{ marginTop: "32px" }}>Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent Pura Vida Chiropractic from and against
              any and all liabilities, costs, demands, causes of action, damages, and expenses
              arising in any way related to your breach of any of the provisions of these Terms.
            </p>

            <h2 style={{ marginTop: "32px" }}>Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid under any applicable law,
              such provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h2 style={{ marginTop: "32px" }}>Variation of Terms</h2>
            <p>
              Pura Vida Chiropractic is permitted to revise these Terms at any time as it sees
              fit, and by using this website you are expected to review these Terms on a regular
              basis.
            </p>

            <h2 style={{ marginTop: "32px" }}>Assignment</h2>
            <p>
              Pura Vida Chiropractic is allowed to assign, transfer, and subcontract its rights
              and/or obligations under these Terms without any notification. However, you are not
              allowed to assign, transfer, or subcontract any of your rights and/or obligations
              under these Terms.
            </p>

            <h2 style={{ marginTop: "32px" }}>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between Pura Vida Chiropractic and you
              in relation to your use of this website, and supersede all prior agreements and
              understandings.
            </p>

            <h2 style={{ marginTop: "32px" }}>Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the
              State of Texas, and you submit to the non-exclusive jurisdiction of the state and
              federal courts located in Texas for the resolution of any disputes.
            </p>

            <h2 style={{ marginTop: "32px" }}>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us through our{" "}
              <Link href={`/${locale}/contact`}>contact form</Link>.
            </p>
          </>
        )}
      </main>
      <Footer locale={loc} />
    </>
  );
}
