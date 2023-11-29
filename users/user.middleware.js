export function validateRegisterData(req, res, next) {
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
