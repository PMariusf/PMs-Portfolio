"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipBack, SkipForward, Volume1, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

type Track = {
  title: string;
  artist: string;
  file: string;
  cover: string;
  poster: string;
  /** Lengde i sekunder, vises i listen før sangen er lastet */
  duration?: number;
  /** false = bare lyd (vis plakatbilde i stedet for video) */
  video: boolean;
  note?: { no: string; en: string };
  link?: { href: string; no: string; en: string };
};

const media = (name: string) => `/media/${encodeURIComponent(name)}.mp4`;

const tracks: Track[] = [
  {
    title: "Out of the Blue",
    artist: "Elísa",
    file: "https://foyner.no/images/music/ayline/Elisra/Out%20of%20the%20Blue.mp3",
    cover: "/media/covers/elisa-out-of-the-blue.webp",
    poster: "/media/posters/elisa-out-of-the-blue.webp",
    video: false,
    note: {
      no: "Her ville jeg fange øyeblikket når blikkene møtes på dansegulvet, med korte tekstlinjer og et refreng man kan synge med på.",
      en: "I wanted to capture that moment when two people catch each other’s eye on the dance floor, with short lines and a chorus you can sing along to.",
    },
    link: { href: "https://foyner.no/elisa#music", no: "Mer musikk fra Elísa", en: "More music from Elísa" },
  },
  { title: "Hungry Touch", artist: "Marius", file: media("Hungry Touch"), cover: "/media/covers/hungry-touch.webp", poster: "/media/posters/hungry-touch.webp", duration: 230, video: true },
  { title: "Halfway Up", artist: "Marius", file: media("Halfway Up"), cover: "/media/covers/halfway-up.webp", poster: "/media/posters/halfway-up.webp", duration: 206, video: true },
  { title: "Light Me Up Again", artist: "Marius", file: media("Light me up again"), cover: "/media/covers/light-me-up-again.webp", poster: "/media/posters/light-me-up-again.webp", duration: 193, video: true },
  { title: "Set the Dark on Fire", artist: "Marius", file: media("Set the Dark on Fire"), cover: "/media/covers/set-the-dark-on-fire.webp", poster: "/media/posters/set-the-dark-on-fire.webp", duration: 338, video: true },
  { title: "Midnight Lingers", artist: "Marius", file: media("Midnight Lingers"), cover: "/media/covers/midnight-lingers.webp", poster: "/media/posters/midnight-lingers.webp", duration: 242, video: true },
  { title: "I'll Hold On to What We Had", artist: "Marius", file: media("I ll Hold on to What We Had"), cover: "/media/covers/i-ll-hold-on-to-what-we-had.webp", poster: "/media/posters/i-ll-hold-on-to-what-we-had.webp", duration: 165, video: true },
  { title: "Itj Stopp Mæ", artist: "Marius", file: media("Itj Stopp Mæ"), cover: "/media/covers/itj-stopp-mae.webp", poster: "/media/posters/itj-stopp-mae.webp", duration: 237, video: true },
  { title: "Rolig musikk fyller natten", artist: "Marius", file: media("Rolig musikk fyller natten, (Remastered)"), cover: "/media/covers/rolig-musikk-fyller-natten-remastered.webp", poster: "/media/posters/rolig-musikk-fyller-natten-remastered.webp", duration: 217, video: true },
  { title: "Final Night", artist: "Marius", file: media("final night"), cover: "/media/covers/final-night.webp", poster: "/media/posters/final-night.webp", duration: 120, video: true },
  { title: "Fire (Extend)", artist: "Marius", file: media("Fire (Extend)"), cover: "/media/covers/fire-extend.webp", poster: "/media/posters/fire-extend.webp", duration: 129, video: true },
  { title: "Enter the Dragon", artist: "Marius", file: media("Enter the dragon"), cover: "/media/covers/enter-the-dragon.webp", poster: "/media/posters/enter-the-dragon.webp", duration: 299, video: true },
  { title: "Light Breaks Through the Night", artist: "Marius", file: media("Light breaks through the night"), cover: "/media/covers/light-breaks-through-the-night.webp", poster: "/media/posters/light-breaks-through-the-night.webp", duration: 151, video: true },
  { title: "Stund er her", artist: "Marius", file: media("Stund er her"), cover: "/media/covers/stund-er-her.webp", poster: "/media/posters/stund-er-her.webp", duration: 239, video: true },
  { title: "Far From Me", artist: "Marius", file: media("Far From Me"), cover: "/media/covers/far-from-me.webp", poster: "/media/posters/far-from-me.webp", duration: 259, video: true },
];

const formatTime = (time?: number) => {
  if (!time || !Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

function Equalizer({ playing }: { playing: boolean }) {
  return (
    <span className="flex h-3.5 items-end gap-[3px]" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="pm-eq w-[3px] rounded-full bg-white"
          style={{ animationDelay: `${i * -0.35}s`, animationPlayState: playing ? "running" : "paused", height: playing ? undefined : "35%" }}
        />
      ))}
    </span>
  );
}

export default function Music() {
  const { language } = useLanguage();
  const no = language === "no";

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const autoplayNext = useRef(false);

  const track = tracks[current];
  const shownDuration = duration || track.duration || 0;
  const progress = shownDuration ? Math.min(100, (currentTime / shownDuration) * 100) : 0;

  // Last inn ny sang når den byttes, og fortsett å spille hvis vi spilte fra før
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.load();
    if (autoplayNext.current) player.play().catch(() => setIsPlaying(false));
  }, [current]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.volume = volume;
    player.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    if (player.paused) player.play().catch(() => setIsPlaying(false));
    else player.pause();
  };

  const select = (index: number, play = isPlaying) => {
    autoplayNext.current = play;
    setCurrentTime(0);
    setDuration(0);
    if (index === current) {
      if (play) playerRef.current?.play().catch(() => setIsPlaying(false));
      return;
    }
    setCurrent(index);
  };

  const next = () => select((current + 1) % tracks.length);
  const previous = () => {
    const player = playerRef.current;
    // Som i vanlige spillere: første trykk går til starten av sangen
    if (player && player.currentTime > 3) {
      player.currentTime = 0;
      return;
    }
    select(current === 0 ? tracks.length - 1 : current - 1);
  };

  const seek = (value: number) => {
    const player = playerRef.current;
    if (!player || !shownDuration) return;
    player.currentTime = value;
    setCurrentTime(value);
  };

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
      <style>{`
        @keyframes pm-eq { 0%, 100% { height: 30%; } 50% { height: 100%; } }
        .pm-eq { height: 30%; animation: pm-eq 0.9s ease-in-out infinite; }
        .pm-eq:nth-child(2) { animation-duration: 0.7s; }
        .pm-eq:nth-child(3) { animation-duration: 1.1s; }
        @media (prefers-reduced-motion: reduce) { .pm-eq { animation: none; height: 60%; } }
        .pm-range { -webkit-appearance: none; appearance: none; background: transparent; cursor: pointer; }
        .pm-range::-webkit-slider-runnable-track { height: 4px; border-radius: 999px; background: linear-gradient(to right, rgba(255,255,255,0.9) var(--pm-fill), rgba(255,255,255,0.14) var(--pm-fill)); }
        .pm-range::-moz-range-track { height: 4px; border-radius: 999px; background: linear-gradient(to right, rgba(255,255,255,0.9) var(--pm-fill), rgba(255,255,255,0.14) var(--pm-fill)); }
        .pm-range::-webkit-slider-thumb { -webkit-appearance: none; height: 12px; width: 12px; margin-top: -4px; border-radius: 999px; background: #fff; opacity: 0; transition: opacity .2s; }
        .pm-range::-moz-range-thumb { height: 12px; width: 12px; border: 0; border-radius: 999px; background: #fff; opacity: 0; transition: opacity .2s; }
        .pm-range:hover::-webkit-slider-thumb, .pm-range:focus-visible::-webkit-slider-thumb { opacity: 1; }
        .pm-range:hover::-moz-range-thumb, .pm-range:focus-visible::-moz-range-thumb { opacity: 1; }
      `}</style>

      {/* Stemningsfarge fra coveret til sangen som spilles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image key={track.cover} src={track.cover} alt="" fill sizes="10vw" className="scale-125 object-cover opacity-35 blur-3xl saturate-150 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-linear-to-br from-black/30 via-black/60 to-black/85" />
      </div>

      <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12 lg:p-10">
        {/* "Skjerm": lyrikkvideoen til sangen */}
        <div className="mx-auto w-full max-w-[210px] sm:max-w-[260px] lg:max-w-none">
          <button
            type="button"
            onClick={togglePlay}
            className="group relative block aspect-[9/16] w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
            aria-label={isPlaying ? (no ? "Pause" : "Pause") : no ? "Spill av" : "Play"}
          >
            <video
              ref={playerRef}
              poster={track.poster}
              preload="none"
              playsInline
              className={`h-full w-full object-cover ${track.video ? "" : "opacity-0"}`}
              onLoadedMetadata={(e) => setDuration(Number.isFinite(e.currentTarget.duration) ? e.currentTarget.duration : 0)}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => select((current + 1) % tracks.length, true)}
            >
              <source src={track.file} type={track.video ? "video/mp4" : "audio/mpeg"} />
            </video>

            {!track.video && (
              <Image src={track.poster} alt="" fill sizes="300px" className="object-cover" />
            )}

            <span
              className={`absolute inset-0 flex items-center justify-center bg-black/25 transition duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl backdrop-blur transition group-hover:scale-105">
                {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="ml-1 h-6 w-6 fill-current" />}
              </span>
            </span>
          </button>
        </div>

        {/* Info, kontroller og spilleliste */}
        <div className="flex min-w-0 flex-col">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            <Equalizer playing={isPlaying} />
            {isPlaying ? (no ? "Spilles nå" : "Now playing") : no ? "Klar til avspilling" : "Ready to play"}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{track.title}</h3>
          <p className="mt-1 text-white/55">{track.artist}</p>

          {track.note && <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">{no ? track.note.no : track.note.en}</p>}
          {track.link && (
            <a href={track.link.href} target="_blank" rel="noopener noreferrer" className="mt-2 w-fit text-sm text-white/80 underline underline-offset-4 transition hover:text-white">
              {no ? track.link.no : track.link.en}
            </a>
          )}

          {/* Fremdrift */}
          <div className="mt-7">
            <input
              type="range"
              min={0}
              max={shownDuration || 0}
              step={0.1}
              value={Math.min(currentTime, shownDuration || 0)}
              onChange={(e) => seek(Number(e.target.value))}
              className="pm-range h-3 w-full"
              style={{ ["--pm-fill" as string]: `${progress}%` }}
              aria-label={no ? "Posisjon i sangen" : "Song position"}
            />
            <div className="mt-1.5 flex justify-between text-[11px] tabular-nums text-white/45">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(shownDuration)}</span>
            </div>
          </div>

          {/* Kontroller */}
          <div className="mt-4 flex items-center gap-3">
            <button type="button" onClick={previous} className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white" aria-label={no ? "Forrige sang" : "Previous song"}>
              <SkipBack className="h-5 w-5 fill-current" />
            </button>
            <button type="button" onClick={togglePlay} className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105 active:scale-95" aria-label={isPlaying ? "Pause" : no ? "Spill av" : "Play"}>
              {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="ml-0.5 h-6 w-6 fill-current" />}
            </button>
            <button type="button" onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white" aria-label={no ? "Neste sang" : "Next song"}>
              <SkipForward className="h-5 w-5 fill-current" />
            </button>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <button type="button" onClick={() => setIsMuted((m) => !m)} className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white" aria-label={isMuted ? (no ? "Slå på lyd" : "Unmute") : no ? "Demp" : "Mute"}>
                <VolumeIcon className="h-4.5 w-4.5" />
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setVolume(v);
                  setIsMuted(v === 0);
                }}
                className="pm-range h-3 w-24"
                style={{ ["--pm-fill" as string]: `${(isMuted ? 0 : volume) * 100}%` }}
                aria-label={no ? "Volum" : "Volume"}
              />
            </div>
          </div>

          {/* Spilleliste */}
          <div className="mt-7 border-t border-white/10 pt-4">
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              {no ? `Alle sanger · ${tracks.length}` : `All songs · ${tracks.length}`}
            </p>
            <ol className="max-h-[21rem] space-y-0.5 overflow-y-auto pr-1 [scrollbar-color:rgba(255,255,255,0.15)_transparent] [scrollbar-width:thin]">
              {tracks.map((t, index) => {
                const active = index === current;
                return (
                  <li key={t.file}>
                    <button
                      type="button"
                      onClick={() => (active ? togglePlay() : select(index, true))}
                      aria-current={active ? "true" : undefined}
                      className={`group flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition ${
                        active ? "bg-white/10" : "hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="flex w-5 shrink-0 justify-center text-xs tabular-nums text-white/40">
                        {active ? <Equalizer playing={isPlaying} /> : index + 1}
                      </span>
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5">
                        <Image src={t.cover} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-sm font-medium ${active ? "text-white" : "text-white/80 group-hover:text-white"}`}>{t.title}</span>
                        <span className="block truncate text-xs text-white/40">{t.artist}</span>
                      </span>
                      <span className="shrink-0 text-xs tabular-nums text-white/35">{t.duration ? formatTime(t.duration) : ""}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
