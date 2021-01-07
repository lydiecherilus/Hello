import React from 'react';
import image from '../bg-home.jpg';
import IconHtml5 from 'react-devicon/html5/plain-wordmark'

function Home() {
    return (
        <main>
            <img src={image} alt='background' className='backgroung-image' />
            <section className='home'>
                <h3>My name is Lydie Cherilus</h3>
                <p>I am a Web Developer with a passion for creating fun and user friendly websites and apps.</p>
                <p> I also love writing about technology.</p> 
            </section>

            <section className='skill'>
                <h3>Skills</h3>
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Python</span>
            </section>
        </main>
    );
};

export default Home;
