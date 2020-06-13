import React from "react";
import "./HamsterWarsStartPage.css";

const HamsterWarsStartPage = () => {
    return (
        <div className="container">
            <div className="pic-container">
                <img
                    src={require("../images/happyhamster.svg")}
                    alt="happy hamster"
                />
                <h1>This is the start page</h1>
                <h3>Start a hamster war!!</h3>
                <img
                    src={require("../images/sadhamster.svg")}
                    alt="happy hamster"
                />
            </div>
        </div>
    );
};

export default HamsterWarsStartPage;
