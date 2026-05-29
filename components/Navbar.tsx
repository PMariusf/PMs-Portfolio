export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="font-serif text-4xl text-white drop-shadow-lg">
          Portfolio
        </h1>

        <div className="hidden gap-8 text-lg font-semibold text-white/80 md:flex">
          <a href="#pitch" className="hover:text-white">Pitch</a>
          <a href="#projects" className="hover:text-white">Prosjekter</a>
          <a href="#interests" className="hover:text-white">Interesse</a>
          <a href="#contact" className="hover:text-white">Info</a>
        </div>
      </div>
    </nav>
  );
}