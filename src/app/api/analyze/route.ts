import { NextRequest, NextResponse } from "next/server";

const PLATFORM_PATTERNS = [
  { name: "youtube", hosts: ["youtube.com", "youtu.be"] },
  { name: "tiktok", hosts: ["tiktok.com"] },
  { name: "instagram", hosts: ["instagram.com"] },
  { name: "twitter", hosts: ["twitter.com", "x.com"] },
  { name: "facebook", hosts: ["facebook.com", "fb.watch"] },
  { name: "vimeo", hosts: ["vimeo.com"] },
  { name: "dailymotion", hosts: ["dailymotion.com"] },
  { name: "reddit", hosts: ["reddit.com"] },
];

function detectPlatform(url: string): string | null {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    for (const p of PLATFORM_PATTERNS) {
      if (p.hosts.some((h) => hostname.includes(h))) return p.name;
    }
  } catch {
    return null;
  }
  return null;
}

const rateLimit = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60000;
  const requests = rateLimit.get(ip) || [];
  const recent = requests.filter((t) => t > windowStart);
  rateLimit.set(ip, recent);
  return recent.length >= 5;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const platform = detectPlatform(url);
    if (!platform) {
      return NextResponse.json({ error: "Platform not supported" }, { status: 400 });
    }

    const requests = rateLimit.get(ip) || [];
    requests.push(Date.now());
    rateLimit.set(ip, requests);

    let ytdl;
    try {
      ytdl = (await import("@distube/ytdl-core")).default;
    } catch {
      return NextResponse.json(
        { error: "This platform is temporarily unsupported. Please try again later." },
        { status: 500 }
      );
    }

    try {
      const info = await ytdl.getInfo(url);
      const formats = info.formats
        .filter((f: any) => {
          const mime = f.mimeType || "";
          return mime.includes("video/mp4") || mime.includes("video/webm") || mime.includes("audio/mp4") || mime.includes("audio/webm");
        })
        .map((f: any) => ({
          formatId: f.itag?.toString() || f.formatId,
          quality: f.qualityLabel || (f.audioBitrate ? `${f.audioBitrate}kbps` : "audio only"),
          mimeType: f.mimeType?.split(";")[0] || "video/mp4",
          hasAudio: !!f.audioBitrate || f.hasAudio,
          fileSizeApprox: f.contentLength ? `${(parseInt(f.contentLength) / 1024 / 1024).toFixed(1)}MB` : "~Unknown",
        }));

      const qualityMap = new Map<string, any>();
      for (const f of formats) {
        const key = f.quality;
        const existing = qualityMap.get(key);
        if (!existing || (f.fileSizeApprox > existing.fileSizeApprox)) {
          qualityMap.set(key, f);
        }
      }

      const uniqueFormats = Array.from(qualityMap.values()).slice(0, 6);

      return NextResponse.json({
        platform,
        title: info.videoDetails?.title || "Unknown",
        author: info.videoDetails?.author?.name || info.videoDetails?.ownerChannelName || "Unknown",
        duration: info.videoDetails?.lengthSeconds
          ? `${Math.floor(parseInt(info.videoDetails.lengthSeconds) / 60)}:${(parseInt(info.videoDetails.lengthSeconds) % 60).toString().padStart(2, "0")}`
          : "Unknown",
        thumbnail: info.videoDetails?.thumbnails?.[0]?.url || "",
        originalUrl: url,
        formats: uniqueFormats,
      });
    } catch (err: any) {
      if (err.statusCode === 403) {
        return NextResponse.json({ error: "This video is private, age-restricted, or region-blocked." }, { status: 403 });
      }
      if (err.statusCode === 404) {
        return NextResponse.json({ error: "Video not found. It may have been deleted." }, { status: 404 });
      }
      return NextResponse.json(
        { error: "This platform is temporarily unsupported. Please try again later." },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}
