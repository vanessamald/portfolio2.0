import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
    // state for hovered a links
    const [linkHover, setLinkHover] = useState(false);
    
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // add spring to cursor
    const springConfig = { damping: 100, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // add event listeners for custom cursor
    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 5);
        cursorY.set(e.clientY - 5);

    };
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", moveCursor);
    window.addEventListener("mouseleave", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", moveCursor);
      window.removeEventListener("mouseout", moveCursor);
    };
    }, []);
  
    const variants = {
      default: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '1px solid #5B4A3B',
        zIndex: '99999999999',
        pointerEvents: 'none'
      },
      text: {
        width: 60,
        height: 60,
        borderRadius: '30px',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        zIndex: '99999999999',
        pointerEvents: 'none'
      }
    } 

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    }
      addLinkEvents();
  
    return (
        <motion.div className={linkHover ? 'cursor-hover' : 'cursor'} variants={variants} style={{translateX: cursorX, translateY: cursorY}}
        />  
    )
}

export default Cursor;
