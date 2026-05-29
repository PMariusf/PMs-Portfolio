
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/projects/fjellveidager.png",
    alt: "Fjellveidager",
  },
  {
    src: "/projects/dragongirl.png",
    alt: "Dragon Girl",
  },
  {
    src: "/projects/firedragon.png",
    alt: "Fire Dragon",
  },
  {
    src: "/projects/hyrox.png",
    alt: "Hyrox",
  },
{
    src: "/projects/trene.png",
    alt: "Trene",
  },
  {
   src: "/projects/Amazonfighter.png",
    alt: "Amazon Fighter",
  },
{
    src: "/projects/Elisabeth.png",
    alt: "Elisabeth",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative mx-auto w-[75%] max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
      <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-zinc-900/70 to-black/40 p-8">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={1400}
          height={800}
          
          priority
          className="h-auto max-h-[500px] w-auto object-contain transition duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={previousImage}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-md transition hover:bg-black/80"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-md transition hover:bg-black/80"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "scale-125 bg-white"
                : "bg-white/30"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}





