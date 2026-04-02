"use client";

import { useState } from "react";
import styles from "./WhatsAppButton.module.css";

interface Props {
  locale: "en" | "es";
}

export default function WhatsAppButton({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const isEs = locale === "es";

  const waLink = isEs
    ? "https://wa.me/12106851994?text=Hola%20Pura%20Vida%20Quiropráctica%2C%20me%20gustaría%20hacer%20una%20cita"
    : "https://wa.me/12106851994?text=Hello%20Pura%20Vida%20Chiropractic%2C%20I%20would%20like%20to%20book%20an%20appointment";

  return (
    <div className={styles.wrapper}>
      {/* Popup card */}
      <div className={`${styles.card} ${open ? styles.cardVisible : ""}`} role="dialog" aria-label="WhatsApp chat">
        <div className={styles.cardHeader}>
          <div className={styles.cardIconWrap}>
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.612l6.184-1.458A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.535-5.348-1.467l-.383-.228-3.972.937.972-3.884-.249-.397A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <div>
            <p className={styles.cardTitle}>
              {isEs ? "Contáctenos por WhatsApp" : "Chat with us on WhatsApp"}
            </p>
            <p className={styles.cardSub}>
              {isEs ? "Generalmente responde en minutos" : "Typically replies within minutes"}
            </p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp popup"
          >
            ✕
          </button>
        </div>
        <button
          className={styles.startBtn}
          onClick={() => {
            window.open(
              waLink,
              "whatsapp_chat",
              "width=480,height=640,left=100,top=100,resizable=yes,scrollbars=yes"
            );
            setOpen(false);
          }}
        >
          {isEs ? "Iniciar Chat →" : "Start Chat →"}
        </button>
        <div className={styles.arrow} aria-hidden="true" />
      </div>

      {/* Floating button */}
      <button
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label={isEs ? "Abrir chat de WhatsApp" : "Open WhatsApp chat"}
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.612l6.184-1.458A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.535-5.348-1.467l-.383-.228-3.972.937.972-3.884-.249-.397A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </button>
    </div>
  );
}
