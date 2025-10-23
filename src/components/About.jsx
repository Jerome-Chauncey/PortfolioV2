import React from "react";
import { motion } from "framer-motion";
import Journey from "./Journey";

// Tech Stack with Image Links (clean without backgrounds)
const TechIcons = {
  HTML: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      alt="HTML5"
      className="w-8 h-8"
    />
  ),
  CSS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      alt="CSS3"
      className="w-8 h-8"
    />
  ),
  JavaScript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      className="w-8 h-8"
    />
  ),
  Python: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      alt="Python"
      className="w-8 h-8"
    />
  ),
  SQL: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      alt="SQL"
      className="w-8 h-8"
    />
  ),
  React: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      className="w-8 h-8"
    />
  ),
  Flask: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
      alt="Flask"
      className="w-8 h-8"
    />
  ),
  Bootstrap: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      alt="Bootstrap"
      className="w-8 h-8"
    />
  ),
  Git: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      alt="Git"
      className="w-8 h-8"
    />
  ),
  GitHub: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      className="w-8 h-8"
    />
  ),
  Render: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
      alt="Render"
      className="w-8 h-8"
    />
  ),
  JSON: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg"
      alt="JSON"
      className="w-8 h-8"
    />
  ),
  Laravel: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
      alt="Laravel"
      className="w-8 h-8"
    />
  ),
  MySQL: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      alt="MySQL"
      className="w-8 h-8"
    />
  ),
  TypeScript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      className="w-8 h-8"
    />
  ),
  AWS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      alt="AWS"
      className="w-8 h-8"
    />
  ),
};


const About = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 relative pt-2"
  >
    {/* Left content - About text */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1 space-y-6 md:pt-12"
    >
      <h2 className="text-3xl font-semibold text-white">About</h2>
      <p className="text-gray-300 leading-relaxed max-w-lg">
        I’m passionate about merging creativity with technology. My background
        in trading and sustainable agriculture gives me a structured and
        practical approach to problem solving. I build clean, purposeful digital
        experiences using modern design and solid code foundations.
      </p>

      {/* Tech Stack Section */}
      <div className="space-y-8 mt-8">
        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
          <div className="flex flex-wrap gap-8">
            {[
              { name: "HTML", icon: TechIcons.HTML },
              { name: "CSS", icon: TechIcons.CSS },
              { name: "JavaScript", icon: TechIcons.JavaScript },
              { name: "TypeScript", icon: TechIcons.TypeScript },
              { name: "Python", icon: TechIcons.Python },
              { name: "SQL", icon: TechIcons.SQL },
              { name: "Laravel", icon: TechIcons.Laravel },
              { name: "MySQL", icon: TechIcons.MySQL },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-transparent">
                  {tech.icon}
                </div>
                <span className="text-sm mt-3 text-white font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-8">
            {[
              { name: "React", icon: TechIcons.React },
              { name: "Flask", icon: TechIcons.Flask },
              { name: "Bootstrap", icon: TechIcons.Bootstrap },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-transparent">
                  {tech.icon}
                </div>
                <span className="text-sm mt-3 text-white font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-8">
            {[
              { name: "Git", icon: TechIcons.Git },
              { name: "GitHub", icon: TechIcons.GitHub },
              { name: "Render", icon: TechIcons.Render },
              { name: "JSON Server", icon: TechIcons.JSON },
              { name: "AWS", icon: TechIcons.AWS },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-transparent">
                  {tech.icon}
                </div>
                <span className="text-sm mt-3 text-white font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Right content - Journey component */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex-1 sticky top-10 mt-10 md:mt-0"
    >
      <Journey />
    </motion.div>
  </motion.section>
);

export default About;
