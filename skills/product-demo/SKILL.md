# InvoiceFine Product Demonstration Skill

## Purpose
Structure clear, actionable, step-by-step product walkthroughs that illustrate exact user flows in InvoiceFine using verified real screenshots and recordings.

## When to Use
- Producing video demo walkthroughs or YouTube feature tutorials.
- Writing step-by-step documentation or help center articles.
- Creating swipe-through UI tutorial carousels.

## Inputs
- Specific user task (e.g. Creating a GST Bill, Adding an Item to Stock, Printing via Bluetooth).
- Target user platform (Android Mobile or Linux Desktop).

## Workflow
1. State the user's practical end goal (e.g. "Create and print a GST bill in under 10 seconds").
2. Break the procedure down into 3 to 5 discrete, chronological taps or keystrokes.
3. For each step, identify:
   - Screen name.
   - User action (tap, scan, type).
   - Real asset reference from `assets/screenshots/`.
   - Result shown on screen.
4. Conclude with the practical outcome and business benefit.

## Rules
- Never describe UI buttons or screens that do not exist in the confirmed app design.
- Always refer to official screenshots from `assets/screenshots/mobile/` or `assets/screenshots/desktop/`.
- Keep instructions focused on the core action path, avoiding unnecessary detour screens.

## Output Format
- **WALKTHROUGH OBJECTIVE**
- **ESTIMATED TIME TO COMPLETE**: e.g., 10 seconds
- **STEP-BY-STEP ACTION FLOW**:
  - `Step 1`: Screen, Action, Asset Reference
  - `Step 2`: Screen, Action, Asset Reference
  - `Step 3`: Finalization & Result
- **KEY TAKEAWAY & BENEFIT**

## Examples
```text
WALKTHROUGH: How to Create and Print a Bill in 3 Taps

GOAL: Generate a professional thermal receipt for a counter customer.
DEVICE: Android Smartphone + 58mm Bluetooth Thermal Printer

STEP 1: Open InvoiceFine & Select Customer
- Screen: New Invoice Screen
- Action: Tap customer name from recent list or leave as 'Cash Sale'.
- Asset: assets/screenshots/mobile/mobile-screen-1.png

STEP 2: Add Items
- Screen: Item Selection / Barcode Scan
- Action: Tap 2 items from quick catalog or scan barcodes using phone camera. Tax auto-calculates.
- Asset: assets/screenshots/mobile/mobile-screen-3.png

STEP 3: Finalize & Print
- Screen: Invoice Summary
- Action: Tap 'Print Thermal'. Connected Bluetooth printer prints the slip in 2 seconds.
- Asset: assets/screenshots/mobile/mobile-screen-4.png

RESULT: Complete printed bill handed to customer in under 10 seconds. Zero internet needed.
```

## Quality Checklist
- [ ] Every step reflects actual confirmed app interaction.
- [ ] Screenshot paths correctly linked to real assets in `assets/screenshots/`.
- [ ] Concise, non-technical phrasing.
- [ ] Outcome delivers immediate value.
