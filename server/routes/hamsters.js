const { db } = require("./../firebase");
const { Router } = require("express");
const fs = require("fs");
const converter = require("number-to-words"); // Just testing package for fun

const router = new Router();

const hamstersRef = db.collection("hamsters"); // DRY code

// GET random hamster
router.get("/random", async (req, res) => {
    try {
        // Random number (size of snapshot)
        const snapShot = await hamstersRef.get();
        const randomNumber = Math.floor(Math.random() * snapShot._size);

        // Finds hamster where ID == random number
        const randomHamster = await hamstersRef
            .where("id", "==", randomNumber)
            .get();
        randomHamster.forEach(doc => {
            res.send({ randomHamster: doc.data() });
        });
    } catch (err) {
        console.error(err);
    }
});

// GET all hamsters
router.get("/", async (req, res) => {
    try {
        // Empty array
        const hamstersArray = [];
        const snapShot = await hamstersRef.get();
        snapShot.forEach(doc => {
            // Push every hamster to array
            hamstersArray.push(doc.data());
        });
        res.send(hamstersArray);
        // res.send({ allHamsters: hamstersArray });
    } catch (err) {
        console.error(err);
    }
});

// GET hamster with specified ID
router.get("/:id", async (req, res) => {
    try {
        // Finds hamster where ID == request parameter
        const snapShot = await hamstersRef
            .where("id", "==", parseInt(req.params.id))
            .get();
        snapShot.forEach(doc => {
            res.send({ SpecificHamster: doc.data() });
        });
    } catch (err) {
        console.error(err);
    }
});

// PUT stats to hamster with specified ID
router.put("/:id/result", async (req, res) => {
    try {
        // Finds hamster where ID == request parameter
        const snapShot = await hamstersRef
            .where("id", "==", parseInt(req.params.id))
            .get();
        snapShot.forEach(doc => {
            const hamster = doc.data();

            // On PUT only increment
            if (parseInt(req.body.wins) > 0) {
                hamster.wins++;
            }
            // On PUT only increment
            if (parseInt(req.body.defeats) > 0) {
                hamster.defeats++;
            }

            // Always increment
            hamster.games++;
            hamstersRef
                .doc(doc.id)
                .set(hamster)
                .then(
                    // Testing converter
                    res.send({
                        msg: `Hamster ${converter.toWords(
                            req.params.id
                        )}´s game stats updated`,
                    })
                )
                .catch(err => {
                    throw err;
                });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
