"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-80px" }}
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
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Testimonials />
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
