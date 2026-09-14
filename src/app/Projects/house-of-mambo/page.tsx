"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Contact from "../../../../components/Contact";
import { useLanguage } from "../../../../components/LanguageProvider";

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "Accessibility", "Vercel"];

export default function HouseOfMamboCaseStudy() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
        <Link href="/Projects" className="text-sm font-medium text-white/60 transition hover:text-white">← {no ? "Tilbake til prosjekter" : "Back to projects"}</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-300/80">{no ? "Case study · Webutvikling · 2026" : "Case study · Web development · 2026"}</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">House of Mambo</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">{no ? "En moderne dansenettside der sterk visuell identitet møter responsiv frontend, tydelig innholdsstruktur og forbedret tilgjengelighet." : "A modern dance website where a strong visual identity meets responsive frontend development, clear content structure and improved accessibility."}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end"><a href="https://house-of-mambo.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">{no ? "Se nettsiden ↗" : "Live website ↗"}</a></div>
        </div>
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950 shadow-2xl">
          <Image src="/projects/mambo.png" alt="House of Mambo website" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Min rolle" : "My role"}</p><p className="mt-4 text-xl font-semibold">Frontend · UI/UX · Accessibility</p></div>
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Prosjekttype" : "Project type"}</p><p className="mt-4 text-xl font-semibold">{no ? "Dans & community" : "Dance & community"}</p></div>
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Fokus" : "Focus"}</p><p className="mt-4 text-xl font-semibold">Brand · Responsive · Accessible</p></div>
      </div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300/70">01 · {no ? "Utfordringen" : "The challenge"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Beholde personligheten, forbedre opplevelsen" : "Keep the personality, improve the experience"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "House of Mambo har en tydelig identitet og et sosialt uttrykk. Oppgaven var å videreutvikle nettsiden uten å miste denne personligheten, samtidig som struktur, lesbarhet, mobilopplevelse og tilgjengelighet ble bedre." : "House of Mambo has a distinct identity and social character. The task was to develop the website without losing that personality while improving structure, readability, mobile usability and accessibility."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300/70">02 · {no ? "Design & frontend" : "Design & frontend"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Et mer helhetlig visuelt uttrykk" : "A more cohesive visual experience"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Jeg jobbet med navbar, logo, typografi, seksjoner, bilder og responsive layouter for å gi siden en tydeligere visuell rytme. Kursregistrering ble flyttet til en egen side, og innholdet ble strukturert slik at de ulike danseområdene oppleves mer konsistente." : "I worked on the navbar, logo, typography, sections, imagery and responsive layouts to create a clearer visual rhythm. Course registration was moved to its own page and the different dance areas were structured more consistently."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300/70">03 · Accessibility</p><h2 className="mt-4 text-3xl font-bold">{no ? "Mer enn bare visuell design" : "More than visual design"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Arbeidet inkluderte bedre kontrast, tydelig tastaturfokus, skip-link, forbedringer i mobilmenyen og mer lesbar tekst. Målet var at designet skulle være visuelt sterkt uten at det gikk på bekostning av brukervennlighet." : "The work included stronger contrast, clear keyboard focus states, a skip link, mobile-menu improvements and more readable text. The goal was to keep the design visually strong without sacrificing usability."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300/70">04 · {no ? "Resultatet" : "The result"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "En tydeligere og mer tilgjengelig nettside" : "A clearer and more accessible website"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Resultatet er en mer gjennomført frontend som beholder House of Mambos uttrykk, men gjør siden enklere å navigere, lese og bruke på tvers av skjermstørrelser og ulike måter å navigere på." : "The result is a more polished frontend that keeps the House of Mambo identity while making the site easier to navigate, read and use across screen sizes and different navigation methods."}</p></article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="rounded-4xl border border-white/15 bg-gradient-to-br from-purple-400/[0.09] to-white/[0.03] p-8 md:p-12"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Tech stack</p><div className="mt-6 flex flex-wrap gap-3">{tech.map((item) => <span key={item} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/85">{item}</span>)}</div><div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8"><div><p className="text-sm text-white/55">{no ? "Neste prosjekt" : "Next project"}</p><p className="mt-1 text-2xl font-bold">Foyner</p></div><Link href="/Projects" className="rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 font-semibold transition hover:bg-white/[0.14]">{no ? "Se alle prosjekter →" : "View all projects →"}</Link></div></div></section>
      <Contact />
    </main>
  );
}
