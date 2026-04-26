"use client";

import { X } from "lucide-react";

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const SUPPORTED_DOMAINS = [
  "youtube.com", "youtu.be", "tiktok.com", "instagram.com",
  "twitter.com", "x.com", "facebook.com", "fb.watch",
  "vimeo.com", "dailymotion.com", "reddit.com",
];

function isValidUrl(url: string): boolean {
  if (!url.trim()) return true;
  return SUPPORTED_DOMAINS.some((domain) => url.includes(domain));
}

export function UrlInput({ value, onChange, error }: UrlInputProps) {
  const showError = !!error;

  return (
    <div className="w-full">
      <div
        className={`relative flex items-center bg-zinc-900 border rounded-xl transition-colors ${
          showError
            ? "border-red-500"
            : value && isValidUrl(value)
            ? "border-zinc-500"
            : "border-zinc-700 focus-within:border-white"
        }`}
      >
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste video link from YouTube, TikTok, Instagram, Twitter, Facebook, Vimeo, Dailymotion, Reddit..."
          className="w-full h-14 md:h-16 bg-transparent text-white placeholder-zinc-500 px-4 pr-12 text-base md:text-lg outline-none rounded-xl"
          aria-label="Video URL input"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 p-1 text-zinc-500 hover:text-white transition-colors"
            aria-label="Clear input"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {showError && (
        <p className="mt-2 text-red-400 text-sm text-center">{error}</p>
      )}
    </div>
  );
}
