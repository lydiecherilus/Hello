import React from 'react';
import image from '../bg-project.jpg';

function Projects() {
    return (
        <main>
            <img src={image} alt='background' className='backgroung-image' />
            <section className='home'>
                <h1>Projects</h1>
            </section>
        </main>
    );
};

export default Projects;
