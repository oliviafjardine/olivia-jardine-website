import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen px-12">

      {/* Title and Profession + Location - bottom left */}
      <div className="absolute bottom-8 left-8">

        <h2 className="text-heading-3 fade-in space-x-2">
          <span>Seattle, WA -</span>
          <span className='italic'>Full-Stack Developer</span>
        </h2>

        <span className="text-image block font-hero uppercase fade-in-left leading-none -mb-3">
          <span className="block text-[10rem]  md:text-[12rem] lg:text-[16rem] xl:text-[18rem]">Olivia</span>
          <span className="block text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem]">Jardine</span>
        </span>

        {/* <div className="mb-6">
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <span className="btn__content">View Resume</span>
          </a>
        </div> */}
      </div>

      {/* Social icons - bottom right */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-4 space-x-0 sm:flex-row sm:space-x-8 sm:space-y-0 text-heading-3 opacity-90">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-heading-1 transition-colors"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-heading-1 transition-colors"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-heading-1 transition-colors"
        >
          <Instagram className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
