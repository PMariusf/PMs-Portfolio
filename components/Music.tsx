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
    file: "/media/Halfway Up.mp4",
    gradient: "from-blue-500/30 via-cyan-500/20 to-black",
  },
  {
    title: "I ll Hold on to What We Had",
    artist: "Marius",
    file: "/media/I ll Hold on to What We Had.mp4",
    gradient: "from-red-500/30 via-orange-500/20 to-black",
  },
  {
    title: "Itj Stopp Mæ",
    artist: "Marius",
    file: "/media/Itj Stopp Mæ.mp4",
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
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationRef = useRef<number | null>(null);

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";

    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${min}:${sec}`;
  };

  const animateBars = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const animate = () => {
      analyser.getByteFrequencyData(dataArray);

      const newBars = Array.from(dataArray)
        .slice(0, 32)
        .map((value) => Math.max(8, Math.min(42, value / 6)));

      setBars(newBars);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const setupAudio = () => {
    const player = playerRef.current;
    if (!player || audioContextRef.current) return;

    const audioContext = new window.AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(player);

    analyser.fftSize = 64;

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyserRef.current = analyser;
    audioContextRef.current = audioContext;

    animateBars();
  };

  const playSong = async () => {
    const player = playerRef.current;
    if (!player) return;

    try {
      setupAudio();

      if (audioContextRef.current?.state === "suspended") {
        await audioContextRef.current.resume();
      }

      await player.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
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

    setTimeout(() => {
      playSong();
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

  useEffect(() => {
    playerRef.current?.load();
  }, [currentSong]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      audioContextRef.current?.close();
    };
  }, []);

  return (
    <div className="fixed bottom-3 right-3 z-50 w-[250px] sm:w-[270px] md:w-[290px]">
      <div
        className={`rounded-[1.5rem] border border-white/20 bg-gradient-to-br ${songs[currentSong].gradient} p-3 shadow-2xl backdrop-blur-2xl sm:rounded-[2rem] sm:p-4`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white transition active:scale-90 hover:bg-white/20 sm:h-9 sm:w-9"
            aria-label="Toggle music player"
          >
            🎵
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white sm:text-sm">
              {songs[currentSong].title}
            </p>

            {!isOpen && (
              <p className="text-[10px] text-white/60 sm:text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            )}
          </div>

          <button
            onClick={togglePlay}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm text-white shadow-lg transition active:scale-90 hover:bg-white/25 sm:h-10 sm:w-10 sm:text-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-white transition active:scale-90 hover:bg-white/20 sm:h-10 sm:w-10 sm:text-lg"
            aria-label={isOpen ? "Close player" : "Open player"}
          >
            {isOpen ? "⌄" : "⌃"}
          </button>
        </div>

        <div className="mt-2 h-1.5 rounded-full bg-white/10 sm:mt-3 sm:h-2">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        <video
          ref={playerRef}
          controls={isOpen}
          className={
            isOpen
              ? "mt-2 max-h-[110px] w-full rounded-xl object-cover"
              : "h-0 w-0 opacity-0"
          }
          onTimeUpdate={() => {
            const player = playerRef.current;
            if (!player) return;

            const safeDuration = Number.isFinite(player.duration)
              ? player.duration
              : 0;

            setCurrentTime(player.currentTime);
            setDuration(safeDuration);

            setProgress(
              safeDuration > 0
                ? (player.currentTime / safeDuration) * 100
                : 0
            );
          }}
          onEnded={nextSong}
        >
          <source src={songs[currentSong].file} type="video/mp4" />
        </video>

        {isOpen && (
          <>
            <div className="mt-2 flex justify-between text-[10px] text-white/60 sm:mt-3 sm:text-xs">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <div className="mt-3 flex h-10 items-end justify-center gap-[3px] overflow-hidden rounded-2xl bg-black/20 px-3 py-4 sm:mt-5 sm:h-20 sm:gap-[4px] sm:px-4 md:h-12">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="w-0.5 rounded-full bg-white/80 transition-all duration-100 sm:w-"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-center gap-3 sm:mt-4 sm:gap-4">
              <button
                onClick={previousSong}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base text-white transition active:scale-90 hover:bg-white/20 sm:h-11 sm:w-11 sm:text-xl"
                aria-label="Previous song"
              >
                ⏮
              </button>

              <button
                onClick={togglePlay}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl text-white shadow-lg transition active:scale-90 hover:bg-white/25 sm:h-13 sm:w-13 sm:text-2xl"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>

              <button
                onClick={nextSong}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base text-white transition active:scale-90 hover:bg-white/20 sm:h-11 sm:w-11 sm:text-xl"
                aria-label="Next song"
              >
                ⏭
              </button>
            </div>

            <div className="mt-3 max-h-[120px] overflow-y-auto rounded-xl bg-black/20 p-2 sm:mt-4 sm:max-h-[150px]">
              {songs.map((song, index) => (
                <button
                  key={song.file}
                  onClick={() => selectSong(index)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-xs transition sm:text-sm ${
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

/* "use client";



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
  const [bars, setBars] = useState<number[]>(Array(32).fill(12));

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${min}:${sec}`;
  };

  const setupAudio = () => {
    const player = playerRef.current;
    if (!player || audioContextRef.current) return;

    const audioContext = new window.AudioContext();
    const analyser = audioContext.createAnalyser();
    const source =
      audioContext.createMediaElementSource(player);

    analyser.fftSize = 64;

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyserRef.current = analyser;
    audioContextRef.current = audioContext;

    animateBars();
  };

  const animateBars = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(
      analyser.frequencyBinCount
    );

    const animate = () => {
      analyser.getByteFrequencyData(dataArray);

      const newBars = Array.from(dataArray)
        .slice(0, 32)
        .map((value) =>
          Math.max(12, Math.min(58, value / 5))
        );

      setBars(newBars);

      requestAnimationFrame(animate);
    };

    animate();
  };

  const playSong = async () => {
    const player = playerRef.current;
    if (!player) return;

    setupAudio();

    if (
      audioContextRef.current?.state ===
      "suspended"
    ) {
      await audioContextRef.current.resume();
    }

    await player.play();
    setIsPlaying(true);
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

    setTimeout(() => {
      playSong();
    }, 100);
  };

  const nextSong = () => {
    const next =
      currentSong === songs.length - 1
       /* ? 0
        : currentSong + 1;

    selectSong(next);
  };

  const previousSong = () => {
    const previous =
      currentSong === 0
       /* ? songs.length - 1
        : currentSong - 1;

    selectSong(previous);
  };

  useEffect(() => {
    playerRef.current?.load();
  }, [currentSong]);

  return (
    <div className="fixed bottom-6 right-4 z-50 w-[calc(100%-2.5rem)] max-w-85 md:bottom-6 md:right-6 md:top-auto md:w-85 md:translate-y-0">
      <div
        className={`rounded-4xl border border-white/20 bg-linear-to-br ${songs[currentSong].gradient} p-4 shadow-2xl backdrop-blur-2xl`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-white transition active:scale-90"
          >
            🎵
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {songs[currentSong].title}
            </p>

            {!isOpen && (
              <p className="text-xs text-white/60">
                {formatTime(currentTime)} /{" "}
                {formatTime(duration)}
              </p>
            )}
          </div>

          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg text-white shadow-lg transition active:scale-90 hover:bg-white/25"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition active:scale-90 hover:bg-white/20"
          >
            {isOpen ? "⌄" : "⌃"}
          </button>
        </div>

        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        <video
          ref={playerRef}
          controls={isOpen}
          className={
            isOpen
             / ? "mt-4 w-full rounded-xl"
              : "h-0 w-0 opacity-0"
          }
          onTimeUpdate={() => {
            const player = playerRef.current;
            if (!player) return;

            setCurrentTime(player.currentTime);
            setDuration(player.duration);

            setProgress(
              (player.currentTime /
                player.duration) *
                100
            );
          }}
          onEnded={nextSong}
        >
          <source
            src={songs[currentSong].file}
            type="video/mp4"
          />
        </video>

        {isOpen && (
          <>
            <div className="mt-3 flex justify-between text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <div className="mt-5 flex h-24 items-end justify-center gap-[4px] overflow-hidden rounded-2xl bg-black/20 px-4 py-5">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="w-[3px] rounded-full bg-white/80 transition-all duration-100"
                  style={{
                    height: `${height}px`,
                  }}
                />
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={previousSong}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition active:scale-90 hover:bg-white/20"
              >
                ⏮
              </button>

              <button
                onClick={togglePlay}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-2xl text-white shadow-lg transition active:scale-90 hover:bg-white/25"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>

              <button
                onClick={nextSong}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition active:scale-90 hover:bg-white/20"
              >
                ⏭
              </button>
            </div>

            <div className="mt-4 max-h-[150px] overflow-y-auto rounded-xl bg-black/20 p-2">
              {songs.map((song, index) => (
                <button
                  key={song.file}
                  onClick={() =>
                    selectSong(index)
                  }
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    currentSong === index
                     /* ? "bg-white/20 text-white" 
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
} */