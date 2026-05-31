
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "../../components/Projects";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";
import Music from "../../components/Music";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Simple dark background */}
      <div className="fixed inset-0 bg-black" />

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
            <Hero />
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
            <Projects />
          </div>
        </section>

        {/* Music Player */}
        <Music />

        {/* Interests */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
            <Interests />
          </div>
        </section>

        {/* Footer */}
        <Contact />
      </div>
    </main>
  );
}