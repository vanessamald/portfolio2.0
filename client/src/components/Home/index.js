import React, { useState, useEffect } from 'react';
import About from '../About/index';
import useCursor from '../cursor';
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navigation from '../Navigation';
import Work from '../Work';

function Home() {

    return (
        <div>
            <div className='home-header-container'>
                <h1 className='home-title'>UX/UI Developer</h1>
                <Navigation/>
            </div>
            <div className='home-intro-container'>
                
                <div className='home-intro'>
                    <img src={require("../../assets/images/profile-pic.jpg")} alt="profile pic" className="profile-pic"/>
                    <p>Hi!</p>
                    <p>I am Vanessa Maldonado, a Mexican-American Freelance Web Developer.</p>
                </div>
            </div>
            <About/>
            <Work/>
        </div>
    )
}

export default Home;