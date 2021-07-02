import React from "react";
import Intro from "./Components/Intro";

const Links = () => {
    const info = () => {
        return (
            <>
                <a href="http://www.simonaust.co.uk">Simon Aust</a>
            </>
        );
    };
    return (
        <>
            <Intro
                projectName="Links"
                projectSymbol="🌐"
                projectLabel="globe with meridians"
                projectInfoText={info()}
            />
        </>
    );
};

export default Links;
