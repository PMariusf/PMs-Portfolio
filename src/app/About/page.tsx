import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          About Me
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Frontend Developer & Creative Mind
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Hi, I’m Marius — a frontend developer based in Bergen,
          Norway. I enjoy building modern and visually engaging websites with a
          strong focus on user experience, responsive design and clean UI.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Who I am */}
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              Who I Am
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              I am working in frontend development and enjoy working
              with React, Next.js, Tailwind CSS and TypeScript. I like creating
              websites that feel modern, interactive and visually polished.
            </p>
          </div>

          {/* My Journey */}
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              My Journey
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Through my studies and internship experience, I have worked with
              frontend development, AI tools, Supabase and modern workflows.
              I enjoy learning new technologies and continuously improving my
              skills.
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              Skills & Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind",
                "GitHub",
                "Figma",
                "Supabase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Side */}
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              Creative Side
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Outside of coding, I enjoy music creation, image editing, AI art,
              video editing and creative digital projects. I like combining
              creativity with technology to make experiences feel unique.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-10 rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold">
            Goals
          </h2>

          <p className="mt-4 max-w-4xl text-white/70 leading-relaxed">
            My goal is to continue growing as a frontend developer and work on
            exciting projects where design, functionality and user experience
            come together. I enjoy solving problems, learning new technologies
            and building things that people enjoy using.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}