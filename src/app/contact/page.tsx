/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VideoDownloaderAI - Support & Inquiries",
  description: "Contact the VideoDownloaderAI team for support, feature requests, or business inquiries.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">Contact</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Support</h2>
            <p className="mb-2">For technical issues, bug reports, or usage questions:</p>
            <p className="text-red-400 font-semibold">support@videodownloaderai.com</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Feature Requests</h2>
            <p className="mb-2">Want batch download, higher resolution, or support for other platforms?</p>
            <p className="text-gray-400 text-sm">Email us — we read every message and prioritize based on demand.</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Business Inquiries</h2>
            <p className="mb-2">For partnerships, API access, or media inquiries:</p>
            <p className="text-red-400 font-semibold">hello@videodownloaderai.com</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Response Time</h2>
            <p className="text-gray-400 text-sm">We typically respond within 24-48 hours. We're a small team, so please be patient.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
