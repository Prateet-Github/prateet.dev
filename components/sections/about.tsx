import GithubCard from "../ui/githubCard";
import {
  Terminal,
  Cpu,
  Database,
  Layout,
  Server,
  GitBranch,
  Code2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type SocialLinkProps = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* --- Industrial Grid Background --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* --- Header --- */}
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I focus on building systems that are reliable, performant, and easy
            to reason about.
          </p>
        </header>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Left Col: Biography */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <Terminal size={20} className="text-white" />
              </div>
              Engineering Philosophy
            </h3>

            <div className="text-slate-400 leading-relaxed space-y-6 text-lg">
              <p>
                My interest in engineering started with a curiosity about how
                the internet works and gradually evolved into a focus on{" "}
                <strong className="text-slate-200 font-medium">
                  backend systems
                </strong>{" "}
                and
                <strong className="text-slate-200 font-medium">
                  {" "}
                  distributed architecture.
                </strong>
                .
              </p>

              <p>
                While I primarily work with the MERN stack, I’m most interested
                in the invisible parts of
                <strong className="text-slate-200 font-medium">
                  {" "}
                  software-latency, security, and scalability
                </strong>
                . I enjoy building systems that perform reliably under
                real-world constraints, whether that's developer tool like{" "}
                <em className="text-white not-italic">Authly </em>or designing
                backend services that scale predictably.
              </p>

              <p>
                Outside of active development, I spend time studying system
                design patterns, contributing to open source, and refining my
                development workflow.
              </p>
            </div>
          </div>

          {/* Right Col: Skills Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <Cpu size={20} className="text-white" />
              </div>
              Tech Arsenal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Skill Group: Frontend */}
              <SkillCard
                icon={Layout}
                title="Frontend"
                skills={["React", "Next.js", "Svelte", "Typescript", "Redux"]}
              />

              {/* Skill Group: Backend */}
              <SkillCard
                icon={Server}
                title="Backend"
                skills={["Node.js", "Express", "Socket.io", "WebRTC", "Redis"]}
              />

              {/* Skill Group: Database */}
              <SkillCard
                icon={Database}
                title="Database"
                skills={["MongoDB", "PostgreSQL", "Prisma", "Mongoose"]}
              />

              {/* Skill Group: DevOps */}
              <SkillCard
                icon={GitBranch}
                title="DevOps"
                skills={[
                  "Docker",
                  "Git",
                  "CI/CD",
                  "Netlify",
                  "Vercel",
                  "Render",
                ]}
              />
            </div>
          </div>
        </div>

        {/* --- GitHub Activity Section --- */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <Code2 size={20} className="text-white" />
              </div>
              Open Source Activity
            </h3>
            <a
              href="https://github.com/Prateet-Github"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              View Profile &rarr;
            </a>
          </div>

          <GithubCard />
        </div>
      </div>
    </section>
  );
};

// Helper Component for consistency
const SkillCard = ({ icon: Icon, title, skills }: SocialLinkProps) => (
  <div className="p-5 rounded border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
    <div className="flex items-center gap-3 mb-4 text-slate-200">
      <Icon size={18} />
      <span className="font-bold text-sm uppercase tracking-wider">
        {title}
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 text-[11px] font-medium rounded border border-white/5 bg-white/5 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default About;
