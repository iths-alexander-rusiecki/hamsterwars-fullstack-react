import React from "react";

const DisplayWinner = ({ winner }) => {
    return (
        <div>
            <h1>Winner is:</h1>
            <h1>{winner}</h1>
        </div>
    );
};

export default DisplayWinner;
