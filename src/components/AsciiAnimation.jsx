// src/components/AsciiAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AsciiAnimation = ({ 
  className = "",
  alt = "ASCII Animation"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 1, 
        ease: "easeOut",
        delay: 0.3 
      }}
      className={`overflow-hidden rounded-lg w-full max-w-md mx-auto lg:max-w-none lg:w-96 xl:w-[800px] pt-8 lg:pt-0 ${className}`}
    >
      <img 
        src="/public/assets/images/ascii-animation.gif"
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default AsciiAnimation;