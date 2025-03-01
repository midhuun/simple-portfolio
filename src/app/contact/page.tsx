'use client';
import { Mail, Phone, MapPin } from "lucide-react";
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} // Start blurred, small & hidden
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly appear, scale up & remove blur
    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth cinematic transition
    className=""
  >
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>

      <div className="bg-[var(--work-bg)] p-6 md:p-10 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="flex items-center gap-3">
            <Mail className="text-[var(--secondary)] w-6 h-6" />
            <p className="text-[var(--foreground)] text-sm md:text-md">midhuun.2003@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Phone className="text-[var(--secondary)] w-6 h-6" />
            <p className="text-[var(--foreground)] font-mono text-sm md:text-md">+91 8778838697</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <MapPin className="text-[var(--secondary)] w-6 h-6" />
            <p className="text-[var(--foreground)] text-sm md:text-md">Banglore,karnataka, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-[var(--secondary)] text-sm">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-transparent border border-[var(--secondary)] rounded-md focus:outline-none focus:border-[var(--foreground)] text-[var(--foreground)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[var(--secondary)] text-sm">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-transparent border border-[var(--secondary)] rounded-md focus:outline-none focus:border-[var(--foreground)] text-[var(--foreground)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[var(--secondary)] text-sm">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="p-3 bg-transparent border border-[var(--secondary)] rounded-md focus:outline-none focus:border-[var(--foreground)] text-[var(--foreground)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--foreground)] text-[var(--background)] py-3 rounded-md font-semibold hover:opacity-80 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;
