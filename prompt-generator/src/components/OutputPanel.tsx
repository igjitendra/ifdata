"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Star,
  Download,
  FileText,
  Image as ImageIcon,
  Video,
  Layers,
  MessageSquare,
  Hash,
  ShieldAlert,
  Smartphone,
  Check,
  ExternalLink,
} from "lucide-react";
import { GeneratedContentPackage } from "@/types";
import { CopyButton } from "./CopyButton";
import { DownloadButtons } from "./DownloadButtons";

interface OutputPanelProps {
  pkg: GeneratedContentPackage | null;
  onSaveFavorite: (pkg: GeneratedContentPackage) => void;
  isFavorite: boolean;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  pkg,
  onSaveFavorite,
  isFavorite,
}) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "image" | "video" | "carousel" | "reel" | "captions" | "hashtags" | "full"
  >("overview");

  if (!pkg) {
    return (
      <div className="h-full min-h-[460px] bg-white/80 dark:bg-zinc-900/80 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center p-6 sm:p-10 text-center transition-colors">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-[#EF3035] flex items-center justify-center mb-3 shadow-inner">
          <Sparkles className="w-7 h-7" />
        </div>
        <h3 className="text-base font-black text-zinc-900 dark:text-zinc-100 mb-1">
          Select Your Feature &amp; Generate Content
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 leading-relaxed">
          Pick your feature and format on the left, or tap any preset above to instantly create production-grade AI prompts, video scripts, and marketing copy.
        </p>
        <div className="grid grid-cols-2 gap-2 max-w-xs w-full text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📸 Midjourney &amp; FLUX
          </div>
          <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            🎬 Runway &amp; Kling
          </div>
          <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📑 7-Slide Carousels
          </div>
          <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📱 15s Reels &amp; Shorts
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: "image", label: "AI Image", badge: "v6.1", icon: <ImageIcon className="w-3.5 h-3.5" /> },
    { id: "video", label: "AI Video", badge: "Gen-3", icon: <Video className="w-3.5 h-3.5" /> },
    { id: "carousel", label: "Carousel", badge: "7 Slides", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "reel", label: "Reel / Shorts", badge: "Viral", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: "captions", label: "Captions", badge: "6x", icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { id: "hashtags", label: "Hashtags", icon: <Hash className="w-3.5 h-3.5" /> },
    { id: "full", label: "Full Export", icon: <FileText className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col overflow-hidden transition-colors">
      {/* Header Banner */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/50 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white truncate">
              {pkg.inputs.feature.name}
            </h3>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#EF3035] text-white shadow-2xs">
              {pkg.inputs.contentType.name}
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              {pkg.inputs.platform.name}
            </span>
          </div>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5">
            Ratio: {pkg.inputs.aspectRatio} • Lang: {pkg.inputs.language.name} • Audience: {pkg.inputs.audience.name}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => onSaveFavorite(pkg)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isFavorite
                ? "bg-amber-500/10 border-amber-500/40 text-amber-500"
                : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700"
            }`}
            title="Save to Favorites"
          >
            <Star className={`w-4 h-4 ${isFavorite ? "fill-amber-500" : ""}`} />
            <span className="hidden sm:inline">{isFavorite ? "Saved" : "Save"}</span>
          </button>

          <DownloadButtons pkg={pkg} />
        </div>
      </div>

      {/* Tab Bar with Horizontal Scroll */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar p-1.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-950/40">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                isActive
                  ? "bg-white dark:bg-zinc-800 text-[#EF3035] dark:text-red-400 shadow-xs border border-zinc-200 dark:border-zinc-700/80"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-zinc-850"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[9px] font-extrabold px-1 py-0.2 rounded ${
                    isActive
                      ? "bg-[#EF3035]/15 text-[#EF3035]"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-4 sm:p-5 flex-1 overflow-y-auto max-h-[600px]">
        {/* 1. OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#EF3035]">
                  Scroll-Stopping Hook
                </span>
                <CopyButton textToCopy={pkg.hook} label="Copy Hook" />
              </div>
              <p className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white leading-snug">
                "{pkg.hook}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Primary Headline
                </span>
                <p className="text-xs font-bold text-zinc-900 dark:text-white">{pkg.headline}</p>
              </div>
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Target Call-to-Action
                </span>
                <p className="text-xs font-bold text-[#EF3035]">{pkg.cta}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                Campaign Positioning Concept
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{pkg.concept}</p>
            </div>
          </div>
        )}

        {/* 2. AI IMAGE PROMPT */}
        {activeTab === "image" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Midjourney v6.1 / FLUX.1 Pro
                </span>
                <span className="text-[11px] text-zinc-400">Ratio: {pkg.inputs.aspectRatio}</span>
              </div>
              <CopyButton textToCopy={pkg.imagePrompt.prompt} label="Copy Prompt" />
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs leading-relaxed border border-zinc-800 shadow-inner select-all">
              {pkg.imagePrompt.prompt}
            </div>

            {/* Strict Screenshot Notice */}
            <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400 flex items-start gap-2.5 text-xs">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <strong className="block font-bold">Real Screenshot Composite Directive:</strong>
                <span>{pkg.imagePrompt.screenshotInstruction}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                Negative Prompt (Copy to prevent AI flaws):
              </span>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pkg.imagePrompt.negativePrompt}
              </p>
            </div>
          </div>
        )}

        {/* 3. AI VIDEO PROMPT */}
        {activeTab === "video" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Runway Gen-3 / Kling 1.5 Script ({pkg.videoPrompt.duration})
              </span>
              <CopyButton
                textToCopy={JSON.stringify(pkg.videoPrompt, null, 2)}
                label="Copy Script"
              />
            </div>

            {/* Scenes */}
            <div className="space-y-3">
              {pkg.videoPrompt.scenes.map((scene) => (
                <div
                  key={scene.sceneNumber}
                  className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-zinc-900 dark:text-white font-black">
                      Scene {scene.sceneNumber} ({scene.timeRange})
                    </strong>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {scene.camera}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    <strong>Action:</strong> {scene.action}
                  </p>
                  <p className="text-xs text-[#EF3035] font-bold">
                    On-Screen Text: "{scene.onScreenText}"
                  </p>
                </div>
              ))}
            </div>

            {/* Voiceover */}
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Voice-Over Audio Script
                </span>
                <CopyButton textToCopy={pkg.videoPrompt.voiceover} label="Copy VO" />
              </div>
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                "{pkg.videoPrompt.voiceover}"
              </p>
            </div>
          </div>
        )}

        {/* 4. CAROUSEL */}
        {activeTab === "carousel" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#EF3035]">
                {pkg.carousel.totalSlides}-Slide Framework
              </span>
              <CopyButton
                textToCopy={pkg.carousel.slides
                  .map(
                    (s) =>
                      `SLIDE ${s.slideNumber}: ${s.headline}\n${s.bodyText}\nVisual: ${s.visualConcept}\n`
                  )
                  .join("\n---\n\n")}
                label="Copy All Slides"
              />
            </div>

            {pkg.carousel.slides.map((slide) => (
              <div
                key={slide.slideNumber}
                className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#EF3035]/15 text-[#EF3035]">
                    SLIDE {slide.slideNumber}
                  </span>
                  {slide.screenshotFilename && (
                    <span className="text-[9px] font-bold text-amber-500">
                      Asset: {slide.screenshotFilename}
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-extrabold text-zinc-900 dark:text-white">
                  {slide.headline}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">{slide.bodyText}</p>
                <p className="text-[11px] text-zinc-400 italic">
                  <strong>Layout:</strong> {slide.visualConcept}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* 5. REEL / SHORTS */}
        {activeTab === "reel" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#EF3035]">
                Viral 15–30s Short-Form Script
              </span>
              <CopyButton
                textToCopy={`HOOK: ${pkg.reel.hook}\n\nON-SCREEN:\n${pkg.reel.onScreenText.join("\n")}\n\nVOICEOVER:\n${pkg.reel.voiceover}\n\nCTA: ${pkg.reel.cta}`}
                label="Copy Reel Script"
              />
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 space-y-2">
              <strong className="text-xs font-black block text-zinc-900 dark:text-white">
                Cover Thumbnail Text: "{pkg.reel.coverText}"
              </strong>
              <div className="text-xs space-y-1 text-zinc-600 dark:text-zinc-300">
                <p>
                  <strong>Hook (0-3s):</strong> "{pkg.reel.hook}"
                </p>
                <p>
                  <strong>Feature Demo:</strong> {pkg.reel.demonstration}
                </p>
                <p>
                  <strong>Payoff Benefit:</strong> {pkg.reel.benefit}
                </p>
                <p className="text-[#EF3035] font-bold">
                  <strong>Call-to-Action:</strong> {pkg.reel.cta}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                On-Screen Animated Text Sequence
              </span>
              <ul className="text-xs space-y-1 font-semibold text-zinc-800 dark:text-zinc-200 list-disc list-inside">
                {pkg.reel.onScreenText.map((txt, idx) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 6. CAPTIONS (6 Distinct Styles) */}
        {activeTab === "captions" && (
          <div className="space-y-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#EF3035] block">
              6x Conversion-Focused Captions
            </span>

            {/* Short */}
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  1. Short &amp; Punchy
                </span>
                <CopyButton textToCopy={pkg.captions.short} label="Copy" />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {pkg.captions.short}
              </p>
            </div>

            {/* Medium / Retail Problem */}
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  2. Standard Retail Post
                </span>
                <CopyButton textToCopy={pkg.captions.medium} label="Copy" />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {pkg.captions.medium}
              </p>
            </div>

            {/* Educational */}
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  3. Value-First Educational
                </span>
                <CopyButton textToCopy={pkg.captions.educational} label="Copy" />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {pkg.captions.educational}
              </p>
            </div>

            {/* Sales Offer */}
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  4. Direct Conversion Offer
                </span>
                <CopyButton textToCopy={pkg.captions.sales} label="Copy" />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {pkg.captions.sales}
              </p>
            </div>
          </div>
        )}

        {/* 7. HASHTAGS */}
        {activeTab === "hashtags" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EF3035]">
                  All-in-One Publishing Block
                </span>
                <CopyButton textToCopy={pkg.hashtags.combined} label="Copy All" />
              </div>
              <p className="text-xs font-mono text-zinc-800 dark:text-zinc-200 leading-relaxed">
                {pkg.hashtags.combined}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Feature Specific
                </span>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {pkg.hashtags.featureSpecific}
                </p>
              </div>
              <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Retail &amp; Kirana
                </span>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {pkg.hashtags.retail}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 8. FULL EXPORT */}
        {activeTab === "full" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">
                Plain Text Package
              </span>
              <CopyButton
                textToCopy={`FEATURE: ${pkg.inputs.feature.name}\nFORMAT: ${pkg.inputs.contentType.name}\nPLATFORM: ${pkg.inputs.platform.name}\n\nHOOK:\n${pkg.hook}\n\nHEADLINE:\n${pkg.headline}\n\nAI IMAGE PROMPT:\n${pkg.imagePrompt.prompt}\n\nAI VIDEO PROMPT:\n${JSON.stringify(pkg.videoPrompt, null, 2)}\n\nCAPTION:\n${pkg.captions.medium}\n\nHASHTAGS:\n${pkg.hashtags.combined}`}
                label="Copy Everything"
              />
            </div>

            <textarea
              readOnly
              rows={16}
              value={`FEATURE: ${pkg.inputs.feature.name}
FORMAT: ${pkg.inputs.contentType.name}
PLATFORM: ${pkg.inputs.platform.name}
LANGUAGE: ${pkg.inputs.language.name}

HOOK:
${pkg.hook}

HEADLINE:
${pkg.headline}

AI IMAGE PROMPT:
${pkg.imagePrompt.prompt}

SCREENSHOT REQUIREMENT:
${pkg.imagePrompt.screenshotInstruction}

AI VIDEO PROMPT:
${pkg.videoPrompt.objective}

REEL SCRIPT:
${pkg.reel.voiceover}

CAPTION:
${pkg.captions.medium}

HASHTAGS:
${pkg.hashtags.combined}`}
              className="w-full p-4 rounded-xl font-mono text-xs bg-zinc-950 text-zinc-200 border border-zinc-800 focus:outline-none leading-relaxed shadow-inner"
            />
          </div>
        )}
      </div>
    </div>
  );
};
