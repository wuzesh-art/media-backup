import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - VideoDownloderAI",
  description: "Privacy policy for VideoDownloderAI TikTok video downloader.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>Last updated: May 7, 2026</p>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Do Not Collect</h2>
            <p>VideoDownloderAI is designed with privacy in mind. We do not require user registration, and we do not collect personal information such as your name, email address, or phone number.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Video URLs</h2>
            <p>When you use our service, the video URLs you submit are processed in real-time to retrieve video information. We do not store, log, or retain these URLs after the processing is complete.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. No Content Storage</h2>
            <p>We do not host, store, or cache any video or audio files on our servers. All content is streamed directly from the source platform to your device.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and Analytics</h2>
            <p>We use Google Analytics to understand website traffic and usage patterns. This data is anonymized and does not identify individual users.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>Our service interacts with third-party platforms solely to retrieve publicly available video information. We are not responsible for the privacy practices of these platforms.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
            <p>If you have any questions, please contact us at privacy@videodownloaderai.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
