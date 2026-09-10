import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import ProjectRequestForm from "../../../components/ProjectRequestForm";

const services = [
  { number: "01", title: "Website Development", text: "Modern, responsive websites built with React, Next.js and Tailwind CSS — from idea to production." },
  { number: "02", title: "Redesign & Modernization", text: "Refresh an existing website with a cleaner visual identity, stronger mobile experience and modern frontend." },
  { number: "03", title: "Design & Visual Content", text: "UI concepts, Figma design, visual assets and creative content that give your digital presence a distinct identity." },
  { number: "04", title: "Performance & Accessibility", text: "Improve usability, accessibility, responsive behaviour and frontend performance across devices." },
];

const process = [
  { number: "01", title: "Discuss", text: "We talk about your idea, goals, audience and what the project needs." },
  { number: "02", title: "Design", text: "I shape the visual direction, structure and user experience." },
  { number: "03", title: "Develop", text: "The design becomes a responsive, polished and maintainable website." },
  { number: "04", title: "Launch", text: "Final testing, performance checks and deployment to production." },
];

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-black" />
      <div className="pointer-events-none fixed left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]" />
      <div className="relative z-10">
        <Navbar />
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            <div className="relative px-6 py-16 md:px-12 md:py-24 lg:px-16">
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-500/[0.08] blur-[100px]" />
              <div className="relative max-w-4xl">
                <div className="mb-6 flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" /><p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/55">Available for freelance projects</p></div>
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">Have a project<br /><span className="text-white/45">in mind?</span></h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">I help businesses, clubs and individuals create modern digital experiences — combining frontend development, design and creative visual work.</p>
                <div className="mt-10 flex flex-wrap gap-4"><Link href="#request" className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-105">Start a project</Link><Link href="/Projects" className="rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 font-semibold text-white transition hover:bg-white/[0.12]">View my work</Link></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10"><p className="text-xs uppercase tracking-[0.38em] text-white/40">What I can help with</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Services</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{services.map((service) => <div key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:border-white/20 hover:bg-white/[0.065] hover:shadow-[0_20px_60px_rgba(139,92,246,0.10)] md:p-9"><div className="flex items-start justify-between gap-6"><div><h3 className="text-2xl font-bold">{service.title}</h3><p className="mt-4 max-w-xl leading-relaxed text-white/60">{service.text}</p></div><span className="text-sm font-semibold tracking-[0.2em] text-white/25 transition group-hover:text-white/55">{service.number}</span></div></div>)}</div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-4xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mb-12 max-w-2xl"><p className="text-xs uppercase tracking-[0.38em] text-white/40">From idea to launch</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">How I work</h2><p className="mt-4 leading-relaxed text-white/60">A simple process with clear communication throughout the project.</p></div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">{process.map((step) => <div key={step.title} className="bg-black/70 p-7 md:min-h-64"><span className="text-xs font-semibold tracking-[0.25em] text-white/30">{step.number}</span><h3 className="mt-12 text-2xl font-bold">{step.title}</h3><p className="mt-4 text-sm leading-relaxed text-white/55">{step.text}</p></div>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12"><div className="grid gap-5 md:grid-cols-3"><div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"><p className="text-xs uppercase tracking-[0.3em] text-white/35">Built for</p><p className="mt-4 text-xl font-semibold">Businesses, clubs & personal brands</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"><p className="text-xs uppercase tracking-[0.3em] text-white/35">Frontend</p><p className="mt-4 text-xl font-semibold">React · Next.js · TypeScript · Tailwind</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"><p className="text-xs uppercase tracking-[0.3em] text-white/35">Based in</p><p className="mt-4 text-xl font-semibold">Bergen, Norway · Remote friendly</p></div></div></section>

        <section id="request" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl"><p className="text-xs uppercase tracking-[0.38em] text-white/40">Let&apos;s work together</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Request a project</h2><p className="mt-4 leading-relaxed text-white/60">Share the basics and we can start with a simple, no-obligation conversation about the project.</p></div>
          <ProjectRequestForm />
        </section>

        <section className="pt-2"><Contact /></section>
      </div>
    </main>
  );
}
