import express from 'express'
import bodyParser from 'body-parser'
import {
  addUserToUsersList,
  getUsers,
  getUserById
} from './users/user.controller.js'
import { validateUserPost } from './users/user.middleware.js'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.route('/users')
  .get(getUsers)
  .post(validateUserPost, addUserToUsersList)

app.route('/users/:userId')
  .get(getUserById)


app.listen(port, () => {
  console.log('app is listening on port: ', port)
})