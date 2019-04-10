import React from 'react';

const ProjectCard = props => {
    return (
        <div className="Project">
            <h2>{props.name}</h2>
            <img src={props.image} alt="Project detail"/>
            <p>{props.description}</p>
            <p>{props.technologies}</p>
        </div>
    )
}

export default Project