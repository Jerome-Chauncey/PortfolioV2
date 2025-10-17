import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";

const Hero = () => {
  const text = "Jerome Chauncey — Digital Creator & Trader";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 relative pt-2">
      {/* Left text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-4 mt-20 md:mt-0"
      >
        <h1 className="text-4xl md:text-5xl font-semibold border-l-4 border-white pl-4 text-white">
          {displayed}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </motion.div>

      {/* Right terminal */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 sticky top-10 mt-10 md:mt-0"
      >
        <Terminal />
      </motion.div>
    </section>
  );
};

export default Hero;