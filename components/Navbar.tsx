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
    { href: "/Freelance", label: "Freelance", featured: true },
    { href: "/Contact", label: "Contact" },
  ];

  const desktopLinkClass = (href: string, featured?: boolean) =>
    `group relative py-2 text-[13px] font-bold uppercase tracking-[0.28em] transition duration-300 ${
      featured ? "rounded-full border border-white/15 bg-white/[0.07] px-4 hover:bg-white/[0.12]" : ""
    } ${pathname === href ? "text-white" : "text-white/55 hover:text-white"}`;

  const mobileLinkClass = (href: string) =>
    `relative border-b border-white/10 px-1 py-4 text-lg transition duration-300 ${
      pathname === href ? "text-white" : "text-white/60 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
      <div className="flex h-20 items-center justify-between px-6 sm:px-8 xl:px-16 2xl:px-24">
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative">
            <span className="logo-text bg-linear-to-r from-white via-zinc-300 to-white bg-clip-text text-6xl font-semibold tracking-tight text-transparent transition duration-300 group-hover:scale-105">PM</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-white/70 transition duration-500 group-hover:scale-x-100" />
          </div>
          <div className="transition duration-300 group-hover:translate-x-1">
            <p className="logo-text text-[32px] leading-none tracking-wide text-white">Portfolio</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.36em] text-white/75">Frontend Developer</p>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href, link.featured)}>
              {link.label}
              {!link.featured && <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 flex flex-col gap-1.5 lg:hidden" aria-label="Toggle menu" aria-expanded={isOpen}>
          <span className={`h-0.5 w-7 bg-white transition duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${isOpen ? "max-h-[36rem]" : "max-h-0"}`}>
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={mobileLinkClass(link.href)}>
                <span className="flex items-center gap-3">{link.label}{link.featured && <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Available</span>}</span>
                <span className={`absolute bottom-2 left-1 h-0.5 bg-white transition-all duration-300 ${pathname === link.href ? "w-12" : "w-0"}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
