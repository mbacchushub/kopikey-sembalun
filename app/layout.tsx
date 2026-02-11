import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kopikey Sembalun – Authentic Arabica Coffee from Mount Rinjani | Sembalun Lombok",
  description:
    "Premium Sembalun Arabica coffee from East Lombok, Indonesia. Hand-selected beans from the slopes of Mount Rinjani. Visit Kopikey Sembalun for authentic coffee culture since 2012.",
  keywords: [
    "Sembalun coffee",
    "Arabica Lombok",
    "Mount Rinjani coffee",
    "Kopikey Sembalun",
    "specialty coffee Indonesia",
    "East Lombok coffee",
    "Sembalun Village coffee",
  ],
  openGraph: {
    title: "Kopikey Sembalun – Authentic Arabica Coffee from Mount Rinjani",
    description:
      "Premium Sembalun Arabica coffee from East Lombok. Hand-selected, hand-blended. Coffee as culture.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
