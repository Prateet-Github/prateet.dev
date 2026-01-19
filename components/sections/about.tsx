import GithubCard from "../ui/githubCard";
import { Terminal, Zap, Code2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] py-24 px-6 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-24">
        {/* Header */}
        <header className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">About</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I design backend systems that prioritize clarity, performance, and
            long-term maintainability.
          </p>
        </header>

        {/* Philosophy + Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white font-semibold">
              <Terminal size={18} />
              Engineering Philosophy
            </div>

            <p className="text-slate-400 leading-relaxed">
              My work focuses on the parts of software that users don’t see but
              depend on every day —{" "}
              <span className="text-white font-medium">
                system boundaries, data flow, and failure handling
              </span>
              .
            </p>

            <p className="text-slate-400 leading-relaxed">
              I enjoy building backend services and developer tools that behave
              predictably under real-world constraints like load, latency, and
              scale.
            </p>
          </div>

          {/* Focus */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white font-semibold">
              <Zap size={18} />
              Current Focus
            </div>

            <ul className="space-y-4 text-slate-400">
              <li>
                <span className="text-white font-medium">
                  Developer Tooling
                </span>{" "}
                — authentication systems, SDKs, and APIs.
              </li>
              <li>
                <span className="text-white font-medium">System Design</span> —
                distributed systems, queues, and scalability patterns.
              </li>
              <li>
                <span className="text-white font-medium">
                  Real-time Infrastructure
                </span>{" "}
                — WebSockets, low-latency communication, and event-driven flows.
              </li>
            </ul>
          </div>
        </div>

        {/* Open Source */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white font-semibold">
              <Code2 size={18} />
              Open Source
            </div>
            <a
              href="https://github.com/Prateet-Github"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          </div>

          <GithubCard />
        </div>
      </div>
    </section>
  );
};

export default About;
