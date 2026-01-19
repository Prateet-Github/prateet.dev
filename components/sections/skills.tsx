"use client";

import SkillCard from "../ui/skillCard";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiPrisma,
  SiPostgresql,
  SiLinux,
  SiNginx,
  SiGithubactions,
  SiVercel,
  SiRailway,
  SiJest,
  SiVitest,
  SiZod,
  SiSupabase,
  SiFirebase,
  SiSvelte,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, core: true },
      { name: "Next.js", icon: SiNextdotjs, core: true },
      { name: "Svelte", icon: SiSvelte, core: true },
      { name: "TypeScript", icon: SiTypescript, core: true },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: FaNodeJs, core: true },
      { name: "Express", icon: SiExpress, core: true },
      { name: "REST", icon: SiExpress },
      { name: "JWT", icon: SiExpress },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Postgres", icon: SiPostgresql, core: true },
      { name: "MongoDB", icon: SiMongodb, core: true },
      { name: "Redis", icon: SiRedis, core: true },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    category: "Infra & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, core: true },
      { name: "Linux", icon: SiLinux, core: true },
      { name: "Nginx", icon: SiNginx },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
    ],
  },
  {
    category: "Testing & Tooling",
    skills: [
      { name: "Git", icon: FaGit, core: true },
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "Zod", icon: SiZod },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] py-20 px-6 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Tools I use to build and ship reliable systems.
          </p>
        </header>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              {/* Category label */}
              <h3 className="mb-4 text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                {category.category}
              </h3>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
