import GithubCard from "../ui/githubCard";
import { Terminal, Code2, Zap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 relative overflow-hidden"
    >
      {/* --- Industrial Grid Background --- */}
      <div className="absolute inset-0 bg-size-[24px_24px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] pointer-events-none" />

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
                <span className="text-white font-medium">backend systems</span>{" "}
                and{" "}
                <span className="text-white font-medium">
                  distributed architecture
                </span>
                .
              </p>

              <p>
                While I primarily work with the MERN stack, I'm most interested
                in the invisible parts of software—
                <span className="text-white font-medium">
                  latency, security, and scalability
                </span>
                . I enjoy building systems that perform reliably under
                real-world constraints, whether that's a developer tool like{" "}
                <span className="text-white font-medium">Authly</span> or
                designing backend services that scale predictably.
              </p>

              <p>
                Outside of active development, I spend time studying system
                design patterns, contributing to open source, and refining my
                development workflow.
              </p>
            </div>
          </div>

          {/* Right Col: Current Focus */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <Zap size={20} className="text-white" />
              </div>
              Current Focus
            </h3>

            <div className="space-y-6">
              {/* Focus Item */}
              <div className="p-5 rounded border border-white/10 bg-surface hover:border-white/20 transition-colors">
                <h4 className="text-white font-bold mb-3">
                  Building in Public
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Working on open-source authentication tools and developer SDKs
                  that simplify backend workflows.
                </p>
              </div>

              {/* Focus Item */}
              <div className="p-5 rounded border border-white/10 bg-surface hover:border-white/20 transition-colors">
                <h4 className="text-white font-bold mb-3">
                  System Design Deep Dive
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Exploring distributed systems, message queues, and
                  microservices architecture patterns.
                </p>
              </div>

              {/* Focus Item */}
              <div className="p-5 rounded border border-white/10 bg-surface hover:border-white/20 transition-colors">
                <h4 className="text-white font-bold mb-3">
                  Real-Time Technologies
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Experimenting with WebSockets, WebRTC, and building
                  low-latency communication systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- GitHub Activity Section (Bottom) --- */}
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

export default About;
