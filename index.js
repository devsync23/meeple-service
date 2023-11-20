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
  }
]

function handleGetUsers(req, res) {
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

app
  .route('/users')
    .get(handleGetUsers)
    .post(validateUserPost, addUserToUsersList)
  


app.listen(port, () => {
  console.log('app is listening on port: ', port)
})