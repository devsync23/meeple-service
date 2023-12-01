import fs from 'fs'
import jwt from 'jsonwebtoken'
export function registeredUserMessages (req, res, next) {
    const token = req.headers.authorization
    console.log(token)
    const signedJWT = jwt.verify(token, 'shhhhhh')
    req.user = signedJWT
    console.log(req.user)
    next()
}
export function validateMessage(req, res, next) {
    if (!req.body.text
        || !req.body.sourceLanguage
        || !req.body.targetLanguage
    ) {
        res.send('one or more fields are missing')
        }
    next()
}
