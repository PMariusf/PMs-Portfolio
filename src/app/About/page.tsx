"use client";

import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import { useLanguage } from "../../../components/LanguageProvider";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Squarespace", "GitHub", "Figma", "Supabase", "AI Tools"];

const highlights = {
  en: [
    { number: "01", title: "Frontend", text: "I build responsive websites with a clear structure." },
    { number: "02", title: "Creative Work", text: "I explore ideas through images, video and music." },
    { number: "03", title: "Problem Solving", text: "I test, learn and work towards solutions that function well." },
  ],
  no: [
    { number: "01", title: "Frontend", text: "Jeg bygger responsive nettsider med ryddig struktur." },
    { number: "02", title: "Kreativt arbeid", text: "Jeg utforsker ideer gjennom bilde, video og musikk." },
    { number: "03", title: "Problemløsning", text: "Jeg tester, lærer og jobber meg fram til løsninger som fungerer." },
  ],
};

export default function About() {
  const { language } = useLanguage();
  const no = language === "no";
  const cards = highlights[language];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">{no ? "Om meg" : "About Me"}</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">{no ? "Frontend-utvikler med et kreativt tankesett" : "Frontend developer with a creative mindset"}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">{no ? "Jeg er Marius, frontendutvikler fra Bergen med interesse for både kode og visuelt arbeid." : "I’m Marius, a frontend developer from Bergen, Norway, with an interest in both code and visual work."}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">{cards.map((item) => <div key={item.number} className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/30"><p className="text-sm uppercase tracking-[0.35em] text-white/40">{item.number}</p><h2 className="mt-4 text-3xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-white/70">{item.text}</p></div>)}</div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Min reise" : "My Journey"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Veien til frontend" : "Finding frontend"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Interessen for design og teknologi førte meg til frontendutvikling." : "An interest in design and technology led me to frontend development."}</p>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Gjennom studier, praksis og egne prosjekter har jeg fått erfaring med både skreddersydde nettsider og publiseringsplattformer." : "Through studies, practice and personal projects, I have gained experience with both custom websites and publishing platforms."}</p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Det jeg liker å bygge" : "What I Like Building"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Nettsider som er enkle å bruke" : "Websites that are easy to use"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Jeg trives med prosjekter der tydelig navigasjon og gjennomtenkte detaljer gjør nettsiden enkel å bruke." : "I enjoy projects where clear navigation and thoughtful details make a website easy to use."}</p>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Smidige interaksjoner og et personlig uttrykk gjør helheten komplett." : "Smooth interactions and a distinctive visual identity complete the experience."}</p>
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Ferdigheter & teknologi" : "Skills & Technologies"}</p>
          <h2 className="mt-4 text-3xl font-bold">{no ? "Verktøy jeg jobber med" : "Tools I work with"}</h2>
          <div className="mt-6 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">{skill}</span>)}</div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Kreativ side" : "Creative Side"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Utenom koding" : "Beyond code"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Ved siden av utvikling jobber jeg med bilde- og videoredigering, musikkproduksjon, AI-kunst og digitalt design." : "Alongside development, I work with image and video editing, music production, AI art and digital design."}</p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Nåværende mål" : "Current Goal"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Veien videre" : "Looking ahead"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Jeg vil utvikle meg videre som frontendutvikler og bidra i nye prosjekter." : "I want to keep growing as a frontend developer and contribute to new projects."}</p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
