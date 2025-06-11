import Hero from '../components/Hero';
import About from '../components/sections/AboutSection';
import Portfolio from '../components/sections/PortfolioSection';
import Skills from '../components/sections/SkillsSection';
import Contact from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <section id="portfolio">
        <Portfolio isHome />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About isHome />
      </section>
      <section id="contact">
        <Contact isHome />
      </section>
    </div>
  );
};

export default Home;