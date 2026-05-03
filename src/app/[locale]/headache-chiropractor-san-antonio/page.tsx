import type { Metadata } from "next";
import ConditionChiropractorPage, {
  buildConditionChiropractorMetadata,
  type ConditionChiropractorContent,
} from "@/components/ConditionChiropractorPage";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

const content: ConditionChiropractorContent = {
  slug: "headache-chiropractor-san-antonio",
  conditionSlug: "headaches",
  condition: { en: "Headache", es: "Dolor de Cabeza" },
  conditionPlural: { en: "Headaches", es: "Dolores de Cabeza" },
  h1: {
    en: "Headache Chiropractor in San Antonio, TX",
    es: "Quiropráctico para Dolores de Cabeza en San Antonio, TX",
  },
  metaTitle: {
    en: "Headache Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico para Dolores de Cabeza San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Headache chiropractor near you in San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC treats tension, cervicogenic, and chronic headaches with cranial-focused SOT chiropractic. Free first visit. Call (210) 685-1994.",
    es: "Quiropráctico para dolores de cabeza cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención bilingüe, técnica SOT craneal para alivio de cefaleas tensionales y crónicas. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [
      "Looking for a headache chiropractor near you in San Antonio? At Pura Vida Chiropractic, Dr. Dan Foss, DC has 23+ years of experience treating tension headaches, cervicogenic (neck-origin) headaches, cluster headaches, and chronic daily headaches in San Antonio patients of all ages — without medication side effects. Your first evaluation is free.",
      "Most chronic headaches originate from upper cervical (neck) tension, forward-head posture, jaw (TMJ) dysfunction, or cranial-bone restrictions. Dr. Foss uses Advanced SOT (Sacro-Occipital Technique) — a specialized chiropractic approach that addresses these specific upper-cervical and cranial drivers, not just generic spinal manipulation.",
      "Pura Vida Chiropractic is bilingual (English and Spanish), insurance friendly, and located at 2318 NW Military Hwy in northwest San Antonio — easy to reach from Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, and the entire metro area.",
    ],
    es: [
      "¿Busca un quiropráctico para dolores de cabeza cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia tratando dolores de cabeza tensionales, cervicogénicos (de origen cervical), en racimo y crónicos diarios — sin efectos secundarios de medicamentos. Su primera evaluación es gratis.",
      "La mayoría de los dolores de cabeza crónicos se originan de tensión cervical superior, postura de cabeza adelantada, disfunción mandibular (ATM) o restricciones de huesos craneales. El Dr. Foss usa SOT Avanzada (Técnica Sacro-Occipital) — un enfoque quiropráctico especializado que trata estos generadores específicos cervicales superiores y craneales.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en 2318 NW Military Hwy en el noroeste de San Antonio — fácil de alcanzar desde Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne y toda el área metropolitana.",
    ],
  },
  approach: {
    en: [
      "Identification of headache type — tension, cervicogenic, cluster, sinus, or migraine — at intake",
      "Advanced SOT cranial chiropractic addressing temporal, sphenoid, and occipital restrictions",
      "Upper-cervical analysis and gentle correction (C1-C2) to release primary headache triggers",
      "Postural and ergonomic assessment for forward-head posture and tech neck",
      "TMJ assessment and treatment for jaw-related headaches",
      "Class IV laser therapy to reduce cervical and cranial inflammation",
      "Tension and stress trigger review — sleep, hydration, screen time, work setup",
      "Bilingual care — full understanding of your treatment in your preferred language",
    ],
    es: [
      "Identificación del tipo de dolor de cabeza — tensional, cervicogénico, en racimo, sinusal o migraña — en la admisión",
      "Quiropráctica craneal SOT Avanzada tratando restricciones temporales, esfenoidales y occipitales",
      "Análisis cervical superior y corrección suave (C1-C2) para liberar desencadenantes primarios",
      "Evaluación postural y ergonómica para postura de cabeza adelantada y cuello tecnológico",
      "Evaluación y tratamiento de ATM para dolores de cabeza relacionados con la mandíbula",
      "Terapia láser Clase IV para reducir inflamación cervical y craneal",
      "Revisión de desencadenantes de tensión y estrés — sueño, hidratación, tiempo de pantalla, configuración de trabajo",
      "Atención bilingüe — comprensión completa de su tratamiento en su idioma preferido",
    ],
  },
  faqs: [
    {
      en: {
        q: "Can a chiropractor help with tension headaches?",
        a: "Yes — chiropractic care is one of the most effective non-pharmaceutical treatments for tension headaches. Most tension headaches originate from upper-cervical muscle tension, forward-head posture, or jaw dysfunction — all directly addressable with chiropractic adjustment, postural correction, and cranial techniques. Many of our headache patients see significant relief within the first 4-6 visits.",
      },
      es: {
        q: "¿Puede un quiropráctico ayudar con dolores de cabeza tensionales?",
        a: "Sí — la atención quiropráctica es uno de los tratamientos no farmacéuticos más efectivos para dolores de cabeza tensionales. La mayoría de los dolores tensionales se originan de tensión muscular cervical superior, postura de cabeza adelantada o disfunción mandibular — todo directamente tratable con ajuste quiropráctico, corrección postural y técnicas craneales. Muchos pacientes ven alivio significativo en las primeras 4-6 visitas.",
      },
    },
    {
      en: {
        q: "What's the difference between a tension headache and a migraine?",
        a: "Tension headaches feel like a tight band around the head, are bilateral (both sides), and rarely include nausea or visual disturbance. Migraines are usually one-sided, throbbing, and often include nausea, light sensitivity, or aura. Both can respond well to chiropractic — but the treatment focus differs. Dr. Foss differentiates them at intake and customizes your care plan accordingly.",
      },
      es: {
        q: "¿Cuál es la diferencia entre un dolor tensional y una migraña?",
        a: "Los dolores tensionales se sienten como una banda apretada alrededor de la cabeza, son bilaterales (ambos lados) y rara vez incluyen náuseas o alteración visual. Las migrañas son usualmente unilaterales, pulsátiles, y a menudo incluyen náuseas, sensibilidad a la luz o aura. Ambos pueden responder bien a la quiropráctica — pero el enfoque del tratamiento difiere. El Dr. Foss los diferencia en la admisión y personaliza su plan.",
      },
    },
    {
      en: {
        q: "How fast will I see headache relief from chiropractic?",
        a: "Many patients report reduced headache intensity within the first 1-3 visits. Frequency typically reduces measurably by visit 6-8. Chronic, multi-year headache patterns may take longer. At your free first evaluation, Dr. Foss will give you a clear, honest timeline based on your specific case — no inflated promises.",
      },
      es: {
        q: "¿Qué tan rápido veré alivio de dolor de cabeza con quiropráctica?",
        a: "Muchos pacientes reportan reducción en intensidad dentro de las primeras 1-3 visitas. La frecuencia típicamente se reduce notablemente para la visita 6-8. Los patrones crónicos de muchos años pueden tomar más tiempo. En su evaluación gratuita, el Dr. Foss le dará un cronograma claro y honesto basado en su caso específico — sin promesas infladas.",
      },
    },
    {
      en: {
        q: "Do you accept insurance for headache treatment?",
        a: "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care.",
      },
      es: {
        q: "¿Aceptan seguro para tratamiento de dolores de cabeza?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
      },
    },
    {
      en: {
        q: "Is chiropractic safe for daily chronic headache patients?",
        a: "Yes — chiropractic care is well-documented as safe even for daily chronic headache sufferers. Pura Vida Chiropractic uses gentle, low-force techniques (SOT) that are particularly appropriate for headache-prone patients. We always discuss your specific medical history and current medications before treatment.",
      },
      es: {
        q: "¿Es segura la quiropráctica para pacientes con dolores diarios crónicos?",
        a: "Sí — la atención quiropráctica está bien documentada como segura incluso para personas con dolores crónicos diarios. Pura Vida Chiropractic usa técnicas suaves de baja fuerza (SOT) particularmente apropiadas para pacientes propensos a dolores de cabeza. Siempre discutimos su historial médico específico y medicamentos actuales antes del tratamiento.",
      },
    },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return buildConditionChiropractorMetadata(params, content);
}

export default async function Page({ params }: Props) {
  return <ConditionChiropractorPage params={params} content={content} />;
}
