"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 overflow-hidden pt-16"
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full bg-blue-800/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <motion.p {...fadeUp(0)} className="text-blue-100 text-base font-medium tracking-widest uppercase">
              {t.hero.greeting}
            </motion.p>

            <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Juan Sebastian<br />
              <span className="text-white/80">Castaño Camues</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
              <span className="w-10 h-0.5 bg-white/60 rounded-full" />
              <p className="text-white font-semibold text-lg">{t.hero.role}</p>
            </motion.div>

            <motion.p {...fadeUp(0.3)} className="text-blue-100 text-base leading-relaxed max-w-md">
              {t.hero.description}
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="text-blue-200 text-sm">
              {t.hero.university}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 pt-2">
              <a
                href="/cv.pdf"
                download="JuanSebastian-Castaño-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 active:scale-95 transition-all duration-200"
              >
                <HiDownload size={18} />
                {t.hero.downloadCV}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold text-sm rounded-full border-2 border-white/60 hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                <HiMail size={18} />
                {t.hero.contactMe}
              </a>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-110 blur-sm" />
              {/* Photo frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white/40 overflow-hidden shadow-2xl">
                <Image
                  src="/mifoto.jpg"
                  alt="Juan Sebastian Castaño Camues"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Open to work badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-blue-900 text-xs font-semibold whitespace-nowrap">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-0.5 h-5 bg-white/30 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
