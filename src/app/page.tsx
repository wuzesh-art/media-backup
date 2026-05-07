import { HomeClient } from "@/components/HomeClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header / Nav */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center" aria-label="Main navigation">
        <a href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors px-3 py-3 min-h-[48px] flex items-center">
            VideoDownloderAI
          </a>
          <div className="flex gap-4">
            <a 
              href="/how-to-download-tiktok-videos" 
              className="text-gray-400 hover:text-white transition-colors px-3 py-2 min-h-[48px] flex items-center"
            >
              Guide
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            TikTok Video Downloader
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Download TikTok videos without watermark. HD quality, MP4 format. No signup required.
          </p>
          <p className="text-sm text-gray-400">
            YouTube, Instagram, Twitter, and Vimeo support coming soon.
          </p>
        </div>

        {/* Main Tool */}
        <HomeClient />

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Trusted by <span className="text-white font-semibold">10,000+</span> users worldwide
          </p>
          <div className="flex justify-center gap-2 mt-4 text-yellow-500 text-2xl">
            ★★★★★ <span className="text-gray-400 text-base ml-2">4.8/5</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="font-semibold text-lg mb-2">No Watermark</h3>
              <p className="text-gray-400 text-sm">Download clean TikTok videos without the annoying watermark</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-semibold text-lg mb-2">HD Quality</h3>
              <p className="text-gray-400 text-sm">Up to 1024p resolution in MP4 format for best viewing</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">No Signup</h3>
              <p className="text-gray-400 text-sm">No account required. Paste link and download instantly</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-lg mb-2">Mobile Friendly</h3>
              <p className="text-gray-400 text-sm">Works perfectly on iPhone Safari and Android Chrome</p>
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
              <p className="text-gray-400 mt-2 text-sm">Yes, we download the original video file before TikTok adds the watermark overlay.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Is it safe to use?</summary>
              <p className="text-gray-400 mt-2 text-sm">No signup required, no personal data stored. Videos are processed server-side and deleted immediately after download.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Why is YouTube/Instagram not working?</summary>
              <p className="text-gray-400 mt-2 text-sm">Currently only TikTok is fully supported. Other platforms are coming soon due to their anti-bot protections.</p>
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
              <p className="text-gray-400 text-sm">Compare cropping, online tools, and editing software. Best method wins.</p>
            </a>
          </div>
        </div>

        {/* Internal Links - 修复 Tap Target */}
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
        <p>VideoDownloderAI.com — Free TikTok Video Downloader</p>
        <p className="mt-2">Not affiliated with TikTok. For personal use only.</p>
      </footer>
    </div>
  );
}
