import ProjectCard from "../ui/projectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Authly SDK",
    description:
      "A developer-first headless authentication SDK for building secure, scalable auth systems without UI constraints.",
    tech: ["Node.js", "TypeScript", "NPM", "JWT"],
    live: "https://authly-eight.vercel.app",
    repo: "https://github.com/Prateet-Github/authly-sdk",
    image: "/authly.png",
  },
  {
    title: "SmartBuy",
    description:
      "An AI-powered device recommendation engine that uses natural language processing to match users with products.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "#",
    repo: "#",
    image: "/smartbuy.png",
  },
  {
    title: "OpenMap Router", // Renamed from "MyMap" to sound more professional
    description:
      "A high-performance routing engine alternative to Google Maps, reducing API costs via self-hosted OSRM.",
    tech: ["React", "OSM", "OSRM", "Docker"],
    live: "#",
    repo: "#",
    image: "/demo.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 relative"
    >
      {/* --- Industrial Grid Background --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* --- Header --- */}
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Selected work focusing on{" "}
            <span className="text-slate-200">distributed systems</span>,{" "}
            <span className="text-slate-200">developer tooling</span>, and{" "}
            <span className="text-slate-200">full-stack architecture</span>.
          </p>
        </header>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.title} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* --- Footer Link --- */}
        <div className="flex justify-center">
          <Link
            href="https://github.com/Prateet-Github"
            target="_blank"
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            View more on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
