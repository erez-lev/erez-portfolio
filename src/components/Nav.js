import React from 'react';
import './Nav.css'
import Scrollspy from 'react-scrollspy';
import Pdf from "../assets/docs/Erez\ Lev's\ CV.pdf";
import { Link, ScrollLink } from 'react-scroll';

const Nav = () => {
    return (
        <nav className="header-nav sticky">
            {/* <!-- NAV --> */}
            <Scrollspy id="mainNav" className="main-nav"
                items={ ['home', 'about-content', 'projects-content', ''] } 
                currentClassName="active-link"
                offset={-50}
                >
                <li id="index" className="active-link">
                    <Link href="#home" activeClass="active" to="home" spy={true} smooth={true} duration={500}
                    offset={-50} >
                    Home
                    </Link>
                    </li>
                <li id="about">
                    <Link href="#about-content" activeClass="active" to="about" spy={true} smooth={true} duration={500}
                    offset={-50} >
                    About
                    </Link>
                    </li>
                <li id="projects">
                    <Link href="#projects-content" activeClass="active" to="projects" spy={true} smooth={true} duration={500}
                    offset={-50} >
                    Projects
                    </Link>
                    </li>
                <li id="resume"><a href={Pdf} target='_blank'>Resume</a></li> 
            </Scrollspy>
        </nav>
    );
}

export default Nav;