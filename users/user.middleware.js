
export function validateRegisterData(req, res, next) {
    console.log('hello from middleware!')
    next()
}

export function validateLoginData(req, res, next) {
    console.log('hello from middleware 2')
    next()
}
