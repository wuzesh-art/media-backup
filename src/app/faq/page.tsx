/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Video Downloader FAQ - Common Questions Answered",
  description: "Frequently asked questions about our free TikTok video downloader. Is it safe? Does it remove watermark? Mobile support? All answers here.",
  keywords: [
    "tiktok downloader faq",
    "is tiktok downloader safe",
    "remove tiktok watermark",
    "download tiktok videos free",
    "tiktok video saver questions",
  ],
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Is this tool completely free?",
      a: "Yes, 100% free. No hidden fees, no premium tiers, no credit card required. We may add optional Pro features in the future (batch download, higher resolution), but the core service will always remain free."
    },
    {
      q: "Does it really remove the TikTok watermark?",
      a: "Yes. We access the original video file from TikTok's servers before the watermark overlay is applied. The downloaded MP4 is clean — no username watermark, no TikTok logo, no music attribution stickers."
    },
    {
      q: "Is it safe to use? Will my data be stolen?",
      a: "Completely safe. No signup means we don't collect emails, passwords, or personal info. We don't store your downloaded videos — they're processed server-side and deleted immediately after transfer. We don't share data with third parties."
    },
    {
      q: "What video quality can I download?",
      a: "Currently up to 1024p HD for TikTok videos. The exact quality depends on the original upload — if the creator posted in 720p, that's the maximum available. We always offer the highest resolution the source video supports."
    },
    {
      q: "Can I use it on my phone?",
      a: "Absolutely. The website is fully responsive and tested on iPhone Safari, Android Chrome, and Samsung Internet. The process is identical to desktop: copy link → paste → download. On iPhone, you can save directly to Photos."
    },
    {
      q: "Is there a download limit?",
      a: "No hard limit. You can download as many TikTok videos as you want. However, we have rate limiting (5 downloads per minute per IP) to prevent abuse and ensure server stability for all users."
    },
    {
      q: "Why is YouTube/Instagram/Twitter not working?",
      a: "Currently only TikTok is fully supported. YouTube, Instagram, Twitter, and Vimeo have aggressive anti-bot protections that block server IPs. We're working on solutions (rotating proxies, browser emulation) and expect to add support within 2-4 weeks. Sign up for our newsletter to get notified."
    },
    {
      q: "Do I need to install an app?",
      a: "No app needed. VideoDownloderAI.com is a web-based tool — works in any modern browser. This means no App Store restrictions, no storage space used on your phone, and no sketchy APK files."
    },
    {
      q: "Why is my download slow?",
      a: "Download speed depends on three factors: (1) your internet connection, (2) the video file size (1024p HD files are larger), and (3) server load. Our server is US-based; users in Europe/Asia may experience 2-3x slower speeds. Try lower resolution (720p) for faster downloads."
    },
    {
      q: "Can I download private videos?",
      a: "No. Only public TikTok videos can be downloaded. Private videos, friends-only posts, and deleted content are inaccessible — this is a technical limitation, not a policy choice."
    },
    {
      q: "Is this legal? Am I violating copyright?",
      a: "Downloading for personal use (backup, offline viewing) is generally legal in most jurisdictions. However, reposting others' content without permission may violate copyright or TikTok's Terms of Service. We recommend respecting creators' rights and using downloads for personal use only."
    },
    {
      q: "How do I report a bug or request a feature?",
      a: "Email us at support@videodownloaderai.com or DM us on Twitter @VideoDownAI. We read every message and typically respond within 24 hours. Popular feature requests: batch download, browser extension, Android app."
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">FAQ</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          TikTok Video Downloader FAQ
        </h1>
        
        <p className="text-xl text-gray-400 mb-12">
          Everything you need to know about downloading TikTok videos without watermark. Can't find your question? Email us at support@videodownloaderai.com
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-red-500 text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-red-900/20 border border-red-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Try It?</h2>
          <p className="text-gray-400 mb-6">No signup required. Paste your first TikTok link now.</p>
          <a href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Go to Video Downloader →
          </a>
        </div>

        {/* Related */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">More help:</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/how-to-download-tiktok-videos" className="text-red-500 hover:text-red-400 underline">Step-by-Step Guide</a>
            <span className="text-gray-600">|</span>
            <a href="/" className="text-red-500 hover:text-red-400 underline">Download Tool</a>
          </div>
        </div>
      </div>
    </main>
  );
}
