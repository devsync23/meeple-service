import  express from "express";
import { registerUser, userLogin } from "./user.controller.js";

const router = express.Router()

function ourFirstMiddleware(req, res, next) {
    console.log('hello from middleware')
    next()
}
router.post('/register', ourFirstMiddleware, registerUser)
router.post('/login', userLogin)

export default router
