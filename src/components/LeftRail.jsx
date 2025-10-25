import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const LeftRail = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden md:flex flex-col fixed left-0 top-0 h-full w-16 border-r border-gray-700 items-center justify-between py-6 bg-gray-900/50 backdrop-blur-sm z-50 pointer-events-auto"
    >
      <div className="flex flex-col gap-6 text-2xl pointer-events-auto">
        <a 
          href="https://github.com/Jerome-Chauncey" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors pointer-events-auto p-2"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/jerome-chauncey/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors pointer-events-auto p-2"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://www.instagram.com/chaunceyyy__/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors pointer-events-auto p-2"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="w-[1px] h-20 bg-gray-600"></div>
    </motion.aside>
  );
};

export default LeftRail;