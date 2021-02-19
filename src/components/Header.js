import React from 'react';
import './Header.css';
import Nav from './Nav';
import profilePicture from '../assets/img/profile_picture.jpg';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';

const particalOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#0b2027",
                blur: 5
            }
        }
    }
}

const Header = () => {
    return (
        <Element name="home">
            <header id="home">
                <Nav />
                <Particles className="particles" params={particalOptions} />
                <div className="buffer"></div>
                
                    {/* <!-- HEADER HEADLINE --> */}
                    <div className="header-headline">
                        <h1>Erez Lev</h1>
                        <h2>Computer Science Student at MTA</h2>
                    </div>
                    <div className="header-cover">
                        <img src={profilePicture} alt="profile-picture" />
                    </div>
                </header>
        </Element>    
    );
}

export default Header;