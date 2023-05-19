import React, { useState, useEffect } from 'react';
import About from '../About/index';
import Navigation from '../Navigation';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';
import useThemeStorage from '../useThemeStorage';
import { motion, AnimatePresence } from 'framer-motion';
import { TiStarOutline } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";


function Home() {
    // set theme
    const [ theme, themeToggler, componentMounted, isOn, setIsOn] = useThemeStorage();
    const aboutSentence = 'Hi! I am Vanessa Maldonado, a Mexican-American Freelance Web Developer.'
    
    return (
        <div className={theme}>
            <div className='home-header-container'>
                <div>
                    <h1 className='home-title text-animation' style={{ animationDelay: '1s'}}>Creative Developer</h1>
                    <div 
                        data-darkmode={isOn}
                        onClick={themeToggler}
                        className={isOn}
                    >
                        <motion.div layout className='theme-button' style={{fontSize:'3vw'}}>
                            {theme === 'dark' ? <TiWeatherSunny/> : <TiStarOutline/> }       
                        </motion.div>
                    </div>
                </div>
                <Navigation/>
            </div>
            <div className="">
                <img src={require("../../assets/images/profile-pic.jpg")} alt="profile picture" className="profile-pic"/>
                <div className='home-intro-container'>
                    
                    
                    {aboutSentence.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                        {index > 0 && ' '}
                        <span style={{ animationDelay: `${index * 0.1}s` }} className="text text-animation">
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