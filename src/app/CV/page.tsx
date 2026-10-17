"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import { useLanguage } from "../../../components/LanguageProvider";

const cvFile = "/cv/Per_Marius_Foyner_CV.pdf";
const cvPreviewFile = `${cvFile}?v=20260910`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "Squarespace",
  "Webflow",
  "Supabase",
  "GitHub",
  "Figma",
  "AI Tools",
  "Responsive Design",
  "VS Code",
];

const timeline = [
  {
    title: "Web Development & Digital Solutions",
    titleNo: "Webutvikling & digitale løsninger",
    place: "Varegg Media · 2026–Present",
    placeNo: "Varegg Media · 2026–nå",
    text: "Frontend-focused web work with some backend development.",
    textNo: "Frontend-fokusert webarbeid, kombinert med noe backend-utvikling.",
  },
  {
    title: "Creative Media, Events & Web",
    titleNo: "Kreative medier, arrangement & web",
    place: "Varegg Arena · 2025–Present",
    placeNo: "Varegg Arena · 2025–nå",
    text: "Create visual content, promotional materials, event graphics, websites and digital experiences for sports and community events.",
    textNo: "Lager visuelt innhold, markedsmateriell, arrangementsgrafikk, nettsider og digitale opplevelser for idrett og lokale arrangementer.",
  },
  {
    title: "Web Developer",
    titleNo: "Webutvikler",
    place: "Kodeverket · 2024–Present",
    placeNo: "Kodeverket · 2024–nå",
    text: "Build and improve modern websites and digital solutions, with experience using Webflow, Squarespace and WordPress.",
    textNo: "Bygger og forbedrer moderne nettsider og digitale løsninger, med erfaring fra Webflow, Squarespace og WordPress.",
  },
  {
    title: "Development Internship",
    titleNo: "Utviklerpraksis",
    place: "Gavne · 2024–2025",
    placeNo: "Gavne · 2024–2025",
    text: "Worked with AI tools, Lovable, Supabase, frontend development, backend and modern digital workflows.",
    textNo: "Arbeidet med AI-verktøy, Lovable, Supabase, frontend, backend og moderne digitale arbeidsflyter.",
  },
  {
    title: "Web Development Studies",
    titleNo: "Studier i webutvikling",
    place: "Kodehode · 2022–2024",
    placeNo: "Kodehode · 2022–2024",
    text: "Studied frontend development with a focus on React, Next.js, Tailwind CSS, responsive design and project-based learning.",
    textNo: "Studerte frontendutvikling med fokus på React, Next.js, Tailwind CSS, responsivt design og prosjektbasert læring.",
  },
  {
    title: "Security / Operations",
    titleNo: "Sikkerhet / drift",
    place: "Securitas · 2007–2022",
    placeNo: "Securitas · 2007–2022",
    text: "Experience with responsibility, structure, communication and working with people in active environments. Planned staffing, daily work schedules and routes across assignments.",
    textNo: "Erfaring med ansvar, struktur, kommunikasjon og arbeid med mennesker i aktive miljøer. Planla bemanning, daglige arbeidsplaner og ruter på tvers av oppdrag.",
  },
];

export default function CV() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { language } = useLanguage();
  const no = language === "no";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">CV</p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          {no ? "Erfaring, ferdigheter & kreativ utvikling" : "Experience, skills & creative development"}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          {no
            ? "Frontendutvikler i Bergen. Jeg liker å bygge moderne, responsive og visuelt gjennomførte nettsider der design, funksjonalitet og brukeropplevelse spiller sammen."
            : "Frontend developer based in Bergen, Norway. I enjoy building modern, responsive and visually polished websites where design, functionality and user experience work together."}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href={cvFile} download className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
            {no ? "Last ned CV" : "Download CV"}
          </a>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
          >
            {no ? "Forhåndsvis CV" : "Preview CV"}
          </button>

          <a href="/Contact" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20">
            {no ? "Kontakt meg" : "Contact Me"}
          </a>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.title} className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">{no ? item.placeNo : item.place}</p>
              <h2 className="mt-4 text-3xl font-bold">{no ? item.titleNo : item.title}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{no ? item.textNo : item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold">{no ? "Teknologi" : "Tech Stack"}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold">{no ? "Kreative ferdigheter" : "Creative Skills"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">
              {no
                ? "Jeg liker å kombinere frontendutvikling med kreativt arbeid gjennom bilde- og videoredigering, AI-visualer, musikkproduksjon og digitalt design. Jeg har også erfaring med å bygge og vedlikeholde nettsider i Squarespace, WordPress, HTML, CSS og JavaScript."
                : "I enjoy combining frontend development with creativity through image editing, video editing, AI visuals, music creation and digital design. I also have experience building and maintaining websites using Squarespace, WordPress, HTML, CSS and JavaScript."}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Nåværende mål" : "Current Goal"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "På jakt etter nye frontendmuligheter" : "Looking for frontend opportunities"}</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-white/70">
            {no
              ? "Målet mitt er å utvikle meg videre som frontendutvikler og jobbe med prosjekter der design, tilgjengelighet, interaktivitet og ytelse møtes. Jeg er spesielt interessert i moderne webutvikling, kreativ UI, AI-assisterte arbeidsflyter og digitale produkter med en tydelig visuell identitet."
              : "My goal is to keep growing as a frontend developer and work on projects where design, accessibility, interactivity and performance come together. I am especially interested in modern web development, creative UI, AI-assisted workflows and digital products with a strong visual identity."}
          </p>
        </div>
      </section>

      <div className={`fixed inset-0 z-100 transition ${isPreviewOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setIsPreviewOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity ${isPreviewOpen ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full border-l border-white/10 bg-black/95 shadow-2xl backdrop-blur-2xl transition-transform duration-500 md:w-[72vw] lg:w-[58vw] ${isPreviewOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-4 md:px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">{no ? "Forhåndsvisning" : "Preview"}</p>
              <h2 className="mt-1 text-lg font-bold md:text-2xl">Per Marius Føyner CV</h2>
            </div>

            <button
              onClick={() => setIsPreviewOpen(false)}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              {no ? "Lukk" : "Close"}
            </button>
          </div>

          <div className="h-[calc(100vh-80px)] p-3 md:p-5">
            <iframe src={cvPreviewFile} title="Per Marius Føyner CV preview" className="h-full w-full rounded-2xl border border-white/10 bg-white" />
          </div>
        </aside>
      </div>

      <Contact />
    </main>
  );
}
