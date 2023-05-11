import React, { useEffect, useState, useRef } from 'react';

function About() {
    return (
        <div className='about-container' id='about'>
            <div>
                <p> My friends and colleages would describe me as empathetic, passionate, and creative. 
                I want to help users have an intuitive experience through artistic and seamless designs.</p>
            </div>
            <div className='skills-container'>
                <h2>Skills</h2>
                <h3>Web Design & Development</h3>
                <p> HTML / CSS / JAVASCRIPT / REACT / BOOTSTRAP / FRAMER MOTION / MONGODB / EXPRESS / MYSQL / SQL / JQUERY / GIT / HEROKU / GODADDY </p>
                <div className='line-div'></div>
                <h3>Social Media & Marketing</h3>
                <p> SEO / SOCIAL MEDIA MANAGEMENT & DEVELOPMENT / CONTENT CREATION / COPYWRITING / BRANDING / INFOGRAPHICS </p>
            </div>
            
            <div className='education-container'>
                <h2>Education</h2>
                <p>Hubspot Academy's Social Media Strategy Certificate (2023)</p>
                <div className='line-div'></div>
                <p>University of Texas Full Stack Web Developer Certificate (2022)</p>
                <div className='line-div'></div>
                <p>University of Texas Bachelor's Degree in Public Health (2020)</p>
            </div>
            
        </div>
    )
}

export default About;