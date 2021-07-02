import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import blankImg from "../res/blank-profile-picture.png";
// Components
import Countdown from "./Countdown";

const BirthdayCard = ({
    id,
    firstName,
    age,
    dob,
    image,
    removeItem,
    toggleEdit,
}) => {
    const animation = {
        animation: `slide-up 0.5s ease forwards ${id / 3}s`,
    };
    return (
        <div key={id} className="item birthday" style={animation}>
            <div className="btn-group">
                <button type="button" onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <button type="button" onClick={() => toggleEdit(id)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <img
                src={image}
                alt={firstName}
                /* if the image doesn't load onError will fire, we pass in a function to set a default image */
                onError={(image) => (image.target.src = blankImg)}
            />
            <div className="birthday-header">
                <h4>{firstName}</h4>
                <p>{age}</p>
                <p>{dob}</p>
            </div>
            <Countdown date={dob} />
            {/* Blank profile image by <a href="https://pixabay.com/users/wanderercreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Stephanie Edwards</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">Pixabay</a> */}
        </div>
    );
};
export default BirthdayCard;
