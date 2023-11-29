import express from "express";
import { registerUser } from './user.controller.js'
import { loginUser } from './user.controller.js'
import { validateRegisterData, validateLoginData } from "./user.middleware.js";

const router = express.Router()

router.post('/register', validateRegisterData, validateLoginData, registerUser)
router.post('/login', loginUser)

export default router
