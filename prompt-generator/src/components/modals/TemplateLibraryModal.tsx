"use client";

import React from "react";
import { X, Layers, Image, Video, FileText, CheckCircle2, Bookmark } from "lucide-react";

interface TemplateLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateLibraryModal: React.FC<TemplateLibraryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const frameworks = [
    {
      title: "Single Image Frameworks (10 Formats)",
      icon: <Image className="w-4 h-4 text-rose-500" />,
      description: "Optimized 4:5 high-impact visual posts with safe text margins and authentic Indian shop backdrops.",
      examples: [
        "Feature Spotlight (Direct tool breakdown)",
        "Problem / Solution (Messy paper vs Digital)",
        "Business Tip (Markup vs Gross profit margin)",
        "GST Advice (CGST/SGST vs IGST state rule)",
        "Version Announcement (Desktop v1.2.0)",
        "Logo & Payment QR Setup Tutorial",
        "Bluetooth Thermal POS Showcase",
        "Low-Stock Visual Warning Alert",
        "Customer Khata Statement Transparency",
        "End-of-Day Closing Sales Checklist",
      ],
    },
    {
      title: "Carousel Slide Blueprints (4 Master Systems)",
      icon: <Layers className="w-4 h-4 text-indigo-500" />,
      description: "Structured multi-slide swipeable guides engineered for high saves and algorithm authority.",
      examples: [
        "7-Slide Problem → Solution (Hook, Friction, Failure, InvoiceFine Fix, Demo, Benefit, CTA)",
        "5-Slide Hardware Comparison (58mm vs 80mm Thermal Receipt Printers)",
        "8-Slide Inventory Deep-Dive (From Opening Stock to Sales Audit and Running Balance)",
        "10-Slide SME Masterclass (10 Essential Invoicing Rules Every Shopkeeper Must Know)",
      ],
    },
    {
      title: "Short-Form Video & Reel Blueprints (4 Timeline Systems)",
      icon: <Video className="w-4 h-4 text-emerald-500" />,
      description: "Strict second-by-second timeline retention formulas with voiceovers and on-screen text.",
      examples: [
        "18s Out-Of-Stock Nightmare (Stock Ledger audit in action)",
        "15s Counter Billing Challenge (Barcode scan to printed receipt in under 15s)",
        "20s Forgotten Udhaar (Customer Khata dispute resolution and WhatsApp share)",
        "15s Offline Reliability (Billing smoothly during power cut / Wi-Fi outage)",
      ],
    },
    {
      title: "Content Tone & Linguistic Frameworks",
      icon: <FileText className="w-4 h-4 text-amber-500" />,
      description: "Natural localized copy crafted without spammy buzzwords or robotic machine translations.",
      examples: [
        "Hinglish (Natural daily shopkeeper communication)",
        "English (Direct, professional, crisp SME copy)",
        "Hindi (Polite, respectful, authentic commercial Hindi)",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                Content Template Library & Formulas
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Proven content frameworks built into the InvoiceFine prompt generation engine.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {frameworks.map((fw, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40"
            >
              <div className="flex items-center gap-2 mb-1.5">
                {fw.icon}
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {fw.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3.5">
                {fw.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {fw.examples.map((ex, eIdx) => (
                  <div
                    key={eIdx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-white dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EF3035] flex-shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
