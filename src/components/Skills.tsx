"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaNodeJs, FaGithub, FaUsers } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiSqlite } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { TbApi, TbTestPipe, TbHierarchy } from "react-icons/tb";
import { HiCheckCircle } from "react-icons/hi";
import { VscGithubAction } from "react-icons/vsc";
import { useLanguage } from "@/contexts/LanguageContext";

type Level = 1 | 2 | 3;
type CategoryKey = "frontend" | "backend" | "databases" | "other";

interface Skill {
  nameEs: string;
  nameEn: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  level: Level;
  iconColor: string;
}

const SKILLS: Record<CategoryKey, Skill[]> = {
  frontend: [
    { nameEs: "HTML5",        nameEn: "HTML5",        icon: FaHtml5,          level: 3, iconColor: "#e34f26" },
    { nameEs: "CSS3",         nameEn: "CSS3",          icon: FaCss3Alt,        level: 3, iconColor: "#1572b6" },
    { nameEs: "JavaScript",   nameEn: "JavaScript",    icon: SiJavascript,     level: 2, iconColor: "#f7df1e" },
    { nameEs: "React",        nameEn: "React",         icon: FaReact,          level: 2, iconColor: "#61dafb" },
    { nameEs: "Tailwind CSS", nameEn: "Tailwind CSS",  icon: SiTailwindcss,    level: 2, iconColor: "#06b6d4" },
    { nameEs: "UX / UI",      nameEn: "UX / UI",       icon: MdDesignServices, level: 1, iconColor: "#8b5cf6" },
  ],
  backend: [
    { nameEs: "Python",      nameEn: "Python",      icon: FaPython,        level: 2, iconColor: "#3776ab" },
    { nameEs: "Java",        nameEn: "Java",         icon: FaJava,          level: 2, iconColor: "#ed8b00" },
    { nameEs: "Node.js",     nameEn: "Node.js",      icon: FaNodeJs,        level: 1, iconColor: "#339933" },
    { nameEs: "Django",      nameEn: "Django",       icon: SiDjango,        level: 1, iconColor: "#0c4b33" },
    { nameEs: "Spring Boot", nameEn: "Spring Boot",  icon: SiSpringboot,    level: 1, iconColor: "#6db33f" },
    { nameEs: "REST APIs",   nameEn: "REST APIs",    icon: TbApi,           level: 2, iconColor: "#6366f1" },
    { nameEs: "CI/CD",       nameEn: "CI/CD",        icon: VscGithubAction, level: 1, iconColor: "#2088ff" },
  ],
  databases: [
    { nameEs: "MySQL",      nameEn: "MySQL",      icon: SiMysql,      level: 2, iconColor: "#4479a1" },
    { nameEs: "PostgreSQL", nameEn: "PostgreSQL", icon: SiPostgresql, level: 1, iconColor: "#336791" },
    { nameEs: "MongoDB",    nameEn: "MongoDB",    icon: SiMongodb,    level: 1, iconColor: "#47a248" },
    { nameEs: "SQLite",     nameEn: "SQLite",     icon: SiSqlite,     level: 2, iconColor: "#003b57" },
  ],
  other: [
    { nameEs: "GitHub",              nameEn: "GitHub",           icon: FaGithub,      level: 2, iconColor: "#181717" },
    { nameEs: "Buenas prácticas",    nameEn: "Good Practices",   icon: HiCheckCircle, level: 2, iconColor: "#10b981" },
    { nameEs: "Patrones de diseño",  nameEn: "Design Patterns",  icon: TbHierarchy,   level: 1, iconColor: "#8b5cf6" },
    { nameEs: "Testing",             nameEn: "Testing",          icon: TbTestPipe,    level: 1, iconColor: "#f59e0b" },
    { nameEs: "Trabajo en equipo",   nameEn: "Teamwork",         icon: FaUsers,       level: 3, iconColor: "#3b82f6" },
  ],
};

const CATEGORIES: CategoryKey[] = ["frontend", "backend", "databases", "other"];

const THEME: Record<CategoryKey, { dot: string; tabActive: string; tabBorder: string; cardBorder: string; cardBg: string }> = {
  frontend: { dot: "bg-blue-500",    tabActive: "text-blue-600",   tabBorder: "border-blue-500",   cardBorder: "border-blue-100",   cardBg: "hover:bg-blue-50"    },
  backend:  { dot: "bg-violet-500",  tabActive: "text-violet-600", tabBorder: "border-violet-500", cardBorder: "border-violet-100", cardBg: "hover:bg-violet-50"  },
  databases:{ dot: "bg-emerald-500", tabActive: "text-emerald-600",tabBorder: "border-emerald-500",cardBorder: "border-emerald-100",cardBg: "hover:bg-emerald-50" },
  other:    { dot: "bg-amber-500",   tabActive: "text-amber-600",  tabBorder: "border-amber-500",  cardBorder: "border-amber-100",  cardBg: "hover:bg-amber-50"   },
};

const vp = { once: false, margin: "-60px" };

export default function Skills() {
  const { lang, t } = useLanguage();
  const { skills } = t;
  const [active, setActive] = useState<CategoryKey>("frontend");
  const [direction, setDirection] = useState(1);

  const categoryLabel: Record<CategoryKey, string> = {
    frontend: skills.frontend,
    backend: skills.backend,
    databases: skills.databases,
    other: skills.other,
  };


  const handleTab = (cat: CategoryKey) => {
    const oldIdx = CATEGORIES.indexOf(active);
    const newIdx = CATEGORIES.indexOf(cat);
    setDirection(newIdx >= oldIdx ? 1 : -1);
    setActive(cat);
  };

  const theme = THEME[active];

  return (
    <section id="skills" className="bg-slate-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
            {skills.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800">{skills.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="flex bg-white rounded-2xl p-1.5 shadow-sm border border-slate-100 gap-1 flex-wrap justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleTab(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? `${THEME[cat].tabActive} bg-slate-50`
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {categoryLabel[cat]}
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full ${THEME[cat].dot}`}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Skill cards grid */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {SKILLS[active].map((skill, i) => {
              const Icon = skill.icon;
              const name = lang === "es" ? skill.nameEs : skill.nameEn;
              return (
                <motion.div
                  key={skill.nameEn}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className={`bg-white border ${theme.cardBorder} ${theme.cardBg} rounded-2xl p-7 flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default`}
                >
                  <Icon size={48} style={{ color: skill.iconColor }} />
                  <span className="text-base font-semibold text-slate-700 text-center leading-tight">
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
