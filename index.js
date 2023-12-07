import "dotenv/config.js" // needs to be above the user & message router imports to work
import express from "express"
// import { registerUser } from "./users/user.controller.js"
import bodyParser from "body-parser"
import userRouter from "./users/user.routes.js"
import messageRouter from "./messages/message.routes.js"



// express library imported from node_modules
// app is a running express app
// app is an object, once express() is invoked, creates an instance of / creates an object of some specific type or interface
// type of object is type express - though we don't currently have types in this project


const app = express()
const port = 3000

app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/messages", messageRouter);

// .listen method turns server on
app.listen(port, () => {
  console.log("app is listening on port: ", port);
  console.log(process.env);
});


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
