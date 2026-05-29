"use client";

import { useEffect, useRef, useState } from "react";

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
    title: "I ll Hold on to What We Had",
    artist: "Marius",
    file: "/media/I ll Hold on to What We Had.mp4",
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
  {
    title: "Final Night",
    artist: "Marius",
    file: "/media/final night.mp4",
    gradient: "from-slate-500/30 via-zinc-500/20 to-black",
  },
  {
    title: "Fire (Extend)",
    artist: "Marius",
    file: "/media/Fire (Extend).mp4",
    gradient: "from-red-600/30 via-orange-500/20 to-black",
  },
  {
    title: "Enter the Dragon",
    artist: "Marius",
    file: "/media/Enter the dragon.mp4",
    gradient: "from-amber-500/30 via-red-500/20 to-black",
  },
  {
    title: "Light Breaks Through the Night",
    artist: "Marius",
    file: "/media/Light breaks through the night,.mp4",
    gradient: "from-cyan-500/30 via-sky-500/20 to-black",
  },
  {
    title: "Stund er her",
    artist: "Marius",
    file: "/media/stund er her.mp4",
    gradient: "from-emerald-500/30 via-teal-500/20 to-black",
  },
];

export default function Music() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bars, setBars] = useState<number[]>(Array(32).fill(10));

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const formatTime = (time: number) => {
    if (!time || Number.isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const setupAudioVisualizer = () => {
    const player = playerRef.current;
    if (!player || audioContextRef.current) return;

    const AudioContextClass =
      window.AudioContext ||
      (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    const audioContext = new AudioContextClass();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(player);

    analyser.fftSize = 64;

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    sourceRef.current = source;
  };

  const animateVisualizer = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const update = () => {
      analyser.getByteFrequencyData(dataArray);

      const newBars = Array.from(dataArray).slice(0, 32).map((value) => {
        return Math.max(8, Math.min(46, value / 4));
      });

      setBars(newBars);

      requestAnimationFrame(update);
    };

    update();
  };

  const playSong = async () => {
    const player = playerRef.current;
    if (!player) return;

    setupAudioVisualizer();

    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }

    await player.play();
    setIsPlaying(true);
    animateVisualizer();
  };

  const togglePlay = async () => {
    const player = playerRef.current;
    if (!player) return;

    if (player.paused) {
      await playSong();
    } else {
      player.pause();
      setIsPlaying(false);
    }
  };

  const selectSong = (index: number) => {
    setCurrentSong(index);
    setProgress(0);
    setCurrentTime(0);

    setTimeout(() => {
      playSong();
    }, 120);
  };

  const nextSong = () => {
    const next = currentSong === songs.length - 1 ? 0 : currentSong + 1;
    selectSong(next);
  };

  const previousSong = () => {
    const previous = currentSong === 0 ? songs.length - 1 : currentSong - 1;
    selectSong(previous);
  };

  const handleTimeUpdate = () => {
    const player = playerRef.current;
    if (!player) return;

    setCurrentTime(player.currentTime);
    setDuration(player.duration || 0);

    if (player.duration) {
      setProgress((player.currentTime / player.duration) * 100);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const player = playerRef.current;
    if (!player || !duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;

    player.currentTime = percentage * duration;
  };

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    player.load();

    if (isPlaying) {
      setTimeout(() => {
        playSong();
      }, 120);
    }
  }, [currentSong]);

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-[340px] md:bottom-auto md:right-6 md:top-1/2 md:w-[340px] md:-translate-y-1/2">
      <div
        className={`rounded-[2rem] border border-white/20 bg-gradient-to-br ${songs[currentSong].gradient} p-4 shadow-2xl backdrop-blur-2xl transition-all duration-500`}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg text-white"
          >
            🎵
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {songs[currentSong].title}
            </p>
            {!isOpen && (
              <p className="text-xs text-white/60">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            )}
          </div>

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

        <div
          onClick={handleProgressClick}
          className="mt-3 h-2 cursor-pointer rounded-full bg-white/10"
        >
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <video
          ref={playerRef}
          controls={isOpen}
          className={isOpen ? "mt-4 w-full rounded-xl" : "h-0 w-0 opacity-0"}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={nextSong}
        >
          <source src={songs[currentSong].file} type="video/mp4" />
        </video>

        {isOpen && (
          <>
            <div className="mt-3 flex justify-between text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <div className="mt-5 flex h-14 items-end justify-center gap-[3px] overflow-hidden rounded-xl bg-black/20 p-3">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="w-[3px] rounded-full bg-white/80 transition-all duration-100"
                  style={{ height: `${height}px` }}
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
                onClick={togglePlay}
                className="rounded-full bg-white/10 px-5 py-2 text-white hover:bg-white/20"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button
                onClick={nextSong}
                className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              >
                ⏭
              </button>
            </div>

            <div className="mt-4 max-h-[150px] overflow-y-auto rounded-xl bg-black/20 p-2">
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