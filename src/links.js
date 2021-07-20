import React from "react";

import Intro from "./Components/Intro";
import SectionTitle from "./Components/SectionBreak";
import ProjectLink from "./Components/ProjectLink";
import { data } from "./Components/linkdata";

const Links = () => {
    const info = () => {
        return (
            <>
                Useful and interesting resources I discoverd while building
                these projects
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
            <div className="section project">
                <SectionTitle title="tools" color="pink" />
                {data
                    .filter((data) => data.type === "tool")
                    .map((filtered) => (
                        <ProjectLink {...filtered} />
                    ))}
                <SectionTitle title="Personal" color="red" />
                {data
                    .filter((data) => data.type === "personal")
                    .map((filtered) => (
                        <ProjectLink {...filtered} />
                    ))}
            </div>
        </>
    );
};

export default Links;
