import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIANE - Foundation of Indian Americans in New England",
  description:
    "A grassroots non-profit organization uniting the Indian American community across Massachusetts, Rhode Island, New Hampshire, Maine, and Vermont through culture, service, and celebration.",
  keywords: [
    "Indian American",
    "New England",
    "FIANE",
    "FIA",
    "community",
    "nonprofit",
    "Boston",
    "India Day Parade",
    "cultural events",
  ],
  openGraph: {
    title: "FIANE - Foundation of Indian Americans in New England",
    description:
      "Uniting the Indian American community across New England through culture, service, and celebration.",
    type: "website",
    url: "https://www.fiane.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
