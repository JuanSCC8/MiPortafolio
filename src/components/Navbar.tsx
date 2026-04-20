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
          ? "bg-[#0f172a]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-slate-900 font-black text-sm select-none">
            JS
          </span>
          <span className="hidden sm:block text-white font-semibold text-sm tracking-wide group-hover:text-yellow-400 transition-colors">
            Juan Sebastian
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
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {t.nav[key]}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop right: language toggle */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/20 overflow-hidden text-xs font-semibold">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-all ${
                  lang === l
                    ? "bg-yellow-400 text-slate-900"
                    : "text-slate-400 hover:text-white"
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
            className="text-yellow-400 text-xs font-bold border border-yellow-400/40 rounded-full px-2.5 py-1"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="px-6 py-5 flex flex-col gap-1">
              {NAV_HREFS.map(({ key, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-yellow-400 bg-yellow-400/10"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
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
