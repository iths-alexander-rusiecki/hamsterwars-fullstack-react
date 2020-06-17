import React, { useState, useEffect } from "react";

import "./AddHamsterForm.css";

const AddHamsterForm = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [favFood, setFavFood] = useState("");
    const [loves, setLoves] = useState("");
    const [games, setGames] = useState(0);
    const [wins, setWins] = useState(0);
    const [defeats, setDefeats] = useState(0);
    const [imgName, setImgName] = useState("");
    const [idTouched, setIdTouched] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);
    const [lovesTouched, setLovesTouched] = useState(false);
    const stopSubmit = e => {
        e.preventDefault();
    };
    const newHamster = {
        id: parseInt(id),
        name,
        age: parseInt(age),
        favFood,
        loves,
        games: parseInt(games),
        wins: parseInt(wins),
        defeats: parseInt(defeats),
        imgName,
    };
    const fetchData = async () => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const body = JSON.stringify(newHamster);
            const requestOptions = {
                method: "POST",
                headers,
                body,
                redirect: "follow",
            };
            await fetch("/api/hamsters", requestOptions);
        } catch (err) {
            console.log(err);
        }
    };
    let [idClass, idError] = idTouched ? isValidId(id) : ["", ""];
    let [nameClass, nameError] = nameTouched ? isValidName(name) : ["", ""];
    let [lovesClass, lovesError] = lovesTouched
        ? isValidLoves(loves)
        : ["", ""];

    return (
        <div>
            <h1>Enter hamster info</h1>
            <form className="form-container" onSubmit={stopSubmit}>
                <div className="left">
                    <label htmlFor="id">Add Hamster id</label>
                    <input
                        className={idClass}
                        type="text"
                        id="id"
                        placeholder="id"
                        onChange={e => setId(id + e.target.value)}
                        onBlur={() => setIdTouched(true)}
                        // value={id}
                    />
                    <div className="error">{idError}</div>

                    <label htmlFor="name">Add Hamster name</label>
                    <input
                        className={nameClass}
                        type="text"
                        id="name"
                        placeholder="name"
                        onChange={e => setName(e.target.value)}
                        onBlur={() => setNameTouched(true)}

                        // value={name}
                    />
                    <div className="error">{nameError}</div>

                    <label htmlFor="age">Add Hamster age</label>
                    <input
                        type="text"
                        id="age"
                        placeholder="age"
                        onChange={e => setAge(age + e.target.value)}
                        // value={age}
                    />
                </div>
                <div className="middle">
                    <label htmlFor="favFood">Add Hamsters favourite food</label>
                    <input
                        type="text"
                        id="favFood"
                        placeholder="favorite food"
                        onChange={e => setFavFood(e.target.value)}
                        // value={favFood}
                    />

                    <label htmlFor="loves">Add Hamsters hobby</label>
                    <input
                        className={lovesClass}
                        type="text"
                        id="loves"
                        placeholder="loves to"
                        onChange={e => setLoves(e.target.value)}
                        onBlur={() => setLovesTouched(true)}

                        // value={loves}
                    />
                    <div className="error">{lovesError}</div>

                    <label htmlFor="games">Add Hamsters amount of games</label>
                    <input
                        type="text"
                        id="games"
                        placeholder="amount of games"
                        onChange={e => setGames(games + e.target.value)}
                        // value={games}
                    />
                </div>
                <div className="right">
                    <label htmlFor="wins">Add Hamsters amount of wins</label>
                    <input
                        type="text"
                        id="wins"
                        placeholder="amount of wins"
                        onChange={e => setWins(wins + e.target.value)}
                        // value={wins}
                    />

                    <label htmlFor="defeats">
                        Add Hamsters amount of defeats
                    </label>
                    <input
                        type="text"
                        id="defeats"
                        placeholder="amount of defeats"
                        onChange={e => setDefeats(defeats + e.target.value)}
                        // value={defeats}
                    />

                    <label htmlFor="imgName">Add Hamsters image name</label>
                    <input
                        type="text"
                        id="imgName"
                        placeholder="image name"
                        onChange={e => setImgName(e.target.value)}
                        // value={imgName}
                    />
                </div>
            </form>
            <button onClick={fetchData}>Add hamster</button>
        </div>
    );
};

const isValidId = id => {
    if (Number(id) !== null) {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid id"];
    }
};
const isValidName = name => {
    if (String(name) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid name"];
    }
};
const isValidLoves = loves => {
    if (String(loves) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid hobby"];
    }
};

export default AddHamsterForm;
