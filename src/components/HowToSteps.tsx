import { Link2, Settings, Download } from "lucide-react";

const steps = [
  { icon: Link2, title: "Paste Link", description: "Copy and paste your video URL from any supported platform." },
  { icon: Settings, title: "Select Format", description: "Choose your preferred resolution and format (MP4, MP3, WebM)." },
  { icon: Download, title: "Download & Play", description: "Backup your video instantly. Play online or save to your device." },
];

export function HowToSteps() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-center gap-4 md:flex-col md:text-center md:max-w-xs">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0">
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{step.title}</h3>
              <p className="text-zinc-400 text-sm mt-1">{step.description}</p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden md:block text-zinc-700 text-2xl">→</div>
          )}
        </div>
      ))}
    </div>
  );
}
