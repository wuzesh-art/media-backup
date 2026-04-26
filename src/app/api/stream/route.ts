import { NextRequest, NextResponse } from "next/server";

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

    const rapidKey = process.env.RAPIDAPI_KEY;
    if (!rapidKey) {
      return NextResponse.json(
        { success: false, error: "RapidAPI key not configured" },
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
        { success: false, error: "External API error" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      directUrl: data.direct_url || data.url || url,
      filename: `video_${Date.now()}.mp4`,
      contentType: type === "audio" ? "audio/mpeg" : "video/mp4",
      platform: "youtube",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
