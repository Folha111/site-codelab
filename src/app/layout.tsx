import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeLab — Desenvolvimento de Software & SaaS",
  description:
    "Transformamos ideias em produtos digitais. Sites, plataformas SaaS e aplicações sob medida para o seu negócio.",
  keywords: ["desenvolvimento web", "SaaS", "software", "CodeLab", "tecnologia"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CodeLab — Desenvolvimento de Software & SaaS",
    description:
      "Transformamos ideias em produtos digitais. Sites, plataformas SaaS e aplicações sob medida.",
    type: "website",
    url: "https://codelab-br.com",
    siteName: "CodeLab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeLab — Desenvolvimento de Software & SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLab — Desenvolvimento de Software & SaaS",
    description:
      "Transformamos ideias em produtos digitais. Sites, plataformas SaaS e aplicações sob medida.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1JDPSP099C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1JDPSP099C');
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingScreen />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
