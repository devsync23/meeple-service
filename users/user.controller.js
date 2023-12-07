import fs from "fs"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export function registerUser(req, res) {
    const newUserData = req.body
    console.log(req.body)
    const formattedUserData = {
        [newUserData.email]: {
            name: newUserData.name,
            password: newUserData.password,
            age: newUserData.age,
            phone: newUserData.phone,
            verified: false,
        }
    }

  // reads the existing users from the json files
    const existingUsersJson = fs.readFileSync('./users/users.json', 'utf8');
    const existingUsers = JSON.parse(existingUsersJson)
    if (existingUsers[newUserData.email]) {
        res.status = 400
        return res.send(`${newUserData.email} has already been registered`)
    }

  // combine existing users with new user
    const updatedUsersData = {
        ...existingUsers,
        ...formattedUserData
    }

    fs.writeFileSync('./users/users.json', JSON.stringify(updatedUsersData, null, 4))
  // JSON.stringify(
            // value,
            // replacer - specifies properties of 'value' to be included in the input,
            // space - insert white space into the output JSON string for readability)
    res.send(`you registered your user profile! ${newUserData.name}`)
}

/*
What does it mean to login? Authenticate a user

1. Ensure the user exists in our datastore
2. Passwords match: compare the request password with the password saved in the datastore
3. JWT generated and sent as a response to the client

*/

export async function userLogin(req, res) {
    const { email, password } = req.body;
    const existingUser = req.user;
    const doPasswordsMatch = await bcrypt.compare(password, existingUser.password)
    if (!doPasswordsMatch) {
        res.status = 400;
        return res.send("login unsucessful")
    } else
    // generate a JWT
    delete existingUser.password;
    const signedJWT = jwt.sign({...existingUser, email }, process.env.JWT_SECRET);
    res.send(signedJWT); // not the most secure as is - ideally don't include password to send to client(s)
}
