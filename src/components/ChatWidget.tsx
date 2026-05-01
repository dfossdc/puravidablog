"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ChatWidget.module.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  locale: "en" | "es";
}

const COPY = {
  en: {
    open: "Chat",
    title: "Ask Pura Vida",
    subtitle: "We usually reply in seconds.",
    placeholder: "Ask about a condition, services, hours…",
    send: "Send",
    welcome:
      "Hi! I'm Pura Vida's assistant. Ask me anything about Dr. Foss, our services, conditions we treat, or how to book your free consultation.",
    bookCta: "Book a free consultation →",
    bookHref: "/en/book-now",
    close: "Close chat",
    poweredBy: "Powered by AI",
    error: "Something went wrong. Please call (210) 685-1994 or book at /en/book-now.",
    thinking: "Thinking…",
  },
  es: {
    open: "Chat",
    title: "Pregúntale a Pura Vida",
    subtitle: "Normalmente respondemos en segundos.",
    placeholder: "Pregunta sobre una condición, servicios, horario…",
    send: "Enviar",
    welcome:
      "¡Hola! Soy el asistente de Pura Vida. Pregúntame lo que quieras sobre el Dr. Foss, nuestros servicios, condiciones que tratamos o cómo reservar tu consulta gratuita.",
    bookCta: "Reserva una consulta gratuita →",
    bookHref: "/es/book-now",
    close: "Cerrar chat",
    poweredBy: "Impulsado por IA",
    error: "Algo salió mal. Llama al (210) 685-1994 o reserva en /es/book-now.",
    thinking: "Pensando…",
  },
} as const;

export default function ChatWidget({ locale }: Props) {
  const t = COPY[locale];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, locale }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setMessages((curr) => [...curr, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error("ChatWidget", err);
      setMessages((curr) => [...curr, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          className={styles.launcher}
          onClick={() => setOpen(true)}
          aria-label={t.open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>{t.open}</span>
        </button>
      )}

      {open && (
        <div className={styles.panel} role="dialog" aria-label={t.title}>
          <header className={styles.header}>
            <div>
              <div className={styles.title}>{t.title}</div>
              <div className={styles.subtitle}>{t.subtitle}</div>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label={t.close}
            >
              ✕
            </button>
          </header>

          <div className={styles.messages} ref={scrollRef}>
            <div className={`${styles.bubble} ${styles.bubbleAssistant}`}>{t.welcome}</div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.bubble} ${
                  m.role === "user" ? styles.bubbleUser : styles.bubbleAssistant
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className={`${styles.bubble} ${styles.bubbleAssistant} ${styles.thinking}`}>
                {t.thinking}
              </div>
            )}
          </div>

          <Link href={t.bookHref} className={styles.bookCta}>
            {t.bookCta}
          </Link>

          <div className={styles.inputRow}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder={t.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={loading}
            />
            <button
              type="button"
              className={styles.sendBtn}
              onClick={send}
              disabled={loading || !input.trim()}
            >
              {t.send}
            </button>
          </div>

          <div className={styles.footer}>{t.poweredBy}</div>
        </div>
      )}
    </>
  );
}
