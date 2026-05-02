import Image from "next/image";
import styles from "./InsuranceSection.module.css";

// Insurance section — displays plan LOGOS framed strictly as "insurance
// friendly" (NOT "in-network", NOT "we accept"). Per Dr. Foss legal-compliance
// direction:
//   "We are insurance friendly keep it simple"
//   "bring you insurance card and ID to the office to verify how your
//    insurance can contribute to your care  keep it at that"
//   "dont say superbills for out of network don't mention that or out of
//    network anywhere"
// Do NOT add Medicare, Medicaid, or TRICARE logos here — those federal
// programs require enrollment we do not have, so depicting them creates a
// false claim of acceptance. The plans below are commercial/marketplace
// carriers shown as "insurance friendly" only.
const plans = [
  {
    name: "Blue Cross Blue Shield of Texas",
    src: "/images/insurance/bluecross.jpg",
    alt: "Blue Cross Blue Shield of Texas — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "BCBSTX insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "UnitedHealthcare",
    src: "/images/insurance/unitedhealthcare.jpg",
    alt: "UnitedHealthcare — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "UnitedHealthcare insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Humana",
    src: "/images/insurance/humana.jpg",
    alt: "Humana — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Humana insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Ambetter · Superior HealthPlan",
    src: "/images/insurance/ambettter.jpg",
    alt: "Ambetter Superior HealthPlan — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Ambetter Superior HealthPlan insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Oscar Health",
    src: "/images/insurance/oscar.jpg",
    alt: "Oscar Health — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Oscar Health insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Aetna · CVS Health",
    src: "/images/insurance/aetnacvs.png",
    alt: "Aetna CVS Health — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Aetna CVS Health insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Community First Health Plans",
    src: "/images/insurance/communityfirst.jpg",
    alt: "Community First Health Plans — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Community First Health Plans insurance friendly chiropractor San Antonio TX",
  },
  {
    name: "Molina Healthcare",
    src: "/images/insurance/molina.jpg",
    alt: "Molina Healthcare — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Molina Healthcare insurance friendly chiropractor San Antonio TX",
  },
];

export default function InsuranceSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section
      className={styles.section}
      aria-label={
        isEs
          ? "Insurance friendly en Pura Vida Chiropractic San Antonio TX"
          : "Insurance friendly at Pura Vida Chiropractic San Antonio TX"
      }
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {isEs ? "Somos Insurance Friendly" : "We Are Insurance Friendly"}
        </h2>
        <p className={styles.body}>
          {isEs
            ? "Traiga su tarjeta de seguro e identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado."
            : "Bring your insurance card and ID to the office to verify how your insurance can contribute to your care."}
        </p>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.name} className={styles.card}>
              <Image
                src={plan.src}
                alt={plan.alt}
                title={plan.title}
                fill
                sizes="(max-width: 540px) 50vw, 25vw"
                className={styles.insuranceLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
