import React, { useState, useEffect } from "react";

const TotalAmountOfGames = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("api/stats/total");
                const json = await response.json();
                setStats(json[0]);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Total games played:</h1>
            <h1>{Math.floor(stats / 2)}</h1>
        </div>
    );
};

export default TotalAmountOfGames;
