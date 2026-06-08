import Link from "next/link";

export default function Contact() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/3 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Marius Portfolio
          </h3>

          <p className="mt-4 leading-relaxed text-white/60">
            Frontend developer passionate about
            modern web design, creative digital experiences,
            AI tools and interactive UI.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Contact
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-white/60">
            <p>Bergen, Norway</p>

            <a
              href="mailto:your@email.com"
              className="transition hover:text-white"
            >
              marius28@live.no
            </a>

            <a
              href="tel:+47xxxxxxxx"
              className="transition hover:text-white"
            >
              +47 92 04 70 23
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Quick Links
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/About" className="hover:text-white">
              About
            </Link>

            <Link href="/Projects" className="hover:text-white">
              Projects
            </Link>

            <Link href="/Cv" className="hover:text-white">
              CV
            </Link>

            <Link href="/Contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Socials
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-white/60">
            <a
              href="https://github.com/PMariusf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://instagram.com/p_marius_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://tiktok.com/@pmfoy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Marius Portfolio.
        Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}