
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
    console.log('hello from the middleware2')
    next()
}
