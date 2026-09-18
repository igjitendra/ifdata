"use client";

import React from "react";
import { Download, FileText, FileCode } from "lucide-react";
import { GeneratedContentPackage } from "@/types";

interface DownloadButtonsProps {
  pkg: GeneratedContentPackage;
  className?: string;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({ pkg, className = "" }) => {
  const sanitizeFilename = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");

  const handleDownloadTxt = () => {
    const filename = `invoicefine-${sanitizeFilename(pkg.inputs.feature.name)}-${sanitizeFilename(
      pkg.inputs.contentType.name
    )}.txt`;
    const element = document.createElement("a");
    const file = new Blob([pkg.fullContentText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadMd = () => {
    const filename = `invoicefine-${sanitizeFilename(pkg.inputs.feature.name)}-${sanitizeFilename(
      pkg.inputs.contentType.name
    )}.md`;
    const markdownContent = `# InvoiceFine Social Media Package: ${pkg.inputs.feature.name}

> Generated on ${new Date(pkg.timestamp).toLocaleString()} for **${pkg.inputs.platform.name}**
> Content Type: **${pkg.inputs.contentType.name}** | Language: **${pkg.inputs.language.name}**

---

## 1. Concept & Hook
- **Target Audience**: ${pkg.inputs.customAudience || pkg.inputs.audience.name}
- **Goal**: ${pkg.inputs.goal.name}
- **Aspect Ratio**: \`${pkg.inputs.aspectRatio}\`
- **Hook**: *"${pkg.hook}"*
- **Headline**: **${pkg.headline}**
- **Subheadline**: ${pkg.subheadline}

---

## 2. AI Image Generation Prompt (Midjourney / FLUX / DALL-E)

\`\`\`text
${pkg.imagePrompt.prompt}
\`\`\`

- **Text Area**: ${pkg.imagePrompt.textArea}
- **Real Screenshot Directive**: ${pkg.imagePrompt.screenshotInstruction}
- **Negative Prompt**: \`${pkg.imagePrompt.negativePrompt}\`

---

## 3. AI Video Generation Prompt (Runway / Kling / Luma)
- **Objective**: ${pkg.videoPrompt.objective}
- **Duration**: ${pkg.videoPrompt.duration}

${pkg.videoPrompt.scenes
  .map(
    (s) => `### Scene ${s.sceneNumber} (${s.timeRange})
- **Visual**: ${s.visual}
- **Camera**: ${s.camera}
- **Action**: ${s.action}
- **On-Screen Text**: *"${s.onScreenText}"*`
  )
  .join("\n\n")}

### Voice-Over Script
> "${pkg.videoPrompt.voiceover}"

### Ending CTA
> "${pkg.videoPrompt.endingCta}"

---

## 4. Carousel Breakdown (7 Slides)

${pkg.carousel.slides
  .map(
    (s) => `### Slide ${s.slideNumber}: ${s.headline}
- **Body**: ${s.bodyText}
- **Visual Concept**: ${s.visualConcept}
- **UI Directive**: ${s.screenshotInstruction}`
  )
  .join("\n\n")}

---

## 5. Reel & Short-Form Script
- **Hook (0–2s)**: ${pkg.reel.hook}
- **Problem (2–5s)**: ${pkg.reel.problem}
- **Solution (5–10s)**: ${pkg.reel.solution}
- **Demo (10–15s)**: ${pkg.reel.demonstration}
- **Benefit & CTA**: ${pkg.reel.benefit} | ${pkg.reel.cta}

---

## 6. Captions Bank

### Short Caption
\`\`\`text
${pkg.captions.short}
\`\`\`

### Medium Caption
\`\`\`text
${pkg.captions.medium}
\`\`\`

### Educational Caption
\`\`\`text
${pkg.captions.educational}
\`\`\`

---

## 7. Call to Action & Hashtags
**CTA**: ${pkg.cta}

**Hashtags**:
\`${pkg.hashtags.join(" ")}\`
`;

    const element = document.createElement("a");
    const file = new Blob([markdownContent], { type: "text/markdown;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleDownloadTxt}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 transition-all active:scale-95"
        title="Download plain text file"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Download TXT</span>
      </button>

      <button
        type="button"
        onClick={handleDownloadMd}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 transition-all active:scale-95"
        title="Download formatted Markdown file"
      >
        <FileCode className="w-3.5 h-3.5" />
        <span>Download MD</span>
      </button>
    </div>
  );
};
