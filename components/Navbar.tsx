import Link from "next/link";


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
}