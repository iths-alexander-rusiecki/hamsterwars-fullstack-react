import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";
import DisplayWinner from "./DisplayWinner";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState({});
    const [hamsterTwo, setHamsterTwo] = useState({});
    const [isGamePlayed, setIsGamePlayed] = useState(false);
    const [isHamsterOneWinner, setIsHamsterOneWinner] = useState(false);
    const [isHamsterTwoWinner, setIsHamsterTwoWinner] = useState(false);
    const [winningHamsterId, setWinningHamsterId] = useState("");
    const [defeatedHamsterId, setDefeatedHamsterId] = useState("");

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

    let gameStatsWins = {
        games: 1,
        wins: 1,
        defeats: 0,
    };
    let gameStatsDefeats = {
        games: 1,
        wins: 0,
        defeats: 1,
    };

    const handleClickHamsterOne = () => {
        setIsGamePlayed(true);
        setIsHamsterOneWinner(true);
        setWinningHamsterId(hamsterOne.id.toString());
        setDefeatedHamsterId(hamsterTwo.id.toString());
    };
    const handleClickHamsterTwo = () => {
        setIsGamePlayed(true);
        setIsHamsterTwoWinner(true);
        setWinningHamsterId(hamsterTwo.id.toString());
        setDefeatedHamsterId(hamsterOne.id.toString());
    };
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

    const updateStatsWins = async () => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const body = JSON.stringify(gameStatsWins);
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
    const updateStatsDefeats = async () => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const body = JSON.stringify(gameStatsDefeats);
            const requestOptions = {
                method: "PUT",
                headers,
                body,
                redirect: "follow",
            };
            await fetch(
                `/api/hamsters/${defeatedHamsterId}/result`,
                requestOptions
            );
            console.log("added game stats");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        updateStatsWins();
    }, [winningHamsterId]);
    useEffect(() => {
        updateStatsDefeats();
    }, [defeatedHamsterId]);

    return (
        <div>
            {isGamePlayed ? (
                <div className="winning-container">
                    <DisplayWinner setWinningHamster={winningHamster()} />
                </div>
            ) : (
                <div className="hamster-container">
                    <div className="left" onClick={handleClickHamsterOne}>
                        <img
                            src={`/images/hamsters/${hamsterOne.imageName}`}
                            alt="hamster one"
                        />
                        <h1>{hamsterOne.name}</h1>
                    </div>
                    <div className="right" onClick={handleClickHamsterTwo}>
                        <img
                            src={`/images/hamsters/${hamsterTwo.imageName}`}
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
