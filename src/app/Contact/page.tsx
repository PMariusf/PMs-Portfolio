import Navbar from "../../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold">Let’s Connect</h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Feel free to contact me for frontend work, projects, creative ideas or
          collaboration.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <a
            href="mailto:yourmail@example.com"
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
          >
            <h2 className="text-2xl font-bold">Email</h2>
            <p className="mt-3 text-white/60">marius28@live.no</p>
          </a>

          <a
            href="https://github.com/PMariusf"
            target="_blank"
            rel="noopener"
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
          >
            <h2 className="text-2xl font-bold">GitHub</h2>
            <p className="mt-3 text-white/60">PMariusf</p>
          </a>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Location</h2>
            <p className="mt-3 text-white/60">Bergen, Norway</p>
          </div>
        </div>
      </section>
    </main>
  );
}