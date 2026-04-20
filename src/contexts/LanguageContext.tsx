"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { en, type Dictionary } from "@/dictionaries/en";
import { es } from "@/dictionaries/es";

export type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("portfolio-lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: lang === "es" ? es : en, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
