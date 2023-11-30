import fs from "fs"
import bcrypt from 'bcrypt'

export async function hashUserPass(req, res, next) {
    // hash the users password
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    // update the req.body.password field to be the new hashed password
    req.body.password = hashedPass
    next()
}

export function validateRegisterData(req, res, next) {
    const newUserData = req.body;

    if (!newUserData.email){
        return res.send('Email is invalid')
    }
    if (!newUserData.password){
        return res.send('Password is invalid')
    }
    if (!newUserData.phone){
        return res.send('Phone Number is invalid')
    }
    if (!newUserData.age){
        return res.send('Age is invalid')
    }
    if (!newUserData.name){
        return res.send('Name is invalid')
    }
    next()
}

export function validateLoginData(req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.send('Email or password are not present')
    }
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if (!existingUsers[req.body.email]) {
        return res.send(`Could not login with email ${req.body.email}`)
    } else {
        req.userToLogin = existingUsers[req.body.email]
    }
    next()
}
