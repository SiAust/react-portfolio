import React, { useState, useEffect } from "react";

import Intro from "../Components/Intro";
import Loading from "../Components/Loading";
import TourItem from "./TourItem";
import SectionBreak from "../Components/SectionBreak";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
    const [isLoading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
            console.log({ tours });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const removeTour = (id) => {
        const filterred = tours.filter((tour) => tour.id !== id);
        setTours([...filterred]);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    const info = () => {
        return (
            <>
                Tours app fetches data from an API and displays a list of
                holiday tours.
                <br />
                <code>Fetch</code> API and React hooks such as{" "}
                <code>useState</code>, and <code>useEffect</code> and prop
                drilling help pass around the data through the component tree.
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
            {isLoading && <Loading />}
            {isLoading || (
                <div className="section project">
                    {tours.length === 0 && (
                        <>
                            <SectionBreak title="no more tours" color="pink" />
                            <button className="tour-btn" onClick={fetchTours}>
                                Refresh
                            </button>
                        </>
                    )}
                    {tours.map((tour) => {
                        return (
                            <TourItem
                                key={tour.id}
                                {...tour}
                                handleClick={removeTour}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Tours;
