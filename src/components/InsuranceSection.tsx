import Image from "next/image";
import styles from "./InsuranceSection.module.css";

const plans = [
  {
    name: "Blue Cross Blue Shield of Texas",
    src: "/images/insurance/bluecross.jpg",
    alt: "Blue Cross Blue Shield of Texas — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "BCBSTX out-of-network chiropractor San Antonio TX",
  },
  {
    name: "UnitedHealthcare",
    src: "/images/insurance/unitedhealthcare.jpg",
    alt: "UnitedHealthcare — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "UnitedHealthcare out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Humana",
    src: "/images/insurance/humana.jpg",
    alt: "Humana — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Humana out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Ambetter · Superior HealthPlan",
    src: "/images/insurance/ambettter.jpg",
    alt: "Ambetter Superior HealthPlan — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Ambetter Superior HealthPlan out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Oscar Health",
    src: "/images/insurance/oscar.jpg",
    alt: "Oscar Health — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Oscar Health out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Aetna · CVS Health",
    src: "/images/insurance/aetnacvs.png",
    alt: "Aetna CVS Health — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Aetna CVS Health out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Community First Health Plans",
    src: "/images/insurance/communityfirst.jpg",
    alt: "Community First Health Plans — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Community First Health Plans out-of-network chiropractor San Antonio TX",
  },
  {
    name: "Molina Healthcare",
    src: "/images/insurance/molina.jpg",
    alt: "Molina Healthcare — insurance friendly at Pura Vida Chiropractic San Antonio",
    title: "Molina Healthcare out-of-network chiropractor San Antonio TX",
  },
];

export default function InsuranceSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section
      className={styles.section}
      aria-label="Insurance friendly — out-of-network superbills at Pura Vida Chiropractic San Antonio TX"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {isEs ? "Somos Insurance Friendly — Superbills para Reembolso" : "We Are Insurance Friendly — Superbills for Out-of-Network Reimbursement"}
        </h2>
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
