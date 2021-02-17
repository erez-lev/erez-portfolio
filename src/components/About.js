import React from 'react';
import './About.css';
import { Element } from 'react-scroll';

const firstParagraph = `One of my favourite things, is to think about new idea 
that just popped out in my mind.
So, as a CS student with a drive to solve problems, I'm looking for technologicals 
ways to implement them.
Therefore, on my spare time I've learned Android
development and Fullstack - so I can create apps for any idea.`;

const secondParagrah = `Being creative is part of me. I believe in thinking out of the
box. Always looking to learn, get expertise and gain more skills, and using them to produce exciting things.`;

const thirdParagraph = `Besides of study and develop, I like to do sport - espacially running.
I found sport relaxing and mindset changing. Basically it's an integral part of my life.;`

const About = () => {
    return (
        <div id="about-content" className="about">
            <Element name="about" className="about">
            <h1><strong>About</strong></h1>
            <div>
                <p className="block-text">{firstParagraph}</p>
                <p className="block-text">{secondParagrah}</p>
                <p className="block-text">{thirdParagraph}</p>
            </div>
            </Element>
        </div>
    );
}

export default About;