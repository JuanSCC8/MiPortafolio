"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import About from "@/components/About";

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />

        <SectionReveal>
          <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
            <p className="text-slate-400 text-sm">Skills — coming soon</p>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="projects" className="min-h-screen flex items-center justify-center">
            <p className="text-slate-400 text-sm">Projects — coming soon</p>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="experience" className="min-h-screen flex items-center justify-center">
            <p className="text-slate-400 text-sm">Experience — coming soon</p>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="contact" className="min-h-screen flex items-center justify-center">
            <p className="text-slate-400 text-sm">Contact — coming soon</p>
          </section>
        </SectionReveal>
      </main>
    </>
  );
}
