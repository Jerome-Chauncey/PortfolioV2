import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const LeftRail = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden md:flex flex-col fixed left-0 top-0 h-full w-16 border-r border-gray-200 items-center justify-between py-6"
    >
      <div className="flex flex-col gap-6 text-2xl">
        <a href="#" className="hover:text-gray-600 transition-colors"><FaGithub /></a>
        <a href="#" className="hover:text-gray-600 transition-colors"><FaLinkedin /></a>
        <a href="#" className="hover:text-gray-600 transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-600 transition-colors"><FaInstagram /></a>
        
        {/* Download Resume Icon */}
        <a 
          href="/path/to/your-resume.pdf" 
          download
          className="hover:text-gray-600 transition-colors"
          title="Download Resume"
        >
          <FaDownload />
        </a>
      </div>
      <div className="w-[1px] h-20 bg-gray-300"></div>
    </motion.aside>
  );
};

export default LeftRail;