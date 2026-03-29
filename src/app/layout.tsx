import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import "./globals.css";

const BASE_URL = "https://puravidasanantonio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pura Vida Chiropractic | San Antonio, TX",
    template: "%s | Pura Vida Chiropractic",
  },
  description:
    "Bilingual chiropractic clinic in San Antonio, TX specializing in SOT, SoftWave, shockwave, Class IV laser, auto injury, and pediatric/prenatal care. Free evaluation.",
  keywords: [
    "chiropractor San Antonio",
    "SOT chiropractic San Antonio",
    "SoftWave therapy San Antonio",
    "auto injury chiropractor San Antonio",
    "pediatric chiropractor San Antonio",
    "quiropráctico San Antonio",
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": `${BASE_URL}/en/blog`,
      "es": `${BASE_URL}/es/blog`,
      "x-default": `${BASE_URL}/en/blog`,
    },
  },
  openGraph: {
    siteName: "Pura Vida Chiropractic",
    type: "website",
    url: BASE_URL,
    locale: "en_US",
    images: [{ url: `${BASE_URL}/images/logo.svg`, width: 440, height: 100, alt: "Pura Vida Chiropractic" }],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
