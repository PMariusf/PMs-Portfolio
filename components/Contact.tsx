"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <footer className="mt-20 border-t border-white/10 bg-white/3 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Marius Portfolio</h3>
          <p className="mt-4 leading-relaxed text-white/60">
            {no
              ? "Frontend-utvikler med interesse for moderne webdesign, kreative digitale opplevelser, AI-verktøy og interaktive brukergrensesnitt."
              : "Frontend developer passionate about modern web design, creative digital experiences, AI tools and interactive UI."}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">{no ? "Kontakt" : "Contact"}</h4>
          <div className="mt-4 flex flex-col items-start gap-3 text-white/60">
            <p>{no ? "Bergen, Norge" : "Bergen, Norway"}</p>
            <a href="mailto:marius28@live.no" className="transition hover:text-white">marius28@live.no</a>

            {showPhone ? (
              <a href="tel:+4792047023" className="transition hover:text-white">+47 92 04 70 23</a>
            ) : (
              <button
                type="button"
                onClick={() => setShowPhone(true)}
                className="group flex items-center gap-2 text-left transition hover:text-white"
                aria-label={no ? "Vis telefonnummer" : "Show phone number"}
              >
                <span aria-hidden="true">+47 •• •• •• 23</span>
                <span className="text-xs font-semibold text-white/45 underline decoration-white/25 underline-offset-4 transition group-hover:text-white/80">
                  {no ? "Vis nummer" : "Show number"}
                </span>
              </button>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">{no ? "Snarveier" : "Quick Links"}</h4>
          <div className="mt-4 flex flex-col gap-3 text-white/60">
            <Link href="/" className="hover:text-white">{no ? "Hjem" : "Home"}</Link>
            <Link href="/About" className="hover:text-white">{no ? "Om meg" : "About"}</Link>
            <Link href="/Projects" className="hover:text-white">{no ? "Prosjekter" : "Projects"}</Link>
            <Link href="/CV" className="hover:text-white">CV</Link>
            <Link href="/Contact" className="hover:text-white">{no ? "Kontakt" : "Contact"}</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">{no ? "Sosiale medier" : "Socials"}</h4>
          <div className="mt-4 flex flex-col gap-3 text-white/60">
            <a href="https://github.com/PMariusf" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="https://instagram.com/p_marius_" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href="https://tiktok.com/@pmfoy" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">TikTok</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Marius Portfolio. {no ? "Bygget med Next.js & Tailwind CSS." : "Built with Next.js & Tailwind CSS."}
      </div>
    </footer>
  );
}
