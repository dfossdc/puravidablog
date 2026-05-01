# Off-Site Automation Plan — Pura Vida Chiropractic

Three high-impact automations that Elevate Marketing's research surfaced as the top un-shipped levers, designed to fit your existing stack.

**Stack you already have:**
- Schedulista (booking + patient records)
- Make.com (already running 2 Facebook scenarios)
- Google Sheets (existing post queues + connection)
- Phone line: (210) 685-1994

**What you'd need to add:**
- A **Twilio account** for SMS (free tier covers ~500 SMS/month at the start; ~$0.0079 per SMS after)
- A **call-tracking phone number** (your existing line, or a new tracking number that forwards to (210) 685-1994)
- (Optional) Schedulista's webhook integration enabled — you may need to email Schedulista support to turn this on

---

## Automation 1 — Review velocity (post-visit Google review request)

**Goal:** Get to 10-20 new Google reviews per month. Compounds your local SEO authority forever.

### Trigger flow

```
Schedulista (appointment completed)
    ↓ webhook
Make.com scenario "Review Request"
    ↓ wait 4 hours (so the patient's left the office, day is settling in)
Twilio: send SMS to patient
    ↓ "Hi {name}! Hope you're feeling better after today's adjustment. If you have a moment, could you leave a quick review on Google? It helps other people find us when they need this kind of care: {short Google review link}. — Dr. Dan"
    ↓ wait 4 days
If no review submitted yet (check via Google Business Profile API or manual check):
    ↓ send follow-up SMS
    "Hi {name}, just a friendly reminder — your review would mean a lot. {short review link}. Thanks again! — Pura Vida"
```

### Make.com modules needed

1. **Webhook** (custom webhook URL Schedulista will POST to)
2. **Tools → Sleep** (4 hours)
3. **Twilio → Send a Message**
4. **Tools → Sleep** (4 days)
5. **HTTP → Make a request** to `https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews` to check if review was left (need GBP API access — may not be straightforward)
6. **Router** based on review found
7. Second Twilio for follow-up

### Setup steps

1. **Twilio account:** sign up at twilio.com, get a phone number (~$1.15/mo + per-SMS cost). Buy a number with a San Antonio area code (210) for trust.
2. **Short Google review link:** generate at <https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID>. Find your Place ID via <https://developers.google.com/maps/documentation/places/web-service/place-id>.
3. **Schedulista webhooks:** email Schedulista support and ask "Can you enable webhook events for appointment.completed on my account?" If they say no (they sometimes refuse on lower plans), workaround is to scrape via their iCal feed or use a different trigger like the daily appointment-completed report.
4. **Build the Make.com scenario** following the flow above.

### Realistic expected outcome

If you're seeing 50-100 patients/week and ~15% leave a review when prompted (industry average for SMS post-visit), that's 7-15 new reviews per week. At your current 4.8 / 147 reviews, this gets you to 200+ in 2-3 months and 300+ in 6 months — a meaningful local-pack ranking signal.

---

## Automation 2 — Missed-call SMS reply

**Goal:** Convert missed calls into bookings. ~30% of missed calls become bookings when answered within 2 minutes via SMS.

### Trigger flow

```
Patient calls (210) 685-1994
    ↓ no answer
Phone provider sends missed-call event
    ↓
Twilio (or call tracking) detects missed call → triggers webhook
    ↓
Make.com scenario "Missed-Call Reply"
    ↓ within 60 seconds
Twilio: send SMS to caller
    ↓ "Hi! Just missed your call. This is Pura Vida Chiropractic. Sorry we couldn't pick up — can I help you book an appointment? Reply here, or book directly: https://puravidasanantonio.com/en/book-now"
```

### Setup options (pick one)

**Option A — Use Twilio for the main number (cleaner, but disrupts current line)**
- Port (210) 685-1994 to Twilio (~$15 setup)
- Configure call forwarding so calls go to your office phone first; if not answered in 4 rings, Twilio takes over and triggers webhook
- Send SMS automatically from the same number

**Option B — Call tracking number (preserves current line)**
- Sign up for CallRail or similar (~$50/mo)
- Set up tracking number that forwards to (210) 685-1994
- Use the tracking number on website + GBP + LinkedIn (your office line stays as-is for old-channel callers)
- CallRail webhook → Make.com → Twilio SMS reply (Twilio = ~$1.15/mo + per-SMS)

**Option C — Simplest (manual fallback)**
- Skip tooling. Set up a daily Make.com job that pulls Schedulista's contact list of patients who called and didn't book, sends them a same-day follow-up SMS via Twilio.

I'd ship **Option B** unless you want the deeper integration. CallRail also gives you call-recording + per-source attribution (so you know which marketing channel brought the call) which is valuable on its own.

### Recommended SMS copy

```
Hi! This is Pura Vida Chiropractic — sorry we missed your call! Were you trying to book an appointment? You can book a free consultation here: puravidasanantonio.com/en/book-now or text us back. — Dr. Dan
```

For Spanish-speaking callers, ideally detect language (CallRail has language-detection in their analytics package). Or send a bilingual SMS:

```
Hi! Sorry we missed your call. — Pura Vida Chiropractic. Book a free consultation: puravidasanantonio.com/en/book-now / Reserva una consulta gratuita: puravidasanantonio.com/es/book-now — Dr. Dan / (210) 685-1994
```

---

## Automation 3 — Lapsed patient reactivation (90+ days)

**Goal:** Recover patients who haven't been in for 90+ days. Industry data: ~10% reactivation rate when prompted.

### Trigger flow (runs daily)

```
Make.com scenario "Lapsed Patient Reactivation" runs every morning at 8am
    ↓
Schedulista API: pull list of patients with no appointment in last 90 days
    ↓ (filter out those who already received reactivation in last 30 days — track in a Google Sheet)
For each patient:
    ↓ check days since last visit
    ↓ wave 1 (90 days): send SMS + email
        SMS: "Hi {name}, it's been a few months since we last saw you. How's your back / sciatica / etc.? Want to come in for a check-in? — Dr. Dan, (210) 685-1994"
        Email: longer, friendlier note with same offer
    ↓ wave 2 (97 days): SMS only
    ↓ wave 3 (110 days): final SMS w/ offer
        "{name}, last reach-out — if you'd like to come back in, we have an opening this week. Free consultation if you'd rather start fresh: puravidasanantonio.com/en/book-now"
    ↓ Append patient to "reactivated" sheet so they don't get re-pinged
```

### Setup steps

1. **Schedulista API access:** their docs at <https://api.schedulista.com> — you'll need an API key from your account settings.
2. **Reactivation log Google Sheet** — tracks who's been pinged and when.
3. **Make.com scenario** with 4 modules: Schedulista (pull lapsed list), Iterator (one row per patient), Twilio (SMS), Gmail/SMTP (email), Google Sheets (log it).

### Realistic expected outcome

If you have ~500 active patients and roughly 1/3 lapse over a year, that's ~165 lapsed patients to work through. At a 10% reactivation rate that's ~16 returning patients you'd otherwise lose forever. Average lifetime value per patient ~$500-1500, so this automation easily justifies itself even with the Twilio + setup cost.

---

## Implementation order (priority)

1. **Twilio setup** — required for all three automations. ~30 min: account + buy SA-area number + verify.
2. **Review velocity** (Automation 1) — highest impact-per-hour, easiest to build. ~1-2 hours. Ship this first.
3. **Lapsed patient reactivation** (Automation 3) — second highest. ~2-3 hours. Ship next.
4. **Missed-call SMS** (Automation 2) — most setup cost (CallRail subscription) but highest urgency-value per call. Ship third when budget allows.

Total: ~$50-80/month in tooling cost (Twilio + CallRail) once all 3 are live. Conservative ROI: 1-2 reactivated patients pays for the whole stack.

---

## What you need to do for me to build any of these

For me (or another agent) to actually wire these up in Make.com, I need:

1. **Twilio account** created + Auth Token + phone number (you do this; takes 10 min).
2. **Schedulista API key** from your account settings.
3. **Google Place ID** for Pura Vida (one-time lookup).
4. (For Automation 2 only) **CallRail account** + tracking number setup, OR willingness to port the office line to Twilio.

Once I have those, building each automation is ~1-3 hours of Make.com clicking + testing. Tell me which one you want to start with and I'll write the step-by-step build doc like the LinkedIn one.
