const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

// express ROUTE
// comprised of 3 things:
// .METHOD() ---> HTTP method
// endpoint aka path
// handler aka controller

/** health check endpoints */
app.route('/')
  .get((req, res) => {
    res.send('server is healthy')
  })
  .post((req, res) => {
    res.send('you sent a post request!')
  })
  .put((req, res) => {
    res.send('put request received')
  })
  .delete((req, res) => {
    res.send('you sent a delete request. DELETE THIS!')
  })

const users = [
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

function getUsers(req, res) {
  res.send(users)
}

function validateUserPost(req, res, next) {
  const newUser = req.body;
  if (!newUser.email || !newUser.name) {
    return res.status(400).send('missing fields from the middleware')
  }
  if (users.some((user) => user.email === newUser.email)) {
    return res.status(400).send(`user with ${newUser.email} already exists, from the middleware`)
  }
  next()
}

function addUserToUsersList(req, res, next) {
  console.log('next() called me!')
  const newUser = req.body
  users.push(newUser)
  res.send(users)
}

function getUserById(req, res) {
  console.log(typeof req.params.userId)
  const user = users.find(user => user.id === Number(req.params.userId))
  if (!user) {
    res.status(404).send('Could not find user with id: ' + req.params.userId)
  }
  res.send(user)
}

app
  .route('/users')
    .get(getUsers)
    .post(validateUserPost, addUserToUsersList)

app
  .route('/users/:userId')
    .get(getUserById)


app.listen(port, () => {
  console.log('app is listening on port: ', port)
})