import React, { useState } from 'react';
import evokeDesktop1 from '../../assets/images/evoke-desktop1.png';
import friendsDesktop1 from '../../assets/images/friends-desktop.png';
import evokeMobile from '../../assets/images/evoke-phone1.png';
import friendsMobile from '../../assets/images/friends-cover.png';
import revivirDesktop from '../../assets/images/revivir.png';
import revivirMobile from '../../assets/images/revivir-mobile.png';

function Work() {
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
            <h2>Work</h2>
            <h3>Freelance</h3>
            <a href='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Evoke Neurodiagnostics.</a>
            <p></p>
            <div className='work-image-container'>
                <img src={evokeDesktop1} className='work-image'></img>
                {isHovering &&  (
                    <div className='work-hidden-container'>
                        <h4>Role</h4>
                        <p>Sole Designer/Developer</p>
                        <h4>Tech Stack</h4>
                        <p>Node, Express, Nodemailer, React, Bootstrap, Framer Motion, CSS, HTML, JavaScript</p>
                    </div>
                )}
                <img src={evokeMobile} className='work-image'></img>
            </div>
            <div className='line-div'></div>
            <h3>Projects</h3>
            <p>Revivir Studio.</p>
            <p>A website currently under development for my freelance business.</p>
            <p>Sneak Peak <a href='https://www.revivirstudio.com/' target='_blank'>here</a></p>
            <div className='work-image-container'>
                <img src={revivirDesktop} className='work-image'></img>
            </div>
            <br/>
           <div className='line-div'></div>
           <br/>
            <a href='https://vanessamald.github.io/API-timed-quiz/' target='_blank' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>Friends Timed Quiz</a>
            <p>A timed Friends trivia quiz that stores the highest score.</p>
            <div className='work-image-container'>
                <img src={friendsDesktop1} className='work-image'></img>
                {isHovering2 &&  (
                    <div className='work-hidden-container'>
                        <h4>Role</h4>
                        <p>Sole Developer</p>
                        <h4>Tech Stack</h4>
                        <p>HTML, CSS, JavaScript, LocalStorage</p>
                    </div>
                )}
                <img src={friendsMobile} className='work-image'></img>
            </div>
        </div>
    )
}

export default Work;