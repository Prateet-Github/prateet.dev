import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Download, Twitter } from "lucide-react";
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
      className="relative min-h-[90vh] flex items-center justify-center py-24 px-4"
    >
      {/* Optional: Very subtle grid background for industrial feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* === Left Column: Text Content === */}
        <div className="flex flex-col gap-8 order-2 md:order-1">
          {/* Headlines */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-slate-400 flex items-center gap-2">
              Hello, I'm <span className="text-white">Prateet Tiwari!</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Building <br />
              <span className="text-slate-300">Scalable Systems.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            Full-stack engineer based in Delhi, India. Focused on building
            <span className="text-slate-200 font-medium">
              {" "}
              Scalable Backend Systems
            </span>
            ,
            <span className="text-slate-200 font-medium">
              {" "}
              Real-Time Applications
            </span>{" "}
            and <span className="text-white font-medium">Developer Tools</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start items-center gap-4">
            <Link
              href="https://github.com/Prateet-Github"
              className="px-8 py-4 rounded bg-slate-200 text-black font-bold hover:bg-white/90 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <Github className="w-4 h-4 fill-bg" />
            </Link>

            <a
              href="/Prateet Tiwari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded border border-white/10 bg-bg text-white font-bold hover:bg-surface transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start lg:justify-start  items-center gap-8 pt-4 mt-4">
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
            <SocialLink
              href="https://x.com/prateet_tiwarii"
              icon={Twitter}
              label="X (Twitter)"
            />
          </div>
        </div>

        {/* === Right Column: Image === */}
        <div className="relative hidden order-1 md:order-2 md:flex lg:flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Clean, sharp border instead of glow */}
            <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
              <Image
                src="/pfp.jpg"
                alt="Prateet Tiwari"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-102"
                priority
              />
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
      className="group flex items-center gap-2 text-slate-500 hover:text-white/80 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </a>
  );
};

export default Hero;
