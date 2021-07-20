const SectionTitle = ({ title, color }) => {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            <div
                className="section-title-hr"
                style={{ backgroundColor: `${color}` }}
            ></div>
        </div>
    );
};

export default SectionTitle;
