import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";
import DisplayWinner from "./DisplayWinner";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState({});
    const [hamsterTwo, setHamsterTwo] = useState({});
    const [hamsterOneScore, setHamsterOneScore] = useState(0);
    const [hamsterTwoScore, setHamsterTwoScore] = useState(0);
    const [isGamePlayed, setIsGamePlayed] = useState(false);
    const [isHamsterOneWinner, setIsHamsterOneWinner] = useState(false);
    const [isHamsterTwoWinner, setIsHamsterTwoWinner] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters/random");
            const json = await response.json();
            setHamsterOne({
                name: json.name,
                age: json.age,
                favoriteFood: json.favFood,
                imageName: json.imgName,
            });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters/random");
            const json = await response.json();
            setHamsterTwo({
                name: json.name,
                age: json.age,
                favoriteFood: json.favFood,
                imageName: json.imgName,
            });
        };
        fetchData();
    }, []);
    const winningHamster = () => {
        if (isHamsterOneWinner) {
            return hamsterOne;
        } else if (isHamsterTwoWinner) {
            return hamsterTwo;
        }
    };

    return (
        <div className="hamster-container ">
            {isGamePlayed ? (
                <div>
                    <DisplayWinner setWinningHamster={winningHamster()} />
                </div>
            ) : (
                <div>
                    <div
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterOneScore(hamsterOneScore + 1);
                            setIsHamsterOneWinner(true);
                        }}
                    >
                        <img
                            src={`./images/hamsters/${hamsterOne.imageName}`}
                            alt="hamster one"
                        />
                        <h1>{hamsterOne.name}</h1>
                    </div>
                    <div
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterTwoScore(hamsterTwoScore + 1);
                            setIsHamsterTwoWinner(true);
                        }}
                    >
                        <img
                            src={`./images/hamsters/${hamsterTwo.imageName}`}
                            alt="hamster two"
                        />
                        <h1>{hamsterTwo.name}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisplayRandomHamsters;
