import React from 'react';
import FooterColumn from '../FooterColumn/FooterColumn';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer_container'>
            <div className='container'>
                <FooterColumn/>
            </div>
        </section>
    );
};

export default Footer;