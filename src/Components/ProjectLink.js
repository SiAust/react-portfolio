const ProjectLink = ({ text, title, image, link }) => {
    return (
        <div className="link-item left-justify">
            <div className="link-info">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="img-wrap">
                    <img src={image} alt={title} />
                </div>
            </a>
        </div>
    );
};

export default ProjectLink;
