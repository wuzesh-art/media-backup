import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MediaBackup Pro - Universal Video Backup & Converter",
  description:
    "Free online tool to backup videos from YouTube, TikTok, Instagram, Twitter and more. Convert to MP4/MP3 in HD quality. No signup.",
  keywords: [
    "video backup",
    "youtube downloader",
    "tiktok video saver",
    "instagram video download",
    "twitter video download",
    "online video converter",
    "mp4 download",
    "mp3 extractor",
  ],
  openGraph: {
    title: "MediaBackup Pro - Universal Video Backup & Converter",
    description:
      "Free online tool to backup videos from YouTube, TikTok, Instagram, Twitter and more.",
    type: "website",
    url: "https://mediabackup.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaBackup Pro",
    description: "Backup videos from 8 platforms in HD quality. Free, no signup.",
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
    canonical: "https://mediabackup.io",
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`}
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
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
