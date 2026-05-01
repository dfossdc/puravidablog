# LinkedIn Posts Handoff — Pura Vida Chiropractic

## Goal
Set up automated LinkedIn posts in **English** using **Make.com**, each post with an image, text, and a link to the English blog on the Vercel site.

---

## Current Setup (Reference — Facebook Posts)

### Google Sheet
- **Sheet ID:** `1VJ5CoKWwkeDHX6fymR2fvPajikE4P0z1wKsabBaklaw`
- **Tab: `facebook-posts-make`** (gid=2143584634) — Status column: `pending` / `posted`
- **Tab: `educational-posts`** (gid=1067407269) — Status column: `Ready` / `posted`

### Make.com Scenarios (Facebook — existing)
- **Scenario 1 — FB Posts Pura Vida** (ID: 4724273): Google Sheets → Facebook Pages → Google Sheets update
- **Scenario 2 — Educational FB Posts 9AM** (ID: 4733993): Same flow, educational tab

### Image URLs
All images are hosted at:
```
https://puravidablog.vercel.app/images/conditions/{filename}
```
and
```
https://puravidablog.vercel.app/images/{filename}
```

---

## What Needs to Be Built for LinkedIn

### 1. New Google Sheet Tab (or new sheet)
Create a tab called `linkedin-posts` with these columns:

| Column | Description |
|--------|-------------|
| **Status** | `pending` / `posted` |
| **Post Text** | The LinkedIn caption/body text (English) |
| **Image URL** | Full URL to the image on Vercel (e.g., `https://puravidablog.vercel.app/images/conditions/sciatica.jpg`) |
| **Blog Link** | Full URL to the English blog post (e.g., `https://puravidablog.vercel.app/en/blog/sciatica-relief-san-antonio`) |
| **Post Date** | When it should be posted |
| **Posted Date** | Timestamp after successful post |

### 2. New Make.com Scenario
Create a new scenario following the same pattern as the Facebook ones:

**Flow:** Google Sheets (Search Rows where Status = "pending") → LinkedIn (Create a Share with Image) → Google Sheets (Update Row status to "posted")

**LinkedIn module in Make.com:**
- Use: **LinkedIn → Create an Image Share (Organization or Personal)**
- Requires: LinkedIn OAuth connection (connect Dan's LinkedIn account)
- Fields to map:
  - **Text/Commentary** → Post Text column
  - **Image URL** → Image URL column (LinkedIn accepts external image URLs)
  - **Content URL** → Blog Link column (this makes the post link to the blog)

**Schedule:** Set your preferred posting time (the FB educational posts run at 9 AM)

### 3. LinkedIn Connection in Make.com
- In Make.com, go to **Connections** → **Add** → Search for **LinkedIn**
- Authenticate with Dan's LinkedIn account
- Grant permissions for posting

---

## English Blog Posts Available (12 posts)

These are the existing blog posts that can be linked from LinkedIn. The English URL pattern is:
```
https://puravidablog.vercel.app/en{slug}
```

| Blog Post | URL Path |
|-----------|----------|
| Backpack Safety and Your Child's Spine | `/en/blog/backpack-safety-kids-spine-san-antonio` |
| Can Chiropractic Help With Asthma? | `/en/blog/chiropractic-asthma-san-antonio` |
| Real Results: Corrective Chiropractic Care | `/en/blog/corrective-chiropractic-results-san-antonio` |
| Why I Became a Chiropractor: Dr. Dan Foss's Story | `/en/blog/dr-dan-foss-story` |
| Never Been to a Chiropractor? What to Expect | `/en/blog/first-time-chiropractor-san-antonio` |
| Neck Pain From Working at a Desk? | `/en/blog/neck-pain-desk-job-san-antonio` |
| How What You Eat Affects Your Spine | `/en/blog/nutrition-spine-health-san-antonio` |
| Is Chiropractic Safe for Kids? | `/en/blog/pediatric-chiropractor-san-antonio` |
| The Pura Vida Protocol | `/en/blog/pura-vida-protocol-san-antonio` |
| Sciatica Relief in San Antonio | `/en/blog/sciatica-relief-san-antonio` |
| Text Neck Is Real | `/en/blog/text-neck-treatment-san-antonio` |
| What Does a Chiropractor Actually Do? | `/en/blog/what-does-a-chiropractor-do` |

---

## Available Images on Vercel

### General images (`/images/`)
dr-dan.jpg, dr-foss-about.webp, dr-foss-adjusting-child.webp, dr-foss-adjusting-neck.webp, dr-foss-adjusting-patient.webp, dr-foss-examining-neck.webp, chiropractic-care.jpg, backpain.jpg, headache.jpg, sciatica.jpg, neuropathy.webp, pregnancy.webp, sports-injury.webp, softwave.jpg, tmj.webp, laser-therapy-knee.webp, pediatric-chiropractor.png, pregnancy-chiropractic.png, postural-correction.webp

### Condition images (`/images/conditions/`)
Over 100 condition-specific images. Key ones matching blog topics:
- sciatica.jpg, backpain.jpg, neck.jpg, headache.jpg
- forwardheadposture.jpg (text neck), text-neck.jpg
- scoliosis.jpg, allergies.jpg, arthritis.webp
- infantcolic.jpg, infantreflux.jpg (pediatric)
- pregnancy.webp, postpartum-recovery.jpg
- chronic-pain.jpg, immune-support.jpg

---

## Suggested Post Format for LinkedIn

```
[Engaging hook related to the blog topic]

[2-3 sentences summarizing the value — what the reader will learn]

[Call to action: "Read the full article" + blog link]

#Chiropractor #SanAntonio #PuraVidaChiropractic #[topic-specific hashtags]
```

---

## GitHub / Vercel Details
- **Repo:** `dfossdc/puravidablog` on GitHub
- **Production branch:** `claude/pura-vida-nextjs-site-KtAyo`
- **Live URL:** `https://puravidablog.vercel.app`
- **Local path on Mac:** `/Users/dannyfoss/puravidablog`

---

## Step-by-Step Setup Checklist

1. [ ] Create `linkedin-posts` tab in the Google Sheet (ID: `1VJ5CoKWwkeDHX6fymR2fvPajikE4P0z1wKsabBaklaw`)
2. [ ] Populate rows with post text, image URLs, and blog links for each of the 12 blog posts
3. [ ] Connect LinkedIn account in Make.com (Connections → LinkedIn OAuth)
4. [ ] Create new Make.com scenario: Google Sheets → LinkedIn Image Share → Google Sheets Update
5. [ ] Set schedule (e.g., daily at a specific time, or specific days)
6. [ ] Test with one post manually (Run Once) before activating the schedule
7. [ ] Activate scenario

---

*Created: April 18, 2026*
*Project: Pura Vida Chiropractic — Dan Foss*
