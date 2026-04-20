"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
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
              <motion.a
                href="/cv.pdf"
                download="JuanSebastian-Castaño-CV.pdf"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-shadow duration-200"
              >
                <HiDownload size={18} />
                {t.hero.downloadCV}
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold text-sm rounded-full border-2 border-white/60 hover:bg-white/10 transition-colors duration-200"
              >
                <HiMail size={18} />
                {t.hero.contactMe}
              </motion.a>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative pb-20">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-110 blur-sm" />
              {/* Photo frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl">
                <Image
                  src="/mifoto.jpg"
                  alt="Juan Sebastian Castaño Camues"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Open to work badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute bottom-16 -right-4 sm:-right-6 bg-white rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-blue-900 text-xs font-semibold whitespace-nowrap">
                  Open to work
                </span>
              </motion.div>

              {/* GitHub button */}
              <motion.a
                href="https://github.com/JuanSCC8"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <FaGithub size={26} />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-0.5 h-5 bg-white/30 rounded-full"
          />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 lg:h-24"
        >
          <path
            d="M0,45 C180,80 360,10 540,45 C720,80 900,10 1080,45 C1260,80 1380,30 1440,45 L1440,90 L0,90 Z"
            fill="white"
            fillOpacity="0.25"
          />
          <path
            d="M0,55 C240,20 480,75 720,55 C960,35 1200,70 1440,55 L1440,90 L0,90 Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M0,65 C320,35 640,85 960,65 C1120,55 1300,72 1440,65 L1440,90 L0,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
