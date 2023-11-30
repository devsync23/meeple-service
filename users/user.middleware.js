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
    if (!req.body.email || !req.body.password) {
        return res.send('email and password are required to log in')
    }
    next()
}
