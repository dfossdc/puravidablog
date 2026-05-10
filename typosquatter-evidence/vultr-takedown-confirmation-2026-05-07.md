# Vultr Trust & Safety — Takedown Confirmation — 2026-05-07

**Received:** 2026-05-07, 1:13 PM (CT)
**From:** abusenotification@vultr.com
**Subject:** [Ticket:LGT-96NGT] Re:[1c29c1c3776a9227]: Cloudflare received a Trademark infringe...
**Vultr Ticket ID:** LGT-96NGT
**Linked Cloudflare Report ID:** 1c29c1c3776a9227

## Outcome

> Our customer has removed the infringing material from our network.
> We are closing this ticket.

**Layer 1 enforcement succeeded in under 24 hours.** The typosquatter's hosting customer (Cloudways) was notified by Vultr, who then notified their customer (the actual operator of vidasanantonio.com). The infringing material was removed. UDRP filing is no longer the priority remedy unless the typosquatter relaunches the same content elsewhere.

## Infrastructure stack uncovered

This response also revealed the full hosting stack that was serving vidasanantonio.com:

| Layer | Provider |
|---|---|
| Domain registrar | GoDaddy |
| DNS / CDN | Cloudflare |
| IaaS host | Vultr (Choopa, LLC / The Constant Company, LLC) |
| Managed-hosting layer | Cloudways (DigitalOcean subsidiary) |
| Server IP | 139.84.148.92 |
| Cloudways instance hostname | 1264657.cloudwaysapps.com |
| Site operator | Registrant in India (per WHOIS, May 2024) |

## Verbatim email

> Ticket LGT-96NGT has been updated by TOS Team. Regarding: 139.84.148.92 (1264657.cloudwaysapps.com)
>
> Hello,
>
> Our customer has removed the infringing material from our network.
>
> We are closing this ticket.
>
> --Vultr Trust & Safety--
>
> To update or check the progress of your ticket, please reply directly to this e-mail or manage the ticket from your client portal.

## Authentication signals (why this email is real, not a phish)

- Sender domain `abusenotification@vultr.com` — Vultr's official abuse address
- Cloudflare Report ID `1c29c1c3776a9227` matches the one Cloudflare sent in their auto-reply minutes earlier
- IP `139.84.148.92` is in Vultr's actual address space (Choopa AS20473)
- Cloudways hostname format `1264657.cloudwaysapps.com` is genuine — Cloudways assigns numeric subdomains to managed instances
- Ticket ID `LGT-96NGT` matches Vultr's standard format
- Email branding matches Vultr's current visual identity

## Watch for

1. **Re-emergence at a different host or under a different domain.** Typosquatters sometimes spin up new infrastructure within days. Monitor monthly via the scheduled task.
2. **Same domain, new content.** If vidasanantonio.com comes back online with chiropractic-themed content (which would be more harmful), that's a re-violation and we file again immediately.
3. **Empty or parked page** — if Cloudways/the registrant just removed the infringing pages but left a placeholder, that's still a partial win because the SEO juice is gone.

## What this changes about the legal strategy

- **UDRP filing becomes optional** rather than necessary. We were planning to file after USPTO registration issues; we can now wait and only file if the typosquatter resurfaces.
- **The federal trademark application (Serial 99807665) is still worth completing** for forward protection — once registered, it gives us a much faster takedown path on any future typosquats.
- **Save all three emails** (Cloudflare auto-reply, Vultr takedown, GoDaddy denial) — together they make a complete enforcement story.

