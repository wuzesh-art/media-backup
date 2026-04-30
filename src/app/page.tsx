import { HomeClient } from "@/components/HomeClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            TikTok Video Downloader
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Download TikTok videos without watermark. HD quality, MP4 format. No signup required.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            YouTube, Instagram, Twitter, and Vimeo support coming soon.
          </p>
        </div>
        <HomeClient />
      </div>
    </main>
  );
}
