import type { Metadata } from "next";
import { Zen_Kurenaido, Noto_Sans_JP } from "next/font/google";
import "destyle.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TAKISEA PRODUCTION",
    template: "%s - TAKISEA PRODUCTION",
  },
  description:
    "東京都板橋区を拠点にホームページやLP（ランディングページ）の制作・運用を行なってます。",
  metadataBase: new URL("https://takisea.co.jp"),
  alternates: {
    canonical: "https://takisea.com/",
  },
  openGraph: {
    url: "https://takisea.co.jp/",
    type: "website",
    title: "TAKISEA PRODUCTION",
    description:
      "東京都板橋区を拠点にホームページやLP（ランディングページ）の制作・運用を行なってます。",
    siteName: "TAKISEA PRODUCTION",
    images: [
      {
        url: "/assets/images/ogp.jpg",
      },
    ],
  },
};

const notoHighlight = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-kurenaido",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoHighlight.variable} ${zenKurenaido.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
