import fs from 'fs'

export function registerUser(req, res) {
    const newUserData = req.body
    const formattedUserData = {
        [newUserData.email]: {
            name: newUserData.name,
            password: newUserData.password,
            age: newUserData.age,
            phone: newUserData.phone,
            verified: false,
        }
    }
    fs.writeFileSync('./users/users.json', JSON.stringify(formattedUserData, null, 4))
    res.send('you registered a user!')
}

export function loginUser(req, res) {
    res.send('you logined!')
}
