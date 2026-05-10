# Typosquatter Report Submission Log

| # | Report | Submitted | Confirmation | Case # |
|---|---|---|---|---|
| 1 | Google search spam | 2026-05-06 | "Thank you for submitting a report" | (Google does not issue case numbers) |
| 2 | Cloudflare abuse | 2026-05-06 | Form cleared after submit | _await email to drfoss@puravidasanantonio.com_ |
| 3 | GoDaddy abuse | 2026-05-06 | "Submission Complete - allow up to 72 hours for initial response" | Reply received 2026-05-07 from TrademarkClaims@GoDaddy.com — declined, directed to UDRP. Full text: `godaddy-response-2026-05-07.md` |
| — | Cloudflare auto-reply | 2026-05-07 | Report ID `1c29c1c3776a9227` — forwarded to website owner AND host (The Constant Company / Vultr, abuse@constant.com). Full text: `cloudflare-response-2026-05-07.md` |
| — | **Vultr Trust & Safety takedown** | 2026-05-07 | **Ticket LGT-96NGT — "Our customer has removed the infringing material from our network. We are closing this ticket."** ✅ User confirmed the site is down. Full text: `vultr-takedown-confirmation-2026-05-07.md` |

## RESOLUTION — 2026-05-07 (less than 24 hours from initial filings)

**Layer 1 enforcement succeeded.** The typosquat at vidasanantonio.com has been taken down. Verified by:
1. Vultr Trust & Safety email confirming the customer removed infringing material
2. User loaded the site — it is down

**Total cost:** $0 in legal fees. **Total time:** under 24 hours from Cloudflare submission.

**Why this worked when GoDaddy declined:** Hosts (Vultr) act on AUP/TOS violations directly because they have direct contractual control over the customer. Registrars (GoDaddy) defer to UDRP because they're bound by ICANN policy not to arbitrate. Hitting the host channel via Cloudflare's forwarding was the leverage point that mattered.

**Forward monitoring (still valuable):**
- Monthly check via the scheduled trademark monitor task — confirm the domain stays down or, if the typosquatter relaunches at a new host or with different content, refile immediately.
- Federal trademark registration (USPTO Serial 99807665) still worth completing — gives us a faster takedown path on any future typosquats.

## Google submission details

- **Form:** https://search.google.com/search-console/report-spam
- **Page URL reported:** https://www.vidasanantonio.com
- **Category:** Deceptive → Scam and fraud
- **Search query cited:** pura vida chiropractic san antonio
- **Description (277/300 chars):** Typosquat of puravidasanantonio.com / Pura Vida Chiropractic. Outranks the legitimate chiropractor for branded queries despite zero chiropractic content - site:vidasanantonio.com chiropractic returns no results. USPTO TM serial 99807665. Featured article: male chastity device.
- **PII included:** None — no name, email, phone, or address per Google's "verbatim to site owner" policy

## What to watch
- GSC Performance report for the query "pura vida san antonio" (and related branded queries) over the next 14-30 days
- vidasanantonio.com Google search visibility (use `site:vidasanantonio.com` to confirm de-indexing if it happens)
- No follow-up email expected from Google

## Cloudflare submission details

- **Form:** https://abuse.cloudflare.com/trademark
- **Type:** Trademark Infringement
- **Complainant identity:** Pura Vida Chiropractic, PLLC (business identity, not personal — Lumen Database disclosure)
- **Email:** drfoss@puravidasanantonio.com
- **Trademark word:** PURA VIDA CHIROPRACTIC
- **Registration #:** 99807665 (USPTO pending application)
- **Registration office:** USPTO (pending application)
- **Infringing URL:** https://www.vidasanantonio.com (single hostname per Cloudflare's rule)
- **Telephone:** Left blank to avoid Lumen disclosure
- **DSA bona-fide certification:** Checked by user
- **CAPTCHA:** Completed by user
- **Note:** Cloudflare may bounce due to pending-not-yet-registered status; if so, refile after registration (~12-18 months)

## What to watch
- Email confirmation from Cloudflare to drfoss@puravidasanantonio.com (typically arrives in 1-2 hours)
- Save the case number to this file when it arrives
- Cloudflare will forward to the host; any host action typically takes 7-14 days

## GoDaddy submission details

- **Form:** https://supportcenter.godaddy.com/AbuseReport (Trademark Infringement → Other)
- **Type:** Trademark Infringement (5-step "Other" complaint flow)
- **Complainant identity:** Daniel Foss / Pura Vida Chiropractic PLLC (full personal info — GoDaddy reports are internal, not Lumen-public)
- **Email:** drfoss@puravidasanantonio.com
- **Trademark term:** PURA VIDA CHIROPRACTIC
- **Trademark Registration #:** 99807665 (USPTO pending application — note: form labels this "Registration Number" but USPTO has not yet issued a registration number; the application serial number is what was provided)
- **Jurisdiction:** USPTO with full pending-status disclosure inline
- **Infringing URL:** https://www.vidasanantonio.com
- **Description:** ~2,300 char detailed complaint citing typosquatting, common-law rights, ACPA / UDRP elements, and the "zero content" evidence
- **Three legal certifications:** Checked by user
- **Digital signature:** Daniel Foss (typed by user)
- **Confirmation:** "Submission Complete - We have received your request. Please allow up to 72 hours for an initial response."

## What to watch
- Email confirmation from GoDaddy to drfoss@puravidasanantonio.com within 72 hours
- GoDaddy may bounce on the registration-vs-application technicality; if so, save the rejection email and refile after USPTO registration (~12-18 months)
- If accepted, GoDaddy typically forwards to the registrant for a 14-day response window before any registrar-level action

## GoDaddy response received 2026-05-07

GoDaddy's Trademark Department (TrademarkClaims@GoDaddy.com) responded the day after submission, declining to act and directing to UDRP. **This is the standard registrar response for trademark disputes — not a special bounce, not a rejection of our case on the merits.** The full email is preserved at `godaddy-response-2026-05-07.md` for use as Exhibit A in the future UDRP filing.

Key takeaways from their response:
- GoDaddy confirms by reference to ICANN regulations that they ARE the registrar of record (otherwise ICANN regs wouldn't apply to them).
- They confirm they are NOT the host (separate company hosts the actual files).
- They cite ICANN policy as why they cannot arbitrate trademark disputes — only UDRP panels can.
- They link to ICANN UDRP info: https://www.icann.org/resources/pages/help/dndr/udrp-en

Why this matters: when we eventually file UDRP after USPTO registration issues, the panel will require evidence that the trademark holder attempted informal resolution and was rebuffed. This email is that evidence. It also confirms via the registrar's own admission that they are bound by ICANN to comply with any UDRP transfer order.
