"use client";

import SkillCard from "../ui/skillCard";
import { skillCategories } from "@/data/skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] py-20 px-6 relative overflow-hidden"
    >
      {/* Bg grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Skills
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Tools I use to build and ship reliable systems.
          </p>
        </header>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              {/* Category label */}
              <h3 className="mb-4 text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                {category.category}
              </h3>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
