"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../components/LanguageProvider";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Webflow",
  "Figma",
  "UI/UX",
];

export default function MinimalPortfolio() {
  const { language, setLanguage } = useLanguage();
  const no = language === "no";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-2xl font-semibold tracking-[-0.04em]">PM</span>
          <span className="hidden text-xs uppercase tracking-[0.28em] text-white/35 sm:inline">Portfolio</span>
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl">
          {(["no", "en"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                language === lang ? "bg-white text-black" : "text-white/40 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-10 px-6 pb-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-10 lg:pb-20">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            {no ? "Frontendutvikler · Bergen" : "Frontend Developer · Bergen"}
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Per Marius
            <span className="block text-white/42">Føyner</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            {no
              ? "Jeg bygger moderne, responsive nettsider og digitale opplevelser der frontend, UI/UX og kreativt design møtes."
              : "I build modern, responsive websites and digital experiences where frontend, UI/UX and creative design come together."}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-white/58 backdrop-blur-xl"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/Projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(255,255,255,0.14)]"
            >
              {no ? "Se prosjekter" : "View projects"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-6 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
            >
              {no ? "Full portfolio" : "Full portfolio"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/35">
            <Link href="/CV" className="transition hover:text-white/75">
              CV
            </Link>
            <Link href="/Contact" className="transition hover:text-white/75">
              {no ? "Kontakt" : "Contact"}
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

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="group relative w-full max-w-[430px]">
            <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-white/[0.09] via-transparent to-violet-400/[0.08] blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.025] shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
              <Image
                src="/p-marius.png"
                alt="Per Marius Føyner"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 430px"
                className="object-contain object-bottom grayscale transition duration-700 group-hover:scale-[1.018] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.025]" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 backdrop-blur-xl">
                Frontend · UI/UX · Creative
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
