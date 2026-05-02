import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TikTok Video Downloader — No Watermark, HD Quality, Free",
  description:
    "Free online TikTok video downloader. Download TikTok videos without watermark in HD quality MP4 format. No signup, no ads, unlimited downloads.",
  keywords: [
    "tiktok video downloader",
    "download tiktok videos",
    "tiktok no watermark",
    "tiktok mp4 download",
    "tiktok saver",
    "tiktok backup",
    "free tiktok downloader",
    "online video downloader",
  ],
  openGraph: {
    title: "TikTok Video Downloader — No Watermark, HD Quality",
    description:
      "Free online tool to download TikTok videos without watermark. HD quality MP4, no signup required.",
    type: "website",
    url: "https://www.videodownloaderai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Video Downloader",
    description: "Download TikTok videos without watermark. Free, HD quality, no signup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.videodownloaderai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-8G37X5QLLC"}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}');
            `,
          }}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TikTok Video Downloader",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "10000"
      },
      "description": "Free online TikTok video downloader without watermark. HD quality MP4, no signup required.",
      "url": "https://www.videodownloaderai.com",
      "image": "https://www.videodownloaderai.com/og-image.png",
      "author": {
        "@type": "Organization",
        "name": "VideoDownloderAI"
      },
      "featureList": [
        "No watermark download",
        "HD quality up to 1024p",
        "No signup required",
        "Mobile friendly",
        "Direct MP4 download"
      ]
    })
  }}
/>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
