import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const email = "erezlev1994@gmail.com";
    return (
        <footer>
            <nav className="body-nav">
                <ul className="side-nav">
                    <li><a href="https://github.com/erezlev13"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/erez-lev/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href={`mailto: + ${email}`}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
            </nav>
            <p style={{color: "gray", fontSize: "0.9em", marginTop: "50px"}}>©2021 Made by Erez Lev</p>
        </footer>
    );
}

export default Footer;