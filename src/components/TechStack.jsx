import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython,
  FaNodeJs, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiDjango, 
  SiHeroku,
  SiReact,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiRender,
  SiJson
} from 'react-icons/si';

const TechStack = () => {
  const categories = [
    {
      title: "Languages & Markup",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Render", icon: <SiRender /> },

      ]
    }
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <h2>Tech Stack</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3 className="category-title">{category.title}</h3>
              <div className="tools-container">
                {category.items.map((tool, i) => (
                  <div key={i} className="tool-item">
                    <div className="tool-icon">{tool.icon}</div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;