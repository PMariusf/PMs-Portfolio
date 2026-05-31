import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Music from "../../components/Music";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-black" />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="mx-auto max-w-[95%] pt-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            <Hero />
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl">
            <Projects />
          </div>
        </section>

        {/* Music Player */}
        <Music />

        {/* Interests */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl">
            <Interests />
          </div>
        </section>

        {/* Footer */}
        <Contact />
      </div>
    </main>
  );
}