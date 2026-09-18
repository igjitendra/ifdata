"use client";

import React from "react";
import { X, ShieldAlert, Sparkles, ExternalLink, CheckCircle } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EF3035]/10 flex items-center justify-center text-[#EF3035]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                About InvoiceFine Social Media Prompt Generator
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Official marketing and AI prompt architect for InvoiceFine.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              What This Tool Does
            </h3>
            <p>
              The **InvoiceFine Social Media Prompt Generator** transforms any confirmed InvoiceFine software capability into a complete, multi-format social media content package. It outputs production-ready AI image prompts (Midjourney/FLUX/DALL-E), AI video prompts (Runway/Kling/Luma), multi-slide carousel blueprints, short-form Reel scripts, localized captions (English, Hinglish, Hindi), and targeted hashtag clusters.
            </p>
          </div>

          {/* Real Screenshot Rule */}
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/20">
            <div className="flex items-center gap-2 mb-1.5 text-rose-700 dark:text-rose-400 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>Strict Rule: Real UI Screen Compositing</span>
            </div>
            <p className="text-xs text-rose-900/80 dark:text-rose-300/80">
              AI image and video generators must <strong>never</strong> be asked to draw or hallucinate the InvoiceFine application interface. Generative prompts are configured to generate realistic commercial environments with clean blank device screens. Designers must overlay verified screenshots from <code className="px-1 py-0.5 rounded bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200">assets/screenshots/</code> directly into the mockup.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Core Technical Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>100% Client-Side Static Export</strong>: Zero backend, zero database, zero external AI API costs. Runs completely offline in your browser.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>GitHub Pages & Vercel Compatible</strong>: Fully exportable to plain HTML/JS/CSS with optional custom basePath support.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Brand Consistency</strong>: Built around InvoiceFine’s primary color <span className="font-mono font-bold text-[#EF3035]">#EF3035</span> and deep slate <span className="font-mono font-bold text-zinc-900 dark:text-white">#171717</span>.</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-zinc-500">
            <span>© 2026 PRO CSC TOOLS • InvoiceFine</span>
            <span className="text-[11px]">Version 1.0.0 (Static Release)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
