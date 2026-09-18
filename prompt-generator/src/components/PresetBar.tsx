"use client";

import React from "react";
import {
  Dices,
  Image as ImageIcon,
  Video,
  Layers,
  Sparkles,
  BookOpen,
  TrendingUp,
  PlayCircle,
  Download,
  Crown,
} from "lucide-react";
import { PRESETS } from "@/data/presets";
import { Preset } from "@/types";

interface PresetBarProps {
  onSelectPreset: (preset: Preset) => void;
  onSurpriseMe: () => void;
  activePresetId?: string;
}

export const PresetBar: React.FC<PresetBarProps> = ({
  onSelectPreset,
  onSurpriseMe,
  activePresetId,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Image":
        return <ImageIcon className="w-3.5 h-3.5" />;
      case "Video":
        return <Video className="w-3.5 h-3.5" />;
      case "Layers":
        return <Layers className="w-3.5 h-3.5" />;
      case "Sparkles":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "BookOpen":
        return <BookOpen className="w-3.5 h-3.5" />;
      case "TrendingUp":
        return <TrendingUp className="w-3.5 h-3.5" />;
      case "PlayCircle":
        return <PlayCircle className="w-3.5 h-3.5" />;
      case "Download":
        return <Download className="w-3.5 h-3.5" />;
      case "Crown":
        return <Crown className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full py-2.5 sm:py-3 border-b border-zinc-200/80 dark:border-zinc-850 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex-shrink-0">
            <Sparkles className="w-3 h-3 text-[#EF3035]" />
            <span className="hidden sm:inline">1-Click Presets:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-1 scroll-smooth">
            {/* Surprise Me Button with Glow */}
            <button
              type="button"
              onClick={onSurpriseMe}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-[#EF3035] text-white hover:opacity-95 shadow-xs shadow-orange-500/20 transition-all active:scale-95 flex-shrink-0 cursor-pointer"
              title="Randomize features and styles"
            >
              <Dices className="w-3.5 h-3.5 animate-spin-hover" />
              <span>Surprise Me!</span>
            </button>

            {/* Presets List */}
            {PRESETS.map((p) => {
              const isSelected = activePresetId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectPreset(p)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all flex-shrink-0 cursor-pointer active:scale-95 ${
                    isSelected
                      ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] shadow-xs shadow-red-500/10"
                      : "border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:border-red-400/80 dark:hover:border-red-500/50 hover:text-[#EF3035] dark:hover:text-red-400 shadow-2xs"
                  }`}
                >
                  <span className={isSelected ? "text-[#EF3035]" : "text-zinc-500 dark:text-zinc-400"}>
                    {getIcon(p.icon)}
                  </span>
                  <span>{p.name || p.title}</span>
                  {p.badge && (
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? "bg-[#EF3035] text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
