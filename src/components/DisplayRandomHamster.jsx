import React, { useState, useEffect } from "react";

const DisplayRandomHamster = () => {
    // const [stats, setStats] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/assets/hamster-1.jpg");
            console.log(response);

            const json = await response.json();
            console.log(json);

            // setStats(json.map(hamster => hamster));
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Random hamster image:</h1>
            {/* {stats.map(hamster => (
                <img src={hamster} alt="" />
                // <h3 key={hamster}>{hamster}</h3>
            ))} */}
        </div>
    );
};

export default DisplayRandomHamster;
