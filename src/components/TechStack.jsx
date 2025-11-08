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
  SiJson,
  SiFlask,
} from 'react-icons/si';

const ShopifyIcon = ({ className = "" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
    width="1em" 
    height="1em"
  >
    <path d="M18.26 3.883c-.313 0-.626.105-.835.313l-1.463 1.464 3.13 3.13 1.463-1.463c.418-.418.418-1.15 0-1.57l-1.672-1.67a1.175 1.175 0 0 0-.835-.314zm-3.13 3.13L4.152 17.994l-.104 4.241 4.17-.104L19.13 8.013l-3.13-3.13-1.463 1.463zM3.12 17.995c0 .104.104.208.104.313l-.73 2.96 2.96-.73c.105 0 .21 0 .314.104L3.12 17.995z"/>
  </svg>
);

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
        { name: "Flask", icon: <SiFlask /> }
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Render", icon: <SiRender /> },
        { name: "JSON Server", icon: <SiJson /> },
        { name: "Shopify", icon: <ShopifyIcon /> }

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