import Script from "next/script";

/**
 * Google Analytics 4 (GA4) tracking script.
 *
 * Reads the measurement ID from NEXT_PUBLIC_GA_ID (must be set on Vercel).
 * Renders nothing if the env var is missing — safe for local/preview without GA.
 *
 * Format expected: G-XXXXXXXXXX
 *
 * Why next/script with afterInteractive: keeps GA out of the critical render
 * path so it doesn't hurt LCP / Core Web Vitals (which Semrush + PageSpeed both
 * weigh). GA fires after hydration and reports page_view automatically.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
