"use client";

import { useState, useEffect } from "react";
import { UrlInput } from "./UrlInput";
import { FormatSelector } from "./FormatSelector";
import { DownloadManager } from "./DownloadManager";
import { VideoPlayer } from "./VideoPlayer";
import { RecentBackups } from "./RecentBackups";
import { Loader2, AlertCircle } from "lucide-react";

interface VideoData {
  platform: string;
  title: string;
  author: string;
  duration: string;
  thumbnail: string;
  originalUrl: string;
  formats: Array<{
    formatId: string;
    quality: string;
    mimeType: string;
    hasAudio: boolean;
    fileSizeApprox: string;
    isProgressive?: boolean;
  }>;
}

interface StreamData {
  directUrl: string;
  filename: string;
  contentType: string;
  platform: string;
}

export function HomeClient() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStage, setDownloadStage] = useState("");
  const [streamData, setStreamData] = useState<StreamData | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [recentBackups, setRecentBackups] = useState<Array<{
    title: string;
    platform: string;
    thumbnail: string;
    format: string;
    date: string;
  }>>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recent_backups");
      if (stored) setRecentBackups(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const saveToRecent = (data: VideoData, format: string) => {
    try {
      const item = {
        title: data.title,
        platform: data.platform,
        thumbnail: data.thumbnail,
        format,
        date: new Date().toISOString(),
      };
      const stored = localStorage.getItem("recent_backups");
      const existing = stored ? JSON.parse(stored) : [];
      const updated = [item, ...existing].slice(0, 5);
      localStorage.setItem("recent_backups", JSON.stringify(updated));
      setRecentBackups(updated);
    } catch {
      // ignore
    }
  };

  const handleAnalyze = async () => {
    setError("");
    setVideoData(null);
    setStreamData(null);

    if (!url.trim()) {
      setError("Please enter a video URL.");
      return;
    }

    const supported = [
      "youtube.com", "youtu.be", "tiktok.com", "instagram.com",
      "twitter.com", "x.com", "facebook.com", "fb.watch",
      "vimeo.com", "dailymotion.com", "reddit.com",
    ];
    const isValid = supported.some((domain) => url.includes(domain));
    if (!isValid) {
      setError("Please enter a valid video URL from supported platforms.");
      return;
    }

    setIsAnalyzing(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const contentType = res.headers.get("Content-Type") || "";
      if (contentType.includes("video") || contentType.includes("octet-stream")) {
        throw new Error("Server returned a file instead of JSON. Please try again.");
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setVideoData(data);
      setIsSelectorOpen(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to analyze video";
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleStartBackup = async () => {
    if (!selectedFormat || !videoData) return;
    setIsSelectorOpen(false);
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadStage("Preparing download...");

    try {
      const res = await fetch("/api/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: videoData.originalUrl,
          formatId: selectedFormat,
        }),
      });

      const contentType = res.headers.get("Content-Type") || "";

      // 如果返回 JSON（错误信息或直链）
      if (contentType.includes("application/json")) {
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || "Download failed");
        }
        setStreamData(data);
        setDownloadProgress(100);
        setDownloadStage("Ready!");
        const selectedQuality = videoData.formats.find(f => f.formatId === selectedFormat)?.quality || selectedFormat;
        saveToRecent(videoData, selectedQuality);
        return;
      }

      // 如果返回二进制文件流（MP4）
      if (contentType.includes("video") || contentType.includes("octet-stream")) {
        const blob = await res.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        const disposition = res.headers.get("Content-Disposition");
        let filename = "video.mp4";
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) filename = match[1];
        }
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
        setDownloadProgress(100);
        setDownloadStage("Downloaded!");
        const selectedQuality = videoData.formats.find(f => f.formatId === selectedFormat)?.quality || selectedFormat;
        saveToRecent(videoData, selectedQuality);
        return;
      }

      throw new Error("Unknown response format from server");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Download failed";
      setError(message);
      setIsDownloading(false);
    }
  };

  const handleDownload = () => {
    if (!streamData) return;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (isIOS) {
      window.open(streamData.directUrl, "_blank");
    } else {
      const a = document.createElement("a");
      a.href = streamData.directUrl;
      a.download = streamData.filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handlePlay = () => {
    setIsPlayerOpen(true);
  };

  const clearError = () => setError("");

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {error && (
        <div className="mb-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-red-200 text-sm">{error}</p>
            <button onClick={clearError} className="text-red-400 text-xs mt-1 hover:text-red-300 underline">Dismiss</button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-8">
        <UrlInput value={url} onChange={(v) => { setUrl(v); clearError(); }} error={error ? "" : undefined} />
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full h-14 bg-red-600 hover:bg-red-500 text-white font-semibold text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <><Loader2 className="w-5 h-5 animate-spin" />Analyzing...</>
          ) : (
            "Analyze & Backup"
          )}
        </button>
      </div>

      {recentBackups.length > 0 && (
        <div className="mt-8">
          <RecentBackups items={recentBackups} />
        </div>
      )}

      <FormatSelector
        open={isSelectorOpen}
        onOpenChange={setIsSelectorOpen}
        videoData={videoData}
        selectedFormat={selectedFormat}
        onSelect={setSelectedFormat}
        onStart={handleStartBackup}
      />

      <DownloadManager
        isOpen={isDownloading}
        progress={downloadProgress}
        stage={downloadStage}
        videoTitle={videoData?.title || ""}
        streamData={streamData}
        onDownload={handleDownload}
        onPlay={handlePlay}
        onClose={() => { setIsDownloading(false); setStreamData(null); }}
      />

      <VideoPlayer
        open={isPlayerOpen}
        onOpenChange={setIsPlayerOpen}
        streamData={streamData}
      />
    </div>
  );
}
