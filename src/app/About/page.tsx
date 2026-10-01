"use client";

import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import { useLanguage } from "../../../components/LanguageProvider";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Squarespace", "Webflow", "GitHub", "Figma", "Supabase", "ChatGPT", "Claude"];

const highlights = {
  en: [
    { number: "01", title: "Problem Solving", text: "I test, learn and work towards solutions that function well." },
  ],
  no: [
    { number: "01", title: "Problemløsning", text: "Jeg tester, lærer og jobber meg fram til løsninger som fungerer." },
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
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{no ? "Litt kode. Mye nysgjerrighet." : "A little code. A lot of curiosity."}</h1>

        <div className="mt-10 grid grid-cols-1 gap-6">{cards.map((item) => <div key={item.number} className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/30"><p className="text-sm uppercase tracking-[0.35em] text-white/40">{item.number}</p><h2 className="mt-4 text-3xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-white/70">{item.text}</p></div>)}</div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">{no ? "Min reise" : "My Journey"}</p>
            <h2 className="mt-4 text-3xl font-bold">{no ? "Veien til frontend" : "Finding frontend"}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Jeg har lenge vært interessert i datamaskiner, fra PC-bygging til servere. I 2022 begynte jeg på frontendutdanning og har siden utviklet meg gjennom praksis hos Gavne og Kodeverket og egne prosjekter." : "I’ve long been interested in computers, from building PCs to working with servers. In 2022, I began studying frontend development and have since continued learning through placements at Gavne and Kodeverket and my own projects."}</p>
            <p className="mt-4 leading-relaxed text-white/70">{no ? "Gjennom Kodeverket har jeg jobbet med nettsider, skjerminnhold, video og digitale løsninger ved Varegg Arena, og bidratt til arbeid for Åsane Arena og AdO. Arbeidet videreføres nå gjennom Varegg Media, en del av Varegg Arena." : "Through Kodeverket, I have worked on websites, screen content, video and digital solutions at Varegg Arena, and contributed to work for Åsane Arena and AdO. This work now continues through Varegg Media, part of Varegg Arena."}</p>
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
