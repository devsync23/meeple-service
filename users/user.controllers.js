import fs from "fs"

export function registerUser(req, res){
    const newUserData = req.body

    const formattedUserData = {
        [newUserData.email]: {
            password: newUserData.password,
            age: newUserData?.age,
            verified: false
        }
    }
    if(fs.readFileSync('./users/users.json').length === 0){
        fs.writeFileSync('./users/users.json', JSON.stringify(formattedUserData, null, 4))
        res.send(`you registered your user profile! ${newUserData.name}`)
    }
    else{
        let newUserData = JSON.parse(fs.readFileSync('./users/users.json', 'utf8'))
        // console.log(newUserData,formattedUserData)
        newUserData ={...newUserData,...formattedUserData }
        fs.writeFileSync('./users/users.json', JSON.stringify(newUserData, null, 4))
        res.send(`you registered your user profile! ${newUserData.name}`)
    }
}

export function userLogin(req, res){
    const body = req.body
    const userName = body.name
    res.send(`you have successfully logged in! ${body.name}`)
}

export function validateUser(req, res, next){
    const newUser = req.body;
    next()
}
