import { Mail, MapPin } from 'lucide-react';


interface ContactSectionProps {
  isHome?: boolean;
}

export default function ContactSection({ isHome = false }: ContactSectionProps) {
  return (
    <section className="mt-10 mb-20 min-h-screen">
      {/* Header Section - Full Width */}
      <div className="w-full bg-[url(/src/assets/city.jpg)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="container-margins">
          <h1 className="text-center pt-50 text-white">
            {isHome
              ? "Send me a message!"
              : "Send me a message - for inquiries, project collaborations, or socially!"}
          </h1>
        </div>
      </div>

      {/* Content Section - With Container Margins */}
      <div className="container-margins flex flex-col items-center">

      <img src="/src/assets/profile-pic.jpg" alt="profile" className="rounded-full object-cover w-48 h-auto border border-white border-4 -mt-24 mb-8"/>

      {/* Social Media Links */}
      <div className="flex space-x-4 mb-10">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <a href="https://github.com/olivia-jardine" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/github.png" alt="GitHub" className="social-icon" />
          </a>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <a href="https://linkedin.com/in/olivia-jardine" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <a href="https://instagram.com/olivia.jardine" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons/instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </button>
      </div>

      {/* Profile Contact Information */}
      <div className="w-3/4 max-w-2xl bg-white border border-gray-200 shadow-sm rounded-lg p-10 mb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-gray-600" aria-hidden="true" />
            <span className="text-gray-800 text-base">Seattle, WA</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-gray-600" aria-hidden="true" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=oliviajardine9@gmail.com"
              target="_blank"
              className="text-blue-600 hover:underline text-base"
            >
              oliviajardine9@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative w-3/4 max-w-2xl bg-white border border-gray-200 shadow-sm rounded-lg p-10">
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm mb-1">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="Your first name"
                className="form-input-style"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm mb-1">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Your last name"
                className="form-input-style"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="form-input-style"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject of your message"
              className="form-input-style"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className="form-input-style"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn text-sm bg-blue-600 hover:bg-blue-800 text-white font-semibold duration-300">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
