import fs from "fs"
import jwt from 'jsonwebtoken'

export async function authenticateUserMessages(req, res, next) {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization
    const isVerified = await jwt.verify(token, "shhhhhh")
    // console.log(isVerified)
    req.user = isVerified
    next()
}

export function validateUserMessages(req, res, next) {
    next()
}
