"use client";

import { useEffect, useRef, useState } from "react";

const songs = [
  { title: "Hungry Touch",
     artist: "Marius", 
     file: "/media/Hungry Touch.mp4", 
     gradient: "from-pink-500/25 via-purple-500/15 to-black" 
    },
  { title: "Halfway Up", artist: "Marius", 
     file: "/media/Halfway Up.mp4", 
     gradient: "from-blue-500/25 via-cyan-500/15 to-black" 
  },
  { title: "Light me up again", artist: "Marius", 
     file: "/media/Light me up again.mp4", 
     gradient: "from-red-500/25 via-orange-500/15 to-black" 
  },
  { title: "Set the Dark on Fire", artist: "Marius", 
     file: "/media/Set the Dark on Fire.mp4", 
     gradient: "from-red-500/25 via-orange-500/15 to-black" 
},
  { title: "Midnight Lingers", artist: "Marius", 
     file: "/media/Midnight Lingers.mp4", 
     gradient: "from-violet-500/25 via-fuchsia-500/15 to-black" 
  },
  { title: "I'll Hold on to What We Had", artist: "Marius", 
     file: "/media/I ll Hold on to What We Had.mp4", 
     gradient: "from-rose-500/25 via-purple-500/15 to-black" 
  },
  { title: "Itj Stopp Mæ", artist: "Marius", 
     file: "/media/Itj Stopp Mæ.mp4", 
     gradient: "from-green-500/25 via-emerald-500/15 to-black" 
  },
  { title: "Rolig musikk fyller natten", artist: "Marius", 
     file: "/media/Rolig musikk fyller natten, (Remastered).mp4", 
     gradient: "from-indigo-500/25 via-violet-500/15 to-black"
 },
  { title: "Final Night", artist: "Marius", 
     file: "/media/final night.mp4", 
     gradient: "from-slate-500/25 via-zinc-500/15 to-black"
  },
  { title: "Fire (Extend)", artist: "Marius", 
     file: "/media/Fire (Extend).mp4", 
     gradient: "from-red-600/25 via-orange-500/15 to-black"
  },
  { title: "Enter the Dragon", artist: "Marius", 
     file: "/media/Enter the dragon.mp4", 
     gradient: "from-amber-500/25 via-red-500/15 to-black" 
  },
  { title: "Light Breaks Through the Night", artist: "Marius", 
     file: "/media/Light breaks through the night.mp4", 
     gradient: "from-cyan-500/25 via-sky-500/15 to-black" 
  },
  { title: "Stund er her", artist: "Marius", 
     file: "/media/Stund er her.mp4", 
     gradient: "from-emerald-500/25 via-teal-500/15 to-black" 
  },
];

export default function Music() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [bars, setBars] = useState<number[]>(Array(24).fill(8));

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationRef = useRef<number | null>(null);

  const currentTrack = songs[currentSong];
  const sourceType = currentTrack.file.toLowerCase().endsWith(".mp3")
    ? "audio/mpeg"
    : "video/mp4";

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startVisualizer = () => {
    const analyser = analyserRef.current;
    if (!analyser || animationRef.current) return;

    const values = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      analyser.getByteFrequencyData(values);
      setBars(
        Array.from(values)
          .slice(0, 24)
          .map((value) => Math.max(5, Math.min(34, value / 7)))
      );
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const setupAudio = () => {
    const player = playerRef.current;
    if (!player || audioContextRef.current) return;

    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(player);

    analyser.fftSize = 64;
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    startVisualizer();
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
    const shouldContinuePlaying = isPlaying;
    setCurrentSong(index);
    setCurrentTime(0);
    setDuration(0);

    window.setTimeout(() => {
      playerRef.current?.load();
      if (shouldContinuePlaying) playSong();
    }, 80);
  };

  const nextSong = () => selectSong((currentSong + 1) % songs.length);
  const previousSong = () =>
    selectSong(currentSong === 0 ? songs.length - 1 : currentSong - 1);

  const seek = (value: number) => {
    const player = playerRef.current;
    if (!player || !duration) return;
    player.currentTime = value;
    setCurrentTime(value);
  };

  const changeVolume = (value: number) => {
    const player = playerRef.current;
    setVolume(value);
    setIsMuted(value === 0);
    if (player) {
      player.volume = value;
      player.muted = value === 0;
    }
  };

  const toggleMute = () => {
    const player = playerRef.current;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (player) player.muted = nextMuted;
  };

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.volume = volume;
    player.load();
  }, [currentSong, volume]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      audioContextRef.current?.close();
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:w-88">
      <div
        className={`overflow-hidden rounded-[26px] border border-white/8 bg-linear-to-br ${currentTrack.gradient} shadow-[0_18px_60px_rgba(0,0,0,0.48)] backdrop-blur-2xl transition-all duration-300`}
      >
        <div className="bg-black/45 p-3.5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/8 text-lg transition hover:bg-white/12"
              aria-label={isOpen ? "Close music player" : "Open music player"}
            >
              <span className={isPlaying ? "animate-pulse" : ""}>♫</span>
              <span className="absolute inset-x-2 bottom-1 h-px bg-white/20" />
            </button>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className="min-w-0 flex-1 text-left"
            >
              <p className="truncate text-sm font-semibold text-white">
                {currentTrack.title}
              </p>
              <p className="mt-0.5 truncate text-xs text-white/45">
                {currentTrack.artist} · {currentSong + 1} of {songs.length}
              </p>
            </button>

            <button
              onClick={togglePlay}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-base text-black transition hover:scale-105 active:scale-95"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/55 transition hover:bg-white/8 hover:text-white"
              aria-label={isOpen ? "Collapse player" : "Expand player"}
            >
              <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>⌃</span>
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="w-9 text-right text-[10px] tabular-nums text-white/40">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => seek(Number(event.target.value))}
              className="h-1 flex-1 cursor-pointer accent-white"
              aria-label="Song progress"
            />
            <span className="w-9 text-[10px] tabular-nums text-white/40">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-white/6 bg-black/55 px-4 pb-4 pt-3">
              <div className="flex h-12 items-end justify-center gap-1 rounded-2xl bg-white/[0.025] px-3 py-2">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className="w-1 rounded-full bg-white/55 transition-[height] duration-100"
                    style={{ height: `${isPlaying ? height : 5}px` }}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-5">
                <button
                  onClick={previousSong}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-white/60 transition hover:bg-white/8 hover:text-white"
                  aria-label="Previous song"
                >
                  ‹‹
                </button>
                <button
                  onClick={togglePlay}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition hover:scale-105 active:scale-95"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "Ⅱ" : "▶"}
                </button>
                <button
                  onClick={nextSong}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-white/60 transition hover:bg-white/8 hover:text-white"
                  aria-label="Next song"
                >
                  ››
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/[0.025] px-3 py-2">
                <button
                  onClick={toggleMute}
                  className="w-7 text-sm text-white/60 transition hover:text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? "×" : volume < 0.5 ? "◔" : "◕"}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={(event) => changeVolume(Number(event.target.value))}
                  className="h-1 flex-1 cursor-pointer accent-white"
                  aria-label="Volume"
                />
              </div>

              <div className="mt-4 max-h-48 space-y-1 overflow-y-auto pr-1">
                {songs.map((song, index) => (
                  <button
                    key={song.file}
                    onClick={() => selectSong(index)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                      currentSong === index
                        ? "bg-white/10 text-white"
                        : "text-white/55 hover:bg-white/5 hover:text-white/85"
                    }`}
                  >
                    <span className="w-5 text-center text-xs tabular-nums">
                      {currentSong === index && isPlaying ? "•" : index + 1}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs font-medium">
                      {song.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                      {song.file.endsWith(".mp3") ? "MP3" : "Video"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <video
          ref={playerRef}
          className="hidden"
          preload="metadata"
          onLoadedMetadata={() => {
            const player = playerRef.current;
            if (player) setDuration(Number.isFinite(player.duration) ? player.duration : 0);
          }}
          onTimeUpdate={() => {
            const player = playerRef.current;
            if (!player) return;
            setCurrentTime(player.currentTime);
            setDuration(Number.isFinite(player.duration) ? player.duration : 0);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={nextSong}
        >
          <source src={currentTrack.file} type={sourceType} />
        </video>
      </div>
    </div>
  );
}
