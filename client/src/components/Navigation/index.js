import React, { useState } from 'react';

function Navigation () {
    const [ about, setAbout ] = useState('hidden-a');

    // nav animations
    const aboutText = 'About';
    const SplitText = () => {
        return (
                <span >
                    {aboutText.split("").map(function(char, index){
                        const style = {"animationDelay": (0.5 + index / 10) + "s", "opacity": "0"};
                            return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                            ;
                            })}
                            </span>
                        );
                    }
    
        const workText = 'Work';
        const SplitText2 = () => {
            return (
                <span >
                    {workText.split("").map(function(char, index){
                        const style = {"animationDelay": (1 + index / 10) + "s", "opacity": "0"};
                            return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                            ;
                            })}
                            </span>
                        );
                    }
    
        const contactText = 'Contact';
        const SplitText3 = () => {
            return (
                <span>
                    {contactText.split("").map(function(char, index){
                        const style = {"animationDelay": (1.5 + index / 10) + "s", "opacity": "0"};
                            return <span key={index} id={index} className='nav-link' style={style}>{char}</span>
                            ;
                            })}
                            </span>
                        );
                    }
    return (
        <div className='menu-container'>
            <a className='menu-link' href='#about'><SplitText className={about}/></a>
            <a className='menu-link' href='#work'><SplitText2 className={about}/></a>
        </div>
    )
}

export default Navigation;