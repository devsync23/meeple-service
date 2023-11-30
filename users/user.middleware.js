import bcrypt from 'bcrypt'

export function validateRegisterData(req, res, next) {
    const newUserData = req.body
    if (!newUserData.email
        || !newUserData.password
        || !newUserData.phoneNumber
        || !newUserData.age
        || !newUserData.name) {
        return res.send('registration details are not completely filled in')
    }
    next();
}

export function validateLoginData(req, res, next) {
    if (req.body.email === null || req.body.password === null) {
        return res.send(`email and password are not filled in`)
    }
    if (!req.body.email.includes("@") || !req.body.email.includes('.com')) {
        return res.send('email is not valid')
    }
    next();
}

export async function hashUserPass(req, res, next) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPassword
    console.log(hashedPassword)
    next();
}