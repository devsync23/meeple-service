import fs from "fs"

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
    next()
}
