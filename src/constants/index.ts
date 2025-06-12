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
    subtitle: "PROJECT NODE FLOW",
    title: "Node Flow — Interactive Data Structures & Algorithms Visualizer",
    description: "Conducted user studies and simplified the onboarding experience for millions of users.",
    imageLeft: false,
    mobileImageHeight: "h-auto",
    mobileImageWidth: "w-80",
    desktopImageWidth: "w-56 md:w-72 lg:w-96",
    desktopImageHeight: "h-auto",
  },
  {
    imageSrc: "/images/meta-project.png",
    subtitle: "META UI ENGINEER",
    title: "Optimizing React component libraries for speed and scale",
    description: "Built internal tools and reusable component systems to streamline cross-team collaboration.",
    imageLeft: true,
    mobileImageHeight: "h-auto",
    mobileImageWidth: "w-72",
    desktopImageWidth: "w-80 md:w-[28rem] lg:w-[36rem]",
    desktopImageHeight: "h-auto",
  },
];