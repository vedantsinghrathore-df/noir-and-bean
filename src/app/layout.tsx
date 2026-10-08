import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NOIR & BEAN — Specialty Coffee & Editorial Roastery",
  description:
    "A sophisticated specialty coffee house focused on exceptional single-origin coffee, handcrafted French lamination pastries, and a warm editorial atmosphere in Bengaluru.",
  keywords: [
    "specialty coffee",
    "noir and bean",
    "bengaluru cafe",
    "cold brew",
    "artisan bakery",
    "croissant",
    "luxury cafe",
  ],
  openGraph: {
    title: "NOIR & BEAN — Specialty Coffee & Editorial Roastery",
    description:
      "Coffee, Crafted Slowly. Thoughtfully sourced beans, handcrafted pastries, and a space designed to make you stay.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FBF9F5] text-[#181310] font-sans selection:bg-[#C2A277]/25 selection:text-[#181310]">
        {children}
      </body>
    </html>
  );
}
