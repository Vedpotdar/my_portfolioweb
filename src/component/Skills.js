import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import mongoDbLogo from "../image/mongodb.png";
import expressLogo from "../image/Express.png";
import reactLogo from "../image/react.png";
import nodeJsLogo from "../image/nodejs.png";
import HTMLLogo from "../image/HTML.png";
import CSSLogo from "../image/CSS.png";
import jsLogo from "../image/js.png";
import MySqlLogo from "../image/MySql.png";
import AWSLogo from "../image/AWS.png";
import bootstrapLogo from "../image/bootstrap.png";
import "./Skills.css";
import {Container } from "react-bootstrap";

const skillsData = [
  { name: "HTML", proficiency: "Advanced", logo: HTMLLogo },
  { name: "CSS", proficiency: "Advanced", logo: CSSLogo },
  { name: "JavaScript", proficiency: "Advanced", logo: jsLogo },
  { name: "Bootstrap", proficiency: "Advanced", logo: bootstrapLogo },
  { name: "React", proficiency: "Expert", logo: reactLogo },
  { name: "Node.js", proficiency: "Advanced", logo: nodeJsLogo },
  { name: "Express.js", proficiency: "Advanced", logo: expressLogo },
  { name: "MongoDB", proficiency: "Intermediate", logo: mongoDbLogo },
  { name: "MySQL", proficiency: "Intermediate", logo: MySqlLogo },
  { name: "AWS", proficiency: "Intermediate", logo: AWSLogo },
];

const Skills = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1, // Adjust this value to control when the animation starts
      });

      return (
        <Container>
        <h2 className="skills-head">My Skills</h2>
        <div className="skills-container" ref={ref}>
          {skillsData.map((skill, index) => (
            <div className="all-skill">
            <motion.div
              className="skill"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>

              <img src={skill.logo} alt={skill.name} />
              <div className="skill-details">
                <h3>{skill.name}</h3>
                <p>Proficiency: {skill.proficiency}</p>
              </div>
      
            </motion.div>
            </div>
          ))}
        </div>
        </Container>
      );
};

export default Skills;
