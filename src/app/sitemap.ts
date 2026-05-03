import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.videodownloaderai.com";
  
  const routes = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/how-to-download-tiktok-videos", priority: 0.8, freq: "monthly" as const },
    { path: "/faq", priority: 0.6, freq: "monthly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/blog/how-to-download-tiktok-without-watermark", priority: 0.7, freq: "monthly" as const },
    { path: "/blog/remove-tiktok-watermark", priority: 0.7, freq: "monthly" as const },
    { path: "/blog/tiktok-downloader-statistics-2026", priority: 0.7, freq: "monthly" as const },
    { path: "/blog/how-to-download-tiktok-videos-on-pc", priority: 0.7, freq: "monthly" as const },
    { path: "/blog/does-tiktok-notify-when-you-download", priority: 0.7, freq: "monthly" as const },
    { path: "/blog/how-to-download-tiktok-videos-complete-guide", priority: 0.8, freq: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
