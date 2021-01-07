import React from 'react';
import { SocialIcon } from 'react-social-icons';
import image from '../bg-contact.jpg';

function Contact() {
    return (
        <div>
            <img src={image} alt='background' className='backgroung-image' />
            <section className='home'>
                <h1>Contact</h1>
            </section>
            <SocialIcon url='https://www.linkedin.com/in/lydiecherilus/' target='_blank' />
            <SocialIcon url='https://github.com/lydiecherilus' target='_blank' />
            <SocialIcon url='https://lydiecherilus.medium.com/' target='_blank' />
        </div>
    );
};

export default Contact;
