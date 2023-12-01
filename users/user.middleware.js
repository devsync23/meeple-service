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

    if (!newUserData.email) {
        return res.send('Email is invalid')
    }
    if (!newUserData.password) {
        return res.send('Password is invalid')
    }
    if (!newUserData.phone) {
        return res.send('Phone Number is invalid')
    }
    if (!newUserData.age) {
        return res.send('Age is invalid')
    }
    if (!newUserData.name) {
        return res.send('Name is invalid')
    }
    next()
}

export async function validateLoginData(req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.send(`email or password are empty`)
    }
    if (!req.body.email.includes("@") || !req.body.email.includes('.com')) {
        return res.send('email is not a valid entry')
    }
    let existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if (!existingUsers[req.body.email]) {
        return res.send('Email is not valid')
    }
    req.user = existingUsers[req.body.email]
    next();
}