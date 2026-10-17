"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

type GalleryItem = {
  src: string;
  alt: string;
  altNo?: string;
  year?: number;
  type?: "image" | "video";
};

const categories: Record<
  string,
  {
    title: string;
    titleNo: string;
    images: GalleryItem[];
  }
> = {
  freehand: {
    title: "Freehand Images",
    titleNo: "Frihåndstegninger",
    images: [
      { src: "/projects/Drawing/dragongirl.png", alt: "Dragon Girl", altNo: "Dragejente", year: 2025 },
      { src: "/projects/Drawing/firedragon.png", alt: "Fire Dragon", altNo: "Ilddrage", year: 2025 },
      { src: "/projects/Drawing/Amazonfighter.png", alt: "Amazon Fighter", altNo: "Amazonkriger", year: 2025 },
      { src: "/projects/Drawing/Elisabeth.png", alt: "Female portrait", altNo: "Kvinneportrett", year: 2025 },
      { src: "/projects/Drawing/cyberpunk.png", alt: "Cyberpunk Female", altNo: "Cyberpunk-kvinne", year: 2025 },
      { src: "/projects/Drawing/Deadpool.jpeg", alt: "Deadpool", year: 2023 },
      { src: "/projects/Drawing/dolphine.jpeg", alt: "Dolphin", altNo: "Delfin", year: 2023 },
      { src: "/projects/Drawing/Elise.jpg", alt: "Elise", year: 2023 },
      { src: "/projects/Drawing/Vaiana.jpg", alt: "Vaiana", year: 2024 },
      { src: "/projects/Drawing/elsaupdatepng.png", alt: "Elsa", year: 2024 },
    ],
  },

  digital: {
    title: "Digital Art",
    titleNo: "Digital kunst",
    images: [
      { src: "/projects/Digital/demonhunter.png", alt: "Female Horde Demonhunter", altNo: "Kvinnelig Horde Demon Hunter" },
      { src: "/projects/Digital/paladin.png", alt: "Female Alliance Paladin", altNo: "Kvinnelig Alliance Paladin" },
      { src: "/projects/Digital/pandamonk.png", alt: "Female Pandaren Monk", altNo: "Kvinnelig Pandaren Monk" },
      { src: "/projects/Digital/undeadmage.png", alt: "Undead Mage, Male", altNo: "Mannlig Undead Mage" },
      { src: "/projects/Digital/Aniz.png", alt: "Female Harendar Monk", altNo: "Kvinnelig Harendar Monk" },
      { src: "/projects/Digital/Viking.png", alt: "Female Viking", altNo: "Kvinnelig viking" },
      { src: "/projects/Digital/dreamy.jpeg", alt: "Female dynasty warrior", altNo: "Kvinnelig dynastikriger" },
      { src: "/projects/Digital/druid.png", alt: "Female Druid", altNo: "Kvinnelig Druid" },
      { src: "/projects/Digital/femalerogue.png", alt: "Female Alliance Rogue", altNo: "Kvinnelig Alliance Rogue" },
      { src: "/projects/Digital/deathknight.png", alt: "Orc Death Knight", altNo: "Orc Death Knight" },
      { src: "/projects/Digital/Group 50.png", alt: "Army of WoW characters", altNo: "Samling av WoW-karakterer" },
      { src: "/projects/Digital/Group 33.png", alt: "Little league WoW characters", altNo: "Mini-WoW-karakterer" },
    ],
  },

  projects: {
    title: "Projects",
    titleNo: "Prosjekter",
    images: [
      { src: "/projects/Varegg-Arena/fjellveidager.png", alt: "Fjellveidager" },
      { src: "/projects/Varegg-Arena/Hyrox.png", alt: "HYROX" },
      { src: "/projects/Varegg-Arena/trene.png", alt: "Training", altNo: "Trening" },
      { src: "/projects/Varegg-Arena/Ado.png", alt: "AdO Arena" },
      { src: "/projects/Varegg-Arena/femalebasket.png", alt: "Female basketball player", altNo: "Kvinnelig basketballspiller" },
      { src: "/projects/Varegg-Arena/femalepingpong.png", alt: "Female ping pong player", altNo: "Kvinnelig bordtennisspiller" },
      { src: "/projects/nordhordaland-kampsport.png", alt: "Nordhordaland Kampsport" },
    ],
  },

  music: {
    title: "Music",
    titleNo: "Musikk",
    images: [
      { src: "/media/Far From Me.mp4", alt: "Far From Me", type: "video" },
      { src: "/media/Set the Dark on Fire.mp4", alt: "Set the Dark on Fire", type: "video" },
      { src: "/media/Enter the dragon.mp4", alt: "Enter the Dragon", type: "video" },
      { src: "/media/Hungry Touch.mp4", alt: "Hungry Touch", type: "video" },
      { src: "/media/Halfway Up.mp4", alt: "Halfway Up", type: "video" },
      { src: "/media/Light breaks through the night.mp4", alt: "Light Breaks Through the Night", type: "video" },
      { src: "/media/Itj Stopp Mæ.mp4", alt: "Itj Stopp Mæ", type: "video" },
      { src: "/media/Rolig musikk fyller natten, (Remastered).mp4", alt: "Rolig musikk fyller natten (Remastered)", type: "video" },
      { src: "/media/final night.mp4", alt: "Final Night", type: "video" },
    ],
  },

  musicVideo: {
    title: "Music Video",
    titleNo: "Musikkvideo",
    images: [
      { src: "/media/MusicVideo.mp4", alt: "Digital Art Music Video", altNo: "Digital kunst-musikkvideo", type: "video" },
    ],
  },
};

type CategoryKey = keyof typeof categories;

export default function Projects() {
  const { language } = useLanguage();
  const no = language === "no";
  const [selected, setSelected] = useState<CategoryKey>("digital");
  const [current, setCurrent] = useState(0);
  const images = useMemo(() => categories[selected].images, [selected]);
  const activeImage = images[current] ?? images[0];
  const categoryTitle = no ? categories[selected].titleNo : categories[selected].title;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, activeImage?.type === "video" ? 9000 : 4000);

    return () => clearInterval(interval);
  }, [images.length, activeImage?.type]);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/12 via-transparent to-white/5" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent" />

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {(Object.keys(categories) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelected(key);
                setCurrent(0);
              }}
              className={`rounded-full px-5 py-3 text-sm font-medium backdrop-blur-xl transition ${
                selected === key
                  ? "scale-105 border border-white/40 bg-white text-black shadow-[0_0_35px_rgba(255,255,255,0.35)]"
                  : "border border-white/15 bg-white/8 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-white/[0.14] hover:text-white"
              }`}
            >
              {no ? categories[key].titleNo : categories[key].title}
            </button>
          ))}
        </div>

        <div className="relative flex min-h-125 items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-linear-to-br from-white/8 via-zinc-900/50 to-black/50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/30" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/45 to-transparent" />

          {activeImage.type === "video" ? (
            <video
              key={activeImage.src}
              src={activeImage.src}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="relative z-10 h-auto max-h-125 w-auto object-contain"
            />
          ) : (
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={no ? activeImage.altNo ?? activeImage.alt : activeImage.alt}
              width={1400}
              height={800}
              priority
              className="relative z-10 h-auto max-h-125 w-auto animate-fadeImage object-contain transition duration-700 hover:scale-[1.02]"
            />
          )}
        </div>

        <div className="absolute bottom-16 left-5 rounded-2xl border border-white/15 bg-black/40 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">{categoryTitle}</p>
          <h3 className="mt-1 text-2xl font-bold text-white">{no ? activeImage.altNo ?? activeImage.alt : activeImage.alt}</h3>
          {activeImage.year && (
            <p className="mt-1 text-sm text-white/55">
              {no ? `Tegnet i ${activeImage.year}` : `Drawn in ${activeImage.year}`}
            </p>
          )}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-3xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
          aria-label={no ? "Forrige element" : "Previous item"}
          title={no ? "Forrige element" : "Previous item"}
        >
          ‹
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-3xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
          aria-label={no ? "Neste element" : "Next item"}
          title={no ? "Neste element" : "Next item"}
        >
          ›
        </button>

        <div className="mt-6 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`${no ? "Gå til bilde" : "Go to image"} ${index + 1}`}
              title={`${no ? "Gå til bilde" : "Go to image"} ${index + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "scale-125 bg-white shadow-[0_0_15px_rgba(255,255,255,0.45)]"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
