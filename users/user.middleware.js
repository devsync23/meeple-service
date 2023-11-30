import fs from "fs"
import bcrypt from "bcrypt"

export async function hashUserPass(req, res, next) {
    // hash the user's password
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(req.body.password, saltRounds); // or just (req.body.password, 10) w/o const saltRounds
    // update the req.body.password field to be the new hashed password
    req.body.password = hashedPass;
    // console.log(req.body.password); // should now be hashed
    next();
}

export function validateRegisterData(req, res, next) {
    /*
    make sure  the request data has:
    - email
    - password
    - phoneNumber
    - age
    - name
    */

    // // one method:
    // if (
    //     !req.body.email
    //     || !req.body.password
    //     || !require.body.phoneNumber
    //     || !require.body.age
    //     || !require.body.name
    // ) {
    //     return res.send("could not register user")
    // }

    // alternately: this is more client-friendly + more specific about what's invalid
    console.log("hellooOOOOOOooOOOO?????????? :(")
    if (!req.body.email) {
        return res.send("email is not valid")
    }
    if (!req.body.password) {
        return res.send("password is not valid")
    }
    if (!req.body.phoneNumber) {
        return res.send("phone number is not valid")
    }
    if (!req.body.age) {
        return res.send("age is not valid")
    }
    if (!req.body.name) {
        return res.send("name is not valid")
    }
    next();
}

export function validateLoginData(req, res, next) {
    console.log('hello from middleware 2')
    next();
}
