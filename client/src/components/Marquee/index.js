import React, { useState, useEffect, useRef } from "react";
import {  motion, useInView } from 'framer-motion';

const marqueeVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
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
  const ref = useRef(null);
  const isInView = useInView(ref);

    return (
    <div ref={ref}>
        <div className={`marquee ${isInView ? 'slideUp-text' : 'hidden-text'}`} style={{marginBottom: '-3rem'}}>
            <motion.div
                className='marquee-flex'
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
            <a href='#skills' className="marquee-p">See A Breakdown of my Skills here</a>
        </div>
        <div className="marquee" style={{marginTop: '-3rem'}} >
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