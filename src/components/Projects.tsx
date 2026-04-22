"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

interface Repo {
  labelEs: string;
  labelEn: string;
  url: string;
}

interface Project {
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  techs: string[];
  repos: Repo[];
  demo?: string;
  status: "live" | "coming-soon";
  gradient: string;
  decorColor: string;
  tagColor: string;
  darkTagColor: string;
}

const PROJECTS: Project[] = [
  {
    titleEs: "Clon de Mercado Libre",
    titleEn: "Mercado Libre Clone",
    descriptionEs:
      "Clon funcional de la plataforma de e-commerce Mercado Libre. Incluye búsqueda de productos, páginas de detalle y un diseño fiel al original.",
    descriptionEn:
      "Functional clone of the Mercado Libre e-commerce platform. Features product search, detail pages, and a design faithful to the original.",
    techs: ["HTML", "CSS", "JavaScript"],
    repos: [
      {
        labelEs: "Repositorio",
        labelEn: "Repository",
        url: "https://github.com/juangallardo19/ClonacionMercadoLibre",
      },
    ],
    demo: "https://clonacion-mercado-libre.vercel.app",
    status: "live",
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
    decorColor: "bg-yellow-300/30",
    tagColor: "bg-amber-100 text-amber-700",
    darkTagColor: "dark:bg-amber-900/30 dark:text-amber-300",
  },
  {
    titleEs: "MindWell",
    titleEn: "MindWell",
    descriptionEs:
      "Aplicación de bienestar mental para llevar un registro semanal de tus emociones, logrando ver tablas de comparación semana a semana y poder ver tu estado de ánimo con recomendaciones de IA.",
    descriptionEn:
      "Mental wellness app to track your weekly emotions, view week-by-week comparison charts, and check your mood with AI-powered recommendations.",
    techs: ["Microservices", "Spring Boot", "REST APIs", "Java"],
    repos: [
      {
        labelEs: "Auth Service",
        labelEn: "Auth Service",
        url: "https://github.com/Juan-Lop/Micro_Servicio_AUHT",
      },
      {
        labelEs: "Diary Service",
        labelEn: "Diary Service",
        url: "https://github.com/Juan-Lop/Micro_Servicio_DIARY_SERVICE",
      },
    ],
    demo: "https://front-end-proyect-diario.vercel.app/",
    status: "live",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    decorColor: "bg-violet-300/30",
    tagColor: "bg-violet-100 text-violet-700",
    darkTagColor: "dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    titleEs: "ControlEdificio",
    titleEn: "ControlEdificio",
    descriptionEs:
      "Sistema de control y gestión de edificios con la finalidad de permitir el acceso a empleados y visitantes, registrando su entrada y salida.",
    descriptionEn:
      "Building control and management system designed to allow access to employees and visitors, recording their entry and exit.",
    techs: ["Java", "Spring Boot", "MongoDB"],
    repos: [
      {
        labelEs: "Repositorio",
        labelEn: "Repository",
        url: "https://github.com/JuanSCC8/ControlEdificio",
      },
    ],
    status: "live",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    decorColor: "bg-emerald-300/30",
    tagColor: "bg-emerald-100 text-emerald-700",
    darkTagColor: "dark:bg-emerald-900/30 dark:text-emerald-300",
  },
];

const vp = { once: false, margin: "-60px" };

export default function Projects() {
  const { lang, t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-800 py-24 px-6">
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
            {projects.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">{projects.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project, i) => {
            const title = lang === "es" ? project.titleEs : project.titleEn;
            const description = lang === "es" ? project.descriptionEs : project.descriptionEn;
            const isComingSoon = project.status === "coming-soon";

            return (
              <motion.div
                key={project.titleEn}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900"
              >
                {/* Gradient header */}
                <div className={`relative bg-gradient-to-br ${project.gradient} h-36 flex items-end p-5 overflow-hidden`}>
                  <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full ${project.decorColor}`} />
                  <div className={`absolute top-4 -right-2 w-14 h-14 rounded-full ${project.decorColor}`} />
                  <div className={`absolute -bottom-4 left-10 w-20 h-20 rounded-full ${project.decorColor}`} />

                  <span className="absolute top-4 left-5 text-white/70 font-black text-5xl leading-none select-none drop-shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative text-white font-bold text-xl leading-tight drop-shadow-sm z-10">
                    {title}
                  </h3>

                  {isComingSoon && (
                    <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2.5 py-1 z-10">
                      <HiClock size={11} />
                      {projects.comingSoon}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-semibold rounded-full px-2.5 py-1 ${project.tagColor} ${project.darkTagColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-700" />

                  <div className="flex flex-wrap gap-2">
                    {project.repos.map((repo) => (
                      <motion.a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg px-3 py-2 transition-colors"
                      >
                        <FaGithub size={13} />
                        {lang === "es" ? repo.labelEs : repo.labelEn}
                      </motion.a>
                    ))}

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors"
                      >
                        <FaExternalLinkAlt size={11} />
                        {projects.viewDemo}
                      </motion.a>
                    )}
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
