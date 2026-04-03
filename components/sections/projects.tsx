import ProjectCard from "../ui/projectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 pt-24 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header  */}
        <header className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-green-500">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg max-w-xl text-slate-400 leading-relaxed font-mono tracking-tight">
            A selection of my work focusing on distributed systems,
            <span className="text-green-500/80">
              {" "}
              high-throughput backends{" "}
            </span>
            and developer centric tools.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {projects.map((project) => (
            <div key={project.title} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GitHub Link  */}
        <div className="flex justify-center">
          <Link
            href="https://github.com/Prateet-Github"
            target="_blank"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/2 text-sm font-mono text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300 leading-relaxed  tracking-tight"
          >
            View system repository on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
