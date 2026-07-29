import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";
import { Settings } from "lucide-react";

const matrixColumns = Array.from({ length: 16 }, (_, index) => index);

const musicVideos = [
  "/media/Set the Dark on Fire.mp4",
  "/media/Halfway up.mp4",
  "/media/final night.mp4",
  "/media/Enter the dragon.mp4",
  "/media/Light breaks through the night.mp4",
];

const developmentProjects = [
  {
    title: "Nordhordaland Kampsport",
    image: "/projects/nordhordaland-kampsport.png",
    text: "Modern responsive club website built with Next.js, TypeScript and Tailwind CSS.",
    href: "https://norhordaland-kampsport.vercel.app",
    external: true,
  },
  {
    title: "Solar System Explorer",
    image: "/projects/Solarsystem.png",
    text: "Interactive 3D Solar System built with React Three Fiber, Three.js and Next.js.",
  },
  {
    title: "Fjellveidager",
    image: "/projects/Varegg-Arena/fjellveidager.png",
    text: "Creative branding, posters and event visuals.",
  },
  {
    title: "Aivento",
    image: "/projects/Varegg-Arena/Aivento.png",
    text: "Modern responsive website built with Squarespace.",
  },
  {
    title: "PM-portfolio",
    image: "/projects/music.png",
    text: "Coding is Life.",
  },
  {
    title: "Future project",
    image: "/projects/web-project-two.png",
    text: "Clean frontend webpage focused on layout, design and user experience.",
    underConstruction: true,
  },
];

const creativeProjects = [
  {
    title: "Varegg Arena",
    image: "/projects/Varegg-Arena/varegg.png",
    video: "/projects/Varegg-Arena/perimeter.mov",
    text: "Sports visuals, branding and event graphics.",
  },
  {
    title: "AdO Arena",
    image: "/projects/ado-arena/ado.png",
    video: "/projects/ADO.mov",
    text: "Cinematic arena visuals, water, diving and event promotion.",
  },
  {
    title: "Åsane Arena",
    image: "/projects/Varegg-Arena/Asanearena.png",
    text: "Sports arena visuals, branding and creative promotional content.",
  },
  {
    title: "Creative Music",
    image: "/projects/music.png",
    video: musicVideos[0],
    text: "AI music production, cinematic sound design and creative media.",
  },
];

type HomeProject = {
  title: string;
  image: string;
  text: string;
  href?: string;
  external?: boolean;
  video?: string;
  underConstruction?: boolean;
};

function ProjectCard({ project }: { project: HomeProject }) {
  return (
    <Link
      href={project.href ?? "/Projects"}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
    >
      <div className="relative h-44 overflow-hidden bg-black">
        {project.title === "PM-portfolio" ? (
          <div className="absolute inset-0 bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-35 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="matrix-rain opacity-75">
              {matrixColumns.map((column) => (
                <span
                  key={column}
                  className={`matrix-column matrix-column-${column}`}
                >
                  {"01 PM NEXT REACT TAILWIND CODE ".repeat(8)}
                </span>
              ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-center text-2xl font-bold uppercase tracking-[0.45em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                PM PORTFOLIO
              </h3>
            </div>
          </div>
        ) : project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={project.title === "Nordhordaland Kampsport"}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        {project.underConstruction && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-black/60 backdrop-blur-md">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <Settings className="h-10 w-10 animate-[spin_8s_linear_infinite] text-yellow-300" />
            </div>
            <h2 className="text-center text-xl font-black uppercase tracking-[0.45em] text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.55)]">
              UNDER CONSTRUCTION
            </h2>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-white/70">
          {project.text}
        </p>
        <p className="mt-4 text-sm font-bold text-white/80">
          {project.external ? "Visit live site →" : "View project →"}
        </p>
      </div>
    </Link>
  );
}

function ProjectGrid({ projects }: { projects: HomeProject[] }) {
  return (
    <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, index) => {
        const mobileDivider = index > 0 ? "border-t border-white/10" : "";
        const tabletDivider = `${index >= 2 ? "md:border-t" : "md:border-t-0"} ${
          index % 2 !== 0 ? "md:border-l" : "md:border-l-0"
        }`;
        const desktopDivider = `${index >= 4 ? "lg:border-t" : "lg:border-t-0"} ${
          index % 4 !== 0 ? "lg:border-l" : "lg:border-l-0"
        }`;

        return (
          <div
            key={project.title}
            className={`border-white/10 p-4 sm:p-5 ${mobileDivider} ${tabletDivider} ${desktopDivider}`}
          >
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16" aria-hidden="true">
      <div className="h-px w-1/2 max-w-2xl bg-linear-to-r from-transparent via-white/25 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-black" />

      <div className="relative z-10">
        <Navbar />

        <section className="fade-up mx-auto max-w-[95%] pt-28">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-2xl backdrop-blur-xl">
            <div className="grid items-center gap-10 p-6 lg:grid-cols-2 lg:p-14">
              <div className="relative flex items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-black/40 p-4">
                <div className="-translate-y-20 scale-100">
                  <Hero />
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                  Frontend Developer
                </p>
                <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                  Modern Web Design with a Creative Edge
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                  I build modern, responsive and visually engaging websites using
                  React, Next.js and Tailwind CSS — with a strong interest in
                  design, AI and creative digital experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/Projects"
                    className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/About"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
                  >
                    About Me
                  </Link>
                </div>

                <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/55">
                  Available for internship / frontend opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto max-w-7xl px-6 pt-20">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                  Creative Showcase
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  Frontend, Design & Visual Projects
                </h2>
                <p className="mt-4 max-w-2xl text-white/60">
                  A collection of frontend development, creative visuals, digital
                  art and personal projects that reflect my passion for technology
                  and design.
                </p>
              </div>

              <Link
                href="/Projects"
                className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/70 transition hover:bg-white/20 hover:text-white"
              >
                View all projects
              </Link>
            </div>

            <div>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.38em] text-white/40">
                  Selected work
                </p>
                <h3 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                  Development
                </h3>
              </div>

              <ProjectGrid projects={developmentProjects} />
            </div>

            <SectionDivider />

            <div>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.38em] text-white/40">
                  Design & media
                </p>
                <h3 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                  Creative Visual
                </h3>
              </div>

              <ProjectGrid projects={creativeProjects} />
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto max-w-7xl px-6 pt-20">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-xl">
            <div className="scale-95">
              <Interests />
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </main>
  );
}
