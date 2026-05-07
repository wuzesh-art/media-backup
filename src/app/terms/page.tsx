import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - VideoDownloderAI",
  description: "Terms of service for VideoDownloderAI TikTok video downloader.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>Last updated: May 7, 2026</p>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using VideoDownloderAI, you accept and agree to be bound by the terms of this agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Personal Use Only</h2>
            <p>This tool is intended solely for backing up your own content or public domain media. You are responsible for complying with the Terms of Service of each platform and applicable copyright laws.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h2>
            <p>VideoDownloderAI is provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Governing Law</h2>
            <p>These terms are governed by the laws of the United States.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
