
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
    console.log('hello from middleware 2')
    next()
}
