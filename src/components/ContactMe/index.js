import React from 'react';
import ContactForm from '../ContactForm';

function ContactMe() {
    return (
        <div>
        <section id="contact-me">  
        <div className="title"><h2>Contact Info</h2></div>
        <ul>
            <a href="mailto:kevin.kelbach@gmail.com"><li><strong>kevinkelbach@gmail.com</strong></li></a>
            <a href="tel:1-216-258-4084"><li><strong>Phone:</strong> 216-258-4084</li></a>
            <a href="https://github.com/Kelbach"><li><strong>Github:</strong> Kelbach</li></a>
            <a href="https://www.linkedin.com/in/kevinkelbach/"><li><strong>LinkedIn:</strong> Kevin Kelbach</li></a>
        </ul>
        </section>
        <ContactForm />
        </div>
    )
}

export default ContactMe;