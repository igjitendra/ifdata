"use client";

import React from "react";
import Image from "next/image";
import { Moon, Sun, Layers, Star, Info, Bookmark, Sparkles, Download } from "lucide-react";

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
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <a
            href="https://ifprompt.vercel.app/"
            className="flex items-center gap-2.5 group"
            title="InvoiceFine Prompt Studio"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0 ring-1 ring-zinc-200 dark:ring-zinc-800 group-hover:ring-[#EF3035] transition-all">
              <Image
                src="/logo.png"
                alt="InvoiceFine Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-[#EF3035] transition-colors">
                  InvoiceFine
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-[#EF3035] text-white shadow-2xs">
                  STUDIO
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block font-medium">
                Social Media Content &amp; AI Prompt Generator
              </p>
            </div>
          </a>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Direct Downloads Link to GitHub Releases */}
          <a
            href="https://github.com/igjitendra/ifdata/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-bold rounded-xl text-[#EF3035] bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all cursor-pointer"
            title="Download InvoiceFine for Linux & Android"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Download App</span>
          </a>

          {/* Features Catalog Modal Button */}
          <button
            type="button"
            onClick={onOpenFeatures}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden md:inline">Features</span>
          </button>

          {/* Templates Library Modal Button */}
          <button
            type="button"
            onClick={onOpenTemplates}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden md:inline">Library</span>
          </button>

          {/* Saved Prompts Modal Button */}
          <button
            type="button"
            onClick={onOpenSaved}
            className="relative inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
          >
            <Star className="w-3.5 h-3.5 text-[#EF3035] fill-[#EF3035]/20" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#EF3035] text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                {savedCount}
              </span>
            )}
          </button>

          {/* Guide Modal Button */}
          <button
            type="button"
            onClick={onOpenAbout}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
            title="Guide & Documentation"
          >
            <Info className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden lg:inline">Guide</span>
          </button>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/igjitendra/ifdata"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
            title="View on GitHub"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-zinc-100" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900" />
            )}
            <span className="text-[11px] font-bold hidden xl:inline">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
