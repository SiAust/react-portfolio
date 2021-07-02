import React from "react";
import Intro from "../Components/Intro";

const Reviews = () => {
    const info = () => {
        return (
            <>
                We can select a football team and see their previous results and
                next fixtures
            </>
        );
    };
    return (
        <>
            <Intro
                projectName="Matchday"
                projectSymbol="⚽"
                projectLabel="soccer ball"
                projectInfoText={info()}
            />
        </>
    );
};

export default Reviews;
