import Hero from '../components/Hero';
import About from '../components/sections/AboutSection';
import Portfolio from '../components/sections/PortfolioSection';
import Skills from '../components/sections/SkillsSection';
import Contact from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="space-y-20">
      <section id="hero">
        <Hero />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;