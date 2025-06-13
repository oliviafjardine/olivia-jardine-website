import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui";

interface ProjectProps {
	imageSrc: string;
	title: string;
	subtitle: string;
	description: string;
	imageLeft?: boolean;
	mobileImageHeight?: string;
	mobileImageWidth?: string;
	desktopImageWidth?: string;
	desktopImageHeight?: string;
	allowImageOverflow?: boolean;
	index: number;
	heroImage?: string;
	backgroundColor?: string;
	role?: string;
	duration?: string;
	tools?: string[];
	logo?: string;
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
	desktopImageWidth = "w-64 md:w-80 lg:w-90",
	desktopImageHeight = "h-auto",
	allowImageOverflow = false,
	index,
}) => {
	const navigate = useNavigate();
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

			const visibleRatio = Math.max(
				0,
				Math.min(
					1,
					(windowHeight - sectionTop) / (windowHeight + sectionHeight)
				)
			);

			const scrollOffset = (0.5 - visibleRatio) * 100;
			setScrollY(scrollOffset);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (desktopContentRef.current) {
			const contentTransform = scrollY * 1.5;
			desktopContentRef.current.style.transform = `translateY(${contentTransform}px)`;
		}
	}, [scrollY]);

	const handleSeeMore = () => {
		navigate(`/project/${index}`);
	};

	return (
		<section
			ref={sectionRef}
			className={`w-full relative ${
				allowImageOverflow ? "overflow-visible" : "overflow-hidden"
			}`}
		>
			{/* Mobile Layout */}
			<div
				className={`flex flex-col gap-4 py-8 sm:hidden ${
					allowImageOverflow ? "" : "container-margins"
				}`}
			>
				{allowImageOverflow ? (
					// Mobile overflow layout - Image first, then text
					<>
						<div className="w-full flex justify-center overflow-x-visible">
							<img
								src={imageSrc}
								alt={title}
								className={`${mobileImageWidth} ${mobileImageHeight} object-cover`}
							/>
						</div>
						<div className="container-margins">
							<div className="space-y-6">
								<div className="space-y-3">
									<p className="text-sm sm:text-base text-muted tracking-wider">
										{subtitle}
									</p>
									<h2 className="text-2xl sm:text-3xl md:text-4xl text-primary leading-tight font-normal">
										{title}
									</h2>
								</div>
								<p className="text-sm sm:text-base text-secondary leading-relaxed max-w-md">
									{description}
								</p>
								<div className="pt-4">
									<Button variant="black" size="sm" onClick={handleSeeMore}>
										See More
									</Button>
								</div>
							</div>
						</div>
					</>
				) : (
					// Normal mobile layout
					<>
						<div className="w-full flex justify-center">
							<img
								src={imageSrc}
								alt={title}
								className={`${mobileImageWidth} ${mobileImageHeight} object-cover`}
							/>
						</div>
						<div className="w-full space-y-6">
							<div className="space-y-3">
								<p className="text-sm sm:text-base text-muted tracking-wider">
									{subtitle}
								</p>
								<h2 className="text-2xl sm:text-3xl md:text-4xl text-primary leading-tight font-normal">
									{title}
								</h2>
							</div>
							<p className="text-sm sm:text-base text-secondary leading-relaxed max-w-md">
								{description}
							</p>
							<div className="pt-4">
								<Button variant="black" size="sm" onClick={handleSeeMore}>
									See More
								</Button>
							</div>
						</div>
					</>
				)}
			</div>

			{/* Desktop Layout */}
			{allowImageOverflow ? (
				// Overflow layout - image can extend beyond container and off the page
				<div className="hidden sm:block py-12 relative">
					<div className="container-margins relative">
						{/* Content Container - Position based on imageLeft */}
						<div
							ref={desktopContentRef}
							className={`w-1/2 space-y-4 text-left transition-all duration-100 ease-out will-change-transform relative z-10 ${
								imageLeft ? "ml-auto" : ""
							}`}
						>
							<div className="space-y-4">
								<p className="text-base text-muted tracking-wider">
									{subtitle}
								</p>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary leading-tight tracking-normal font-normal">
									{title}
								</h2>
							</div>
							<p className="text-sm sm:text-lg text-secondary leading-relaxed max-w-lg">
								{description}
							</p>
							<div className="pt-4">
								<Button variant="black" size="md" onClick={handleSeeMore}>
									See More
								</Button>
							</div>
						</div>
					</div>

					{/* Overflowing Image Container - Position based on imageLeft */}
					<div
						className={`absolute top-1/2 -translate-y-1/2 ${
							imageLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"
						}`}
						style={{ width: "max-content" }}
					>
						<img
							src={imageSrc}
							alt={title}
							className={`${desktopImageWidth} ${desktopImageHeight} object-cover`}
						/>
					</div>
				</div>
			) : (
				// Normal layout
				<div className="hidden sm:block py-12">
					<div className="container-margins">
						<div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-40">
							{/* Image Container */}
							<div
								className={`w-2/5 ${
									imageLeft
										? "order-1 flex justify-end"
										: "order-2 flex justify-start"
								}`}
							>
								<img
									src={imageSrc}
									alt={title}
									className={`${desktopImageWidth} ${desktopImageHeight} object-cover`}
								/>
							</div>

							{/* Content Container */}
							<div
								ref={desktopContentRef}
								className={`w-3/5 space-y-4 ${
									imageLeft ? "order-2" : "order-1"
								} text-left transition-all duration-100 ease-out will-change-transform`}
							>
								<div className="space-y-4">
									<p className="text-base text-muted tracking-wider">
										{subtitle}
									</p>
									<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary leading-tight tracking-normal font-normal">
										{title}
									</h2>
								</div>
								<p className="text-sm sm:text-lg text-secondary leading-relaxed max-w-lg">
									{description}
								</p>
								<div className="pt-4">
									<Button variant="black" size="md" onClick={handleSeeMore}>
										See More
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
