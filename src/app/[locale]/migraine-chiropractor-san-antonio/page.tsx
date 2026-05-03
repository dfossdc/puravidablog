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
  slug: "migraine-chiropractor-san-antonio",
  slugEn: "migraine-chiropractor-san-antonio",
  slugEs: "quiropractico-para-migranas-san-antonio",
  conditionSlug: "migraines",
  condition: { en: "Migraine", es: "Migraña" },
  conditionPlural: { en: "Migraines", es: "Migrañas" },
  h1: {
    en: "Migraine Chiropractor in San Antonio, TX",
    es: "Quiropráctico para Migrañas en San Antonio, TX",
  },
  metaTitle: {
    en: "Migraine Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico para Migrañas en San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Migraine chiropractor near you in San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC offers cranial-focused SOT chiropractic for chronic migraine relief. Free evaluation. Bilingual. Call (210) 685-1994.",
    es: "Quiropráctico para migrañas cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención bilingüe, técnica SOT craneal para alivio de migrañas crónicas. Evaluación gratuita. (210) 685-1994.",
  },
  intro: {
    en: [
      "Looking for a migraine chiropractor near you in San Antonio? At Pura Vida Chiropractic, Dr. Dan Foss, DC has 23+ years of experience helping San Antonio patients reduce migraine frequency, intensity, and duration through specialized cranial-focused chiropractic care — without medication side effects. Your first evaluation is free.",
      "Migraines are not just bad headaches. They involve complex neurological dysfunction that often originates from upper-cervical (neck) and cranial restrictions. Dr. Foss is one of the few chiropractors in San Antonio with Advanced SOT (Sacro-Occipital Technique) certification — a technique specifically designed to address the cranial and upper-cervical dysfunction at the root of most migraines.",
      "Pura Vida Chiropractic is bilingual (English and Spanish), insurance friendly, and located in northwest San Antonio at 2318 NW Military Hwy — easy to reach from Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz, and the entire metro area.",
    ],
    es: [
      "¿Busca un quiropráctico para migrañas cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia ayudando a pacientes de San Antonio a reducir la frecuencia, intensidad y duración de las migrañas mediante atención quiropráctica craneal especializada — sin efectos secundarios de medicamentos. Su primera evaluación es gratis.",
      "Las migrañas no son solo dolores de cabeza fuertes. Involucran disfunción neurológica compleja que a menudo se origina de restricciones cervicales superiores (cuello) y craneales. El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con certificación SOT Avanzada (Técnica Sacro-Occipital) — una técnica diseñada específicamente para tratar la disfunción craneal y cervical superior en la raíz de la mayoría de las migrañas.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar desde Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz y toda el área metropolitana.",
    ],
  },
  approach: {
    en: [
      "Advanced SOT (Sacro-Occipital Technique) certification — rare in San Antonio, specifically designed for migraine and headache patterns",
      "Cranial chiropractic adjustments that address the temporal, sphenoid, and occipital bone restrictions linked to chronic migraines",
      "Upper cervical analysis and gentle correction (C1-C2) — where most migraine triggers originate",
      "Class IV laser therapy to reduce nerve inflammation between visits",
      "Postural assessment for forward-head posture, a common silent migraine trigger",
      "Trigger identification: lifestyle, ergonomic, dietary patterns reviewed at intake",
      "Pediatric and prenatal-safe protocols — children and pregnant patients included",
      "Bilingual care so language is never a barrier to understanding your treatment plan",
    ],
    es: [
      "Certificación SOT Avanzada (Técnica Sacro-Occipital) — rara en San Antonio, diseñada específicamente para patrones de migraña y dolor de cabeza",
      "Ajustes quiroprácticos craneales que tratan las restricciones temporales, esfenoidales y occipitales vinculadas con migrañas crónicas",
      "Análisis cervical superior y corrección suave (C1-C2) — donde se originan la mayoría de los desencadenantes de migrañas",
      "Terapia láser Clase IV para reducir la inflamación nerviosa entre visitas",
      "Evaluación postural para postura de cabeza adelantada, un desencadenante silencioso común",
      "Identificación de desencadenantes: revisamos patrones de estilo de vida, ergonomía y dieta",
      "Protocolos seguros para pediátricos y prenatales — niños y embarazadas incluidos",
      "Atención bilingüe para que el idioma nunca sea una barrera para entender su plan",
    ],
  },
  faqs: [
    {
      en: {
        q: "Can a chiropractor really help with migraines?",
        a: "Yes — for many patients, chiropractic care reduces migraine frequency by 50% or more, especially when migraines are linked to upper-cervical (neck) dysfunction, cranial restrictions, or postural issues. Multiple peer-reviewed studies support this. Pura Vida Chiropractic uses Advanced SOT cranial techniques specifically designed for migraine sufferers — a more targeted approach than typical spinal adjustments.",
      },
      es: {
        q: "¿Realmente puede un quiropráctico ayudar con las migrañas?",
        a: "Sí — para muchos pacientes, la atención quiropráctica reduce la frecuencia de migrañas en 50% o más, especialmente cuando las migrañas están vinculadas con disfunción cervical superior (cuello), restricciones craneales o problemas posturales. Varios estudios revisados por pares lo respaldan. Pura Vida Chiropractic usa técnicas SOT craneales avanzadas diseñadas específicamente para personas que sufren migrañas.",
      },
    },
    {
      en: {
        q: "How is a migraine chiropractor different from a regular chiropractor?",
        a: "A migraine-focused chiropractor uses cranial techniques (like SOT), upper-cervical analysis (C1-C2 specifically), and trigger-pattern review — not just generic spinal manipulation. Dr. Foss holds the rare Advanced SOT certification from SORSI, which trains chiropractors specifically in cranial assessment relevant to migraine, vertigo, and TMJ patients.",
      },
      es: {
        q: "¿Cómo se diferencia un quiropráctico de migrañas de uno regular?",
        a: "Un quiropráctico enfocado en migrañas usa técnicas craneales (como SOT), análisis cervical superior (C1-C2 específicamente) y revisión de patrones de desencadenantes — no solo manipulación espinal genérica. El Dr. Foss tiene la rara certificación SOT Avanzada del SORSI, que capacita quiroprácticos específicamente en evaluación craneal relevante para pacientes con migrañas, vértigo y ATM.",
      },
    },
    {
      en: {
        q: "How many sessions until I notice migraine relief?",
        a: "Most migraine patients notice reduced migraine intensity or frequency within 3-6 visits. Severity, duration, and chronicity of your migraines determine the total length of care. Dr. Foss will give you a clear, honest treatment plan and timeline at your free initial evaluation — no high-pressure long-term contracts.",
      },
      es: {
        q: "¿Cuántas sesiones hasta notar alivio de migrañas?",
        a: "La mayoría de los pacientes con migrañas notan reducción en la intensidad o frecuencia dentro de 3-6 visitas. La severidad, duración y cronicidad de sus migrañas determinan la duración total del cuidado. El Dr. Foss le dará un plan claro y honesto en su evaluación inicial gratuita — sin contratos a largo plazo de alta presión.",
      },
    },
    {
      en: {
        q: "Is chiropractic safe for chronic migraine sufferers?",
        a: "Yes — chiropractic care is well-documented as safe for migraine patients. Pura Vida Chiropractic uses gentle, low-force techniques like SOT (no aggressive cracking), which are particularly appropriate for migraine and vertigo-prone patients. Side effects are rare and typically mild (transient soreness). We'll always discuss your specific medical history before treatment.",
      },
      es: {
        q: "¿Es seguro la quiropráctica para personas con migrañas crónicas?",
        a: "Sí — la atención quiropráctica está bien documentada como segura para pacientes con migrañas. Pura Vida Chiropractic usa técnicas suaves de baja fuerza como SOT (sin agresión), particularmente apropiadas para pacientes con migrañas y propensos a vértigo. Los efectos secundarios son raros y típicamente leves.",
      },
    },
    {
      en: {
        q: "Do you accept insurance for migraine treatment?",
        a: "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care.",
      },
      es: {
        q: "¿Aceptan seguro para tratamiento de migrañas?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
      },
    },
    {
      en: {
        q: "What conditions besides migraines do you treat?",
        a: "We treat over 90 conditions including tension headaches, vertigo (BPPV), TMJ, sinus pressure, neck pain, sciatica, scoliosis, auto injuries, pregnancy pain, and more. Many migraine patients also have related issues — we treat them as one connected system using cranial chiropractic and SOT.",
      },
      es: {
        q: "¿Qué condiciones tratan además de migrañas?",
        a: "Tratamos más de 90 condiciones incluyendo dolores de cabeza tensionales, vértigo (BPPV), ATM, presión sinusal, dolor de cuello, ciática, escoliosis, lesiones de auto, dolor de embarazo y más. Muchos pacientes con migrañas también tienen problemas relacionados — los tratamos como un sistema conectado.",
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
