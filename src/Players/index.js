import React, { useState } from "react";
import Intro from "../Components/Intro";

// data
import { data } from "./data";
// Componenets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PlayerCard from "./PlayerCard";
import SectionBreak from "../Components/SectionBreak";
import Dot from "./Dot";

const PlayerStats = () => {
    // const [players, setPlayers] = useState(data);
    const [index, setIndex] = useState(0);

    const slideLeft = () => {
        setIndex(checkIndex(index + 1));
    };
    const slideRight = () => {
        setIndex(checkIndex(index - 1));
    };

    const checkIndex = (index) => {
        if (index > data.length - 1) {
            return data.length - 1;
        } else if (index < 0) {
            return 0;
        }
        return index;
    };

    const info = () => {
        return <>A carousel of football players.</>;
    };
    return (
        <>
            <Intro
                projectName="Player Stats"
                projectSymbol="✔️"
                projectLabel="tick mark"
                projectInfoText={info()}
            />
            <section className="section players ">
                <SectionBreak title="Players" color="blue" />
                <section className="section-center">
                    {/* dot array */}
                    <div className="dot-array">
                        <div className="hr"></div>
                        {data.map((player) => {
                            const classes = `dot ${
                                player.id === index + 1 ? "active-dot" : ""
                            }`;

                            return <Dot key={player.id} clazz={classes} />;
                        })}
                    </div>

                    {data.map((player, teamIndex) => {
                        const classes = `slide ${
                            teamIndex === index
                                ? "activeSlide"
                                : teamIndex === index - 1
                                ? "prevSlide"
                                : "nextSlide"
                        }`;
                        return (
                            <>
                                <PlayerCard
                                    key={player.id}
                                    clazz={classes}
                                    {...player}
                                />
                            </>
                        );
                    })}
                    <button
                        className="btn matchday slider-left"
                        type="button "
                        onClick={slideLeft}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        className="btn matchday slider-right"
                        type="button"
                        onClick={slideRight}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </section>

                {/* Left and right slider buttons */}
            </section>
        </>
    );
};

export default PlayerStats;
