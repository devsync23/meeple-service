import fs from "fs"
import jwt from 'jsonwebtoken'

export async function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization
    const isVerified = await jwt.verify(token, "shhhhhh")
    // when the jwt is verified and decrypted,
    // it gives us the user data object
    // then we append this object into the request object to pass on
    req.user = isVerified
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
