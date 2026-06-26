"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Image from "next/image";


const cvFile = "/cv/Per_Marius_Foyner_CV.pdf";

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
  "Supabase",
  "GitHub",
  "Figma",
  "AI Tools",
  "Responsive Design",
  "VS Code",
];

const timeline = [
  {
    title: "Frontend Development",
    place: "Kodehode / Kodeverket",
    text: "Studying modern frontend development with focus on React, Next.js, Tailwind CSS, responsive design and project-based learning. Experience with HTML, CSS, JavaScript, Squarespace and WordPress for building and maintaining modern websites.",
  },
  {
    title: "Internship / Practice",
    place: "Gavne",
    text: "Worked with AI tools, Lovable, Supabase, frontend development, backend and modern digital workflows.",
  },
  {
    title: "Security / Operations",
    place: "Securitas",
    text: "Experience with responsibility, structure, communication, problem solving and working with people in active environments.",
  },
];

export default function CV() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">CV</p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Experience, skills & creative development
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Frontend developer based in Bergen, Norway. I enjoy building modern,
          responsive and visually polished websites where design, functionality
          and user experience work together.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={cvFile}
            download
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Download CV
          </a>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
          >
            Preview CV
          </button>

          <a
            href="/Contact"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/30"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                {item.place}
              </p>

              <h2 className="mt-4 text-3xl font-bold">{item.title}</h2>

              <p className="mt-4 leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold">Tech Stack</h2>

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

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold">Creative Skills</h2>

            <p className="mt-4 leading-relaxed text-white/70">
              I enjoy combining frontend development with creativity through
              image editing, video editing, AI visuals, music creation and
              digital design. I also have experience building and maintaining
              websites using Squarespace, WordPress, HTML, CSS and JavaScript.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Current Goal
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Looking for frontend opportunities
          </h2>

          <p className="mt-4 max-w-4xl leading-relaxed text-white/70">
            My goal is to keep growing as a frontend developer and work on
            projects where design, accessibility, interactivity and performance
            come together. I am especially interested in modern web development,
            creative UI, AI-assisted workflows and digital products with a
            strong visual identity.
          </p>
        </div>
      </section>

    {/* CV SLIDE PREVIEW */}
<div
  className={`fixed inset-0 z-100 transition ${
    isPreviewOpen ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
  <div
    onClick={() => setIsPreviewOpen(false)}
    className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity ${
      isPreviewOpen ? "opacity-100" : "opacity-0"
    }`}
  />

  <aside
    className={`absolute right-0 top-0 h-full w-full border-l border-white/10 bg-black/95 shadow-2xl backdrop-blur-2xl transition-transform duration-500 md:w-[72vw] lg:w-[58vw] ${
      isPreviewOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex h-20 items-center justify-between border-b border-white/10 px-4 md:px-6">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          Preview
        </p>
        <h2 className="mt-1 text-lg font-bold md:text-2xl">
          Per Marius Føyner CV
        </h2>
      </div>

      <button
        onClick={() => setIsPreviewOpen(false)}
        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
      >
        Close
      </button>
    </div>

    <div className="h-[calc(100vh-80px)] overflow-y-auto p-3 md:p-5">
      <div className="flex min-h-full items-start justify-center">
        <Image
          src="/cv/Marius-CV.png"
          alt="CV Preview"
          width={1200}
          height={1700}
          className="h-auto w-full max-w-[62.5rem] rounded-2xl border border-white/10 object-contain"
          priority
        />
      </div>
    </div>
  </aside>
</div>

      <Contact />
    </main>
  );
}