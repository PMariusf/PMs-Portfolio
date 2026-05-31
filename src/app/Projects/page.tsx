"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Image from "next/image";

const musicVideos = [
  "/media/Hungry Touch.mp4",
  "/media/Halfway up.mp4",
  "/media/final night.mp4",
  "/media/Enter the dragon.mp4",
  "/media/Light breaks through the night.mp4",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern frontend portfolio built with Next.js, React and Tailwind CSS, featuring responsive design, animations and a custom music player.",
    image: "/projects/portfolio.png",
    tech: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/PMariusf/portfoilio",
    demo: "#",
  },

  {
    title: "Varegg Arena",
    description:
      "Creative design and branding work for Varegg Arena, including sports visuals, event graphics, banners, posters and promotional content for multiple activities such as basketball, badminton, HYROX, fitness and Fjellveidager.",
    image: "/projects/varegg.png",
    video: "/projects/Varegg-Arena/perimeter.mov",
    tech: [
      "Figma",
      "Branding",
      "Design",
      "AI Visuals",
      "Social Media",
    ],
    github: "#",
    demo: "#",
  },
/*
  {
    title: "HD Footprint Booking System",
    description:
      "A booking and calendar system concept for managing Airbnb-like rental properties with calendar integrations and notifications.",
    image: "/projects/booking.png",
    tech: ["React", "Supabase", "AI"],
    github: "#",
    demo: "#",
  },

  {
    title: "Cabin Booking System",
    description:
      "A rental booking system for cabins and houses including calendar management and notifications.",
    image: "/projects/cabin.png",
    tech: ["Next.js", "Database", "UI/UX"],
    github: "#",
    demo: "#",
  },
   */
  {
    title: "Fjellveidager Design",
    description:
      "Creative branding, posters and event visuals for Fjellveidager, including logo work and promotional graphics.",
    image: "/projects/Varegg-Arena/fjellveidager.png",
    tech: ["Figma", "Design", "Branding"],
    github: "#",
    demo: "#",
  },

  {
    title: "AI Music & Creative Projects",
    description:
      "Creative music production using Suno AI, cinematic sound design, custom lyrics, EDM, Eurodance, soft rock and experimental music creation. Also includes AI visuals, image editing and creative digital concepts.",
    image: "/projects/music.png",
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
          Projects
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Featured Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/70">
          A selection of frontend, creative and technical
          projects I have worked on.
        </p>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2">
                {/* Media */}
                <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-black">
                  {project.title ===
                  "AI Music & Creative Projects" ? (
                    <div className="relative h-full w-full">
                      <video
                        key={musicVideos[currentMusic]}
                        src={musicVideos[currentMusic]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="h-full w-full object-contain"
                      />

                      <button
                        onClick={() =>
                          setCurrentMusic((prev) =>
                            prev === 0
                              ? musicVideos.length - 1
                              : prev - 1
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-2xl text-white backdrop-blur-md transition hover:bg-black/80"
                      >
                        ‹
                      </button>

                      <button
                        onClick={() =>
                          setCurrentMusic((prev) =>
                            prev === musicVideos.length - 1
                              ? 0
                              : prev + 1
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
                            onClick={() =>
                              setCurrentMusic(index)
                            }
                            className={`h-2 w-2 rounded-full transition ${
                              currentMusic === index
                                ? "bg-white"
                                : "bg-white/40"
                            }`}
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
                  <h2 className="text-3xl font-bold">
                    {project.title}
                  </h2>

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