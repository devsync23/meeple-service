import fs from 'fs'
export function registerUser(req, res) {
    const newUserData = req.body
    const formattedUserData = {
        [newUserData.email]: {
            name: newUserData.name,
            password: newUserData.password,
            age: newUserData.age,
            phone: newUserData.phone,
            verified: false

        }
    }
    // reads the existing users from the json files
    const existingUsersJson = fs.readFileSync('./users/users.json', 'utf8')
    const existingUsers = JSON.parse(existingUsersJson)
    if (existingUsers[newUserData.email]) {
        res.status = 400
        res.send('user already exists')
    }

    const updatedUserData = {
        ...existingUsers,
        ...formattedUserData
    }

    fs.writeFileSync('./users/users.json', JSON.stringify(updatedUserData, null, 4))
    res.send('hurray you registered')
    // console.log(exsitingUsers[newUserData.email])
}

export function userLogin(req, res) {
    const  body  = req.body
    console.log(req.body)
    res.send({})
}
