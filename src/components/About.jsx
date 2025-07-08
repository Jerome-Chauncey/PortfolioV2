import React from "react";
import { FaLeaf, FaChartLine, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
                I began as a financial markets trader, mastering risk management
                and data-driven decision making. I advanced to project
                leadership, optimizing workflows and guiding teams to success.
                Venturing into sustainable agriculture, I designed automated
                farming systems and honed my technical problem-solving. Now, as
                a junior Software Engineering student at Moringa School, I
                develop user-centered web applications using HTML, CSS,
                JavaScript, and React, and I am eager to gain hands-on
                experience in real-world projects.
              </p>

              <h3>Technical Skills:</h3>
              <ul className="skills-list">
                <li>
                  Frontend development with React, Bootstrap, and responsive
                  design
                </li>
                <li>
                  Backend APIs using Flask, RESTful principles, and database
                  modeling with PostgreSQL
                </li>
                <li>
                  Proficient in Python, JavaScript (ES6+), SQL, and Git-based
                  workflows
                </li>
                <li>
                  Test-driven development, debugging, and version control
                  practices
                </li>
                <li>
                  Agile methodologies, pair programming, and collaborative code
                  reviews
                </li>
              </ul>


            </div>

            <div className="about-icons">
              <motion.div whileHover={{ scale: 1.1 }} className="icon-card">
                <FaChartLine className="icon" />
                <span>Financial Markets</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="icon-card">
                <FaLaptopCode className="icon" />
                <span>Tech Solutions</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="icon-card">
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
