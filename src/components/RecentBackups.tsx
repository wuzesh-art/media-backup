"use client";

import { Clock, Trash2 } from "lucide-react";
import Image from "next/image";

interface BackupItem {
  title: string;
  platform: string;
  thumbnail: string;
  format: string;
  date: string;
}

interface RecentBackupsProps {
  items: BackupItem[];
}

const PLATFORM_COLORS: Record<string, string> = {
  youtube: "#FF0000", tiktok: "#00F2EA", instagram: "#E4405F",
  twitter: "#1DA1F2", facebook: "#1877F2", vimeo: "#1AB7EA",
  dailymotion: "#00AAFF", reddit: "#FF4500",
};

export function RecentBackups({ items }: RecentBackupsProps) {
  const handleClear = () => {
    localStorage.removeItem("recent_backups");
    window.location.reload();
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-zinc-400" />
          <h3 className="text-white font-medium text-sm">Recent Backups</h3>
        </div>
        <button onClick={handleClear} className="text-zinc-500 hover:text-red-400 transition-colors" title="Clear history">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
            <div className="relative w-12 h-8 rounded overflow-hidden bg-zinc-800 shrink-0">
              {item.thumbnail ? (
                <Image src={item.thumbnail} alt={item.title} fill className="object-cover" unoptimized />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs">{item.platform.charAt(0).toUpperCase()}</div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm truncate">{item.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS[item.platform] || "#666" }} />
                <span className="text-zinc-500 text-xs capitalize">{item.platform}</span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-zinc-500 text-xs">{item.format}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
