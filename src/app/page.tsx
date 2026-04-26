import { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";
import { HowToSteps } from "@/components/HowToSteps";
import { PlatformIcons } from "@/components/PlatformIcons";

export const metadata: Metadata = {
  title: "MediaBackup Pro - Universal Video Backup & Converter",
  description:
    "Free online tool to backup videos from YouTube, TikTok, Instagram, Twitter and more. Convert to MP4/MP3 in HD quality. No signup.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "MediaBackup Pro",
            url: "https://mediabackup.io",
            description:
              "Free online tool to backup videos from YouTube, TikTok, Instagram, Twitter and more.",
          }),
        }}
      />

      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Universal Video Backup
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Backup videos from YouTube, TikTok, Instagram, Twitter, Facebook, Vimeo, Dailymotion & Reddit. 
            HD quality. No signup required.
          </p>

          <HomeClient />

          <div className="mt-8">
            <PlatformIcons />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>
          <HowToSteps />
        </div>
      </section>

      <section className="py-16 px-4 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Platform Support</h3>
            <p className="text-zinc-400 text-sm">Works with 8 major platforms including YouTube, TikTok, Instagram, and Twitter.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">HD to 4K Quality</h3>
            <p className="text-zinc-400 text-sm">Download videos in the highest available resolution up to 4K.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">MP4 / MP3 / WebM</h3>
            <p className="text-zinc-400 text-sm">Choose your preferred format for video or audio-only extraction.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                Is this tool free?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-4 pb-4 text-zinc-400 text-sm">Yes, MediaBackup Pro is completely free to use. No registration or credit card required.</p>
            </details>

            <details className="group bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                Which platforms are supported?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-4 pb-4 text-zinc-400 text-sm">We currently support YouTube, TikTok, Instagram, Twitter/X, Facebook, Vimeo, Dailymotion, and Reddit.</p>
            </details>

            <details className="group bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                What formats can I download?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-4 pb-4 text-zinc-400 text-sm">You can download videos in MP4 and WebM formats, or extract audio as MP3/M4A in various bitrates.</p>
            </details>

            <details className="group bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                Is it legal to backup online videos?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-4 pb-4 text-zinc-400 text-sm">Backing up your own content is generally legal. Downloading others&apos; copyrighted content without permission may violate platform Terms of Service. Always comply with local laws.</p>
            </details>

            <details className="group bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                Do I need to install any software?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-4 pb-4 text-zinc-400 text-sm">No. MediaBackup Pro works entirely in your web browser. No downloads or installations needed.</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 MediaBackup Pro. For personal backup use only.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="/dmca" className="text-zinc-400 hover:text-white transition-colors">DMCA</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
