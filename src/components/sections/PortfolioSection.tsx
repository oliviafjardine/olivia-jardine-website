import { Project } from "../Project";
import { PROJECTS_DATA } from "../../constants";

export default function PortfolioSection() {
  return (
    <section className="bg-primary py-8">
      <div className="container-margins">
        <div className="space-y-16 md:space-y-40 lg:space-y-60">
          {PROJECTS_DATA.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
