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

    const rapidKey = process.env.RAPIDAPI_KEY;
    if (!rapidKey) {
      return NextResponse.json(
        { error: "RapidAPI key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://youtube-mp3-audio-video-downloader.p.rapidapi.com/get_direct_url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": rapidKey,
          "X-RapidAPI-Host": "youtube-mp3-audio-video-downloader.p.rapidapi.com",
        },
        body: JSON.stringify({ url }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "External API error. Please try again later." },
        { status: 502 }
      );
    }

    const data = await response.json();

    const formats = [
      { formatId: "18", quality: "360p", mimeType: "video/mp4", hasAudio: true, fileSizeApprox: "~Unknown" },
      { formatId: "22", quality: "720p", mimeType: "video/mp4", hasAudio: true, fileSizeApprox: "~Unknown" },
      { formatId: "137", quality: "1080p HD", mimeType: "video/mp4", hasAudio: true, fileSizeApprox: "~Unknown" },
    ];

    return NextResponse.json({
      platform,
      title: data.title || "Unknown",
      author: data.author || "Unknown",
      duration: data.duration || "Unknown",
      thumbnail: data.thumbnail || "",
      originalUrl: url,
      formats,
    });
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
