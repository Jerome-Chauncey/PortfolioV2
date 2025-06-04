import React from 'react';
import onepercent1 from '/public/assets/images/onepercent1.png';
import onepercent2 from '/public/assets/images/onepercent2.png';
import currencyCli from '/public/assets/images/currencyConverter.png'; // Add this image
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "One Percent",
      description: "One Percent helps traders and investors manage risks ethically through education, tools and market insights.",
      image: onepercent1,
      highlights: [
        "Self-Regulation Tools",
        "Market Insights",
        "View and Analyse Live Market Prices"
      ],
      link: "https://jerome-chauncey.github.io/One-Percent/",
      repo: "https://github.com/Jerome-Chauncey/One-Percent"
    },
    {
      title: "One Percent - React Revival V2",
      description: "A collaborative React project focused on promoting self-regulation in financial markets through education, interactive tools, and trading resources. This upgraded version is a refined, responsive Single Page Application (SPA) built with React, Bootstrap, and deployed via Render.",
      image: onepercent2,
      highlights: [
        "📝 Interactive Self-Regulation Checklist",
        "📚 Education Hub",
        "Market Tools",
        "🔒 Login & Logout Functionality",
        "📄 Structured Pages",
        "⚛️ Component-Based Architecture",
        "💅 Modern UI Design"
      ],
      link: "https://one-percent-react-revival-v2.onrender.com/",
      repo: "https://github.com/Jerome-Chauncey/One-Percent---React-Revival-V2"
    },
    {
      title: "💱 Currency Converter CLI",
      description: "A beginner-friendly, interactive command-line application to manage currencies and convert between them. This tool uses Python and SQLAlchemy to model currency relationships and lets you perform full CRUD operations with simple prompts.",
      image: currencyCli,
      highlights: [
        "🔄 Convert currency using stored exchange rates",
        "📋 List all available currencies",
        "🔍 Find currency by code (e.g., USD, EUR)",
        "➕ Create a new currency",
        "✏️ Update a currency",
        "❌ Delete a currency",
        "🚪 Exit the program gracefully"
      ],
      link: "#", // Add your live demo URL if available
      repo: "https://github.com/Jerome-Chauncey/currency-converterv1" // Add your repo URL
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block' 
                  }}
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                        className="project-link"
                      >
                        Live Demo <FaExternalLinkAlt className="link-icon" />
                      </a>
                    )}
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="project-link"
                    >
                      GitHub <FaExternalLinkAlt className="link-icon" />
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;