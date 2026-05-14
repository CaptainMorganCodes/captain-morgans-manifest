import type { Metadata } from "next";
import {
  IM_Fell_English_SC,
  IM_Fell_English,
  IM_Fell_DW_Pica_SC,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

// Display caps — used for headings, the "CM" monogram, the masthead title.
const fellSC = IM_Fell_English_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Italic / regular blackletter — used for subtitles, "Captain Morgan", section sub-labels.
const fellItalic = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display-italic",
  display: "swap",
});

// Small caps in old style — used for date stamps, status labels, tech stack lines.
const fellPicaSC = IM_Fell_DW_Pica_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-old",
  display: "swap",
});

// Body — long-form paragraphs (about, project blurbs).
const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Captain Morgan's Manifest — Software Engineer",
  description:
    "An honest record of works, voyages & skills, set down in good faith. The portfolio of Morgan, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fellSC.variable} ${fellItalic.variable} ${fellPicaSC.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
