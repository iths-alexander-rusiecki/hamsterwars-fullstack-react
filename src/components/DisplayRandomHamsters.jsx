import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState([]);
    const [hamsterTwo, setHamsterTwo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters/random");
            const json = await response.json();
            setHamsterOne(json.map(hamster => hamster));
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters/random");
            const json = await response.json();
            setHamsterTwo(json.map(hamster => hamster));
        };
        fetchData();
    }, []);

    return (
        <div>
            {hamsterOne.map(hamster => (
                <div key={hamster.id}>
                    <h1>{hamster.name}</h1>
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster one"
                    />
                </div>
            ))}
            {hamsterTwo.map(hamster => (
                <div key={hamster.id}>
                    <h1>{hamster.name}</h1>
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster two"
                    />
                </div>
            ))}
        </div>
    );
};

export default DisplayRandomHamsters;
