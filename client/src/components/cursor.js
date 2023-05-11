import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
    const [ cursorVariant, setCursorVariant ] = useState("default");
    const [ cursorHover, setCursorHover ] = useState("default");
    const cursorRef = React.useRef(null);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
  
    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 15);
        cursorY.set(e.clientY - 15);
        //cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
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
       // x: cursorX,
        //y: cursorY,
        position: 'fixed',
        left: '0',
        top: '0',
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '1px solid #5B4A3B',
        //border: '1px solid white',
        backgroundColor: '#5B4A3B',
        //mixBlendMode: 'difference',
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

    const cursorEnter = () => setCursorHover('text');
    const cursorLeave = () => setCursorHover('default');
  
    return (
        <motion.div className={cursorVariant} variants={variants} animate={cursorHover} style={{translateX: cursorX, translateY: cursorY}}
        />
        
    )
}

export default Cursor;
