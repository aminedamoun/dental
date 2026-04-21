import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benko & Knehtl — Center of Aesthetic Dentistry · Maribor",
  description:
    "Aesthetic dentistry with soul and precision. Veneers, invisible aligners, whitening, implants — all in one place in Maribor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* Start downloading the hero video + poster as early as possible */}
        <link rel="preload" as="image" href="/video/poster.webp" />
        <link
          rel="preload"
          as="video"
          href="/video/hero.webm"
          type="video/webm"
        />
      </head>
      <body className="font-sans bg-white text-brand-ink">{children}</body>
    </html>
  );
}
