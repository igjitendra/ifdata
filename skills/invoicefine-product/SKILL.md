# InvoiceFine Product Knowledge & Positioning Skill

## Purpose
Guide the AI agent in framing InvoiceFine's product capabilities, value proposition, and user-facing benefits accurately without exposing internal implementation details.

## When to Use
- Writing product summaries, landing page copy, or promotional posts.
- Explaining how InvoiceFine solves common shopkeeper challenges.
- Comparing manual paper billing to modern digital management.

## Inputs
- Audience segment (e.g. Kirana, Hardware, Mobile Store).
- Pain point (e.g. lost credit dues, stockouts, slow billing).
- Distribution platform (Mobile App or Linux Desktop).

## Workflow
1. Review [`skills/invoicefine-product/PRODUCT-KNOWLEDGE.md`](file:///home/jitendra/Desktop/IFdata/skills/invoicefine-product/PRODUCT-KNOWLEDGE.md).
2. Connect the audience's primary headache to InvoiceFine's offline-first solution.
3. Anchor the narrative in real-world retail workflows (counter billing, evening cash tally, stock reorder).
4. Frame benefits in terms of time saved, money recovered, and peace of mind.

## Rules
- Emphasize the 100% offline capability—it works without internet.
- Never document private internal architecture, SQLite table schemas, or proprietary algorithms.
- Always communicate that the user's data stays safely on their own device.

## Output Format
- **Product Value Statement**: 1–2 sentence positioning summary.
- **Pain vs. Solution Grid**: Concise problem-to-resolution mapping.
- **User Outcome**: Quantifiable or tangible benefit (e.g., "Saves 1 hour every evening").

## Examples
- *Positioning*: "InvoiceFine turns your smartphone into a complete billing counter and digital Khata that runs 100% offline without needing Wi-Fi."
- *Value Statement*: "Track every rupee of customer credit and print thermal bills in 2 seconds."

## Quality Checklist
- [ ] Grounded in public product facts.
- [ ] No internal technical architecture or code exposed.
- [ ] Offline-first advantage is communicated where relevant.
- [ ] Language is easily understood by non-technical shop owners.
