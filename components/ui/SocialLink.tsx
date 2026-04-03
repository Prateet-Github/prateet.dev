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
      className="group flex items-center gap-2 text-slate-500 hover:text-white/80 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </a>
  );
};