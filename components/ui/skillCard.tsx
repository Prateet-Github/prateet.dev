import { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <article className="group relative flex items-center gap-3 rounded-xl border border-white/5 bg-[#0a0a0a] px-4 py-3 transition-all duration-500 hover:border-green-500/30 hover:bg-green-500/2">
      {/* 1. Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 2. Icon with color transition */}
      <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-5 w-5 text-slate-500 group-hover:text-green-500 transition-colors duration-500" />
      </div>

      {/* 3. Text with Mono feel */}
      <span className="relative z-10 text-[13px] font-medium  group-hover:text-white transition-colors duration-500 text-slate-400 leading-relaxed font-mono tracking-tight">
        {skill.name}
      </span>
    </article>
  );
};

export default SkillCard;
