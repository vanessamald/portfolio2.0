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
        
        <div className='about-container' >
            <Marquee/>
            <div className={`about-me-container ${isScrolled ? 'scrolled' : ''}`} id='about'>
            
              <p className={`about-me-text ${isScrolled ? 'scrolled' : ''}`}> My friends and colleages would describe me as <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>empathetic</em>, <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>driven</em>, and <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>creative</em>. 
                I want to help users have an intuitive experience through <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>artistic</em> and <em className={`about-em ${isScrolled ? 'scrolled' : ''}`}>seamless</em> designs.</p>
              <p className={`about-me-text ${isScrolled ? 'scrolled' : ''}`}>Learn more about me below...</p>
            </div>
            <div className='about-me-container2'>
              <p className='about-me-text2'>I worked as a <em>Pharmacy Technician</em> for 8 years before transitioning into Software Development.</p>
              <p>Why did I choose the <em>Full Stack</em> path? </p>
              <p>Although I love being creative and experimenting with how the UI looks, I also enjoy owning a project from beginning to end. </p>
              <p>What do I do for fun?</p>
              <p>
                  When I'm not coding (yes I love coding for fun!) you can find me curled up with my dogs <em>reading</em> a book. Currently reading <em>The Daughter of the Moon Goddess</em>. 
              </p>
            </div>
            <div className='skills-container'>
                <h2 id='skills'>Skills</h2>
                <h3>Web Design & Development</h3>
                <h4>Languages + Frameworks</h4>
                <div className='skills-content'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>jQuery</p>
                  <p>React</p>
                  <p>Bootstrap</p>
                  <p>Framer Motion</p>
                </div>
                
                <div className='line-div'></div>
                <h4>Backend Technologies + Databases</h4>
                <p>Node.js</p>
                <p>NPM</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>MySQL</p>
                <p>SQL</p>
                <p>GraphQl</p>
                <div className='line-div'></div>
                <h4>Development Tools</h4>
                <p>Git</p>
                <p>Heroku</p>
                <p>Visual Studio Code</p>
                <p>GoDaddy</p>
                <div className='line-div'></div>
                <h3>Social Media & Marketing</h3>
                <p> SEO / Social Media Management & Development  / Content Creation / Copywriting / Branding / Infographics </p>
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