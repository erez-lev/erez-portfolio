import React from 'react';
import './Header.css';
import Nav from './Nav';
import profilePicture from '../assets/img/profile_picture.jpg';
import { Element } from 'react-scroll';


const Header = () => {
    return (
        <Element name="home">
            <header id="home">
                <Nav />
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