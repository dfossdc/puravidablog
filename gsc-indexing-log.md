# GSC Daily Indexing — Submission Log

Tracks which URLs the scheduled task submitted to Google Search Console each day, so future runs can rotate through the priority queue.

Format: most recent run at top.

---

## 2026-05-14 — Pivoted from indexing rotation to address GSC validation-failure email; root cause identified + 1 redirect bug found

Scheduled run kicked off as usual; partway through Dan messaged about a 6:01 AM email from sc-noreply@google.com titled "Some fixes failed for Page indexing issues on site https://puravidasanantonio.com/" — validation for "Crawled - currently not indexed" failed. Paused the indexing rotation to drill into the validation reports and verify what's actually happening.

**Property Page Indexing summary today:** 631 indexed, 257 not indexed across 8 reason buckets. Two of those buckets show "Validation: Failed":

### 1. "Crawled - currently not indexed" — 41 pages, Validation Failed 5/11/26 (started AND failed 5/11)

The affected URLs split cleanly into three groups:

**Group A — recent real content (29 URLs, mostly /es/blog/* from the May 1 batch + a few from May 12).** All return HTTP 200 on the live site; they're in the sitemap; Google has crawled them and chosen not to index *yet*. Spot-curled 9 of these — all clean 200, no redirect chain. Sample:
- `/es/blog/recuperacion-posparto-que-significa-realmente-recuperarse` (May 2 crawl) → 200
- `/es/blog/conexion-tiroides-columna-cervical-san-antonio` (May 12 crawl) → 200 — **note: this URL was confirmed indexed in the 5/12 run, but still appears in this drilldown table. GSC's "examples" list is stale relative to current index state.**
- `/en/conditions/dizziness`, `/en/blog/what-does-a-chiropractor-do`, `/en/blog/chronic-pain-chiropractor-san-antonio`, `/es/sot/technic-vs-technique`, `/en/east-san-antonio-chiropractor`, `/es/alamo-heights-chiropractor`, `/es/terms` — all 200.

Verdict on Group A: **no bug; Google authority/quality signal lag.** These pages need time (and inbound links / impressions), not a code fix. The validation failed because the validation window is short and most of these pages hadn't been re-crawled+re-evaluated by Google during the validation window. Normal recovery pattern for a post-Doctible property.

**Group B — legacy WordPress URLs (12 URLs).** Mostly older crawls (Jan–Mar 2026); these should all 301 to canonical /en/* or /es/* pages now. Curled all 12:

| URL | First-hop | Final | Notes |
|---|---|---|---|
| `/about-pura-vida/` | 308 → `/about-pura-vida` | 200 (`/en/about`) | ✅ works |
| `/About-Pura-Vida` | 308 → `/en/about` | 200 | ✅ works |
| `/Pediatric-Chiropractor` | 308 → `/en/services/pediatric-chiropractor` | 200 | ✅ works |
| `/Pregnancy-Chiropractor/` | 308 → `/Pregnancy-Chiropractor` → `/en/services/pregnancy-chiropractor` | 200 | ✅ works |
| `/contact/` | 308 → `/contact` → `/en/contact` | 200 | ✅ works |
| `/chiropractic-faq` | 308 → `/en/faq` | 200 | ✅ works |
| `/es-mx/chiropractic-faq` | 308 → `/es/faq` | 200 | ✅ works |
| `/es-mx/videos` | 308 → `/es/videos` | 200 | ✅ works |
| `/pura-vida-chiropractic-cuestionario-spanish/` | 308 → no-slash → `/es/contact` | 200 | ✅ works |
| **`/services/`** | **308 → `/services` → 404** | **404** | ❌ **broken** |
| **`/new-patient-form/`** | **308 → `/new-patient-form` → 404** | **404** | ❌ **broken** |
| **`/initial-reservation/new-patient-forms/`** | **308 → `/initial-reservation/new-patient-forms` → 404** | **404** | ❌ **broken** |

Real bug found. **Three trailing-slash URLs strip to a non-slash URL that has no further redirect rule, so they 404.** Next.js's automatic trailing-slash normalization is running first, but the canonical redirect (e.g. `/services` → `/en/services`) doesn't exist. Compare against `/contact/` which works because both `/contact/` → `/contact` AND `/contact` → `/en/contact` redirects exist. Fix: add three entries to `redirects()` in `next.config.mjs`:
- `/services` → `/en/services` (or wherever the services index belongs)
- `/new-patient-form` → `/en/contact` (or the new-patient-form page if it exists at /en/...)
- `/initial-reservation/new-patient-forms` → `/en/contact` (same destination)

Same shape of issue as the 5/8 stale `meet-dr-foss` / `office-hours` redirects — that fix landed in commit `33b871d`; these 3 are stragglers that didn't get caught in the audit.

### 2. "Page with redirect" — 123 pages, Validation Failed 5/11/26 (started 5/10)

Reviewed the 123 example URLs. **They are all working-as-designed 301s to canonical pages.** Examples:
- `/` (May 12 crawl) → redirects to `/en` (locale-detection)
- `/sot`, `/pregnancy-chiropractor`, `/san-antonio-quiropractico`, `/carpal-tunnel`, `/contact-us`, `/blog`, `/services`, `/blog/`, `/blog/chiropractor-explains-avoid-back-injuries` etc. — WordPress-era URLs that 301 to /en/* or /es/* canonicals
- `/en/quiropratico-san-antonio`, `/en/san-antonio-quiropractico`, `/en/quiropractico-cerca-de-mi-san-antonio` — Spanish slugs accidentally crawled under /en/ that 301 to /es/ canonical
- Trailing-slash variants (`/pregnancy-chiropractor/`, `/el-mejor-quiropractico-san-antonio/` etc.) — paired with their no-slash form
- Stale routes `/blog/<slug>`, `/posts/<slug>` — pre-locale-prefix slugs that 301 to `/en/blog/<slug>`
- `/radiografias/` and `/about-pura-vida/` wildcards from the 5/6 fix
- `/en/blog/` index — redirects to `/en/blog` per Next.js trailing-slash behavior
- `/Pediatric-Chiropractor/` (Mar 21 — capital with trailing slash) → 301
- `/en/blog/conexion-tiroides-columna-cervical-san-antonio` and a similar /en/* mirror set — Spanish blog slugs under /en/ that 301 to /es/

Verdict: **none of these are bugs.** They are intentional redirects that are doing the right thing for canonicalization, locale routing, and cleanup of old WordPress URL shapes. The "validation" failed because the validation API asks "were these pages fixed (i.e. now indexable)?" and the correct answer is "no, they're still redirects — by design." Google doesn't have a way to mark redirect-by-design as resolved in this report; the URLs will simply age out as Google stops re-crawling them.

**Recommendation: do not re-click "Validate Fix" on this issue.** It will fail again. The report is informational only; the 123 is not a problem count.

### What this means for the validation-failed email

The email is alarming-sounding but is not an emergency:
- **"Crawled - currently not indexed" (41 pages):** 38 of 41 are healthy 200-serving pages waiting on Google's quality signals (normal). The 3 broken ones (services/, new-patient-form/, initial-reservation/new-patient-forms/) are old WordPress paths with very low traffic value — but the fix is one small commit.
- **"Page with redirect" (123 pages):** Working as designed. Validation will always fail on this report for this property.

### Today's indexing rotation — partially completed, deferred to tomorrow

Started the FAQ-spot-check / neighborhood / older-condition rotation but pivoted to the validation report investigation. No URLs were submitted via Request Indexing today. Quota fully preserved.

**Tomorrow's queue (if quota fresh):**

1. Continue rotation per yesterday's plan: FAQ verification on `/en/conditions/sciatica`, `/en/conditions/lower-back-pain`, `/en/services/sot-chiropractic`, `/es/services/sot-chiropractic`, `/en/services/cmrt-chiropractic` + finish EN neighborhood (Live Oak, Universal City, Converse) + ES neighborhood spot-check + older condition pages.
2. Once the 3-redirect fix lands, re-curl the affected paths to confirm clean chains, then optionally re-submit `/services/`, `/new-patient-form/`, `/initial-reservation/new-patient-forms/` via URL Inspection so Google re-crawls and clears them out of the "Crawled, not indexed" bucket.

### Action items for Dan (highest priority first)

1. **Fix the 3 broken trailing-slash redirects in `next.config.mjs`** — small commit, same pattern as `33b871d`. The 3 paths each need an entry mapping the no-slash form to its proper /en/* destination. Suggested destinations:
   - `/services` → `/en/services`
   - `/new-patient-form` → `/en/contact` (verify the right destination on the site)
   - `/initial-reservation/new-patient-forms` → `/en/contact` (same — old WP route)
2. **Don't click "Validate Fix" on the "Page with redirect" issue again.** The 123 URLs are intentional 301s; validation will keep failing because the URLs are supposed to redirect. The report is healthy.
3. **The 41-page "Crawled - currently not indexed" bucket will partially clear on its own** as Google re-evaluates the May 1 / May 12 content. Worth a re-check in ~7 days to see how many drop off.

**Quota status (end of run):** 0 slots used. Full quota available tomorrow.

---

## 2026-05-13 — 0 submitted, 13 inspected, 13 already indexed — FAQ schema picked up on a 2nd page

Scheduled run executed autonomously (user not present). Browser: "Home Chrome" (selected from 2 connected; deviceId `dbab51dd-…`). Followed yesterday's queue: re-inspect FAQ-retrofit candidates, spot-check 5/5 neighborhood batch, then the 5/8 dejarnette carryover.

**Inspected (13, every one "URL is on Google" / Page is indexed):**

FAQ-retrofit verification (6) — from 5/12's tomorrow's-queue:
- /en/conditions/sciatica ✅ — Breadcrumbs 1 valid; **no FAQ enhancement listed yet**
- /en/conditions/headaches ✅ — Breadcrumbs 1 valid; no FAQ yet
- /en/conditions/lower-back-pain ✅ — Breadcrumbs 1 valid; no FAQ yet
- /en/ (homepage) ✅ — HTTPS valid; no FAQ yet (homepage)
- /es/ (homepage) ✅ — HTTPS valid; no FAQ yet (homepage)
- /en/services/sot-chiropractic ✅ — Breadcrumbs 1 valid; no FAQ yet

New-neighborhood spot-check (6) — 5/5 batch:
- /en/shavano-park-chiropractor ✅
- /en/hill-country-village-chiropractor ✅
- /en/hollywood-park-chiropractor ✅
- /en/leon-valley-chiropractor ✅
- /en/windcrest-chiropractor ✅
- /es/shavano-park-chiropractor ✅ (Spanish neighborhood version also picked up)

5/8-flagged stuck carryover (1):
- /en/blog/dejarnette-history-story-behind-sot-chiropractic ✅ — **resolved**. Was "Crawled, not indexed" on 5/4–5/8; now indexed with **Breadcrumbs 1 valid + FAQ 1 valid item detected**.

**Submitted (0):** No URL needed manual submission. Every inspection returned green. Quota fully preserved — 10–12 slots untouched.

**Key finding — FAQ schema detection broadening:**

Today is the second FAQ-enhancement confirmation since the Perplexity FAQ retrofit shipped on 5/12 (commits `a2221a5`, `51adab7`, `36910e3`):
1. /es/blog/conexion-tiroides-columna-cervical-san-antonio (confirmed 5/12)
2. /en/blog/dejarnette-history-story-behind-sot-chiropractic (confirmed today, 5/13)

Both confirmations are on **blog posts**. None of the 5 inspected condition / homepage / service pages with breadcrumbs+FAQ retrofit are showing the FAQ enhancement yet — likely Google hasn't re-crawled those page types since the retrofit ship date. The pattern so far: Google is re-crawling blog posts first and detecting FAQ; condition/service pages will follow on their normal recrawl cadence.

**Other notable signal:** the dejarnette post had been stuck in "Crawled, not indexed" since at least 5/4 (4 days flagged on 5/8 as the priority retry candidate for "5/9 if quota fresh"). Five days later — no manual submission needed, the post resolved on its own AND now reports FAQ-detected. Consistent with the broader same-day pickup pattern seen on 5/12 after the redirect-removal deploy: post-Doctible recovery is producing accelerated re-crawl on this property.

**Tomorrow's queue (if quota fresh):**

1. Continue FAQ enhancement verification — sample condition/service pages that haven't been recrawled since 5/12 retrofit ship: `/en/conditions/sciatica`, `/en/conditions/lower-back-pain` (re-check whether FAQ has appeared since today), `/en/services/sot-chiropractic`, `/es/services/sot-chiropractic`, `/en/services/cmrt-chiropractic`. If FAQ schema is detected on these by tomorrow, the broader retrofit is recognized; if not, may need another week of crawl-aging.
2. Finish the EN neighborhood sample: `/en/live-oak-chiropractor`, `/en/universal-city-chiropractor`, `/en/converse-chiropractor` (today's run sampled 5 of 8 EN — all indexed; the other 3 likely the same but worth confirming).
3. Sample the remaining ES neighborhood pages from the 5/5 batch: `/es/hill-country-village-chiropractor`, `/es/hollywood-park-chiropractor`, `/es/leon-valley-chiropractor`, `/es/windcrest-chiropractor`, `/es/live-oak-chiropractor`, `/es/universal-city-chiropractor`, `/es/converse-chiropractor`.
4. Rotate into a fresh batch of older condition pages we haven't inspected in 7+ days (per SKILL.md 10-day rotation cadence) — candidates: `/es/conditions/sciatica`, `/es/conditions/lower-back-pain`, `/es/conditions/breech-presentation` (last touched 5/6), `/en/conditions/pelvic-girdle-pain` (last touched 5/6).

**Action items for Dan (non-routine):**

- The FAQ retrofit is being recognized by Google but only on blog posts so far (2/2 confirmations are blog URLs). Worth waiting another 7–10 days before drawing conclusions about whether condition/service-page FAQ schemas are being picked up; if no condition-page FAQ appears by ~5/22, may need to verify the FAQ JSON-LD is rendering correctly on condition templates (vs. blog templates) via View Source / Rich Results Test.
- Zero quota burn for 2 consecutive days (5/12 + 5/13) is unusual and worth noting: the IndexNow-vs-manual-quota contention pattern we saw on 5/1, 5/4–5/8 hasn't recurred this week. May indicate the IndexNow cron isn't running, OR Google's manual quota for this property has expanded, OR the recovery improved standing enough that fewer pages need manual nudging.

**Quota status (end of run):** 0 slots used. Full quota available for tomorrow.

---

## 2026-05-12 (afternoon) — 0 submitted, 9 inspected, 9 already indexed (incl. fast post-deploy pickup of 8 redirect-cleared conditions + this morning's submission)

Interactive run after the afternoon's redirect-removal + sitemap-resubmit deploy. Re-inspected the 8 condition pages that were redirecting earlier today (commit `4141d51` removed the stale `next.config.mjs` rules) plus this morning's manual submission. **All 9 returned "URL is on Google".**

**Inspected (9, all "URL is on Google" / Page is indexed):**

8 previously-redirecting condition pages — every one of these was 308 → /conditions index at 9am, was made reachable by `4141d51` at ~1pm, and was indexed by Google within hours:
- /en/conditions/heel-spur ✅ (Breadcrumbs valid)
- /en/conditions/insomnia ✅ (Breadcrumbs valid)
- /es/conditions/dysmenorrhea ✅ (Breadcrumbs valid)
- /es/conditions/fibromyalgia ✅ (Breadcrumbs valid)
- /es/conditions/sinus-congestion ✅ (Breadcrumbs valid)
- /es/conditions/vertigo ✅ (Breadcrumbs valid)
- /es/conditions/rib-subluxation ✅ (Breadcrumbs valid)
- /es/conditions/tinnitus ✅ (Breadcrumbs valid)

This morning's manual submission landed:
- /es/blog/conexion-tiroides-columna-cervical-san-antonio ✅ — was "Crawled, not indexed" (May 4 crawl) when we submitted it via Request Indexing this morning. Google has now indexed it, and the page also shows the new **FAQ enhancement as "1 valid item detected"** — first confirmation that the FAQ retrofit (`a2221a5`) is being recognized by Google on a re-crawled page.

**Submitted (0):** No URL needed manual submission today. Every inspection returned green.

**Why pickup was so fast:**
1. Sitemap was resubmitted to GSC at ~1:15pm after the deploy went live (manual click in GSC → Sitemaps → Submit), explicitly notifying Google of the freshly-reachable URLs.
2. The 8 unblocked conditions were already in the sitemap (sitemap.ts generates `/{locale}/conditions/{slug}` from the conditionsContent master list regardless of whether redirects were intercepting). Once the redirects cleared, the URLs were ready to crawl on the next sitemap fetch — and that fetch happened right after our resubmit.
3. Google has been on an accelerated re-crawl pattern for the property since the recovery began in early May (impressions chart showing the spike at the right edge of the 90-day window).

**Other major work done today (context for tomorrow's run):**

1. **Perplexity FAQ retrofit shipped** (commits `a2221a5`, `51adab7`, `36910e3`): FAQPage JSON-LD now on 99 EN + 67 ES condition pages, homepage (both locales), and 18 EN + 18 ES service pages. The conexion-tiroides URL inspected today confirmed Google is detecting the FAQ enhancement.
2. **Semrush Errors cleared** (commit `4141d51`): removed 8 stale condition redirects + filtered 6 blog→service redirect slugs from sitemap + suppressed cross-language hreflang for those same slugs. Resolved 14 sitemap-vs-redirect Errors + 11 hreflang-redirect Errors.
3. **Today's title-fix thrashing was reverted**: the title shortening / H1==title fixes / cross-page-duplicate fixes all introduced new flags faster than they resolved existing ones. Pre-revert state at 9am was Site Health 98% with a benign 21-page "long titles" warning — that's the state we returned to.

**Tomorrow's queue (if quota fresh):**

1. Re-inspect a sample of newly-FAQ-enriched pages to confirm Google is picking up FAQ schema across the broader set (not just conexion-tiroides). Candidates: `/en/conditions/sciatica`, `/en/conditions/headaches`, `/en/conditions/lower-back-pain`, `/en/`, `/es/`, `/en/services/sot-chiropractic`.
2. Spot-check the new neighborhood pages from 5/5 batch — Shavano Park, Hill Country Village, Hollywood Park, Leon Valley, Windcrest, Live Oak, Universal City, Converse — see if these are indexed yet.
3. If quota allows, submit any remaining stuck-in-"Crawled, not indexed" pages from the May 1 research batch.

**Action items for Dan (non-routine):**

- Worth noting in the May→June reporting: today's deploy + sitemap resubmit triggered Google to index 8 condition pages within hours. The same-day pickup pattern is unusual and suggests the property's authority signals are improving (likely tied to the post-Doctible recovery + the Perplexity FAQ schema work).

**Quota status (end of run):** 0 slots used. Full quota available for tomorrow.

---

## 2026-05-08 — 0 URLs submitted (quota burned), 1 root-cause fix shipped

Scheduled run. Quota was already exhausted on first Request Indexing attempt (4th consecutive day with same pattern: 5/5, 5/6, 5/7, 5/8) — strongly suggests the IndexNow daily cron is consuming the same Google account's manual-submission window.

**Inspections (12 URLs):**

11 returned "URL is on Google" — May 1 research posts (EN+ES) settled, ES neighborhood and condition pages settled, ES posicion-fetal-optima settled, EN osteoporosis settled.

The 12th surfaced a real bug:
- `/es/meet-dr-foss` → "URL is unknown to Google"
- Cross-checked `/en/meet-dr-foss` → "Page is not indexed: Page with redirect", user-declared canonical `https://puravidasanantonio.com/en/about`
- Last crawled Apr 30 2026 8:46 PM, but page is 301'd to /about so Google never sees it

**Root cause:** stale redirects in next.config.mjs (lines 102–105 pre-fix). When commit `ea3dc15` shipped on 2026-04-30 ("commit missing route files (Spanish landing pages, meet-dr-foss, office-hours, privacy-policy, …) — these existed locally but never made it to git"), the four redirects added before that fix to mask the 404s were never removed. The actual rich pages have been live for 8 days but unreachable behind the 301s.

**LinkedIn impact:** `linkedin-featured-paste-ready.md` and `linkedin-profile-cleanup.md` both pointed traffic at `https://puravidasanantonio.com/en/meet-dr-foss`. Anyone clicking those LinkedIn featured links got bounced to the generic /about page instead of the Dr. Foss portrait/story page.

**Code fix shipped (1 commit):**

`33b871d` — `fix(seo): remove stale meet-dr-foss + office-hours redirects`
- Deleted 4 lines from next.config.mjs `redirects()`:
  - `/en/meet-dr-foss` → `/en/about`
  - `/es/meet-dr-foss` → `/es/about`
  - `/en/office-hours` → `/en/contact`
  - `/es/office-hours` → `/es/contact`
- Replaced section comment with explanation of what happened and why /privacy-policy still redirects (both /privacy-policy and /privacy are noindex; /privacy is the canonical legal page).
- TypeScript clean. node --check clean. Branch: feat/og-image-followup-and-pinterest-claim.

**Post-deploy verification (after `git push` from local):**

1. curl -I https://puravidasanantonio.com/en/meet-dr-foss → expect HTTP 200, NOT 308/301
2. curl -I https://puravidasanantonio.com/es/meet-dr-foss → expect HTTP 200
3. curl -I https://puravidasanantonio.com/en/office-hours → expect HTTP 200
4. curl -I https://puravidasanantonio.com/es/office-hours → expect HTTP 200
5. GSC URL Inspection on /en/meet-dr-foss + /es/meet-dr-foss → click Request Indexing once quota refreshes (probably ~24h after last cron run)

**Tomorrow's queue (if quota fresh):**

1. `/es/meet-dr-foss` (root cause confirmed today, fix deploying — submit FIRST)
2. `/en/meet-dr-foss` (same)
3. `/en/office-hours` and `/es/office-hours` (sibling redirect fix — verify they're indexable post-deploy)
4. `/en/blog/dejarnette-history-story-behind-sot-chiropractic` (4-day stuck carryover from 5/4)
5. Continue rotation through queue per scheduled-task spec

**Quota note:** worth investigating whether IndexNow daily cron should back off when scheduled-task is about to run, OR alternatively, this scheduled task should accept that manual-submission quota is contended and treat IndexNow as the primary signal with manual submissions as just a top-up.

---

## 2026-05-06 — 12 URLs submitted + 4 code fixes shipped

Big run. Quota was fresh; pushed 12 URLs through and shipped multiple code fixes for issues found while inspecting.

**Submitted (12 — at top of daily quota):**

Service pages missing from sitemap (caught after sitemap fix):
- /en/services/pregnancy-chiropractic
- /en/services/pediatric-chiropractic
- /es/services/pregnancy-chiropractic

Conditions pages that weren't being crawled:
- /es/provider-referral
- /en/provider-referral
- /es/conditions/breech-presentation
- /en/conditions/breech-presentation
- /es/conditions/pelvic-girdle-pain
- /en/conditions/pelvic-girdle-pain
- /es/conditions/lower-back-pain
- /es/conditions/headaches
- /en/conditions/headaches

**Code fixes shipped (3 commits):**

`9f4acbb` — `fix(seo): restore 3 service slugs to sitemap + 3 GSC May 6 redirects`
- Re-added wellness-care, latino-community, chiropractic-care to sitemap.ts (May 2 cleanup commit `bd6a23d` over-corrected — these are real 200 pages, not redirects).
- Added redirect for /es/blog/neck-pain-and-chiropractic-care → /es/conditions/neck-pain.
- Added /es-mx/* wildcard → /es/* (Google indexed Mexican-Spanish locale variants from a hreflang misfire).

`0724ffd` — `fix(seo): 5xx wildcards + staging noindex header`
- /about-pura-vida/:path+ → /en/about (kills 4 of 6 GSC 5xx errors)
- /radiografias/:path+ → /es/blog/radiografias (kills the other 2)
- (Headers block reverted in next commit — see below)

`9255737` — `revert: drop redundant headers() block from next.config.mjs`
- Removed next.config.mjs headers() X-Robots-Tag rule. middleware.ts already handles non-canonical-host noindex (commit `287e79b` from May 3).

**Audit results — verified against sitemap.xml + git history:**

| GSC Bucket | Count | Status |
|---|---|---|
| Discovered - currently not indexed | 421 | 96.7% in sitemap (407/421); awaiting Google's crawl |
| Crawled - currently not indexed | 37 | All in sitemap; awaiting Google's recrawl |
| Not found (404) | 49 | 47 covered by existing wildcards + runtime safety net (validation 5/5/26 still in progress); 2 typos (/en/tentimonials, /en/servicen/*) — fix queued |
| Page with redirect | 30 | All old WP URLs redirecting properly; 0 are in sitemap. Working as designed. |
| Duplicate canonical | 8 | 7 covered by existing/new redirects; 1 (/en/conditions/hammer-toes) is a real existing page Google picked alt canonical for |
| Server error (5xx) | 6 | All 6 fixed by 0724ffd /about-pura-vida/* and /radiografias/* wildcards |
| Alternate page with proper canonical | 3 | All 3 fixed by 0724ffd wildcards |

**Verdicts:**
- Vercel preview-URL noindex: ALREADY shipped May 3 in middleware.ts (`287e79b`). The prod deploy is correct.
- Sitemap submission: clean. Submitted 5/3, last fetched today, 645 URLs discovered, status: Success.
- Core Web Vitals: not enough usage data (low traffic, post-Doctible recovery still in progress) — no CWV bugs.
- Schema: all 3 enhancement types (Breadcrumbs, FAQ, Review snippets) clean — 0 invalid across all.

**Pending typo fixes (not yet committed):**
- /en/tentimonials → /en/testimonials
- /en/servicen/:slug+ → /en/services/:slug+

**Tomorrow's queue (if quota fresh):**
1. Continue rotating through the 421 Discovered backlog — focus on top condition pages and recent blog posts
2. Helotes EN/ES neighborhood pages (carryover from 5/5)
3. Olmos Park EN/ES neighborhood pages (carryover from 5/5)
4. Re-inspect a few of today's submissions if Google shows progress

**Quota status (end of run):** ~12/day used. Should be fresh at next run.

---

## 2026-05-05 (morning) — Quota exceeded again, 0 URLs submitted

Morning run. Same pattern as 5/4 morning — daily quota was already burned before this run started.

**Inspected:**
- /en/helotes-chiropractor → "Discovered, currently not indexed", in sitemap.xml. Clicked REQUEST INDEXING — UI gave no visible response (no success dialog, no error). Status unclear — may have submitted silently, may have failed.
- /en/olmos-park-chiropractor → "Discovered, currently not indexed", in sitemap.xml. Clicked REQUEST INDEXING → **"Quota Exceeded"** confirmed.

**Net result: 0 confirmed submissions, possibly 1 silent submission (Helotes EN).**

**Positive trend signals from GSC overview:**
- 90-day performance chart: 120 total clicks (was 119 yesterday) → +1 overnight despite slow Google indexation
- Recommendations widget changed from "page losing impressions" yesterday → "page gaining impressions" today (`/en/sot/sorsi`). The indexation work IS paying off, just slowly on Google side.

**Quota burn pattern continues** — third day in a row (5/1, 5/4 morning, 5/5 morning) where daily quota was exhausted before manual run. Worth identifying the source — Indexing API, another scheduled task, or manual submissions consuming slots before the scheduled run.

**Queued for next run (top of priority queue):**
- /en/helotes-chiropractor (re-confirm if first click succeeded; if not, submit again)
- /es/helotes-chiropractor
- /en/olmos-park-chiropractor (today's blocked attempt)
- /es/olmos-park-chiropractor
- New neighborhood pages once they ship (Balcones Heights, Shavano Park, Hill Country Village, Hollywood Park, Leon Valley, Windcrest, Live Oak, Universal City, Converse — 9 new URLs × 2 locales = 18)
- Then condition pages and core pages

**Other channels carrying load while Google quota's locked:**
- Bing IndexNow daily cron auto-pinging — runs at 08:17 UTC daily, no quota concern
- Manual `npm run indexnow:submit` available
- 627 URLs already pushed to Bing/Yandex/Seznam/Naver

---

## 2026-05-04 (afternoon retry) — 4 URLs submitted, quota hit on 5th, key sitemap finding

User asked to retry after the morning quota block. Quota had reset. Worked through the neighborhood-landing queue.

**Submitted (4):**
- /en/stone-oak-chiropractor — was "URL is unknown to Google" + "No referring sitemaps detected"
- /es/stone-oak-chiropractor — was "Discovered – currently not indexed" (in sitemap.xml)
- /en/castle-hills-chiropractor — was "Discovered – currently not indexed" (in sitemap.xml — interesting, see notes)
- /es/castle-hills-chiropractor — was "Discovered – currently not indexed" (in sitemap.xml)

**Already indexed (2):**
- /en/alamo-heights-chiropractor ✅
- /es/alamo-heights-chiropractor ✅

**Failed / rejected (1, doesn't count toward useful work):**
- A malformed concatenated URL got submitted by accident (browser autofill + select-all that didn't take); Google live-tested it and returned "Indexing request rejected — During live testing, indexing issues were detected with the URL." Likely still consumed a quota slot.

**Quota exceeded on (1):**
- /en/helotes-chiropractor — was "Discovered – currently not indexed" (in sitemap.xml). Queued for tomorrow.

**Key sitemap finding (revising the morning's read):**

The morning run reported "/en/stone-oak-chiropractor not in any referring sitemap." That's still true for Stone Oak EN. BUT inspecting more neighborhood pages reveals it's NOT a uniform issue:
- Stone Oak EN: NOT in sitemap, "URL is unknown to Google"
- Stone Oak ES: IN sitemap.xml, "Discovered – currently not indexed"
- Castle Hills EN: IN sitemap.xml, "Discovered – currently not indexed"
- Castle Hills ES: IN sitemap.xml, "Discovered – currently not indexed"
- Alamo Heights EN: indexed (so it's findable somehow — likely in sitemap or via internal links)
- Alamo Heights ES: indexed

So **/en/stone-oak-chiropractor is the outlier — it's the EN neighborhood page that's missing from the sitemap.** Worth grepping the sitemap source for `stone-oak` to confirm and add it. The other neighborhood EN pages appear to be in the sitemap (since Castle Hills EN reports a sitemap entry too — though notably its referring page is the *blog* https://www.puravidasanantonio.com/blog/ which suggests a different routing path than the ES versions).

**Queued for next run (top of priority queue, in order):**
- /en/helotes-chiropractor ← attempted today, blocked by quota; retry first
- /es/helotes-chiropractor
- /en/olmos-park-chiropractor
- /es/olmos-park-chiropractor
- Then back to remaining May-1 research posts not yet checked (stress-during-pregnancy EN/ES, optimal-fetal-positioning EN/ES, fibromyalgia EN/ES, osteoporosis EN/ES, thyroid EN/ES) — most likely already indexed at the rate Google's been picking up the new posts
- Then top condition pages (sciatica, headaches, neck-pain, pelvic-girdle-pain, breech-presentation EN/ES) and core pages

**Action items beyond routine indexing (worth surfacing to Dan):**
1. **Fix sitemap to include /en/stone-oak-chiropractor.** Single-page omission, easy fix. Without sitemap inclusion, the indexing-request submission only buys a one-shot crawl and the page won't stay indexed long-term.
2. **Quota burn pattern:** This is the second day in a row (5/1, 5/4) where the daily quota ran out early. ~10–12 manual submissions/day is the documented limit; today's run + the retry got through 5 successful + 1 rejected before hitting the wall, which suggests prior submissions consumed slots before this session. Worth identifying the source — Indexing API job, another scheduled task, or manual submissions — so this scheduled task doesn't keep racing them.

---

## 2026-05-04 (morning) — 0 URLs submitted, 9 already indexed, quota hit on first non-indexed URL

**Property used:** `https://puravidasanantonio.com/` (URL-prefix)

**Inspected (9 URLs, in priority order):**

May 1 pregnancy/birth posts — all already indexed ✅:
- /en/blog/why-pregnancy-is-the-most-important-time-for-chiropractic-care
- /es/blog/por-que-el-embarazo-es-el-momento-mas-importante-para-la-quiropractica
- /en/blog/webster-technique-breech-babies-san-antonio
- /es/blog/tecnica-webster-bebe-en-posicion-podalica-san-antonio
- /en/blog/questions-to-ask-about-induction-san-antonio
- /es/blog/preguntas-sobre-induccion-parto-san-antonio
- /en/blog/pregnancy-exercise-guide-trimester-by-trimester-san-antonio
- /es/blog/guia-ejercicio-embarazo-trimestre-por-trimestre-san-antonio
- /en/blog/postpartum-recovery-what-bouncing-back-actually-looks-like
- /es/blog/recuperacion-posparto-que-significa-realmente-recuperarse
- /en/blog/pregnancy-nutrition-fats-baby-brain-development

Neighborhood landing page — NOT indexed, attempted submission:
- /en/stone-oak-chiropractor → "URL is unknown to Google" / "No referring sitemaps detected" / "Last crawl: N/A". Clicked REQUEST INDEXING → returned **"Quota Exceeded — Sorry, we couldn't process this request because you have exceeded your daily quota. Please try submitting this again tomorrow."**

**Submitted (0):** Quota was already burned before this run, just like the morning of May 1.

**Important findings worth flagging:**
1. **All 11 May-1 pregnancy/birth and pregnancy-research posts that were checked are now indexed** — Google picked up the entire batch within 3 days. Strong indexation rate on the new bilingual content.
2. **/en/stone-oak-chiropractor is unknown to Google AND not in any referring sitemap.** This is the more serious issue: a key local-SEO landing page is invisible to Google because the sitemap apparently isn't including it. Worth verifying `/sitemap.xml` actually lists the neighborhood landing pages — if not, fix the sitemap source first, since pure index-request submissions won't keep the page indexed long-term without sitemap discovery.

**Queued for next run (top of priority queue, in order):**

Neighborhood landing pages (likely all in the same "unknown to Google + not in sitemap" state — investigate sitemap before continuing):
- /en/stone-oak-chiropractor ← attempted today, blocked by quota; retry first
- /es/stone-oak-chiropractor
- /en/castle-hills-chiropractor
- /es/castle-hills-chiropractor
- /en/alamo-heights-chiropractor
- /es/alamo-heights-chiropractor
- /en/helotes-chiropractor
- /es/helotes-chiropractor
- /en/olmos-park-chiropractor
- /es/olmos-park-chiropractor

Then back-fill any remaining May-1 research posts that haven't been confirmed indexed yet (most likely candidates: /en|/es stress-during-pregnancy, optimal-fetal-positioning, fibromyalgia, osteoporosis, thyroid, antibiotic-resistance EN already submitted on 5/1 — verify), then start rotating through condition pages and core pages per SKILL.md.

**Notes:**
- Sitemap question: the May-1 morning run noted "Sitemap discovery confirmed (/sitemap.xml)" for the antibiotic-resistance post, so the sitemap exists and works for blog posts. The Stone Oak page being absent from any referring sitemap suggests the sitemap source is missing the neighborhood routes specifically. This is a code/build fix, not a GSC fix.
- Quota again hit on first attempt — pattern from 5/1 morning. Something else is consuming the daily 10–12 manual quota before this scheduled run fires (Indexing API, manual submissions, or another automation). Worth investigating.

---

## 2026-05-01 (evening retry) — 4 URLs submitted, 6 already indexed

After the morning quota block, retried in the evening. Quota had reset.

**Submitted (4):**
- /en/blog/antibiotic-resistance-chiropractic-immune-support — was "Discovered, not indexed", now in priority queue
- /es/blog/dolores-de-cabeza-en-ninos-quiropractica-craneal-san-antonio — was "Discovered, not indexed"
- /en/blog/childrens-immune-system-chiropractic-cmrt-san-antonio — was "Crawled, not indexed" (Google crawled this morning at 6:38 AM but didn't index)
- /es/blog/diabetes-pancreas-conexion-columna-organo-cmrt-san-antonio — was "Discovered, not indexed"

**Already indexed (6) — saved quota:**
- /es/blog/resistencia-antibioticos-quiropractica-sistema-inmune ✅
- /en/blog/asthma-spinal-lung-connection-chiropractic-san-antonio ✅
- /es/blog/asma-conexion-columna-pulmones-quiropractica-san-antonio ✅
- /en/blog/children-headaches-chiropractic-cranial-san-antonio ✅
- /es/blog/sistema-inmune-ninos-quiropractica-cmrt-san-antonio ✅
- /en/blog/diabetes-pancreas-spinal-organ-cmrt-san-antonio ✅

**Queued for next run (top of priority queue, in order):**
- (continue with pregnancy-research posts: /en/blog/why-pregnancy-is-the-most-important-time-for-chiropractic-care, /es equivalent, /en/blog/webster-technique-breech-babies-san-antonio, etc.)
- Then 28 newly-shipped pages (hyperlocal + Spanish landing) from latest commit batch — most likely "Discovered, not indexed" since Vercel deploy was just hours ago
- Then 5 neighborhood landing pages (Stone Oak, Castle Hills, Alamo Heights, Helotes, Olmos Park)

**Notes:**
- 6 of 10 inspected were already indexed in Google — strong indexation rate. The Spanish bilingual pages are getting picked up fast.
- "Crawled - currently not indexed" on /en/blog/childrens-immune-system... is worth watching — Google is seeing the page and choosing not to index, which usually clears in 1-2 weeks.
- Quota slots remaining today: ~6. Could submit a few more if needed but stopped here per evening wrap.

---

## 2026-05-01 (morning) — Quota exceeded, 0 URLs submitted

**Property used:** `https://puravidasanantonio.com/` (URL-prefix property — the sc-domain variant doesn't exist for this account; first-run note about access was wrong, the URL-prefix property loads fine).

**Inspected (1):**
- `https://puravidasanantonio.com/en/blog/antibiotic-resistance-chiropractic-immune-support` → "URL is not on Google" / "Discovered – currently not indexed". Sitemap discovery confirmed (`/sitemap.xml`); no referring page found; no last crawl recorded.

**Submitted (0):**
Clicking REQUEST INDEXING on the URL above returned "Quota Exceeded — Sorry, we couldn't process this request because you've exceeded your daily quota. Please try submitting this again tomorrow." That happened on the very first attempt, so the daily quota was already burned before this run started — most likely from manual submissions or an Indexing API call earlier today.

Per the task instructions, I stopped after the quota message instead of cycling through more URLs.

**Queued for the next run (top of priority queue, in order):**

Just-shipped research-based posts (May 1, 2026):
- /en/blog/antibiotic-resistance-chiropractic-immune-support  ← attempted today, blocked by quota; retry first
- /es/blog/resistencia-antibioticos-quiropractica-sistema-inmune
- /en/blog/asthma-spinal-lung-connection-chiropractic-san-antonio
- /es/blog/asma-conexion-columna-pulmones-quiropractica-san-antonio
- /en/blog/children-headaches-chiropractic-cranial-san-antonio
- /es/blog/dolores-de-cabeza-en-ninos-quiropractica-craneal-san-antonio
- /en/blog/childrens-immune-system-chiropractic-cmrt-san-antonio
- /es/blog/sistema-inmune-ninos-quiropractica-cmrt-san-antonio
- /en/blog/diabetes-pancreas-spinal-organ-cmrt-san-antonio
- /es/blog/diabetes-pancreas-conexion-columna-organo-cmrt-san-antonio
- (continue down the May-1 research list, then the pregnancy posts, per SKILL.md)

**Notes / things to flag:**
- The "Add your domain property" recommendation is showing on the Overview screen — GSC notes you've only verified the URL-prefix `https://puravidasanantonio.com/`, not the parent domain. Worth adding the Domain (sc-domain) property via DNS TXT so future runs cover http/non-www/subdomains too. I didn't do this — it requires DNS access.
- GSC also flagged: a page recently got fewer impressions than usual — `/cranial-chiropractor/` (down 100%). May want to investigate separately.

---
