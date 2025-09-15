// src/components/AboutSection.js
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";
import ProgressBar from "./ProgressBar"; // Make sure to import the updated ProgressBar

const AboutSection = () => {
  // useInView hook to detect when the section is visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="about-section" ref={ref}>
      {/* Left Images */}
      <div className="about-left">
        {/* We can also add animations to the images if desired */}
        <div className="top-img">
          <img src={person1} alt="Main" />
        </div>
        <div className="bottom-imgs">
          <img src={person2} alt="Bottom 1" />
          <img src={person3} alt="Bottom 2" />
        </div>
      </div>

      {/* Right Content */}
      <div className="about-right">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <div className="about-header">
            <span className="line"></span>
            <span>-ABOUT US</span>
          </div>
          <h2>AlphaSoft360: Increasing Business Success With Technology</h2>
          <p className="about-description">
            AlphaSoft360 has over 25 years of experience in IT services, developing software applications
            and mobile apps for clients all over the world.
          </p>

          {/* Progress Bars */}
          <div className="progress-bars">
            <ProgressBar label="Software Development" percentage={92} isVisible={inView} />
            <ProgressBar label="Cyber Security" percentage={80} isVisible={inView} />
            <ProgressBar label="Artificial Intelligence" percentage={95} isVisible={inView} />
            <ProgressBar label="Web Development" percentage={78} isVisible={inView} />
          </div>

          <button className="learn-more-btn">Learn-More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;