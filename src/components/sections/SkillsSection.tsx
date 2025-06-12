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
      className="bg-secondary py-20 md:py-36"
    >
      <div className="container-margins">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-4">
            Frequently Used Technologies
          </h1>
          <div className="w-16 h-0.5 bg-zinc-400 mx-auto"></div>
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
      <div className="space-y-1">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-neutral-200 rounded-lg"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
            <span className="text-xs sm:text-sm font-light text-primary">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}