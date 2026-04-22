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
      ? "Aviso Médico | Pura Vida Chiropractic San Antonio"
      : "Healthcare Disclaimer | Pura Vida Chiropractic San Antonio",
    description: isSpanish
      ? "Aviso médico para los servicios quiroprácticos ofrecidos por Pura Vida Chiropractic en San Antonio, Texas."
      : "Healthcare disclaimer for chiropractic services offered by Pura Vida Chiropractic in San Antonio, Texas.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/healthcare-disclaimer`,
      languages: {
        en: `${BASE_URL}/en/healthcare-disclaimer`,
        es: `${BASE_URL}/es/healthcare-disclaimer`,
      },
    },
  };
}

export default async function HealthcareDisclaimerPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as "en" | "es";
  const isSpanish = loc === "es";

  return (
    <>
      <Header locale={loc} />
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px", lineHeight: "1.7" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "8px" }}>
          {isSpanish ? "Aviso Médico" : "Healthcare Disclaimer"}
        </h1>
        <p style={{ color: "#666", marginBottom: "32px" }}>
          {isSpanish ? "Última actualización: abril de 2026" : "Last updated: April 2026"}
        </p>

        {isSpanish ? (
          <>
            <p>
              La información proporcionada en este sitio web por Pura Vida Chiropractic tiene únicamente
              fines informativos y educativos generales. No constituye asesoramiento médico, diagnóstico
              ni tratamiento, y no sustituye la orientación profesional de un médico calificado u otro
              proveedor de atención médica.
            </p>

            <h2 style={{ marginTop: "32px" }}>Sin relación médico-paciente</h2>
            <p>
              La lectura de este sitio web, el envío de formularios o el contacto con nuestra oficina
              no establecen una relación médico-paciente, quiropráctico-paciente ni profesional de la
              salud-paciente. Dicha relación solo se establece después de una consulta presencial,
              examen y consentimiento informado firmado en nuestra clínica de San Antonio, Texas.
            </p>

            <h2 style={{ marginTop: "32px" }}>Testimonios y resultados individuales</h2>
            <p>
              Los testimonios y experiencias de pacientes que aparecen en este sitio web son personales
              e individuales. Los resultados pueden variar de una persona a otra. La atención
              quiropráctica, la terapia de ondas de choque, la terapia SoftWave, SOT (Técnica
              Sacro-Occipital) y otros servicios que ofrecemos pueden tener resultados diferentes según
              la condición, el historial médico y la respuesta individual de cada paciente. Ningún
              resultado específico está garantizado.
            </p>

            <h2 style={{ marginTop: "32px" }}>Consulte con su médico</h2>
            <p>
              Siempre consulte con su médico u otro proveedor de atención médica calificado antes de
              iniciar cualquier nuevo tratamiento, programa de ejercicios, suplemento o cambio en la
              dieta, especialmente si tiene una condición médica preexistente, está embarazada, está
              amamantando o toma medicamentos recetados. Nunca ignore el consejo médico profesional ni
              retrase la búsqueda de atención debido a algo que haya leído en este sitio web.
            </p>

            <h2 style={{ marginTop: "32px" }}>Emergencias médicas</h2>
            <p>
              Si usted o alguien que conoce está experimentando una emergencia médica, llame al 911 o
              acuda de inmediato a la sala de emergencias más cercana. Este sitio web no está diseñado
              para emergencias médicas.
            </p>

            <h2 style={{ marginTop: "32px" }}>Sin aprobación de la FDA</h2>
            <p>
              Los dispositivos, terapias y servicios descritos en este sitio web pueden no estar
              evaluados o aprobados por la Administración de Alimentos y Medicamentos de los EE. UU.
              (FDA) para todos los usos indicados. La información no tiene la intención de diagnosticar,
              tratar, curar ni prevenir ninguna enfermedad.
            </p>

            <h2 style={{ marginTop: "32px" }}>Precisión de la información</h2>
            <p>
              Aunque nos esforzamos por mantener la información precisa y actualizada, no ofrecemos
              ninguna representación ni garantía de ningún tipo sobre la exhaustividad, precisión,
              confiabilidad, idoneidad o disponibilidad del contenido de este sitio web.
            </p>

            <h2 style={{ marginTop: "32px" }}>Contáctenos</h2>
            <p>
              Si tiene preguntas sobre este aviso o sobre nuestros servicios, comuníquese con nosotros
              llamando a nuestra oficina o mediante el{" "}
              <Link href={`/${locale}/contact`}>formulario de contacto</Link>.
            </p>
          </>
        ) : (
          <>
            <p>
              The information provided on this website by Pura Vida Chiropractic is for general
              informational and educational purposes only. It does not constitute medical advice,
              diagnosis, or treatment, and is not a substitute for professional guidance from a
              qualified physician or other healthcare provider.
            </p>

            <h2 style={{ marginTop: "32px" }}>No Doctor-Patient Relationship</h2>
            <p>
              Reading this website, submitting forms, or contacting our office does not establish a
              doctor-patient, chiropractor-patient, or healthcare provider-patient relationship. Such a
              relationship is only established after an in-person consultation, examination, and signed
              informed consent at our clinic in San Antonio, Texas.
            </p>

            <h2 style={{ marginTop: "32px" }}>Testimonials and Individual Results</h2>
            <p>
              Patient testimonials and experiences featured on this website are personal and
              individual. Results may vary from person to person. Chiropractic care, shockwave therapy,
              SoftWave therapy, SOT (Sacro-Occipital Technique), and other services we offer may
              produce different outcomes depending on each patient&apos;s condition, medical history,
              and individual response. No specific result is guaranteed.
            </p>

            <h2 style={{ marginTop: "32px" }}>Consult Your Physician</h2>
            <p>
              Always consult with your physician or other qualified healthcare provider before
              beginning any new treatment, exercise program, supplement, or dietary change, especially
              if you have a pre-existing medical condition, are pregnant, are nursing, or are taking
              prescription medications. Never disregard professional medical advice or delay seeking
              care because of something you have read on this website.
            </p>

            <h2 style={{ marginTop: "32px" }}>Medical Emergencies</h2>
            <p>
              If you or someone you know is experiencing a medical emergency, call 911 or go to the
              nearest emergency room immediately. This website is not intended for medical
              emergencies.
            </p>

            <h2 style={{ marginTop: "32px" }}>No FDA Approval</h2>
            <p>
              The devices, therapies, and services described on this website may not be evaluated or
              approved by the U.S. Food and Drug Administration (FDA) for all indicated uses. The
              information is not intended to diagnose, treat, cure, or prevent any disease.
            </p>

            <h2 style={{ marginTop: "32px" }}>Accuracy of Information</h2>
            <p>
              While we strive to keep information accurate and current, we make no representations or
              warranties of any kind about the completeness, accuracy, reliability, suitability, or
              availability of the content on this website.
            </p>

            <h2 style={{ marginTop: "32px" }}>Contact Us</h2>
            <p>
              If you have questions about this disclaimer or about our services, please contact us by
              phone or through our <Link href={`/${locale}/contact`}>contact form</Link>.
            </p>
          </>
        )}
      </main>
      <Footer locale={loc} />
    </>
  );
}
