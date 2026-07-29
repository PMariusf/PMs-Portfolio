import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Music from "../../components/Music";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "PM Studio",
  description: "Premium Photo & Video Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-black text-white">
        <style>{`
          main {
            background-color: transparent !important;
          }

          main > .fixed.inset-0.bg-black {
            display: none !important;
          }

          @keyframes liquidFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            33% {
              transform: translate3d(5vw, 4vh, 0) scale(1.05);
            }
            66% {
              transform: translate3d(-3vw, 7vh, 0) scale(0.97);
            }
          }

          @keyframes liquidFloatReverse {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            33% {
              transform: translate3d(-4vw, -3vh, 0) scale(0.97);
            }
            66% {
              transform: translate3d(4vw, -6vh, 0) scale(1.04);
            }
          }

          .animate-liquid {
            animation: liquidFloat 40s ease-in-out infinite;
            will-change: transform;
          }

          .animate-liquid-delay {
            animation: liquidFloatReverse 52s ease-in-out infinite;
            animation-delay: -14s;
            will-change: transform;
          }

          .animate-liquid-slow {
            animation: liquidFloat 65s ease-in-out infinite;
            animation-delay: -24s;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-liquid,
            .animate-liquid-delay,
            .animate-liquid-slow {
              animation: none;
            }
          }
        `}</style>

        {/* GLOBAL ANIMATED GRADIENT BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[linear-gradient(180deg,#030407_0%,#070b12_48%,#030405_100%)]">
          <div className="absolute left-[-12%] top-[-15%] h-150 w-150 animate-liquid rounded-full bg-blue-500/8 blur-[170px]" />
          <div className="absolute bottom-[-15%] right-[-8%] h-150 w-137.5 animate-liquid-delay rounded-full bg-cyan-500/8 blur-[170px]" />
          <div className="absolute bottom-[12%] left-[5%] h-150 w-95 animate-liquid-slow rounded-full bg-indigo-500/6 blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_70%,rgba(0,0,0,0.42)_100%)]" />
        </div>

        {/* PAGE CONTENT */}
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>

        {/* MUSIC PLAYER */}
        <Music />
      </body>
    </html>
  );
}
