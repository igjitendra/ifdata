# InvoiceFine Public Information & Creative Skills Repository
# AGENTS.md — Master Entry Point for AI Agents

Welcome to the **InvoiceFine Public Information & Creative Skills Repository**.

This document is the primary instruction file for any AI coding agent, content agent, or language model (including Claude Code, Gemini CLI, Antigravity, Cursor, and Codex) operating within this directory.

---

## 1. Operating Context & Safety

- **Public Repository**: This repository is public-facing. It contains product documentation, marketing assets, release notes, and installable AI creative skills.
- **Strict No-Code Rule**: Do NOT inspect, expose, or copy private application source code, internal endpoints, or private architecture.
- **Strict Security Rule**: Never create or commit API keys, secrets, tokens, passwords, private keys, or `.env` files.
- **Fact-Based Marketing**: Never invent features, user testimonials, ratings, download numbers, partnerships, or certifications.

---

## 2. Brand Identity Tokens

| Property | Value | Notes |
|---|---|---|
| **Brand Name** | InvoiceFine | Single word, camel case |
| **Developer / Entity** | PRO CSC TOOLS | Creator & publisher |
| **Primary Brand Color** | `#EF3035` | Vibrant crimson red (used for CTAs, highlights, accents) |
| **Primary Text Color** | `#171717` | Deep neutral charcoal |
| **Background Neutrals** | `#FFFFFF`, `#F8F9FA`, `#F3F4F6` | Clean, high contrast, airy |
| **Brand Tone** | Practical, dependable, honest, modern | Tailored for Indian small business owners |
| **Anti-Patterns** | No neon, no crypto aesthetic, no flashy fintech bubbles, no fake dashboards |

---

## 3. Product Positioning & Overview

- **Core Tagline**: Complete Business Management from Your Phone.
- **Short Phrasing**: Bill banao. Stock track karo. Payment manage karo. Business samjho.
- **Platforms**: Android Mobile Application + Linux Desktop Application.
- **Target Audience**: Kirana stores, retail shops, electronics & mobile stores, clothing shops, hardware stores, wholesalers, and service providers.
- **Key Differentiator**: 100% offline-first capability. All data resides safely on the merchant's device with zero dependency on cloud or internet for daily billing.

---

## 4. The Real App Screenshot Rule

When creating visual prompts or marketing assets:

> **NEVER** instruct an image or video AI (Midjourney, FLUX, Runway, Kling) to generate the InvoiceFine user interface. Generative AI hallucinates fake buttons, distorted numbers, and broken layouts.

**Correct Workflow**:
1. Prompt the AI tool to generate the authentic business environment, merchant, counter, and physical device (smartphone, tablet, laptop).
2. Specify a clean, blank, or placeholder screen on the physical device.
3. Composite the verified, real screenshot from `assets/screenshots/` onto the device display during post-processing.

---

## 5. Skills System Loading Protocol

When responding to user requests, follow this order:

1. **Understand Objective**: Determine target format (Image, Video, Carousel, Reel, Copy, Demo, Article).
2. **Load Knowledge**: Read [`skills/invoicefine-brand/BRAND-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-brand/BRAND-KNOWLEDGE.md) and [`skills/invoicefine-product/PRODUCT-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-product/PRODUCT-KNOWLEDGE.md).
3. **Validate Feature**: Cross-reference against [`skills/invoicefine-features/FEATURE-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-features/FEATURE-KNOWLEDGE.md) to ensure the feature exists and is not a "Coming Soon" item.
4. **Load Specific Skill**: Refer to the relevant skill in `skills/<skill_name>/SKILL.md`.
5. **Inspect Assets**: Check `assets/` for matching logos, templates, or screenshots.
6. **Generate Output**: Produce structured, production-ready deliverables.
7. **Apply Quality Gate**: Run the verification checklist in [`skills/content-quality/SKILL.md`](file:///home/jitendra/Desktop/IFdata/skills/content-quality/SKILL.md).

---

## 6. Directory Map

- `AGENTS.md`: Master agent instructions (this file).
- `AI-AGENT-SKILLS.md`: Installation and integration guide for AI agents and IDEs.
- `PROMPT-GENERATOR-APP.md`: Client-side prompt generator web application guide.
- `skills/`: Reusable skill packages and knowledge bases.
- `assets/`: Official screenshots, logos, templates, and banners.
- `social-media/`: Core social media content library and calendars.
- `prompt-generator/`: Standalone Next.js static export web app.
