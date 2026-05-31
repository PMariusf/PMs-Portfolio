import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          About Me
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Frontend Developer
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          I am a frontend student passionate about
          design, React, Next.js, AI and creating
          modern web experiences.
        </p>
      </section>

      <Contact />
    </main>
  );
}