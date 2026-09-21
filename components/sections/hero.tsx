import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, Download, Code2 } from "lucide-react";
import GithubCard from "../ui/githubCard";
import TiltCard from "../ui/TiltCard";
import RotatingText from "../ui/RotatingText";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden px-4 pb-24 pt-8 md:pt-18"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left Side Content */}
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <p
              className="hero-rise font-mono text-base text-slate-400 md:text-lg"
              style={step(0)}
            >
              Hey, I&apos;m{" "}
              <span className="font-semibold text-green-500">
                Prateet Tiwari!
              </span>
            </p>

            <h1
              className="hero-rise text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl"
              style={step(1)}
            >
              Building <br />
              <RotatingText className="mt-2 text-6xl md:text-8xl" />
            </h1>
          </div>

          <p
            className="hero-rise max-w-xl font-mono text-lg leading-relaxed tracking-tight text-slate-400 md:text-xl"
            style={step(2)}
          >
            I&apos;m a Software Engineer and I primarily work with{" "}
            <span className="font-medium text-green-500">
              TypeScript, Go and Node.js
            </span>
            , with a strong interest in{" "}
            <span className="font-medium text-green-500">
              backend engineering, distributed systems and full-stack
              development
            </span>
            .
          </p>

          <div
            className="hero-rise flex flex-wrap items-center gap-4"
            style={step(3)}
          >
            <a
              href="https://github.com/Prateet-Github"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-bold text-black  transition-all hover:bg-green-400 active:translate-y-1 active:shadow-[0_0_24px_rgba(34,197,94,0.25)]"
            >
              GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/Prateet%20Tiwari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4 text-green-500" />
              Resume
            </a>
          </div>
        </div>

        {/* Right Side: layered 3D card */}
        <div
          className="hero-rise flex justify-center md:justify-end"
          style={step(2)}
        >
          <TiltCard className="group relative h-64 w-64 sm:h-80 sm:w-80 md:h-90 md:w-90">
            {/* Depth 1: green glow sitting behind the photo */}
            <div
              className="absolute inset-4 rounded-2xl bg-green-500/25 blur-2xl"
              style={{ transform: "translateZ(-80px)" }}
            />

            {/* Depth 2: the photo */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src="/drdoom.jpeg"
                alt="Prateet Tiwari"
                fill
                sizes="(min-width: 768px) 360px, (min-width: 640px) 320px, 256px"
                className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                priority
              />
            </div>

            {/* Depth 3: corner brackets float in front of the photo */}
            <div
              className="absolute -right-2 -top-2 h-24 w-24 rounded-tr-2xl border-r-2 border-t-2 border-green-500/60 transition-transform duration-500 group-hover:scale-110"
              style={{ transform: "translateZ(50px)" }}
            />
            <div
              className="absolute -bottom-2 -left-2 h-24 w-24 rounded-bl-2xl border-b-2 border-l-2 border-green-500/60 transition-transform duration-500 group-hover:scale-110"
              style={{ transform: "translateZ(50px)" }}
            />
          </TiltCard>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="relative z-10 mx-auto mt-24 w-full max-w-6xl">
        <div className="mb-8 flex items-center justify-between px-4">
          <div className="flex items-center gap-3 font-mono text-sm tracking-tighter text-green-500">
            <Code2 size={16} strokeWidth={2.5} />
            <span className="uppercase tracking-widest">
              Open Source Activity
            </span>
          </div>
          <div className="mx-8 h-px flex-1 bg-linear-to-r from-green-500/20 to-transparent" />
        </div>
        <GithubCard />
      </div>
    </section>
  );
};

export default Hero;
