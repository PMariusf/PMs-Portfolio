"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const inputClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-violet-300/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-400/10";

export default function ProjectRequestForm() {
  const { language } = useLanguage();
  const no = language === "no";

  const projectTypes = no
    ? ["Ny nettside", "Redesign", "Frontend-utvikling", "Design / visuelt", "Ytelse / tilgjengelighet", "Annet"]
    : ["New website", "Redesign", "Frontend development", "Design / Visuals", "Performance / Accessibility", "Other"];

  const budgets = no
    ? ["Under 10 000 NOK", "10–25 000 NOK", "25–50 000 NOK", "50 000+ NOK", "La oss diskutere"]
    : ["Under 10 000 NOK", "10–25 000 NOK", "25–50 000 NOK", "50 000+ NOK", "Let's discuss"];

  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[budgets.length - 1]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const timeline = String(form.get("timeline") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(
      no ? `Freelance prosjektforespørsel — ${selectedType}` : `Freelance project request — ${selectedType}`
    );

    const body = encodeURIComponent(
      no
        ? `Hei Marius,\n\nJeg ønsker å diskutere et prosjekt.\n\nNavn: ${name}\nE-post: ${email}\nBedrift / organisasjon: ${company || "—"}\nType prosjekt: ${selectedType}\nBudsjett: ${budget}\nØnsket tidsramme: ${timeline || "—"}\n\nProsjektbeskrivelse:\n${message}\n`
        : `Hi Marius,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nCompany / Organization: ${company || "—"}\nProject type: ${selectedType}\nBudget: ${budget}\nPreferred timeline: ${timeline || "—"}\n\nProject details:\n${message}\n`
    );

    window.location.href = `mailto:marius28@live.no?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
      <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-white/40">{no ? "Prosjektforespørsel" : "Project request"}</p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">{no ? "Fortell meg hva du ønsker å bygge." : "Tell me what you want to build."}</h3>
          <p className="mt-5 max-w-md leading-relaxed text-white/55">
            {no
              ? "Noen få detaljer er nok for å komme i gang. Når du sender inn, åpnes e-postprogrammet ditt med alt ferdig utfylt slik at du kan kontrollere meldingen før den sendes."
              : "A few details are enough to get started. Submitting opens your email app with everything already prepared, so you can review it before sending."}
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm font-semibold text-white/80">{no ? "Hva skjer videre?" : "What happens next?"}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/45">
              {no
                ? "Jeg går gjennom forespørselen, og deretter kan vi snakke om omfang, tidsplan og den beste løsningen før noe avtales."
                : "I review the request, then we can discuss scope, timing and the best approach before anything is agreed."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              {no ? "Navn" : "Name"} *
              <input name="name" required autoComplete="name" placeholder={no ? "Ditt navn" : "Your name"} className={inputClass} />
            </label>
            <label className="text-sm font-medium text-white/70">
              E-post *
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
            </label>
          </div>

          <label className="block text-sm font-medium text-white/70">
            {no ? "Bedrift / organisasjon" : "Company / Organization"}
            <input name="company" autoComplete="organization" placeholder={no ? "Valgfritt" : "Optional"} className={inputClass} />
          </label>

          <fieldset>
            <legend className="text-sm font-medium text-white/70">{no ? "Hva trenger du hjelp med?" : "What do you need?"}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  aria-pressed={selectedType === type}
                  className={`rounded-full border px-4 py-2.5 text-sm transition ${
                    selectedType === type
                      ? "border-white/35 bg-white text-black"
                      : "border-white/10 bg-white/[0.04] text-white/60 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Budsjett
              <select value={budget} onChange={(event) => setBudget(event.target.value)} className={`${inputClass} appearance-none`}>
                {budgets.map((option) => (
                  <option key={option} value={option} className="bg-zinc-950">{option}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-white/70">
              {no ? "Ønsket tidsramme" : "Preferred timeline"}
              <input name="timeline" placeholder={no ? "f.eks. 4–6 uker" : "e.g. 4–6 weeks"} className={inputClass} />
            </label>
          </div>

          <label className="block text-sm font-medium text-white/70">
            {no ? "Fortell om prosjektet ditt" : "Tell me about your project"} *
            <textarea
              name="message"
              required
              rows={7}
              placeholder={
                no
                  ? "Hva ønsker du å bygge eller forbedre? Hva skal nettsiden hjelpe deg med å oppnå?"
                  : "What are you looking to build or improve? What should the website help you achieve?"
              }
              className={`${inputClass} resize-y`}
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-white/35">
              {no ? "Helt uforpliktende — dette er bare første samtale om prosjektet." : "No commitment — this is simply a first conversation about your project."}
            </p>
            <button type="submit" className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-white/90">
              {no ? "Forbered prosjektforespørsel →" : "Prepare project request →"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
