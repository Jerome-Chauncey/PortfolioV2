import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="px-6 md:px-20 py-20 text-center"
  >
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <p className="text-gray-700 mb-6">
      Feel free to reach out for collaborations, project inquiries, or just a friendly chat!
    </p>
    <a
      href="mailto:chaunceyjerome@icloud.com"
      className="text-lg font-medium border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
    >
      Get in touch
    </a>
  </motion.section>
);

export default Contact;
