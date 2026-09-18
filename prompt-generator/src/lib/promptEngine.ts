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

  // --- 1. Concept & Strategic Positioning ---
  const concept = `High-conversion ${contentType.name} designed for ${platform.name}, positioning InvoiceFine's "${feature.name}" directly to ${targetAudienceName}. Objective: ${goal.name}. Aesthetic: ${visualStyle.name} with InvoiceFine Crimson (#EF3035) accenting and strict Real App Screenshot compositing.`;

  // --- 2. Advanced Multi-Hook Architecture ---
  const hooksData: Record<string, Record<string, { hook1: string; hook2: string; hook3: string }>> = {
    en: {
      default: {
        hook1: `Still spending 20 minutes every evening balancing messy paper bill books?`,
        hook2: `The 5-second counter hack Indian retailers are using to speed up billing.`,
        hook3: `Why 80% of store disputes happen at checkout—and how to fix it forever.`,
      },
      inventory: {
        hook1: `Do you really know how many units are sitting in your shop right now?`,
        hook2: `Stop saying 'Maal khatam ho gaya' to customers on busy weekends!`,
        hook3: `The 1-tap stock tracking method that prevents dead inventory loss.`,
      },
      khata: {
        hook1: `Lost Rs 5,000 in forgotten customer Udhaar this month?`,
        hook2: `How to collect pending customer dues politely without awkward phone calls.`,
        hook3: `Throw away your torn paper Khata register. Here's a 100% private digital ledger.`,
      },
      printing: {
        hook1: `Turn your smartphone into a wireless thermal billing counter in 3 seconds!`,
        hook2: `Why smart shopkeepers stopped buying expensive desktop computers for billing.`,
        hook3: `Print 58mm shop receipts at just 10 paise per print—zero cables, zero toner.`,
      },
      gst: {
        hook1: `CGST, SGST, or IGST? Stop calculating tax splits by hand during rush hours!`,
        hook2: `The 100% compliant GST billing tool that guarantees your buyers get their ITC.`,
        hook3: `How to generate flawless GST invoices from your phone without internet.`,
      },
      offline: {
        hook1: `What happens to your billing counter when the broadband drops during a rush?`,
        hook2: `Cloud billing software frozen again? Here is an app that works 100% offline.`,
        hook3: `Zero Wi-Fi, zero 5G, zero problem. Create bills anytime, anywhere.`,
      },
    },
    hinglish: {
      default: {
        hook1: `Dukaan par bheed ho aur calculation mein time lage? Ab hisaab hoga 5 second mein!`,
        hook2: `Agar aap abhi bhi calculator pe bill bana rahe ho, toh customer ka time waste ho raha hai!`,
        hook3: `Dukaan band karne ke baad 1 ghanta hisaab milane mein kyu lagana?`,
      },
      inventory: {
        hook1: `Customer maange aur pata chale maal khatam hai? Aisi galti se bachein!`,
        hook2: `Dukaan mein kitna stock bacha hai, phone par dekhein live bina physical count ke.`,
        hook3: `Kaun sa item sabse zyada bik raha hai aur kaun sa fas gaya hai?`,
      },
      khata: {
        hook1: `Jab customer bole: 'Bhaiya, maine toh pichhle hafte payment kar di thi'...?`,
        hook2: `Udhaar maangne mein sharm aati hai? Ek tap mein bhejo polite WhatsApp reminder!`,
        hook3: `Lal Khata register mein panna phat gaya? Digital hisaab rakhein hamesha safe.`,
      },
      printing: {
        hook1: `Bina computer ke, seedhe phone se print karein 3-inch thermal bill!`,
        hook2: `Thermal receipt printer ko Bluetooth se connect karein aur banaiye fast counter.`,
        hook3: `Sirf 10 paise mein professional shop receipt nikaalo bina kisi wire ke.`,
      },
      gst: {
        hook1: `GST bill banane mein CGST aur SGST split ka jhanjhat? Bas 1 tap mein solve!`,
        hook2: `Inter-state sale par IGST lagana bhool jaate ho? InvoiceFine karega auto-calculate.`,
        hook3: `B2B customer ka ITC kabhi reject nahi hoga—flawless GST billing phone se.`,
      },
      offline: {
        hook1: `Internet band hone par kya aapki dukaan ka billing counter ruk jaata hai?`,
        hook2: `Basement mein dukaan hai ya network slow hai? Zero internet pe bill banayein!`,
        hook3: `Cloud software ka server down? InvoiceFine 100% offline hamesha ready rehta hai.`,
      },
    },
    hi: {
      default: {
        hook1: `दुकान में ग्राहकों की भीड़ और बिल बनाने में देरी? अब काम होगा सिर्फ 5 सेकंड में!`,
        hook2: `कागज़ की पर्ची और केलकुलेटर छोड़िए, अपनी दुकान को बनाइए आधुनिक और तेज़।`,
        hook3: `शाम को दुकान बंद करते समय 1 घंटा हिसाब मिलाने में क्यों बर्बाद करना?`,
      },
      inventory: {
        hook1: `दुकान में कौन सा माल कितना बचा है — क्या आपको सही समय पर पता चलता है?`,
        hook2: `ग्राहकों को 'माल खत्म हो गया' कहने की नौबत कभी न आने दें!`,
        hook3: `स्मार्ट इन्वेंट्री और स्टॉक अलर्ट्स के साथ अपनी दुकान का नुकसान रोकें।`,
      },
      khata: {
        hook1: `जब ग्राहक कहे कि पुराना बकाया तो पहले ही चुकता कर दिया था...`,
        hook2: `बिना किसी संकोच के, एक क्लिक में भेजें सौम्य व्हाट्सएप्प पेमेंट रिमाइंडर।`,
        hook3: `फटी हुई पुरानी खाता डायरी को अलविदा कहें, डिजिटल खाते से हर पाई का हिसाब रखें।`,
      },
      printing: {
        hook1: `कंप्यूटर के बिना, अपने मोबाइल से सीधे पर्ची प्रिंट करें कुछ ही सेकंड में!`,
        hook2: `ब्लूटूथ थर्मल प्रिंटर से निकालें पक्का बिल — तेज़ और आधुनिक।`,
        hook3: `सिर्फ 10 पैसे में दुकान की पक्की रसीद, ग्राहकों का विश्वास बढ़ाएं।`,
      },
      gst: {
        hook1: `जीएसटी बिल में टैक्स गणना की उलझन से पाएं हमेशा के लिए छुटकारा।`,
        hook2: `एक क्लिक में सीजीएसटी और एसजीएसटी का सटीक विभाजन, 100% कानूनी रूप से सही।`,
        hook3: `बिना इंटरनेट के भी अपने फोन से बनाएं संपूर्ण जीएसटी इनवॉयस।`,
      },
      offline: {
        hook1: `इंटरनेट बंद होने पर भी आपकी दुकान की बिलिंग कभी नहीं रुकेगी।`,
        hook2: `नेटवर्क ना होने पर भी तेज़ बिलिंग — 100% ऑफलाइन कार्यप्रणाली।`,
        hook3: `आपका व्यापार डेटा पूरी तरह सुरक्षित आपके अपने मोबाइल में।`,
      },
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

  const hookObj = hooksData[langCode]?.[getHookKey()] || hooksData.en[getHookKey()];
  const primaryHook = hookObj.hook1;

  // --- 3. Headlines & Subheadlines ---
  const headline = `${feature.name}: Built for ${targetAudienceName}`;
  const subheadline = `${feature.tagline} 100% offline, zero monthly subscription traps, and engineered specifically for Indian retail.`;

  const screenshotName = feature.screenshotFilename || "mobile-screen-1.png";

  // --- 4. Cinema-Grade AI Image Generation Prompt (Midjourney v6.1 / FLUX.1 Pro) ---
  const imagePrompt = {
    prompt: `Cinematic commercial advertising photography of a confident Indian ${audience.businessType} owner in their early 30s standing behind a modern, well-organized retail store counter. The store environment exhibits ${visualStyle.visualKeywords}. The merchant is smiling warmly while holding a slim bezel-less Android smartphone, angled at 15 degrees toward the lens. The smartphone screen is a clean, neutral dark-grey placeholder with crisp edge tracking markers, reserved strictly for composite UI overlay. On the wooden counter sits a compact 58mm black thermal receipt printer with a printed bill rolling out cleanly. Lighting setup: ${visualStyle.lightingKeywords}, soft octabox key light with warm 3200K tungsten ambient shop glow, and a subtle crimson rim light (#EF3035) highlighting edge contours. Captured on Hasselblad H6D-100c with Zeiss Master Prime 50mm lens at f/2.0, ISO 100, 1/250s shutter, commercial film grade, high dynamic range, ultra-clean composition with the top 35% quadrant clear negative space for bold headline copy --ar ${aspectRatio} --v 6.1 --style raw`,
    textArea: `Top 35% of the frame: High-contrast neutral zone with soft background bokeh, reserved for bold text overlay: "${headline}".`,
    screenshotInstruction: `REAL UI COMPOSITE MANDATE: Never allow AI to draw or hallucinate the application screen. Use Adobe Photoshop, Figma, or Canva to composite the verified screenshot '${screenshotName}' from 'assets/screenshots/' onto the physical smartphone display mockup.`,
    negativePrompt: `hallucinated app UI on screen, synthetic text on display, extra fingers, deformed hands, broken wrists, plastic skin, cartoon illustration, 3D CGI animation, dirty store floor, neon signs, cryptocurrency symbols, oversized futuristic holograms, messy cluttered wire mess`,
  };

  // --- 5. Production-Ready AI Video Prompt (Runway Gen-3 Alpha / Kling 1.5) ---
  const scenes: VideoScene[] = [
    {
      sceneNumber: 1,
      timeRange: "0:00 - 0:04",
      visual: `Close-up shot of Indian ${targetAudienceName} experiencing friction: ${feature.problem}. Messy paper bills and desktop calculator on desk.`,
      camera: "Slow steady dolly push-in, 35mm cinema lens, f/2.2.",
      action: "Merchant rubs forehead in frustration over messy paperwork, then notices smartphone.",
      onScreenText: primaryHook,
    },
    {
      sceneNumber: 2,
      timeRange: "0:04 - 0:08",
      visual: `Over-the-shoulder POV shot of hands holding smartphone over clean counter. Device display has matte placeholder for real screen recording.`,
      camera: "Smooth floating over-the-shoulder tracking shot.",
      action: `Merchant taps screen to activate ${feature.name}. Instant feedback on counter.`,
      onScreenText: `${feature.name} • 1-Tap Action`,
    },
    {
      sceneNumber: 3,
      timeRange: "0:08 - 0:12",
      visual: `Side macro shot of thermal printer buzzing. Crisp printed receipt cleanly emerges. Customer happily receives bill and scans UPI QR code.`,
      camera: "Lateral tracking pan focusing on receipt printer and customer smile.",
      action: "Payment confirmed in 2 seconds. Satisfied customer nods approvingly.",
      onScreenText: feature.benefit,
    },
    {
      sceneNumber: 4,
      timeRange: "0:12 - 0:15",
      visual: `Confident merchant giving a thumbs-up behind an organized counter. Modern animated title card with InvoiceFine Crimson (#EF3035) branding.`,
      camera: "Eye-level medium commercial shot pulling back smoothly.",
      action: "Merchant smiles at camera, followed by Google Play Store download badge.",
      onScreenText: `Download InvoiceFine Free • 100% Offline Billing`,
    },
  ];

  const voiceoverScripts: Record<string, string> = {
    en: `Tired of slow billing and messy calculations during rush hours? Switch to InvoiceFine! With ${feature.name}, you get ${feature.benefit}. No internet required, no complicated setups. Download InvoiceFine free on Google Play today!`,
    hinglish: `Dukaan par lambi line aur hisaab ki tension? Ab InvoiceFine ke ${feature.name} se bill banayein sirf 5 second mein! ${feature.benefit}. Na internet ka jhanjhat, na calculation ki galti. Aaj hi download karein InvoiceFine free!`,
    hi: `दुकान में ग्राहकों की भीड़ और बिल बनाने में समय बर्बाद? इन्वॉयसफाइन के ${feature.name} फीचर से पाएं: ${feature.benefit}। बिना इंटरनेट के भी पूरी तरह काम करता है। आज ही डाउनलोड करें इन्वॉयसफाइन बिल्कुल मुफ्त!`,
  };

  const videoPrompt = {
    objective: `Demonstrate ${feature.name} resolving ${feature.problem} for ${targetAudienceName} within ${videoDuration}.`,
    duration: videoDuration,
    aspectRatio: (aspectRatio === "16:9" ? "16:9" : "9:16") as AspectRatio,
    visualStyle: visualStyle.name,
    scenes,
    voiceover: voiceoverScripts[langCode] || voiceoverScripts.en,
    endingCta: `Download InvoiceFine Free • Android & Linux Desktop`,
    negativePrompt: `jittery frames, distorted fingers, hallucinated UI screens, morphing objects, flickering lighting, artificial CGI faces, floating digital screens`,
  };

  // --- 6. 7-Slide Strategic Carousel Framework ---
  const carouselSlides: CarouselSlide[] = [
    {
      slideNumber: 1,
      headline: primaryHook,
      bodyText: `The 2-minute system for ${targetAudienceName} to master ${feature.name} and eliminate counter errors. Swipe right to see how it works →`,
      visualConcept: `Minimalist high-contrast cover card with InvoiceFine crimson accent (#EF3035) badge and bold modern typography.`,
      imagePrompt: `Minimalist commercial social media card with bold typography and InvoiceFine crimson red highlights on dark obsidian background.`,
      screenshotInstruction: `None for cover slide.`,
      designDirection: `Dark charcoal background (#121215), crimson highlight badge, clear swipe indicator.`,
    },
    {
      slideNumber: 2,
      headline: `The Daily Cost of ${feature.problem}`,
      bodyText: `Traditional manual paper methods cause delayed billing, arithmetic errors, and customer disputes during peak evening rush hours.`,
      visualConcept: `Side-by-side comparison icon showing time wasted vs money lost.`,
      imagePrompt: `Flat vector comparison graphics illustrating lost retail revenue and time spent on manual ledger books.`,
      screenshotInstruction: `None for problem slide.`,
      designDirection: `Warning icon badge, high readability, clean bullet list.`,
    },
    {
      slideNumber: 3,
      headline: `Why Old Desktop Software Fails`,
      bodyText: `Bulky computers require continuous electricity, complex installation, and freeze whenever broadband or Wi-Fi goes down.`,
      visualConcept: `Monochrome wireframe illustration of desktop computer tied down with heavy cables.`,
      imagePrompt: `Modern clean graphic showing an outdated desktop billing machine with warning icon.`,
      screenshotInstruction: `None for friction slide.`,
      designDirection: `Cool slate grey tones contrasting with warm paper textures.`,
    },
    {
      slideNumber: 4,
      headline: `The Smart Solution: InvoiceFine`,
      bodyText: `Transform your smartphone into a complete billing station and digital Khata that runs 100% offline on Android and Linux.`,
      visualConcept: `Sleek smartphone mockup displaying verified InvoiceFine interface with soft glowing drop shadow.`,
      imagePrompt: `Clean modern smartphone floating on retail counter background with blank screen for composite.`,
      screenshotInstruction: `Composite '${screenshotName}' onto the mobile screen boundary.`,
      screenshotFilename: screenshotName,
      designDirection: `Floating device mockup holding verified screenshot: ${screenshotName}.`,
    },
    {
      slideNumber: 5,
      headline: `How ${feature.name} Works in 2 Taps`,
      bodyText: `1. Select customer or items. 2. Tap finalize. ${feature.benefit} with zero manual arithmetic.`,
      visualConcept: `Numbered step layout (1, 2, 3) with crisp typography and subtle micro-icons.`,
      imagePrompt: `3-step horizontal workflow diagram with numbered crimson circles.`,
      screenshotInstruction: `None for workflow step slide.`,
      designDirection: `Clean white/dark card base with crimson step counter pills.`,
    },
    {
      slideNumber: 6,
      headline: `The Real Business Payoff`,
      bodyText: `Save up to 45 minutes every single day, keep tamper-proof records, and close your shop with total peace of mind.`,
      visualConcept: `Green verified checkmark badge surrounded by key retail metrics: '100% Private', '0 Monthly Fees', '100% Offline'.`,
      imagePrompt: `Clean trust metric cards showcasing 100% offline, privacy, and zero monthly fees badges.`,
      screenshotInstruction: `None for benefit slide.`,
      designDirection: `Trust badge layout with soft green and crimson accents.`,
    },
    {
      slideNumber: 7,
      headline: `Take Control of Your Shop Today`,
      bodyText: `Download InvoiceFine free. No credit card required. Works 100% offline directly from your phone.`,
      visualConcept: `Brand card featuring InvoiceFine official logo, Google Play Store badge, and direct call-to-action button.`,
      imagePrompt: `Call to action card featuring InvoiceFine official logo and Google Play Store download badge.`,
      screenshotInstruction: `None for final CTA slide.`,
      designDirection: `Primary crimson button (#EF3035) with white bold lettering: 'Download Free on Google Play'.`,
      cta: `Download InvoiceFine Free • Link in Bio / Description`,
    },
  ];

  // --- 7. High-Retention Reel & Shorts Package ---
  const reelPackage: ReelPackage = {
    hook: primaryHook,
    problem: feature.problem,
    solution: `InvoiceFine provides instant ${feature.name} directly on your mobile device.`,
    feature: feature.name,
    demonstration: `Open app, select item, tax auto-calculates, tap print—complete receipt in 3 seconds.`,
    benefit: feature.benefit,
    cta: `Download InvoiceFine Free on Google Play Store. Link in bio!`,
    coverText: `${feature.name}: 5 Second Billing!`,
    voiceover: voiceoverScripts[langCode] || voiceoverScripts.en,
    onScreenText: [
      `Stop calculating bills by hand! ⏱️`,
      `${feature.name} in 1 Tap 📲`,
      `${feature.benefit} ⚡`,
      `100% Offline • No Wi-Fi Needed 🛡️`,
      `Download InvoiceFine Free 🚀`,
    ],
    caption: `${primaryHook}\n\nSay goodbye to paper chaos and manual errors. With InvoiceFine's ${feature.name}, you get ${feature.benefit}.\n\n✅ 100% Offline\n✅ 0 Monthly Fees\n✅ Thermal Printer & A4 Support\n\n📲 Download free via the link in bio!\n\n#InvoiceFine #RetailBilling #${feature.name.replace(/\s+/g, "")}`,
    hashtags: `#InvoiceFine #RetailBilling #SmallBusinessIndia #Shopkeeper #${feature.name.replace(/\s+/g, "")}`,
    videoPrompt: `A 9:16 vertical commercial video showing a busy Indian shopkeeper transitioning from a stressful paper calculator to effortlessly printing bills via InvoiceFine on a mobile phone. Clean commercial look, realistic retail setting, warm lighting, 24fps.`,
  };

  // --- 8. 6-Style Comprehensive Caption Bank ---
  const captions = {
    short: `${primaryHook} With InvoiceFine's ${feature.name}, you get: ${feature.benefit}. 100% offline, zero monthly fees. Download free via link in bio!`,
    medium: `${primaryHook}\n\nRunning a retail business in India is hard enough without billing bottlenecks and manual calculation mistakes.\n\nInvoiceFine's ${feature.name} lets you:\n• ${feature.benefit}\n• Operate 100% offline with zero internet dependencies\n• Keep your private business records safe on your own device\n\n📲 Tap the link in our bio to download InvoiceFine free on Google Play!`,
    educational: `Retail Business Tip for ${targetAudienceName}:\n\nDid you know that manual calculation errors at checkout cost small shops an estimated 2–3% of monthly revenue?\n\nHere is how InvoiceFine's ${feature.name} solves this:\n1. Instant Accuracy: Automated tax splits and line totals eliminate human error.\n2. Customer Trust: Professional receipts (thermal or PDF) build lasting buyer loyalty.\n3. Complete Privacy: All transaction records remain strictly on your local device.\n\nSave this post for your store, or download InvoiceFine free today!`,
    sales: `Tired of slow counter queues? Upgrade your checkout speed with InvoiceFine today!\n\n✨ Feature in focus: ${feature.name}\n🚀 Key Benefit: ${feature.benefit}\n🛡️ Architecture: 100% Offline (Works without Wi-Fi or mobile data)\n\nDownload InvoiceFine free on Google Play Store. Zero setup fees, zero hidden subscriptions!`,
    reel: `Fast counter = Happy customers! 🧾⚡\n\nWatch how ${feature.name} simplifies everyday billing in under 5 seconds. No internet needed, no bulky computers.\n\n📲 Link in bio to install free!`,
    carousel: `Swipe through to see how Indian shop owners are saving 45 minutes every evening with ${feature.name}. 👉\n\nWhich feature does your shop need the most? Let us know in the comments below!`,
  };

  // --- 9. Categorized Hashtag Vault ---
  const hashtags = {
    general: `#InvoiceFine #ProCSCTools #BusinessSoftware #RetailTech #BillingApp #KhataBook`,
    featureSpecific: `#${feature.name.replace(/\s+/g, "")} #GSTBilling #ThermalPrinting #StockManagement #CustomerLedger #OfflineBilling`,
    retail: `#KiranaStore #RetailIndia #IndianRetailer #Shopkeeper #Vyapar #DukaanHisaab #MSMEIndia`,
    combined: `#InvoiceFine #${feature.name.replace(/\s+/g, "")} #GSTBilling #RetailIndia #SmallBusinessIndia #KiranaStore #ShopManagement #Vyapar`,
  };

  return {
    id: `pkg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
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
    hook: primaryHook,
    headline,
    subheadline,
    imagePrompt,
    videoPrompt,
    carousel: {
      totalSlides: carouselSlides.length,
      slides: carouselSlides,
    },
    reel: reelPackage,
    captions,
    hashtags,
    cta: `Download InvoiceFine Free • Android & Linux Desktop`,
    negativePrompt: imagePrompt.negativePrompt,
  };
}
