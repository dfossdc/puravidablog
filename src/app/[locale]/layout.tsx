import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCall from "@/components/MobileStickyCall";
import ChatWidget from "@/components/ChatWidget";

const BASE_URL = "https://puravidasanantonio.com";
const VALID_LOCALES = ["en", "es"] as const;
type Locale = (typeof VALID_LOCALES)[number];

function isValidLocale(value: string): value is Locale {
  return (VALID_LOCALES as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return VALID_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const isEs = locale === "es";
  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      locale: isEs ? "es_MX" : "en_US",
      alternateLocale: isEs ? "en_US" : "es_MX",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Reject anything that isn't /en or /es with a clean 404 instead of letting
  // child components (notably ChatWidget's COPY[locale] lookup) crash with a
  // 500. This catches Vercel's favicon prober (/favicon.ico routed as
  // locale="favicon.ico"), stale WP paths like /mission-trips/conditions/...,
  // and any other accidental URL that lands on this segment.
  if (!isValidLocale(locale)) notFound();
  return (
    <>
      {children}
      <WhatsAppButton locale={locale} />
      <MobileStickyCall locale={locale} />
      <ChatWidget locale={locale} />
    </>
  );
}
