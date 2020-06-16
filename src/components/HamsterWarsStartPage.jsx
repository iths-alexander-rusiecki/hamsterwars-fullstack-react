import React from "react";
import "./HamsterWarsStartPage.css";

const HamsterWarsStartPage = () => {
    return (
        <div className="container">
            <div className="info-container">
                <img
                    src={require("../images/happyhamster.png")}
                    alt="happy hamster"
                />
                <h1>Start a hamster war by clicking battle!!</h1>
                <img
                    src={require("../images/sadhamster.png")}
                    alt="happy hamster"
                />
            </div>
        </div>
    );
};

export default HamsterWarsStartPage;