import Script from "next/script";

/**
 * Google Analytics 4 (GA4) + Google Ads conversion tracking.
 *
 * Reads the GA4 measurement ID from NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) and
 * the Google Ads conversion ID from NEXT_PUBLIC_GOOGLE_ADS_ID (e.g.
 * AW-XXXXXXXXX). Both are optional but at least one must be set or this
 * component renders nothing.
 *
 * gtag.js only needs to load ONCE — additional tag IDs are wired up with
 * extra `gtag('config', '...')` calls. The Ads tag is required for Google
 * Local Services Ads (LSA) and Google Ads conversion attribution; without it,
 * the Tag Assistant in Google Ads reports "Tag stopped sending data" and LSA
 * won't activate.
 *
 * Why next/script with afterInteractive: keeps GA out of the critical render
 * path so it doesn't hurt LCP / Core Web Vitals (which Semrush + PageSpeed both
 * weigh). GA fires after hydration and reports page_view automatically.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  // Hardcoded fallback for the existing Google Ads account that LSA and the
  // Google Ads dashboard are wired to. Can still be overridden via env if
  // we ever swap accounts.
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-1022387803";

  // The first ID listed in the loader URL is just the bootstrap; once gtag.js
  // is loaded, every `gtag('config', ID)` below activates an additional tag.
  const loaderId = gaId || adsId;
  if (!loaderId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${
            gaId
              ? `gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: true });`
              : ""
          }
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
