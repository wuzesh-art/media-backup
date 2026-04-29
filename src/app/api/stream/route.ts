import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.YTDLP_BACKEND_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, formatId } = body;

    if (!url || !formatId) {
      return NextResponse.json(
        { success: false, error: "Missing URL or format ID" },
        { status: 400 }
      );
    }

    if (!BACKEND_URL) {
      return NextResponse.json(
        { success: false, error: "Backend not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(`${BACKEND_URL}/download`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, formatId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { success: false, error: `Backend Error ${response.status}: ${errorText}` },
        { status: 502 }
      );
    }

    // 透传文件流
    const contentType = response.headers.get("Content-Type") || "video/mp4";
    const contentDisposition = response.headers.get("Content-Disposition") || 'attachment; filename="video.mp4"';
    
    return new NextResponse(response.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: `Server Crash: ${message}` },
      { status: 500 }
    );
  }
}
