import { useParams } from "react-router-dom";
import { PROJECTS_DATA } from "../constants";
import { Button } from "../components/ui";
import PageHero from "../components/shared/PageHero";
import { useEffect } from "react";
import nodeFlowAboutImage from "../assets/projects/node flow/about.webp";
import nodeFlowVisualizationImage from "../assets/projects/node flow/visualization.webp";
import nodeFlowImplementationImage from "../assets/projects/node flow/implementation.webp";
import shoplifterDashboardImage from "../assets/projects/shoplifter/dashboard.webp";
import shoplifterApiImage from "../assets/projects/shoplifter/api.webp";

const ProjectPage = () => {
	const { projectId } = useParams();
	const project = PROJECTS_DATA[Number(projectId)];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!project) {
		return (
			<div className="min-h-[60vh] flex flex-col items-center justify-center container-margins">
				<h1 className="text-3xl font-light text-gray-800 mb-4">
					Project Not Found
				</h1>
				<p className="text-gray-600 mb-8">
					The project you're looking for doesn't exist.
				</p>
				<Button variant="black" size="md" onClick={() => window.history.back()}>
					Go Back
				</Button>
			</div>
		);
	}

	return (
		<div>
			<PageHero
				title={project.title}
				subtitle={project.subtitle}
				backgroundImage={project.heroImage || project.imageSrc}
				role={project.role}
				duration={project.duration}
				tools={project.tools}
				logo={project.logo}
			/>

			<div className="py-20">
				<div className="container-margins">
					<div className="max-w-4xl mx-auto">
						<div className="space-y-16">
							{/* Overview Section */}
							<section className="space-y-6">
								<h2 className="text-2xl font-light text-primary">Overview</h2>
								<p className="text-secondary leading-relaxed">
									{project.details.overview}
								</p>
								{project.title ===
									"Node Flow — Interactive Data Structures & Algorithms Visualizer" && (
									<img
										src={nodeFlowAboutImage}
										alt="Node Flow Overview"
										loading="eager"
										fetchPriority="high"
										decoding="async"
										className="w-full rounded-lg shadow-lg mt-6"
									/>
								)}
								{project.title === "Shoplifter Detection System" && (
									<img
										src={shoplifterDashboardImage}
										alt="Shoplifter Detection Dashboard"
										loading="eager"
										fetchPriority="high"
										decoding="async"
										className="w-full rounded-lg shadow-lg mt-6"
									/>
								)}
							</section>

							{/* Challenge & Solution Section */}
							<section className="grid md:grid-cols-2 gap-8">
								<div className="space-y-4">
									<h2 className="text-2xl font-light text-primary">
										Challenge
									</h2>
									<p className="text-secondary leading-relaxed">
										{project.details.challenge}
									</p>
								</div>
								<div className="space-y-4">
									<h2 className="text-2xl font-light text-primary">Solution</h2>
									<p className="text-secondary leading-relaxed">
										{project.details.solution}
									</p>
								</div>
							</section>

							{/* Technologies Section */}
							<section className="space-y-6">
								<h2 className="text-2xl font-light text-primary">
									Technologies Used
								</h2>
								<div className="flex flex-wrap gap-3">
									{project.details.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
								{project.title === "Shoplifter Detection System" && (
									<img
										src={shoplifterApiImage}
										alt="Shoplifter Detection API"
										loading="eager"
										fetchPriority="high"
										decoding="async"
										className="w-full rounded-lg shadow-lg mt-6"
									/>
								)}
							</section>

							{/* Features Section */}
							<section className="space-y-6">
								<h2 className="text-2xl font-light text-primary">
									Key Features
								</h2>
								<ul className="grid md:grid-cols-2 gap-4">
									{project.details.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<span className="text-accent mt-1">•</span>
											<span className="text-secondary">{feature}</span>
										</li>
									))}
								</ul>
								{project.title ===
									"Node Flow — Interactive Data Structures & Algorithms Visualizer" && (
									<div className="space-y-6 mt-8">
										<img
											src={nodeFlowVisualizationImage}
											alt="Queue Implementation"
											loading="eager"
											fetchPriority="high"
											decoding="async"
											className="w-full rounded-lg shadow-lg"
										/>
										<img
											src={nodeFlowImplementationImage}
											alt="Implementation Details"
											loading="eager"
											fetchPriority="high"
											decoding="async"
											className="w-full rounded-lg shadow-lg"
										/>
									</div>
								)}
							</section>

							{/* Impact Section */}
							<section className="space-y-6">
								<h2 className="text-2xl font-light text-primary">Impact</h2>
								<p className="text-secondary leading-relaxed">
									{project.details.impact}
								</p>
							</section>

							{/* Back Button */}
							<div className="pt-8">
								<Button
									variant="black"
									size="md"
									onClick={() => window.history.back()}
								>
									Back to Portfolio
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
