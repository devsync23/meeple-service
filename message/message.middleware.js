import fs from "fs"
import jwt from 'jsonwebtoken'

export async function authenticateUserMessages(req, res, next) {
    console.log(req);
    const token = req.headers.authorization
    const isVerified = await jwt.verify(token, "shhhhh")
    console.log(isVerified)
    next()
}

export function validateUserMessages(req, res, next) {

}
