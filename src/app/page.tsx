import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">Hero — coming soon</p>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">About — coming soon</p>
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">Skills — coming soon</p>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">Projects — coming soon</p>
        </section>
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">Experience — coming soon</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-sm">Contact — coming soon</p>
        </section>
      </main>
    </>
  );
}
