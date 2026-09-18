"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Heart,
  Share2,
  Bookmark,
  Send,
  CheckCircle2,
  Terminal,
  Package,
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
    "preview" | "overview" | "image" | "video" | "carousel" | "reel" | "captions" | "hashtags" | "full"
  >("preview");

  const [previewCaptionStyle, setPreviewCaptionStyle] = useState<
    "short" | "medium" | "educational" | "sales"
  >("medium");

  const [copiedState, setCopiedState] = useState<string | null>(null);

  const handleQuickCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(key);
    setTimeout(() => setCopiedState(null), 2000);
  };

  if (!pkg) {
    return (
      <div className="h-full min-h-[480px] bg-white/80 dark:bg-zinc-900/80 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center p-6 sm:p-10 text-center transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-[#EF3035] flex items-center justify-center mb-4 shadow-inner">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-1">
          Select Your Feature &amp; Generate Content
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">
          Pick your feature and format on the left, or tap any preset above to instantly create verified, production-grade social posts, AI prompts, and video scripts.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg w-full text-xs font-bold text-zinc-600 dark:text-zinc-300">
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📱 Live Preview
          </div>
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📸 FLUX &amp; Midjourney
          </div>
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            🎬 Runway Gen-3
          </div>
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            📑 7-Slide Carousels
          </div>
        </div>
      </div>
    );
  }

  // Determine screenshot path
  const rawScreenshot = pkg.inputs.feature.screenshotFilename || "mobile/mobile-screen-1.png";
  const screenshotUrl = rawScreenshot.startsWith("/") ? rawScreenshot : `/screenshots/${rawScreenshot}`;

  // Formatted Instagram text
  const instagramText = `${pkg.hook}\n\n${pkg.captions[previewCaptionStyle]}\n\n👇 Download InvoiceFine Free for Mobile & Desktop:\nhttps://github.com/igjitendra/ifdata/releases\n\n${pkg.hashtags.combined}`;

  // Formatted WhatsApp text with *bold* formatting
  const whatsappText = `*InvoiceFine • Smart Billing & POS*\n\n🔥 *${pkg.headline}*\n\n"${pkg.hook}"\n\n✅ *Key Advantages:*\n• ${pkg.inputs.feature.benefit}\n• 100% Offline with Local SQLite Storage\n• Works with 58mm & 80mm Bluetooth / USB Thermal Printers\n• Zero Monthly Fee on Free Tier\n\n📲 *Download Now:*\nhttps://github.com/igjitendra/ifdata/releases\n\n#InvoiceFine #GSTBilling #RetailPOS`;

  const tabs = [
    { id: "preview", label: "📱 Live Preview", badge: "Mockup", icon: <Smartphone className="w-3.5 h-3.5" /> },
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
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/60 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-black text-zinc-900 dark:text-white truncate">
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
                ? "bg-red-500/10 border-red-500/40 text-[#EF3035]"
                : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700"
            }`}
            title="Save to Favorites"
          >
            <Star className={`w-4 h-4 ${isFavorite ? "fill-[#EF3035] text-[#EF3035]" : ""}`} />
            <span className="hidden sm:inline">{isFavorite ? "Saved" : "Save"}</span>
          </button>

          <DownloadButtons pkg={pkg} />
        </div>
      </div>

      {/* Quick 1-Click Platform Copy Bar */}
      <div className="px-4 py-2 border-b border-zinc-200/80 dark:border-zinc-800 bg-red-500/5 dark:bg-red-500/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-black uppercase tracking-wider text-[#EF3035] flex items-center gap-1 flex-shrink-0">
          <Sparkles className="w-3 h-3" /> Quick Copy:
        </span>

        {/* Instagram Copy */}
        <button
          type="button"
          onClick={() => handleQuickCopy(instagramText, "ig")}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-[#EF3035] hover:text-[#EF3035] transition-all cursor-pointer flex-shrink-0 shadow-2xs"
          title="Copy Complete Instagram Post with Hook, Caption & Hashtags"
        >
          {copiedState === "ig" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          <span>{copiedState === "ig" ? "Copied IG!" : "Copy for Instagram"}</span>
        </button>

        {/* WhatsApp Copy */}
        <button
          type="button"
          onClick={() => handleQuickCopy(whatsappText, "wa")}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500 hover:text-emerald-600 transition-all cursor-pointer flex-shrink-0 shadow-2xs"
          title="Copy Formatted WhatsApp Message with *bold* headers"
        >
          {copiedState === "wa" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          <span>{copiedState === "wa" ? "Copied WhatsApp!" : "Copy for WhatsApp"}</span>
        </button>

        {/* Reel Script Copy */}
        <button
          type="button"
          onClick={() =>
            handleQuickCopy(
              `HOOK: ${pkg.reel.hook}\n\nON-SCREEN SEQUENCE:\n${pkg.reel.onScreenText.join("\n")}\n\nVOICEOVER:\n${pkg.reel.voiceover}\n\nCTA: ${pkg.reel.cta}`,
              "reel"
            )
          }
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-[#EF3035] hover:text-[#EF3035] transition-all cursor-pointer flex-shrink-0 shadow-2xs"
          title="Copy 15s Reel Script"
        >
          {copiedState === "reel" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          <span>{copiedState === "reel" ? "Copied Script!" : "Copy Reel Script"}</span>
        </button>

        {/* AI Prompt Copy */}
        <button
          type="button"
          onClick={() => handleQuickCopy(pkg.imagePrompt.prompt, "prompt")}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-purple-500 hover:text-purple-600 transition-all cursor-pointer flex-shrink-0 shadow-2xs"
          title="Copy Midjourney / FLUX Prompt"
        >
          {copiedState === "prompt" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          <span>{copiedState === "prompt" ? "Copied Prompt!" : "Copy AI Prompt"}</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar p-1.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/40">
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
                  className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
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
      <div className="p-4 sm:p-5 flex-1 overflow-y-auto max-h-[640px]">
        {/* 0. LIVE PREVIEW (Smartphone Mockup & Post Feed) */}
        {activeTab === "preview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Realistic Phone Bezel */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[310px] xs:max-w-[330px] sm:max-w-[360px] rounded-[38px] sm:rounded-[42px] border-[5px] sm:border-[6px] border-zinc-900 dark:border-zinc-700 bg-black p-2 sm:p-2.5 shadow-2xl transition-all">
                {/* Dynamic Island / Punch Hole */}
                <div className="w-24 h-4 bg-zinc-900 rounded-full mx-auto mb-2 flex items-center justify-between px-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-blue-900/40" />
                </div>

                {/* Inner Screen */}
                <div className="bg-zinc-950 text-white rounded-[32px] overflow-hidden border border-zinc-900 flex flex-col">
                  {/* Status Bar */}
                  <div className="px-4 pt-1.5 pb-1 flex items-center justify-between text-[10px] text-zinc-400 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-bold">5G</span>
                      <div className="w-4 h-2 rounded-sm border border-zinc-400 flex items-center p-0.5">
                        <div className="w-full h-full bg-white rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Social Profile Header */}
                  <div className="px-3 py-2 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-[#EF3035] bg-white p-0.5">
                        <Image
                          src="/logo.png"
                          alt="InvoiceFine"
                          width={28}
                          height={28}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white tracking-tight">
                            invoicefine.app
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[8px] font-black flex items-center justify-center">
                            ✓
                          </span>
                        </div>
                        <span className="text-[9px] text-zinc-400 block leading-tight">
                          GST Billing &amp; POS • Official
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#EF3035] text-white"
                    >
                      Follow
                    </button>
                  </div>

                  {/* Visual Post Area with Verified Screenshot Composite */}
                  <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden flex flex-col justify-between p-3 group">
                    {/* Background Screenshot */}
                    <div className="absolute inset-0">
                      <Image
                        src={screenshotUrl}
                        alt={pkg.inputs.feature.name}
                        fill
                        className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/80" />
                    </div>

                    {/* Top Overlay: Hook Badge */}
                    <div className="relative z-10">
                      <div className="p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 shadow-lg">
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#EF3035] block mb-0.5">
                          ⚡ Scroll-Stopping Hook
                        </span>
                        <p className="text-xs font-black text-white leading-tight">
                          "{pkg.hook}"
                        </p>
                      </div>
                    </div>

                    {/* Bottom Overlay: Feature & Benefit Callout */}
                    <div className="relative z-10 space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#EF3035] text-white text-[10px] font-black shadow-md">
                        <span>✨ {pkg.inputs.feature.name}</span>
                      </div>
                      <p className="text-[11px] font-bold text-zinc-200 line-clamp-2 leading-tight text-shadow">
                        {pkg.headline}
                      </p>
                      <div className="w-full py-1.5 px-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-between text-[10px] text-white">
                        <span className="font-semibold">Tap to Install Free</span>
                        <span className="font-black text-[#EF3035] bg-white px-1.5 py-0.2 rounded text-[9px]">
                          GET
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Action Bar */}
                  <div className="px-3 py-2 flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                      <MessageSquare className="w-4 h-4" />
                      <Send className="w-4 h-4" />
                    </div>
                    <Bookmark className="w-4 h-4" />
                  </div>

                  {/* Likes and Caption */}
                  <div className="px-3 pb-3 space-y-1 text-xs">
                    <span className="font-bold text-[11px] text-white block">
                      3,842 likes
                    </span>
                    <p className="text-[11px] text-zinc-300 leading-snug line-clamp-3">
                      <strong className="text-white mr-1.5 font-bold">invoicefine.app</strong>
                      {pkg.captions[previewCaptionStyle]}
                    </p>
                    <span className="text-[10px] text-[#EF3035] block font-mono">
                      #InvoiceFine #GSTBilling #RetailPOS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Companion Controls & Direct Action Details */}
            <div className="lg:col-span-6 space-y-4">
              {/* Caption Style Switcher for Preview */}
              <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Preview Caption Tone:
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#EF3035]/10 text-[#EF3035]">
                    {previewCaptionStyle}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(["short", "medium", "educational", "sales"] as const).map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setPreviewCaptionStyle(style)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                        previewCaptionStyle === style
                          ? "bg-[#EF3035] text-white shadow-2xs"
                          : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Screenshot Spec */}
              <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Verified App Screenshot
                  </span>
                  <a
                    href={screenshotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#EF3035] hover:underline flex items-center gap-1"
                  >
                    View Asset <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono bg-zinc-100 dark:bg-zinc-900 p-2 rounded-lg break-all">
                  assets/screenshots/{rawScreenshot}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Strict Real Screenshot Rule: Generative AI will never render inaccurate fake software UI. This real verified screenshot is rendered onto commercial mockups.
                </p>
              </div>

              {/* Direct App Downloads & Resources */}
              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 dark:bg-red-500/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#EF3035] flex items-center gap-1.5">
                    <Package className="w-4 h-4" /> Direct App Downloads &amp; Links
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-500/15 text-[#EF3035]">
                    v1.2.0
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://github.com/igjitendra/ifdata/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF3035] text-zinc-900 dark:text-white flex items-center gap-2 group transition-all"
                  >
                    <Terminal className="w-4 h-4 text-[#EF3035]" />
                    <div className="text-left">
                      <span className="text-xs font-bold block group-hover:text-[#EF3035]">
                        Linux .deb &amp; .rpm
                      </span>
                      <span className="text-[10px] text-zinc-500 block">
                        Desktop Workstation POS
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/igjitendra/ifdata/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF3035] text-zinc-900 dark:text-white flex items-center gap-2 group transition-all"
                  >
                    <Smartphone className="w-4 h-4 text-[#EF3035]" />
                    <div className="text-left">
                      <span className="text-xs font-bold block group-hover:text-[#EF3035]">
                        Android Mobile App
                      </span>
                      <span className="text-[10px] text-zinc-500 block">
                        Bluetooth Thermal Billing
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* 1-Click Copy Full Instagram Post */}
              <button
                type="button"
                onClick={() => handleQuickCopy(instagramText, "post")}
                className="w-full py-3 rounded-xl bg-[#EF3035] hover:bg-[#D9252A] text-white text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
              >
                {copiedState === "post" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied Complete Post to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Complete Post (Hook + Caption + Hashtags)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

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
                <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EF3035]/10 text-[#EF3035] border border-[#EF3035]/20">
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
            <div className="p-3 rounded-xl border border-[#EF3035]/30 bg-[#EF3035]/5 text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5 text-xs">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#EF3035]" />
              <div>
                <strong className="block font-bold text-[#EF3035]">Real Screenshot Composite Directive:</strong>
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
              <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EF3035]/10 text-[#EF3035] border border-[#EF3035]/20">
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
                    <span className="text-[9px] font-bold text-[#EF3035]">
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
