import React from "react";

const DisplayWinner = ({ winningHamsterInfo: { name, age, favoriteFood } }) => {
    return (
        <div>
            <h1>Winner is:</h1>
            <h1>{name}</h1>
            <h1> Age: {age}</h1>
            <h1>Favorite food: {favoriteFood}</h1>
        </div>
    );
};

export default DisplayWinner;
