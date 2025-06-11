import { Project } from "../Project";
import { PROJECTS_DATA } from "../../constants";

export default function PortfolioSection() {
  return (
    <section className="bg-primary py-16">
      <div className="container-margins">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl text-primary mb-4 tracking-wide">
            Selected Work
          </h1>
        </div>

        <div className="space-y-16 md:space-y-20">
          {PROJECTS_DATA.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
