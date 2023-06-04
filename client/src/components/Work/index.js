import React, { useState, useRef } from 'react';
import evokeDesktop1 from '../../assets/images/evoke-desktop1.png';
import friendsDesktop1 from '../../assets/images/friends-desktop.png';
import revivirDesktop from '../../assets/images/revivir.png';
import {  motion, useInView } from 'framer-motion';

function Work() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [ isHovering, setIsHovering ] = useState(false);
    const [ isHovering2, setIsHovering2 ] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleMouseOver2 = () => {
        setIsHovering2(true);
    }

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    }

    return (
        <div className='work-container' id='work' ref={ref}>
            <h2 className='small-text text-center'>Featured Works</h2>
            <div className='work-wrapper flex-row flex-center'>
                <a className={isInView ? 'work-image-ani' : ''} href='https://www.evokediagnostics.com' target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img className='work-image' src={evokeDesktop1}></img></a>
                <div className='work-title flex-row flex-center'>
                    <div className='flex-row'>
                        <p className='numbers large-text'>0</p>
                        <p className={`numbers large-text transparent ${isInView ? 'text-animation' : ''} `}>1</p>
                    </div>
                    <div className={isInView ? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent'}}>
                        <a className='no-underline' href='https://www.evokediagnostics.com' target='_blank'><h3 className='slide-text large-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>Evoke</h3> </a>   
                    </div>
                </div>
            </div>
            <br/>
            <div className='line-div'></div>
            <br/>
                {/*
                <div className='flex-column'>
                    <a href='https://www.evokediagnostics.com' target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Evoke Neurodiagnostics</a>
                    <p>A website for a company that offers cognitive impairment testing services.</p>
                    <h4>Role</h4>
                    <p>Sole Designer/Developer</p>
                    <h4>Tech Stack</h4>
                    <p>Node, Express, Nodemailer, React, Bootstrap, Framer Motion, CSS, HTML, JavaScript</p>
                </div>
                */}
           

            
            {/*
            <div className='work-image-container'>
                <img alt='Evoke Neurodiagnostics desktop view' src={evokeDesktop1} className='work-image'></img>
                <img alt='Evoke Neurodiagnostics mobile view' src={evokeMobile} className='work-image'></img>
            </div>
            */}
            <div className='work-wrapper flex-row flex-center'>
                <div className='work-title flex-row flex-center' ref={ref}>
                   <div className='flex-row'>
                        <p className='numbers large-text'>0</p>
                        <p className={`numbers large-text transparent ${isInView ? 'text-animation' : ''} `}>2</p>
                    </div>
                    <div className={isInView ? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent', animationDelay:'2s'}}>
                       <a className='no-underline' href='https://www.revivirstudio.com/' target='_blank'><h3 className='slide-text large-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>Revivir Studio</h3></a>
                    </div> 
                </div>
                <a className={isInView ? 'work-image-ani' : ''} href='https://www.revivirstudio.com/' target='_blank' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}><img className='work-image' src={revivirDesktop}></img></a>
            </div>
            <br/>
            <div className='line-div'></div>
            <br/>
            <div className='work-wrapper flex-row flex-center'>
                <a className={isInView ? 'work-image-ani' : ''} href='https://vanessamald.github.io/API-timed-quiz/' target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img className='work-image' src={friendsDesktop1}></img></a>
                <div className='work-title flex-row flex-center' ref={ref}>
                    <div className='flex-row'>
                        <p className='numbers large-text'>0</p>
                        <p className={`numbers large-text transparent ${isInView ? 'text-animation' : ''} `}>3</p>
                    </div>
                    <div className={isInView? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent', animationDelay: '3s'}}>
                        <a className='no-underline' href='https://vanessamald.github.io/API-timed-quiz/' target='_blank'><h3 className='slide-text large-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>Friends Trivia</h3></a>
                    </div> 
                </div>
            </div>
            {/*
                {isHovering2 &&  (
                    <div className='work-hidden-container'>
                        <h4>Role</h4>
                        <p>Sole Developer</p>
                        <h4>Tech Stack</h4>
                        <p>HTML, CSS, JavaScript, LocalStorage</p>
                    </div>
                )}
                */}
        </div>
    )
}

export default Work;