import express from "express";
import { registerUser } from './user.controller.js'
import { loginUser } from './user.controller.js'
import { hashUserPass, validateRegisterData, validateLoginData } from "./user.middleware.js";

const router = express.Router()

router.post('/register', validateRegisterData, hashUserPass, validateLoginData, registerUser)
router.post('/login', validateLoginData, loginUser)

export default router
