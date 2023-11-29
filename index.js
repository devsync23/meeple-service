import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './users/user.routes.js'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/users', userRouter)


// express ROUTE
// comprised of 3 things:
// .METHOD() ---> HTTP method
// endpoint aka path
// handler aka controller
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

app.listen(port, () => {
  console.log('app is listening on port: ', port)
})
