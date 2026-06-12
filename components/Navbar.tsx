
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Me" },
    { href: "/CV", label: "CV" },
    { href: "/Projects", label: "Projects" },
    { href: "/hobby", label: "Hobby" },
    { href: "/Contact", label: "Contact" },
  ];

  const desktopLinkClass = (href: string) =>
    `group relative py-2 text-[13px] uppercase tracking-[0.28em] transition duration-300 ${
      pathname === href
        ? "text-white"
        : "text-white/55 hover:text-white"
    }`;

  const mobileLinkClass = (href: string) =>
    `relative border-b border-white/10 px-1 py-4 text-lg transition duration-300 ${
      pathname === href
        ? "text-white"
        : "text-white/60 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative">
            <span className="logo-text bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-5xl font-semibold tracking-tight text-transparent transition duration-300 group-hover:scale-105">
              PM
            </span>

            <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition duration-500 group-hover:scale-x-100" />
          </div>

          <div className="transition duration-300 group-hover:translate-x-1">
            <p className="logo-text text-[28px] leading-none tracking-wide text-white">
              Portfolio
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/40">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-14 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={desktopLinkClass(link.href)}
            >
              {link.label}

              {/* Underline animation */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${
                  pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-7 bg-white transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass(link.href)}
              >
                {link.label}

                <span
                  className={`absolute bottom-2 left-1 h-[2px] bg-white transition-all duration-300 ${
                    pathname === link.href ? "w-12" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
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