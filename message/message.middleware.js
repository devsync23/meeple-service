import fs from "fs"
import jwt from 'jsonwebtoken'

export function authenticateUserMessages(req, res, next) {
    console.log(req);
    const token = req.headers.authorization
    try {
        const userData = jwt.verify(token, "shhhhhh")
        req.user = userData
        console.log("userData>>>>>>>>>>:", userData)
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
        res.send('data not valid')
    }
    // req.user = user_email
    // console.log(user_email)
    next()
}
