import { useRef, useEffect } from 'react';
import darkBlueVideo from '../../assets/media/dark-blue.mp4';

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Custom filled GitHub icon component
  const GithubFilled = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  // Custom filled LinkedIn icon component
  const LinkedinFilled = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
    </svg>
  );

  // Email icon component
  const EmailIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
    </svg>
  );

  return (
    <footer className="relative h-96 flex flex-col items-center justify-center overflow-hidden">
      {/* Background looping video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={darkBlueVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 container-margins">
        {/* Name */}
        <h2 className="text-light text-3xl sm:text-4xl tracking-normal">
          Olivia Jardine
        </h2>
        
        {/* Tagline */}
        <p className="text-muted text-sm sm:text-base tracking-wider text-center">
          SOFTWARE ENGINEER • SEATTLE, WA
        </p>

        {/* Resume + Social Icons */}
        <div className="flex items-center gap-4">

          {/* Social Icons */}
          {[
            {
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=oliviajardine9@gmail.com',
              icon: EmailIcon,
              label: 'Email',
            },
            {
              href: 'https://github.com/oliviafjardine',
              icon: GithubFilled,
              label: 'GitHub',
            },
            {
              href: 'https://linkedin.com/in/olivia-jardine',
              icon: LinkedinFilled,
              label: 'LinkedIn',
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-200 hover:scale-110 bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-md overflow-hidden"
              aria-label={label}
            >
              <span className="absolute h-[150px] w-[50px] bg-white opacity-20 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-220 group-hover:left-[95%]" />
              <Icon className="w-6 h-6 text-white/80 relative z-10" />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-all duration-200 hover:scale-105 bg-white/10 backdrop-blur-md rounded-full px-6 h-12 flex items-center justify-center text-sm font-medium text-white/80 shadow-md overflow-hidden"
          >
            <span className="absolute h-[150px] w-[50px] bg-white opacity-20 left-[-75px] top-[-40px] rotate-[37deg] transition-all duration-250 group-hover:left-[95%]" />
            <span className="relative z-10">Resume</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white/60 text-xs sm:text-sm text-center mt-8">
          © {new Date().getFullYear()} Olivia Jardine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;