import React, { useState } from 'react';
import evokeDesktop1 from '../../assets/images/evoke-desktop1.png';
import friendsDesktop1 from '../../assets/images/friends-desktop.png';
import evokeMobile from '../../assets/images/evoke-phone1.png';
import friendsMobile from '../../assets/images/friends-cover.png';
import revivirDesktop from '../../assets/images/revivir.png';
import revivirMobile from '../../assets/images/revivir-mobile.png';
import { BsArrowUpRight } from 'react-icons/bs';
import useScroll from '../useScroll';

function Work() {
    const isScrolled = useScroll();

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
        <div className='work-container' id='work'>
            <h2>Featured Works</h2>
            
            <div className='work-wrapper flex-row'>
                <a href='https://www.evokediagnostics.com' target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img className='work-image' src={evokeDesktop1}></img></a>
                
                <div className='work-title flex-row'>
                    <div className={isScrolled ? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent'}}>
                        <h3 className='slide-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>01 Evoke</h3>
                    </div>
                    
                    {isHovering &&  (
                    <BsArrowUpRight className='transparent work-arrow'/>
                    )}    
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
            <div className='work-wrapper flex-row'>
                
                
                <div className='work-title flex-row'>
                    <div className={isScrolled ? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent', animationDelay:'2s'}}>
                        <h3 className='slide-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>02 Revivir Studio</h3>
                    </div>
                    
                    {isHovering2 &&  (
                    <BsArrowUpRight className='transparent work-arrow'/>
                    )}    
                </div>
                <a href='https://www.revivirstudio.com/' target='_blank' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}><img className='work-image' src={revivirDesktop}></img></a>
            </div>
             
           
            <br/>
            <div className='line-div'></div>
            <br/>

            <div className='work-wrapper flex-row'>
                <a href='https://vanessamald.github.io/API-timed-quiz/' target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img className='work-image' src={friendsDesktop1}></img></a>
                
                <div className='work-title flex-row'>
                    <div className={isScrolled ? 'scroll-down' : 'scroll-up'} style={{backgroundColor: 'transparent', animationDelay: '3s'}}>
                        <h3 className='slide-text' style={{animationDelay: '2s', backgroundColor: 'transparent'}}>03 Friends Trivia</h3>
                    </div>
                    
                    {isHovering &&  (
                    <BsArrowUpRight className='transparent work-arrow'/>
                    )}    
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