/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "TikTok to MP3 — Download TikTok Audio Free, No Signup (2026)",
  description: "Convert TikTok videos to MP3 audio in seconds. Free, no signup, no app install, no TikTok login. Works on iPhone, Android, PC, and Mac. Last verified September 2026.",
  keywords: [
    "tiktok to mp3",
    "tiktok audio downloader",
    "download tiktok audio",
    "tiktok mp3 converter",
    "tiktok sound downloader",
    "save tiktok sound as mp3",
  ],
  alternates: {
    canonical: "https://short.videodownloaderai.com/tiktok-to-mp3",
  },
  openGraph: {
    title: "TikTok to MP3 — Free TikTok Audio Downloader",
    description: "Paste a TikTok link, get the audio as MP3. No signup, no login.",
    type: "website",
    url: "https://short.videodownloaderai.com/tiktok-to-mp3",
  },
};

export default function TikTokToMP3() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert a TikTok Video to MP3",
    step: [
      { "@type": "HowToStep", name: "Copy the TikTok link", text: "In the TikTok app, tap Share on the video, then Copy Link." },
      { "@type": "HowToStep", name: "Paste the link", text: "Paste the link into the input box on this page and click Download Video." },
      { "@type": "HowToStep", name: "Choose the audio format", text: "In the format list, select the audio / MP3 option." },
      { "@type": "HowToStep", name: "Download", text: "Click Download to save the MP3 file to your device." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this TikTok to MP3 converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VideoDownloaderAI is completely free, with no signup, no account, and no TikTok login required.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to install an app to download TikTok audio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The converter runs entirely in your browser. On iPhone, the MP3 saves to the Files app; on Android, to the Downloads folder; on PC and Mac, to your default download location.",
        },
      },
      {
        "@type": "Question",
        name: "What quality is the extracted MP3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The audio is extracted directly from the video's original audio track at source quality — we do not re-encode or compress it further.",
        },
      },
      {
        "@type": "Question",
        name: "Is it legal to download TikTok audio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saving audio from your own videos, or content you have permission to use, is fine. Using someone else's music or audio in your own published content can violate copyright — when in doubt, get permission.",
        },
      },
      {
        "@type": "Question",
        name: "Does the creator get notified when I download their audio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Based on TikTok's documented features and our testing (verified September 2026), TikTok sends no notification when someone downloads a video or its audio via third-party tools.",
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
          <span className="text-white">TikTok to MP3</span>
        </nav>

        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TikTok to MP3 — Free Audio Downloader
          </h1>
          <p className="text-gray-400 text-lg">
            Paste a TikTok link below and save the audio as MP3. No signup, no TikTok login, no app install.
          </p>
        </header>

        <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 mb-8">
          <p className="text-lg text-green-400 font-semibold">
            Short answer: paste your link, click Download Video, then pick the audio option in the format list. The MP3 is extracted from the video's original audio track at source quality.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Last verified: September 2026 · Tested on iPhone, Android, and PC · <a href="/blog/how-we-test" className="text-red-500 underline">How we test</a>
          </p>
        </div>

        <HomeClient />

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">How to Convert TikTok to MP3 (Step by Step)</h2>
          <ol className="space-y-3 text-gray-300">
            <li><strong>1. Copy the TikTok link</strong> — in the TikTok app, tap Share → Copy Link on the video.</li>
            <li><strong>2. Paste it above</strong> — drop the link in the input box and click Download Video.</li>
            <li><strong>3. Pick the audio format</strong> — in the format list, choose the audio / MP3 option.</li>
            <li><strong>4. Download</strong> — the MP3 saves to your device. On iPhone it lands in the Files app.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Common Uses (and One Rule)</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Saving the sound from <strong>your own videos</strong> for editing or repurposing</li>
            <li>• Keeping offline copies of audio you have permission to use</li>
            <li>• Grabbing a voiceover or narration track for a project you're authorized to work on</li>
          </ul>
          <p className="text-gray-500 text-sm mt-4">
            The one rule: only download audio you own or have permission to use. Republishing someone else's music or sounds without permission can violate copyright.
          </p>
        </section>

        <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold mb-4">Related Guides</h3>
          <div className="space-y-3">
            <a href="/blog/download-tiktok-sounds" className="block text-red-500 hover:text-red-400">How to Download TikTok Sounds (Full Guide) →</a>
            <a href="/tiktok-photo-downloader" className="block text-red-500 hover:text-red-400">TikTok Photo Downloader →</a>
            <a href="/blog/best-tiktok-downloaders" className="block text-red-500 hover:text-red-400">5 Best TikTok Downloaders (2026 Tested) →</a>
            <a href="/" className="block text-red-500 hover:text-red-400">TikTok Video Downloader (Home) →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
