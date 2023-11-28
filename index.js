import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './users/user.route.js'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/users', userRouter)

app.listen(port, () => {
  console.log('app is listening on port: ', port)
})