"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Contact from "../../../../components/Contact";
import { useLanguage } from "../../../../components/LanguageProvider";

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "Accessibility", "Vercel"];

export default function BergenStupeklubbCaseStudy() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
        <Link href="/Projects" className="text-sm font-medium text-white/60 transition hover:text-white">← {no ? "Tilbake til prosjekter" : "Back to projects"}</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{no ? "Case study · Webutvikling · 2026" : "Case study · Web development · 2026"}</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">Bergen Stupeklubb</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">{no ? "En moderne og tilgjengelig nettside som gjør det enklere å finne informasjon om klubben, stupeskole, aktiviteter og påmelding." : "A modern and accessible website designed to make club information, diving school activities and registration easier to find."}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="https://bergen-stupeklubb-r7xd.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">{no ? "Se nettsiden ↗" : "Live website ↗"}</a>
            <a href="https://github.com/PMariusf/bergen-stupeklubb" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-semibold transition hover:bg-white/[0.12]">GitHub ↗</a>
          </div>
        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950 shadow-2xl">
          <Image src="/projects/stupeklubb.png" alt="Bergen Stupeklubb website" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Min rolle" : "My role"}</p><p className="mt-4 text-xl font-semibold">Frontend · UI/UX · {no ? "Tilgjengelighet" : "Accessibility"}</p></div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Prosjekttype" : "Project type"}</p><p className="mt-4 text-xl font-semibold">{no ? "Klubbnettside" : "Club website"}</p></div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Fokus" : "Focus"}</p><p className="mt-4 text-xl font-semibold">Responsive · Accessible · Fast</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">01 · {no ? "Utfordringen" : "The challenge"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "Gjør informasjonen enkel å finne" : "Make information easy to find"}</h2>
          <p className="mt-5 text-base leading-8 text-white/75">{no ? "Målet var å bygge en ryddig offentlig nettside der både nye og eksisterende medlemmer raskt kan forstå hva Bergen Stupeklubb tilbyr og finne frem til relevant informasjon om aktiviteter, kurs og klubben." : "The goal was to build a clear public website where new and existing members can quickly understand what Bergen Stupeklubb offers and find relevant information about activities, courses and the club."}</p>
        </article>

        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">02 · {no ? "Løsningen" : "The solution"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "En moderne, responsiv frontend" : "A modern responsive frontend"}</h2>
          <p className="mt-5 text-base leading-8 text-white/75">{no ? "Jeg bygget løsningen med Next.js, React, TypeScript og Tailwind CSS. Arbeidet fokuserte på tydelig navigasjon, responsive layouter, visuell struktur og en opplevelse som fungerer godt på både mobil og desktop." : "I built the solution with Next.js, React, TypeScript and Tailwind CSS, focusing on clear navigation, responsive layouts, visual hierarchy and an experience that works well across mobile and desktop."}</p>
        </article>

        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">03 · {no ? "Tilgjengelighet" : "Accessibility"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "Bygget for flere brukere" : "Designed for more users"}</h2>
          <p className="mt-5 text-base leading-8 text-white/75">{no ? "Tilgjengelighet var en viktig del av frontend-arbeidet. Struktur, lesbarhet, navigasjon og responsivitet ble behandlet som en del av selve brukeropplevelsen, ikke som et tillegg på slutten." : "Accessibility was treated as part of the frontend experience itself. Structure, readability, navigation and responsiveness were considered throughout the implementation rather than added at the end."}</p>
        </article>

        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">04 · {no ? "Resultatet" : "The result"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "En solid base som kan videreutvikles" : "A strong foundation for future development"}</h2>
          <p className="mt-5 text-base leading-8 text-white/75">{no ? "Resultatet er en moderne klubbside med tydelig innholdsstruktur og en teknisk base som kan utvides videre med blant annet påmelding, sponsorer og annet klubbinnhold." : "The result is a modern club website with clear content structure and a technical foundation that can continue to grow with registration, sponsors and additional club content."}</p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-4xl border border-white/15 bg-gradient-to-br from-cyan-400/[0.08] to-white/[0.03] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Tech stack</p>
          <div className="mt-6 flex flex-wrap gap-3">{tech.map((item) => <span key={item} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/85">{item}</span>)}</div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">
            <div><p className="text-sm text-white/55">{no ? "Neste prosjekt" : "Next project"}</p><p className="mt-1 text-2xl font-bold">House of Mambo</p></div>
            <Link href="/Projects" className="rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 font-semibold transition hover:bg-white/[0.14]">{no ? "Se alle prosjekter →" : "View all projects →"}</Link>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
