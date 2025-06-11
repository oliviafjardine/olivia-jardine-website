import { Project } from "../Project";
import { PROJECTS_DATA } from "../../constants";
import type { BaseProps } from "../../constants";

export default function PortfolioSection({ isHome = false }: BaseProps) {
  const displayedProjects = isHome ? PROJECTS_DATA.slice(0, 2) : PROJECTS_DATA;

  return (
    <section className="bg-primary py-16">
      <div className="container-margins">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl text-primary mb-4 tracking-wide">
            Selected Work
          </h1>
        </div>

        <div className="space-y-16 md:space-y-20">
          {displayedProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        {isHome && (
          <div className="mt-16 text-center">
            <a
              href="/portfolio"
              className="inline-block text-accent text-accent-hover text-base md:text-lg transition-colors duration-200"
            >
              View All Projects →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
