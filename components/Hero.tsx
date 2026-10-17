"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <section id="pitch" className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-8 text-center sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-300/[0.07] blur-3xl" />

      <div className="group relative w-full max-w-[330px]">
        <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-white/15 via-white/[0.025] to-cyan-300/10 opacity-70 blur-xl transition duration-700 group-hover:opacity-100" />
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 bg-black/45 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <Image
            src="/p-marius.png"
            alt="Marius"
            fill
            sizes="(max-width: 640px) 78vw, 330px"
            className="object-contain object-top grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </div>

      <div className="relative mt-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-xs">
          Bergen, Norway
        </p>
        <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.035em] sm:text-5xl">
          {no ? "Hei, jeg er" : "Hi, I’m"}{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent">Marius</span>
        </h2>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
          {no ? "Åpen for nye prosjekter" : "Open to new projects"}
        </div>
      </div>
    </section>
  );
}
