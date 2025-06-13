import React from "react";

interface PageHeroProps {
	title: string;
	subtitle?: string;
	backgroundImage?: string;
	role?: string;
	duration?: string;
	tools?: string[];
	logo?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
	title,
	subtitle,
	backgroundImage,
	role,
	duration,
	tools,
	logo,
}) => {
	const backgroundStyle = backgroundImage
		? {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
		  }
		: {};

	return (
		<section className="relative min-h-screen flex flex-col items-start justify-center container-margins-project overflow-hidden">
			{/* Background */}
			<div
				className="absolute inset-0 w-full h-full z-0"
				style={backgroundStyle}
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/70 z-10" />

			{/* Foreground Content */}
			<div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full">
				{/* Left Column: project details */}
				<div className="flex flex-col space-y-6 md:w-1/3 lg:w-2/5">
					<h1 className="text-zinc-300 text-2xl sm:text-4xl tracking-normal max-w-xl mb-6">
						{title}
					</h1>
					{subtitle && (
						<p className="text-muted text-md tracking-wider mb-6">{subtitle}</p>
					)}

					{/* Conditional line after subtitle */}
					{subtitle && (role || duration || (tools && tools.length > 0)) && (
						<div className="h-px bg-zinc-700 w-12 mx-auto my-4 opacity-50" />
					)}

					<div className="space-y-4">
						{role && (
							<div>
								<p className="text-zinc-400 text-sm md:text-base font-semibold">
									Role
								</p>
								<p className="text-zinc-300 text-sm">{role}</p>
							</div>
						)}
						{role && (duration || (tools && tools.length > 0)) && (
							<div className="h-px bg-zinc-700 w-12 mx-auto my-4 opacity-50" />
						)}

						{duration && (
							<div>
								<p className="text-zinc-400 text-sm md:text-base font-semibold">
									Duration
								</p>
								<p className="text-zinc-300 text-sm">{duration}</p>
							</div>
						)}
						{duration && tools && tools.length > 0 && (
							<div className="h-px bg-zinc-700 w-12 mx-auto my-4 opacity-50" />
						)}

						{tools && tools.length > 0 && (
							<div>
								<p className="text-zinc-400 text-sm md:text-base font-semibold">
									Tools
								</p>
								<p className="text-zinc-300 text-sm">{tools.join(", ")}</p>
							</div>
						)}
					</div>
				</div>

				{/* Right Column: Logo */}
				{logo && (
					<div className="hidden sm:flex justify-center items-center md:w-2/3 lg:w-3/5">
						<img src={logo} alt="Project Logo" className="max-w-xs h-auto" />
					</div>
				)}
			</div>

			{/* Scroll Down Arrow */}
			<div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
				onClick={() => {
					window.scrollTo({
						top: window.innerHeight, // Scroll to the height of the viewport
						behavior: "smooth",
					});
				}}
			>
				<div className="w-6 h-6 border-b-2 border-r-2 transform rotate-45 scroll-down-arrow-line" />
			</div>
		</section>
	);
};

export default PageHero;
