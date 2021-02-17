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
        <Element name="projects">
            <div id="projects-content" className="projects">
                    <h1><strong>My Recent Projects</strong></h1>
                    {projectArray}
            </div>
        </Element>
    );
}

export default Projects;