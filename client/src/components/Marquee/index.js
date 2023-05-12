import React, { useState } from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [-1000, 1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
  animate2: {
    x: [1000, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
    const [ isHovering, setIsHovering ] = useState(false);
    const [ isHovering2, setIsHovering2 ] = useState(false);
    const [ isHovering3, setIsHovering3 ] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleMouseOver2 = () => {
        setIsHovering2(true);
    }

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    }

    const handleMouseOver3 = () => {
        setIsHovering3(true);
    }

    const handleMouseOut3 = () => {
        setIsHovering3(false);
    }

    return (
    <div>
        <div className="marquee">
            <motion.div
                className="marquee-flex"
                variants={marqueeVariants}
                animate="animate"
            >
                <h1>HTML*</h1>
                <h1>CSS*</h1>
                <h1>JavaScript*</h1>
                <h1>jQuery*</h1>
                <h1>npm</h1>
                <h1>Node*</h1>
                <h1>Express*</h1>
            </motion.div>
        </div>
        <div className="marquee-p-container">
            <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="marquee-p">Languages + Frameworks</a>
            <a onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} className="marquee-p">Backend Technologies + Databases</a>
            <a onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} className="marquee-p">Development Tools</a>
        </div>
        {isHovering &&  (
        <div className="hidden-div">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Framer Motion</p>
        </div>
        )}
        {isHovering2 && (
        <div className="hidden-div">
            <p>Node.js</p>
            <p>NPM</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>SQL</p>
            <p>GraphQl</p>
        </div>
        )}
        {isHovering3 && ( 
        <div className="hidden-div">
            <p>Git</p>
            <p>Heroku</p>
            <p>Visual Studio Code</p>
            <p>GoDaddy</p>
        </div>
        )}
        <div className="marquee">
            <motion.div
                className="marquee-flex"
                variants={marqueeVariants}
                animate="animate2"
            >
                <h1>SQL*</h1>
                <h1>MySQL*</h1>
                <h1>MongoDB*</h1>
                <h1>React*</h1>
                <h1>Bootstrap*</h1>
                <h1>Git*</h1>
                <h1>Heroku</h1>
            </motion.div>
      </div>
    </div>
  );
};

export default Marquee;