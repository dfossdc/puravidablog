import styles from "./InsuranceSection.module.css";

// Insurance section — replaced 8 plan-name logos with a clean text-only
// statement per legal compliance. Pura Vida Chiropractic is NOT in-network
// with any specific insurance plan. Displaying branded plan logos (BCBS,
// Aetna, UnitedHealthcare, Humana, Ambetter, Oscar, Community First, Molina,
// TRICARE, Medicare, Medicaid) creates an implied false claim of acceptance
// that the practice does not actually offer. The user explicitly directed:
//   'it is illegal to say that we accept insurance or medicaid or medicare
//    because we don't those gotta go'
//   'We are insurance friendly keep it simple'
//   'bring you insurance card and ID to the office to verify how your
//    insurance can contribute to your care  keep it at that'
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
            ? "Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado."
            : "Bring your insurance card and ID to the office to verify how your insurance can contribute to your care."}
        </p>
      </div>
    </section>
  );
}
