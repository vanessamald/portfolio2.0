import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";
import useThemeStorage from '../useThemeStorage';

function Cursor({cursor}) {
  // hover state
  const [linkHover, setLinkHover] = useState(false);

  // framer motion cursor motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // event listener for custom cursor to follow mouse
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
    
    // event listener for hover & button clicks
    /*
    useEffect(() => {
      const handleLinkHover = () => {
        setLinkHover(true);
      };
    
      const handleLinkLeave = () => {
        setLinkHover(false);
      };
    
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
    
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
    
      return () => {
        document.querySelectorAll('a').forEach((el) => {
          el.removeEventListener('mouseenter', handleLinkHover);
          el.removeEventListener('mouseleave', handleLinkLeave);
        });
    
        document.querySelectorAll('button').forEach((el) => {
          el.removeEventListener('mouseenter', handleLinkHover);
          el.removeEventListener('mouseleave', handleLinkLeave);
        });
      };
    }, []);
    */
    useEffect(() => {
      const handleLinkHover = () => {
        setLinkHover(true);
      };
  
      const handleLinkLeave = () => {
        setLinkHover(false);
      };
  
      const links = document.querySelectorAll('a');
      const buttons = document.querySelectorAll('button');
  
      links.forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
  
      buttons.forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
  
      return () => {
        links.forEach((el) => {
          el.removeEventListener('mouseenter', handleLinkHover);
          el.removeEventListener('mouseleave', handleLinkLeave);
        });
  
        buttons.forEach((el) => {
          el.removeEventListener('mouseenter', handleLinkHover);
          el.removeEventListener('mouseleave', handleLinkLeave);
        });
      };
    }, []);

    return (
      <div>
        <motion.div className= {`cursor-${cursor === 'dark' ? 'light' : 'dark'}${linkHover ? '-hover' : ''}`} variants={variants} style={{translateX: cursorXSpring, translateY: cursorYSpring}}
        ><div className={cursor === 'dark' ? 'large-cursor-light' : 'large-cursor-dark'}></div> </motion.div> 
      </div>  
    )
}

export default Cursor;
