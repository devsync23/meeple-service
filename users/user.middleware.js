import { users } from './user.controller.js'

export function validateUserPost(req, res, next) {
  const newUser = req.body;
  if (!newUser.email || !newUser.name) {
    return res.status(400).send('missing fields from the middleware')
  }
  if (users.some((user) => user.email === newUser.email)) {
    return res.status(400).send(`user with ${newUser.email} already exists, from the middleware`)
  }
  next()
}