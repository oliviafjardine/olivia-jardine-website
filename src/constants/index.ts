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

// Skills dataMore actions
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

// Projects data with custom image sizes
export const PROJECTS_DATA = [
  {
    imageSrc: "/src/assets/projects/kcit/iphone-1.png",
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