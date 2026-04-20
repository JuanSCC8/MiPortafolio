import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-sm">Skills — coming soon</p>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-sm">Projects — coming soon</p>
        </section>
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-sm">Experience — coming soon</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-sm">Contact — coming soon</p>
        </section>
      </main>
    </>
  );
}
