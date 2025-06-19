import { Project } from "../Project";
import { PROJECTS_DATA } from "../../constants";

export default function PortfolioSection() {
	return (
		<section className="bg-primary py-20 md:py-32 mb-20 md:mb-40">
			<div className="space-y-32">
				{PROJECTS_DATA.map((project, index) => (
					<Project key={index} {...project} index={index} />
				))}
			</div>
		</section>
	);
}
