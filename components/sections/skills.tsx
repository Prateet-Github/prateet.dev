import SkillCard from "../ui/skillCard";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiPostman,
  SiJsonwebtokens,
  SiNginx,
  SiVercel,
  SiRailway,
  SiLinux,
  SiGraphql,
  SiSwagger,
  SiJest,
  SiVitest,
  SiZod,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiCloudflare,
  SiWebpack,
  SiBabel,
  SiSocketdotio,
  SiPm2,
  SiGithubactions,
  SiEslint,
  SiPrettier,
  SiDigitalocean,
  SiSvelte,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Svelte", icon: SiSvelte },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: SiSwagger },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    category: "DevOps & Deployment",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Nginx", icon: SiNginx },
      { name: "PM2", icon: SiPm2 },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "DigitalOcean", icon: SiDigitalocean },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    category: "Tools & Quality",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "Postman", icon: SiPostman },
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "Zod", icon: SiZod },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
      { name: "Webpack", icon: SiWebpack },
      { name: "Babel", icon: SiBabel },
    ],
  },
  {
    category: "Backend as a Service",
    skills: [
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-size-[24px_24px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable web applications.
          </p>
        </header>

        {/* Categorized Skills */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-bold text-slate-300 mb-6 uppercase tracking-wider">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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