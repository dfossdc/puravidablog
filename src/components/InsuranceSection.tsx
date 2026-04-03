import Image from "next/image";
import styles from "./InsuranceSection.module.css";

const plans = [
  {
    name: "Blue Cross Blue Shield of Texas",
    src: "/images/insurance/bluecross.jpg",
    alt: "Blue Cross Blue Shield of Texas insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "BCBSTX insurance chiropractor San Antonio TX",
  },
  {
    name: "UnitedHealthcare",
    src: "/images/insurance/unitedhealthcare.jpg",
    alt: "UnitedHealthcare insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "UnitedHealthcare chiropractor San Antonio TX",
  },
  {
    name: "Humana",
    src: "/images/insurance/humana.jpg",
    alt: "Humana insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "Humana insurance chiropractor San Antonio TX",
  },
  {
    name: "Ambetter · Superior HealthPlan",
    src: "/images/insurance/ambettter.jpg",
    alt: "Ambetter Superior HealthPlan insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "Ambetter Superior HealthPlan chiropractor San Antonio TX",
  },
  {
    name: "Oscar Health",
    src: "/images/insurance/oscar.jpg",
    alt: "Oscar Health insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "Oscar Health insurance chiropractor San Antonio TX",
  },
  {
    name: "Aetna · CVS Health",
    src: "/images/insurance/aetnacvs.png",
    alt: "Aetna CVS Health insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "Aetna CVS Health chiropractor San Antonio TX",
  },
  {
    name: "Community First Health Plans",
    src: "/images/insurance/communityfirst.jpg",
    alt: "Community First Health Plans accepted at Pura Vida Chiropractic San Antonio",
    title: "Community First Health Plans chiropractor San Antonio TX",
  },
  {
    name: "Molina Healthcare",
    src: "/images/insurance/molina.jpg",
    alt: "Molina Healthcare insurance accepted at Pura Vida Chiropractic San Antonio",
    title: "Molina Healthcare chiropractor San Antonio TX",
  },
];

export default function InsuranceSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section
      className={styles.section}
      aria-label="Insurance plans accepted at Pura Vida Chiropractic San Antonio TX"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {isEs ? "Aceptamos Tu Seguro" : "We Are Insurance Friendly"}
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
