# InvoiceFine Feature Selection & Accuracy Skill

## Purpose
Ensure that any content, creative script, or prompt references only verified, existing InvoiceFine capabilities, preventing feature hallucination and misrepresentation.

## When to Use
- Whenever selecting a feature to spotlight in a marketing campaign or social post.
- When validating feature names, workflows, and specifications.
- When creating feature comparisons or product demo scripts.

## Inputs
- Desired topic or user prompt.
- Marketing goal (Awareness, Education, Feature Spotlight, Pro Upgrade).

## Workflow
1. Look up the feature in [`skills/invoicefine-features/FEATURE-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-features/FEATURE-KNOWLEDGE.md).
2. Verify that the feature is currently active and not labeled "Coming Soon".
3. Extract the confirmed user benefit, problem solved, and demo angle.
4. If a requested feature is non-existent, redirect to the closest verified capability or clearly mark it as a future roadmap concept.

## Rules
- Never invent features (e.g. AI-automated tax audits, cryptocurrency payment gateways).
- Use confirmed feature terminology (e.g., "Customer Ledger", "Thermal Receipt Printing", "Low Stock Alerts").
- Clearly tag roadmap features as "Coming Soon".

## Output Format
- **Feature Name**: Exact confirmed public name.
- **Category**: Billing, Khata, Inventory, Hardware, Documents, or Safety.
- **Verified Benefit**: Direct user benefit.
- **Workflow Summary**: 3-step action sequence.

## Examples
- *Confirmed*: "Thermal Receipt Printing (58mm & 80mm Bluetooth & USB OTG)"
- *Prohibited*: "Automated AI Tax Advisor with government direct portal upload"

## Quality Checklist
- [ ] Feature verified in `FEATURE-KNOWLEDGE.md`.
- [ ] No unconfirmed features described as currently available.
- [ ] Correct terminology used throughout.
- [ ] Benefit matches actual user workflow.
