import React from 'react';
import Project from './Project';
import { Element } from 'react-scroll';

const Projects = ({ projects }) => {
    const projectArray = projects.map((project, i) => {
        return (
            <Project
            key={project.title}
            title={project.title}
            text={project.text}
            icons={project.icons}
            />
        );
    });

    return (
        // <!-- PROJECTS -->
        <div id="projects-content" className="projects">
            <Element name="projects" className="projects">
                <h1><strong>My Recent Projects</strong></h1>
                {projectArray}
            </Element>
        </div>
    );
}

export default Projects;