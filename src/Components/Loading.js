import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    return (
        <>
            <div className="section">
                <div className="center">
                    <FontAwesomeIcon icon={faAsterisk} className="loading" />
                </div>
            </div>
        </>
    );
};

export default Loading;
