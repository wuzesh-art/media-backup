/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Watermark Remover – Remove Watermark Free Online | 2026",
  description:
    "Paste a TikTok link to remove the watermark and download your own video in HD MP4. Free, no signup, no app install. Works on iPhone, Android, and PC.",
  keywords: [
    "tiktok watermark remover",
    "remove tiktok watermark free online",
    "tiktok video downloader without watermark",
    "download tiktok without watermark",
    "free watermark remover",
  ],
  metadataBase: new URL("https://short.videodownloaderai.com"),
  openGraph: {
    title: "TikTok Watermark Remover – Remove Watermark Free Online",
    description: "Paste a link. Download HD MP4 without watermark. Free, no signup.",
    url: "https://short.videodownloaderai.com/tiktok-watermark-remover",
    type: "website",
  },
};

export default function WatermarkRemoverPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Remove TikTok Watermark Online",
    description: "Paste a TikTok video link to download the original file without watermark.",
    step: [
      {
        "@type": "HowToStep",
        name: "Copy TikTok Link",
        text: "Open TikTok, tap Share, then Copy Link.",
      },
      {
        "@type": "HowToStep",
        name: "Paste and Analyze",
        text: "Paste the link into the tool and click Analyze.",
      },
      {
        "@type": "HowToStep",
        name: "Download Clean MP4",
        text: "Select HD resolution and download the watermark-free MP4.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">TikTok Watermark Remover</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          TikTok Watermark Remover
        </h1>
        <p className="text-xl text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Paste a TikTok link to download your own video without watermark. HD MP4, free, no signup.
        </p>

        {/* 工具入口 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Paste TikTok link here..."
              className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Remove Watermark
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">✅ No signup</span>
            <span className="flex items-center gap-2">✅ HD MP4</span>
            <span className="flex items-center gap-2">✅ iPhone & Android</span>
            <span className="flex items-center gap-2">✅ No app install</span>
          </div>
          <p className="text-xs text-gray-600 text-center mt-4">
            Only download videos you own or have permission to use.
          </p>
        </div>

        {/* 快速说明 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="text-red-500 text-2xl mb-3">1</div>
            <h3 className="font-bold mb-2">Copy Link</h3>
            <p className="text-gray-400 text-sm">Open TikTok, tap Share → Copy Link. Any public video works.</p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="text-red-500 text-2xl mb-3">2</div>
            <h3 className="font-bold mb-2">Paste & Analyze</h3>
            <p className="text-gray-400 text-sm">Paste the link above. Our server fetches the original file before TikTok adds the watermark.</p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="text-red-500 text-2xl mb-3">3</div>
            <h3 className="font-bold mb-2">Download HD</h3>
            <p className="text-gray-400 text-sm">Select 1024p HD. The MP4 has no watermark, no username, no logo.</p>
          </div>
        </div>

        {/* 有链接 vs 没链接 分流 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Do You Have the TikTok Link?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/10 border border-green-800/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">✅ I have the link</h4>
              <p className="text-gray-400 text-sm mb-3">Best case. Paste it above — we download the original file before the watermark is applied. 1:1 quality.</p>
              <a href="#top" className="text-red-500 text-sm underline">Use the tool above →</a>
            </div>
            <div className="bg-yellow-900/10 border border-yellow-800/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">⚠️ I only have a saved video</h4>
              <p className="text-gray-400 text-sm mb-3">The watermark is already burned in. You can crop it out, but you'll lose part of the frame.</p>
              <a href="/blog/remove-tiktok-watermark-without-link" className="text-red-500 text-sm underline">See options for saved videos →</a>
            </div>
          </div>
        </div>

        {/* 对比表 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Link-Based vs Crop vs AI Remover</h2>
          <table className="w-full text-left border border-gray-800 rounded-xl">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-4 border-b border-gray-800">Method</th>
                <th className="p-4 border-b border-gray-800">Quality</th>
                <th className="p-4 border-b border-gray-800">Speed</th>
                <th className="p-4 border-b border-gray-800">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-gray-800 bg-green-900/5">
                <td className="p-4 font-semibold text-white">Link-based download</td>
                <td className="p-4 text-green-400">1024p HD (original)</td>
                <td className="p-4 text-green-400">10 seconds</td>
                <td className="p-4">Best overall</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold text-white">Crop with Photos app</td>
                <td className="p-4 text-yellow-400">Loses frame</td>
                <td className="p-4 text-yellow-400">30 seconds</td>
                <td className="p-4">Saved videos only</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">AI watermark remover</td>
                <td className="p-4 text-yellow-400">Inconsistent</td>
                <td className="p-4 text-yellow-400">1-2 minutes</td>
                <td className="p-4">Experimental</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Is this really free?</summary>
              <p className="text-gray-400 mt-2 text-sm">Yes. No hidden fees, no credit card, no premium tier. We may add optional Pro features in the future, but core downloads remain free.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Does TikTok know I downloaded the video?</summary>
              <p className="text-gray-400 mt-2 text-sm">No. TikTok does not notify creators when their public videos are downloaded via third-party tools. The download happens on our server, not your TikTok app.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Can I remove the watermark from someone else's video?</summary>
              <p className="text-gray-400 mt-2 text-sm">Technically yes for public videos, but we strongly encourage only downloading content you own or have explicit permission to use. Respect creators' rights.</p>
            </details>
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Why is my downloaded video still blurry?</summary>
              <p className="text-gray-400 mt-2 text-sm">Usually because the creator uploaded in low resolution, or you selected 720p instead of 1024p. <a href="/blog/tiktok-video-blurry-fix" className="text-red-500 underline">See 5 fixes →</a></p>
            </details>
          </div>
        </div>

        {/* 相关文章 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold mb-4">Detailed Guides</h3>
          <div className="space-y-3">
            <a href="/blog/remove-tiktok-watermark" className="block text-red-500 hover:text-red-400">How to Remove TikTok Watermark: 5 Methods →</a>
            <a href="/blog/remove-tiktok-watermark-without-link" className="block text-red-500 hover:text-red-400">Remove Watermark Without Link →</a>
            <a href="/blog/save-tiktok-to-iphone-camera-roll" className="block text-red-500 hover:text-red-400">iPhone: Save to Camera Roll →</a>
            <a href="/blog/download-tiktok-videos-android" className="block text-red-500 hover:text-red-400">Android Download Guide →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
