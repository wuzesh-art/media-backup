/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Test Our Guides and Tools | VideoDownloaderAI",
  description: "How we verify every claim on this site: test devices, accounts, dates, and update policy.",
};

export default function HowWeTestPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">How We Test</span>
        </nav>

        <h1 className="text-4xl font-bold mb-6">How We Test</h1>

        <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 mb-8">
          <p className="text-lg text-green-400 font-semibold">
            Short answer: Every guide on this site is verified with real devices and real TikTok accounts before publication. We re-test core features when TikTok updates its app, and every guide shows a "Last verified" date.
          </p>
        </div>

        <section className="mb-12 space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-500">Our Test Setup</h2>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              <li>Devices: iPhone (Safari), Android (Chrome), Windows PC (Chrome), Mac (Chrome)</li>
              <li>Accounts: two separate TikTok test accounts — one public, one private</li>
              <li>Method: for privacy claims (e.g. "does TikTok notify screenshots"), account A performs the action and we check account B for any notification</li>
              <li>For download guides: we run the full flow end-to-end and verify the saved file's resolution and playability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-500">Our Update Policy</h2>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              <li>Core download functionality: re-tested weekly</li>
              <li>Privacy-related claims: re-tested after major TikTok app updates</li>
              <li>Each guide displays a "Last verified" date — if you find something outdated, email us and we will re-test and correct it</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-500">What We Don't Claim</h2>
            <p className="text-gray-400">
              We do not claim features we haven't tested. We do not guarantee that TikTok's behavior will never change — platforms update their features, and our guides reflect what we verified on the stated date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-500">Corrections</h2>
            <p className="text-gray-400">
              Found an error? Email <strong>support@videodownloaderai.com</strong> with the page URL and what's wrong. We re-test and correct factual errors, and update the "Last verified" date.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
