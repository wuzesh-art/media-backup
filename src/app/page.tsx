/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "TikTok Video Downloader Without Watermark — Free, HD, No Signup",
  description:
    "Download TikTok videos without watermark in HD MP4. Free, no signup, no app install. Works on iPhone, Android, Windows, and Mac. Built for creators backing up their own content.",
  keywords: [
    "tiktok video downloader",
    "download tiktok video without watermark",
    "tiktok downloader no watermark",
    "save tiktok video",
    "download tiktok mp4",
    "tiktok video downloader hd",
  ],
  alternates: {
    canonical: "https://short.videodownloaderai.com/",
  },
  openGraph: {
    title: "TikTok Video Downloader Without Watermark — Free, HD, No Signup",
    description:
      "Download TikTok videos without watermark in HD MP4. Free, no signup, no app install.",
    url: "https://short.videodownloaderai.com/",
    type: "website",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this tool completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% free. No hidden fees, no premium tiers.",
        },
      },
      {
        "@type": "Question",
        name: "Does it really remove the watermark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most public videos, yes. We fetch the original file from TikTok's servers before the watermark overlay is applied in the app. A small number of creators burn a watermark into their video before uploading — that type cannot be removed.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No signup is required and we never ask for your TikTok account. The connection is HTTPS encrypted. Videos are processed on our server and are not permanently stored.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download other people's videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically possible for public videos, but we strongly recommend only downloading content you own or have permission to use. Respect creators' rights.",
        },
      },
      {
        "@type": "Question",
        name: "Why can't I download a specific video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common reasons: the video is private or friends-only, it was deleted, it is region-restricted, or the link format is wrong. See our troubleshooting guide for 15 fixes.",
        },
      },
      {
        "@type": "Question",
        name: "Where do downloaded files get saved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On iPhone, use Safari and the file can be saved to Photos or the Files app. On Android, files go to the Downloads folder. On desktop, they go to your browser's default download folder.",
        },
      },
      {
        "@type": "Question",
        name: "Does TikTok notify the creator when I download their video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on TikTok's publicly documented features and our own two-account testing, TikTok does not send creators a notification when someone downloads their video using a third-party tool. This could change if TikTok updates its features.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header / Nav */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center" aria-label="Main navigation">
          <a href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors px-3 py-3 min-h-[48px] flex items-center">
            VideoDownloaderAI
          </a>
          <div className="flex gap-4">
            <a 
              href="/how-to-download-tiktok-videos" 
              className="text-gray-400 hover:text-white transition-colors px-3 py-2 min-h-[48px] flex items-center"
            >
              How-To
            </a>
            <a 
              href="/faq" 
              className="text-gray-400 hover:text-white transition-colors px-3 py-2 min-h-[48px] flex items-center"
            >
              FAQ
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            TikTok Video Downloader — Download Your Own Videos Without Watermark
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Save your own TikTok videos in HD MP4 for editing, reposting to your own channels, or offline backup. No signup required.
          </p>
          <p className="text-sm text-gray-500">
            YouTube, Instagram, Twitter, and Vimeo support coming soon.
          </p>
        </div>

        {/* Main Tool */}
        <HomeClient />

        {/* Trust Signals */}
        <div className="mt-16
