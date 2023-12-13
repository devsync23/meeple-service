import 'dotenv/config'
import express from 'express'
import userRouter from './users/user.routes.js'
import messageRouter from './messages/message.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
  console.log('req.headers --->', req.headers)
  console.log('req.url --->', req.url)
  console.log({ req_method: req.method })
  console.log({ req_body: req.body })
  next()
})
app.use("/users", userRouter)
app.use("/messages", messageRouter)

// .listen method turns server on
app.listen(port, () => {
  console.log('app is listening on port: ', port)
})
