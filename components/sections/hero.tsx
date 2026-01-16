import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90h] flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* --- Background Ambient Glow --- */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* === Left Column: Text Content === */}
        <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
          {/* Status Badge */}
          {/* <div className="inline-flex items-center self-start gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Projects
          </div> */}

          {/* Headlines */}
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-medium text-slate-400">
              Hello, I'm <span className="text-slate-200">Prateet Tiwari</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building <br />
              <span className="">Scalable Systems</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            A 21-year-old Full-Stack Engineer based in Delhi. I specialize in
            <span className="text-slate-200 font-medium">
              {" "}
              distributed architecture
            </span>
            ,
            <span className="text-slate-200 font-medium">
              {" "}
              real-time infrastructure
            </span>
            , and developer tooling like the{" "}
            <span className="text-indigo-400 hover:underline cursor-pointer">
              Authly SDK
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="#projects"
              className="px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/resume.pdf" // Ensure you have this file in /public
              target="_blank"
              className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4 pt-8 border-t border-white/5">
            {/* <SocialLink
              href="https://github.com/Prateet-Github"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/prateet-tiwari"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:prateettiwari29@gmail.com"
              icon={Mail}
              label="Email"
            /> */}
          </div>
        </div>

        {/* === Right Column: Image === */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          {/* Glowing Card Effect */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* <div className="absolute inset-0 bg-linear-to-tr from-purple-500 to-indigo-500 rounded-2xl blur-2xl opacity-40 animate-pulse"></div> */}
            <div className="relative h-full w-full rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
              <Image
                src="/demo.png"
                alt="Prateet Tiwari"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Optional: Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-md border border-indigo-500/30">
                  <Github className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Current Focus
                  </div>
                  <div className="text-sm font-medium text-white">
                    Authly SDK v1.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Social Icons
// const SocialLink = ({ href, icon: Icon, label }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noreferrer"
//     className="group flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
//   >
//     <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
//     <span className="hidden md:inline text-sm font-medium">{label}</span>
//   </a>
// );

export default Hero;
