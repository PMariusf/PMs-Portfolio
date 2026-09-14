"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Contact from "../../../../components/Contact";
import { useLanguage } from "../../../../components/LanguageProvider";

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Photography", "Photo Editing", "Responsive Design", "Vercel"];

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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">{no ? "Case study · Fotoportfolio · 2026" : "Case study · Photography portfolio · 2026"}</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">Foyner</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">{no ? "En moderne fotoportfolio der jeg både har tatt fotografiene og bygget den digitale opplevelsen rundt dem — fra bildeutvalg og visuell presentasjon til responsiv frontend." : "A modern photography portfolio where I created both the photography and the digital experience around it — from image selection and visual presentation to the responsive frontend."}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="https://www.foyner.no/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">{no ? "Se nettsiden ↗" : "Live website ↗"}</a>
            <a href="https://github.com/PMariusf/foyner" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-semibold transition hover:bg-white/[0.12]">GitHub ↗</a>
          </div>
        </div>
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-4xl border border-white/15 bg-zinc-950 shadow-2xl"><Image src="/projects/foyner-page.png" alt="Foyner photography portfolio" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" /></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Min rolle" : "My role"}</p><p className="mt-4 text-xl font-semibold">Frontend · UI/UX · {no ? "Fotografi" : "Photography"}</p></div>
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Prosjekttype" : "Project type"}</p><p className="mt-4 text-xl font-semibold">{no ? "Foto & portfolio" : "Photography & portfolio"}</p></div>
        <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs uppercase tracking-[0.28em] text-white/55">{no ? "Fokus" : "Focus"}</p><p className="mt-4 text-xl font-semibold">Photography · Responsive · UX</p></div>
      </div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">01 · {no ? "Fotografiet" : "The photography"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Fra kamera til ferdig portfolio" : "From camera to finished portfolio"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Fotografiene på Foyner er mine egne. Det betyr at prosjektet viser hele den kreative prosessen min: å ta bildene, velge ut materialet, arbeide med den visuelle presentasjonen og til slutt bygge nettsiden som bildene vises på." : "The photographs featured on Foyner are my own. This means the project shows my full creative process: taking the photos, selecting the material, shaping the visual presentation and finally building the website where the work is displayed."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">02 · {no ? "Løsningen" : "The solution"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Et rolig og bildeorientert grensesnitt" : "A calm, image-led interface"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Jeg bygget løsningen med Next.js, React, TypeScript og Tailwind CSS. Layout, typografi og mellomrom er holdt bevisst enkle slik at mine egne fotografier får mest mulig plass og den visuelle historien blir tydelig." : "I built the solution with Next.js, React, TypeScript and Tailwind CSS. Layout, typography and spacing are deliberately restrained so my own photography has room to carry the visual story."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">03 · {no ? "Galleri & opplevelse" : "Gallery & experience"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Fra offentlig portfolio til private bilder" : "From public portfolio to private galleries"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Prosjektet inkluderer både den offentlige bildeopplevelsen og en passordside for private gallerier. Det gjør løsningen mer enn en statisk presentasjon og gir et grunnlag for å dele utvalgte bilder på en mer kontrollert måte." : "The project includes both the public photography experience and a password page for private galleries. This makes the solution more than a static showcase and provides a foundation for sharing selected imagery in a more controlled way."}</p></article>
        <article className="rounded-4xl border border-white/15 bg-white/[0.045] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/70">04 · {no ? "Resultatet" : "The result"}</p><h2 className="mt-4 text-3xl font-bold">{no ? "Fotografi og frontend i samme prosjekt" : "Photography and frontend in one project"}</h2><p className="mt-5 text-base leading-8 text-white/75">{no ? "Resultatet er et prosjekt som viser mer enn frontend-utvikling alene. Foyner kombinerer fotografi, bildeutvalg, visuelt design og webutvikling i én samlet portfolioopplevelse som jeg kan videreutvikle med nye gallerier og bilder." : "The result is a project that demonstrates more than frontend development alone. Foyner combines photography, image selection, visual design and web development in one portfolio experience that can continue to grow with new galleries and images."}</p></article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14"><div className="rounded-4xl border border-white/15 bg-gradient-to-br from-amber-400/[0.08] to-white/[0.03] p-8 md:p-12"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Tech & creative stack</p><div className="mt-6 flex flex-wrap gap-3">{tech.map((item) => <span key={item} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/85">{item}</span>)}</div><div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8"><div><p className="text-sm text-white/55">{no ? "Utforsk mer" : "Explore more"}</p><p className="mt-1 text-2xl font-bold">{no ? "Flere prosjekter" : "More projects"}</p></div><Link href="/Projects" className="rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 font-semibold transition hover:bg-white/[0.14]">{no ? "Se alle prosjekter →" : "View all projects →"}</Link></div></div></section>
      <Contact />
    </main>
  );
}
