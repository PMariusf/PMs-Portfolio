import ImageCarousel from "@/components/ImageCarousel";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 pt-32 text-white">
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="mt-4 text-white/70">
        Here are some of my frontend projects.
      </p>

      <ImageCarousel />
    </main>
  );
}