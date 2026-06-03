import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";

const recentProjects = [
  {
    title: "Varegg Arena",
    image: "/projects/Varegg-Arena/varegg.png",
    video: "/projects/Varegg-Arena/perimeter.mov",
    text: "Sports visuals, branding and event graphics.",
  },
  {
    title: "Fjellveidager",
    image: "/projects/Varegg-Arena/fjellveidager.png",
    text: "Creative branding, posters and event visuals.",
  },
  {
    title: "PM-portfolio",
    image: "/projects/music.png",
    text: "Coding is Life.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-black" />

      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="fade-up mx-auto max-w-[95%] pt-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            <div className="grid items-center gap-10 p-6 lg:grid-cols-2 lg:p-14">
              {/* LEFT IMAGE */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-4">
                <Hero />
              </div>

              {/* RIGHT TEXT */}
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                  Frontend Developer
                </p>

                <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                  Modern Web Design with a Creative Edge
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                  I build modern, responsive and visually
                  engaging websites using React, Next.js
                  and Tailwind CSS — with a strong interest
                  in design, AI and creative digital experiences.
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

                <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/40">
                  Available for internship / frontend opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT PROJECTS */}
        <section className="fade-up mx-auto max-w-7xl px-6 pt-16">
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
                  A quick look at some of my newest frontend,
                  design and creative work.
                </p>
              </div>

              <Link
                href="/Projects"
                className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/70 transition hover:bg-white/20 hover:text-white"
              >
                View all projects
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {recentProjects.map((project) => (
                <Link
                  href="/Projects"
                  key={project.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
                >
                  {/* IMAGE / VIDEO / MATRIX */}
                  <div className="relative h-44 overflow-hidden bg-black">
                    {project.title === "PM-portfolio" ? (
                      <div className="absolute inset-0 bg-black">
                        <div className="matrix-rain opacity-80">
                          {[
                            "left-[0%] delay-[0s] duration-[3s]",
                            "left-[6%] delay-[0.1s] duration-[4s]",
                            "left-[12%] delay-[0.2s] duration-[5s]",
                            "left-[18%] delay-[0.3s] duration-[3s]",
                            "left-[24%] delay-[0.4s] duration-[4s]",
                            "left-[30%] delay-[0.5s] duration-[5s]",
                            "left-[36%] delay-[0.6s] duration-[3s]",
                            "left-[42%] delay-[0.7s] duration-[4s]",
                            "left-[48%] delay-[0.8s] duration-[5s]",
                            "left-[54%] delay-[0.9s] duration-[3s]",
                            "left-[60%] delay-[1s] duration-[4s]",
                            "left-[66%] delay-[1.1s] duration-[5s]",
                            "left-[72%] delay-[1.2s] duration-[3s]",
                            "left-[78%] delay-[1.3s] duration-[4s]",
                            "left-[84%] delay-[1.4s] duration-[5s]",
                            "left-[90%] delay-[1.5s] duration-[3s]",
                          ].map((className, index) => (
                           <span
                             key={index}
                             className={`matrix-column ${className}`}
                           >
                              {"01 PM NEXT REACT TAILWIND CODE ".repeat(8)}
                            </span>
                          ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="rounded-full border border-white/20 bg-black/50 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-white backdrop-blur-md">
                            PM PORTFOLIO
                          </p>
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
                        className="object-cover transition duration-500 group-hover:scale-105"
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

        {/* INTERESTS */}
        <section className="fade-up mx-auto max-w-7xl px-6 pt-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
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