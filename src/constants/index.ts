// Asset imports
import typescriptIcon from '../assets/tech/typescript.png';
import reactIcon from '../assets/tech/react.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import pythonIcon from '../assets/tech/python.png';
import csharpIcon from '../assets/tech/c-sharp.png';
import javaIcon from '../assets/tech/java.png';
import nodejsIcon from '../assets/tech/node-js.png';
import sqlServerIcon from '../assets/tech/sql-server.png';
import azureIcon from '../assets/tech/azure.png';
import dockerIcon from '../assets/tech/docker.png';
import gitIcon from '../assets/tech/git.svg';
import kcitImage from '../assets/projects/kcit/iphone-1.png';

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
    subtitle: "KING COUNTY (COLLABORATION)",
    title: "The Extranet — Hazard Waste Management Program",
    description: "Modernizing a legacy hazardous waste management system using C# ASP.NET Core and SQL Server, enabling organizations to streamline regulatory compliance through efficient site visit tracking, document storage, and automated reporting dashboards.",
    imageLeft: true,
    mobileImageHeight: "h-auto",
    mobileImageWidth: "w-48",
    desktopImageWidth: "w-88",
    desktopImageHeight: "h-auto",
  },
  {
    imageSrc: "/images/google-project.png",
    subtitle: "EDUCATIONAL TOOL DEVELOPMENT",
    title: "Node Flow — Interactive Data Structures & Algorithms Visualizer",
    description: "Built an interactive data structures and algorithms visualization tool, helping CS students understand foundational computer science concepts through engaging visual learning experiences.",
    imageLeft: false,
    mobileImageHeight: "h-auto",
    mobileImageWidth: "w-80",
    desktopImageWidth: "w-56 md:w-72 lg:w-96",
    desktopImageHeight: "h-auto",
  },
  {
    imageSrc: "/images/meta-project.png",
    subtitle: "IN PROGRESS PROJECT",
    title: "Shoplifter Detection System",
    description: "Developing a computer vision system that processes retail video streams in real-time to detect suspicious behavior using YOLO object detection and alerts store associates.",
    imageLeft: true,
    mobileImageHeight: "h-auto",
    mobileImageWidth: "w-72",
    desktopImageWidth: "w-80 md:w-[28rem] lg:w-[36rem]",
    desktopImageHeight: "h-auto",
  },
];