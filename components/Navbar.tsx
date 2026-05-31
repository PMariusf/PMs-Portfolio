"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href ? "rounded-full bg-white/20 px-3 py-1" : "";

  const mobileLinkClass = (href: string) =>
    `rounded-xl px-4 py-3 transition duration-300 hover:bg-white/10 hover:text-white ${
      pathname === href ? "bg-white/20 text-white" : "text-white/70"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-4xl font-serif text-white">Portfolio</h1>

        {/* Desktop menu */}
        <div className="hidden gap-8 text-lg text-white md:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/About" className={linkClass("/About")}>
            About Me
          </Link>

          <Link href="/Cv" className={linkClass("/Cv")}>
            CV
          </Link>

          <Link href="/Projects" className={linkClass("/Projects")}>
            Projects
          </Link>

          <Link href="/hobby" className={linkClass("/hobby")}>
            Hobby
          </Link>

          <Link href="/Contact" className={linkClass("/Contact")}>
            Contact
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-7 bg-white transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-white transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 text-lg text-white">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/")}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/about")}
            >
              About Me
            </Link>

            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/cv")}
            >
              CV
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/projects")}
            >
              Projects
            </Link>

            <Link
              href="/hobby"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/hobby")}
            >
              Hobby
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}










/*import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-4xl font-serif">Portfolio</h1>

        <div className="flex gap-8 text-lg">
          <Link href="/">Home</Link>
          <Link href="/About">About Me</Link>
          <Link href="/Cv">CV</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/hobby">Hobby</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}*/