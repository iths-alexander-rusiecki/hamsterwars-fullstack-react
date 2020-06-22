import React, { useState, useEffect } from "react";
import DisplayHamsters from "./DisplayHamsters";

const FetchRandomHamsters = () => {
    const [hamsterOne, setHamsterOne] = useState({});
    const [hamsterTwo, setHamsterTwo] = useState({});

    useEffect(() => {
        const fetchTwoRandomHamsters = async () => {
            try {
                const hamsterOneResponse = await fetch("/api/hamsters/random");
                const hamsterTwoResponse = await fetch("/api/hamsters/random");
                const hamsterOneJson = await hamsterOneResponse.json();
                const hamsterTwoJson = await hamsterTwoResponse.json();
                setHamsterOne({
                    id: hamsterOneJson.id,
                    name: hamsterOneJson.name,
                    age: hamsterOneJson.age,
                    favoriteFood: hamsterOneJson.favFood,
                    imageName: hamsterOneJson.imgName,
                });
                setHamsterTwo({
                    id: hamsterTwoJson.id,
                    name: hamsterTwoJson.name,
                    age: hamsterTwoJson.age,
                    favoriteFood: hamsterTwoJson.favFood,
                    imageName: hamsterTwoJson.imgName,
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchTwoRandomHamsters();
    }, []);

    return (
        <div>
            {hamsterOne.imageName && hamsterTwo.imageName && (
                <DisplayHamsters
                    winningHamsterInfo={{
                        hamsterOne,
                        hamsterTwo,
                    }}
                />
            )}
        </div>
    );
};

export default FetchRandomHamsters;
