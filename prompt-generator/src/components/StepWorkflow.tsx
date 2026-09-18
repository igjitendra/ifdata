"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Search,
  Globe2,
  Users,
  Palette,
  Target,
  Clock,
  Ratio,
  Check,
  ChevronDown,
  AlertCircle,
  HelpCircle,
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
  const [isCustomAudienceOpen, setIsCustomAudienceOpen] = useState(false);

  const filteredFeatures = FEATURES.filter((f) =>
    f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
    f.tagline.toLowerCase().includes(featureSearch.toLowerCase())
  ).slice(0, 10);

  const videoDurations: VideoDuration[] = ["6s", "8s", "10s", "15s", "20s", "30s", "45s", "60s"];
  const aspectRatios: AspectRatio[] = ["1:1", "4:5", "9:16", "16:9"];

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
      {/* Step 1: Feature */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              1
            </span>
            <span>Choose InvoiceFine Feature</span>
          </label>
          <button
            type="button"
            onClick={onOpenFeaturesModal}
            className="text-xs font-semibold text-[#EF3035] hover:text-red-700 flex items-center gap-1"
          >
            <span>Browse All 40+</span>
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Selected feature badge */}
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-zinc-50/70 dark:bg-zinc-800/50 mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                {selectedFeature.name}
              </h4>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                {selectedFeature.category}
              </span>
              {selectedFeature.isComingSoon && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300/40">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
              {selectedFeature.tagline}
            </p>
          </div>
        </div>

        {/* Quick search input */}
        <div className="relative mb-2">
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Type to quickly switch feature..."
            value={featureSearch}
            onChange={(e) => setFeatureSearch(e.target.value)}
            className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF3035]/30 text-zinc-900 dark:text-zinc-100"
          />
        </div>

        {featureSearch.trim().length > 0 && (
          <div className="max-h-40 overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 divide-y divide-zinc-100 dark:divide-zinc-700/60 mb-2 shadow-md">
            {filteredFeatures.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  onSelectFeature(f);
                  setFeatureSearch("");
                }}
                className="w-full px-3 py-2 text-left text-xs hover:bg-zinc-50 dark:hover:bg-zinc-700/50 flex items-center justify-between"
              >
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {f.name}
                </span>
                <span className="text-[10px] text-zinc-400">{f.category}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Step 2: Content Type */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
          <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
            2
          </span>
          <span>Choose Content Format</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {CONTENT_TYPES.map((ct) => {
            const isSelected = ct.id === selectedContentType.id;
            return (
              <button
                key={ct.id}
                type="button"
                onClick={() => onSelectContentType(ct)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-xs font-semibold">{ct.name}</span>
                  {ct.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 font-bold">
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
      </div>

      {/* Step 3: Platform & Language (2 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Platform */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              3
            </span>
            <span>Target Platform</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {PLATFORMS.map((p) => {
              const isSelected = p.id === selectedPlatform.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectPlatform(p)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] ring-1 ring-[#EF3035]"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span>{p.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              4
            </span>
            <span>Content Language</span>
          </label>
          <div className="space-y-1.5">
            {LANGUAGES.map((l) => {
              const isSelected = l.id === selectedLanguage.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => onSelectLanguage(l)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <div>
                    <span className="font-semibold block">{l.nativeName}</span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      {l.description}
                    </span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#EF3035] flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step 5: Target Audience */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              5
            </span>
            <span>Target Audience</span>
          </label>
          <button
            type="button"
            onClick={() => setIsCustomAudienceOpen(!isCustomAudienceOpen)}
            className="text-[11px] text-[#EF3035] font-semibold hover:underline"
          >
            {isCustomAudienceOpen ? "Use Standard Audiences" : "+ Custom Audience"}
          </button>
        </div>

        {isCustomAudienceOpen ? (
          <input
            type="text"
            placeholder="e.g. Sanitary & plumbing contractor in Delhi..."
            value={customAudience}
            onChange={(e) => onChangeCustomAudience(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF3035]/30 text-zinc-900 dark:text-zinc-100"
          />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {AUDIENCES.map((a) => {
              const isSelected = a.id === selectedAudience.id;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => onSelectAudience(a)}
                  className={`px-3 py-2 text-xs rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span className="block font-medium truncate">{a.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Step 6 & 7: Visual Style & Content Goal (2 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Visual Style */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              6
            </span>
            <span>Visual Aesthetic</span>
          </label>
          <div className="space-y-1.5">
            {VISUAL_STYLES.slice(0, 5).map((vs) => {
              const isSelected = vs.id === selectedVisualStyle.id;
              return (
                <button
                  key={vs.id}
                  type="button"
                  onClick={() => onSelectVisualStyle(vs)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span className="truncate">{vs.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Goal */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center text-[11px] font-extrabold">
              7
            </span>
            <span>Content Goal</span>
          </label>
          <div className="space-y-1.5">
            {CONTENT_GOALS.slice(0, 5).map((g) => {
              const isSelected = g.id === selectedGoal.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => onSelectGoal(g)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? "border-[#EF3035] bg-red-50/50 dark:bg-red-950/20 text-[#EF3035] font-bold ring-1 ring-[#EF3035]"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span className="truncate">{g.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#EF3035]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step 8: Aspect Ratio & Duration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 block">
            Aspect Ratio
          </label>
          <div className="flex items-center gap-2">
            {aspectRatios.map((ar) => (
              <button
                key={ar}
                type="button"
                onClick={() => onSelectAspectRatio(ar)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  selectedAspectRatio === ar
                    ? "border-[#EF3035] bg-[#EF3035] text-white shadow-xs"
                    : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {ar}
              </button>
            ))}
          </div>
        </div>

        {selectedContentType.hasVideoDuration && (
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 block">
              Video Duration
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {videoDurations.slice(0, 4).map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => onSelectDuration(dur)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    selectedDuration === dur
                      ? "border-[#EF3035] bg-[#EF3035] text-white shadow-xs"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Generate Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#EF3035] to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-red-500/25 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
        >
          <Sparkles className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
          <span>{isGenerating ? "Creating Content Package..." : "GENERATE CONTENT PACKAGE"}</span>
        </button>
      </div>
    </div>
  );
};
