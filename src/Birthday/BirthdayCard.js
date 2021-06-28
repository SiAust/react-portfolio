import React from "react";
// Components
import Countdown from "./Countdown";

const BirthdayCard = ({ id, firstName, age, dob, image }) => {
    const animation = {
        animation: `slide-up 1s ease forwards ${id / 3}s`,
    };
    return (
        <div key={id} className="item birthday" style={animation}>
            <img src={image} alt={firstName} />
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{dob}</p>
            <Countdown date={dob} />
        </div>
    );
};
export default BirthdayCard;
