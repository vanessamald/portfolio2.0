import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";
import useThemeStorage from './useThemeStorage';

function Cursor() {
  const [ isCursor ] = useThemeStorage();
  const [linkHover, setLinkHover] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  
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
      //document.removeEventListener('mouseenter', () => setLinkHover);
      //document.removeEventListener('mouseleave', () => setLinkHover);

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
        el.addEventListener('mouseenter', () => setLinkHover(true));
        el.addEventListener('mouseleave', () => setLinkHover(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    }
    
    const removeLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.removeEventListener('mouseenter', setLinkHover(false));
        el.removeEventListener('mouseleave', setLinkHover(true));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.removeEventListener('mouseover', setLinkHover(false));
        el.removeEventListener('mouseout', setLinkHover(true));
      });
    };

    addLinkEvents();
    
    useEffect(() => {
      addLinkEvents();
  
      return () => {
        removeLinkEvents();
      };
    }, []);
  
    return (

        <motion.div className={linkHover ? 'cursor-hover' : 'cursor' }   variants={variants} style={{translateX: cursorXSpring, translateY: cursorYSpring}}
        ><div className='large-cursor'></div> </motion.div> 
      
    )
}

export default Cursor;
