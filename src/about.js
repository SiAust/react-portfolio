import React from "react";
import Intro from "./Components/Intro";

const About = () => {
    const info = () => {
        return <>Simon Aust is a developer from Bournemouth, UK</>;
    };
    return (
        <>
            <Intro
                projectName="About"
                projectSymbol="🤷"
                projectLabel="person shrugging"
                projectInfoText={info()}
            />
        </>
    );
};

export default About;
