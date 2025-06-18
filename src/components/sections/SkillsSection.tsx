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

	const skillsByCategory: Record<
		(typeof skillCategories)[number],
		SkillCategory | undefined
	> = skillCategories.reduce((acc, category) => {
		acc[category] = SKILLS_DATA.find((c) => c.category === category);
		return acc;
	}, {} as Record<(typeof skillCategories)[number], SkillCategory | undefined>);

	return (
		<section
			aria-labelledby="technologies-heading"
			className="relative py-20 md:py-32 bg-zinc-200"
		>
			{/* Content */}
			<div className="container-margins">
				{/* Header */}
				<div className="text-center mb-12 md:mb-20">
					<p className="text-zinc-600 text-sm sm:text-base md:text-lg tracking-wider mb-4">
						PRIMARY TECHNOLOGIES
					</p>
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
			<h3 className="text-xs sm:text-sm md:text-base font-light uppercase text-zinc-600 tracking-widest mb-3 sm:mb-4 md:mb-6 select-none">
				{title}
			</h3>
			<div className="space-y-2">
				{skills.map((skill, idx) => (
					<div
						key={idx}
						className="group relative bg-white/30 rounded-lg p-2 sm:p-2.5 md:p-3 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md overflow-hidden"
					>
						{/* Shine effect */}
						<span className="absolute h-[150px] w-[50px] bg-white opacity-40 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-300 group-hover:left-[95%]" />

						<div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
							<picture>
								<source
									srcSet={skill.icon.replace(".png", ".webp")}
									type="image/webp"
								/>
								<img
									src={skill.icon}
									alt={`${skill.name} icon`}
									className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
									loading="lazy"
									draggable={false}
									width={20}
									height={20}
								/>
							</picture>
						</div>
						<span className="text-xs sm:text-sm md:text-base font-light text-zinc-700 relative z-10">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
