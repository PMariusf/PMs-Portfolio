"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-4xl font-serif text-white">
          Portfolio
        </h1>

        {/* Pages */}
       <div className="flex gap-8 text-lg">
  <Link
    href="/"
    className={pathname === "/" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    Home
  </Link>

  <Link
    href="/About"
    className={pathname === "/About" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    About Me
  </Link>

  <Link
    href="/Cv"
    className={pathname === "/Cv" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    CV
  </Link>

  <Link
    href="/Projects"
    className={pathname === "/Projects" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    Projects
  </Link>

  <Link
    href="/hobby"
    className={pathname === "/hobby" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    Hobby
  </Link>

  <Link
    href="/Contact"
    className={pathname === "/Contact" ? "rounded-full bg-white/20 px-3 py-1" : ""}
  >
    Contact
  </Link>
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