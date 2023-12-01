import bcrypt from 'bcrypt'
import fs from "fs"

export async function hashUserPass(req, res, next) {
    // update the request body password field
    // to be the hashed password
    const saltRounds = 10;
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    next();
}

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
    const loginData = req.body;
    if(!loginData.email){
        return res.send('Email is invalid')
    }
    if(!loginData.password){
        return res.send('Password is invalid')
    }
    let existingUserData = JSON.parse(fs.readFileSync('./users/users.json', 'utf8'))
    let loginUser = existingUserData[loginData.email]
    if (!loginUser){
        return res.send(`Login invalid`)
    }
    // altering the req.body value to be now the exisiting loginUser
    req.user = loginUser;
    next()
}


// export function isEmailValid(email) {
//     let regex = /@/g;
//     if(email.match(regex).length !== 1){
//         return false;
//     }
//     else{
//         let arr = email.split('@');
//     }
// }

// {
//     "name": "Danny",
//     "age": 21,
//     "phone" : 4228589990,
//     "email": "aaff@jb.com",
//     "password": "1234"
// }

// {
//     "email": "aaff@jb.com"
//     "password": "1234"
// }
