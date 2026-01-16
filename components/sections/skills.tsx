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

const skills = [
  // Existing
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGit },
  { name: "Docker", icon: SiDocker },
  { name: "MongoDB", icon: SiMongodb },
  {name:"Svelte", icon: SiSvelte},

  // ➕ Backend & APIs
  { name: "Express.js", icon: SiExpress },
  { name: "REST APIs", icon: SiSwagger },
  { name: "JWT Authentication", icon: SiJsonwebtokens },
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "GraphQL", icon: SiGraphql },

  // ➕ Databases & ORM
  { name: "Prisma", icon: SiPrisma },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "Redis", icon: SiRedis },

  // ➕ DevOps & Deployment
  { name: "Linux", icon: SiLinux },
  { name: "Nginx", icon: SiNginx },

  { name: "PM2", icon: SiPm2 },

  // ➕ Cloud & Hosting

  { name: "Vercel", icon: SiVercel },
  { name: "Railway", icon: SiRailway },
  { name: "DigitalOcean", icon: SiDigitalocean },
  { name: "Cloudflare", icon: SiCloudflare },

  // ➕ Tools & Quality
  { name: "Postman", icon: SiPostman },
  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "Zod", icon: SiZod },
  { name: "ESLint", icon: SiEslint },
  { name: "Prettier", icon: SiPrettier },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Webpack", icon: SiWebpack },
  { name: "Babel", icon: SiBabel },

  // ➕ BaaS
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl py-24 text-text px-4"
    >
      {/* Section header */}
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="mt-2 text-text-muted">
          Technologies and tools I use to build scalable web applications.
        </p>
      </header>

      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
