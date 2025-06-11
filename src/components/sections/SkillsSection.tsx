import { SKILLS_DATA } from "../../constants";

type Skill = {
  readonly name: string;
  readonly icon: string;
};

type SkillCategory = {
  readonly category: string;
  readonly items: readonly Skill[];
};

export default function SkillsSection() {
  const skillCategories = ["Frontend", "Backend", "DevOps"] as const;

  const skillsByCategory: Record<typeof skillCategories[number], SkillCategory | undefined> =
    skillCategories.reduce((acc, category) => {
      acc[category] = SKILLS_DATA.find((c) => c.category === category);
      return acc;
    }, {} as Record<typeof skillCategories[number], SkillCategory | undefined>);

  return (
    <section
      aria-labelledby="technologies-heading"
      className="bg-primary py-16"
    >
      <div className="container-margins">
        <div className="text-center mb-12 md:mb-16">
          <h1
            id="technologies-heading"
            className="text-3xl md:text-4xl text-primary mb-4 tracking-wide"
          >
            Most Used Technologies
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {skillCategories.map(
            (category) =>
              skillsByCategory[category] && (
                <SkillCategory
                  key={category}
                  title={category}
                  skills={skillsByCategory[category]!.items}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: readonly Skill[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="text-center">
      <h3 className="text-xs sm:text-sm font-light uppercase text-zinc-600 tracking-widest mb-3 sm:mb-4 md:mb-6 select-none">
        {title}
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-zinc-100/80 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-zinc-300/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
            <span className="text-xs sm:text-sm font-light text-zinc-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
