import React from "react";
import Intro from "./Components/Intro";

const Projects = () => {
    const info = () => {
        return <>All the projects in cards</>;
    };
    return (
        <>
            <Intro
                projectName="Projects"
                projectSymbol="💻"
                projectLabel="laptop"
                projectInfoText={info()}
            />
        </>
    );
};

export default Projects;
