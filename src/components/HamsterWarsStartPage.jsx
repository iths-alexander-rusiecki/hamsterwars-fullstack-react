import React from "react";
import "./HamsterWarsStartPage.css";

const HamsterWarsStartPage = () => {
    return (
        <div className="container">
            <div className="info-container">
                <img src={"./images/happyhamster.png"} alt="happy hamster" />
                <h1>Start a hamster war by clicking battle!!</h1>
                <img src={"./images/sadhamster.png"} alt="happy hamster" />
                <div className="icons">
                    <div>
                        Icons made by
                        <a
                            href="https://www.flaticon.com/authors/freepik"
                            title="Freepik"
                        >
                            Freepik
                        </a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>
                    </div>
                    <div>
                        Icons made by
                        <a
                            href="https://www.flaticon.com/authors/freepik"
                            title="Freepik"
                        >
                            Freepik
                        </a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamsterWarsStartPage;
