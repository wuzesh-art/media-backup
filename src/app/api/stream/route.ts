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

function sanitizeFilename(title: string): string {
  return title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5\-_\s]/g, "_").substring(0, 100);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, formatId, type } = body;

    if (!url || !formatId) {
      return NextResponse.json(
        { success: false, error: "Missing URL or format ID" },
        { status: 400 }
      );
    }

    const platform = detectPlatform(url);
    if (!platform) {
      return NextResponse.json(
        { success: false, error: "Platform not supported" },
        { status: 400 }
      );
    }

    let ytdl;
    try {
      ytdl = (await import("@distube/ytdl-core")).default;
    } catch {
      return NextResponse.json(
        { success: false, error: "Stream engine unavailable" },
        { status: 500 }
      );
    }

    try {
      const info = await ytdl.getInfo(url);
      const format = info.formats.find((f: any) => f.itag?.toString() === formatId || f.formatId === formatId);
      const selectedFormat = format || info.formats.find((f: any) => type === "audio" ? f.mimeType?.includes("audio") : f.hasVideo) || info.formats[0];

      if (!selectedFormat) {
        return NextResponse.json(
          { success: false, error: "No suitable format found" },
          { status: 404 }
        );
      }

      const title = info.videoDetails?.title || "video";
      const ext = type === "audio" ? "mp3" : "mp4";

      return NextResponse.json({
        success: true,
        directUrl: selectedFormat.url,
        filename: `${sanitizeFilename(title)}.${ext}`,
        contentType: selectedFormat.mimeType?.split(";")[0] || (type === "audio" ? "audio/mpeg" : "video/mp4"),
        platform,
        warning: info.videoDetails?.lengthSeconds && parseInt(info.videoDetails.lengthSeconds) > 300 ? "Large file" : undefined,
      });
    } catch (err: any) {
      return NextResponse.json(
        { success: false, error: err.message || "Failed to get stream URL" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
