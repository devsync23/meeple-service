import 'dotenv/config'
import express from 'express'
import userRouter from './users/user.routes.js'
import messageRouter from './messages/message.routes.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use("/users", userRouter)
app.use("/messages", messageRouter)

// .listen method turns server on
app.listen(port, () => {
  console.log('app is listening on port: ', port)
  console.log(process.env)
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
