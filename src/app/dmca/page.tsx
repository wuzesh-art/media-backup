export const metadata = {
  title: "DMCA Policy - MediaBackup Pro",
  description: "DMCA and copyright policy for MediaBackup Pro.",
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">DMCA / Copyright Policy</h1>
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>Last updated: April 26, 2026</p>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Our Position</h2>
            <p>MediaBackup Pro respects intellectual property rights. Our tool is designed for personal backup of content you own or have rights to use.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. No Content Hosting</h2>
            <p>We do not host, store, or distribute any video or audio content. Our service acts as a technical intermediary.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Reporting Copyright Infringement</h2>
            <p>If you believe content accessible through our service infringes your copyright, please send a notice to our designated agent.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Designated Agent</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-2">
              <p className="text-white font-medium">DMCA Agent</p>
              <p className="text-zinc-400">Email: dmca@mediabackup.io</p>
              <p className="text-zinc-400">Response time: Within 48 hours</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
