import fs from "fs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export function registerUser(req, res){
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

export async function userLogin(req, res){
    let loginUser = req.user
    const passwordMatching = await bcrypt.compare(req.body.password, loginUser.password);
    if(passwordMatching){
        // console.log(existingUserData[req.body.email].name);
        delete loginUser.password
        const signedJWT = jwt.sign(loginUser,"shhhh")
        console.log(signedJWT)
        return res.send(`you have successfully logged in! ${loginUser.name}\n
        Below is your user profile:\n
        Age: ${loginUser.age}\n
        Phone: ${loginUser.phone}\n
        verified status: ${loginUser.verified}`)
    }
    else{
        return res.send(`Login invalid`)
    }
}
