import express from 'express'
import userRouter from './users/user.routes.js'
import messageRouter from './messages/message.routes.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/users', userRouter)
app.use('/messages', messageRouter)

app.listen(port, () => {
  console.log('app is listening on port: ', port)
})
