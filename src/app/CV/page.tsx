import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function CV() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          CV
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Experience & Skills
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Frontend developer student based in Bergen, Norway, with
          interest in modern web development, design, AI tools and
          creative digital projects.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Frontend Development</h2>
            <p className="mt-4 text-white/70">
              I work with React, Next.js, Tailwind CSS and TypeScript.
              I enjoy building modern, responsive and visually polished
              websites with focus on user experience.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Internship / Practice</h2>
            <p className="mt-4 text-white/70">
              During my internship experience, I worked with AI tools,
              Supabase, frontend development and modern project workflows.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Tech Stack</h2>

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
                "AI Tools",
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

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Creative Skills</h2>
            <p className="mt-4 text-white/70">
              I also enjoy music creation, image editing, video editing,
              AI art and digital design. I like combining creativity and
              technology in my projects.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold">Goal</h2>
          <p className="mt-4 max-w-4xl text-white/70">
            My goal is to continue growing as a frontend developer and
            work on projects where design, functionality and user
            experience come together.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}