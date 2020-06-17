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
    const [winningHamsterId, setWinningHamsterId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hamsters/random");
            const json = await response.json();
            setHamsterOne({
                id: json.id,
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
                id: json.id,
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

    let gameStats = {
        games: 1,
        wins: 1,
        defeats: 0,
    };
    const updateStats = async () => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const body = JSON.stringify(gameStats);
            const requestOptions = {
                method: "PUT",
                headers,
                body,
                redirect: "follow",
            };
            await fetch(
                `/api/hamsters/${winningHamsterId}/result`,
                requestOptions
            );
            console.log("added game stats");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {isGamePlayed ? (
                <div className="winning-container">
                    <DisplayWinner setWinningHamster={winningHamster()} />
                </div>
            ) : (
                <div className="hamster-container">
                    <div
                        className="left"
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterOneScore(hamsterOneScore + 1);
                            setIsHamsterOneWinner(true);
                            setWinningHamsterId(hamsterOne.id.toString());
                            updateStats();
                            console.log(typeof winningHamsterId);
                        }}
                    >
                        <img
                            src={`./images/hamsters/${hamsterOne.imageName}`}
                            alt="hamster one"
                        />
                        <h1>{hamsterOne.name}</h1>
                    </div>
                    <div
                        className="right"
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterTwoScore(hamsterTwoScore + 1);
                            setIsHamsterTwoWinner(true);
                            setWinningHamsterId(hamsterTwo.id.toString());
                            updateStats();
                            console.log(typeof winningHamsterId);
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
