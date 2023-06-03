import React, { useState, useEffect, useRef } from 'react';
import About from '../About/index';
import Navigation from '../Navigation';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';
import useThemeStorage from '../useThemeStorage';
import { FiMoon } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";
import {  motion, useInView } from 'framer-motion';
import useScroll from '../useScroll';

function Home() { 
    const ref = useRef(null);
    const isInView = useScroll(ref); 



    // set theme
    const [ theme, themeToggler, componentMounted, isOn, setIsOn] = useThemeStorage();
 
    return (
        <div className={theme}>
            <div className='home-header-container'>
                <div>
                    
                    <div 
                        data-darkmode={isOn}
                        onClick={themeToggler}
                        className={isOn}
                    >
                        <motion.div layout className='theme-button' style={{}}>
                            {theme === 'dark' ?  <TiWeatherSunny/> : <FiMoon/> }       
                        </motion.div>
                    </div>
                </div>
                <Navigation/>
            </div>
            <div className='home-title-container'>
                <h1 className='transparent home-title text-animation' style={{ animationDelay: '1s'}}>Creative</h1>
                <h1 className='transparent home-title2 text-animation' style={{ animationDelay: '2s'}}>Developer</h1>
                {/*<img src={require("../../assets/images/profile-pic.jpg")} alt="profile picture" className="profile-pic"/>*/}
               
            </div>
            <About/>
            <Work/>
            <Contact/>
            <Footer/>
            
            
        </div>
    )
}

export default Home;