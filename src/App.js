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
import GetAllHamsters from "./components/GetAllHamsters";
import TopFiveHamsters from "./components/TopFiveHamsters";
import BottomFiveHamsters from "./components/BottomFiveHamsters";
import TotalAmountOfGames from "./components/TotalAmountOfGames";
import DisplayRandomHamster from "./components/DisplayRandomHamster";

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
                        <NavLink to="/fetch">fetch</NavLink>
                        <NavLink to="/battle/:id1/:id2">
                            Specific match up
                        </NavLink>
                        <NavLink to="/matchup/:id1/:id2">Match result</NavLink>
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
                            <DisplayRandomHamster />
                        </Route>
                        <Route path="/fetch">
                            <GetAllHamsters />
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
