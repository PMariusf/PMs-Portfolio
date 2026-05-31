import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Image from "next/image";

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
    demo: "https://fjellveidager-no-two.vercel.app",
  },

  {
    title: "AI Music & Creative Projects",
    description:
      "Music production, AI generated content, cinematic visuals and creative experiments using AI tools.",
    image: "/projects/music.png",
    tech: ["AI", "Music", "Creative"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
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
             {project.video ? (
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

                  {/* Tech Stack */}
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

                  {/* Buttons */}
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