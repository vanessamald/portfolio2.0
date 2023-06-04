import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navigation () {
    const [ about, setAbout ] = useState('hidden-a');
    const [ menu, setMenu ] = useState('hidden-menu');
    const [ toggle, setToggle ] = useState(false);
    const [ button, setButton ] = useState('close-container');

    const handleStyles = () => {
        if (!toggle) {
            setMenu('menu-container');
            setButton('change');
        }
        if (toggle) {
            setMenu('hidden-menu')
            setButton('close-container');
        } 
    }

    const handleClick = () => {
        setToggle(!toggle);
        handleStyles();
    }

    const handleOut = () => {
        setToggle(toggle);
        handleStyles();
    }

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
        <div>
            <button className='close-btn' onMouseEnter={handleClick} onClick={handleClick}>
                <div className={button}>
                    <div className='close-line1'></div>
                    <div className='close-line2'></div>
                </div>
            </button>
            <div className={menu}>
                <div className='menu-content'>
                    <a onClick={handleClick} className='menu-link' href='#about'><SplitText className={about}/></a>
                    <a onClick={handleClick} className='menu-link' href='#work'><SplitText2 className={about}/></a>
                    <a onClick={handleClick} className='menu-link' href='#contact'><SplitText3 className={about}/></a>
                </div> 
              
            </div>
        </div> 
    )
}

export default Navigation;