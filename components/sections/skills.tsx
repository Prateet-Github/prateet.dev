"use client";

import SkillCard from "../ui/skillCard";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaCode,
} from "react-icons/fa";
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
  SiZod,
  SiSupabase,
  SiFirebase,
  SiSvelte,
  SiRemix,
  SiRedux,
  SiThreedotjs,
  SiKoa,
  SiFastify,
  SiNestjs,
  SiSocketdotio,
  SiTrpc,
  SiGraphql,
  SiClickhouse,
  SiApachecassandra,
  SiMysql,
  SiAmazondynamodb,
  SiCockroachlabs,
  SiNetlify,
  SiRender,
  SiKubernetes,
  SiApachekafka,
  SiRabbitmq,
  SiPostman,
  SiFramer,
  SiSwagger,
  SiWebrtc,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },

      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },

      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Framer Motion", icon: SiFramer },

      { name: "Remix", icon: SiRemix },
      { name: "Svelte", icon: SiSvelte },
      { name: "Three.js", icon: SiThreedotjs },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: FaNodeJs },

      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Fastify", icon: SiFastify },
      { name: "Koa", icon: SiKoa },

      { name: "REST APIs", icon: SiSwagger },
      { name: "GraphQL", icon: SiGraphql },
      { name: "tRPC", icon: SiTrpc },

      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "WebRTC", icon: SiWebrtc },
    ],
  },
  {
    category: "Databases & Data Layer",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },

      { name: "Prisma", icon: SiPrisma },

      { name: "MySQL", icon: SiMysql },
      { name: "ClickHouse", icon: SiClickhouse },
      { name: "Cassandra", icon: SiApachecassandra },
      { name: "DynamoDB", icon: SiAmazondynamodb },
      { name: "CockroachDB", icon: SiCockroachlabs },
    ],
  },
  {
    category: "DevOps, Platforms & Hosting",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Nginx", icon: SiNginx },

      { name: "GitHub Actions", icon: SiGithubactions },

      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Render", icon: SiRender },
      { name: "Netlify", icon: SiNetlify },

      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    category: "BaaS & Auth Platforms",
    skills: [
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Tooling & DX",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: FaCode },

      { name: "Zod", icon: SiZod },
    ],
  },
  {
    category: "Messaging & Eventing",
    skills: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "RabbitMQ", icon: SiRabbitmq },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] py-20 px-6 relative overflow-hidden"
    >
      {/* Bg grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
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
