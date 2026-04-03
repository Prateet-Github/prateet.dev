import { Github, ExternalLink, Package } from "lucide-react";
import Image from "next/image";
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
    <article className="group relative h-full flex flex-col bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:bg-[#0d0d0d] hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]">
      {/* Image Container with Neon Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>

      <div className="p-6 flex flex-1 flex-col gap-5">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 leading-relaxed font-mono tracking-tight text-sm">
            {project.description}
          </p>
        </div>

        {/* Tech Stack - Chip Style */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="py-1 px-2.5 rounded-md bg-white/3 border border-white/5 text-[10px] font-mono text-slate-500 group-hover:text-green-500/80 group-hover:border-green-500/10 transition-all duration-500"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions - Sleek Link Style */}
        <div className="flex items-center gap-6 pt-2 mt-auto">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-all group/link"
          >
            <Github
              size={16}
              className="group-hover/link:text-green-500 transition-colors"
            />
            Source_Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-all group/link"
          >
            <ExternalLink
              size={16}
              className="group-hover/link:text-green-500 transition-colors"
            />
            Live_Demo
          </a>

          {project.npm && (
            <Link
              href={project.npm}
              target="_blank"
              className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-all group/link"
            >
              <Package
                size={16}
                className="group-hover/link:text-green-500 transition-colors"
              />
              Registry
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
