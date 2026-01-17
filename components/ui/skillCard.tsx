import { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <article className="group h-full hover:scale-102 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 transition hover:bg-surface-2">
      <Icon className="h-5 w-5 text-text-muted group-hover:text-text transition" />
      <span className="text-xs font-medium text-text-muted group-hover:text-text transition">
        {skill.name}
      </span>
    </article>
  );
};

export default SkillCard;
