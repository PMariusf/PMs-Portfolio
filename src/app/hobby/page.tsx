"use client";

import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Projects from "../../../components/Projects";
import Music from "../../../components/Music";
import { useLanguage } from "../../../components/LanguageProvider";

export default function Hobby() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          {no ? "Kreativ side" : "Creative Side"}
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          {no ? "Hobby & kreativt arbeid" : "Hobby & Creative Work"}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          {no
            ? "På fritiden lager jeg musikk, tegner, redigerer bilder og video, utforsker KI-kunst og spiller."
            : "In my spare time I make music, draw, edit photos and videos, explore AI art and play games."}
        </p>

        <section className="mt-12 max-w-2xl" aria-labelledby="featured-song">
          <h2 id="featured-song" className="text-3xl font-bold">Elísa · Out of the Blue</h2>
          <p className="mt-3 leading-7 text-white/75">{no ? "Her ville jeg fange øyeblikket når blikkene møtes på dansegulvet, med korte tekstlinjer og et refreng man kan synge med på." : "I wanted to capture that moment when two people catch each other’s eye on the dance floor, with short lines and a chorus you can sing along to."}</p>
          <audio controls preload="none" aria-labelledby="featured-song" className="mt-5 w-full" src="https://foyner.no/images/music/ayline/Elisra/Out%20of%20the%20Blue.mp3" />
          <a className="mt-4 inline-block underline underline-offset-4" href="https://foyner.no/elisa#music">{no ? "Mer musikk fra Elísa" : "More music from Elísa"}</a>
        </section>

        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            {no ? "Kreativt galleri" : "Creative Gallery"}
          </p>

          <h2 className="mt-4 text-4xl font-bold">{no ? "Bildegalleri" : "Image Showcase"}</h2>

          <p className="mt-4 max-w-2xl text-white/60">
            {no
              ? "En samling kreative visualer, digitale konsepter, AI-generert kunst og designeksperimenter."
              : "A collection of creative visuals, digital concepts, AI generated artwork and design experiments."}
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
            <Projects />
          </div>
        </section>
        <div className="mt-12"><Music /></div>
      </section>

      <Contact />
    </main>
  );
}
