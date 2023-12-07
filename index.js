<<<<<<< HEAD
import express from 'express'
import userRouter from './users/user.routes.js'
import messageRouter from './messages/message.routes.js'
import bodyParser from 'body-parser'
=======
import express from "express"
// import { registerUser } from "./users/user.controller.js"
import bodyParser from "body-parser"
import userRouter from "./users/user.routes.js"
import messageRouter from "./messages/message.routes.js"


// express library imported from node_modules
// app is a running express app
// app is an object, once express() is invoked, creates an instance of / creates an object of some specific type or interface
// type of object is type express - though we don't currently have types in this project


const app = express() // creates server
// const router = express.Router()
const port = 3000 // gives server port number
// process.env.PORT points to .env file & looks at the PORT key
>>>>>>> 1c29e4f2a798be21aacacb490f1d146d7eedc688


app.use(bodyParser.json())
app.use("/users", userRouter)
app.use("/messages", messageRouter)

// .listen method turns server on
app.listen(port, () => {
  console.log('app is listening on port: ', port)
})


// express ROUTE
// comprised of 3 things:
// .METHOD() ---> HTTP method
// endpoint aka path
// handler aka controller

// // for reference, examples of different requests
// app
//   .get('/', (req, res) => {
//     res.send('Hello team!')
//   })
//   .post('/', (req, res) => {
//     res.send('you sent a post request!')
//   })
//   .put('/', (req, res) => {
//     res.send('put request received')
//   })
//   .delete('/', (req, res) => {
//     res.send('you sent a delete request. DELETE THIS!')
//   })