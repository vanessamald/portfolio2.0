import React, { useState, useEffect } from 'react';
import About from '../About/index';
import Navigation from '../Navigation';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';
import useThemeStorage from '../useThemeStorage';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";


function Home() {
    // set theme
    const [ theme, themeToggler, componentMounted, isOn, setIsOn] = useThemeStorage();
    const aboutSentence = 'Hi! I am Vanessa Maldonado, a Freelance Web Developer: I make websites come to life.'
    
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
            <div className="">
                <h1 className='home-title text-animation' style={{ animationDelay: '1s'}}>Creative</h1>
                <h1 className='home-title2 text-animation' style={{ animationDelay: '2s'}}>Developer</h1>
                {/*<img src={require("../../assets/images/profile-pic.jpg")} alt="profile picture" className="profile-pic"/>*/}
                <div className='home-intro-container'>
                    
                    
                    {aboutSentence.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                        {index >= 0 && ' '}
                        <span style={{ animationDelay: `${index * 0.3}s` }} className="text text-animation">
                           {word}
                        </span>
                        </React.Fragment>
                       ))
                    }
                </div> 
            </div>
            <About/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;