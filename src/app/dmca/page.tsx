/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA & Copyright Policy - VideoDownloaderAI",
  description: "DMCA and copyright policy for VideoDownloaderAI. How to report infringement and our stance on content ownership.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">DMCA</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">DMCA & Copyright Policy</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Our Stance</h2>
            <p>
              VideoDownloaderAI respects intellectual property rights and expects users to do the same. This tool is designed to help creators <strong>back up their own content</strong>. We do not encourage or condone downloading copyrighted material without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Content Ownership</h2>
            <p>
              All videos on TikTok are owned by their respective creators or rights holders. Users of this tool are solely responsible for ensuring they have the right to download, save, or repost any content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Storage, No Hosting</h2>
            <p>
              We do not host, store, or cache any video files on our servers long-term. All content is processed temporarily and deleted immediately after the user completes their download. We do not maintain a library of downloadable content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Reporting Copyright Infringement</h2>
            <p className="mb-4">
              If you believe someone is using this tool to infringe your copyright, please send a DMCA notice to:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-4">
              <p className="text-red-400 font-semibold mb-2">dmca@videodownloaderai.com</p>
              <p className="text-gray-400 text-sm">Your notice must include:</p>
              <ul className="text-gray-400 text-sm list-disc list-inside mt-2 space-y-1">
                <li>Your physical or electronic signature</li>
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Your contact information (address, phone, email)</li>
                <li>A statement that you have a good faith belief the use is not authorized</li>
                <li>A statement that the information is accurate, under penalty of perjury</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Action Upon Notice</h2>
            <p>
              Upon receiving a valid DMCA notice, we will promptly investigate and take appropriate action, which may include blocking access to specific URLs or terminating access for repeat infringers.
            </p>
          </section>

          <div className="mt-8 text-center">
            <a href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
