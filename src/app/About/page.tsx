import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";

export default function About() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 text-white">
      <Navbar />
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="mt-6 max-w-2xl text-lg text-white/70">
        I am a frontend student passionate about design,
        React, Next.js and creative web experiences.
      </p>
      <Contact />
    </main>
  );
}