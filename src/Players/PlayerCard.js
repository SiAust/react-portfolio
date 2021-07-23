import Stats from "./Stats";

const PlayerCard = ({
    clazz,
    firstName,
    lastName,
    squadNumber,
    id,
    text,
    image,
    stats,
    dragFunction,
}) => {
    return (
        <article
            className={clazz}
            onMouseDown={(e) => dragFunction(e)}
            onTouchStart={(e) => dragFunction(e)}
        >
            <div
                className="player-card"
                // draggable="true"
            >
                <div className="player-card-img">
                    <span>{squadNumber}</span>
                    <img src={image} alt={`${firstName} ${lastName}`} />
                </div>
                <div className="player-card-header">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <p>{text}</p>
                <Stats key={id} {...stats} />
            </div>
        </article>
    );
};

export default PlayerCard;
