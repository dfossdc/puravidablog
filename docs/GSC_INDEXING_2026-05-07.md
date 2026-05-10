# GSC Daily Indexing — May 7, 2026

## Summary

**1 URL submitted, 0 successful submissions** — `Quota Exceeded` on first attempt. Same pattern as May 5: daily quota was already burned before the run started. Likely the IndexNow daily cron (08:17 UTC) is consuming the manual-submission quota window on the same Google account, or the rolling 24-hour quota hasn't reset.

**10 URLs inspected, 9 confirmed indexed.** Only one URL remains in "Discovered - currently not indexed" status: `/en/blog/dejarnette-history-story-behind-sot-chiropractic` (now stuck for 3+ days).

## Submission attempts

| URL | Status | Action |
|---|---|---|
| `/en/blog/dejarnette-history-story-behind-sot-chiropractic` | Not indexed (Discovered - currently not indexed) | Request Indexing → **Quota Exceeded** |

After the first quota error, no further submission attempts were made (per task instructions). Continued with inspection-only to gather data for tomorrow's queue planning (URL inspection is metered separately from submission).

## Indexed URLs (no action needed)

EN:
1. `/en/blog/what-are-sot-blocks-how-do-they-work` — indexed (May 4 carryover RESOLVED)
2. `/en/blog/diabetes-pancreas-spinal-organ-cmrt-san-antonio` — indexed
3. `/en/blog/fibromyalgia-chiropractic-sot-san-antonio` — indexed
4. `/en/blog/osteoporosis-prevention-chiropractic-foundation-san-antonio` — indexed
5. `/en/blog/thyroid-cervical-spine-connection-san-antonio` — indexed
6. `/en/blog/why-pregnancy-is-the-most-important-time-for-chiropractic-care` — indexed

ES:
7. `/es/provider-referral` — **indexed** (May 5 carryover RESOLVED — went from "Discovered - not indexed" to indexed without explicit Request Indexing, likely via IndexNow cron or organic crawl)
8. `/es/blog/dolores-de-cabeza-en-ninos-quiropractica-craneal-san-antonio` — indexed
9. `/es/blog/sistema-inmune-ninos-quiropractica-cmrt-san-antonio` — indexed
10. `/es/castle-hills-chiropractor` — indexed

## Notable findings

**The May 1 research-based posts are fully indexed (both languages).** Every May 1 post we've checked across May 5 and May 7 — 12 of 16 in the priority queue — is now "URL is on Google." The technical SEO foundation is healthy and Google is crawling new content within ~6 days of ship date.

**Two stuck-discovered carryovers RESOLVED on their own.** Both `/es/provider-referral` (carryover from May 5) and `/en/blog/what-are-sot-blocks-how-do-they-work` (carryover from May 4) are now indexed without successful manual Request Indexing — strongly suggesting the IndexNow daily cron is doing real work, just slower than manual submission.

**The dejarnette EN post is the only persistent holdout.** It's been stuck at "Discovered - currently not indexed" since at least May 4. The Spanish equivalent (`/es/blog/historia-dejarnette-detras-de-quiropractica-sot`) is the referring page Google has identified — worth checking its status tomorrow.

**Quota pattern: third consecutive day burned-on-first-attempt.** May 5, May 6, and May 7 all hit quota on the first manual submission of the day. Worth investigating whether the IndexNow cron is accidentally using the same Google account's manual-submission quota (which is separate from the IndexNow API quota in theory).

## Tomorrow's queue (priority order)

1. **`/en/blog/dejarnette-history-story-behind-sot-chiropractic`** — submit FIRST (3+ day stuck-discovered URL, top priority)
2. **`/es/blog/historia-dejarnette-detras-de-quiropractica-sot`** — verify status; if not indexed, submit
3. `/en/blog/questions-to-ask-about-induction-san-antonio` — May 1 EN pregnancy post, unverified
4. `/en/blog/pregnancy-exercise-guide-trimester-by-trimester-san-antonio` — May 1 EN pregnancy post, unverified
5. `/en/blog/postpartum-recovery-what-bouncing-back-actually-looks-like` — May 1 EN pregnancy post, unverified
6. `/en/blog/pregnancy-nutrition-fats-baby-brain-development` — May 1 EN pregnancy post, unverified
7. `/en/blog/stress-during-pregnancy-baby-brain-development` — May 1 EN pregnancy post, unverified
8. `/es/blog/preguntas-sobre-induccion-parto-san-antonio` — May 1 ES pregnancy post, unverified
9. `/es/blog/guia-ejercicio-embarazo-trimestre-por-trimestre-san-antonio` — May 1 ES pregnancy post, unverified
10. `/es/blog/recuperacion-posparto-que-significa-realmente-recuperarse` — May 1 ES pregnancy post, unverified

Already confirmed indexed (skip): all May 5 inspected URLs + all May 7 inspected URLs above (10 today + 8 from May 5 = 18 confirmed indexed of the priority queue).

## Recommended follow-up (out of scope for this task, but flagging)

- **Investigate quota interaction with IndexNow cron.** Three days in a row with first-attempt quota errors is too consistent to be coincidence. Check whether the cron uses the same authenticated Google account, and consider staggering the manual run earlier (or moving it to a separate browser session) to ensure manual submissions get through for stuck-discovered URLs.
- **`/en/blog/dejarnette-history-story-behind-sot-chiropractic` may need a content-quality intervention.** When a URL stays "Discovered - currently not indexed" for 3+ days while sibling posts index in 6 days, Google often signals that content quality, internal linking, or duplication needs review.

[View report](computer:///Users/dannyfoss/puravidablog/docs/GSC_INDEXING_2026-05-07.md)
