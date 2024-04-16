import React, { useEffect, useState, useRef, useCallback } from 'react';
import Marquee from '../Marquee';
import {  motion, useInView } from 'framer-motion';
import Work from '../Work';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const aboutSentence = 'Hi! I am Vanessa Maldonado, a Web Developer & Social Media Strategist with a background in Healthcare.';
  const aboutSentence2 = 'I make websites come to life.';

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
          <div >
          <div  className={`container-large about-me-container text-center background-transition ${isScrolled ? 'background-slideup' : ''}`}>
              <p  className={`small-text text-center background-light ${isScrolled ? '' : 'text-opacity'}`}>Who I am</p>
              {aboutSentence.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                        {index >= 0 && ' '}
                        
                        <span style={{ animationDelay: `${index * 0.3}s` }} className={`background-light medium-text transparent ${isScrolled ?  'text-animation' : 'hidden-text'} `}>
                           {word}
                        </span>
                        
                        
                        </React.Fragment>
                       ))
                    }
            </div>
          </div>
            

            
            {/*
            <div ref={ref} className={`about-me-container ${isInView ? 'about-scrolled' : ''}`} id='about'>
            
              <p className={`about-me-text ${isInView ? 'about-scrolled' : ''}`}> My friends and colleagues would describe me as <em className={`about-em ${isInView ? 'about-scrolled' : ''}`}>empathetic</em>, <em className={`about-em ${isInView ? 'about-scrolled' : ''}`}>driven</em>, and <em className={`about-em ${isInView ? 'about-scrolled' : ''}`}>creative</em>. 
                I want to help users have an intuitive experience through <em className={`about-em ${isInView ? 'about-scrolled' : ''}`}>artistic</em> and <em className={`about-em ${isInView ? 'about-scrolled' : ''}`}>seamless</em> designs.</p>
              <p className={`about-me-text ${isInView ? 'about-scrolled' : ''}`}>Learn more about me below...</p>
            </div>
            <div ref={ref} className={`about-me-container2 ${isInView ? 'text-animation' : ''}`} style={{animationDelay: '2s'}}>
              
              <p className='about-me-text2'>I worked as a <em>Pharmacy Technician</em> for 8 years before transitioning into Software Development.</p>
              <p>Why did I choose the <em>Full Stack</em> path? </p>
              <p>Although I love being creative and experimenting with how the UI looks, I also enjoy owning a project from beginning to end. </p>
              <p>What do I do for fun?</p>
              <p>
                  When I'm not coding (yes I love coding for fun!) you can find me curled up with my dogs <em>reading</em> a book. Currently reading <em><a href='https://www.goodreads.com/book/show/57789637-daughter-of-the-moon-goddess' target='_blank'>The Daughter of the Moon Goddess</a></em>. 
              </p>
              <p className='about-me-text2'>I'm currently looking for remote roles and also open to Freelance work.</p>
              <p>Passionate about responsive, and interactive design. Well-known for being open and collaborative, leading with compassion and having an eye for design.</p>
              
            </div>
            // {`container-large background-transition ${isScrolled ? 'background-slideup' : ''}`}
                  */}
                  <div>
            {isScrolled ? 
            
 <div className='background-light'>
            <p className='about-me-text padding-left padding-bottom background-light'> My friends and colleagues would describe me as <em className={`about-em background-light ${isScrolled ? 'text-reveal' : 'text-opacity'}`}>empathetic</em>, <em className={`about-em background-light ${isScrolled ? 'text-reveal' : 'text-opacity'}`}>driven</em>, and <em className={`background-light about-em ${isScrolled ? 'text-reveal' : 'text-opacity'}`}>creative</em>. 
                I want to help users have an intuitive experience through <em className={`background-light about-em ${isScrolled ? 'text-reveal' : 'text-opacity'}`}>artistic</em> and <em className={`about-em background-light ${isScrolled ? 'text-reveal' : 'text-opacity'}`}>seamless</em> designs.</p>
            </div>
           : ' '}  
           </div>

            <div className='about-me-container flex-column flex-center'>
              <p ref={ref} className='small-text text-center'>What I do</p>
             
              {aboutSentence2.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                        {index >= 0 && ' '}
                        <span style={{ animationDelay: `${index * 0.3}s` }} className={`medium-text text transparent ${isInView ?  'text-animation' : ''} `}>
                           {word}
                        </span>
                        </React.Fragment>
                       ))
                    }
            </div>
            
          

            <div className={`skills-edu-container ${isInView ? '' : ''}`}>
              <p className='small-text text-center'>How I do it</p>
              <div className='container-large'>
                <Marquee/> 
              </div>

              <Work/>
            <div className='skills-container'>
              <h2 id='skills'>Skills</h2>
                <h3>Web Design & Development</h3>
                <h4>Languages + Frameworks</h4>
                <div className='skills-content'>
                  <p className='bold'>HTML</p>
                  <p className='bold'>CSS</p>
                  <p className='bold'>JavaScript</p>
                  <p className='bold'>jQuery</p>
                  <p className='bold'>React</p>
                  <p className='bold'>Bootstrap</p>
                  <p className='lightweight'>Framer Motion</p>
                </div>
                
                <div className='line-div'></div>
                <h4>Backend Technologies + Databases</h4>
                <p>Node.js</p>
                <p>NPM</p>
                <p className='bold'>Express</p>
                <p className='lightweight'>MongoDB</p>
                <p className='bold'>MySQL</p>
                <p className='lightweight'>SQL</p>
                <p className='lightweight'>GraphQl</p>
                <div className='line-div'></div>
                <h4>Development Tools</h4>
                <p>Git</p>
                <p>Heroku</p>
                <p>Visual Studio Code</p>
                <p>GoDaddy</p>
                <h4>Testing & Debugging</h4>
                <p>Jest</p>
                <p>Chrome Dev Tools</p>
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
                <p>University of Texas Bachelor of Science - 2020</p>
            </div>
          </div> 
        </div>
    )
}

export default About;