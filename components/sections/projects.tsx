'use client";';

import ProjectCard from "../ui/projectCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const projects = [
  {
    title: "GetRides",
    description:
      "A ride-hailing platform with real-time tracking and seamless booking experience for users and drivers.",
    tech: ["React", "Node.js", "MongoDB", "Express", "WebSockets"],
    live: "https://smartbuy.vercel.app",
    repo: "https://github.com/Prateet-Github/smartbuy",
    image: "/demo.png",
  },
  {
    title: "SmartBuy",
    description:
      "An AI-powered device recommendation platform built with the MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "#",
    repo: "#",
    image: "/demo.png",
  },
  {
    title: "MyMap",
    description:
      "An alternative to Google Maps with custom routing and real-time navigation.",
    tech: ["React", "OSM", "OSRM", "Node.js"],
    live: "#",
    repo: "#",
    image: "/demo.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 flex flex-col gap-16"
    >
      {/* Section header */}
      <header className="text-center">
        <h2 className="text-5xl font-bold text-text">Projects</h2>
        <p className="mt-4 text-text-muted">
          Selected projects focusing on full-stack and backend systems.
        </p>
      </header>

      {/* Projects grid */}
      <ul className="flex flex-col md:flex-row gap-8">
        {projects.map((project) => (
          <li key={project.title} className="flex-1">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {/* View all */}
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="group flex items-center gap-2 rounded-2xl border border-border px-5 py-2 text-text-muted hover:text-text hover:border-white transition"
        >
          <span>View all projects</span>
          <MoveRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
