const projects = [
  {
    title: "Portfolio",
    text: "Min personlige nettside bygget med Next.js og Tailwind.",
  },
  {
    title: "Jule Oppgave",
    text: "Design- og kodeprosjekt fra frontend-undervisning.",
  },
  {
    title: "Scrimba Læring",
    text: "Øvelser og små prosjekter fra Scrimba.",
  },
  {
    title: "Høst Oppgave",
    text: "Semesteroppgave med fokus på struktur og design.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="font-serif text-5xl drop-shadow-lg">Prosjekter</h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-white/20 bg-black/30 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
          >
            <div className="mb-6 h-48 rounded-2xl bg-white/10" />
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p className="mt-3 text-white/65">{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}