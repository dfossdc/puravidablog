# LSA Launch Status Check — Tomorrow Morning

**How to use:** Open a fresh Cowork conversation tomorrow (May 6, 2026) any time after 8 AM and paste the prompt below. It runs the full check in one shot — should take ~3 minutes. To make it recurring, paste the same prompt and ask Cowork to schedule it (e.g. "schedule this to run every weekday at 9 AM").

---

## Prompt to paste:

Run a status check on Pura Vida Chiropractic's Google Local Services Ads (LSA) launch. I'm Dr. Dan Foss (dfossdc@gmail.com), owner of Pura Vida Chiropractic at 2318 Northwest Military Hwy #103, San Antonio, TX 78231. The website is https://www.puravidasanantonio.com. The codebase lives at /Users/dannyfoss/puravidablog. On May 5, 2026 we completed LSA setup configuration and submitted all verification materials. Today's job is to verify what cleared overnight and report status.

OBJECTIVE
Produce a concise status report covering five areas. Do NOT make changes — this is a status check only. If something needs my attention, flag it clearly at the top.

STEPS

1. Check Gmail for relevant overnight emails using the Gmail MCP. Run these queries (newer_than:1d):
   - "from:google.com OR from:ads-account-noreply@google.com OR from:noreply@google.com" — looking for "ad is now running", lead notifications, verification confirmations
   - "from:evidentid.com" — background check sync confirmations
   - Subject containing "Local Services" OR "background check" OR "verification"
   Summarize anything found. Quote subject lines and senders.

2. Check the Google Ads tag status. Use the Claude in Chrome MCP to navigate to https://www.puravidasanantonio.com and run a javascript inspection of window.dataLayer. Confirm both `gtag('config', 'G-3XFX4365HM', ...)` and `gtag('config', 'AW-1022387803')` are present. Then navigate to https://ads.google.com/aw/datamanager?ocid=48764397 (Connected Products page) and report whether the "Pura Vida Chiropractic" Google tag still shows URGENT status or has cleared. Tag ID is AW-1022387803.

3. Check LSA Verification Portal at https://ads.google.com/localservices/verification?cid=6410046588 — three items were "In progress" on May 5. Report which (if any) flipped to "Complete":
   - Insurance details (coi.pdf submitted 5/4)
   - Background check (Evident emailed CLEAR on 5/5, LSA portal sync was pending)
   - Featured Professionals (Daniel Foss, TX License #10880, NPI 1699961227)
   Note the yellow "Finish requirements - X of 3" banner — X is how many remain.

4. Check LSA Leads inbox at https://ads.google.com/localservices/inbox?cid=6410046588 — report number of leads, charge status totals, any new lead notifications.

5. Check the GSC indexing log at /Users/dannyfoss/puravidablog/gsc-indexing-log.md — report the last entry date and whether quota was hit yesterday/today.

OUTPUT FORMAT
Lead with a one-line headline ("Campaign live", "2 of 3 verified, 1 pending", "Still waiting on all verifications", etc.) followed by short bullets per area. If anything needs my attention (an Evident follow-up email asking for more info, a lead that came in, a verification requesting additional documents), put it at the very top in a "NEEDS YOUR ATTENTION" section. Total output under 400 words.

CONSTRAINTS
- Do not change any settings, click "FIX IT", or any action button.
- Do not send any emails.
- Do not commit or push any code.
- If you hit a login wall or 2FA prompt, stop and tell me — don't try to bypass.
