import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { headers } from "next/headers";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

const BASE_URL = "https://puravidasanantonio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pura Vida Chiropractic | San Antonio, TX",
    // template intentionally just %s — every page sets its own complete title.
    // Earlier "%s | Pura Vida Chiropractic" was DOUBLE-suffixing pages whose
    // titles already contained the brand, ballooning <title> tags to 130-150
    // chars and triggering Semrush's "too much text in title tag" on 81 pages.
    template: "%s",
  },
  description:
    "Bilingual chiropractic clinic in San Antonio, TX specializing in SOT, SoftWave, shockwave, Class IV laser, auto injury, and pediatric/prenatal care. Free consultation.",
  keywords: [
    "chiropractor San Antonio",
    "quiropráctico San Antonio",
    "SOT chiropractic San Antonio",
    "SoftWave therapy San Antonio",
    "auto injury chiropractor San Antonio",
    "pediatric chiropractor San Antonio",
    "bilingual chiropractor San Antonio",
    "quiropráctica San Antonio TX",
    "quiropráctico que habla español San Antonio",
    "mejor quiropráctico San Antonio",
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      en: `${BASE_URL}/en`,
      es: `${BASE_URL}/es`,
      "x-default": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    siteName: "Pura Vida Chiropractic",
    type: "website",
    url: BASE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/dr-foss-adjusting-patient.webp",
        width: 1200,
        height: 630,
        alt: "Pura Vida Chiropractic San Antonio TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PuraVidaSATX",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "uuAF9ryMJlcu9EY2M_uP4T-KC7Hdn_K5XVEeWAAy6E8",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Try to read the pathname from the x-pathname header set by middleware.ts.
  // This works for dynamically-rendered pages. For statically-pre-rendered
  // pages (most of the site), the inline script below corrects the lang
  // attribute at hydration time before any analytics/SEO scripts read it.
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const initialLang = pathname.startsWith("/es") ? "es" : "en";

  return (
    <html lang={initialLang}>
      <head>
        <meta name="google-site-verification" content="uuAF9ryMJlcu9EY2M_uP4T-KC7Hdn_K5XVEeWAAy6E8" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        {/*
          Set <html lang> based on the URL path. Runs before page hydration
          so that crawlers and analytics see the correct lang attribute.
          Necessary because static-pre-rendered pages don't re-execute the
          root layout per request, so the headers() call above can fall
          back to "en" even on /es URLs.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=window.location.pathname;var l=p.indexOf('/es')===0?'es':'en';if(document.documentElement.lang!==l){document.documentElement.lang=l;}}catch(e){}})();",
          }}
        />
      </head>
      <body className={lato.variable}>
        <GoogleAnalytics />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
