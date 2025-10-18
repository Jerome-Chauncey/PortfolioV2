import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="px-6 md:px-20 py-20 text-center"
  >
    <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
      Feel free to reach out for collaborations, project inquiries, or just a friendly chat!
    </p>
    
    {/* Social Media Icons */}
    <div className="flex justify-center gap-6 mb-8">
      <a 
        href="#" 
        className="text-2xl text-gray-400 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a 
        href="#" 
        className="text-2xl text-gray-400 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href="#" 
        className="text-2xl text-gray-400 hover:text-white transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a 
        href="#" 
        className="text-2xl text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>

    {/* Email Button */}
    <a
      href="mailto:chaunceyjerome@icloud.com"
      className="inline-flex items-center gap-2 text-lg font-medium border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-gray-900 transition-colors"
    >
      <FaEnvelope />
      Get in touch
    </a>
  </motion.section>
);

export default Contact;