import type { Metadata } from "next";
import { Zen_Kurenaido, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "destyle.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TAKISEA PRODUCTION",
    template: "%s - TAKISEA PRODUCTION",
  },
  description:
    "東京都板橋区を拠点にホームページやLP（ランディングページ）の制作・運用を行なってます。",
  metadataBase: new URL("https://takisea.com"),
  alternates: {
    canonical: "https://takisea.com/",
  },
  openGraph: {
    url: "https://takisea.com/",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K63FTJ2W');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K63FTJ2W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
