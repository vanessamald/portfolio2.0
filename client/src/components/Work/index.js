import React from 'react';
import evokeDesktop1 from '../../assets/images/evoke-desktop1.png';
import friendsDesktop1 from '../../assets/images/friends-desktop.png';
import evokeMobile from '../../assets/images/evoke-phone1.png';
import friendsMobile from '../../assets/images/friends-cover.png';

function Work() {
    return (
        <div className='work-container' id='work'>
            <h2>Work</h2>
            <h3>Freelance</h3>
            <p>Evoke Neurodiagnostics</p>
            <p></p>
            <div className='work-image-container'>
                <img src={evokeDesktop1} className='work-image'></img>
                <img src={evokeMobile} className='work-image'></img>
            </div>
            
            <div className='line-div'></div>
            <h3>Projects</h3>
            <p>Friends Timed Quiz</p>
            <p></p>
            <div className='work-image-container'>
                <img src={friendsDesktop1} className='work-image'></img>
                <img src={friendsMobile} className='work-image'></img>
            </div>
            
        </div>
    )
}

export default Work;