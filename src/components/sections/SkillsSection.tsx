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
	const skillCategories = ["Frontend", "Backend", "DevOps & Tools"] as const;

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
			className="relative py-20 md:py-32"
		>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/18 z-10" />

			{/* Content */}
			<div className="relative z-20 container-margins">

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
			<h3 className="text-xs sm:text-sm md:text-lg font-light text-secondary uppercase tracking-widest mb-3 sm:mb-4 md:mb-6 select-none">
			{title}
			</h3>
			<div className="space-y-2">
				{skills.map((skill, idx) => (
					<div
						key={idx}
						className="group relative bg-white/40 backdrop-blur-md rounded-full p-2 sm:p-2.5 md:p-3 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md overflow-hidden"
					>
						{/* Shine effect */}
						<span className="absolute h-[150px] w-[50px] bg-white/20 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-300 group-hover:left-[95%]" />

						<div className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-white/60 rounded-full flex items-center justify-center">
							<picture>
								<source
									srcSet={skill.icon.replace(".png", ".webp")}
									type="image/webp"
								/>
								<img
									src={skill.icon}
									alt={`${skill.name} icon`}
									className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
									loading="lazy"
									draggable={false}
									width={20}
									height={20}
								/>
							</picture>
						</div>
						<span className="text-xs sm:text-sm md:text-lg font-light text-secondary relative z-10">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
