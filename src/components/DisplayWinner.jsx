import React from "react";

const DisplayWinner = ({
    setWinningHamster: { name, age, favoriteFood, imageName },
}) => {
    return (
        <div>
            <h1>Winner is:</h1>
            <img
                src={`./images/hamsters/${imageName}`}
                alt="alt winning hamster"
            />

            <h1>Name: {name}</h1>
            <h1> Age: {age}</h1>
            <h1>Favorite food: {favoriteFood}</h1>
        </div>
    );
};

export default DisplayWinner;
