export default function Music() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="relative mx-auto w-[85%] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/media/Hungry Touch.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Music Project
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            My Song
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-white/70">
            A creative music project with cinematic visuals and atmospheric sound.
          </p>

          {/* Spotify/SoundCloud style card */}
          <div className="mt-10 max-w-xl rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-2xl bg-white/20 shadow-xl" />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  My Song Title
                </h3>
                <p className="text-white/60">
                  Marius • Portfolio Track
                </p>
              </div>
            </div>

            <audio controls className="mt-6 w-full">
              <source src="/media/mysong.mp4" type="audio/mp4" />
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}