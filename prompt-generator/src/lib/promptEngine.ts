import {
  Feature,
  ContentType,
  Platform,
  Language,
  Audience,
  VisualStyle,
  ContentGoal,
  AspectRatio,
  VideoDuration,
  GeneratedContentPackage,
  CarouselSlide,
  VideoScene,
  ReelPackage,
} from "@/types";

interface GenerateParams {
  feature: Feature;
  contentType: ContentType;
  platform: Platform;
  language: Language;
  audience: Audience;
  customAudience?: string;
  visualStyle: VisualStyle;
  goal: ContentGoal;
  videoDuration?: VideoDuration;
  aspectRatio: AspectRatio;
}

export function generateContentPackage(params: GenerateParams): GeneratedContentPackage {
  const {
    feature,
    contentType,
    platform,
    language,
    audience,
    customAudience,
    visualStyle,
    goal,
    videoDuration = "15s",
    aspectRatio,
  } = params;

  const targetAudienceName = customAudience?.trim() || audience.name;
  const langCode = language.id;

  // --- 1. Concept & Angles ---
  const concept = `Promote "${feature.name}" to ${targetAudienceName} on ${platform.name} via ${contentType.name}, focusing on the goal of ${goal.name}. Uses the "${visualStyle.name}" aesthetic with primary brand accent #EF3035 and strict real screenshot compositing.`;

  // --- 2. Hooks in 3 Languages ---
  const hooks: Record<string, Record<string, string>> = {
    en: {
      default: `Still spending 15 minutes calculating bills during evening store rush?`,
      inventory: `Do you really know how many units are sitting in your stock right now?`,
      khata: `When a customer claims they already settled their old bill...`,
      printing: `Did you know your phone can print inkless thermal receipts in 3 seconds?`,
      gst: `CGST, SGST, or IGST? Stop guessing your tax splits on retail bills.`,
      offline: `What happens to your billing counter when the internet drops?`,
    },
    hinglish: {
      default: `Dukaan par bheed ho aur bill banane mein time lage? Ab nahi!`,
      inventory: `Dukaan mein maal kitna bacha hai aur kab bika — pata hi nahi chalta?`,
      khata: `Jab customer bole: 'Bhaiya, maine toh pichhle hafte payment kar di thi'...?`,
      printing: `Bina kisi computer ke, apne phone se print karein 3-inch thermal bill!`,
      gst: `GST bill banane mein tax split ka jhanjhat? Bas ek tap mein solve!`,
      offline: `Internet band hone par kya aapki dukaan ka billing counter ruk jaata hai?`,
    },
    hi: {
      default: `दुकान में ग्राहकों की भीड़ और बिल बनाने में देरी? अब नहीं!`,
      inventory: `दुकान में कौन सा माल कितना बचा है — क्या आपको सही हिसाब पता है?`,
      khata: `जब ग्राहक कहे कि पुराना बकाया तो पहले ही दे दिया था...`,
      printing: `कंप्यूटर के बिना, अपने मोबाइल से सीधे पर्ची प्रिंट करें कुछ ही सेकंड में!`,
      gst: `जीएसटी बिल में टैक्स गणना की उलझन से पाएं हमेशा के लिए छुटकारा।`,
      offline: `इंटरनेट बंद होने पर भी आपकी दुकान की बिलिंग कभी नहीं रुकेगी।`,
    },
  };

  const getHookKey = () => {
    const fId = feature.id;
    if (fId.includes("stock") || fId.includes("inventory") || fId.includes("barcode")) return "inventory";
    if (fId.includes("khata") || fId.includes("ledger") || fId.includes("outstanding") || fId.includes("payment")) return "khata";
    if (fId.includes("thermal") || fId.includes("printing") || fId.includes("printer")) return "printing";
    if (fId.includes("gst") || fId.includes("tax")) return "gst";
    if (fId.includes("offline")) return "offline";
    return "default";
  };

  const hook = hooks[langCode]?.[getHookKey()] || hooks.en[getHookKey()];

  // --- 3. Headlines & Subheadlines ---
  const headline = `${feature.name}: Fast, Simple & Accurate for ${targetAudienceName}`;
  const subheadline = `${feature.tagline} Designed specifically for Indian retail and commercial businesses.`;

  // --- 4. AI Image Generation Prompt (Strict Real Screenshot Composite Rule) ---
  const imagePrompt = {
    prompt: `Commercial advertising photography of a confident Indian ${audience.businessType} owner in their 30s standing behind an organized commercial checkout counter. The setting features ${visualStyle.visualKeywords}. The merchant is holding a modern smartphone angled toward the camera at 15 degrees. The device display shows a flat, neutral solid-color placeholder area reserved strictly for application screenshot overlay. Lighting: ${visualStyle.lightingKeywords}. Captured on 50mm f/1.8 prime lens, realistic skin tones, natural commercial grade, subtle crimson brand accent (#EF3035) on counter signage. Empty negative space in the upper 25% quadrant for bold headline typography. --ar ${aspectRatio}`,
    textArea: `Top 25% of the frame: Clean neutral background with ample empty space reserved for overlaying headline: "${headline}".`,
    screenshotInstruction: `REAL UI COMPOSITE DIRECTIVE: Do NOT instruct AI to draw or render the InvoiceFine software screen. In Figma or Canva, place the authentic InvoiceFine screenshot from assets/screenshots/ directly inside the phone or monitor display mockup.`,
    negativePrompt: `fake app interface, hallucinated text on screen, distorted hands, six fingers, extra limbs, cartoon, 3D render, messy background, oversaturated neon, crypto aesthetics, plastic skin`,
  };

  // --- 5. AI Video Generation Prompt ---
  const scenes: VideoScene[] = [
    {
      sceneNumber: 1,
      timeRange: "0:00 - 0:03",
      visual: `Close-up shot of Indian ${targetAudienceName} experiencing friction: ${feature.problem}`,
      camera: "Slow push-in with shallow depth of field, 35mm lens.",
      action: "Merchant looks stressed checking manual paperwork, then spots smartphone.",
      onScreenText: hook,
    },
    {
      sceneNumber: 2,
      timeRange: "0:03 - 0:07",
      visual: `Over-the-shoulder POV shot of merchant holding smartphone on store counter. Screen displays flat green mockup ready for real screen recording overlay.`,
      camera: "Steady over-the-shoulder camera angle.",
      action: `Merchant taps screen to activate ${feature.name}. Instant responsive feedback.`,
      onScreenText: `${feature.name} • 1-Tap Action`,
    },
    {
      sceneNumber: 3,
      timeRange: "0:07 - 0:11",
      visual: `Side macro shot of thermal printer or customer handover. Receipt feeds out smoothly; customer receives instant digital confirmation.`,
      camera: "Smooth lateral tracking pan.",
      action: `Customer smiles and scans UPI QR on bill. Seamless payment collection.`,
      onScreenText: feature.benefit,
    },
    {
      sceneNumber: 4,
      timeRange: "0:11 - 0:15",
      visual: `Merchant smiling confidently at counter with neat store background. Clean graphic card with InvoiceFine crimson (#EF3035) logo.`,
      camera: "Eye-level medium shot.",
      action: "Thumbs-up from merchant, followed by animated download badge.",
      onScreenText: `Download InvoiceFine Free • Android & Linux Desktop`,
    },
  ];

  const voiceoverScripts: Record<string, string> = {
    en: `Are billing bottlenecks slowing down your store? With InvoiceFine, you get ${feature.name} right in your pocket. ${feature.benefit}. Simple, fast, and completely offline-ready. Download InvoiceFine free today!`,
    hinglish: `Dukaan ka hisaab ab hoga bilkul asaan! InvoiceFine ke ${feature.name} se aapko milta hai: ${feature.benefit}. Na internet ka jhanjhat, na calculation ki galti. Aaj hi download karein InvoiceFine free!`,
    hi: `अपनी दुकान का काम बनाएं और भी तेज़ और आसान! इन्वॉयसफाइन के ${feature.name} फीचर से पाएं: ${feature.benefit}। बिना इंटरनेट के भी पूरी तरह काम करता है। आज ही डाउनलोड करें!`,
  };

  const videoPrompt = {
    objective: `Demonstrate ${feature.name} resolving ${feature.problem} for ${targetAudienceName} within ${videoDuration}.`,
    duration: videoDuration,
    aspectRatio: (aspectRatio === "16:9" ? "16:9" : "9:16") as AspectRatio,
    visualStyle: visualStyle.name,
    scenes,
    voiceover: voiceoverScripts[langCode] || voiceoverScripts.en,
    endingCta: `Download InvoiceFine Free • Link in Bio / Description`,
    negativePrompt: `jittery frames, distorted fingers, hallucinated UI screens, morphing objects, flickering lighting, artificial CGI faces`,
  };

  // --- 6. Carousel (7 Slides Standard) ---
  const carouselSlides: CarouselSlide[] = [
    {
      slideNumber: 1,
      headline: hook,
      bodyText: `The modern 2-minute system for ${targetAudienceName} to master ${feature.name}. Swipe right to see how it works →`,
      visualConcept: `Split contrast: Manual paper notebook on left vs clean smartphone mockup on right with crimson #EF3035 header pill.`,
      imagePrompt: `Minimalist commercial studio layout. Left side shows a weathered paper notebook with a pen. Right side shows a modern smartphone frame with a clean blank screen. High-resolution studio lighting --ar 4:5`,
      screenshotInstruction: `Place real InvoiceFine feature thumbnail inside the phone frame.`,
      designDirection: `High-contrast bold headline (70pt), crimson red badge: "RETAIL GUIDE".`,
    },
    {
      slideNumber: 2,
      headline: `The Common Problem: ${feature.problem}`,
      bodyText: `Every day, retail and commercial stores lose valuable time and revenue due to manual calculation errors, missing paper slips, and delayed customer payments.`,
      visualConcept: `High-contrast callout card detailing the 3 biggest operational bottlenecks.`,
      imagePrompt: `Editorial graphic card with soft warm gray tones, subtle red warning icon, clean typography grid --ar 4:5`,
      screenshotInstruction: `No screenshot needed on this educational problem slide.`,
      designDirection: `Red accent highlights on key pain point phrases.`,
    },
    {
      slideNumber: 3,
      headline: `Why Traditional Methods Fail`,
      bodyText: `Paper bahi-khatas tear, pocket calculators don't store audit history, and complex desktop software requires expensive training and internet connections.`,
      visualConcept: `Illustration/photo of messy desk with calculator and scattered paper bills.`,
      imagePrompt: `Authentic photograph of a cluttered billing desk with paper receipts, calculator, and notebook under dim warm lighting --ar 4:5`,
      screenshotInstruction: `No screenshot needed on this context slide.`,
      designDirection: `Muted dark charcoal background, clear white body text.`,
    },
    {
      slideNumber: 4,
      headline: `Enter InvoiceFine: ${feature.name}`,
      bodyText: `${feature.tagline}. Built from the ground up for Indian shopkeepers and independent merchants.`,
      visualConcept: `Hero smartphone mockup displaying authentic InvoiceFine interface.`,
      imagePrompt: `Clean modern phone mockup held by a merchant's hand against a neat store background --ar 4:5`,
      screenshotInstruction: `COMPOSITE: Insert real screenshot of ${feature.name} from assets/screenshots/ into the display.`,
      designDirection: `Clean white background, crimson accent pointers showing key feature buttons.`,
    },
    {
      slideNumber: 5,
      headline: `How It Works in Daily Business`,
      bodyText: `1. Select items or scan barcodes.\n2. Automatic tax splits & stock adjustments.\n3. One-tap receipt print or WhatsApp delivery.`,
      visualConcept: `3-step horizontal workflow diagram with numbered circular badges.`,
      imagePrompt: `Infographic background with three clean step cards, modern minimal aesthetic --ar 4:5`,
      screenshotInstruction: `Crop and composite relevant feature input fields onto Step 2 card.`,
      designDirection: `Numbered step pills in #EF3035, crisp sans-serif typography.`,
    },
    {
      slideNumber: 6,
      headline: `The Real Business Benefit`,
      bodyText: `${feature.benefit}. Spend less time on bookkeeping and more time growing your sales.`,
      visualConcept: `Customer smiling at counter receiving digital invoice on phone.`,
      imagePrompt: `Satisfied customer smiling at a clean retail store counter while checking their phone --ar 4:5`,
      screenshotInstruction: `Place WhatsApp invoice PDF preview card in the lower corner.`,
      designDirection: `Green checkmark icons, clean metric badges.`,
    },
    {
      slideNumber: 7,
      headline: `Start Billing Smarter Today`,
      bodyText: `Available completely free on Android mobile and Linux desktop workstations. 100% offline-ready.`,
      visualConcept: `InvoiceFine brand card with official logo, download buttons, and save post reminder.`,
      imagePrompt: `Clean brand splash background with InvoiceFine red accents, modern studio lighting --ar 4:5`,
      screenshotInstruction: `Center official logo (assets/logo/invoicefine-logo.png).`,
      designDirection: `Prominent CTA button: "Download Free • Link in Bio".`,
      cta: `Save this post & Download InvoiceFine today!`,
    },
  ];

  // --- 7. Reel Script ---
  const reel: ReelPackage = {
    hook,
    problem: feature.problem,
    solution: `InvoiceFine provides an instant solution with ${feature.name}.`,
    feature: feature.name,
    demonstration: `Watch the screen: Select item, verify details, and tap Print. Everything updates in real time.`,
    benefit: feature.benefit,
    cta: `Download InvoiceFine free from the link in our bio!`,
    coverText: `${feature.name}: 15-Second Guide`,
    voiceover: voiceoverScripts[langCode] || voiceoverScripts.en,
    onScreenText: [
      hook,
      `${feature.name} in Action`,
      feature.benefit,
      `100% Offline • Fast Billing`,
      `Download InvoiceFine Today!`,
    ],
    caption: `Dukaan ka hisaab ab hoga lightning fast! ⚡🧾\n\nInvoiceFine ke ${feature.name} ke saath:\n✅ ${feature.benefit}\n✅ 100% Offline bina internet ke chalta hai\n✅ Mobile aur Desktop dono par available\n\nLink bio mein hai — abhi download karein!`,
    hashtags: `#InvoiceFine #${feature.id.replace(/-/g, "")} #BillingApp #SmartRetail #SmallBusinessIndia #POSSoftware`,
    videoPrompt: videoPrompt.objective,
  };

  // --- 8. Captions ---
  const captions = {
    short: langCode === "hi"
      ? `इन्वॉयसफाइन के साथ अपनी दुकान का बिलिंग और हिसाब-किताब बनाएं और भी आसान! आज ही डाउनलोड करें।`
      : langCode === "hinglish"
      ? `Dukaan ka billing aur hisaab ab pocket mein! InvoiceFine ke saath ${feature.name} ka pura fayda uthayein. Link bio mein hai!`
      : `Fast, reliable ${feature.name} built for modern small businesses. Download InvoiceFine free today. Link in bio!`,

    medium: langCode === "hi"
      ? `क्या आप अभी भी पुरानी डायरी और पर्चियों पर हिसाब रखते हैं?\n\nइन्वॉयसफाइन के **${feature.name}** से पाएं:\n• ${feature.benefit}\n• 100% ऑफलाइन काम करने की सुविधा\n• तेज़ और आसान बिलिंग\n\nआज ही डाउनलोड करें — लिंक बायो में उपलब्ध है!`
      : langCode === "hinglish"
      ? `Dukaan par bheed ho toh manual billing band kijiye! 🏪⚡\n\nInvoiceFine ka **${feature.name}** feature aapko deta hai:\n🔹 ${feature.benefit}\n🔹 100% Offline bina kisi server down ke\n🔹 One-tap print aur WhatsApp delivery\n\nApni dukaan ko banayein smart. Download link bio mein hai!`
      : `Running a busy store? Stop relying on messy paper slips and manual calculators. 📊\n\nWith **${feature.name}** on InvoiceFine:\n• ${feature.benefit}\n• 100% offline-first architecture\n• Seamless mobile & desktop experience\n\nDownload free today via link in bio!`,

    educational: langCode === "hi"
      ? `व्यापार में समय की बचत ही मुनाफे की असली चाबी है।\n\nजब आप **${feature.name}** का इस्तेमाल करते हैं, तो आपकी बिलिंग में कोई गलती नहीं होती और ग्राहकों का भरोसा बढ़ता है।\n\n${feature.benefit}\n\nइस पोस्ट को सेव करें और अपने व्यापारी मित्रों के साथ साझा करें!`
      : langCode === "hinglish"
      ? `Dukaan mein time bachana hi real profit hai! 💡📈\n\nJab aap **${feature.name}** use karte hain toh:\n1️⃣ Calculation errors bilkul zero ho jaati hain\n2️⃣ Customer ka trust banta hai\n3️⃣ Tax filing ke time sab kuch organized rehta hai\n\nIs post ko SAVE karein aur InvoiceFine download karein!`
      : `Why operational discipline is the #1 growth driver for modern retail:\n\nManual billing invites errors, lost invoices, and credit disputes. By digitizing ${feature.name}, you establish an unbreakable audit trail:\n\n• ${feature.benefit}\n• Instant transparent records\n• Greater customer trust\n\nSave this post for your store management & explore InvoiceFine!`,

    sales: langCode === "hi"
      ? `अपनी दुकान की बिलिंग को अपग्रेड करें! इन्वॉयसफाइन अभी डाउनलोड करें और पाएं आसान ${feature.name}।`
      : langCode === "hinglish"
      ? `Abhi download karein InvoiceFine aur apni dukaan ka checkout banayein 5 guna tez! Link bio mein hai.`
      : `Upgrade your store counter today. Download InvoiceFine free on Android & Linux Desktop! Link in bio.`,

    reel: reel.caption,
    carousel: `Bookmark this guide! 📌\n\nEverything you need to know about ${feature.name} for Indian retail stores. Swipe through and save for your business!`,
  };

  // --- 9. Call to Action (CTA) ---
  const cta = `${goal.ctaFocus} • Download InvoiceFine on Android & Linux Desktop`;

  // --- 10. Hashtags ---
  const featureTag = `#${feature.name.replace(/[^a-zA-Z0-9]/g, "")}`;
  const hashtags = [
    "#InvoiceFine",
    featureTag,
    "#BillingApp",
    "#SmartBilling",
    "#POSSoftware",
    "#SmallBusinessIndia",
    "#IndianShopkeeper",
    "#RetailBilling",
    "#BusinessManagementApp",
    "#VyaparIndia",
  ];

  // --- 11. Design Direction ---
  const designDirection = {
    palette: ["#EF3035 (Primary Crimson)", "#171717 (Deep Slate)", "#FFFFFF (Clean White)", "#F4F4F5 (Warm Neutral)"],
    typography: "Headline: Inter/Outfit Bold (64-72pt). Body: Inter Regular (28-34pt). High contrast.",
    layout: `${aspectRatio} canvas. Safe margins 80px. Top 25% reserved for headline. Center 50% for device mockup. Bottom 25% for CTA pill.`,
    screenshotPlacement: `Use authentic screenshot from assets/screenshots/ matching ${feature.name}. Composite inside device screen at 100% clarity.`,
  };

  const negativePrompt = imagePrompt.negativePrompt;

  // --- 12. Full Content Text for 1-Click Copy ---
  const fullContentText = `============================================================
INVOICEFINE SOCIAL MEDIA CONTENT PACKAGE
============================================================
FEATURE:      ${feature.name} (${feature.category})
CONTENT TYPE: ${contentType.name}
PLATFORM:     ${platform.name}
LANGUAGE:     ${language.name}
AUDIENCE:     ${targetAudienceName}
VISUAL STYLE: ${visualStyle.name}
GOAL:         ${goal.name}
ASPECT RATIO: ${aspectRatio}
DURATION:     ${videoDuration}

------------------------------------------------------------
[1] CONCEPT & ANGLE
------------------------------------------------------------
${concept}

------------------------------------------------------------
[2] HOOK (FIRST 1-3 SECONDS)
------------------------------------------------------------
"${hook}"

------------------------------------------------------------
[3] HEADLINE & SUBHEADLINE
------------------------------------------------------------
HEADLINE:    ${headline}
SUBHEADLINE: ${subheadline}

------------------------------------------------------------
[4] AI IMAGE GENERATION PROMPT (Midjourney / FLUX / DALL-E)
------------------------------------------------------------
PROMPT:
${imagePrompt.prompt}

TEXT AREA:
${imagePrompt.textArea}

SCREENSHOT DIRECTIVE:
${imagePrompt.screenshotInstruction}

NEGATIVE PROMPT:
${imagePrompt.negativePrompt}

------------------------------------------------------------
[5] AI VIDEO GENERATION PROMPT (Runway / Kling / Luma)
------------------------------------------------------------
OBJECTIVE: ${videoPrompt.objective}
DURATION:  ${videoPrompt.duration} | RATIO: ${videoPrompt.aspectRatio}

${videoPrompt.scenes
  .map(
    (s) =>
      `SCENE ${s.sceneNumber} (${s.timeRange}):
Visual: ${s.visual}
Camera: ${s.camera}
Action: ${s.action}
On-Screen Text: "${s.onScreenText}"`
  )
  .join("\n\n")}

VOICE-OVER SCRIPT:
"${videoPrompt.voiceover}"

ENDING CTA:
"${videoPrompt.endingCta}"

NEGATIVE PROMPT:
${videoPrompt.negativePrompt}

------------------------------------------------------------
[6] CAROUSEL STRUCTURE (7 SLIDES)
------------------------------------------------------------
${carouselSlides
  .map(
    (cs) =>
      `SLIDE ${cs.slideNumber}: ${cs.headline}
Body: ${cs.bodyText}
Visual: ${cs.visualConcept}
Directive: ${cs.screenshotInstruction}`
  )
  .join("\n\n")}

------------------------------------------------------------
[7] REEL & SHORT-FORM SCRIPT
------------------------------------------------------------
HOOK:          ${reel.hook}
PROBLEM:       ${reel.problem}
SOLUTION:      ${reel.solution}
DEMO:          ${reel.demonstration}
BENEFIT:       ${reel.benefit}
VOICEOVER:     "${reel.voiceover}"
ON-SCREEN:     ${reel.onScreenText.join(" | ")}

------------------------------------------------------------
[8] CAPTIONS
------------------------------------------------------------
[SHORT CAPTION]:
${captions.short}

[MEDIUM CAPTION]:
${captions.medium}

[EDUCATIONAL CAPTION]:
${captions.educational}

------------------------------------------------------------
[9] CALL TO ACTION & HASHTAGS
------------------------------------------------------------
CTA: ${cta}

HASHTAGS:
${hashtags.join(" ")}

------------------------------------------------------------
[10] DESIGN DIRECTION
------------------------------------------------------------
Brand Colors: ${designDirection.palette.join(", ")}
Typography:   ${designDirection.typography}
Layout Specs: ${designDirection.layout}
UI Placement: ${designDirection.screenshotPlacement}
============================================================`;

  return {
    id: "gen-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: Date.now(),
    inputs: {
      feature,
      contentType,
      platform,
      language,
      audience,
      customAudience,
      visualStyle,
      goal,
      videoDuration,
      aspectRatio,
    },
    concept,
    hook,
    headline,
    subheadline,
    imagePrompt,
    videoPrompt,
    carousel: {
      totalSlides: carouselSlides.length,
      slides: carouselSlides,
    },
    reel,
    captions,
    cta,
    hashtags,
    designDirection,
    negativePrompt,
    fullContentText,
  };
}
