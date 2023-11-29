import fs from 'fs'

export function registerUser(req, res) {
    // res.send("you registered your user")
    const newUserData = req.body
    const formattedUserData = {
        [newUserData.email]: {
            name: newUserData.name,
            password: newUserData.password,
            age: newUserData.age,
            verified: false
        }
    }
    // console.log(formattedUserData)
    fs.writeFileSync('./users.json', JSON.stringify(formattedUserdata, null, 4))
    // JSON.stringify(
            // value,
            // replacer - specifies properties of 'value' to be included in the input,
            // space - insert white space into the output JSON string for readability)
    res.send("you registered your user!")
}

export function loginUser(req, res) {
    const body = req.body
    console.log(req.body.email)
    res.send({})
    // get the req data and save it to some variable
}
