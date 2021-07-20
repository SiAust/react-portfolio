const StatItem = ({ statName, statValue }) => {
    return (
        <div className="stat-item">
            <p>{statName}</p>
            <p>{statValue === 0 ? statValue : statValue || "N/A"}</p>
        </div>
    );
};

export default StatItem;
