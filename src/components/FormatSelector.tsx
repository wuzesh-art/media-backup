"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Video, Music, AlertTriangle } from "lucide-react";
import Image from "next/image";

interface VideoData {
  platform: string;
  title: string;
  author: string;
  duration: string;
  thumbnail: string;
  formats: Array<{
    formatId: string;
    quality: string;
    mimeType: string;
    hasAudio: boolean;
    fileSizeApprox: string;
  }>;
}

const PLATFORM_COLORS: Record<string, string> = {
  youtube: "#FF0000",
  tiktok: "#00F2EA",
  instagram: "#E4405F",
  twitter: "#1DA1F2",
  facebook: "#1877F2",
  vimeo: "#1AB7EA",
  dailymotion: "#00AAFF",
  reddit: "#FF4500",
};

interface FormatSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoData: VideoData | null;
  selectedFormat: string;
  onSelect: (formatId: string) => void;
  onStart: () => void;
}

export function FormatSelector({
  open, onOpenChange, videoData, selectedFormat, onSelect, onStart,
}: FormatSelectorProps) {
  const [activeTab, setActiveTab] = useState<"video" | "audio">("video");

  if (!videoData) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl">
          <div className="space-y-4">
            <Skeleton className="h-40 w-full bg-zinc-800" />
            <Skeleton className="h-4 w-3/4 bg-zinc-800" />
            <Skeleton className="h-4 w-1/2 bg-zinc-800" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const videoFormats = videoData.formats.filter((f) => f.mimeType.includes("video"));
  const audioFormats = videoData.formats.filter((f) => f.mimeType.includes("audio"));
  const displayAudioFormats = audioFormats.length > 0 ? audioFormats : [
    { formatId: "audio-128", quality: "128kbps", mimeType: "audio/mp3", hasAudio: true, fileSizeApprox: "~5MB" },
    { formatId: "audio-256", quality: "256kbps", mimeType: "audio/mp3", hasAudio: true, fileSizeApprox: "~10MB" },
    { formatId: "audio-320", quality: "320kbps", mimeType: "audio/mp3", hasAudio: true, fileSizeApprox: "~15MB" },
  ];

  const isLongVideo = videoData.duration.includes(":") &&
    parseInt(videoData.duration.split(":")[0]) * 60 + parseInt(videoData.duration.split(":")[1]) > 300;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">Select Format</DialogTitle>
        </DialogHeader>

        {isLongVideo && (
          <div className="flex items-center gap-2 bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-3 mb-4">
            <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />
            <p className="text-yellow-200 text-sm">Videos longer than 5 minutes may take longer to process.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800">
              {videoData.thumbnail ? (
                <Image src={videoData.thumbnail} alt={videoData.title} fill className="object-cover" unoptimized />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500">No thumbnail</div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-white line-clamp-2">{videoData.title}</h3>
              <p className="text-zinc-400 text-sm mt-1">{videoData.author}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 rounded text-xs font-medium text-white" style={{ backgroundColor: PLATFORM_COLORS[videoData.platform] || "#666" }}>
                  {videoData.platform}
                </span>
                <span className="text-zinc-500 text-xs">{videoData.duration}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <button onClick={() => setActiveTab("video")} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "video" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                <Video className="w-4 h-4" />Video
              </button>
              <button onClick={() => setActiveTab("audio")} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "audio" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                <Music className="w-4 h-4" />Audio
              </button>
            </div>

            {activeTab === "video" && (
              <div className="space-y-2">
                {videoFormats.length > 0 ? videoFormats.map((format) => (
                  <label key={format.formatId} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${selectedFormat === format.formatId ? "border-white bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="format" value={format.formatId} checked={selectedFormat === format.formatId} onChange={() => onSelect(format.formatId)} className="w-4 h-4 accent-white" />
                      <div>
                        <p className="text-white text-sm font-medium">{format.quality}</p>
                        <p className="text-zinc-500 text-xs">{format.mimeType.split("/")[1]?.toUpperCase()}</p>
                      </div>
                    </div>
                    <span className="text-zinc-400 text-xs">{format.fileSizeApprox}</span>
                  </label>
                )) : <p className="text-zinc-500 text-sm text-center py-4">No video formats available</p>}
              </div>
            )}

            {activeTab === "audio" && (
              <div className="space-y-2">
                {displayAudioFormats.map((format) => (
                  <label key={format.formatId} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${selectedFormat === format.formatId ? "border-white bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="format" value={format.formatId} checked={selectedFormat === format.formatId} onChange={() => onSelect(format.formatId)} className="w-4 h-4 accent-white" />
                      <div>
                        <p className="text-white text-sm font-medium">{format.quality}</p>
                        <p className="text-zinc-500 text-xs">MP3</p>
                      </div>
                    </div>
                    <span className="text-zinc-400 text-xs">{format.fileSizeApprox}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-800">
          <button onClick={() => onOpenChange(false)} className="flex-1 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors text-sm font-medium">Cancel</button>
          <button onClick={onStart} disabled={!selectedFormat} className="flex-1 py-2.5 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold">Start Backup</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
