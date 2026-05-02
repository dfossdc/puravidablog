# Spanish Reviews — Biweekly Scheduled Task (manual create)

Cowork blocked autonomous creation of this scheduled task because the current session is itself running inside a scheduled-task context. **Create it yourself in a fresh chat window** — takes ~30 seconds.

## How to create

In a fresh Cowork chat:

```
/schedule
```

Then paste the prompt below when asked. Use:

- **Task name:** `spanish-reviews-biweekly-ask`
- **Cron:** `0 9 1,15 * *` (fires at 9 AM on the 1st and 15th of each month — biweekly cadence)
- **Description:** Biweekly reminder to ask 5-10 Spanish-speaking patients to leave a Google review in Spanish

## Prompt to paste

```
**OBJECTIVE:** Surface a clear, actionable biweekly reminder to Dr. Dan Foss
at Pura Vida Chiropractic (2318 NW Military Hwy Suite 103, San Antonio, TX
78231) to ask 5-10 Spanish-speaking patients during the next two weeks to
leave a Google review in Spanish. Spanish-language reviews are a direct
ranking signal for Spanish-language search queries on Google's Local Pack —
this is one of the highest-leverage Spanish SEO moves available. The
practice has 147+ five-star reviews but most are in English, leaving
Spanish-keyword ranking under-supported.

**WHAT TO DO WHEN THIS TASK FIRES:**

1. Display the following reminder message to the user, formatted clearly:

---

**Spanish Reviews Reminder — Next 2 Weeks**

Goal: collect 5-10 NEW Google reviews in Spanish from your Spanish-speaking
patients before the next reminder fires (in 2 weeks).

**Direct Google review link to share with patients:**
https://g.page/r/CYpq-sX6h_M3EBM/review

(Or use the short link if you have one set up; the link above goes to your
Pura Vida Chiropractic Google Business Profile review form.)

**Suggested ask script — Spanish (preferred for Spanish-speaking patients):**

> "¡[Nombre del paciente], muchas gracias por venir hoy! Si no le importa,
> ¿podría dejarnos una reseña en Google en español? Solo toma 30 segundos
> y nos ayuda muchísimo a que otras familias hispanas en San Antonio nos
> encuentren. Aquí está el enlace directo, le envío también un mensaje
> de texto."

**Suggested ask script — English (for patients who prefer English but
speak Spanish):**

> "[Patient name], thank you so much for coming in. If you have a minute,
> would you mind leaving us a Google review IN SPANISH? It helps
> Spanish-speaking families in San Antonio find us. I'll send you the
> direct link by text right now."

**Workflow suggestions:**
- Print 10 small cards with the QR code + URL and keep them at checkout
- Have front desk staff text the link to each Spanish-speaking patient at
  checkout (text is more likely to be acted on than verbal ask alone)
- Don't ask patients you don't have strong rapport with — focus on raving fans
- If a patient says yes but doesn't follow through within 48 hours, send
  ONE follow-up text. After that, drop it

**Tracking (optional but useful):**
Keep a simple list of who you asked. Compare against new Spanish reviews
2 weeks later. The conversion rate (asks → reviews) is a useful baseline
to track.

**Why this matters:**
Google ranks local businesses partly by review volume + recency + language.
A practice with 147 English reviews and 0 Spanish reviews underperforms
on Spanish queries even with great Spanish content. Five new Spanish
reviews per cycle = 130 over a year, which is enough to flip the Spanish
ranking signal meaningfully.

---

2. After displaying the reminder, ask the user if they have any specific
   patients in mind they want help drafting the ask for, or if they want
   any changes to the workflow.

3. Do NOT take any other action automatically. This is a reminder/coaching
   task — the actual asking happens in the clinic by Dr. Foss and front
   desk staff.

**SUCCESS CRITERIA:** User receives a clear, actionable reminder with the
review link, bilingual scripts, and workflow tips. No website edits,
no emails sent autonomously.
```

## Verify the Google review link

Before scheduling, confirm `https://g.page/r/CYpq-sX6h_M3EBM/review` actually opens to your review form. If not:

1. Open Google Business Profile (business.google.com)
2. Click "Get more reviews" or "Share review form"
3. Copy the actual short URL Google generates
4. Update the prompt above with the correct link before scheduling

## Why biweekly (1st + 15th) instead of "every 14 days"

Standard cron doesn't have a true "every 2 weeks" expression. The 1st-and-15th cadence (`0 9 1,15 * *`) is the cleanest reliable substitute — fires twice per month at predictable times, averaging ~14 days apart.
