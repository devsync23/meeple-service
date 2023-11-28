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

  // reads the existing users from the json files
  const existingUsers = fs.readFileSync('./users/users.json', 'utf8');
  if (existingUsers[newUserData.email]) {
    res.status = 400
    return res.send("user already exists")
  }

  // combine existing users with new user
  const updatedUsersData = {
    ...existingUsers,
    ...newUserData
  }

  fs.writeFileSync('./users/users.json', JSON.stringify(updatedUsersData, null, 4))
  
  res.send("you registered your user!")
}

export function userLogin(req, res) {
  const body = req.body
  console.log(req.body)
  res.send({})
}