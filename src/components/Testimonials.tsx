"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  name: string;
  textEs: string;
  textEn: string;
  stars: number;
  initials: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anyela Portillo",
    textEs:
      "Juan Sebastian es un compañero excepcional. Su dedicación y capacidad para resolver problemas complejos hacen que trabajar con él sea una experiencia muy enriquecedora. Siempre dispuesto a ayudar y con una actitud muy positiva ante los retos.",
    textEn:
      "Juan Sebastian is an exceptional teammate. His dedication and ability to solve complex problems make working with him a very enriching experience. Always willing to help and with a very positive attitude towards challenges.",
    stars: 5,
    initials: "AP",
    avatarBg: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
  {
    name: "Gabriel Guerrero",
    textEs:
      "Trabajar con Juan Sebastian en proyectos universitarios fue una gran experiencia. Tiene mucha iniciativa, se adapta rápido a las tecnologías nuevas y siempre entrega un trabajo limpio y bien organizado.",
    textEn:
      "Working with Juan Sebastian on university projects was a great experience. He takes a lot of initiative, adapts quickly to new technologies, and always delivers clean and well-organized work.",
    stars: 5,
    initials: "GG",
    avatarBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    name: "Juan Montezuma",
    textEs:
      "Juan Sebastian demostró ser un desarrollador muy comprometido. Su enfoque en las buenas prácticas y su facilidad para trabajar en equipo aportaron mucho al proyecto. Es alguien en quien se puede confiar.",
    textEn:
      "Juan Sebastian proved to be a very committed developer. His focus on best practices and his ease of working in a team contributed a lot to the project. He is someone you can rely on.",
    stars: 5,
    initials: "JM",
    avatarBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
  },
  {
    name: "Maicol Estupiñan",
    textEs:
      "Juan Sebastian es alguien que realmente se compromete con lo que hace. En los proyectos que trabajamos juntos siempre aportó ideas claras y nunca le huyó a los problemas difíciles.",
    textEn:
      "Juan Sebastian is someone who is truly committed to what he does. In the projects we worked on together he always brought clear ideas, wrote clean code and never shied away from hard problems. A real team asset.",
    stars: 5,
    initials: "ME",
    avatarBg: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    name: "Liliana Camues",
    textEs:
      "Desde pequeño siempre mostró curiosidad y ganas de aprender. Verlo crecer como profesional y ver todo lo que ha logrado construir me llena de orgullo. Es una persona muy dedicada, responsable y con un futuro muy brillante.",
    textEn:
      "From a young age he always showed curiosity and a desire to learn. Seeing him grow as a professional and everything he has managed to build fills me with pride. He is a very dedicated, responsible person with a very bright future.",
    stars: 5,
    initials: "LC",
    avatarBg: "bg-gradient-to-br from-violet-400 to-purple-500",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        if (stars >= i)
          return <FaStar key={i} className="text-amber-400" size={14} />;
        if (stars >= i - 0.5)
          return <FaStarHalfAlt key={i} className="text-amber-400" size={14} />;
        return <FaRegStar key={i} className="text-amber-300" size={14} />;
      })}
      <span className="ml-1.5 text-xs font-semibold text-amber-500">
        {stars.toFixed(1)}
      </span>
    </div>
  );
}

function TestimonialCard({ item, lang }: { item: Testimonial; lang: string }) {
  const text = lang === "es" ? item.textEs : item.textEn;

  return (
    <div className="relative flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 shadow-md h-full">
      <div className="absolute top-5 right-5 text-blue-100 dark:text-slate-700">
        <FaQuoteLeft size={32} />
      </div>
      <StarRating stars={item.stars} />
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 relative z-10">
        {text}
      </p>
      <div className="mt-5 border-t border-slate-100 dark:border-slate-700" />
      <div className="mt-4 flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center shrink-0`}
        >
          <span className="text-xs font-bold text-white">{item.initials}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.name}</p>
        </div>
      </div>
    </div>
  );
}

const vp = { once: false, margin: "-60px" };

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const { testimonials } = t;

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const count = window.innerWidth < 768 ? 1 : 3;
      setVisibleCount(count);
      setStartIndex((i) => Math.min(i, TESTIMONIALS.length - count));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = TESTIMONIALS.length - visibleCount;
  const canPrev = startIndex > 0;
  const canNext = startIndex < maxIndex;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  const cardWidthPct = 100 / visibleCount;

  return (
    <section id="testimonials" className="bg-white dark:bg-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
            {testimonials.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">{testimonials.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${startIndex * cardWidthPct}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.name}
                  className="shrink-0 px-3"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <TestimonialCard item={item} lang={lang} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                canPrev
                  ? "border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-900 dark:hover:bg-blue-400 hover:text-white"
                  : "border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed"
              }`}
            >
              <HiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    startIndex === i
                      ? "w-6 h-2 bg-blue-900 dark:bg-blue-400"
                      : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={!canNext}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                canNext
                  ? "border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-900 dark:hover:bg-blue-400 hover:text-white"
                  : "border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed"
              }`}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
