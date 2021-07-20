import { useState } from "react";

const TourItem = ({
    id,
    name,
    info,
    image,
    price,
    handleClick: removeItem,
}) => {
    /* Toggle the read more state of {info} */
    const [readMore, setReadMore] = useState(false);

    return (
        <div key={id} className="single-tour">
            <img src={image} alt="destination example" />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">£{price}</h4>
                </div>
                <p style={{ height: readMore ? "10rem" : "3rem" }}>
                    {readMore ? info + " " : info.substring(0, 200) + " ... "}

                    <div style={{ display: "inline", position: "relative" }}>
                        <span
                            onClick={() => setReadMore(!readMore)}
                            id="readToggle"
                        >
                            {readMore ? "read less" : "read more"}
                        </span>
                        <div className="slim"></div>
                    </div>
                </p>
                <button className="tour-btn" onClick={() => removeItem(id)}>
                    not for me
                </button>
            </footer>
        </div>
    );
};

export default TourItem;
