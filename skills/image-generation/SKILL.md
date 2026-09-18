# InvoiceFine AI Image Prompt Generation Skill

## Purpose
Generate production-ready prompts for AI image tools (Midjourney v6, FLUX.1, DALL-E 3) depicting realistic Indian retail environments, merchants, and hardware setups while strictly enforcing the Real App Screenshot Rule.

## When to Use
- Creating hero graphics for social posts, ads, website banners, or carousels.
- Designing realistic mockup scenes featuring smartphones, tablets, or thermal printers.
- Generating background compositions with dedicated empty spaces for graphic overlays.

## Inputs
- Feature to highlight (e.g. GST Billing, Customer Khata, Thermal Printing).
- Target audience / retail setting (Kirana, Electronics, Garments, Hardware).
- Visual style (e.g. Modern Indian Business, Realistic Retail, Clean SaaS, Studio Commercial).
- Aspect ratio (1:1, 4:5, 16:9).

## Workflow
1. Specify subject: Realistic Indian shopkeeper or merchant interacting naturally with customers or hardware.
2. Specify environment: Detailed authentic retail counter (merchandise, barcode scanner, receipt roll, counter desk).
3. Specify camera, lens, and lighting: 35mm / 50mm lens, natural daylight, soft warm rim lighting, shallow depth of field.
4. Leave clean text area: Allocate 30–40% negative space on top or side for marketing headline overlays.
5. Include physical device: Smartphone, tablet, or monitor held naturally.
6. Mandate blank screen / screenshot placeholder for real UI compositing.
7. Append standard negative prompt.

## Rules
- **MANDATORY REAL SCREENSHOT RULE**: NEVER instruct AI to draw the InvoiceFine software screen. Prompt for a blank glass screen or clean neutral mockup display.
- Avoid cartoonish, exotic, or caricatured portrayals of Indian shops. Maintain realistic dignity.
- Always include explicit negative prompt parameters.

## Output Format
- **PROMPT**: Full ready-to-paste prompt.
- **ASPECT RATIO**: `--ar 4:5`, `--ar 1:1`, or `--ar 16:9`.
- **TEXT AREA**: Designated space for copy placement.
- **SCREENSHOT INSTRUCTION**: Exact file path from `assets/screenshots/` to composite onto the device screen.
- **NEGATIVE PROMPT**: Parameters avoiding distortion, text gibberish, and fake UI.

## Examples
```text
PROMPT: A confident 35-year-old Indian electronics shop owner standing at a neat retail counter, holding a modern Android smartphone with a blank dark screen angled toward the camera, a compact 58mm thermal receipt printer with a printed slip beside a desktop monitor, neatly arranged mobile accessories and phone boxes on organized shelves in the background, warm commercial store lighting, soft cinematic depth of field, 50mm lens, f/2.8, professional SaaS product advertisement, clean composition with empty negative space in top third for text overlay --ar 4:5 --v 6.0

TEXT AREA: Top 30% of image with high-contrast background for headline copy.

SCREENSHOT INSTRUCTION: Composite real screenshot 'assets/screenshots/mobile/mobile-screen-1.png' onto the smartphone display.

NEGATIVE PROMPT: distorted hands, extra fingers, text on phone screen, hallucinated application UI, cartoon illustration, blurry face, messy dirty floor, 3D render artifacts, neon lights
```

## Quality Checklist
- [ ] Explicit instruction for real screenshot compositing included.
- [ ] No generative UI requested from image model.
- [ ] Indian business context is authentic and realistic.
- [ ] Negative space reserved for graphic text overlay.
- [ ] Aspect ratio properly specified.
