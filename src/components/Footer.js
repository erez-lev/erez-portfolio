import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <nav className="body-nav">
                <ul className="side-nav">
                    <li><a href="https://github.com/erezlev13"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/erez-lev/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
            </nav>
            <p>Made by Erez Lev</p>
            <p>Contact me:  <a href="erezlev1994@gmail.com">erezlev1994@gmail.com</a></p>
        </footer>
    );
}

export default Footer;