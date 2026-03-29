import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pura Vida Chiropractic | San Antonio, TX",
    template: "%s | Pura Vida Chiropractic",
  },
  description:
    "Pura Vida Chiropractic in San Antonio, TX — gentle, holistic chiropractic care using the Sacro-Occipital Technique (SOT). Schedule your free evaluation today.",
  metadataBase: new URL("https://www.puravidachiropractic.com"),
  openGraph: {
    siteName: "Pura Vida Chiropractic",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
