import React, { useState } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom";
import HamsterWarsStartPage from "./components/HamsterWarsStartPage";
import TopFiveHamsters from "./components/TopFiveHamsters";
import BottomFiveHamsters from "./components/BottomFiveHamsters";
import TotalAmountOfGames from "./components/TotalAmountOfGames";
import DisplayRandomHamsters from "./components/DisplayRandomHamsters";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>HAMSTER WARS</h1>
                    <nav>
                        <NavLink exact to="/">
                            Start
                        </NavLink>
                        <NavLink to="/battle">Battle</NavLink>
                        <NavLink to="/stats">Stats</NavLink>
                        <NavLink to="/upload">upload hamster pic</NavLink>
                    </nav>
                </header>
                <main className="App-main">
                    <Switch>
                        <Route exact path="/">
                            <HamsterWarsStartPage />
                        </Route>
                        <Route path="/battle">
                            <DisplayRandomHamsters />
                        </Route>
                        <Route path="/stats">
                            <TopFiveHamsters />
                            <BottomFiveHamsters />
                            <TotalAmountOfGames />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
