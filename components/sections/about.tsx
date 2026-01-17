import GithubCard from "../ui/githubCard";
import { Terminal, Cpu, Globe, Database, Layout, Server, GitBranch, Code2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* --- Header --- */}
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {/* REPLACE THIS TEXT IF NEEDED */}
            I'm Prateet Tiwari, a Full-Stack Engineer based in Delhi. 
            I don't just write code; I architect scalable, real-time systems.
          </p>
        </header>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          
          {/* Left Col: Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="text-indigo-500" />
              Engineering Philosophy
            </h3>
            
            <div className="text-slate-400 leading-relaxed space-y-4">
              {/* === [EDIT BIO PARAGRAPH 1] === */}
              <p>
                My journey started with a curiosity about how the internet works, 
                which quickly evolved into a passion for <strong>distributed systems</strong> and 
                <strong> backend infrastructure</strong>.
              </p>

              {/* === [EDIT BIO PARAGRAPH 2] === */}
              <p>
                I specialize in the MERN stack but focus heavily on the "invisible" parts of software: 
                <strong> latency, security, and scalability</strong>. Whether it's building a 
                custom auth SDK like <em>Authly</em> or optimizing WebRTC streams for <em>GeeksGram</em>, 
                I love solving hard engineering problems.
              </p>

              {/* === [EDIT BIO PARAGRAPH 3] === */}
              <p>
                When I'm not coding, you can find me exploring new system design patterns, 
                contributing to open source, or optimizing my Vim configuration.
              </p>
            </div>
          </div>

          {/* Right Col: Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="text-purple-500" />
              Tech Arsenal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Skill Category 1 */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-indigo-400">
                  <Layout size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">Frontend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT FRONTEND SKILLS HERE */}
                  {["React", "Next.js", "TypeScript", "Tailwind", "Redux"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Category 2 */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-purple-400">
                  <Server size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">Backend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT BACKEND SKILLS HERE */}
                  {["Node.js", "Express", "Socket.io", "WebRTC", "Redis"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Category 3 */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-emerald-400">
                  <Database size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">Database</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT DATABASE SKILLS HERE */}
                  {["MongoDB", "PostgreSQL", "Prisma", "Mongoose"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Category 4 */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-orange-400">
                  <GitBranch size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">DevOps</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT DEVOPS SKILLS HERE */}
                  {["Docker", "Git", "CI/CD", "Linux", "AWS"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GitHub Activity Section --- */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="text-pink-500" />
                Open Source Activity
              </h3>
              <a 
                href="https://github.com/Prateet-Github" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                View Profile &rarr;
              </a>
           </div>

           {/* Reusing your component */}
           <GithubCard />
        </div>

      </div>
    </section>
  );
};

export default About;