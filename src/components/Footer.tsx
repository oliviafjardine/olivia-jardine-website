import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-footer py-6 mt-auto text-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img src="/src/assets/icons/logo.svg" alt="logo" className='w-12 h-auto mb-2'/>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-6">
          <div className="lg:col-span-4">
            <h5 className="uppercase font-semibold mb-2">OLIVIA JARDINE</h5>
            <p className="text-sm">
              Full-stack developer who brings about clean design, math, and machine learning. Always learning, always building.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h5 className="uppercase font-semibold mb-2">Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="uppercase font-semibold mb-2">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>Seattle, WA</li>
              <li>oliviajardine9@gmail.com</li>
              <li>Available for hire</li>
            </ul>
            
            <div className="flex space-x-3 mt-2 text-xl text-gray-600">
            <a
              href="https://github.com/olivia-jardine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/olivia-jardine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/olivia.jardine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>

          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="container mx-auto text-center">
          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Olivia Jardine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
