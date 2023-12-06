import fs from "fs"
import jwt from 'jsonwebtoken'
import { translateText } from "../translate-api.js"

export async function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization
    const isVerified = await jwt.verify(token, "shhhhhh")
    req.user = isVerified;
    next()
}

export function validateUserMessages(req, res, next) {
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf8'))
    const newMessage = req.body
    if (!newMessage.text || !newMessage.sourceLanguage || !newMessage.targetLanguage) {
        return res.send("please fill in all fields")
    }
    if (!existingUsers[newMessage.author_id]) {
        return res.send("user does not exist")
    }
    req.body.createdAt = Date.now()
    next()
}

export function appendTranslatedText(req, res, next) {
    const newMessage = req.body
    req.body.translation = translateText(newMessage)
    console.log(req.body)
    next()
}