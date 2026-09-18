"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { PresetBar } from "@/components/PresetBar";
import { StepWorkflow } from "@/components/StepWorkflow";
import { OutputPanel } from "@/components/OutputPanel";
import { FeatureCatalogModal } from "@/components/modals/FeatureCatalogModal";
import { TemplateLibraryModal } from "@/components/modals/TemplateLibraryModal";
import { SavedModal } from "@/components/modals/SavedModal";
import { AboutModal } from "@/components/modals/AboutModal";

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
  GeneratedContentPackage,
  SavedPrompt,
  Preset,
} from "@/types";

import { generateContentPackage } from "@/lib/promptEngine";
import {
  getSavedPrompts,
  savePrompt,
  getHistory,
  addToHistory,
  getStoredTheme,
  setStoredTheme,
} from "@/lib/storage";

export default function Home() {
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Selection states
  const [selectedFeature, setSelectedFeature] = useState<Feature>(FEATURES[0]);
  const [selectedContentType, setSelectedContentType] = useState<ContentType>(CONTENT_TYPES[0]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(PLATFORMS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [selectedAudience, setSelectedAudience] = useState<Audience>(AUDIENCES[0]);
  const [customAudience, setCustomAudience] = useState<string>("");
  const [selectedVisualStyle, setSelectedVisualStyle] = useState<VisualStyle>(VISUAL_STYLES[0]);
  const [selectedGoal, setSelectedGoal] = useState<ContentGoal>(CONTENT_GOALS[0]);
  const [selectedDuration, setSelectedDuration] = useState<VideoDuration>("15s");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<AspectRatio>("4:5");

  // Output and modal states
  const [generatedPackage, setGeneratedPackage] = useState<GeneratedContentPackage | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [historyPrompts, setHistoryPrompts] = useState<GeneratedContentPackage[]>([]);

  // Modals
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Initialize from storage on mount
  useEffect(() => {
    const t = getStoredTheme();
    setTheme(t);
    setStoredTheme(t);
    setSavedPrompts(getSavedPrompts());
    setHistoryPrompts(getHistory());
  }, []);

  // Sync aspect ratio when platform or content type changes
  const handleSelectPlatform = (p: Platform) => {
    setSelectedPlatform(p);
    setSelectedAspectRatio(p.recommendedRatio);
  };

  const handleSelectContentType = (ct: ContentType) => {
    setSelectedContentType(ct);
    setSelectedAspectRatio(ct.recommendedRatio);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setStoredTheme(next);
  };

  // Generation handler
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const pkg = generateContentPackage({
        feature: selectedFeature,
        contentType: selectedContentType,
        platform: selectedPlatform,
        language: selectedLanguage,
        audience: selectedAudience,
        customAudience: customAudience.trim() || undefined,
        visualStyle: selectedVisualStyle,
        goal: selectedGoal,
        videoDuration: selectedContentType.hasVideoDuration ? selectedDuration : undefined,
        aspectRatio: selectedAspectRatio,
      });

      setGeneratedPackage(pkg);
      addToHistory(pkg);
      setHistoryPrompts(getHistory());
      setIsGenerating(false);
    }, 350);
  };

  // Preset handler
  const handleSelectPreset = (preset: Preset) => {
    const feat = FEATURES.find((f) => f.id === preset.settings.featureId) || FEATURES[0];
    const ct = CONTENT_TYPES.find((c) => c.id === preset.settings.contentTypeId) || CONTENT_TYPES[0];
    const plat = PLATFORMS.find((p) => p.id === preset.settings.platformId) || PLATFORMS[0];
    const lang = LANGUAGES.find((l) => l.id === preset.settings.languageId) || LANGUAGES[0];
    const aud = AUDIENCES.find((a) => a.id === preset.settings.audienceId) || AUDIENCES[0];
    const vs = VISUAL_STYLES.find((v) => v.id === preset.settings.visualStyleId) || VISUAL_STYLES[0];
    const g = CONTENT_GOALS.find((gl) => gl.id === preset.settings.goalId) || CONTENT_GOALS[0];

    setSelectedFeature(feat);
    setSelectedContentType(ct);
    setSelectedPlatform(plat);
    setSelectedLanguage(lang);
    setSelectedAudience(aud);
    setSelectedVisualStyle(vs);
    setSelectedGoal(g);
    setSelectedAspectRatio(preset.settings.aspectRatio);
    if (preset.settings.videoDuration) {
      setSelectedDuration(preset.settings.videoDuration);
    }

    // Auto-generate for preset
    const pkg = generateContentPackage({
      feature: feat,
      contentType: ct,
      platform: plat,
      language: lang,
      audience: aud,
      visualStyle: vs,
      goal: g,
      videoDuration: preset.settings.videoDuration,
      aspectRatio: preset.settings.aspectRatio,
    });
    setGeneratedPackage(pkg);
    addToHistory(pkg);
    setHistoryPrompts(getHistory());
  };

  // Surprise Me (Randomizer)
  const handleSurpriseMe = () => {
    const randomFeat = FEATURES[Math.floor(Math.random() * FEATURES.length)];
    const randomCt = CONTENT_TYPES[Math.floor(Math.random() * CONTENT_TYPES.length)];
    const randomPlat = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];
    const randomLang = LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];
    const randomAud = AUDIENCES[Math.floor(Math.random() * AUDIENCES.length)];
    const randomVs = VISUAL_STYLES[Math.floor(Math.random() * VISUAL_STYLES.length)];
    const randomGoal = CONTENT_GOALS[Math.floor(Math.random() * CONTENT_GOALS.length)];

    setSelectedFeature(randomFeat);
    setSelectedContentType(randomCt);
    setSelectedPlatform(randomPlat);
    setSelectedLanguage(randomLang);
    setSelectedAudience(randomAud);
    setSelectedVisualStyle(randomVs);
    setSelectedGoal(randomGoal);
    setSelectedAspectRatio(randomPlat.recommendedRatio);

    const pkg = generateContentPackage({
      feature: randomFeat,
      contentType: randomCt,
      platform: randomPlat,
      language: randomLang,
      audience: randomAud,
      visualStyle: randomVs,
      goal: randomGoal,
      aspectRatio: randomPlat.recommendedRatio,
    });

    setGeneratedPackage(pkg);
    addToHistory(pkg);
    setHistoryPrompts(getHistory());
  };

  const handleSaveFavorite = (pkg: GeneratedContentPackage) => {
    savePrompt(pkg);
    setSavedPrompts(getSavedPrompts());
  };

  const handleLoadPackage = (pkg: GeneratedContentPackage) => {
    setSelectedFeature(pkg.inputs.feature);
    setSelectedContentType(pkg.inputs.contentType);
    setSelectedPlatform(pkg.inputs.platform);
    setSelectedLanguage(pkg.inputs.language);
    setSelectedAudience(pkg.inputs.audience);
    if (pkg.inputs.customAudience) {
      setCustomAudience(pkg.inputs.customAudience);
    }
    setSelectedVisualStyle(pkg.inputs.visualStyle);
    setSelectedGoal(pkg.inputs.goal);
    setSelectedAspectRatio(pkg.inputs.aspectRatio);
    if (pkg.inputs.videoDuration) {
      setSelectedDuration(pkg.inputs.videoDuration);
    }
    setGeneratedPackage(pkg);
  };

  const refreshStorageData = () => {
    setSavedPrompts(getSavedPrompts());
    setHistoryPrompts(getHistory());
  };

  const isCurrentFavorite = Boolean(
    generatedPackage && savedPrompts.some((p) => p.id === generatedPackage.id && p.isFavorite)
  );

  return (
    <div className="min-h-screen bg-zinc-100/70 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors">
      {/* Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        savedCount={savedPrompts.length}
        onOpenFeatures={() => setIsFeaturesOpen(true)}
        onOpenTemplates={() => setIsTemplatesOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* 1-Click Preset Bar */}
      <PresetBar
        onSelectPreset={handleSelectPreset}
        onSurpriseMe={handleSurpriseMe}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Selector Workflow */}
          <div className="lg:col-span-6 xl:col-span-5">
            <StepWorkflow
              selectedFeature={selectedFeature}
              onSelectFeature={setSelectedFeature}
              selectedContentType={selectedContentType}
              onSelectContentType={handleSelectContentType}
              selectedPlatform={selectedPlatform}
              onSelectPlatform={handleSelectPlatform}
              selectedLanguage={selectedLanguage}
              onSelectLanguage={setSelectedLanguage}
              selectedAudience={selectedAudience}
              onSelectAudience={setSelectedAudience}
              customAudience={customAudience}
              onChangeCustomAudience={setCustomAudience}
              selectedVisualStyle={selectedVisualStyle}
              onSelectVisualStyle={setSelectedVisualStyle}
              selectedGoal={selectedGoal}
              onSelectGoal={setSelectedGoal}
              selectedDuration={selectedDuration}
              onSelectDuration={setSelectedDuration}
              selectedAspectRatio={selectedAspectRatio}
              onSelectAspectRatio={setSelectedAspectRatio}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              onOpenFeaturesModal={() => setIsFeaturesOpen(true)}
            />
          </div>

          {/* Right Column: Output Panel */}
          <div className="lg:col-span-6 xl:col-span-7 sticky top-20">
            <OutputPanel
              pkg={generatedPackage}
              onSaveFavorite={handleSaveFavorite}
              isFavorite={isCurrentFavorite}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6 mt-12 text-xs text-zinc-500 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>InvoiceFine Social Media Prompt Studio • PRO CSC TOOLS</span>
          <span className="text-[11px]">
            Strict Real UI Screenshot Rule Enforced • 100% Client-Side Static App
          </span>
        </div>
      </footer>

      {/* Modals */}
      <FeatureCatalogModal
        isOpen={isFeaturesOpen}
        onClose={() => setIsFeaturesOpen(false)}
        selectedFeatureId={selectedFeature.id}
        onSelectFeature={(feat) => setSelectedFeature(feat)}
      />

      <TemplateLibraryModal
        isOpen={isTemplatesOpen}
        onClose={() => setIsTemplatesOpen(false)}
      />

      <SavedModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedPrompts={savedPrompts}
        historyPrompts={historyPrompts}
        onRefreshData={refreshStorageData}
        onLoadPackage={handleLoadPackage}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
