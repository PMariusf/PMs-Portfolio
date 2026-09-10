import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";
import { Settings } from "lucide-react";

const matrixColumns = Array.from({ length: 16 }, (_, index) => index);

const musicVideos = [
  "/media/Far From Me.mp4",
  "/media/Set the Dark on Fire.mp4",
  "/media/Halfway up.mp4",
  "/media/final night.mp4",
  "/media/Enter the dragon.mp4",
  "/media/Light breaks through the night.mp4",
];

type GlowTone = "green" | "blue" | "amber" | "violet" | "purple" | "red" | "cyan" | "orange" | "neutral";

type HomeProject = {
  title: string;
  image: string;
  text: string;
  year?: string;
  href?: string;
  external?: boolean;
  video?: string;
  underConstruction?: boolean;
  glow: GlowTone;
};

const developmentProjects: HomeProject[] = [
  { title: "Bergen Stupeklubb", image: "/projects/stupeklubb.png", text: "Accessible and responsive sports club website built with Next.js, TypeScript and Tailwind CSS.", year: "2026", href: "https://bergen-stupeklubb-r7xd.vercel.app/", external: true, glow: "cyan" },
  { title: "House of Mambo", image: "/projects/mambo.png", text: "Modern dance website with strong visual identity, responsive design and accessibility improvements.", year: "2026", href: "https://house-of-mambo.vercel.app/", external: true, glow: "purple" },
  { title: "Foyner", image: "/projects/foyner-page.png", text: "Modern photography portfolio built with Next.js, React and Tailwind CSS.", year: "2026", href: "https://www.foyner.no/", external: true, glow: "amber" },
  { title: "Nordhordaland Kampsport", image: "/projects/nordhordaland-kampsport.png", text: "Modern responsive club website built with Next.js, TypeScript and Tailwind CSS.", year: "2026", href: "https://norhordaland-kampsport.vercel.app", external: true, glow: "green" },
  { title: "Solar System Explorer", image: "/projects/Solarsystem.png", text: "Interactive 3D Solar System built with React Three Fiber, Three.js and Next.js.", year: "2026", glow: "blue" },
  { title: "Fjellveidager", image: "/projects/Varegg-Arena/fjellveidager.png", text: "Creative branding, posters and event visuals.", year: "2026", glow: "amber" },
  { title: "Aivento", image: "/projects/Varegg-Arena/Aivento.png", text: "Modern responsive website built with Squarespace.", year: "2025", glow: "violet" },
  { title: "PM-portfolio", image: "/projects/music.png", text: "Coding is Life.", glow: "purple" },
  { title: "Future project", image: "/projects/web-project-two.png", text: "Clean frontend webpage focused on layout, design and user experience.", underConstruction: true, glow: "neutral" },
];

const creativeProjects: HomeProject[] = [
  { title: "Varegg Arena", image: "/projects/Varegg-Arena/varegg.png", video: "/projects/Varegg-Arena/perimeter.mov", text: "Sports visuals, branding and event graphics.", year: "2025–2026", glow: "red" },
  { title: "AdO Arena", image: "/projects/ado-arena/ado.png", video: "/projects/ADO.mov", text: "Cinematic arena visuals, water, diving and event promotion.", year: "2026", glow: "cyan" },
  { title: "Åsane Arena", image: "/projects/Varegg-Arena/Asanearena.png", text: "Sports arena visuals, branding and creative promotional content.", year: "2026", glow: "blue" },
  { title: "Creative Music", image: "/projects/music.png", video: musicVideos[0], text: "AI music production, cinematic sound design and creative media.", year: "2025–2026", glow: "orange" },
];

const glowStyles: Record<GlowTone, string> = {
  green: "hover:border-emerald-300/25 hover:shadow-[0_24px_70px_rgba(16,185,129,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
  blue: "hover:border-blue-300/25 hover:shadow-[0_24px_70px_rgba(59,130,246,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
  amber: "hover:border-amber-300/25 hover:shadow-[0_24px_70px_rgba(245,158,11,0.16),inset_0_1px_0_rgba(255,255,255,0.12)]",
  violet: "hover:border-violet-300/25 hover:shadow-[0_24px_70px_rgba(139,92,246,0.17),inset_0_1px_0_rgba(255,255,255,0.12)]",
  purple: "hover:border-fuchsia-300/25 hover:shadow-[0_24px_70px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]",
  red: "hover:border-red-300/25 hover:shadow-[0_24px_70px_rgba(239,68,68,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
  cyan: "hover:border-cyan-300/25 hover:shadow-[0_24px_70px_rgba(34,211,238,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]",
  orange: "hover:border-orange-300/25 hover:shadow-[0_24px_70px_rgba(249,115,22,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]",
  neutral: "hover:border-white/20 hover:shadow-[0_24px_70px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]",
};

const gradientStyles: Record<GlowTone, string> = {
  green: "from-emerald-400/10 via-transparent to-black/80", blue: "from-blue-400/10 via-transparent to-black/80", amber: "from-amber-400/10 via-transparent to-black/80", violet: "from-violet-400/10 via-transparent to-black/80", purple: "from-fuchsia-400/10 via-transparent to-black/80", red: "from-red-400/10 via-transparent to-black/80", cyan: "from-cyan-400/10 via-transparent to-black/80", orange: "from-orange-400/10 via-transparent to-black/80", neutral: "from-white/5 via-transparent to-black/80",
};

function ProjectCard({ project }: { project: HomeProject }) {
  return (
    <Link href={project.href ?? "/Projects"} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} className={`group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-black/35 shadow-[0_18px_50px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 hover:bg-white/[0.07] ${glowStyles[project.glow]}`}>
      <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-1 ring-inset ring-white/[0.035]" />
      <div className="relative h-44 overflow-hidden bg-black [transform:translateZ(0)]">
        {project.title === "PM-portfolio" ? (
          <div className="absolute inset-0 bg-black">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-35 transition-transform duration-700 will-change-transform group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="matrix-rain opacity-75">{matrixColumns.map((column) => <span key={column} className={`matrix-column matrix-column-${column}`}>{"01 PM NEXT REACT TAILWIND CODE ".repeat(8)}</span>)}</div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center"><h3 className="text-center text-2xl font-bold uppercase tracking-[0.45em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">PM PORTFOLIO</h3></div>
          </div>
        ) : project.video ? (
          <video src={project.video} autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]" />
        ) : (
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" priority={project.title === "Bergen Stupeklubb" || project.title === "House of Mambo"} className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]" />
        )}
        <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${gradientStyles[project.glow]} opacity-75 transition-opacity duration-500 group-hover:opacity-100`} />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-white/[0.035]" />
        <div className="pointer-events-none absolute -left-[70%] top-0 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/[0.13] to-transparent opacity-0 blur-sm transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
        {project.underConstruction && <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-black/60 backdrop-blur-md"><div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-xl"><Settings className="h-10 w-10 animate-[spin_8s_linear_infinite] text-yellow-300" /></div><h2 className="text-center text-xl font-black uppercase tracking-[0.45em] text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.55)]">UNDER CONSTRUCTION</h2></div>}
      </div>
      <div className="relative z-20 -mt-px bg-linear-to-b from-white/[0.055] to-white/[0.018] p-5 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold">{project.title}</h3>{project.year && <span className="shrink-0 pt-1 text-xs font-medium tracking-[0.18em] text-white/40">{project.year}</span>}</div>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-white/70">{project.text}</p>
        <p className="mt-4 text-sm font-bold text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">{project.external ? "Visit live site →" : "View project →"}</p>
      </div>
    </Link>
  );
}

function ProjectGrid({ projects }: { projects: HomeProject[] }) {
  return <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">{projects.map((project, index) => { const mobileDivider = index > 0 ? "border-t border-white/10" : ""; const tabletDivider = `${index >= 2 ? "md:border-t" : "md:border-t-0"} ${index % 2 !== 0 ? "md:border-l" : "md:border-l-0"}`; const desktopDivider = `${index >= 4 ? "lg:border-t" : "lg:border-t-0"} ${index % 4 !== 0 ? "lg:border-l" : "lg:border-l-0"}`; return <div key={project.title} className={`border-white/10 p-4 sm:p-5 ${mobileDivider} ${tabletDivider} ${desktopDivider}`}><ProjectCard project={project} /></div>; })}</div>;
}

function SectionDivider() { return <div className="flex items-center justify-center py-16" aria-hidden="true"><div className="h-px w-1/2 max-w-2xl bg-linear-to-r from-transparent via-white/25 to-transparent" /></div>; }

const freelanceServices = [
  { number: "01", title: "Website Development", text: "Modern, responsive websites built with Next.js, React and Tailwind CSS — from idea to launch." },
  { number: "02", title: "Redesign & Modernization", text: "Give an existing website a cleaner look, stronger mobile experience and more modern user interface." },
  { number: "03", title: "Design & Visual Content", text: "Web design, Figma concepts and visual content that gives your project a clear and consistent identity." },
  { number: "04", title: "Performance & Accessibility", text: "Improve loading speed, Lighthouse scores, responsive behavior and accessibility across devices." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white"><div className="fixed inset-0 bg-black" /><div className="relative z-10"><Navbar />
      <section className="fade-up mx-auto max-w-[95%] pt-28"><div className="overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-2xl backdrop-blur-xl"><div className="grid items-center gap-10 p-6 lg:grid-cols-2 lg:p-14"><div className="relative flex items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-black/40 p-4"><div className="-translate-y-20 scale-100"><Hero /></div></div><div><p className="text-sm uppercase tracking-[0.4em] text-white/50">Frontend Developer</p><h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">Modern Web Design with a Creative Edge</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">I build modern, responsive and visually engaging websites using React, Next.js and Tailwind CSS — with a strong interest in design, AI and creative digital experiences.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/Projects" className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">View Projects</Link><Link href="/About" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20">About Me</Link></div><p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/55">Available for internship / frontend opportunities</p></div></div></div></section>
      <section className="fade-up mx-auto max-w-7xl px-6 pt-20"><div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-xl md:p-10"><div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-sm uppercase tracking-[0.4em] text-white/60">Creative Showcase</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Frontend, Design & Visual Projects</h2><p className="mt-4 max-w-2xl text-white/60">A collection of frontend development, creative visuals, digital art and personal projects that reflect my passion for technology and design.</p></div><Link href="/Projects" className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/70 transition hover:bg-white/20 hover:text-white">View all projects</Link></div><div><div className="mb-8"><p className="text-xs uppercase tracking-[0.38em] text-white/40">Selected work</p><h3 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Development</h3></div><ProjectGrid projects={developmentProjects} /></div><SectionDivider /><div><div className="mb-8"><p className="text-xs uppercase tracking-[0.38em] text-white/40">Design & media</p><h3 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Creative Visual</h3></div><ProjectGrid projects={creativeProjects} /></div></div></section>

      <section className="fade-up mx-auto max-w-7xl px-6 pt-20">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-xl md:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80"><span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />Available for freelance</div>
              <p className="text-xs uppercase tracking-[0.38em] text-white/40">Work with me</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Have a project in mind?</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">I help businesses, clubs and individuals create modern, responsive websites — from design and development to deployment.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/Contact" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">Start a project →</Link><Link href="/Projects" className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 font-semibold text-white/75 transition hover:bg-white/10 hover:text-white">See my work</Link></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {freelanceServices.map((service) => (
                <div key={service.number} className="group rounded-3xl border border-white/10 bg-black/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
                  <div className="flex items-start justify-between gap-4"><h3 className="text-lg font-bold text-white">{service.title}</h3><span className="text-xs font-semibold tracking-[0.2em] text-white/25">{service.number}</span></div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/35"><span>Discuss</span><span className="text-white/15">→</span><span>Design</span><span className="text-white/15">→</span><span>Develop</span><span className="text-white/15">→</span><span>Launch</span></div>
        </div>
      </section>

      <section className="fade-up mx-auto max-w-7xl px-6 pt-20"><div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-xl"><div className="scale-95"><Interests /></div></div></section><Contact /></div></main>
  );
}
