import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import HamsterWarsStartPage from "./components/HamsterWarsStartPage";
import FetchRandomHamsters from "./components/FetchRandomHamsters";
import TopFiveHamsters from "./components/TopFiveHamsters";
import BottomFiveHamsters from "./components/BottomFiveHamsters";
import TotalAmountOfGames from "./components/TotalAmountOfGames";
import AddHamsterForm from "./components/AddHamsterForm";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>HAMSTER WARS</h1>
                    <nav>
                        <NavLink exact to="/" activeClassName="active">
                            Start
                        </NavLink>
                        <NavLink to="/battle" activeClassName="active">
                            Battle
                        </NavLink>
                        <NavLink to="/stats" activeClassName="active">
                            Stats
                        </NavLink>
                        <NavLink to="/upload" activeClassName="active">
                            upload hamster
                        </NavLink>
                    </nav>
                </header>
                <main className="App-main">
                    <Switch>
                        <Route exact path="/">
                            <HamsterWarsStartPage />
                        </Route>
                        <Route path="/battle">
                            <FetchRandomHamsters />
                        </Route>
                        <Route path="/stats">
                            <TopFiveHamsters />
                            <BottomFiveHamsters />
                            <TotalAmountOfGames />
                        </Route>
                        <Route path="/upload">
                            <AddHamsterForm />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
