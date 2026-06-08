export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-lg font-bold text-white">
            PM Portfolio
          </h3>

          <p className="mt-2 text-sm text-white/50">
            Frontend Developer • Creative Design • Bergen
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/60">
          <a
            href="mailto:your@email.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <a
            href="https://github.com/PMariusf"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}