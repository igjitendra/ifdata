"use client";

import React, { useState } from "react";
import { X, Star, Trash2, Clock, ArrowRight, Copy, Check } from "lucide-react";
import { SavedPrompt, GeneratedContentPackage } from "@/types";
import { deleteSavedPrompt, toggleFavoritePrompt, clearHistory } from "@/lib/storage";

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedPrompts: SavedPrompt[];
  historyPrompts: GeneratedContentPackage[];
  onRefreshData: () => void;
  onLoadPackage: (pkg: GeneratedContentPackage) => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedPrompts,
  historyPrompts,
  onRefreshData,
  onLoadPackage,
}) => {
  const [activeTab, setActiveTab] = useState<"saved" | "history">("saved");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleToggleFavorite = (id: string) => {
    toggleFavoritePrompt(id);
    onRefreshData();
  };

  const handleDeleteSaved = (id: string) => {
    deleteSavedPrompt(id);
    onRefreshData();
  };

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your recent generation history?")) {
      clearHistory();
      onRefreshData();
    }
  };

  const handleCopyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <div className="flex bg-zinc-200/60 dark:bg-zinc-800 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeTab === "saved"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Saved Favorites ({savedPrompts.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("history")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeTab === "history"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Recent History ({historyPrompts.length})</span>
              </button>
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

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "saved" ? (
            savedPrompts.length === 0 ? (
              <div className="text-center py-12">
                <Star className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  No Saved Prompts Yet
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mt-1">
                  Click the "Save to Favorites" star button on any generated package to bookmark it here for quick access.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedPrompts.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-[#EF3035] font-semibold">
                          {item.data.inputs.platform.name}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 italic">
                        "{item.data.hook}"
                      </p>
                      <span className="text-[10px] text-zinc-400 mt-1 block">
                        Saved {new Date(item.timestamp).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyText(item.data.fullContentText, item.id)}
                        className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs flex items-center gap-1"
                        title="Copy full text"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleFavorite(item.id)}
                        className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-amber-500"
                        title="Toggle favorite"
                      >
                        <Star className={`w-3.5 h-3.5 ${item.isFavorite ? "fill-amber-500" : ""}`} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteSaved(item.id)}
                        className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-rose-500"
                        title="Delete saved item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onLoadPackage(item.data);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#EF3035] hover:bg-red-700 text-white shadow-xs"
                      >
                        <span>Load</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : historyPrompts.length === 0 ? (
            <div className="text-center py-12">
              <Clock className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                No Generation History
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mt-1">
                Your recent prompt generations will automatically appear here for easy retrieval.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex justify-end mb-3">
                <button
                  type="button"
                  onClick={handleClearHistory}
                  className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear All History
                </button>
              </div>

              <div className="space-y-3">
                {historyPrompts.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          {item.inputs.feature.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                          {item.inputs.contentType.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-[#EF3035] font-semibold">
                          {item.inputs.platform.name}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 italic">
                        "{item.hook}"
                      </p>
                      <span className="text-[10px] text-zinc-400 mt-1 block">
                        {new Date(item.timestamp).toLocaleTimeString()} • {new Date(item.timestamp).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          onLoadPackage(item);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#EF3035] hover:bg-red-700 text-white shadow-xs"
                      >
                        <span>Re-load</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
