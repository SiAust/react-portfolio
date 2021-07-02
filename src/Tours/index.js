import React from "react";
import Intro from "../Components/Intro";

const Tours = () => {
    const info = () => {
        return (
            <>
                Tours app fetches data from an API and displays a list of
                holiday tours.
                <br />
                React hooks such as <code>useState</code>,{" "}
                <code>useContext</code> and <code>useEffect</code> help pass
                around the data through the component tree.
            </>
        );
    };
    return (
        <>
            <Intro
                projectName="Tours"
                projectSymbol="✈️"
                projectLabel="plane"
                projectInfoText={info()}
            />
        </>
    );
};

export default Tours;
