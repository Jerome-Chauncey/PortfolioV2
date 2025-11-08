import React from "react";
import { motion } from "framer-motion";
import AsciiAnimation from "./AsciiAnimation.jsx";

const projectsData = [
  {
    title: "Case Kulture Ke",
    description: "Case Kulture is an online store offering trendy phone cases and accessories, focused on stylish, high-quality, and functional designs for everyday use.",
    tech: ["Shopify", "Canva", "Google Cloud Console"],
    image: "/assets/images/case_kulture_ke.png",
    alt: "Case Kulture Ke Screenshot",
    link: "https://casekultureke.com/",
  },
  {
    title: "Worksphere",
    description: "A job marketplace web platform with ML-powered job matching.",
    tech: ["Laravel", "Tailwind", "MySQL", "Python"],
    image: "/assets/images/worksphere.png",
    alt: "Worksphere Screenshot",
    link: "http://ec2-13-60-32-165.eu-north-1.compute.amazonaws.com/",
  },
  {
    title: "Tuinue Wasichana",
    description: "Tuinue Wasichana is a web application designed to empower girls across Africa by addressing period poverty and educational barriers.",
    tech: ["React", "Bootstrap", "Flask", "SQLAlchemy", "PostgreSQL", "Python"],
    image: "/assets/images/tuinue_wasichana.png",
    alt: "Tuinue Wasichana Screenshot",
    link: "https://tuinue-wasichana-v3-1.onrender.com/",
  },
  {
    title: "Currency Converter CLI",
    description: "A beginner-friendly, interactive command-line application to manage currencies and convert between them.",
    tech: ["Python", "CLI"],
    image: "/assets/images/currency_converter.png",
    alt: "Currency Converter CLI Screenshot",
    link: "https://github.com/Jerome-Chauncey/currency-converterv1",
  },
  {
    title: "Forex Bureau",
    description: "A modern online Forex bureau web application that allows users to sign up, upload KYC documents, view live currency rates, place and track exchange orders, manage rate alerts, and browse FAQs. This README covers project overview, setup, migrations, running server and client, and deployment configuration.",
    tech: ["Python", "Flask", "PostgreSQL", "React", "Bootstrap"],
    image: "/assets/images/Forex_Bureau.png",
    alt: "Forex Bureau Screenshot",
    link: "https://forex-bureau-ui.onrender.com/",
  },
  {
    title: "One Percent V2",
    description: "A team-based React SPA that refines the original with enhanced UI, component architecture, and responsive design.",
    tech: ["React", "Bootstrap", "TradingView Widgets", "Render", "Javascript"],
    image: "/assets/images/project2.png",
    alt: "One Percent V2 Design",
    link: "https://one-percent-react-revival-v2.onrender.com/",
  },
  {
    title: "One Percent",
    description: "One Percent empowers traders and financial professionals to uphold integrity in the markets. Rather than waiting for regulators to act, we promote proactive self-regulation to ensure fairness, transparency, and trust.",
    tech: ["HTML", "JavaScript", "Bootstrap", ],
    image: "/assets/images/project1.png",
    alt: "One Percent",
    link: "https://jerome-chauncey.github.io/One-Percent/",
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mr-auto px-4 sm:px-28 lg:px-20 py-12 sm:py-16 bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark font-display relative"
  >
    <div className="flex items-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white flex-grow">
        <span className="text-primary mr-2"></span> Some Things I've Built
      </h2>
      <div className="h-px bg-content-light/20 dark:bg-content-dark/20 flex-1 ml-4"></div>
    </div>

    {/* Main container with projects and GIF side by side */}
    <div className="flex flex-col lg:flex-row">
      {/* Projects Section */}
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
              {/* Image Container */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-1/2 h-48 lg:h-56 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex-shrink-0 relative"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateZ(0)",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="material-symbols-outlined text-gray-500 text-4xl">
                    image
                  </span>
                </div>
              </a>

              {/* Project Info */}
              <div className="flex-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <span className="material-symbols-outlined text-white text-4xl">folder</span>
                  <a
                    className="text-content-light light:text-content-dark hover:text-primary transition-colors"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-300 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-x-4 text-xs sm:text-sm font-mono text-white flex-wrap gap-2">
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

      {/* GIF / Animation Section */}
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
