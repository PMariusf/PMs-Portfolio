import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Projects from "../../../components/Projects";

export default function Hobby() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Creative Side
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Hobby & Creative Work
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Outside of frontend development, I enjoy music, drawing, image
          editing, video editing and creating digital concepts.
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
              className="group relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
            >
              {/* Top left corner */}
              <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-0 top-0 h-0.5 w-14 bg-white/70 blur-[1px]" />
                <div className="absolute left-0 top-0 h-14 w-0.5 bg-white/70 blur-[1px]" />
              </div>

              {/* Top right corner */}
              <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-0.5 w-14 bg-white/70 blur-[1px]" />
                <div className="absolute right-0 top-0 h-14 w-0.5 bg-white/70 blur-[1px]" />
              </div>

              {/* Bottom left corner */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 h-0.5 w-14 bg-white/70 blur-[1px]" />
                <div className="absolute bottom-0 left-0 h-14 w-0.5 bg-white/70 blur-[1px]" />
              </div>

              {/* Bottom right corner */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 right-0 h-0.5 w-14 bg-white/70 blur-[1px]" />
                <div className="absolute bottom-0 right-0 h-14 w-0.5 bg-white/70 blur-[1px]" />
              </div>

              {/* Cursor glow / light strobe */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/15 blur-[60px]" />
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-[60px]" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-[60px]" />
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/15 blur-[60px]" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-[90px] transition duration-300 group-hover:scale-125" />
              </div>

              {/* Card content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold">{hobby}</h2>

                <p className="mt-3 text-white/60">
                  A creative area I like to explore and improve.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Gallery */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Creative Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold">Image Showcase</h2>

          <p className="mt-4 max-w-2xl text-white/60">
            A collection of creative visuals, digital concepts, AI generated
            artwork and design experiments.
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