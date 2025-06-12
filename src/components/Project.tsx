import React, { useRef, useEffect, useState } from "react";
import { Button } from "./ui";

interface ProjectProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  imageLeft?: boolean;
  // New props for custom sizing
  mobileImageHeight?: string;
  mobileImageWidth?: string;
  desktopImageWidth?: string;
  desktopImageHeight?: string;
}

export const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  imageLeft = true,
  // Default values
  mobileImageHeight = "h-64",
  mobileImageWidth = "w-full",
  desktopImageWidth = "w-64 md:w-80 lg:w-120",
  desktopImageHeight = "h-auto",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const visibleRatio = Math.max(0, Math.min(1, 
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ));
      
      const scrollOffset = (0.5 - visibleRatio) * 100;
      setScrollY(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (desktopContentRef.current) {
      const contentTransform = scrollY * 1.5;
      desktopContentRef.current.style.transform = `translateY(${contentTransform}px)`;
    }
  }, [scrollY]);

  return (
    <section ref={sectionRef} className="w-full relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 py-8 sm:hidden">
        <div className="w-full flex justify-center">
          <img
            src={imageSrc}
            alt={title}
            className={`${mobileImageWidth} ${mobileImageHeight} object-cover`}
          />
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

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-40 py-12">
        {/* Image Container */}
        <div className={`w-2/5 ${imageLeft ? 'order-1 flex justify-end' : 'order-2 flex justify-start'}`}>
          <img
            src={imageSrc}
            alt={title}
            className={`${desktopImageWidth} ${desktopImageHeight} object-cover`}
          />
        </div>

        {/* Content Container */}
        <div 
          ref={desktopContentRef}
          className={`w-3/5 space-y-4 ${imageLeft ? 'order-2' : 'order-1'} text-left transition-all duration-100 ease-out will-change-transform`}
        >
          <div className="space-y-4">
            <p className="text-base text-muted tracking-wider">{subtitle}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary leading-tight tracking-normal font-normal">
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