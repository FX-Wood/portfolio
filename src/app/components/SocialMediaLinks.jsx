import React from 'react';
import octocatDark from '../icons/github-white-fill.png';
import inDark from '../icons/linkedin-white-fill.png';

const SocialMediaLinks = (props) => {
    return (
        <>
            <a href="https://www.linkedin.com/in/fx-wood"><img className="icon-link linkedin" src={inDark} alt="Linkedin profile"/></a>
            <a href="https://www.github.com/fx-wood"><img className="icon-link github" src={octocatDark} alt="Github profile"/></a>
        </>
    )
}

export default SocialMediaLinks