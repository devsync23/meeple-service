import fs from "fs"
import jwt from "jsonwebtoken"

export function authenticateUserMessages(req, res, next) {
    console.log(req);
    const token = req.headers.authorization
    try {
        const userData = jwt.verify(token, "shhhhh")
        req.user = userData
    } catch (err) {
        return res.send(400, "Could not authenticate user")
    }
    next()
};

export function validateNewMessage(req, res, next) {
    // de-hash the user message & translate
    // sourceLanguage, targetLanguage, text validation
    console.log("from the validate new message", req.user);
    if (!req.body.sourceLanguage) {
        return res.send("source language input is not valid")
    }
    if (!req.body.targetLanguage) {
        return res.send("target language input is not valid")
    }
    if (!req.body.text) {
        return res.send("text input is not valid")
    }
    next();
};
