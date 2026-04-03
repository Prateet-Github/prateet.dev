import { LucideIcon } from "lucide-react";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex items-center gap-3 text-slate-500 hover:text-green-500 transition-all duration-500 ease-in-out"
    >
      {/* Icon with a subtle scale effect */}
      <div className="relative">
        <Icon
          className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
          strokeWidth={1.5}
        />
      </div>

      {/* Label with Mono feel and tracking */}
      <span className="hidden md:inline text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        {label}
      </span>
    </a>
  );
};
