import React from "react";
import "./DisplayWinningHamster.css";

const DisplayWinningHamster = ({
    info: {
        winner: { name, age, favoriteFood, imageName },
    },
}) => {
    return (
        <div>
            <img src={`./images/hamsters/${imageName}`} alt="winning hamster" />
            <div>
                <h1> Winner: {name}</h1>
                <h1> Age: {age}</h1>
                <h1> Eats: {favoriteFood}</h1>
            </div>
        </div>
    );
};

export default DisplayWinningHamster;
