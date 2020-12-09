import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className="container text-center">
                <div className='form_container'>
                   <div className='mb-5'>
                        <h5 className='text-green'>CONTACT US</h5>
                        <h1>Always Contact With Us</h1>
                   </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contact;