import React from "react";
import Intro from "./Components/Intro";

const Home = () => {
    const info = () => {
        return (
            <>
                This is a collection of React portfolio projects created by
                Simon Aust.
            </>
        );
    };
    return (
        <>
            <Intro
                projectName="Welcome"
                projectSymbol="👋"
                projectLabel="waving hand"
                projectInfoText={info()}
            />
        </>
    );
};

export default Home;
