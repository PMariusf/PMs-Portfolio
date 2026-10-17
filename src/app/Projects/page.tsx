"use client";

import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import { useLanguage } from "../../../components/LanguageProvider";

const matrixColumns = Array.from({ length: 16 }, (_, index) => index);

type ProjectStatus = "live" | "case-study" | "webflow" | "coming-soon" | "preview";
type Project = {
  title: string;
  description: string;
  descriptionNo: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  year?: string;
  video?: string;
  underConstruction?: boolean;
  caseStudy?: string;
  caseTone?: "cyan" | "purple" | "amber" | "red";
  status?: ProjectStatus[];
  demoLabel?: "live" | "current" | "preview";
};

const developmentProjects: Project[] = [
  { title: "Bergen Stupeklubb", year: "2026", description: "A modern, accessible and responsive website for Bergen Stupeklubb, designed to help visitors explore diving activities, courses, club information and registration.", descriptionNo: "En moderne, tilgjengelig og responsiv nettside for Bergen Stupeklubb, laget for å gjøre det enkelt å utforske stuping, kurs, klubbinformasjon og påmelding.", image: "/projects/stupeklubb.png", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "Accessibility", "Vercel"], github: "https://github.com/PMariusf/bergen-stupeklubb", demo: "#", caseStudy: "/Projects/bergen-stupeklubb", caseTone: "cyan", status: ["case-study"] },
  { title: "House of Mambo", year: "2026", description: "A modern and visually engaging dance website for House of Mambo, combining responsive frontend development, strong visual identity and accessibility-focused improvements.", descriptionNo: "En moderne og visuelt engasjerende dansenettside for House of Mambo, med responsiv frontend-utvikling, sterk visuell identitet og fokus på tilgjengelighet.", image: "/projects/mambo.png", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "Accessibility", "Vercel"], github: "https://github.com/PMariusf/HouseOfMambo", demo: "#", caseStudy: "/Projects/house-of-mambo", caseTone: "purple", status: ["case-study"] },
  { title: "Varegg Arena – Webflow Upgrade", year: "2026", description: "A Webflow website upgrade for Varegg Arena focused on clearer navigation, stronger visual hierarchy, practical information and a more polished responsive experience.", descriptionNo: "En oppgradering av Varegg Arena-nettsiden i Webflow, med fokus på tydeligere navigasjon, bedre visuelt hierarki, praktisk informasjon og en mer gjennomført responsiv opplevelse.", image: "/projects/Varegg-Arena/Varegg.png", tech: ["Webflow", "UI/UX", "Responsive Design", "Web Design", "Content Structure"], github: "#", demo: "https://www.vareggarena.no/", status: ["live", "webflow"] },
  { title: "Varegg Fotball", year: "2026", description: "A new Varegg Fotball website is coming soon. It is currently being built in Webflow with improved navigation, clearer club information and a modern responsive structure designed around players, parents and club activity.", descriptionNo: "Ny nettside for Varegg Fotball kommer snart. Den bygges nå i Webflow med forbedret navigasjon, tydelig klubbinformasjon og en moderne responsiv struktur tilpasset spillere, foreldre og klubbaktivitet.", image: "/projects/Varegg-Arena/Vareggfotball.png", tech: ["Webflow", "UI/UX", "Responsive Design", "Web Design", "Content Structure"], github: "#", demo: "https://vareggfotball.no/", demoLabel: "current", status: ["coming-soon", "webflow"] },
  { title: "Foyner.no", year: "2026", description: "A personal creative platform combining photography, private galleries, songwriting and interactive artist worlds for Ayline and Elísa, with music, lyrics and responsive UI.", descriptionNo: "En personlig kreativ plattform som samler fotografi, private gallerier, låtskriving og interaktive artistunivers for Ayline og Elísa, med musikk, sangtekster og responsivt grensesnitt.", image: "/ayline-elisa1.png", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Photography", "Songwriting", "Creative Direction", "Character Design", "Interactive UI", "Music", "Responsive Design", "Vercel"], github: "https://github.com/PMariusf/foyner", demo: "https://www.foyner.no/", caseStudy: "/Projects/foyner", caseTone: "amber", status: ["live", "case-study"] },
  { title: "Nordhordaland Kampsport", year: "2026", description: "A modern and responsive website for Nordhordaland Kampsport, designed to make it easy for visitors to explore the club, view martial arts activities, find training schedules and access membership information.", descriptionNo: "En moderne og responsiv klubbside bygget med Next.js, TypeScript og Tailwind CSS, laget for enkel tilgang til informasjon om klubben, kampsporttilbud, treningstider og medlemskap.", image: "/projects/nordhordaland-kampsport.png", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Vercel", "Visual Image Creation"], github: "https://github.com/PMariusf/norhordaland-kampsport", demo: "#" },
  { title: "Solar System Explorer", year: "2026", description: "An immersive 3D Solar System experience built with Next.js, React Three Fiber and Three.js. Explore the planets through interactive scenes, realistic animations and educational content while showcasing modern frontend technologies.", descriptionNo: "En interaktiv 3D-opplevelse av solsystemet bygget med Next.js, React Three Fiber og Three.js. Utforsk planetene gjennom interaktive scener, realistiske animasjoner og lærerikt innhold.", image: "/projects/Solarsystem.png", tech: ["Next.js", "React", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "GLTF Models", "Vercel"], github: "https://github.com/PMariusf/solsystem", demo: "#" },
  { title: "Stoltzen", year: "2026", description: "Rebuild concept for Stoltzen combining a modern frontend redesign with accessibility, performance and supporting backend/data functionality for structured race and archive data.", descriptionNo: "Rebuild-konsept for Stoltzen som kombinerer moderne frontend-redesign med tilgjengelighet, ytelse og backend-/datafunksjonalitet for strukturert løps- og arkivdata.", image: "/projects/Varegg-Arena/stoltzen-lys.png", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Backend", "Data Handling", "UI/UX", "Accessibility", "Responsive Design", "Performance"], github: "https://github.com/PMariusf/stoltzen", demo: "https://stoltzen.vercel.app/", demoLabel: "preview", status: ["preview"] },
  { title: "Fjellveidager Design", year: "2026", description: "Creative branding, posters and event visuals for Fjellveidager, including logo work and promotional graphics.", descriptionNo: "Kreativ profilering, plakater og visuelt innhold for Fjellveidager, inkludert logoarbeid og grafikk til markedsføring.", image: "/projects/Varegg-Arena/fjellveidager.png", tech: ["Figma", "Design", "Branding", "React", "Next.js", "Tailwind", "VSCode", "Vercel", "GitHub", "Video Editing"], github: "https://github.com/PMariusf/fjellveidager-no", demo: "#" },
  { title: "Aivento", year: "2025", description: "Modern responsive website built with Squarespace, focused on clean design, layout and visual communication.", descriptionNo: "Moderne responsiv nettside bygget med Squarespace, med fokus på rent design, layout og visuell kommunikasjon.", image: "/projects/Varegg-Arena/Aivento.png", tech: ["Figma", "Design", "Squarespace", "VSCode", "Vercel", "GitHub", "Video Editing"], github: "#", demo: "https://www.aivento.no/", demoLabel: "live", status: ["live"] },
  { title: "PM Portfolio", description: "A modern portfolio experience combining frontend development, creative design and interactive UI — built with Next.js, React and Tailwind CSS.", descriptionNo: "En moderne portfolio som kombinerer frontend-utvikling, kreativt design og interaktivt brukergrensesnitt — bygget med Next.js, React og Tailwind CSS.", image: "/p-marius.png", tech: ["React", "Next.js", "Tailwind", "VSCode", "Vercel", "GitHub"], github: "https://github.com/PMariusf/PMs-Portfolio", demo: "#" },
  { title: "Sykkeldeler", description: "Bicycle-parts web concept with a responsive Next.js frontend, Supabase backend and CMS for managing products and content.", descriptionNo: "Nettkonsept for sykkeldeler med responsiv Next.js-frontend, Supabase-backend og CMS for administrasjon av produkter og innhold.", image: "/sykkeldeler.png", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "CMS", "Backend", "UI/UX", "Responsive Design"], github: "#", demo: "#", underConstruction: true },
];

const creativeProjects: Project[] = [
  { title: "Varegg Arena", year: "2025–2026", description: "Creative design and branding work for Varegg Arena, including sports visuals, event graphics, banners, posters and promotional content for multiple activities such as basketball, badminton, HYROX, fitness and Fjellveidager.", descriptionNo: "Kreativt design- og profileringsarbeid for Varegg Arena, inkludert sportsvisualer, arrangementsgrafikk, bannere, plakater og markedsmateriell for blant annet basketball, badminton, HYROX, fitness og Fjellveidager.", image: "/projects/Varegg-Arena/fjellveidager.png", video: "/projects/Varegg-Arena/Varegg-Arena%20Sandvegg.mp4", tech: ["Figma", "Branding", "Design", "AI Visuals", "Social Media", "Video Editing"], github: "#", demo: "#", caseStudy: "/Projects/varegg-arena", caseTone: "red", status: ["case-study"] },
  { title: "AdO Arena", year: "2026", description: "Cinematic arena visuals, water, diving and event promotion created for AdO Arena.", descriptionNo: "Cinematiske arenavisualer, vann, stuping og arrangementsprofilering laget for AdO Arena.", image: "/projects/ado-arena/ado.png", video: "/projects/ADO.mov", tech: ["Design", "AI Visuals", "Video Editing", "Event Promo", "Branding"], github: "#", demo: "#" },
  { title: "Åsane Arena", year: "2026", description: "Sports arena visuals, branding and creative promotional content for Åsane Arena.", descriptionNo: "Sportsvisualer, profilering og kreativt markedsmateriell for Åsane Arena.", image: "/projects/Varegg-Arena/Asanearena.png", tech: ["Design", "Branding", "AI Visuals", "Sports Media", "Promotion"], github: "#", demo: "#" },
  { title: "Music & Artist Worlds", year: "2025–2026", description: "Songwriting, musical direction, character design and visual artist worlds for Ayline and Elísa, presented through Foyner.no.", descriptionNo: "Låtskriving, musikalsk retning, karakterdesign og visuelle artistunivers for Ayline og Elísa, presentert gjennom Foyner.no.", image: "/ayline-elisa1.png", tech: ["Songwriting", "Music Direction", "Character Design", "Storytelling", "Creative Design", "Artist Worlds"], github: "#", demo: "https://www.foyner.no/artists", status: ["live"] },
];

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-emerald-100 bg-emerald-950/90 text-emerald-50 shadow-[0_2px_14px_rgba(0,0,0,0.45)]",
  "case-study": "border-cyan-300/30 bg-cyan-400/15 text-cyan-100",
  webflow: "border-blue-300/30 bg-blue-400/15 text-blue-100",
  "coming-soon": "border-amber-300/30 bg-amber-400/15 text-amber-100",
  preview: "border-violet-200/40 bg-violet-950/85 text-violet-50 shadow-[0_2px_14px_rgba(0,0,0,0.4)]",
};

function statusLabel(status: ProjectStatus, no: boolean) {
  if (status === "case-study") return "CASE STUDY";
  if (status === "webflow") return "WEBFLOW";
  if (status === "coming-soon") return no ? "KOMMER SNART" : "COMING SOON";
  if (status === "preview") return "PREVIEW";
  return "LIVE";
}

export default function ProjectsPage() {
  const { language } = useLanguage();
  const no = language === "no";
  const caseToneClass = (tone?: Project["caseTone"]) => tone === "purple" ? "bg-purple-300" : tone === "amber" ? "bg-amber-300" : tone === "red" ? "bg-red-300" : "bg-cyan-300";

  const renderProject = (project: Project) => {
    const demoText = project.demoLabel === "current"
      ? (no ? "Nåværende side" : "Current site")
      : project.demoLabel === "preview"
        ? "Preview"
        : (no ? "Live side" : "Live site");

    return (
      <div key={project.title} className="group overflow-hidden rounded-4xl border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]">
        <div className="grid md:grid-cols-2">
          <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black sm:h-80">
            {project.underConstruction ? (
              <div className="absolute inset-0"><Image src={project.image} alt={project.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-55 transition-transform duration-700 group-hover:scale-[1.02]"/><div className="absolute inset-0 bg-black/55"/><div className="absolute inset-0 flex flex-col items-center justify-center gap-5"><Settings className="h-14 w-14 animate-[spin_8s_linear_infinite] text-yellow-300"/><h3 className="text-center text-lg font-black uppercase tracking-[0.32em] text-yellow-300 sm:text-xl">{no ? "UNDER UTVIKLING" : "UNDER CONSTRUCTION"}</h3></div></div>
            ) : project.title === "PM Portfolio" ? (
              <div className="absolute inset-0 bg-black"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-25"/><div className="matrix-rain opacity-80">{matrixColumns.map((column) => <span key={column} className={`matrix-column matrix-column-${column}`}>{"01 PM NEXT REACT TAILWIND CODE ".repeat(8)}</span>)}</div><div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40"/><div className="absolute inset-0 flex items-center justify-center"><h3 className="text-center text-3xl font-bold uppercase tracking-[0.45em]">PM PORTFOLIO</h3></div></div>
            ) : project.title === "Stoltzen" ? (
              <div className="relative h-full w-full"><Image src="/projects/Varegg-Arena/stoltzen-lys.png" alt="Stoltzen website light mode" fill sizes="(max-width: 768px) 100vw, 50vw" className="stoltzen-light object-cover"/><Image src="/projects/Varegg-Arena/stoltzen-mork.png" alt="Stoltzen website dark mode" fill sizes="(max-width: 768px) 100vw, 50vw" className="stoltzen-dark object-cover"/></div>
            ) : project.video ? (
              <video src={project.video} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"/>
            ) : (
              <Image src={project.image} alt={project.title} fill loading={project.title === "Bergen Stupeklubb" || project.title === "Åsane Arena" ? "eager" : "lazy"} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"/>
            )}

            {project.status?.length ? <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">{project.status.map((status) => <span key={status} className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md ${statusStyles[status]}`}>{statusLabel(status, no)}</span>)}</div> : null}
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5"><h2 className="text-2xl font-bold sm:text-3xl">{project.title}</h2>{project.year && <span className="shrink-0 pt-1 text-xs font-medium tracking-[0.18em] text-white/40 sm:pt-2 sm:text-sm sm:tracking-[0.2em]">{project.year}</span>}</div>
            <p className="mt-4 leading-relaxed text-white/65">{no ? project.descriptionNo : project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/70">{tech}</span>)}</div>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.caseStudy && <Link href={project.caseStudy} className={`rounded-full px-5 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${caseToneClass(project.caseTone)}`}>{no ? "Se case study" : "View case study"}</Link>}
              {project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/[0.07] px-5 py-3 transition hover:bg-white/[0.12]">GitHub</a>}
              {project.demo !== "#" && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-black transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]">{demoText}</a>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar/>
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-6 sm:py-32">
        <p className="text-xs uppercase tracking-[0.32em] text-white/50 sm:text-sm sm:tracking-[0.4em]">{no ? "Utvalgt arbeid" : "Selected Work"}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl">{no ? "Frontend, kreative & tekniske prosjekter" : "Frontend, Creative & Technical Projects"}</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">{no ? "En samling frontend-utvikling, kreative konsepter og tekniske prosjekter som viser design, interaktivitet og problemløsning." : "A collection of frontend development, creative concepts and technical projects showcasing design, interactivity and problem solving."}</p>

        <div className="mt-14">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.32em] text-white/35">{no ? "Nettsider & frontend" : "Websites & frontend"}</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">{no ? "Utvikling" : "Development"}</h2></div></div>
          <div className="grid gap-6 sm:gap-8">{developmentProjects.map(renderProject)}</div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-14">
          <div className="mb-8"><p className="text-xs uppercase tracking-[0.32em] text-white/35">Design & media</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">{no ? "Kreativt visuelt" : "Creative Visual"}</h2></div>
          <div className="grid gap-6 sm:gap-8">{creativeProjects.map(renderProject)}</div>
        </div>
      </section>
      <Contact/>
    </main>
  );
}
