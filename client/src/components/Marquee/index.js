import React from "react";
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
                <h1>Node*</h1>
                <h1>Express*</h1>
            </motion.div>
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
    </div>
  );
};

export default Marquee;