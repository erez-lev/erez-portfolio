import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import playSrc from '../assets/video/cofeece-screen-recording.mp4';

const Project = ({ title, text, icons }) => {
    const githubLink = icons[0];
    const playLink = icons.length > 1 ? icons[1] : null;
    return playLink === null ? (
        <div className="box">
                <h3>{title}</h3>
                <p className="block-text">{text}</p>
                <ul className="icons">
                    <li><a href={githubLink} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
        </div>
    ) :
    (
    <div className="box blue">
        <h3>{title}</h3>
        <p className="block-text">{text}</p>
        <ul className="icons">
            <li><a href={githubLink} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href={playSrc} target="_blank"><FontAwesomeIcon icon={faPlayCircle} /></a></li>
        </ul>
    </div>
    )
}

export default Project;