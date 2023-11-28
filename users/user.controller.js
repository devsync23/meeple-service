import fs from 'fs'

export function registerUser(req, res) {
  const newUserData = req.body
  const formattedUserData = {
    [newUserData.email]: {
      name: newUserData.name,
      password: newUserData.password,
      age: newUserData.age,
      verified: false,
    }
  }
  fs.writeFileSync('./users/users.json', JSON.stringify(formattedUserData, null, 4))
  
  res.send("you registered your user!")
}

export function userLogin(req, res) {
  const body = req.body
  console.log(req.body)
  res.send({})
}