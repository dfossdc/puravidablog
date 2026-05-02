# Spanish #1 Strategy — San Antonio Chiropractic

## The honest reality

To rank #1 for a Spanish chiropractic keyword in San Antonio is a **3-6 month grind**, not a today-fix. The competition (Castle Hills, Pecan Valley, Essence, Sam Moya) has 5-15 years of backlinks. We CAN beat them — and we have a real edge (bilingual + 23 years SA + Advanced SOT) — but it requires sustained execution across content, technical SEO, and backlinks.

**Realistic expectations:**

| Time horizon | What we can hit #1 for |
|---|---|
| 4-6 weeks | Long-tail Spanish keywords with KD <15 (e.g. "huesero san antonio", "quiropractico que habla espanol san antonio", "quiropractico hispano") |
| 3 months | Mid-volume Spanish keywords with KD 15-30 (e.g. "quiropractico cerca de mi san antonio", "quiropractico para embarazadas san antonio") |
| 6+ months | High-volume primary terms (e.g. "quiropractico san antonio", "el mejor quiropractico san antonio") |

## What we already have (the foundation)

Already shipped this session:
- **11 Spanish landing pages** (`/es/quiropractico-cerca-de-mi-san-antonio`, `/es/el-mejor-quiropractico-san-antonio`, `/es/san-antonio-quiropractico`, `/es/quiropratico-san-antonio`, `/es/que-es-un-quiropractico`, `/es/huesero-san-antonio`, plus 4 condition-chiropractor pages, plus the `/es` homepage)
- **150+ Spanish blog posts** (paired with EN counterparts)
- **Hreflang properly configured** (translatedSlug pairing on 132 posts)
- **Spanish slug routes redirecting properly** (next.config.mjs)
- **/es sitemap entries** pruned and accurate
- **Bilingual hero on /es homepage** with "Hispanic Chiropractor in San Antonio" exact-phrase

What we're still missing:
- Spanish-language internal linking hub structure
- FAQ sections on most Spanish pages (the EN-side has FAQs, ES often doesn't)
- Spanish-language backlinks from Hispanic publications/directories
- Spanish reviews on GBP / Yelp / Healthgrades (signal to Google we serve the SA Hispanic market)
- Spanish blog cluster supporting each pillar

## The 7 highest-priority Spanish keywords to target

Ranked by realistic-impact-per-effort:

| # | Keyword | Est. Volume | KD | Target page | Current state |
|---|---|---|---|---|---|
| 1 | **huesero san antonio** | 100-300/mo | LOW | `/es/huesero-san-antonio` | Pillar exists, needs cluster |
| 2 | **quiropractico hispano san antonio** | 50-150/mo | LOW | `/es` homepage | Just refreshed today |
| 3 | **quiropractico que habla espanol san antonio** | 50-100/mo | LOW | `/es/san-antonio-quiropractico` | Page exists |
| 4 | **quiropractico cerca de mi san antonio** | 200-500/mo | MED | `/es/quiropractico-cerca-de-mi-san-antonio` | Mega-pillar |
| 5 | **que es un quiropractico** | 1,500/mo | MED | `/es/que-es-un-quiropractico` | Pillar exists |
| 6 | **quiropractico para embarazadas san antonio** | 100-200/mo | MED | needs new page + service `/es/services/quiropractico-embarazo` | Has service page |
| 7 | **quiropractico san antonio** | 1,000-3,000/mo | HIGH | `/es` homepage | Hardest target |

## The plan — 5 phases, ranked by impact-per-hour

### PHASE A — Spanish FAQ + content depth (2 hours, do TODAY)
Add FAQPage schema + Spanish FAQs to the 5 main Spanish landing pages that don't have them. Same pattern as the pediatric refresh I just did:
- `/es/quiropractico-cerca-de-mi-san-antonio` (already has FAQs — verify)
- `/es/huesero-san-antonio` (already has FAQs — verify)
- `/es/que-es-un-quiropractico` (verify)
- `/es/san-antonio-quiropractico` (likely needs FAQs)
- `/es/quiropratico-san-antonio` (likely needs FAQs)
- `/es/el-mejor-quiropractico-san-antonio` (likely needs FAQs)

Each page gets 6 FAQs in Spanish, exact-phrase repetition 5-7×, internal links to other Spanish pages.

### PHASE B — Spanish internal linking hub (1 hour, do TODAY)
Create a Spanish-only "Recursos Quiroprácticos" section in the `/es` homepage that links to all 11 Spanish landing pages with Spanish anchor text. Mirror in footer Quick Links column for Spanish.

### PHASE C — Spanish blog cluster (this week, 3-5 hours)
Build 5 NEW Spanish blog posts — one per pillar — using existing EN counterparts as starting templates. Each new post should:
- 800+ words in natural Spanish (not machine-translated)
- Include the target keyword in title, H1, first 100 words
- Link to its parent pillar
- Get linked FROM the parent pillar's "Artículos Relacionados" section

Suggested first 5:
1. "Como elegir un huesero confiable en San Antonio" → links to `/es/huesero-san-antonio`
2. "Quiropráctico para dolor de espalda durante el embarazo en San Antonio" → links to `/es/services/quiropractico-embarazo`
3. "Diferencia entre quiropráctico hispano y bilingüe" → links to `/es`
4. "Cuántas sesiones quiroprácticas necesito" → links to `/es/que-es-un-quiropractico`
5. "Quiropráctico cerca de Westside San Antonio" → links to `/es/west-san-antonio-chiropractor`

### PHASE D — Spanish backlinks (ongoing, 30 min/week)
Hispanic-targeted directories and publications:
- **La Prensa de San Antonio** (Spanish-language SA paper) — pitch a Spanish op-ed on huesero vs licensed chiropractic
- **Hispanic Chamber of Commerce of San Antonio** — paid membership, directory listing in Spanish
- **conexionhispanaonline.com** — SA-area Hispanic directory
- **hispano.com** — national Hispanic directory
- **univision.com/sanantonio** — Univision local affiliate, sometimes accepts contributor pieces
- **batanga.com** — Hispanic content network

### PHASE E — Spanish GBP signals (5 min/week)
- Post weekly GBP updates IN SPANISH (we already have a scheduled task for GBP posts; add a Spanish toggle)
- Ask Spanish-speaking patients to leave reviews in Spanish — Google detects review language and matches to query language for ranking
- Add "Habla Español" prominently in GBP business description (if not already)

## What I can do RIGHT NOW vs what needs your input

### Can execute autonomously today
- ✅ Phase A — Add FAQs to 5 Spanish landing pages (extend service-page renderer pattern from pediatric refresh, mirror to /es)
- ✅ Phase B — Add Spanish internal-linking hub section to /es homepage + footer Quick Links column
- ✅ Phase C kickoff — Draft 1 Spanish blog post as proof-of-concept

### Needs your call
- Phase C scaling — building 5+ Spanish posts is editorial work; want me to draft them all or have you write 1-2 first to set the voice?
- Phase D backlinks — La Prensa pitch needs your Spanish-fluent voice to be authentic. Want me to draft it in Spanish?
- Phase E reviews — you'd need to ask Spanish-speaking patients in person/at checkout to leave reviews in Spanish

## Recommended starting move

**Do Phase A + Phase B today**, in one batch commit. That's the highest-leverage on-page push for Spanish keywords. Then check results in 2 weeks via Semrush re-crawl.

Then this week: Phase C (5 Spanish blog posts) — biggest content investment, biggest payoff.

Then ongoing: Phase D/E in the background while Phase A/B/C ranks bake.

---

**Question for you:** want me to start executing Phase A + B now (autonomous, ~2 hours of editing time)?
