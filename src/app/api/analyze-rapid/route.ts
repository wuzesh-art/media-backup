/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const platform = detectPlatform(url);
    if (!platform) {
      return NextResponse.json({ error: "Platform not supported" }, { status: 400 });
    }

    const rapidKey = process.env.RAPIDAPI_KEY;
    if (!rapidKey) {
      return NextResponse.json(
        { error: "RapidAPI key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://youtube-video-and-audio-download.p.rapidapi.com/details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": rapidKey,
          "X-RapidAPI-Host": "youtube-video-and-audio-download.p.rapidapi.com",
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

    const formats = (data.formats || []).map((f: any) => ({
      formatId: f.itag || f.quality || "unknown",
      quality: f.qualityLabel || f.quality || "Unknown",
      mimeType: f.mimeType?.split(";")[0] || "video/mp4",
      hasAudio: f.hasAudio !== false,
      fileSizeApprox: f.contentLength ? `${(parseInt(f.contentLength) / 1024 / 1024).toFixed(1)}MB` : "~Unknown",
    }));

    return NextResponse.json({
      platform,
      title: data.title || "Unknown",
      author: data.author || data.uploader || "Unknown",
      duration: data.duration || "Unknown",
      thumbnail: data.thumbnail || data.thumbnails?.[0]?.url || "",
      originalUrl: url,
      formats: formats.length > 0 ? formats : [
        { formatId: "18", quality: "360p", mimeType: "video/mp4", hasAudio: true, fileSizeApprox: "~Unknown" },
        { formatId: "22", quality: "720p", mimeType: "video/mp4", hasAudio: true, fileSizeApprox: "~Unknown" },
      ],
    });
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
