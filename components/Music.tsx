"use client";

import { useState } from "react";

const songs = [
  {
    title: "Hungry Touch",
    artist: "Marius",
    file: "/media/Hungry Touch.mp4",
  },
  {
    title: "Halfway up",
    artist: "Marius",
    file: "/media/Halfway up.mp4",
  },
  {
    title: "I'll Hold on to What We Had (Remastered).mp4",
    artist: "Marius",
    file: "/media/Ill Hold on to What We Had (Remastered).mp4",
  },
  {
    title: "itj stopp mæ.mp4",
    artist: "Marius",
    file: "/media/itj stopp mæ.mp4",
  },
  {
    title: "Rolig musikk fyller natten, (Remastered).mp4",
    artist: "Marius",
    file: "/media/Rolig musikk fyller natten, (Remastered).mp4",
  },
];

export default function Music() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const nextSong = () => {
    setCurrentSong((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1
    );
  };

  const previousSong = () => {
    setCurrentSong((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full border border-white/20 bg-black/50 px-5 py-4 text-white shadow-2xl backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
        >
          🎵
        </button>
      )}

      {isOpen && (
        <div className="w-[320px] rounded-[2rem] border border-white/20 bg-black/40 p-5 shadow-2xl backdrop-blur-2xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Music
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            >
              ×
            </button>
          </div>

          <h2 className="text-2xl font-bold text-white">
            {songs[currentSong].title}
          </h2>

          <p className="mt-1 text-sm text-white/60">
            {songs[currentSong].artist}
          </p>

          {/* Sound Waves */}
          <div className="mt-5 flex h-12 items-end justify-center gap-[3px] overflow-hidden rounded-xl bg-white/5 p-3">
            {Array.from({ length: 35 }).map((_, index) => (
              <span
                key={index}
                className="wave-bar-small w-[3px] rounded-full bg-white/70"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              />
            ))}
          </div>

          {/* Player */}
          <video
            key={songs[currentSong].file}
            controls
            className="mt-4 w-full rounded-xl"
          >
            <source
              src={songs[currentSong].file}
              type="video/mp4"
            />
          </video>

          {/* Controls */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={previousSong}
              className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            >
              ⏮
            </button>

            <button
              onClick={nextSong}
              className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            >
              ⏭
            </button>
          </div>

          {/* Playlist */}
          <div className="mt-4 max-h-[120px] overflow-y-auto rounded-xl bg-white/5 p-2">
            {songs.map((song, index) => (
              <button
                key={song.title}
                onClick={() => setCurrentSong(index)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                  currentSong === index
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:bg-white/10"
                }`}
              >
                <span>{song.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}