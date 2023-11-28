import express from "express";
import { registerUser } from './user.controller.js'
import { loginUser } from './user.controller.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router
