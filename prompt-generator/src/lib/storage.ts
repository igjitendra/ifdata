import { GeneratedContentPackage, SavedPrompt } from "@/types";

const STORAGE_KEYS = {
  SAVED: "invoicefine_saved_prompts",
  HISTORY: "invoicefine_prompt_history",
  THEME: "invoicefine_theme",
};

export function getSavedPrompts(): SavedPrompt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePrompt(pkg: GeneratedContentPackage): SavedPrompt {
  const current = getSavedPrompts();
  const existing = current.find((p) => p.id === pkg.id);
  if (existing) return existing;

  const newSaved: SavedPrompt = {
    id: pkg.id,
    title: `${pkg.inputs.feature.name} • ${pkg.inputs.contentType.name}`,
    timestamp: Date.now(),
    isFavorite: false,
    data: pkg,
  };

  const updated = [newSaved, ...current];
  localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(updated));
  return newSaved;
}

export function deleteSavedPrompt(id: string): SavedPrompt[] {
  const current = getSavedPrompts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(current));
  return current;
}

export function toggleFavoritePrompt(id: string): SavedPrompt[] {
  const current = getSavedPrompts().map((p) =>
    p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
  );
  localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(current));
  return current;
}

export function getHistory(): GeneratedContentPackage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addToHistory(pkg: GeneratedContentPackage): void {
  if (typeof window === "undefined") return;
  const current = getHistory().filter((p) => p.id !== pkg.id);
  const updated = [pkg, ...current].slice(0, 30); // Keep last 30
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
}

export function clearHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEYS.HISTORY);
}

export function getStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  try {
    const t = localStorage.getItem(STORAGE_KEYS.THEME);
    if (t === "dark" || t === "light") return t;
    return "dark"; // Default to dark mode
  } catch {
    return "dark";
  }
}

export function setStoredTheme(theme: "light" | "dark"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
