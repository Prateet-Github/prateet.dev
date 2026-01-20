import { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <article className="group flex items-center gap-2.5 rounded-lg bg-surface px-3 py-2.5 border border-white/10 hover:border-white/25 hover:bg-surface-2 transition-all hover:scale-102 duration-300">
      <Icon className="h-5 w-5 text-text-muted group-hover:text-text transition" />
      <span className="text-xs font-medium text-text-muted group-hover:text-text transition">
        {skill.name}
      </span>
    </article>
  );
};

export default SkillCard;
