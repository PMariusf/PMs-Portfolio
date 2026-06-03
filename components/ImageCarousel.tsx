"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/projects/fjellveidager.png",
    alt: "Portfolio project",
  },
  {
    src: "/projects/drgongirl.png",
    alt: "Project two",
  },
  {
    src: "/projects/firedragon.png",
    alt: "Project three",
  },
  {
    src: "/projects/firedragon.png",
    alt: "Project three",
  },
  

];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const previousImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
      <div className="relative h-112.5 w-full overflow-hidden rounded-3xl">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={previousImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-2xl text-white hover:bg-black/80"
      >
        ‹
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-2xl text-white hover:bg-black/80"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
            title={`Go to image ${index + 1}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}