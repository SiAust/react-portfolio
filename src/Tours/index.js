import React from "react";
import Intro from "../Components/Intro";

const Tours = () => {
    const info = () => {
        return (
            <>
                This example app allows you to keep a list of people with a
                countdown to their next birthday. Please use the button below to
                add a person. <br />
                React hooks such as <code>useState</code> and{" "}
                <code>useContext</code> help pass around the data through the
                component tree.
            </>
        );
    };
    return (
        <div className="section">
            <Intro
                projectName="Tours"
                projectSymbol="✈️"
                projectLabel="plane"
                projectInfoText={info()}
            />
        </div>
    );
};

export default Tours;
