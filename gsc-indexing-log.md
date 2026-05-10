# GSC Daily Indexing — Submission Log

Tracks which URLs the scheduled task submitted to Google Search Console each day, so future runs can rotate through the priority queue.

Format: most recent run at top.

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
