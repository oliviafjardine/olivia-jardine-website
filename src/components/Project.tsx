import React from "react";
import { Button } from "./ui";

interface ProjectProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  imageLeft?: boolean;
}

export const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  imageLeft = true,
}) => {
  return (
    <section className="w-full">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col gap-4 py-8 sm:hidden">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="w-full space-y-6">
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-muted tracking-wider">{subtitle}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary leading-tight font-normal">
              {title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-md">{description}</p>

          <div className="pt-4">
            <Button variant="black" size="sm">
              See More
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet+ Layout - Side by Side */}
      <div className="hidden sm:flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-40 py-12">
        {/* Image */}
        <div className={`w-2/3 ${imageLeft ? 'order-1' : 'order-2'}`}>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`w-2/3 space-y-4 ${imageLeft ? 'order-2' : 'order-1'} text-left`}>
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted tracking-wider">{subtitle}</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary leading-tight font-normal">
              {title}
            </h2>
          </div>

          <p className="text-sm sm:text-lg text-secondary leading-relaxed max-w-lg">{description}</p>

          <div className="pt-4">
            <Button variant="black" size="md">
              See More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
