import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Projects from "../../../components/Projects";

export default function Hobby() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Creative Side
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Hobby & Creative Work
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Outside of frontend development, I enjoy
          music, drawing, image editing, video editing
          and creating digital concepts.
        </p>

        {/* Hobby Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            "Music",
            "Drawing",
            "Image Editing",
            "Video Editing",
            "AI Art",
            "Gaming",
          ].map((hobby) => (
            <div
              key={hobby}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-bold">
                {hobby}
              </h2>

              <p className="mt-3 text-white/60">
                A creative area I like to explore and improve.
              </p>
            </div>
          ))}
        </div>

        {/* Creative Gallery */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Creative Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Image Showcase
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            A collection of creative visuals, digital
            concepts, AI generated artwork and design
            experiments.
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <Projects />
          </div>
        </section>
      </section>

      <Contact />
    </main>
  );
}