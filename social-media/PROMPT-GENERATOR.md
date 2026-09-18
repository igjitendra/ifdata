# InvoiceFine Master Prompt Generator

A reusable prompt generation framework that converts any software feature into complete visual briefs, AI image/video generation prompts, scene breakdowns, voiceovers, captions, and hashtags.

---

## 🎛️ The 11-Variable Generation Framework

Copy and complete this variable block to generate production-ready social media assets:

```yaml
FEATURE:       [e.g., Stock Ledger / Thermal Printing / Customer Khata / GST Billing]
PLATFORM:      [Instagram / YouTube Shorts / Facebook / LinkedIn / WhatsApp]
CONTENT TYPE:  [Single Image / Carousel / Reel / Product Demo / Educational / Comparison]
LANGUAGE:      [English / Hinglish / Hindi]
AUDIENCE:      [Retail Shopkeeper / Wholesaler / Service Contractor / Small Business Owner]
STYLE:         [Practical / Modern / Direct / Educational / High-Energy]
ASPECT RATIO:  [4:5 (1080x1350) / 9:16 (1080x1920) / 1:1 (1080x1080) / 16:9 (1920x1080)]
VISUAL STYLE:  [Authentic Indian Shop Counter / Clean Studio Mockup / Realistic Commercial Office]
VIDEO LENGTH:  [6s / 8s / 10s / 15s / 20s / 30s]
CTA:           [Download InvoiceFine / Try It Free / Save This Guide / Link in Bio]
BRAND MODE:    [Primary Accent #EF3035, Slate Text #171717, Real Screenshot Overlay]
```

---

## 📋 The 11 Output Deliverables

When the variables above are filled, the generator outputs:

1. **[A] Hook**: First 1–3 seconds visual or textual hook to stop scrolling.
2. **[B] Headline**: Primary on-graphic or on-screen headline (max 7 words).
3. **[C] Subheadline**: Supporting clarification sentence (max 14 words).
4. **[D] AI Image Generation Prompt**: Production-ready Midjourney/FLUX/DALL-E prompt with character, environment, camera, and blank mockup screen.
5. **[E] AI Video Generation Prompt**: Runway/Kling/Luma cinematic background generation prompt.
6. **[F] Scene Breakdown**: Second-by-second timeline (0–2s, 2–5s, 5–10s, 10–15s).
7. **[G] On-Screen Text**: Exact words displayed as text overlays on screen.
8. **[H] Voice-Over Script**: Word-for-word spoken audio script in the chosen language.
9. **[I] Caption**: Formatted social media caption with line breaks and value delivery.
10. **[J] Call to Action (CTA)**: Clear, low-friction next step for the viewer.
11. **[K] Hashtag Set**: 8–15 targeted tags matching the topic and audience.

---

## 💡 Worked Example: Feature "Item Stock Ledger"

### Input Configuration:
```yaml
FEATURE:       Item Stock Ledger & Movement History
PLATFORM:      Instagram Reel & YouTube Short
CONTENT TYPE:  Reel / Product Demo
LANGUAGE:      Hinglish
AUDIENCE:      Electronics & Hardware Store Owners
STYLE:         Direct & Solution-Focused
ASPECT RATIO:  9:16 (1080x1920)
VISUAL STYLE:  Indian Hardware Retail Counter
VIDEO LENGTH:  15s
CTA:           Download InvoiceFine on Linux Desktop or Android Phone
BRAND MODE:    Crimson #EF3035 Accents, Real Screenshot Composite
```

### Generated Output:

#### [A] Hook (0–2s)
- **Visual**: A store owner scratching his head looking at empty shelves while a customer asks for a product.
- **Audio / Text**: *"Bhaiya, pichhla stock kab aaya tha aur kitna bika?"*

#### [B] Headline
- *"Audit Every Single Item in 1 Click"*

#### [C] Subheadline
- *"Stop guessing your stock numbers. Track opening stock, sales, and purchases live."*

#### [D] AI Image Prompt (Background & Device Holder)
```
Prompt: Commercial lifestyle photograph of a 38-year-old Indian hardware shop owner standing behind a modern wooden billing counter. The store background features organized shelves of tools and electrical goods with soft warm ambient lighting. The owner holds a smartphone displaying a clean blank green-screen mockup for UI replacement. Shot on 50mm f/1.8 lens, natural depth of field, sharp subject focus, authentic commercial lighting, warm realistic tones, no distorted hands, no synthetic neon, commercial advertising quality --ar 9:16
```

#### [E] AI Video Prompt (Background B-Roll)
```
Prompt: Cinematic eye-level medium shot of an Indian retail shopkeeper standing at a tidy counter, smiling and tapping on a smartphone screen. Clean store background with warm lighting and neatly arranged shelves. The camera gently glides forward over 4 seconds. Smooth 24fps motion, natural lighting, photorealistic commercial footage --ar 9:16
```

#### [F] Scene Breakdown (15s Total)
- **0–2s (Hook)**: Shopkeeper looking confused at paper inventory log. Text: *"Item stock ka hisaab nahi mil raha?"*
- **2–5s (Problem)**: Customer asking for spare part; owner unsure of quantity in godown.
- **5–10s (Solution / Demo)**: Transition to InvoiceFine Stock Ledger modal on desktop/mobile showing live additions, sales, and balance.
- **10–13s (Benefit)**: Highlight customer purchase history and profit margin per unit.
- **13–15s (CTA)**: InvoiceFine brand card with download call-to-action.

#### [G] On-Screen Text
- *0:01*: Stock ka pura hisaab... ek click mein?
- *0:05*: InvoiceFine Item Stock Ledger
- *0:09*: Purchases + Sales + Current Stock
- *0:13*: Simple • Accurate • Fast
- *0:14*: Download InvoiceFine Today!

#### [H] Voice-Over Script (Hinglish)
> *"Dukaan ka maal kab aaya, kitna bika aur kitna bacha hai — ab yaad rakhne ki zaroorat nahi! InvoiceFine ke Item Stock Ledger mein har product ka pura hisaab dekhein bas ek click mein. Aaj hi download karein aur apni billing ko banayein smart!"*

#### [I] Caption
> Dukaan chalana aasan hai jab har item ka hisaab bilkul clear ho! 📦✨  
>  
> InvoiceFine ka naya **Item Stock Ledger** feature aapko har product ki puri history dikhata hai:  
> ✅ Opening Stock aur nayi khareedari  
> ✅ Kaunse customer ne kab aur kitna item liya  
> ✅ Real-time bacha hua stock aur profit margin  
>  
> Ab na stock mismatch hoga, na customer se dispute!  
>  
> 📲 Android mobile ya Linux desktop par aaj hi shuru karein.  
> Link bio mein hai!

#### [J] Call to Action (CTA)
- *"Download InvoiceFine today — Link in bio!"*

#### [K] Hashtags
`#InvoiceFine #StockManagement #InventoryApp #RetailBilling #IndianShopkeeper #SmartBilling #POSSoftware #DukaanBusiness`

---

## 🛠️ Rapid Content Type Templates

Use this guide to adjust prompt parameters for other supported content types:

| Content Type | Primary Goal | Recommended Ratio | Text Allocation |
|---|---|---|---|
| **Single Image** | Fast visual recognition & value | 4:5 (1080x1350) | Top 30% for Headline, Center 50% for Mockup, Bottom 20% for CTA |
| **Carousel (7 Slides)** | Deep educational value & saves | 4:5 (1080x1350) | Consistent header bar, high-contrast typography |
| **Reel / Short** | High reach & organic installs | 9:16 (1080x1920) | Safe zone 250px from top and bottom |
| **Product Demo** | Trust building & feature proof | 16:9 or 9:16 | Screen capture composite with crisp pointer callouts |
| **Comparison** | High-contrast Before vs After | 4:5 (1080x1350) | Vertical or horizontal 50/50 split |
