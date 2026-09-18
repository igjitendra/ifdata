# InvoiceFine Social Media Prompt Generator
[![Live App](https://img.shields.io/badge/Live%20App-ifprompt.vercel.app-success.svg)](https://ifprompt.vercel.app/)

The **InvoiceFine Social Media Prompt Generator** is a dedicated client-side web application designed for marketing teams, content creators, and social media managers. It generates production-ready marketing copy, structured AI image prompts (Midjourney, FLUX), and AI video prompts (Runway, Kling, Luma) specifically tailored for InvoiceFine features across all major social media platforms.

**Live Application**: [https://ifprompt.vercel.app/](https://ifprompt.vercel.app/)

---

## 1. Key Capabilities

- **Zero-Backend Architecture**: Runs completely in your web browser. No databases, no external API keys, and no servers required at runtime.
- **Strict Brand Enforcement**: Enforces InvoiceFine's official `#EF3035` brand palette, clean typography, and the mandatory **Real App Screenshot Rule** across all visual prompts.
- **Multi-Format Generation**: Produces 11 distinct assets per generation, including Hooks, Headlines, AI Image Prompts, AI Video Prompts, 7-Slide Carousels, Reel Scripts, Captions in 6 variations, Grouped Hashtags, and Negative Prompts.
- **Multilingual Support**: Generates natural copy in English, conversational Hinglish (tailored for Indian business merchants), and formal Hindi.
- **Local Persistence**: Saves generation history, favorite items, and dark/light mode preference directly in browser `localStorage`.
- **Instant Export**: Copy individual cards, copy the complete package in plain text, or export formatted Markdown and TXT files with a single click.

---

## 2. Supported Matrix

### Features (42 Confirmed InvoiceFine Capabilities)
- **Billing & Tax**: GST Billing, Non-GST Billing, CGST / SGST / IGST calculation, GSTIN validation.
- **Customer Ledger**: Customer Management, Customer Ledger, Outstanding Due Tracking, Payment History.
- **Catalog & Inventory**: Product Catalog, Service Catalog, Stock Management, Low Stock Alerts, Barcode Scanning.
- **Documents & Sharing**: Estimates & Quotations, Expenses, PDF Generation, WhatsApp Direct Sharing, Email & Telegram Sharing.
- **Hardware & Printing**: Thermal 58mm Printing, Thermal 80mm Printing, A4 Office Printing, Bluetooth Printer, Wi-Fi & USB OTG Printing.
- **Data & Safety**: Offline-First Billing, Local Backup & Restore, CSV Import/Export, Pro Plan.

### Content Types (14 Formats)
1. Single Image Post (Feed graphic)
2. Carousel Post (5–10 slides)
3. Instagram Reel (Short vertical video)
4. Short Video (TikTok / YouTube Shorts)
5. Product Demo Video (Feature walkthrough)
6. Educational Post (Value-first breakdown)
7. Feature Spotlight (Deep-dive on one capability)
8. Problem → Solution (Relatable pain point & resolution)
9. Business Tip (Practical retail advice)
10. GST Education (Compliance guidance)
11. Step-by-Step Tutorial (Actionable workflow)
12. Product Announcement (New version or feature launch)
13. Instagram Story (Engaging 24-hour bite)
14. LinkedIn Professional Post (B2B business insights)

### Target Platforms (6 Platforms)
- **Instagram**: Feed posts (1:1 / 4:5), Reels (9:16), Stories (9:16).
- **Facebook**: Business posts, community updates, video shorts.
- **YouTube Shorts**: 9:16 high-retention vertical video with fast hooks.
- **YouTube**: 16:9 widescreen tutorials and feature overviews.
- **LinkedIn**: Thought leadership, formal business advice, professional carousels.
- **WhatsApp Business**: Direct customer updates and status broadcast templates.

### Target Audiences
- Kirana & Grocery Store Owners
- Retail Shop Owners
- Electronics & Mobile Store Owners
- Clothing & Garment Store Owners
- Hardware & Building Material Stores
- Wholesalers & Distributors
- Service Providers & Freelancers
- GST-Registered Small Businesses
- Custom Business Audiences (user-defined input)

### Visual Styles
- **Professional SaaS**: Sleek, modern tech aesthetic with subtle drop shadows and brand accents.
- **Modern Indian Business**: Contemporary shop counters with warm lighting and authentic merchant settings.
- **Realistic Indian Retail**: Authentic Kirana and hardware counters with real merchandise.
- **Premium Product Marketing**: Studio lighting, high-contrast, commercial product placement.
- **Minimal Clean**: High negative space, crisp typography, and uncluttered composition.
- **3D Product Advertising**: Isometric renders with soft clay textures and clean lighting.
- **Cinematic Commercial**: Anamorphic 35mm lens, atmospheric rim lighting, realistic business environments.
- **Mobile-First Marketing**: Focus on handheld smartphones displaying the application.

---

## 3. How to Use the Generator

### Step 1: Quick Presets or Custom Setup
- **One-Click Presets**: Select one of the preset chips at the top (e.g., *Quick Reel*, *GST Education*, *Business Tip*, *Feature Spotlight*, or *Surprise Me*) to instantly populate recommended settings.
- **Manual Configuration**: Follow Steps 1 through 8 in the left configuration panel.

### Step 2: Configure Your Campaign
1. **Select Feature**: Choose the InvoiceFine capability to highlight.
2. **Select Content Type**: Pick your desired format (e.g., Reel, Carousel, Single Image).
3. **Select Platform**: Choose where you will publish. The generator automatically suggests the optimal aspect ratio.
4. **Choose Language**: Pick between English, Hinglish, or Hindi.
5. **Target Audience**: Select the merchant demographic or specify a custom audience.
6. **Visual Style**: Choose the rendering style for AI image and video generators.
7. **Content Goal**: Select the objective (e.g., Awareness, Download, Education, Feature Discovery).
8. **Video Duration & Aspect Ratio**: Adjust the duration (if video/reel) and override aspect ratio if required.

### Step 3: Generate
Click **Generate Complete Package**. In less than a second, the complete structured content package will be generated client-side.

### Step 4: Review and Export
- Use the tabs on the output panel to inspect:
  - **Overview**: Concept, hook, headlines, and quick summaries.
  - **Image Prompt**: Midjourney/FLUX prompt, text layout instructions, and negative prompt.
  - **Video / Reel**: Scene-by-scene script, camera motions, and voice-over.
  - **Carousel**: Slide-by-slide headlines, body copy, and visual concept.
  - **Captions**: 6 pre-written variants (Short, Medium, Educational, Sales, Reel, Carousel).
  - **Hashtags**: Grouped by General, Feature-specific, GST, and Retail.
  - **Full Content**: Unified plain text export.
- Click **Copy** on any card, or use the **Download Markdown** / **Download TXT** buttons to save files locally.

---

## 4. The Real App Screenshot Rule

To ensure marketing credibility and prevent AI visual generators from hallucinating fake or broken software interfaces:

> **CRITICAL RULE**: AI image and video generators (Midjourney, FLUX, Runway, Kling) must **NEVER** be prompted to create the InvoiceFine user interface.
>
> All generated visual prompts explicitly instruct:
> - Render the realistic physical device (smartphone, tablet, laptop, or desktop monitor) in the authentic business environment.
> - Leave the device screen clean or ready for composite mockup.
> - Insert the actual, verified screenshot from `assets/screenshots/` onto the screen in post-production.

---

## 5. Deployment Guide

The application is built with Next.js using `output: "export"` in `next.config.ts`, generating purely static HTML, CSS, and JavaScript inside the `out/` folder.

### Option A: Deploy to GitHub Pages

1. **Configure Repository Path (if not a custom domain)**:
   In `next.config.ts`, if your repository is hosted at `https://<username>.github.io/<repo-name>/`, set the `basePath`:
   ```bash
   NEXT_PUBLIC_BASE_PATH="/<repo-name>" npm run build
   ```
   Or set `basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""` (already configured).

2. **Automated GitHub Action Deployment**:
   Create `.github/workflows/deploy-prompt-generator.yml` in your repository:
   ```yaml
   name: Deploy Prompt Generator to GitHub Pages

   on:
     push:
       branches: [ main ]
       paths:
         - 'prompt-generator/**'

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
             cache-dependency-path: prompt-generator/package-lock.json

         - name: Install dependencies
           run: cd prompt-generator && npm ci

         - name: Build static export
           run: cd prompt-generator && npm run build
           env:
             NEXT_PUBLIC_BASE_PATH: "/${{ github.event.repository.name }}"

         - name: Setup Pages
           uses: actions/configure-pages@v5

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: prompt-generator/out

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Option B: Deploy to Vercel

1. **Import the Project**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Select your Git repository.
   - Set **Root Directory** to `prompt-generator`.
2. **Build Settings**:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `out` (automatically recognized for static exports)
3. **Click Deploy**:
   Vercel deploys the application globally across edge networks with zero runtime configuration needed.

---

## 6. How to Update Content Templates & Features

All generator data is modularized in cleanly typed TypeScript files located in `prompt-generator/src/data/`:

| File | Purpose |
|------|---------|
| `src/data/features.ts` | List of confirmed InvoiceFine features, their benefits, and problems solved. |
| `src/data/contentTypes.ts` | Content types, recommended aspect ratios, and durations. |
| `src/data/platforms.ts` | Social platforms, caption limits, and tone rules. |
| `src/data/audiences.ts` | Audience demographics, pain points, and shop settings. |
| `src/data/visualStyles.ts` | Lighting, camera lenses, and visual environments. |
| `src/data/goals.ts` | Marketing goals and CTA directions. |
| `src/data/presets.ts` | One-click preset configurations for marketing teams. |
| `src/lib/promptEngine.ts` | Deterministic prompt assembly engine for Midjourney, Runway, Reels, and Captions. |

### Adding a New Confirmed Feature
1. Open `src/data/features.ts`.
2. Add the feature definition:
   ```ts
   {
     id: "new_feature_id",
     name: "New Feature Name",
     category: "Billing", // or "Ledger", "Inventory", etc.
     summary: "Short one-line description of the capability.",
     problem: "The common retail pain point this feature solves.",
     benefit: "The tangible business benefit delivered to the merchant.",
     screenshotFilename: "feature_screenshot.png",
     isComingSoon: false
   }
   ```
3. Run `npm run build` to verify types and recompile the static bundle.
