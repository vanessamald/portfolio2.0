import React, { useEffect, useState, useRef } from 'react';
import Marquee from '../Marquee';
import {  motion, useInView } from 'framer-motion';

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const aboutSentence = 'Hi! I am Vanessa Maldonado, a Freelance Web Developer.';
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
        
        <div className='about-container' >
            

            <div id='about' className='about-me-container text-center'>
              <p ref={ref} className='small-text text-center'>Who I am</p>
              {aboutSentence.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                        {index >= 0 && ' '}
                        
                        <span style={{ animationDelay: `${index * 0.3}s` }} className={`medium-text text transparent ${isScrolled ?  'text-animation' : ''} `}>
                           {word}
                        </span>
                        
                        
                        </React.Fragment>
                       ))
                    }
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
            */}
            <div className='about-me-container'>
            <p className='about-me-text'> My friends and colleagues would describe me as <em className='about-em'>empathetic</em>, <em className='about-em'>driven</em>, and <em className='about-em'>creative</em>. 
                I want to help users have an intuitive experience through <em className='about-em'>artistic</em> and <em className='about-em'>seamless</em> designs.</p>
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


            <div className={`skills-edu-container ${isInView ? 'scrolled2' : ''}`}>
              <p className='small-text text-center'>How I do it</p>
              <div className='container-large'>
                <Marquee/> 
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
                <h4>Testing</h4>
                <p>Jest</p>
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
        </div>
    )
}

export default About;