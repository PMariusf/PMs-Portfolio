import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "Squarespace",
  "GitHub",
  "Figma",
  "Supabase",
  "AI Tools",
];

const highlights = [
  {
    number: "01",
    title: "Frontend",
    text: "I enjoy building modern, responsive websites with clean structure, strong visuals and smooth user experience.",
  },
  {
    number: "02",
    title: "Creative Work",
    text: "I like working with image editing, video editing, AI visuals, music creation and digital design.",
  },
  {
    number: "03",
    title: "Problem Solving",
    text: "I enjoy learning, testing ideas, fixing problems and turning concepts into working digital solutions.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          About Me
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Frontend developer with a creative mindset
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Hi, I’m Marius — a frontend developer based in Bergen, Norway. I enjoy
          creating modern websites that combine clean code, strong visual design
          and good user experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/30"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/40">
                {item.number}
              </p>

              <h2 className="mt-4 text-3xl font-bold">{item.title}</h2>

              <p className="mt-4 leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">
              My Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              From curiosity to frontend development
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              My journey into frontend development started with an interest in
              design, technology and creating things visually. Through studies,
              practice and personal projects, I have worked with React, Next.js,
              Tailwind CSS, TypeScript, Supabase and AI-assisted workflows.
            </p>

            <p className="mt-4 leading-relaxed text-white/70">
              I have also worked with Squarespace, WordPress, HTML, CSS and
              JavaScript, which has given me practical experience with both
              custom frontend development and website building platforms.
            </p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">
              What I Like Building
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Visual, responsive and useful web experiences
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              I like building websites that feel modern, polished and easy to
              use. I care about responsive layouts, clear navigation, visual
              details, smooth interactions and making sure the final result feels
              intentional.
            </p>

            <p className="mt-4 leading-relaxed text-white/70">
              My favorite projects are the ones where frontend, design and
              creativity meet — where the website is not only functional, but
              also has personality.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Skills & Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold">Tools I work with</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">
              Creative Side
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Creativity is a big part of how I work
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              Outside of coding, I enjoy music creation, image editing, video
              editing, AI art and digital design. I like combining creativity
              with technology to create visuals, concepts and digital
              experiences that feel unique.
            </p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">
              Current Goal
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Growing as a frontend developer
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              My goal is to continue growing as a frontend developer and work on
              projects where design, functionality and user experience come
              together. I enjoy solving problems, learning new technologies and
              building things that people enjoy using.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}