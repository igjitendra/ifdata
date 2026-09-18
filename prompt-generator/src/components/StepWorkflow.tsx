"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Search,
  Check,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  Flame,
  Globe2,
  Users,
  Palette,
  Target,
  Clock,
  Ratio,
} from "lucide-react";
import { FEATURES } from "@/data/features";
import { CONTENT_TYPES } from "@/data/contentTypes";
import { PLATFORMS } from "@/data/platforms";
import { LANGUAGES } from "@/data/languages";
import { AUDIENCES } from "@/data/audiences";
import { VISUAL_STYLES } from "@/data/visualStyles";
import { CONTENT_GOALS } from "@/data/goals";
import {
  Feature,
  ContentType,
  Platform,
  Language,
  Audience,
  VisualStyle,
  ContentGoal,
  AspectRatio,
  VideoDuration,
} from "@/types";

interface StepWorkflowProps {
  selectedFeature: Feature;
  onSelectFeature: (f: Feature) => void;
  selectedContentType: ContentType;
  onSelectContentType: (ct: ContentType) => void;
  selectedPlatform: Platform;
  onSelectPlatform: (p: Platform) => void;
  selectedLanguage: Language;
  onSelectLanguage: (l: Language) => void;
  selectedAudience: Audience;
  onSelectAudience: (a: Audience) => void;
  customAudience: string;
  onChangeCustomAudience: (val: string) => void;
  selectedVisualStyle: VisualStyle;
  onSelectVisualStyle: (vs: VisualStyle) => void;
  selectedGoal: ContentGoal;
  onSelectGoal: (g: ContentGoal) => void;
  selectedDuration: VideoDuration;
  onSelectDuration: (d: VideoDuration) => void;
  selectedAspectRatio: AspectRatio;
  onSelectAspectRatio: (ar: AspectRatio) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  onOpenFeaturesModal: () => void;
}

export const StepWorkflow: React.FC<StepWorkflowProps> = ({
  selectedFeature,
  onSelectFeature,
  selectedContentType,
  onSelectContentType,
  selectedPlatform,
  onSelectPlatform,
  selectedLanguage,
  onSelectLanguage,
  selectedAudience,
  onSelectAudience,
  customAudience,
  onChangeCustomAudience,
  selectedVisualStyle,
  onSelectVisualStyle,
  selectedGoal,
  onSelectGoal,
  selectedDuration,
  onSelectDuration,
  selectedAspectRatio,
  onSelectAspectRatio,
  onGenerate,
  isGenerating,
  onOpenFeaturesModal,
}) => {
  const [featureSearch, setFeatureSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isCustomAudienceOpen, setIsCustomAudienceOpen] = useState(false);

  const categories = ["All", "Billing", "Khata", "Inventory", "Hardware", "Safety"];

  const filteredFeatures = FEATURES.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
      f.tagline.toLowerCase().includes(featureSearch.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      f.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  }).slice(0, 8);

  const videoDurations: VideoDuration[] = ["6s", "8s", "10s", "15s", "20s", "30s", "45s", "60s"];
  const aspectRatios: AspectRatio[] = ["1:1", "4:5", "9:16", "16:9"];

  const isVideoFormat =
    selectedContentType.id.includes("reel") ||
    selectedContentType.id.includes("video") ||
    selectedContentType.id.includes("short");

  return (
    <div className="space-y-5">
      {/* Container Box */}
      <div className="bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 shadow-sm p-4 sm:p-5 transition-colors">
        {/* STEP 1: Feature Selector */}
        <section className="mb-6">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                1
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                InvoiceFine Feature
              </h2>
            </div>
            <button
              type="button"
              onClick={onOpenFeaturesModal}
              className="text-xs font-bold text-[#EF3035] hover:text-red-700 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All 42</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Active Feature Spotlight Card */}
          <div className="p-3.5 rounded-xl border border-red-500/30 dark:border-red-500/40 bg-gradient-to-r from-red-50/70 via-white to-white dark:from-red-950/30 dark:via-zinc-900 dark:to-zinc-900 mb-3 shadow-2xs">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-zinc-900 dark:text-white truncate">
                    {selectedFeature.name}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EF3035] text-white shadow-2xs">
                    {selectedFeature.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-1">
                  {selectedFeature.summary || selectedFeature.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Search & Category Filter */}
          <div className="space-y-2 mb-2.5">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search feature (e.g. GST, Thermal, Khata, Stock)..."
                value={featureSearch}
                onChange={(e) => setFeatureSearch(e.target.value)}
                className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF3035]/30 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 transition-all"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all flex-shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#EF3035] text-white shadow-2xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Quick Selection Cloud */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1">
            {filteredFeatures.map((f) => {
              const isSelected = selectedFeature.id === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => onSelectFeature(f)}
                  className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer truncate ${
                    isSelected
                      ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                      : "border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-850/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <span className="truncate block">{f.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* STEP 2: Content Format Selector */}
        <section className="mb-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                2
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Content Format
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-zinc-400">
              {selectedContentType.name}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CONTENT_TYPES.map((ct) => {
              const isSelected = selectedContentType.id === ct.id;
              return (
                <button
                  key={ct.id}
                  type="button"
                  onClick={() => onSelectContentType(ct)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer active:scale-98 ${
                    isSelected
                      ? "border-[#EF3035] bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent text-[#EF3035] font-bold ring-1 ring-[#EF3035] shadow-xs"
                      : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold truncate">{ct.name}</span>
                    {ct.badge && (
                      <span className="text-[9px] px-1 py-0.2 rounded font-extrabold bg-[#EF3035]/15 text-[#EF3035]">
                        {ct.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                    {ct.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* STEP 3 & 4: Platform & Language */}
        <section className="mb-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Platform */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                3
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Platform
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {PLATFORMS.map((plat) => {
                const isSelected = selectedPlatform.id === plat.id;
                return (
                  <button
                    key={plat.id}
                    type="button"
                    onClick={() => onSelectPlatform(plat)}
                    className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <span className="truncate">{plat.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035] flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                4
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Language
              </h2>
            </div>
            <div className="space-y-1.5">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLanguage.id === lang.id;
                return (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => onSelectLanguage(lang)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div>
                      <span className="font-bold block">{lang.name}</span>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block truncate">
                        {lang.toneGuideline || lang.description}
                      </span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#EF3035] flex-shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* STEP 5: Target Audience */}
        <section className="mb-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                5
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Target Audience
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCustomAudienceOpen(!isCustomAudienceOpen)}
              className="text-[11px] font-bold text-[#EF3035] hover:underline cursor-pointer"
            >
              {isCustomAudienceOpen ? "Choose Preset" : "+ Custom Audience"}
            </button>
          </div>

          {isCustomAudienceOpen ? (
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter custom audience (e.g. Sanitary Ware Wholesale Dealer)..."
                value={customAudience}
                onChange={(e) => onChangeCustomAudience(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF3035]/30 text-zinc-900 dark:text-white"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-36 overflow-y-auto pr-1">
              {AUDIENCES.map((aud) => {
                const isSelected = selectedAudience.id === aud.id;
                return (
                  <button
                    key={aud.id}
                    type="button"
                    onClick={() => onSelectAudience(aud)}
                    className={`px-3 py-2 text-xs rounded-xl border text-left transition-all cursor-pointer truncate ${
                      isSelected
                        ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <span className="block truncate">{aud.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {/* STEP 6 & 7: Aesthetic & Goal */}
        <section className="mb-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Aesthetic */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                6
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Visual Aesthetic
              </h2>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {VISUAL_STYLES.map((vs) => {
                const isSelected = selectedVisualStyle.id === vs.id;
                return (
                  <button
                    key={vs.id}
                    type="button"
                    onClick={() => onSelectVisualStyle(vs)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer truncate ${
                      isSelected
                        ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <span className="truncate">{vs.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035] flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Goal */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                7
              </span>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Campaign Goal
              </h2>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {CONTENT_GOALS.map((cg) => {
                const isSelected = selectedGoal.id === cg.id;
                return (
                  <button
                    key={cg.id}
                    type="button"
                    onClick={() => onSelectGoal(cg)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer truncate ${
                      isSelected
                        ? "border-[#EF3035] bg-red-500/10 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-850/40 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <span className="truncate">{cg.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035] flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* STEP 8: Duration & Aspect Ratio */}
        <section className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 block">
                Aspect Ratio
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {aspectRatios.map((ar) => (
                  <button
                    key={ar}
                    type="button"
                    onClick={() => onSelectAspectRatio(ar)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      selectedAspectRatio === ar
                        ? "border-[#EF3035] bg-[#EF3035] text-white shadow-xs"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {ar}
                  </button>
                ))}
              </div>
            </div>

            {isVideoFormat && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 block">
                  Video Duration
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {videoDurations.slice(0, 4).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => onSelectDuration(d)}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        selectedDuration === d
                          ? "border-[#EF3035] bg-[#EF3035] text-white shadow-xs"
                          : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Big Generate Button */}
          <div className="pt-3 hidden lg:block">
            <button
              type="button"
              onClick={onGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#EF3035] via-red-600 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-black text-sm shadow-md shadow-red-500/25 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 glow-red-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "GENERATING PACKAGE..." : "GENERATE CONTENT PACKAGE"}</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
