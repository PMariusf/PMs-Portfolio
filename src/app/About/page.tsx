"use client";

import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import { useLanguage } from "../../../components/LanguageProvider";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Squarespace", "GitHub", "Figma", "Supabase", "AI Tools"];

const highlights = {
  en: [
    { number: "01", title: "Frontend", text: "I enjoy building modern, responsive websites with clean structure, strong visuals and smooth user experience." },
    { number: "02", title: "Creative Work", text: "I like working with image editing, video editing, AI visuals, music creation and digital design." },
    { number: "03", title: "Problem Solving", text: "I enjoy learning, testing ideas, fixing problems and turning concepts into working digital solutions." },
  ],
  no: [
    { number: "01", title: "Frontend", text: "Jeg liker å bygge moderne og responsive nettsider med ryddig struktur, sterke visuelle uttrykk og en god brukeropplevelse." },
    { number: "02", title: "Kreativt arbeid", text: "Jeg liker å jobbe med bilderedigering, videoredigering, AI-visualer, musikkproduksjon og digitalt design." },
    { number: "03", title: "Problemløsning", text: "Jeg liker å lære, teste ideer, løse problemer og gjøre konsepter om til fungerende digitale løsninger." },
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
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">{no ? "Hei, jeg er Marius — en frontend-utvikler fra Bergen. Jeg liker å lage moderne nettsider som kombinerer ryddig kode, sterkt visuelt design og gode brukeropplevelser." : "Hi, I’m Marius — a frontend developer based in Bergen, Norway. I enjoy creating modern websites that combine clean code, strong visual design and good user experience."}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">{cards.map((item) => <div key={item.number} className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/30"><p className="text-sm uppercase tracking-[0.35em] text-white/40">{item.number}</p><h2 className="mt-4 text-3xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-white/70">{item.text}</p></div>)}</div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Min reise" : "My Journey"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Fra nysgjerrighet til frontend-utvikling" : "From curiosity to frontend development"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Reisen min inn i frontend-utvikling startet med interesse for design, teknologi og det å skape ting visuelt. Gjennom studier, praksis og egne prosjekter har jeg jobbet med React, Next.js, Tailwind CSS, TypeScript, Supabase og AI-assisterte arbeidsflyter." : "My journey into frontend development started with an interest in design, technology and creating things visually. Through studies, practice and personal projects, I have worked with React, Next.js, Tailwind CSS, TypeScript, Supabase and AI-assisted workflows."}</p>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Jeg har også jobbet med Squarespace, WordPress, HTML, CSS og JavaScript, noe som har gitt meg praktisk erfaring med både skreddersydd frontend-utvikling og ulike plattformer for nettsidebygging." : "I have also worked with Squarespace, WordPress, HTML, CSS and JavaScript, which has given me practical experience with both custom frontend development and website building platforms."}</p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Det jeg liker å bygge" : "What I Like Building"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Visuelle, responsive og nyttige nettopplevelser" : "Visual, responsive and useful web experiences"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Jeg liker å bygge nettsider som føles moderne, gjennomførte og enkle å bruke. Jeg er opptatt av responsive layouter, tydelig navigasjon, visuelle detaljer, smidige interaksjoner og at sluttresultatet føles helhetlig." : "I like building websites that feel modern, polished and easy to use. I care about responsive layouts, clear navigation, visual details, smooth interactions and making sure the final result feels intentional."}</p>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Favorittprosjektene mine er de hvor frontend, design og kreativitet møtes — hvor nettsiden ikke bare fungerer godt, men også har personlighet." : "My favorite projects are the ones where frontend, design and creativity meet — where the website is not only functional, but also has personality."}</p>
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
            <h2 className="mt-4 text-3xl font-bold">{no ? "Kreativitet er en stor del av måten jeg jobber på" : "Creativity is a big part of how I work"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Utenom koding liker jeg musikkproduksjon, bilderedigering, videoredigering, AI-kunst og digitalt design. Jeg liker å kombinere kreativitet med teknologi for å lage visualer, konsepter og digitale opplevelser som skiller seg ut." : "Outside of coding, I enjoy music creation, image editing, video editing, AI art and digital design. I like combining creativity with technology to create visuals, concepts and digital experiences that feel unique."}</p>
          </div>

          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Nåværende mål" : "Current Goal"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Videre utvikling som frontend-utvikler" : "Growing as a frontend developer"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Målet mitt er å fortsette å utvikle meg som frontend-utvikler og jobbe med prosjekter der design, funksjonalitet og brukeropplevelse møtes. Jeg liker å løse problemer, lære ny teknologi og bygge ting som mennesker liker å bruke." : "My goal is to continue growing as a frontend developer and work on projects where design, functionality and user experience come together. I enjoy solving problems, learning new technologies and building things that people enjoy using."}</p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
