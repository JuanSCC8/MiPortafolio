"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_LINKS = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "testimonials" as const, href: "#testimonials" },
  { key: "experience" as const, href: "#experience" },
  { key: "contact" as const, href: "#contact" },
];

const TECHS = [
  { name: "Next.js",    icon: SiNextdotjs,   color: "#ffffff" },
  { name: "React",      icon: FaReact,        color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript,   color: "#ffffff" },
  { name: "Tailwind",   icon: SiTailwindcss,  color: "#ffffff" },
];

export default function Footer() {
  const { t } = useLanguage();
  const { footer, nav } = t;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">

      {/* Wave transition from white Contact section */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full block h-16 sm:h-20"
        >
          <path
            d="M0,0 L1440,0 L1440,30 C1260,75 1080,10 900,45 C720,80 540,15 360,50 C180,85 60,20 0,55 Z"
            className="fill-white dark:fill-slate-900"
          />
          <path
            d="M0,0 L1440,0 L1440,15 C1100,60 720,0 360,40 C180,60 60,10 0,30 Z"
            opacity="0.5"
            className="fill-white dark:fill-slate-900"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left — name + message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white font-black text-xs select-none shrink-0">
                JS
              </span>
              <span className="text-2xl font-bold leading-tight">
                Juan Sebastian<br />
                <span className="text-blue-200">Castaño Camues</span>
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mt-1">
              {footer.message}
            </p>
          </motion.div>

          {/* Center — tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase">
              {footer.builtWith}
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {TECHS.map(({ name, icon: Icon, color }) => (
                <div key={name} className="flex flex-col items-center gap-1.5 group">
                  <Icon size={32} style={{ color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs text-blue-200 group-hover:text-white transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — vertical nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-2 md:items-end"
          >
            {NAV_LINKS.map(({ key, href }) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href)}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-sm text-blue-100 hover:text-white transition-colors text-left md:text-right"
              >
                {nav[key]}
              </motion.button>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-1 bg-white dark:bg-slate-700 mx-6 rounded-full" />
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200">
        <span>{footer.copyright}</span>
        <span>{footer.madeIn}</span>
      </div>

    </footer>
  );
}
