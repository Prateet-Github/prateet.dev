import { Github, Link2 } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live: string;
  image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="mt-10 h-full flex flex-col border border-border bg-surface rounded-2xl overflow-hidden transition-transform md:hover:bg-surface-2 md:hover:scale-102">
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full object-cover h-48"
      />

      {/* Content */}
      <div className="p-4 flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-text text-xl">{project.title}</h3>
          <p className="text-text-muted text-sm">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="py-1 px-3 rounded-full border border-border text-xs"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-6 text-sm mt-auto">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-text"
          >
            <Github size={18} />
            Source
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-text"
          >
            <Link2 size={18} />
            Live
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
