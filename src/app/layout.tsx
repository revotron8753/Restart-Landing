import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Tiro_Devanagari_Hindi, Urbanist } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  weight: "400",
  subsets: ["devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restart Matrimony",
  description:
    "Restart Matrimony is a matrimony app for second chances: divorced, widowed and separated people, single parents, and their families.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bricolage.variable} ${urbanist.variable} ${tiro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
