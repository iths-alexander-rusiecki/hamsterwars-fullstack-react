import React, { useState, useEffect } from "react";
import "./AddHamsterForm.css";

const AddHamsterForm = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [favFood, setFavFood] = useState("");
    const [loves, setLoves] = useState("");
    const [games, setGames] = useState("");
    const [wins, setWins] = useState("");
    const [defeats, setDefeats] = useState("");
    const [imgName, setImgName] = useState("");
    const stopSubmit = e => {
        e.preventDefault();
    };
    const saveNewHamsterInfo = () => {
        const newHamster = {
            id,
            name,
            age,
            favFood,
            loves,
            games,
            wins,
            defeats,
            imgName,
        };
        console.log(newHamster);
        return newHamster;
    };

    return (
        <div>
            <h1>Enter hamster info</h1>
            <form className="form-container" onSubmit={stopSubmit}>
                <label htmlFor="id">Add Hamster id</label>
                <input
                    type="text"
                    id="id"
                    placeholder="id"
                    onChange={e => setId(e.target.value)}
                    value={id}
                />

                <label htmlFor="name">Add Hamster name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />

                <label htmlFor="age">Add Hamster age</label>
                <input
                    type="text"
                    id="age"
                    placeholder="age"
                    onChange={e => setAge(e.target.value)}
                    value={age}
                />

                <label htmlFor="favFood">Add Hamsters favourite food</label>
                <input
                    type="text"
                    id="favFood"
                    placeholder="favorite food"
                    onChange={e => setFavFood(e.target.value)}
                    value={favFood}
                />

                <label htmlFor="loves">Add Hamsters hobby</label>
                <input
                    type="text"
                    id="loves"
                    placeholder="loves to"
                    onChange={e => setLoves(e.target.value)}
                    value={loves}
                />

                <label htmlFor="games">Add Hamsters amount of games</label>
                <input
                    type="text"
                    id="games"
                    placeholder="amount of games"
                    onChange={e => setGames(e.target.value)}
                    value={games}
                />

                <label htmlFor="wins">Add Hamsters amount of wins</label>
                <input
                    type="text"
                    id="wins"
                    placeholder="amount of wins"
                    onChange={e => setWins(e.target.value)}
                    value={wins}
                />

                <label htmlFor="defeats">Add Hamsters amount of defeats</label>
                <input
                    type="text"
                    id="defeats"
                    placeholder="amount of defeats"
                    onChange={e => setDefeats(e.target.value)}
                    value={defeats}
                />

                <label htmlFor="imgName">Add Hamsters image name</label>
                <input
                    type="text"
                    id="imgName"
                    placeholder="image name"
                    onChange={e => setImgName(e.target.value)}
                    value={imgName}
                />
                <button onClick={saveNewHamsterInfo}>Add hamster</button>
            </form>
        </div>
    );
};

export default AddHamsterForm;
