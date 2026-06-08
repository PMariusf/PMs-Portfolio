"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const categories = {
freehand: {
  title: "Freehand Images",
  images: [
    {
      src: "/projects/dragongirl.png",
      alt: "Dragon Girl",
    },
    {
      src: "/projects/firedragon.png",
      alt: "Fire Dragon",
    },
    {
      src: "/projects/Amazonfighter.png",
      alt: "Amazon Fighter",
    },
    {
      src: "/projects/Elisabeth.png",
      alt: "Elisabeth",
    },
    {
      src: "/projects/cyberpunk.png",
      alt: "Cyberpunk Female",
    },
  ],
},

  digital: {
    title: "Digital Art",
    images: [
    {
    src: "/projects/demonhunter.png",
    alt: "Female Demonhunter",
  },

  {
    src: "/projects/paladin.png",
    alt: "Female Paladin",
  },
  {
    src: "/projects/pandamonk.png",
    alt: "Female Pandamonk",
  },
  {
    src: "/projects/undeadmage.png",
    alt: "Undead Mage, Male",
  },
  {
    src: "/projects/Aniz.png",
    alt: " Female Aniz",
  },
    {
    src: "/projects/Viking.png",
    alt: "Female Viking",
  },
  {
    src: "/projects/dreamy.jpeg",
    alt: "Female Dreamy",
  },
  {
    src: "/projects/druid.png",
    alt: "Female Druid",
  },
   {
    src: "/projects/femalerogue.png",
    alt: "Female Rogue",
  },
    ],
  },

  projects: {
    title: "Projects",
    images: [
      {
        src: "/projects/fjellveidager.png",
        alt: "Fjellveidager",
      },
      {
        src: "/projects/Hyrox.png",
        alt: "HYROX",
      },
      {
        src: "/projects/trene.png",
        alt: "Training",
      },
         {
        src: "/projects/Ado.png",
        alt: "Ado bade arena",
     },
      {
       src: "/projects/femalebasket.png",
       alt: "Project female basketball player",
     },
     {
    src: "/projects/femalepingpong.png",
    alt: "Project female ping pong player",
  },
    ],
  },
};

type CategoryKey = keyof typeof categories;

export default function Projects() {
  const [selected, setSelected] =
    useState<CategoryKey>("digital");

  const [current, setCurrent] = useState(0);

  const images = useMemo(
    () => categories[selected].images,
    [selected]
  );

  const activeImage =
    images[current] ?? images[0];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
      {/* CATEGORY BUTTONS */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {(
          Object.keys(categories) as CategoryKey[]
        ).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              selected === key
                ? "scale-105 bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {categories[key].title}
          </button>
        ))}
      </div>

      {/* IMAGE */}
      <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-zinc-900/70 to-black/40 p-8">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          width={1400}
          height={800}
          priority
          className="h-auto max-h-[500px] w-auto animate-fadeImage object-contain transition duration-700 hover:scale-[1.02]"
        />
      </div>
      <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/50 px-5 py-3 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
          {categories[selected].title}
        </p>

        <h3 className="mt-1 text-2xl font-bold text-white">
          {activeImage.alt}
        </h3>
      </div>
      {/* PREVIOUS */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === 0
              ? images.length - 1
              : prev - 1
          )
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-md transition hover:bg-black/80"
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === images.length - 1
              ? 0
              : prev + 1
          )
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-md transition hover:bg-black/80"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrent(index)
            }
            aria-label={`Go to image ${index + 1}`}
            title={`Go to image ${index + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "scale-125 bg-white"
                : "bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}


