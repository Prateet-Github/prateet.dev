import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 bg-[#050505] border-b border-white/5"
    >
      {/* Optional: Very subtle grid background for industrial feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* === Left Column: Text Content === */}
        <div className="flex flex-col gap-8 order-2 md:order-1">
          {/* Headlines */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-slate-400 flex items-center gap-2">
              Hello, I'm <span className="text-white">Prateet Tiwari</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Building <br />
              <span className="text-slate-300">Scalable Systems.</span>
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
            <span className="text-white border-b border-slate-700 hover:border-white transition-colors cursor-pointer">
              Authly SDK
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start lg:justify-start  items-center gap-4">
            <Link
              href="https://github.com/Prateet-Github"
              className="px-8 py-4 rounded bg-gray-300 text-black font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              Github
              <Github className="w-4 h-4 fill-bg" />
            </Link>

            <a
              href="/Prateet Tiwari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded border border-white/10 bg-transparent text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start lg:justify-start  items-center gap-8 pt-4 border-t border-white/5 mt-4">
            <SocialLink
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
            />
          </div>
        </div>

        {/* === Right Column: Image === */}
        <div className="relative hidden order-1 md:order-2 md:flex lg:flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Clean, sharp border instead of glow */}
            <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
              <Image
                src="/demo.png"
                alt="Prateet Tiwari"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />

              {/* Minimalist Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#050505]/90 backdrop-blur-sm border border-white/10 rounded flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded border border-white/5">
                  <Terminal className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                    Current Focus
                  </div>
                  <div className="text-sm font-medium text-slate-200">
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

// Clean, minimal social link component

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </a>
  );
};

export default Hero;
