"use client";

import { useState } from "react";

const platforms = [
  { name: "YouTube", color: "#FF0000" },
  { name: "TikTok", color: "#00F2EA" },
  { name: "Instagram", color: "#E4405F" },
  { name: "Twitter/X", color: "#1DA1F2" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Vimeo", color: "#1AB7EA" },
  { name: "Dailymotion", color: "#00AAFF" },
  { name: "Reddit", color: "#FF4500" },
];

export function PlatformIcons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-zinc-500 text-sm">Supports 8 major platforms</p>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {platforms.map((p) => (
          <div
            key={p.name}
            onMouseEnter={() => setHovered(p.name)}
            onMouseLeave={() => setHovered(null)}
            className="relative"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-white transition-colors cursor-default">
              <span className="text-xs font-bold" style={{ color: p.color }}>
                {p.name.charAt(0)}
              </span>
            </div>
            {hovered === p.name && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-zinc-700 z-10">
                {p.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
