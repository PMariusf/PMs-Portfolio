
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
        {/* GLOBAL LIQUID BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] animate-liquid rounded-full bg-purple-500/50 blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[550px] w-[550px] animate-liquid-delay rounded-full bg-cyan-500/45 blur-[80px]" />
          <div className="absolute left-[35%] top-[25%] h-[450px] w-[450px] animate-liquid-slow rounded-full bg-pink-500/40 blur-[80px]" />
          <div className="absolute bottom-[20%] left-[5%] h-[380px] w-[380px] animate-liquid-delay rounded-full bg-indigo-500/40 blur-[70px]" />
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