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

        <div className="mt-12">
          <h2 className="text-sm text-white/70">{no ? "E-post" : "Email"}</h2>
          <a href="mailto:marius28@live.no" className="mt-2 inline-block break-all text-3xl font-semibold underline decoration-white/30 underline-offset-8 hover:decoration-white sm:text-5xl">marius28@live.no</a>
          <p className="mt-6 text-white/70">{no ? "Bergen, Norge" : "Bergen, Norway"}</p>
          <a href="https://github.com/PMariusf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block underline underline-offset-4">GitHub · PMariusf</a>
        </div>
      </section>
    </main>
  );
}
