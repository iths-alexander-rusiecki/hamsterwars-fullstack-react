import React from "react";

const DisplayWinner = ({ winningHamsterInfo: { name, age, favoriteFood } }) => {
    return (
        <div>
            <h1>Winner is:</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{favoriteFood}</h1>
        </div>
    );
};

export default DisplayWinner;
