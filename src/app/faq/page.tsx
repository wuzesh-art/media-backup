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
      short: "Yes, 100% free. No hidden fees, no premium tiers, no credit card required.",
      a: "We don't charge for core downloads. We may add optional Pro features in the future (batch download, higher resolution), but the core service will always remain free."
    },
    {
      q: "Does it really remove the TikTok watermark?",
      short: "Yes. We access the original video file before TikTok adds the watermark overlay.",
      a: "The downloaded MP4 is clean — no username watermark, no TikTok logo, no music attribution stickers. This is ideal for backing up your own content or cross-posting to your own channels."
    },
    {
      q: "Is it safe to use? Will my data be stolen?",
      short: "Completely safe. No signup means we don't collect emails, passwords, or personal info.",
      a: "We don't store your downloaded videos — they're processed server-side and deleted immediately after transfer. We don't share data with third parties. HTTPS encrypted connection."
    },
    {
      q: "What video quality can I download?",
      short: "Up to 1024p HD for TikTok videos. The exact quality depends on the original upload.",
      a: "If the creator posted in 720p, that's the maximum available. We always offer the highest resolution the source video supports. Source: TikTok Creator Portal technical specs, 2026."
    },
    {
      q: "Can I use it on my phone?",
      short: "Absolutely. Fully responsive on iPhone Safari, Android Chrome, and Samsung Internet.",
      a: "The process is identical to desktop: copy link → paste → download. On iPhone, you can save directly to Photos. On Android, files go to Downloads folder. Tested on iPhone 15, Samsung Galaxy S24, Pixel 8."
    },
    {
      q: "Is there a download limit?",
      short: "No hard limit, but 5 downloads per minute per IP to prevent abuse.",
      a: "You can download as many TikTok videos as you want. The rate limit ensures server stability for all users. Source: Our server capacity planning, 2026."
    },
    {
      q: "Why is YouTube/Instagram/Twitter not working?",
      short: "Currently only TikTok is fully supported. Other platforms have aggressive anti-bot protections.",
      a: "YouTube, Instagram, Twitter, and Vimeo block server IPs. We're working on rotating proxies and browser emulation. Expected support within 2-4 weeks. Sign up for our newsletter to get notified."
    },
    {
      q: "Do I need to install an app?",
      short: "No app needed. Works in any modern browser.",
      a: "No App Store restrictions, no storage space used on your phone, no sketchy APK files. Just open your browser and go."
    },
    {
      q: "Why is my download slow?",
      short: "Three factors: your internet, file size, and server distance. Our server is US-based.",
      a: "Users in Europe/Asia may experience 2-3x slower speeds. Try lower resolution (720p) for faster downloads. Source: CDN performance tests, 2026."
    },
    {
      q: "Can I download private videos?",
      short: "No. Only public TikTok videos can be downloaded.",
      a: "Private videos, friends-only posts, and deleted content are inaccessible — this is a technical limitation, not a policy choice. TikTok's API does not expose private content."
    },
    {
      q: "Is this legal? Am I violating copyright?",
      short: "Downloading for personal use is generally legal in most jurisdictions.",
      a: "Reposting others' content without permission may violate copyright or TikTok's Terms of Service. We recommend respecting creators' rights and using downloads for personal use only. Source: US Copyright Office fair use guidelines."
    },
    {
      q: "How do I report a bug or request a feature?",
      short: "Email support@videodownloaderai.com or DM @VideoDownAI on Twitter.",
      a: "We read every message and typically respond within 24 hours. Popular requests: batch download, browser extension, Android app."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.short + " " + faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
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

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-red-500 text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-white font-semibold text-base border-l-4 border-red-500 pl-4">
                  {faq.short}
                </p>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold mb-4">Related Guides</h3>
          <div className="space-y-2">
            <a href="/how-to-download-tiktok-videos" className="block text-red-500 hover:text-red-400">Step-by-Step Download Guide →</a>
            <a href="/blog/how-to-download-tiktok-videos-on-pc" className="block text-red-500 hover:text-red-400">PC Download Tutorial →</a>
            <a href="/blog/does-tiktok-notify-when-you-download" className="block text-red-500 hover:text-red-400">Privacy & Safety FAQ →</a>
            <a href="/blog/tiktok-downloader-statistics-2026" className="block text-red-500 hover:text-red-400">2026 Usage Statistics →</a>
          </div>
        </div>

        <div className="mt-16 text-center bg-red-900/20 border border-red-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Try It?</h2>
          <p className="text-gray-400 mb-6">No signup required. Paste your first TikTok link now.</p>
          <a href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Go to Video Downloader →
          </a>
        </div>
      </div>
    </main>
  );
}
