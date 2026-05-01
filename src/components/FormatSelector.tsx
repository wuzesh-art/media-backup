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
    isProgressive?: boolean;
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

  const { platform, title, author, duration, thumbnail, formats } = videoData;
  const color = PLATFORM_COLORS[platform] || "#00F2EA";

  // 显示所有格式，不过滤
  const videoFormats = formats;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            Select Format
          </DialogTitle>
        </DialogHeader>

        {/* Video Info */}
        <div className="flex gap-4 mb-4">
          {thumbnail && (
            <div className="relative w-32 h-24 rounded-lg overflow-hidden shrink-0">
              <Image src={thumbnail} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{title}</h3>
            <p className="text-sm text-gray-400">{author}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-1 rounded bg-zinc-800 capitalize">{platform}</span>
              <span className="text-xs text-gray-400">{duration}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "video" ? "bg-white text-black" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            <Video className="w-4 h-4" /> Video
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "audio" ? "bg-white text-black" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            <Music className="w-4 h-4" /> Audio
          </button>
        </div>

        {/* Format List */}
        {videoFormats.length === 0 ? (
          <div className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-lg text-gray-400">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span>No video formats available</span>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {videoFormats.map((format) => (
              <button
                key={format.formatId}
                onClick={() => onSelect(format.formatId)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  selectedFormat === format.formatId
                    ? "border-red-500 bg-red-500/10"
                    : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-700 flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm">{format.quality}</p>
                    <p className="text-xs text-gray-400">{format.fileSizeApprox} • {format.mimeType}</p>
                  </div>
                </div>
                {selectedFormat === format.formatId && (
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onStart}
            disabled={!selectedFormat}
            className="flex-1 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Backup
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
