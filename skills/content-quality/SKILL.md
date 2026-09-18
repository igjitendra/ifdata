# InvoiceFine Content Quality & Compliance Gate Skill

## Purpose
Enforce the absolute quality standards, factual integrity, anti-hallucination guardrails, and public repository security constraints across all AI-generated content.

## When to Use
- As the mandatory final gate before finalizing any marketing document, prompt bundle, or code release.
- When validating public information repository files for security and confidentiality compliance.

## Inputs
- Final drafted asset bundle or repository document.

## Workflow
1. Run the **15-Point Quality Verification Checklist**.
2. Perform automated pattern check for forbidden confidential terms (`API_KEY`, `SECRET`, `PASSWORD`, `TOKEN`, `PRIVATE_KEY`, `.env`).
3. Confirm that all claims are grounded in verifiable software facts.
4. Verify that planned features are clearly designated as "Coming Soon".

## Rules
- **ZERO TOLERANCE FOR FAKE CLAIMS**: Never include fake user counts, synthetic ratings (e.g., "Rated 4.9 Stars by 100,000 users"), fictitious customer testimonials, or fake government approvals.
- **ZERO TOLERANCE FOR SECRETS**: Never commit API keys, signing credentials, tokens, or private developer configurations.
- **ZERO TOLERANCE FOR FAKE UI**: Never allow generative AI to hallucinate application screens.

## Output Format
- **15-POINT COMPLIANCE GATE**:
```text
[ ] 1. Standalone usefulness to the reader
[ ] 2. High specificity (concrete retail metrics, not vague promises)
[ ] 3. Brand-consistent colors, tone, and character
[ ] 4. Factually accurate feature descriptions
[ ] 5. Clear, concise, and easy to understand
[ ] 6. Zero fake claims or inflated guarantees
[ ] 7. Zero fabricated testimonials or customer stories
[ ] 8. Zero invented statistics or market share figures
[ ] 9. Zero fake reviews or star ratings
[ ] 10. Zero fake certifications or industry awards
[ ] 11. Zero fake corporate or government partnerships
[ ] 12. Zero claims of official government approval
[ ] 13. Zero unconfirmed or hallucinated features
[ ] 14. Zero synthetic, AI-generated software UI screens
[ ] 15. Zero confidential secrets, credentials, or private code exposed
```
- **GATE STATUS**: APPROVED / BLOCKED

## Examples
- *Violation*: "Join 500,000+ Indian shopkeepers who doubled their profits using InvoiceFine's AI tax engine!" → **BLOCKED** (Fake stats, unverified claims, unconfirmed feature).
- *Compliant*: "InvoiceFine helps Indian retailers create GST bills, track customer dues, and print thermal receipts 100% offline." → **APPROVED** (100% accurate, factual, zero fluff).

## Quality Checklist
- [ ] All 15 verification points evaluated.
- [ ] Zero security or private information leaked.
- [ ] Language is honest, practical, and grounded.
- [ ] Explicit gate status rendered.
