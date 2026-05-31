import Navbar from "../../../components/Navbar";
import Contact from "../../../components/Contact";
import Projects from "../../../components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20">
        <Projects />
      </section>

      <Contact />
    </main>
  );
}