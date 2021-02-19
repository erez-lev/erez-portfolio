import React from 'react';
import './About.css';
import { Element } from 'react-scroll';
import Pdf from "../assets/docs/Erez\ Lev's\ CV.pdf";
import { aboutContent } from '../assets/about-content';

const About = () => {
    const openResume = () => {
        console.log(Pdf);
        window.open(Pdf, '_blank');
    }

    return (
    <Element name="about-content">
        <div id="about-content" className="about">
            
            <h1><strong>About</strong></h1>
            <div>
                <p className="block-text">{aboutContent.firstParagraph}</p>
                <p className="block-text">{aboutContent.secondParagrah}</p>
                <p className="block-text">{aboutContent.thirdParagraph}</p>
                <button onClick={openResume} className="view-resume"><strong>View resume</strong></button>
            </div>
        </div>
    </Element>    
    );
}

export default About;