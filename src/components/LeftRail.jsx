import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const LeftRail = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden md:flex flex-col fixed left-0 top-0 h-full w-16 border-r border-gray-700 items-center justify-between py-6 bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-6 text-2xl">
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
        
        {/* Download Resume Icon */}
        <a 
          href="/path/to/your-resume.pdf" 
          download
          className="text-gray-400 hover:text-white transition-colors"
          title="Download Resume"
        >
          <FaDownload />
        </a>
      </div>
      <div className="w-[1px] h-20 bg-gray-600"></div>
    </motion.aside>
  );
};

export default LeftRail;