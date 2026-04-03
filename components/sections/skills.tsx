import SkillCard from "../ui/skillCard";
import { skillCategories } from "@/data/skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen pt-24 px-6 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-20">
          <h2 className="text-5xl md:text-6xl  font-bold tracking-tighter text-green-500">
            Technical Stack
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-xl font-mono tracking-tight">
            A curated list of languages, frameworks, and infrastructure tools I
            use to architect
            <span className="text-green-500/80"> high performance systems</span>
            .
          </p>
        </header>

        {/* Skill Categories */}
        <div className="grid gap-16">
          {skillCategories.map((category) => (
            <div key={category.category} className="group">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-[10px] font-bold text-green-500 uppercase tracking-[0.3em] whitespace-nowrap">
                  {category.category}
                </h3>
                <div className="h-px w-full bg-linear-to-r from-green-500/20 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
