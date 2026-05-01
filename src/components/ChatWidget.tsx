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
    bookCta: "Request a free consultation →",
    bookOnlineHref: "/en/book-now",
    bookOnline: "Or book online directly",
    close: "Close chat",
    poweredBy: "Powered by AI",
    error: "Something went wrong. Please call (210) 685-1994 or book at /en/book-now.",
    thinking: "Thinking…",
    form: {
      heading: "Request a free consultation",
      sub: "Share a bit about you and Dr. Foss's team will reach out within hours.",
      name: "Full name",
      namePh: "Jane Smith",
      email: "Email",
      emailPh: "you@example.com",
      phone: "Phone",
      phonePh: "(210) 555-0123",
      time: "Best days / times to reach you",
      timePh: "e.g. weekday mornings, after 4pm",
      reason: "What's bringing you in? (optional)",
      reasonPh: "e.g. lower back pain, pregnancy care, infant reflux…",
      submit: "Send request",
      submitting: "Sending…",
      back: "← Back to chat",
      successTitle: "Request received!",
      successBody:
        "Dr. Foss's team will reach out shortly to confirm a time. If you need help right away, call (210) 685-1994.",
      errorBody:
        "We couldn't send your request. Please call (210) 685-1994 or try again in a moment.",
    },
  },
  es: {
    open: "Chat",
    title: "Pregúntale a Pura Vida",
    subtitle: "Normalmente respondemos en segundos.",
    placeholder: "Pregunta sobre una condición, servicios, horario…",
    send: "Enviar",
    welcome:
      "¡Hola! Soy el asistente de Pura Vida. Pregúntame lo que quieras sobre el Dr. Foss, nuestros servicios, condiciones que tratamos o cómo reservar tu consulta gratuita.",
    bookCta: "Solicita una consulta gratuita →",
    bookOnlineHref: "/es/book-now",
    bookOnline: "O reserva en línea directamente",
    close: "Cerrar chat",
    poweredBy: "Impulsado por IA",
    error: "Algo salió mal. Llama al (210) 685-1994 o reserva en /es/book-now.",
    thinking: "Pensando…",
    form: {
      heading: "Solicita una consulta gratuita",
      sub: "Cuéntanos un poco sobre ti y el equipo del Dr. Foss te contactará en horas.",
      name: "Nombre completo",
      namePh: "María García",
      email: "Correo electrónico",
      emailPh: "tu@ejemplo.com",
      phone: "Teléfono",
      phonePh: "(210) 555-0123",
      time: "Mejores días / horarios para contactarte",
      timePh: "p. ej. mañanas entre semana, después de las 4pm",
      reason: "¿Qué te trae? (opcional)",
      reasonPh: "p. ej. dolor lumbar, embarazo, reflujo del bebé…",
      submit: "Enviar solicitud",
      submitting: "Enviando…",
      back: "← Volver al chat",
      successTitle: "¡Solicitud recibida!",
      successBody:
        "El equipo del Dr. Foss te contactará pronto para confirmar un horario. Si necesitas ayuda inmediata, llama al (210) 685-1994.",
      errorBody:
        "No pudimos enviar tu solicitud. Llama al (210) 685-1994 o inténtalo en un momento.",
    },
  },
} as const;

type Mode = "chat" | "booking" | "submitted";

interface FormState {
  name: string;
  email: string;
  phone: string;
  time: string;
  reason: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", phone: "", time: "", reason: "" };

export default function ChatWidget({ locale }: Props) {
  const t = COPY[locale];
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open, mode]);

  useEffect(() => {
    if (open && mode === "chat") inputRef.current?.focus();
  }, [open, mode]);

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

  async function submitBooking(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);
    try {
      const conversationContext = messages
        .slice(-6)
        .map((m) => `${m.role === "user" ? "Patient" : "Bot"}: ${m.content}`)
        .join("\n");
      const sourceUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const res = await fetch("/api/book-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          sourceUrl,
          conversationContext: conversationContext || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError((data && data.error) || t.form.errorBody);
        setSubmitting(false);
        return;
      }
      setMode("submitted");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("submitBooking", err);
      setSubmitError(t.form.errorBody);
    } finally {
      setSubmitting(false);
    }
  }

  function openBookingForm() {
    setSubmitError(null);
    setMode("booking");
  }

  function backToChat() {
    setMode("chat");
    setSubmitError(null);
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

          {mode === "chat" && (
            <>
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

              <button
                type="button"
                className={styles.bookCta}
                onClick={openBookingForm}
              >
                {t.bookCta}
              </button>

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
            </>
          )}

          {mode === "booking" && (
            <form className={styles.form} onSubmit={submitBooking}>
              <div className={styles.formInner}>
                <button type="button" className={styles.backLink} onClick={backToChat}>
                  {t.form.back}
                </button>
                <div className={styles.formHeading}>{t.form.heading}</div>
                <div className={styles.formSub}>{t.form.sub}</div>

                <label className={styles.fieldLabel}>
                  {t.form.name} <span className={styles.required}>*</span>
                  <input
                    type="text"
                    className={styles.field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.form.namePh}
                    required
                    autoComplete="name"
                    maxLength={200}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  {t.form.email} <span className={styles.required}>*</span>
                  <input
                    type="email"
                    className={styles.field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.form.emailPh}
                    required
                    autoComplete="email"
                    maxLength={200}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  {t.form.phone} <span className={styles.required}>*</span>
                  <input
                    type="tel"
                    className={styles.field}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.form.phonePh}
                    required
                    autoComplete="tel"
                    maxLength={60}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  {t.form.time}
                  <input
                    type="text"
                    className={styles.field}
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    placeholder={t.form.timePh}
                    maxLength={500}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  {t.form.reason}
                  <textarea
                    className={`${styles.field} ${styles.textarea}`}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    placeholder={t.form.reasonPh}
                    rows={3}
                    maxLength={2000}
                  />
                </label>

                {submitError && (
                  <div className={styles.errorBox}>{submitError}</div>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitting || !form.name.trim() || !form.email.trim() || !form.phone.trim()}
              >
                {submitting ? t.form.submitting : t.form.submit}
              </button>
            </form>
          )}

          {mode === "submitted" && (
            <div className={styles.successWrap}>
              <div className={styles.successIcon} aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className={styles.successTitle}>{t.form.successTitle}</div>
              <div className={styles.successBody}>{t.form.successBody}</div>
              <button type="button" className={styles.successBtn} onClick={backToChat}>
                {t.form.back}
              </button>
            </div>
          )}

          {mode !== "submitted" && (
            <Link href={t.bookOnlineHref} className={styles.bookOnline}>
              {t.bookOnline}
            </Link>
          )}

          <div className={styles.footer}>{t.poweredBy}</div>
        </div>
      )}
    </>
  );
}
