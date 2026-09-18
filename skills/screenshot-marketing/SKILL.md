# InvoiceFine Screenshot Marketing & Device Mockup Skill

## Purpose
Enforce the mandatory rules for using, cropping, framing, and compositing real InvoiceFine screenshots inside device frames, preventing artificial UI distortion and maintaining commercial credibility.

## When to Use
- Creating device mockups for advertisements, social media posts, and app store listings.
- Directing graphic designers on how to handle software imagery.
- Sourcing the exact screenshot asset corresponding to a specific product feature.

## Inputs
- Feature to showcase (e.g. GST Billing, Customer Ledger, Stock, Thermal Print).
- Target device frame (Android Smartphone, Android Tablet, Linux Laptop, Desktop Monitor).

## Workflow
1. Sourcing: Retrieve the exact, unmodified screenshot from:
   - Mobile: [`assets/screenshots/mobile/`](file:///home/jitendra/Desktop/IFdata/assets/screenshots/mobile/)
   - Desktop: [`assets/screenshots/desktop/`](file:///home/jitendra/Desktop/IFdata/assets/screenshots/desktop/)
2. Mapping Table:
   - GST Billing / Invoices → `mobile-screen-1.png` or `desktop-invoices.png`
   - Customer Khata & Dues → `mobile-screen-2.png` or `desktop-customer-sales.png`
   - Inventory & Stock → `mobile-screen-3.png` or `desktop-inventory.png`
   - Thermal Printing & Hardware → `mobile-screen-4.png` or `desktop-billing-pos.png`
   - Dashboard & Reports → `mobile-screen-5.png` or `desktop-dashboard.png`
3. Device Framing: Insert the real image into a clean, modern, unbranded or realistic smartphone/laptop frame.
4. Enhancements: Add subtle perspective tilts (under 15 degrees) or soft ambient shadows to create depth.

## Rules
- **ABSOLUTE RULE**: The screenshot is the single source of truth. Never alter UI numbers, invent fake buttons, add synthetic graphs, or alter fonts inside the application screenshot.
- Allowed Modifications: Cropping for focus, proportional resizing, adding subtle outer drop shadows, and placing within realistic device mockups.
- Prohibited: Modifying feature names, altering tax calculation totals, or overlaying fake testimonials inside the software interface.

## Output Format
- **FEATURE BEING DEMONSTRATED**
- **DEVICE FRAME SPECIFICATION**: e.g., Modern Android phone with slim bezels.
- **SCREENSHOT ASSET PATH**: Absolute or relative path to the verified file.
- **COMPOSITING INSTRUCTIONS**: Positioning, angle, shadow, and frame specifications.

## Examples
```text
FEATURE: Customer Outstanding Dues
DEVICE FRAME: Minimalist Android smartphone with clean black bezels, angled 10 degrees to the right.
SCREENSHOT ASSET: assets/screenshots/mobile/mobile-screen-2.png
COMPOSITING:
1. Map screenshot to the smartphone screen boundary with 0 margin.
2. Add a soft 20px blur drop shadow (opacity 25%, color #000000) beneath the device.
3. Position on the right side of the canvas, leaving left side clear for headline text.
```

## Quality Checklist
- [ ] Screenshot pulled from verified `assets/screenshots/` repository.
- [ ] No internal UI elements, numbers, or buttons altered.
- [ ] Device frame matches actual target platform (Android / Desktop).
- [ ] Proportions and aspect ratio of screenshot preserved without distortion.
