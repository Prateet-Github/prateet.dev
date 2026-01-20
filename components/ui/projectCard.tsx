import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import { FaNpm } from "react-icons/fa";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live: string;
  image: string;
  npm: string | null;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="grayscale hover:grayscale-0 h-full flex flex-col border border-white/10 bg-surface rounded-lg overflow-hidden transition-transform md:hover:bg-surface-2 md:hover:scale-103 duration-300 md:hover:border-white/25">
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full object-cover h-48"
      />

      <div className="p-4 flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-text text-xl">{project.title}</h3>
          <p className="text-text-muted text-sm">{project.description}</p>
        </div>

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

        <div className="flex gap-6 text-sm mt-auto">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-text hover:scale-105 hover:underline"
          >
            <Github size={18} />
            Source
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-text hover:scale-105 hover:underline"
          >
            <Link2 size={18} />
            Live
          </a>
          {project.npm && (
            <Link
              href={project.npm}
              target="_blank"
              className="text-sm  hover:text-white transition-colors hover:scale-105 hover:underline"
            >
              <div className="flex items-center gap-1 hover:text-text">
                <FaNpm size={18} />
                NPM
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
