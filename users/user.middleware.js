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
    if (!req.body.email) {
        return res.send({error: true, message: "email is not valid"})
    }
    if (!req.body.email.includes("@") || !req.body.email.includes('.com')) {
        return res.send({error: true, message: "email is not a valid entry"})
    }
    if (!req.body.password) {
        return res.send({error: true, message: "password is not valid"})
    }
    if (!req.body.phone) {
        return res.send({error: true, message: "phone number is not valid"})
    }
    if (!req.body.age) {
        return res.send({error: true, message: "age is not valid"})
    }
    if (!req.body.name) {
        return res.send({error: true, message: "name is not valid"})
    }
    next();
}

export function validateLoginData(req, res, next) {
    if (!req.body.email) {
        return res.send({error: true, message: 'missing email'})
    }
    if (!req.body.email.includes("@") || !req.body.email.includes('.com')) {
        return res.send({error: true, message: 'email is not a valid entry'})
    }
    let existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if (!existingUsers[req.body.email]) {
        return res.send({error: true, message: `Could not login with email ${req.body.email}`})
    }
    if (!req.body.password) {
        return res.send({error: true, message: "password is not valid"})
    }

        // remember: req & res are middleware objects, they all have access to these
        // adding user key to req {}
    req.user = existingUsers[req.body.email]
    console.log(req.user);
    next();
}
