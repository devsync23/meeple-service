import fs from 'fs';
import bcrypt from 'bcrypt'

export async function registerUser(req, res) {
    const newUserData = req.body

    const formattedUserData = {
        [newUserData.email]: {
            password: newUserData.password,
            name: newUserData.name,
            age: newUserData.age,
            phoneNumber: newUserData.phoneNumber,
            verified: false,
        }
    }
    // reads the existing users from the json files
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if (existingUsers[newUserData.email]) {
        res.status = 404;
        return res.send(`${newUserData.email} user already exists`)
    }

    const updatedUserList = {
        ...existingUsers,
        ...formattedUserData
    }
    // 2 arguements for writeFileSync
    // write - over writes the file
    // appends - adds onto the file
    // 1st - path, 2nd - the data that you're sending into the file
    fs.writeFileSync('./users/users.json', JSON.stringify(updatedUserList, null, 4))
    res.send("you registered your user!")
}

export async function userLogin(req, res) {
    const userLoginData = req.body
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    const passwordCheck = await bcrypt.compare(userLoginData.password, existingUsers[userLoginData.email].password)
    if (existingUsers[userLoginData.email] && passwordCheck) {
        return res.send("you have sucessfully logged in!")
    }
    res.status = 404;
    return res.send(`password to email: ${userLoginData.email} is incorrect`)
}

export function createMessage(req, res) {
    res.send("you sucessfully created a message")
}