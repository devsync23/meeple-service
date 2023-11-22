export const users = [
  {
    id: 1,
    name: "JB",
    email: "jb@jb.com"
  },
  {
    id: 2,
    name: "Daniel",
    email: "DanTheMan.com"
  },
  {
    id: 3,
    name: "Andrew",
    email: "Andrew.com"
  },
  {
    id: 4,
    name: "Dan Wang",
    email: "Dan.com"
  },
]

export function addUserToUsersList(req, res, next) {
  console.log('next() called me!')
  const newUser = req.body
  users.push(newUser)
  res.send(users)
}

export function getUserById(req, res) {
  const user = users.find(user => user.id === Number(req.params.userId))
  if (!user) {
    res.status(404).send('Could not find user with id: ' + req.params.userId)
  }
  res.send(user)
}


export function getUsers(req, res) {
  res.send(users)
}