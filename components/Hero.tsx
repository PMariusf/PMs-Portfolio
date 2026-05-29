import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="pitch"
      className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 md:grid-cols-2"
    >
      <div>
        <div className="w-fit rounded-4xl border border-white/20 bg-black/20 p-3 shadow-2xl backdrop-blur-md">
          <Image
            src="/marius.png"
            alt="Marius"
            width={224}
            height={224}
            className="h-66 w-66 rounded-3xl object-contain grayscale"
            priority
          />
        </div>

        <h2 className="mt-8 text-4xl font-bold md:text-4xl">
          Hei, jeg er <span className="text-white/70">Marius</span>
        </h2>
      </div>

      <div className="rounded-[3rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <h3 className="mt-4 text-4xl font-bold">Frontend & Design</h3>
        <p className="mt-5 text-lg leading-8 text-white/70">
          Jeg liker å bygge moderne, responsive nettsider med et visuelt
          uttrykk som føles kreativt, tydelig og brukervennlig.
        </p>
      </div>
    </section>
  );
}