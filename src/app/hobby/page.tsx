import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function Hobby() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Creative Side
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Hobby & Creative Work
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Outside of frontend development, I enjoy music,
            drawing, image editing, video editing and creating
            digital concepts.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              "Music",
              "Drawing",
              "Image Editing",
              "Video Editing",
              "AI Art",
              "Gaming",
            ].map((hobby) => (
              <div
                key={hobby}
                className="rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <h2 className="text-2xl font-bold">
                  {hobby}
                </h2>

                <p className="mt-3 text-white/60">
                  A creative area I like to explore and
                  improve.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}