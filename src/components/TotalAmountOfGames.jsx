import React, { useState, useEffect } from "react";

const TotalAmountOfGames = () => {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("api/stats/total");
            const json = await response.json();
            console.log(json[0]);
            setStats(json[0]);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Total games played:</h1>
            <h1>{stats}</h1>
            {/* {stats.map(hamster => (
                <h1 key={hamster}>{hamster}</h1>
            ))} */}
        </div>
    );
};

export default TotalAmountOfGames;
