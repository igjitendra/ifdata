"use client";

import React, { useState } from "react";
import { X, Search, Check, Sparkles, AlertCircle } from "lucide-react";
import { FEATURES } from "@/data/features";
import { Feature } from "@/types";

interface FeatureCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFeatureId: string;
  onSelectFeature: (feature: Feature) => void;
}

export const FeatureCatalogModal: React.FC<FeatureCatalogModalProps> = ({
  isOpen,
  onClose,
  selectedFeatureId,
  onSelectFeature,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!isOpen) return null;

  const categories = ["All", "Billing", "Customers", "Inventory", "Printing", "Reports", "General", "Planned"];

  const filteredFeatures = FEATURES.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EF3035]/10 flex items-center justify-center text-[#EF3035]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                InvoiceFine Features Catalog
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Browse and select any of the 40+ confirmed product features to generate marketing content.
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

        {/* Search & Categories */}
        <div className="px-6 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search features or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF3035]/30 text-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#EF3035] text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredFeatures.map((f) => {
            const isSelected = f.id === selectedFeatureId;
            return (
              <div
                key={f.id}
                onClick={() => {
                  onSelectFeature(f);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? "border-[#EF3035] bg-red-50/40 dark:bg-red-950/20 ring-1 ring-[#EF3035]"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/60 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {f.name}
                      </h3>
                      {f.isComingSoon && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300/40">
                          <AlertCircle className="w-2.5 h-2.5" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#EF3035] text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">
                    {f.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {f.category}
                  </span>
                  {f.keywords.slice(0, 3).map((k) => (
                    <span
                      key={k}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-50 dark:bg-zinc-800/40 text-zinc-400 dark:text-zinc-500"
                    >
                      #{k}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
