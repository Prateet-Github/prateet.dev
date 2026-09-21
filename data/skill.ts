import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSqlite,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiPrisma,
  SiPostgresql,
  SiNginx,
  SiGithubactions,
  SiVercel,
  SiRedux,
  SiNestjs,
  SiSocketdotio,
  SiRender,
  SiPostman,
  SiWebrtc,
  SiAmazon,
  SiFfmpeg,
  SiGo,
  SiRedbull,
  SiGit,
  SiGin,
} from "react-icons/si";

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Go", icon: SiGo },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },

  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Gin", icon: SiGin },
      { name: "gRPC", icon: FaCode },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "TanStack Query", icon: FaCode },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "WebRTC", icon: SiWebrtc },

    ],
  },

  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "SQLite", icon: SiSqlite },
      { name: "AWS S3", icon: SiAmazon },
      { name: "Prisma", icon: SiPrisma },
    ],
  },

  {
    category: "DevOps, Tools & Messaging",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
      { name: "Nginx", icon: SiNginx },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "FFmpeg", icon: SiFfmpeg },
      { name: "Postman", icon: SiPostman },
      { name: "Asynq", icon: SiRedis },
      { name: "BullMQ", icon: SiRedbull },
    ],
  },
];