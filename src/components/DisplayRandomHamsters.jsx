import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";
import DisplayWinner from "./DisplayWinner";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState([]);
    const [hamsterTwo, setHamsterTwo] = useState([]);
    const [hamsterOneScore, setHamsterOneScore] = useState(0);
    const [hamsterTwoScore, setHamsterTwoScore] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState(0);

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
        <div className="hamster-container ">
            {hamsterOne.map(hamster => (
                <div key={hamster.id} className="hamster">
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster one"
                        onClick={() => {
                            setHamsterOneScore(hamsterOneScore + 1);
                            setGamesPlayed(gamesPlayed + 1);
                        }}
                    />
                    {hamsterOneScore > 0 && (
                        <DisplayWinner winner={hamster.name} />
                    )}
                </div>
            ))}
            {hamsterTwo.map(hamster => (
                <div key={hamster.id} className="hamster">
                    <img
                        src={require(`../images/hamsters/${hamster.imgName}`)}
                        alt="hamster two"
                        onClick={() => {
                            setHamsterTwoScore(hamsterTwoScore + 1);
                            setGamesPlayed(gamesPlayed + 1);
                        }}
                    />
                    {hamsterTwoScore > 0 && (
                        <DisplayWinner winner={hamster.name} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default DisplayRandomHamsters;
