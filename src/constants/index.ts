// Asset imports
import typescriptIcon from "../assets/tech/typescript.png";
import reactIcon from "../assets/tech/react.png";
import tailwindIcon from "../assets/tech/tailwind.png";
import pythonIcon from "../assets/tech/python.png";
import csharpIcon from "../assets/tech/c-sharp.png";
import javaIcon from "../assets/tech/java.png";
import nodejsIcon from "../assets/tech/node-js.png";
import sqlServerIcon from "../assets/tech/sql-server.png";
import azureIcon from "../assets/tech/azure.png";
import dockerIcon from "../assets/tech/docker.png";
import gitIcon from "../assets/tech/git.svg";
import kcitImage from "../assets/projects/kcit/iphone-1.png";
import kcitLogo from "../assets/projects/kcit/logo.png";
import kcitHeroImage from "../assets/projects/kcit/hero.jpg";
import nodeFlowImage from "../assets/projects/node flow/node-flow-1.png";
import nodeFlowHeroImage from "../assets/projects/node flow/hero.png";
import shoplifterImage from "../assets/projects/shoplifter/front.png";
import shoplifterHeroImage from "../assets/projects/shoplifter/hero.jpg";

// Common styling constants
export const COMMON_STYLES = {
	section: "py-16 md:py-20",
	sectionWithBorder: "py-16 border-t border-gray-100",
	containerMargins: "container-margins",
	maxWidth: "max-w-5xl mx-auto px-6",
	textCenter: "text-center",
	heading: "text-3xl md:text-4xl font-semibold text-black",
	subheading: "text-2xl md:text-3xl font-semibold text-black",
	bodyText: "text-lg text-gray-600",
	transition: "transition-colors duration-200",
} as const;

// Navigation links - Updated for single-page scroll navigation
export const NAV_LINKS = [
	{ to: "#hero", label: "Home", isCTA: false },
	{ to: "#portfolio", label: "Portfolio", isCTA: false },
	{ to: "#skills", label: "Skills", isCTA: false },
	{ to: "#about", label: "About", isCTA: false },
	{ to: "#contact", label: "Contact", isCTA: false },
];

// Skills data
export const SKILLS_DATA = [
	{
		category: "Frontend",
		items: [
			{ name: "TypeScript", icon: typescriptIcon },
			{ name: "React", icon: reactIcon },
			{ name: "Tailwind CSS", icon: tailwindIcon },
		],
	},
	{
		category: "Backend",
		items: [
			{ name: "Python", icon: pythonIcon },
			{ name: "C#", icon: csharpIcon },
			{ name: "Java", icon: javaIcon },
			{ name: "Node.js", icon: nodejsIcon },
		],
	},
	{
		category: "DevOps",
		items: [
			{ name: "Azure", icon: azureIcon },
			{ name: "SQL Server", icon: sqlServerIcon },
			{ name: "Git", icon: gitIcon },
			{ name: "Docker", icon: dockerIcon },
		],
	},
] as const;

// Projects data with custom image sizes
export const PROJECTS_DATA = [
	{
		imageSrc: kcitImage,
		heroImage: kcitHeroImage,
		subtitle: "KING COUNTY (COLLABORATION)",
		title: "The Extranet — Hazard Waste Management Program",
		logo: kcitLogo,
		description:
			"Modernizing a legacy hazardous waste management system using C# ASP.NET Core and SQL Server, enabling organizations to streamline regulatory compliance through efficient site visit tracking, document storage, and automated reporting dashboards.",
		imageLeft: true,
		mobileImageHeight: "h-auto",
		mobileImageWidth: "w-48",
		desktopImageWidth: "w-88",
		desktopImageHeight: "h-auto",
		role: "Lead Developer",
		duration: "3 Months - Present",
		tools: ["C#", "ASP.NET Core", "SQL Server", "Azure DevOps"],
		details: {
			overview:
				"The Extranet is a comprehensive web application developed for King County's Hazardous Waste Management Program. It modernizes legacy systems and provides a unified platform for managing hazardous waste compliance, site visits, and documentation.",
			challenge:
				"The existing system was outdated, difficult to maintain, and lacked modern features needed for efficient regulatory compliance management. Organizations struggled with manual processes for tracking site visits and maintaining documentation.",
			solution:
				"Developed a modern web application using C# ASP.NET Core and SQL Server that streamlines the entire hazardous waste management process. The system includes features for automated site visit scheduling, digital document management, and real-time compliance reporting.",
			technologies: [
				"C# ASP.NET Core",
				"SQL Server",
				"Entity Framework Core",
				"Azure DevOps",
				"Azure App Service",
				"Azure SQL Database",
			],
			features: [
				"Automated site visit scheduling and tracking",
				"Digital document management system",
				"Real-time compliance reporting dashboards",
				"User role-based access control",
				"Automated email notifications",
				"Mobile-responsive design",
			],
			impact:
				"The Extranet is actively being developed to modernize hazardous waste compliance for King County. It is designed to replace legacy systems with a secure, user-friendly platform that simplifies workflows, enhances access to critical documentation, and supports more effective collaboration between regulatory teams and organizations. Once deployed, it will serve as a centralized hub for managing compliance tasks and improving operational transparency.",
		},
	},
	{
		imageSrc: nodeFlowImage,
		heroImage: nodeFlowHeroImage,
		subtitle: "EDUCATIONAL TOOL DEVELOPMENT",
		title: "Node Flow — Interactive Data Structures & Algorithms Visualizer",
		description:
			"Built an interactive data structures and algorithms visualization tool, helping CS students understand foundational computer science concepts through engaging visual learning experiences.",
		imageLeft: false,
		mobileImageHeight: "h-auto",
		mobileImageWidth: "w-7/8",
		desktopImageWidth: "w-[30rem] md:w-[36rem] lg:w-[56rem]",
		desktopImageHeight: "h-auto",
		allowImageOverflow: true,
		role: "Developer",
		duration: "2 Months",
		tools: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
		details: {
			overview:
				"Node Flow is an interactive web application designed to help computer science students visualize and understand complex data structures and algorithms. It provides a hands-on learning experience through real-time visualization and step-by-step execution.",
			challenge:
				"Students often struggle to understand abstract concepts in data structures and algorithms. Traditional learning methods lack interactivity and visual feedback, making it difficult to grasp how these concepts work in practice.",
			solution:
				"Created an interactive visualization tool that allows students to see data structures and algorithms in action. The application provides step-by-step execution, allowing users to understand how each operation affects the data structure.",
			technologies: [
				"React",
				"TypeScript",
				"D3.js",
				"Tailwind CSS",
				"Vite",
				"GitHub Pages",
			],
			features: [
				"Interactive visualization of common data structures",
				"Step-by-step algorithm execution",
				"Custom data input and manipulation",
				"Performance metrics and analysis",
				"Educational explanations and examples",
				"Responsive design for all devices",
			],
			impact:
				"Node Flow has become a valuable learning tool for computer science students, helping them better understand complex concepts through visual learning. The tool has been adopted by several educational institutions and has received positive feedback from both students and educators.",
		},
	},
	{
		imageSrc: shoplifterImage,
		heroImage: shoplifterHeroImage,
		subtitle: "IN PROGRESS PROJECT",
		title: "Shoplifter Detection System",
		description:
			"Developing a computer vision system that processes retail video streams in real-time to detect suspicious behavior using YOLO object detection and alerts store associates.",
		imageLeft: true,
		mobileImageHeight: "h-auto",
		mobileImageWidth: "w-72",
		desktopImageWidth: "w-[30rem] lg:w-[40rem]",
		desktopImageHeight: "h-auto",
		allowImageOverflow: true,
		role: "Computer Vision",
		duration: "1 Month - Present",
		tools: ["Python", "OpenCV", "YOLO v8", "TensorFlow"],
		details: {
			overview:
				"The Shoplifter Detection System is an AI-powered solution that uses computer vision to identify potential shoplifting activities in retail stores. The system processes video feeds in real-time and alerts store associates when suspicious behavior is detected.",
			challenge:
				"Retail stores face significant losses due to shoplifting, and traditional security measures are often reactive rather than preventive. Manual monitoring of security cameras is inefficient and prone to human error.",
			solution:
				"Developing a computer vision system that uses YOLO object detection to identify suspicious behavior patterns in real-time. The system integrates with existing security infrastructure and provides instant alerts to store associates.",
			technologies: [
				"Python",
				"OpenCV",
				"YOLO v8",
				"TensorFlow",
				"Flask",
				"WebSocket",
			],
			features: [
				"Real-time video stream processing",
				"Suspicious behavior detection",
				"Instant alert system",
				"Historical data analysis",
				"Customizable detection parameters",
				"Integration with existing security systems",
			],
			impact:
				"The system is currently in development, with promising initial results showing high accuracy in detecting suspicious behavior patterns. Once completed, it will help retail stores reduce losses and improve security efficiency.",
		},
	},
];
