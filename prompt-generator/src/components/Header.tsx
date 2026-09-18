"use client";

import React from "react";
import Image from "next/image";
import { Moon, Sun, Layers, Star, Info, Bookmark, Sparkles } from "lucide-react";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  savedCount: number;
  onOpenFeatures: () => void;
  onOpenTemplates: () => void;
  onOpenSaved: () => void;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  savedCount,
  onOpenFeatures,
  onOpenTemplates,
  onOpenSaved,
  onOpenAbout,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#EF3035] via-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 flex-shrink-0 overflow-hidden ring-1 ring-white/20">
            <Image
              src="/logo.png"
              alt="InvoiceFine Logo"
              width={32}
              height={32}
              className="object-contain p-0.5"
              onError={(e) => {
                // If logo image fails, fallback to styled text icon
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-extrabold text-base tracking-tighter">IF</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white tracking-tight">
                InvoiceFine
              </h1>
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-red-100 dark:bg-red-950/80 text-[#EF3035] border border-red-200/80 dark:border-red-900/60 shadow-2xs">
                Studio
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block font-medium">
              Social Media Content &amp; AI Prompt Generator
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onOpenFeatures}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/80 transition-all active:scale-95 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden md:inline">Features</span>
          </button>

          <button
            type="button"
            onClick={onOpenTemplates}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/80 transition-all active:scale-95 cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden md:inline">Library</span>
          </button>

          <button
            type="button"
            onClick={onOpenSaved}
            className="relative inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/80 transition-all active:scale-95 cursor-pointer"
          >
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#EF3035] text-white text-[9px] font-extrabold flex items-center justify-center shadow-xs">
                {savedCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenAbout}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/80 transition-all active:scale-95 cursor-pointer"
            title="About InvoiceFine Prompt Studio"
          >
            <Info className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden lg:inline">Guide</span>
          </button>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5 sm:mx-1" />

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-zinc-200/60 dark:border-zinc-800 transition-all active:scale-90 cursor-pointer shadow-2xs"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
