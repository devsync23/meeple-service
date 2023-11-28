import express from 'express'
import userRouter from './users/user.routes.js'

const app = express()
const port = 3000

app.use('/users', userRouter)

app.listen(port, () => {
  console.log('app is listening on port: ', port)
})