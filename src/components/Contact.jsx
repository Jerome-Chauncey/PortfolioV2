import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact & Links</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <a 
              href="https://github.com/jerome-chauncey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="contact-card">
            <a 
              href="https://www.linkedin.com/in/jerome-chauncey/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="contact-card email-card">
            <a 
              href="mailto:jerome.chauncey@student.moringaschool.com" 
              className="contact-link"
            >
              <FaEnvelope className="contact-icon" />
              <span>Email</span>
            </a>
            <div className="email-text">jerome.chauncey@student.moringaschool.com</div>
          </div>
          
          <div className="contact-card">
            <a 
              href="https://wa.me/254714923182" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp className="contact-icon" />
              <span>WhatsApp</span>
            </a>
            <div className="phone-text">+254 714 923 182</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;