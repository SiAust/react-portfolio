import StatItem from "./StatItem";

const Stats = ({
    position,
    goals,
    assists,
    gamesPlayed,
    minutesPlayed,
    passSuccess,
}) => {
    return (
        <div className="stats">
            <StatItem statName="position" statValue={position} />
            <StatItem statName="goals" statValue={goals} />
            <StatItem statName="assists" statValue={assists} />
            <StatItem statName="games played" statValue={gamesPlayed} />
            <StatItem statName="minutes played" statValue={minutesPlayed} />
            <StatItem statName="pass success" statValue={passSuccess} />
        </div>
    );
};

export default Stats;
