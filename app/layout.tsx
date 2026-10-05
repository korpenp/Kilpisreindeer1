import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kilpis Reindeer | Authentic Sámi & Reindeer Experiences",
  description:
    "Family-hosted reindeer experiences in Kilpisjärvi, Finnish Lapland, rooted in the Tornensis family’s long Sámi heritage.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const FAREHARBOR_FLOW_URL =
  "https://fareharbor.com/embeds/book/kilpisreindeer/?full-items=yes&flow=1708137";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* FareHarbor floating book button for flow #1708137 */}
        <a
          className="fh-floating-book"
          href={FAREHARBOR_FLOW_URL}
          aria-label="Book online now"
        >
          Book now
        </a>

        {/* FareHarbor Lightframe API */}
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}