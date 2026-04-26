"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

interface StreamData {
  directUrl: string;
  filename: string;
  contentType: string;
  platform: string;
}

interface VideoPlayerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  streamData: StreamData | null;
}

export function VideoPlayer({ open, onOpenChange, streamData }: VideoPlayerProps) {
  if (!streamData) return null;
  const isAudio = streamData.contentType.includes("audio");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-white text-base">{streamData.filename}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          {isAudio ? (
            <div className="bg-zinc-800 rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-zinc-700 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <audio controls className="w-full" src={streamData.directUrl} />
            </div>
          ) : (
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video controls className="w-full h-full" src={streamData.directUrl} playsInline />
            </div>
          )}
          <div className="flex gap-3 mt-4">
            <a href={streamData.directUrl} download={streamData.filename} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
              <Download className="w-4 h-4" />Download File
            </a>
            <button onClick={() => onOpenChange(false)} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-700 transition-colors text-sm border border-zinc-700">
              <X className="w-4 h-4" />Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
