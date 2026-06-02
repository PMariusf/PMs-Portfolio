const interests = [
  "Frontend",
  "React",
  "Next.js",
  "Tailwind",
  "UI Design",
  "Figma",
  "AI Tools",
  "Music",
  "Image Editing",
  "Video Editing",
  "Gaming",
  "Creative Coding",
];

export default function Interests() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Interests
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Things I Like Working With
        </h2>

        <p className="mt-3 max-w-2xl text-white/60">
          A mix of development, design and creative tools that inspire my work.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <span
            key={interest}
            className="group relative overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/80 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 hover:text-white"
            style={{
              animationDelay: `${index * 0.06}s`,
            }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">{interest}</span>
          </span>
        ))}
      </div>
    </section>
  );
}