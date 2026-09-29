import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Music from "../../components/Music";
import LanguageProvider from "../../components/LanguageProvider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.p-marius.no"),
  title: {
    default: "Per Marius Føyner | Frontend Developer i Bergen",
    template: "%s | Per Marius Føyner",
  },
  description: "Portfolio for Per Marius Føyner, frontend developer i Bergen. Nettsider og digitale løsninger bygget med React, Next.js, TypeScript og Tailwind CSS, kombinert med webdesign og kreativt visuelt innhold.",
  keywords: ["Per Marius Føyner", "frontend developer Bergen", "frontend utvikler Bergen", "webutvikler Bergen", "Next.js", "React", "TypeScript", "Tailwind CSS", "webdesign", "portfolio"],
  authors: [{ name: "Per Marius Føyner", url: "https://www.p-marius.no" }],
  creator: "Per Marius Føyner",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "/",
    siteName: "Per Marius Føyner Portfolio",
    title: "Per Marius Føyner | Frontend Developer i Bergen",
    description: "Frontend-utvikling, webdesign og kreative digitale prosjekter fra Bergen.",
    images: [{ url: "/p-marius.png", alt: "Per Marius Føyner portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Per Marius Føyner | Frontend Developer i Bergen",
    description: "Frontend-utvikling, webdesign og kreative digitale prosjekter fra Bergen.",
    images: ["/p-marius.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Per Marius Føyner",
  url: "https://www.p-marius.no",
  image: "https://www.p-marius.no/p-marius.png",
  jobTitle: "Frontend Developer",
  address: { "@type": "PostalAddress", addressLocality: "Bergen", addressCountry: "NO" },
  knowsAbout: ["Frontend Development", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Design", "Figma"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" data-scroll-behavior="smooth" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="relative min-h-full overflow-x-hidden bg-black text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
        <style>{`
          main { background-color: transparent !important; }
          main > .fixed.inset-0.bg-black { display: none !important; }
          @keyframes liquidFloat { 0%, 100% { transform: translate3d(0,0,0) scale(1); } 33% { transform: translate3d(5vw,4vh,0) scale(1.05); } 66% { transform: translate3d(-3vw,7vh,0) scale(0.97); } }
          @keyframes liquidFloatReverse { 0%, 100% { transform: translate3d(0,0,0) scale(1); } 33% { transform: translate3d(-4vw,-3vh,0) scale(0.97); } 66% { transform: translate3d(4vw,-6vh,0) scale(1.04); } }
          .animate-liquid { animation: liquidFloat 40s ease-in-out infinite; will-change: transform; }
          .animate-liquid-delay { animation: liquidFloatReverse 52s ease-in-out infinite; animation-delay: -14s; will-change: transform; }
          .animate-liquid-slow { animation: liquidFloat 65s ease-in-out infinite; animation-delay: -24s; will-change: transform; }
          @media (prefers-reduced-motion: reduce) { .animate-liquid, .animate-liquid-delay, .animate-liquid-slow { animation: none; } }
        `}</style>
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[linear-gradient(180deg,#030407_0%,#070b12_48%,#030405_100%)]">
          <div className="absolute left-[-12%] top-[-15%] h-150 w-150 animate-liquid rounded-full bg-blue-500/8 blur-[170px]" />
          <div className="absolute bottom-[-15%] right-[-8%] h-150 w-137.5 animate-liquid-delay rounded-full bg-cyan-500/8 blur-[170px]" />
          <div className="absolute bottom-[12%] left-[5%] h-150 w-95 animate-liquid-slow rounded-full bg-indigo-500/6 blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_70%,rgba(0,0,0,0.42)_100%)]" />
        </div>
        <LanguageProvider>
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
          <Music />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
