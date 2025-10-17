import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Personal Portfolio V2",
    description: "A sleek, responsive portfolio showcasing my skills and projects, built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce site with product listings, cart, and checkout functionalities.",
    tech: ["React", "Stripe", "Firebase"],
  },
  {
    title: "Blog Platform",
    description: "A modern blog with user authentication, post creation, and a rich text editor for comments.",
    tech: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    title: "Data Visualization App",
    description: "An interactive dashboard visualizing complex datasets with dynamic charts and graphs using D3.js.",
    tech: ["D3.js", "JavaScript", "SVG"],
  },
  {
    title: "Mobile App UI Kit",
    description: "A comprehensive collection of UI components for building sleek and modern mobile applications.",
    tech: ["Figma", "Design System"],
  },
  {
    title: "Open Source Library",
    description: "A reusable library of utility functions designed to streamline common development tasks.",
    tech: ["TypeScript", "NPM", "Jest"],
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-4xl mr-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark font-display md:px-20 lg:px-20 mt-0 lg:mt-[-100px] xl:mt-[-100px]"
  >
    
    <div className="flex items-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-heading-light dark:text-heading-dark flex-grow">
        <span className="text-primary mr-2"></span> Some Things I’ve Built
      </h2>
      <div className="h-px bg-content-light/20 dark:bg-content-dark/20 flex-1 ml-4"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="group relative flex flex-col bg-background-light dark:bg-background-dark/50 hover:bg-background-dark/70 rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:shadow-2xl"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">folder</span>
            <a className="text-content-light dark:text-content-dark hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
          <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="mt-auto flex items-center gap-x-4 text-xs font-mono text-content-light dark:text-content-dark">
            {project.tech.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    
  </motion.section>
);

export default Projects;