"use client";

import { ExternalLink, Github, Package } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live: string | null;
  image: string;
  npm: string | null;
};

/* ----------------------------- Tech chip ----------------------------- */

const Chip = ({ label }: { label: string }) => (
  <span className="whitespace-nowrap rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 group-hover:border-green-500/25 group-hover:bg-green-500/[0.07] group-hover:text-green-500 group-hover:shadow-[0_0_14px_-4px_rgba(34,197,94,0.5),inset_0_1px_0_rgba(187,247,208,0.15)]">
    {label}
  </span>
);

/* ---------------------------- Marquee row ---------------------------- */

const FADE =
  "[mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]";

type MarqueeRowProps = {
  items: string[];
  direction: "left" | "right";
  duration: number; // seconds for one full loop, higher = slower
};

const MarqueeRow = ({ items, direction, duration }: MarqueeRowProps) => {
  // Repeat short lists so one copy is always wider than the card,
  // otherwise a gap would show up before the loop restarts.
  const repeats = Math.max(1, Math.ceil(10 / items.length));
  const copy = Array.from({ length: repeats }, () => items).flat();

  return (
    <div className={`overflow-hidden py-1.5 ${FADE}`}>
      <motion.div
        className="flex w-max"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {/* Two identical copies; moving by exactly -50% makes the loop seamless */}
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0 gap-2 pr-2">
            {copy.map((t, i) => (
              <Chip key={`${n}-${i}`} label={t} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ---------------------------- Tech marquee --------------------------- */

const TechMarquee = ({ tech }: { tech: string[] }) => {
  const reduceMotion = useReducedMotion();

  // Split into two rows that travel in opposite directions
  const rowA = tech.filter((_, i) => i % 2 === 0);
  const rowB = tech.filter((_, i) => i % 2 === 1);

  // Screen readers get the real list once, not the looped copies
  const srList = (
    <ul className="sr-only">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );

  if (reduceMotion) {
    return (
      <>
        {srList}
        <div aria-hidden className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {srList}
      {/* -mx-6 lets the fade run to the card edges */}
      <div aria-hidden className="-mx-6 flex flex-col gap-1">
        {rowA.length > 0 && (
          <MarqueeRow items={rowA} direction="left" duration={32} />
        )}
        {rowB.length > 0 && (
          <MarqueeRow items={rowB} direction="right" duration={38} />
        )}
      </div>
    </>
  );
};

/* ---------------------------- Action link ---------------------------- */

const ActionLink = ({
  href,
  icon,
  children,
  primary = false,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  primary?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 ${
      primary
        ? "border-green-500/25 bg-green-500/10 text-green-500 hover:border-green-500/50 hover:bg-green-500/20 hover:shadow-[0_0_18px_-4px_rgba(34,197,94,0.55)]"
        : "border-white/10 bg-white/3 text-slate-400 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-500"
    }`}
  >
    {icon}
    {children}
  </a>
);

/* ------------------------------- Card -------------------------------- */

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_10px_40px_-16px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-green-500/30 hover:bg-[#0d0d0d] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Image sits inside the card in its own light-bordered frame */}
      <div className="p-3 pb-0">
        <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 z-10 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          {/* Top-edge highlight above the image so the frame reads as glass */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" />
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-500">
            {project.title}
          </h3>
          <p className="font-mono text-sm leading-relaxed tracking-tight text-slate-400">
            {project.description}
          </p>
        </div>

        <TechMarquee tech={project.tech} />

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <ActionLink href={project.repo} icon={<Github size={15} />}>
            Source_Code
          </ActionLink>

          {project.live && (
            <ActionLink
              href={project.live}
              icon={<ExternalLink size={15} />}
              primary
            >
              Live_Demo
            </ActionLink>
          )}

          {project.npm && (
            <ActionLink href={project.npm} icon={<Package size={15} />}>
              Registry
            </ActionLink>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
