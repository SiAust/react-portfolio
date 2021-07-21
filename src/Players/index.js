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

    function dragPlayerCard(e) {
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(`x : ${e.clientX}`);
        const playerCard = e.target;
        let x = 0;

        let dragX = e.clientX;
        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;

        function onMouseMove(e) {
            // console.log(`moving ${e.target}`);
            // console.log(`x : (${dragX} - ${e.clientX}) = ${x}`);

            x = e.clientX - dragX;
            if (x <= -100) {
                // console.log("minus 100");
                slideLeft();
                /* hide the visible shift back to left: 0 
                if we're transitioning between cards*/
                if (index === data.length - 1) {
                    playerCard.style.left = 0;
                    // console.log("bump left");
                } else {
                    setTimeout(() => {
                        playerCard.style.left = 0;
                    }, 1000);
                }

                return;
            }
            if (x >= 100) {
                // console.log("plus 100");
                slideRight();
                /* hide the visible shift back to left: 0 
                if we're transitioning between cards */
                if (index === 0) {
                    playerCard.style.left = 0;
                    // console.log("bump right");
                } else {
                    setTimeout(() => {
                        playerCard.style.left = 0;
                    }, 1000);
                }

                return;
            }
            playerCard.style.left = x + "px";
        }

        function onMouseUp(e) {
            // console.log("onMouseUp");

            if (x < 0 && x > -100) {
                // console.log("not far enough left");
                playerCard.style.left = 0;
            }
            if (x > 0 && x < 100) {
                // console.log("not far enough right");
                playerCard.style.left = 0;
            }
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    const info = () => {
        return <>A responsive carousel of football players.</>;
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
                                    dragFunction={dragPlayerCard}
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
