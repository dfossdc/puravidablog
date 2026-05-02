# Semrush One Baseline Findings — May 1, 2026

Captured during Day 1 AI Visibility audit. Use these numbers to measure improvement over the next 30/60/90 days.

## AI Visibility Baseline Score

- **Score: 14/100 — "Low" / "Rarely mentioned in LLM outputs compared to competitors"**
- **Total mentions across all LLMs: 3** (May 2026, +50% vs. prior month)
- **Total citations: 0** (peaked at 7 in Feb 2026, then crashed to 0 — likely correlated with the schema/canonical issues we just fixed)
- **Cited pages: 0**

## LLM Coverage Breakdown

| Platform | Mentions | Notes |
|---|---|---|
| **ChatGPT** | 0 | Completely invisible. Highest-traffic AI surface. **#1 priority.** |
| **AI Overview (Google)** | 0 | Completely invisible. **#2 priority.** |
| **AI Mode (Google)** | 1 (33%) | Foothold |
| **Gemini** | 2 (66%) | Strongest current presence |

## The Brand Disambiguation Crisis

**This is the #1 strategic problem.** AI literally cannot distinguish Pura Vida Chiropractic from other "Pura Vida" entities. Direct quote from a Gemini response to "What services does Pura Vida Wellness Center offer?":

> "Because there are several businesses across the United States operating under the name Pura Vida Wellness Center (or very similar names), the services vary..."

**Top related topics for `puravidasanantonio.com` (none are chiropractic):**
1. Pura Vida Ville (a town in Costa Rica)
2. Radio Pura Vida en Vivo (radio station)
3. Pura Vida Lifestyle and Accessories (the bracelet brand)
4. Pure Vida Lifestyle and Culture
5. Pura Vida Bar and Restaurant
6. Anuncios y servicios en San Antonio
7. Bienes Raíces San Antonio (real estate)

**A tracked prompt was about "Port Orange Chiropractic" (Florida)** — Semrush is grouping totally unrelated businesses with similar names.

### Disambiguation Action Plan
1. **Always brand as "Pura Vida Chiropractic"** — not "Pura Vida" or "Pura Vida Wellness Center"
2. **Always pair brand with anchor entities:** Dr. Dan Foss, San Antonio TX, NW Military Hwy, Sacro-Occipital Technique, CMRT
3. **Schema.org Place markup** — already has lat/long. Add Wikidata/Wikipedia entity reference if possible
4. **Backlink anchor text consistency** — when getting links, ask for "Pura Vida Chiropractic San Antonio" (not just "Pura Vida")
5. **Brand profile in Semrush is now set up with `San Antonio, Texas` target** — future tracking will be SA-specific

## The Source Citation Insight

**For chiropractic AI queries (3.6M monthly AI volume), the top sources AI cites are:**
- youtube.com (#1)
- facebook.com (#2)
- instagram.com (#3)

**Top brands cited:** Instagram, Facebook, Google

**Strategic implication:** AI for chiropractic queries weights social media MORE than chiropractic websites. The site SEO matters less than:
- YouTube channel with chiropractic education videos
- Active Instagram with chiropractic posts
- Active Facebook business page with patient stories

The current "off-site" footprint (Facebook + LinkedIn + Apple Business + Healthgrades + Yelp) helps for traditional search, but AI search citations need YouTube + IG presence.

### Recommended next moves

**MAJOR UPDATE — turns out all 3 social channels exist and are healthy:**

| Channel | URL | Status |
|---|---|---|
| YouTube | https://www.youtube.com/@puravidadc | ✅ "Pura Vida Chiropractic", **66 videos**, 347 subs |
| Instagram | https://www.instagram.com/puravidasatx/ | ✅ "Pura Vida Chiropractic", 278 posts, 726 followers |
| Facebook | https://www.facebook.com/puravidasanantonio/ | ✅ "Pura Vida Chiropractic Dr. Dan Foss", 3K followers |

So the assets are already built. The problem isn't *creating* social content — it's that AI doesn't know they exist or can't connect them to chiropractic queries. Original schema URL for YouTube was wrong (@puravidasanantonio → 404); FIXED in commit 05765e7 to point at the real @puravidadc.

The work that actually moves the AI Visibility needle from here:

1. **YouTube SEO sweep on existing 66 videos** — title/description/tag pass. Each video should have:
   - Title with chiropractic + San Antonio + specific topic
   - Description starting with the answer to a likely AI query
   - Tags including: chiropractor san antonio, SOT, CMRT, Webster Technique, Dr. Dan Foss
   - Captions/transcripts (YouTube auto-captions are searchable by AI; manual edits make them better)

2. **Instagram bio audit** — currently links to `#fatadapteddoc` (separate Dr. Foss keto/lifestyle brand). For AI entity disambiguation on the chiropractic side, that link could create cross-brand confusion. Either:
   - Move that link off `puravidasatx` and into a personal `@drdanfoss` account
   - Or accept the cross-link (it might actually help if AI starts associating Dr. Dan Foss with both health expertise areas)

3. **Cross-platform consistency** — every public profile (LinkedIn, FB, IG, YouTube, Apple Business, Healthgrades, Vitals, BBB) should use **"Pura Vida Chiropractic"** as the brand name (not just "Pura Vida"). Already true for FB + IG + YouTube. ✅

## Prompt Tracking — Current State

3 prompts being tracked, but they are:
1. "Chiropractic Clinics in San Antonio and Surrounding Areas" — mentioned (16 brands, 0 source citations from us)
2. "How do Port Orange chiropractors compare in terms of reviews and patient satisfaction?" — **WRONG INTENT** (Florida)
3. "What services does Pura Vida Wellness Center offer?" — mentioned but with disambiguation warning

**0 source citations from puravidasanantonio.com across all 3 prompts.** Brand is mentioned by name in AI responses but not cited as a source/URL.

### 25 Better Prompts to Track
See `semrush-one-gameplan.md` Section 1 for the curated 25-prompt list. Need to add these via Prompt Research → Monitor flow.

## Site Audit Trend

**Site Health: 85% → 91% (+6 points in one re-crawl after schema fix shipped).**

Issues remaining (pending re-crawl after www→non-www redirect + title fix):
- 111 invalid structured data items (FIXED — should be ~0 next crawl)
- 54 hreflang conflicts (FIXED — should be ~0 next crawl)
- 81 pages with too-much-text in title (FIXED — should be <10 next crawl)
- 80 pages with low text-HTML ratio (NOT YET ADDRESSED — needs content review)
- 13 pages with multiple H1 tags (TODO — likely from blog template)
- 8 URLs with permanent redirects (audit + clean up)
- 4 pages require content optimization (review one-by-one)
- 3 incorrect pages in sitemap.xml (audit)
- 1 page returns 4XX (find + fix)

## Action Items Out of Today's Audit

**SHIPPED today (in current commits):**
- ✅ LocalBusiness schema cleanup (removed invalid props) — fixes 111 errors
- ✅ www → non-www 301 redirect — fixes 54 hreflang conflicts
- ✅ Title template + blog suffix removal — fixes 81 too-long titles

**Pending action (this week):**
- ⏳ Brand profile data collection (5-10 min after setup)
- ⏳ Add 25 high-value prompts to monitor (manual setup in Semrush)
- ⏳ Address 80 low text-HTML-ratio pages (likely thin/template-heavy pages)
- ⏳ Fix 13 multiple-H1 instances (probably blog template renders both site-h1 + post-h1)
- ⏳ Find the 1 page returning 4XX
- ⏳ Sitemap.xml cleanup (3 incorrect entries)

**Strategic next 30 days:**
- 🎯 YouTube channel — first 5-10 videos on SOT, CMRT, Webster, "what to expect"
- 🎯 Instagram cadence — 3-5 posts/week
- 🎯 Brand consistency sweep — update everywhere "Pura Vida" appears alone to "Pura Vida Chiropractic"
- 🎯 Backlink anchor text guidance — when requesting links, ask for "Pura Vida Chiropractic San Antonio" specifically

## Numbers to Beat (Next Month)

| Metric | May 2026 (today) | June 2026 target | Sept 2026 stretch |
|---|---|---|---|
| AI Visibility Score | 14/100 | 25/100 | 50/100 |
| Mentions across all LLMs | 3 | 8 | 25+ |
| Source citations | 0 | 3 | 15+ |
| ChatGPT mentions | 0 | 2+ | 10+ |
| Site Health | 91% | 95% | 97%+ |
| Organic keywords | 132 | 200+ | 500+ |
| Backlinks | 477 | 525+ | 750+ |
