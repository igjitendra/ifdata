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
  Share2,
  ShieldAlert,
  Clock,
  ArrowRight,
  Check,
  Smartphone,
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
      <div className="h-full min-h-[450px] bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-[#EF3035] mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mb-1">
          Select Your Feature & Content Format
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 leading-relaxed">
          Configure your preferences on the left or click any preset above, then hit <strong>GENERATE CONTENT PACKAGE</strong> to produce complete AI prompts, captions, and scripts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-zinc-400">
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
            ✓ Midjourney / FLUX Prompts
          </span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
            ✓ Runway Video Prompts
          </span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
            ✓ 7-Slide Carousels
          </span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
            ✓ 15s Reel Scripts
          </span>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: "image", label: "AI Image", icon: <ImageIcon className="w-3.5 h-3.5" /> },
    { id: "video", label: "AI Video", icon: <Video className="w-3.5 h-3.5" /> },
    { id: "carousel", label: "Carousel", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "reel", label: "Reel / Shorts", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: "captions", label: "Captions", icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { id: "hashtags", label: "Hashtags", icon: <Hash className="w-3.5 h-3.5" /> },
    { id: "full", label: "Full Export", icon: <FileText className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col overflow-hidden">
      {/* Top Banner with Actions */}
      <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-900 dark:text-white">
              {pkg.inputs.feature.name}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-red-100 dark:bg-red-950/60 text-[#EF3035]">
              {pkg.inputs.contentType.name}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium">
              {pkg.inputs.platform.name}
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 block mt-0.5">
            Ratio: {pkg.inputs.aspectRatio} • Language: {pkg.inputs.language.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSaveFavorite(pkg)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all active:scale-95 ${
              isFavorite
                ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 border-amber-300 dark:border-amber-700"
                : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:text-amber-500"
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? "fill-amber-500 text-amber-500" : ""}`} />
            <span>{isFavorite ? "Saved" : "Save"}</span>
          </button>

          <DownloadButtons pkg={pkg} />

          <CopyButton
            textToCopy={pkg.fullContentText}
            label="Copy All"
            variant="primary"
          />
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-1 px-4 pt-2 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "border-[#EF3035] text-[#EF3035]"
                : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-5 sm:p-6 overflow-y-auto max-h-[600px] space-y-5">
        {/* Real Screenshot Rule Reminder Banner */}
        <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-300">
          <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#EF3035]" />
          <div>
            <strong>Real UI Screenshot Rule:</strong> Use real application screenshots from{" "}
            <code className="px-1 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-200">
              assets/screenshots/
            </code>{" "}
            inside device mockups. Never ask AI to hallucinate or draw the InvoiceFine interface.
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Concept Card */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Concept & Strategy
                </h4>
                <CopyButton textToCopy={pkg.concept} />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {pkg.concept}
              </p>
            </div>

            {/* Hook Card */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Hook (First 1–3 Seconds)
                </h4>
                <CopyButton textToCopy={pkg.hook} />
              </div>
              <p className="text-sm font-bold text-zinc-900 dark:text-white italic">
                "{pkg.hook}"
              </p>
            </div>

            {/* Headline & Subheadline */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Headline & Subheadline
                </h4>
                <CopyButton textToCopy={`${pkg.headline}\n${pkg.subheadline}`} />
              </div>
              <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-1">
                {pkg.headline}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {pkg.subheadline}
              </p>
            </div>

            {/* CTA */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Recommended Call to Action
                </h4>
                <CopyButton textToCopy={pkg.cta} />
              </div>
              <p className="text-xs font-bold text-[#EF3035]">
                {pkg.cta}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: AI Image Prompt */}
        {activeTab === "image" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Midjourney / FLUX / DALL-E Production Prompt
                </h4>
                <CopyButton textToCopy={pkg.imagePrompt.prompt} />
              </div>
              <pre className="text-xs text-zinc-800 dark:text-zinc-200 font-mono whitespace-pre-wrap leading-relaxed p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                {pkg.imagePrompt.prompt}
              </pre>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Typography Text Placement Area
                </h4>
                <CopyButton textToCopy={pkg.imagePrompt.textArea} />
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300">
                {pkg.imagePrompt.textArea}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Negative Prompt
                </h4>
                <CopyButton textToCopy={pkg.imagePrompt.negativePrompt} />
              </div>
              <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">
                {pkg.imagePrompt.negativePrompt}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: AI Video Prompt */}
        {activeTab === "video" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Runway / Kling / Luma Video Prompt (Timeline Breakdown)
                </h4>
                <CopyButton
                  textToCopy={pkg.videoPrompt.scenes
                    .map(
                      (s) =>
                        `SCENE ${s.sceneNumber} (${s.timeRange}):\nVisual: ${s.visual}\nCamera: ${s.camera}\nAction: ${s.action}\nText: "${s.onScreenText}"`
                    )
                    .join("\n\n")}
                />
              </div>

              <div className="space-y-3 mt-3">
                {pkg.videoPrompt.scenes.map((s) => (
                  <div
                    key={s.sceneNumber}
                    className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-zinc-100">
                      <span>Scene {s.sceneNumber}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                        {s.timeRange}
                      </span>
                    </div>
                    <p><strong className="text-zinc-500">Visual:</strong> {s.visual}</p>
                    <p><strong className="text-zinc-500">Camera:</strong> {s.camera}</p>
                    <p><strong className="text-zinc-500">On-Screen:</strong> <em>"{s.onScreenText}"</em></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Spoken Voice-Over Script
                </h4>
                <CopyButton textToCopy={pkg.videoPrompt.voiceover} />
              </div>
              <p className="text-xs text-zinc-800 dark:text-zinc-200 italic p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                "{pkg.videoPrompt.voiceover}"
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Carousel */}
        {activeTab === "carousel" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                7-Slide Carousel Blueprint
              </h4>
              <CopyButton
                textToCopy={pkg.carousel.slides
                  .map(
                    (s) =>
                      `SLIDE ${s.slideNumber}: ${s.headline}\nBody: ${s.bodyText}\nVisual: ${s.visualConcept}\nDirective: ${s.screenshotInstruction}`
                  )
                  .join("\n\n")}
                label="Copy All Slides"
              />
            </div>

            {pkg.carousel.slides.map((s) => (
              <div
                key={s.slideNumber}
                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-[#EF3035] text-xs">
                    Slide {s.slideNumber} of {pkg.carousel.totalSlides}
                  </span>
                  <CopyButton
                    textToCopy={`Headline: ${s.headline}\n${s.bodyText}\nVisual: ${s.visualConcept}`}
                    label="Copy Slide"
                  />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {s.headline}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300">{s.bodyText}</p>
                <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60 text-[11px] text-zinc-500 dark:text-zinc-400 space-y-0.5">
                  <p><strong>Visual:</strong> {s.visualConcept}</p>
                  <p><strong>UI Directive:</strong> {s.screenshotInstruction}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Reel */}
        {activeTab === "reel" && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold uppercase tracking-wider text-zinc-500">
                  Reel Production Script
                </h4>
                <CopyButton
                  textToCopy={`HOOK: ${pkg.reel.hook}\nPROBLEM: ${pkg.reel.problem}\nSOLUTION: ${pkg.reel.solution}\nDEMO: ${pkg.reel.demonstration}\nBENEFIT: ${pkg.reel.benefit}\nVOICEOVER: "${pkg.reel.voiceover}"\nCTA: ${pkg.reel.cta}`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-800 dark:text-zinc-200">
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <strong className="text-zinc-400 block text-[10px] uppercase">Hook (0–2s)</strong>
                  {pkg.reel.hook}
                </div>
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <strong className="text-zinc-400 block text-[10px] uppercase">Problem (2–5s)</strong>
                  {pkg.reel.problem}
                </div>
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <strong className="text-zinc-400 block text-[10px] uppercase">Solution (5–10s)</strong>
                  {pkg.reel.solution}
                </div>
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <strong className="text-zinc-400 block text-[10px] uppercase">Benefit & CTA</strong>
                  {pkg.reel.benefit} — {pkg.reel.cta}
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <strong className="text-zinc-400 block text-[10px] uppercase mb-1">
                  Spoken Voiceover Script
                </strong>
                <p className="italic">"{pkg.reel.voiceover}"</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Captions */}
        {activeTab === "captions" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Short Caption (High-Engagement)
                </h4>
                <CopyButton textToCopy={pkg.captions.short} />
              </div>
              <p className="text-xs text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                {pkg.captions.short}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Medium Caption (Feature Highlights)
                </h4>
                <CopyButton textToCopy={pkg.captions.medium} />
              </div>
              <p className="text-xs text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                {pkg.captions.medium}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Educational Caption (In-Depth SME Advice)
                </h4>
                <CopyButton textToCopy={pkg.captions.educational} />
              </div>
              <p className="text-xs text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                {pkg.captions.educational}
              </p>
            </div>
          </div>
        )}

        {/* Tab 7: Hashtags */}
        {activeTab === "hashtags" && (
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Targeted Hashtag Set ({pkg.hashtags.length} Tags)
              </h4>
              <CopyButton textToCopy={pkg.hashtags.join(" ")} label="Copy All Hashtags" />
            </div>
            <div className="flex flex-wrap gap-2">
              {pkg.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-[#EF3035]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab 8: Full Export */}
        {activeTab === "full" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Full Package Text Export
              </h4>
              <div className="flex items-center gap-2">
                <DownloadButtons pkg={pkg} />
                <CopyButton textToCopy={pkg.fullContentText} label="Copy Everything" variant="primary" />
              </div>
            </div>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 font-mono whitespace-pre-wrap p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-x-auto">
              {pkg.fullContentText}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
