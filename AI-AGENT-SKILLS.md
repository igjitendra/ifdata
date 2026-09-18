# InvoiceFine AI Agent Skills System — Installation & Integration Guide

The **InvoiceFine AI Content Creative Skills System** is a modular, portable collection of skills and domain knowledge bases designed to run across multiple AI coding agents, IDE assistants, and command-line LLM tools.

---

## 1. Supported Agent Environments

| Tool | Integration Method | Configuration File |
|---|---|---|
| **Claude Code** | Global or Project Instruction | `CLAUDE.md` or prompt import |
| **Gemini CLI** | System Instruction / Context | `GEMINI.md` or system prompt flag |
| **Antigravity IDE** | Customization Root | `.agents/skills/` or `AGENTS.md` |
| **Cursor IDE** | Project Rules | `.cursorrules` or `.cursor/rules/` |
| **Codex / Custom Agents** | Context Injection | Append `skills/INVOICEFINE-CONTENT-AGENT.md` |

---

## 2. Installation Methods

### Option A: Local Workspace Integration (Recommended)
Clone or copy the `skills/` directory into your project root:
```bash
cp -r /path/to/IFdata/skills ./skills
```
Point your agent to the master entry file:
```markdown
Read skills/INVOICEFINE-CONTENT-AGENT.md before creating InvoiceFine content.
```

### Option B: Antigravity IDE Skill Directory
For Antigravity IDE, copy the individual skills into your workspace customization root:
```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```
Antigravity automatically discovers skills containing a valid `SKILL.md`.

### Option C: Cursor Integration
Create or update `.cursorrules` in your project root:
```
You are the InvoiceFine Content & Creative Director.
Before generating marketing content, social media posts, image prompts, or video scripts,
review the brand standards in skills/invoicefine-brand/BRAND-KNOWLEDGE.md and
feature details in skills/invoicefine-features/FEATURE-KNOWLEDGE.md.
Always enforce the Real App Screenshot Rule: never let AI draw fake UI.
```

---

## 3. Skill Execution Workflow

Every AI agent must follow this 6-phase pipeline:

```
[Phase 1: Request Analysis]
  Determine format (Reel, Carousel, Image, Copy, Demo), goal, audience, and platform.
       ↓
[Phase 2: Knowledge Retrieval]
  Load BRAND-KNOWLEDGE.md and PRODUCT-KNOWLEDGE.md.
       ↓
[Phase 3: Feature Verification]
  Verify feature exists in FEATURE-KNOWLEDGE.md. Ensure it is not "Coming Soon".
       ↓
[Phase 4: Skill Activation]
  Load the matching skill (e.g. skills/reel-creation/SKILL.md).
       ↓
[Phase 5: Generation]
  Draft content enforcing real screenshot compositing and authentic tone.
       ↓
[Phase 6: Quality Gate]
  Validate output against skills/content-quality/SKILL.md checklist.
```

---

## 4. How to Update or Extend Skills

### Adding a New Confirmed Feature
1. Open [`skills/invoicefine-features/FEATURE-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-features/FEATURE-KNOWLEDGE.md).
2. Append the new feature following the standard schema:
   - **Feature Name**: Public name.
   - **Problem Solved**: Daily operational headache.
   - **User Benefit**: Direct tangible value.
   - **Demo Workflow**: Step-by-step user interaction.
   - **Visual Concept**: Scene and composition description.
   - **CTA**: Direct action button or link.

### Adding a New Content Skill
1. Create directory: `skills/<new-skill-name>/`
2. Create `SKILL.md` inside using the standard 8-section layout:
   - `# Skill Name`
   - `## Purpose`
   - `## When to Use`
   - `## Inputs`
   - `## Workflow`
   - `## Rules`
   - `## Output Format`
   - `## Examples`
   - `## Quality Checklist`
3. Register the new skill in [`skills/README.md`](file:///home/jitendra/Desktop/IFdata/skills/README.md).

---

## 5. Security and Confidentiality Guardrails

All skills are public-safe. When writing or updating skills:
- Never include credentials, tokens, private keys, or passwords.
- Never document internal private API routes or backend database schemas.
- Keep all explanations strictly user-facing and product-focused.
