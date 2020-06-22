import React, { useState } from "react";
import DisplayWinningHamster from "./DisplayWinningHamster";
import "./DisplayHamsters.css";

const DisplayHamsters = ({
    winningHamsterInfo: { hamsterOne, hamsterTwo },
}) => {
    const [isGamePlayed, setIsGamePlayed] = useState(false);
    const [isHamsterOneWinner, setIsHamsterOneWinner] = useState(false);
    const [isHamsterTwoWinner, setIsHamsterTwoWinner] = useState(false);

    const gameStatsWins = {
        wins: 1,
        defeats: 0,
    };

    const gameStatsDefeats = {
        wins: 0,
        defeats: 1,
    };
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
            isHamsterTwoWinner
                ? await fetch(
                      `/api/hamsters/${hamsterTwo.id}/result`,
                      requestOptions
                  )
                : await fetch(
                      `/api/hamsters/${hamsterOne.id}/result`,
                      requestOptions
                  );
        } catch (err) {
            console.error(err);
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
            isHamsterTwoWinner
                ? await fetch(
                      `/api/hamsters/${hamsterOne.id}/result`,
                      requestOptions
                  )
                : await fetch(
                      `/api/hamsters/${hamsterTwo.id}/result`,
                      requestOptions
                  );
        } catch (err) {
            console.error(err);
        }
    };

    const handleHamsterOneClick = () => {
        setIsGamePlayed(true);
        setIsHamsterOneWinner(true);
        updateStatsWins();
        updateStatsDefeats();
    };
    const handleHamsterTwoClick = () => {
        setIsGamePlayed(true);
        setIsHamsterTwoWinner(true);
        updateStatsWins();
        updateStatsDefeats();
    };
    return (
        <div>
            {!isGamePlayed ? (
                <div className="hamster-container">
                    <div>
                        <img
                            src={`./images/hamsters/${hamsterOne.imageName}`}
                            alt="hamster one"
                            onClick={handleHamsterOneClick}
                        />
                        <h1>{hamsterOne.name}</h1>
                    </div>
                    <div>
                        <img
                            src={`./images/hamsters/${hamsterTwo.imageName}`}
                            alt="hamster two"
                            onClick={handleHamsterTwoClick}
                        />
                        <h1>{hamsterTwo.name}</h1>
                    </div>
                </div>
            ) : (
                <div className="winner-container">
                    <DisplayWinningHamster
                        info={
                            isHamsterOneWinner
                                ? {
                                      winner: {
                                          name: hamsterOne.name,
                                          age: hamsterOne.age,
                                          favoriteFood: hamsterOne.favoriteFood,
                                          imageName: hamsterOne.imageName,
                                      },
                                  }
                                : {
                                      winner: {
                                          name: hamsterTwo.name,
                                          age: hamsterTwo.age,
                                          favoriteFood: hamsterTwo.favoriteFood,
                                          imageName: hamsterTwo.imageName,
                                      },
                                  }
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default DisplayHamsters;
