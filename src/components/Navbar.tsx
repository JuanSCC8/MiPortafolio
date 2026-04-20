"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const NAV_HREFS = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "experience" as const, href: "#experience" },
  { key: "contact" as const, href: "#contact" },
];

const SECTIONS = NAV_HREFS.map((l) => l.href.slice(1));

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.4, rootMargin: "-64px 0px 0px 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "es" ? "en" : ("es" as Lang));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-slate-200/80 border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-white font-black text-xs select-none shrink-0">
            JS
          </span>
          <span className="hidden sm:block text-blue-900 font-semibold text-sm tracking-wide leading-tight">
            Juan Sebastian<br />
            Castaño Camues
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_HREFS.map(({ key, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-blue-900"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {t.nav[key]}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-900 rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop: language toggle */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center rounded-full border border-slate-200 overflow-hidden text-xs font-semibold">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-all ${
                  lang === l
                    ? "bg-blue-900 text-white"
                    : "text-slate-400 hover:text-slate-600 bg-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-blue-900 text-xs font-bold border border-blue-900/30 rounded-full px-2.5 py-1"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-600 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-md"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV_HREFS.map(({ key, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-blue-900 bg-blue-50"
                          : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {t.nav[key]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
