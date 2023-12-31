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
    if (!req.body.sourceLanguage
        || !req.body.targetLanguage
        || !req.body.text
        ) {
        res.send(400, 'data not valid')
    }
    // req.user = user_email
    // console.log(user_email)
    next()
}
