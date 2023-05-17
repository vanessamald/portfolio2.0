import React, { useState, useEffect } from 'react';
import About from '../About/index';
import Navigation from '../Navigation';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
    const aboutSentence = 'Hi! I am Vanessa Maldonado, a Mexican-American Freelance Web Developer.'
    
    return (
        <div>
            <div className='home-header-container'>
                <h1 className='home-title text-animation' style={{ animationDelay: '1s'}}>UX/UI Developer</h1>
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