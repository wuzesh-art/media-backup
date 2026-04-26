"use client";

import { Download, Play, X, CheckCircle2 } from "lucide-react";

interface StreamData {
  directUrl: string;
  filename: string;
  contentType: string;
  platform: string;
}

interface DownloadManagerProps {
  isOpen: boolean;
  progress: number;
  stage: string;
  videoTitle: string;
  streamData: StreamData | null;
  onDownload: () => void;
  onPlay: () => void;
  onClose: () => void;
}

export function DownloadManager({
  isOpen, progress, stage, videoTitle, streamData, onDownload, onPlay, onClose,
}: DownloadManagerProps) {
  if (!isOpen) return null;
  const isComplete = progress >= 100 && streamData;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{isComplete ? "Ready!" : "Processing"}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>

        {videoTitle && <p className="text-zinc-400 text-sm line-clamp-1">{videoTitle}</p>}

        {!isComplete && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">{stage}</span>
              <span className="text-white font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {isComplete && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-green-400">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Your file is ready</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={onDownload} className="flex items-center justify-center gap-2 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                <Download className="w-4 h-4" />Download
              </button>
              <button onClick={onPlay} className="flex items-center justify-center gap-2 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700">
                <Play className="w-4 h-4" />Play Now
              </button>
            </div>
            <p className="text-zinc-500 text-xs text-center">On iOS? Tap Download then use Share → Save to Files</p>
          </div>
        )}
      </div>
    </div>
  );
}
