import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function CV() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">CV</p>

        <h1 className="mt-4 text-5xl font-bold">Experience & Skills</h1>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Frontend Student</h2>
            <p className="mt-3 text-white/60">
              Studying frontend development with focus on React, Next.js,
              TypeScript, Tailwind and modern web design.
            </p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="mt-3 text-white/60">
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind,
              Figma, GitHub and responsive design.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}