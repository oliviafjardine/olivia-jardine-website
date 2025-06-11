// Common type definitions
export interface BaseProps {
  isHome?: boolean;
}

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

// Navigation links
export const NAV_LINKS = [
  { to: "/", label: "Home", isCTA: false },
  { to: "/about", label: "About", isCTA: false },
  { to: "/skills", label: "Skills", isCTA: false },
  { to: "/portfolio", label: "Portfolio", isCTA: false },
  { to: "/contact", label: "Contact", isCTA: false },
];

// Skills data
export const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", icon: "/src/assets/tech/typescript.png" },
      { name: "React", icon: "/src/assets/tech/react.png" },
      { name: "Tailwind CSS", icon: "/src/assets/tech/tailwind.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "/src/assets/tech/python.png" },
      { name: "C#", icon: "/src/assets/tech/c-sharp.png" },
      { name: "Java", icon: "/src/assets/tech/java.png" },
      { name: "Node.js", icon: "/src/assets/tech/node-js.png" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Azure", icon: "/src/assets/tech/azure.png" },
      { name: "SQL Server", icon: "/src/assets/tech/sql-server.png" },
      { name: "Git", icon: "/src/assets/tech/git.svg" },
      { name: "Docker", icon: "/src/assets/tech/docker.png" },
    ],
  },
] as const;

// Projects data
export const PROJECTS_DATA = [
  {
    imageSrc: "/images/apple-project.png",
    subtitle: "KING COUNTY",
    title: "The Extranet — Hazard Waste Management Program",
    description: "Designing end-to-end features, initiating early product concepts, and driving product growth for an Apple hardware subscription program.",
    imageLeft: true,
  },
  {
    imageSrc: "/images/google-project.png",
    subtitle: "GOOGLE DESIGN INTERN",
    title: "Redesigned onboarding flow for Google Drive",
    description: "Conducted user studies and simplified the onboarding experience for millions of users.",
    imageLeft: false,
  },
  {
    imageSrc: "/images/meta-project.png",
    subtitle: "META UI ENGINEER",
    title: "Optimizing React component libraries for speed and scale",
    description: "Built internal tools and reusable component systems to streamline cross-team collaboration.",
    imageLeft: true,
  },
];
