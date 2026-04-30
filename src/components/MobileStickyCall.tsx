import styles from "./MobileStickyCall.module.css";

interface MobileStickyCallProps {
  locale: "en" | "es";
}

const PHONE_TEL = "tel:+12106851994";
const PHONE_DISPLAY = "(210) 685-1994";

export default function MobileStickyCall({ locale }: MobileStickyCallProps) {
  const isEs = locale === "es";
  return (
    <>
      {/* Spacer prevents the fixed bar from covering the bottom of page content on mobile */}
      <div className={styles.spacer} aria-hidden="true" />
      <a
        href={PHONE_TEL}
        className={styles.bar}
        aria-label={isEs ? "Llamar ahora a Pura Vida Quiropráctica" : "Call Pura Vida Chiropractic now"}
      >
        📞 {isEs ? `LLAME AHORA — ${PHONE_DISPLAY}` : `CALL NOW — ${PHONE_DISPLAY}`}
      </a>
    </>
  );
}
