import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    // state for contact to view contact form 
    const [ contactForm, setContactForm ] = useState('hidden-form')

    const handleClick = () => { 
        setContactForm('contact-form')
    }

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
        //setStatus('Sending email');
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
                    message: 'Message was sent, we will get back to you shortly.'
            })
            } else {
                setResult({
                    success: false, 
                    message: 'Something went wrong, please try again later.'
                })
              }}
            }; 

    return (
        <div className='contact-container' id='contact'>
            <h3 className='contact-title'>Let's Connect!</h3>
            <div className='social-link-container'>
                    <a className='social-links' href='https://www.linkedin.com/in/vanessa-maldonado-807344191/' target='_blank'>LinkedIn</a>
                    <a className='social-links' href='https://github.com/vanessamald' target='_blank'>Github</a>
                    <a onClick={handleClick} className='social-links'>Email</a>
            </div>
            <div className={contactForm}>
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
                        rows={3} 
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
                {status}
                </button>
                </div> 
            </Form>
            </div>
        </div>
    )
}

export default Contact;