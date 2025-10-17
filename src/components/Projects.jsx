import React from "react";
import { motion } from "framer-motion";
import AsciiAnimation from "./AsciiAnimation.jsx";

const projectsData = [
  {
    title: "Personal Portfolio V2",
    description: "A sleek, responsive portfolio showcasing my skills and projects, built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    image: "/assets/images/project2.png",
    alt: "Personal Portfolio Website Screenshot"
  },
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce site with product listings, cart, and checkout functionalities.",
    tech: ["React", "Stripe", "Firebase"],
    image: "/assets/images/project1.png",
    alt: "E-commerce Website Screenshot"
  },
  {
    title: "Blog Platform",
    description: "A modern blog with user authentication, post creation, and a rich text editor for comments.",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    image: "/assets/images/currency_converter.png",
    alt: "Blog Platform Screenshot"
  },
  {
    title: "Data Visualization App",
    description: "An interactive dashboard visualizing complex datasets with dynamic charts and graphs using D3.js.",
    tech: ["D3.js", "JavaScript", "SVG"],
    image: "/assets/images/Forex_Bureau.png",
    alt: "Data Visualization Dashboard"
  },
  {
    title: "Mobile App UI Kit",
    description: "A comprehensive collection of UI components for building sleek and modern mobile applications.",
    tech: ["Figma", "Design System"],
    image: "/assets/images/worksphere.png",
    alt: "Mobile App UI Kit Design"
  },
  {
    title: "Open Source Library",
    description: "A reusable library of utility functions designed to streamline common development tasks.",
    tech: ["TypeScript", "NPM", "Jest"],
    image: "/assets/images/tuinue_wasichana.png",
    alt: "Open Source Library Code"
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mr-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark font-display relative"
  >
    
    <div className="flex items-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-heading-light dark:text-heading-dark flex-grow">
        <span className="text-primary mr-2"></span> Some Things I've Built
      </h2>
      <div className="h-px bg-content-light/20 dark:bg-content-dark/20 flex-1 ml-4"></div>
    </div>

    {/* Main container with projects and GIF side by side */}
    <div className="flex flex-col lg:flex-row">
      {/* Projects section - fixed width to maintain size */}
      <div className="w-full lg:w-2/3">
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row items-center bg-background-light dark:bg-background-dark/50 hover:bg-background-dark/70 rounded-xl p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:shadow-2xl overflow-hidden gap-6"
            >
              {/* Image Container - High Quality */}
              <div className="w-full lg:w-1/2 h-48 lg:h-56 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex-shrink-0 relative">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="material-symbols-outlined text-gray-500 text-4xl">
                    image
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <span className="material-symbols-outlined text-primary text-4xl">folder</span>
                  <a className="text-content-light dark:text-content-dark hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-content-light dark:text-content-dark/80 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-x-4 text-xs sm:text-sm font-mono text-content-light dark:text-content-dark flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GIF on the right side - positioned absolutely */}
<div className="w-full lg:w-1/3">
  <div className="sticky top-8">
    <div className="relative lg:left-44 pt-8 lg:pt-0 px-4 lg:px-0">
      <AsciiAnimation />
    </div>
  </div>
</div>

    </div>
  </motion.section>
);

export default Projects;