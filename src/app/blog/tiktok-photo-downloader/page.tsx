/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "TikTok Photo Downloader — Save Photo Mode & Slideshows (2026)",
  description: "Download TikTok photo posts and slideshows in full quality. Free, no signup, no app install, no TikTok login. Works on iPhone, Android, PC, and Mac. Last verified September 2026.",
  keywords: [
    "tiktok photo downloader",
    "download tiktok slideshow",
    "tiktok photo mode download",
    "save tiktok photos",
    "download tiktok images",
    "tiktok picture downloader",
  ],
  alternates: {
    canonical: "https://short.videodownloaderai.com/tiktok-photo-downloader",
  },
  openGraph: {
    title: "TikTok Photo Downloader — Photo Mode & Slideshows",
    description: "Paste a TikTok photo post link, save the images. No signup, no login.",
    type: "website",
    url: "https://short.videodownloaderai.com/tiktok-photo-downloader",
  },
};

export default function TikTokPhotoDownloader() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download TikTok Photo Posts and Slideshows",
    step: [
      { "@type": "HowToStep", name: "Copy the photo post link", text: "In the TikTok app, open the photo post, tap Share, then Copy Link." },
      { "@type": "HowToStep", name: "Paste the link", text: "Paste the link into the input box on this page and click Download Video." },
      { "@type": "HowToStep", name: "Choose a format", text: "Select the available format for the photo post." },
      { "@type": "HowToStep", name: "Download", text: "Click Download to save the files to your device." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I download TikTok photo posts and slideshows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Paste the photo post link into VideoDownloaderAI and the post is processed like a video link. This works for standard Photo Mode posts from public accounts (verified September 2026).",
        },
      },
      {
        "@type": "Question",
        name: "Is the TikTok photo downloader free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Completely free, with no signup, no account, and no TikTok login required.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on iPhone and Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Everything runs in the browser — Safari on iPhone (files save to the Files app) and Chrome on Android (Downloads folder). No app install needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download photo posts from private accounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our tool can only access public posts. We never ask for your TikTok login, which means we have no way to reach private content — and we consider that a feature, not a limitation.",
        },
      },
      {
        "@type": "Question",
        name: "Is it legal to save TikTok photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saving your own photo posts, or content you have permission to keep, is fine. Republishing someone else's photos without permission can violate copyright.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">TikTok Photo Downloader</span>
        </nav>

        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TikTok Photo Downloader
          </h1>
          <p className="text-gray-400 text-lg">
            Save TikTok Photo Mode posts and slideshows in full quality. Paste the link below — no signup, no TikTok login.
          </p>
        </header>

        <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 mb-8">
          <p className="text-lg text-green-400 font-semibold">
            Short answer: copy the photo post's link, paste it below, and download — Photo Mode posts work exactly like video links. Public posts only; private accounts are not accessible.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Last verified: September 2026 · Tested with real Photo Mode posts on iPhone and PC · <a href="/blog/how-we-test" className="text-red-500 underline">How we test</a>
          </p>
        </div>

        <HomeClient />

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">What Are TikTok Photo Mode Posts?</h2>
          <p className="text-gray-300 mb-4">
            Photo Mode is TikTok's carousel format: a swipeable set of still images, often with background music, published as a single post. In the feed they look like videos, but the content is a sequence of photos. TikTok's own save options for photo posts are limited, which is exactly why people search for a dedicated downloader.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">How to Download a TikTok Slideshow (Step by Step)</h2>
          <ol className="space-y-3 text-gray-300">
            <li><strong>1. Open the photo post</strong> in the TikTok app and tap Share → Copy Link.</li>
            <li><strong>2. Paste the link above</strong> and click Download Video.</li>
            <li><strong>3. Choose the available format</strong> in the format list.</li>
            <li><strong>4. Download</strong> — files save to your device (Files app on iPhone, Downloads folder on Android).</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Honest Limitations</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>Public posts only</strong> — we never ask for your TikTok login, so private accounts are unreachable by design</li>
            <li>• If TikTok changes how photo posts are delivered, the tool may need a short adaptation period — see <a href="/blog/tiktok-downloader-not-working" className="text-red-500 underline">why downloaders sometimes break →</a></li>
          </ul>
          <p className="text-gray-500 text-sm mt-4">
            Only download photos you own or have permission to use.
          </p>
        </section>

        <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold mb-4">Related Guides</h3>
          <div className="space-y-3">
            <a href="/tiktok-to-mp3" className="block text-red-500 hover:text-red-400">TikTok to MP3 — Audio Downloader →</a>
            <a href="/blog/best-tiktok-downloaders" className="block text-red-500 hover:text-red-400">5 Best TikTok Downloaders (2026 Tested) →</a>
            <a href="/blog/remove-tiktok-watermark" className="block text-red-500 hover:text-red-400">How to Remove the TikTok Watermark →</a>
            <a href="/" className="block text-red-500 hover:text-red-400">TikTok Video Downloader (Home) →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
