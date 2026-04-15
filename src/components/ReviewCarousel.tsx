"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./ReviewCarousel.module.css";

interface Props {
  locale: "en" | "es";
}

const reviews = [
  {
    name: "Esmeralda D.",
    initial: "E",
    avatarColor: "#E91E63",
    time: "2 months ago",
    timeEs: "hace 2 meses",
    rating: 5,
    text: "Recomiendo este lugar. Profesional y amable. Y habla español excelente. El Dr. Foss realmente se preocupa por sus pacientes y trata la causa raíz del problema.",
  },
  {
    name: "Chelsea S.",
    initial: "C",
    avatarColor: "#2196F3",
    time: "3 months ago",
    timeEs: "hace 3 meses",
    rating: 5,
    text: "I love this place! Dr. Foss is the reason why I got through my pregnancy and flight training. He has always been accommodating schedule wise and is very fast and gentle with the adjustments. He even has specialty adjustments for stress.",
  },
  {
    name: "Doug S.",
    initial: "D",
    avatarColor: "#4CAF50",
    time: "4 months ago",
    timeEs: "hace 4 meses",
    rating: 5,
    text: "Dr. Dan is not only one of the best chiropractors I have known, he is also one of the kindest people on the planet. He truly cares for each of his patients. Go and see Dr. Dan.",
  },
  {
    name: "Patricia L.",
    initial: "P",
    avatarColor: "#9C27B0",
    time: "1 month ago",
    timeEs: "hace 1 mes",
    rating: 5,
    text: "Dr. Foss has been seeing my children since they were babies. His gentle approach and genuine care for pediatric patients is unlike anything I have experienced. My kids actually look forward to their appointments!",
  },
  {
    name: "Carlos H.",
    initial: "C",
    avatarColor: "#FF5722",
    time: "5 months ago",
    timeEs: "hace 5 meses",
    rating: 5,
    text: "Tenía ciática terrible y ya no podía trabajar. El Dr. Foss encontró el problema desde la primera visita. Ahora vivo sin dolor. ¡Es el mejor quiropráctico de San Antonio!",
  },
  {
    name: "Jennifer T.",
    initial: "J",
    avatarColor: "#00BCD4",
    time: "2 months ago",
    timeEs: "hace 2 meses",
    rating: 5,
    text: "I had chronic migraines for years and tried everything. Dr. Foss used cranial therapy and within a few visits my migraines decreased dramatically. I wish I had found him sooner.",
  },
  {
    name: "Roberto M.",
    initial: "R",
    avatarColor: "#FF9800",
    time: "3 months ago",
    timeEs: "hace 3 meses",
    rating: 5,
    text: "Después de mi accidente de auto no podía moverme bien. El Dr. Foss me atendió en español y me recuperé completamente. Lo recomiendo a toda la comunidad latina de San Antonio.",
  },
  {
    name: "María G.",
    initial: "M",
    avatarColor: "#795548",
    time: "6 months ago",
    timeEs: "hace 6 meses",
    rating: 5,
    text: "El Dr. Foss me ayudó con mi dolor de espalda cuando los médicos solo querían darme pastillas. Gracias por cuidar de mi familia con tanto amor y profesionalismo.",
  },
  {
    name: "San Antonio Family",
    initial: "S",
    avatarColor: "#607D8B",
    time: "1 month ago",
    timeEs: "hace 1 mes",
    rating: 5,
    text: "Cannot say enough about what Dr. Dan has done for me and my 12 year old son. MD solution was pain management or surgery. Dr. Dan gave us specific adjustments and lifestyle changes that actually worked.",
  },
];

const CARDS_DESKTOP = 3;
const TRUNCATE_LENGTH = 140;

export default function ReviewCarousel({ locale }: Props) {
  const isEs = locale === "es";
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Build visible set: wrap-around 3 cards
  const visible = [0, 1, 2].map((offset) => reviews[(index + offset) % total]);

  return (
    <section className={styles.section}>
      {/* Top badge */}
      <div className={styles.badge}>
        ★ {isEs ? "147+ RESEÑAS DE CINCO ESTRELLAS" : "147+ FIVE-STAR REVIEWS"}
      </div>

      {/* Title */}
      <h2 className={styles.title}>
        {isEs ? "Testimonios de Pacientes" : "Patient Testimonials"}
      </h2>

      {/* Carousel row */}
      <div className={styles.carouselRow}>
        <button
          className={styles.arrow}
          onClick={prev}
          aria-label={isEs ? "Anterior" : "Previous"}
        >
          ‹
        </button>

        <div className={styles.cardsWrap}>
          {visible.map((r, i) => {
            const isTruncated = r.text.length > TRUNCATE_LENGTH;
            const displayText = isTruncated
              ? r.text.slice(0, TRUNCATE_LENGTH).trimEnd() + "…"
              : r.text;
            return (
              <div key={`${r.name}-${index}-${i}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatarWrap}>
                    <div
                      className={styles.avatar}
                      style={{ background: r.avatarColor }}
                    >
                      {r.initial}
                    </div>
                    {/* Google G badge */}
                    <div className={styles.gBadge} aria-hidden="true">
                      <span className={styles.gLetter}>G</span>
                    </div>
                  </div>
                  <div className={styles.reviewerInfo}>
                    <p className={styles.reviewerName}>{r.name}</p>
                    <p className={styles.reviewerTime}>
                      {isEs ? r.timeEs : r.time}
                    </p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {"★".repeat(r.rating)}
                </div>
                <p className={styles.reviewText}>
                  {displayText}
                  {isTruncated && (
                    <a
                      href="https://puravidasanantonio.com/review-us/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                    >
                      {" "}
                      {isEs ? "Leer más reseñas de Pura Vida" : "Read more 5-star Pura Vida reviews"}
                    </a>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <button
          className={styles.arrow}
          onClick={next}
          aria-label={isEs ? "Siguiente" : "Next"}
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom CTA bar */}
      <a
        href="https://puravidasanantonio.com/review-us/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaBar}
      >
        <span className={styles.ctaThumb} aria-hidden="true">👍</span>
        <span className={styles.ctaText}>
          <strong>
            {isEs ? "LEA MÁS RESEÑAS 5 ESTRELLAS" : "READ MORE 5-STAR REVIEWS"}
          </strong>
          <span className={styles.ctaSub}>
            {isEs
              ? "Quiropráctico Mejor Calificado en San Antonio, TX"
              : "Top-Rated Chiropractor Serving San Antonio, TX"}
          </span>
        </span>
        <span className={styles.ctaArrow} aria-hidden="true">›</span>
      </a>
    </section>
  );
}
