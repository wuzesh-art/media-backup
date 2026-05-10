/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VideoDownloaderAI - Creator Content Backup Tool",
  description: "Learn about VideoDownloaderAI, a free tool built by creators for creators to back up their own TikTok videos without watermark.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">About</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">About VideoDownloaderAI</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            VideoDownloaderAI is a free web tool built by a small two-person team in Changde, Hunan, China. We started this project in 2026 because we noticed a simple problem: <strong>creators don't have an easy way to back up their own TikTok content</strong>.
          </p>

          <p>
            If you spend hours creating short-form videos, those videos are your assets. But TikTok doesn't provide a one-click "export all" feature. And when you download directly from the app, it slaps a watermark on everything — which makes cross-posting to your own Instagram Reels or YouTube Shorts look unprofessional.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What We Believe</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Creators should own their content, not platforms.</li>
            <li>Backing up your own videos shouldn't require installing sketchy apps or creating accounts.</li>
            <li>Tools should be simple: paste a link, get a clean file.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Handle Data</h2>
          <p>
            We don't store your videos. We don't require login. We don't sell data. When you paste a TikTok link, our server fetches the video, processes it, and delivers it to your browser. The file is deleted from our server immediately after the transfer completes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Who This Is For</h2>
          <p>
            This tool is designed for:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Content creators who want to archive their own TikTok videos</li>
            <li>Social media managers who need clean copies for cross-platform posting</li>
            <li>Editors who need watermark-free source files for compilations</li>
          </ul>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mt-8">
            <h3 className="font-bold text-white mb-2">Compliance Note</h3>
            <p className="text-gray-400 text-sm">
              We strongly encourage users to only download content they own or have explicit permission to use. We are not affiliated with TikTok or ByteDance. This tool is for personal content backup only.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Try the Tool →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
