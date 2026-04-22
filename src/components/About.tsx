"use client";

import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiAcademicCap,
  HiCode,
  HiDatabase,
  HiLightBulb,
} from "react-icons/hi";
import { FaGamepad, FaFutbol, FaMusic, FaLayerGroup } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.25, 0.1, 0.25, 1] as const;
const viewportOpts = { once: false, margin: "-60px" };

function fromTop(delay = 0) {
  return {
    initial: { opacity: 0, y: -36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOpts,
    transition: { duration: 0.6, delay, ease },
  };
}
function fromLeft(delay = 0) {
  return {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportOpts,
    transition: { duration: 0.6, delay, ease },
  };
}
function fromRight(delay = 0) {
  return {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportOpts,
    transition: { duration: 0.6, delay, ease },
  };
}
function fromBottom(delay = 0) {
  return {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOpts,
    transition: { duration: 0.65, delay, ease },
  };
}

const INTEREST_STYLES = {
  gaming: {
    icon: FaGamepad,
    bg: "bg-violet-50 dark:bg-slate-800",
    border: "border-violet-200 dark:border-violet-900/50",
    iconColor: "text-violet-500",
    tagBg: "bg-violet-100 dark:bg-violet-900/30",
    tagText: "text-violet-700 dark:text-violet-300",
  },
  sports: {
    icon: FaFutbol,
    bg: "bg-emerald-50 dark:bg-slate-800",
    border: "border-emerald-200 dark:border-emerald-900/50",
    iconColor: "text-emerald-500",
    tagBg: "bg-emerald-100 dark:bg-emerald-900/30",
    tagText: "text-emerald-700 dark:text-emerald-300",
  },
  music: {
    icon: FaMusic,
    bg: "bg-orange-50 dark:bg-slate-800",
    border: "border-orange-200 dark:border-orange-900/50",
    iconColor: "text-orange-500",
    tagBg: "bg-orange-100 dark:bg-orange-900/30",
    tagText: "text-orange-700 dark:text-orange-300",
  },
} as const;

type InterestKey = keyof typeof INTEREST_STYLES;

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  const interests: { key: InterestKey; data: { title: string; description: string; items: string[] } }[] = [
    { key: "gaming", data: about.gaming },
    { key: "sports", data: about.sports },
    { key: "music", data: about.music },
  ];

  return (
    <section id="about" className="bg-white dark:bg-slate-900 pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div {...fromTop(0)} className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
            {about.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">{about.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

          {/* Left card */}
          <motion.div
            {...fromLeft(0.1)}
            className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 flex flex-col gap-6"
          >
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {about.description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <HiLocationMarker className="text-blue-600" size={18} />
                </span>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-none mb-0.5">Ubicación</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{about.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <HiAcademicCap className="text-blue-600" size={18} />
                </span>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-none mb-0.5">{about.career}</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{about.university}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <motion.p {...fromRight(0.1)} className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest">
              {about.interestsTitle}
            </motion.p>

            {interests.map(({ key, data }, i) => {
              const style = INTEREST_STYLES[key];
              const Icon = style.icon;
              return (
                <motion.div
                  key={key}
                  {...fromRight(0.18 + i * 0.1)}
                  className={`${style.bg} border ${style.border} rounded-2xl px-5 py-4 flex flex-col gap-3`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={style.iconColor} size={16} />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{data.title}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{data.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((item) => (
                      <span
                        key={item}
                        className={`${style.tagBg} ${style.tagText} text-xs font-medium px-3 py-1 rounded-full`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Goals card */}
        <motion.div
          {...fromBottom(0.2)}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <HiLightBulb size={20} />
            </span>
            <h3 className="text-xl font-bold">{about.goalsTitle}</h3>
          </div>

          <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-3xl">
            {about.goalsDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-sm font-medium">
              <HiCode size={15} />
              {about.frontend}
            </span>
            <span className="text-blue-300 font-light">+</span>
            <span className="flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-sm font-medium">
              <HiCode size={15} />
              {about.backend}
            </span>
            <span className="text-blue-300 font-light">+</span>
            <span className="flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-sm font-medium">
              <HiDatabase size={15} />
              {about.databases}
            </span>
            <span className="text-blue-300 font-light">=</span>
            <span className="flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2 rounded-full text-sm shadow-lg">
              <FaLayerGroup size={14} />
              {about.fullstack}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
