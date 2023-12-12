import fs from "fs"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export function registerUser(req, res) {
    const newUserData = req.body;
    const formattedUserData = {
        name: newUserData.name,
        password: newUserData.password,
        age: newUserData.age,
        phone: newUserData.phone,
        verified: false
    }

    let existingUserData = JSON.parse(fs.readFileSync('./users/users.json', 'utf8'))

    // if a user with that email already exists, throw error
    if (existingUserData[newUserData.email]) {
        res.status = 404;
        return res.send({error: true, message: `${newUserData.email} has already been registered`})
    }

    existingUserData[newUserData.email] = formattedUserData
    fs.writeFileSync('./users/users.json', JSON.stringify(existingUserData, null, 4))
    res.send({newUserData})
}

export async function userLogin(req, res) {
    const loginData = req.body
    const existingUser = req.user
    const passwordCheck = await bcrypt.compare(loginData.password, existingUser.password)
    if (!passwordCheck) {
        res.status = 400;
        return res.send({error: true, message: "login unsucessful"})
    }
    delete existingUser.password
    const signedJWT = jwt.sign({...existingUser, email: loginData.email}, process.env.JWT_SECRET)
    return res.send({jwt: signedJWT})
}
