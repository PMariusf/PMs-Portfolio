import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="pitch"
      className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 lg:grid-cols-2"
    >
      <div>
        {/* Image */}
        <div className="-mt-10 w-fit rounded-[2rem] border border-white/20 bg-black/20 p-3 shadow-2xl backdrop-blur-md">
          <Image
            src="/marius.png"
            alt="Marius"
            width={254}
            height={254}
            className="h-96 w-96 rounded-[2rem] object-contain object-top grayscale"
            priority
          />
        </div>

        {/* Text */}
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
             • Bergen, Norway
          </p>

          <h2 className="mt-3 text-5xl font-black leading-[0.95] md:text-6xl">
            Hei, jeg er{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent">
              Marius
            </span>
          </h2>

        
        </div>
      </div>
    </section>
  );
}