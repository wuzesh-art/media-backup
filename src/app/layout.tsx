import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VideoDownloaderAI - Free TikTok Video Downloader Without Watermark",
  description:
    "Download TikTok videos without watermark. Free, no signup, HD quality. Works on iPhone, Android, and PC. Back up your own content instantly.",
  keywords: [
    "tiktok video downloader",
    "download tiktok without watermark",
    "tiktok downloader",
    "save tiktok videos",
    "tiktok watermark remover",
    "free tiktok downloader",
  ],
  metadataBase: new URL("https://short.videodownloaderai.com"),
  openGraph: {
    title: "VideoDownloaderAI - Free TikTok Video Downloader Without Watermark",
    description: "Download TikTok videos without watermark. Free, no signup, HD quality.",
    url: "https://short.videodownloaderai.com",
    siteName: "VideoDownloaderAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VideoDownloaderAI - Free TikTok Video Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VideoDownloaderAI - Free TikTok Video Downloader Without Watermark",
    description: "Download TikTok videos without watermark. Free, no signup, HD quality.",
    images: ["/og-image.png"],
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
    canonical: "https://short.videodownloaderai.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
