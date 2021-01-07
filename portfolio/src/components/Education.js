import React from 'react';
import image from '../bg-education.jpg';

function Education() {
    return (
        <main>
            <img src={image} alt='background' className='backgroung-image' />
            <section className='home'>
                <h1>Education</h1>
            </section>
        </main>
    );
};

export default Education;
