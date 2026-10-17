"use client";

import Navbar from "../../../components/Navbar";
import { useLanguage } from "../../../components/LanguageProvider";

export default function ContactPage() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          {no ? "Kontakt" : "Contact"}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {no ? "La oss ta en prat" : "Let’s Connect"}
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          {no
            ? "Ta gjerne kontakt om frontend-arbeid, nettsider, kreative idéer eller samarbeid."
            : "Feel free to contact me for frontend work, projects, creative ideas or collaboration."}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <a
            href="mailto:marius28@live.no"
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
          >
            <h2 className="text-2xl font-bold">E-post</h2>
            <p className="mt-3 text-white/60">marius28@live.no</p>
          </a>

          <a
            href="https://github.com/PMariusf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
          >
            <h2 className="text-2xl font-bold">GitHub</h2>
            <p className="mt-3 text-white/60">PMariusf</p>
          </a>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">{no ? "Sted" : "Location"}</h2>
            <p className="mt-3 text-white/60">{no ? "Bergen, Norge" : "Bergen, Norway"}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
