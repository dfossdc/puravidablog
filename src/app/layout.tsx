import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { headers } from "next/headers";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
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
    template: "%s | Pura Vida Chiropractic",
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
  // Read the request pathname from the x-pathname header set by middleware.ts.
  // This lets us declare the correct <html lang="..."> per locale, instead of
  // hardcoding "en" on every page (which mislabels Spanish pages to Google).
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const lang = pathname.startsWith("/es") ? "es" : "en";

  return (
    <html lang={lang}>
      <head>
        <meta name="google-site-verification" content="uuAF9ryMJlcu9EY2M_uP4T-KC7Hdn_K5XVEeWAAy6E8" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className={lato.variable}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
