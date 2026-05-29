import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "../../components/Projects";
import Interests from "../../components/Interests";
import Contact from "../../components/Contact";
import Music from "../../components/Music";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%),linear-gradient(135deg,#050505_0%,#111_35%,#8d8d8d_70%,#e5e5e5_100%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(125deg,transparent_0%,transparent_42%,rgba(255,255,255,0.28)_43%,transparent_44%,transparent_100%)]" />
      <div className="fixed left-0 top-20 h-px w-full bg-white/30" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
       
        <Music />
        
        <Interests />
        <Contact />
      </div>
    </main>
  );
}