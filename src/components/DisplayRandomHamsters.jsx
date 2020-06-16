import React, { useState, useEffect } from "react";
import "./DisplayRandomHamsters.css";
import DisplayWinner from "./DisplayWinner";

const DisplayRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState({});
    const [hamsterTwo, setHamsterTwo] = useState({});
    const [hamsterOneScore, setHamsterOneScore] = useState(0);
    const [hamsterTwoScore, setHamsterTwoScore] = useState(0);
    const [isGamePlayed, setIsGamePlayed] = useState(false);

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
            {/* {isGamePlayed ? (
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
                    {hamsterOne.url}
                    <img
                        src={require(`../images/hamsters/${hamsterOne.imageName}`)}
                        alt="hamster one"
                    />
                    <img
                        src={require(`../images/hamsters/${hamsterTwo.imageName}`)}
                        alt="hamster two"
                    />
                </div>
            )} */}
        </div>
    );
};

export default DisplayRandomHamsters;
