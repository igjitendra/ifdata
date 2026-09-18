export type AspectRatio = "1:1" | "4:5" | "9:16" | "16:9";

export type VideoDuration = "6s" | "8s" | "10s" | "15s" | "20s" | "30s" | "45s" | "60s";

export type LanguageCode = "en" | "hinglish" | "hi";

export interface Feature {
  id: string;
  name: string;
  category: "Billing" | "Customers" | "Inventory" | "Printing" | "Reports" | "General" | "Planned";
  tagline: string;
  problem: string;
  benefit: string;
  keywords: string[];
  isComingSoon?: boolean;
}

export interface ContentType {
  id: string;
  name: string;
  category: "Visual" | "Video" | "Educational" | "Commercial";
  description: string;
  recommendedRatio: AspectRatio;
  hasVideoDuration?: boolean;
  badge?: string;
}

export interface Platform {
  id: string;
  name: string;
  recommendedRatio: AspectRatio;
  supportedRatios: AspectRatio[];
  maxDuration?: string;
  captionStyle: string;
  ctaStyle: string;
}

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  description: string;
}

export interface Audience {
  id: string;
  name: string;
  businessType: string;
  context: string;
  painPoint: string;
}

export interface VisualStyle {
  id: string;
  name: string;
  description: string;
  visualKeywords: string;
  lightingKeywords: string;
}

export interface ContentGoal {
  id: string;
  name: string;
  description: string;
  ctaFocus: string;
}

export interface CarouselSlide {
  slideNumber: number;
  headline: string;
  bodyText: string;
  visualConcept: string;
  imagePrompt: string;
  screenshotInstruction: string;
  designDirection: string;
  cta?: string;
}

export interface VideoScene {
  sceneNumber: number;
  timeRange: string;
  visual: string;
  camera: string;
  action: string;
  onScreenText: string;
}

export interface ReelPackage {
  hook: string;
  problem: string;
  solution: string;
  feature: string;
  demonstration: string;
  benefit: string;
  cta: string;
  coverText: string;
  voiceover: string;
  onScreenText: string[];
  caption: string;
  hashtags: string;
  videoPrompt: string;
}

export interface GeneratedContentPackage {
  id: string;
  timestamp: number;
  inputs: {
    feature: Feature;
    contentType: ContentType;
    platform: Platform;
    language: Language;
    audience: Audience;
    customAudience?: string;
    visualStyle: VisualStyle;
    goal: ContentGoal;
    videoDuration?: VideoDuration;
    aspectRatio: AspectRatio;
  };
  concept: string;
  hook: string;
  headline: string;
  subheadline: string;
  imagePrompt: {
    prompt: string;
    textArea: string;
    screenshotInstruction: string;
    negativePrompt: string;
  };
  videoPrompt: {
    objective: string;
    duration: string;
    aspectRatio: AspectRatio;
    visualStyle: string;
    scenes: VideoScene[];
    voiceover: string;
    endingCta: string;
    negativePrompt: string;
  };
  carousel: {
    totalSlides: number;
    slides: CarouselSlide[];
  };
  reel: ReelPackage;
  captions: {
    short: string;
    medium: string;
    educational: string;
    sales: string;
    reel: string;
    carousel: string;
  };
  cta: string;
  hashtags: string[];
  designDirection: {
    palette: string[];
    typography: string;
    layout: string;
    screenshotPlacement: string;
  };
  negativePrompt: string;
  fullContentText: string;
}

export interface SavedPrompt {
  id: string;
  title: string;
  timestamp: number;
  isFavorite: boolean;
  data: GeneratedContentPackage;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
  settings: {
    featureId: string;
    contentTypeId: string;
    platformId: string;
    languageId: LanguageCode;
    audienceId: string;
    visualStyleId: string;
    goalId: string;
    videoDuration?: VideoDuration;
    aspectRatio: AspectRatio;
  };
}
