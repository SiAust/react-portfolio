import React, { useState } from "react";
// Components
import BirthdayCard from "./BirthdayCard";
// Data
import { data } from "./data";

const Birthday = () => {
    const [people, setPeople] = useState(data);
    console.log(data);
    return (
        <div className="section">
            <h1>Birthdays</h1>
            {people.map((person) => {
                return <BirthdayCard {...person} />;
            })}
        </div>
    );
};

export default Birthday;
