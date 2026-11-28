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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-36">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
            {no ? "Kreativ side" : "Creative side"}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {no ? "Hobby & kreativt arbeid" : "Hobby & creative work"}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            {no
              ? "På fritiden lager jeg musikk, tegner, redigerer bilder og video, utforsker KI-kunst og spiller."
              : "In my spare time I make music, draw, edit photos and videos, explore AI art and play games."}
          </p>
        </header>

        <section className="mt-20" aria-labelledby="music-heading">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">{no ? "Musikk" : "Music"}</p>
            <h2 id="music-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {no ? "Sanger jeg har skrevet" : "Songs I’ve written"}
            </h2>
            <p className="mt-3 leading-7 text-white/60">
              {no
                ? "Jeg skriver tekstene selv og velger stemning og musikalsk retning for hver låt."
                : "I write the lyrics myself and choose the mood and musical direction for each track."}
            </p>
          </div>
          <Music />
        </section>

        <section className="mt-28" aria-labelledby="gallery-heading">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">{no ? "Galleri" : "Gallery"}</p>
            <h2 id="gallery-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {no ? "Bilder & visuelt arbeid" : "Images & visual work"}
            </h2>
            <p className="mt-3 leading-7 text-white/60">
              {no
                ? "Tegninger, digital kunst, KI-genererte bilder og designeksperimenter."
                : "Drawings, digital art, AI-generated images and design experiments."}
            </p>
          </div>
          <Projects />
        </section>
      </div>

      <Contact />
    </main>
  );
}
