import React, { useState } from "react";
import "./AddHamsterForm.css";

const AddHamsterForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [favFood, setFavFood] = useState("");
    const [loves, setLoves] = useState("");
    const [imgName, setImgName] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [ageTouched, setAgeTouched] = useState(false);
    const [favFoodTouched, setFavFoodTouched] = useState(false);
    const [lovesTouched, setLovesTouched] = useState(false);
    const [imgNameTouched, setImgNameTouched] = useState(false);

    const stopSubmit = e => {
        e.preventDefault();
    };

    const newHamster = {
        name,
        age,
        favFood,
        loves,
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

    const [nameClass, nameError] = nameTouched ? isValidName(name) : ["", ""];
    const [ageClass, ageError] = ageTouched ? isValidAge(age) : ["", ""];
    const [favFoodClass, favFoodError] = favFoodTouched
        ? isValidFavFood(favFood)
        : ["", ""];
    const [lovesClass, lovesError] = lovesTouched
        ? isValidLoves(loves)
        : ["", ""];
    const [imgNameClass, imgNameError] = imgNameTouched
        ? isValidImgName(imgName)
        : ["", ""];

    return (
        <div className="add-hamster-container">
            <h2>Enter hamster info</h2>
            <form className="form-container" onSubmit={stopSubmit}>
                <label htmlFor="name">Add hamster name</label>
                <input
                    className={nameClass}
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={e => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                />
                <div className="error">{nameError}</div>

                <label htmlFor="age">Add hamster age</label>
                <input
                    className={ageClass}
                    type="text"
                    id="age"
                    placeholder="age"
                    onChange={e => setAge(e.target.value)}
                    onBlur={() => setAgeTouched(true)}
                />
                <div className="error">{ageError}</div>

                <label htmlFor="favFood">Add hamsters favourite food</label>
                <input
                    className={favFoodClass}
                    type="text"
                    id="favFood"
                    placeholder="favorite food"
                    onChange={e => setFavFood(e.target.value)}
                    onBlur={() => setFavFoodTouched(true)}
                />
                <div className="error">{favFoodError}</div>

                <label htmlFor="loves">Add hamsters hobby</label>
                <input
                    className={lovesClass}
                    type="text"
                    id="loves"
                    placeholder="loves to"
                    onChange={e => setLoves(e.target.value)}
                    onBlur={() => setLovesTouched(true)}
                />
                <div className="error">{lovesError}</div>

                <label htmlFor="imgName">Add hamsters image name</label>
                <input
                    className={imgNameClass}
                    type="text"
                    id="imgName"
                    placeholder="image name"
                    onChange={e => setImgName(e.target.value)}
                    onBlur={() => setImgNameTouched(true)}
                />
                <div className="error">{imgNameError}</div>
                <button
                    disabled={
                        nameError ||
                        ageError ||
                        favFoodError ||
                        lovesError ||
                        imgNameError
                    }
                    onClick={fetchData}
                >
                    save
                </button>
            </form>
        </div>
    );
};

const isValidName = name => {
    if (String(name) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid name"];
    }
};

const isValidAge = age => {
    if (isNaN(age) || age !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid age"];
    }
};

const isValidFavFood = favFood => {
    if (String(favFood) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid dish"];
    }
};

const isValidLoves = loves => {
    if (String(loves) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid hobby"];
    }
};

const isValidImgName = imgName => {
    if (String(imgName) !== "") {
        return ["valid", ""];
    } else {
        return ["invalid", "Please enter a valid image name"];
    }
};

export default AddHamsterForm;
