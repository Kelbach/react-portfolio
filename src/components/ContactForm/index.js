import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };
    
    
    
    return (
        <section id="contact-me">
          <div className="title"><h2>Contact Me</h2></div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input className="form-input" type="text" name="Name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input className="form-input" type="email" name="Email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea className="form-input" name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
    );
}
    
export default ContactForm;