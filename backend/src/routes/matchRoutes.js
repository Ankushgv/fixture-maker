import express from "express";
import Match from "../models/Match.js"

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const newMatch = new Match({
            players: req.body.players,
            totalPoints: req.body.totalPoints,
            courtNumber: req.body.courtNumber
        });
        const savedMatch = await newMatch.save();
        res.status(201).json(savedMatch);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

export default router;