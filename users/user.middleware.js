import fs from 'fs'
import bcrypt from 'bcrypt'

export async function hashUserPass(req, res, next) {
    const hashedPassword = req.body.password
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(hashedPassword, saltRounds)
    req.body.password = hashedPass

    next()
}

export function validateRegisterData(req, res, next) {
    const newUserData = req.body

    console.log('hello from the middleware!')
    if (!req.body.email
        || !req.body.password
        || !req.body.age
        || !req.body.name
        || !req.body.phone ) {
        return res.send('email is not valid')
    }

    next()
}

export function validateLoginData(req, res, next) {
    if (!req.body.email
        || !req.body.password
        ) {
        return res.send('email or password is not valid')
    }
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if(!existingUsers[req.body.email]){
        return res.send(`Could not login with email ${req.body.email}`)
    }else {
        req.userToLogin = existingUsers[req.body.email]
    }
    next()
}
