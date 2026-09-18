# InvoiceFine Master Content Agent Instructions
# INVOICEFINE-CONTENT-AGENT.md

This document governs how an AI agent executes content generation requests for InvoiceFine.

---

## 1. Core Operating Philosophy

The agent must **NEVER** blindly generate generic marketing copy or hallucinate user interfaces. Before writing a single line of text or generating a prompt, the agent must anchor its output in verified product facts, authentic Indian small-business contexts, and verified brand guidelines.

---

## 2. Universal 12-Step Execution Workflow

```
Step 1: Parse Request
        Identify whether the request is a structured brief or a conversational prompt.

Step 2: Determine Content Type
        Single Image Post, Carousel (5–10 slides), Reel / Short Video, Demo, Story, Article.

Step 3: Identify InvoiceFine Feature
        Cross-reference against skills/invoicefine-features/FEATURE-KNOWLEDGE.md.

Step 4: Identify Target Audience
        Kirana, Electronics, Garments, Hardware, Mobile Store, Wholesaler, Services.

Step 5: Identify Platform & Specs
        Instagram (1:1 / 4:5 / 9:16), YouTube (16:9 / 9:16), LinkedIn (1:1 / Doc), WhatsApp.

Step 6: Identify Language & Tone
        English (clear & simple), Hinglish (authentic merchant dialogue), or Hindi (natural).

Step 7: Identify Campaign Goal
        Awareness, Education, Feature Discovery, App Install, Pro Upgrade, Trust Building.

Step 8: Load Relevant Skills
        Load the required skill(s) from skills/<skill-name>/SKILL.md.

Step 9: Inspect Real Assets
        Check assets/screenshots/, assets/logo/, and assets/templates/ for real files.

Step 10: Generate Content Assets
         Draft copy, structured image/video prompts, scripts, and captions.

Step 11: Execute Content Review & Quality Gate
         Run skills/content-review/SKILL.md and skills/content-quality/SKILL.md checklists.

Step 12: Deliver Final Output
         Deliver organized, copyable, production-ready markdown cards.
```

---

## 3. Handling Ambiguous vs. Structured Requests

### A. Structured Content Brief
When the user supplies a structured brief:
```text
FEATURE: Customer Ledger
CONTENT TYPE: Carousel
PLATFORM: Instagram
LANGUAGE: Hinglish
AUDIENCE: Kirana Store Owner
GOAL: Problem Awareness
STYLE: Realistic Indian Shop
DURATION: N/A
ASPECT RATIO: 4:5
CTA: Download InvoiceFine Free
```
Immediately synthesize the inputs, load [`skills/carousel-design/SKILL.md`](file:///home/jitendra/Desktop/IFdata/skills/carousel-design/SKILL.md), and generate the complete slide-by-slide package.

### B. Vague or Open Request
If the user asks: *"Create a post for InvoiceFine"*
1. Do **NOT** generate generic corporate jargon.
2. Intelligently select a high-impact feature (e.g., GST Billing or Thermal Printing).
3. Target a relatable audience (e.g., Kirana Store or Retail Counter).
4. Propose a high-performing format (e.g., 30-second Reel or 7-slide Carousel).
5. Produce the complete, polished asset bundle immediately, accompanied by brief notes on the chosen angle.

---

## 4. The Real App Screenshot Rule (Mandatory)

Whenever generating AI image or video prompts involving the InvoiceFine interface:
1. **Never** instruct the AI model to draw the application screen.
2. Instruct the model to render a realistic merchant, shop counter, and physical smartphone, tablet, or monitor with a blank or placeholder display.
3. Add explicit instruction for human editors to composite real screenshots from `assets/screenshots/mobile/` or `assets/screenshots/desktop/`.

---

## 5. Standard Output Deliverable Structure

For comprehensive generation requests, deliver:
1. **Concept & Objective**: One-line core message and target funnel stage.
2. **Hook & Headline**: Scroll-stopping hook and clear primary headline.
3. **AI Image Prompt**: Subject, environment, camera, lighting, real screenshot instruction, and negative prompt.
4. **AI Video / Reel Prompt**: Scene-by-scene timing, camera motions, actions, on-screen text, and voice-over.
5. **Slide-by-Slide Carousel Breakdown**: Headline, body text, visual concept, and screenshot mockup direction per slide.
6. **Captions**: Short, medium, and educational variants.
7. **Hashtag Groups**: General, feature-specific, retail, and business clusters.
8. **Negative Prompt**: Flaws, bad anatomy, and AI UI hallucinations to avoid.
