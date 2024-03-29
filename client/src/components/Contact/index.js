import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import useScroll from '../useScroll';
import {  motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

   const isScrolled = useScroll();

    // state for contact to view contact form 
    const [ contactForm, setContactForm ] = useState('hidden-form');
    const [ button, setButton ] = useState('close-container');
    const [ body, setBody ] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
    };

    const handleClick = () => { 
        setContactForm('contact-form');
        toggleForm();
    };

    const handleClose = () => {
        setContactForm('hidden-menu');
        toggleForm();
    }

    // disable scrolling in the background when form is open
    useEffect(() => {
        if (isFormOpen) {
          document.body.style.overflow = 'hidden'; 
        } else {
          document.body.style.overflow = ''; 
        }
    
        return () => {
          document.body.style.overflow = ''; 
        };
      }, [isFormOpen]);

    // contact form status
    const [ status, setStatus ] = useState('Submit');

    // set state for contact form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    
    // set state for response 
    const [result, setResult] = useState(null);
    
    // handle sumbit form 
    const submitForm = async (e) => {
        e.preventDefault();
        setStatus('Sending email');
        e.target.reset();
        
        let emailMessage = {
            name: name,
            email: email,
            subject: subject,
            message: message
        } 
    
        if ( emailMessage === '') {
            setResult({
                message: 'Please fill out all fields'
            })
        } else {
            let response = await fetch("/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(emailMessage),
            });
            if (response) {
                setResult({
                    success: true, 
                    message: 'Message was sent!'
            })
            } else {
                setResult({
                    success: false, 
                    message: 'Something went wrong, please try again later.'
                })
              }
            }; 
            setTimeout(() => {
                setResult({
                  success: null,
                  message: '',
                });
              }, 3000);   
            };

    return (
        <div className='contact-container' ref={ref}>
            <h3 className='small-text text-center'>Let's Connect!</h3>
            <div className='social-link-container'>
                    <a className={isInView ? 'text-animation social-links text-center transparent' : ''}  href='https://www.linkedin.com/in/vanessa-m-807344191/' target='_blank'>LinkedIn</a>
                    <a className={isInView ? 'text-animation text-center social-links transparent' : ''}  style={{animationDelay: '3s'}} href='https://github.com/vanessamald' target='_blank'>Github</a>
                    <a className={isInView ? 'text-animation text-center social-links transparent' : ''}  onClick={handleClick} style={{animationDelay: '4s'}} >Email</a>
            </div>


            <div className={contactForm}>
                <div className='flex flex-end'>
                    <button className='close-btn small-top-margin' onClick={handleClose}>
                        <div>
                            <div className='contact-close-line1'></div>
                            <div className='contact-close-line2'></div>
                        </div>
                    </button>
                </div>
                <div className='contact-form-content flex flex-center'>
                <Form onSubmit={submitForm} className='form-content'>
                <Form.Group className="form-group" controlId="name">
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setName(e.target.value)} 
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <div className='contact-line'></div>
                </Form.Group>
                <Form.Group className="form-group" controlId="email">
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text"
                        placeholder="email@example.com"
                        required
                    />
                    <div className='contact-line'></div>
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input'
                        onChange={(e) => setSubject(e.target.value)} 
                        type="text"
                        placeholder="Subject"
                        required
                    />
                    <div className='contact-line'></div>
                </Form.Group>
                <Form.Group className='form-group'
                    controlId="message"
                    >
                    <Form.Label className='form-name'></Form.Label>
                    <Form.Control className='form-input-message'
                        onChange={(e) => setMessage(e.target.value)}  
                        as="textarea" 
                        placeholder="Message"
                        
                        required
                    />
                    <div className='contact-line'></div>
                </Form.Group>
                <div style={{}}>
                <button 
                    className='form-button'
                    type="submit" 
                    variant="primary"
                >
                    Send
                </button>
                <div>
                    {result && (
                        <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                        </p>
                    )}
                </div>
                </div> 
            </Form>
        </div>
            </div>
        </div>
    )
}

export default Contact;