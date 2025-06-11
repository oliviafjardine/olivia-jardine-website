import { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center container-margins overflow-hidden">
      {/* 🔁 Background looping video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/media/dark-blue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✏️ Foreground Content */}
      <div className="relative z-10 space-y-4">
        <p className="text-muted text-md sm:text-base md:text-lg tracking-wider">
          SOFTWARE DEVELOPER
        </p>

        <h1 className="text-zinc-300 font-[430] text-5xl sm:text-6xl tracking-normal max-w-4xl">
          <span className="text-light">Olivia Jardine</span> is a software developer and business owner based in Seattle, WA.
        </h1>
      </div>

      {/* 🔗 Resume + Social Icons in One Pill */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
  {/* Resume Button */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative transition-all duration-200 hover:scale-105 bg-white/10 backdrop-blur-md rounded-full px-4 h-10 flex items-center justify-center text-sm font-medium text-light shadow-md overflow-hidden"
  >
    <span className="absolute h-[150px] w-[50px] bg-white opacity-20 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-250 group-hover:left-[95%]" />
    <span className="relative z-10">Resume</span>
  </a>

  {/* Social Icons */}
  {[
    {
      href: 'https://github.com/oliviafjardine',
      icon: '/src/assets/icons/github.png',
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/olivia-jardine',
      icon: '/src/assets/icons/linkedin.png',
      label: 'LinkedIn',
    },
  ].map(({ href, icon, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative transition-all duration-200 hover:scale-110 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center shadow-md overflow-hidden"
      aria-label={label}
    >
      <span className="absolute h-[150px] w-[50px] bg-white opacity-20 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-220 group-hover:left-[95%]" />
      <img src={icon} alt={label} className="w-6 h-6 relative z-10" />
    </a>
  ))}
</div>
    </section>
  );
};

export default Hero;
