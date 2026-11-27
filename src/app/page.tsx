"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../components/LanguageProvider";

export default function MinimalPortfolio() {
  const { language, setLanguage } = useLanguage();
  const no = language === "no";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-cyan-400/6 blur-[130px]" />
        <div className="absolute inset-0 motion-safe:animate-[space-drift_38s_ease-in-out_infinite_alternate]">
          {Array.from({ length: 42 }, (_, index) => (
            <i
              key={index}
              className="absolute rounded-full bg-slate-200"
              style={{
                left: `${(index * 61.8 + 3) % 100}%`,
                top: `${(index * index * 1.73 + index * 7 + 2) % 100}%`,
                width: index % 5 === 0 ? 2 : 1,
                height: index % 5 === 0 ? 2 : 1,
                opacity: 0.22 + (index % 4) * 0.09,
              }}
            />
          ))}
        </div>
        <style>{`@keyframes space-drift { to { transform: translate(6px, -12px); } }`}</style>
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-8 lg:px-10">
        <Link href="/" aria-label={no ? "PM – forsiden" : "PM – home"} className="group relative inline-flex">
          <span className="logo-text bg-linear-to-r from-white via-zinc-300 to-white bg-clip-text text-6xl font-semibold tracking-tight text-transparent transition duration-300 group-hover:scale-105">PM</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-white/70 transition duration-500 group-hover:scale-x-100" />
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl">
          {(["no", "en"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                language === lang ? "bg-white text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      <section className="relative z-10 mx-auto grid lg:min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-10 px-6 pb-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-10 lg:pb-20">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Per Marius
            <span className="block text-white/42">Føyner</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            {no
              ? "Jeg er frontendutvikler i Bergen. Jeg bygger nettsider for lokale klubber og lager innhold til skjermene på Varegg Arena."
              : "I’m a frontend developer in Bergen. I build websites for local clubs and create content for the screens at Varegg Arena."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/Projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(255,255,255,0.14)]"
            >
              {no ? "Se prosjekter" : "View projects"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/Contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/4.5 px-6 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
            >
              {no ? "Ta kontakt" : "Get in touch"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
            <Link href="/CV" className="transition hover:text-white/75">
              CV
            </Link>
            <Link href="/portfolio" className="transition hover:text-white/75">
              {no ? "Hele porteføljen" : "Full portfolio"}
            </Link>
            <a
              href="https://github.com/PMariusf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white/75"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="group relative w-full max-w-107.5">
            <div className="absolute -inset-5 rounded-[2.8rem] bg-linear-to-br from-white/[0.09] via-transparent to-violet-400/[0.08] blur-2xl" />
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/2.5 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
              <Image
                src="/p-marius.png"
                alt="Per Marius Føyner"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 430px"
                className="object-contain object-bottom grayscale transition duration-700 group-hover:scale-[1.018] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-white/[0.025]" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
