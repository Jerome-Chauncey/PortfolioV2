import React from 'react';
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaGithub, FaNode, FaPython,
  FaAws, FaDatabase 
} from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiDjango, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "AWS", icon: <FaAws /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;