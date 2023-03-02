import React from 'react';
import ContactForm from '../ContactForm';

function ContactMe() {
    return (
        <div>
        <section id="contact-me">  
        <div className="title"><h2>Contact Info</h2>
        <p>
            Email is preferred.    
        </p></div>
        <ol>
            <li><a href="mailto:kevin.kelbach@gmail.com" target="_blank" rel="noreferrer"><strong>kevinkelbach@gmail.com</strong></a></li>
            <li><a href="tel:1-216-258-4084" target="_blank" rel="noreferrer"><strong>Phone:</strong> 216-258-4084</a></li>
            <li><a href="https://github.com/Kelbach" target="_blank" rel="noreferrer"><strong>Github:</strong> Kelbach</a></li>
            <li><a href="https://www.linkedin.com/in/kevinkelbach/" target="_blank" rel="noreferrer"><strong>LinkedIn:</strong> Kevin Kelbach</a></li>
        </ol>
        </section>
        {/* <ContactForm /> */}
        </div>
    )
}

export default ContactMe;