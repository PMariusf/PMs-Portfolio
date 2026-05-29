"use client";

import { useRef, useState } from "react";

const songs = [
  {
    title: "Hungry Touch",
    artist: "Marius",
    file: "/media/Hungry Touch.mp4",
    gradient: "from-pink-500/30 via-purple-500/20 to-black",
  },
  {
    title: "Halfway Up",
    artist: "Marius",
    file: "/media/Halfway up.mp4",
    gradient: "from-blue-500/30 via-cyan-500/20 to-black",
  },
  {
    title: "I'll Hold on to What We Had",
    artist: "Marius",
    file: "/media/Ill Hold on to What We Had (Remastered).mp4",
    gradient: "from-red-500/30 via-orange-500/20 to-black",
  },
  {
    title: "Itj stopp mæ",
    artist: "Marius",
    file: "/media/itj stopp mæ.mp4",
    gradient: "from-green-500/30 via-emerald-500/20 to-black",
  },
  {
    title: "Rolig musikk fyller natten",
    artist: "Marius",
    file: "/media/Rolig musikk fyller natten, (Remastered).mp4",
    gradient: "from-indigo-500/30 via-violet-500/20 to-black",
  },
];

export default function Music() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = async () => {
    if (!playerRef.current) return;

    if (playerRef.current.paused) {
      await playerRef.current.play();
      setIsPlaying(true);
    } else {
      playerRef.current.pause();
      setIsPlaying(false);
    }
  };

  const selectSong = (index: number) => {
    setCurrentSong(index);

    setTimeout(async () => {
      if (!playerRef.current) return;
      await playerRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  const nextSong = () => {
    const next = currentSong === songs.length - 1 ? 0 : currentSong + 1;
    selectSong(next);
  };

  const previousSong = () => {
    const previous = currentSong === 0 ? songs.length - 1 : currentSong - 1;
    selectSong(previous);
  };

  return (
    <div className="fixed right-6 top-1/2 z-50 w-[320px] -translate-y-1/2">
      <div
        className={`rounded-[2rem] border border-white/20 bg-gradient-to-br ${songs[currentSong].gradient} p-4 shadow-2xl backdrop-blur-2xl`}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg text-white"
          >
            🎵
          </button>

          <p className="line-clamp-1 flex-1 text-sm font-semibold text-white">
            {songs[currentSong].title}
          </p>

          <button
            onClick={togglePlay}
            className="rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
          >
            {isOpen ? "×" : "Open"}
          </button>
        </div>

        <video
          ref={playerRef}
          key={songs[currentSong].file}
          controls={isOpen}
          className={isOpen ? "mt-4 w-full rounded-xl" : "h-0 w-0 opacity-0"}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={nextSong}
        >
          <source src={songs[currentSong].file} type="video/mp4" />
        </video>

        {isOpen && (
          <>
            <div className="mt-5 flex h-12 items-end justify-center gap-[3px] overflow-hidden rounded-xl bg-black/20 p-3">
              {Array.from({ length: 35 }).map((_, index) => (
                <span
                  key={index}
                  className="wave-bar-small w-[3px] rounded-full bg-white/80"
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              ))}
            </div>

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

            <div className="mt-4 max-h-[130px] overflow-y-auto rounded-xl bg-black/20 p-2">
              {songs.map((song, index) => (
                <button
                  key={song.file}
                  onClick={() => selectSong(index)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    currentSong === index
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  {song.title}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}