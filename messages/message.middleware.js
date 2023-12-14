import fs from "fs"
import jwt from 'jsonwebtoken'

export async function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        req.user = userData
    } catch (err) {
        return res.send(400, "oops, something's wrong, could not authenticate user")
    }
    next()
}

export function validateUserMessages(req, res, next) {
    let message = req.body;
    if (!message.text){
        res.send({error: true, message: 'Invalid message text'})
    }
    if (!message.sourceLanguage){
        res.send({error: true, message: 'Invalid message source language'})
    }
    if (!message.targetLanguage){
        res.send({error: true, message: 'Invalid message target language'})
    }
    if (!message.formality){
        res.send({error: true, message: 'Invalid message formality'})

    }
    next()
}
