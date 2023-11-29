import fs from 'fs'
import bcrypt from 'bcrypt'

export function registerUser(req, res){
    const newUserData = req.body;
    console.log(req.body)
    const formattedUserData = {
        [newUserData.email]: {
            name: newUserData.name,
            password: newUserData.password,
            age: newUserData.age,
            phone: newUserData.phone,
            verified: false
        }
    }

    let existingUserData = JSON.parse(fs.readFileSync('./users/users.json', 'utf8'))
    if(existingUserData[newUserData.email]){
            res.status = 404;
            return res.send(`${newUserData.email} has already been registered`)
    }
    // if the above condition is trigger, the following codes wont be triggered
    existingUserData = {...existingUserData, ...formattedUserData }
    fs.writeFileSync('./users/users.json', JSON.stringify(existingUserData, null, 4))
    res.send(`you registered your user profile! ${newUserData.name}`)
}

export function loginUser(req, res){
    const body = req.body
    const userName = body.name
    res.send(`you have successfully logged in! ${body.name}`)
}
