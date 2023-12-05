import fs from "fs"
import jwt from "jsonwebtoken"

export async function authenticateUserMessages(req, res, next) {
    console.log(req);
    const token = req.headers.authorization
    const isVerified = await jwt.verify(token, "shhhhh")
    console.log(isVerified)
    next()
};

export function validateNewMessage(req, res, next) {
    // de-hash the user message & translate
    // sourceLanguage, targetLanguage, text validation
    if (!req.body.sourceLanguage) {
        return res.send("source language input is not valid")
    }
    if (!req.body.targetLanguage) {
        return res.send("target language input is not valid")
    }
    if (!text) {
        return res.send("text input is not valid")
    }
    const token = req.headers.authorization
    const user = jwt.verify(token, "shhhhh")
    console.log(user);
    next();
};
