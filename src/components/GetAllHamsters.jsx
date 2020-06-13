import React, { useState, useEffect } from "react";

const GetAllHamsters = () => {
    const [hamster, setHamster] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters");
            const json = await response.json();
            setHamster(json.map(hamster => hamster));
        };
        fetchData();
    }, []);
    return (
        <div>
            {hamster.map(hamster => (
                <h1 key={hamster.id}>{hamster.name}</h1>
            ))}
        </div>
    );
};

export default GetAllHamsters;
