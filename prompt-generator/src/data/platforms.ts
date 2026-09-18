import { Platform } from "@/types";

export const PLATFORMS: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    recommendedRatio: "4:5",
    supportedRatios: ["4:5", "9:16", "1:1"],
    maxDuration: "90s",
    captionStyle: "Visual, engaging, short paragraphs, clean bullet points, emojis",
    ctaStyle: "Link in bio / Save this post / Share with a business friend",
  },
  {
    id: "youtube-shorts",
    name: "YouTube Shorts",
    recommendedRatio: "9:16",
    supportedRatios: ["9:16"],
    maxDuration: "60s",
    captionStyle: "Search-optimized title, focused description, direct pin comment CTA",
    ctaStyle: "Subscribe & download app from description link",
  },
  {
    id: "youtube",
    name: "YouTube (Long-form)",
    recommendedRatio: "16:9",
    supportedRatios: ["16:9"],
    captionStyle: "Detailed timestamps, comprehensive summary, download links, tutorial steps",
    ctaStyle: "Download link in description & pinned comment",
  },
  {
    id: "facebook",
    name: "Facebook",
    recommendedRatio: "4:5",
    supportedRatios: ["4:5", "1:1", "16:9"],
    captionStyle: "Conversational, relatable local retailer stories, direct links in post body",
    ctaStyle: "Click the download link below to get started",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    recommendedRatio: "4:5",
    supportedRatios: ["4:5", "1:1", "16:9"],
    captionStyle: "Professional, analytical, focus on business metrics, efficiency and SME growth",
    ctaStyle: "Follow for retail business insights / Try the software on Linux desktop",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    recommendedRatio: "9:16",
    supportedRatios: ["9:16", "4:5", "1:1"],
    captionStyle: "Direct, personal, conversational, bullet points, immediate action",
    ctaStyle: "Reply to this message or tap link to download directly",
  },
];
