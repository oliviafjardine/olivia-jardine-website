# Olivia Jardine - Portfolio Website

A modern, professional portfolio website featuring advanced glassmorphism design and responsive layouts. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Design
- **Professional Glassmorphism**: Advanced glass morphism effects with backdrop blur and transparency
- **Asymmetrical Blob Hero**: Unique wavy glass container for the main hero section
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Consistent Margins**: Unified container margins across all sections matching footer layout
- **Modern Typography**: Clean, professional fonts with gradient text effects

### Technical
- **React 19**: Latest React with modern hooks and components
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS 4**: Latest Tailwind with custom theme and components
- **React Router**: Client-side routing for smooth navigation
- **Lucide React**: Modern icon library for social media and UI icons
- **Vite**: Fast development server and optimized builds

### Sections
- **Hero**: Glassmorphism blob with "OLIVIA JARDINE" in large typography
- **About**: Personal introduction and background information
- **Skills**: Technical skills and expertise showcase
- **Portfolio**: Project showcase and work samples
- **Contact**: Contact form and professional information

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd olivia-jardine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Colors
- **Primary**: Slate grays for professional appearance
- **Accent**: Blue to indigo to purple gradients
- **Glass**: White with various transparency levels (5%, 10%, 15%, 20%)
- **Background**: Subtle gradient orbs for depth

### Typography
- **Hero**: 6xl to 12rem responsive scaling
- **Headings**: Professional font weights with proper hierarchy
- **Body**: Clean, readable text with appropriate line heights

### Glassmorphism Components
- **Backdrop Blur**: `backdrop-blur-xl` for authentic glass effect
- **Transparency**: Carefully balanced opacity levels
- **Borders**: Subtle white borders with transparency
- **Shadows**: Professional shadow system for depth

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Main hero section with glassmorphism blob
│   ├── Navbar.tsx            # Navigation with consistent margins
│   ├── Layout.tsx            # Main layout wrapper
│   └── sections/
│       ├── AboutSection.tsx   # About content
│       ├── SkillsSection.tsx  # Skills showcase
│       ├── PortfolioSection.tsx # Project portfolio
│       └── ContactSection.tsx # Contact form and info
├── pages/
│   ├── Home.tsx              # Homepage with all sections
│   ├── About.tsx             # Dedicated about page
│   ├── Skills.tsx            # Dedicated skills page
│   ├── Portfolio.tsx         # Dedicated portfolio page
│   ├── Contact.tsx           # Dedicated contact page
│   └── NotFound.tsx          # 404 error page
├── assets/                   # Images and static files
├── index.css                 # Global styles and Tailwind config
└── main.tsx                  # Application entry point
```

## 🛠 Customization

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, location, and role
   - Modify social media links

2. **Contact Information** (`src/components/sections/ContactSection.tsx`):
   - Update email, location, and social links
   - Modify professional description

3. **About Section** (`src/components/sections/AboutSection.tsx`):
   - Update personal background and education
   - Modify professional description

### Styling Modifications

1. **Colors** (`src/index.css`):
   ```css
   @theme {
     --color-bg: 225 0% 95%;
     --heading-1: 225 0% 10%;
     /* Modify theme colors here */
   }
   ```

2. **Container Margins** (`src/index.css`):
   ```css
   .container-margins {
     @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
   }
   ```

3. **Glassmorphism Effects**:
   - Modify `backdrop-blur` values for different glass intensity
   - Adjust transparency levels (`bg-white/15`, etc.)
   - Update border opacity (`border-white/20`, etc.)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

All components are fully responsive with appropriate scaling and layout adjustments.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is private and proprietary to Olivia Jardine.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS