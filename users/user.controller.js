import fs from 'fs';

export function registerUser(req, res) {
    const newUserData = req.body
    const { email, username, password, age } = newUserData
    const formattedUserData = {
        [email]: {
            password: password,
            username: username,
            age: age,
            verified: false,
        }
    }
    // reads the existing users from the json files
    const existingUsers = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'))
    if (existingUsers[email]) {
        res.status = 404;
        return res.send("user already exists")
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

export function userLogin(req, res) {
    // const { body } = req
    res.send("you have sucessfully logged in!")
}

export function createMessage(req, res) {
    res.send("you sucessfully created a message")
}