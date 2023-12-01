import fs from 'fs'
import bcrypt from 'bcrypt'
export async function hashUserPass(req, res, next) {
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    const hashedPass = await bcrypt.hash(myPlaintextPassword, saltRounds)
    req.body.password = hashedPass
    next()
}
export function validateRegisterData(req, res, next) {
    if (!req.body.email
        || !req.body.password
        || !req.body.age
        || !req.body.name
        || !req.body.phone
    ) {
        return res.send('data is not valid')
    }

    next()
}

export function validateLoginData(req, res, next) {
    const existingUsersJson = fs.readFileSync('./users/users.json', 'utf8')
    const existingUsers = JSON.parse(existingUsersJson)
    if (!existingUsers[req.body.email]) {
        return res.send('could not be logged in')
    } else {
        req.user = existingUsers[req.body.email]
    }
    if (!req.body.email || !req.body.password) {
        return res.send('email and password are required to log in')
    }

    next()
}
