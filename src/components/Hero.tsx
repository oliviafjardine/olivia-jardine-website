import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[67vh] flex items-center justify-center container-margins overflow-hidden">

      {/* Professional Glass Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle Glass Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-indigo-500/5 to-purple-600/3 rounded-full blur-3xl"></div>
      </div>

      {/* Professional Layout */}
      <div className="w-full relative z-10">

        {/* Location Badge */}
        <div className="absolute top-16 left-0 fade-in">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-r-xl px-6 py-3 shadow-lg">
            <div className="text-slate-300 text-sm font-light tracking-[0.2em]">
              SEATTLE, WA
            </div>
          </div>
        </div>

        {/* Role Badge */}
        <div className="absolute bottom-16 right-0 fade-in">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-l-xl px-6 py-3 shadow-lg">
            <div className="text-slate-300 text-sm font-light tracking-[0.2em]">
              FULL-STACK DEVELOPER
            </div>
          </div>
        </div>

        {/* Center - Professional Glass Name */}
        <div className="flex items-center justify-center h-full">
          <div className="relative fade-in-left">

            {/* Professional Glass Panel */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/15 via-white/8 to-white/5 border border-white/20 rounded-3xl p-16 md:p-20 lg:p-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-500">

              {/* Subtle Glass Reflection */}
              <div className="absolute top-6 left-6 right-6 h-1/3 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-t-3xl pointer-events-none"></div>

              {/* Clean Typography */}
              <div className="relative z-10">
                <div className='text-xl md:text-2xl lg:text-3xl xl:text-[2rem] 2xl:text-[4rem] leading-[0.85] tracking-tight'>
                  OLIVIA JARDINE
                </div>
              </div>

              {/* Minimal Glass Accents */}
              <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-white/30 rounded-tl-2xl"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-white/30 rounded-br-2xl"></div>

              {/* Subtle Depth Shadow */}
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-light leading-[0.85] tracking-tight opacity-10 blur-sm transform translate-x-2 translate-y-2 -z-10">
                <div className="text-slate-800">
                  OLIVIA<br/>JARDINE
                </div>
              </div>

              {/* Professional Edge Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl -z-20"></div>
            </div>

            {/* Minimal Glass Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 backdrop-blur-md bg-white/15 border border-white/25 rounded-xl shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 backdrop-blur-md bg-white/15 border border-white/25 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Glassmorphism Social Icons */}
      <div className="absolute bottom-8 left-0 flex space-x-4 text-heading-3">
        {[
          {
            href: 'https://github.com/olivia-jardine',
            label: 'GitHub',
            Icon: Github,
          },
          {
            href: 'https://linkedin.com/in/olivia-jardine',
            label: 'LinkedIn',
            Icon: Linkedin,
          },
          {
            href: 'https://instagram.com/olivia.jardine',
            label: 'Instagram',
            Icon: Instagram,
          },
        ].map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 transform shadow-lg"
          >
            <Icon className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
