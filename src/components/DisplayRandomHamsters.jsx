import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";
import DisplayWinner from "./DisplayWinner";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState({});
    const [hamsterTwo, setHamsterTwo] = useState({});
    const [hamsterOneScore, setHamsterOneScore] = useState(0);
    const [hamsterTwoScore, setHamsterTwoScore] = useState(0);
    const [isGamePlayed, setIsGamePlayed] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

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

    return (
        <div className="hamster-container ">
            {isGamePlayed ? (
                <div>
                    <DisplayWinner
                        winningHamsterInfo={{
                            name: hamsterOne.name,
                            age: hamsterOne.age,
                            favoriteFood: hamsterOne.favoriteFood,
                            imageName: hamsterOne.imgName,
                        }}
                    />
                </div>
            ) : (
                <div>
                    <div
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterOneScore(hamsterOneScore + 1);
                            setIsWinner(true);
                        }}
                    >
                        <img
                            src={`./images/hamsters/${hamsterOne.imageName}`}
                            alt="hamster one"
                        />
                    </div>
                    <div
                        onClick={() => {
                            setIsGamePlayed(true);
                            setHamsterTwoScore(hamsterOneScore + 1);
                            setIsWinner(true);
                        }}
                    >
                        <img
                            src={`./images/hamsters/${hamsterTwo.imageName}`}
                            alt="hamster two"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisplayRandomHamsters;
