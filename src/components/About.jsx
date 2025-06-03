import React from 'react';
import { FaLeaf, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2>About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a lifelong learner passionate about solving real-world problems through the intersection of <span className="highlight">technology</span>, <span className="highlight">data</span>, and <span className="highlight">sustainability</span>.
              </p>
              
              <p>
                My unconventional journey has taken me from trading financial markets using proprietary strategies, to leading cross-border research initiatives during COVID-19, to hands-on agricultural ventures like mushroom cultivation and organic lettuce farming.
              </p>
              
              <p>
                Currently, I'm honing my full-stack development skills at Moringa School while applying my diverse experience to build practical, impactful solutions.
              </p>
            </div>
            
            <div className="about-icons">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="icon-card"
              >
                <FaChartLine className="icon" />
                <span>Financial Markets</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="icon-card"
              >
                <FaLaptopCode className="icon" />
                <span>Tech Solutions</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="icon-card"
              >
                <FaLeaf className="icon" />
                <span>Sustainable Agriculture</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;