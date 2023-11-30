import fs from "fs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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


/**
 * 
 * 
1. ensure the user exists in our data store
2. passwords match: 
    compare the request password with the password saved in the datastore
3. jwt generated and sent as a response to the client 
 
*/
export async function userLogin(req, res) {
    const { email, password } = req.body
    const existingUser = req.userToLogin
    const doPasswordsMatch = await bcrypt.compare(password, existingUser.password)
    if (doPasswordsMatch) {
        // generate a JWT
        delete existingUser.password
        const signedJWT = jwt.sign(existingUser, "shhhhhh")
        res.send(signedJWT)
    } else {
        res.send("could not log in")
    }
}
