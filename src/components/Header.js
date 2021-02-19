import React from 'react';
import './Header.css';
import Nav from './Nav';
import profilePicture from '../assets/img/profile_picture.jpg';
import { Element } from 'react-scroll';
import Particales from "react-particles-js";
import particlesOptions from '../assets/particlesjs-config_snow.json';

const Header = () => {
    return (
        <Element name="home">
            <header id="home">
                <Nav />
                <div className="buffer"></div>
                <Particales className="particles" params={particlesOptions} height="500px"/>
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