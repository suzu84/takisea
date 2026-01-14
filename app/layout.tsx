import type { Metadata } from "next";
import { Zen_Kurenaido, Noto_Sans_JP } from "next/font/google";
import "destyle.css"; // 他のCSSより上に書くのがコツ
import "./globals.css";
import Header from "./_components/Header";

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "TAKISEA PRODUCTION",
    template: "%s - TAKISEA PRODUCTION", // 下層ページで「コラム - TAKISEA...」とするため
  },
  description: "東京都板橋区を拠点にホームページやLP（ランディングページ）の制作・運用を行なってます。",
  metadataBase: new URL("https://takisea.co.jp"),
  alternates: {
    canonical: "https://takisea.com/",
  },
  openGraph: {
    url: "https://takisea.co.jp/",
    type: "website",
    title: "TAKISEA PRODUCTION",
    description: "東京都板橋区を拠点にホームページやLP（ランディングページ）の制作・運用を行なってます。",
    siteName: "TAKISEA PRODUCTION",
    images: [
      {
        url: "/assets/images/ogp.jpg", // publicからのパス
      },
    ],
  },
};

const notoHighlight = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans", // 変数名
  display: "swap",
});

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-kurenaido", // ここで決めた名前をCSSで使う
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoHighlight.variable} ${zenKurenaido.variable}`}>
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
