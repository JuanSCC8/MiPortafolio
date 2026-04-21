"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

const vp = { once: false, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="bg-slate-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          {...fadeUp()}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
            {experience.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800">{experience.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0">

          {/* Academic */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-4">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                <HiAcademicCap className="text-white" size={16} />
              </div>
              <h3 className="text-base font-bold text-slate-700 uppercase tracking-widest text-sm">
                {experience.academic}
              </h3>
            </div>

            {/* Card */}
            <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-md overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl" />

              {/* Period */}
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                  2024 — {experience.present}
                </span>
                <span className="text-xs font-bold text-white bg-blue-900 rounded-full px-3 py-1">
                  5° Semestre
                </span>
              </div>

              {/* Degree */}
              <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">
                Ingeniería de Software
              </h4>

              {/* University */}
              <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
                <HiLocationMarker size={14} className="text-slate-400 shrink-0" />
                Universidad Cooperativa de Colombia
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Progreso</span>
                  <span>~50%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={vp}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:flex flex-col items-center px-6">
            <div className="w-1 h-full rounded-full bg-gradient-to-b from-blue-600 via-teal-400 to-emerald-500" />
          </div>

          {/* Work */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4 md:mt-44">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                <HiBriefcase className="text-white" size={16} />
              </div>
              <h3 className="text-base font-bold text-slate-700 uppercase tracking-widest text-sm">
                {experience.work}
              </h3>
            </div>

            {/* Card */}
            <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-md overflow-hidden h-full">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-t-2xl" />

              {/* Open to work badge */}
              <div className="flex items-center gap-2 mb-5 mt-1">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {experience.openBadge}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-slate-800 leading-tight mb-4">
                {experience.seeking}
              </h4>

              {/* Availability points */}
              <div className="flex flex-col gap-3">
                {[experience.available, "Pasto, Colombia · Remoto"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <HiCheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={16} />
                    <span className="text-sm text-slate-500">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl px-5 py-2.5 transition-colors"
              >
                Contáctame
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
