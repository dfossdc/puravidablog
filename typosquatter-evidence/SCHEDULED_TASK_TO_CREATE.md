# Scheduled Task to Create — Trademark Status Monitor + UDRP Trigger

## Why this exists

I tried to create this scheduled task automatically from today's session but the system blocks scheduled-task creation from within a scheduled-task session (today's session was started as the GSC indexing run). You need to create it from a fresh Cowork conversation.

## How to create it (30 seconds)

1. Open a brand-new Cowork conversation (not a scheduled task — just a fresh chat).

2. Paste this exact instruction:

```
Create a scheduled task with these parameters:

- taskId: trademark-status-and-udrp-trigger
- description: Monthly check on USPTO trademark application 99807665. When registered, kick off Layer 2 (UDRP filing against vidasanantonio.com).
- cronExpression: 0 9 1 * *

Use the prompt below verbatim:

---

Monitor USPTO trademark application Serial No. 99807665 (PURA VIDA CHIROPRACTIC, owned by Pura Vida Chiropractic, PLLC of San Antonio, TX, filed 2026-05-06, Class 044) and trigger Layer 2 typosquatter takedown when it registers.

## Background

Daniel Foss filed USPTO trademark application Serial No. 99807665 on 2026-05-06 for the mark PURA VIDA CHIROPRACTIC. There is a typosquatter site, vidasanantonio.com, registered May 2024 in India through GoDaddy / Cloudflare, hosting AI-generated spam unrelated to chiropractic services. Three Layer 1 abuse reports were filed on 2026-05-06: Google search spam, Cloudflare trademark abuse, and GoDaddy trademark complaint. Evidence and submission logs live at /Users/dannyfoss/puravidablog/typosquatter-evidence/ and the application reference doc is at /Users/dannyfoss/puravidablog/USPTO_TRADEMARK_APPLICATION.md.

The plan was: file federal trademark (done), do Layer 1 free-and-fast actions (done), then once trademark is approved/published, file Layer 2 — a UDRP complaint at WIPO against vidasanantonio.com (~$1,500-2,000) using the now-registered (or published) federal mark plus 16 years of common-law use.

## What to do each run

1. Fetch USPTO TSDR status for Serial 99807665. Use WebFetch on https://tsdr.uspto.gov/statusview/sn99807665 (or the public-facing equivalent if that URL changes). If WebFetch is restricted or returns no useful data, ask the user to paste the current TSDR status block.

2. Identify the current status from the response. Possible statuses include:
   - NEW APPLICATION / AWAITING EXAMINATION (early months)
   - NON-FINAL ACTION MAILED / OFFICE ACTION ISSUED (examiner needs response)
   - APPROVED FOR PUBLICATION
   - PUBLISHED FOR OPPOSITION (30-day opposition window)
   - REGISTERED
   - ABANDONED / SUSPENDED (problem path)

3. Compare against the prior month's status if it's tracked in /Users/dannyfoss/puravidablog/USPTO_TRADEMARK_APPLICATION.md. Append a status entry to that file under a "## Status Log" section with the date and current status.

4. Take ONE of the following actions based on status:

   - **NEW / AWAITING / NON-FINAL ACTION**: Just report status to the user in chat. No further action.
   - **OFFICE ACTION ISSUED**: Alert the user. Office Action requires response within 6 months. Recommend they review the TSDR document and either respond pro se or hire a TM attorney ($400-800).
   - **APPROVED FOR PUBLICATION** or **PUBLISHED**: This is the cue to start preparing Layer 2 UDRP filing. The mark is now strong enough for UDRP standing. Tell the user it's time to start drafting the WIPO UDRP complaint against vidasanantonio.com, and offer to draft it. Reference /Users/dannyfoss/puravidablog/typosquatter-evidence/ for the existing evidence.
   - **REGISTERED**: Layer 2 trigger fires. The trademark is now federally registered. Prompt the user that they now have the strongest possible standing for a UDRP filing. Offer to:
     (a) Re-check vidasanantonio.com to see if it's still active and still typosquatting (use Chrome MCP to navigate; if site is down or Layer 1 actions resolved it, no UDRP needed),
     (b) If still active, draft a complete WIPO UDRP complaint using the registered mark + the evidence at /Users/dannyfoss/puravidablog/typosquatter-evidence/,
     (c) Walk the user through filing at https://www.wipo.int/amc/en/domains/.
   - **ABANDONED / SUSPENDED**: Alert the user immediately — this means the application failed. They need to determine why and likely refile.

5. Also check whether the typosquatter is still live by fetching https://www.vidasanantonio.com headers. If it's offline or has changed dramatically, note that — Layer 1 may have already resolved the issue and Layer 2 is unnecessary.

6. Report findings to the user in chat with:
   - Current trademark status (with TSDR link: https://tsdr.uspto.gov/#caseNumber=99807665&caseType=SERIAL_NO&searchType=statusSearch)
   - Whether status changed since last check
   - Whether vidasanantonio.com is still live
   - Recommended action (or "no action needed; check again next month" if early stages)

## Constraints

- Do not file UDRP automatically. UDRP filing requires the user's signed declaration under penalty of perjury and credit-card payment ($1,500-2,000). Always pause and ask before drafting or submitting.
- Always log the status check to the application reference doc, regardless of status.
- If TSDR is unreachable, ask the user to manually look it up rather than failing silently.
- Be brief in chat — assume monthly cadence means context accumulates fast; one paragraph plus a recommended action is plenty.

---
```

That's it. Cowork will create the task and confirm it. You'll get a chat notification each month around the 1st at 9 AM with the trademark status update.

## Schedule explained

- `0 9 1 * *` = 9:00 AM local time, 1st day of every month
- First run: 2026-06-01 at 9 AM
- Last meaningful run: when trademark either registers, abandons, or you cancel the task
- Expected timeline of meaningful events:
  - Months 1-4 (June-Sep 2026): "New Application / Awaiting Examination" — quiet status reports
  - Months 4-8 (Sep 2026 - Jan 2027): Examiner assigned, possible Office Action
  - Month 8-10 (Jan-Mar 2027): Approved for Publication → publication for opposition
  - Month 12-18 (May-Nov 2027): Registration issues → Layer 2 UDRP trigger fires

## When to cancel this task

Cancel it when any of:
- Trademark registers and you've completed (or decided against) Layer 2 UDRP filing
- vidasanantonio.com goes offline (Layer 1 worked) and you no longer care about monitoring
- You decide to monitor manually
