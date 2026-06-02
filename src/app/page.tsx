import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Music from "../../components/Music";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";

const recentProjects: { title: string; image?: string; video?: string; text: string }[] = [
  {
    title: "Varegg Arena",
    video: "/projects/Varegg-Arena/perimeter.mov",
    text: "Sports visuals, branding and event graphics.",
  },
  {
    title: "Fjellveidager",
    image: "/projects/fjellveidager.png",
    text: "Creative branding, posters and event visuals for Fjellveidager.",
  },
  {
    title: "AI Music",
    image: "/projects/music.png",
    text: "Creative music projects made with Suno AI.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-black" />

      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION */}
        <section className="mx-auto max-w-[95%] pt-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
              {/* LEFT SIDE IMAGE */}
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                <Hero />
              </div>

              {/* RIGHT SIDE TEXT */}
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                  Frontend Developer
                </p>

                <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                  Modern Web Design with a Creative Edge
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                  I build modern, responsive and visually engaging websites
                  using React, Next.js and Tailwind CSS — with a strong
                  interest in design, AI and creative digital experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
                  >
                    View Projects
                  </Link>

                  <Link
                    href="/about"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT PROJECTS */}
       {/* RECENT PROJECTS */}
<section className="mx-auto max-w-7xl px-6 pt-16">
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-8">
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Recent Work
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Recent Projects
        </h2>

        <p className="mt-3 max-w-2xl text-white/60">
          A quick look at some of my newest frontend, design and creative work.
        </p>
      </div>

      <Link
        href="/projects"
        className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/70 transition hover:bg-white/20 hover:text-white"
      >
        View all projects
      </Link>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {recentProjects.map((project) => (
        <Link
          href="/projects"
          key={project.title}
          className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
        >
          <div className="relative h-44 bg-black">
{project.video ? (
  <video
    src={project.video}
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-contain"
  />
) : (
  <Image
    src={project.image!}
    alt={project.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
)}
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {project.text}
            </p>

            <p className="mt-4 text-sm font-medium text-white/80">
              View project →
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

        {/* FULL PROJECTS */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl">
            <Projects />
          </div>
        </section>

        {/* MUSIC PLAYER */}
        <Music />

        {/* SMALLER INTERESTS */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="scale-90">
              <Interests />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Contact />
      </div>
    </main>
  );
}