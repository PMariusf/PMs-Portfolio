"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Contact from "../../../../components/Contact";
import { useLanguage } from "../../../../components/LanguageProvider";

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Photography", "Interactive UI", "Music", "Lyrics", "Private Galleries", "Responsive Design", "Vercel"];

export default function FoynerCaseStudy() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
        <Link href="/Projects" className="text-sm font-medium text-white/60 transition hover:text-white">← {no ? "Tilbake til prosjekter" : "Back to projects"}</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">{no ? "Case study · Foto · Artistunivers · 2026" : "Case study · Photography · Artist worlds · 2026"}</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">Foyner.no</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">{no ? "Foyner.no har utviklet seg fra en fotoportfolio til en større kreativ plattform. I samme løsning samler jeg egne fotografier, private gallerier og interaktive artistunivers for Ayline og Elísa med musikk, sangtekster og egne visuelle uttrykk." : "Foyner.no has grown from a photography portfolio into a broader creative platform. The same experience now brings together my photography, private galleries and interactive artist worlds for Ayline and Elísa with music, lyrics and distinct visual identities."}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end"><a href="https://www.foyner.no/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">{no ? "Se nettsiden ↗" : "Live website ↗"}</a><a href="https://github.com/PMariusf/foyner" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-semibold transition hover:bg-white/[0.12]">GitHub ↗</a></div>
        </div>
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950 shadow-2xl"><Image src="/ayline-elisa1.png" alt="Foyner.no artist worlds cover featuring Ayline and Elísa" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" /></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="grid gap-5 md:grid-cols-3"><div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Min rolle" : "My role"}</p><p className="mt-4 text-xl font-semibold">Frontend · UI/UX · {no ? "Fotografi" : "Photography"} · Creative Media</p></div><div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Prosjekttype" : "Project type"}</p><p className="mt-4 text-xl font-semibold">{no ? "Kreativ digital plattform" : "Creative digital platform"}</p></div><div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Fokus" : "Focus"}</p><p className="mt-4 text-xl font-semibold">Photography · Music · Interactive UI</p></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">01 · {no ? "Fotografiet" : "The photography"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Fra kamera til digital opplevelse" : "From camera to digital experience"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Fotografiene på Foyner er mine egne, og fotoopplevelsen er fortsatt en sentral del av prosjektet. Jeg kombinerer fotografering, bildeutvalg og redigering med frontend-utvikling for å bygge et rolig, visuelt og responsivt galleri." : "The photography on Foyner is my own and remains a central part of the project. I combine photography, image selection and editing with frontend development to create a calm, visual and responsive gallery experience."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">02 · {no ? "Artistunivers" : "Artist worlds"}</p><h2 className="mt-4 text-3xl font-bold">Ayline & Elísa</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "PM Demo er nå bygget inn i Foyner.no. Ayline og Elísa har hvert sitt visuelle univers med egne musikkdecks, bilder, video, sangtekster og interaktive elementer. Det gir prosjektet en tydeligere kobling mellom webutvikling, musikk og kreativ design." : "PM Demo is now integrated directly into Foyner.no. Ayline and Elísa each have their own visual world with music decks, imagery, video, lyrics and interactive elements, connecting web development, music and creative design in one platform."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">03 · {no ? "Privat galleri" : "Private gallery"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Offentlig innhold og skjermede minner" : "Public work and protected memories"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Plattformen inkluderer også et privat familiegalleri med innlogging. Det gjør Foyner.no til mer enn en offentlig portfolio og lar samme løsning håndtere både åpne kreative prosjekter og innhold som skal deles mer kontrollert." : "The platform also includes a private family gallery with authentication. This makes Foyner.no more than a public portfolio and allows the same solution to support both open creative work and content that should be shared more privately."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">04 · {no ? "Resultatet" : "The result"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Én plattform for flere kreative uttrykk" : "One platform for multiple creative directions"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Ved å slå sammen fotoportfolioen og PM Demo har Foyner.no blitt et mer komplett personlig prosjekt. Fotografier, artistkonsepter, musikk, interaksjon og private gallerier lever nå i samme kodebase og kan utvikles videre som én samlet digital identitet." : "By merging the photography portfolio and PM Demo, Foyner.no has become a more complete personal project. Photography, artist concepts, music, interaction and private galleries now live in one codebase and can evolve as one cohesive digital identity."}</p></article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">{no ? "Artistunivers" : "Artist worlds"}</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Ayline & Elísa</h2><p className="mt-4 max-w-3xl leading-7 text-white/65">{no ? "To forskjellige musikalske og visuelle identiteter samlet under Foyner.no." : "Two different musical and visual identities brought together under Foyner.no."}</p></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950"><Image src="/Ayline-deck.png" alt="Ayline artist world preview" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6"><p className="text-xl font-semibold">Ayline</p></div></div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950"><Image src="/Elisra-deck.png" alt="Elísa artist world preview" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6"><p className="text-xl font-semibold">Elísa</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="rounded-4xl border border-white/15 bg-gradient-to-br from-amber-400/[0.08] to-white/[0.03] p-8 md:p-12"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Tech & creative stack</p><div className="mt-6 flex flex-wrap gap-3">{tech.map((item) => <span key={item} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/85">{item}</span>)}</div><div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8"><div><p className="text-sm text-white/55">{no ? "Utforsk mer" : "Explore more"}</p><p className="mt-1 text-2xl font-bold">{no ? "Flere prosjekter" : "More projects"}</p></div><Link href="/Projects" className="rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 font-semibold transition hover:bg-white/[0.14]">{no ? "Se alle prosjekter →" : "View all projects →"}</Link></div></div></section>
      <Contact />
    </main>
  );
}
