import bcrypt from 'bcrypt'
export async function hashUserPass(req, res, next) {
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    const hashedPass = await bcrypt.hash(myPlaintextPassword, saltRounds)
    req.body.password = hashUserPass
    next()
}
export function validateRegisterData(req, res, next) {
    if (!req.body.email
        || !req.body.password
        || !req.body.age
        || !req.body.name
        || !req.body.phonebn
    ) {
        return res.send('data is not valid')
    }

    next()
}

export function validateLoginData(req, res, next) {
    console.log('hello from middleware 2')
    next()
}
