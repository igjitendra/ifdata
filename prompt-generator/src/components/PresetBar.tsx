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
}

export const PresetBar: React.FC<PresetBarProps> = ({ onSelectPreset, onSurpriseMe }) => {
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
    <div className="w-full py-3 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider flex-shrink-0">
            <span>Presets:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1">
            {/* Surprise Me Button */}
            <button
              type="button"
              onClick={onSurpriseMe}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-xs transition-all active:scale-95 flex-shrink-0"
              title="Randomize sensible features and styles"
            >
              <Dices className="w-3.5 h-3.5 animate-spin-hover" />
              <span>Surprise Me!</span>
            </button>

            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectPreset(p)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-red-400 dark:hover:border-red-500/60 hover:text-[#EF3035] dark:hover:text-red-400 transition-all flex-shrink-0 shadow-2xs active:scale-95"
              >
                {getIcon(p.icon)}
                <span>{p.name}</span>
                {p.badge && (
                  <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                    {p.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
