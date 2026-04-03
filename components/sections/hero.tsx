import Image from "next/image";
import Link from "next/link";
import { Github, Download, Code2 } from "lucide-react";
import GithubCard from "../ui/githubCard";
import { SocialLink } from "../ui/SocialLink";
import { socials } from "@/data/socials";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center scroll-mt-20 pt-8 md:pt-18 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-slate-500 uppercase flex items-center gap-3">
              {/* <span className="h-px w-8 bg-green-500/50" /> */}
              Hello, I&apos;m{" "}
              <span className="font-bold tracking-normal text-green-500">
                Prateet Tiwari
              </span>
            </h2>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              Building <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">
                Scalable Systems.
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl font-mono tracking-tight">
            Full Stack Engineer based in Delhi, India. I architect
            <span className="text-green-500 font-medium">
              {" "}
              high-throughput backends
            </span>
            , low-latency{" "}
            <span className="text-green-500 font-medium">
              {" "}
              real-time systems
            </span>
            {""} and the infrastructure that powers modern applications.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://github.com/Prateet-Github"
              className="px-8 py-4 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 group"
              target="_blank"
            >
              Github
              <Github className="w-4 h-4" />
            </Link>

            <a
              href="/Prateet Tiwari.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-green-500" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            {socials
              .filter((social) => social.name !== "GitHub")
              .map((social) => (
                <SocialLink
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  label={social.name}
                />
              ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="relative hidden md:flex justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Minimal Green Corner Accent */}
            <div className="absolute -top-2 -right-2 w-24 h-24 border-t-2 border-r-2 border-green-500/50 rounded-tr-2xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-2 -left-2 w-24 h-24 border-b-2 border-l-2 border-green-500/50 rounded-bl-2xl group-hover:scale-110 transition-transform duration-500" />

            <div className="relative w-64 h-80 md:w-90 md:h-90 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
              <Image
                src="/drdoom.jpeg"
                alt="Prateet Tiwari"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="mt-24 max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-between px-4 mb-8">
          <div className="flex items-center gap-3 text-sm font-mono tracking-tighter text-green-500">
            <Code2 size={16} strokeWidth={2.5} />
            <span className="uppercase tracking-widest">
              Open Source Activity
            </span>
          </div>
          <div className="h-px flex-1 mx-8 bg-linear-to-r from-green-500/20 to-transparent" />
        </div>
        <GithubCard />
      </div>
    </section>
  );
};

export default Hero;
