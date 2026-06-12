"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Image from "next/image";

const matrixColumns = Array.from({ length: 16 }, (_, index) => index);

const musicVideos = [
  "/media/Hungry Touch.mp4",
  "/media/Halfway up.mp4",
  "/media/final night.mp4",
  "/media/Enter the dragon.mp4",
  "/media/Light breaks through the night.mp4",
];

const projects = [
  {
    title: "PM Portfolio",
    description:
      "A modern portfolio experience combining frontend development, creative design and interactive UI — built with Next.js, React and Tailwind CSS.",
    image: "/projects/music.png",
    tech: ["React", "Next.js", "Tailwind", "VSCode", "Vercel", "GitHub"],
    github: "https://github.com/PMariusf/portfoilio",
    demo: "#",
  },
  {
    title: "Varegg Arena",
    description:
      "Creative design and branding work for Varegg Arena, including sports visuals, event graphics, banners, posters and promotional content for multiple activities such as basketball, badminton, HYROX, fitness and Fjellveidager.",
    image: "/projects/Varegg-Arena/perimeter.png",
    video: "/projects/Varegg-Arena/perimeter.mov",
    tech: [
      "Figma",
      "Branding",
      "Design",
      "AI Visuals",
      "Social Media",
      "Video Editing",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Fjellveidager Design",
    description:
      "Creative branding, posters and event visuals for Fjellveidager, including logo work and promotional graphics.",
    image: "/projects/Varegg-Arena/fjellveidager.png",
    tech: [
      "Figma",
      "Design",
      "Branding",
      "AI Visuals",
      "Frontend",
      "Video Editing",
    ],
    github: "#",
    demo: "#",
  },
  {
      title: "AdO Arena",
      description:
        "Cinematic arena visuals, water, diving and event promotion created for AdO Arena.",
      image: "/projects/ado-arena/ado.png",
      video: "/projects/ADO.mov",
      tech: ["Design", "AI Visuals", "Video Editing", "Event Promo", "Branding"],
      github: "#",
      demo: "#",
},
{
      title: "Åsane Arena",
      description:
       "Sports arena visuals, branding and creative promotional content for Åsane Arena.",
      image: "/projects/asane.png",
      tech: ["Design", "Branding", "AI Visuals", "Sports Media", "Promotion"],
      github: "#",
      demo: "#",
},
  {
    title: "AI Music & Creative Projects",
    description:
      "Creative music production using Suno AI, cinematic sound design, custom lyrics, EDM, Eurodance, soft rock and experimental music creation. Also includes AI visuals, image editing and creative digital concepts.",
    image: "/projects/Varegg-Arena/fjellveidager.png",
    tech: [
      "Suno AI",
      "Music Production",
      "AI",
      "Creative Design",
      "Audio",
    ],
    github: "#",
    demo: "https://suno.com",
  },
];

export default function ProjectsPage() {
  const [currentMusic, setCurrentMusic] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Selected Work
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Frontend, Creative & Technical Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/70">
          A collection of frontend development, creative concepts and technical
          projects showcasing design, interactivity and problem solving.
        </p>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2">
                {/* Media */}
                <div className="relative flex h-80 items-center justify-center overflow-hidden bg-black">
                  {project.title === "PM Portfolio" ? (
                    <div className="absolute inset-0 bg-black">
                   <div className="matrix-rain opacity-80">
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
                        <p className="rounded-full border border-white/20 bg-black/50 px-6 py-3 text-sm font-semibold tracking-[0.35em] text-white backdrop-blur-md">
                          PM PORTFOLIO
                        </p>
                      </div>
                    </div>
                  ) : project.title === "AI Music & Creative Projects" ? (
                    <div className="relative h-full w-full">
                      <video
                        key={musicVideos[currentMusic]}
                        src={musicVideos[currentMusic]}
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                        className="h-full w-full object-contain"
                      />

                      <button
                        onClick={() =>
                          setCurrentMusic((prev) =>
                            prev === 0 ? musicVideos.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-2xl text-white backdrop-blur-md transition hover:bg-black/80"
                      >
                        ‹
                      </button>

                      <button
                        onClick={() =>
                          setCurrentMusic((prev) =>
                            prev === musicVideos.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-2xl text-white backdrop-blur-md transition hover:bg-black/80"
                      >
                        ›
                      </button>

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {musicVideos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentMusic(index)}
                            className={`h-2 w-2 rounded-full transition ${
                              currentMusic === index
                                ? "bg-white"
                                : "bg-white/40"
                            }`}
                            title={`Go to music video ${index + 1}`}
                            aria-label={`Go to music video ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold">{project.title}</h2>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 bg-white/10 px-5 py-3 transition hover:bg-white/20"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}