import { Mail, MapPin } from 'lucide-react';
import { Button } from '../ui';
import profilePic from '../../assets/profile-pic.jpg';

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32">
      {/* Header Section - Full Width */}
      <div className="w-full h-60 flex flex-col items-center justify-center">
        <div className="container-margins">
          <h1 className="text-center text-gray-800 text-3xl md:text-4xl lg:text-5xl">
            Contact
          </h1>
        </div>
        <div className="w-16 h-0.5 bg-zinc-400 mx-auto mt-2"></div>
      </div>

      {/* Content Section - With Container Margins */}
      <div className="container-margins flex flex-col items-center">

        <img src={profilePic} alt="profile" className="rounded-full object-cover w-48 h-auto border border-white border-4 -mt-12 mb-8"/>

        {/* Profile Contact Information */}
        <div className="w-full max-w-2xl bg-white border border-gray-200 shadow-sm rounded-lg p-10 mb-10">
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
        <div className="relative w-full max-w-2xl bg-white border border-gray-200 shadow-sm rounded-lg p-10">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <Button type="submit" variant="black" size="md">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}