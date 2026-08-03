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
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-3">
            Built for creators who want to back up their own TikTok content.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500 text-sm">
            <span className="flex items-center gap-1">✓ No signup</span>
            <span className="flex items-center gap-1">✓ No browser extension</span>
            <span className="flex items-center gap-1">✓ HTTPS secure</span>
            <span className="flex items-center gap-1">✓ No permanent file storage</span>
          </div>
          <p className="text-gray-600 text-xs mt-4 max-w-xl mx-auto">
            For personal use only. Respect creators' rights. Not affiliated with TikTok or ByteDance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="font-semibold text-lg mb-2">No Watermark</h3>
              <p className="text-gray-400 text-sm">Download clean copies of your own videos without the TikTok watermark overlay</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-semibold text-lg mb-2">HD Quality</h3>
              <p className="text-gray-400 text-sm">Up to 1024p resolution in MP4 format for professional editing</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">No Signup</h3>
              <p className="text-gray-400 text-sm">No account required. Paste link and download instantly</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-lg mb-2">Mobile Friendly</h3>
              <p className="text-gray-400 text-sm">Works on iPhone Safari and Android Chrome with direct save to Photos</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="font-semibold mb-2">Copy Link</h3>
              <p className="text-gray-400 text-sm">Open TikTok app, tap Share, copy video link</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="font-semibold mb-2">Paste URL</h3>
              <p className="text-gray-400 text-sm">Paste the link in the box above and click Analyze</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-gray-400 text-sm">Choose 1024p HD quality and save to your device</p>
            </div>
          </div>
        </div>

        {/* What This Tool Can and Cannot Do */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What This Tool Can and Cannot Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/10 border border-green-800/30 rounded-xl p-5">
              <h4 className="font-semibold text-green-400 mb-3">✅ Supported</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Public TikTok videos (MP4, no watermark)</li>
                <li>• Quality up to the original upload resolution</li>
                <li>• iPhone (Safari), Android (Chrome), Windows, Mac</li>
                <li>• No account, no signup, no app install</li>
              </ul>
            </div>
            <div className="bg-yellow-900/10 border border-yellow-800/30 rounded-xl p-5">
              <h4 className="font-semibold text-yellow-400 mb-3">⚠️ Not Supported</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Private or friends-only videos</li>
                <li>• Bulk export of an entire account (one link at a time)</li>
                <li>• Some region-restricted videos</li>
                <li>• Videos deleted by the creator or TikTok</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Last verified: August 2026 on iPhone Safari, Android Chrome, and Windows Chrome. We re-test core functionality weekly.
          </p>
        </div>

        {/* Quick FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick FAQ</h2>
          <div className="space-y-4">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Is this tool completely free?</summary>
              <p className="text-gray-400 mt-2 text-sm">Yes, 100% free. No hidden fees, no premium tiers.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Does it really remove the watermark?</summary>
              <p className="text-gray-400 mt-2 text-sm">For most public videos, yes. We fetch the original file from TikTok's servers before the watermark overlay is applied in the app. A small number of creators burn a watermark into their video before uploading — that type cannot be removed.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Is it safe to use?</summary>
              <p className="text-gray-400 mt-2 text-sm">No signup is required and we never ask for your TikTok account. The connection is HTTPS encrypted. Videos are processed on our server and are not permanently stored.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Can I download other people's videos?</summary>
              <p className="text-gray-400 mt-2 text-sm">Technically possible for public videos, but we strongly recommend only downloading content you own or have permission to use. Respect creators' rights.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Why can't I download a specific video?</summary>
              <p className="text-gray-400 mt-2 text-sm">The most common reasons: the video is private or friends-only, it was deleted, it is region-restricted, or the link format is wrong. See our <a href="/blog/tiktok-downloader-not-working" className="text-red-500 underline">troubleshooting guide with 15 fixes</a>.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Where do downloaded files get saved?</summary>
              <p className="text-gray-400 mt-2 text-sm">On iPhone, use Safari and the file can be saved to Photos or the Files app. On Android, files go to the Downloads folder. On desktop, they go to your browser's default download folder. See our <a href="/blog/save-tiktok-to-iphone-camera-roll" className="text-red-500 underline">iPhone guide</a> and <a href="/blog/download-tiktok-videos-android" className="text-red-500 underline">Android guide</a>.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Does TikTok notify the creator when I download their video?</summary>
              <p className="text-gray-400 mt-2 text-sm">Based on TikTok's publicly documented features and our own two-account testing, TikTok does not send creators a notification when someone downloads their video using a third-party tool. This could change if TikTok updates its features. <a href="/blog/does-tiktok-notify-when-you-download" className="text-red-500 underline">Read the full privacy guide</a>.</p>
            </details>
          </div>
        </div>

        {/* Recommended Reading */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Recommended Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/blog/how-to-download-tiktok-without-watermark" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">How to Download TikTok Videos Without Watermark</h3>
              <p className="text-gray-400 text-sm">Step-by-step guide for iPhone, Android, and desktop. Updated 2026.</p>
            </a>
            <a href="/blog/remove-tiktok-watermark" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">How to Remove TikTok Watermark: 3 Free Methods</h3>
              <p className="text-gray-400 text-sm">Compare cropping, online tools, and editing software.</p>
            </a>
            <a href="/blog/how-to-download-tiktok-videos-on-pc" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">How to Download on PC (Windows & Mac)</h3>
              <p className="text-gray-400 text-sm">Step-by-step for desktop users. No software needed.</p>
            </a>
            <a href="/blog/why-cant-i-download-my-tiktok-video" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">Why Can't I Download My TikTok Video?</h3>
              <p className="text-gray-400 text-sm">5 reasons TikTok blocks downloads — and exact fixes for each.</p>
            </a>
            <a href="/blog/download-all-tiktok-videos" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">How to Download All Your TikTok Videos</h3>
              <p className="text-gray-400 text-sm">The fastest workflow to back up your whole account, one link at a time.</p>
            </a>
            <a href="/blog/how-to-download-tiktok-videos-complete-guide" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">Complete Guide: All Platforms</h3>
              <p className="text-gray-400 text-sm">iPhone, Android, PC, Mac — one guide for every device.</p>
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">Need more help?</p>
          <div className="flex justify-center gap-4 items-center">
            <a 
              href="/how-to-download-tiktok-videos" 
              className="text-red-500 hover:text-red-400 underline px-4 py-3 min-h-[48px] flex items-center"
            >
              Step-by-Step Guide
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/faq" 
              className="text-red-500 hover:text-red-400 underline px-4 py-3 min-h-[48px] flex items-center"
            >
              Full FAQ
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>short.videodownloaderai.com — Free TikTok Video Downloader</p>
        <p className="mt-2">Not affiliated with TikTok. For personal use only. Respect creators' rights.</p>
        <div className="mt-4 flex justify-center gap-4 text-xs">
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/dmca" className="hover:text-white transition-colors">DMCA</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
