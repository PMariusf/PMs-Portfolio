const interests = ["Tegning", "Musikk", "Foto", "Video", "Design", "Koding"];

export default function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="font-serif text-5xl drop-shadow-lg">Interesse</h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {interests.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 text-2xl font-bold shadow-xl backdrop-blur-md"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}