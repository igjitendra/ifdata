# InvoiceFine Content Review & Pre-Delivery Audit Skill

## Purpose
Perform a structured, multi-point pre-delivery review on all marketing copy, prompts, scripts, and visual briefs before presenting them to the user or publishing them to public channels.

## When to Use
- Immediately prior to delivering any completed content package.
- When evaluating submissions from third-party copywriters or creative designers.
- When validating social media posts against brand guidelines and factual accuracy.

## Inputs
- Draft content package (Headline, Body, Prompts, Scripts, Captions, CTAs).
- Target audience, platform, and language parameters.

## Workflow
1. **Product Accuracy Audit**: Check feature names and capabilities against [`FEATURE-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-features/FEATURE-KNOWLEDGE.md).
2. **Brand Consistency Audit**: Verify brand colors (`#EF3035`), typography, and grounded commercial tone.
3. **Visual Integrity Audit**: Confirm that image/video prompts enforce the Real App Screenshot Rule and forbid generative UI.
4. **Language & Phrasing Audit**: Ensure natural flow without robotic translations or repetitive AI marketing clichés.
5. **Platform Appropriateness**: Verify aspect ratios, video durations, and character constraints.

## Rules
- If any feature or metric is unverified or exaggerated, revise it immediately before delivery.
- If an AI prompt asks for UI generation, replace it with the composite screenshot instruction.
- If a superlative ("#1 app", "Best software") is detected, remove it.

## Output Format
- **REVIEW VERDICT**: PASS / NEEDS REVISION
- **AUDIT FINDINGS TABLE**:
  - Feature Accuracy: [PASS / FAIL]
  - Real UI Rule Compliance: [PASS / FAIL]
  - Tone & Language Quality: [PASS / FAIL]
  - Claim Authenticity: [PASS / FAIL]
- **CORRECTIVE ACTIONS TAKEN** (if revisions were needed).

## Examples
```text
REVIEW VERDICT: PASS

AUDIT FINDINGS:
- Feature Accuracy: PASS (References confirmed 58mm Bluetooth thermal printing).
- Real UI Rule: PASS (Explicitly specifies compositing assets/screenshots/mobile/mobile-screen-4.png).
- Tone Quality: PASS (Natural Hinglish merchant dialogue, free of generic AI buzzwords).
- Claim Authenticity: PASS (No fake user counts, ratings, or government certifications claimed).

STATUS: Approved for publication and creative production.
```

## Quality Checklist
- [ ] All 4 audit categories evaluated.
- [ ] No unverified claims or fake superlatives present.
- [ ] UI compositing instruction verified.
- [ ] Clear PASS/REVISE determination made.
