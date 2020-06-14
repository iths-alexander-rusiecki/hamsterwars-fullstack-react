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
        <div className="hamster-container">
            {hamsterOne.map(hamster => (
                <div key={hamster.id} className="hamster">
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster one"
                    />
                    <h1>{hamster.name}</h1>
                </div>
            ))}
            {hamsterTwo.map(hamster => (
                <div key={hamster.id} className="hamster">
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster two"
                    />
                    <h1>{hamster.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default DisplayRandomHamsters;
