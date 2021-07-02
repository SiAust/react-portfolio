import Emoji from "../Emoji";

const Intro = (props) => {
    return (
        <div className="section">
            <h1 className="left-justify">
                {props.projectName}{" "}
                <Emoji
                    symbol={props.projectSymbol}
                    label={props.projectLabel}
                />
            </h1>
            <p className="left-justify">{props.projectInfoText}</p>
        </div>
    );
};

export default Intro;
