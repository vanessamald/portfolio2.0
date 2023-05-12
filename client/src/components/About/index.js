import React, { useEffect, useState, useRef } from 'react';
import Marquee from '../Marquee';

function About() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > 400) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        
        <div className='about-container' id='about'>
            <Marquee/>
            <div className={`about-me-container ${isScrolled ? 'scrolled' : ''}`}>
                <p className={`about-me-text ${isScrolled ? 'scrolled' : ''}`}> My friends and colleages would describe me as <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>empathetic</em>, <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>passionate</em>, and <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>creative</em>. 
                I want to help users have an intuitive experience through <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>artistic</em> and <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>seamless</em> designs.</p>
            </div>
            <div className='skills-container'>
                <h2>Skills</h2>
                <h3>Web Design & Development</h3>
               
                <p> HTML / CSS / JAVASCRIPT / JQUERY / REACT / BOOTSTRAP / FRAMER MOTION / MONGODB / EXPRESS / MYSQL / SQL / GraphQL / GIT / HEROKU / GODADDY </p>
                <div className='line-div'></div>
                <h3>Social Media & Marketing</h3>
                <p> SEO / SOCIAL MEDIA MANAGEMENT & DEVELOPMENT / CONTENT CREATION / COPYWRITING / BRANDING / INFOGRAPHICS </p>
            </div>
            <div className='education-container'>
                <h2>Education</h2>
                <p>Hubspot Academy's Social Media Strategy Certificate - 2023</p>
                <div className='line-div'></div>
                <p>University of Texas Full Stack Web Developer Certificate - 2022</p>
                <div className='line-div'></div>
                <p>University of Texas Bachelor's Degree in Public Health - 2020</p>
            </div>
            
        </div>
    
    )
}

export default About;