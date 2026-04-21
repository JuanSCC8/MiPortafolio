"use client";

import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  name: string;
  roleEs: string;
  roleEn: string;
  textEs: string;
  textEn: string;
  stars: number;
  initials: string;
  avatarBg: string;
  avatarText: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anyela Portillo",
    roleEs: "Compañera de equipo",
    roleEn: "Team Member",
    textEs:
      "Juan Sebastian es un compañero excepcional. Su dedicación y capacidad para resolver problemas complejos hacen que trabajar con él sea una experiencia muy enriquecedora. Siempre dispuesto a ayudar y con una actitud muy positiva ante los retos.",
    textEn:
      "Juan Sebastian is an exceptional teammate. His dedication and ability to solve complex problems make working with him a very enriching experience. Always willing to help and with a very positive attitude towards challenges.",
    stars: 5,
    initials: "AP",
    avatarBg: "bg-gradient-to-br from-pink-400 to-rose-500",
    avatarText: "text-white",
  },
  {
    name: "Gabriel Guerrero",
    roleEs: "Compañero de universidad",
    roleEn: "University Classmate",
    textEs:
      "Trabajar con Juan Sebastian en proyectos universitarios fue una gran experiencia. Tiene mucha iniciativa, se adapta rápido a las tecnologías nuevas y siempre entrega un trabajo limpio y bien organizado.",
    textEn:
      "Working with Juan Sebastian on university projects was a great experience. He takes a lot of initiative, adapts quickly to new technologies, and always delivers clean and well-organized work.",
    stars: 4.5,
    initials: "GG",
    avatarBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
    avatarText: "text-white",
  },
  {
    name: "Juan Montezuma",
    roleEs: "Compañero de proyecto",
    roleEn: "Project Collaborator",
    textEs:
      "Juan Sebastian demostró ser un desarrollador muy comprometido. Su enfoque en las buenas prácticas y su facilidad para trabajar en equipo aportaron mucho al proyecto. Es alguien en quien se puede confiar.",
    textEn:
      "Juan Sebastian proved to be a very committed developer. His focus on best practices and his ease of working in a team contributed a lot to the project. He is someone you can rely on.",
    stars: 4,
    initials: "JM",
    avatarBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
    avatarText: "text-white",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        if (stars >= i) {
          return <FaStar key={i} className="text-amber-400" size={15} />;
        } else if (stars >= i - 0.5) {
          return <FaStarHalfAlt key={i} className="text-amber-400" size={15} />;
        } else {
          return <FaRegStar key={i} className="text-amber-300" size={15} />;
        }
      })}
      <span className="ml-1.5 text-xs font-semibold text-amber-500">{stars.toFixed(1)}</span>
    </div>
  );
}

const vp = { once: false, margin: "-60px" };

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const { testimonials } = t;

  return (
    <section id="testimonials" className="bg-white py-24 px-6">
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
          <h2 className="text-4xl font-bold text-slate-800">{testimonials.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((item, i) => {
            const text = lang === "es" ? item.textEs : item.textEn;
            const role = lang === "es" ? item.roleEs : item.roleEn;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="relative flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote icon */}
                <div className="absolute top-5 right-5 text-blue-100">
                  <FaQuoteLeft size={36} />
                </div>

                {/* Stars */}
                <StarRating stars={item.stars} />

                {/* Text */}
                <p className="mt-4 text-sm text-slate-500 leading-relaxed flex-1 relative z-10">
                  {text}
                </p>

                {/* Divider */}
                <div className="mt-5 border-t border-slate-100" />

                {/* Author */}
                <div className="mt-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center shrink-0`}>
                    <span className={`text-xs font-bold ${item.avatarText}`}>{item.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">{item.name}</p>
                    <p className="text-xs text-slate-400">{role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
