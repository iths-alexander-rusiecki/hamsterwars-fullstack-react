import React, { useState, useEffect } from "react";

const TopFiveHamsters = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/charts/top");
                const json = await response.json();
                setStats(json.map(hamster => hamster));
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Most wins: </h1>
            {stats.map(hamster => (
                <h3 key={hamster.id}>
                    {hamster.name}: {hamster.wins} wins
                </h3>
            ))}
        </div>
    );
};

export default TopFiveHamsters;
