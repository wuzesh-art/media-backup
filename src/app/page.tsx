/* eslint-disable react/no-unescaped-entities */

import { HomeClient } from "@/components/HomeClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
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
        {/* Hero Section - 重定位 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Download and Back Up Your Own TikTok Videos Without Watermark
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

        {/* Trust Signals - 真实可信 */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-3">
            Built for creators who want to back up their own TikTok content.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500 text-sm">
            <span className="flex items-center gap-1">✓ No signup</span>
            <span className="flex items-center gap-1">✓ No browser extension</span>
            <span className="flex items-center gap-1">✓ HTTPS secure</span>
            <span className="flex items-center gap-1">✓ Files deleted after processing</span>
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
              <p className="text-gray-400 mt-2 text-sm">Yes, we access the original video file before TikTok adds the watermark overlay. This is ideal for backing up your own content.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Is it safe to use?</summary>
              <p className="text-gray-400 mt-2 text-sm">No signup required, no personal data stored. Videos are processed server-side and deleted immediately after download.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Can I download other people's videos?</summary>
              <p className="text-gray-400 mt-2 text-sm">Technically possible for public videos, but we strongly recommend only downloading content you own or have permission to use. Respect creators' rights.</p>
            </details>
          </div>
        </div>

        {/* Recommended Reading - 6 cards */}
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
            <a href="/blog/does-tiktok-notify-when-you-download" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">Does TikTok Notify When You Download?</h3>
              <p className="text-gray-400 text-sm">Privacy guide: what TikTok tracks and what it doesn't.</p>
            </a>
            <a href="/blog/tiktok-downloader-statistics-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-colors block">
              <h3 className="font-semibold mb-2">TikTok Download Trends in 2026</h3>
              <p className="text-gray-400 text-sm">Industry data on creator backup habits and platform growth.</p>
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
        <p>short.videodownloaderai.com — Free TikTok Video Backup Tool</p>
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
